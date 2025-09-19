import axios from "axios";

export const getAllPosts = async (params) => {
  const res = await axios.get("http://localhost:5000/posts");

  if (res.status !== 200) {
    return console.log("some error occured");
  }

  const data = res.data;
  return data;
};
