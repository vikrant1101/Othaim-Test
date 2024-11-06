'use client';
import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Button from '@/components/Button';
import { UseMediaQuery } from '@/util/hooks/useMediaQuery';
import TextOverflowEllipsis from '@/components/TextEllipse';
import { getCookie } from '@/util/getCookie';
import { useParams } from 'next/navigation';
interface Store {
  StoreName: string;
  Address: string;
  Phone1: string;
  StoreId: number;
  StoreType: string;
}

const BannerCard = ({ tilesCollection, locale }: any) => {
  const params = useParams();
  const curLang = params?.locale;
  const matchMedia = UseMediaQuery('766.99');
  const channel = new BroadcastChannel('store-channel');
  const matches = !!matchMedia;
  const [isLoading, setLoading] = useState(false);
  const [storeData, setStoreData] = useState<Store | null>(null);

  const fetchStores = async (lang: any) => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/store`, {
        headers: {
          language: lang || 'en',
        },
      });
      const allStoreData = await res.json();
      return allStoreData;
    } catch (error) {
      console.error('Error fetching all store data:', error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const getSavedStoreData = async () => {
    const savedStoreCookie = getCookie('savedStore');
    if (savedStoreCookie) {
      try {
        setLoading(true);
        const decodedStore = decodeURIComponent(savedStoreCookie);
        const parsedStore = JSON.parse(decodedStore);
        const storeId = parsedStore?.StoreId;

        if (storeId) {
          const allStores = await fetchStores(curLang);
          if (!allStores || !allStores.stores) {
            console.warn('No store data returned from API');
            return;
          }
          const matchedStore = allStores?.stores.find(
            (store: any) => store.StoreId === storeId
          );
          setStoreData(matchedStore || null);
        }
      } catch (error) {
        console.error('Error decoding or parsing saved store cookie:', error);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    channel.onmessage = (event: any) => {
      if (event?.data == 'saved-Store') {
        getSavedStoreData();
        // window?.location?.reload();
        channel?.close();
      }
    };
  }, [channel, curLang]);

  useEffect(() => {
    getSavedStoreData();
  }, [curLang]);

  return (
    <div className={style.bannerCardMain}>
      <div className="containerXL">
        <div
          dir="ltr"
          className={`rowFlex rowGutters12 ${style.bannerCardTop}`}
        >
          <div className="columnMd3">
            <div className={`${style.bannerCard}`}>
              {(tilesCollection?.tile1?.backgroundImage?.image?.url ||
                tilesCollection?.tile1?.mobileBackground?.image?.url) && (
                  <Image
                    src={`${matches ? tilesCollection?.tile1?.mobileBackground?.image?.url : tilesCollection?.tile1?.backgroundImage?.image?.url}`}
                    width={tilesCollection?.tile1?.backgroundImage?.image?.width}
                    height={
                      tilesCollection?.tile1?.backgroundImage?.image?.height
                    }
                    alt={tilesCollection?.tile1?.backgroundImage?.alt}
                  />
                )}
              <div className={`${style.bannerCardtext} ${style.othaimtext}`}>
                {tilesCollection?.tile1?.title && (
                  <h2 className="h5">{tilesCollection?.tile1?.title}</h2>
                )}
                {tilesCollection?.tile1?.linksCollection?.items.map(
                  (item: any, itemKey: any) =>
                    item?.title && (
                      <Button
                        key={`tilesCollection-${itemKey}`}
                        className={`${style.btn}`}
                        link={item?.url}
                        label={item?.title}
                        showIcon={true}
                        target={item?.target}
                      ></Button>
                    )
                )}
              </div>
            </div>
          </div>
          <div className="columnMd3">
            <div className={`${style.bannerCard}`}>
              {(tilesCollection?.tile2?.backgroundImage?.image?.url ||
                tilesCollection?.tile2?.mobileBackground?.image?.url) && (
                  <Image
                    src={`${matches ? tilesCollection?.tile2?.mobileBackground?.image?.url : tilesCollection?.tile2?.backgroundImage?.image?.url}`}
                    width={tilesCollection?.tile2?.backgroundImage?.image?.width}
                    height={
                      tilesCollection?.tile2?.backgroundImage?.image?.height
                    }
                    alt={tilesCollection?.tile2?.backgroundImage?.alt}
                  />
                )}
              <div className={style.bannerCardtext}>
                {tilesCollection?.tile2?.title && (
                  <h2 className="h5">{tilesCollection?.tile2?.title}</h2>
                )}
                {tilesCollection?.tile2?.linksCollection?.items.map(
                  (item: any, itemKey: any) =>
                    item?.title && (
                      <Button
                        key={`tilesCollection-${itemKey}`}
                        className={`${style.btn}`}
                        link={item?.url}
                        label={item?.title}
                        showIcon={true}
                        target={item?.target}
                      ></Button>
                    )
                )}
              </div>
            </div>
          </div>
          <div className="columnMd3 cookie">
            <div className={`${style.bannerCard} ${style.bannerLocMain}`}>
              {(tilesCollection?.tile3?.backgroundImage?.image?.url ||
                tilesCollection?.tile3?.mobileBackground?.image?.url) && (
                  <Image
                    src={`${matches ? tilesCollection?.tile3?.mobileBackground?.image?.url : tilesCollection?.tile3?.backgroundImage?.image?.url}`}
                    width={tilesCollection?.tile3?.backgroundImage?.image?.width}
                    height={
                      tilesCollection?.tile3?.backgroundImage?.image?.height
                    }
                    alt={tilesCollection?.tile3?.backgroundImage?.alt}
                  />
                )}
              <div
                className={`${style.bannerCardtext} dFlex justifyContentBetween    `}
              >
                <div className={style.borderBottom}>
                  {tilesCollection?.tile3?.title && (
                    <h2 className="h5">{tilesCollection?.tile3?.title}</h2>
                  )}
                  <div className={style.bannerLoc}>
                    <span className="icon-store-fill"></span>
                    <div className={style.bannerLocText}>
                      {isLoading ? (
                        <p>Loading...</p>
                      ) : (
                        <>
                          <TextOverflowEllipsis>
                            <h6>{storeData?.StoreName}</h6>
                          </TextOverflowEllipsis>
                          <TextOverflowEllipsis>
                            <p>{storeData?.Address}</p>
                          </TextOverflowEllipsis>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className={` alignItemsEnd dFlex ${style.locLink}`}>
                  {tilesCollection?.tile3?.linksCollection?.items.map(
                    (item: any, itemKey: any) =>
                      item?.title && (
                        <Button
                          key={`tilesCollection-${itemKey}`}
                          className={`${style.btn}`}
                          link={item?.url}
                          label={item?.title}
                          showIcon={true}
                          target={item?.target}
                        ></Button>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="columnMd3">
            <div className={`${style.bannerCard} ${style.contactUs}`}>
              {(tilesCollection?.tile4?.backgroundImage?.image?.url ||
                tilesCollection?.tile4?.mobileBackground?.image?.url) && (
                  <Image
                    src={`${matches ? tilesCollection?.tile4?.mobileBackground?.image?.url : tilesCollection?.tile4?.backgroundImage?.image?.url}`}
                    width={tilesCollection?.tile4?.backgroundImage?.image?.width}
                    height={
                      tilesCollection?.tile4?.backgroundImage?.image?.height
                    }
                    alt={tilesCollection?.tile4?.backgroundImage?.alt}
                  />
                )}
              <div
                className={`${style.bannerCardtext} dFlex justifyContentBetween`}
              >
                <div className={`${style.contactUsText}`}>
                  {tilesCollection?.tile4?.title && (
                    <h2 className="h5">{tilesCollection?.tile4?.title}</h2>
                  )}
                  {tilesCollection?.tile4?.subTitle && (
                    <h6>{tilesCollection?.tile4?.subTitle}</h6>
                  )}
                  {/* <Button
                    className={`${style.btn}`}
                    link={'mailTo:wecare@othaimmarkets.com'}
                    label={documentToReactComponents(tilesCollection?.tile4?.description?.json)}
                  ></Button> */}
                  {documentToReactComponents(
                    tilesCollection?.tile4?.description?.json
                  )}
                </div>
                <div className={`alignItemsEnd dFlex ${style.contactLink}`}>
                  {tilesCollection?.tile4?.linksCollection?.items.map(
                    (item: any, itemKey: any) =>
                      item?.title && (
                        <Button
                          key={`tilesCollection-${itemKey}`}
                          className={`${style.btn}`}
                          link={item?.url}
                          label={item?.title}
                          showIcon={true}
                          target={item?.target}
                        ></Button>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
