import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { getContacts, addContact, putContact } from "./redux/actions/action";
import ContactCard from "./components/ContactCard";
import AddContact from "./components/AddContact";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setID] = useState(0);
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts);
  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const addContactt = () => {
    dispatch(addContact({ name, email, phone }));
  };

  const editContact=()=>{
dispatch(putContact(id,{id,name,email,phone}))
setEdit(false)
setName("")
setEmail("")
setPhone("")
setID(0)

  }

  const getPerson=(contact)=>{
setName(contact.name)
setEmail(contact.email)
setPhone(contact.phone)
setID(contact._id)
setEdit(true)


  }

  return (
    <div className="App">
      <Router>
        <Link to="/contact-list">
          <button>Contact list</button>
        </Link>
        <Link to="/add-contact">
          <button>Add contact</button>
        </Link>
        <Routes>
          <Route
            path="/contact-list"
            element={
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {contacts.map((contact) => (
                  <ContactCard key={contact._id} contact={contact} getPerson={getPerson} />
                ))}
              </div>
            }
          />

          <Route
            path="/add-contact"
            element={
              <AddContact
                name={name}
                email={email}
                phone={phone}
                setEmail={setEmail}
                setName={setName}
                setPhone={setPhone}
                
                //addContactt={addContactt}
                
              />
            }
          />
          <Route
            path="/edit-contact"
            element={<AddContact
              name={name}
              email={email}
              phone={phone}
              setEmail={setEmail}
              setName={setName}
              setPhone={setPhone}
              addContactt={addContactt}
              edit={edit}
              action={edit? editContact:addContactt}
              />}
          />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
