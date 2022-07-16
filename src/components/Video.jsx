import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import styles from '../styles/components/Video.module.scss';

const Video = () => {
  return (
    <div className={styles.container}>
        <article className={styles.video}>
            <div>
                <iframe 
                    title='Video de Ventas'
                    src="https://drive.google.com/file/d/1jk_cqC2fIMvo7G-bepaTkfkDFGe3QVtb/preview" 
                    allow="autoplay"
                >

                </iframe>

            </div>
            
        </article>
        <div className={styles.icon}>
            <div >
                <BsWhatsapp/>
            </div>

        </div>
    </div>
  )
}

export default Video