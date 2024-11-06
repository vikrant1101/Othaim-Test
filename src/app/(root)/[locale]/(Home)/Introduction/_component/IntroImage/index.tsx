'use client'
import React from 'react'
import Image from 'next/image';
import { UseMediaQuery } from '@/util/hooks/useMediaQuery';
import Styles from './index.module.scss';
const IntroImage = ({ imgData, mobImg }: any) => {
    const matchMedia = UseMediaQuery('766.99');
    const matches = !!matchMedia;
    return (
        <>
            <div className="columnLg6">
                <div className={Styles.IntroImage}>
                    {matches ?
                        <Image
                            src={mobImg?.image?.url}
                            alt={mobImg?.alt}
                            width={
                                mobImg?.image?.width
                            }
                            height={
                                mobImg?.image?.height
                            }
                        />
                        :

                        <Image
                            src={imgData?.image?.url}
                            alt={imgData?.alt}
                            width={
                                imgData?.image?.width
                            }
                            height={
                                imgData?.image?.height
                            }
                        />

                    }
                </div>
            </div>
        </>
    )
}

export default IntroImage