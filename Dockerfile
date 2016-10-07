FROM node:6

# ADD txs.js /src
ADD . /src

RUN cd /src && npm i

# CMD ["npm", "run", "txs"]
CMD ["node", "txs.js"]
