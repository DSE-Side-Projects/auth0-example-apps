function defaultPictureForNullAvatars(user, context, callback) {
  console.log(user.user_id.indexOf("twitter"))
  if (
    user.picture.indexOf("cdn.auth0.com") > -1 ||
    user.user_id.indexOf("twitter") > -1
  ) {
    console.log("fetching new avatar")
    const url = require("url")
    const u = url.parse(user.picture, true)
    const userPicture = `https://api.adorable.io/avatars/285/${user.user_id}.png`
    delete u.search
    user.picture = url.format(userPicture)
  }
  console.log(user.picture)
  callback(null, user, context)
}
