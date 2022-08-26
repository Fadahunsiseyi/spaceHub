import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDragonFromApi } from '../redux/dragons/dragonReducer';
import Drag from '../components/Dragon';

let initial = true;

const DragonList = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragonReducer);

  useEffect(() => {
    if (initial) {
      dispatch(getDragonFromApi());
      initial = false;
    }
  }, []);
  return (
    <div className="rockets">
      {dragons.dragons.map((drag) => (
        <Drag key={drag.id} drag={drag} />
      ))}
    </div>
  );
};

export default DragonList;
