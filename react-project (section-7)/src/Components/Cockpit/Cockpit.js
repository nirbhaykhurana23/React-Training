import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css'

import AuthContext from '../../Context/auth-context';


const cockpit = (props) => {

    //Ref in functional comp
    const toggleBtnRef= useRef(null);

    //useContext() - alternative to AuthContext.Consumer
    const authContext= useContext(AuthContext);

    console.log(authContext.authenticated);
    

    // useEffect(() => {
    //     console.log('[Cockpit.js] useEffect');
    //     // Http req..
    // });

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http req..
        setTimeout(()=>{
            alert("Person changes");
        },1000);
    }, [props.persons]);


    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // const timer= setTimeout(()=>{
        //     alert("useEffect called on first time render");
        // },1000);
        toggleBtnRef.current.click(); //useRef()
        return () => {
            // this will remove alert if we remove cockpit before alert
            // clearTimeout(timer);
            console.log("[Cockpit.js] cleaning up work in useEffect");
        }
    }, []);

//it cleans up after every render.
    useEffect(() => {
        console.log('[Cockpit.js] 2 useEffect');
        return () => {
            console.log("[Cockpit.js] 2 cleaning up work in useEffect");
        };
    });


    let btnClass= '';

    if(props.showPersons){
        btnClass= classes.Red;
    }
    
    const assignedClasses= [];

    if(props.personsLength <=2 ){
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <=1 ){
      assignedClasses.push(classes.bold);
    } 

    return (
        <div className={classes.Cockpit}>
                <h1>Section 7</h1>
                <p className={assignedClasses.join(' ')}>{props.title}</p>
                <button
                    ref={toggleBtnRef}
                    className={btnClass}
                    onClick={props.clicked}>
                        Toggle Persons
                </button>
                {/* <button onClick={props.login}>Log in</button> */}


                {/* //Context API */}
                {/* <AuthContext.Consumer>
                    {(context)=>  <button onClick={context.login}>Log in</button>}
                </AuthContext.Consumer>    */}

                {/* //useContext() - alternative to AuthContext.Consumer */}
                <button onClick={authContext.login}>Log in</button>

               

        </div>
    );
};

export default React.memo(cockpit);