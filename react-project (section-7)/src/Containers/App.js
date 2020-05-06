import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

// import WithClass from '../hoc/WithClass';

import withClass from '../hoc/withClass2'; //another form of HOC
import Aux from '../hoc/Aux';

import AuthContext from '../Context/auth-context';


class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state= {
    persons: [
      {id: 1, name: "nirbhay", age:24},
      {id: 2, name: "sid", age:23},
      {id: 3, name: "aman", age:19}
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };
 
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true; 
}

  componentDidUpdate(){ //you can add snapshot here
    console.log('[App.js] componentDidUpdate'); 
}

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }


  deletePersonHandler = (personIndex) => {
    const persons= this.state.persons.slice(); //slice is used to create copy of original state
    // const persons= [...this.state.persons]; //2nd way to copy state

    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    });

    const person= {
        ...this.state.persons[personIndex]
    };
    // const person= Object.assign({}, this.state.persons[personIndex]); //alternative to ... 

    person.name= event.target.value;

    const persons= [...this.state.persons];
    persons[personIndex]= person;

    // this.setState({
    //   persons: persons, 
    //   changeCounter: this.state.changeCounter + 1   //incorrect way of setting state
    // });


    //correct way of setting state
    this.setState((prevState, props) => {
      return{
          persons: persons, 
          changeCounter: prevState.changeCounter + 1
      };
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {

    console.log('[App.js] render');
    let persons= null; // preffered way of toggle persons instead of ?: ternary operator
    
    if(this.state.showPersons){
        persons= <Persons
                    persons1={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                    isAuthenticated={this.state.authenticated}/>;
    }

    return (
            // <div className={classes.App}>
            // <WithClass classes={classes.App}>

            // another form of HOC- we use aux
            <Aux> 
                <button
                  onClick={() => {
                    this.setState({showCockpit:false});
                  }}>
                    Remove Cockpit
                </button>

                <AuthContext.Provider value={{
                  authenticated: this.state.authenticated,
                  login: this.loginHandler
                  }}>
                
                  {this.state.showCockpit ? (
                      <Cockpit
                          title={this.props.appTitle}
                          showPersons={this.state.showPersons}
                          personsLength={this.state.persons.length} //for memo, we do this outside of cockpit
                          clicked={this.togglePersonsHandler}
                          // login={this.loginHandler}
                        />
                        ) : null}

                          {persons}

              {/* </div> */}
              {/* </WithClass> */}

                </AuthContext.Provider>
            </Aux>
    );
  }
}

// export default App;
export default withClass(App, classes.App); // another form of HOC