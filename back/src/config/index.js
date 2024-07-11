const dotenv = require('dotenv')
dotenv.config()


const {MongoClient} = require ('mongodb')
const client = new MongoClient(process.env.MONGO_URL)

async function connectToMongoDB(){
    try {
        await client.connect()
        console.log("conectado a MongoDB");
        return client
    } catch (error) {
      console.log('error al conectar con MongoBD');
      return null
    }
}

async function disconnectToMongoDB(){
    try {
        await client.close()
        console.log("desconectado de MongoDB a MongoDB");
        return client
    } catch (error) {
      console.log('error al desconectar con MongoBD', error);
      return null
    }
}

