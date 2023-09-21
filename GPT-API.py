#GPT
import openai
import requests
import json

#GPT part
#x & xx are going to be asigned a string every interval, this strings will be some interesting sci\philosophy\news\art question prompted to gpt. there are 2 to make this proccess faster.
#x =
#xx =
openai.api_key = "api key"

completion = openai.ChatCompletion.create(
  model = "gpt-3.5-turbo", #GPT model
   messages=[
        {"role": "system", "content": "You are a philosopher"},
        {"role": "user", "content": "What is life?"}
        ]
)
#system gives context about user to assistant
#user is the prompt
#assistant is the gpt model
#content shows the content of either system or user as shown above
