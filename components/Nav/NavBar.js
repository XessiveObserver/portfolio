import React from 'react'
import Link from 'next/link'
import { Nav, Logo } from './NavBarStyles'


export const NavBar = () => {
    return (
        <Nav>
     
           
                <div>
                    <Link href="/" passHref>
                        <a>
                        <Logo>Xessive Observer</Logo>
                        </a>
                    </Link>
                
                    <Link href="/">
                        <a>Home</a>
                    </Link>
               
                    <Link href="/About">
                        <a>About</a>
                    </Link>
                </div>
        
        
        </Nav>
    )
}
