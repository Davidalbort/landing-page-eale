import React from 'react'
import styles from '../styles/components/Section.module.scss';

const Section = () => {
  return (
    <section className={styles.container}>
        <span className={styles.title}>
        ¡En Valenti tienes la oportunidad de crecer tu negocio!

        </span>
        <span className={styles.text}>
        Locales comerciales en una zona estratégica para el desarrollo de tu proyecto 


        </span>
    </section>
  )
}

export default Section