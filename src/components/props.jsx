import React from 'react'
//props se ham cik component se dosre components me data transfer krsakte ha bu resusing component
 const Greet=props =>{
  const {name,fathername}=props;
    
  return (
    <div>
      <h2> {name}is the son of {fathername}</h2>{/*props.name se app.js me jo names declare wo ajae ge */}
      
    </div>
  )
}
export default Greet;
//props component me pass hota ha state component me mange hoti ha
//props me functiona are parameters
//state me variable are declared in body...props are owned by parents or children change nhi karsakta ..immutable
///state can be changed by component ....state is aacessed by usestae hook
//destructuring props can be done jab parametres me props ki jaga name and fathername likhndo likhe jaise upar kia ha
