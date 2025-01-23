import { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import { Menu, AccountCircle } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const isAuthenticated = true;
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen((prevMobileOpen) => !prevMobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        className="bg-gray-900 text-white shadow-lg"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          width: isMobile ? "100%" : "calc(100% - 256px)",
          marginLeft: isMobile ? 0 : "256px",
        }}
      >
        <Toolbar
          className={`h-[60px] flex justify-between px-4 ${isMobile ? "" : ""}`}
        >
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleDrawer}
              className="mr-2"
            >
              <Menu />
            </IconButton>
          )}

          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </IconButton>

          {!isMobile && <span className="text-gray-300">Search...</span>}

          <div>
            {!isAuthenticated ? (
              <Button
                color="inherit"
                onClick={() => {}}
                className="text-white hover:text-gray-300"
              >
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/profile/id"
                className="text-blue-400 hover:text-white"
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar sx={{ width: 30, height: 30 }} alt="Profile" />
              </Button>
            )}
          </div>

          {isMobile && <span className="text-gray-300">Search...</span>}
        </Toolbar>
      </AppBar>

      <nav>
        {isMobile ? (
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={toggleDrawer}
            ModalProps={{ keepMounted: true }}
            classes={{
              paper: "w-64 bg-gray-800 text-white",
            }}
          >
            <Sidebar setMobileOpen={setMobileOpen} />
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: "w-64 bg-gray-800 text-white",
            }}
          >
            <Sidebar setMobileOpen={setMobileOpen} />
          </Drawer>
        )}
      </nav>
    </>
  );
};

export default Navbar;
