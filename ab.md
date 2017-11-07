#디지털 그래픽스

## idle 애니메이션에서 사용


콜백함수와 함수 사용
콜백함수는 함수호출이 없음 이벤트로 동작
Event Mode로 동작 


gluctCreateWindow -- reshape와display 이벤트 발생
glclearColor /RGB 투명도 배경색/ Color Buffer의 색을 초기화
glLoadIdentity();   - 가시범위 설정 ,디스플레이
glutDisplayFunc(Mydisplay)   -디스픍레이 이벤트발생하면 동작하는 콜백함수
glutIdleFunc(MyIdle)	- Idle 이벤트가 발생하면 동작하는 콜백함수
glutTimerFunc(40,MyTimer,1)   - 등록후 40ms지나면 한번 동작한다
타이머이벤트가발생하면실행되는 함수 등록

MatrixMode
LoadIdentity
ortho
정규화가상범위를 설정
----

##정규화 투상 


----
