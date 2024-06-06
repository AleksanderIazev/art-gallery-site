import cn from 'classnames';
import css from './Button.module.scss';

// eslint-disable-next-line react/prop-types
export const Button = ({ children, onClick, type }) => {
  return (
    <button className={cn(css.btn__style)} onClick={onClick} type={type}>
      <span>{children}</span>
    </button>
  );
};
