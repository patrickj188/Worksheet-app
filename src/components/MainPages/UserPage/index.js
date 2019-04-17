import React from 'react';
import UserHome from './UserHome/UserHome'
import Setting from './Settings/Setting'
import Worksheet from './Worksheet/Worksheet'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});


class UserPage extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (

            <div >
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs value={value} onChange={this.handleChange}>
                            <Tab label="Item One" />
                            <Tab label="Item Two" />
                            <Tab label="Item Three" />
                        </Tabs>
                    </AppBar>
                    {value === 0 && <TabContainer><UserHome/></TabContainer>}
                    {value === 1 && <TabContainer><Setting/></TabContainer>}
                    {value === 2 && <TabContainer><Worksheet/></TabContainer>}
                </div>
            </div>


            //     <div>
            //     <div>
            //         <button onClick={this.handleClick}>UserHome</button>
            // </div>

            // {this.state.displayUserHome? <UserHome /> : <Setting/> }

            // </div> 
        )
    }
}

UserPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(UserPage);