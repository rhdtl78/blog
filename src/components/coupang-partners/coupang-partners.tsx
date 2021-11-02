import React from 'react';

export default function CoupangPartners(props: CoupangOption) {
  const {
    partnersID, height, trackingCode, width, template,
  } = props;

  return (
    <iframe
      title="Coupang"
      src={`https://ads-partners.coupang.com/widgets.html?id=${partnersID}&template=${template}&trackingCode=${trackingCode}&subId=&width=${width}&height=${height}`}
      width="100%"
      height="100%"
      frameBorder="0"
      scrolling="no"
      referrerPolicy="unsafe-url"
    />
  );
}

interface CoupangOption {
  partnersID: number;
  template: string;
  trackingCode: string;
  width: number;
  height: number;
}
