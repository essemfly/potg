import styled, { keyframes } from 'styled-components';

const AfterOpeningPage: React.FC = (): JSX.Element => {
  const moveGradient = keyframes`
50% {
    background-position: 100% 50%;
}
`;

  const GradientDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 300px;
    font-family: Lato, sans-serif;
    font-size: 2.5rem;
    text-transform: uppercase;
    color: white;
    background: #222;
    border-radius: 3px;
    &::after {
      position: absolute;
      content: '';
      top: -3px;
      left: -3px;
      z-index: -1;
      width: calc(100% + 6px);
      height: calc(100% + 6px);
      background: linear-gradient(
        60deg,
        hsl(224, 85%, 66%),
        hsl(269, 85%, 66%),
        hsl(314, 85%, 66%),
        hsl(359, 85%, 66%),
        hsl(44, 85%, 66%),
        hsl(89, 85%, 66%),
        hsl(134, 85%, 66%),
        hsl(179, 85%, 66%)
      );
      background-size: 300% 300%;
      background-position: 0 50%;
      border-radius: 6px;
      animation: ${moveGradient} 4s alternate infinite;
    }
  `;
  return (
    <GradientDiv>
      css
      <br />
      is
      <br />
      awesome
    </GradientDiv>
  );
};

export default AfterOpeningPage;
