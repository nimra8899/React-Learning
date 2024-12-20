import {useState} from 'react'
  const Usestate=()=>{
 
   //usestate me array k through koi value store kare ge 
   const [name,setname]=useState('sam');//ab name se nimra aaye ga button click krne par or setname se ham change krsakte ha name ko
  const [age,setage]=useState('90');
    const onClickfunction=()=>{

        setname('nick');//setname se name change krsakte ha
        setage('77');//age change ho kar ye hojae gi button par click krte hi
        //onclikfuction laga ha button par
    }
  return (

    <div>
        
        <p>{name} is {age} years old boy</p>
        <button onClick={onClickfunction}>click this button use state</button>{/*abb button par click krne se name change hojae ga  */}
      
    </div>
  )
}

export default Usestate;//is me usestate hook use hoga
//ab button par cick ho to nam change hojae
//hooks ko reactive value k liye use krte ha or usko change bhi krsakte ha jab need ho
//hooks ki waja se ham state use karsakte without using class
