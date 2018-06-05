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
    const style = {
      background: 'red' 
    }

    if(this.state.keywords !== '') {
      style.background = 'gray'
    } else {
      style.background = 'red'
    }

    return (
      <header className="header" style={style}>
        <div className="logo">Logo</div>   
        <input 
          type="text" 
          onChange={this.inputChangeHandler}
        />
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