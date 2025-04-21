// src/Components/OfferSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import offer1 from '../Image/slide1.jpg';
import offer2 from '../Image/slide2.jpg';
import offer3 from '../Image/slide3.jpg';
import offer4 from '../Image/slide4.jpg';// Add more if needed

const offers = [
  {
    image: offer1,
    title: 'Flat ₹35 Cashback with MobiKwik UPI',
    description: 'Flat Rs.35 Cashback with MobiKwik UPI',
    validity: 'Valid upto 30 Jun',
  },
  {
    image: offer2,
    title: '₹200 Cashback Using Wallet',
    description: 'Get upto ₹200 Cashback using MobiKwik Wallet',
    validity: 'Valid upto 30 Jun',
  },
  {
    image: offer3,
    title: '10% OFF Code SMART',
    description: 'Use Coupon Code: SMART',
    validity: 'Valid upto 31 Dec',
  },
  {
    image: offer4,
    title: '10% OFF on SmartBus Card',
    description: 'Upto ₹200 OFF on each trip',
    validity: 'Valid upto 1 Jan',
  },
  {
    image: offer4,
    title: '10% OFF on SmartBus Card',
    description: 'Upto ₹200 OFF on each trip',
    validity: 'Valid upto 1 Jan',
  },
  {
    image: offer4,
    title: '10% OFF on SmartBus Card',
    description: 'Upto ₹200 OFF on each trip',
    validity: 'Valid upto 1 Jan',
  }
];

const OfferSlider = () => {
  return (
    <div className="container my-5" style={{ maxWidth: '1300px' }}>
      <h2 className="text-center fw-bold">Offers</h2>
      <p className="text-center text-muted mb-4">Grab best offers for easy bus ticket booking</p>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
            breakpoints: {
                0: {
                  slidesPerView: 1, // Mobile
                },
                576: {
                  slidesPerView: 2, // Small devices (like large phones)
                },
                768: {
                  slidesPerView: 3, // Tablets
                },
                1200: {
                  slidesPerView: 4, // Desktops and up
                },
              }
              
        }}
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index}>
            <div className="card  shadow-sm ">
              <img src={offer.image} className="card-img-top" alt={offer.title} />
              <div className="card-body">
                <h6 className="card-title fw-bold">{offer.title}</h6>
                <p className="card-text text-muted">{offer.description}</p>
                <p className="small text-muted mb-0">{offer.validity}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OfferSlider;
