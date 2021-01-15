import React, {useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Search from './components/Search';
import fetchImages from './APIs/images';
import ImageGallery from './components/ImageGallery';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [images, setimages] = useState('');

  const onTextChange = (e) =>{
      setSearchText(e.target.value);
  }
  useEffect(()=>{
    (async()=>{
    const fetchedimages = searchText?
    await fetchImages(searchText): await fetchImages();
    setimages(fetchedimages.data.hits)
    })()
  },[searchText])
  return <div>
      <CssBaseline />
      <Container fixed style ={{marginTop:50}}>
        <Search onTextChange = {onTextChange} text = {searchText}/>
        <ImageGallery images = {images}/>
      </Container>
  </div>;
}
export default App;
