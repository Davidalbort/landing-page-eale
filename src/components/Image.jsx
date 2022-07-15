import React from 'react';


const Image = ({className,urlImage,alt,href}) =>{

    return(
        <a href={href} className={className}>
            <img src={urlImage} alt={alt}  className=''/>
        </a>
    )
}

Image.defaultProps ={
    urlImage: `https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg`,
    alt: 'Descripcion de la imagen o Logo',
    href: 'https://es.reactjs.org/'
}

export {Image};