require('dotenv').config()
const axios = require('axios')

const handler = async (event) => {
  const strava = 
  {
    strava_token_url: `http://www.strava.com/oauth/token?client_id=${process.env.strava_client_id}&client_secret=${process.env.strava_client_secret}&refresh_token=${process.env.strava_refresh_token}&grant_type=refresh_token`,
    strava_activities_url: 'https://www.strava.com/api/v3/athlete/activities?access_token=',
    strava_client_id: process.env.strava_client_id,
    strava_client_secret: process.env.strava_client_secret,
    strava_refresh: process.env.strava_refresh_token
  }
  try {
    const token_response = await axios.post(strava.strava_token_url)
    console.log(token_response.token_type)
    const access_token = token_response.access_token

    const activities_response = await axios.get(strava.strava_activities_url+access_token)

    
    return {
      statusCode: 200,
      body: JSON.stringify({ activity: activities_response[0] }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
