import Link from 'next/link';
function Nav() {
    return (
       <ul className="nav">
           <li>
               <Link href="/">
                   <a className="nav-link">Home</a>
                </Link>
           </li>
           <li>
               <Link href="/about">
                   <a className="nav-link">About</a>
                   </Link>
           </li>
           <li>
               <Link href="/products">
                   <a className="nav-link"> Products</a>
                   </Link>
           </li>
       </ul>
    )
}

export default Nav
