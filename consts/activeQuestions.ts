export interface actType {
  ques: string;
  answer: answerList[];
}

export interface answerList {
  count: number;
  text: string;
}

export const activeQuestion: actType[] = [
  {
    ques: '이전에 운동을 해본 적이 있나요?',
    answer: [
      { count: 1, text: '아니요, 없습니다' },
      { count: 2, text: '6개월 미만' },
      { count: 3, text: '6개월 이상 ~ 1년 미만' },
      { count: 4, text: '1년 이상' },
    ],
  },
  {
    ques: '일주일 평균 운동일을 알려주세요.',
    answer: [
      { count: 1, text: '운동을 전혀 안합니다' },
      { count: 2, text: '1일 ~ 3일' },
      { count: 3, text: '4일 ~ 5일' },
      { count: 4, text: '6일 ~ 7일' },
    ],
  },
  {
    ques: '하루를 어떻게 보내나요?',
    answer: [
      { count: 1, text: '대부분 앉아 있습니다' },
      { count: 2, text: '가끔 일어나 있습니다' },
      { count: 3, text: '대부분 일어나 있습니다' },
      { count: 4, text: '걷거나 활동적 입니다' },
    ],
  },
  {
    ques: '하루 평균 걷는 시간을 알려주세요',
    answer: [
      { count: 1, text: '1시간 미만' },
      { count: 2, text: '1시간 이상 ~ 2시간 미만' },
      { count: 3, text: '2시간 이상 ~ 3시간 미만' },
      { count: 4, text: '3시간 이상' },
    ],
  },
  {
    ques: '보통 컨디션이 어떤가요?',
    answer: [
      { count: 1, text: '하루종일 무기력 하고 피곤 합니다' },
      { count: 2, text: '피곤 할 때도 있고 아닐 때도 있습니다' },
      { count: 3, text: '늘 기운이 넘칩니다' },
    ],
  },
];
