const nodemon = require('nodemon');
const server = require('../server');

nodemon({
  script: './node_modules/react-scripts/bin/react-scripts.js',
  args: ['start'],
  restartable: 'rs',
  ignore: ['.git', 'node_modules', 'node_modules', 'public', 'src', 'test'],
  watch: ['app.js', 'config/**/*.js', 'server.js'],
  verbose: true,
  ext: 'js',
  delay: '500',
  env: {
    ...process.env,
    REACT_APP_SERVER: 'http://localhost:5000',
  },
});

nodemon
  .on('start', function() {
    console.log('React development server: start');
  })
  .on('quit', function() {
    console.log('React development server: exit');
    server.close(() => {
      process.exit();
    });
  })
  .on('restart', function(files) {
    console.log('React development server restarted due to: ', files);
    server.on('close', function() {
      server.listen(3000);
    });
  });
