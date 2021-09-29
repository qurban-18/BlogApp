export const READ_DATA = (data) => {
  return {
    type: "READ_DATA",
    payload: { data },
  };
};

export const BLOG_ID = (data) => {
  return {
    type: "BLOG_ID",
    payload: { data },
  };
};
export const EDIT_BLOG = (data) => {
  return {
    type: "EDIT_BLOG",
    payload: {
      data,
    },
  };
};

export const USER_LOGIN = (data) => {
  return {
    type: "USER_LOGIN",
    payload: { data },
  };
};
