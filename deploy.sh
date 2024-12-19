#!/bin/bash

#Initial Configration
PROJECT_DIR="/home/mrinal"
GIT_REPO="https://github.com/MrinalVarshney/Server-Hosting-CC"
BRANCH="main"
	
cd $PROJECT_DIR || { echo "Project directory not found!"; exit 1; }
# # Fetch the latest changes from GitHub
echo "Fetching latest changes from GitHub..."
git fetch origin

# # Checkout the desired branch (usually 'main' or 'master')
echo "Switching to branch $BRANCH..."
git checkout $BRANCH
	
# # Pull the latest changes
echo "Pulling latest changes from $BRANCH..."
git pull origin $BRANCH || { echo "Git pull failed!"; exit 1; }
	
# # Install/update dependencies (for example, for Node.js app)
echo "Installing dependencies..."
npm install || { echo "npm install failed!"; exit 1; }

# # Restart the server using PM2
echo "Restarting PM2 processes..."
pm2 restart all || { echo "PM2 restart failed!"; exit 1; }

# # Display the PM2 status
echo "Displaying PM2 status..."
pm2 status

# # Deployment complete
echo "Deployment complete!"

