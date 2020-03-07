FROM node:lts-alpine

# make the 'app' folder the current working directory
WORKDIR /app/

# copy package.json to the /app/ folder
COPY package.json ./

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# expose port 3000 to the host
EXPOSE 3000

# run the development server
CMD ["sh", "start_dev.sh"]
