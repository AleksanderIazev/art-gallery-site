/* eslint-disable react/prop-types */
import cn from 'classnames';
import css from './ButtonLink.module.scss';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
export const ButtonLink = ({
  children,
  onClick,
  isActive,
  variants,
  custom,
}) => {
  const buttonClasses = cn(css.btn_link__style, { [css.active]: isActive });
  return (
    // eslint-disable-next-line react/no-unknown-property
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      variants={variants}
      custom={custom}
    >
      {children}
    </motion.button>
  );
};
