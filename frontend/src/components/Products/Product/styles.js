import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: 345,
        //maxWidth: '50%',
        
    },
    media: {
        height: 300,
        paddingTop: '56.25%', // 16:9
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
        textAlign: 'left',
    },
    name: {
        fontWeight: 500,
    },
    txt: {
        fontWeight: 500,
        textAlign: 'left',
    },
    txtV: {
        fontWeight: 500,
        textAlign: 'right',
    },
    button: {
        marginLeft: '10px',
    },
}));