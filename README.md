# 서울시립대 시간표

![](docs/main.png)

**[timetable.ist.sh](https://timetable.ist.sh)**

서울시립대학교 홈페이지 시간표 모바일 UI가 이상해서 화가 잔뜩 난 나머지 만든 웹 기반 시간표 서비스

- 시간표, 현재 수업시간/강의실, 다음 수업시간/강의실, 다음 수업까지 남은 시간을 표시
- 10초에 한 번씩 남은 시간 업데이트

![](docs/bad.jpeg)

## Usage

- `docker build -t timetable .`
- `docker run --rm -it -p 3000:3000 timetable`
