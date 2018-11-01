export const getMessages = () => {

    if(!navigator['mozMobileMessage']) {
        return;
    }
// In this example we want to access all the messages of the thread related to an incoming message
navigator['mozMobileMessage'].addEventListener('received', function (msg) {
    //var threadId = msg.threadId;
    //var filter = new MozSmsFilter();
    //filter.threadId = threadId;

    console.log(msg);
  
    // Get the messages from the latest to the first
    var cursor = navigator['mozMobileMessage'].getMessages();
  
    cursor.onsuccess = function () {
      var message = this.result;
      var time = message.timestamp.toDateString()
  
      console.log(time + ': ' + (message.body || message.subject)); // SMS || MMS
  
      if (!this.done) {
        this.continue();
      }
    }
  });
}
