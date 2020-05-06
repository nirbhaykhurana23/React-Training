import React, { Component, /*PureComponent*/ } from 'react';
import Person from './Person/Person';

// const persons = (props) => {
//     console.log('[Person.js] rendering...');
    
//     return props.persons1.map((person, index) => {
//         return (
//             <Person 
//             name={person.name}
//             age={person.age}
//             key={person.id}
//             click={ () => props.clicked(index)}
//             changed={ () => props.changed(event, person.id)}/>
//         );
//     });
// };

// class Persons extends PureComponent { //comment shouldComponentUpdate()

class Persons extends Component {

    // static getDerivedStateFromProps(props, state){
    //     console.log('[Person.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        // return true; //this is mandatory and if return false it will not update

        if (nextProps.persons1 !== this.props.persons1 
            || nextProps.changed !== this.props.changed
            || nextProps.clicked !== this.props.clicked)
        {
            return true;
        }
        else{
            return false;
        }
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot !'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){
        console.log('[Persons.js] rendering...');
    
        return this.props.persons1.map((person, index) => {
        return (
                <Person 
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    click={ () => this.props.clicked(index)}
                    changed={ () => this.props.changed(event, person.id)}
                    isAuth={this.props.isAuthenticated}/>
            );
        });
    }
}

// export default persons;
export default Persons;