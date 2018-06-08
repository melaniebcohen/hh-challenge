import superagent from 'superagent';

export const colorFetch = (colors) => ({
  type: 'COLOR_FETCH',
  payload: colors,
});

export const randomFetch = (color) => ({
  type: 'RANDOM_FETCH',
  payload: color,
});

export const colorFetchRequest = (index) => (dispatch, getState) => {
  return superagent.get(`http://localhost:3000/api/colors`)
    .set('Access-Control-Allow-Origin', '*')
    .then(res => {
      dispatch(colorFetch(res.body));
      return res;
    });
};

export const randomFetchRequest = () => (dispatch, getState) => {
  return superagent.get(`http://localhost:3000/api/random`)
    .set('Access-Control-Allow-Origin', '*')
    .then(res => {
      dispatch(randomFetch(res.body));
      return res;
    });
};
