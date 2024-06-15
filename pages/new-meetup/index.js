//our-domain.com/new-meetup
import React from 'react'
import NewMeetupFormPage from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
    function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData)
    }
  return (
    <NewMeetupFormPage onAddMeetup={addMeetupHandler}/>
  )
}

export default NewMeetupPage
