import icon from '../../assets/images/service_icon_02.png';

import cn from 'classnames';
import css from './AboutPage.module.scss';
import { Button } from '../Button/Button';
import { useTranslation } from 'react-i18next';

export const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <section className={cn(css.about)} id="about">
      <div className={cn(css.container)}>
        <div className={cn(css.about__link)}>
          <div className={cn(css.icon)}>
            <img src={icon} alt="icon" />
          </div>
          <span className={cn(css.about__link_head)}>{t('aboutMe')}</span>
          <p>{t('aboutMeLinkDescr1')}</p>
          <p className={cn(css.about__link_descr)}>{t('aboutMeLinkDescr2')}</p>
          <br></br>
          <Button
            onClick={() => window.open('https://t.me/alyonaYabl', '_blank')}
          >
            {t('telegramBtnText')}
          </Button>
        </div>
        <div className={cn(css.about__text)}>
          <p>{t('aboutMeParagraph1')}</p>
          <p>{t('aboutMeParagraph2')}</p>
          <p>{t('aboutMeParagraph3')}</p>
        </div>
      </div>
    </section>
  );
};
