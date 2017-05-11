/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

require('dotenv').config();

const testUrl = 'http://localhost:3000/tests.html';

module.exports = (grunt) => {
  const browsers = [
    {
      browserName: 'googlechrome',
      platform: 'WIN10'
    },
    {
      browserName: 'firefox',
      platform: 'linux'
    }
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          base: '',
          port: 9999
        }
      }
    },

    'saucelabs-mocha': {
      all: {
        options: {
          urls: [
            testUrl
          ],
          browsers,
          build: process.env.TRAVIS_JOB_ID,
          testname: 'mocha tests',
          throttled: 1,
          sauceConfig: {
            'video-upload-on-pass': false
          }
        }
      }
    },
    watch: {}
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-saucelabs');

  grunt.registerTask('sauce', ['connect', 'saucelabs-mocha']);
};
