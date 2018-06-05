import React, { Component } from 'react';

import '../css/styles.css';

class Header extends Component {
  // constructor(props){
  //   super(props)

  //   this.state = {
  //     keywords: 'Hello'
  //   }
  // }

  state = {
    title: 'The keywords are:',
    keywords: 'Hello'
  }

  // inputChangeHandler(event) {
  //   // console.log(event.target.value);
  //   this.setState({
  //     keywords: event.target.value
  //   });
  // }

  inputChangeHandler = (event) => {
    this.setState({
      keywords: event.target.value
    });
  }

  render() { 
    console.log(this.state.keywords);
    return (
      <header className="header">
        <div className="logo">Logo</div>   
        <input 
          type="text" 
          onChange={this.inputChangeHandler}
        />
        <div>{this.state.title}</div>
        <div>{this.state.keywords}</div>
      </header>
    )
  }  
}

export default Header;


// Another way of calling
{/* <input 
  type="text" 
  onChange={(e) => this.inputChangeHandler(e)}
/> */}

// By using es6 fat arrow function, we can omit the use of bind(this)
// onChange={this.inputChangeHandler.bind(this)