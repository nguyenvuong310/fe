import axios from "axios";

const getAllBook = () => {
  return axios.get(`http://localhost:8080/books`);
};
const getAllStudent = () => {
  return axios.get(`http://localhost:8080/student/getAll`);
};
const addOneBook = (book) => {
  return axios.post("http://localhost:8080/addbook", book);
};
const logout = () => {
  window.location.href = "/";
};
const createNewStudent = (student) => {
  return axios.post("http://localhost:8080/student/add", student);
};
const studentLogin = (username) => {
  return axios.get(
    `http://localhost:8080/student/username?username=${username}`
  );
};
const delBook = (bookId) => {
  return axios.delete(`http://localhost:8080/del-books/${bookId}`);
};
const delStu = (stuId) => {
  return axios.delete(`http://localhost:8080/student/del-student/${stuId}`);
};
const RequestIssue = (data) => {
  return axios.post("http://localhost:8080/request", data);
};
const getAllRequestIssue = () => {
  return axios.get(`http://localhost:8080/issue`);
};
const delRequestIssue = (id) => {
  return axios.delete(`http://localhost:8080/del-issue/${id}`);
};
const saveBookIssue = (data) => {
  return axios.post("http://localhost:8080/accept-issue", data);
};
const getAllIssuedBook = () => {
  return axios.get(`http://localhost:8080/all-issued`);
};

export {
  getAllBook,
  addOneBook,
  logout,
  createNewStudent,
  getAllStudent,
  studentLogin,
  delBook,
  delStu,
  RequestIssue,
  getAllRequestIssue,
  delRequestIssue,
  saveBookIssue,
  getAllIssuedBook,
};
