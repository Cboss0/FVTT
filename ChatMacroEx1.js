//Macro to identify an "Actor" and then output a "message" via the chat window and a in game bubble

let actor = game.actors.getName('Innkeeper');

let speaker = ChatMessage.getSpeaker({actor});

ChatMessage.create({speaker, content: "Go Basement, Kill Rat, OogaBooga",
type: CHAT_MESSAGE_TYPES.EMOTE},
{chatBubble: True});

//Git VanceCole/Macros for reference
