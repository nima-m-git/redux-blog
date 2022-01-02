import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

const PostList = ({ fetchPostsAndUsers, posts }) => {
  useEffect(() => {
    fetchPostsAndUsers();
  }, [fetchPostsAndUsers]);

  return (
    <div className="ui relaxed divided list">
      {posts.map(({ id, userId, title, body }) => {
        return (
          <div className="item" key={id}>
            <i className="large middle aligned icon user" />
            <div className="content">
              <div className="description">
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </div>
            <UserHeader uid={userId} />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
