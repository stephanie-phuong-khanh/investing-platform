import React from 'react';
import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey'

export default class MyButton extends React.Component {
    render() {
        return (
            <Button variant="contained" color="primary" disableElevation>
                Hello
            </Button> 
        )
    }
}

