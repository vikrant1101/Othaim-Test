import React from 'react';
import Styles from './index.module.scss';

const Divider = ({
  isHorizontal = false,
  isVertical = false,
  style,
  className,
}: any) => {
  return (
    <div className={className} style={{ ...style }}>
      {isHorizontal && <div className={Styles.horizontalDivider} />}
      {isVertical && (
        <div className={Styles.dividerWrapper}>
          <div className={Styles.verticalDivider} />
        </div>
      )}
    </div>
  );
};

export default Divider;
