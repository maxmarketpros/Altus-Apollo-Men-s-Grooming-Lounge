"use client"

import Script from "next/script"

export function BookingForm() {
  return (
    <div className="w-full">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/nxtQQoXzItiVyEN4JqLn"
        style={{ width: "100%", height: "683px", border: "none", borderRadius: "3px" }}
        id="inline-nxtQQoXzItiVyEN4JqLn"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="WebSite Form Template"
        data-height="683"
        data-layout-iframe-id="inline-nxtQQoXzItiVyEN4JqLn"
        data-form-id="nxtQQoXzItiVyEN4JqLn"
        title="WebSite Form Template"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  )
}
