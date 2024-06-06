import cn from 'classnames';
import css from './MainPage.module.scss';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ToggleContext } from '../../context/Context';
import { useTranslation } from 'react-i18next';

const textAnimation = {
  hidden: {
    x: -150,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3, duration: 0.8, ease: 'easeOut' },
  }),
};

export const MainPage = () => {
  const { isOpenToggle } = useContext(ToggleContext);
  const { t } = useTranslation();

  console.log(isOpenToggle);
  return (
    <motion.div
      key={isOpenToggle}
      id="hero"
      className={cn(css.main)}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
    >
      {!isOpenToggle && (
        <div className={cn(css.text__wrapper)}>
          <motion.h1 variants={textAnimation} custom={1}>
            {t('nameMain')}
          </motion.h1>
          <motion.p variants={textAnimation} custom={2}>
            {t('mainPageText')}
          </motion.p>
        </div>
      )}
    </motion.div>
  );
};
