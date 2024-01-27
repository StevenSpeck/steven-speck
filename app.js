function setLastUpdateText() {
  const days_since_last_edit = Math.floor(
    (Date.now() - Date.parse("26 Jan 2024")) / (1000 * 60 * 60 * 24)
  );
  const day_or_days = days_since_last_edit === 1 ? " day " : " days ";
  document.getElementById("update_time").innerHTML =
    "Last updated " + days_since_last_edit + day_or_days + "ago";
}

setTimeout(setLastUpdateText, 50);

function calculateEventScores() {
  const formula_values = {
    perf_100: { A: 25.4347, B: 18, C: 1.81, space: "track" },
    perf_lj: { A: 0.14354, B: 220, C: 1.4, space: "field" },
    perf_sp: { A: 51.39, B: 1.5, C: 1.05, space: "field" },
    perf_hj: { A: 0.8465, B: 75, C: 1.42, space: "field" },
    perf_400: { A: 1.53775, B: 82, C: 1.81, space: "track" },
    perf_110: { A: 5.74352, B: 28.5, C: 1.92, space: "track" },
    perf_dt: { A: 12.91, B: 4, C: 1.1, space: "field" },
    perf_pv: { A: 0.2797, B: 100, C: 1.35, space: "field" },
    perf_jt: { A: 10.14, B: 7, C: 1.08, space: "field" },
    perf_1500: { A: 0.03768, B: 480, C: 1.85, space: "track" },
  };

  const performance = document.getElementById("100_perf").value;
  if (formula_values.perf_100.space === "track") {
    document.getElementById("100_score").value = Math.round(
      (formula_values.perf_100.A * (formula_values.perf_100.B - performace)) ^
        formula_values.perf_100.C
    );
  }
}
