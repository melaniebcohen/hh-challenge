import superagent from 'superagent';

export const colorFetch = colors => ({
  type: 'COLOR_FETCH',
  payload: colors,
});

export const colorFetchRequest = (index) => (dispatch, getState) => {
  return superagent.get(`http://localhost:3000/api/colors`)
    .set('Access-Control-Allow-Origin', '*')
    .then(res => {
      console.log(res.body)
      dispatch(colorFetch(res.body));
      return res;
    });
};