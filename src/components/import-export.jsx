import React from 'react'

function Header() {
  return (
    <div>
      <p>hey</p>
    </div>
  )
  
}

export default Header;

export const Footer=()=>{//ik file me sirf ik hi default aasakt ha 
                             //ik comonent ko default se kiya ha or dosre ko extend se
    return(                  //extend export multiple hosakte ha
        <>
        <p>hello footer</p>
        </>
    )
  };
  
