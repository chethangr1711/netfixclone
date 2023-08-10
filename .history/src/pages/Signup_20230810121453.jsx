 import React, { useState } from 'react'
 import styled from "styled-components"
 import BackgroundImage from '../components/BackgroundImage'
 import Header from "../components/Header"
 import { firebaseAuth } from "../utils/firebase-config";

 export default function Signup() {
     const [showPassword, setshowPassword] = useState(false); 
     const [formValues,setFormValues] = useState({
         email:"",
         password:"",
     });

     const handleSignIn = async ()=>{
        try {
           const {email,password}=formValues;
           await createUserWithEmailAndPassword(firebaseAuth) 
        } catch (error) {
            console.log(error);
        }
     }
   return (
   <Container showPassword={showPassword}>
       <BackgroundImage />
       <div className='content'>
       <Header login />
        <div className='body flex column a-center j-center'>
            <div className='text flex column'>
                <h1>Unlimited Movies, TV shows and more</h1>
                <h4>Watch anywhere. Cancel anytime</h4>
                <h6>Ready to watch? Enter your email to create your membership</h6>
            </div>
            <div className='form'>
                <input type="email" placeholder="Email Address" autoComplete='off' name="email" value={formValues.email} onChange={(e)=>setFormValues({
                    ...formValues,
                    [e.target.name]:e.target.value,
                     })} />
                {
                    showPassword &&(
                        <input type="password" placeholder="Password" autoComplete='off' name="password" value={formValues.password} 
                            onChange={(e)=>setFormValues({
                            ...formValues,
                            [e.target.name]:e.target.value,
                            })}
                        />
                    )
                }
                
                {!showPassword && <button onClick={()=>setshowPassword(true)}>Get Started</button>}
            </div> 
            <button onClick={handleSignIn}>Sign Up</button>
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
      .body{
          gap:1rem;
          .text{
              gap:1rem;
              text-align:center;
              font-size:2rem;
              h1{
                  padding:0 25rem;
              }
          }
          .form{
              display:grid;
              grid-template-columns:${({showPassword})=>showPassword ? "1fr 1fr":"2fr 1fr"};
              width:60%;
              input{
                  color:black;
                  border:none;
                  padding:1.25rem;
                  font-size:1.2rem;
                  border:1px solid black;
                  &:focus{
                    outline:none;
                  }
              }
              button{
                padding:0.5rem 1rem;
                background-color: #e50914;
                border:none;
                cursor:pointer;
                color:white;
               
                font-size:1.05rem;
                font-weight:1.05rem;
              }
          }
          button{
            padding:0.5rem 1rem;
            background-color: #e50914;
            border:none;
            cursor:pointer;
            color:white;
            border-radius: 0.2rem;
            font-size:1.05rem;
            font-weight:bolder;
          }
      }
  }
 `;