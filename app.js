function setLastUpdateText() {
  const days_since_last_edit = Math.floor(
    (Date.now() - Date.parse("22 Jan 2024")) / (1000 * 60 * 60 * 24)
  );
  const day_or_days = days_since_last_edit === 1 ? " day " : " days ";
  document.getElementById("update_time").innerHTML =
    "Last updated " + days_since_last_edit + day_or_days + "ago";
}

setTimeout(setLastUpdateText, 50);
