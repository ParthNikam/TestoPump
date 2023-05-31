import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    height: '84vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  media: {
    height: '80vh',
    width: 'auto',
    objectFit: 'contain',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '4px',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  imageWrapper: {
    position: 'relative',
  },
  leftarrowButton: {
    position: 'absolute',
    top: '50%',
    left: '-2%',
    transform: 'translateY(-50%)',
    fontSize: '2rem',
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border: 'none',
    borderRadius: '50%',
    padding: '2px',
    cursor: 'pointer',
    outline: 'none',
    zIndex: 1,
  },
  rightarrowButton: {
    position: 'absolute',
    top: '50%',
    right: '-2%',
    transform: 'translateY(-50%)',
    fontSize: '2rem',
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border: 'none',
    borderRadius: '50%',
    padding: '2px',
    cursor: 'pointer',
    outline: 'none',
    zIndex: 1,
  },


  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginLeft:10,

  },
  buttonClear: {
    marginBottom: 10,
    marginLeft:10,

  },
}));
