import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import DiaryItem from "./DiaryItem";
import { getAllPosts } from "../api-helpers/helpers";

const Diaries = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    getAllPosts()
      .then((data) => setPosts(data?.posts))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      flexDirection={"row"}
      padding={3}
      alignItems={"center"}
    >
      {posts &&
        posts.map((e, index) => (
          <DiaryItem
            date={new Date(`${e.date}`).toLocaleDateString}
            description={e.description}
            image={e.image}
            id={e.id}
            location={e.location}
            title={e.title}
            key={index}
          />
        ))}
    </Box>
  );
};

export default Diaries;
