const initialState = "";
const blogId = (state = initialState, { type, payload }) => {
  if (type == "BLOG_ID") {
    return (state = payload.data);
  } else {
    return state;
  }
};

export default blogId;
