import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const uniqueUids = [...new Set(getState().posts.map((post) => post.userId))];
  uniqueUids.forEach((uid) => dispatch(fetchUser(uid)));
};

const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceholder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: res.data,
  });
};

const fetchUser = (uid) => async (dispatch) => {
  const res = await jsonPlaceholder.get(`/users/${uid}`);

  dispatch({
    type: "GET_USER",
    payload: res.data,
  });
};

export { fetchPosts, fetchUser, fetchPostsAndUsers };
