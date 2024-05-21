// import { useEffect } from "react";
// import { useState } from "react";
// import Shop from "../Shop/Shop";

// const Header = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     fetch("products.json")
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);
//   function getData() {
//     return products;
//   }
//   return (
//     <div>
//       <div className="navbar bg-green-600 text-white">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               <li>
//                 <a>Order</a>
//               </li>
//               <li>
//                 <a>Order Review</a>
//               </li>
//               <li>
//                 <a>Mange Inventory</a>
//               </li>
//             </ul>
//           </div>
//           <a className="btn btn-ghost text-xl">
//             <img
//               className="w-[50px] rounded-full"
//               src={
//                 "https://th.bing.com/th/id/OIG2.7zz2ynyRIIhxBpTJhgh9?w=173&h=173&c=6&r=0&o=5&dpr=1.5&pid=ImgGn"
//               }
//               alt=""
//             />{" "}
//             Computer Zone
//           </a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             <li>
//               <a>Order</a>
//             </li>
//             <li>
//               <a>Order Review</a>
//             </li>
//             <li>
//               <a>Manage Inventory</a>
//             </li>
//           </ul>
//         </div>
//         <div className="navbar-end">
//           <button className="btn btn-accent indicator">
//             <img className="w-[25px]" src={"../public/cart-icon.png"} alt="" />
//             <span className="indicator-item badge badge-secondary me-5">9</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default { Header, getData };
