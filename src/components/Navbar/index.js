import React from "react";

import bookLog from "../../assets/booksLogo.png";
import elasticLog from "../../assets/ElasticSearchLogo.svg";

class index extends React.Component {
    render() {
        return (
        <nav className="navbar navbar-light col-12"
            style={
                {
                    backgroundColor: "#052d63",
                    width: '100%',
                    height: '50%'
                }
        }>
            <div className="col-12">
                <div className="navbar-brand align-self-center animate__animated animate__lightSpeedInRight animate__infinite animate__slow">
                    <img style={
                            {
                                width: "5rem",
                                height: "5rem"
                            }
                        }
                        className="rounded p-1"
                        alt="Elasticsearchlogo"
                        src={elasticLog}/>
                </div>
                <div className="navbar-brand align-self-center animate__animated animate__lightSpeedInLeft animate__infinite animate__slow">
                    <img style={
                            {
                                width: "5rem",
                                height: "5rem"
                            }
                        }
                        className="rounded p-1"
                        alt="Booklogo"
                        src={bookLog}/>
                </div>
            </div>
        </nav>);
    }
}

export default index;
