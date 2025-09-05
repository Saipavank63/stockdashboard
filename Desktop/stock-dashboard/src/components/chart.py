def generate_stock_chart(data):
    import matplotlib.pyplot as plt

    # Assuming data is a dictionary with dates as keys and stock prices as values
    dates = list(data.keys())
    prices = list(data.values())

    plt.figure(figsize=(10, 5))
    plt.plot(dates, prices, marker='o')
    plt.title('Stock Prices Over Time')
    plt.xlabel('Date')
    plt.ylabel('Price')
    plt.xticks(rotation=45)
    plt.grid()
    plt.tight_layout()

    # Save the chart as an image
    plt.savefig('static/images/stock_chart.png')
    plt.close()

def render_chart():
    # This function would be used to render the chart in the dashboard
    pass