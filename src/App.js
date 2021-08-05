import React, {Component} from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as Static from "./assets/Static.js";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import * as actionCreators from "./store/actions/index";

class App extends Component {
    componentDidMount(){
        // await this.props.fetchBooks();
        // await this.props.filterBooks();
      }

    render() {
        return (<div>
            <Navbar/>
            <Switch>
                <Route path={
                        Static.HOMEURL
                    }
                    component={Home}/>
                <Redirect to={
                    Static.HOMEURL
                }/>
            </Switch>
            <Footer/>
        </div>)
    }

}

const mapStateToProps = state => ({
  books: state.books
  });
  
  // export default App;
  const mapDispatchToProps = dispatch => ({
    // fetchBooks: () => dispatch(actionCreators.fetchBooks),
    // filterBooks: () => dispatch(actionCreators.filterBooks),
  });

  export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(App)
  );