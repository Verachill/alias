import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import PageTransition from '../components/PageTransition'

export default function Rules(): JSX.Element {
  const [isExit, setIsExit] = React.useState(false)

  return (
    <PageTransition leftToRight pageIsExit={isExit}>
      <MainContainer>
        <Container>
          <ContentContainer>
            <Title>Правила</Title>
            <p>
              Alias - словестно развивающая командная игра, в которой игроку
              необходимо за отведенное время объяснять случайные слова, а
              остальной команде - отгадать их.
            </p>
            <p>
              За каждое правильно отгаданное слово команда получает очко.
              Команда, которая наберет наибольшее количество очков - побеждает.
            </p>
            <p>
              При объяснении нельзя использовать однокореннные слова,
              использовать переводы на иностранные языкии явно показывать слово
              жестами.
            </p>
            <SubTitle>Начисление очков</SubTitle>
            <p>
              За одно одгаданное слово команда получает 1 очко. За пропущенное
              слово, команда не теряет очки.
            </p>
            <p>
              Последнее слово, в случае если ваша команда не успела отгадать
              слово за отведенное время, разыгрывается между всеми командами. В
              этом случае отгадавшая слово команда получает одно очко.
            </p>
            <SubTitle>Определение победителя</SubTitle>
            <p>
              Игра длится до тех пор, пока одна из комманд не наберет
              необходимое для победы количество очков.
            </p>
            <SubTitle>Спорные моменты</SubTitle>
            <p>
              Если в игре произошел спорный момент, например, было использовано
              неявное однокоренное слово - по окончании времени существует
              возможность отредактировать результаты раунда. Используя опцию
              "снять слово" команде будет зачисленно 0 очков.
            </p>
          </ContentContainer>
          <Button
            style={{ marginTop: 20 }}
            to="/"
            togglePageState={() => {
              setIsExit(!isExit)
            }}
          >
            Понятно
          </Button>
        </Container>
      </MainContainer>
    </PageTransition>
  )
}

const MainContainer = styled.div`
   {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${window.innerHeight - 20}px;
    padding: 10px;
    color: ${({ theme }) => theme.text}bf;
    font-size: 14px;
  }
`
const Container = styled.div`
  width: 100%;
  backdrop-filter: blur(10px);
  ${({ theme }) =>
    theme.isDark
      ? `background: rgb(0, 0, 0, .5);`
      : ` background: rgba(255, 255, 255, .5);`}
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
`
const ContentContainer = styled.div`
  max-height: ${window.innerHeight - 120}px;
  overflow: scroll;
`
const Title = styled.h1`
  font-family: Roboto;
  font-size: 32px;
  letter-spacing: 0.02em;
  margin: 0.6em 0;
`
const SubTitle = styled.h2`
  font-family: Roboto;
  font-size: 20px;
  margin: 1em 0 0;
`
