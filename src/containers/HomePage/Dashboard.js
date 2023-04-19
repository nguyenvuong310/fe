import React, { Component } from "react";
import { connect } from "react-redux";

import { Switch, Route } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import AddBook from "./function/AddBook";
import AllBook from "./function/AllBook";
import AllStudent from "./function/AllStudent";
import { Link } from "react-router-dom";
import logoHome from "../../assets/test1.jpg";
import HomePage from "./function/HomePage";
import "./Dashboard.scss";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenSideBar: false,
    };
  }
  openSide = () => {
    this.setState({
      isOpenSideBar: !this.state.isOpenSideBar,
    });
  };
  render() {
    return (
      <div>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars" onClick={() => this.openSide()}></i>
              <div className="Header-logo">
                <Link to="/dashboard">
                  <img src={logoHome}></img>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container-dashboard">
          {this.state.isOpenSideBar && (
            <div className="SideBar">
              <Sidebar />
            </div>
          )}

          <div className="routers">
            <Switch>
              <Route path="/dashboard/" component={HomePage} exact />
              <Route path="/dashboard/addBook" component={AddBook} exact />
              <Route path="/dashboard/allBook" component={AllBook} exact />
              <Route
                path="/dashboard/manageStudent"
                component={AllStudent}
                exact
              />
              <Route path="/dashboard/issuedBook" component={AddBook} exact />
              <Route
                path="/dashboard/allissuedBook"
                component={AddBook}
                exact
              />
              <Route path="/dashboard/RecomBook" component={AddBook} exact />
              <Route
                path="/dashboard/Recommandation"
                component={AddBook}
                exact
              />
              <Route path="/dashboard/stuReqIssue" exact component={AddBook} />
              <Route path="/dashboard/issue_return" exact component={AddBook} />
              <Route path="/dashboard/returnBook" exact component={AddBook} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
