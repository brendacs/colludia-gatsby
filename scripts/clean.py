from strings import POST_IMAGES
import re

# Take user iputs to find target file and target game
file_folder = input('File folder: ')
file_name = input('File name: ')
game_name = input('Hyphenated game name (venice-2089): ')
file = '/Users/brendazhang/Desktop/projects/colludia-gatsby/src/content/posts/{file_folder}/{file_name}.md'.format(file_folder = file_folder, file_name = file_name)

# Markdown image name strings with incremented numbers
CURR_IMAGE_NUM = -1
def image_incr(match):
  global CURR_IMAGE_NUM
  CURR_IMAGE_NUM += 1
  return '![][image{curr_image_num}]'.format(curr_image_num = CURR_IMAGE_NUM)

# Substitute copy and pasted Notion images with new markdown image names
with open(file, 'r' ) as f:
  content = f.read()
  content_new = re.sub('!\[.*\].*', image_incr, content, flags = re.M)
  f_out = open(file, 'w+')
  f_out.write(content_new)
  f_out.close()

# Replace youtube link with iframe embed
with open(file, 'r' ) as f:
  content = f.read()
  youtube_new = re.sub('\[https://www.youtube.com/watch\?v=(.*)\]\(.*\)', r'<iframe loading="lazy" src="https://www.youtube.com/embed/\1?modestbranding=1" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', content, flags = re.M)
  f_out = open(file, 'w+')
  f_out.write(youtube_new)
  f_out.close()

# Construct post image names
game_name_parts = game_name.split('-')
game_title_nospace = ''.join(game_name_parts)
game_title_nospace_caps = ''.join([w.capitalize() for w in game_name_parts])

# Put list of images with constructed names at the bottom of the post
post = open(file, "a+")
post.write(POST_IMAGES.format(
  game_title_nospace = game_title_nospace,
	game_title_nospace_caps = game_title_nospace_caps
))
