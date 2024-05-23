import { FileUploadOutlined, Search } from '@mui/icons-material';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { Button, Grid, InputAdornment, Paper, TextField } from "@mui/material";

export default function  Headers(){

    return (
<Grid item xs={12} md={4} lg={12}>
  <Paper
    sx={{
      p: 1,
      display: 'flex',
      flexDirection: 'row',
      height: 55,
    }}
  >
    <div>
      <TextField
        placeholder="Search"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" >
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{ mr: 60, width:'70%', backgroundColor:'#FAFAFA' }}
      />
    </div>
    <div>
    <Button >
        <FileUploadOutlined />
        Export
      </Button>
      <Button sx={{left:10}}>
        <FilterListOutlinedIcon />
        Add Filter
      </Button>
    </div>
    <div>
      <Button
        variant="contained"
        sx={{ backgroundColor: '#000222', color: 'white', ml: 2 }}
      >
        Add Filter
      </Button>
    </div>
  </Paper>
</Grid>

    );
  };