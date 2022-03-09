import React from 'react';
import { HeaderContainer } from '../containers/header';
import { Feature, OptForm } from '../components';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Films, séries TV et bien plus en illimité.
          </Feature.Title>
          <Feature.SubTitle>
            Où que vous soyez. Annulez à tout moment.
          </Feature.SubTitle>
          <OptForm style={{marginTop: 0}}>
            <OptForm.Text>
              Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
              abonner ou réactiver votre abonnement.
            </OptForm.Text>
            <OptForm.Break />
            <OptForm.Inner>
              <OptForm.Input placeholder="Adresse e-mail" />
              <OptForm.Button>Commencer</OptForm.Button>
            </OptForm.Inner>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
