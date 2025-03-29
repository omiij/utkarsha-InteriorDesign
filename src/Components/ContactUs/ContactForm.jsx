import React, { useState } from "react";
import { Button, TextField, Typography, Alert, Snackbar } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./ContactForm.scss";
import LanguageIcon from "@mui/icons-material/Language";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const addressData = [
  { icon: <LanguageIcon />, title: "www.interioestuio.com" },
  { icon: <LocalPhoneIcon />, title: "+91 74****455 +91 78*****4656" },
  { icon: <EmailIcon />, title: "interiordesign@gmail.com" },
  { icon: <LocationOnIcon />, title: "123 Anywhere ST., Any City, ST 12345" },
];

const ContactForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="contact-form-container">
      <div className="content_div">
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            setOpen(true);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className="contact-form">
              <Typography variant="h4" className="form-title">
                Contact Us
              </Typography>
              <Field
                as={TextField}
                label="Name"
                name="name"
                variant="outlined"
                fullWidth
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              <Field
                as={TextField}
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Field
                as={TextField}
                label="Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        <div className="content">
          {addressData?.map((item, index) => {
            return (
              <h3 key={index}>
                {" "}
                {item?.icon} {item?.title}
              </h3>
            );
          })}
        </div>
      </div>

      <Snackbar
        className="snack_bar"
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          className="alert"
          onClose={() => setOpen(false)}
          severity="success"
        >
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactForm;
