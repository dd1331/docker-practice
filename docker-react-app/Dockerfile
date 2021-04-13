FROM node:alpine as builder

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx

# 빌드 스테이지에서 만들어진 파일을 지정된 nginx용 폴더에 복사
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# docker run build .
# nginx 기본포트는 80
# docker run -p 8080:80 charlie/docker-react
