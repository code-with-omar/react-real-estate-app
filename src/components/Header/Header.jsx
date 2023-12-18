
import './Header.css'
const Header = () => {
    return (
        <div>
            <header className='header-wrapper'>
                <div className=' innerWidth paddings  header-container '>

                    <img src="/src/images/logo.png" alt="logo" width={100} />
                    <div className='header-menu flexCenter'>
                        <a href="">Residencies</a>
                        <a href="">Our Value</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>
                        <button className='button'>
                            <a href="" style={{ color: 'white' }}>Contact</a>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;