import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import SearchBox from './search-form-component';
import SearchResult from './search-result-component';
import { search } from '../../actions/plants';
import './plants.css';

class PlantSearch  extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      searchTerm: '',
      searching: false,
      searchResult: props.searchResult
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(value) {
    this.setState((prevState) => ({
      ...prevState,
      searchTerm: value
    }));
    this.props.onSeachHandler(value);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searching !== this.props.searching && !nextProps.searching) {
      this.setState((prevState) => ({
        ...prevState,
        searching: nextProps.searching,
        searchResult: nextProps.searchResult
      }));
    } else if (nextProps.searching !== this.props.searching) {
      this.setState((prevState) => ({
        ...prevState,
        searching: nextProps.searching
      }));
    }
  }

  componentDidMount() {
    this.props.onSeachHandler('');
  }

  renderPlants() {
    return (
      <div className="plants">
        <section id="search">
          <label htmlFor="search-input">
            <i className="fa fa-search" aria-hidden="true"></i>
            <span className="sr-only">Search...</span>
          </label>
          <input id="search-input" type="text" className="form-control input-lg" placeholder="Search..."
            value={this.state.searchTerm}
            onChange={(e) => { this.onChangeHandler(e.target.value); }} />
        </section>
        {!this.state.searching && <SearchResult items={this.state.searchResult} />}
      </div>
    );
  }

  renderDefault() {
    return (
      <div>Please login!</div>
    );
  }

  render() {
    return (
      <div className="PlantSearch">
        {this.props.isAuthenticated ? this.renderPlants() : this.renderDefault()}
      </div>
    );

    // return (<form onSubmit={(e) => {
    //   e.preventDefault();
    //   this.onSeachHandler();
    // }}>
    //   <SearchBox term={searchTerm} onChange={this.onChangeHandler} />
    //   <SearchResult items={searchResult} />
    // </form>);
  }
}

PlantSearch.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  searching: PropTypes.bool.isRequired,
  searchResult: PropTypes.array.isRequired,
  onSeachHandler: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!(state.auth && state.auth.response && state.auth.response.username),
  searchResult: state.plants.searchResult,
  searching: state.plants.searching
});

const mapDispatchToProps = (dispatch) => ({
  onSeachHandler: (term) => dispatch(search(term))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlantSearch));
