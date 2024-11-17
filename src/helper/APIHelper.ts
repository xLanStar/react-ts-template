import axios from "axios";

const apiHelper = axios.create({
  withCredentials: true,
});

export default apiHelper;
