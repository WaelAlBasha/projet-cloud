FROM alpine:3.15 as builder

WORKDIR /projet-cloud



#RUN apk add --update nodejs npm 
RUN apk add --update nodejs npm && apk add --update npm
#RUN apk update && apk add nodejs npm

# RUN npm install && npm run fix && npm run test\
#     npm run test:coverage

COPY . .

RUN npm install 
# && npm run fix && npm run test\
#     npm run test:coverage

RUN npm run build

# CMD [ "node", "-v"]
#CMD ["node","./dist/server.js"]

FROM alpine:3.15 as runner
RUN apk --no-cache add ca-certificates

COPY --from=builder . ./
CMD ["node", "/projet-cloud/dist/server.js"]
