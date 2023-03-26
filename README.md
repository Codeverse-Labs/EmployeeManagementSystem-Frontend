# Hasthiya Employee Management System
## Branching convension

`main` branch will be used to deploy production releases.

 use Individual branches to do your own coding.
## Technology (Tech Stack)

1. NodeJS express sever.
1. MongoDB.
1. Vue.
1. Tailwind CSS.
1. VUEX.

## Folder/file structure

Follow the current naming convention and folder structure.

~~~
.
├── client
│   └── src
│       ├── assets
│       ├── components
│       ├── constants
│       ├── helper
│       ├── router
│       ├── services
│       ├── store
│       │   └── modules
│       ├── views
│       ├── app.vue
│       └── main.js
└── server
    ├── config
    ├── controllers
    ├── middleware
    ├── models
    ├── routes
    ├── utils
    ├── .env
    └── index.js
~~~

## Project setup

### setup backend
```
cd Server
npm install
```
### setup front end
seperate terminal
```
cd client
npm install
```

### Compiles and hot-reloads for development
```
cd Server
npm start
```

seperate terminal
```
cd client
npm run serve
```

### Compiles and minifies for production
```
cd client
npm run build
```

### Lints and fixes files
```
cd client
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
