import React, { useState } from 'react'
import styled from "styled-components"
import BackgroundImage from '../components/BackgroundImage'
import Header from "../components/Header"
import { firebaseAuth } from "../utils/firebase-config";
import {  onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

     const [showPassword, setshowPassword] = useState(false); 
     const [formValues,setFormValues] = useState({
         email:"",
         password:"",
     });

     const handleLogin = async ()=>{
        try {
           const {email,password}=formValues;
           await signInWithEmailAndPassword(firebaseAuth,email,password); 
        } catch (error) {
            console.log(error);
        }
     }

     onAuthStateChanged(firebaseAuth,(currentUser)=>{
         if(currentUser) navigate("/");
     })

   return (
   <Container>
      <BackgroundImage />
      <div className='content'>
          <Header />
          <div className='form-container flex-column a-center j-center'>
             <div className='form flex column a-center j-center'>
                <div className='title'>
                  <h3>Login</h3>
                </div>
                <div className='container flex column'>
                <input 
                type="email" 
                placeholder="Email Address" 
                autoComplete='off' 
                name="email" 
                value={formValues.email} 
                onChange={(e)=>setFormValues({
                    ...formValues,
                    [e.target.name]:e.target.value,
                     })} />
              
                <input 
                type="password" 
                placeholder="Password" 
                autoComplete='off' 
                name="password" 
                value={formValues.password} 
                onChange={(e)=>setFormValues({
                    ...formValues,
                    [e.target.name]:e.target.value,
                    })}
                    />
                
                
                <button onClick={handleLogin}>Login</button>
                </div>
             </div>
          </div>
      </div>
   </Container>
   )
 }
  
 const Container = styled.div`
 position:relative;
  .content{
      position:absolute;
      top:0;
      left:0;
      background-color: rgba(0, 0, 0, 0.5);
      height:100vh;
      width:100vw;
      display:grid;
      grid-template-rows: 15vh 85vh;
      .form-container{
        gap:2rem;
        height:85vh;
        .form{
          padding2rem;
          background-color: #000000b0;
          width:25vh;
          gap:2rem;
          color:white;
          .container{
            gap:2rem;
            input{
              padding:0.5rem 1rem;
              widht:15rem;
            }
            button{
              
            }
          }
        }
      }
  }
 `;