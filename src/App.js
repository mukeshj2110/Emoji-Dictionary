import { useState } from "react";
import "./styles.css";

var Dictionary = {
  "😀": "Grinning Face",
  "😃": " Grinning Face with Big Eyes",
  "😅": " Grinning Face with Sweat",
  "🤣": " Rolling on the Floor Laughing",
  "😂": " Face with Tears of Joy",
  "🙂": " Slightly Smiling Face",
  "😄": " Grinning Face with Smiling Eyes",
  "😁": " Beaming Face with Smiling Eyes",
  "😆": " Grinning Squinting Face",
  "🙃": " Upside-Down Face",
  "😉": " Winking Face",
  "😊": " Smiling Face with Smiling Eyes",
  "😇": " Smiling Face with Halo",
  "🥰": " Smiling Face with Hearts",
  "😍": " Smiling Face with Heart-Eyes",
  "🤩": " Star-Struck",
  "😘": " Face Blowing a Kiss",
  "😗": " Kissing Face",
  "😚": " Kissing Face with Closed Eyes",
  "😙": " Kissing Face with Smiling Eyes",
  "😋": " Face Savoring Food",
  "😛": " Face with Tongue",
  "😜": " Winking Face with Tongue",
  "🤪": " Zany Face",
  "😝": " Squinting Face with Tongue",
  "🤑": " Money-Mouth Face",
  "🤗": " Hugging Face",
  "🤭": " Face with Hand Over Mouth",
  "🤫": " Shushing Face",
  "🤔": " Thinking Face",
  "🤐": " Zipper-Mouth Face",
  "🤨": " Face with Raised Eyebrow",
  "😐": " Neutral Face",
  "😑": " Expressionless Face",
  "😶": " Face Without Mouth",
  "😏": " Smirking Face",
  "😒": " Unamused Face",
  "🙄": " Face with Rolling Eyes",
  "😬": " Grimacing Face",
  "🤥": " Lying Face",
  "😌": " Relieved Face",
  "😔": " Pensive Face",
  "😪": " Sleepy Face",
  "🤤": " Drooling Face",
  "😴": " Sleeping Face",
  "😷": " Face with Medical Mask",
  "🤒": " Face with Thermometer",
  "🤕": " Face with Head-Bandage",
  "🤢": " Nauseated Face",
  "🤮": " Face Vomiting"
};

var emojisweknow = Object.keys(Dictionary);
export default function App() {
  var [meaning, setmeaning] = useState("");
  function emojiInputHandler(event) {
    var input = event.target.value;
    var meaning = Dictionary[input];

    if (meaning === undefined) {
      meaning = "sorry, We don't have that emoji in Database. ";
    }
    setmeaning(meaning);
  }

  function emojiclickHandler(emoji) {
    var meaning = Dictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input onChange={emojiInputHandler}></input>
      <div className="mean">{meaning}</div>

      <h3>Emoji's we have in our list</h3>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclickHandler(emoji)}
            key={emoji}
            className="emojis"
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
