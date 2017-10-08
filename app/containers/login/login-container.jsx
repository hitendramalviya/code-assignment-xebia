import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import { login } from '../../actions/login';
import { setAuthUser } from '../../util/util';
import LoaderButton from '../../shared/loader-button-component';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isLoading: this.props.isLoading
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onLoginHandler(this.state.username, this.state.password);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.username !== this.props.username) {
      // alert(nextProps.username);
      setAuthUser(nextProps.username);
      this.props.history.push('/plants');
    } else if (nextProps.isLoading !== this.props.isLoading) {
      this.setState((prevState) => ({
        ...prevState,
        isLoading: nextProps.isLoading
      }));
    }
  }

  componentDidMount() {
    if (this.props.username) {
      this.props.history.push('/plants');
    }
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            bsStyle="primary"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
          />
        </form>
      </div>
    );
  }
}
// const style = {
//   margin: 15,
// };

Login.propTypes = {
  onLoginHandler: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  history: PropTypes.any,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  username: state.auth && state.auth.response ? state.auth.response.username || '' : '',
  isLoading: !!(state.auth && state.auth.inProgress)
});

const mapDispatchToProps = (dispatch) => ({
  onLoginHandler: (username, password) => dispatch(login(username, password))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));