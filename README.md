# bsadd-home
A static version with some information about the group and it's activities

The contents are hosted at http://cse.buet.ac.bd/bsadd
Also a latest blogs can be found on https://medium.com/bsadd

Probable proxy location is http://bsadd.org/

# Requirement

- You need to have  [Jkeyll](https://jekyllrb.com/) installed on your local machine

# Setting-up the project
- Clone the repo on your local machine 
-  Run `bundle exec jekyll serve` command and website will be served on localhost

# Updating Site
---
## Adding new session to gallery:

- Make a folder and put session's images in that folder
- If thumbnail images are available, put them inside a folder named "thumb" and put "thumb" folder inside your image folder 
- Put session image folder ( containing thumb folder and session images inside) inside "/img" folder 
- Add session's title and image folder  path in "_data/gallery.yml" file

## Adding new link (to be displayed on link page): 

- Add new link in "_data/link.yml" file ( more specific details are given in that file) 


## Adding new members 

- Add new member's name and link in "_data/members.yml" file ( see exisiting data in the file for data format ) 

## Adding new menu to navbar 

- Add new menu's name and link in "_data/site_data.yml" file (  see exisiting data in the file for data format ) 

## Adding new session to activities  

- ***Adding new category:*** 
	- Create a folder naming you session
	- Write an **"overview.md"** file in the folder describing session details
	- For new session under the category, create html/md file and put them inside your folder. ( see existing files for file format) 
	- Put the folder inside **"_activity"** folder 
	- Add category description in **"activitiesByCategory.yml"** file 
	
- ***Adding new session to existing category:*** 
	-  create html/md file for new session 
	- Put them inside **"_activities/desired_folder"** folder. ( see existing files for file format) 

## Adding new item to activity table  

- Add new table entry   "_data/activitiesSummary.yml" file (  see exisiting data in the file for data format ) 

## Adding new blog  

- Create new html/md file for new blog (  see exisiting files for data format ) 
- Put the file inside "_blog/" folder 
