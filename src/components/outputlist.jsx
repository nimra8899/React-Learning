import {useState}from 'react'
import Bloglist from './Prop-use-list';

 function Outputlist() {
    const [blogs,setblogs]=useState([  //use state me sqare bracke me pehle array ka nam (blogs)ata ha then , function jo chlana ha bad me 
                                        //  change krne k liye wo ata ha (setblogs)
        {title:'john',body:'abc',number:'123',id:'1', author:'mario'},//object bnaya ha
        {title:'john',body:'abc',number:'123',id:'2', author:'nancy'},
        {title:'john',body:'abc',number:'123',id:'3', author:'mike'},
        {title:'mike',body:'abc',number:'123',id:'4', author:'mario'}
    ]);
    const deleteblog=(id)=>{
        const newblogs=blogs.filter(blog=>blog.id!==id)
        setblogs(newblogs);

    }
  return (
    <div className='list' >                   {/*blog argument me likha ha phir us se hi sara call hoga */}     
                  {/*return k andar javascript brack me likhe ge */}
                                   
        <Bloglist blogs={blogs} title='all blogs' deleteblog={deleteblog}></Bloglist>    {/*upar list ko props se props use-list me show karaye ge */}
        <Bloglist blogs={blogs.filter((blog)=>blog.author==='mario')} title='mario blogs'deleteblog={deleteblog}></Bloglist>    {/*filter kar k wo result aaye ga jis me mario author ha */}                     
    </div>
  )
}
export default Outputlist

//agar ye list kisi or component me use krni ho to we can use props