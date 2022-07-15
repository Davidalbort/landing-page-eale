import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Menu = () => {
  return (
    <div>
        <ul>
            <li>
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