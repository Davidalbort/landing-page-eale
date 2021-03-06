import React from 'react';
import { Logo } from '../components/Logo';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { Image } from '../components/Image';
import styles from '../styles/containers/Header.module.scss';

const Header = ({handleClick}) => {
    const logo = {
        url: 'https://proyectovalenti.com/wp-content/uploads/2022/05/valenti-apartamentos-logo.png',
        alt: 'Imagen de Valenti',
        href: 'https://proyectovalenti.com/'
    }
    const image = {
        url: 'https://proyectovalenti.com/wp-content/uploads/2022/04/valor_logo_white.png',
        alt: 'Imagen de grupo Valor',
        href: 'https://www.grupovalor.com.co/'
    }
  return (
    <nav className={styles.container}>
        <Logo
            className={styles.logo}
            urlLogo={logo.url}
            alt={logo.alt}
            href={logo.href}
        />
        <div onClick={() => handleClick()}>
            <AiOutlineMenuFold/>
            <span>Menu</span>
        </div>
        <Image
            className={styles.image}
            urlImage={image.url}
            alt={image.alt}
            href={image.href}
        />
    </nav>
  )
}

export default Header