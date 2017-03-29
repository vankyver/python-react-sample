from flask import Blueprint, jsonify, request

api = Blueprint('api', __name__)

SAMPLE_TASKS = ['eat', 'sleep', 'code', 'repeat']


@api.route('/api/tasks', methods=['GET', 'PUT'])
def main():

    if request.method == 'PUT':
        data = request.get_json()
        SAMPLE_TASKS.append(data.get('newTask'))
        return jsonify(status='OK', data=SAMPLE_TASKS)

    return jsonify(status='OK', data=SAMPLE_TASKS)
