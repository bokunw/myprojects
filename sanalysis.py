#import nltk
import random
import textblob

def sentiment_mock(text):
	ran = random.randint(0,2)
	if ran == 0:
		print("Positive")
	else:
		print("negative")

def tb_sentiment(text):
	proc = textblob.TextBlob(text)
	sent = proc.sentiment
	pol = sent[0]
	sub = sent[1]

	print("Polarity: "+ str(pol))
	print("Subjectivity: "+ str(sub))

def weighted_average(sentiment,subjectivity):
	for i in range(len(sentiment)):
		average = average + sentiment[i]*subjectivity[i]
	return average
		
