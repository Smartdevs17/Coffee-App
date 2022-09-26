/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-7yinrn65.us.auth0.com', // the auth0 domain prefix
    audience: 'coffee', // the audience set for the auth0 app
    clientId: 'zGzLwsU4xd1nrtpYGavHYWMr3btzlss7', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:5000/coffeeapp/login', // the base url of the running ionic application. 
  }
};
