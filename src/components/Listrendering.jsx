import { list } from "postcss"


const Listrendering=()=>{
    const mylist=['nimra',2,3,4,5,'ghh']  //ye ha list isk elements render krne ha 
  

                const PersonList=[
                    {
                        id:1,
                        name:'xyz',
                        age: 30
                           },
                           {
                               id:2,
                               name:'xyzcd',
                               age: 32
                           },
                           {
                               id:3,
                        name:'xvv',
                        age: 33
                           }
                ]
              const Fruits=['apple ','banana','grape']
 return( 
<>
<h1>
    {
 mylist[0]
    }
   
</h1>
<h1>
 {    mylist[1]}
</h1>
<h1>
    {
mylist[2]
    }
    
</h1>   {/*  is method se bhi list k elements display hosakte but we will use map method for fast  */}
   

                      {/*  map method javascript ka method ha is liye curly bracket me aaye ga
     */}       

                    {
                                                                //  {/* //    abb is pore map method ko kisi or name se declare krdu agar like result*/}
                                 mylist.map(nameoflist=><h3> 
                                    {
                                 nameoflist           //name of list ki jaga koi bhi name asakata ha
                                    }
                                 </h3>)
                            
                //    pore map method ko result name me krdia ab return me result ko call krlo 
                                }
                                     
          
                                     <h2>Person List:</h2>
      <ul>
        {PersonList.map((person) => (
          <li key={person.id}>
            {person.name} (Age: {person.age})        
          </li>
        ))}
      </ul>

      {Fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li> // Use key for each list item    
        ))}
                      
</>


 )
}
export default Listrendering
 {/* react me for loop nhi hota is liye map method use hota ha or key assgn ki ati ha
    map method dosre function ko as a argument leta ha
    map method har element par jata ha or us par agar koi transformation lagani hoti ha to krna ha 
    for example array=[2,3,4,5]
    answer=array.map(x=x*2)
    result =4,6,8,10
    */}
