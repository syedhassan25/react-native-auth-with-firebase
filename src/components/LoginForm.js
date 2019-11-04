import React, {Component} from 'react';
import firebase from 'firebase';
import {Text} from 'react-native';
import { Card, CardSection, Button, Input, Spinner} from './common';
;


class LoginForm extends Component{

    state = { email : '', password: '', error: '', loading: false };

    onSignInPress() {
        const { email, password } = this.state;
        this.setState({ error: ' ', loading: true });


        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            });
    }


    onLoginFail(){
        this.setState({
            error: 'Authentication Failed',
            loading: false
        });
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    renderButton(){
        if(this.state.loading){
          return(
              <Spinner size='small' />
          )
        }

        return(
            <Button myPress={this.onSignInPress.bind(this)}>
            Log in
          </Button>
        );
    }
  

    render(){
        return(
            <Card>
            <CardSection>
            <Input
            placeholder="user@gmail.com"
            label='Email'
            value={this.state.text}
            onChangeText={val => this.setState({ email:val }) }
             />
            </CardSection>
            <CardSection>
            <Input 
            secureTextEntry={true}
            placeholder='Password'
            label='Password'
            value={this.state.password}
            onChangeText={val => this.setState({ password:val })}
            />
            </CardSection>
            <Text style={Styles.errorTextStyle}>
            {this.state.error}
            </Text>
            <CardSection>
          {this.renderButton()}
            </CardSection>
            </Card>
        );
    }
}

const Styles = {
    errorTextStyle:{
        color:'red',
        fontSize: 14,
        alignSelf:'center'
    }
}

export default LoginForm;