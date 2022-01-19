import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';

const MiniBio = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #362b7c;
    max-width: 100%;
    @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }

`;
const LeftContent = styled.div`
    flex-basis: 60%;
    margin: 3em;

    h1{
        text-align: left;
        font-size: 4em;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
    }
    p{
        font-size: 2em;
        color: whitesmoke;
        font-family: 'Trebuchet MS',
         'Lucida Sans Unicode', 'Lucida Grande',
          'Lucida Sans', Arial, sans-serif;
    }
    h3{
        color: #859696;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    button{
        cursor: pointer;
        color: white;
        font-size: 1em;
        background-color: #105288;
        border-radius: 0.3em;
        border: none;
        padding: 0.3em;
        text-transform: uppercase;
        font-weight: bolder;
        text-decoration: solid;
    }
`;

const RightContent = styled.div`

`;

export const IndexLayout = () => {
    return (
        <MiniBio>
            <LeftContent>
            <h1>
                Hello,
                <br />I am Xessive Observer.
            </h1>
            <p>
                I build modern web apps in Python and javascript,using
                Django, Django resful API, react js and next js.
            </p>
            <h3>
                Full Stack Web developer based in Uganda.
            </h3>
            <button>
                <Link href="/About/AboutIndex">
                    <a> Get In Touch.</a>
                </Link>
            </button>
            </LeftContent>
            <RightContent>
            </RightContent>            
        </MiniBio>
    )
}