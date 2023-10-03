// pm2 설정 파일
module.exports = {
  apps: [
    {
      name: "app",
      script: "./app.js",
      instances: "8",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
  wait_ready: true,
  listen_timeout: 50000,
  kill_timeout: 5000,
};
