'use client'
import React, { useEffect } from 'react';
import ButtonLinks from './buttonLinks';
import Language from '@/components/Language';
import { getCookie } from '@/util/getCookie';
const Topheader = ({locale, style, languageCollection, actionCollection, defaultStore }: any) => {
	const channel = new BroadcastChannel('store-channel');
 	const data=async()=>{
		try{
			const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/storeCookie`, {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json',
				},
				body: JSON.stringify({
				  name: 'savedStore',
				  value: defaultStore,
				  title: 'from header',
				}),
			});
			const result = await response.json();
			channel.postMessage('saved-Store');
			channel.close();
		}catch{
		
		}
    }
    useEffect(()=>{
	  const savedStoreCookie = getCookie('savedStore');
	  if(!savedStoreCookie){
		data()
	  }
    },[])
	 
	
  return (
    <div className={style.topheaderContainer}>
      <div className={`containerXL`}>
        <div className={`justifyContentBetween rowFlex ${style.storelocater}`}>
          <div className={style.langues}>
            <Language locale={locale} languageCollection={languageCollection} />
          </div>
          <div className="dFlex gap16">
            <ButtonLinks style={style} actionCollection={actionCollection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topheader;
