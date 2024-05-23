import  React, { Fragment } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Layers, TvRounded } from '@mui/icons-material';

export const MainListItems = (props) => {
   
 return (
  <Fragment>
<ListItemButton 
  sx={{
    backgroundColor: props.renderedComponent === "dashboard" && '#181A41',
    color: props.renderedComponent === "dashboard"&&'white',
    '&:hover': {
      backgroundColor: '',
      color: 'black'
    }
  }} 
  onClick={() => props.setRenderedComponent("dashboard")}>
  <ListItemIcon >
    <DashboardIcon
      sx={{
        backgroundColor: props.renderedComponent !== "dashboard" ? '#181A41' : 'transparent',
        color: props.renderedComponent !== "dashboard" ? 'white' : 'inherit',
        '&:hover': {
          backgroundColor: '',
          color: 'black'
        }
      }}/>
  </ListItemIcon>
  <ListItemText primary="Dashboard"/>
</ListItemButton>

    <ListItemButton
          sx={{
            backgroundColor: props.renderedComponent === "channel" && '#181A41' ,
            color: props.renderedComponent === "channel" && 'white',
            '&:hover': {
              backgroundColor: '',
              color: 'black'
            }
          }}
          onClick={() => props.setRenderedComponent("channel")}>
      <ListItemIcon>
        <TvRounded
          sx={{
            backgroundColor: props.renderedComponent === "channel" ? '#181A41' : 'transparent',
            color: props.renderedComponent === "channel" ? 'white' : 'inherit',
            '&:hover': {
              backgroundColor: '',
              color: 'black'
            }
          }} />
      </ListItemIcon>
      <ListItemText primary="Channel" />
    </ListItemButton>
    <ListItemButton
          sx={{
            backgroundColor: props.renderedComponent === "program" && '#181A41',
            color: props.renderedComponent === "program" && 'white'
          }}
          onClick={() => props.setRenderedComponent("program")}>
      <ListItemIcon>
        <Layers           sx={{
            backgroundColor: props.renderedComponent === "program" ? '#181A41' : 'transparent',
            color: props.renderedComponent === "program" ? 'white' : 'inherit',
            '&:hover': {
              backgroundColor: '',
              color: 'black'
            }
          }}/>
      </ListItemIcon>
      <ListItemText primary="Program" />
    </ListItemButton>
  </Fragment>
);
}
