import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: 545,
        //maxWidth: '50%',
        height: 600,
        marginTop: "100px",
        
    },
    media: {
        height: 400,
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '-10px'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    price: {
        color: '#000000',
        fontWeight: 700,
        textTransform: "uppercase",
    },
    name: {
        fontWeight: 500,
    },
    txt: {
        fontWeight: 500,
        //display: "flex", 
        //alignItems: "baseline",
    },
    txtV: {
        fontWeight: 600,
    },
    button: {
        marginLeft: '10px',
    },
}));