//our-domain.com/new-meetup
import {useRouter} from 'next/router';
import React, { Fragment } from 'react'
import NewMeetupFormPage from '../../components/meetups/NewMeetupForm'
import Head from 'next/head';

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
    <Fragment>
        <Head>
          <title>Add new Meetup</title>
          <meta 
          name='description'
          content='Add your own meetup and create amazing networking opportunities'
          />
        </Head>
    <NewMeetupFormPage onAddMeetup={addMeetupHandler}/>
    </Fragment>
  )
}

export default NewMeetupPage
