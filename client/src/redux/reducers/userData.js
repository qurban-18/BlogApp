const initialState = "";
const userData = (state = initialState, { type, payload }) => {
  if (type === "USER_LOGIN") {
    return (state = payload.data);
  } else {
    return state;
  }
};

export default userData;
