How to compile?
- If you are trying for the first time, start with: `bundle install`
- If you are trying after a long time, start with: `bundle update`
- If you see an error about conflicting dependencies, install ruby 2.7.2 and use `chruby 2.7.2` and run `bundle install` again. 
- Finally: `bundle exec jekyll serve`. This should start a local server where you can preview the website.

How to publish?
- First, commit and push your master branch.
- `./bin/deploy`: Confirm that the source branch is `master` (or another branch you modified), and the published branch is `gh-pages`. 

Note: Commit and push your master branch regularly because publishing on `gh-pages` branch does not automatically push commits to `master`. 
