import { useDispatch } from 'react-redux';
import { createReserve } from '../redux/rockets/rocketReducers';

const Drag = (props) => {
  const dragon = props;
  const dispatch = useDispatch();
  const { reserve } = dragon.drag;
  const handleReserve = (e) => {
    e.target.classList.toggle('reservedButton');
    const toggle = !reserve;
    const setReserve = (() => ({ ...dragon.drag, reserve: toggle }));
    dispatch(createReserve(setReserve()));
  };

  return (
    <div className="wrapper">
      <div className="image">
        <img src={dragon.drag.flickr_images[0]} alt={dragon.name} className="rocketImage" />
      </div>
      <div className="details">
        <h2>{dragon.drag.name}</h2>
        <br />
        <p className="rocket-p">
          {reserve && <small> Reserved </small>}
          {dragon.drag.description}
        </p>
        <br />
        <button onClick={(e) => handleReserve(e)} type="button">{reserve ? 'Cancel Reservation' : 'Reserve Dragon'}</button>
      </div>
    </div>
  );
};

export default Drag;
