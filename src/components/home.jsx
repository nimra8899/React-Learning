const Home = () => {
    const clickbutton=()=>{
        console.log("click is done ")//jab clikc karey to ye show hoga
    }
    const clickbutton2=(name)=>{// pass a argument name and ka nam call krte hue de ge
         console.log("my name is"+ name);
    }
    return (  
        <div className="home"> 
             <img src="./pics/korean.jpeg" alt="" width='30%' height='40%'/>
            <h1>this is my homepage</h1>
            <button onClick={clickbutton}>click here</button>
            <button onClick={()=>{
                clickbutton2('nimra')//function ko arrow function ma dal dia h
            }}>click this again</button>
        </div>
    );
}
 
export default Home;
//now inpoert in app.js 
//return (  
    //<div>
      //<h1>hello</h1>
    //</div>
  //)
  //return React.createElement('div',null,React.createElement('h1',{id:'divmain'},'hello theree')) //ye without jsx wala method ha       //isk argument me pehle ik string pass 
  //krsakte ha,dosre me properties,third me jo first arguement ha uska children hoga firsst me div ha to uksa child maltab 
  //usme jo pass krna ha hello nimra
  //ye  istrha coponent bnana or usko app.js me import krna is JSX method 
 //without jsx hamey ik element create krna hoga 