import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import imgCt from "../../assets/imgct.png";

const Container = styled.div`
  background-color: #0a0a0a;
  padding: 16px;
  ${'' /* margin: 18px; */}
  border-radius: 10px;
  max-width: 900px;
  margin: auto;
  display: flex;
`;

const LeftColumn = styled.div`
  flex: 1;
  ${'' /* margin-right: 20px; */}
`;

const RightColumn = styled.div`
  flex: 1;
`;

const FormBox = styled.div`
  background-color: #1a1a1a;
  margin: 18px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  & > div {
    margin-right: 15px;
    flex: 1;
  }

  & > div:last-child {
    margin-right: 0;
  }
`;

const Input = styled(Field)`
  width: 90%;
  padding: 0.75rem;
  background-color: #030303;
  border: 1px solid #333;
  border-radius: 5px;
  color: #fff;
`;

const Textarea = styled(Input).attrs({ as: "textarea" })`
  width: 95%;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: linear-gradient(90deg, #dc143c, #ff7b54);
  border-radius: 25px;
  border: none;
  color: #fff;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  transition: background-color 0.3s;

  &:hover {
    background: linear-gradient(90deg, #ff5252, #ff7a00);
  }
`;

const ErrorText = styled.div`
  color: #ff5252;
`;

const Title = styled.label`
  color: #fff;
  margin: 5px 0;
`;

const HeadPara = styled.p`
  color: #dc143c;
  font-weight: bold;
`;

const Quoets = styled.h2`
  color: #fff;
  font-weight: bold;
`;

const Paragraph = styled.p`
  color: #b0b0b0;
  margin-bottom: 10px;
  line-height: 2;
`;

const Image = styled.img`
  max-width: 78%;
  height: auto;
  border-radius: 10px;
`;

const ContactForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <Container>
      <LeftColumn>
        <HeadPara>GET IN TOUCH</HeadPara>
        <Quoets>Lets <font color="ff7a00">work together</font> on your next project</Quoets>
        <Paragraph>
          I consistenly exceed our clients' expectations by providing high
          quality igital solutions. Get touch with me get started!
        </Paragraph>
        <Image src={imgCt} alt="Sample" />
      </LeftColumn>
      <RightColumn>
        <FormBox>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
              <Quoets>Get in <font color="ff7a00">Touch with Us</font> for<br />Any Questions or Inquries</Quoets>
                <FormRow>
                  <FormGroup>
                    <Title>First Name</Title>
                    <Input name="firstName" placeholder="First Name" />
                    <ErrorMessage name="firstName" component={ErrorText} />
                  </FormGroup>
                  <FormGroup>
                    <Title>Last Name</Title>
                    <Input name="lastName" placeholder="Last Name" />
                    <ErrorMessage name="lastName" component={ErrorText} />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Title>Email Address</Title>
                    <Input
                      name="email"
                      placeholder="Email Address"
                      type="email"
                    />
                    <ErrorMessage name="email" component={ErrorText} />
                  </FormGroup>
                  <FormGroup>
                    <Title>Phone Number</Title>
                    <Input name="phone" placeholder="Mobile Number" />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Title>Company Name</Title>
                    <Input name="company" placeholder="Company Name" />
                  </FormGroup>
                  <FormGroup>
                    <Title>Subject</Title>
                    <Input name="subject" placeholder="Subject" />
                    <ErrorMessage name="subject" component={ErrorText} />
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <Title>Message</Title>
                  <Textarea name="message" placeholder="Message" />
                  <ErrorMessage name="message" component={ErrorText} />
                </FormGroup>

                <div style={{ display: "flex", justifyContent: "center" , margin: "20px" , padding: "18px" }}>
                  <Button type="submit" disabled={isSubmitting}>
                    Submit Message
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </FormBox>
      </RightColumn>
    </Container>
  );
};

export default ContactForm;
