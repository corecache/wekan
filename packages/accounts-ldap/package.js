Package.describe({
	name: 'corecache:accounts-ldap',
	version: '1.0.0',
	summary: 'Accounts login handler for LDAP using ldapjs from npm originating from RocketChat',
	git: ''
});

Package.onUse(function(api) {
	api.use('yasaricli:slugify');
	api.use('ecmascript');
	api.use('underscore');
	api.use('sha');

	api.use('templating', 'client');

	api.use('accounts-base', 'server');
	api.use('accounts-password', 'server');

	api.addFiles('client/loginHelper.js', 'client');

	api.mainModule('server/index.js', 'server');
});
