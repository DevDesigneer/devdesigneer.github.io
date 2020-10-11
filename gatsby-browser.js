import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, html {
    font-family: "Inter", sans-serif;
    height: 100%;
  }
`

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
)
