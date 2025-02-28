
import { IonApp, IonGrid, IonRow, IonCol, IonImg, setupIonicReact, IonIcon, IonHeader, IonContent, IonCard, IonButton, IonLabel, IonInput, IonTextarea } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { JSXElementConstructor, MouseEventHandler, ReactElement, ReactNode, ReactPortal, useRef } from 'react';

import items from '../src/assets/json/items.json';
import emailjs from '@emailjs/browser';

import {Contact} from './pages/Contact';

setupIonicReact();

const App: React.FC = () => {

  return (
  <IonApp className="appBackground">
    <IonHeader>
      <IonGrid>
        <IonRow>
          <IonCol class="iconHeader">
            <IonImg class="img1" src='src/assets/img/LogoGrimTo.png' alt='GrimTo'></IonImg>
          </IonCol>
          <IonCol class="iconHeader"></IonCol>
          <IonCol class='iconHeader'>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonIcon name="cart-outline"></IonIcon>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonHeader>

    <IonContent>

      <IonCard>
        <IonImg src='src/assets/img/ToyStoreImg.png'></IonImg>
        <IonButton className='bannerBtn' shape='round'>Shop Now</IonButton>
      </IonCard>

      <IonGrid id="catalog">
        <IonRow>
          <IonLabel className="categoryTitle"> Select an Item as your choice </IonLabel>
        </IonRow>

        <IonRow>
        {
          items.map(item => {
            return (
              <IonCard className='ion-text-center'>
                <IonImg src={item.productImage}></IonImg>
                <IonLabel className='category'>{ item.productId} - {item.productName }</IonLabel>
                <br></br>
                <IonButton size='small' shape="round" fill="outline"> Buy Now </IonButton>
              </IonCard>
            )
          })
        }
        </IonRow>

      </IonGrid>

      <IonCard className="contact">
        <Contact></Contact>
      </IonCard>

    </IonContent>
  </IonApp>
)};

export default App;
