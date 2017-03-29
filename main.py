from flask import Flask
from flask import request
from flask import send_from_directory

from routes.api import api
from routes.pages import pages

app = Flask(__name__, static_folder='static', template_folder='templates')

# Register routes
app.register_blueprint(api)
app.register_blueprint(pages)


# Serve static
@app.route('/js/<path:path>', endpoint='static/js')
@app.route('/css/<path:path>', endpoint='static/css')
@app.route('/fonts/<path:path>', endpoint='static/fonts')
def send_js(path):
    return send_from_directory(request.endpoint, path)

if __name__ == '__main__':
    app.run(debug=True)
