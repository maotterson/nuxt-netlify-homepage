require('dotenv').config()
const axios = require('axios')

const handler = async (event) => {
  //retrieve access token via refresh token
  const strava = 
  {
    strava_token_url: `https://www.strava.com/oauth/token?client_id=${process.env.strava_client_id}&client_secret=${process.env.strava_client_secret}&refresh_token=${process.env.strava_refresh_token}&grant_type=refresh_token`,
    strava_activities_url: 'https://www.strava.com/api/v3/athlete/activities?access_token='
  }
  const tokenResponse = await axios({
    method: 'post',
    url: strava.strava_token_url
  })
  const access_token = tokenResponse.data.access_token
  const response = await axios({
    method: 'get',
    url: strava.strava_activities_url+access_token
  })
  //-----------------------------------------------------------

  //handle the strava response data
  const activities = response.data
  const data = []
  for(activity of activities){
    const newActivity = {
      type: activity.type,
      info: null
    }
    if(activity.type === "Walk"){
      newActivity.info = {
        distance: activity.distance,
        time: activity.elapsed_time,
        date: activity.start_date_local
      }
    }
    else if(activity.type == "WeightTraining"){
      newActivity.info = {
        category: activity.name,
        time: activity.elapsed_time,
        date: activity.start_date_local
      }
    }
    else if(activity.type == "Workout"){
      newActivity.info = {
        category: activity.name,
        time: activity.elapsed_time,
        date: activity.start_date_local
      }
    }
    data.push(newActivity)
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  }
}

module.exports = { handler }
