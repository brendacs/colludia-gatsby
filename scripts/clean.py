from strings import POST_IMAGES
import re

file_path = input('File path: ')
game_name = input('Hyphenated game name (venice-2089): ')
file = '/Users/brendazhang/Desktop/projects/colludia-gatsby/src/content/posts/{file_path}.markdown'.format(file_path = file_path)

CURR_IMAGE_NUM = -1

def image_incr(match):
  global CURR_IMAGE_NUM
  CURR_IMAGE_NUM += 1
  return '![][image{curr_image_num}]'.format(curr_image_num = CURR_IMAGE_NUM)

with open(file, 'r' ) as f:
  content = f.read()
  content_new = re.sub('!\[.*\].*', image_incr, content, flags = re.M)
  f_out = open(file, 'w+')
  f_out.write(content_new)
  f_out.close()

with open(file, 'r' ) as f:
  content = f.read()
  youtube_new = re.sub('\[https://www.youtube.com/watch\?v=(.*)\]\(.*\)', r'<iframe loading="lazy" src="https://www.youtube.com/embed/\1?modestbranding=1" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', content, flags = re.M)
  f_out = open(file, 'w+')
  f_out.write(youtube_new)
  f_out.close()

game_name_parts = game_name.split('-')
game_title_nospace = ''.join(game_name_parts)
game_title_nospace_caps = ''.join([w.capitalize() for w in game_name_parts])

post = open(file, "a+")
post.write(POST_IMAGES.format(
  game_title_nospace = game_title_nospace,
	game_title_nospace_caps = game_title_nospace_caps
))
