// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
//Andrew
//const apiId = 'md5ubzay4a'

const apiId = 'umcee2ickd'

export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`


export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-lpxl6oat.auth0.com',            // Auth0 domain
  clientId: 'rxGPps1mDFEGXC4yohdv0veZS2xoTJ9u',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback' 
}
