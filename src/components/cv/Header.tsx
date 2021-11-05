import React from 'react';
import { Col, Row } from 'reactstrap';

const Header = ({ header }: Props) => (
  <Row className="justify-content-around align-content-center" >
    <Col xs={1}>
      <a href="/cv.pdf" target="_blank" className="no-print">
        <img src="/logos/pdf.svg" height="50" alt="pdf icon" />
      </a>
    </Col>
    <Col xs={4} className="text-right">
      <h2 className="text-2xl">{header.name}</h2>
      <h5>{header.position}</h5>
    </Col>
    <Col xs={2} className="text-center">
      <a href="/">
        <img
          src={header.img.src}
          alt={header.img.alt}
          width={80}
          className="rounded-full max-w-3/4"
        />
      </a>
    </Col>
    <Col xs={5} className="text-lg">
      <div>{header.location}</div>
      <>
        {header.contacts.map((contact) => (
          <div key={contact.type}>
            {contact.type}
            :
            {' '}
            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              {contact.linkName}
            </a>
          </div>
        ))}
      </>
    </Col>
  </Row>
);

interface Props {
  header: HeaderData
}

interface HeaderData {
  name: string;
  position: string;
  img: HeaderImage;
  location: string;
  contacts: Contact[]
}

interface HeaderImage {
  src: string;
  alt: string;
}

interface Contact {
  type: string;
  link: string;
  linkName: string;
}

export default Header;
