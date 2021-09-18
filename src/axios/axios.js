import axios from "axios";

// base url to make requests to the movie database
const instanc = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
// example
// instanc.get("/foo-bar")
// https://api.themoviedb.org/3/foo-bar

export default instanc;
