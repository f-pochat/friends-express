# Friends Express
# fede 
## Required Dependencies
node, npm and docker

   nvm: https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/
   
   docker: https://docs.docker.com/get-docker/ (Install docker desktop)

## How to run the server
1. Clone the repo
2. On the repo, run `docker compose up -d`
3. Add a .env file with `DATABASE_URL=postgres://postgres:password@localhost:5432/postgres` in it
4. Run `npm install` to install the required dependencies
5. Run `npm run db:make-migrations` to make the Prisma Migrations
6. Run `npm run dev` to run the server in dev mode. (You can run `npm run build` and then `npm run prod` to run in production mode)
