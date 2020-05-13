import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, {results: updatedArray});

}


const reducer = (state = initialState, action) => {

    switch(action.type){

        case actionTypes.STORE_RESULT:
            // change data
            // return{
            //     ...state,
            //     results: state.results.concat({id: new Date(),value: action.result}) //do not use push here 
            // }

            //using utility function
            return updateObject(state, {results: state.results.concat({id: new Date(),value: action.result})});

        case actionTypes.DELETE_RESULT:
            // const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            // return{
            //     ...state,
            //     results: updatedArray
            // }

            // return updateObject(state, {results: updatedArray});

            return deleteResult(state, action);
    }

    return state;
};

export default reducer;