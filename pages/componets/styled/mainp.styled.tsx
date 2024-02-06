import styled from "styled-components";
import Image from "next/image";
import { Inter } from "next/font/google";
export const Divfrom= styled.div `
display: flex;
max-width: 1280px;
align-items: center;
flex:1 1 0;
flex-wrap: wrap;
@media (max-width: 768px) {
    width:100%
  }
`;
export const   Leftformin= styled.div`

`;
export const Leftform = styled.form`
display: flex;
padding: var(--8, 32px);
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: var(--5, 20px);
flex-shrink: 1;
border-radius: var(--rounded-lg, 8px);
background: var(--white, #FFF);

/* shadow */
box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10);
@media (max-width: 768px) {
    width:95%;
  }
`;
export const FormIma= styled(Image)`
width: 24px;
height: 24px;
`;
export const Textera= styled.h3`
color: var(--gray-900, #111928);

/* text-lg/font-semibold */
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 27px */
`;
export const Wel=styled.h2`
color: var(--gray-900, #111928);

/* leading-tight/text-2xl/font-bold */
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 125%; /* 30px */
`;
export const Imagerc = styled(Image)`
flex-basis: auto;
width:525px;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 1103px ) {
  width:450px;
}
@media (max-width: 963px ) {
  width:350px;
}
@media (max-width: 865px) {
  width:300px;
}
@media (max-width: 768px) {
  display: flex;
justify-content: center;
align-items: center;
  width:95%;
}
`;
export const Rdiv2=styled.div`
display: flex;
height: 543px;
padding: var(--8, 32px);
display: flex;
justify-content: center;
align-items: center;
flex-shrink: 1;
@media (max-width: 1103px ) {
  width:450px;
}
@media (max-width: 963px ) {
  width:350px;
}
@media (max-width: 865px) {
  width:300px;
}
@media (max-width: 768px) {
  width:95%;
}
`;
export const Fdiv=styled.div`
display: flex;
align-items: flex-start;
align-self: stretch;
gap:8px;
`;
export const Textq=styled.p`
align-self: stretch;

color: var(--gray-500, #6B7280);

/* text-sm/font-medium */
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 21px */
`;
export const Fa=styled.a`
color: var(--primary-600, #1C64F2);
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 150%;
margin-left:3px;
`;
export const InputDiv=styled.div`
display: flex;
align-items: flex-start;
gap: var(--5, 20px);
align-self: stretch;
flex-wrap: wrap;
`;
export const Inputdiv1=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: var(--2, 8px);
flex: 1 0 0;
`;
export const InputDivtext = styled.h5`
color: var(--gray-900, #111928);
align-self: stretch;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 150%;
`;
export const InputFie=styled.input`
display: flex;
padding: var(--3, 12px) var(--4, 16px);
align-items: center;
gap: var(--25, 10px);
align-self: stretch;

border-radius: var(--rounded-lg, 8px);
border: 1px solid var(--gray-300, #D1D5DB);
background: var(--gray-50, #F9FAFB);
`;
export const BrTag = styled.hr`
height: 1px;
flex: 1 0 0;
background: var(--gray-200, #E5E7EB);
`;
export const Brdiv=styled.div`
color: var(--gray-500, #6B7280);
text-align: center;

/* text-base/font-medium */
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 24px */


display: flex;
justify-content: center;
align-items: center;
gap: var(--6, 24px);
align-self: stretch;
`;
export const ButtonG= styled.button`
display: flex;
height: 41px;
padding: var(--25, 10px) var(--5, 20px);
justify-content: center;
align-items: center;
gap: var(--2, 8px);
align-self: stretch;
border-radius: var(--rounded-lg, 8px);
border: 1px solid var(--gray-200, #E5E7EB);
color: var(--gray-900, #111928);

/* text-sm/font-medium */
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 21px */

`;
export const ButtonImg=styled(Image)`
width: var(--5, 20px);
height: var(--5, 20px);
`;
export const Ldiv=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
align-self: stretch;
`;
export const Lspan=styled.span`
color: var(--gray-500, #6B7280);

font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 14px; 
`;
export const Llink=styled.a`
color: var(--primary-600, #1C64F2);
text-align: right;


font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 150%;
`;
export const Signin1=styled.button`
display: flex;
padding: var(--25, 10px) var(--5, 20px);
justify-content: center;
align-items: center;
gap: var(--2, 8px);
align-self: stretch;

border-radius: var(--rounded-lg, 8px);
background: var(--primary-700, #1A56DB);
color: var(--white, #FFF);


font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 150%; 


`;
export const Erormsg=styled.span`
color:red;
font-size: 8px;
`;