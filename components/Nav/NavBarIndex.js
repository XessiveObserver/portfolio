import React from 'react'
import Link from 'next/link'
import { NavBar, Logo } from './NavBarIndexStyles'


export const NavBarIndex = () => {
    return (
        <NavBar>
     
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
        </NavBar>
    )
}
