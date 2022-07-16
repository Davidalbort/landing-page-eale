import React from 'react';
import  ReactDOM  from 'react-dom';
import Menu from '../components/Menu';
import styles from '../styles/containers/ModalMenu.module.scss'


const ModalMenu = ({handleClick}) => {
  return ReactDOM.createPortal(
    <div  className={styles.container}>
      <Menu handleClick={handleClick}/>
    </div>,
    document.getElementById('modalMenu')
  )
}

export default ModalMenu