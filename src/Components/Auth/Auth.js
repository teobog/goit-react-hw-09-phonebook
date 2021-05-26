import React from "react";
import { Formik, Form } from "formik";
import { validationSchema } from "./Validation/Validation";
import TextInput from "./TextInput/TextInput";
import { useAuth } from "../hooks/useAuth";

const Auth = () => {
  const { location, login, registration } = useAuth();
  return (
    <div>
      <div>
        <div>
          <h1>
            {location.pathname === "/registration" ? "Registration" : "Login"}
          </h1>
          <Formik
            initialValues={{
              displayName: "",
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              location.pathname === "/registration"
                ? registration(values)
                : login(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="mt-10">
                {location.pathname === "/registration" ? (
                  <>
                    <TextInput
                      name="displayName"
                      type="displayName"
                      placeholder="Name"
                      component="p"
                    />
                    <TextInput
                      name="email"
                      type="email"
                      placeholder="Email"
                      component="p"
                    />

                    <TextInput
                      name="password"
                      type="password"
                      placeholder="Password"
                      component="p"
                    />
                  </>
                ) : (
                  <>
                    <TextInput
                      name="email"
                      type="email"
                      placeholder="Email"
                      component="p"
                    />

                    <TextInput
                      name="password"
                      type="password"
                      placeholder="Password"
                      component="p"
                    />
                  </>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                >
                  {location.pathname === "/registration" ? "register" : "login"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Auth;
