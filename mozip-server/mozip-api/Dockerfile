FROM openjdk:8-jre-alpine

MAINTAINER tramyu@naver.com

ARG WORKSPACE=/home/mozipmozip
RUN mkdir -p $WORKSPACE
WORKDIR $WORKSPACE

ADD setenv.sh setenv.sh
COPY build/libs/mozip-api.jar app.jar

CMD ["/bin/sh", "setenv.sh"]
