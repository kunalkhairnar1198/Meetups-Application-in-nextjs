// import React, { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS =[
    {
      id:'m1',
      title:'A first meetups',
      image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Pq5py6CQ9Dt4IDHzEavjaF5pf9GXfItOCg&s`,
      address:'dfsdfdsfdsfdsf',
      description:'This is first meetup'
    },
    {
      id:'m2',
      title:'A first meetups',
      image:`https://bstdating.com/wp-content/uploads/2020/12/Singles-Meetup1-min.jpeg`,
      address:'dfsdfdsfdsfdsf',
      description:'This is first meetup'
    }
]
const Homepage = (props) => {
  // const [loadedMeetups, setLoadedMeetups] = useState([])
  
  // useEffect(()=>{
  //   //sent the http request and fetch data  
  //   // setLoadedMeeetups
  //   setLoadedMeetups(DUMMY_MEETUPS)
  // },[])
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
  return {
    props:{
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }
}

export default Homepage 
