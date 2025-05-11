from pyramid.config import Configurator
from .models import get_engine, get_session_factory, get_tm_session



def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    with Configurator(settings=settings) as config:
        config.include('pyramid_jinja2')
        config.include('.models')
        config.include('.routes')
        config.include('pyramid_tm')  # ⬅️ Tambahkan baris ini jika belum ada
        config.include('pyramid_retry')  # optional tapi umum dipakai
        engine = get_engine(settings)
        session_factory = get_session_factory(engine)
        config.registry['dbsession_factory'] = session_factory
        config.add_request_method(
            lambda r: get_tm_session(session_factory, r.tm),
            'dbsession',
            reify=True
        )
        config.scan()
    return config.make_wsgi_app()
