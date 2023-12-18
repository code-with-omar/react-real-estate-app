import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Card.css'
const Card = (props) => {
    const { card } = props;
    console.log(card)
    return (

        <Swiper>
            {card.map((data, i) => (
                <SwiperSlide key={i}>
                    <div key={data.image} className='res-card'>
                        <img src={data.image} alt="" />
                        <span className='res-price' style={{ color: 'orange' }}>$</span>
                        <span className=''>{data.price}</span>
                        <span>{data.name}</span>
                        <span>{data.detail}</span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

    );
};

Card.propTypes = {
    card: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Card;
