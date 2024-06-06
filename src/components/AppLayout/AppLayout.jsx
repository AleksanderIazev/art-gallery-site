import cn from 'classnames';
import css from './AppLayout.module.scss';

// eslint-disable-next-line react/prop-types
export const AppLayout = ({ children }) => {
  return <div className={cn(css.container)}>{children}</div>;
};
