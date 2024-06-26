import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList'
import {MongoClient} from 'mongodb'
import { Fragment } from 'react';

const Homepage = (props) => {
 
  return (
      <Fragment>
        <Head>
          <title>React Meetups</title>
          <meta 
          name='description'
          content='Browse a huge list of highly active react meetups!'
          />
        </Head>
        <MeetupList meetups={props.meetups}/>
      </Fragment>
      )
}

export async function getStaticProps(){

  const client = await  MongoClient.connect('mongodb+srv://kunalk200:aRKDhhPdiQFpJdkU@cluster0.4vczsp6.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
  console.log(client)
  const db =client.db()

  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find().toArray()
  client.close()
  return {
    props:{
      meetups: meetups.map(meetup => ({
        title:meetup.title,
        image:meetup.image,
        address:meetup.address,
        id:meetup._id.toString()
      }))
    },
    revalidate: 1
  }
}

export default Homepage 
