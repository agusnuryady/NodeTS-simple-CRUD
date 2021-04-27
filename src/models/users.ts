import connection from '../config/mysql';

const users =  {
  getUsers: (callback:any) => {
    connection.query(`SELECT * FROM user`, (err, result) => {
      if (err) console.log(err)
      callback(err, result)
    })
  },
  getUsersByEmail: (callback:any) => {
    const valueData = [callback.email];
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM user where email = ?`, valueData, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  createUsers: (data:object) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  updateUsers: (data:any) => {
    const valueData = [data.name, data.phone, data.email];
    return new Promise((resolve, reject) => {
      connection.query('UPDATE user SET name = ?,phone = ? where email = ?', valueData, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  deleteUsers: (data:any) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE from user where email = ?', data.email, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
}

export default users;