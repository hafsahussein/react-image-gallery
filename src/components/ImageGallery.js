import {useState, useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';
import {FaSearchPlus, FaTimes} from 'react-icons/fa';
import GridList from '@material-ui/core/GridList';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import { GridListTile, GridListTileBar } from '@material-ui/core';

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
  
const ImageGallery = ({images}) => {
    const [open, setOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState('');
    const [cols, setColse] = useState(3);
    const handleWindowSize = () =>{
        if(window.innerWidth<=960)
        setColse(1)
        else setColse(3)
    }
    window.addEventListener('resize', handleWindowSize);
    useEffect(() => handleWindowSize())
    const handleOpen = img => {
      setOpen(true);
      setCurrentImg(img)
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <>
        {images&&
        <GridList cols={cols}>
          {images.map(img=>(
                <GridListTile             
                key = {img.id}>
                    <img src={img.largeImageURL}alt=""/>
                    <GridListTileBar
            title = {img.tags}
            subtitle= {
            <span>by <strong>{img.user}</strong> </span>
            }
            actionIcon = {
                <IconButton onClick = {()=>handleOpen(img.largeImageURL)}>
                    <FaSearchPlus style = {{color:'white'}}/>
                </IconButton>
            }
            />

                </GridListTile>
    ))}
  
          </GridList>
        }
        <div>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        </DialogTitle>
        <DialogContent >
         <img src ={currentImg} alt = "" style = {{maxWidth:'100%', maxHeight:'100%'}}/>
        </DialogContent>
      
      </Dialog>
    </div>
        </>
      );
  
}
 
export default ImageGallery;