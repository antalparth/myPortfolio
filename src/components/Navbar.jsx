// import { NavLink } from "react-router-dom"


// const Navbar = () => {
//   return (
//     <header className="header"> 
//     <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">

//         <p className="blue_gradient_text"> PA </p>
//         </NavLink>
//         <nav className="flex text-lg gap-3 font-medium"> </nav>
//         <NavLink to='/about' className={(isActive)=>
//         isActive?
//     'text-blue-500' : 'text-black'}>
//             About
//         </NavLink>
//         <NavLink to='/projects' className={(isActive)=>
//         isActive?
//     'text-blue-500' : 'text-black'}>
//             Projects
//         </NavLink>
//     </header>
//   )
// }

// export default Navbar

// import { NavLink } from "react-router-dom"

// const Navbar = () => {
//   return (
//     <header className="header">
//       <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
//         <p className="blue_gradient_text"> PA </p>
//       </NavLink>
//       <nav className="flex text-lg gap-3 font-medium">
//         <NavLink to='/about' className={({isActive}) => 
//           isActive ? 'text-blue-500' : 'text-black'}>
//           About
//         </NavLink>
//         <NavLink to='/projects' className={({isActive}) => 
//           isActive ? 'text-blue-500' : 'text-black'}>
//           Projects
//         </NavLink>
//       </nav>
//     </header>
//   )
// }

// export default Navbar;

import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header flex justify-between items-center px-6 py-4">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md">
        <p className="blue_gradient_text"> PA </p>
      </NavLink>
      <nav className="flex text-lg gap-x-20 font-medium">
        <NavLink to='/about' className={({ isActive }) => 
          isActive ? 'text-blue-500' : 'text-black'}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => 
          isActive ? 'text-blue-500' : 'text-black'}>
          Projects
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar;
