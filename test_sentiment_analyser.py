from SentimentAnalysis.sentiment_analysis import sentiment_analyser
import unittest


class TestSentimentAnalyser(unittest.TestCase):
    def test_sentiment_analyser(self):
        res1 = sentiment_analyser("I love working with python")
        label1 = res1["label"]

        self.assertEqual(label1, "SENT_POSITIVE")

        res2 = sentiment_analyser("I hate working with Python")
        label2 = res2["label"]

        self.assertEqual(label2, "SENT_NEGATIVE")

        res3 = sentiment_analyser("I am neutral on python")
        label3 = res3["label"]

        self.assertEqual(label3, "SENT_NEUTRAL")


unittest.main()
