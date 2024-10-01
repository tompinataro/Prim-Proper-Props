import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import GuestList from '../GuestList/GuestList.jsx';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies.jsx';
import PartyLeader from '../PartyLeader/PartyLeader.jsx';

function App() {
  let [guestList, setGuestList] = useState([]);
  let [newGuestName, setNewGuestName] = useState('');
  let [newGuestMeal, setNewGuestMeal] = useState('false');

  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/api/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }


  const addGuest = () => {
    axios.post('/api/guests', { name: newGuestName, kidsMeal: newGuestMeal })
      .then(response => {
        // clear inputs
        setNewGuestName('');
        setNewGuestMeal(false);

        getGuests();
      })
      .catch(err => {
        alert('Error Adding Guest');
        console.log(err);
      })
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (newGuestName) {
      addGuest();
    }
    else {
      alert('The new guest needs a name!');
    }
  }

  console.log(newGuestMeal)
  return (
    <div className="App">
      <Header/>

      <PartyLeader/>
     
      <GuestList guestList={guestList}/> {/*this passes the guestlist down */}
    
      <DinnerSupplies guestList={guestList}/>

      <Footer/>
    </div>
  );
}

export default App;
