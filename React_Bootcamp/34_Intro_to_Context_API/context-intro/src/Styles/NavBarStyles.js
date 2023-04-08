import { Fade, makeStyles } from "@mui/material";

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginBottom: 0
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    title: {
        display: 'none',
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: Fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: Fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing.unit,
            width: "auto"
        }
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default styles;