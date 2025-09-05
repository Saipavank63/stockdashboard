from data.stock_data import fetch_stock_data
from components.sidebar import render_sidebar
from components.header import render_header
from components.chart import render_chart
from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', header=render_header(), sidebar=render_sidebar())


@app.route('/dashboard')
def dashboard():
    stock_data = fetch_stock_data()
    chart = render_chart(stock_data)
    return render_template('dashboard.html', header=render_header(), sidebar=render_sidebar(), chart=chart)


if __name__ == '__main__':
    app.run(debug=True)
