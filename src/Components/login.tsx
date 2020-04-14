import React, { Component, FormEvent, ChangeEvent } from 'react'
import { Button, Form, Grid, Header, Message, Segment, FormProps, InputOnChangeData } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom' 

export interface ILoginProps {

}
export interface IState {
      username: string,
      password: (string | number),
      loggedIn: boolean
}

export default class LoginForm extends Component <ILoginProps, IState>  {
  handleSubmit: ((event: FormEvent<HTMLFormElement>, data: FormProps) => void) | undefined;
  onChange: ((event: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void) | undefined;

  constructor(props: ILoginProps){
    super(props);
    let loggedIn = false
    this.state = {
      username: '',
      password: '',
      loggedIn
    }

    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange(e: ChangeEvent<HTMLInputElement>){
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e: ChangeEvent<HTMLInputElement>){
    e.preventDefault()
    const { username , password } = this.state
    // Condition to access for login
    if (username === "test" && password === "test") {
      this.setState (
        {
          loggedIn: true
        }
      )
    }
  }

  render() {
    if (this.state.loggedIn){
      return <Redirect to="/Logout"/>
    }

    return (
      <div>
        
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
        Login Account
        </Header>
        <Form onSubmit={this.handleSubmit} size='large'>
        <Segment stacked>
          <Form.Input 
          type='text'
          fluid icon='user' 
          iconPosition='left' 
          placeholder='User Name'
          name='username' 
          value={this.state.username}
          onChange={this.onChange}
          />
          <Form.Input
            fluid icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={this.state.password}
            onChange={this.onChange}
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New User <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>

      </div>
    )
  }
}


