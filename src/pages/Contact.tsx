import React, { RefObject, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { IonLabel, IonRow, IonCol, IonButton } from '@ionic/react';
import '../theme/variables.css';

export const Contact = () => {
  const form = useRef(null);
  
  const sendEmail = () => {

    emailjs
      .sendForm('service_s5q753m', 'template_dnrss55', form.current!, {
        publicKey: 'izj9UG11TaR_bZtnv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={() => sendEmail()}>
        <IonRow>
            <IonCol>
        <IonLabel>Name</IonLabel>
        </IonCol>
        <IonCol>
        <input className="input" type="text" name="from_name" />
        </IonCol>
        </IonRow>

        <IonRow>
            <IonCol>
      <IonLabel>Contact No</IonLabel>
      </IonCol>
      <IonCol>
      <input className="input" type="number" name="contact" />
      </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
      <IonLabel>Email</IonLabel>
      </IonCol>
      <IonCol>
      <input className="input" type="email" name="user_email" />
      </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
      <IonLabel>Message</IonLabel>
      </IonCol>
      <IonCol>
      <textarea className="input" name="message" />
      </IonCol>
      </IonRow>

      <IonRow >
        <IonCol>
      <IonButton type="submit" size="small"> Send </IonButton>
      </IonCol>
      </IonRow>
    </form>
  );
};