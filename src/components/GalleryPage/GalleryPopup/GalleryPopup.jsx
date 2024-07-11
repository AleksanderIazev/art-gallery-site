import cn from 'classnames';
import css from './GalleryPopup.module.scss';
import { useTranslation } from 'react-i18next';

const descrImgMap = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10', 
  11: '11', 
  12: '12',
  13: '13',
  14: '14',
  15: '15',
  16: '16',
  17: '17',
  18: '18',
  19: '19',
  20: '20',
  21: '21',
  22: '22',

};

// eslint-disable-next-line react/prop-types
export const GalleryPopup = ({ closePopUp, selectedImageIndex, images }) => {
  const { t } = useTranslation();
  return (
    <div className={cn(css.popUpOverlay)} onClick={closePopUp}>
      <div className={cn(css.popUpContent)}>               
        <img
          src={images[selectedImageIndex]}
          className={cn(css.popUpImage)}
          alt={`Image ${selectedImageIndex}`}
        />
        <p className = {cn(css.imageDescr)}>{t(descrImgMap[selectedImageIndex])}</p>
      </div>
    </div>
  );
};

export const GalleryPopup2 = ({ closePopUp, selectedImageIndex, images }) => {
  return (
    <div className={cn(css.popUpOverlay)} onClick={closePopUp}>
      <div className={cn(css.popUpContent)}>               
        <img
          src={images[selectedImageIndex]}
          className={cn(css.popUpImage)}
          alt={`Image ${selectedImageIndex}`}
        />        
      </div>
    </div>
  );
};
