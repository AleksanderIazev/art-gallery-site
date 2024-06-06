/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import cn from 'classnames';
import css from './ExhibitionsPage.module.scss';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { ExhibitionDescription } from './ExhibitionDescription';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const buttonAnimation = {
  hidden: {
    x: -75,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: custom * 0.15, ease: 'easeInOut' },
  }),
};

const textAnimation = {
  hidden: {
    x: 35,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, delay: 0.3, ease: 'linear' },
  },
};

export const ExhibitionsPage = () => {
  const [selectedExhibition, setSelectedExhibition] = useState(0);
  const { t } = useTranslation();

  const handleButtonLinkClick = (index) => {
    setSelectedExhibition(index);
  };

  return (
    <motion.div
      id="exhibitions"
      className={cn(css.exhibition)}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
    >
      <div className={cn(css.container)}>
        <div className={cn(css.exhibition__links)}>
          <h4 className={cn(css.link__header)}>
            {t('participationInExhibitions')}
          </h4>
          <div className={cn(css.link__wrapper)}>
            <ButtonLink
              variants={buttonAnimation}
              custom={1}
              onClick={() => handleButtonLinkClick(0)}
              isActive={selectedExhibition === 0}
            >
              <p>{t('nameExhibitions1')}</p>
              <p>{t('month1')}</p>
            </ButtonLink>
            <ButtonLink
              variants={buttonAnimation}
              custom={2}
              onClick={() => handleButtonLinkClick(1)}
              isActive={selectedExhibition === 1}
            >
              <p>{t('nameExhibitions2par1')}</p>
              <p>{t('nameExhibitions2par2')}</p>
              <p>{t('month1')}</p>
            </ButtonLink>
            <ButtonLink
              variants={buttonAnimation}
              custom={3}
              onClick={() => handleButtonLinkClick(2)}
              isActive={selectedExhibition === 2}
            >
              <p>{t('nameExhibitions2par1')}</p>
              <p>{t('nameExhibitions3')}</p>
              <p>{t('month2')}</p>
            </ButtonLink>
            <ButtonLink
              variants={buttonAnimation}
              custom={4}
              onClick={() => handleButtonLinkClick(3)}
              isActive={selectedExhibition === 3}
            >
              <p>{t('nameExhibitions4')}</p>
              <p>{t('month3')}</p>
            </ButtonLink>
          </div>
        </div>
        <div className={cn(css.exhibition__description)}>
          <div className={cn(css.description__wrapper)}>
            <ExhibitionDescription
              variants={textAnimation}
              title={t('nameExhibitions1')}
              about={t('exhibitionDescription1')}
              text={t('exhibitionAboutText1')}
              isVisible={selectedExhibition === 0}
            />
            <ExhibitionDescription
              variants={textAnimation}
              title={t('nameExhibitions2par2')}
              about={t('exhibitionDescription2')}
              text={t('exhibitionAboutText2')}
              isVisible={selectedExhibition === 1}
            />
            <ExhibitionDescription
              variants={textAnimation}
              title={t('nameExhibitions3')}
              about={t('exhibitionDescription3')}
              text={t('exhibitionAboutText3')}
              isVisible={selectedExhibition === 2}
            />
            <ExhibitionDescription
              variants={textAnimation}
              title={t('noTitleExhibition')}
              about={t('exhibitionDescription4')}
              text={t('exhibitionAboutText4')}
              isVisible={selectedExhibition === 3}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
