'use client';
import Button from '@/components/Button';
import Dropdown from '@/components/DropDown';
import { useForm, Controller } from 'react-hook-form';
import Styles from './index.module.scss';
import { useEffect, useState } from 'react';
import StoreCard from '../storeCard';
import GoogleMapComponent from '../GoogleMapComponent';

const SearchForm = ({ AllStoredata, lang,pagedata}: any) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      selectCity: '',
      selectRegion: '',
      storeType: '',
    },
  });
  const cityName = AllStoredata?.stores
    .map((item: any) => item.CityName)
    .filter(
      (value: any, index: number, self: any[]) => self.indexOf(value) === index
    );
  const StoreType = AllStoredata?.stores
    .map((item: any) => item.StoreType)
    .filter(
      (value: any, index: number, self: any[]) => self.indexOf(value) === index
    );

  const [filteredRegions, setFilteredRegions] = useState([]);
  const [initialStores, setInitialStores] = useState([]);
  const [displayedStores, setDisplayedStores] = useState([]);
  const [visibleStores, setVisibleStores] = useState(6);
  const [curLang, setCurLang] = useState(lang);

  useEffect(() => {
    setCurLang(curLang);
  }, [curLang]);

  useEffect(() => {
    if (AllStoredata?.stores) {
      const initialMapdata = AllStoredata.stores;
      setInitialStores(initialMapdata);
      setDisplayedStores(initialMapdata);
    }
  }, [AllStoredata]);

  const handleCityChange = (city: string) => {
    const regions = AllStoredata?.stores
      .filter((store: any) => store?.CityName === city)
      .map((store: any) => store?.RegionName)
      .filter(
        (region: any, index: any, self: any) => self.indexOf(region) === index
      );
    setFilteredRegions(regions);
  };

  const onSubmit = (data: any) => {
    let filtered = AllStoredata?.stores;
    if (data.selectCity) {
      filtered = filtered.filter(
        (store: any) => store.CityName === data.selectCity
      );
    }
    if (data.selectRegion) {
      filtered = filtered.filter(
        (store: any) => store.RegionName === data.selectRegion
      );
    }
    if (data.storeType) {
      filtered = filtered.filter(
        (store: any) => store.StoreType === data.storeType
      );
    }
    setDisplayedStores(filtered);
    setVisibleStores(6);
  };
  const handleLoadMore = () => {
    setVisibleStores((prev) => prev + 6);
  };
  const storesToDisplay =
    displayedStores.length > 0
      ? displayedStores.slice(0, visibleStores)
      : initialStores.slice(0, visibleStores);

  return (
    <>
      <div className="containerXL">
        <div className={Styles.searchCons}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`rowFlex justifyContentBetween ${Styles.gap30}`}
          >
            <div className="columnMd10">
              <div className={`rowFlex rowGutters12 ${Styles.gap20}`}>
                <div className="columnMd4">
                  <Controller
                    name="selectCity"
                    control={control}
                    render={({ field }) => (
                      <Dropdown
                        id={''} label={pagedata?.items?.[0]?.selectCityText}
                        options={cityName}
                        {...field}
                        onChange={(e: any) => {
                          field.onChange(e);
                          handleCityChange(e);
                        } }                      />
                    )}
                  />
                </div>

                <div className="columnMd4">
                  <Controller
                    name="selectRegion"
                    control={control}
                    render={({ field }) => (
                      <Dropdown
                        id={''} label={pagedata?.items?.[0]?.selectRegionText}
                        options={filteredRegions}
                        {...field}                      />
                    )}
                  />
                </div>

                <div className="columnMd4">
                  <Controller
                    name="storeType"
                    control={control}
                    render={({ field }) => (
                      <Dropdown
                        id={''} label={pagedata?.items?.[0]?.selectStoreTypeText}
                        options={StoreType}
                        {...field}
                        onChange={(e: any) => {
                          field.onChange(e);
                        } }                      />
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="columnMd2 columnSm6 dFlex justifyContentEndMd">
              <Button
                className={Styles.searchBtn}
                label={pagedata?.items?.[0].button?.title}
                varient={pagedata?.items?.[0].button?.variant}
                type={'Submit'}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="container_outter">
        <div className="rowFlex">
		{storesToDisplay && 
            <GoogleMapComponent
              filteredStores={storesToDisplay}
              initialStores={storesToDisplay}
              lang={curLang}
            />
         }
        </div>
      </div>
      <div className={Styles.storeCardsCon}>
        <StoreCard storesData={storesToDisplay} />
        <div className={'column12 justifyContentCenter dFlex'}>
          {visibleStores < displayedStores.length && (
              <Button
                type={'Button'}
                className={Styles.buton}
                varient="Outline"
                onClick={handleLoadMore}
                label={curLang == 'ar' ? 'تحميل المزيد' : 'Load More'}
              />
          )}
        </div>
      </div>
    </>
  );
};

export default SearchForm;
