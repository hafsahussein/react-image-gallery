import axios from 'axios';
const apiKey ='19857538-0427362c03394b59efd1db946' ;
const params = {
    amount:15,
    image_type:'photo',
    safesearch:true,
    order:'popular',

}
const fetchImages = async (q) =>{
    let url = `https://pixabay.com/api/?key=${apiKey}&per_page=15
    &image_type=${params.image_type}
    &safesearch=${params.safesearch}
    &order=${params.order}`;
    
    url = q? `${url}&q=${q}`:url;

    const data = await  axios.get(url);
    return data;
}
export default fetchImages;