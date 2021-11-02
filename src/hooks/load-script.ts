export default function loadScript(scriptTagID: string, url: string): Promise<void> {
  return new Promise<void>((resolve) => {
    let script: HTMLScriptElement = document.getElementById(scriptTagID) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.src = `${url}?version=${new Date().getTime()}`;
      script.async = true;
      script.id = scriptTagID;
      document.head.appendChild(script);
      script.onload = () => {
        script.dataset.loaded = 'true';
        resolve();
      };
      return;
    }
    if (script.dataset.loaded) {
      resolve();
    }
  });
}
