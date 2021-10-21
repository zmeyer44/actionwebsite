import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import { contactTicket } from "../../functions"
import { SupportWrapper } from "./styled.components"
import Accordion from "../../components/Accordion"
import Input from "../../components/Formik/Input"
import Submit from "../../components/Formik/Submit"
import Title from "../../components/Title"

const faq = {
  title: "Frequently asked questions",
  text: "Answers for most popular questions",
  options: [
    {
      title: "What is Discovr?",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.",
    },
    {
      title: "How do I create an account?",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.",
    },
    {
      title: "Are all posts public?",
      text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    },
    {
      title: "What if I have more questions?",
      text: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always.",
    },
  ],
}
const mailer = {
  title: "Got more questions?",
  text: "Send us a message",
  sendButtonText: "Send message",
  successMessage:
    "Thank you for sending a message. We will respond as soon as possible.",
  errorMessage:
    "An error occurred. Can't create a ticket now. Please retry later.",
}
const form = {
  validationSchema: Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Must be an email").required("Required"),
    message: Yup.string().required("Required"),
  }),
  // eslint-disable-next-line no-undef

  fields: [
    {
      name: "name",
      label: "Name",
      placeholder: "ie. John Doe",
      initialValue: "",
    },
    {
      name: "email",
      label: "E-mail",
      placeholder: "ie. john.doe@email.com",
      type: "email",
      initialValue: "",
    },
    {
      name: "message",
      label: "Message",
      placeholder: "Start typing here...",
      multiline: true,
      initialValue: "",
    },
  ],
}

const SupportContainer = props => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const onSubmit = async (values, { setSubmitting }) => {
    setIsSuccess(false)
    setIsError(false)
    setSubmitting(true)

    try {
      const res = await contactTicket(values)

      if (res) {
        setIsSuccess(true)
      } else {
        setIsError(true)
      }
    } catch (_) {
      setIsError(true)
    }
  }

  return (
    <SupportWrapper {...props}>
      <Title title="Contact" subtitle="Let us know if you have any questions" />

      <div className="container">
        <div className="main_section">
          <div className="faq">
            <Fade bottom cascade duration={600}>
              <span>
                <h4>{faq.title}</h4>
              </span>
              <span>
                <span className="subtext">{faq.text}</span>
              </span>
            </Fade>
            <Accordion
              options={faq.options}
              renderItem={({ option, key, onSelect, isSelected }) => (
                <Fade bottom duration={600} delay={key * 100}>
                  <div className="card accordion" onClick={onSelect}>
                    <div className="card_container">
                      <div className={`plus_minus ${isSelected}`} />
                      <div>
                        <p>{option.title}</p>
                        <Fade duration={600} collapse when={isSelected}>
                          <p className="answer">{option.text}</p>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </Fade>
              )}
            />
          </div>

          <div className="form">
            <Fade bottom cascade duration={600}>
              <span>
                <h4>{mailer.title}</h4>
              </span>
              <span>
                <span className="subtext">{mailer.text}</span>
              </span>
            </Fade>

            <div className="form_section">
              <Fade duration={600} collapse when={!!isSuccess}>
                <div className="form_message">
                  <div className="card success">
                    <span>{mailer.successMessage}</span>
                  </div>
                </div>
              </Fade>
              <Fade duration={600} collapse when={!!isError}>
                <div className="form_message">
                  <div className="card error">
                    <span>{mailer.errorMessage}</span>
                  </div>
                </div>
              </Fade>
              <Formik
                validationSchema={form.validationSchema}
                onSubmit={onSubmit}
                hasSuccessStatus={isSuccess}
                hasErrorStatus={isError}
                initialValues={form.fields.reduce(
                  (acc, field) => ({
                    ...acc,
                    [field.name]: field.initialValue,
                  }),
                  {}
                )}
              >
                <Form>
                  <Fade cascade bottom duration={600}>
                    <div>
                      {form.fields.map(field => (
                        <Input key={field.name} {...field} />
                      ))}
                      <Submit type="submit">{mailer.sendButtonText}</Submit>
                    </div>
                  </Fade>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </SupportWrapper>
  )
}

export default SupportContainer
