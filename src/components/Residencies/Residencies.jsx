

import './Residencies.css'
import Card from './Card/Card.jsx';
import { useEffect, useState } from 'react';

const Residencies = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('slider.json')
            .then(res => res.json())
            .then(data => {
                setData(data);
               
            })
    }, [])
    
    return (
        <div className='res-wrapper'>
            <div className='paddings innerWidth res-container'>
                <div className="res-head">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>
                <Card card={data}></Card>
            </div>

        </div>
    );
};

export default Residencies;