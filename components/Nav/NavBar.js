import React from 'react'
import Link from 'next/link'
import { Nav, Logo } from './NavBarStyles'


export const NavBar = () => {
    return (
        <Nav>
     
            <ul>
                <li>
                    <Logo>Xessive Observer</Logo>
                </li>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/About/AboutIndex">
                        <a>About</a>
                    </Link>
                </li>
        
            </ul>
        </Nav>
    )
}
