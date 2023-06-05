## Project Title

JPMC SWE Task 3 - Stock Price Monitoring with Perspective

## Description

This project is part of the JPMC Software Engineering Virtual Experience Program. It focuses on creating a web application that utilizes the Perspective library to visualize and monitor stock price data in real-time. The application provides traders with a clear and visually appealing chart that displays the ratio between two stock prices and tracks the upper and lower bounds of the ratio.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Thought Process](#thought-process)
- [Insights](#insights)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Fork and clone the project repository: [https://github.com/theforage/forage-jpmc-swe-task-3](https://github.com/theforage/forage-jpmc-swe-task-3)
2. Create a new virtual environment in the project root.
3. Install the Python dependencies listed in the `requirements.txt` file.
4. Install the necessary Node.js dependencies by running `npm install` in the project repository.

## Usage

1. Start the Python server by running `python datafeed/server3.py` from the root of the project repository.
2. Start the client application by running `npm start` in the project repository.
3. Access the application in your web browser at `http://localhost:3000`.

## Features

- Displays a live graph that visualizes the ratio between two stock prices.
- Tracks upper and lower bounds of the ratio to identify potential trading opportunities.
- Alerts traders when the ratio crosses the bounds.
- Provides a clear and visually appealing interface for monitoring stock price data.

## Thought Process

To arrive at the final chart displayed in the application, several code changes were made. Firstly, the datafeed was updated to fetch real-time stock price data from a reliable source. Next, the Perspective library was integrated to create an interactive and dynamic graph. The chart was customized to show the ratio between two stock prices, allowing traders to compare their performance. Additionally, upper and lower bounds were added to the chart to highlight potential trading opportunities. These code changes were implemented to provide traders with a comprehensive and intuitive tool for monitoring stock price data.

## Insights

By analyzing the new display, traders can draw valuable insights from the stock price data. The ratio between two stock prices allows traders to identify relative performance and assess investment opportunities. When the ratio crosses the upper bound, it indicates that one stock is outperforming the other, potentially signaling a sell opportunity for the stronger stock. Conversely, when the ratio drops below the lower bound, it suggests an undervalued stock, presenting a potential buying opportunity. Traders can leverage these insights to make informed decisions and optimize their trading strategies.

## Contributing

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
