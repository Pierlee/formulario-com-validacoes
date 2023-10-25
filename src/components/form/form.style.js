import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  background: grey;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  .box{
    width: 40%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightgrey;
  }
  form{
    display: flex;
    flex-direction: column;
  }
  .erro{
    color: red;
  }
  .buttons{
    display: flex;
  }
  @media (max-width: 770px){
    flex-direction: column;
    .box{
      margin-top: 10px;
      width: 80%;
    }
  }
`
