from strings import *
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("--articleTitle")
parser.add_argument("--genres")
parser.add_argument("--folder")
parser.add_argument("--articleType")
parser.add_argument("--author")
parser.add_argument("--publishDate")
parser.add_argument("--releaseDate")
parser.add_argument("--gameTitle")
parser.add_argument("--developer")
parser.add_argument("--publisher")
parser.add_argument("--tagline")
parser.add_argument("--tags")
parser.add_argument("--videoId")
parser.add_argument("--mainChar")
parser.add_argument("--platforms")
parser.add_argument("--quote")
parser.add_argument("--recommended")
parser.add_argument("--thumbnail")
parser.add_argument("--timeSpent")
parser.add_argument("--completion")
parser.add_argument("--winningTraits")
args = parser.parse_args()

month_map = [0, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

article_title = args.articleTitle
folder = args.folder
article_type = args.articleType
article_type_hyphen = '-'.join(article_type.split(' '))
article_type_comma = ', '.join(article_type.split(' '))
author = args.author or 'Brenda Zhang'
date = args.publishDate
release_date = args.releaseDate
release_date_parts = release_date.split('-')
game_title = args.gameTitle
developer = args.developer
publisher = args.publisher
game_title_parts = game_title.split('-')
game_title_nospace = ''.join(game_title_parts)
game_title_nospace_caps = ''.join([w.capitalize() for w in game_title_parts])
game_title_space_caps = ' '.join([w.capitalize() for w in game_title_parts])
genres = args.genres
tagline = args.tagline
tags = args.tags
video_id = args.videoId

new_post = open('/Users/brendazhang/Desktop/projects/colludia/_posts/{folder}/{date}-{game_title}-{article_type_hyphen}.markdown'.format(
	article_type_hyphen = article_type_hyphen, date = date, folder = folder, game_title = game_title
), 'w+')
new_post.write(FRONT_MATTER.format(
	article_title = article_title,
	article_type_comma = article_type_comma,
	article_type_hyphen = article_type_hyphen,
	author = author,
	date = date,
	developer = developer,
	game_title = game_title,
	game_title_nospace = game_title_nospace,
	game_title_nospace_caps = game_title_nospace_caps,
	game_title_space_caps = game_title_space_caps,
	genres = genres,
	publisher = publisher,
	release_date = release_date,
	tagline = tagline,
	tags = tags,
	video_id = video_id
))
new_post.close()

print('General Post Information Filled')

print(article_type)

# if 'review' in article_type:
# 	main_character = args.mainChar
# 	platforms = args.platforms
# 	quote = args.quote
# 	recommended = args.recommended
# 	thumbnail = args.thumbnail
# 	time_spent = args.timeSpent
# 	completion = args.completion
# 	winning_traits = args.winningTraits

# 	release_date_year = release_date_parts[0]
# 	release_date_month = month_map[int(release_date_parts[1]) if int(release_date_parts[1]) > 9 else int(release_date_parts[1][1])]
# 	release_date_day = release_date_parts[2]
# 	release_date_verbose = '{release_date_month} {release_date_day}, {release_date_year}'.format(release_date_month = release_date_month, release_date_day = release_date_day, release_date_year = release_date_year)

# 	quick_summary = open('/Users/brendazhang/Desktop/projects/colludia/_data/post-quick-summary.yml', 'a+')
# 	quick_summary.write(QUICK_SUMMARY.format(
# 		completion = completion,
# 		developer = developer,
# 		game_title_nospace = game_title_nospace,
# 		genres = genres,
# 		main_character = main_character,
# 		platforms = platforms,
# 		publisher = publisher,
# 		quote = quote,
# 		recommended = recommended,
# 		release_date_verbose = release_date_verbose,
# 		thumbnail = thumbnail,
# 		time_spent = time_spent,
# 		winning_traits = winning_traits,
# 	))
# 	quick_summary.close()

# 	print('Extra Quick Summary Information Filled')

print('--------CLEAN FILE: {folder}/{date}-{game_title}-{article_type_hyphen}--------'.format(
	article_type_hyphen = article_type_hyphen, date = date, folder = folder, game_title = game_title
))
