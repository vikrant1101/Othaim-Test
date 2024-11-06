import Link from 'next/link';
import React from 'react';
import Style from './index.module.scss';
import Image from 'next/image';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  label?: any;
  ariaLabel?: string;
  target?: string;
  link?: any;
  varient?: string;
  onClick?: any;
  startIcon?: boolean;
  iconClass?: string;
  children?: JSX.Element | JSX.Element[];
  theme?: string;
  className?: string;
  type?: any;
  showIcon?: boolean;
  imgUrl?: any;
  startImg?: boolean;
  showImg?: boolean;
  imgAlt?: any;
  imgHeight?: any;
  imgWidth?: any;
}

export const Button: React.FC<Props> = (btnProps: Props) => {
  const btnText = btnProps?.label;
  const ariaLabel = btnProps?.ariaLabel;
  const btnTarget = btnProps?.target || '_self';
  const btnLink = btnProps?.link;
  const btnClick = btnProps?.onClick;
  const children = btnProps?.children;
  const type = btnProps?.type;
  const varient = btnProps?.varient;
  const theme = btnProps?.theme;
  const btnClass = btnProps?.className;
  const startIcon = btnProps?.startIcon;
  const iconClass = btnProps?.iconClass;
  const showIcon = btnProps?.showIcon;
  const imgUrl = btnProps?.imgUrl;
  const startImg = btnProps?.startImg;
  const showImg = btnProps?.showImg;
  const imgAlt = btnProps?.imgAlt;
  const imgWidth = btnProps?.imgWidth;
  const imgHeight = btnProps?.imgHeight;
  const btnVarient = () => {
    switch (varient || null) {
      case 'Primary':
        return Style.primary;
      case 'Secondary':
        return Style.secondary;
      case 'Outline':
        return Style.outline;
      case 'Yellow':
        return Style.yellow;
      case 'LinkWithArrow':
        return Style.witharrow;
      case '':
      case undefined:
      case null:
        return Style.btnstatic;
    }
    return '';
  };
  const getBtnVarient = btnVarient();
  const btnTheme = () => {
    switch (theme || null) {
      case 'Light':
        return Style.light;
      case 'Dark':
        return Style.dark;
      case '':
      case undefined:
      case null:
        return Style.btnstatic;
    }
    return '';
  };
  const getBtnTheme = btnTheme();

  return (
    <>
      {btnText ||
        btnLink ||
        startIcon ||
        showIcon ||
        iconClass ||
        startImg ||
        showImg ? (
        type === 'Button' || type === 'Submit' ? (
          <button
            type={type === 'Submit' ? 'submit' : 'button'}
            onClick={btnClick}
            className={`${Style.btn} ${btnClass} ${getBtnVarient} ${getBtnTheme}`}
            aria-label={ariaLabel}
          >
            {startIcon && (
              <span
                className={iconClass ? iconClass : 'icon-link-arrow'}
              ></span>
            )}
            {startImg && (
              <Image
                src={imgUrl}
                alt={imgAlt || ''}
                height={imgHeight}
                width={imgWidth}
                role="presentation"
              />
            )}
            <span className="btnText">{btnText} </span> {children}
            {showIcon && (
              <span
                className={iconClass ? iconClass : 'icon-link-arrow'}
              ></span>
            )}
            {showImg && (
              <Image
                src={imgUrl}
                alt={imgAlt || ''}
                height={imgHeight}
                width={imgWidth}
                role="presentation"
              />
            )}
          </button>
        ) : type === 'Span' ? (
          <span
            className={`${Style.btn} ${btnClass} ${getBtnVarient} ${getBtnTheme}`}
          >
            {startIcon && iconClass && (
              <span
                className={iconClass ? iconClass : 'icon-link-arrow'}
              ></span>
            )}
            {startImg && (
              <Image
                src={imgUrl}
                alt={imgAlt || ''}
                height={imgHeight}
                width={imgWidth}
                role="presentation"
              />
            )}{' '}
            <span className="btnText">{btnText} </span>
            {children}
            {showIcon && (
              <span
                className={iconClass ? iconClass : 'icon-link-arrow'}
              ></span>
            )}
            {showImg && (
              <Image
                src={imgUrl}
                alt={imgAlt || ''}
                height={imgHeight}
                width={imgWidth}
                role="presentation"
              />
            )}
          </span>
        ) : (
          <Link
            href={btnLink || '#'}
            target={btnTarget}
            onClick={btnClick}
            className={`${Style.btn} ${btnClass} ${getBtnVarient} ${getBtnTheme}`}
            aria-label={ariaLabel}
          >
            {startIcon && (
              <span
                className={iconClass ? iconClass : 'icon-link-arrow'}
              ></span>
            )}
            {startImg && (
              <Image
                src={imgUrl}
                alt={imgAlt || ''}
                height={imgHeight}
                width={imgWidth}
                role="presentation"
              />
            )}{' '}
            <span className="btnText">{btnText} </span> {children}
            {showIcon && (
              <span
                className={iconClass ? iconClass : 'icon-link-arrow'}
              ></span>
            )}
            {showImg && (
              <Image
                src={imgUrl}
                alt={imgAlt || ''}
                height={imgHeight}
                width={imgWidth}
                role="presentation"
              />
            )}
          </Link>
        )
      ) : null}
    </>
  );
};

export default Button;
