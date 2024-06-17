import React, { Fragment } from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetailsPage = () => {
  return (
    <MeetupDetail  
    title='A first meetups'
    image='https://bstdating.com/wp-content/uploads/2020/12/Singles-Meetup1-min.jpeg'
    address='dfsdfdsfdsfdsf'
    description='This is first meetup'
    />
  )
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
      {
        params: {
          meetupId: 'm3',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params?.meetupId;
  if (!meetupId) {
    return {
      notFound: true, 
    };
  }

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        title:'A first meetups',
        image:'https://bstdating.com/wp-content/uploads/2020/12/Singles-Meetup1-min.jpeg',
        address:'dfsdfdsfdsfdsf',
        description:'This is first meetup'
      },
    },
  };
}
export default MeetupDetailsPage
