import React, { useState } from "react";
import { NavLink as RouterLink, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import {
  Typography,
  AppBar,
  Toolbar,
  Container,
  Stack,
  Button,
  ListItem,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout } from "../features/authSlice";

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleLogout = () => {
    setToggle(false);
    dispatch(logout());
  };

  const toMyAds = () => {
    console.log(1);
    setToggle(false);
    navigate("/myads");
  };
  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 0px 6px 6px rgba(0,0,0,0.5)",
        color: "black",
        position: "static",
      }}
    >
      <Toolbar>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography component={RouterLink} to="/">
              <Typography component="h1" variant="h2">
                Job
                <Typography color="primary" variant="h2" component="span">
                  Fish
                </Typography>
              </Typography>
            </Typography>
            <Stack
              sx={{
                alignItems: "center",
                display: { xs: "flex", sm: "none" },
              }}
              direction="row"
            >
              {user && (
                <Typography component={RouterLink} to="/create">
                  <AddCircleOutlineIcon
                    sx={{ width: "40px", height: "40px" }}
                    color="primary"
                  />
                </Typography>
              )}
              <div
                onClick={() => setToggle(!toggle)}
                className={`hamburger ${toggle ? "active" : ""}`}
              >
                <div></div>
                <div></div>
                <div></div>
              </div>
            </Stack>
            <ul className={`nav ${toggle ? "open" : ""}`}>
              <li onClick={() => setToggle(false)}>
                <Typography
                  end
                  sx={{
                    "&:hover": { fontWeight: "700" },
                    "&.active": { color: "primary.main" },
                  }}
                  component={RouterLink}
                  to="/"
                >
                  Home
                </Typography>
              </li>
              {user ? (
                <>
                  <ListItem
                    sx={{
                      display: { xs: "none", md: "block" },
                      width: "auto",
                      padding: "0rem",
                    }}
                  >
                    <Typography
                      sx={{
                        "&:hover": { fontWeight: "700" },
                        "&.active": { color: "primary.main" },
                      }}
                      component={RouterLink}
                      to="/create"
                    >
                      <Button
                        sx={{ borderRadius: "2rem" }}
                        startIcon={<AddCircleOutlineIcon />}
                        variant="outlined"
                      >
                        Post Job
                      </Button>
                    </Typography>
                  </ListItem>
                  <li onClick={toMyAds}>
                    <Typography
                      sx={{
                        "&:hover": { fontWeight: "700" },
                        "&.active": { color: "primary.main" },
                        border: "1px solid primary",
                      }}
                      component={RouterLink}
                      to="/myads"
                    >
                      My Ads
                    </Typography>
                  </li>
                  <li onClick={handleLogout}>
                    <Typography
                      sx={{
                        "&:hover": { fontWeight: "700" },
                        "&.active": { color: "primary.main" },
                      }}
                      component={RouterLink}
                      to="/login"
                    >
                      Logout
                    </Typography>
                  </li>
                </>
              ) : (
                <>
                  <li onClick={() => setToggle(false)}>
                    <Typography
                      sx={{
                        "&:hover": { fontWeight: "700" },
                        "&.active": { color: "primary.main" },
                      }}
                      component={RouterLink}
                      to="/login"
                    >
                      Login
                    </Typography>
                  </li>
                  <li onClick={() => setToggle(false)}>
                    <Typography
                      sx={{
                        "&:hover": { fontWeight: "700" },
                        "&.active": { color: "primary.main" },
                      }}
                      component={RouterLink}
                      to="/register"
                    >
                      Register
                    </Typography>
                  </li>
                </>
              )}
            </ul>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
