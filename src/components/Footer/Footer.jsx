import cn from 'classnames';
import css from './Footer.module.scss';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className={cn(css.footer)}>
      <div className={cn(css.container)}>
        <Link to="hero" spy={true} smooth={true} offset={0} duration={200}>
          <Logo />
        </Link>
        <p className={cn(css.location)}>{t('cityFooter')}</p>
        <p className={cn(css.copy)}>Copyright &copy; 2024 AB</p>
      </div>
    </div>
  );
};
