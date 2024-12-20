import React from 'react'

export default function Condition() {
    const name='You season';
    const rating='6.6';
    const summary='lorem njknkjnkkbhbkhb';
    let age=40;
    let age1=12;
    let canwatch="watch now";//second method for conditons
    if(age1<=18) canwatch="not availabale";
    let age3=90;
    let functionwatch=()=>{
        if(age3>=18) return "watch now";
        return "not available"
    }
    const list=[1,2,3,4,5,6]
    if(list.length===0){
      return<p>no item in list found</p>
    }
  return (
    <div>
    
             <p>{name}</p>
             <p>{rating}</p>
             <p>{summary}</p>
             <button>{age>18?"watch now":"not available"}</button> {/*button tab press ho jab age 18 plus ho by using ternary operator this is
                                                                       one method*/}

                                    {/*second method upar can watch declare krdo */}
            
        
             <p>{name}</p>
             <p>{rating}</p>
             <p>{summary}</p>
             <button>{canwatch}</button>
   
                         {/*third method by function */}
                         
             <p>{name}</p>
             <p>{rating}</p>
             <p>{summary}</p>
             <button>{functionwatch()}</button>
            
    </div>
  )
}
