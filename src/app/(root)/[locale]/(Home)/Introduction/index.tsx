import React from 'react';
import Image from 'next/image';
import Styles from './index.module.scss';
import Button from '@/components/Button';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useTriangleClass } from '@/util/helpers';
import IntroImage from './_component/IntroImage';
const Introduction = async ({ introduction }: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/stockMarkets`
  );
  const { Values: stocksData } = await res.json();
  const name = stocksData?.find((item: any) => item?.name === 'date')
    ?.Formats[0]?.value;
  const change = stocksData?.find((item: any) => item?.name === 'change')
    ?.Formats[0]?.value;
  const sharePrice = stocksData?.find((item: any) => item?.name === 'prevClose')
    ?.Formats[0]?.value;
  const { isNegative } = useTriangleClass(change);

  return (
    <div className={Styles.bgColor}>
      <div className={Styles.leafImgCon}>
        <Image
          src={'/img/leaf.png'}
          alt="leaf"
          height={140}
          width={640}
          role="presentation"
        />
      </div>
      <div className="containerXL">
        <div className={Styles.visionGrowthMainCon}>
          <div className={Styles.visionGrowthHeading}>
            <div className="rowFlex">
              <div className="columnLg6 columnMd8">
                {introduction?.badgeTitle ? (
                  <div className={`${Styles.badgeTitle} h6`}>
                    {introduction?.badgeTitle}
                  </div>
                ) : null}
                {introduction?.title ? <h2>{introduction?.title}</h2> : null}
              </div>
            </div>
          </div>

          <div className="rowFlex">
            {introduction?.imagesCollection?.items[0]?.image?.url && (
              <IntroImage imgData={introduction?.imagesCollection?.items[0]} mobImg={introduction?.mobileBackground} />
            )}

            <div className="columnLg6">
              <div className={`${Styles.gap} `}>
                {introduction?.description ? (
                  <div className={Styles.visionGrowthContentCon}>
                    {documentToReactComponents(introduction?.description?.json)}
                  </div>
                ) : null}

                <div className={Styles.shareInfoCon}>
                  {introduction?.subTitle ? (
                    <h4>{introduction?.subTitle}</h4>
                  ) : null}

                  <div className="dFlex justifyContentBetween">
                    <div>
                      {introduction?.shareTitle && (
                        <p>{introduction?.shareTitle}</p>
                      )}
                    </div>
                    <div>{name && <p className={Styles.ft18}>{name}</p>}</div>
                  </div>
                  <div className={`rowFlex rowGutters12`}>
                    <div className="columnMd6 columnLg6">
                      <div
                        className={`dFlex justifyContentBetween ${Styles.sharePriceCon}`}
                      >
                        <div>
                          <div>
                            {introduction?.sharePriceText && (
                              <p>{introduction?.sharePriceText}</p>
                            )}
                          </div>
                          <div className={Styles.sharePrice}>
                            <p>{sharePrice}</p>
                          </div>
                        </div>
                        <div className={Styles.imageCon}>
                          <Image
                            src={'/img/stock.svg'}
                            alt="stock"
                            height={72}
                            width={65}
                            role="presentation"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="columnMd6 columnLg6">
                      <div
                        className={`dFlex justifyContentBetween ${Styles.sharePriceCon} mb0`}
                      >
                        <div>
                          <div>
                            {introduction?.shrePriceChangeText && (
                              <p>{introduction?.shrePriceChangeText}</p>
                            )}
                          </div>
                          <div className={Styles.sharePrice}>
                            <span
                              className={`icon-triangle ${isNegative ? Styles.redRotated : Styles.green}`}></span>
                            <p>{change} 0.89 %</p>
                          </div>
                        </div>
                        <div className={Styles.imageCon}>
                          <Image
                            src={'/img/marketGraph.svg'}
                            alt="stock"
                            height={72}
                            width={65}
                            role="presentation"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dFlex">
                  <Button
                    link={introduction?.linksCollection.items[0]?.url}
                    label={introduction?.linksCollection.items[0]?.title}
                    varient={introduction?.linksCollection.items[0]?.variant}
                    target={introduction?.linksCollection.items[0]?.target}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
