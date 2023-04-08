import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, InputBase, Switch } from '@mui/material'
import withStyles from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Styles/NavBarStyles';

function NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position='static' color='primary'>
                <Toolbar>
                    <IconButton className={classes.menuButton} color='inherit'>
                        <span>😢</span>
                    </IconButton>
                    <Typography
                        className={classes.title}
                        variant='h6'
                        color="inherit"
                    >
                        App Title
                    </Typography>
                    <Switch />
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <SearchIcon />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(NavBar);