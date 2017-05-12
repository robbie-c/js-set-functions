/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

require('dotenv').config();

const testUrl = 'http://localhost:3000/tests.html';

module.exports = (grunt) => {
  const browsers = [
    {
      browserName: 'safari',
      platform: 'macOS 10.12',
    },
    {
      browserName: 'safari',
      platform: 'OS X 10.8',
      version: '6.0'
    },
    {
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: '9.0'
    },
    {
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: '11.0'
    },
    {
      browserName: 'microsoftedge',
      platform: 'Windows 10'
    },
    {
      browserName: 'googlechrome',
      platform: 'Windows 10'
    },
    {
      browserName: 'firefox',
      platform: 'linux'
    },
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
          testname: 'js-set-functions mocha tests',
          throttled: 5,
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
