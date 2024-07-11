import { useContext, useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './useDimensions.jsx';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import cn from 'classnames';
import css from './ToggleSidebarMenu.module.scss';
import { ToggleContext } from '../../context/Context.jsx';
import { useTranslation } from 'react-i18next';

const sidebar = {
  open: (height = 1000) => {
    const safeHeight = Math.max(height, 0);
    return {
      clipPath: `circle(${safeHeight * 2 + 200}px at calc(100% - 40px) 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    };
  },
  closed: {
    clipPath: 'circle(30px at calc(100% - 40px) 40px)',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { setIsToggleOpen } = useContext(ToggleContext);
  const { t } = useTranslation();

  const toggleMenu = () => {
    toggleOpen((prev) => !prev);
  };

  return (
    <motion.nav
      className={cn({
        [css.nav_toggle]: isOpen,
        [css.nav_toggle_opacity]: !isOpen,
      })}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}     
      ref={containerRef}          
    >
      <motion.div className={cn(css.background)} variants={sidebar}/>
      <Navigation isOpen={isOpen} t={t} toggleMenu={toggleMenu} />      
      <MenuToggle
        toggle={() => {
          setIsToggleOpen(!isOpen);
          toggleOpen();                  
        }}
      />
    </motion.nav>
  );
};
