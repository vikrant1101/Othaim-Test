import React from 'react';
import Link from 'next/link';

interface Props {
  className?: any;
  tag?: any;
  content?: any;
  link?: boolean;
  href?: any;
  target?: string;
  ariaLabel?: any;
  linkClass?: any;
  dataTitle?: any;
}

export const Typo: React.FC<Props> = (props: Props) => {
  const typoClass = props?.className;
  const dataTitle = props?.dataTitle;
  const TagName = props?.tag;
  const innerHTML = props?.content; 
  const linkTrue = !!props?.link;
  const href = props?.href;
  const target = props?.target;
  const ariaLabel = props?.ariaLabel;
  const linkClass = props?.linkClass;

  return (
    <>  
        {innerHTML && (
            <TagName className={typoClass}>
                {linkTrue ? ( 
                    <Link href={href} target={target} aria-label={ariaLabel} className={linkClass} data-title={dataTitle}>{innerHTML}</Link>
                ) : (
                    <>{innerHTML}</>
                )}
            </TagName>
        )}  
    </>
  );
};

export default Typo;