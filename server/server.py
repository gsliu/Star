import urllib
import xmltodict
import json
from flask import Flask, request, Response
from flask_restful import Resource, Api

from datetime import timedelta
from functools import update_wrapper
from flask import make_response, request, current_app
import tarfile


def crossdomain(origin=None, methods=None, headers=None,
                max_age=21600, attach_to_all=True,
                automatic_options=True):
    if methods is not None:
        methods = ', '.join(sorted(x.upper() for x in methods))
    if headers is not None and not isinstance(headers, basestring):
        headers = ', '.join(x.upper() for x in headers)
    if not isinstance(origin, basestring):
        origin = ', '.join(origin)
    if isinstance(max_age, timedelta):
        max_age = max_age.total_seconds()

    def get_methods():
        if methods is not None:
            return methods

        options_resp = current_app.make_default_options_response()
        return options_resp.headers['allow']

    def decorator(f):
        def wrapped_function(*args, **kwargs):
            if automatic_options and request.method == 'OPTIONS':
                resp = current_app.make_default_options_response()
            else:
                resp = make_response(f(*args, **kwargs))
            if not attach_to_all and request.method != 'OPTIONS':
                return resp

            h = resp.headers
            h['Access-Control-Allow-Origin'] = origin
            h['Access-Control-Allow-Methods'] = get_methods()
            h['Access-Control-Max-Age'] = str(max_age)
            h['Access-Control-Allow-Credentials'] = 'true'
            h['Access-Control-Allow-Headers'] = \
                "Origin, X-Requested-With, Content-Type, Accept, Authorization"
            if headers is not None:
                h['Access-Control-Allow-Headers'] = headers
            return resp

        f.provide_automatic_options = False
        return update_wrapper(wrapped_function, f)

    return decorator

app = Flask(__name__)

def search(query): 
    para = {};
    para['q'] = query;
    para['num'] = '5';
    data = urllib.urlencode(para, True)
    f = urllib.urlopen('http://www.vmware.com/searchapp/supportsearchapp/vmware/search.go?%s' % data)
    result = f.read()
    try:
    	doc = xmltodict.parse(result);
    except:
        return ""
    print result
    ret = json.dumps(doc,ensure_ascii=False)
    return ret 
       

@app.route('/search', methods=['GET', 'POST'] )
@crossdomain(origin='*')
def service():
    query = request.form['query']
    print query
    ret = search(query);
    resp = Response(ret, status=200, mimetype='application/json')
    print resp
    return resp 
       

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=8888)


