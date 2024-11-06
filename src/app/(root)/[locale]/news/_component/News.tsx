'use client';
import React, { Suspense, useEffect, useState } from 'react';
import PageLayout from '@/components/internalLayout';
import Styles from './index.module.scss';
import NewsCard from './newsCard';
import Pagination from '@/components/Pagination';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { getDeviceType } from '@/util/helpers';
import Loader from '@/components/Loader';
import { Metadata } from 'next';

interface NewsData {
  total: number;
  per_page: number;
  data: any[];
}

type NewsProps = {
  locale: string;
};

const News = ({ locale }: NewsProps) => {
  const [allNews, setAllNews] = useState<NewsData>();
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const currentPageNumber = Number(searchParams.get('page')) || 1;
  const pathname = usePathname();
  const { replace } = useRouter();
  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          os: getDeviceType(),
          pageno: currentPageNumber.toString(),
          locale,
        },
      });

      if (!res.ok) throw new Error('Failed to fetch news');
      const data = await res.json();
      setAllNews(data);
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchNews();
  }, [currentPageNumber]);

  const onPageChange = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <>

      <div className={`innerSpace `} >

        <div className="containerXL">
          <div className={`rowFlex rowGutters12 ${Styles.loaderWrapMain}`}>
            {isLoading ? <div className={Styles.loaderWrap}> <Loader size={'Medium'} className={Styles.loaderActive} /> </div> : null}
            {allNews?.data ? <NewsCard allNews={allNews?.data} /> : null}
          </div>
          <div className={`rowFlex rowGutters12`}>
            <div className="columnMd12">
              <Pagination
                totalCount={allNews?.total || 0}
                currentPage={currentPageNumber}
                pageSize={allNews?.per_page || 0}
                onPageChange={onPageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export function GetNews({ locale }: any) {
  return (
    <Suspense>
      <News locale={locale} />
    </Suspense>
  );
}
