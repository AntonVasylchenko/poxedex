import styled from "styled-components";

export const Page404Wrapper = styled.div`
   display: flex;
   align-self: center;
   justify-content: center;
   flex-direction: column;
   row-gap: 25px;
   width: 100vw;
   height: 100vh;
   padding: 0 15px;

   a {
      text-align: center;
      font-size: 25px;
      color: #000;
      text-decoration: underline;
   }
`
Page404Wrapper.displayName = "Page404Wrapper"

export const Page404Title = styled.h1`
   margin: 0;
   text-align: center;
   width: 100%;
   font-size: 25px;
   font-weight: 400;
`
Page404Title.displayName = "Page404Title"

export const Page404Image = styled.div`
    width: 100%;
    max-width: 400px;
    padding-bottom: 14%;
    position: relative;
    margin: 0 auto;

   img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
   }

`
Page404Title.displayName = "Page404Image"