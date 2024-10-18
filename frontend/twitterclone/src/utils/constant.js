export const USER_API_END_POINT =
  "https://twitter-clone-o219.onrender.com/api/v1/user";
export const TWEET_API_END_POINT =
  "https://twitter-clone-o219.onrender.com/api/v1/tweet";
export const timeSince = (timestamp) => {
  let time = new Date(timestamp).getTime(); // Use getTime() to get the timestamp in ms
  let now = Date.now();

  if (isNaN(time)) {
    return "Invalid date"; // Handle invalid timestamps
  }

  let secondsPast = (now - time) / 1000;

  if (secondsPast < 0) {
    return "In the future"; // Handle future timestamps
  }

  let suffix = "ago";

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    if (secondsPast >= seconds) {
      const count = Math.floor(secondsPast / seconds);
      return `${count} ${unit}${count > 1 ? "s" : ""} ${suffix}`;
    }
  }

  return "Just now"; // If time difference is less than 1 second
};
