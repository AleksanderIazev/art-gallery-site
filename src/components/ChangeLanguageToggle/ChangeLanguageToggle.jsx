import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import css from './ChangeLanguageToggle.module.scss';

export const ChangeLanguageToggle = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('ru');

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={cn(css.language_toggle)}>
      <button
        className={cn(css.language_toggle__button)}
        onClick={toggleLanguage}
      >
        {currentLanguage === 'en' ? 'EN' : 'RU'}
      </button>
    </div>
  );
};
