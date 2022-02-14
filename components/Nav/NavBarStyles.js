import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 8vh;
    margin: 1.2em;
    
    a {
        vertical-align: middle;
        text-decoration: none;
        list-style: none;
        margin: 5em;
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
        margin: 3em;
        justify-content: left;
        font-weight: bolder;
        text-transform: capitalize;
        font-size: 1.5em;
        font-family: -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif
    
`;