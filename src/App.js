import { useState } from "react";
import "./styles.css";

var Dictionary = {
  "๐": "Grinning Face",
  "๐": " Grinning Face with Big Eyes",
  "๐": " Grinning Face with Sweat",
  "๐คฃ": " Rolling on the Floor Laughing",
  "๐": " Face with Tears of Joy",
  "๐": " Slightly Smiling Face",
  "๐": " Grinning Face with Smiling Eyes",
  "๐": " Beaming Face with Smiling Eyes",
  "๐": " Grinning Squinting Face",
  "๐": " Upside-Down Face",
  "๐": " Winking Face",
  "๐": " Smiling Face with Smiling Eyes",
  "๐": " Smiling Face with Halo",
  "๐ฅฐ": " Smiling Face with Hearts",
  "๐": " Smiling Face with Heart-Eyes",
  "๐คฉ": " Star-Struck",
  "๐": " Face Blowing a Kiss",
  "๐": " Kissing Face",
  "๐": " Kissing Face with Closed Eyes",
  "๐": " Kissing Face with Smiling Eyes",
  "๐": " Face Savoring Food",
  "๐": " Face with Tongue",
  "๐": " Winking Face with Tongue",
  "๐คช": " Zany Face",
  "๐": " Squinting Face with Tongue",
  "๐ค": " Money-Mouth Face",
  "๐ค": " Hugging Face",
  "๐คญ": " Face with Hand Over Mouth",
  "๐คซ": " Shushing Face",
  "๐ค": " Thinking Face",
  "๐ค": " Zipper-Mouth Face",
  "๐คจ": " Face with Raised Eyebrow",
  "๐": " Neutral Face",
  "๐": " Expressionless Face",
  "๐ถ": " Face Without Mouth",
  "๐": " Smirking Face",
  "๐": " Unamused Face",
  "๐": " Face with Rolling Eyes",
  "๐ฌ": " Grimacing Face",
  "๐คฅ": " Lying Face",
  "๐": " Relieved Face",
  "๐": " Pensive Face",
  "๐ช": " Sleepy Face",
  "๐คค": " Drooling Face",
  "๐ด": " Sleeping Face",
  "๐ท": " Face with Medical Mask",
  "๐ค": " Face with Thermometer",
  "๐ค": " Face with Head-Bandage",
  "๐คข": " Nauseated Face",
  "๐คฎ": " Face Vomiting"
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
