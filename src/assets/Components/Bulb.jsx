import styled from 'styled-components'
import  { css } from 'styled-components'

export const AllDiv = styled.div`
border : 2px solid #000000;
padding: 30px;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  margin-bottom: 20px;
   /* Adjust spacing between rows as needed */
`;

export const Container = styled.div`
margin-bottom: 100px;
 width: 200px;
 height: 200px;
 background-image: url( ${(props) => props.ison ? '/bulb-on.png' : '/bulb-off.png'});
 background-size: cover; /* Ensure the image covers the entire container */
  background-position: center;
 
 /* background-color: ${(props) => props.ison ? 'green' : 'red'}; */
`

export const Button = styled.button`
 background-color: ${(props) => props.ison ? 'green' : 'red'};
 border : 2px solid ${(props) => props.ison ? 'green' : 'red'} ;

 border-radius: 3px;
  color: #f8f0f3;
  margin: 0.5em 3em;
  /* padding: 0.25em 1em;  */


  &:hover {
    border : 2px solid ${(props) => props.ison ? 'green' : 'red'} ;
  }
  &:focus {
    outline: none; /* Remove focus outline */
  }
  /* &::after {
    content: '${(props) => props.text}';
  } */
  
 
`




