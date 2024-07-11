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
  const [buttonText, setButtonText] = useState(t('feedbackFormBtnText'));
  const handleClick =() => {
    setButtonText(t('feedbackFormBtnText2'))
    setTimeout(() => setButtonText(t('feedbackFormBtnText')), [1000])}
  

  const clearForm = () => {    
    setName('');
    setMail('');
    setText('');  
     };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hfeycx2', 'template_993n4ln', form.current, {
        publicKey: 'tibustdotw44oqZdD',
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
            label={t('feedbackLabelName')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="user_name"
            placeholder={t('feedbackFormName')}
          />
          <Input
            id="email"
            label={t('feedbackLabelEmail')}
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
          <Button          
           type="submit" onClick={handleClick}>{buttonText}                                   
          </Button>          
        </form>
      </div>
    </div>
  );
};
