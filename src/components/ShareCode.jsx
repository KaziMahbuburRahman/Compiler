import React, { useEffect } from "react";

export default function ShareCode() {
  useEffect(() => {
    function loadTogetherJS() {
      if (window.TogetherJS) {
        return;
      }

      const script = document.createElement("script");
      script.src = "https://togetherjs.com/togetherjs-min.js";
      script.async = true;
      document.body.appendChild(script);
    }

    loadTogetherJS();
  }, []);

  return (
    <>
      <button
        className="button btn is-size-6 has-text-weight-medium hvrBtn"
        onClick={() => {
          if (window.TogetherJS) {
            window.TogetherJS();
          }
        }}
      >
        Start Collaborative Session
      </button>
      <script strategy="beforeInteractive" src="scripts/togetherjs/togetherjs-min.js" />
    </>
  );
}
