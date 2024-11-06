'use client';
import React, { useState, useRef } from 'react';
import Styles from './index.module.scss';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const AccordionItem = ({
  url,
  title,
  isActive,
  content,
  headerAsLink,
  openIcon = '',
  closeIcon = '',
  toggleAccordion,
  isDropdown = true,
  dropdownCollection,
  preventClose = false,
  className = 'customClass',
  toggleIcon = 'icon-chevron-down',
}: any) => {
  const contentRef = useRef<any>(null);

  const maxHeight = !preventClose
    ? isActive
      ? `${contentRef?.current?.scrollHeight}px`
      : '0px'
    : '100%';
  const iconClass =
    !openIcon && !closeIcon
      ? `${isActive ? Styles.rotate180 : ''} ${toggleIcon}`
      : isActive
        ? closeIcon
        : openIcon;

  return (
    <div
      className={`${Styles.accordionItem} ${preventClose ? '' : Styles.preventClose} accordItems ${className}`}
    >
      {isDropdown ? (
        <>
          {!headerAsLink ? null : (
            <div className={`rowFlex ${Styles.headerAsLink}`}>
              <Link href={url || '#'} className="h6  columnAuto">
                {title}
              </Link>
            </div>
          )}
          <div
            className={Styles.accordionTitle}
            onClick={() => {
              if (!preventClose) {
                toggleAccordion();
              }
            }}
          >
            <div
              className={`rowFlex ${!headerAsLink ? 'justifyContentBetween' : 'justifyContentEnd'} rowGutters12 `}
            >
              {headerAsLink ? null : <h6 className="columnAuto">{title}</h6>}
              {!preventClose && <span className={`${iconClass} columnAuto`} />}
            </div>
          </div>
          <div
            className={`${Styles.accordionContentWrapper} accordionContentWrapper`}
            style={{
              maxHeight,
              width: '100%',
              transition: 'max-height 0.5s ease-in-out  ',
            }}
          >
            <div
              className={`${Styles.accordionContent}  accordionContent`}
              ref={contentRef}
            >
              {content ? (
                documentToReactComponents(content?.json)
              ) : (
                <>
                  {dropdownCollection?.map(
                    ({ url, title, content }: any, idx: number) => (
                      <React.Fragment key={`${idx}`}>
                        {content ? (
                          documentToReactComponents(content?.description?.json)
                        ) : (
                          <Link key={`${title}`} href={url}>
                            {title}
                          </Link>
                        )}
                      </React.Fragment>
                    )
                  )}
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <div
          className={`${Styles.accordionTitle} accordionTitle`}
          onClick={() => {
            if (!preventClose) {
              toggleAccordion();
            }
          }}
        >
          <div className="dFlex justifyContentBetween">
            <Link href={url} className="h6">
              {title}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const Accordion = ({
  children,
  preventClose,
  className,
}: {
  children: React.ReactNode;
  preventClose?: boolean;
  className?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (preventClose) {
      setActiveIndex(null);
    } else {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  const clonedChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child as React.ReactElement<any>, {
      isActive: preventClose || activeIndex === index,
      toggleAccordion: () => toggleAccordion(index),
      preventClose,
    });
  });

  return <div className={className}>{clonedChildren}</div>;
};

export { Accordion, AccordionItem };
