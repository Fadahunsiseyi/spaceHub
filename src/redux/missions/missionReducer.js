import { getMissions } from './api';

const JOIN_MISSION = ' JOIN_MISSION';
const LEAVE_MISSION = ' LEAVE_MISSION';
const FETCH_MISSION = ' FETCH_MISSION';

const initialState = []
export default function (state=initialState, action) {
    switch(action.type) {
        case FETCH_MISSION:
            return action.payload.map((mission) => ({
                ...mission,
                join: false
            }))
    }
}
