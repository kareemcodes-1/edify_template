import React from "react";
//
import NextLink from "next/link";
//
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";

const AcademyMenu = () => {
  return (
    <List>
      <NextLink href="/academy" passHref>
        <ListItemButton>
          <ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemIcon>
        </ListItemButton>
      </NextLink>
      <NextLink href="/courses" passHref>
        <ListItemButton>
          <ListItemIcon>
            <ListItemText>Courses</ListItemText>
          </ListItemIcon>
        </ListItemButton>
      </NextLink>
      <NextLink href="/login" passHref>
        <ListItemButton>
          <ListItemIcon>
            <ListItemText>Login</ListItemText>
          </ListItemIcon>
        </ListItemButton>
      </NextLink>
      <NextLink href="/register" passHref>
        <ListItemButton>
          <ListItemIcon>
            <ListItemText>Create Account</ListItemText>
          </ListItemIcon>
        </ListItemButton>
      </NextLink>
    </List>
  );
};

export default AcademyMenu;
