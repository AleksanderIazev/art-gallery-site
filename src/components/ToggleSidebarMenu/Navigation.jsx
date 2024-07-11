import { motion } from 'framer-motion';
import cn from 'classnames';
import css from './ToggleSidebarMenu.module.scss';
import { Link } from 'react-scroll';
import { ChangeLanguageToggle } from '../ChangeLanguageToggle/ChangeLanguageToggle';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};



// eslint-disable-next-line react/prop-types
export const Navigation = ({ isOpen, t, toggleMenu }) => (
  <motion.ul
    className={cn({
      [css.ul_toggle]: isOpen,
      [css.ul_toggle_opacity]: !isOpen,
    })}
    variants={variants}  
  >
    <motion.li
      className={cn(css.li_toggle)}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}       
    >
      <Link to="hero" spy={true} smooth={true} offset={0} duration={200} onClick={toggleMenu}>
        {t('main') }        
      </Link> 
    </motion.li>
    <motion.li
      className={cn(css.li_toggle)}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="gallery" spy={true} smooth={true} offset={30} duration={200} onClick={toggleMenu}>
        {t('gallery')}
      </Link>
    </motion.li>
    <motion.li
      className={cn(css.li_toggle)}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="about" spy={true} smooth={true} offset={-250} duration={200} onClick={toggleMenu}>
        {t('aboutMe')}
      </Link>
    </motion.li>
    <motion.li
      className={cn(css.li_toggle)}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to="exhibitions"
        spy={true}
        smooth={true}
        offset={-250}
        duration={200}
        onClick={toggleMenu}
      >
        {t('exhibitions')}
      </Link>
    </motion.li>
    <motion.li
      className={cn(css.li_toggle)}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      
    >
      <Link to="drafts" spy={true} smooth={true} offset={-250} duration={200} onClick={toggleMenu}>
        {t('studenWorks')}
      </Link>
    </motion.li>
    <motion.li
      className={cn(css.li_toggle)}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="contacts" spy={true} smooth={true} offset={30} duration={200} onClick={toggleMenu}>
        {t('contacts')}
      </Link>
    </motion.li>
    <motion.li className={cn(css.li_toggle)} variants={variants}>
      <Link smooth={true} duration={200}>
        <ChangeLanguageToggle />
      </Link>
    </motion.li>
  </motion.ul>
);
