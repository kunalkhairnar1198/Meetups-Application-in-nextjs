//our-domain.com/new-meetup
import {useRouter} from 'next/router';
import React from 'react'
import NewMeetupFormPage from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
  const routerNav = useRouter()
    async function addMeetupHandler(enteredMeetupData){
       const res = await fetch('/api/new-meetup',{
        method:'POST',
        body:JSON.stringify(enteredMeetupData),
        headers:{
          'Content-Type': 'application/json',
        }
       });
       const data = await res.json()
      console.log(data)
      routerNav.replace('/')
      
    }
  return (
    <NewMeetupFormPage onAddMeetup={addMeetupHandler}/>
  )
}

export default NewMeetupPage
