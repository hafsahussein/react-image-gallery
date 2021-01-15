import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import { FaTimes} from 'react-icons/fa';
import IconButton from '@material-ui/core/IconButton';

const styles = (theme) => ({
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <FaTimes />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(1)
    },
  }))(MuiDialogContent);
  

const DialogBox = ({handleClose, handleOpen, open, currentImg}) => {
    return ( 
        <div>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        </DialogTitle>
        <DialogContent >
         <img src ={currentImg} alt = "" style = {{maxWidth:'100%', maxHeight:'100%'}}/>
        </DialogContent>
      
      </Dialog>
    </div>
     );
}
 
export default DialogBox;