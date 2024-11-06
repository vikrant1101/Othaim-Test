import React from 'react';
import Styles from './index.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
interface titleWithDesc {
  title: string;
  description?: any;
  as?: string;
  className?: string;
}
const TitleWithDesc = ({
  title,
  description,
  as,
  className,
}: titleWithDesc) => {
  return (
    <div className={`${Styles.aboutCompanyCon} ${className}`}>
      {title ? <h2 className={`${as ? as : 'h2'}`}>{title}</h2> : null}

      {description ? (
        <div className={Styles.paraGraph}>
          {documentToReactComponents(description?.json)}
        </div>
      ) : null}
    </div>
  );
};

export default TitleWithDesc;
