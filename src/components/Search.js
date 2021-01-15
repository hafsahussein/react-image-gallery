import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {FaSearch} from 'react-icons/fa';
const Search = ({onTextChange, text}) => {

    return ( 
        <>
        <Grid container spacing={1} alignItems="flex-end" justify ="center" style = {{marginBottom:'30px'}}>
          <Grid item>
            <FaSearch />
          </Grid>
          <Grid item>
            <TextField 
                label="Search Images"
                value = {text}
                onChange = {onTextChange}
            />
          </Grid>
        </Grid>

        </>
     );
}
 
export default Search;