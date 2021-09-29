import { combineReducers } from "redux";
import blogData from "./blogData";
import blogId from "./blogId";
import EditPost from "./EditBlog";
import userData from "./userData";
const rootReducer = combineReducers({
  blogData,
  blogId,
  EditPost,
  userData,
});

export default rootReducer;
