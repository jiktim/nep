Math.seed = function(s) {
    return function() {
        s = Math.sin(s) * 10000; return s - Math.floor(s);
    };
};
module.exports = function(msg, bot, args) {
  if(!args) {
 	var inches = Math.floor(Math.seed(msg.member.id)() * 30) + 1  * 2
	var dick = "["+"=".repeat(inches/2)+"]";
	msg.channel.createMessage(dick + " ("+inches.toString()+"/10)")
} else {
  var inches = Math.floor(Math.seed(msg.mentions[0].id)() * 30) + 1  * 2
  var dick = "["+"=".repeat(inches/2)+"]";
  msg.channel.createMessage(dick + " ("+inches.toString()+"/10)")
}
}
