/* Reducer:
    ЧИСТАЯ функция, которая принимает прошлое
    состояние и action.
    Возврщает новое состояние.
*/
const reducer = (state, action) => {
  const { name, value } = action;

  const newState = {
    ...state,
    [name]: value,
  };

  return newState;
};

export default reducer;
