const functions = {
  gradeClassifier: (grade) => {
    // TODO: Write code here
    if (isNaN(grade)) {
      return "Invalid grade input. Grade should be numerical (0-100).";
    } else if (grade < 0) {
      return "Invalid grade input. Grade is less than minimum numerical grade (0).";
    } else if (grade < 75) {
      return "D, Did not Meet Expectation";
    } else if (grade < 80) {
      return "N, Needs Improvement";
    } else if (grade < 85) {
      return "S, Satisfactory";
    } else if (grade < 90) {
      return "G, Good";
    } else if (grade < 95) {
      return "V, Very Good";
    } else if (grade <= 100) {
      return "O, Outstanding";
    } else {
      return "Invalid grade input. Grade is greater than maximum numerical grade (100).";
    }
  }
}

module.exports = functions;
