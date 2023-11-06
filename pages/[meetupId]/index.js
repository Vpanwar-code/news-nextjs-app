import { useRouter } from 'next/router';
import MeetupDetail from "../../components/meetups/MeetupDetail";
 import { useContext } from 'react';
//import Dummy from '../../components/store/Data';
import CartContext from '../../store/CartContext';

function MeetupDetails() {
  const cartcntx=useContext(CartContext);
    const router = useRouter();
  const { meetupId } = router.query;

  const selectedMeetup = cartcntx.items.find(meetup => meetup.id === meetupId);

  // Check if a meetup with the provided ID was found
  if (!selectedMeetup) {
    return <p>Meetup not found.</p>;
  }

  return (
    <MeetupDetail
      image={selectedMeetup.image}
      title={selectedMeetup.title}
      address={selectedMeetup.address}
      description={selectedMeetup.description}
    />
    // <li className={classes.item}>
    //   <Card>
    //     <div className={classes.image}>
    //       <img src={selectedMeetup.image} alt={selectedMeetup.title} />
    //     </div>
    //     <div className={classes.content}>
    //       <h3>{selectedMeetup.title}</h3>
    //       <address>{selectedMeetup.address}</address>
    //     </div>
    //   </Card>
    // </li>
  ); 
  
  // return (
    //     <Fragment>
    //         <img
    //          src='https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg'
    //          alt='A first Meetup'
    //          />
    //         <h1>A First Meetup</h1>
    //         <h1>Meetup Detail Page</h1>
    //         <p>Meetup ID: {meetupId}</p>
    //         <address>Some Street 5, Some City</address>
    //         <p>The meetup description</p> 

            
    //     </Fragment>
    // );
}

export default MeetupDetails;