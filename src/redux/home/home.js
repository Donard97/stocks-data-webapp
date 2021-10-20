const COUNTRIES = 'app/home/FETCH-COUNTRIES';

const initialState = [];

const fetchData = (payload) => (
  {
    type: COUNTRIES,
    payload,
  }
);

export const listAPIcall = () => async (dispatch) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const finalData = await fetch('https://financialmodelingprep.com/api/v3/gainers?apikey=cd926d774483c2a7069aa5594126ce1d', requestOptions);
  const data = await finalData.json();
  dispatch(fetchData(data));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
