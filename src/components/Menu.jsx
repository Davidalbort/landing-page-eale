import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import  styles  from '../styles/components/Menu.module.scss';

const Menu = ({handleClick}) => {
  return (
    <div className={styles.container}>
        <div onClick={ handleClick}>
            X cerrar
        </div>
        <ul>
            <li className={styles.menu}>
                menu
            </li>
            <li>
                nuestra empresa
            </li>
            <li>
                nuestro equipo
            </li>
            <li>
                <span>
                    proyecto
                </span>
                <IoIosArrowDown/>
            </li>
            <li>
                <span>
                    cómo comprar
                </span>
                <IoIosArrowDown/>
            </li>
            <li>
                contacto
            </li>
        </ul>
    </div>
  )
}

export default Menu