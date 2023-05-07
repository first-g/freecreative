import React from 'react';
import './Gallery.css'
import amperia from '../../../assets/amperia.jpg';
import lifecare from '../../../assets/lifecare.jpg';
import vilata from '../../../assets/vilata.jpg';
import coral from '../../../assets/coralblack.jpg';
import GalleryComp from './GalleryComp';

const gallery = [
    {id: 1,img: amperia, title: 'Amperia', text: 'Бренд красивых сувениров и подарков для дома'},
    {id: 2,img: lifecare, title: 'AQ.Lifecare', text: 'Инновационная клиника внутривенной медицины'},
    {id: 3,img: vilata, title: 'Vilata', text: 'Бренд натуральных и вкусных соусов'},
    {id: 4,img: coral, title: 'Coral Black', text: 'Черная икра в современной инторпритации'},
];

const Gallery = () => {
    return (
        <div className="gallery">
            <div className='container'>
                {gallery.map(el => {
                    return <GalleryComp id={el.id} img={el.img} title={el.title} text={el.text}/>
                })}
            </div>
        </div>
    )
}

export default Gallery