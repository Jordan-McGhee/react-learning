import { useHistory } from "react-router";
import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetUpsPage() {

    const history = useHistory()

    function addMeetupHandler(meetupData) {
        fetch(
            "https://react-tutorial-4d1fb-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(() => {
            history.replace("/")
        });
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetUpsPage;