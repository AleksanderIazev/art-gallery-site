/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import cn from 'classnames';
import css from './ExhibitionDescription.module.scss';

export const ExhibitionDescription = ({
  title,
  about,
  text,
  isVisible,
  variants,
}) => {
  return (
    <motion.div
      className={cn(css.description__inner, { [css.visible]: isVisible })}
      variants={variants}
    >
      <h4 className={cn(css.description__head)}>{title}</h4>
      <p className={cn(css.description__about)}>{about}</p>
      <p className={cn(css.description__text)}>{text}</p>
    </motion.div>
  );
};
