import requests
import json


def sentiment_analyser(text):
    url = "https://sn-watson-sentiment-bert.labs.skills.network/v1/watson.runtime.nlp.v1/NlpService/SentimentPredict"
    header = {
        "grpc-metadata-mm-model-id": "sentiment_aggregated-bert-workflow_lang_multi_stock"
    }
    myobj = {"raw_document": {"text": text}}
    res = requests.post(url, json=myobj, headers=header)

    json_res = json.loads(res.text)

    label = None
    score = None

    if res.status_code == 200:
        label = json_res["documentSentiment"]["label"]
        score = json_res["documentSentiment"]["score"]

    return {"label": label, "score": score}


if __name__ == "__main__":
    text = "I am very happy today"
    print(sentiment_analyser(text))
