import Navbar from './components/navbar.jsx';
import './App.css';
import Home from './components/home.jsx';

//import Inline from './components/inline.jsx';

import Usestate from './components/usestate.jsx';
import Greet from './components/props.jsx';
import Outputlist from './components/outputlist.jsx';
import Condition from './components/condition-render.jsx';
import Practice from './components/interview-practice.jsx';

//import { Fragment } from 'react';
import {Footer} from './components/import-export.jsx';
import Header from './components/import-export.jsx';
import Listrendering from './components/Listrendering.jsx';

function App() {
   //let title ='my name is nimra';
 // let link_google="http://google.com/";
  //let likes_number=88;
                            {/*yaha return se pehle js likh sakte */}
  return (
    
    
      <>

      
    
        <h1 className="text-3xl font-bold underline bg-slate-600">hey nimra</h1>
    
    {/* <Navbar/>  NAvbar function ko yaha App me nest krdia ha ab navbar outpu tpar show hogi  .. */}
      <Listrendering></Listrendering>
      {/* <Usestate></Usestate>
      <Home/>
      <Practice></Practice>
      <Condition></Condition>
      <Header></Header>
      <Footer></Footer>

      <Greet name='clark' fathername='will'><p>this is children props</p></Greet> {/*ab agar greet ko do bar or call krdu to same aaye ga result but mene resuse krna ha component with diff nameso muje app 
      component se props component me data pass krna ha through props*/}
      {/* <Greet name='nancy' fathername='john'></Greet>
      <Greet name='steve' fathername='ulrich'></Greet>
      <Outputlist></Outputlist>
      
       */}
    { /* <h1 className='style.success'>  this is module css</h1>/*}
    {/*<Inline></Inline>*/}
     {/* <New></New>*/}
      { /*<h1>app components</h1>
      <h1>likes number is {likes_number}</h1>
      <p>{10}</p>  curly braces me js ikhte ha in react 
      <p>{title}</p>
      <p>{Math.random()*12}</p> math.random ramdom floating digit deta ha in output 
      <a href="{link_google}">google</a> */} 
    
  </>
  );
};

export default App;
{/* app,js root comopnet hota ha navnar sidebar details sab kuch isk andar ata ha*/}
{/*nabar ko content se pehle nest kiya ha or home ko content k andar 
                              
                                Functional componets
              these are javascript  function receive props (object of properties) and return jsx that descibe UI

                                Class Based Components
             class componets are ES6 classes  these   function receive props (object of properties) and return jsx that descibe UI    but
             moreover they have a internal private state about a componnet and can use that information for UI    
             New from classcomponent is class component    

                    Difference between components
                    use functional component more....because of absence of this keyword as this keyword is tricky 
                    class component me har component ki state hoti ha sab ki state ko manage krna or debug krna is tough and complex
                    functional component are mainly responsible for UI and are stseless
                    class components contain complex states,are steful

                    Hooks
                    Hooks are functions that let you “hook into” React state and lifecycle features from function components.
                    class componnet use kiye beger through hooks we can use state
                    ..................................
                            JSX
                      write xml like code for element and component
                      jsx and tags names,attributes and children..jsx is not neccessary for react
                      but jsx make react code simpler and elegant..
                    
  
  
  */}
