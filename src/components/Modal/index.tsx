'use client';
import React, { useEffect } from 'react';
import Style from './index.module.scss';
import Button from '@/components/Button';

interface Props {
  className?: any;
  closeModal?: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<Props> = (props: Props) => {
  const modelWrapClass = props?.className;
  const { closeModal } = props;
  const children = props?.children;

  useEffect(() => {
    document.documentElement.classList.add('hide-scroll');
    return () => {
      document.documentElement.classList.remove('hide-scroll');
    };
  }, []);

  const handleCloseModal = () => {
    document.documentElement.classList.remove('hide-scroll');
    if (closeModal) {
      closeModal();
    }
  };

  return (
    <>
      <div className={`${Style.modalWrapper} ${modelWrapClass}`}>
        <div className={Style.modalOverlay}></div>
        <div className={Style.modalTbl}>
          <div className={Style.modalTblCel}>
            <div className={Style.modalWrap}>
              <div className={`ContainerMD`}>
                <div className={Style.modalCol}>
                  <Button
                    type="button"
                    className={Style.closeBtn}
                    onClick={handleCloseModal}
                  >
                    <span className="icon-close-icon"></span>
                  </Button>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
