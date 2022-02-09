import styled from "styled-components";

export const NavBar = styled.div `
    display: flex;
    flex-direction: column;
    @media(max-width:600px){
        flex-direction: coulumn;
    }
    border-bottom: 0.1em solid black;
    ul{
        text-align: center;
        vertical-align: middle;
    }
    li{
        vertical-align: middle;
        text-decoration: none;
        list-style: none;
        display: inline-block;
        margin-right: 5em;
        align-items: center;
        font-weight: bold;
        text-transform: uppercase;
    }
    p{
      margin-right: 15em;
      vertical-align: middle;
      font-weight: bolder;
      text-transform: capitalize;
      font-size: 1.5em;
      font-family: -apple-system, BlinkMacSystemFont,
       'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif
    }
    a:hover, a:focus{
        color: darkblue;
    }
    a:visited {
        color: green;
    }
`;