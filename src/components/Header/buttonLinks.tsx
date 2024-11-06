import React from 'react';
import Button from '../Button';
import style from './index.module.scss';
const ButtonLinks = ({ style, actionCollection }: any) => {
  return (
    <div className={`${style.desktopLinks} desktopLinks`}>
      <div className={`dFlex alignItemsCenter ${style.space}`}>
        {actionCollection?.items?.map(
          ({ title, url, iconClass, variant, target }: any) => (
            <div key={`actionCollection-${title}`}>
              <Button
                className={`${style.Iktissab} ${iconClass}btn`}
                varient={variant}
                label={title}
                iconClass={iconClass}
                startIcon={true}
                link={url}
                target={target}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ButtonLinks;
