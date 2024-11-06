'use client';
import React from 'react';
import Link from 'next/link';
import Style from './index.module.scss';
interface Props {
  data: any;
}

const Breadcrumb: React.FC<Props> = (props: Props) => {
  const data = props?.data;
  return (
    <>
      <section className={`breadcrumbPanel ${Style.breadcrumbWrapper}`}>
        <div className={`containerXL`}>
          <ul className={Style.breadcrumbNav}>
            {data?.length > 0 &&
              data?.map((item: any, itemKey: any) => (
                <li key={item?.uid || itemKey}>
                  {item?.url ? (
                    <Link
                      href={item?.url}
                      aria-label={item?.arialabel}
                      target={item?.target}
                      className={`${Style.link}`}
                    >
                      {item?.title && (
                        <span  className={Style.menuItemText}>
                          {item?.title}
                        </span>
                      )}
                    </Link>
                  ) : (
                    <>
                      {item?.title && (
                        <span className={Style.menuItemText}>
                          {item?.title}
                        </span>
                      )}
                    </>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
