// import React, { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import {MongoClient} from 'mongodb'

// const DUMMY_MEETUPS =[
//     {
//       id:'m1',
//       title:'A first meetups',
//       image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Pq5py6CQ9Dt4IDHzEavjaF5pf9GXfItOCg&s`,
//       address:'dfsdfdsfdsfdsf',
//       description:'This is first meetup'
//     },
//     {
//       id:'m2',
//       title:'A first meetups',
//       image:`https://bstdating.com/wp-content/uploads/2020/12/Singles-Meetup1-min.jpeg`,
//       address:'dfsdfdsfdsfdsf',
//       description:'This is first meetup'
//     }
// ]

const Homepage = (props) => {
 
  return (
      <MeetupList meetups={props.meetups}/>
  )
}
// export async function getServerSideProps(context){
//   const  req = context.req
//   const res = context.res
//   // fetch api form an api
  
//   return {
//     props :{ 
//     meetups :  DUMMY_MEETUPS
//     },
//   }
// }
export async function getStaticProps(){

  const client = await  MongoClient.connect('mongodb+srv://kunalk:ri2dR55Dr7Pdg2eq@cluster0.krpkk6v.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')
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
