// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'animate.css';



// Import Swiper styles
import 'swiper/css'
// Import Swiper styles
import 'swiper/css';

const Banner = () => {
    return (

        <div className=''>

            <div className="mx-auto  border border-green-500">
                <Swiper className='w-3/4 mx-auto  border border-red-600'
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    // loop={true}
                    // autoplay={{ delay: 3500 }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >

                    <SwiperSlide className=''><img className='rounded-2xl' src="https://img.freepik.com/premium-photo/cropped-image-person-drawing-paper_1048944-3280274.jpg?w=1060" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='rounded-2xl' src="https://img.freepik.com/free-photo/tranquil-scene-reflects-beauty-mountain-range-generative-ai_188544-12627.jpg?t=st=1714151894~exp=1714155494~hmac=d0e3702caf35aa0664abf3adc87abca80895ae6c9aa7b286e2297310232fde93&w=1060" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='rounded-2xl ' src="https://img.freepik.com/free-photo/painting-flowers-field_188544-8649.jpg?t=st=1714151961~exp=1714155561~hmac=85839fc85272c3c9c686d46f4b61978cb713aa1f9c656157df4276bf54e2951f&w=1060" alt="" /></SwiperSlide>

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