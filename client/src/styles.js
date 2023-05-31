import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 0, // Remove border-radius to remove rounded corners
    margin: 0, // Remove margin to have the app bar flush with the top
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none', // Remove box-shadow to remove the shadows
    backgroundColor: 'transparent', // Set background color to transparent
    height: '100px', // Set the height to match the logo height
  },
  heading: {
    color: '#FFB580', // Dark bluish black color for the text
    fontSize: '2.5rem',
    fontWeight: 'bold', // Set font weight to bold
    fontFamily: 'Georgia', // Set a modern font family
  },
  image: {
    marginLeft: '15px',
    height: '100px', // Set the image height to match the logo height
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
}));
