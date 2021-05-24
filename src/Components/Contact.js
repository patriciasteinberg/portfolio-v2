import React from 'react';
import Button from './Button';
import Input from './Input';
import Message from './Message';
import PageTitle from './PageTitle';

const Contact = () => {
    return (
        <section className="container">
            <PageTitle>Contact</PageTitle>
            <form>
                <Input label="Name" type="text" name="name"/>
                <Input label="Phone" type="tel" name="phone"/>
                <Input label="Email" type="email" name="email"/>
                <Message label="Leave your message here:" type="text" name="message"/>
                <Button>Send</Button>
            </form>
        </section>
    )
}

export default Contact
