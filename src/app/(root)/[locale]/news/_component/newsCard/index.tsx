import React from 'react'
import Styles from './index.module.scss';
import Divider from '@/components/Divider';
import Button from '@/components/Button';
import Image from 'next/image';

const NewsCard = ({ allNews }: any) => {

    return (
        <>
            {allNews &&
                allNews?.map(
                    ({ title, pic, date, id }: any, idx: number) => (
                        <div className='columnMd3'>
                            <div className={Styles.card}>
                                <div className={Styles.cardImage}>
                                    <Image src={pic} alt='news' width={90} height={90} />
                                </div>
                                <div className={Styles.newsCardBottom}>
                                    <div className={`dFlex ${Styles.newsCardDate}`}>
                                        <span className='icon-calendar-alt'></span>
                                        {date && <p>{date}</p>}
                                    </div>
                                    <div className={Styles.newsTitle}>
                                        {title && <h6>{title}</h6>}
                                    </div>
                                    <Divider isHorizontal className={Styles.divider} />
                                    <div className={Styles.readMoreTop}>
                                        <Button link={`/news/${id}`} label={'Read More'} showIcon={true} className={Styles.readMore} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )}
        </>


    )
}

export default NewsCard