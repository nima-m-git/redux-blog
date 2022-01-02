import { connect } from "react-redux";

const UserHeader = ({ user }) => <div className="header">{user?.name}</div>;

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.uid) };
};

export default connect(mapStateToProps, {})(UserHeader);
