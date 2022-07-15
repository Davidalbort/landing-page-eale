import React from 'react';


const Logo = ({className,urlLogo,alt,href}) =>{

    return(
        <a href={href} className={className}>
            <img src={urlLogo} alt={alt}  className=''/>
        </a>
    )
}

Logo.defaultProps ={
    urlLogo: `https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg`,
    alt: 'Descripcion de la imagen o logo',
    href: 'https://es.reactjs.org/'
}

export {Logo};