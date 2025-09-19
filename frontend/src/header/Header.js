import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import { Link } from "react-router-dom";

const linksArr = ["home", "diaries", "auth"];

const Header = () => {
  const [value, setValue] = useState();
  return (
    <AppBar sx={{ bgcolor: "transparent" }} position="static">
      <Toolbar>
        <ModeOfTravelIcon sx={{ color: "black" }} />
        <Tabs
          value={value}
          onChange={(e, value) => setValue(value)}
          sx={{ marginLeft: "auto" }}
        >
          {linksArr.map((link) => (
            <Tab
              LinkComponent={Link}
              to={`/${link === "home" ? "" : link}`}
              label={link}
              key={link}
              sx={{
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                  textUnderlineOffset: "18px",
                  textDecorationColor: "blue",
                  textDecorationThickness: "2px",
                },
              }}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
