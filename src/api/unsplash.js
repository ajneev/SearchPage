import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID b8ab6ac45602774807ba27df2dde0fae257c3b3c9cff6ac14ac12fe5f40ff1e7"
  }
});
