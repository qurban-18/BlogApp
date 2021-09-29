const initialState = "";

const EditPost = (state = initialState, { type, payload }) => {
  if (type == "EDIT_POST") {
    return (state = payload.data);
  } else {
    return state;
  }
};
export default EditPost;
