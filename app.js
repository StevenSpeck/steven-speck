function setLastUpdateText() {
  const milliseconds_since_last_edit = Math.floor(
    (Date.now() - Date.parse("06 Dec 2023")) / (1000 * 60 * 60 * 24)
  );
  document.getElementById("update_time").innerHTML =
    "Last updated " + milliseconds_since_last_edit + " days ago";
}

setLastUpdateText();
