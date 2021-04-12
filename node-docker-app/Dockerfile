
# FROM baseImage
# 가져올 이미지
FROM node:10

# COPY source dest
# package.json이 컨테이너 내부에 존재하지 않으므로 COPY 명령어를 통해 복사해준다
# COPY package.json ./

# index.js도 존재하지 않으므로 폴더 전채를 복사할 수도 있다.
COPY ./ ./

# RUN command
# 실행할 명령어 (이미지에 존재하는)
RUN npm install

CMD ["node", "index.js"]