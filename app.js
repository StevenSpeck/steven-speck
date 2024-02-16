function setLastUpdateText() {
  const days_since_last_edit = Math.floor(
    (Date.now() - Date.parse("16 Feb 2024")) / (1000 * 60 * 60 * 24)
  );
  const day_or_days = days_since_last_edit === 1 ? " day " : " days ";
  document.getElementById("update_time").innerHTML =
    "Last updated " + days_since_last_edit + day_or_days + "ago";
}

setTimeout(setLastUpdateText, 50);

const formula_values = {
  perf_100: { A: 25.4347, B: 18, C: 1.81, space: "track", D: 1 },
  perf_lj: { A: 0.14354, B: 220, C: 1.4, space: "field", D: 100 },
  perf_sp: { A: 51.39, B: 1.5, C: 1.05, space: "field", D: 1 },
  perf_hj: { A: 0.8465, B: 75, C: 1.42, space: "field", D: 100 },
  perf_400: { A: 1.53775, B: 82, C: 1.81, space: "track", D: 1 },
  perf_110: { A: 5.74352, B: 28.5, C: 1.92, space: "track", D: 1 },
  perf_dt: { A: 12.91, B: 4, C: 1.1, space: "field", D: 1 },
  perf_pv: { A: 0.2797, B: 100, C: 1.35, space: "field", D: 100 },
  perf_jt: { A: 10.14, B: 7, C: 1.08, space: "field", D: 1 },
  perf_1500: { A: 0.03768, B: 480, C: 1.85, space: "track", D: 1 },
};

const event_list = [
  "100",
  "lj",
  "sp",
  "hj",
  "400",
  "110",
  "dt",
  "pv",
  "jt",
  "1500",
];

function calculateEventScores() {
  const day_1_events = ["100", "lj", "sp", "hj", "400"];

  const day_2_events = ["110", "dt", "pv", "jt", "1500"];

  let totalScore = 0;
  let eventScore = 0;
  let day_1_score = 0;
  let day_2_score = 0;

  for (let i = 0; i < 10; i++) {
    const event = event_list[i];

    if (formula_values["perf_" + event].space === "track") {
      eventScore = Math.round(
        formula_values["perf_" + event].A *
          (formula_values["perf_" + event].B -
            formula_values["perf_" + event].D *
              document.getElementById("perf_" + event).value) **
            formula_values["perf_" + event].C
      );
      document.getElementById("score_" + event).value = eventScore;
    }
    if (formula_values["perf_" + event].space === "field") {
      eventScore = Math.round(
        formula_values["perf_" + event].A *
          (formula_values["perf_" + event].D *
            document.getElementById("perf_" + event).value -
            formula_values["perf_" + event].B) **
            formula_values["perf_" + event].C
      );
      document.getElementById("score_" + event).value = eventScore;
    }
    if (day_1_events.includes(event)) {
      day_1_score += eventScore;
    }
    if (day_2_events.includes(event)) {
      day_2_score += eventScore;
    }
    totalScore += eventScore;
  }
  document.getElementById("final_total").innerText = "Total: " + totalScore;
  document.getElementById("day_1_total").innerText =
    "Day 1 Total: " + day_1_score;
  document.getElementById("day_2_total").innerText =
    "Day 2 Total: " + day_2_score;
}

function calculateEventPerformance() {
  let performance = 0;
  let score = 0;
  for (let i = 0; i < 10; i++) {
    const event = event_list[i];
    score = document.getElementById("score_" + event).value;

    if (formula_values["perf_" + event].space === "track") {
      performance =
        formula_values["perf_" + event].B -
        (score / formula_values["perf_" + event].A) **
          (1 / formula_values["perf_" + event].C);

      document.getElementById("perf_" + event).value = (
        Math.round((performance / formula_values["perf_" + event].D) * 100) /
        100
      ).toFixed(2);
    }
    if (formula_values["perf_" + event].space === "field") {
      performance =
        formula_values["perf_" + event].B +
        (score / formula_values["perf_" + event].A) **
          (1 / formula_values["perf_" + event].C);
      document.getElementById("perf_" + event).value = (
        Math.round((performance / formula_values["perf_" + event].D) * 100) /
        100
      ).toFixed(2);
    }
  }
}

function arithmeticProblem() {
  document.getElementById().innerHTML(<></>);

  let i = 0;
  for (let i = 0; i < 30; i++) {
    let solved = document.getElementsByClassName("problem");
  }
}
