import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

async function connectToDatabase() {
  const client = await MongoClient.connect(uri);
  return client;
}

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, name, message } = req.body;

  if (!email || !email.includes("@") || !name?.trim() || !message?.trim()) {
    return res.status(422).json({ message: "Invalid input." });
  }

  const newMessage = { email, name, message };

  let client;

  try {
    client = await connectToDatabase();
    const db = client.db(dbName);
    const result = await db.collection("messages").insertOne(newMessage);
    newMessage.id = result.insertedId;

    return res.status(201).json({
      message: "Successfully stored message!",
      data: newMessage,
    });
  } catch (error) {
    console.error("Database operation failed:", error);
    return res.status(500).json({ message: "Internal server error." });
  } finally {
    if (client) {
      await client.close();
    }
  }
}

export default handler;
