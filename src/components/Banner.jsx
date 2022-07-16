import React from 'react';
import styles from '../styles/components/Banner.module.scss';
import { Image } from '../components/Image';

const Banner = () => {
    const image = {
        url: 'https://s3-alpha-sig.figma.com/img/0d57/8d0f/68a7eb1466a586a105c8990deb93de05?Expires=1658707200&Signature=YX6JYss8c4Ha6RiPBf1soP0nbkqRQ7Dsx5QGgPK49EkKgjzFs9LG2Wa6Y1H~ZmEixryC9bUth0qUGYEZDkvJXHXe5tZTJsafgyJA6vZlDv2PW3hpmD9UWOAV9ntIWleX64JudlsSlb1ANnqq~sN67vyUNg4k6O30XXgdlgyImTyYZISNStZoy88PE4FpP0DQ1zucC5f-1qCcGQmJLIHfOr2G6GV4OKE7SLe8xb6-d1KN4LHRuquJ73yZEGJGZApisZsNNcNYpPMCvlpnfjn3wZiJNx2sL0H-4~wRkJCy8XtWsFzMr9I7A0HN92iuP1AFDBmI~uD8fsTVUFEZvXBO6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        alt: 'Imagen de ventas de apartamentos',
        href: '1'
    }
  return (
    <div className={styles.container}>
        <Image
            className={styles.image}
            urlImage={image.url}
            alt={image.alt}
        />
    </div>
  )
}

export default Banner