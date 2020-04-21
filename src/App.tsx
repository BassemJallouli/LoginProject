import * as React from 'react';
import './App.css';



export default class App extends React.Component {
  constructor(props: any) 
    {
      super(props);
          this.state = { color: 'green'}
      }
  }
  
  componentDidMount (){
    this.setState({
      color: "red"
    });
  }
    render() {
    return (
      <React.Fragment>
          <button onClick={this.changecolor.bind(this, "blue")}>
              Change
          </button>
          <div>
            {this.StaticRange.message}
          </div>
    </React.Fragment>
    );
  }
}

