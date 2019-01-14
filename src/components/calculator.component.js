import React from 'react';
import {inputEle, add, subtract, multiply, divide, equals, clear} from "./calculator.action";
import {calculator} from "./calculator.reducer";


export const CalculatorComponent = props =>{

    const addDisplayHandler = () => {
        const display = () => document.getElementById('display');

    };




    return(
        <table width="200" height="300" border="2px solid black">
            <tr height="80">

                <td colSpan="4" align="right" padding="2"><font size="5">{()=>calculator()}</font></td>

            </tr>
            <tr>
                <td>
                    <button onClick={()=>clear}>C</button>
                </td>
                <td>
                    <button onClick="">±</button>
                </td>
                <td>
                    <button onClick="">%</button>
                </td>
                <td>
                    <button onClick={()=>divide}>/</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button onClick={()=>inputEle(7)}>7</button>
                </td>
                <td>
                    <button onClick={()=>inputEle(8)}>8</button>
                </td>
                <td>
                    <button onClick={()=>inputEle(9)}>9</button>
                </td>
                <td>
                    <button onClick={()=>multiply}>*</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button onClick={()=>inputEle(4)}>4</button>
                </td>
                <td>
                    <button onClick={()=>inputEle(5)}>5</button>
                </td>
                <td>
                    <button onClick={()=>inputEle(6)}>6</button>
                </td>
                <td>
                    <button onClick={()=>subtract}>-</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button onClick={()=>inputEle(1)}>1</button>
                </td>
                <td>
                    <button onClick={()=>inputEle(2)}>2</button>
                </td>
                <td>
                    <button onClick={()=>inputEle(3)}>3</button>
                </td>
                <td>
                    <button onClick={()=>add}>+</button>
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <button onClick={()=>inputEle(0)}>0</button>
                </td>
                <td>
                    <button onClick="{}">.</button>
                </td>
                <td>
                    <button onClick={()=>equals}>=</button>
                </td>
            </tr>
        </table>
    )
}
