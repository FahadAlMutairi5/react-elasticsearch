import React from "react";
class index extends React.Component {
  render() {
    return (
      // <!-- Footer -->

      <div className="text-center text-lg-start fixed-bottom" style={{backgroundColor: "#052d63", color: "white"}}>
         © {new Date().getFullYear()} Books Co.
      </div>
      // <!-- Footer -->
    );
  }
}
export default index;
