import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://muhammadsyahputra:Og13ArcL29TMpgzK@cluster0.1nwrvd7.mongodb.net/"
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise

  client = new MongoClient(uri, options)
  clientPromise = client.connect()
export default clientPromise