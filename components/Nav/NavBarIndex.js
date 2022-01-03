import React from 'react'
import { NavBar } from './NavBarIndexStyles'
import Link from 'next/link'

export const NavBarIndex = () => {
    return (
        <NavBar>
            <ul>
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
                <li>
                    <Link href="/Portfolio/PortfolioIndex">
                        <a>Portfolio</a>
                    </Link>
                </li>
            </ul>
        </NavBar>
    )
}
