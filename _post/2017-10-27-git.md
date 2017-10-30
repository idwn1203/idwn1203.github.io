#Git

##Problem
---
Repository 1개에 t1,t2,t3 3개의 폴더에 각각 remote add를 한다면?


untracked files add안한것
---
git add 반대는 
- git reset
- git reset "파일명"


#Git Bash 
## 처음시작
git config --global user.name "abc"
git config --global user.email "abc@asdf.com"

- 설정확인 - git config --list
- 변경가능 - 

#####local에서설정
git init				-> 현재 폴더를 git 로컬 저장소 등록
git add "파일명"	  	  -> git에 파일올리기
git add . -> 현재 폴더의 모든 파일을 올린다.
git commit -m "설명글"   -> 올린 파일에 대한 설명글 추가

- git status ->local 저장소 상태 확인
- "-""-".gitignore 파일내부에 무시할 파일을 기록하여 사용하지 않을 파일 설정할수 있음 ("" 없는 -2개)
- 파일삭제,수정 windows폴더에서 하지 않고 
	- 삭제 : git rm "file name"
	- 수정 : git mvmy_origin_file.txt my_target_file.txt
	
#####git hub 서버연결 하고 올리기
git remote 결과가 없으면 이전에 연결된 적이 없다.
*git remote add "aaa.com"* 		or 		*"git remote add [단축이름] [url]"*


git push [리모트 저장소 이름][브랜치 이름]
ex) git push -u origin master




##git 설정확인
