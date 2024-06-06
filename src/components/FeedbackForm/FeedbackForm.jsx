import { Button } from '../Button/Button';
import { Input } from './Input/Input';
import css from './FeedbackForm.module.scss';
import cn from 'classnames';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

// eslint-disable-next-line react/prop-types
export const FeedbackForm = ({ toggleFeedback }) => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [text, setText] = useState('');
  const { t } = useTranslation();

  const form = useRef();

  const clearForm = () => {
    setName('');
    setMail('');
    setText('');
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4b3sr6g', 'template_nf2vhye', form.current, {
        publicKey: 'k-mTomHwlCewToLe5',
      })
      .then(
        (result) => {
          console.log(result.text);
          clearForm();
        },
        (error) => {
          console.log(error.text);
        },
      );

    e.target.reset();
  };

  return (
    <div className={cn(css.feedback__container)} onClick={toggleFeedback}>
      <div
        className={cn(css.feedback__modal)}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={cn(css.feedback__close_btn)}
          onClick={toggleFeedback}
        >
          &times;
        </button>
        <h2 className={cn(css.feedback__header)}>
          {t('feedbackFormHeaderText')}
        </h2>
        <form
          className={cn(css.feedback__form)}
          ref={form}
          onSubmit={sendEmail}
        >
          <Input
            id="firstName"
            label="First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="user_name"
            placeholder={t('feedbackFormName')}
          />
          <Input
            id="email"
            label="Email Address"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            type="email"
            name="user_email"
            placeholder={t('feedbackFormEmail')}
          />
          <textarea
            name="message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t('feedbackFormText')}
            className={cn(css.textarea__styles)}
          ></textarea>
          <Button type="submit">{t('feedbackFormBtnText')}</Button>
        </form>
      </div>
    </div>
  );
};
