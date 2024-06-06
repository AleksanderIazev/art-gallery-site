import cn from 'classnames';
import css from './GalleryPopup.module.scss';

// eslint-disable-next-line react/prop-types
export const GalleryPopup = ({ closePopUp, selectedImageIndex, images }) => {
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
