import styled from "styled-components";

export const NavBar = styled.div `
    display: flex;
    flex-direction: column;
    border-bottom: 0.3em solid black;
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
    }
    p{
      margin-right: 8em;
      vertical-align: middle;
    }
`;