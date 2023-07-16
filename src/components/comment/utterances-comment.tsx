import React, { ReactElement, useEffect, useRef } from 'react';

export default function UtterancesComment(): ReactElement {
    const commentElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://utteranc.es/client.js";
        script.src = "https://utteranc.es/client.js";
        script.setAttribute("repo", "rhdtl78/rhdtl78.github.io");
        script.setAttribute("issue-term", "pathname");
        script.setAttribute("theme", "preferred-color-scheme");
        script.setAttribute("crossorigin", "anonymous");
        script.async = true;
        commentElement.current?.appendChild(script);
    }, []);

    return (
        <div ref={commentElement}></div>
    )
}