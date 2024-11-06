import Button from '@/components/Button';
import React from 'react';
import Styles from './index.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const QuickLinks = ({ quickLinks }: any) => {
  const title = quickLinks?.title;
  const items = quickLinks?.linksCollection?.items;
  return (
    <div className="containerXL">
      <div className={`${Styles.quicklinkCon} sectionSpace`}>
        <div className="">
          {title ? <h2 className="h2">{quickLinks?.title}</h2> : null}

          {documentToReactComponents(quickLinks?.description.json)}
        </div>
        <div className="rowFlex justifyContentBetween gapMd">
          {items &&
            items.length > 0 &&
            items?.map(({ target, title, url, variant }: any, id: any) => (
              <div className="columnMd6 columnLg3" key={`qlink-${id}`}>
                <Button
                  className={Styles.quicklinksBtn}
                  imgUrl={'/img/qlink1.svg'}
                  startImg={true}
                  imgAlt={'Lorem ipsum link'}
                  imgHeight={32}
                  imgWidth={32}
                  target={target}
                  link={url}
                  varient={variant}
                  label={title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
