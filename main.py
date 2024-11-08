#!/usr/bin/python
import pandas as pd
import json
import chardet

with open('lotteryData\ssq20241108.json', 'rb') as f1:
    content = f1.read()
    encoding01 = chardet.detect(content)['encoding']



with open('lotteryData\ssq20241108.json','r',encoding=encoding01) as f:
    json_data = f.read()

data = json.loads(json_data)
# print(type(data))


# data = pd.read_json('lotteryData\ssq20241108.json')

# print(data['result'])
# print(data)
# df = pd.DataFrame(data)
# print(df)
# print(data.info())
# a = [1,2,3]
# myVar01 = pd.Series(a)
# print(myVar01)
# print(data)
# print('loft')

