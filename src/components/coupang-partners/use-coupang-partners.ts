import loadScript from '@site/src/hooks/load-script';
import { useEffect, useState } from 'react';
import EventEmitter from 'events';

const eventEmitter = new EventEmitter();
const SCRIPT_TAG_ID = 'gladsdk-script';
const SCRIPT_LOADED_EVENT = 'COUPANG_SCRIPT_LOADED_EVENT';

export default function useCoupangPartners(): boolean {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    loadScript(SCRIPT_TAG_ID, 'https://ads-partners.coupang.com/g.js').then(() => {
      eventEmitter.emit(SCRIPT_LOADED_EVENT);
    });
  }, []);

  useEffect(() => {
    eventEmitter.on(SCRIPT_LOADED_EVENT, () => {
      setLoaded(true);
    });
  }, []);

  return loaded;
}
