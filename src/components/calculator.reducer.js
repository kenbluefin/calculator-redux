import {INPUT_ELE, CLEAR, OPERATOR, EQUAL} from "./calculator.action.constant";


export function lastAction(state, action){
    return{
        ...state, lastAction: action.type
    };
}

export function calculator(state, action){
    console.log('Display state + action');
    console.log(state);

    let ret = lastAction(checkStatus(state, action), action)

    return ret;
};

export function checkStatus(state, action) {
    const initialState = {
        number: 0,
        storedFunction: (x) => x
    };

    if(typeof state === 'undefined'){
        return initialState;
    }

    switch (action.type) {
        case INPUT_ELE:
            let number = state.number;
            if (state.lastAction !== INPUT_ELE){
                number = 0;
            }
            return{...state, number: number + action.number}
        case CLEAR:
            return initialState;
        case OPERATOR:
            return handleOperator(state, action);
        case EQUAL:
            return handleEqual(state, action);

        default:
            return state;

    }

}

export function handleEqual(state, action) {
    if(state.lastAction !== 'EQUAL'){
        let newFunc = (operate) => {
            return state.operator(operate, state.number);
        }
        return{
            ...state,
            storedFunction: newFunc,
            number: state.storedFunction(state.number)
        };
    }else{
        return{
            ...state,
            number: state.storedFunction(state.number)
        };
    }

}

export function handleOperator(state, action) {
    if (state.lastAction === 'EQUAL'){
        let newFunc = (operate) => action.func(state.orgFunc(state.number), operate);
        return{...state,
            action: action.func,
            storedFunction: newFunc,
            number: state.number
        };
    }else if(state.lastAction === 'OPERATOR') {
        let newFunc = (operate) => action.func(state.number, operate);
        return {
            ...state,
            operator: action.func,
            storedFunction: newFunc,
            number: state.number
        };
    }
    let newFunc = (operate) => action.func(state.storedFunction(state.number), operate);

    return{
        ...state,
        operator: action.func,
        orgFunc: state.storedFunction,
        storedFunction: newFunc,
        number: state.storedFunction(state.number)
    };
    
}
