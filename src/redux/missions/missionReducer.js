import { getMissions } from './api';

const JOIN_MISSION = ' JOIN_MISSION';
const LEAVE_MISSION = ' LEAVE_MISSION';
const FETCH_MISSION = ' FETCH_MISSION';

const initialState = [];
export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MISSION:
      return action.payload.map((mission) => ({
        ...mission,
        join: false,
      }));
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload.id) {
          return {
            ...mission,
            join: !mission.join,
          };
        }
        return mission;
      });
    default:
      return state;
  }
}

export const fetchMission = () => async (dispatch) => {
  const missions = await getMissions();
  dispatch({ type: FETCH_MISSION, payload: missions });
};
export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: { id },
});
export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: { id },
});
