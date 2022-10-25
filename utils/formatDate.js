export function formatDate({ date }) {
  if (date !== null) {
    let dateArray = date.split("-");
    let day = dateArray[2].split("T")[0];
    return day + "/" + dateArray[1] + "/" + dateArray[0];
  } else {
    return "No Date";
  }
}
