import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { leaveMission, joinMission } from '../redux/missions/missionReducer';

const Mission = (props) => {
  const {
    id,
    name,
    description,
    join,
  } = props;
  console.log(id,
    name,
    description,
    join);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (join) {
      dispatch(leaveMission(id));
    } else {
      dispatch(joinMission(id));
    }
  };
  return (
    <tr className="mission-container">
      <td className="name-field">{name}</td>
      <td className="description-field">{description}</td>
      <td className="status-field">
        <p className={join ? 'active' : ''}>
          {join ? 'Active Member' : 'NOT A MEMBER'}
        </p>
      </td>
      <td className="action-container">
        <button
          type="button"
          className={join ? 'btn active' : 'btn'}
          onClick={handleClick}
        >
          {join ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  join: PropTypes.bool.isRequired,
};

export default Mission;
