import React, { Component } from "react";
import { connect } from "react-redux";
import { changeActive } from "../../redux/actions/login";
class Login extends Component {
  login = () => {
    // localStorage.setItem("token", true);
    let RedirectUrl = this.props.location.state
    ? this.props.location.state.from.pathname
    : "/";
  // 修改redux中的token值
  this.props.changeActive(true);
  // this.props.login();
  console.log(RedirectUrl);
  // 登陆成功之后的跳转
  this.props.history.push(RedirectUrl);
  };
  render() {
    return (
      <div>
        Login
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
      token: state.token
    };
  };
const mapDispatchToProps = { changeActive };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
