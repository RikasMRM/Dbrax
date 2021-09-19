import { makeStyles } from '@material-ui/core/styles';
import Background from '../../assets/vi_color_all_17-01.jpg';

const drawerWidth = 0;

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    body: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    content: {
        overflow: 'hidden',
        flexGrow: 1,
        padding: theme.spacing(0),
        margin: "0px",
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: '#000000',
    },
    slides: {
        backgroundSize: 'cover',
        height: '70vh',
    },
    localShippingIcon: {
        marginRight: 10
    },
    products: {
        marginTop: 10,
    },
    spinner: {
        display: 'flex',
        marginTop: theme.spacing(2),
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 200,
    },
}));