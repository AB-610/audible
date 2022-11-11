
const gTTS = require('gtts')
var fs = require('fs');
require('dotenv').config();

data = fs.readFileSync("text.txt", 'utf8')

async function convertTextToMp3(){
  const text = data;

  var gtts = new gTTS(text, 'en');
  gtts.save("output.mp3", function(err, res){
    if(err) { throw new Error(err) }
    console.log(`Success! Open file output.mp3 to hear result.`);

  })

  console.log('Text to speech has completed. Audio file has been saved');


}

convertTextToMp3()