import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import "./user.css"
import Button from '@material-ui/core/Button';
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DownloadImage from './assets/download.png';
import Pagination from '@material-ui/lab/Pagination';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles';
import SimpleTable from "./Table";
import SimplePopover from "./popup";




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#F5F8FF'
  },
  '& > * + *': {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.backgroundColor}>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
         <div className="userTab">
           <PersonOutlineOutlinedIcon 
            className="userIcon" fontSize="Large" />
            <div>
            <text className="userHeading">User</text>
            </div>
            <div className="btnNew">
            <Button
            variant="outlined" 
            color="Primary"
            startIcon={<PersonAddSharpIcon/>}>New
            </Button>
            </div>
          </div>
          
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className="bredcrum-text">
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" href="#" >
          MasterData
        </Link>
        <Typography color="textPrimary">Users</Typography>
      </Breadcrumbs>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className="configureLink">            
            <Button className="btnConfigure">Configure</Button>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className="entriesDataInfo">
          <div className="entriesText">
          <text>Show Entries</text>
          </div>

          <select className="select-option">
          <option>5</option>
          <option>10</option>
          <option>15</option>
          </select>

          <div className="div-icon">
            
    <button ><img src={DownloadImage} className="download-icon cursor"/> </button>
    <SimplePopover/>
          </div>
        <div className="pagination">
        <Pagination count={3} variant="outlined" shape="rounded" /></div>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className="">
            <SimpleTable/>
          </Paper>
        </Grid>
      </Grid>


     
    </div>
    </div>
  );
}
