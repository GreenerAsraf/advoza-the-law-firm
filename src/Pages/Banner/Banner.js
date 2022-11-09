import React from 'react';
import BannerItem from './BannerItem';
import img1 from '../../images/banner/banner1.jpg';
import img2 from '../../images/banner/banner2.webp';
import img3 from '../../images/banner/banner3.jpg'
import img4 from '../../images/banner/download.jpg'
import img5 from '../../images/banner/banner7.jpg';
import img6 from '../../images/banner/banner6.jpg'


// https://ibb.co/S7QyWvC
// https://ibb.co/0BZTLcR
// https://ibb.co/xH78P5x

const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: img5,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: img6,
        prev: 5,
        id: 6,
        next: 1
    }
]
const Banner = () => {
    return (
        <div className="carousel flex-row  w-full py-10">
        {
            bannerData.map(slide => <BannerItem
                key={slide.id}
                slide={slide}
            ></BannerItem>)
        }
        
    </div>
    );
};

export default Banner;