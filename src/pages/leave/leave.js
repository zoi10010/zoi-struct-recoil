import React from 'react'

import Container from '@material-ui/core/Container'
import { Typography, Grid,Paper,Divider  } from '@material-ui/core'
import {makeStyles  } from '@material-ui/styles'
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';import 'date-fns';
import Popover from '@material-ui/core/Popover';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Nav from '../../components/navigation/index';
import Toolbar from '../../components/toolbar/index'




const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
            padding: 'theme.spacing(1)',
          textAlign: 'center',
        },
        column:{
            fontSize:17,
            fontWeight:'bold',
            padding:15,
            paddingLeft:50,
            fontFamily:'perpetua'
        },
        det:{
            padding:15,
            paddingLeft:50,
            fontFamily:'sans-serif'
        },
        button:{
            paddingTop:50,
            paddingLeft:200,
            paddingBottom:20,
            fontFamily:'perpetua'

        },
        Footer:{
            paddingTop:50,
            paddingLeft:100,
            paddingBottom:20,
            fontFamily:'perpetua'
        },
        details:{
            paddingLeft:50,
            paddingTop:50,
            paddingBottom:150,
            paddingRight:50,
            fontSize:17,
            fontWeight:'bold',
            fontFamily:'perpetua'
        },
        popover: {
            pointerEvents: 'none'
        },
        over:{
            padding:20
        },
        size:{
          minHeight:150,
          width:300,

        },
        color:{
          color:"primary"
        },
        contain:{
          padding:10
        },
        left:{
          paddingLeft:50
        },
        backdrop: {
          color: '#fff',
        },       
}));

function Leave(){
    
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-03-20T21:11:54'));
    const [selectedDateend, setSelectedDateend] = React.useState(new Date('2021-03-20T21:11:54'));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [show, setShow] = React.useState(false)
    const [value, setValue] = React.useState(false)
    const [openn, setOpenn] = React.useState(false);
    const handleChange = (event) => {
        setValue(event.target.value);
      };

    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
      const handleDateChangeend = (date) => {
        setSelectedDateend(date);
      };
      const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handlePopoverClose = () => {
        setAnchorEl(null);
      };

      const showform = () => {
        setShow(true);
      }

      const hideform = () => {
        setShow(false);
      }

      const top100Films = [
        { title: 'Sick Leave'},
        { title: 'Casual Leave'},
        { title: 'Hourly Leave'},
        { title: 'Unpaid Leave' }]

      const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
      };
    
      const flatProps = {
        options: top100Films.map((option) => option.title),
      };
      
      
     

      const handleClickOpen = () => {
        setOpenn(true);
      };
    
      const handleClose = () => {
        setOpenn(false);
      };
    
      const open = Boolean(anchorEl);
    
      return(
        <div className={classes.root}>
        <Toolbar username={"denis"}></Toolbar>
                <Nav></Nav>
        <div>
        <Container maxWidth="md">
        <Grid container spacing={2}>
        <Grid item xs={12} className={classes.det}>
            <Paper className={classes.paper}>
                <Typography variant="h6" fontFamily="arial" style={{padding:20 }}>This Month Leave</Typography>
            </Paper>
        </Grid>

        <Grid  container >
    
          <Grid item xs={4}>
              <div className className={classes.det}>
              <Card className={classes.size}>
                <CardContent>
                  <Typography  >
                   Leave Details
                  </Typography>
                    <Grid container>
                          <Grid item xs={6} className={classes.det}><b>Date:</b> 20/03.2021 </Grid>  
                          <Grid item xs={6} className={classes.det}><b>Leave:</b> Half day </Grid> 
                      </Grid> 
                
                </CardContent>
                <CardActions>
                <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <Button size="small" className={classes.color}>Reason </Button><ArrowRightIcon />
                  </Typography>
                  
                      <Popover
                  id="mouse-over-popover"
                  className={classes.popover}
                  classes={{
                    paper: classes.paper,
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus>
              <div className={classes.over}>
                <Typography variant="h6" className={classes.paper}>Reason</Typography>
                <Typography variant="p">I have fever on yesterday. So I need a leave on tomorrow </Typography>
              </div>
              </Popover>
              </CardActions>
            </Card>
        </div>
          </Grid>

          <Grid item xs={4}>
              <div className className={classes.det}>
              <Card className={classes.size}>
                <CardContent>
                  <Typography  >
                   Leave Details
                  </Typography>
                    <Grid container>
                          <Grid item xs={6} className={classes.det}><b>Date:</b> 20/03.2021 </Grid>  
                          <Grid item xs={6} className={classes.det}><b>Leave:</b> Half day </Grid> 
                      </Grid> 
                </CardContent>
                <CardActions>
                <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <Button size="small" className={classes.color}>Reason</Button><ArrowRightIcon />
                  </Typography>
                      <Popover
                  id="mouse-over-popover"
                  className={classes.popover}
                  classes={{
                    paper: classes.paper,
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus>
              <div className={classes.over}>
                <Typography variant="h6" className={classes.paper}>Reason</Typography>
                <Typography variant="p">I have fever on yesterday. So I need a leave on tomorrow </Typography>
              </div>
              </Popover>
              </CardActions>
            </Card>
        </div>
          </Grid>

           
          <Grid item xs={4}>
              <div className className={classes.det}>
              <Card className={classes.size}>
                <CardContent>
                  <Typography  >
                   Leave Details
                  </Typography>
                <Grid container>
                          <Grid item xs={6} className={classes.det}><b>Date:</b> 20/03.2021 </Grid>  
                          <Grid item xs={6} className={classes.det}><b>Leave:</b> Half day </Grid> 
                </Grid> 
                </CardContent>
                <CardActions>
                <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <Button size="small" className={classes.color}>Reason</Button><ArrowRightIcon />
                  </Typography>
                      <Popover
                  id="mouse-over-popover"
                  className={classes.popover}
                  classes={{
                    paper: classes.paper,
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus>
              <div className={classes.over}>
                <Typography variant="h6" className={classes.paper}>Reason</Typography>
                <Typography variant="p">I have fever on yesterday. So I need a leave on tomorrow </Typography>
              </div>
              </Popover>
              </CardActions>
            </Card>
        </div>
          </Grid>
        </Grid>
        </Grid>
        </Container>

        <div className={classes.button}>
        <Button variant="contained" color="primary" disableElevation onClick={handleClickOpen}>
            Apply Leave
        </Button> 
        </div>
        <Dialog
        open={openn}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        
        <React.Fragment>
        <Grid item xs={10} >
       
                <Grid>
                    <Grid container className={classes.contain}>
                        <Grid items xs={6}  ><Typography variant="p" className={classes.details}>Full Name</Typography></Grid>
                        <Grid items xs={6}><Typography variant="p" className={classes.value}>Celsia Grace</Typography> </Grid>                 
                        
                    </Grid>
                    <Grid container className={classes.contain}>
                    <Grid items xs={6} ><Typography variant="p" className={classes.details}>Email</Typography></Grid>
                    <Grid items xs={6} ><Typography variant="p" className={classes.value}>celsia.augustine@gmail.com </Typography></Grid>               
                    </Grid>
                    <Grid container className={classes.contain}>
                    <Grid items xs={6} ><Typography variant="p" className={classes.details}>Phone </Typography></Grid>
                    <Grid items xs={6} ><Typography variant="p" className={classes.value}>454657568</Typography></Grid>                    
                    </Grid>
                    <Grid container className={classes.contain}>
                      <Grid items xs={6} className={classes.left}><Autocomplete
                      {...defaultProps}
                      id="debug"
                      debug
                      renderInput={(params) => <TextField {...params} label="Leave" margin="normal" />}
                    />                   
                    </Grid>
                    </Grid>
                  
                    <Grid container className={classes.contain}>
                    <Grid items xs={6} >
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around" className={classes.left}>
                        <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        
                        id="date-picker-inline"
                        label="Start Date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                  </MuiPickersUtilsProvider>
                  </Grid>

                    <Grid items xs={6} >
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        
                        id="date-picker-inline"
                        label="End Date"
                        value={selectedDateend}
                        onChange={handleDateChangeend}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                    </MuiPickersUtilsProvider>
                    </Grid>  

                    <Grid container className={classes.contain}>
                      <Grid items xs={6} className={classes.left}>
                        <div>
                      <TextField
                          id="standard-multiline-static"
                          label="Reason"
                          multiline
                          rows={4}    
                        />        
                        </div>            
                        </Grid>             
                  </Grid>
                </Grid>
                </Grid>   
            
          </Grid>
          </React.Fragment>
       </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.Footer}>
             <Button onClick={handleClose} color="primary" >
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>  
    </div>
    </div>
    )
}

export default Leave;