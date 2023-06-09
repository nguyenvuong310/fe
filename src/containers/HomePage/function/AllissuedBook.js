import React, { Component } from "react";
import { connect } from "react-redux";
// import { push } from "connected-react-router";
import { getAllIssuedBook } from "../../../services/userService";

class AllIssuedBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IssuedBook: [],
    };
  }
  async componentDidMount() {
    this.getAllIssue();
  }
  getAllIssue = async () => {
    let res = await getAllIssuedBook();
    console.log(res);
    this.setState({
      IssuedBook: res.data,
    });
  };

  render() {
    const { IssuedBook } = this.state;
    return (
      <div className="col-md-10 m-auto">
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "30px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          Student Requested to Admin to issue these Book
        </p>
        <table className="table table-bordered table-responsive-sm">
          <thead className="thead-dark">
            <tr>
              <th>MSSV</th>
              <th>Student Name</th>
              <th>Book Name</th>
              <th>Author</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {IssuedBook &&
              IssuedBook.map((book) => {
                return (
                  <tr key={book._id}>
                    <td>{book.mssv}</td>
                    <td>{book.studentName}</td>
                    <td>{book.bookName}</td>
                    <td>{book.author}</td>

                    <td>
                      {"  "}
                      <button
                        // onClick={() =>
                        //   dispatch(issuedReqDeletedByAdmin(book._id))
                        // }
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllIssuedBook);
