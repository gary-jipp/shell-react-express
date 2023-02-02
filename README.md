# Shell-React-Express

React-Express Shell app ready for node deployment to Heroku or other similar platforms.  React and Express code are separate mini-projects and build/deployment is handled by the top level package.json

### Built for node 16

### Starting as a Single App (Production)
```
npm install
npm build
npm start
```

### Starting as Individual Apps (Development)
```
cd server-express
npm install
npm run local

cd client-react
npm install
npm start
```