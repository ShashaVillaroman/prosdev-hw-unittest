const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Grade Classifier', () => {

  it('When final grade value is less than 0, then display that it is an invalid grade', () => {
    // Arrange
    const input1 = -1;
    const input2 = -0.999999;
    const input3 = -99.99999999999;
    const input4 = -95;
    const expectedClass = "Invalid grade input. Grade is less than minimum numerical grade (0).";
    // Act
    const result1 = gradeClassifier(input1);
    const result2 = gradeClassifier(input2);
    const result3 = gradeClassifier(input3);
    const result4 = gradeClassifier(input4);
    // Assert
    expect(result1).toBe(expectedClass);
    expect(result2).toBe(expectedClass);
    expect(result3).toBe(expectedClass);
    expect(result4).toBe(expectedClass);
  });
  it('When final grade value is greater than 100, then display that it is an invalid grade', () => {
    // Arrange
    const input1 = 100.01;
    const input2 = 100.999999;
    const input3 = 200;
    const input4 = 1000;
    const expectedClass = "Invalid grade input. Grade is greater than maximum numerical grade (100).";
    // Act
    const result1 = gradeClassifier(input1);
    const result2 = gradeClassifier(input2);
    const result3 = gradeClassifier(input3);
    const result4 = gradeClassifier(input4);
    // Assert
    expect(result1).toBe(expectedClass);
    expect(result2).toBe(expectedClass);
    expect(result3).toBe(expectedClass);
    expect(result4).toBe(expectedClass);
  });
  it('When the final grade value is not a number, then display that it is an invalid grade', () => {
    // Arrange
    const input1 = "this is a grade";
    const input2 = 'b';
    const input3 = "O";
    const input4 = "Very Good";
    const expectedClass = "Invalid grade input. Grade should be numerical (0-100).";
    // Act
    const result1 = gradeClassifier(input1);
    const result2 = gradeClassifier(input2);
    const result3 = gradeClassifier(input3);
    const result4 = gradeClassifier(input4);
    // Assert
    expect(result1).toBe(expectedClass);
    expect(result2).toBe(expectedClass);
    expect(result3).toBe(expectedClass);
    expect(result4).toBe(expectedClass);
  });

  it('When the final grade value is in the range 95.00 to 100, then display O and Outstanding', () => {
    // Arrange
    const input1 = 100;
    const input2 = 95.0;
    const input3 = 99.99999999999;
    const input4 = 95;
    const expectedClass = "O, Outstanding";
    // Act
    const result1 = gradeClassifier(input1);
    const result2 = gradeClassifier(input2);
    const result3 = gradeClassifier(input3);
    const result4 = gradeClassifier(input4);
    // Assert
    expect(result1).toBe(expectedClass);
    expect(result2).toBe(expectedClass);
    expect(result3).toBe(expectedClass);
    expect(result4).toBe(expectedClass);
  });

  it('When the final grade value is in the range 90.00 to 94.99, then display V and Very Good', () => {
    // Arrange
    const input1 = 90;
    const input2 = 94.99;
    const input3 = 92.99999999999;
    const input4 = 93.1234;
    const expectedClass = "V, Very Good";
    // Act
    const result1 = gradeClassifier(input1);
    const result2 = gradeClassifier(input2);
    const result3 = gradeClassifier(input3);
    const result4 = gradeClassifier(input4);
    // Assert
    expect(result1).toBe(expectedClass);
    expect(result2).toBe(expectedClass);
    expect(result3).toBe(expectedClass);
    expect(result4).toBe(expectedClass);
  });

  it('When the final grade value is in the range 85.00 to 89.99, then display G and Good', () => {
    // Arrange
    const input1 = 89.99;
    const input2 = 85.0;
    const input3 = 89.0;
    const input4 = 87.1234;
    const expectedClass = "G, Good";
    // Act
    const result1 = gradeClassifier(input1);
    const result2 = gradeClassifier(input2);
    const result3 = gradeClassifier(input3);
    const result4 = gradeClassifier(input4);
    // Assert
    expect(result1).toBe(expectedClass);
    expect(result2).toBe(expectedClass);
    expect(result3).toBe(expectedClass);
    expect(result4).toBe(expectedClass);
  });

  it('When the final grade value is in the range 80.00 to 84.99, then display S and Satisfactory', () => {
    // Arrange
    const input1 = 84.99;
    const input2 = 80;
    const input3 = 82.99999999999;
    const input4 = 83.1234;
    const expectedClass = "S, Satisfactory";
    // Act
    const result1 = gradeClassifier(input1);
    const result2 = gradeClassifier(input2);
    const result3 = gradeClassifier(input3);
    const result4 = gradeClassifier(input4);
    // Assert
    expect(result1).toBe(expectedClass);
    expect(result2).toBe(expectedClass);
    expect(result3).toBe(expectedClass);
    expect(result4).toBe(expectedClass);
  });

  it('When the final grade value is in the range 75.00 to 79.99, then display N and Needs Improvement	', () => {
    // Arrange
    const input1 = 79;
    const input2 = 75.0;
    const input3 = 78.99999999999;
    const input4 = 75.1234;
    const expectedClass = "N, Needs Improvement";
    // Act
    const result1 = gradeClassifier(input1);
    const result2 = gradeClassifier(input2);
    const result3 = gradeClassifier(input3);
    const result4 = gradeClassifier(input4);
    // Assert
    expect(result1).toBe(expectedClass);
    expect(result2).toBe(expectedClass);
    expect(result3).toBe(expectedClass);
    expect(result4).toBe(expectedClass);
  });

  it('When the final grade value is in the range 0 to 74.99, then display D and Did not Meet Expectation	', () => {
    // Arrange
    const input1 = 74.99;
    const input2 = 0;
    const input3 = 10;
    const input4 = 35.8995;
    const expectedClass = "D, Did not Meet Expectation";
    // Act
    const result1 = gradeClassifier(input1);
    const result2 = gradeClassifier(input2);
    const result3 = gradeClassifier(input3);
    const result4 = gradeClassifier(input4);
    // Assert
    expect(result1).toBe(expectedClass);
    expect(result2).toBe(expectedClass);
    expect(result3).toBe(expectedClass);
    expect(result4).toBe(expectedClass);
  });
});
