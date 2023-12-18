import './Companies.css';
import prologisImage from '../../images/prologis.png'
import towerImage from '../../images/tower.png';
import equinixImage from '../../images/equinix.png';
import realtyImage from '../../images/realty.png';
const Companies = () => {


    return (
        <section className='companies-wrapper'>
            <div className="paddings innerWidth companies-container">
                <img src={prologisImage} alt="" />
                <img src={towerImage} alt="" />
                <img src={equinixImage} alt="" />
                <img src={realtyImage} alt="" />
            </div>
        </section>
    );
};

export default Companies;