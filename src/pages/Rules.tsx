import React from 'react'
import styled from 'styled-components'
import PageTransition from '../components/PageTransition'

export default function Rules(): JSX.Element {
  const [isExit, setIsExit] = React.useState(false)

  return (
    <PageTransition leftToRight pageIsExit={isExit}>
      <MainContainer>
        <Container></Container>
      </MainContainer>
    </PageTransition>
  )
}

const MainContainer = styled.div`
   {
    width: ${window.innerWidth}px;
    height: ${window.innerHeight}px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Container = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  backdrop-filter: blur(6px);
  background-color: ${({ theme }) => theme.main}80;
  border-radius: 20px;
`
