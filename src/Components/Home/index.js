import "./index.css"
import React from "react";
import Slider from "react-slick";
import Header from "../Header"
import context from "../../context/context"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () =>(
    <context.Consumer>
        {value=>{
            const {cartList,Featuredcategories} = value
            var settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 4,
                initialSlide: 0,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                      dots: false
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      initialSlide: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]
              }
            return(
                <>
                 <Header/>
                 <div className="home-container">
                    <div className="main-container">
                        <div className="main-box">
                            <div className="home-text">
                                <h1 className="txt"> Discover, select, and buy your favorite products effortlessly.</h1>
                                <p className="para-home">Shop the latest products with unbeatable deals! Enjoy a seamless shopping experience and save big on every purchase.</p>
                                <button type="button" className="btn-shop">Discover Store</button>
                            </div>
                            <img src="https://coderthemes.com/wb/greencart/assets/hero-2-7f8a8963.png" className="home-img" type="img" alt="homeImage"/>
                        </div>
                    </div>
                    <div className="feature-section">
                        <h1 className="head-text">Featured Categories</h1>
                        <ul className="slider-container">
                            <Slider {...settings}>
                                {Featuredcategories.map((d)=>(
                                    <li className="box-f" key={d.id}>
                                        <img src={d.image} alt={d.name} className="img-f"/>
                                        <h3 className="title">{d.name}</h3>
                                    </li>
                                ))}
                            </Slider>
                        </ul>
                    </div>
                </div>
                </>
            )
        }}
    </context.Consumer>
)

export default Home