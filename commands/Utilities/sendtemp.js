module.exports = (channel, text, duration = 4) => {
  channel.send(text).then((message) => {
    if (duration === -1) {
      return;
    }

    setTimeout(function() {
      message.delete();
    }, 1000 * duration)
  })
}