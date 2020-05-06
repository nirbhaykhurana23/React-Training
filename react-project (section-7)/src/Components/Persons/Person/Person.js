import React, { Component } from 'react';

import classes from './Person.css';

import Aux from '../../../hoc/Aux'

import withClass from '../../../hoc/withClass2'; 

import PropTypes from 'prop-types';

import AuthContext from '../../../Context/auth-context';


// const person= (props) => {

//   console.log('[Person.js] rendering...');
//   return (
//     <div className={classes.Person}>

//       <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
//       <p>{props.children}</p>

//       <input type="text" onChange={props.changed} value={props.name}></input>

//    </div>
//   )
// };

class Person extends Component {

  constructor(props){
    super(props);
    this.inputElementRef= React.createRef();
  }

  //ContextType alternative to <AuthContext.Consumer>
  static contextType= AuthContext;

  componentDidMount(){ 
    // it focus on 1st person after render but not optimal way
    // document.querySelector('input').focus();

    //optmal way by ref - 1st way (functional approch)
    // this.inputElement.focus();

    //2nd way - constructor approach
    this.inputElementRef.current.focus();

    console.log(this.context.authenticated);
    
  }

  render(){
    console.log('[Person.js] rendering...');
    // return (
    //   <div className={classes.Person}>

    //     <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
    //     <p>{this.props.children}</p>
    //     <input type="text" onChange={this.props.changed} value={this.props.name}></input>

    // </div>
    // );

    //2nd way - wrap in array

    // return [

    //     <p key="i1" onClick={this.props.click}>
    //       I'm {this.props.name} and I am {this.props.age} years old
    //     </p>,
    //     <p key="i2">{this.props.children}</p>,
    //     <input key="i3" type="text" onChange={this.props.changed} value={this.props.name}></input>

    // ];

    //3rd way - aux component

    return (
      // <React.Fragment> //you can also use this in place of Aux
      <Aux>

        {/* {this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p>}   */}

          {/* Context API */}
          {/* <AuthContext.Consumer>
            {(context)=> context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
          </AuthContext.Consumer>       */}
          
          {/* //ContextType - alternative to AuthContext.Consumer */}
          {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}  

        <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
        <p key="i2">{this.props.children}</p>
        <input 
          key="i3"
          // ref={(inputEl) => {this.inputElement= inputEl}}
          ref={this.inputElementRef}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name}></input>

      </Aux>
      // </React.Fragment>

    );
  }
}

Person.propTypes= {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
}

// export default person;
export default withClass(Person, classes.Person);
