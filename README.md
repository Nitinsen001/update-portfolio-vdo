# Video Portfolio

React + Vite portfolio with a serverless contact form.

## Contact form on Vercel

The contact endpoint sends email through [Resend](https://resend.com) over HTTPS. Gmail SMTP credentials are not used, since SMTP connections are not suitable for many serverless deployments.

1. Create a Resend account and generate an API key.
2. Verify a sending domain in Resend. Set `CONTACT_FROM_EMAIL` to an address on that verified domain, such as `Portfolio <contact@example.com>`.
3. In the Vercel project, open **Settings → Environment Variables** and add:
   - `RESEND_API_KEY`: your Resend API key
   - `CONTACT_EMAIL`: the inbox that should receive contact form messages
   - `CONTACT_FROM_EMAIL`: the sender address on your verified domain
4. Apply the variables to the Production environment (and Preview if needed), then redeploy.

The local `.env` file is ignored by Git. For local use, add the same variables there and run `npm run server` alongside `npm run dev`.

## Development

```sh
npm install
npm run dev
```

In a second terminal, run the local API server:

```sh
npm run server
```

## Build

```sh
npm run build
```
