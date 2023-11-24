import { MongoClient } from 'mongodb'
const url = "mongodb+srv://admin:qwer1234@admin.anwqs55.mongodb.net/forum"
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url).connect()
}
export { connectDB }