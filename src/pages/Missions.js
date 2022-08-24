import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMission } from '../redux/missions/missionReducer';
import Mission from '../components/Mission';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMission());
    }
  }, [dispatch]);

  return (
    <div className="mission-container-list">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission
              key={mission.mission_id}
              id={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
              join={mission.join}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
