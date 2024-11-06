import React from 'react'
import style from './index.module.scss';
import Image from 'next/image';
interface Props {
    title: string;
}

export const InnerBanner: React.FC<Props> = (props: Props) => {
    const title = props?.title
    return (
        <div className={style.InnerBanner}>
            <div className="containerXL">
                <div className={`${style.InnerBannerImg} innerBannerImgAr`}>
                    <div className="rowFlex">
                        <div className="column12">
                            <div className={style.InnerBannerText}>
                                <h1 className='h2'>{title}</h1>
                            </div>
                        </div>
                        {/* <div className='column6'>
                            <div className={style.leafImg}>
                                <Image src="/img/Leaf-green.png" width="358" height="300" alt="" />
                            </div>

                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InnerBanner