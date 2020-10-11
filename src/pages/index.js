import React from "react"
import styled from "styled-components"
import { FiTwitter, FiInstagram, FiGithub } from "react-icons/fi"
import { RiDiscordFill } from "react-icons/ri"

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  background: #536976; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #292e49,
    #536976
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #292e49,
    #536976
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  h1 {
    margin: 0;
    font-size: 6rem;
    font-weight: 200;
    letter-spacing: -10px;

    background: linear-gradient(
      to right,
      #ff0000 20%,
      #ffa500 30%,
      #ffff00 40%,
      #008000 50%,
      #0000ff 60%,
      #4b0082 80%,
      #ee82ee 90%,
      #ff0000 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    background-size: 200% auto;
    animation: textShine 7s ease-in-out infinite;
  }
  @keyframes textShine {
    to {
      background-position: 200%;
    }
  }
  h3 {
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: -2px;
    color: #e5e5e5;
  }
  .social-links {
    padding-top: 1em;
    display: flex;
    justify-content: space-between;
    color: #e5e5e5;
    font-size: 4rem;
    a {
      text-decoration: none;
      color: #e5e5e5;
    }
  }
`

export default function Home() {
  return (
    <MainWrapper>
      <div className="content">
        <h1>DevDesigneer</h1>
        <h3>Coming Soon!</h3>
        <div className="social-links">
          <a href="https://twitter.com/DevDesigneer">
            <FiTwitter />
          </a>
          <a href="https://www.instagram.com/DevDesigneer/">
            <FiInstagram />
          </a>
          <a href="https://github.com/DevDesigneer/">
            <FiGithub />
          </a>
          <a href="https://discord.gg/p3KYTke">
            <RiDiscordFill />
          </a>
        </div>
      </div>
    </MainWrapper>
  )
}
