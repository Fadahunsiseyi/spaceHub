import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketFromApi } from '../redux/rockets/rocketReducers';
import Rock from '../components/Rocket';

let initial = true;

const RocketList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketReducers);

  useEffect(() => {
    if (initial) {
      dispatch(getRocketFromApi());
      initial = false;
    }
  }, []);
  return (
    <div className="rockets">
      {rockets.rockets.map((rock) => (
        <Rock key={rock.id} rock={rock} />
      ))}
    </div>
  );
};

export default RocketList;
