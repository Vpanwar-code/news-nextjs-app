import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

function MeetupList() {
  const cartcntx=useContext(CartContext);


  return (
    <ul className={classes.list}>
      {cartcntx.items.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
