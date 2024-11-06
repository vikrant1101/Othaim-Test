'use client';
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/internalLayout';
import Image from 'next/image';
import Styles from './index.module.scss';
import SocialShare from '../newsShare';
import Divider from '@/components/Divider';
import Loader from '@/components/Loader';
type SingleNewsProps = {
    params: { locale: string; slug: string };
};
const SingleNews = ({ params }: SingleNewsProps) => {
    const { locale, slug } = params;
    const [pageData, setPageData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSingleNews = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news/${slug}`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            os: 'android',
                        },
                    }
                );

                if (!res.ok) throw new Error('Failed to fetch news');

                const data = await res.json();

                if (data) {
                    setPageData(data);
                } else {
                    setError('Article not found');
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSingleNews();
    }, [slug]);

    return (
        <PageLayout
            BreadcrumbData={[
                { url: '/', title: 'Home' },
                { url: '/news', title: 'News' },
                { url: '', title: pageData?.id },
            ]}
        >
            <div className={Styles.loaderWrapMain}>
                {isLoading ? <div className={Styles.loaderWrap}> <Loader size={'Medium'} className={Styles.loaderActive} /> </div> : null}
                {pageData ? (
                    <div className={`containerXL newsMain innerSpace pt0 `}>

                        <div className={Styles.singleBannerImagePanel}>
                            <Image
                                src={pageData?.pic}
                                alt={pageData?.title}
                                height={256}
                                width={184}
                            ></Image>
                        </div>

                        <div className={`${Styles.singleNewsDescriptionPanel}  `}>
                            <div
                                className={`${Styles.singleNewsTitlePanel} rowFlex gap30 justifyContentBetween alignItemsCenter`}
                            >
                                <div className={Styles.singleCalender}>
                                    <div className="columnAuto gap16 dFlex alignItemsCenter">
                                        <span className="icon-calendar-alt"></span>
                                        <p>{pageData?.date}</p>
                                    </div>
                                </div>

                                <div
                                    className={`${Styles.rightTitlePanel} columnXl4 columnMd6 column12`}
                                >
                                    <SocialShare></SocialShare>
                                </div>
                            </div>
                            <div className={Styles.divider}>
                                <Divider isHorizontal />
                            </div>
                            <div className="rowFlex">
                                <div className={`${Styles.leftTitlePanel}  columnMd12 `}>
                                    <div className={Styles.title}>
                                        {pageData?.title && <h1>{pageData?.title}</h1>}
                                        {pageData?.details && <p>{pageData?.details}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>{error}</p>
                )}
            </div>
        </PageLayout>
    );
};

export default SingleNews;
