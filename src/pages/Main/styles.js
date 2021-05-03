import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100vh;
   background: #151515;
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 30px;
   background: #F8E7CF;
   border-radius: 20px;
   width: 50%;
`;

export const Line = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 10px;
   width: 100%;
`;

export const LineButton = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   margin-bottom: 10px;
   width: 100%;
`;

export const Label = styled.label`
   font-weight: bold;
   font-size: 1.2rem;
   font-family: Arial, Helvetica, sans-serif;
`;

export const Input = styled.input`
   width: 80%;
   height: 30px;   
   border-radius: 20px;
   padding: 10px;
   margin-left: 10px;
`;

export const InputDatalist = styled.input`
   width: 80%;
   height: 30px;   
   border-radius: 20px;
   padding: 10px;
   margin-left: 10px;
`;

export const Datalist = styled.datalist`
   height: 30px;
`;

export const Button = styled.button`
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 10px;
   border-radius: 20px;
   font-weight: bold;
   padding: 20px;
`;

export const List = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 40px;
   padding: 10px;   
   background: #9B2918;
   width: 50%;
   border-radius: 20px;
`;

export const ItemList = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   margin-top: 10px;     
   font-size: 1.2rem;
   font-family: Arial, Helvetica, sans-serif;
   font-weight: 500; 
`;