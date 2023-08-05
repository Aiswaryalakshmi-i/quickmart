
import mysql from 'mysql';

// let connection;
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'buy-and-sell',
})

export const db = {
    connect: () => 
        // connection = mysql.createConnection({
           
            // socketPath: process.env.DB_SOCKET,
        // });
        connection.connect()
    ,
    query: (queryString, escapedValues) =>
        new Promise((resolve, reject) => {
            connection.query(queryString, escapedValues, (error, results, fields) => {
                if (error) reject(error);
                resolve({ results, fields });
            })
        }),
    end: () => connection.end(),
}