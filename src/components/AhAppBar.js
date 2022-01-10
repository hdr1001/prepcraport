import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function AhAppBar(props) {
   return (
      <AppBar>
         <Toolbar>
            <Typography sx={{ flexGrow: 1 }}>Create React App port</Typography>
            <input
               type='file'
               accept='application/json, .json'
               multiple
               style={{ display: 'none' }}
               id='btn-file-inp'
               onChange={props.handleFileInp}
            />
            <label htmlFor='btn-file-inp'>
               <IconButton
                  color='inherit'
                  component='span'
               >
                  <UploadFileOutlinedIcon />
               </IconButton>
            </label>
            <IconButton
               color='inherit'
               onClick={() => {alert('Not yet implemented, please try again later')}}
            >
               <SettingsOutlinedIcon />
            </IconButton>
         </Toolbar>
      </AppBar>
   )
}
