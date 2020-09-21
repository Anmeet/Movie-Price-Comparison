# Movie-Price-Comparison

PREREQUISITES
# Install NodeJs in your computer
#Install yarn

PROCEDURE:
1. Download the zip folder from the github and Unzip it.
2. In the Project Directory, Run the command "yarn install"
3. Run the Command "yarn run dev-server"
4. Open "http://localhost:8080" to view it in the browser.

Testing:
1. To run the test, type "yarn test" in the project directory.

Live DEMO:
The project is also deployed on Heroku. So you can visit the following link to view the project running live.
"https://compare-movie-price.herokuapp.com/"

Note:
1. When you visit the project url, you will find the login box. Sign into the project using google ID and You will be directed to the dashboard.
2. You may see at certain time that the image, price and title is not displayed on the client side. I would like to tell you that, it is not the
problem on the client side. There is the problem with the API you have provided. I have even tested your API on the postman. I recieve 502 Bad Gateway
message some times while fetching data from API.
3. I have used express server for serving public directory in Production so that project can be deployed in heroku.
4. Firebase is used for Authentication for this project.
5. React-Redux is used for changing the state of Login and Logout.
6. JEST and Enzyme are used for TDD.
7. .env.development and .env.test file contains the Firebase database details for development and for testing.
8. SCSS is used for UI design. This application is fully responsive on the desktop as well as mobile devices.
9.I have also created the Private Route and Public Route so that only the login user can access the route. If the user is not authenticated then they are redirected
to the login page.
10. There is a Not found page. This page is displayed when user visits to any other route that is not assigned in this application.
11. A loader component is created that displays the spinner until the data is fetched from the API.
12. Webpack is used to create the React application. webpack.config.js file contains all the configuration of the project such as configuring SCSS, choosing between 
production, development and test mode and building a bundle file.





