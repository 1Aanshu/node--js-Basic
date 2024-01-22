const getTime = () => {
  const time = new Date();
  const Day = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const watchDay = Day[time.getDay()];
  const watchDate = time.getDate();
  const Month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const watchMonth = Month[time.getMonth()];
  const Year = time.getFullYear();
  const watchTime = time.toLocaleTimeString();
  return String(watchDay).concat(
    " ",
    watchDate,
    " ",
    watchMonth,
    " ",
    Year,
    " ",
    watchTime
  );
};

module.exports = { getTime };
