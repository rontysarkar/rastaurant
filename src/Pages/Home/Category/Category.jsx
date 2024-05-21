import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle subHeading={"From 11:00am to 10:00pm"} heading={"ORDER ONLINE"} />
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-16"
            >
                <SwiperSlide>
                   <img src={img1} alt="" />
                   <h1 className='text-4xl uppercase -mt-16 text-center text-white'>Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                   <img src={img2} alt="" />
                   <h1 className='text-4xl uppercase -mt-16 text-center text-white'>Pizza</h1>
                </SwiperSlide>
                <SwiperSlide>
                   <img src={img3} alt="" />
                   <h1 className='text-4xl uppercase -mt-16 text-center text-white'>Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                   <img src={img4} alt="" />
                   <h1 className='text-4xl uppercase -mt-16 text-center text-white'>Desserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                   <img src={img5} alt="" />
                   <h1 className='text-4xl uppercase -mt-16 text-center text-white'>Salad</h1>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;