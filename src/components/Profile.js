import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketReducers);
  const missions = useSelector((state) => state.missionReducer);
  const activeRockets = rockets.rockets.filter(
    (rocket) => rocket.reserve === true,
  );
  const activeMissions = missions.filter((mission) => mission.join);
  return (
    <div className="wrapper_profile">
      <div className="rockets-profile">
        <h3>My Rockets</h3>
        <ul className="lists">
          {activeRockets.length > 0 ? (
            activeRockets.map((rock) => (
              <li key={rock.rocket_name}>{rock.rocket_name}</li>
            ))
          ) : (
            <li>
              <h6>Reserved Rockets Not Found</h6>
            </li>
          )}
        </ul>
      </div>
      <div className="mission-profile">
        <h3>My Missions</h3>
        <ul className="lists">
          {activeMissions.length > 0 ? (
            activeMissions.map((mission) => (
              <li key={mission.mission_name}>{mission.mission_name}</li>
            ))
          ) : (
            <li>
              <h6>Activated Missions Not Found</h6>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
