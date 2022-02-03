import UAParser from 'ua-parser-js';

const parser = new UAParser();
let result = parser.getResult();

function addClass(category, value) {
	value = value.toString().toLowerCase().replace(/[\s.]/g, '-');

	document.documentElement.classList.add(`is-${category}-${value}`);
}

if (result.device) {
	if (result.device.model) {
		addClass('device', result.device.model);
	}

	if (result.device.type) {
		addClass('device', result.device.type);
	}
} else {
	addClass('device', 'desktop');
}

if (result.os.name) {
	let linuxOS = [
		'fedora',
		'debian',
		'gentoo',
		'linpus',
		'mageia',
		'mandriva',
		'meego',
		'mint',
		'pclinuxos',
		'redhat',
		'sailfish',
		'slackware',
		'suse',
		'tizen',
		'ubuntu',
		'vectorlinux',
	];

	if (linuxOS.indexOf(result.os.name.toLowerCase()) !== -1) {
		addClass('os', 'linux');
	}

	addClass('os', result.os.name);

	if (result.os.version) {
		addClass('os', result.os.name);
	}
}

if (result.engine.name) {
	addClass('engine', result.engine.name);
}

if (result.browser.name) {
	addClass('browser', result.browser.name);
}

export default UAParser;
