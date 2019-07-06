/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
      let result = 0;

    preferences.forEach((element, i) => {

        let secondElem = preferences[element - 1]
        let thirdElem = preferences[secondElem - 1]
        if (
            preferences[preferences[element - 1] - 1] === i + 1 &&
    element !== secondElem
) {
        result++
    }
})
    result /= 3;
    return result;
};
