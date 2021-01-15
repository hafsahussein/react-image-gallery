import {useState, useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';
import {FaSearchPlus} from 'react-icons/fa';
import { GridListTile, GridListTileBar } from '@material-ui/core';

import GridList from '@material-ui/core/GridList';
import DialogBox from './Dialog';
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
            <DialogBox handleClose = {handleClose} handleOpen = {handleOpen} open = {open} currentImg = {currentImg}/>
          </GridList>
        }
     
        </>
      );
  
}
 
export default ImageGallery;