import styled from "styled-components";

export const NavBar = styled.div `
    display: flex;
    flex-direction: column;
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
    }
    p{
      margin-right: 15em;
      vertical-align: middle;
      font-weight: bolder;
    }
    a:hover, a:focus{
        color: darkblue;
    }
    a:visited {
        color: green;
    }
`;