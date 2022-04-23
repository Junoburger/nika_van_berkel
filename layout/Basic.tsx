import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  // this is the shared style
code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
  body {
	margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
		"Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 10pt;
    font-weight: lighter;
  }
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
	font-family: "Helvetica", "Arial", sans-serif;
  }

  a,
  a::before,
  a::after {
  /* float: left;
  position: relative;
  top: 0;
  cursor: pointer;
  background: white;
  border-radius: 3px;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.2);
  margin: 0 7px 11px 0;


  text-align: center; */

  text-decoration: none;

        /* background: lightgray;
        padding: 1rem;
        border-radius:1rem; */
        color:white;
        user-select: none;
          /* transition: all 0.2s ease;
  background: rgba(205,205,205,1);
  box-shadow: 0px 5px  rgba(185,185,185,1); */
  color: black;
  }
a:hover{
  /* background: rgba(205,205,205,1);
  box-shadow: 0px 4px rgba(185,185,185,1); */
  color: white;
}

a:active{
    /* top: 4px;
      box-shadow: 0px 0px rgba(85,85,85,1); */
}

h1 {
  text-align: center;
}
/* 
ul{
  list-style-type:none;
} */
  // anything else you would like to include
`;

const BasicLayout = ({ children }: { children: any }) => {
	return (
		<>
			<GlobalStyle />
			{children}
		</>
	);
};

export default BasicLayout;
