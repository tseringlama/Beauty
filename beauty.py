# 1. install in terminal: pip install beautifulsoup4
#import beautiful soup & import requests to make connections to the internet
from bs4 import BeautifulSoup
import requests
#HOW I GOT THE VOLUNTEERS INFO
text_file = open("Output.txt", "w")

plusSize = "http://plussizeootd.tumblr.com/"
reqPlus = requests.get(plusSize)
plusData = reqPlus.text
plusSoup = BeautifulSoup(plusData, "html.parser")
# text_file = open("Output.txt", "w")
for plus in plusSoup.find_all('img'):
    if 'jpg' not in plus['src']:
        continue
    text_file.write(plus['src'] + '\n')
    # print(plus['src'])
# text_file.close()

streetStyle = "http://fashion-streetstyle.tumblr.com/"
reqStreet = requests.get(streetStyle)
streetData = reqStreet.text
streetSoup = BeautifulSoup(streetData, "html.parser")
# text_file = open("Output.txt", "w")
for street in streetSoup.find_all('img'):
    if 'jpg' not in street['src']:
        continue
    text_file.write(street['src'] + '\n')
# text_file.close()
    # print(street['src'])
    # [x['src'] for x in street.findAll('img', {'class': 'sizedProdImage'})]


modestStyle = "http://modeststreetfashion.com/"
reqModest = requests.get(modestStyle)
modestData = reqModest.text
modestSoup = BeautifulSoup(modestData, "html.parser")
# text_file = open("Output.txt", "w")
for modest in modestSoup.find_all('img'):
    if 'jpg' not in modest['src']:
        continue
    text_file.write(modest['src'] + '\n')
# text_file.close()
    # print(modest['src'])
    # [x['src'] for x in modest.findAll('img', {'class': 'sizedProdImage'})]


menStyle = "http://modeststreetfashion.com/"
reqMen = requests.get(menStyle)
menData = reqMen.text
menSoup = BeautifulSoup(menData, "html.parser")
# text_file = open("Output.txt", "w")
for men in menSoup.find_all('img'):
    if 'jpg' not in men['src']:
        continue
    text_file.write(men['src'] + '\n')
# text_file.close()
    # print(men['src'])
    # [x['src'] for x in men.findAll('img', {'class': 'sizedProdImage'})]


pantsStyle = "http://modeststreetfashion.com/"
reqPants = requests.get(pantsStyle)
pantsData = reqPants.text
pantsSoup = BeautifulSoup(pantsData, "html.parser")
# text_file = open("Output.txt", "w")
for pants in pantsSoup.find_all('img'):
    if 'jpg' not in pants['src']:
        continue
    text_file.write(pants['src'] + '\n')
# text_file.close()
    # print(pants['src'])

    # [x['src'] for x in pants.findAll('img', {'class': 'sizedProdImage'})]

koreanStyle = "http://sol-sol-street.tumblr.com/"
reqKorean = requests.get(koreanStyle)
koreanData = reqKorean.text
koreanSoup = BeautifulSoup(koreanData, "html.parser")
# text_file = open("Output.txt", "w")
for korea in koreanSoup.find_all('img'):
    if 'jpg' not in korea['src']:
        continue
    text_file.write(korea['src'] + '\n')
# text_file.close()

sarahStyle = "http://ravingsbyrae.com/2016/04/sprung/"
reqSarah = requests.get(sarahStyle)
sarahData = reqSarah.text
sarahSoup = BeautifulSoup(sarahData, "html.parser")
# text_file = open("Output.txt", "w")
for sarah in sarahSoup.find_all('img'):
    if 'jpg' not in sarah['src']:
        continue
    text_file.write(sarah['src'] + '\n')
text_file.close()










    # print(plus.find("img").get_text())
    # print(plus.find("span").get_text())
    # print(plus.find(class_="borough").get_text())
    # print(plus.find(class_="date").get_text())
    # print()
#HOW I GOT THE CAT AND AGES INFO
# adoptCats = "https://www.animalhavenshelter.org/adopt/cats/"
# reqAdopt = requests.get(adoptCats)
# adoptData = reqAdopt.text
# adoptSoup = BeautifulSoup(adoptData, "html.parser")
# for cat in adoptSoup.find_all(class_="box-info"):
#     print(cat.find("h4").get_text() + " ", end="")
#     print(cat.find("span").get_text())
#
# zaraJackets = "https://www.zara.com/us/en/woman/jackets-c269184.html"
# reqZara = requests.get(zaraJackets)
# zaraData = reqZara.text
# zaraSoup = BeautifulSoup(zaraData, "html.parser")
# for jacket in zaraSoup.find_all(class_="product-info"):
#     print(jacket.find(class_="name").get_text())
