import React from 'react'
import { useState } from 'react'
import Header from '../containers/Header'
import ModalMenu from '../Modal/ModalMenu';

const Layout = () => {
    const [modalMenu, setModalMenu]=useState(false);
    const toogleMenu = () => {
        setModalMenu(!modalMenu)
    }
  return (
    <div>
        <Header
            handleClick={() => toogleMenu()}
        />
        {modalMenu && <ModalMenu/>}
    </div>
  )
}

export default Layout