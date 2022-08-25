import { useSelector } from 'react-redux';
import '../styles/myProfile.css';

const Myprofile = () => {
  const rockets = useSelector((state) => state.rocketReducers);
  const missions = useSelector((state) => state.missionReducer);
  console.log(missions, 'the mission in profile');
  const activeRockets = rockets.rockets.filter((item) => item.reserve === true);
  const activeMissions = missions.filter((mission) => mission.join);
  /* const misItem = GState.missions.filter((item) => item.join === true); */

  return (
    <div className="wrapper_profile">
      <div className="profile">
        <h3>My Rockets</h3>
        <ul className="list">
          {activeRockets.map((rock) => <li key={rock.rocket_name}>{rock.rocket_name}</li>)}
        </ul>
      </div>
      <div className="profile">
        <h3>My Missions</h3>
        {/* <ul className="list">
          {
            misItem.map((mission) => (
              <li key={mission.mission_name}>{mission.mission_name}</li>
            ))
          }
        </ul> */}
      </div>
    </div>
  );
};

export default Myprofile;
