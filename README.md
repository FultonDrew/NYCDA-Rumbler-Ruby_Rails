# README

Where Next Blog is a rails blog written in Ruby and uses two gems for users and text editing; Devise & CKEditor.

To run this site locally, you will first need to download the files from the repositories homepage. You will first need to run, "gem install rails 5.2.1" and "gem install ruby 2.5.1" to download the appropriate Ruby and Rails files. Then navigate inside the folder through your terminal and run bundle install. Once all necessary gems are installed, you can type "rails s" into the server to start the server. To render the page, you can then navigate to "localhost:3000" in your browser.

Page Views:
To see the various views of the blog, within the source code, you can navigate to app>views. The "blogs" folder houses the main blog views. The homepage view is "index.html.erb", the individual blog view(when you click on a blog on the homepage) is "show.html.erb". The new and edit files are self-explanitory.

For the user CRUD views, Devise creates many files automatically. The main files edited in this project were the files in the "registrations" and "sessions" folders. "Registrations" is the create and edit functionality of sign-up, while "sessions" is the login functionality. 


Necessary Information:

Ruby version: 2.5.1
Rails version: 5.2.1

Gems:
CKEditor
Devise

Database:
Development-SQLite3
Production: PG


