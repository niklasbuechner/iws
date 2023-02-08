let tests = [
  {
    type: "letter",
    country: "Deutschland",
    plz: "69115",
    expectedAccount: "23",
  },
  {
    type: "parcel",
    country: "Deutschland",
    plz: "69115",
    expectedAccount: "23",
  },
  {
    type: "bulky",
    country: "Deutschland",
    plz: "69115",
    expectedAccount: "23",
  },
  {
    type: "parcel",
    country: "Deutschland",
    plz: "69115",
    isExpress: true,
    expectedAccount: "23",
  },
  {
    type: "parcel",
    country: "Deutschland",
    plz: "64285",
    isExpress: true,
    expectedAccount: "8",
  },
  {
    type: "parcel",
    country: "Österreich",
    plz: "1014",
    isExpress: true,
    expectedAccount: "8",
  },
  {
    type: "parcel",
    country: "USA",
    plz: "8372",
    isExpress: true,
    expectedAccount: "21",
  },
  {
    type: "bulky",
    country: "Deutschland",
    plz: "64285",
    isExpress: true,
    expectedAccount: "9",
  },
  {
    type: "bulky",
    country: "USA",
    plz: "40264",
    isExpress: true,
    expectedAccount: "21",
  },
  {
    type: "parcel",
    country: "Deutschland",
    plz: "64285",
    weight: 4,
    expectedAccount: "1",
  },
  {
    type: "letter",
    country: "England",
    plz: "03753",
    expectedAccount: "10",
  },
  {
    type: "parcel",
    country: "England",
    plz: "03753",
    expectedAccount: "11",
  },
  {
    type: "bulky",
    country: "England",
    plz: "7500",
    expectedAccount: "12",
  },
  {
    type: "parcel",
    country: "England",
    plz: "7500",
    isDangerous: true,
    expectedAccount: "22",
  },
  {
    type: "letter",
    country: "Deutschland",
    plz: "64285",
    isDangerous: true,
    expectedAccount: "3",
  },
  {
    type: "letter",
    country: "Österreich",
    plz: "1014",
    isDangerous: true,
    expectedAccount: "22",
  },
  {
    type: "letter",
    country: "USA",
    plz: "2940",
    isDangerous: true,
    expectedAccount: "20",
  },
  {
    type: "bulky",
    country: "USA",
    plz: "2940",
    expectedAccount: "21",
  },
  {
    type: "parcel",
    country: "USA",
    plz: "2940",
    expectedAccount: "21",
  },
  {
    type: "bulky",
    country: "Deutschland",
    plz: "68477",
    expectedAccount: "6",
  },
  {
    type: "bulky",
    country: "Österreich",
    plz: "1014",
    expectedAccount: "7",
  },
  {
    type: "letter",
    country: "Österreich",
    plz: "1010",
    expectedAccount: "2",
  },
  {
    type: "parcel",
    country: "Österreich",
    plz: "1014",
    expectedAccount: "5",
  },
  {
    type: "letter",
    country: "Deutschland",
    plz: "68477",
    expectedAccount: "1",
  },
  {
    type: "parcel",
    country: "Deutschland",
    plz: "96584",
    expectedAccount: "4",
  },
];

function clickEvents(tests, getAccount) {
  document.getElementById("alert_output").innerHTML = "";
  runTests(tests, getAccount);
}

window.addEventListener("load", () => {
  setupAnimationInElement("animation");
  renderTests(tests);
  setTest(tests[0]);
  document
    .getElementById("runTests")
    .addEventListener("click", () => clickEvents(tests, getAccount));
});
