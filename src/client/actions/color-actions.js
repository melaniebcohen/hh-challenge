import superagent from 'superagent';

export const allColorsFetch = (colors) => ({
  type: 'ALL_COLORS_FETCH',
  payload: colors,
});

export const colorFetch = (color) => ({
  type: 'COLOR_FETCH',
  payload: color,
});

export const randomFetch = (color) => ({
  type: 'RANDOM_FETCH',
  payload: color,
});

export const allColorsFetchRequest = (page) => (dispatch, getState) => {
  console.log(page)
  return superagent.get(`http://localhost:3000/api/colors?page=${page}`)
    .set('Access-Control-Allow-Origin', '*')
    .then(res => {
      dispatch(allColorsFetch(res.body));
      return res;
    });
};

export const colorFetchRequest = (hex) => (dispatch, getState) => {
  return superagent.get(`http://localhost:3000/api/color/${hex}`)
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
