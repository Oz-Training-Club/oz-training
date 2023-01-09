import styled from '@emotion/styled';

export const Container = styled.main`
  max-width: 700px;
  margin: 0 auto;
  padding: 20px 0;
  overflow: hidden;

  @media screen and (max-width: ${(props) => props.theme.mq.mobile}) {
    max-width: 500px;
    min-width: 350px;
  }
`;
