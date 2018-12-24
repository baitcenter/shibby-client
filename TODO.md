
# TODO

## Priority

- [ ] NSFW Warning
- [X] Database connection
  - [ ] Setup warnings
  - [X] Investigate the Vuex-ORM axios plugin
- [X] Soundgasm crawler
  - [ ] Partially complete, still requires crawler to index a user
- [X] Soundgasm api
- [X] Search files
  - [ ] Sort results by rating, uploader, defualt match score, 
- [-] Tag filter
  - [X] Hacky version functional
  - [ ] Make improved version with exclusion
- [X] Auto tagger
  - [ ] Auto tagger works, still needs to strip away tags from string
- [ ] Series based on tag?
  - [ ] Problably better to add separate series and episode object to soundObjects.
  - [ ] Alternative is seperate List and ORM relationships
- [X] Audio player, ensure song plays during navigation
- [-] Playlist
  - [ ] Stop player from refreshing when adding tracks, push updates to new array?
- [X] Add Files modal
- [X] Responsive design
- [ ] Rating
  - Likes or Star rating?
- [ ] Fix unit testing with Jest
- [ ] Add modals for success, errors and warnings

## Secondary

- [ ] Audio backup
- [ ] Admin login
  - [ ] Vuex auth?
  - [ ] JWT encryption?
- [ ] Vuex caching of DB

