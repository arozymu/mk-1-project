import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalMessage extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter User Details" />
            <TextField
                hintText="Enter Your Message"
                floatingLabelText="Message"
                onChange={handleChange('message')}
                defaultValue={values.message}
            />
            <br/>
            <RaisedButton
              label="Continue"
              primary={true}
              style={StyleSheet.button}
              onClick={this.continue}

              />
              <br/>
            <RaisedButton
              label="Back"
              primary={false}
              style={StyleSheet.button}
              onClick={this.back}

              />


            </React.Fragment>
                
            </MuiThemeProvider>
        );
    }
}
const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalMessage
