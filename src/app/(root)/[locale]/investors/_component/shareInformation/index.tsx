import React from 'react';
import Styles from './index.module.scss';
import { useTriangleClass } from '@/util/helpers';
const ShareInformation = ({ stockInfo }: any) => {
    const { date, change, prevClose, open, high, low, volume } = stockInfo;
    const { isNegative } = useTriangleClass(change);
    return (
        <div className="columnMd12">
            <div className={Styles.shareTop}>
                <div className="rowFlex rowGutters12 ">
                    <div className="columnLg3">
                        <div className={Styles.shareTitle}>
                            <h5>Share Information</h5>
                            <p>Abdullah Al Othaim Markets Co.</p>
                            {date && <p>{date}</p>}
                        </div>
                    </div>
                    <div className="columnLg9">
                        <div className="rowFlex rowGutters12 justifyContentBetweenLg">
                            <div className={`columnMdAuto  ${Styles.space}`}>
                                <div className={Styles.shareContent}>
                                    <p>Share price</p>
                                    <h6>12/31</h6>
                                </div>
                            </div>
                            <div className={`columnMdAuto  ${Styles.space}`}>
                                <div className={Styles.shareContent}>
                                    <p>Change</p>
                                    <div className={`dFlex alignItemsCenter ${Styles.shareIcon}`}>
                                        <span className={`icon-triangle ${isNegative ? Styles.redRotated : Styles.green}`}></span>
                                        {change && <h6>{change}</h6>}
                                    </div>
                                </div>
                            </div>
                            <div className={`columnMdAuto  ${Styles.space}`}>
                                <div className={Styles.shareContent}>
                                    <p>Previous Close</p>
                                    {prevClose && <h6>{prevClose}</h6>}
                                </div>
                            </div>
                            <div className={`columnMdAuto  ${Styles.space}`}>
                                <div className={Styles.shareContent}>
                                    <p>Open</p>
                                    {open && <h6>{open}</h6>}
                                </div>
                            </div>
                            <div className={`columnMdAuto  ${Styles.space}`}>
                                <div className={Styles.shareContent}>
                                    <p>High</p>
                                    {high && <h6>{high}</h6>}
                                </div>
                            </div>
                            <div className={`columnMdAuto  ${Styles.space}`}>
                                <div className={Styles.shareContent}>
                                    <p>Low</p>
                                    {low && <h6>{low}</h6>}
                                </div>
                            </div>
                            <div className={`columnMdAuto  ${Styles.space}`}>
                                <div className={`${Styles.shareContent} ${Styles.noBorder}`}>
                                    <p>Volume Traded</p>
                                    {volume && <h6>{volume}</h6>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareInformation;
