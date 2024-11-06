'use client';
import React, { useEffect, useState } from 'react';
import Styles from './index.module.scss';
import Button from '@/components/Button';
import Divider from '@/components/Divider';
import { useParams } from 'next/navigation';
import { getCookie } from '@/util/getCookie';
import useEqualHeight from '@/util/hooks/useEqualHeight';

interface Store {
  StoreName: string;
  Address: string;
  Phone1: string;
  StoreId: number;
  Latitude: string;
  Longitude: string;
}

const StoreCard: React.FC<{ storesData: Store[] }> = ({ storesData }) => {
  const params = useParams();
  const curLang = params?.locale;
  const channel = new BroadcastChannel('store-channel');

  useEqualHeight(['equalcard', 'equalDes', 'equalHead']);

  const [savedStores, setSavedStores] = useState<number | null>(null);
  const [storeData, setStoreData] = useState<Store | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean | null>(false);

  useEffect(() => {
    const savedStoreCookie = getCookie('savedStore');
    if (savedStoreCookie) {
      try {
        const decodedStore = decodeURIComponent(savedStoreCookie);
        setStoreData(JSON.parse(decodedStore) as Store);
      } catch (error) {
        console.error('Error parsing saved store cookie:', error);
      }
    }
  }, [savedStores, curLang]);

  const handleSaveStore = async (store: Store, storeId: number) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/storeCookie`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: 'savedStore',
            value: store,
          }),
        }
      );
      const result = await response.json();
      if (result.success) {
        setSavedStores(storeId);
        setStoreData(store);
        channel.postMessage('saved-Store');
        channel.close();
      } else {
        setSavedStores(null);
      }
    } catch (error) {
      console.error('Error saving store:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetDirections = (latitude: string, longitude: string) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <>
      <div className="containerXL">
        <div className="rowFlex rowGutters12">
          {storesData?.map((itemStores) => {
            if (!itemStores) return null;
            const isSaved = itemStores.StoreId === storeData?.StoreId;

            return (
              <div
                key={itemStores.StoreId}
                className="columnMd6 columnXl4 equalcard"
              >
                <div className={Styles.cardCon}>
                  <div className={`${Styles.cardHeader} dFlex`}>
                    <h6 className="h6 equalHead">{itemStores.StoreName}</h6>
                    <p className="equalDes">{itemStores.Address}</p>
                    <a
                      className={Styles.conNum}
                      href={`tel:${itemStores.Phone1}`}
                    >
                      {itemStores.Phone1}
                    </a>
                    <div>
                      <Button
                        label={
                          curLang === 'ar'
                            ? 'احصل على الاتجاهات'
                            : 'Get Directions'
                        }
                        varient="LinkWithArrow"
                        showIcon={true}
                        className={Styles.getDirec}
                        onClick={() =>
                          handleGetDirections(
                            itemStores.Latitude,
                            itemStores.Longitude
                          )
                        }
                      />
                    </div>
                  </div>
                  <Divider isHorizontal />
                  <div className={Styles.cardFooter}>
                    <div className={`rowFlex rowGutters12 ${Styles.buttonCon}`}>
                      <div className="columnAuto">
                        <Button
                          label={
                            isSaved
                              ? curLang === 'ar'
                                ? 'المتجر المحفوظ'
                                : 'Saved Store'
                              : curLang === 'ar'
                                ? 'الحفظ في متجري'
                                : 'Save as my store'
                          }
                          varient="Primary"
                          type="button"
                          onClick={(e: any) => {
                            e.preventDefault(); // Prevent any default behavior like page jump
                            handleSaveStore(itemStores, itemStores.StoreId);
                          }}
                          className={isSaved ? 'disabled' : ''}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default React.memo(StoreCard);
