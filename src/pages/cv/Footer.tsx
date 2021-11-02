import React from 'react';

const Footer = ({ footer }: Props) => <p className="mt-5 text-center no-print">{footer}</p>;

interface Props {
  footer: string;
}

export default Footer;
