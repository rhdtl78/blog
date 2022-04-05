import React from 'react';
import {Col, Row} from 'reactstrap';

const Header = ({header}: Props) => (
    <Row className="justify-content-around align-content-center">
        <Col xs={12} md={6} className="text-right">
            <h2 className="text-2xl">{header.name}</h2>
            <h5>{header.position}</h5>
        </Col>
        <Col xs={12} md={6} className="d-flex">
            <a href="/">
                <img
                    src={header.img.src}
                    alt={header.img.alt}
                    width={80}
                    className="rounded-full max-w-3/4"
                />
            </a>
            <div className={'ms-3'}>
                <div>{header.location}</div>
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
            </div>

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
