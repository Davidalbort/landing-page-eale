import React from 'react'
import { useState } from 'react'
import Banner from '../components/Banner';
import Section from '../components/Section';
import Header from '../containers/Header'
import ModalMenu from '../Modal/ModalMenu';
import Video from '../components/Video';
import { Image } from '../components/Image';
import styles from '../styles/containers/Layout.module.scss';
import Form from '../containers/Form';

const Layout = () => {
    const [modalMenu, setModalMenu]=useState(false);
    const toogleMenu = () => {
        setModalMenu(!modalMenu)
    }
    const image = {
      url: 'https://s3-alpha-sig.figma.com/img/9857/bfac/20de6e4259f8ee049127a15feac7acfe?Expires=1658707200&Signature=hDA8iG-2vfsFWJpZBpUwMHt6Sy34aHebzLz47DO8W4cKVTWgVqHHpzzLKV7YzU-v~qdKibKkscZ3goBFUS6ZqDqW3XOb6dKDsr0XNx2jPo9ia3OXNJzdHFBYAKigI48jFW3GYU~C-twfa42ENi7clGmvmye8D3YdirxlGbMKb1fDY0H3y9ePTuLTTnK0tQJY-r7TK7188Q3DelgoxvFGL5pjXZg~0LQ3DM6tn3z~BUTAV~LoSiWtEGHz1LO2ryL9AR9tlvUcVzQp68bFL8OHCzxUP33AZVps1X5n5GOvgRnjBX2Rxdtl4L7twD2E2SAfB0wxtihs2Q1QZoyzmsec-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      alt: 'Imagen de hombre posando en una panaderia',
      href: '1'
  }
  return (
    <div className={styles.container}>
        <Header
            handleClick={() => toogleMenu()}
        />
        {modalMenu && <ModalMenu handleClick={ () => toogleMenu()}/>}
        <Banner/>
        <Section/>
        <Video/>
        <section className={styles.image}>
          <Image
          urlImage={image.url}
          alt={image.alt}
          href={image.href}

          />
        </section>
        <Form/>
    </div>
  )
}

export default Layout