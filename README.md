# Weather Website

This is a simple weather application built using Express.js. The application takes a city name as input from the user and provides the current weather information for that city.
## Features

- **Search by Location**: Users can enter a city or location to get the current weather details.
- **Display Weather Information**: The website displays temperature, humidity, wind speed, and weather conditions.
- **Responsive Design**: The UI is designed to work well on both desktop and mobile devices.
- **Error handeling**:Error handling for invalid city names or API issues.

## Setup
- To set up and run this project locally, follow these steps:

### Prerequisites
- Node.js and npm installed on your system.
- Nodemon installed globally (optional, for development).

  **Installation**
 1. Clone the repository by:
     ***git clone <repository-url>***
      ***cd weather***
2. Install dependencies:
     ***npm install***
3. Get your API key:
    Sign up at OpenWeatherMap to get your API key.
    Create a .env file in the root directory and add your API key:
   
## Running the application
To run the application, use the following command:
    ***nodemon app.js***
This will start the server, and you can access the application at http://localhost:3000.

## Project Structure
**app.js**: Main entry point of the application.
**views**: Contains Handlebars view templates.
**index.hbs**: Home page where users can input the city name.
**weather.hbs**: Displays the weather information.
**about.hbs**: About page.
**error.hbs**: Error page for handling errors.

## Usage
Open your browser and go to http://localhost:3000.
Enter the city name in the input field and click the submit button.
The current weather information for the entered city will be displayed.

## Dependencies
**Express.js**: Web framework for Node.js.

**Handlebars**: Templating engine.
**Axios**: Promise-based HTTP client for making API requests.
**dotenv:** Module to load environment variables from a .env file

  



