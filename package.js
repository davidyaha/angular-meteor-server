Package.describe({
  name: 'netanelgilad:angular-server',
  version: '1.4.7',
  summary: 'Develop FullStack applications with the Angular framework!',
  git: 'http://github.com/netanelgilad/angular-meteor-server',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript', 'server');
  api.use('http', 'server');
  api.use('modules', 'client');

  api.use('angular@1.3.9_2', 'client');
  api.use('netanelgilad:polyfill-angular-server@1.4.0', 'server');
  api.imply('netanelgilad:polyfill-angular-server@1.4.0', 'server');

  api.addFiles('angular-meteor-client.js', 'client');
  api.addFiles('angular-meteor-server.js', 'server');
  api.addFiles('angular-meteor-common.js');

  // server modules
  api.addFiles('modules/httpBackend.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:angular-server');
  api.addFiles('angular-server-tests.js');
});
