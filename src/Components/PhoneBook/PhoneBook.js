import React, { useEffect } from "react";
import Contacts from "./Contacts/Contacts";
import ClientsFilter from "./Form/Filter/filter";
import FormContact from "./Form/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContacts } from "../hooks/useContacts";

const PhoneBook = () => {
  const { getAllContact } = useContacts();

  useEffect(() => {
    getAllContact();
  }, [getAllContact]);
  return (
    <>
      <div>
        <div>
          <div

          >
            <ToastContainer />
            <h1 >
              Phonebook
            </h1>
            <FormContact />
            <ClientsFilter />
            <Contacts />
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneBook;
