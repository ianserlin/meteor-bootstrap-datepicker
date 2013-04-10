Package.describe({
  summary: 'Bootstrap 3.x supporting datepicker'
});

Package.on_use(function (api, where) {
  api.add_files('lib/bootstrap-datepicker/js/bootstrap-datepicker.js', 'client');
  api.add_files('lib/bootstrap-datepicker/less/datepicker.less', 'client');
});