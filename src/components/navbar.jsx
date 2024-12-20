//componets ko bootom me export krna hota ha */}
// write sfc will create a staeless component  */}
//return me hamey templates likhne hote jo ham create karey ge 

const Navbar = () => {
    return (  
        <nav className="navabar">
            <h1 className='logo'>Logo</h1>

            <div className="links">
                <a href="#">Home</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    );
}
 
export default Navbar;
//ab is navbar component ko app.js me dalna ha phir wo output me aaye ga 
 //   import kare ge Navbar function ko navbar file se in app.js
   // phir App function k andar app div k andar nest karde ge Navbar ko
    
    
    
