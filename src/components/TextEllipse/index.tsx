// TextOverflowEllipsis.jsx
import React from 'react';
import Styles from './index.module.scss';

const TextOverflowEllipsis = ({ children, className, style }: any) => {
  return (
    <div className={`${Styles.textoverflowouter} ${className}`} style={style}>
      <div className={Styles.textoverflowinner}>{children}</div>
    </div>
  );
};

export default TextOverflowEllipsis;
