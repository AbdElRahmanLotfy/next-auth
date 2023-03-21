import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://dbUser:A1harEBTdmgYzi3W@Cluster0.cxrkzj6.mongodb.net/auth?retryWrites=true&w=majority"
  );

  return client;
}
