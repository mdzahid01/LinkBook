import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import SearchBar from '../UI/SearchBar'
import Button from '../UI/Button'
import ContactBody from './ContactBody'
import ContactModal from './ContactModal'
// import seeder from '../../../ContactDetailsSeeder'
const ContactList = () => {
    const [isOpen ,setIsOpen]= useState(false);
    const [contacts, setContacts] = useState(localStorage.getItem('CONTACTS')? JSON.parse(localStorage.getItem('CONTACTS')) : []);
    const [searchValue, setSearchValue] = useState('');
    const [filteredContacts, setFilteredContacts] = useState(contacts);
    const [category, setCategory] = useState('all');
    const [selectedContact, setSelectedContact] = useState(null);


    const handleContactClick = (contact) => {
        setSelectedContact(contact);
        setIsOpen(true);
        console.log(contact);
        
    }

    const handleDeleteClick = (contact) => {
        setContacts(contacts.filter((c) => c.id !== contact.id));
    }


    useEffect(() => {
        localStorage.setItem('CONTACTS', JSON.stringify(contacts));
    }, [contacts]);

    useEffect(() => {
        const filtered = contacts.filter((contact) => {
            const isMatchingName = contact.name.toLowerCase().includes(searchValue.toLowerCase());
            const isMatchingEmail = contact.email.toLowerCase().includes(searchValue.toLowerCase());
            const isMatchingPhone = contact.phone.toLowerCase().includes(searchValue.toLowerCase());
            const isMatchingCategory = category === 'all' || contact.category === category;
            return (isMatchingName || isMatchingEmail || isMatchingPhone) && isMatchingCategory;
        });
        setFilteredContacts(filtered);
    }, [searchValue, category, contacts]);
    

  return (
    <div className='contact-list'>
        <div className="contact-list-header">
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
            {/* <button onClick={()=> seeder()}>seed data</button> */}
            {/* <button onClick={()=>{console.log(filteredContacts); console.log("clicked")}}>filteredDAta</button> */}
            <select name="category" id="category" className='category-select' onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value="all">All</option>
                <option value="family">Family</option>
                <option value="friend">Friend</option>
                <option value="work">Work</option>
                <option value="other">other</option>
            </select>
            <Button
            clsname="btn-add-new" 
            type="button" 
            btnText="Add contact"
            onClick ={()=>{
                console.log('Add contact clicked');
                setSelectedContact(null);
                setIsOpen(true);
            }}
            />
        </div>
        {filteredContacts && filteredContacts.length > 0 ? (
            <div className="contact-list-container">
                {/* https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript */}
            {[...filteredContacts].sort((a,b)=>a.name.localeCompare(b.name)).map((contact) => (
                <ContactBody 
                    key={contact.id}
                    contact={contact}
                    // onClick={() => handleContactClick(contact)} 
                    onDelete={() => handleDeleteClick(contact)}
                    contactClick  = {handleContactClick}
                />
            ))}
        </div>
        ):(
            <div className="no-contacts">
                <h2>No contacts found</h2>
                <p>Try adding a new contact</p>
            </div>
        )}

        {isOpen && (
            <ContactModal 
                mode ={selectedContact ? 'edit' : 'add'}
                initialValue={selectedContact || {}}
                onSubmit={(data) => {
                if (selectedContact) {
                    setContacts((contacts.map((contact) =>
                                contact.id === selectedContact.id ? {...data,id:selectedContact.id} : contact
                            )
                        ));
                    } else {
                        setContacts([...contacts, {...data,id: uuidv4()}]);
                    }
                    setIsOpen(false);
                }}
                onClose={() => setIsOpen(false)}
            />
        )}
    </div>
  )
}

export default ContactList