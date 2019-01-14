import {createStore} from "redux";
import {calculator} from "./calculator.reducer";
import {CLEAR, OPERATOR, EQUAL, INPUT_ELE}from './calculator.action.constant';
import {CalculatorComponent} from "./calculator.component";

let store = createStore(calculator);

let inputEle = (number) => store.dispatch({type: 'INPUT_ELE', number});
let add = () => store.dispatch({type: 'OPERATOR', func:(a, b) => a + b});
let subtract = () => store.dispatch({type: 'OPERATOR', func:(a, b) => a - b});
let multiply = () => store.dispatch({type: 'OPERATOR', func:(a, b) => a * b});
let divide = () => store.dispatch({type: 'OPERATOR', func:(a, b) => a / b});
let equals = () => store.dispatch({type: 'EQUAL', func:(a, b) => b});
let clear = () => store.dispatch({type: 'CLEAR'});



export {
    inputEle,
    add,
    subtract,
    multiply,
    divide,
    equals,
    clear
};


