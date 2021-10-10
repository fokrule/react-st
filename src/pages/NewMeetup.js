import { useHistory } from "react-router";
import NewMeetupForm from "../components/Meetups/NewMeetupForm"

export default function NewMeetupPage() {
    const history = useHistory();
    function addMeetupHandker(meetupData) {
        fetch(
            'https://react-course-29dea-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            ).then(() => {
                history.replace('/');
            });
    }
    return <section>
        <h1>New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandker}/>
    </section>
}
 