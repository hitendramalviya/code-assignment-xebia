import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import Routes from './Routes';

import { setAuthUser } from '../util/util';
import { logOut } from '../actions/login';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: this.props.isAuthenticated
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    setAuthUser(null);
    this.props.handleLogout();
    this.props.history.push('/');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated !== this.props.isAuthenticated) {
      this.setState((prevState) => ({
        ...prevState,
        isAuthenticated: nextProps.isAuthenticated
      }));
    }
  }

  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Welcome, {!this.state.isAuthenticated ? 'Guest' : this.props.username}</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {this.state.isAuthenticated
                ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
                : [
                  <NavItem key={2} href="/" onClick={
                    () => {
                      this.props.history.push('/');
                    }
                  }>
                    Login
                  </NavItem>
                ]}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
        {this.props.children}
      </div>);
  }
}

App.propTypes = {
  children: PropTypes.element,
  isAuthenticated: PropTypes.bool.isRequired,
  username: PropTypes.string,
  history: PropTypes.any,
  handleLogout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!(state.auth && state.auth.response && state.auth.response.username),
  username: state.auth && state.auth.response && state.auth.response.username
});

const mapDispatchToProp = (dispatch) => ({
  handleLogout: () => dispatch(logOut())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProp)(App));
