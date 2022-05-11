export function cls(...classnames) {
  return classnames.join(" ");
}

export const identifyUserName = (userCookie, socialUser) => {
  console.log(userCookie);
  console.log(socialUser);
  if (
    userCookie === undefined || userCookie.user_name === ""
      ? socialUser.name
      : userCookie.user_name
  ) {
    return socialUser.name;
  } else {
    return userCookie.user_name;
  }
};

export const identifyUserId = (userCookie, socialUser) => {
  if (
    userCookie === undefined || userCookie.user_id === ""
      ? socialUser.email
      : userCookie.user_id
  ) {
    return socialUser.email;
  } else {
    return userCookie.user_id;
  }
};
