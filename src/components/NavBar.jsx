import { Link } from 'react-router-dom';


function Navigation() {
   
  return (
      <div className='navBar'>
          <div className='navWrap'>

           <h1 className='netPicks'>NETPICKS</h1>
            <ul className='list'>
              <li className='listItem'>
                 <Link className='link' to="/">Home</Link>
              </li>  
              <li className='listItem'>
              <Link className='link' to="/Movies">Movies</Link>
              </li>   
              <li >
              <Link className='link' to="/About">About</Link>
              </li>   
          </ul>

          </div>
        
      </div> 
      
  )
}

export default Navigation




//REACT ROUTER BASIC NAVBAR
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }





