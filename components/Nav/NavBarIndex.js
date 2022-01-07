import React from 'react'
import Link from 'next/link'
import { NavBar } from './NavBarIndexStyles'

export const NavBarIndex = () => {
    return (
        <NavBar>

            <ul>
                <li>
                    <Link href="/">
                        <a><p>Xessive Observer</p></a>
                    </Link>
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
                <li>
                    <Link href="/Portfolio/PortfolioIndex">
                        <a>Portfolio</a>
                    </Link>
                </li>
            </ul>
        </NavBar>
    )
}
