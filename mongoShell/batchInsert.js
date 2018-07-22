var startTime = new Date().getTime();
var db = connect('log');
var arr = [];
for (let i = 0; i < 1000; i++) {
  arr.push({
    num: i
  });
}
db.test1.insert(arr);
var runTime = new Date().getTime() - startTime;
print('runTime is:' + runTime + 'ms');