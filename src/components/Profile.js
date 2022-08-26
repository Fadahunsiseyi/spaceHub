import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const dragons = useSelector((state) => state.dragonReducer);
  const rockets = useSelector((state) => state.rocketReducers);
  const missions = useSelector((state) => state.missionReducer);
  const activeDragons = dragons.dragons.filter(
    (dragon) => dragon.reserve === true,
  );
  const activeRockets = rockets.rockets.filter(
    (rocket) => rocket.reserve === true,
  );
  const activeMissions = missions.filter((mission) => mission.join);
  return (
    <div className="wrapper_profile">
      <div className="rockets-profile">
        <h2>My Rockets</h2>
        <ul className="lists">
          {activeRockets.length > 0 ? (
            activeRockets.map((rock) => (
              <li key={rock.rocket_name}>{rock.rocket_name}</li>
            ))
          ) : (
            <li>
              <p>Reserved Rockets Not Found</p>
            </li>
          )}
        </ul>
      </div>
      <div className="rockets-profile">
        <h2>My Dragons</h2>
        <ul className="lists">
          {activeDragons.length > 0 ? (
            activeDragons.map((drag) => (
              <li key={drag.name}>{drag.name}</li>
            ))
          ) : (
            <li>
              <p>Reserved Rockets Not Found</p>
            </li>
          )}
        </ul>
      </div>
      <div className="mission-profile">
        <h2>My Missions</h2>
        <ul className="lists">
          {activeMissions.length > 0 ? (
            activeMissions.map((mission) => (
              <li key={mission.mission_name}>{mission.mission_name}</li>
            ))
          ) : (
            <li>
              <p>Activated Missions Not Found</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
