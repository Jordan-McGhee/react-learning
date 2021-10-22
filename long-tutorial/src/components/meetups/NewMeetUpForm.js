import Card from "../ui/Card"
import classes from "./NewMeetUpForm.module.css"

function NewMeetUpForm() {
    return (
        <Card>
            <form className = { classes.form }>
                <div className = { classes.control }>
                    <label htmlFor="title">MeetUp Title</label>
                    <input type="text" required id="title"/>
                </div>
                <div className = { classes.control }>
                    <label htmlFor="image">MeetUp Image</label>
                    <input type="url" required id="image"/>
                </div>
                <div className = { classes.control }>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address"/>
                </div>
                <div className = { classes.control }>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows="5"></textarea>
                </div>
                <div className = { classes.actions }>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetUpForm