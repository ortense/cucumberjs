require('babel-register')
require('nightwatch-cucumber')({
  cucumberArgs: ['--require', 'timeout.js', '--require', 'features/step_definitions', '--format', 'pretty', '--format', 'json:reports/cucumber.json', 'features']
})

// http://nightwatchjs.org/guide#settings-file
module.exports = {
	src_folders: [],
	output_folder: '',
	selenium: {
		start_process: true,
		server_path: 'node_modules/selenium-server/lib/runner/selenium-server-standalone-3.0.1.jar',
		host: '127.0.0.1',
		port: 4444,
    cli_args: {
		  'webdriver.gecko.driver': require('geckodriver').path,
      'webdriver.chrome.driver': require('chromedriver').path
		}
	},

	test_settings: {
		default: {
			launch_url: 'http://localhost',
			selenium_port: 4444,
			selenium_host: 'localhost',
			silent: true,
			screenshots: {
				enabled: false,
				path: ''
			},
			desiredCapabilities: {
				browserName: 'firefox',
				javascriptEnabled: true,
				acceptSslCerts: true
			}
		}
	}
}
