import { Grid, Paper, Avatar, Container, Typography, Divider, LinearProgress, ListItem, ListItemText, List } from '@material-ui/core'
import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router'
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import GroupIcon from '@material-ui/icons/Group';
import Nav from '../../components/navigation/index';
import Toolbar from '../../components/toolbar/index'
import { Col, Row } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { accountDetails, accountDetailsState } from '../../recoil/selectors'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',

    },
    large: {
        width: 150,
        height: 150,
        justifyContent: 'center',

    },
    detail: {
        fontSize: 15
    },
    label: {
        paddingLeft: 10
    },
    column: {
        fontSize: 17,
        fontWeight: 'bold',
        padding: 15
    },
    det: {
        padding: 15
    },
    linear: {
        padding: 10
    },
    web: {
        fontSize: 17,
        fontWeight: 'bold',
        padding: 15
    },
    list: {
        padding: 5
    }
}));
const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

function Account() {
    const details = useRecoilValue(accountDetailsState);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Toolbar username={"denis"}></Toolbar>
                <Nav></Nav>
            <div>
                <Container maxWidth="md">
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <div style={{ paddingLeft: 45 }}>
                                    <Avatar alt="Remy Sharp" src="images/download.jfif" className={classes.large} /><br />
                                </div>
                                <Typography variant="h5" style={{ fontWeight: 'bold' }}>Celsia Grace</Typography><br />
                                <Typography variant="p" className={classes.detail}>Junior Web Developer</Typography><br />
                                <Typography variant="p" className={classes.detail}>South Masi Street, Srivaikundam</Typography>
                            </Paper>
                            <br />

                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        {/* <div style={{paddingLeft:1}}>
             <LanguageIcon  />
             <Typography  variant="p" className={classes.column}  >Website</Typography><br />
             <Typography  variant="p">https://zoifintech.com</Typography>
             </div>
             <Divider />  */}

                                        {/* <GitHubIcon  />
             <Typography variant="p"  >Github</Typography><br />
             <Divider />
             <GroupIcon />
             <Typography variant="p"  >Teams</Typography><br /> */}


                                        <List>
                                            <ListItem  >
                                                <LanguageIcon />
                                                <ListItemText primary="Website"></ListItemText><br />
                                                <ListItemText primary="https://zoifintech.com"></ListItemText>
                                            </ListItem>
                                            <Divider />
                                            <ListItem button >
                                                <GitHubIcon />
                                                <ListItemText className={classes.list} primary="Github"></ListItemText>
                                                <ListItemText primary="Zoifintech"></ListItemText>
                                            </ListItem>
                                            <Divider />
                                            <ListItem button >
                                                <GroupIcon />
                                                <ListItemText className={classes.list} primary="Teams"></ListItemText>
                                                <ListItemText primary="Zoifintech"></ListItemText>
                                            </ListItem>
                                        </List>
                                    </Paper>


                                </Grid>
                            </Grid>
                        </Grid>


                        <Grid item xs={8}>
                            <Paper className={classes.paper}>
                                <Row >
                                    <Col className={classes.column}>  Full Name </Col>
                                    <Col className={classes.det}>{details.name} </Col>
                                </Row>
                                <Divider />
                                <Row >
                                    <Col className={classes.column}>  Email </Col>
                                    <Col className={classes.det}>{details.email}</Col>
                                </Row>
                                <Divider />
                                <Row >
                                    <Col className={classes.column}> Phone </Col>
                                    <Col className={classes.det}>{details.phone}</Col>
                                </Row>
                                <Divider />
                                <Row >
                                    <Col className={classes.column}> Address </Col>
                                    <Col className={classes.det}>{details.address}</Col>
                                </Row>
                            </Paper>
                            <br />
                            <div >
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <Paper className={classes.paper} >
                                            <label style={{ fontWeight: 'bold' }}>Project Status</label>
                                            <Divider />
                                            <Row className={classes.linear}>
                                                <Typography variant="p" >Web Design</Typography>
                                            </Row>
                                            <BorderLinearProgress variant="determinate" value={50} />
                                            <Row className={classes.linear}>
                                                <Typography variant="p" >Website Markup</Typography>
                                            </Row>
                                            <BorderLinearProgress variant="determinate" value={50} />
                                            <Row className={classes.linear}>
                                                <Typography variant="p" >One Page</Typography>
                                            </Row>
                                            <BorderLinearProgress variant="determinate" value={50} />

                                        </Paper>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Paper className={classes.paper} >
                                            <label style={{ fontWeight: 'bold' }}>Project Status</label>
                                            <Divider />
                                            <Row className={classes.linear}>
                                                <Typography variant="p" >Web Design</Typography>
                                            </Row>
                                            <BorderLinearProgress variant="determinate" value={50} />
                                            <Row className={classes.linear}>
                                                <Typography variant="p" >Website Markup</Typography>
                                            </Row>
                                            <BorderLinearProgress variant="determinate" value={50} />
                                            <Row className={classes.linear}>
                                                <Typography variant="p" >One Page</Typography>
                                            </Row>
                                            <BorderLinearProgress variant="determinate" value={50} />

                                        </Paper>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )


}
export default Account;