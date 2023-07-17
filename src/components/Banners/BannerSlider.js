import React, { useContext } from 'react'
import pic1 from '../../ASSETS/pic1.jpg'
import pic2 from '../../ASSETS/pic2.jpg'
import pic3 from '../../ASSETS/pic3.jpg'
import Slider from 'react-slick'
import './BannerSlider.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/Context'
const BannerSlider = () => {
    const data =
        [
            {
                id: 1,
                image: pic1, 
                title: 'Material Management made simple', 
                Description: 'Login for a one stop solution for warehouse management', 
                button: 'link to login'
            },

            { id: 2, image: pic2, title: 'Material Management made simple', Description: 'Login for a one stop solution for warehouse management', button: 'link to login' }, 
            { id: 3, image: pic3, title: 'Material Management made simple', Description: 'Login for a one stop solution for warehouse management', button: 'link to login' }
        ]
    var settings = {
        dots: true,
        isFinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000

    };


    const {login,setlogin}=useContext(UserContext);


    return (
        <div className='bannerslider'>
            <Slider className='bannerslider' {...settings}>
                {
                    data.map(item => {
                        return (
                            <div className='imagecont' key={item.id}>
                                <img src={item.image} alt='no imgage' />
                                <div className='content'>
                                    <h1>{item.title}</h1>
                                    <h3>{item.Description}</h3>
                                    {login===null?<Link className='btn btn-primary btn-lg' to="/login">Login</Link>:<div></div>}
                                </div>



                            </div>
                        )
                    })
                }
            </Slider></div>
    )
}

export default BannerSlider