# Video Portfolio

React + Vite portfolio with a serverless contact form using Gmail SMTP.

## Contact form on Vercel

In **Vercel → Project → Settings → Environment Variables**, add these variables for Production (and Preview if needed):

- `EMAIL_HOST` = `smtp.gmail.com`
- `EMAIL_PORT` = `465`
- `EMAIL_HOST_USER` = the Gmail address that should send and receive contact messages
- `EMAIL_HOST_PASSWORD` = a Google App Password for that account (not the normal Gmail password)

Contact messages go to `nitinsen70671@gmail.com` by default. To change the recipient later, set the optional `CONTACT_EMAIL` variable.

Save the variables and redeploy the project. Keep the App Password secret; do not put it in frontend code or commit it to Git.

For local development, put the same variables in the ignored `.env` file. Run `npm run server` alongside `npm run dev`.

## Development

```sh
npm install
npm run dev
```

In a second terminal:

```sh
npm run server
```

## Build

```sh
npm run build
```
