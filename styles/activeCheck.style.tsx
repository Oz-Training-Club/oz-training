import styled from '@emotion/styled';
import { LinearProgress, ToggleButtonGroup } from '@mui/material';

export const Container = styled.section`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  .activecheck__progress {
    width: 100%;
    margin: 4vh auto 6vh;
    .activecheck__progress-text {
      display: flex;
      justify-content: space-between;
      ul {
        display: flex;
      }
    }
  }
  section {
    margin: 0 0 auto;
    h2 {
      font-weight: 700;
      font-size: 20px;
      line-height: 29px;
      letter-spacing: -0.04em;
      color: ${(props) => props.theme.colors.darkblue};
      margin-bottom: 30px;
    }
  }
`;

export const CustomLinearProgress = styled(LinearProgress)`
  height: 6px;
  background-color: #eee;
  margin-top: 14px;
  .MuiLinearProgress-bar {
    background-color: ${(props) => props.theme.colors.pink};
  }
`;

export const CustomToggleButtonGroup = styled(ToggleButtonGroup)`
  width: 100%;
  .MuiToggleButtonGroup-grouped {
    border: 1px solid ${(props) => props.theme.colors.darkblue};
    margin-bottom: 20px;
    border-radius: 5px !important;
    justify-content: start;
    letter-spacing: -0.03em;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 600;
    color: ${(props) => props.theme.colors.lightblue};
    &.Mui-selected {
      background-color: ${(props) => props.theme.colors.darkblue};
      color: #fff;
      &:hover {
        background-color: ${(props) => props.theme.colors.darkblue};
        color: #fff;
      }
    }
    &:not(:first-of-type) {
      border-color: ${(props) => props.theme.colors.darkblue};
    }
  }
`;
