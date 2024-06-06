import { useState } from 'react';
import { GalleryPopup } from './GalleryPopup/GalleryPopup';
import { motion } from 'framer-motion';
import { images } from './importGalleryImages';
import cn from 'classnames';
import css from './GalleryPage.module.scss';
import { useTranslation } from 'react-i18next';

const textAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { all: 0.5, duration: 0.5 },
  },
};

const galleryAnimation = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      all: custom * 0.5,
      duration: 0.4,
      delay: (custom + 1) * 0.08,
    },
  }),
};

export const GalleryPage = () => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const { t } = useTranslation();

  const openPopUp = (index) => {
    setSelectedImageIndex(index);
    setPopUpOpen(true);
  };

  const closePopUp = () => {
    setSelectedImageIndex(null);
    setPopUpOpen(false);
  };

  return (
    <motion.section
      id="gallery"
      className={cn(css.container)}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.07 }}
    >
      <motion.p className={cn(css.gallery__header)} variants={textAnimation}>
        {t('galleryHeaderText')}
      </motion.p>
      <motion.div className={cn(css.gallery)}>
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className={cn(css.img__wrapper)}
            custom={idx}
            variants={galleryAnimation}
            onClick={() => openPopUp(idx)}
          >
            <motion.img
              src={img}
              className={cn(css.image)}
              alt={`Image ${idx}`}
            />
          </motion.div>
        ))}
      </motion.div>
      {isPopUpOpen && (
        <GalleryPopup
          closePopUp={closePopUp}
          selectedImageIndex={selectedImageIndex}
          images={images}
        />
      )}
    </motion.section>
  );
};
