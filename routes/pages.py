from flask import Blueprint, render_template, abort, jsonify, request

pages = Blueprint('site', __name__)


@pages.route('/', defaults={'path': ''})
@pages.route('/<path:path>')
def index(path):
    return render_template('index.html')

