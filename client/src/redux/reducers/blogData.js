const initialState = "";

const blogData = (state = initialState, { type, payload }) => {
  if (type == "READ_DATA") {
    return (state = payload.data);
  } else {
    return state;
  }
};

export default blogData;
