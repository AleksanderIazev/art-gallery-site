import cn from 'classnames';
import css from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={cn(css.logo)}>
      <a href="/" className={cn(css.logo__link)}>
        <em>A</em>
        <span>B</span>
      </a>
    </div>
  );
};
