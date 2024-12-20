import React from "react";

const Bloglist = ({blogs,title,deleteblog}) => {
    

   
    return ( 
        <div className="blog-list">
           {title}
             {blogs.map((blog)=>(                
            <div className="blog-preview"  key={blog.id}>{/*keys reacts me use hoti ha ta k list k elemnts ko track ho sakey  */}
         <h2> {blog.title}</h2> {/*blogs jo upar array ka nam rakha ha uspar map method lage ga */}
         <p>{blog.body}</p>{/* map method array k har element par jakar kar bari  bari function perform krta ha and return new array*/}
         <button onClick={()=>deleteblog(blog.id)}>delete blog</button>
                                
    </div>
        
                      
        ))} 
        </div>  
     );
}
 
//child k function me props pass  krana ha argument me
export default Bloglist;