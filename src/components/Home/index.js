import React from "react";
import {connect} from "react-redux";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faEdit, faCheckSquare, faTimes} from '@fortawesome/free-solid-svg-icons'
// import * as Static from "../../assets/Static.js";
// import {Link} from "react-router-dom";
import SearchBar from "../SearchBar";
import Books from "../Book";
import * as actionCreators from "../../store/actions/";

class index extends React.Component {

    // constructor() {
    //     super();

    // }

    componentDidMount(){
        // this.props.fetchBooks()
        this.props.loading()
    }
    
    render() {
        return (
            <div className="container my-5">
                <SearchBar/>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <Books/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // auth: state.auth,
    // gift: state.gift,
    // notification: state.notification,
  });
  
  // export default App;
  const mapDispatchToProps = dispatch => ({
    fetchBooks: () => dispatch(actionCreators.fetchBooks),
    loading: () => dispatch(actionCreators.loading),
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(index);