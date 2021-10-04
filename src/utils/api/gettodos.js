import axios from "axios";

const gettodos = () => {
  // const data = fetch(".netlify/functions/gettodo").then((res) => res.);
  const data = axios.get(".netlify/functions/gettodo").then((res) => {
   console.log(res.data);
  });
};
export default gettodos;
