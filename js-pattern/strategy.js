//工资奖励
var calculateBonus = function (performanceLevel, salary) {
  if (performanceLevel === 'S') {
    return salary * 4;
  }
  if (performanceLevel === 'A') {
    return salary * 3;
  }
  if (performanceLevel === 'B') {
    return salary * 2;
  }
};
calculateBonus('B', 20000); // 输出:40000 
calculateBonus('S', 6000); // 输出:24000

//使用策略模式
const strategies = {
  'S': salary => {
    return salary * 4;
  },
  'A': salary => {
    return salary * 3;
  },
  'B': salary => {
    return salary * 2;
  }
};

const calculate = (level, salary) => {
  return strategies[level](salary);
};

console.log(calculate('S', 5000));
console.log(calculate('A', 2000));


let data = new Map([
  ['first_name', 'Super'],
  ['last_name', 'Man'],
  ['age', 'unknown'],
  ['username', 'o_O']
]);
let config = new Map([
  ['first_name', 'isNonEmpty'],
  ['age', 'isNumber'],
  ['username', 'isAlphaNum']
]);

class Checker {
  constructor(check, instruction) {
    [this.check, this.instruction] = [check, instruction];
  }
}

class Validator {
  constructor(config) {
    [this.config, this.messages] = [config, []];
  }

  validate(data) {
    for(let [key, rule] of data.entries()) {
      let type = this.config.get(key);
      let checker = Validator[type];
      if (!type) continue;
      if (!checker) throw new Error(`No handler to validate type ${type}`);
      if (!checker.check(rule)) this.messages.push(`${checker.instruction} ${rule}`); 
    }
  }

  hasError() {
    return this.messages.length !== 0;
  }
}

Validator.isNumber = new Checker((val) => !isNaN(val), 'the value can only be a valid number');
Validator.isNonEmpty = new Checker((val) => val !== "", 'the value can not be empty');
Validator.isAlphaNum = new Checker((val) => !/^a-z0-9/i.test(val), 'the value can not have special symbols');

let validator = new Validator(config);
validator.validate(data);
console.log(validator.messages.join('\n')); //the value can only be a valid number **unknown**