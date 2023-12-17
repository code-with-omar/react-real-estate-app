import './Hero.css'

const Hero = () => {
    return (
        <section className='hero-wrapper'>
            <div className='paddings innerWidth flexCenter hero-container'>
                <div className='hero-left'>
                    left section 
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