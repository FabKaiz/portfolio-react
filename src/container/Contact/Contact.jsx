import React, { useState } from 'react'
import { BiSend } from 'react-icons/bi';

import { HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { Button } from '../../components';
import './Contact.scss';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFeedback("***TEMPLAYE_ID***", {
      name,
      subject,
      email,
      message,
    });
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log('success !');
        setName("");
        setSubject("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
  };

  
  return (
    <section className="section contact" id="contact">
      <h2 className="section__title">Me contacter</h2>
      <span className="section__subtitle">Fabien Chareun</span>

      <div className="contact__container">

        <div className="contact__info">
          <div className="contact__info-item">
            <HiOutlinePhone />
            <div>
              <h3 className="contact__title">Téléphone</h3>
              <span className="contact__subtitle">+33 6 21 71 16 70</span>
            </div>
          </div>
          <div className="contact__info-item">
            <MdOutlineAlternateEmail />
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">fabienchareun@gmail.com</span>
            </div>
          </div>
          <div className="contact__info-item">
           <HiOutlineLocationMarker />
            <div>
              <h3 className="contact__title">Localisation</h3>
              <span className="contact__subtitle">Saint Laurent de mure 69720 - (30km de Lyon)</span>
            </div>
          </div>
        </div>

        <div className="contact__form">
          <form className="contact-form grid">
              <div className="contact__inputs grid">
                <div className="contact__content">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="nom *"
                    value={name}
                    autoComplete="off"
                    className="contact__input"
                  />
                </div>
                <div className="email-content contact__content">
                  <label id="not-mail">Email non valide</label>
                  <input
                    type="mail"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email *"
                    value={email}
                    autoComplete="off"
                    className="contact__input"
                  />
                </div>
              </div>
              <div className="contact__content">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Sujet"
                  value={subject}
                  className="contact__input"
                />
              </div>
              <div className="contact__content">
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="message *"
                  value={message}
                  className="contact__input"
                />
              </div>
            <Button
              className="contact-button"
              type="button"
              value="Envoyer"
              title="Envoyer"
              logo={<BiSend />}
              onClick={handleSubmit}
            />
            <div className="form-message"></div>
          </form>
        </div>
      </div>

    </section>
  )
}

export default Contact