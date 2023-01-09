import { PrevNextButton } from 'components';
import { Container, CustomLinearProgress, CustomToggleButtonGroup } from 'styles/activeCheck.style';
import { activeQuestion, answerList } from 'consts';
import { useEffect, useState } from 'react';
import { Box, ToggleButton } from '@mui/material';

interface scoreType {
  page: number;
  score: number;
}

const ActiveCheck = () => {
  const [actPage, setActPage] = useState(0);
  const [progress, setProgress] = useState(100 / activeQuestion.length);
  const [answer, setAnswer] = useState(0);
  const [actScore, setActScore] = useState<scoreType[]>([]);

  console.log(1);

  const handleChange = (event: React.MouseEvent<HTMLElement>, answerCount: number) => {
    setAnswer(answerCount);
  };

  const onClickPrev = () => {
    const filter = actScore.filter((x) => x.page !== actPage - 1);
    const prevAnswer = actScore.filter((x) => x.page === actPage - 1)[0].score;
    setActPage((prev) => prev - 1);
    setActScore(filter);
    setAnswer(prevAnswer);
  };

  const onClickNext = () => {
    if (answer === 0) {
      return alert('답을 선택해주세요.');
    }
    setActScore([...actScore, { page: actPage, score: answer }]);
    setActPage((prev) => prev + 1);
    setAnswer(0);
  };

  useEffect(() => {
    setProgress((100 / activeQuestion.length) * (actPage + 1));
  }, [actPage]);

  return (
    <Container>
      <div className="activecheck__progress">
        <div className="activecheck__progress-text">
          질문의 답을 선택해주세요 🚀
          <ul>
            <li>{actPage + 1}</li>
            <li>/</li>
            <li>{activeQuestion.length}</li>
          </ul>
        </div>
        <Box sx={{ width: '100%' }}>
          <CustomLinearProgress variant="determinate" value={progress} />
        </Box>
      </div>

      <section>
        <h2>Q. {activeQuestion[actPage].ques}</h2>
        <CustomToggleButtonGroup
          orientation="vertical"
          defaultValue={answer}
          value={answer}
          exclusive
          onChange={handleChange}
        >
          {activeQuestion[actPage].answer.map((list: answerList) => (
            <ToggleButton className="answer-button" value={list.count} key={list.count}>
              {list.text}
            </ToggleButton>
          ))}
        </CustomToggleButtonGroup>
      </section>
      <PrevNextButton
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
        nextButtonType={'button'}
        prevBtnVisible={actPage !== 0 ? true : false}
      />
    </Container>
  );
};

export default ActiveCheck;
