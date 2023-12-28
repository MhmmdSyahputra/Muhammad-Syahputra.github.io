import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://muhammadsyahputra:Og13ArcL29TMpgzK@cluster0.1nwrvd7.mongodb.net/"
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

  const client = new MongoClient(uri, options)
  const clientPromise = client.connect()
export default clientPromise