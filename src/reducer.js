export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: 'BQCX-oSAWei7V4QtJKOGyp9hH9G4yO8B2AkoJPGSdX0H5kC6x6n_L2yc1a2odTH7ahogv6J2ypWAHRxrVP2RuByqZ-6YIPEm1hbtoUScC3D08pfw9Ea944kNopCycsBvlul49w83LC1ysr2Q7gneEVc-fUEmndaCxkBbMyA7ngEOgW0PM_NV',
  //將 token: null, 換成自己的 token 可以免除之後一直按登入， 開發完後後要換回來 token: null,

};

const reducer = (state, action) => {
  console.log(action); //a debug tool
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };


    default:
      return state;
  }
};
//action =>  setSomething...

export default reducer;
