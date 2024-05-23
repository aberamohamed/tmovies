import React, { Fragment } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Box, Button, IconButton, Paper } from '@mui/material';
import { UserSwitchOutlined } from '@ant-design/icons';
import { PeopleOutline } from '@mui/icons-material';

export default function SystemUsers(){
  return (
<Fragment>
  <Box display="flex" alignItems="center" justifyContent="space-between">
    <div>
      <Title>System User</Title>
      <Typography component="p" variant="h4">
        37
      </Typography>
      <br></br>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        +12 This Month
      </Typography>
    </div>
    <Box>
      <Paper sx={{backgroundColor: 'black'}}>
      <PeopleOutline style={{color:'white', fontSize:50, width:70, height:50}}/>
      </Paper>
    </Box>
  </Box>
</Fragment>

  );
}

export const Programs = () => {
  return (
<Fragment>
  <Box display="flex" alignItems="center" justifyContent="space-between">
    <div>
      <Title>Programs</Title>
      <Typography component="p" variant="h4">
        37
      </Typography>
      <br></br>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        +12 This Month
      </Typography>
    </div>
    <Box>
      <Paper sx={{backgroundColor: 'black'}}>
      <PeopleOutline style={{color:'white', fontSize:50, width:70, height:50}}/>
      </Paper>
    </Box>
  </Box>
</Fragment>

  );
}


export const Channel = () => {
  return (
<Fragment>
  <Box display="flex" alignItems="center" justifyContent="space-between">
    <div>
      <Title>Channel</Title>
      <Typography component="p" variant="h4">
        37
      </Typography>
      <br></br>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        +12 This Month
      </Typography>
    </div>
    <Box>
      <Paper sx={{backgroundColor: 'black'}}>
      <PeopleOutline style={{color:'white', fontSize:50, width:70, height:50}}/>
      </Paper>
    </Box>
  </Box>
</Fragment>

  );
}