// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'animate.css';



// Import Swiper styles
import 'swiper/css'
// Import Swiper styles
import 'swiper/css';
import Slider from './Slider';

const Banner = () => {
    return (

        <div className=''>

            <div className="mx-auto ">
                <Swiper className='w-3/4 mx-auto z-10 relative  '
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3500 }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {/* slider 1 */}
                    <SwiperSlide >
                        <Slider text={'Streamline restaurant operations with ease. From orders to inventory, simplify management tasks for efficient and delightful dining experiences.'} image={'https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?t=st=1715429010~exp=1715432610~hmac=0d608e6a3d87bfbb686f53e6ba3d426bc4f74c2d289172fe2759bb3f565abcd8&w=900' }></Slider>
                    </SwiperSlide>

                    {/* slider 2 */}
                    <SwiperSlide >
                        <Slider text={'Your all-in-one solution for restaurant success. Seamlessly manage orders, inventory, and staff to elevate dining experiences and boost efficiency'} image={'https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?t=st=1715429066~exp=1715432666~hmac=6302b5777f7b9413a45463bc9eccb55b14085e1f899082486803f1cacf7c2fea&w=900'}></Slider>
                    </SwiperSlide>

                    {/* slider 3 */}
                    <SwiperSlide >
                        <Slider text={'Elevating restaurant management. Effortlessly streamline orders, inventory, and staff coordination for a seamless dining experience and business growth.'} image={'https://img.freepik.com/premium-photo/restaurant-ritz-carlton-toronto_865967-25259.jpg?w=900' }></Slider>
                    </SwiperSlide>



                </Swiper>
            </div>
            {/* <div data-aos="fade-up">
                            <h2 className="text-[#B18B5E] font-bold text-6xl md:text-7xl lg:text-8xl  text-center mb-8 mt-10">100+</h2>
                            <h2 className="text-[#B18B5E] font-bold text-3xl md:text-5xl lg:pb-10 text-center">Stunning and impressive unique <br />Arts & Crafts</h2>
                        </div> */}
        </div>

    );
};

export default Banner;