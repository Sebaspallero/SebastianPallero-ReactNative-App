import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('orders.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY NOT NULL, items TEXT NOT NULL, total TEXT NOT NULL, address TEXT NOT NULL);",
          [],
          () => resolve(),
          (_, err) => reject(err)
        );
      });
    });
    return promise;
  };

  export const insertOrder = (items, total, address) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO orders (products, total, address) VALUES (?, ?, ?);",
          [JSON.stringify(items), total, address],
          (_, result) => {
            resolve(result);
          },
          (_, err) => reject(err)
        );
      });
    });
    
    return promise;
  };