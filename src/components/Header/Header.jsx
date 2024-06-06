import { Logo } from '../Logo/Logo';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import cn from 'classnames';
import css from './Header.module.scss';
import { Example } from '../ToggleSidebarMenu/Example';
import { ChangeLanguageToggle } from '../ChangeLanguageToggle/ChangeLanguageToggle';
import { useTranslation } from 'react-i18next';

const headerAnimation = {
  hidden: {
    display: 'none',
    transition: { duration: 0.5 },
  },
  visible: {
    display: 'flex',
    transition: { duration: 0.5 },
  },
};

export function Header() {
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 880);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        controls.start('hidden');
      } else {
        controls.start('visible');
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 880);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [controls]);

  return isMobile ? (
    <Example />
  ) : (
    <motion.header
      className={cn(css.header)}
      initial="visible"
      animate={controls}
      variants={headerAnimation}
    >
      <div className={cn(css.container)}>
        <Link to="hero" spy={true} smooth={true} offset={0} duration={300}>
          <Logo />
        </Link>

        <nav className={cn(css.nav)}>
          <ul>
            <li>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={0}
                duration={200}
              >
                {t('main')}
              </Link>
            </li>
            <li>
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                offset={30}
                duration={200}
              >
                {t('gallery')}
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-250}
                duration={200}
              >
                {t('aboutMe')}
              </Link>
            </li>
            <li>
              <Link
                to="exhibitions"
                spy={true}
                smooth={true}
                offset={-250}
                duration={200}
              >
                {t('exhibitions')}
              </Link>
            </li>
            <li>
              <Link
                to="drafts"
                spy={true}
                smooth={true}
                offset={-250}
                duration={200}
              >
                {t('studenWorks')}
              </Link>
            </li>
            <li>
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                offset={30}
                duration={200}
              >
                {t('contacts')}
              </Link>
            </li>
          </ul>
        </nav>

        <ChangeLanguageToggle />
      </div>
    </motion.header>
  );
}
