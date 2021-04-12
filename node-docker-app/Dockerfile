
# 가져올 이미지
FROM node:10

# 컨테이너 내부 빌드경로
WORKDIR /usr/src/app

# package.json이 컨테이너 내부에 존재하지 않으므로 COPY 명령어를 통해 복사해준다
# COPY package.json ./

# index.js도 존재하지 않으므로 폴더 전채를 복사할 수도 있다.
# COPY ./ ./

# package.json 파일을 먼저 복사하면 캐시를 이용해서 소스코드 변경시 매번 패키지 설치하는 것을 방지
COPY package.json ./

# 실행할 명령어 (이미지에 존재하는)
RUN npm install

COPY ./ ./

CMD ["node", "index.js"]