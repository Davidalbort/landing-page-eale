import React from 'react';
import  ReactDOM  from 'react-dom';
import Menu from '../components/Menu';


const ModalMenu = () => {
  return ReactDOM.createPortal(
    <div >
      <Menu/>
    </div>,
    document.getElementById('modalMenu')
  )
}

export default ModalMenu