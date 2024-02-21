module.exports = {
    apps : [{
      name: 'API TEST',
      script: 'server.js',
      out_file: "./logs/console.log",
      error_file: "./logs/error.log",
      env: {
        PORT: 8081 // Change the port number here
      }
    }]
  }
  