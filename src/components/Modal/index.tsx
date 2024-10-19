import React from 'react';
import s from './index.module.scss';
import cn from 'classnames';
import { CloseIcon } from '../svg/svgComponents';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  closeModal: () => void;
}

const Modal = ({ children, isOpen, closeModal, className }: ModalProps) => {
  return (
    <>
      <div
        className={cn(s.modalBg, {
          [s.closedBg]: !isOpen,
        })}
        onClick={closeModal}
      ></div>
      <div
        className={cn(s.modal, className, {
          [s.closed]: !isOpen,
        })}
      >
        <div className={s.closeBtn} onClick={closeModal}>
          <CloseIcon />
        </div>
        <div className={s.modalContent}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
