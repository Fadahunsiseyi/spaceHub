import { useDispatch } from 'react-redux';
import { createReserve } from '../redux/rockets/rocketReducers';

const Rock = (props) => {
  const rocket = props;
  const dispatch = useDispatch();
  const { reserve } = rocket.rock;
  const handleReserve = (e) => {
    e.target.classList.toggle('reservedButton');
    const toggle = !reserve;
    const setReserve = (() => ({ ...rocket.rock, reserve: toggle }));
    dispatch(createReserve(setReserve()));
  };

  return (
    <div className="wrapper">
      <div className="image">
        <img src={rocket.rock.flickr_images[0]} alt={rocket.rocket_name} className="rocketImage" />
      </div>
      <div className="details">
        <h2>{rocket.rock.rocket_name}</h2>
        <br />
        <p className="rocket-p">
          {reserve && <small> Reserved </small>}
          {rocket.rock.description}
        </p>
        <br />
        <button onClick={(e) => handleReserve(e)} type="button">{reserve ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
      </div>
    </div>
  );
};

export default Rock;
