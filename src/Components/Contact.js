import React, { useCallback , useState } from 'react';
import Button from './Button';
import Input from './Input';
import Message from './Message';
import PageTitle from './PageTitle';
import { useForm, ValidationError } from '@formspree/react';
import styles from "./Contact.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import Head from "./Head";


const Contact = () => {
    const [state, handleSubmit] = useForm("xknkrwkp");
    const [disableSubmit,setDisableSubmit] = useState(true);

    if (state.succeeded) {
        return <p className={styles.success}>Your message has been sent!</p>;
    }

    return (
        <section className="container">
            <Head title="Contact" description="This website was made to showcase my projects." />
            <PageTitle>Contact</PageTitle>
            <form onSubmit={handleSubmit}>
                <Input label="Name" type="text" name="name" />
                <Input label="Phone" type="tel" name="phone" pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"/>
                <Input label="Email" type="email" name="_replyto"/>
                <Message label="Leave your message here:" type="text" name="message"/>
                <div className={styles.submit}>
                    <ReCAPTCHA
                        sitekey="6LeuQusaAAAAAOiISiyHnQiTY4hhqnN1kM1ZsIoG"
                        onChange={() => setDisableSubmit(false)}
                    />
                    <Button type="submit" disabled={disableSubmit}>Send</Button>
                </div>
            </form>
        </section>
    )
}

export default Contact
