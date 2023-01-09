import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  p {
    text-align: center;
    color: ${(props) => props.theme.colors.darkblue};
    font-size: 35px;
    font-family: 'Stylish', sans-serif;
    line-height: 1.2;
  }

  span {
    display: inline-block;
  }
`;
