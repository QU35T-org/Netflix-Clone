import React, { createContext, useContext, useState } from 'react';
import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body,
} from './styles/accordion';

const ToogleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toogleShow, setToogleShow] = useState(false);

  return (
    <ToogleContext.Provider value={{ toogleShow, setToogleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToogleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toogleShow, setToogleShow } = useContext(ToogleContext);

  return (
    <Header
      onClick={() => setToogleShow((toogleShow) => !toogleShow)}
      {...restProps}
    >
      {children}
      {toogleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toogleShow } = useContext(ToogleContext);

  return toogleShow ? <Body {...restProps}>{children}</Body> : null;
};
