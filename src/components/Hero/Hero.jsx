import './Hero.css'
import { FaLocationDot } from "react-icons/fa6";
import Services from './Services/Services';
const Hero = () => {
    const servicesCount = [{id:1900,name:'Premium Product'},{id:2000,name:'Happy Customer'},{id:28,name:'Awards Winning'}];

    return (
        <section className='hero-wrapper'>
            <div className='innerWidth flexCenter hero-container'>
                <div className='hero-left'>
                    <div className='hero-title'>
                        <div className="orange-circle"></div>
                        <h1>Discover<br />Most Suitable<br />Property</h1>

                    </div>

                    <div className="hero-description hero-display">
                        <p>Find a variety of properties that suit you very easilty</p>
                        <p>Forget all difficulties in finding a residence for you</p>
                    </div>
                    <div className='search-bar'>
                        <FaLocationDot color='blue' size={25} />
                        <input type="text" />
                        <button className='button'>Search</button>
                    </div>
                    <div className='services-count'>
                        {servicesCount.map(service=><Services key={service.id} service={service}></Services>)}
                    </div>
                </div>
                <div className='hero-right'>
                    <div className="image-container">
                        <img src="/public/hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;