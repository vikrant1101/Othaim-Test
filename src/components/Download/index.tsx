// components/DownloadPDFButton.tsx
import React from 'react';
import Style from './index.module.scss';

// Define the props interface
interface DownloadPDFButtonProps {
  fileName: string;
  fileUrl: string;
  className?: string; // Optional className prop
}

const DownloadPDFButton: React.FC<DownloadPDFButtonProps> = ({ fileName, fileUrl, className }) => {
  return (
    <div className={className ? `${Style.downloadIcon} ${className}` : Style.downloadIcon}>
      <a href={fileUrl} download={fileName} className="icon-pdf">{fileName || "Download PDF"}
      </a>
    </div>
  );
};

export default DownloadPDFButton;
