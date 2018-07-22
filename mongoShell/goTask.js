var username = 'JoeWright',
  timeStamp = Date.parse(new Date());
var jsonData = {
  username: username,
  loginTime: timeStamp
}
var db = connect('log');  //use log
db.login.insert(jsonData);
print('[demo]:log print success');