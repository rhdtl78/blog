import React, { CSSProperties } from 'react'

export default function CoupangPartners(props: CoupangOption) {
  const {
    adID, height, trackingCode, width, template,
  } = props;

  return (
    <div style={styles.container}>
      <iframe
        title="Coupang"
        src={`https://ads-partners.coupang.com/widgets.html?id=${adID}&template=${template}&trackingCode=${trackingCode}&subId=&width=${width}&height=${height}`}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        referrerPolicy="unsafe-url"
      />
      <span style={styles.notice}>이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다</span>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100%",
  },
  notice: {
    fontWeight: "bold"
  }
}

interface CoupangOption {
  adID: number;
  template: string;
  trackingCode: string;
  width: number;
  height: number;
}
