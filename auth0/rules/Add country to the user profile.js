function addCountry(user, context, callback) {
  if (context.request.geoip) {
    context.idToken.country = context.request.geoip.country_name
    context.idToken.timezone = context.request.geoip.time_zone
  }

  callback(null, user, context)
}
