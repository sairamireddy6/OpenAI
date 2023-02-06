const express = require('express');
const { Configuration, OpenAIApi } = require("openai");
const app = express();

var cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

app.get('/',(req, res)=>{
    const configuration = new Configuration({
        apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);
      const main = async ()=>{
        const question = "write for loop in javascript"
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: question,
            max_tokens:2048,
            temperature:1
        })
        console.log(completion.data)
        return completion.data.choices[0].text
      }
      let i = main()
    
      i.then((data)=>{
        res.send(data)
      })
})


app.listen(3000,()=>{
    console.log("Server running...")
})