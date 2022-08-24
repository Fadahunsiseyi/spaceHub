// actions
const GET_ALL_ROCKETS = 'GET_ALL_ROCKETS';
const RESERVEVATION = 'RESERVEVATION';
const CREATE_JOIN = 'CREATE_JOIN';
const CREATE_RESERVATION = 'CREATE_RESERVATION';

// APIS
const API = 'https://api.spacexdata.com/v3/rockets';

// IState
const IState = {
  rockets: [],
};

// ACTION CREATORS

export const getRockets = (payload) => ({
  type: GET_ALL_ROCKETS,
  payload,
});

export const createReserve = (payload) => ({
  type: RESERVEVATION,
  payload,
});

export const createJoin = (payload) => ({
  type: CREATE_JOIN,
  payload,
});

export const createReservation = (payload) => ({
  type: CREATE_RESERVATION,
  payload,
});

// ACTIONS

export const getRocketFromApi = () => async (dispatch) => {
  const request = await fetch(API);
  const response = await request.json();
  dispatch(getRockets(response));
};
