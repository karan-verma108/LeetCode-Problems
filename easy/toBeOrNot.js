// 2704. To Be Or Not To Be

const expect = function (val) {
  return {
    toBe: (value) => {
      if (val === value) {
        return true;
      } else {
        return 'Not Equal';
      }
    },
    notToBe: (value) => {
      if (val !== value) {
        return true;
      } else {
        return 'Equal';
      }
    },
  };
};

const result = expect(5).toBe(null);
console.log(result);
