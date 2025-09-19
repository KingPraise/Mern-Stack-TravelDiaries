import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
  Box,
} from "@mui/material";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const DiaryItem = ({ title, description, image, location, date, id }) => {
  return (
    <div style={{ margin: "20px" }}>
      <Card
        sx={{
          width: "100%",
          height: "50vh",
          margin: 1,
          padding: 1,
          display: "flex",
          flexDirection: "column",
          boxShadow: "5px 5px 10px #ccc",
        }}
      >
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe"></Avatar>}
          action={
            <IconButton aria-label="settings">
              {<EditLocationAltIcon />}
            </IconButton>
          }
          title={location}
          header={location}
          subheader={date}
        />
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: 140, objectFit: "cover" }}
        />
        <CardContent>
          <Typography
            paddingBottom={1}
            variant="h6"
            color="text.secondary"
            component="div"
          >
            {title}
          </Typography>
          <hr />
          <Box paddingTop={1} display="flex">
            <Typography width={"170px"} fontWeight={"bold"} variant="div">
              King Praise
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ marginLeft: "auto" }}>
          <IconButton color="warning">
            <ModeEditOutlineIcon />
          </IconButton>
          <IconButton color="error">
            <DeleteForeverIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default DiaryItem;
