import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaTrashAlt } from "react-icons/fa";

import SearchBar from '../UI/SearchBar'
import Button from '../UI/Button'
import ContactBody from './ContactBody'
import ContactModal from './ContactModal'
import seeder from '../../../ContactDetailsSeeder'
const ContactList = () => {
  const [isOpen, setIsOpen] = useState(false); // this one is for contract form modal
  const [contacts, setContacts] = useState(
    localStorage.getItem("CONTACTS")
      ? JSON.parse(localStorage.getItem("CONTACTS"))
      : []
  );
  const [searchValue, setSearchValue] = useState(""); // this one is for search bar
  const [filteredContacts, setFilteredContacts] = useState(contacts); // this one is for filtered contacts that will be displayed in the contact list
  const [category, setCategory] = useState("all"); // this one is for category filter
  const [selectedContact, setSelectedContact] = useState(null); // this one is for selected contact that will be edited in the modal
  const [checkedContacts, setCheckedContacts] = useState([]); // this one is for checked contacts that will be deleted in the modal
  const [bouncedQuery, setBouncedQuery] = useState(""); // this one is for bounced query that will be used to check if the contact is already in the list

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setIsOpen(true);
    console.log(contact);
  };

  const handleCheckBoxChange = (contactId) => {
    setCheckedContacts((prevCheckedContacts) => {
      if (prevCheckedContacts.includes(contactId)) {
        return prevCheckedContacts.filter((id) => id !== contactId);
      } else {
        return [...prevCheckedContacts, contactId];
      }
    });
  };

  const handleDeleteCheckedContacts = () => {
    if (checkedContacts.length === 0) {
      alert("Please select at least one contact to delete");
      return;
    }
    const updatedContacts = filteredContacts.filter((contact) =>
      checkedContacts.includes(contact.id)
    );
    setContacts(() =>
      contacts.filter((contact) => !updatedContacts.includes(contact))
    );
    setCheckedContacts([]);
  };

  const handleDeleteClick = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
  };

  useEffect(() => {
    localStorage.setItem("CONTACTS", JSON.stringify(contacts));
  }, [contacts]);

  // Debounce the search input to improve performance
  // This will delay the filtering process until the user stops typing for a specified duration(in milliseconds).
  useEffect(() => {
    const timer = setTimeout(() => {
      setBouncedQuery(searchValue);
    }, 450); // Adjust the debounce delay as needed

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  useEffect(() => {
    const filtered = contacts.filter((contact) => {
      const isMatchingName = contact.name
        .toLowerCase()
        .includes(bouncedQuery.toLowerCase());
      const isMatchingEmail = contact.email
        .toLowerCase()
        .includes(bouncedQuery.toLowerCase());
      const isMatchingPhone = contact.phone
        .toLowerCase()
        .includes(bouncedQuery.toLowerCase());
      const isMatchingCategory =
        category === "all" || contact.category === category;
      return (
        (isMatchingName || isMatchingEmail || isMatchingPhone) &&
        isMatchingCategory
      );
    });
    setFilteredContacts(filtered);
  }, [bouncedQuery, category, contacts]);

  return (
    <div className="contact-list">
      <div className="contact-list-header">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <button
          onClick={() => {
            seeder();
            location.reload();
          }}
        >
          Dummy Data
        </button>
        {/* <button onClick={()=>{console.log(filteredContacts); console.log("clicked")}}>filteredDAta</button> */}
        <select
          name="category"
          id="category"
          className="category-select"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
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
          onClick={() => {
            console.log("Add contact clicked");
            setSelectedContact(null);
            setIsOpen(true);
          }}
        />
      </div>

      {filteredContacts.length > 0 && (
        <div className="multiple-selection-row">
          <div>
            <input
              type="checkbox"
              className="select-checkbox"
              id={`checkbox-all`}
              onChange={(e) => {
                if (e.target.checked) {
                  setCheckedContacts(
                    filteredContacts.map((contact) => contact.id)
                  );
                } else {
                  setCheckedContacts([]);
                }
              }}
              checked={
                checkedContacts.length === filteredContacts.length &&
                filteredContacts.length > 0
              }
            />
            <label htmlFor={`checkbox-all`} className="label">
              Select all
            </label>
          </div>

          <div>
            {checkedContacts.length > 0 && (
              <button
                className="btn btn-delete"
                onClick={handleDeleteCheckedContacts}
              >
                <FaTrashAlt /> &nbsp; selected
              </button>
            )}
          </div>

          <span className="multiple-selection-text">
            {checkedContacts.length}/{filteredContacts.length}
          </span>
        </div>
      )}

      {filteredContacts && filteredContacts.length > 0 ? (
        <div className="contact-list-container">
          {/* https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript */}
          {[...filteredContacts]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((contact) => (
              <ContactBody
                key={contact.id}
                contact={contact}
                // onClick={() => handleContactClick(contact)}
                onDelete={() => handleDeleteClick(contact)}
                contactClick={handleContactClick}
                onSelect={handleCheckBoxChange}
                ischecked={checkedContacts.includes(contact.id)}
              />
            ))}
        </div>
      ) : (
        <div className="no-contacts">
          <h2 className="no-contacts-title">No contacts found</h2>
          <p className="no-contacts-text">Try adding a new contact</p>
        </div>
      )}

      {isOpen && (
        <ContactModal
          mode={selectedContact ? "edit" : "add"}
          initialValue={selectedContact || {}}
          onSubmit={(data) => {
            let stopFunctionExecution = false;
            if (selectedContact) {
              setContacts(
                contacts.map((contact) =>
                  contact.id === selectedContact.id
                    ? { ...data, id: selectedContact.id }
                    : contact
                )
              );
            } else {
              contacts.map((contact) => {
                const isDuplicate =
                  contact.email.toLowerCase() === data.email.toLowerCase() ||
                  contact.phone === data.phone;
                if (isDuplicate) {
                  stopFunctionExecution = true;
                }
              });
              if (stopFunctionExecution) {
                alert("Contact with this email or Phone already exists!");
                return;
              }
              setContacts([...contacts, { ...data, id: uuidv4() }]);
            }
            setIsOpen(false);
          }}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default ContactList