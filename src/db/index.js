import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('address.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS address (id INTEGER PRIMARY KEY NOT NULL, address TEXT NOT NULL);",
          [],
          () => resolve(),
          (_, err) => reject(err)
        );
      });
    });
    return promise;
  };

  export const insertOrder = (address) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO address (address) VALUES (?);",
          [address],
          (_, result) => {
            resolve(result);
          },
          (_, err) => reject(err)
        );
      });
    });
    
    return promise;
  };

  export const getOrder = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM address ORDER BY id DESC LIMIT 1',
          [],
          (_, result) => {
            resolve(result);
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
    return promise;
  };