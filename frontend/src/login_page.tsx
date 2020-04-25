import React from 'react';
import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button'

export default class LoginPage extends React.Component {
    render() {
        return (
            <a>
                <Button variant="contained" color="primary" disableElevation>
                    Login
                </Button> 

                <Button variant="contained" color="primary" disableElevation>
                    Sign Up 
                </Button> 
            </a>
        )
    }
}

