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
                <label className={styles.naoAparece}
                >Se você não é um robô, deixe em branco.</label
                >
                <input type="text" className={styles.naoAparece} name="leaveblank"/>
                <label className={styles.naoAparece}
                >Se você não é um robô, não mude este campo.</label
                >
                <input
                    type="text"
                    className={styles.naoAparece}
                    name="dontchange"
                    value="http://"
                />
                <Button type="submit">Send</Button>
            </form>
        </section>
    )
}

export default Contact
