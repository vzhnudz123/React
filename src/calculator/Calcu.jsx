import React, { useState } from 'react'
import './Calculator.css'

const Calcu = () => {
    const[result,setResult]=useState("");

    const click=(value)=>{
        setResult(preresult=>preresult+value);
    }

    const clear=()=>{
        setResult("");
    }
    const calculate=()=>{
        try{
            const total=eval(result);
            setResult(total.toString());

        }
        catch(error){

            alert("invalid");
            setResult("");

        }
        

    }


  return (
    <div className='m'>
        <h1 className='tha'>Calculator</h1>
        <table className='tab'>
            <tr>
                <td colSpan={3}><input className='in' id='result' type="text" value={result} /></td>
                <td>< button className='bg-danger' onClick={clear}>c</button></td>
            </tr>
            <tr>
            <td><button onClick={()=>click('1')} >1</button></td>
            <td><button onClick={()=>click('2')} >2</button></td>
            <td><button onClick={()=>click('3')}>3</button></td>
            <td><button onClick={()=>click('/')}>/</button></td>
            </tr>

            <tr>
            <td><button onClick={()=>click('4')} >4</button></td>
            <td><button onClick={()=>click('5')} >5</button></td>
            <td><button onClick={()=>click('6')}>6</button></td>
            <td><button onClick={()=>click('*')}>*</button></td>
            </tr>

            <tr>
            <td><button onClick={()=>click('7')} >7</button></td>
            <td><button onClick={()=>click('8')} >8</button></td>
            <td><button onClick={()=>click('9')}>9</button></td>
            <td><button onClick={()=>click('-')}>-</button></td>
            </tr>

            <tr>
            <td><button onClick={()=>click('0')} >0</button></td>
            <td><button onClick={()=>click('.')} >.</button></td>
            <td><button onClick={calculate}>=</button></td>
            <td><button onClick={()=>click('+')}>+</button></td>
            </tr>





        </table>



    </div>
  )
}

export default Calcu