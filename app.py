import csv, json
from datetime import datetime
from flask import Flask, render_template

app = Flask(__name__)
data = {}

input = {
    "data": 'data/summary.csv',
    "trend": 'data/trend.csv'
}

methods = ['POST', 'GET']

roots = ['date', 'casConfirmes', 'hospitalises', 'gueris', 'reanimation', 'deces', 'casEhpad', 'casConfirmesEhpad', 'decesEhpad']
for type in input:
    data[type] = {}
    with open(input[type]) as document:
        reader = csv.reader(document, delimiter=';')
        field = next(document).split(';')
        for row in reader:
            dt = datetime.strptime(row[0], '%Y-%m-%d')
            index = dt.strftime('%Y%m%d')
            category = {}
            # bloc = []
            last = None
            for key, value in enumerate(row):
                if field[key] in roots:
                    last = field[key]
                    category[last] = {}
                    category[last]['current'] = (value or None)
                else:
                    category[last][field[key]] = (value or None)
                # bloc.append({field[key]:(value or None)})
            data[type][index] = category


# Catalog
@app.route('/options', methods=['GET'])
def map_site():
    output = '<h1>Endpoints</h1><br/>'
    output += ''.join([f'/<b>{x}</b>/ {y}<br/>' for x in data for y in methods])
    output += '---<br/>'
    output += ''.join([f'/<b>{x}/last</b> {y}<br/>' for x in data for y in methods])
    output += '---<br/>'
    output += ''.join(['/<b>{}/[date]</b> {}<br/>'.format(x, y) for x in data for y in methods])
    output += '---<br/>'
    output += ''.join(['/<b>{}/[date]/[category]</b> {}<br/>'.format(x, y) for x in data for y in methods])
    output += '---<br/>'
    output += ''.join(['/<b>{}/[date]/[category]/[subcategory]</b> {}<br/>'.format(x, y) for x in data for y in methods])
    output += '---<br/>'
    for type in data:
        for date in sorted(data[type], reverse=True):
            for category in data[type][date]:
                for method in methods:
                    output += '/<b>{}/{}/{}</b> {}<br/>'.format(type, date, category, method)
                    for subcat in data[type][date][category]:
                        output += '/<b>{}/{}/{}/{}</b> {}<br/>'.format(type, date, category, subcat, method)
    return output

@app.route('/<type>', methods=methods)
def all_value(type):
    return json.dumps(data[type], sort_keys=True, ensure_ascii=True)

@app.route('/<type>/last', methods=methods)
def last_one(type):
    date = sorted(data[type].keys())[-1]
    return json.dumps(data[type][date], ensure_ascii=True)

@app.route('/<type>/<date>', methods=methods)
def by_date(type, date):
    return json.dumps(data[type][date], ensure_ascii=True)

@app.route('/<type>/<date>/<category>', methods=methods)
def by_cat(type, date, category):
    return json.dumps(data[type][date][category], ensure_ascii=True)

@app.route('/<type>/<date>/<category>/<subcategory>', methods=methods)
def by_subcat(type, date, category, subcategory):
    return json.dumps(data[type][date][category][subcategory], ensure_ascii=True)

# Serve basic view from templates folder
@app.route('/', methods=['GET'])
def home():
    return render_template("index.html")

# Handle assets
@app.route('/templates/<file>', methods=['GET'])
def assets(file):
    return render_template(file)

