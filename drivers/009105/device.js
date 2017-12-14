'use strict';

const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class P009105 extends ZwaveDevice {
	onMeshInit() {
		// this.enableDebug();
		// this.printNode();
		this.registerCapability('onoff', 'SWITCH_BINARY');
	}
}
module.exports = P009105;
