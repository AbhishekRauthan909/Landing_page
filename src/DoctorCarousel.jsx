import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import './DoctorCarousel.css'
import Doctor from './Doctor';
function DoctorCarousel() {
    const responsive = {
        superLargeDesktop: 
        {
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const DoctorData=[
        {
            id:1,
            imageUrl:"https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
            name:"Mr Ravi",
            rating:"4.5",
        },
        {
            id:2,
            imageUrl:"https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
            name:"Mr Kabir",
            rating:"4.5",
        },
        {
            id:3,
            imageUrl:"https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
            name:"Mr Rahul",
            rating:"4.5",
        },
        {
            id:4,
            imageUrl:"https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
            name:"Mr Amit",
            rating:"4.5",
        },
        {
            id:5,
            imageUrl:"https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
            name:"Mr Kiran",
            rating:"4.5",
        },
        {
            id:6,
            imageUrl:"https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
            name:"Mr Aaqib",
            rating:"4.5",
        },
        {
            id:7,
            imageUrl:"https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
            name:"Mr Murtasim",
            rating:"4.5",
        },
      ]

      const doc=DoctorData.map(item =>(
        <Doctor name={item.name} url={item.imageUrl}
        rating={item.rating}
        />
      ))

  return (
    <div className='dcar'>
        <h1>Our Top Rated Doctors</h1>
    <Carousel responsive={responsive}>
        {doc}
    </Carousel>
    </div>
  )
}

export default DoctorCarousel