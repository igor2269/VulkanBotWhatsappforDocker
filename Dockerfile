FROM ubuntu
WORKDIR /app/teste
COPY install.sh /app/teste
COPY ["package.json", "package-lock.json*", "/app/teste/"]
RUN /app/teste/install.sh
COPY . .
CMD [ "npm", "start" ]
