import React from "react";
import { message } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "../FormItems/FormInput";
import AppButton from "../AppButton/AppButton";
import axios from "axios";
import { cookie } from "../../utils/cookie";
import { USER_TOKEN, BASE_URL, AUTH_USER } from "../../constants/common.constants";
import { setItem } from "../../utils/hooks";

const validationSchema = Yup.object().shape({
  full_name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const SignupForm = () => {
  const initialValues = {
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        let response = await axios.post(`${BASE_URL}/user`, values);
        if (response) {
          if (response.data.success) {
            cookie.set(USER_TOKEN, response.data.data.token);
            setItem(AUTH_USER, {
              email: response.data.data.email,
              name: response.data.data.full_name,
            })
            window.location.href = "/";
          } else {
            message.error(response.data.message);
          }
        }
        setSubmitting(false);
      }}
    >
      {({ errors, touched, handleChange, isSubmitting, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <FormInput
            error={errors.full_name}
            label="Name"
            name="full_name"
            type="text"
            touched={touched.full_name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
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
          <FormInput
            error={errors.confirmPassword}
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            touched={touched.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
          <AppButton
            type="primary"
            htmlType="submit"
            loading={isSubmitting}
            label="Signup"
          />
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
