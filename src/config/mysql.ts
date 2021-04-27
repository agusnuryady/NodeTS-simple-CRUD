import mysql from 'mysql';
import CONFIG from '../../global_config';

const connection = mysql.createConnection(CONFIG.mysqlconfig)

connection.connect((err) => {
  if (err) console.log(`Error: ${err}`)
})

export default connection;