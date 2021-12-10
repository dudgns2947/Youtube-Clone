NodeJS의 시작은 package.json을 만드는 것부터 시작이다
package.json은 repository를 생성 후, "npm init" command를 입력해주면 생성된다. (파일의 정보들이 들어가있음)

package.json의 scripts : 실행하고 싶은 것을 뜻함. 커맨드와 한 것.
(make file과 비슷한 느낌이다)
ex) "start" : "node index.js"
이후 cmd(터미널)창에 "npm run example_command" 라고 해주면 된다

dependencies만 알고 추가해주면 팀프로젝트 할때, npm install 커맨드만 입력해주면 그 dependencies에 있는 용량이 큰 모든 node_modules파일들을 알아서 설치해준다.

devdependencies는 개발자에게 필요한 dependencies를 나타낸다. ex) depdencies는자동차의 가솔린
devdependencies 자동차의 보조옵션

Nodejs 컴파일러 : Babel
Babel 설치법 : npm install --save-dev @babel/core
(devdependencies에 다운로드한다는 뜻)
이후에 babel.config.json 파일을 하나 생성한다.
이곳에
{
"presets": ["@babel/preset-env"]
}
를 붙여넣어주면 됨
이후 npm install @babel/preset-env --save-dev
를 입력하면 끝

> > node말고 nodemon를 사용하자
> > nodemon을 편리하게 사용하고싶으면
> > pakage.json파일에서 script에 "dev" : "babel-node index.js" 라고 적어주면 알아서 컴파일해준다.
> > 또한 nodemon은 파일이 변경되면 알아서 재시작해준다.
> > 설치하려면 "npm i nodemon --save-dev" 커맨드를 입력

그럼 이후에 script를 "nodemon -L --exec babel-node index.js"로 수정해준다

과정이 써있는 URL : https://babeljs.io/setup#installation

<express>
express를 다운받고싶으면 cmd창에 "npm i express"를 입력해주면 된다.

express를 이용한 server:
'''
import express from "express";
const app = express();
const handleListening = () => console.log("server listening on port 4000");
app.listen(4000, handleListening);
'''
위처럼 4줄의 코드로 가능하다

GET, request 명령어들은 서버와 서버를handle하는 코드 사이에 있어야한다(sandwitch)
app.get("/", functionName) #root 서버에 functionName 이라는 함수를 GET함
const functionName = (req, res) => { ... }; #함수는 express로부터 requset와 reponse 오브젝트를 가진다.

\*브라우저가 requsest를 보내면 우리는 response를 return 해야한다.
-> return res.end() # requsest를 종료시키는 방법
-> return res.send( ... ) # 브라우저에 message를 response함.