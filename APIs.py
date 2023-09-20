#GPT & Stable diffusion
import openai
import requests
import json

#GPT part
#x & xx are going to be asigned a string every interval, this strings will be some interesting sci\philosophy\news\art question prompted to gpt. there are 2 to make this proccess faster.
#x =  
#xx =
openai.api_key = "API key"
completion = openai.ChatCompletion.create(
  model = "gpt-3.5-turbo", #GPT model, I put 3.5 turbo for e.g.
  temperature = 0.8, #higer more creative, lower more acurate
  max_tokens = 2000,# max words too short might cut off
  messages = [
    {"role": "system", "content": "Science, Philosophy, News, Jokes, Inovation, Memes, Art"},
    {"role": "user", "content":x},
    {"role": "assistant", "content": null},#pre response, this will interfere with content generation so set as null
    {"role": "user", "content": xx}
  ]
)
#system gives context about user to assistant
#user is the prompt
#assistant is the gpt model
#content shows the content of either system or user as shown above

#stable diffusion part

url = "https://stablediffusionapi.com/api/v3/text2img"

payload = json.dumps({
  "key": "",
  "prompt": "ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner))",
  "negative_prompt": None,
  "width": "512",
  "height": "512",
  "samples": "1",
  "num_inference_steps": "10",
  "seed": None,
  "guidance_scale": 7.5,
  "safety_checker": "yes",
  "multi_lingual": "no",
  "panorama": "no",
  "self_attention": "no",
  "upscale": "no",
  "embeddings_model": null,
  #webhook will send image to that ip\domain
  "webhook": 127.0.0.1,
  "track_id": None
})

headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
