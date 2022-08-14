const Message = require("../models/message.model");

const saveMessageToDB = (messageObj) => {
    console.log("In saveMessageToDB: ", messageObj)
    const newMessage = new Message({
        ...messageObj
    })
    newMessage.save((error, results) => {
        if (error) {
            console.log(error)
        }
        console.log(results)
    })
}

module.exports = { saveMessageToDB }