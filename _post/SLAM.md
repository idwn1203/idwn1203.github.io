#생산기술연구원 미팅_SLAM
#####2017-10-20
---
###Grid map / Landmark-based map

 - grid - 정밀하지만 데이터가 크다
 - landmark - 계산양은 적지만 한계가 존재

##SLAM
---
###Feature-Based SLAM - EKF-SLAM
주어진 정보가 뭐고 원하는게 뭐냐

```
2가지방식
FULL SLAM
 - 모든 경로와 지도를 측정

Online SLAM
 - 최근경로와지도만업데이트 - 이전 경로와 위치는 맞다고 가정하고
```



p14
X~t~에 영향을 주는것은 이전위치와 주어진 명령값(U~t~) - ex)전진

확률계산을 칼만필터가 해준다
-예측과 보정
 - 상태(위치)를 알고있을때 입력이 들어가면 바뀌는 나의 상태(위치)를 추측함
 - 랜드마크 수가 많아지면 데이터 짱커짐

#####Loop Closure
돌다가 내가 측정한곳을 지나간다면 정확성 증가
 - 처음 위치와 처음으로 측정된 랜드마크는 정확도가 메우 높음
 - 주행중 처음 위치를 만나면 불확실성이 작은 첫 위치 혹은 첫 랜드마크를 기준으로 하게되니깐 정확해짐
 - 장점 : 정확해짐
 - 단점 : 처리 양이 많아짐

첫 점과 끝점 사이의 불확실성이 크지만 각 점들 사이의 불확실성은 매우 작음
측정중 첫점을 만나면 첫점과 끝점을 바탕으로 LOOP이 반대로 돌아감
loop의 시작점에서 가장 먼 부분의 오차가 제일 커짐


칼만필터는 선형모델에서사용
논리니어는 Extended Kalman Filter사용
(사실 보장은 안됨ㅋㅋ)
SLAM은 논리니어문제임

EKF, FastSLAM은 OnlineSLAM

지금은 FULLSLAM이 주류
하이브리드하게도 가능

풀슬램에서도 필요없는 데이터들을 쳐내서 데이터가 많이 가벼워짐
계산양이 많이 줄었다

우리슬램프로그램은 FastSLAM
계산양이 n^3^...


##Landmark-Based-FastSLAM
Map 표현방식 - 둘다 가능
 - Feature Map
 - Grid Map

Partical Filters
 - 칼만필터 대용
 - 논리니어한 성질은 유지한 상태에서 통계적 기법으로 해결
 - 샘플을 많이 만들어서 샘플끼리의 통계적계산
 - 쉽게말하면 샘플들로 히스토그램을 만듬
 - 두가지 가설을 가지고 가다가 근사한 가설로 확정 가능
 - 칼만필터보다 데이터 양 또한 작음
 - 사실상 Online Slam의 마지막

100*100맵을 만든다면 1step의 계산양이 조단위로... 늘어남

Rao-Blackwellized 찾아보기


파티클 1일때의 로봇의 위치와 랜드마크1과 랜드마크 2와...
그리드맵 1개와 로봇의 위치 묶음 - 1개의 파티클
...n개의 파티클

각각의 랜드마크 추정은 EKF필터로 맵은 Particle필터로

랜드마크는 2*2벡터..

파티클안에 지도가있는거 파티클은 가설임

Grid Map
grid map 100 * 100  에서는 못씀

---
#Dataset

victoria park dataset 
##가우시안필터

평균 분산 -가우시안분포에대한 모든정보
#Q
Feature based 반대
모바일뤂에서 exploration 계속 새로운것
slam 자체가 ㅓㄹ어짐 다른어플리케이션에서
feature map을 썼다가 글로벌 맵으로 
particle filter 에서 하는일 sir 


factoriao poistor
particle 1개 샘플or가정 
topological 연걸점을 선으로  매핑 하는 정보가 많고 활용도 높고 
metric model  m단위로	적은 정보로 매핑 활용도가 낮음


지도 정보 
landmark 는 칼만필터로-- 무조건?
상대적위치
