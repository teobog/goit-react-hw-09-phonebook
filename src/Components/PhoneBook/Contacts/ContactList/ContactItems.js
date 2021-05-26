import React, { memo } from "react";
import { useContacts } from "../../../hooks/useContacts";
const ContactItems = ({ contact }) => {
  const { name, number, id } = contact;
  const { deleteContact } = useContacts();
  return (
    <>
      <li>
        <p>
          {name}-{number}
        </p>
        <button
          id={id}
          type="button"
          onClick={(e) => deleteContact(id)}
        >
          DELETE
        </button>
      </li>
    </>
  );
};

export default memo(ContactItems);
