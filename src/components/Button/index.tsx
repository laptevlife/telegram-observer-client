import React from 'react';
import s from './index.module.scss';
import cn from 'classnames';

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => unknown;
}

const Button = ({ children, className, style, onClick }: IButtonProps) => {
  return (
    <div style={style} onClick={onClick} className={cn(s.button, className)}>
      <div className={s.buttonContent}>{children}</div>
    </div>
  );
};

export default Button;
