import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupsPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-getting-started-ef29e-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
