import React from "react";
import {connect} from "react-redux";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faEdit, faCheckSquare, faTimes} from '@fortawesome/free-solid-svg-icons'
// import * as Static from "../../assets/Static.js";
// import {Link} from "react-router-dom";
import Spinner from "../spinner"
class index extends React.Component {

    // constructor() {
    //     super();
    // }

    render() {
        let lodaing = false

        if (lodaing) {
            return (<div className="text-center">
                <Spinner/>
            </div>)
        } else {
            return (<div className="card-columns">
                <div className="card">
                    <img className="card-img-top border border-dark" src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/5098/9781509885275.jpg" alt="Card cap"
                        style={
                            {height: "50%"}
                        }/>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <h5 className="card-title">The 117-Storey Treehouse</h5>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-12 text-right">
                                <small className="text-muted">4.5 of 5</small>
                                <br/>
                                <small className="text-muted">135.5$</small>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-6">
                                <small className="text-muted">Childrens-Books</small>
                            </div>
                            <div className="col-6 text-right">
                                <small className="text-muted">Andy Griffiths</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top border border-dark" src="https://miro.medium.com/max/1104/1*-6SFOMA8WFdKRaCq3ahsiA.png" alt="Card cap"
                        style={
                            {height: "50%"}
                        }/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top border border-dark" src="https://images-na.ssl-images-amazon.com/images/I/71w8vuIurNL.jpg" alt="Card cap"
                        style={
                            {height: "50%"}
                        }/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top border border-dark" src="https://miro.medium.com/max/1104/1*-6SFOMA8WFdKRaCq3ahsiA.png" alt="Card cap"
                        style={
                            {height: "50%"}
                        }/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top border border-dark" src="https://images-na.ssl-images-amazon.com/images/I/71w8vuIurNL.jpg" alt="Card cap"
                        style={
                            {height: "50%"}
                        }/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top border border-dark" src="https://miro.medium.com/max/1104/1*-6SFOMA8WFdKRaCq3ahsiA.png" alt="Card cap"
                        style={
                            {height: "50%"}
                        }/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>)
        }
    }
}

const mapStateToProps = state => ({});

// export default App;
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(index);
