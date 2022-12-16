import re
import pandas as pd
import numpy as np
import torch
from torch.utils.data import DataLoader,Dataset
from transformers import BertTokenizer, BertForSequenceClassification,TextClassificationPipeline

device = torch.device('cpu')
loaded_model = BertForSequenceClassification.from_pretrained('./bert_uncased_model3.pt').to(device)
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased',do_lower_case=True)
loaded_model.eval()

text_classifier = TextClassificationPipeline(
    tokenizer=tokenizer, 
    model=loaded_model, 
    framework='pt',
)
feeling_dict={"2":"joy", "5":"sadness", "4":"neutral", "0":"anger", "1":"fear", "6":"surprise", "3":"love"}#2번방법
from collections import Counter

def modefinder(numbers):
    c = Counter(numbers)
    order = c.most_common()
    maximum = order[0][1]
    modes = []
    for num in order:
        if num[1] == maximum:
            modes.append(num[0])
    return modes

def split_feeling(feeling):
    feeling = re.sub(r'\n', ' ', feeling)
    sent_list = feeling.split('.')
    sent_list = [n for n in sent_list if n]
    sent_df = pd.DataFrame(sent_list)
    sent_df.rename(columns={0:'Utterance'},inplace=True)
    sent_df["Utterance"]=sent_df["Utterance"].str.lower()
    return sent_df

def predict_s(feeling):
    predicted_label_list = []
    df=split_feeling(feeling["feeling"])
  
    for text in df['Utterance']:
        # predict
        preds_list = text_classifier(text)[0]
        predicted_label_list.append(preds_list["label"].split("_")[1]) # label
    result_pred= [feeling_dict.get(i) for i in predicted_label_list]

    mode_predited=modefinder(result_pred)
    return mode_predited

