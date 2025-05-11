from pyramid.view import view_config
from pyramid.response import Response
from tugaspert6.models import Matakuliah
from tugaspert6.models.meta import DBSession
import json

@view_config(route_name='mk_list', renderer='json')
def list_mk(request):
    mk_list = DBSession.query(Matakuliah).all()
    return [vars(mk) for mk in mk_list]

@view_config(route_name='mk_create', renderer='json')
def create_mk(request):
    data = request.json_body
    mk = Matakuliah(**data)
    DBSession.add(mk)
    return vars(mk)

@view_config(route_name='mk_detail', renderer='json')
def detail_mk(request):
    id = request.matchdict['id']
    mk = DBSession.get(Matakuliah, id)
    if not mk:
        return Response(json_body={'error': 'Tidak ditemukan'}, status=404)

    if request.method == 'GET':
        return vars(mk)

    elif request.method == 'PUT':
        for k, v in request.json_body.items():
            setattr(mk, k, v)
        return vars(mk)

    elif request.method == 'DELETE':
        DBSession.delete(mk)
        return Response(status=204)
