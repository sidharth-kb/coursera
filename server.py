from flask import Flask, render_template, request
from SentimentAnalysis.sentiment_analysis import sentiment_analyser

# Import Flask, render_template, request from the flask pramework package : TODO
# Import the sentiment_analyzer function from the package created: TODO

app = Flask("Sentiment Analyser")


@app.route("/sentimentAnalyzer")
def sent_analyzer():
    text = request.args.get("textToAnalyze")

    res = sentiment_analyser(text)

    if res["label"] is None:
        return "Invalid input, try again"

    label = res["label"].split("_")[1]
    score = res["score"]

    return f"Result was {label} with a score of {score}"


@app.route("/")
def render_index_page():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
