import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "../FormItems/FormInput";
import AppButton from "../AppButton/AppButton";
import axios from "axios";
import { cookie } from "../../utils/cookie";
import { USER_TOKEN, BASE_URL } from "../../constants/common.constants";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        let response = await axios.post(
          `${BASE_URL}/user/login`,
          values
        )
        // let response = await login(values)
        console.log(response);
        if (response) {
          cookie.set(USER_TOKEN, response.data.token);
          navigate("/");
        }
        setSubmitting(false);
      }}
    >
      {({ errors, touched, handleChange, isSubmitting, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <FormInput
            error={errors.email}
            label="Email"
            name="email"
            type="email"
            touched={touched.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <FormInput
            error={errors.password}
            label="Password"
            name="password"
            type="password"
            touched={touched.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <AppButton
            type="primary"
            htmlType="submit"
            loading={isSubmitting}
            label="Login"
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
