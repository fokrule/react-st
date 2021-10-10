import { useState, useEffect } from "react";
import  MeetupIList  from "../components/Meetups/MeetupList";
export default function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
    'https://react-course-29dea-default-rtdb.firebaseio.com/meetups.json'
  ).then((response) => {
    return response.json();
  }).then((data) => {
    const meetups = [];
    for ( const key in data ) {
      const meetup = {
        id: key,
        ...data[key]
      };
      console.log(meetup)
      meetups.push(meetup);
    }
    setIsLoading(false);
    setLoadedMeetups(meetups);
  });
  },[]);
  
  
  if ( isLoading ) {
    return (
      <section>
        <p>
          Loading..
        </p>
      </section>
    );
  }
    return (
        <section>
            <h1>All meetup</h1>
            <MeetupIList meetups={loadedMeetups}/>
        </section>
    )
}