import { useState } from 'react';
import { Button } from '../Button/Button';
import { FeedbackForm } from '../FeedbackForm/FeedbackForm';
import { useTranslation } from 'react-i18next';

import cn from 'classnames';
import css from './ContactsPage.module.scss';

export const ContactsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleFeedback = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <section className={cn(css.contacts)} id="contacts">
      <div className={cn(css.container)}>
        <div className={cn(css.text)}>
          <p className={cn(css.text__head)}>{t('contacts')}</p>
          <p>{t('contactsParagraph1')}</p>
          <p>{t('contactsParagraph2')}</p>
        </div>
        <Button onClick={toggleFeedback}>{t('contactsButtonText')}</Button>
      </div>
      {isOpen && <FeedbackForm toggleFeedback={toggleFeedback} />}
    </section>
  );
};
