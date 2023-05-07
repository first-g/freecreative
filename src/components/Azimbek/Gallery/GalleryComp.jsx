import React from 'react'

const GalleryComp = ({id, img, title, text}) => {
  return (
    <div className="gallery__body" key={id}>
    <img src={img} alt="" />
    <div className="gallery__context">
        <div className="gallery__text">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
        <div className="gallery__button">
            <button>Смотреть проект</button>
        </div>
    </div>
</div>
  )
}

export default GalleryComp