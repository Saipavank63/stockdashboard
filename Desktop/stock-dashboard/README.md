# Stock Market Dashboard

This project is a dynamic stock market dashboard built using Python and Flask. It provides an attractive and simple interface for users to view stock market data and visualize it through interactive charts.

## Features

- Real-time stock market data visualization
- Interactive charts for better data representation
- User-friendly interface with a responsive design
- Easy navigation through the dashboard

## Project Structure

```
stock-dashboard
├── src
│   ├── app.py                # Main entry point of the application
│   ├── components            # Contains reusable components
│   │   ├── chart.py          # Functions for generating stock charts
│   │   ├── header.py         # Renders the header component
│   │   └── sidebar.py        # Renders the sidebar component
│   ├── data                  # Data handling
│   │   └── stock_data.py     # Functions to fetch and process stock data
│   ├── static                # Static files (CSS, JS)
│   │   ├── css
│   │   │   └── styles.css    # CSS styles for the dashboard
│   │   └── js
│   │       └── main.js       # JavaScript for client-side interactivity
│   └── templates             # HTML templates
│       ├── base.html         # Base template for the application
│       ├── dashboard.html     # Main dashboard view
│       └── index.html        # Landing page template
├── requirements.txt          # Python dependencies
├── config.py                 # Configuration settings
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd stock-dashboard
   ```
3. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

## Usage

1. Run the application:
   ```
   python src/app.py
   ```
2. Open your web browser and go to `http://127.0.0.1:5000` to view the dashboard.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.