# unit-one-task

> 

## About

This project uses Feathers, Knexjs and Mobx.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) , [npm](https://www.npmjs.com/) and [mysql](https://www.mysql.com/) installed.
2. Install your dependencies

    ```
    cd unit-one-task
    npm install
    cd client && npm i
    ```
3.  Create MySQl DB and user, then add them into `/config/default.json`
    ```json
    "mysql": {
        "client": "mysql2",
        "connection": "mysql://<USER>:<PASSWORD>@localhost:3306/<DATABASE>"
    }
    ```

4. Intialize the fake data:
   ```
   npm run build:db
   ```


5. Start back-end and front-end concurrently

    ```
    npm run dev
    ```
    
6. Enjoy the app on:

    [http://localhost:3000/](http://localhost:3000/)
    