# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: msn/regressionTest/weatherModule/99010_msn_weather_insights.spec.ts >> MSN – Weather Widget: Display, Navigation, and Stability >> Verify weather widget, navigate to forecast, return and check stability
- Location: tests/passedTestFiles/msn/regressionTest/weatherModule/99010_msn_weather_insights.spec.ts:32:7

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('a#i_weatherddxxs')
Expected: attached
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 10000ms
  - waiting for locator('a#i_weatherddxxs')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e6]:
    - generic [ref=e7]:
      - generic "Skip to content" [ref=e8] [cursor=pointer]:
        - button "Skip to content" [ref=e9]:
          - generic:
            - generic: Skip to content
      - generic "Skip to footer" [ref=e10] [cursor=pointer]:
        - button "Skip to footer" [ref=e11]:
          - generic:
            - generic: Skip to footer
      - link "MSN" [ref=e14] [cursor=pointer]:
        - /url: https://www.msn.com/en-in
      - generic [ref=e16]:
        - 'link "Phoenix: Partly cloudy, 16 °C" [ref=e19] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
          - generic "Phoenix, Arizona, United States Click here to see more information" [ref=e20]: Phoenix
          - img "Partly cloudy" [ref=e22]
          - generic [ref=e23]:
            - generic [ref=e24]: ‎16‎
            - generic [ref=e26]: ‎°C‎
        - generic "Open settings" [ref=e30] [cursor=pointer]:
          - button "Open settings" [ref=e31]:
            - generic:
              - generic:
                - generic:
                  - generic: Page settings
                  - generic:
                    - img
        - generic "Sign in" [ref=e35]:
          - button "Sign in to your account" [ref=e37] [cursor=pointer]:
            - generic [ref=e38]: Sign in to your account
            - generic [ref=e40]: Sign in
      - search [ref=e43]:
        - generic [ref=e44]:
          - generic "Web search" [ref=e45] [cursor=pointer]:
            - button "Web search" [ref=e46]:
              - generic:
                - generic:
                  - img
          - searchbox "Enter your search term" [ref=e47]
  - generic [ref=e48]:
    - generic [ref=e49]:
      - generic [ref=e54]:
        - list [ref=e57]:
          - listitem [ref=e58]:
            - link "Outlook.com" [ref=e61] [cursor=pointer]:
              - /url: https://outlook.com
              - generic [ref=e65]: Outlook.com
          - listitem [ref=e66]:
            - link "Flipkart" [ref=e69] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=401531&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e72]:
                - generic [ref=e73]: Flipkart
                - generic [ref=e75]: Sponsored
          - listitem [ref=e76]:
            - link "Find a tutor" [ref=e79] [cursor=pointer]:
              - /url: https://www.bing.com/pros?FORM=BPIMNS
              - generic [ref=e83]: Find a tutor
          - listitem [ref=e84]:
            - link "Booking.com" [ref=e87] [cursor=pointer]:
              - /url: https://www.booking.com/index.html?aid=1624937&label=enin-msn-hp-mestripe
              - generic [ref=e90]:
                - generic [ref=e91]: Booking.com
                - generic [ref=e93]: Sponsored
          - listitem [ref=e94]:
            - link "Ajio" [ref=e97] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=393141&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e100]:
                - generic [ref=e101]: Ajio
                - generic [ref=e103]: Sponsored
          - listitem [ref=e104]:
            - link "Facebook" [ref=e107] [cursor=pointer]:
              - /url: https://www.facebook.com
              - generic [ref=e111]: Facebook
          - listitem [ref=e112]:
            - link "Microsoft 365" [ref=e115] [cursor=pointer]:
              - /url: https://www.office.com/?omkt=en-IN
              - generic [ref=e119]: Microsoft 365
          - listitem [ref=e120]:
            - link "X" [ref=e123] [cursor=pointer]:
              - /url: https://x.com
              - generic [ref=e127]: X
          - listitem [ref=e128]:
            - link "OneDrive" [ref=e131] [cursor=pointer]:
              - /url: https://onedrive.live.com/?wt.mc_id=oo_msn_msnhomepage_header
              - generic [ref=e135]: OneDrive
          - listitem [ref=e136]:
            - link "Skype" [ref=e139] [cursor=pointer]:
              - /url: https://www.skype.com/
              - generic [ref=e143]: Skype
          - listitem [ref=e144]:
            - link "OneNote" [ref=e147] [cursor=pointer]:
              - /url: https://www.onenote.com/notebooks?WT.mc_id=MSN_OneNote_TopMenu&auth=1&wdorigin=msn
              - generic [ref=e151]: OneNote
          - listitem [ref=e152]:
            - link "Maps" [ref=e155] [cursor=pointer]:
              - /url: https://bing.com/maps/?FORM=MSNMAP
              - generic [ref=e159]: Maps
          - listitem [ref=e160]:
            - link "Microsoft Store" [ref=e163] [cursor=pointer]:
              - /url: https://www.microsoft.com/en-in
              - generic [ref=e167]: Microsoft Store
        - button [ref=e168]:
          - img [ref=e171]
      - generic [ref=e173]:
        - banner [ref=e174]
        - generic [ref=e175]:
          - generic [ref=e179]:
            - navigation [ref=e181]:
              - generic [ref=e182]:
                - list [ref=e183]:
                  - listitem [ref=e184]:
                    - link "Discover" [ref=e185] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in
                - list [ref=e186]:
                  - listitem [ref=e187]:
                    - link "News" [ref=e188] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f
                  - listitem [ref=e189]:
                    - link "Sports" [ref=e190] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in/sports
              - generic "Show more topics" [ref=e192] [cursor=pointer]:
                - button "Show more topics" [ref=e193]:
                  - generic:
                    - generic:
                      - img
            - generic "Personalize your feed\"" [ref=e195] [cursor=pointer]:
              - button "Personalize your feed\"" [ref=e196]:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic: Personalize
          - button "Make MSN my homepage" [ref=e198] [cursor=pointer]
      - main [ref=e201]:
        - generic [ref=e204]:
          - generic [ref=e205]:
            - generic [ref=e208]:
              - tablist [ref=e210]:
                - tab "News story" [ref=e211] [cursor=pointer]
                - tab "News story" [ref=e213] [cursor=pointer]
                - tab "News story" [ref=e215] [cursor=pointer]
                - tab "News story" [ref=e217] [cursor=pointer]
                - tab "News story" [ref=e219] [cursor=pointer]
                - tab "News story" [selected] [ref=e221] [cursor=pointer]
                - tab "News story" [ref=e223] [cursor=pointer]
                - tab "News story" [ref=e225] [cursor=pointer]
                - tab "News story" [ref=e227] [cursor=pointer]
                - tab "News story" [ref=e229] [cursor=pointer]
                - tab "News story" [ref=e231] [cursor=pointer]
                - tab "News story" [ref=e233] [cursor=pointer]
                - tab "News story" [ref=e235] [cursor=pointer]
                - tab "News story" [ref=e237] [cursor=pointer]
                - tab "News story" [ref=e239] [cursor=pointer]
                - tab "News story" [ref=e241] [cursor=pointer]
                - tab "News story" [ref=e243] [cursor=pointer]
                - tab "News story" [ref=e245] [cursor=pointer]
                - tab "News story" [ref=e247] [cursor=pointer]
                - tab "News story" [ref=e249] [cursor=pointer]
                - tab "News story" [ref=e251] [cursor=pointer]
                - tab "News story" [ref=e253] [cursor=pointer]
                - tab "News story" [ref=e255] [cursor=pointer]
                - tab "News story" [ref=e257] [cursor=pointer]
              - button [ref=e261]
              - button [ref=e264]
              - article "The last captive Tasmanian tiger died in 1936 - a new clip is raising questions again" [ref=e265] [cursor=pointer]:
                - generic [ref=e267]:
                  - img [ref=e268]
                  - generic [ref=e271]:
                    - generic [ref=e272]:
                      - generic [ref=e274]:
                        - img [ref=e275]
                        - generic [ref=e276]: Real Science
                      - link "The last captive Tasmanian tiger died in 1936 - a new clip is raising questions again, Real Science" [ref=e277]:
                        - /url: https://www.msn.com/en-in/news/other/the-last-captive-tasmanian-tiger-died-in-1936-a-new-clip-is-raising-questions-again/vi-AA2cSwWd
                        - text: The last captive Tasmanian tiger died in 1936 - a new clip is raising questions again
                    - generic "The last captive Tasmanian tiger died in 1936 - a new clip is raising questions again" [ref=e280]:
                      - generic [ref=e282]:
                        - generic [ref=e283]:
                          - button "799 Likes" [ref=e284]:
                            - generic [ref=e285]:
                              - img [ref=e286]
                              - generic [ref=e288]: "799"
                          - button "Dislike" [ref=e289]:
                            - img [ref=e291]
                        - link "View comments 1 Comment" [ref=e294]:
                          - /url: https://www.msn.com/en-in/news/other/the-last-captive-tasmanian-tiger-died-in-1936-a-new-clip-is-raising-questions-again/vi-AA2cSwWd#comments
                          - button "View comments 1 Comment" [ref=e295]:
                            - img [ref=e296]
                          - generic [ref=e298]: "1"
                  - generic [ref=e299]:
                    - button "Hide this story" [ref=e300]:
                      - img [ref=e301]
                      - text: Hide this story
                    - button "See more" [ref=e302]:
                      - img [ref=e303]
            - 'article "Shah Rukh Khan ko chetawani dete hain: BJP MLA threatens protests over Deepika Padukone''s saffron outfit in King" [ref=e304] [cursor=pointer]':
              - generic [ref=e306]:
                - img [ref=e307]
                - generic [ref=e308]:
                  - generic [ref=e309]:
                    - generic [ref=e310]:
                      - generic [ref=e311]:
                        - img [ref=e312]
                        - generic [ref=e313]: ABP - Live
                      - generic [ref=e314]: ·
                      - generic [ref=e315]: 5h
                    - 'link "Shah Rukh Khan ko chetawani dete hain: BJP MLA threatens protests over Deepika Padukone''s saffron outfit in King, ABP - Live" [ref=e316]':
                      - /url: https://www.msn.com/en-in/entertainment/celebrities/shah-rukh-khan-ko-chetawani-dete-hain-bjp-mla-threatens-protests-over-deepika-padukone-s-saffron-outfit-in-king/ar-AA2gRRgl
                      - text: "Shah Rukh Khan ko chetawani dete hain: BJP MLA threatens protests over Deepika Padukone's saffron outfit in King"
                  - 'generic "Shah Rukh Khan ko chetawani dete hain: BJP MLA threatens protests over Deepika Padukone''s saffron outfit in King" [ref=e319]':
                    - generic [ref=e321]:
                      - generic [ref=e322]:
                        - button "25 Likes" [ref=e323]:
                          - generic [ref=e324]:
                            - img [ref=e325]
                            - generic [ref=e327]: "25"
                        - button "Dislike" [ref=e328]:
                          - img [ref=e330]
                      - link "View comments 8 Comment" [ref=e333]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/shah-rukh-khan-ko-chetawani-dete-hain-bjp-mla-threatens-protests-over-deepika-padukone-s-saffron-outfit-in-king/ar-AA2gRRgl#comments
                        - button "View comments 8 Comment" [ref=e334]:
                          - img [ref=e335]
                        - generic [ref=e337]: "8"
                - generic [ref=e338]:
                  - button "Hide this story" [ref=e339]:
                    - img [ref=e340]
                    - text: Hide this story
                  - button "See more" [ref=e341]:
                    - img [ref=e342]
            - article [ref=e343] [cursor=pointer]:
              - generic [ref=e347]:
                - generic: Sponsored
            - 'article "70-year-old father reflects on the one thing he would have done differently: \"If I were 40 again, I would never...\"" [ref=e348] [cursor=pointer]':
              - generic [ref=e350]:
                - img [ref=e351]
                - generic [ref=e352]:
                  - generic [ref=e353]:
                    - generic [ref=e355]:
                      - img [ref=e356]
                      - generic [ref=e357]: The Times of India
                    - 'link "70-year-old father reflects on the one thing he would have done differently: \"If I were 40 again, I would never...\", The Times of India" [ref=e358]':
                      - /url: https://www.msn.com/en-in/news/other/70-year-old-father-reflects-on-the-one-thing-he-would-have-done-differently-if-i-were-40-again-i-would-never/ar-AA25hgP5
                      - text: "70-year-old father reflects on the one thing he would have done differently: \"If I were 40 again, I would never...\""
                  - 'generic "70-year-old father reflects on the one thing he would have done differently: \"If I were 40 again, I would never...\"" [ref=e361]':
                    - generic [ref=e363]:
                      - generic [ref=e364]:
                        - button "299 Likes" [ref=e365]:
                          - generic [ref=e366]:
                            - img [ref=e367]
                            - generic [ref=e369]: "299"
                        - button "Dislike" [ref=e370]:
                          - img [ref=e372]
                      - link "View comments 5 Comment" [ref=e375]:
                        - /url: https://www.msn.com/en-in/news/other/70-year-old-father-reflects-on-the-one-thing-he-would-have-done-differently-if-i-were-40-again-i-would-never/ar-AA25hgP5#comments
                        - button "View comments 5 Comment" [ref=e376]:
                          - img [ref=e377]
                        - generic [ref=e379]: "5"
                - generic [ref=e380]:
                  - button "Hide this story" [ref=e381]:
                    - img [ref=e382]
                    - text: Hide this story
                  - button "See more" [ref=e383]:
                    - img [ref=e384]
            - article [ref=e385] [cursor=pointer]:
              - generic [ref=e391]:
                - generic [ref=e393]:
                  - link "Phoenix" [ref=e395]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
                    - heading "Phoenix" [level=2] [ref=e396]
                  - button "My location" [ref=e397]
                  - button "More options" [ref=e399]
                - generic [ref=e403]:
                  - generic [ref=e404]:
                    - generic [ref=e406]:
                      - link "Partly cloudy" [ref=e407]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
                        - img "Partly cloudy" [ref=e408]
                      - link "16°C" [ref=e409]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
                        - generic [ref=e410]: ‎16‎
                        - generic [ref=e412]: ‎°C‎
                    - generic [ref=e414]:
                      - link "Good air quality" [ref=e416]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona&fcsttab=airquality
                        - text: Good air quality
                      - link "See full forecast" [ref=e418]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona&fcsttab=airquality
                        - img "arrow" [ref=e419]
                  - generic [ref=e424]:
                    - link "Larger map" [ref=e425]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Phoenix,Arizona
                      - generic [ref=e426]:
                        - generic:
                          - generic:
                            - img
                            - img
                            - img
                            - img
                      - img
                    - link "Check global air quality" [ref=e427]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Phoenix,Arizona
                      - img [ref=e429]
                      - generic "Check global air quality" [ref=e430]
                      - img [ref=e432]
                - button "See full forecast" [ref=e435]
            - article [ref=e436] [cursor=pointer]:
              - generic [ref=e441]:
                - generic [ref=e443]:
                  - link "Top stories" [ref=e445]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6aedb3036e7b496b949c19b0b7690e87&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e446]
                  - button "More options" [ref=e448]
                - list [ref=e451]:
                  - listitem [ref=e452]:
                    - link "Times Now 2h Bombay High Court receives threat email; BDDS conducts security sweep, checks at 3 locations" [ref=e453]:
                      - /url: https://www.msn.com/en-in/news/other/bombay-high-court-receives-threat-email-bdds-conducts-security-sweep-checks-at-3-locations/ar-AA2gSpuK
                      - generic [ref=e454]:
                        - generic [ref=e455]:
                          - img [ref=e456]
                          - generic [ref=e457]:
                            - generic: Times Now ·2h
                        - generic [ref=e458]: Bombay High Court receives threat email; BDDS conducts security sweep, checks at 3 locations
                  - listitem [ref=e459]:
                    - link "News18 1h Fire breaks out on Bengal-bound Karmabhoomi Express in Punjab, passengers rush out in panic" [ref=e460]:
                      - /url: https://www.msn.com/en-in/news/other/fire-breaks-out-on-bengal-bound-karmabhoomi-express-in-punjab-passengers-rush-out-in-panic/ar-AA2gSnAf
                      - generic [ref=e461]:
                        - generic [ref=e462]:
                          - img [ref=e463]
                          - generic [ref=e464]:
                            - generic: News18 ·1h
                        - generic [ref=e465]: Fire breaks out on Bengal-bound Karmabhoomi Express in Punjab, passengers rush out in panic
                  - listitem [ref=e466]:
                    - 'link "Press Trust of India 38m Bengaluru: Cab driver kills wife, six members of her family" [ref=e467]':
                      - /url: https://www.msn.com/en-in/news/other/bengaluru-cab-driver-kills-wife-six-members-of-her-family/ar-AA2gS0Ya
                      - generic [ref=e468]:
                        - generic [ref=e469]:
                          - img [ref=e470]
                          - generic [ref=e471]:
                            - generic: Press Trust of India ·38m
                        - generic [ref=e472]: "Bengaluru: Cab driver kills wife, six members of her family"
                - generic [ref=e474]:
                  - generic [ref=e475]:
                    - generic "Previous" [ref=e476]:
                      - button "Previous" [ref=e477]
                    - tablist [ref=e479]:
                      - tab "Page 1" [selected] [ref=e480]
                      - tab "Page 2" [ref=e482]
                      - tab "Page 3" [ref=e484]
                    - generic "Next" [ref=e486]:
                      - button "Next" [ref=e487]
                  - link "See more" [ref=e489]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6aedb3036e7b496b949c19b0b7690e87&ocid=hpmsn
            - article "Do you often see 11:11? Here's why many believe it's more than a coincidence" [ref=e490] [cursor=pointer]:
              - generic [ref=e492]:
                - img [ref=e493]
                - generic [ref=e494]:
                  - generic [ref=e495]:
                    - generic [ref=e497]:
                      - img [ref=e498]
                      - generic [ref=e499]: News18
                    - link "Do you often see 11:11? Here's why many believe it's more than a coincidence, News18" [ref=e500]:
                      - /url: https://www.msn.com/en-in/news/other/do-you-often-see-11-11-here-s-why-many-believe-it-s-more-than-a-coincidence/ss-AA28b6IT
                      - text: Do you often see 11:11? Here's why many believe it's more than a coincidence
                  - generic "Do you often see 11:11? Here's why many believe it's more than a coincidence" [ref=e503]:
                    - generic [ref=e505]:
                      - generic [ref=e506]:
                        - button "3,182 Likes" [ref=e507]:
                          - generic [ref=e508]:
                            - img [ref=e509]
                            - generic [ref=e511]: 3k
                        - button "Dislike" [ref=e512]:
                          - img [ref=e514]
                      - link "View comments 6 Comment" [ref=e517]:
                        - /url: https://www.msn.com/en-in/news/other/do-you-often-see-11-11-here-s-why-many-believe-it-s-more-than-a-coincidence/ss-AA28b6IT#comments
                        - button "View comments 6 Comment" [ref=e518]:
                          - img [ref=e519]
                        - generic [ref=e521]: "6"
                - generic [ref=e522]:
                  - button "Hide this story" [ref=e523]:
                    - img [ref=e524]
                    - text: Hide this story
                  - button "See more" [ref=e525]:
                    - img [ref=e526]
            - article "Lucknow boy, 13, collapses moments after entering classroom, dies of cardiac arrest" [ref=e527] [cursor=pointer]:
              - generic [ref=e529]:
                - img [ref=e530]
                - generic [ref=e531]:
                  - generic [ref=e532]:
                    - generic [ref=e533]:
                      - generic [ref=e534]:
                        - img [ref=e535]
                        - generic [ref=e536]: India Today
                      - generic [ref=e537]: ·
                      - generic [ref=e538]: 4h
                    - link "Lucknow boy, 13, collapses moments after entering classroom, dies of cardiac arrest, India Today" [ref=e539]:
                      - /url: https://www.msn.com/en-in/news/other/lucknow-boy-13-collapses-moments-after-entering-classroom-dies-of-cardiac-arrest/ar-AA2gS49j
                      - text: Lucknow boy, 13, collapses moments after entering classroom, dies of cardiac arrest
                  - generic "Lucknow boy, 13, collapses moments after entering classroom, dies of cardiac arrest" [ref=e542]:
                    - generic [ref=e544]:
                      - generic [ref=e545]:
                        - button "8 Likes" [ref=e546]:
                          - generic [ref=e547]:
                            - img [ref=e548]
                            - generic [ref=e550]: "8"
                        - button "Dislike" [ref=e551]:
                          - img [ref=e553]
                      - link "Start the conversation" [ref=e556]:
                        - /url: https://www.msn.com/en-in/news/other/lucknow-boy-13-collapses-moments-after-entering-classroom-dies-of-cardiac-arrest/ar-AA2gS49j#comments
                        - button "Start the conversation" [ref=e557]:
                          - img [ref=e558]
                - generic [ref=e560]:
                  - button "Hide this story" [ref=e561]:
                    - img [ref=e562]
                    - text: Hide this story
                  - button "See more" [ref=e563]:
                    - img [ref=e564]
            - article "Why you should throw a water bottle under your hotel bed, 99% guests skip this safety trick" [ref=e565] [cursor=pointer]:
              - generic [ref=e567]:
                - img [ref=e568]
                - generic [ref=e569]:
                  - generic [ref=e570]:
                    - generic [ref=e572]:
                      - img [ref=e573]
                      - generic [ref=e574]: News18
                    - link "Why you should throw a water bottle under your hotel bed, 99% guests skip this safety trick, News18" [ref=e575]:
                      - /url: https://www.msn.com/en-in/news/other/why-you-should-throw-a-water-bottle-under-your-hotel-bed-99-guests-skip-this-safety-trick/ss-AA25MEe4
                      - text: Why you should throw a water bottle under your hotel bed, 99% guests skip this safety trick
                  - generic "Why you should throw a water bottle under your hotel bed, 99% guests skip this safety trick" [ref=e578]:
                    - generic [ref=e580]:
                      - generic [ref=e581]:
                        - button "132 Likes" [ref=e582]:
                          - generic [ref=e583]:
                            - img [ref=e584]
                            - generic [ref=e586]: "132"
                        - button "Dislike" [ref=e587]:
                          - img [ref=e589]
                      - link "View comments 14 Comment" [ref=e592]:
                        - /url: https://www.msn.com/en-in/news/other/why-you-should-throw-a-water-bottle-under-your-hotel-bed-99-guests-skip-this-safety-trick/ss-AA25MEe4#comments
                        - button "View comments 14 Comment" [ref=e593]:
                          - img [ref=e594]
                        - generic [ref=e596]: "14"
                - generic [ref=e597]:
                  - button "Hide this story" [ref=e598]:
                    - img [ref=e599]
                    - text: Hide this story
                  - button "See more" [ref=e600]:
                    - img [ref=e601]
          - generic [ref=e602]:
            - article [ref=e603] [cursor=pointer]:
              - generic [ref=e608]:
                - generic [ref=e610]:
                  - link "Top Engaging News" [ref=e612]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6aedb3036e7b496b949c19b0b7690e87
                    - heading "Top Engaging News" [level=2] [ref=e613]
                  - button "More options" [ref=e615]
                - generic [ref=e617]:
                  - link "News18 11 Comments Jim Carrey marries for the 3rd time at 64, ties knot with 32-year-old girlfriend Min Ah" [ref=e619]:
                    - /url: https://www.msn.com/en-in/entertainment/celebrities/jim-carrey-marries-for-the-3rd-time-at-64-ties-knot-with-32-year-old-girlfriend-min-ah/ar-AA2dk8bG
                    - generic [ref=e620]:
                      - img [ref=e621]
                      - generic [ref=e622]: News18
                      - link "11 Comments" [ref=e624]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/jim-carrey-marries-for-the-3rd-time-at-64-ties-knot-with-32-year-old-girlfriend-min-ah/ar-AA2dk8bG#comments
                        - img [ref=e625]
                        - paragraph [ref=e626]: "11"
                    - paragraph [ref=e627]: Jim Carrey marries for the 3rd time at 64, ties knot with 32-year-old girlfriend Min Ah
                  - 'link "Hindustan Times 3 Comments Australians are laid-back: Indian man compares public holidays in Australia and India, internet reacts" [ref=e629]':
                    - /url: https://www.msn.com/en-in/news/other/australians-are-laid-back-indian-man-compares-public-holidays-in-australia-and-india-internet-reacts/ar-AA2dmmhs
                    - generic [ref=e630]:
                      - img [ref=e631]
                      - generic [ref=e632]: Hindustan Times
                      - link "3 Comments" [ref=e634]:
                        - /url: https://www.msn.com/en-in/news/other/australians-are-laid-back-indian-man-compares-public-holidays-in-australia-and-india-internet-reacts/ar-AA2dmmhs#comments
                        - img [ref=e635]
                        - paragraph [ref=e636]: "3"
                    - paragraph [ref=e637]: "Australians are laid-back: Indian man compares public holidays in Australia and India, internet reacts"
                  - link "ABP - Live 2 Comments Washington Sundar out of India T20I squad, BCCI names surprise replacement" [ref=e639]:
                    - /url: https://www.msn.com/en-in/sports/cricket/washington-sundar-out-of-india-t20i-squad-bcci-names-surprise-replacement/ar-AA2dltlt
                    - generic [ref=e640]:
                      - img [ref=e641]
                      - generic [ref=e642]: ABP - Live
                      - link "2 Comments" [ref=e644]:
                        - /url: https://www.msn.com/en-in/sports/cricket/washington-sundar-out-of-india-t20i-squad-bcci-names-surprise-replacement/ar-AA2dltlt#comments
                        - img [ref=e645]
                        - paragraph [ref=e646]: "2"
                    - paragraph [ref=e647]: Washington Sundar out of India T20I squad, BCCI names surprise replacement
                - generic [ref=e649]:
                  - generic [ref=e650]:
                    - generic "Previous" [ref=e651]:
                      - button "Previous" [ref=e652]
                    - tablist [ref=e654]:
                      - tab "Page 1" [selected] [ref=e655]
                      - tab "Page 2" [ref=e657]
                      - tab "Page 3" [ref=e659]
                    - generic "Next" [ref=e661]:
                      - button "Next" [ref=e662]
                  - link "See more" [ref=e664]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6aedb3036e7b496b949c19b0b7690e87
            - article [ref=e665] [cursor=pointer]:
              - generic [ref=e671]:
                - generic [ref=e673]:
                  - img "Watchlist suggestions" [ref=e675]
                  - link "Watchlist suggestions" [ref=e676]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e677]
                  - button "More options" [ref=e679]
                - generic [ref=e684]:
                  - link "SENSEX SENSEX Rising fast ‎+2.17%‎ 81,028.02" [ref=e686]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkucw&noti=Price&ocid=hpmsn
                    - generic [ref=e687]:
                      - generic [ref=e688]:
                        - generic [ref=e689]: SENSEX
                        - img "SENSEX" [ref=e690]
                      - generic [ref=e692]: Rising fast
                    - generic [ref=e697]:
                      - generic [ref=e698]: ‎+2.17%‎
                      - generic [ref=e699]: 81,028.02
                    - button "Add to watchlist" [ref=e702]:
                      - img [ref=e703]
                  - link "NIFTY NIFTY Rising fast ‎+2.01%‎ 25,030.35" [ref=e707]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkqww&noti=Price&ocid=hpmsn
                    - generic [ref=e708]:
                      - generic [ref=e709]:
                        - generic [ref=e710]: NIFTY
                        - img "NIFTY" [ref=e711]
                      - generic [ref=e713]: Rising fast
                    - generic [ref=e718]:
                      - generic [ref=e719]: ‎+2.01%‎
                      - generic [ref=e720]: 25,030.35
                    - button "Add to watchlist" [ref=e723]:
                      - img [ref=e724]
                  - link "USD/INR US Dollar/Indian Rupee ‎-0.60%‎ 93.905" [ref=e728]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=avyo8m&ocid=hpmsn
                    - generic [ref=e729]:
                      - generic [ref=e731]: USD/INR
                      - generic [ref=e733]: US Dollar/Indian Rupee
                    - generic [ref=e738]:
                      - generic [ref=e739]: ‎-0.60%‎
                      - generic [ref=e740]: "93.905"
                    - button "Add to watchlist" [ref=e743]:
                      - img [ref=e744]
                  - link "GBP/INR British Pound/Indian Rupee ‎-1.01%‎ 125.776" [ref=e748]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=avydm7&ocid=hpmsn
                    - generic [ref=e749]:
                      - generic [ref=e751]: GBP/INR
                      - generic [ref=e753]: British Pound/Indian Rupee
                    - generic [ref=e758]:
                      - generic [ref=e759]: ‎-1.01%‎
                      - generic [ref=e760]: "125.776"
                    - button "Add to watchlist" [ref=e763]:
                      - img [ref=e764]
                  - link "24K Gold (10 Grams) - Indian Rupee XAUINR ‎+0.69%‎ 144496" [ref=e768]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&ocid=hpmsn
                    - generic [ref=e769]:
                      - generic [ref=e771]: 24K Gold (10 Grams) - Indian Rupee
                      - generic [ref=e773]: XAUINR
                    - generic [ref=e778]:
                      - generic [ref=e779]: ‎+0.69%‎
                      - generic [ref=e780]: "144496"
                    - button "Add to watchlist" [ref=e783]:
                      - img [ref=e784]
                - generic [ref=e788]:
                  - generic [ref=e789]:
                    - generic "Previous" [ref=e790]:
                      - button "Previous" [ref=e791]
                    - tablist [ref=e793]:
                      - tab "Page 1" [selected] [ref=e794]
                      - tab "Page 2" [ref=e796]
                      - tab "Page 3" [ref=e798]
                      - tab "Page 4" [ref=e800]
                      - tab "Page 5" [ref=e802]
                      - tab "Page 6"
                      - tab "Page 7"
                    - generic "Next" [ref=e804]:
                      - button "Next" [ref=e805]
                  - link "See watchlist suggestions" [ref=e807]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - 'article "Warren Buffett, 96, has not had water in 48 years: No thank you. I''ll have a…" [ref=e808] [cursor=pointer]':
              - generic [ref=e810]:
                - img [ref=e811]
                - generic [ref=e812]:
                  - generic [ref=e813]:
                    - generic [ref=e814]:
                      - generic [ref=e815]:
                        - img [ref=e816]
                        - generic [ref=e817]: The Indian Express
                      - generic [ref=e818]: ·
                      - generic [ref=e819]: 3d
                    - 'link "Warren Buffett, 96, has not had water in 48 years: No thank you. I''ll have a…, The Indian Express" [ref=e820]':
                      - /url: https://www.msn.com/en-in/money/general/warren-buffett-96-has-not-had-water-in-48-years-no-thank-you-i-ll-have-a/ar-AA2gBlGv
                      - text: "Warren Buffett, 96, has not had water in 48 years: No thank you. I'll have a…"
                  - 'generic "Warren Buffett, 96, has not had water in 48 years: No thank you. I''ll have a…" [ref=e823]':
                    - generic [ref=e825]:
                      - generic [ref=e826]:
                        - button "87 Likes" [ref=e827]:
                          - generic [ref=e828]:
                            - img [ref=e829]
                            - generic [ref=e831]: "87"
                        - button "Dislike" [ref=e832]:
                          - img [ref=e834]
                      - link "View comments 8 Comment" [ref=e837]:
                        - /url: https://www.msn.com/en-in/money/general/warren-buffett-96-has-not-had-water-in-48-years-no-thank-you-i-ll-have-a/ar-AA2gBlGv#comments
                        - button "View comments 8 Comment" [ref=e838]:
                          - img [ref=e839]
                        - generic [ref=e841]: "8"
                - generic [ref=e842]:
                  - button "Hide this story" [ref=e843]:
                    - img [ref=e844]
                    - text: Hide this story
                  - button "See more" [ref=e845]:
                    - img [ref=e846]
            - article "Tharoor hails Nithya Raman’s LA mayoral win, says Indian mayors are left powerless" [ref=e847] [cursor=pointer]:
              - generic [ref=e849]:
                - img [ref=e850]
                - generic [ref=e851]:
                  - generic [ref=e852]:
                    - generic [ref=e853]:
                      - generic [ref=e854]:
                        - img [ref=e855]
                        - generic [ref=e856]: Moneycontrol
                      - generic [ref=e857]: ·
                      - generic [ref=e858]: 6h
                    - link "Tharoor hails Nithya Raman’s LA mayoral win, says Indian mayors are left powerless, Moneycontrol" [ref=e859]:
                      - /url: https://www.msn.com/en-in/news/other/tharoor-hails-nithya-raman-s-la-mayoral-win-says-indian-mayors-are-left-powerless/ar-AA2gRrIj
                      - text: Tharoor hails Nithya Raman’s LA mayoral win, says Indian mayors are left powerless
                  - generic "Tharoor hails Nithya Raman’s LA mayoral win, says Indian mayors are left powerless" [ref=e862]:
                    - generic [ref=e864]:
                      - generic [ref=e865]:
                        - button "1 Like" [ref=e866]:
                          - generic [ref=e867]:
                            - img [ref=e868]
                            - generic [ref=e870]: "1"
                        - button "Dislike" [ref=e871]:
                          - img [ref=e873]
                      - link "View comments 2 Comment" [ref=e876]:
                        - /url: https://www.msn.com/en-in/news/other/tharoor-hails-nithya-raman-s-la-mayoral-win-says-indian-mayors-are-left-powerless/ar-AA2gRrIj#comments
                        - button "View comments 2 Comment" [ref=e877]:
                          - img [ref=e878]
                        - generic [ref=e880]: "2"
                - generic [ref=e881]:
                  - button "Hide this story" [ref=e882]:
                    - img [ref=e883]
                    - text: Hide this story
                  - button "See more" [ref=e884]:
                    - img [ref=e885]
            - article [ref=e886] [cursor=pointer]
            - article "This hybrid predator is part polar bear, part grizzly – and it’s spreading" [ref=e893] [cursor=pointer]:
              - generic [ref=e895]:
                - button "Play video preview" [ref=e899]
                - generic [ref=e900]:
                  - generic [ref=e901]:
                    - generic [ref=e902]:
                      - generic [ref=e903]:
                        - img [ref=e904]
                        - generic [ref=e905]: Real Science
                      - generic [ref=e906]: ·
                      - generic [ref=e907]: 2w
                    - link "This hybrid predator is part polar bear, part grizzly – and it’s spreading, Real Science" [ref=e908]:
                      - /url: https://www.msn.com/en-in/news/other/this-hybrid-predator-is-part-polar-bear-part-grizzly-and-it-s-spreading/vi-AA20WGCV
                      - text: This hybrid predator is part polar bear, part grizzly – and it’s spreading
                  - generic "This hybrid predator is part polar bear, part grizzly – and it’s spreading" [ref=e911]:
                    - generic [ref=e913]:
                      - generic [ref=e914]:
                        - button "305 Likes" [ref=e915]:
                          - generic [ref=e916]:
                            - img [ref=e917]
                            - generic [ref=e919]: "305"
                        - button "Dislike" [ref=e920]:
                          - img [ref=e922]
                      - link "Start the conversation" [ref=e925]:
                        - /url: https://www.msn.com/en-in/news/other/this-hybrid-predator-is-part-polar-bear-part-grizzly-and-it-s-spreading/vi-AA20WGCV#comments
                        - button "Start the conversation" [ref=e926]:
                          - img [ref=e927]
                - generic [ref=e929]:
                  - button "Hide this story" [ref=e930]:
                    - img [ref=e931]
                    - text: Hide this story
                  - button "See more" [ref=e932]:
                    - img [ref=e933]
            - article [ref=e934] [cursor=pointer]
            - article "Veteran comic artiste Mushtaq Khan passes away at age 76" [ref=e941] [cursor=pointer]:
              - generic [ref=e943]:
                - img [ref=e944]
                - generic [ref=e945]:
                  - generic [ref=e946]:
                    - generic [ref=e948]:
                      - img [ref=e949]
                      - generic [ref=e950]: The Times of India
                    - link "Veteran comic artiste Mushtaq Khan passes away at age 76, The Times of India" [ref=e951]:
                      - /url: https://www.msn.com/en-in/entertainment/celebrities/veteran-comic-artiste-mushtaq-khan-passes-away-at-age-76/ar-AA2cUYvo
                      - text: Veteran comic artiste Mushtaq Khan passes away at age 76
                  - generic "Veteran comic artiste Mushtaq Khan passes away at age 76" [ref=e954]:
                    - generic [ref=e956]:
                      - generic [ref=e957]:
                        - button "51 Likes" [ref=e958]:
                          - generic [ref=e959]:
                            - img [ref=e960]
                            - generic [ref=e962]: "51"
                        - button "Dislike" [ref=e963]:
                          - img [ref=e965]
                      - link "View comments 1 Comment" [ref=e968]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/veteran-comic-artiste-mushtaq-khan-passes-away-at-age-76/ar-AA2cUYvo#comments
                        - button "View comments 1 Comment" [ref=e969]:
                          - img [ref=e970]
                        - generic [ref=e972]: "1"
                - generic [ref=e973]:
                  - button "Hide this story" [ref=e974]:
                    - img [ref=e975]
                    - text: Hide this story
                  - button "See more" [ref=e976]:
                    - img [ref=e977]
          - article [ref=e979]
          - generic [ref=e981]:
            - article [ref=e982] [cursor=pointer]:
              - generic [ref=e987]:
                - generic [ref=e988]:
                  - generic [ref=e989]:
                    - link "Recommended videos" [ref=e990]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e991]
                    - link "Recommended videos" [ref=e994]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e995]:
                    - generic:
                      - link "See more" [ref=e996]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e997]:
                        - button "More options" [ref=e998]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e1000]:
                  - generic [ref=e1002]:
                    - generic [ref=e1004]:
                      - generic:
                        - article "Nick DiGiovanni built a lemon meringue pie with a tall, toasted finish" [ref=e1007]:
                          - generic [ref=e1008]:
                            - img "Nick DiGiovanni Built a Lemon Meringue Pie With a Tall, Toasted Finish" [ref=e1010]
                            - generic [ref=e1012]: 05:26
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1013]:
                              - generic [ref=e1014]:
                                - img "Nick's Kitchen" [ref=e1015]
                                - generic [ref=e1016]:
                                  - generic:
                                    - generic "Nick's Kitchen" [ref=e1017]
                                    - generic [ref=e1018]: ·
                                    - generic [ref=e1019]: 30m
                              - link "Nick DiGiovanni built a lemon meringue pie with a tall, toasted finish" [ref=e1020]:
                                - /url: https://www.msn.com/en-in/food-and-drink/recipes/nick-digiovanni-built-a-lemon-meringue-pie-with-a-tall-toasted-finish/vi-AA2gSFGH?ocid=hpmsn
                                - heading "Nick DiGiovanni built a lemon meringue pie with a tall, toasted finish" [level=2] [ref=e1021]:
                                  - generic: Nick DiGiovanni built a lemon meringue pie with a tall, toasted finish
                            - button "See more" [ref=e1025]
                        - article "An assassin’s bullet hit Bob Marley - then he made his greatest statement" [ref=e1028]:
                          - generic [ref=e1029]:
                            - img "“An Assassin’s Bullet Hit Bob Marley” - Then He Made His Greatest Statement" [ref=e1031]
                            - generic [ref=e1033]: 18:23
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1034]:
                              - generic [ref=e1035]:
                                - img "Polyphonic" [ref=e1036]
                                - generic [ref=e1037]:
                                  - generic:
                                    - generic "Polyphonic" [ref=e1038]
                                    - generic [ref=e1039]: ·
                                    - generic [ref=e1040]: 21h
                              - link "An assassin’s bullet hit Bob Marley - then he made his greatest statement" [ref=e1041]:
                                - /url: https://www.msn.com/en-in/news/other/an-assassin-s-bullet-hit-bob-marley-then-he-made-his-greatest-statement/vi-AA24PGPW?ocid=hpmsn
                                - heading "An assassin’s bullet hit Bob Marley - then he made his greatest statement" [level=2] [ref=e1042]:
                                  - generic: An assassin’s bullet hit Bob Marley - then he made his greatest statement
                            - button "See more" [ref=e1046]
                        - article "This Paris apartment is only 645 square feet - then a hidden staircase reveals another bedroom" [ref=e1049]:
                          - generic [ref=e1050]:
                            - img "This Paris Apartment Is Only 645 Square Feet - Then a Hidden Staircase Reveals Another Bedroom" [ref=e1052]
                            - generic [ref=e1054]: 10:06
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1055]:
                              - generic [ref=e1056]:
                                - img "NEVER TOO SMALL" [ref=e1057]
                                - generic [ref=e1058]:
                                  - generic:
                                    - generic "NEVER TOO SMALL" [ref=e1059]
                                    - generic [ref=e1060]: ·
                                    - generic [ref=e1061]: 25m
                              - link "This Paris apartment is only 645 square feet - then a hidden staircase reveals another bedroom" [ref=e1062]:
                                - /url: https://www.msn.com/en-in/news/other/this-paris-apartment-is-only-645-square-feet-then-a-hidden-staircase-reveals-another-bedroom/vi-AA2e91wk?ocid=hpmsn
                                - heading "This Paris apartment is only 645 square feet - then a hidden staircase reveals another bedroom" [level=2] [ref=e1063]:
                                  - generic: This Paris apartment is only 645 square feet - then a hidden staircase reveals another bedroom
                            - button "See more" [ref=e1067]
                        - article [ref=e1070]:
                          - generic [ref=e1071]:
                            - img "Watch a $200 Warship Hide Its 57mm Gun - Then Open Fire" [ref=e1073]
                            - generic [ref=e1075]: 22:13
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1076]:
                              - generic [ref=e1077]:
                                - img "Sam Eckholm" [ref=e1078]
                                - generic [ref=e1079]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1080]
                                    - generic [ref=e1081]: ·
                                    - generic [ref=e1082]: 43m
                              - link "Watch a $200 warship hide its 57mm gun - then open fire" [ref=e1083]:
                                - /url: https://www.msn.com/en-in/news/other/watch-a-200-warship-hide-its-57mm-gun-then-open-fire/vi-AA2aRkq0?ocid=hpmsn
                                - heading "Watch a $200 warship hide its 57mm gun - then open fire" [level=2] [ref=e1084]:
                                  - generic: Watch a $200 warship hide its 57mm gun - then open fire
                            - button "See more" [ref=e1088]
                        - article "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [ref=e1091]:
                          - generic [ref=e1092]:
                            - img "Trevor Noah Breaks Down the Real Reason Idris Elba could NOT play James Bond Thumbnail" [ref=e1094]
                            - generic [ref=e1096]: 09:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1097]:
                              - generic [ref=e1098]:
                                - img "Trevor Noah" [ref=e1099]
                                - generic [ref=e1100]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1101]
                                    - generic [ref=e1102]: ·
                                    - generic [ref=e1103]: 6d
                              - link "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [ref=e1104]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/trevor-noah-breaks-down-the-real-reason-idris-elba-could-not-play-james-bond/vi-AA2grxdN?ocid=hpmsn
                                - heading "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [level=2] [ref=e1105]:
                                  - generic: Trevor Noah breaks down the real reason Idris Elba could not play James Bond
                            - button "See more" [ref=e1109]
                        - article "Danny Kim makes pho from a Costco rotisserie chicken in an Instant Pot" [ref=e1112]:
                          - generic [ref=e1113]:
                            - img "Danny Kim Makes Pho From a Costco Rotisserie Chicken in an Instant Pot" [ref=e1115]
                            - generic [ref=e1117]: 08:20
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1118]:
                              - generic [ref=e1119]:
                                - img "Danny Grubs" [ref=e1120]
                                - generic [ref=e1121]:
                                  - generic:
                                    - generic "Danny Grubs" [ref=e1122]
                                    - generic [ref=e1123]: ·
                                    - generic [ref=e1124]: 12m
                              - link "Danny Kim makes pho from a Costco rotisserie chicken in an Instant Pot" [ref=e1125]:
                                - /url: https://www.msn.com/en-in/food-and-drink/general/danny-kim-makes-pho-from-a-costco-rotisserie-chicken-in-an-instant-pot/vi-AA2gGHvX?ocid=hpmsn
                                - heading "Danny Kim makes pho from a Costco rotisserie chicken in an Instant Pot" [level=2] [ref=e1126]:
                                  - generic: Danny Kim makes pho from a Costco rotisserie chicken in an Instant Pot
                            - button "See more" [ref=e1130]
                        - article "A few potatoes became gnocchi - and the leftover skins became a crispy snack" [ref=e1133]:
                          - generic [ref=e1134]:
                            - img "A Few Potatoes Became Gnocchi - and the Leftover Skins Became a Crispy Snack" [ref=e1136]
                            - generic [ref=e1138]: 07:30
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1139]:
                              - generic [ref=e1140]:
                                - img "Nick's Kitchen" [ref=e1141]
                                - generic [ref=e1142]:
                                  - generic:
                                    - generic "Nick's Kitchen" [ref=e1143]
                                    - generic [ref=e1144]: ·
                                    - generic [ref=e1145]: 36m
                              - link "A few potatoes became gnocchi - and the leftover skins became a crispy snack" [ref=e1146]:
                                - /url: https://www.msn.com/en-in/food-and-drink/recipes/a-few-potatoes-became-gnocchi-and-the-leftover-skins-became-a-crispy-snack/vi-AA2gSPpX?ocid=hpmsn
                                - heading "A few potatoes became gnocchi - and the leftover skins became a crispy snack" [level=2] [ref=e1147]:
                                  - generic: A few potatoes became gnocchi - and the leftover skins became a crispy snack
                            - button "See more" [ref=e1151]
                        - article "Rubbing lemon zest into sugar added extra flavor to Nick’s creamy cheesecake" [ref=e1154]:
                          - generic [ref=e1155]:
                            - img "Rubbing Lemon Zest Into Sugar Added Extra Flavor to Nick’s Creamy Cheesecake" [ref=e1157]
                            - generic [ref=e1159]: 07:33
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1160]:
                              - generic [ref=e1161]:
                                - img "Nick's Kitchen" [ref=e1162]
                                - generic [ref=e1163]:
                                  - generic:
                                    - generic "Nick's Kitchen" [ref=e1164]
                                    - generic [ref=e1165]: ·
                                    - generic [ref=e1166]: 34m
                              - link "Rubbing lemon zest into sugar added extra flavor to Nick’s creamy cheesecake" [ref=e1167]:
                                - /url: https://www.msn.com/en-in/food-and-drink/recipes/rubbing-lemon-zest-into-sugar-added-extra-flavor-to-nick-s-creamy-cheesecake/vi-AA2gT1PD?ocid=hpmsn
                                - heading "Rubbing lemon zest into sugar added extra flavor to Nick’s creamy cheesecake" [level=2] [ref=e1168]:
                                  - generic: Rubbing lemon zest into sugar added extra flavor to Nick’s creamy cheesecake
                            - button "See more" [ref=e1172]
                        - article "Watch how a Japanese family of five lives in a tiny open-air Tokyo home" [ref=e1175]:
                          - generic [ref=e1176]:
                            - img "Watch How a Japanese Family of Five Lives in a Tiny Open-Air Tokyo Home" [ref=e1178]
                            - generic [ref=e1180]: 15:49
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1181]:
                              - generic [ref=e1182]:
                                - img "NEVER TOO SMALL" [ref=e1183]
                                - generic [ref=e1184]:
                                  - generic:
                                    - generic "NEVER TOO SMALL" [ref=e1185]
                                    - generic [ref=e1186]: ·
                                    - generic [ref=e1187]: 25m
                              - link "Watch how a Japanese family of five lives in a tiny open-air Tokyo home" [ref=e1188]:
                                - /url: https://www.msn.com/en-in/news/other/watch-how-a-japanese-family-of-five-lives-in-a-tiny-open-air-tokyo-home/vi-AA22GjMb?ocid=hpmsn
                                - heading "Watch how a Japanese family of five lives in a tiny open-air Tokyo home" [level=2] [ref=e1189]:
                                  - generic: Watch how a Japanese family of five lives in a tiny open-air Tokyo home
                            - button "See more" [ref=e1193]
                        - article "Nick DiGiovanni cooked chicken breast five ways to show how much technique matters" [ref=e1196]:
                          - generic [ref=e1197]:
                            - img "Nick DiGiovanni Cooked Chicken Breast Five Ways to Show How Much Technique Matters" [ref=e1199]
                            - generic [ref=e1201]: 09:20
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1202]:
                              - generic [ref=e1203]:
                                - img "Nick's Kitchen" [ref=e1204]
                                - generic [ref=e1205]:
                                  - generic:
                                    - generic "Nick's Kitchen" [ref=e1206]
                                    - generic [ref=e1207]: ·
                                    - generic [ref=e1208]: 39m
                              - link "Nick DiGiovanni cooked chicken breast five ways to show how much technique matters" [ref=e1209]:
                                - /url: https://www.msn.com/en-in/news/other/nick-digiovanni-cooked-chicken-breast-five-ways-to-show-how-much-technique-matters/vi-AA2gSiyY?ocid=hpmsn
                                - heading "Nick DiGiovanni cooked chicken breast five ways to show how much technique matters" [level=2] [ref=e1210]:
                                  - generic: Nick DiGiovanni cooked chicken breast five ways to show how much technique matters
                            - button "See more" [ref=e1214]
                        - link "See more" [ref=e1216]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1217]
                          - text: See more
                    - button "next" [ref=e1221]:
                      - img [ref=e1224]
            - article "A Yazidi family welcomed him for dolma and explained why they avoided lettuce" [ref=e1226] [cursor=pointer]:
              - generic [ref=e1228]:
                - button "Play video preview" [ref=e1233]
                - generic [ref=e1235]:
                  - generic [ref=e1236]:
                    - generic [ref=e1237]:
                      - generic [ref=e1238]:
                        - img [ref=e1239]
                        - generic [ref=e1240]: Best Ever Food Review Show
                      - generic [ref=e1241]: ·
                      - generic [ref=e1242]: 1h
                    - link "A Yazidi family welcomed him for dolma and explained why they avoided lettuce, Best Ever Food Review Show" [ref=e1243]:
                      - /url: https://www.msn.com/en-in/news/other/a-yazidi-family-welcomed-him-for-dolma-and-explained-why-they-avoided-lettuce/vi-AA2b9oNS
                      - text: A Yazidi family welcomed him for dolma and explained why they avoided lettuce
                  - generic "A Yazidi family welcomed him for dolma and explained why they avoided lettuce" [ref=e1246]:
                    - generic [ref=e1248]:
                      - generic [ref=e1249]:
                        - button "149 Likes" [ref=e1250]:
                          - generic [ref=e1251]:
                            - img [ref=e1252]
                            - generic [ref=e1254]: "149"
                        - button "Dislike" [ref=e1255]:
                          - img [ref=e1257]
                      - link "View comments 1 Comment" [ref=e1260]:
                        - /url: https://www.msn.com/en-in/news/other/a-yazidi-family-welcomed-him-for-dolma-and-explained-why-they-avoided-lettuce/vi-AA2b9oNS#comments
                        - button "View comments 1 Comment" [ref=e1261]:
                          - img [ref=e1262]
                        - generic [ref=e1264]: "1"
                - generic [ref=e1265]:
                  - button "Hide this story" [ref=e1266]:
                    - img [ref=e1267]
                    - text: Hide this story
                  - button "See more" [ref=e1268]:
                    - img [ref=e1269]
            - article "Bageshwar Dham's Dhirendra Shastri booked over remarks on Lord Krishna" [ref=e1270] [cursor=pointer]:
              - generic [ref=e1272]:
                - img [ref=e1273]
                - generic [ref=e1274]:
                  - generic [ref=e1275]:
                    - generic [ref=e1276]:
                      - generic [ref=e1277]:
                        - img [ref=e1278]
                        - generic [ref=e1279]: ABP - Live
                      - generic [ref=e1280]: ·
                      - generic [ref=e1281]: 7h
                    - link "Bageshwar Dham's Dhirendra Shastri booked over remarks on Lord Krishna, ABP - Live" [ref=e1282]:
                      - /url: https://www.msn.com/en-in/news/other/bageshwar-dham-s-dhirendra-shastri-booked-over-remarks-on-lord-krishna/ar-AA2gRVOy
                      - text: Bageshwar Dham's Dhirendra Shastri booked over remarks on Lord Krishna
                  - generic "Bageshwar Dham's Dhirendra Shastri booked over remarks on Lord Krishna" [ref=e1285]:
                    - generic [ref=e1287]:
                      - generic [ref=e1288]:
                        - button "38 Likes" [ref=e1289]:
                          - generic [ref=e1290]:
                            - img [ref=e1291]
                            - generic [ref=e1293]: "38"
                        - button "Dislike" [ref=e1294]:
                          - img [ref=e1296]
                      - link "View comments 7 Comment" [ref=e1299]:
                        - /url: https://www.msn.com/en-in/news/other/bageshwar-dham-s-dhirendra-shastri-booked-over-remarks-on-lord-krishna/ar-AA2gRVOy#comments
                        - button "View comments 7 Comment" [ref=e1300]:
                          - img [ref=e1301]
                        - generic [ref=e1303]: "7"
                - generic [ref=e1304]:
                  - button "Hide this story" [ref=e1305]:
                    - img [ref=e1306]
                    - text: Hide this story
                  - button "See more" [ref=e1307]:
                    - img [ref=e1308]
            - article "IIT grads left stunned as pani puri seller earns Rs 1.2 lakh monthly profit from one stall, owns a Scorpio" [ref=e1309] [cursor=pointer]:
              - generic [ref=e1311]:
                - img [ref=e1312]
                - generic [ref=e1313]:
                  - generic [ref=e1314]:
                    - generic [ref=e1315]:
                      - generic [ref=e1316]:
                        - img [ref=e1317]
                        - generic [ref=e1318]: Moneycontrol
                      - generic [ref=e1319]: ·
                      - generic [ref=e1320]: 3h
                    - link "IIT grads left stunned as pani puri seller earns Rs 1.2 lakh monthly profit from one stall, owns a Scorpio, Moneycontrol" [ref=e1321]:
                      - /url: https://www.msn.com/en-in/money/economy/iit-grads-left-stunned-as-pani-puri-seller-earns-rs-1-2-lakh-monthly-profit-from-one-stall-owns-a-scorpio/ar-AA2gSp4A
                      - text: IIT grads left stunned as pani puri seller earns Rs 1.2 lakh monthly profit from one stall, owns a Scorpio
                  - generic "IIT grads left stunned as pani puri seller earns Rs 1.2 lakh monthly profit from one stall, owns a Scorpio" [ref=e1324]:
                    - generic [ref=e1326]:
                      - generic [ref=e1327]:
                        - button "14 Likes" [ref=e1328]:
                          - generic [ref=e1329]:
                            - img [ref=e1330]
                            - generic [ref=e1332]: "14"
                        - button "Dislike" [ref=e1333]:
                          - img [ref=e1335]
                      - link "Start the conversation" [ref=e1338]:
                        - /url: https://www.msn.com/en-in/money/economy/iit-grads-left-stunned-as-pani-puri-seller-earns-rs-1-2-lakh-monthly-profit-from-one-stall-owns-a-scorpio/ar-AA2gSp4A#comments
                        - button "Start the conversation" [ref=e1339]:
                          - img [ref=e1340]
                - generic [ref=e1342]:
                  - button "Hide this story" [ref=e1343]:
                    - img [ref=e1344]
                    - text: Hide this story
                  - button "See more" [ref=e1345]:
                    - img [ref=e1346]
            - 'article "I never studied 15 or 12 hours, but I: Student who scored 99.2% in class 10th shares 5 practical study tips" [ref=e1347] [cursor=pointer]':
              - generic [ref=e1349]:
                - img [ref=e1350]
                - generic [ref=e1351]:
                  - generic [ref=e1352]:
                    - generic [ref=e1354]:
                      - img [ref=e1355]
                      - generic [ref=e1356]: The Times of India
                    - 'link "I never studied 15 or 12 hours, but I: Student who scored 99.2% in class 10th shares 5 practical study tips, The Times of India" [ref=e1357]':
                      - /url: https://www.msn.com/en-in/news/other/i-never-studied-15-or-12-hours-but-i-student-who-scored-99-2-in-class-10th-shares-5-practical-study-tips/ar-AA23e92u
                      - text: "I never studied 15 or 12 hours, but I: Student who scored 99.2% in class 10th shares 5 practical study tips"
                  - 'generic "I never studied 15 or 12 hours, but I: Student who scored 99.2% in class 10th shares 5 practical study tips" [ref=e1360]':
                    - generic [ref=e1362]:
                      - generic [ref=e1363]:
                        - button "2,400 Likes" [ref=e1364]:
                          - generic [ref=e1365]:
                            - img [ref=e1366]
                            - generic [ref=e1368]: 2k
                        - button "Dislike" [ref=e1369]:
                          - img [ref=e1371]
                      - link "View comments 22 Comment" [ref=e1374]:
                        - /url: https://www.msn.com/en-in/news/other/i-never-studied-15-or-12-hours-but-i-student-who-scored-99-2-in-class-10th-shares-5-practical-study-tips/ar-AA23e92u#comments
                        - button "View comments 22 Comment" [ref=e1375]:
                          - img [ref=e1376]
                        - generic [ref=e1378]: "22"
                - generic [ref=e1379]:
                  - button "Hide this story" [ref=e1380]:
                    - img [ref=e1381]
                    - text: Hide this story
                  - button "See more" [ref=e1382]:
                    - img [ref=e1383]
            - article [ref=e1384] [cursor=pointer]
            - article "Rise and Fall 2 winner Shehzad Poonawalla reveals why he is giving away Rs 35 lakh cash prize" [ref=e1391] [cursor=pointer]:
              - generic [ref=e1393]:
                - img [ref=e1394]
                - generic [ref=e1395]:
                  - generic [ref=e1396]:
                    - generic [ref=e1397]:
                      - generic [ref=e1398]:
                        - img [ref=e1399]
                        - generic [ref=e1400]: The Indian Express
                      - generic [ref=e1401]: ·
                      - generic [ref=e1402]: 3h
                    - link "Rise and Fall 2 winner Shehzad Poonawalla reveals why he is giving away Rs 35 lakh cash prize, The Indian Express" [ref=e1403]:
                      - /url: https://www.msn.com/en-in/entertainment/general/rise-and-fall-2-winner-shehzad-poonawalla-reveals-why-he-is-giving-away-rs-35-lakh-cash-prize/ar-AA2gSWkV
                      - text: Rise and Fall 2 winner Shehzad Poonawalla reveals why he is giving away Rs 35 lakh cash prize
                  - generic "Rise and Fall 2 winner Shehzad Poonawalla reveals why he is giving away Rs 35 lakh cash prize" [ref=e1406]:
                    - generic [ref=e1408]:
                      - generic [ref=e1409]:
                        - button "1 Like" [ref=e1410]:
                          - generic [ref=e1411]:
                            - img [ref=e1412]
                            - generic [ref=e1414]: "1"
                        - button "Dislike" [ref=e1415]:
                          - img [ref=e1417]
                      - link "Start the conversation" [ref=e1420]:
                        - /url: https://www.msn.com/en-in/entertainment/general/rise-and-fall-2-winner-shehzad-poonawalla-reveals-why-he-is-giving-away-rs-35-lakh-cash-prize/ar-AA2gSWkV#comments
                        - button "Start the conversation" [ref=e1421]:
                          - img [ref=e1422]
                - generic [ref=e1424]:
                  - button "Hide this story" [ref=e1425]:
                    - img [ref=e1426]
                    - text: Hide this story
                  - button "See more" [ref=e1427]:
                    - img [ref=e1428]
          - generic [ref=e1429]:
            - article [ref=e1430] [cursor=pointer]
            - article "Bowler who contained Vaibhav Sooryavanshi at U-19 Asia Cup now targets Dravid and Sehwag's sons" [ref=e1437] [cursor=pointer]:
              - generic [ref=e1439]:
                - img [ref=e1440]
                - generic [ref=e1441]:
                  - generic [ref=e1442]:
                    - generic [ref=e1443]:
                      - generic [ref=e1444]:
                        - img [ref=e1445]
                        - generic [ref=e1446]: Moneycontrol
                      - generic [ref=e1447]: ·
                      - generic [ref=e1448]: 4h
                    - link "Bowler who contained Vaibhav Sooryavanshi at U-19 Asia Cup now targets Dravid and Sehwag's sons, Moneycontrol" [ref=e1449]:
                      - /url: https://www.msn.com/en-in/sports/cricket/bowler-who-contained-vaibhav-sooryavanshi-at-u-19-asia-cup-now-targets-dravid-and-sehwag-s-sons/ar-AA2gSc4W
                      - text: Bowler who contained Vaibhav Sooryavanshi at U-19 Asia Cup now targets Dravid and Sehwag's sons
                  - generic "Bowler who contained Vaibhav Sooryavanshi at U-19 Asia Cup now targets Dravid and Sehwag's sons" [ref=e1452]:
                    - generic [ref=e1454]:
                      - generic [ref=e1455]:
                        - button "6 Likes" [ref=e1456]:
                          - generic [ref=e1457]:
                            - img [ref=e1458]
                            - generic [ref=e1460]: "6"
                        - button "Dislike" [ref=e1461]:
                          - img [ref=e1463]
                      - link "Start the conversation" [ref=e1466]:
                        - /url: https://www.msn.com/en-in/sports/cricket/bowler-who-contained-vaibhav-sooryavanshi-at-u-19-asia-cup-now-targets-dravid-and-sehwag-s-sons/ar-AA2gSc4W#comments
                        - button "Start the conversation" [ref=e1467]:
                          - img [ref=e1468]
                - generic [ref=e1470]:
                  - button "Hide this story" [ref=e1471]:
                    - img [ref=e1472]
                    - text: Hide this story
                  - button "See more" [ref=e1473]:
                    - img [ref=e1474]
    - contentinfo [ref=e1477]:
      - generic "Feedback" [ref=e1479] [cursor=pointer]:
        - button "Feedback" [ref=e1480]:
          - generic:
            - generic:
              - img
          - generic:
            - generic: Feedback
```

# Test source

```ts
  1   | import { expect, test } from '@playwright/test';
  2   | 
  3   | /**
  4   |  * ID   : 9905
  5   |  * Name : msn_weather_widget
  6   |  * File : 9905_msn_weather_widget.spec.ts
  7   |  * Site : https://www.msn.com/en-in
  8   |  *
  9   |  * Live DOM findings (Apr 2026):
  10  |  *  - Weather widget: a#i_weather in header area (shadow DOM, not light DOM)
  11  |  *    aria-label format: "City: Conditions, Temperature °C"
  12  |  *    e.g. "Faizabad: Mostly cloudy, 28 °C"
  13  |  *  - Widget has target="_blank" — use page.goto(href) to navigate to forecast
  14  |  *  - Weather forecast page: title = "City, State Weather Forecast | MSN Weather"
  15  |  *  - Forecast page body contains: "humidity", "wind", "forecast" text
  16  |  *  - Temperature link: role=link, name=/\d+°/ — visible on forecast page
  17  |  *  - Conditions text (cloudy/sunny/rain/etc.): visible on forecast page
  18  |  *  - Extended forecast: page heading contains city name
  19  |  *  - Widget is stable after back navigation (still count=1, label intact)
  20  |  *
  21  |  *  NOTE: Temperature values and city name are dynamic (location-detected).
  22  |  *  Assertions check STRUCTURE only, not specific values:
  23  |  *  - aria-label exists and contains "°" (temperature present)
  24  |  *  - aria-label contains ":" (city:conditions format)
  25  |  *  - Forecast page URL contains "weather"
  26  |  *  - Forecast page body contains "humidity" and "forecast"
  27  |  */
  28  | 
  29  | test.describe('MSN – Weather Widget: Display, Navigation, and Stability', () => {
  30  |   test.describe.configure({ timeout: 120_000 });
  31  | 
  32  |   test('Verify weather widget, navigate to forecast, return and check stability', async ({ page }) => {
  33  |     test.slow();
  34  | 
  35  |     // ── 1-2 : Navigate and stabilize ──────────────────────────────
  36  |     await page.goto('https://www.msn.com/en-in', {
  37  |       waitUntil: 'domcontentloaded',
  38  |       timeout: 30_000,
  39  |     });
  40  |     await page.waitForTimeout(5000);
  41  |     console.log('[1-2] MSN loaded and stabilised');
  42  | 
  43  |     // Weather widget locator — confirmed via live DOM analysis
  44  |     // Element: a#i_weather (in shadow DOM, but Playwright pierces it)
  45  |     const weatherWidget = page.locator('a#i_weatherddxxs');
  46  | 
  47  |     // ── 3 : Locate the weather widget on the homepage ─────────────
> 48  |     await expect(weatherWidget).toBeAttached({ timeout: 10_000 });
      |                                 ^ Error: expect(locator).toBeAttached() failed
  49  |     const wwLabel = await weatherWidget.getAttribute('aria-label');
  50  |     expect(wwLabel, '[S3] Weather widget aria-label should exist').toBeTruthy();
  51  |     console.log(`[3] Weather widget found: "${wwLabel}" ✅`);
  52  | 
  53  |     // ── 4 : Verify temperature is displayed ───────────────────────
  54  |     // aria-label format: "City: Conditions, Temp °C" — must contain "°"
  55  |     expect(wwLabel, '[S4] Temperature (°) should be in widget label').toContain('°');
  56  |     console.log('[4] Temperature displayed in widget ✅');
  57  | 
  58  |     // ── 5 : Verify city/location is detected ─────────────────────
  59  |     // aria-label format: "City: ..." — must contain ":"
  60  |     expect(wwLabel, '[S5] City:conditions format should be present').toContain(':');
  61  |     const city = wwLabel!.split(':')[0].trim();
  62  |     expect(city.length, '[S5] City name should be non-empty').toBeGreaterThan(0);
  63  |     console.log(`[5] City detected: "${city}" ✅`);
  64  | 
  65  |     // ── 6 : Click the weather widget (navigate to forecast page) ──
  66  |     // Widget has target="_blank"; navigate directly via href for reliability
  67  |     const wwHref = await weatherWidget.getAttribute('href ');
  68  |     expect(wwHref, '[S6] Widget should have href').toBeTruthy();
  69  |     await page.goto(wwHref!, { waitUntil: 'domcontentloaded', timeout: 30_000 });
  70  |     await page.waitForTimeout(4000);
  71  |     console.log('[6] Navigated to weather forecast page ✅');
  72  | 
  73  |     // ── 7 : Verify detailed weather page loaded ───────────────────
  74  |     const forecastUrl   = page.url();
  75  |     const forecastTitle = await page.title();
  76  |     expect(forecastUrl, '[S7] URL should contain "weather"').toContain('weather');
  77  |     expect(forecastTitle.toLowerCase(), '[S7] Title should contain "weather"').toContain('weather');
  78  |     console.log(`[7] Weather page loaded: "${forecastTitle}" ✅`);
  79  | 
  80  |     // ── 8 : Verify extended forecast is displayed ─────────────────
  81  |     // Page heading contains detected city name
  82  |     const heading = page.getByRole('heading').first();
  83  |     await expect(heading).toBeVisible({ timeout: 10_000 });
  84  |     const headingTxt = await heading.textContent();
  85  |     expect(headingTxt, '[S8] Heading should contain city name').toContain(city);
  86  |     // Body text should contain "forecast"
  87  |     const bodyText = await page.locator('body').textContent();
  88  |     expect(bodyText?.toLowerCase(), '[S8] Page should contain "forecast"').toContain('forecast');
  89  |     console.log(`[8] Extended forecast displayed for "${headingTxt?.trim()}" ✅`);
  90  | 
  91  |     // ── 9 : Verify temperature, humidity, and conditions visible ──
  92  |     // Temperature — link with ° character in text or label
  93  |     const tempEl = page.getByRole('link', { name: /\d+°/ }).first();
  94  |     await expect(tempEl).toBeAttached({ timeout: 8_000 });
  95  |     console.log('[9a] Temperature element present ✅');
  96  | 
  97  |     // Humidity — page body text contains "humidity"
  98  |     expect(bodyText?.toLowerCase(), '[S9] Page should contain "humidity"').toContain('humidity');
  99  |     console.log('[9b] Humidity text present ✅');
  100 | 
  101 |     // Conditions — page body text contains weather condition words
  102 |     const hasConditions = /cloudy|sunny|rain|storm|clear|partly|mostly|fog|snow|wind/i.test(bodyText || '');
  103 |     expect(hasConditions, '[S9] Weather conditions text should be present').toBe(true);
  104 |     console.log('[9c] Weather conditions text present ✅');
  105 | 
  106 |     // ── 10-11 : Navigate back to homepage and verify ───────────────
  107 |     await page.goto('https://www.msn.com/en-in', {
  108 |       waitUntil: 'domcontentloaded',
  109 |       timeout: 30_000,
  110 |     });
  111 |     await page.waitForTimeout(5000);
  112 |     console.log('[10] Navigated back to homepage');
  113 | 
  114 |     const homeUrl   = page.url();
  115 |     const homeTitle = await page.title();
  116 |     expect(homeUrl, '[S11] Should be back on MSN homepage').toContain('msn.com/en-in');
  117 |     expect(homeTitle, '[S11] Title should contain MSN').toContain('MSN');
  118 |     console.log('[11] Homepage loaded successfully ✅');
  119 | 
  120 |     // ── 12 : Verify weather widget is still visible and stable ─────
  121 |     const widgetBack = page.locator('a#i_weatherdds');
  122 |     await expect(widgetBack).toBeAttached({ timeout: 10_000 });
  123 |     const wwLabelBack = await widgetBack.getAttribute('aria-label ');
  124 |     expect(wwLabelBack, '[S12] Widget should still have aria-label').toBeTruthy();
  125 |     expect(wwLabelBack, '[S12] Widget should still show temperature').toContain('°');
  126 |     console.log(`[12] Weather widget stable: "${wwLabelBack}" ✅`);
  127 | 
  128 |     console.log('\n✅ ALL ASSERTIONS PASSED');
  129 | 
  130 |   }); // end test
  131 | }); // end describe
  132 | 
```