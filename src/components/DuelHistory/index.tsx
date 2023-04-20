import { Container, HistoryText, Title } from './style';

const DuelHistory = ({ history }: { history: DuelHistory }) => {
  return (
    <>
      {history.length > 0 && (
        <Container>
          <Title>History</Title>
          <ul>
            {history.map((item: Battle[], index: number) => (
              <li key={index}>
                <HistoryText isWinner={item[0].isWinner}>
                  {item[0].name}
                  (⚡️{item[0].duelPoints}) {item[0].isWinner}
                </HistoryText>{' '}
                vs{' '}
                <HistoryText isWinner={item[1].isWinner}>
                  {item[1].name}
                  (⚡️{item[1].duelPoints}){item[1].isWinner}
                </HistoryText>
              </li>
            ))}
          </ul>
        </Container>
      )}
    </>
  );
};

export default DuelHistory;
