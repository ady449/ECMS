const {createPool} = require('mysql');
const pool = createPool({
  host     : 'localhost', // Your connection adress (localhost).
  user     : 'root',     // Your database's username.
  password : '',        // Your database's password.
  database : 'ecms',   // Your database's name.
  connectionLimit : 10
});

const r = pool.query('select * from cars', (err, result, fields)=>{
    if (err){
      return console.log("can't connect to server");
    }
    return result
})
console.log(r);
