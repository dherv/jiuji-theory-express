let config = {};

console.log('PROCESS', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  config = {
    connectionLimit: 4,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'jiuji-theory',
    port: 33061,
  };
} else {
  config = {
    connectionLimit: 4,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'jiuji-theory',
    port: 33062,
  };
}

export default config;
