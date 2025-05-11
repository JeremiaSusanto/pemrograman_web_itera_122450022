def includeme(config):
    config.add_route('mk_list',    '/matakuliah',       request_method='GET')
    config.add_route('mk_create',  '/matakuliah',       request_method='POST')
    config.add_route('mk_detail',  '/matakuliah/{id}',  request_method=('GET', 'PUT', 'DELETE'))
