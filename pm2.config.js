module.exports = {
   apps: [
      {
	name: "server-3001",
	script:"./dist/index.js",
	env: {
             NODE_ENV: "development",
	     APP_ID:"server1",
	     PORT: 3001,
        },
      },
       {
        name: "server-3002",
        script:"./dist/index.js",
        env: {
              NODE_ENV: "development",
              APP_ID:"server2",
	      PORT: 3002,
         },
        },
	{
         name: "server-3003",
         script:"./dist/index.js",
         env: {
               NODE_ENV: "development",
               APP_ID:"server3",
	       PORT: 3003,
          },
        },
       {
	             name: "ngrok",
	             script: "./snap/bin/ngrok",
	             args: "http 80",
	       	     instances: 1,
	             autorestart: true,
	             watch: false,
	             error_file: 'err-prod.log',
	             out_file: 'out-prod.log',
	             log_file: 'combined-prod.log',
       }
],
};

