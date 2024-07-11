import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import cn from 'classnames';
import css from './DraftsPage.module.scss';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { imagesDraft } from './importDraftsImage';
import { useEffect, useState } from 'react';
import { GalleryPopup, GalleryPopup2 } from '../GalleryPage/GalleryPopup/GalleryPopup';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const DraftsPage = () => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);  
  const [slidesPerView, setSlidesPerView] = useState(5);
  const [spaceBetween, setSpaceBetween] = useState(50);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      // Определение количества слайдов в зависимости от ширины окна браузера
      if (window.innerWidth >= 1200) {
        setSlidesPerView(5);
        setSpaceBetween(50);
      } else if (window.innerWidth >= 992) {
        setSlidesPerView(4);
        setSpaceBetween(20);
      } else if (window.innerWidth >= 720) {
        setSlidesPerView(3);
        setSpaceBetween(10);
      } else {
        setSlidesPerView(1);
      }
    };

    // Вызов функции handleResize при изменении размера окна
    window.addEventListener('resize', handleResize);
    // Удаление обработчика событий при размонтировании компонента
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openPopUp = (index) => {
    setSelectedImageIndex(index);
    setPopUpOpen(true);
  };

  const closePopUp = () => {
    setSelectedImageIndex(null);
    setPopUpOpen(false);
  };
  return (
    <motion.div
      id="drafts"
      className={cn(css.draft)}
      initial="hidden"
      whileInView="visible"      
      viewport={{ amount: 0.3 }}
    >
      <p className={cn(css.draft__title)}>{t('studenWorks')}</p>
      <div className={cn(css.container)}>
        <Swiper
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          loop={true}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {imagesDraft.map((el, idx) => (
            <SwiperSlide key={idx}>
              <img
                onClick={() => openPopUp(idx)}
                className={cn(css.image)}
                src={el}
                alt={`Draft ${idx}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {isPopUpOpen && (
        <GalleryPopup2
          closePopUp={closePopUp}
          selectedImageIndex={selectedImageIndex}
          images={imagesDraft}         
        />
      )}
    </motion.div>
  );
};
