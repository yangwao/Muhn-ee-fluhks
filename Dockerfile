FROM node:6

WORKDIR /src

# ADD txs.js /src
ADD . /src

RUN cd /src && ls -la && npm i

RUN ls -la
RUN pwd
# CMD ["npm", "run", "txs"]
CMD ["node", "./txs.js"]
# CMD ["ls -la"]
