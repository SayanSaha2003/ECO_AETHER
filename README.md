# ECO AETHER

A simple static website with an Express backend for signup and login.

## Project structure

```text
ECO_AETHER/
    pages/
        index.html
        login.html
        signup.html
        dashboard.html
        gst-registration.html
        gst-return.html
        tds-filing.html
        itr-filing.html
        company-incorporation.html
        annual-compliance.html
   src/
      server/
         app.js
   public/
      css/
      js/
      images/
   server.js
```

The HTML pages now live in `pages/`, while shared assets and server code live in their own folders.

## Run locally

1. Open a terminal in this folder.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the server:
    ```bash
    npm start
    ```
4. Open `http://localhost:3000` in your browser.

## Notes

- Backend routes:
    - `POST /api/signup`
    - `POST /api/login`
- The backend stores users in memory and is intended for demo/testing only.
- For deployment, use a Node.js hosting provider that supports Express apps.
