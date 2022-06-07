#### 1.0.3 (2022-06-04)

##### Build System / Dependencies

*  add missing dev-deps for testing (9160c76f)
*  fix main file (a357031e)
*  add optional deploy service (e0d10a52)
*  add optional development service (48391bfd)
*  add deps, build scripts and project version (669a83fc)

##### Chores

* **release:**
  *  1.0.3-dev (b6c7b5b0)
  *  1.0.2-dev (67d943da)
*  add funding and issue template (92c61542)
*  add compiled files to gitignore (267c84b9)

##### Continuous Integration

*  fix testing status with npx (0d52c896)
*  add testing to check response code (63167a53)
*  add lint and build tests (f0fadd12)

##### Documentation Changes

*  minor improvements (5f33ffd2)
*  add security policy (fcab76a9)
*  add contributing walkthrough (58f0c52d)
*  add code of conduct (a2cb7a54)

##### New Features

* **scraper:**
  *  proper type data (1d521062)
  *  append cover value on nhentai object (97e908bb)
  *  append `language` object on nhentai search returns (809e9785)
  *  add separate scrape stuff (8f876fb4)
* **router:**  export all endpoint to router (3091dc70)
* **utils:**  add miscellaneous method (d56343e7)
*  add separate controller stuff (74e7030d)
*  wrapping express root index (418bca30)
*  add tsconfig file (2dce148a)

##### Bug Fixes

*  proper include path (a1b9cf23)
*  proper dinamicaly listen port (d7f9e7d4)
*  invalid path cause throw error (933c9aa6)
*  actually fix procfile start script (2acf7c85)
*  proper postinstall (5f330748)
*  adjust postinstall script (c3acfd15)
* **options:**  proper export (8a5f3d8f)
* **controller:**  remove logs and minor comments (cdf56483)

##### Refactors

*  restructured, apply pino pretty (a240c087)

##### Code Style Changes

*  add eslint rule (1203dafb)

##### Tests

*  add response status checker (9c0969a8)
