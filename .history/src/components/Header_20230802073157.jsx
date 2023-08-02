import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import logo from "../assets/logo.png"

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <Container>
      <div classNmae="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={()=> navigate(props.login ? "/login" : "/singup")}>
        {props.login ? "Log In" : "Sign In"}
      </button>
    </Container>
  )

}

const Container = styled.div``;