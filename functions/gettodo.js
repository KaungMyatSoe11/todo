const connectToDataBase = require("./utils/connectToDataBase");

exports.handler = async () => {
  const db = await connectToDataBase();
  const data = await db.collection("tasks").find({}).toArray();
  console.log(data);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};
