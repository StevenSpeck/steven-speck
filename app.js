function setLastUpdateText() {
  const milliseconds_since_last_edit = Math.floor(
    (Date.now() - Date.parse("05 Dec 2023")) / (1000 * 60 * 60 * 24)
  );
  document.getElementById("time").innerHTML =
    "Last updated " + milliseconds_since_last_edit + " days ago";
}

setLastUpdateText();
