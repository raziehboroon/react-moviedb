import axios from "axios";

const getData = async (url) => {
  const response = axios.get(url);
  return (await response).data;
};

export default getData;
