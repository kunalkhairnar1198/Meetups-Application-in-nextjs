import {MongoClient} from 'mongodb'

// /api/new-meetup
//  POST / api/new-meetup

// handler function accepts to two parameters object req and res
// the req obj contain incoming object
// thr res obj will be needed sending back to the response headers, req body etc
async function hanlder(req, res){

    if(req.method === 'POST'){
        const  data = req.body; //the body containes body of the incoming request

        // const {title, image, address, description } = data
        // console.log(title,image,address,description)
        
    const client = await  MongoClient.connect('mongodb+srv://kunalk:2gQiiBMeMnx2BJZG@cluster1.htiqncx.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster1')

    const db =client.db()

    const meetupsCollection = db.collection('meetups')

    const result = await meetupsCollection.insertOne(data)
        console.log(result) 
        client.close()

        res.status(201).json({message:'Meetup inserted! '})
    }
}
export default hanlder;