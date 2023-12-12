function setLastUpdateText() {
  const days_since_last_edit = Math.floor(
    (Date.now() - Date.parse("12 Dec 2023")) / (1000 * 60 * 60 * 24)
  );
  document.getElementById("update_time").innerHTML =
    "Last updated " + days_since_last_edit + " days ago";
}

setTimeout(setLastUpdateText, 500);
