'use strict';

const Nodal = require('nodal');
const cluster = require('cluster');

if (cluster.isMaster) {

  const daemon = Nodal.require('app/daemon.js');
  daemon.start(Nodal.my.Config.secrets.port);

} else {
  var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
  var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

  const app = new Nodal.Application();
  app.listen(server_port, server_ip_address);

}
