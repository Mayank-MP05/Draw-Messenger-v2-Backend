const Message = require("../models/message.model");
const { parser } = require('html-metadata-parser');

const linkDataParser = (messageObj, io) => {
    const { linkExtracted } = messageObj;
    const { type, content } = messageObj;
    if (type === 'LINK' && linkExtracted) {
        parser(linkExtracted).then(result => {
            console.log(JSON.stringify(result, null, 3));
            const { og } = result;
            const { title, description, image } = og;
            messageObj['title'] = title;
            messageObj['description'] = description;
            messageObj['imgUrl'] = image;
            console.log("After Parser", messageObj);
            io.emit('chat', messageObj);
            saveMessageToDB(messageObj);
        })
    }
}

const saveMessageToDB = (messageObj) => {
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

module.exports = { saveMessageToDB, linkDataParser }