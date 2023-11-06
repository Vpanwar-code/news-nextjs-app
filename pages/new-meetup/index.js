import React , {useContext} from 'react'
//import { useState } from 'react';
import CartContext from '../../store/CartContext';
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
//import Dummy from '../../components/store/Data';
// const NewMeetupPage = () => {
//     function AddMeetupHandler(enteredMeetupData){
//         console.log(enteredMeetupData)

//     }
//   return (
//     <NewMeetupForm onAddMeetup={AddMeetupHandler}></NewMeetupForm>
//   )
// }
const NewMeetupPage = () => {
 // const [meetups, setMeetups] = useState(Dummy);

   const cartCtx=useContext(CartContext);

   const addToCartHandler = (enteredMeetupData) =>{
          cartCtx.addItem(enteredMeetupData);
  }

  return (
    <NewMeetupForm onAddMeetup={addToCartHandler}></NewMeetupForm>
  );
}

export default NewMeetupPage;