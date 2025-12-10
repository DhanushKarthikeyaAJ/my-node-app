module.exports = {
  apps: [{
    name: 'my-node-app',
    script: './server.js',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
