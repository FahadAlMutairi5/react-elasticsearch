import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
// import * as actionCreators from "../../store/actions";

class SearchBar extends Component {
  render() {
    let searchBy = this.props.searchBy
    return (
      <div className="form-group mt-5">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder={this.props.namePlace}
            onChange={event => 
            searchBy === 'gift' ? this.props.filterGifts(event.target.value) : searchBy === 'user' ? this.props.filterUsers(event.target.value) : searchBy === 'ads' ? this.props.filterAds(event.target.value) : searchBy === 'category' ? this.props.filterCategory(event.target.value) : this.props.filterNotification(event.target.value)}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // filterUsers: query => dispatch(actionCreators.filterUsers(query)),
    // filterGifts: query => dispatch(actionCreators.filterGifts(query)),
    // filterNotification: query => dispatch(actionCreators.filterNotification(query)),
    // filterAds: query => dispatch(actionCreators.filterAds(query)),
    // filterCategory: query => dispatch(actionCreators.filterCategory(query)),
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SearchBar);