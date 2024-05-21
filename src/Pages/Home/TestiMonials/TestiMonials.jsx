import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules'
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";


const TestiMonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle subHeading={'What Our Client Say'} heading={'Testimonials'} />

            <Swiper
                
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper "
            >
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center  my-16 mx-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-10 text-center w-1/2">{review.details}</p>
                            <h1 className="text-2xl text-orange-400">{review.name}</h1>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default TestiMonials;