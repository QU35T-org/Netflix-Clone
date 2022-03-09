import React from 'react';
import { Accordion } from '../components';
import OptForm from '../components/optForm';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Questions fréquemment posées (FAQ)</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm>
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
    </Accordion>
  );
}
