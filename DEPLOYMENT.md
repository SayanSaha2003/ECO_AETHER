# Deploy to Render

This repository is ready to deploy to Render as a Node.js web service.

## Steps

1. Create a free Render account at https://render.com.
2. Connect your Git repository.
   - If you use GitHub/GitLab/Bitbucket, create a remote repository and push this project.
   - Example:
     ```bash
     cd "c:\Users\SAYAN SAHA\Desktop\ECO ETHER\Eco_legis"
     git remote add origin <your-repo-url>
     git push -u origin main
     ```
3. In Render, create a new `Web Service`.
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Branch: `main`
4. Render will deploy the app from `render.yaml` automatically.

## Notes

- The app listens on `process.env.PORT`.
- The backend stores users in memory and is intended for demo/test only.
- If you want persistent data, replace the in-memory Map with a database.
