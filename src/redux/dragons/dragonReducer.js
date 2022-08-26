// actions
const GET_ALL_DRAGONS = 'GET_ALL_DRAGONS';
const RESERVEVATION = 'RESERVEVATION';
const CREATE_JOIN = 'CREATE_JOIN';
const CREATE_RESERVATION = 'CREATE_RESERVATION';

// APIS
const dragonAPI = 'https://api.spacexdata.com/v3/dragons';

// IState
const IState = {
  dragons: [],
};

// ACTION CREATORS

export const getDragons = (payload) => ({
  type: GET_ALL_DRAGONS,
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

export const getDragonFromApi = () => async (dispatch) => {
  const request = await fetch(dragonAPI);
  const response = await request.json();
  dispatch(getDragons(response));
};

// REDUCERS

const reducer = (state = IState, action) => {
  switch (action.type) {
    case GET_ALL_DRAGONS:
      return { ...state, dragons: action.payload };
    case RESERVEVATION: {
      const changeState = state.dragons.map((element) => {
        if (element.id === action.payload.id) {
          return { ...element, reserve: action.payload.reserve };
        }
        return element;
      });
      return { ...state, dragons: changeState };
    }
    case CREATE_RESERVATION: {
      const changeState = state.dragons.map((element) => {
        if (element.id === action.payload.id) {
          return { ...element, reservation: action.payload.reservation };
        }
        return element;
      });
      return { ...state, dragons: changeState };
    }

    default:
      return state;
  }
};

export default reducer;
