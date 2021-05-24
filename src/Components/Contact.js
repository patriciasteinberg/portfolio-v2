import React from 'react';
import Button from './Button';
import Input from './Input';
import Message from './Message';
import PageTitle from './PageTitle';
import { useForm, ValidationError } from '@formspree/react';
import styles from "./Contact.module.css";
import ReCAPTCHA from "react-google-recaptcha";


const Contact = () => {
    const [state, handleSubmit] = useForm("xknkrwkp");
    
    if (state.succeeded) {
        return <p className={styles.success}>Your message has been sent!</p>;
    }

    function onChange(value) {
        return <Button type="submit">Send</Button>
      }

    return (
        <section className="container">

            <PageTitle>Contact</PageTitle>
            <form onSubmit={handleSubmit}>
                <Input label="Name" type="text" name="name"/>
                <Input label="Phone" type="tel" name="phone"/>
                <Input label="Email" type="email" name="_replyto"/>
                <Message label="Leave your message here:" type="text" name="message"/>
                <ReCAPTCHA sitekey="6LeuQusaAAAAAOiISiyHnQiTY4hhqnN1kM1ZsIoG" onChange={onChange} />
            </form>
        </section>
    )
}

export default Contact
