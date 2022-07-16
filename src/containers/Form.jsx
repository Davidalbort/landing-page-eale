import React, { useState } from 'react';
import styles from '../styles/containers/Form.module.scss';

const Form = () => {
    const[person, setPerson]= useState({})
    const[enable, setEnable]= useState(true);
    const handleChange = ({target}) => {
        const {name,value}= target
        setPerson({...person,[name]: value})
    }
   
    console.log(person)
  return (
    <form autoComplete="on" className={styles.container}>
      
    <h2 className={styles.title}>¡Haz tu inversión!</h2>

    <span className={styles.text}>Dejanos tus datos y recibe una atención personalizada</span>

    <label form='name' style={styles.input}>
        <fieldset>
            <legend>Nombre</legend>
            <input name='name' id='name' required type="text" placeholder='Nombre completo'  onChange={(e) => handleChange(e)}/> 
        </fieldset>
    </label>

    <label form='phone'>
        <fieldset>
            <legend>Teléfono</legend>
            <input name='phone' id='phone' required type="tel" placeholder='Telefono' onChange={(e) => handleChange(e)}/>
        </fieldset>
    </label>

    <label form='email'>
        <fieldset>
            <legend>Correo eléctronico</legend>
            <input name='email' id='email'  type="email" required placeholder='Correo electronico' onChange={(e) => handleChange(e)}/>
        </fieldset>
    </label>

    <label form='conditions'>
      <input   type="checkbox" id='conditions' onClick={() => setEnable(!enable)} />
      <span>
        Aceptas y otorgas tu autorización para el tratamiento de datos personales en los términos que aparecen a continuación  
        <a href='#'> aquí</a>
      </span>
    </label>
    <div className="container-button">

      <button type="submit" disabled={enable}>Enviar</button>
    </div>

  </form>
  )
}

export default Form