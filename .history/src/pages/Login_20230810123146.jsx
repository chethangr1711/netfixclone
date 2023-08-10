import React, { useState } from 'react'
import styled from "styled-components"
import BackgroundImage from '../components/BackgroundImage'
import Header from "../components/Header"
import { firebaseAuth } from "../utils/firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  return (
    <div>Login</div>
  )
}
