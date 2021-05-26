import { useContacts } from "../../hooks/useContacts";
import LoaderContacts from "../../loaders/LoaderContacts/LoaderContacts";

import ContactItems from "./ContactList/ContactItems";

const Contacts = () => {
  const { items, loader } = useContacts();
  return (
    <>
      <h2>
        Contacts
      </h2>
      <div>
        {loader ? (
          <LoaderContacts />
        ) : (
          <ul>
            {items?.map((contact) => (
              <ContactItems contact={contact} key={contact.id} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Contacts;
