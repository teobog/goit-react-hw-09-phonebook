import { Formik, Form } from "formik";
import React from "react";
import { toast } from "react-toastify";
import TextInput from "../../Auth/TextInput/TextInput";
import { textSchema } from "../../Auth/Validation/Validation";
import { useForm } from "../../hooks/useForm";
const FormContact = () => {
  const { items, addContact } = useForm();
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={textSchema}
      onSubmit={(values) => {
        if (items.some(({ name }) => name === values.name)) {
          toast.warn(`${values.name}, уже в списке контактов!`);
        } else {
          addContact(values);
        }
      }}
    >
      <Form>
        <TextInput name="name" type="text" component="p" />
        <TextInput name="number" type="number" component="p" />
        <button
          type="submit"
        >
          ADD CONTACT
        </button>
      </Form>
    </Formik>
  );
};

export default FormContact;
