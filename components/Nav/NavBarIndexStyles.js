import styled from "styled-components";

export const NavBar = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 0.1em solid black;
    align-items: center;
    ul{
        text-align: center;
        vertical-align: middle;
    }
    li{
        vertical-align: middle;
        text-decoration: none;
        list-style: none;
        display: inline-flex;
        margin-right: 5em;
        align-items: center;
        font-weight: bold;
        text-transform: uppercase;
    }
    a:hover, a:focus{
        color: darkblue;
    }
    a:visited {
        color: green;
    }
`;

export const Logo = styled.span`
        display: flex;
        flex-direction: column;
        margin-right: 3em;
        justify-content: left;
        font-weight: bolder;
        text-transform: capitalize;
        font-size: 1.5em;
        font-family: -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif
    
`;