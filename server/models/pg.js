const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgres://sjxrstgh:iR0HV9yqnUfh_XQKVaihWLvit9TfHILD@heffalump.db.elephantsql.com/sjxrstgh",
});

pool.on("connection", () => {
  console.log("Connected to DB");
});

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
