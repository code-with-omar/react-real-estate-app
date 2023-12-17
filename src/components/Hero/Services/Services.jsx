import './Services.css'
const Services = (props) => {
    const {id,name}=props.service
    return (
        <div className='services'>
            <h2>{id} <span>+</span></h2>
            <h4>{name}</h4>
        </div>
    );
};

export default Services;