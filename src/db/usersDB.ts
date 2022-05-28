import { db_users_conection } from '../config/environment';

const sql = require("mssql");

class UsersDB {
    // config for your database
    constructor(){ }

    start(){
        return new sql.ConnectionPool({
            ...db_users_conection,
            connectionTimeout:300000,
            requestTimeout: 300000,
            pool: {
                idleTimeoutMillis: 300000,
                max: 100
            },
            options: {
                encrypt: true,
                enableArithAbort: true
            }
        })
    }

    stop(){
        sql.close()
    }
}

const DBUsers = new UsersDB()
export default DBUsers; 

 