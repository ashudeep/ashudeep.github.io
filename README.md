How to compile?
- If you are trying for the first time, start with: bundle install
- If you are trying after a long time, start with: bundle update
- Finally: bundle exec jekyll serve. This should open a local server where you can preview the website.

How to publish?
- ./bin/deploy 
  Confirm that the source branch is master (or another branch you created), and the published branch is gh-pages. 

Note: Make sure to commit and push your master regularly because publishing on gh-pages branch does not automatically push commits to master. 
