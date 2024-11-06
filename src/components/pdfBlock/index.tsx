'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Styles from './index.module.scss';
import useEqualHeight from '@/util/hooks/useEqualHeight';

interface PdfBlockProps {
  fileName: string;
  fileUrl: string;
  customClass?: string;
}

const PdfBlock: React.FC<PdfBlockProps> = ({ fileName, fileUrl, customClass }) => {
  useEqualHeight(['equalHeading', 'equalContent', 'equalCard'], 100); // Adjust delay as needed
  return (
    <Link href={fileUrl} passHref target='_blank' className='equalCard'>
      <span className={`${Styles.downloadPdfBlock} ${customClass} pdfMainBlock columnAuto alignItemsCenter dFlex justifyContentBetween`}>
        <span className={`${Styles.fileNamePanel} dFlex alignItemsCenter equalContent`}>
          <i className={`${Styles.iconPdf} icon-pdf`}></i>
          <h6 className={`${Styles.fileName} dFlex alignItemsCenter mt0 pt0 mb0 pb0 equalHeading`}>
            {fileName}
          </h6>
        </span>
        <i className={`${Styles.iconDownload} icon-download`}></i>
      </span>
    </Link>
  );
};

export default PdfBlock;
