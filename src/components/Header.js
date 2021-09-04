import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AndroidOutlinedIcon from "@material-ui/icons/AndroidOutlined";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-controls="simple-menu"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"

            

            onClick={handleClick}
          >
    
          </IconButton>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          
          >
                      
                <MenuItem onClick={handleClose}>Name</MenuItem>
                <MenuItem onClick={handleClose}>Description</MenuItem>
                <MenuItem onClick={handleClose}>pic</MenuItem>
                <MenuItem onClick={handleClose}>More</MenuItem>
            </Menu>
          <Typography variant="h6" className={classes.title}>
            Area 51
          </Typography>
          <IconButton>
            <AndroidOutlinedIcon />
          </IconButton>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
