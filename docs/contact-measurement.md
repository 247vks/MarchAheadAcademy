# Contact measurement

Implemented 12 September 2026.

GA4 event: `contact_intent`.
Parameter: `contact_method` (`phone`, `email`, `whatsapp`).

This means a visitor clicked a contact link. It does not mean a message was sent, a call connected, a booking was made or a candidate enrolled.

The global handler observes contact anchors, including clicks on nested icons. It sends only the method and a query-free page location in the custom payload. It does not send destination numbers, email addresses or WhatsApp message text. Analytics must be allowed by the current consent choice; no pre-consent events are queued for later replay.

Tests exercise all three channels, no-consent/rejected states, withdrawal, nested-icon clicks and payload checks with analytics network requests intercepted. Tests do not create real enquiries.

GA4 configuration verified in-app after explicit owner approval: Search Console linked; `contact_intent` marked as a code-based key event, once per event, no default monetary value. Event-scoped custom dimension `Contact method` maps to `contact_method`, with description explicitly distinguishing clicks from completed enquiries/bookings. Event list currently shows no stream data detected; configuration is verified, production collection must accumulate after deployment and consented visitor activity. Actual consultation bookings require separate, authorised confirmation data; do not infer them from clicks.
