



import { createGlobalStyle } from "styled-components";
import utils from "./utils";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

 


  :root {
      font-size: ${utils(24)};

      @media (min-width: 768px) {
        font-size: ${utils(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${utils(16)};
      }
    }
`;

export default Global;
