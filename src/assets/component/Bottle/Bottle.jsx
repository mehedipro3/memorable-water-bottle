import PropTypes from 'prop-types';

import './Bottle.css'

const Bottle = ({bottle , handleVisitedBottles}) => {
  
  const {name,img,price}=bottle;
  return (
    <div className="bottle">
      <h3>Bottle: {name}</h3>
      <img src={img} alt="" />
      <p>price : ${price}</p>
      <button onClick={()=>handleVisitedBottles(bottle)}>purchase</button>
    </div>
  );
};

Bottle.propTypes={
  bottle : PropTypes.object.isRequired,
  handleVisitedBottles: PropTypes.func.isRequired
}

export default Bottle;