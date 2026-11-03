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
        - 'link "Phoenix: Clear, 15 °C" [ref=e19] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
          - generic "Phoenix, Arizona, United States Click here to see more information" [ref=e20]: Phoenix
          - img "Clear" [ref=e22]
          - generic [ref=e23]:
            - generic [ref=e24]: ‎15‎
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
              - 'article "India did it 5000 yrs ago: Ranbir Kapoor compares Elon Musk''s flying car to Ramayana''s Pushpaka Vimana, users troll actor" [ref=e265] [cursor=pointer]':
                - generic [ref=e267]:
                  - img [ref=e268]
                  - generic [ref=e269]:
                    - generic [ref=e270]:
                      - generic [ref=e271]:
                        - generic [ref=e272]:
                          - img [ref=e273]
                          - generic [ref=e274]: ABP - Live
                        - generic [ref=e275]: ·
                        - generic [ref=e276]: 2d
                      - 'link "India did it 5000 yrs ago: Ranbir Kapoor compares Elon Musk''s flying car to Ramayana''s Pushpaka Vimana, users troll actor, ABP - Live" [ref=e277]':
                        - /url: https://www.msn.com/en-in/entertainment/general/india-did-it-5000-yrs-ago-ranbir-kapoor-compares-elon-musk-s-flying-car-to-ramayana-s-pushpaka-vimana-users-troll-actor/ar-AA2gvbaU
                        - text: "India did it 5000 yrs ago: Ranbir Kapoor compares Elon Musk's flying car to Ramayana's Pushpaka Vimana, users troll actor"
                    - 'generic "India did it 5000 yrs ago: Ranbir Kapoor compares Elon Musk''s flying car to Ramayana''s Pushpaka Vimana, users troll actor" [ref=e280]':
                      - generic [ref=e282]:
                        - generic [ref=e283]:
                          - button "195 Likes" [ref=e284]:
                            - generic [ref=e285]:
                              - img [ref=e286]
                              - generic [ref=e288]: "195"
                          - button "Dislike" [ref=e289]:
                            - img [ref=e291]
                        - link "View comments 13 Comment" [ref=e294]:
                          - /url: https://www.msn.com/en-in/entertainment/general/india-did-it-5000-yrs-ago-ranbir-kapoor-compares-elon-musk-s-flying-car-to-ramayana-s-pushpaka-vimana-users-troll-actor/ar-AA2gvbaU#comments
                          - button "View comments 13 Comment" [ref=e295]:
                            - img [ref=e296]
                          - generic [ref=e298]: "13"
                  - generic [ref=e299]:
                    - button "Hide this story" [ref=e300]:
                      - img [ref=e301]
                      - text: Hide this story
                    - button "See more" [ref=e302]:
                      - img [ref=e303]
            - article "Rift in Hanuman Ansh team? Makers issue statement on film rights, publicity" [ref=e304] [cursor=pointer]:
              - generic [ref=e306]:
                - img [ref=e307]
                - generic [ref=e308]:
                  - generic [ref=e309]:
                    - generic [ref=e310]:
                      - generic [ref=e311]:
                        - img [ref=e312]
                        - generic [ref=e313]: India Today
                      - generic [ref=e314]: ·
                      - generic [ref=e315]: 6h
                    - link "Rift in Hanuman Ansh team? Makers issue statement on film rights, publicity, India Today" [ref=e316]:
                      - /url: https://www.msn.com/en-in/entertainment/movies/rift-in-hanuman-ansh-team-makers-issue-statement-on-film-rights-publicity/ar-AA2gDvBl
                      - text: Rift in Hanuman Ansh team? Makers issue statement on film rights, publicity
                  - generic "Rift in Hanuman Ansh team? Makers issue statement on film rights, publicity" [ref=e319]:
                    - generic [ref=e321]:
                      - generic [ref=e322]:
                        - button "1 Like" [ref=e323]:
                          - generic [ref=e324]:
                            - img [ref=e325]
                            - generic [ref=e327]: "1"
                        - button "Dislike" [ref=e328]:
                          - img [ref=e330]
                      - link "Start the conversation" [ref=e333]:
                        - /url: https://www.msn.com/en-in/entertainment/movies/rift-in-hanuman-ansh-team-makers-issue-statement-on-film-rights-publicity/ar-AA2gDvBl#comments
                        - button "Start the conversation" [ref=e334]:
                          - img [ref=e335]
                - generic [ref=e337]:
                  - button "Hide this story" [ref=e338]:
                    - img [ref=e339]
                    - text: Hide this story
                  - button "See more" [ref=e340]:
                    - img [ref=e341]
            - article [ref=e342] [cursor=pointer]:
              - generic [ref=e346]:
                - generic: Sponsored
            - article "Radhika Apte says she hated everything about Legend, especially when her character married her much older uncle played by Balakrishna" [ref=e347] [cursor=pointer]:
              - generic [ref=e349]:
                - img [ref=e350]
                - generic [ref=e351]:
                  - generic [ref=e352]:
                    - generic [ref=e353]:
                      - generic [ref=e354]:
                        - img [ref=e355]
                        - generic [ref=e356]: Hindustan Times
                      - generic [ref=e357]: ·
                      - generic [ref=e358]: 2h
                    - link "Radhika Apte says she hated everything about Legend, especially when her character married her much older uncle played by Balakrishna, Hindustan Times" [ref=e359]:
                      - /url: https://www.msn.com/en-in/entertainment/movies/radhika-apte-says-she-hated-everything-about-legend-especially-when-her-character-married-her-much-older-uncle-played-by-balakrishna/ar-AA2gExZF
                      - text: Radhika Apte says she hated everything about Legend, especially when her character married her much older uncle played by Balakrishna
                  - generic "Radhika Apte says she hated everything about Legend, especially when her character married her much older uncle played by Balakrishna" [ref=e362]:
                    - generic [ref=e364]:
                      - generic [ref=e365]:
                        - button "9 Likes" [ref=e366]:
                          - generic [ref=e367]:
                            - img [ref=e368]
                            - generic [ref=e370]: "9"
                        - button "Dislike" [ref=e371]:
                          - img [ref=e373]
                      - link "View comments 2 Comment" [ref=e376]:
                        - /url: https://www.msn.com/en-in/entertainment/movies/radhika-apte-says-she-hated-everything-about-legend-especially-when-her-character-married-her-much-older-uncle-played-by-balakrishna/ar-AA2gExZF#comments
                        - button "View comments 2 Comment" [ref=e377]:
                          - img [ref=e378]
                        - generic [ref=e380]: "2"
                - generic [ref=e381]:
                  - button "Hide this story" [ref=e382]:
                    - img [ref=e383]
                    - text: Hide this story
                  - button "See more" [ref=e384]:
                    - img [ref=e385]
            - article [ref=e386] [cursor=pointer]:
              - generic [ref=e392]:
                - generic [ref=e394]:
                  - link "Phoenix" [ref=e396]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
                    - heading "Phoenix" [level=2] [ref=e397]
                  - button "My location" [ref=e398]
                  - button "More options" [ref=e400]
                - generic [ref=e404]:
                  - generic [ref=e405]:
                    - generic [ref=e407]:
                      - link "Clear" [ref=e408]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
                        - img "Clear" [ref=e409]
                      - link "15°C" [ref=e410]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
                        - generic [ref=e411]: ‎15‎
                        - generic [ref=e413]: ‎°C‎
                    - generic [ref=e415]:
                      - link "Good air quality" [ref=e417]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona&fcsttab=airquality
                        - text: Good air quality
                      - link "See full forecast" [ref=e419]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona&fcsttab=airquality
                        - img "arrow" [ref=e420]
                  - generic [ref=e425]:
                    - link "Larger map" [ref=e426]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Phoenix,Arizona
                      - generic [ref=e427]:
                        - generic:
                          - generic:
                            - img
                            - img
                            - img
                            - img
                      - img
                    - link "Check global air quality" [ref=e428]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Phoenix,Arizona
                      - img [ref=e430]
                      - generic "Check global air quality" [ref=e431]
                      - img [ref=e433]
                - button "See full forecast" [ref=e436]
            - article [ref=e437] [cursor=pointer]:
              - generic [ref=e442]:
                - generic [ref=e444]:
                  - link "Top stories" [ref=e446]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6ae9be2b5ed7468eab657f43aa3b9045&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e447]
                  - button "More options" [ref=e449]
                - list [ref=e452]:
                  - listitem [ref=e453]:
                    - 'link "Press Trust of India now Dia Mirza video row: Congress demands BJP''s apology, action against BMC officials" [ref=e454]':
                      - /url: https://www.msn.com/en-in/news/other/dia-mirza-video-row-congress-demands-bjp-s-apology-action-against-bmc-officials/ar-AA2gE9K4
                      - generic [ref=e455]:
                        - generic [ref=e456]:
                          - img [ref=e457]
                          - generic [ref=e458]:
                            - generic: Press Trust of India ·now
                        - generic [ref=e459]: "Dia Mirza video row: Congress demands BJP's apology, action against BMC officials"
                  - listitem [ref=e460]:
                    - link "Hindustan Times 3h Technical snag suspected after 2 helicopters collide near Everest Base Camp" [ref=e461]:
                      - /url: https://www.msn.com/en-in/news/other/technical-snag-suspected-after-2-helicopters-collide-near-everest-base-camp/ar-AA2gEif7
                      - generic [ref=e462]:
                        - generic [ref=e463]:
                          - img [ref=e464]
                          - generic [ref=e465]:
                            - generic: Hindustan Times ·3h
                        - generic [ref=e466]: Technical snag suspected after 2 helicopters collide near Everest Base Camp
                  - listitem [ref=e467]:
                    - 'link "NDTV 1h Can''t occupy a site indefinitely in name of protest: Top Court''s big remark" [ref=e468]':
                      - /url: https://www.msn.com/en-in/news/other/can-t-occupy-a-site-indefinitely-in-name-of-protest-top-court-s-big-remark/ar-AA2gDx9h
                      - generic [ref=e469]:
                        - generic [ref=e470]:
                          - img [ref=e471]
                          - generic [ref=e472]:
                            - generic: NDTV ·1h
                        - generic [ref=e473]: "Can't occupy a site indefinitely in name of protest: Top Court's big remark"
                - generic [ref=e475]:
                  - generic [ref=e476]:
                    - generic "Previous" [ref=e477]:
                      - button "Previous" [ref=e478]
                    - tablist [ref=e480]:
                      - tab "Page 1" [selected] [ref=e481]
                      - tab "Page 2" [ref=e483]
                      - tab "Page 3" [ref=e485]
                    - generic "Next" [ref=e487]:
                      - button "Next" [ref=e488]
                  - link "See more" [ref=e490]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6ae9be2b5ed7468eab657f43aa3b9045&ocid=hpmsn
            - 'article "Bengaluru woman confronts couple over wrong-side driving, gets attacked with helmet: ''Don''t hit me, please''" [ref=e491] [cursor=pointer]':
              - generic [ref=e493]:
                - img [ref=e494]
                - generic [ref=e495]:
                  - generic [ref=e496]:
                    - generic [ref=e497]:
                      - generic [ref=e498]:
                        - img [ref=e499]
                        - generic [ref=e500]: News18
                      - generic [ref=e501]: ·
                      - generic [ref=e502]: 22h
                    - 'link "Bengaluru woman confronts couple over wrong-side driving, gets attacked with helmet: ''Don''t hit me, please'', News18" [ref=e503]':
                      - /url: https://www.msn.com/en-in/news/other/bengaluru-woman-confronts-couple-over-wrong-side-driving-gets-attacked-with-helmet-don-t-hit-me-please/ar-AA2gA8dw
                      - text: "Bengaluru woman confronts couple over wrong-side driving, gets attacked with helmet: 'Don't hit me, please'"
                  - 'generic "Bengaluru woman confronts couple over wrong-side driving, gets attacked with helmet: ''Don''t hit me, please''" [ref=e506]':
                    - generic [ref=e508]:
                      - generic [ref=e509]:
                        - button "22 Likes" [ref=e510]:
                          - generic [ref=e511]:
                            - img [ref=e512]
                            - generic [ref=e514]: "22"
                        - button "Dislike" [ref=e515]:
                          - img [ref=e517]
                      - link "View comments 7 Comment" [ref=e520]:
                        - /url: https://www.msn.com/en-in/news/other/bengaluru-woman-confronts-couple-over-wrong-side-driving-gets-attacked-with-helmet-don-t-hit-me-please/ar-AA2gA8dw#comments
                        - button "View comments 7 Comment" [ref=e521]:
                          - img [ref=e522]
                        - generic [ref=e524]: "7"
                - generic [ref=e525]:
                  - button "Hide this story" [ref=e526]:
                    - img [ref=e527]
                    - text: Hide this story
                  - button "See more" [ref=e528]:
                    - img [ref=e529]
            - article "Why you should throw a water bottle under your hotel bed, 99% guests skip this safety trick" [ref=e530] [cursor=pointer]:
              - generic [ref=e532]:
                - img [ref=e533]
                - generic [ref=e534]:
                  - generic [ref=e535]:
                    - generic [ref=e537]:
                      - img [ref=e538]
                      - generic [ref=e539]: News18
                    - link "Why you should throw a water bottle under your hotel bed, 99% guests skip this safety trick, News18" [ref=e540]:
                      - /url: https://www.msn.com/en-in/news/other/why-you-should-throw-a-water-bottle-under-your-hotel-bed-99-guests-skip-this-safety-trick/ss-AA25MEe4
                      - text: Why you should throw a water bottle under your hotel bed, 99% guests skip this safety trick
                  - generic "Why you should throw a water bottle under your hotel bed, 99% guests skip this safety trick" [ref=e543]:
                    - generic [ref=e545]:
                      - generic [ref=e546]:
                        - button "106 Likes" [ref=e547]:
                          - generic [ref=e548]:
                            - img [ref=e549]
                            - generic [ref=e551]: "106"
                        - button "Dislike" [ref=e552]:
                          - img [ref=e554]
                      - link "View comments 12 Comment" [ref=e557]:
                        - /url: https://www.msn.com/en-in/news/other/why-you-should-throw-a-water-bottle-under-your-hotel-bed-99-guests-skip-this-safety-trick/ss-AA25MEe4#comments
                        - button "View comments 12 Comment" [ref=e558]:
                          - img [ref=e559]
                        - generic [ref=e561]: "12"
                - generic [ref=e562]:
                  - button "Hide this story" [ref=e563]:
                    - img [ref=e564]
                    - text: Hide this story
                  - button "See more" [ref=e565]:
                    - img [ref=e566]
            - article "Two helicopters collide at Everest-region helipad in Nepal, killing Indian tourist" [ref=e567] [cursor=pointer]:
              - generic [ref=e569]:
                - button "Play video preview" [ref=e574]
                - generic [ref=e576]:
                  - generic [ref=e577]:
                    - generic [ref=e578]:
                      - generic [ref=e579]:
                        - img [ref=e580]
                        - generic [ref=e581]: KameraOne
                      - generic [ref=e582]: ·
                      - generic [ref=e583]: 42m
                    - link "Two helicopters collide at Everest-region helipad in Nepal, killing Indian tourist, KameraOne" [ref=e584]:
                      - /url: https://www.msn.com/en-in/news/other/two-helicopters-collide-at-everest-region-helipad-in-nepal-killing-indian-tourist/vi-AA2gErdW
                      - text: Two helicopters collide at Everest-region helipad in Nepal, killing Indian tourist
                  - generic "Two helicopters collide at Everest-region helipad in Nepal, killing Indian tourist" [ref=e587]:
                    - generic [ref=e589]:
                      - generic [ref=e590]:
                        - button "1 Like" [ref=e591]:
                          - generic [ref=e592]:
                            - img [ref=e593]
                            - generic [ref=e595]: "1"
                        - button "Dislike" [ref=e596]:
                          - img [ref=e598]
                      - link "Start the conversation" [ref=e601]:
                        - /url: https://www.msn.com/en-in/news/other/two-helicopters-collide-at-everest-region-helipad-in-nepal-killing-indian-tourist/vi-AA2gErdW#comments
                        - button "Start the conversation" [ref=e602]:
                          - img [ref=e603]
                - generic [ref=e605]:
                  - button "Hide this story" [ref=e606]:
                    - img [ref=e607]
                    - text: Hide this story
                  - button "See more" [ref=e608]:
                    - img [ref=e609]
          - generic [ref=e610]:
            - article [ref=e611] [cursor=pointer]:
              - generic [ref=e616]:
                - generic [ref=e618]:
                  - link "Top Engaging News" [ref=e620]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6ae9be2b5ed7468eab657f43aa3b9045
                    - heading "Top Engaging News" [level=2] [ref=e621]
                  - button "More options" [ref=e623]
                - generic [ref=e625]:
                  - link "News18 10 Comments Jim Carrey marries for the 3rd time at 64, ties knot with 32-year-old girlfriend Min Ah" [ref=e627]:
                    - /url: https://www.msn.com/en-in/entertainment/celebrities/jim-carrey-marries-for-the-3rd-time-at-64-ties-knot-with-32-year-old-girlfriend-min-ah/ar-AA2dk8bG
                    - generic [ref=e628]:
                      - img [ref=e629]
                      - generic [ref=e630]: News18
                      - link "10 Comments" [ref=e632]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/jim-carrey-marries-for-the-3rd-time-at-64-ties-knot-with-32-year-old-girlfriend-min-ah/ar-AA2dk8bG#comments
                        - img [ref=e633]
                        - paragraph [ref=e634]: "10"
                    - paragraph [ref=e635]: Jim Carrey marries for the 3rd time at 64, ties knot with 32-year-old girlfriend Min Ah
                  - 'link "Hindustan Times 3 Comments Australians are laid-back: Indian man compares public holidays in Australia and India, internet reacts" [ref=e637]':
                    - /url: https://www.msn.com/en-in/news/other/australians-are-laid-back-indian-man-compares-public-holidays-in-australia-and-india-internet-reacts/ar-AA2dmmhs
                    - generic [ref=e638]:
                      - img [ref=e639]
                      - generic [ref=e640]: Hindustan Times
                      - link "3 Comments" [ref=e642]:
                        - /url: https://www.msn.com/en-in/news/other/australians-are-laid-back-indian-man-compares-public-holidays-in-australia-and-india-internet-reacts/ar-AA2dmmhs#comments
                        - img [ref=e643]
                        - paragraph [ref=e644]: "3"
                    - paragraph [ref=e645]: "Australians are laid-back: Indian man compares public holidays in Australia and India, internet reacts"
                  - link "ABP - Live 2 Comments Washington Sundar out of India T20I squad, BCCI names surprise replacement" [ref=e647]:
                    - /url: https://www.msn.com/en-in/sports/cricket/washington-sundar-out-of-india-t20i-squad-bcci-names-surprise-replacement/ar-AA2dltlt
                    - generic [ref=e648]:
                      - img [ref=e649]
                      - generic [ref=e650]: ABP - Live
                      - link "2 Comments" [ref=e652]:
                        - /url: https://www.msn.com/en-in/sports/cricket/washington-sundar-out-of-india-t20i-squad-bcci-names-surprise-replacement/ar-AA2dltlt#comments
                        - img [ref=e653]
                        - paragraph [ref=e654]: "2"
                    - paragraph [ref=e655]: Washington Sundar out of India T20I squad, BCCI names surprise replacement
                - generic [ref=e657]:
                  - generic [ref=e658]:
                    - generic "Previous" [ref=e659]:
                      - button "Previous" [ref=e660]
                    - tablist [ref=e662]:
                      - tab "Page 1" [selected] [ref=e663]
                      - tab "Page 2" [ref=e665]
                      - tab "Page 3" [ref=e667]
                    - generic "Next" [ref=e669]:
                      - button "Next" [ref=e670]
                  - link "See more" [ref=e672]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6ae9be2b5ed7468eab657f43aa3b9045
            - article [ref=e673] [cursor=pointer]:
              - generic [ref=e679]:
                - generic [ref=e681]:
                  - img "Watchlist suggestions" [ref=e683]
                  - link "Watchlist suggestions" [ref=e684]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e685]
                  - button "More options" [ref=e687]
                - generic [ref=e692]:
                  - link "SENSEX SENSEX Rising fast ‎+1.62%‎ 76,917.85" [ref=e694]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkucw&noti=Price&ocid=hpmsn
                    - generic [ref=e695]:
                      - generic [ref=e696]:
                        - generic [ref=e697]: SENSEX
                        - img "SENSEX" [ref=e698]
                      - generic [ref=e700]: Rising fast
                    - generic [ref=e705]:
                      - generic [ref=e706]: ‎+1.62%‎
                      - generic [ref=e707]: 76,917.85
                    - button "Add to watchlist" [ref=e710]:
                      - img [ref=e711]
                  - link "NIFTY NIFTY Rising fast ‎+1.58%‎ 23,810.85" [ref=e715]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkqww&noti=Price&ocid=hpmsn
                    - generic [ref=e716]:
                      - generic [ref=e717]:
                        - generic [ref=e718]: NIFTY
                        - img "NIFTY" [ref=e719]
                      - generic [ref=e721]: Rising fast
                    - generic [ref=e726]:
                      - generic [ref=e727]: ‎+1.58%‎
                      - generic [ref=e728]: 23,810.85
                    - button "Add to watchlist" [ref=e731]:
                      - img [ref=e732]
                  - link "Gold Gold ‎-1.41%‎ 3,913.60" [ref=e736]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwoc&ocid=hpmsn
                    - generic [ref=e737]:
                      - generic [ref=e739]: Gold
                      - generic [ref=e741]: Gold
                    - generic [ref=e746]:
                      - generic [ref=e747]: ‎-1.41%‎
                      - generic [ref=e748]: 3,913.60
                    - button "Add to watchlist" [ref=e751]:
                      - img [ref=e752]
                  - link "24K Gold (10 Grams) - Indian Rupee XAUINR ‎+0.69%‎ 144496" [ref=e756]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&ocid=hpmsn
                    - generic [ref=e757]:
                      - generic [ref=e759]: 24K Gold (10 Grams) - Indian Rupee
                      - generic [ref=e761]: XAUINR
                    - generic [ref=e766]:
                      - generic [ref=e767]: ‎+0.69%‎
                      - generic [ref=e768]: "144496"
                    - button "Add to watchlist" [ref=e771]:
                      - img [ref=e772]
                  - link "Silver Silver Dropping fast ‎-3.79%‎ 48.96" [ref=e776]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwr7&noti=Price&ocid=hpmsn
                    - generic [ref=e777]:
                      - generic [ref=e778]:
                        - generic [ref=e779]: Silver
                        - img "Silver" [ref=e780]
                      - generic [ref=e782]: Dropping fast
                    - generic [ref=e787]:
                      - generic [ref=e788]: ‎-3.79%‎
                      - generic [ref=e789]: "48.96"
                    - button "Add to watchlist" [ref=e792]:
                      - img [ref=e793]
                - generic [ref=e797]:
                  - generic [ref=e798]:
                    - generic "Previous" [ref=e799]:
                      - button "Previous" [ref=e800]
                    - tablist [ref=e802]:
                      - tab "Page 1" [selected] [ref=e803]
                      - tab "Page 2" [ref=e805]
                      - tab "Page 3" [ref=e807]
                      - tab "Page 4" [ref=e809]
                      - tab "Page 5" [ref=e811]
                      - tab "Page 6"
                      - tab "Page 7"
                    - generic "Next" [ref=e813]:
                      - button "Next" [ref=e814]
                  - link "See watchlist suggestions" [ref=e816]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - article "Andhra poll rigging? CJP leader’s video raises serious questions!" [ref=e817] [cursor=pointer]:
              - generic [ref=e819]:
                - img [ref=e820]
                - generic [ref=e821]:
                  - generic [ref=e822]:
                    - generic [ref=e823]:
                      - generic [ref=e824]:
                        - img [ref=e825]
                        - generic [ref=e826]: Great Andhra News
                      - generic [ref=e827]: ·
                      - generic [ref=e828]: 3h
                    - link "Andhra poll rigging? CJP leader’s video raises serious questions!, Great Andhra News" [ref=e829]:
                      - /url: https://www.msn.com/en-in/news/other/andhra-poll-rigging-cjp-leader-s-video-raises-serious-questions/ar-AA2gDGLL
                      - text: Andhra poll rigging? CJP leader’s video raises serious questions!
                  - generic "Andhra poll rigging? CJP leader’s video raises serious questions!" [ref=e832]:
                    - generic [ref=e834]:
                      - generic [ref=e835]:
                        - button "3 Likes" [ref=e836]:
                          - generic [ref=e837]:
                            - img [ref=e838]
                            - generic [ref=e840]: "3"
                        - button "Dislike" [ref=e841]:
                          - img [ref=e843]
                      - link "View comments 6 Comment" [ref=e846]:
                        - /url: https://www.msn.com/en-in/news/other/andhra-poll-rigging-cjp-leader-s-video-raises-serious-questions/ar-AA2gDGLL#comments
                        - button "View comments 6 Comment" [ref=e847]:
                          - img [ref=e848]
                        - generic [ref=e850]: "6"
                - generic [ref=e851]:
                  - button "Hide this story" [ref=e852]:
                    - img [ref=e853]
                    - text: Hide this story
                  - button "See more" [ref=e854]:
                    - img [ref=e855]
            - article "7 early signs of thyroid cancer you should never ignore" [ref=e856] [cursor=pointer]:
              - generic [ref=e858]:
                - img [ref=e859]
                - generic [ref=e860]:
                  - generic [ref=e861]:
                    - generic [ref=e863]:
                      - img [ref=e864]
                      - generic [ref=e865]: NDTV
                    - link "7 early signs of thyroid cancer you should never ignore, NDTV" [ref=e866]:
                      - /url: https://www.msn.com/en-in/health/diseases-and-conditions/7-early-signs-of-thyroid-cancer-you-should-never-ignore/ar-AA1URHI4
                      - text: 7 early signs of thyroid cancer you should never ignore
                  - generic "7 early signs of thyroid cancer you should never ignore" [ref=e869]:
                    - generic [ref=e871]:
                      - generic [ref=e872]:
                        - button "465 Likes" [ref=e873]:
                          - generic [ref=e874]:
                            - img [ref=e875]
                            - generic [ref=e877]: "465"
                        - button "Dislike" [ref=e878]:
                          - img [ref=e880]
                      - link "Start the conversation" [ref=e883]:
                        - /url: https://www.msn.com/en-in/health/diseases-and-conditions/7-early-signs-of-thyroid-cancer-you-should-never-ignore/ar-AA1URHI4#comments
                        - button "Start the conversation" [ref=e884]:
                          - img [ref=e885]
                - generic [ref=e887]:
                  - button "Hide this story" [ref=e888]:
                    - img [ref=e889]
                    - text: Hide this story
                  - button "See more" [ref=e890]:
                    - img [ref=e891]
            - article [ref=e892] [cursor=pointer]
            - 'article "Go to USA and protest there: Bombay HC pulls up Imran Khan, orders unconditional apology" [ref=e899] [cursor=pointer]':
              - generic [ref=e901]:
                - img [ref=e902]
                - generic [ref=e903]:
                  - generic [ref=e904]:
                    - generic [ref=e905]:
                      - generic [ref=e906]:
                        - img [ref=e907]
                        - generic [ref=e908]: News9 Live
                      - generic [ref=e909]: ·
                      - generic [ref=e910]: 23h
                    - 'link "Go to USA and protest there: Bombay HC pulls up Imran Khan, orders unconditional apology, News9 Live" [ref=e911]':
                      - /url: https://www.msn.com/en-in/news/other/go-to-usa-and-protest-there-bombay-hc-pulls-up-imran-khan-orders-unconditional-apology/ar-AA2gzIsD
                      - text: "Go to USA and protest there: Bombay HC pulls up Imran Khan, orders unconditional apology"
                  - 'generic "Go to USA and protest there: Bombay HC pulls up Imran Khan, orders unconditional apology" [ref=e914]':
                    - generic [ref=e916]:
                      - generic [ref=e917]:
                        - button "129 Likes" [ref=e918]:
                          - generic [ref=e919]:
                            - img [ref=e920]
                            - generic [ref=e922]: "129"
                        - button "Dislike" [ref=e923]:
                          - img [ref=e925]
                      - link "View comments 4 Comment" [ref=e928]:
                        - /url: https://www.msn.com/en-in/news/other/go-to-usa-and-protest-there-bombay-hc-pulls-up-imran-khan-orders-unconditional-apology/ar-AA2gzIsD#comments
                        - button "View comments 4 Comment" [ref=e929]:
                          - img [ref=e930]
                        - generic [ref=e932]: "4"
                - generic [ref=e933]:
                  - button "Hide this story" [ref=e934]:
                    - img [ref=e935]
                    - text: Hide this story
                  - button "See more" [ref=e936]:
                    - img [ref=e937]
            - article [ref=e938] [cursor=pointer]
            - article [ref=e945] [cursor=pointer]:
              - generic [ref=e951]:
                - generic [ref=e953]:
                  - img "Premier League" [ref=e955]
                  - link "Premier League" [ref=e956]:
                    - /url: https://www.msn.com/en-in/sports/football/premier_league?ocid=hpmsn&cvid=6ae9be2b5ed7468eab657f43aa3b9045
                    - heading "Premier League" [level=2] [ref=e957]
                  - button "More interests" [ref=e958]
                  - generic [ref=e959]:
                    - generic "Popular in your area" [ref=e960]:
                      - button "Popular in your area" [ref=e961]
                    - button "More options" [ref=e962]
                - generic [ref=e966]:
                  - link "Newcastle Final · 2 Nov 0 - 1 Everton" [ref=e968]:
                    - /url: https://www.msn.com/en-in/sports/football/premier_league/game-center/sp-id-72221368?ocid=hpmsn&cvid=6ae9be2b5ed7468eab657f43aa3b9045
                    - generic [ref=e969]:
                      - generic [ref=e970]:
                        - generic [ref=e971]:
                          - button "Click to follow Newcastle":
                            - generic:
                              - img
                        - generic "Newcastle" [ref=e972]
                      - generic [ref=e974]:
                        - generic "2 Nov - Final" [ref=e975]: Final · 2 Nov
                        - generic [ref=e976]:
                          - generic [ref=e978]: "0"
                          - generic [ref=e979]: "-"
                          - generic [ref=e980]:
                            - generic [ref=e981]: "1"
                            - img [ref=e983]
                      - generic [ref=e985]:
                        - generic [ref=e986]:
                          - button "Click to follow Everton":
                            - generic:
                              - img
                        - generic "Everton" [ref=e987]
                  - link "Everton 8:00 pm 6 Nov Coventry" [ref=e989]:
                    - /url: https://www.msn.com/en-in/sports/football/premier_league/game-center/sp-id-72221378?ocid=hpmsn&cvid=6ae9be2b5ed7468eab657f43aa3b9045
                    - generic [ref=e990]:
                      - generic [ref=e991]:
                        - generic [ref=e992]:
                          - button "Click to follow Everton":
                            - generic:
                              - img
                        - generic "Everton" [ref=e993]
                      - generic [ref=e995]:
                        - generic "8:00 pm" [ref=e996]:
                          - generic [ref=e997]: 8:00 pm
                        - generic "6 Nov" [ref=e998]
                      - generic [ref=e999]:
                        - generic [ref=e1000]:
                          - button "Click to follow Coventry":
                            - generic:
                              - img
                        - generic "Coventry" [ref=e1001]
                  - link "Leeds United 12:30 pm 7 Nov Tottenham" [ref=e1003]:
                    - /url: https://www.msn.com/en-in/sports/football/premier_league/game-center/sp-id-72221384?ocid=hpmsn&cvid=6ae9be2b5ed7468eab657f43aa3b9045
                    - generic [ref=e1004]:
                      - generic [ref=e1005]:
                        - generic [ref=e1006]:
                          - button "Click to follow Leeds United":
                            - generic:
                              - img
                        - generic "Leeds United" [ref=e1007]
                      - generic [ref=e1009]:
                        - generic "12:30 pm" [ref=e1010]:
                          - generic [ref=e1011]: 12:30 pm
                        - generic "7 Nov" [ref=e1012]
                      - generic [ref=e1013]:
                        - generic [ref=e1014]:
                          - button "Click to follow Tottenham":
                            - generic:
                              - img
                        - generic "Tottenham" [ref=e1015]
                - generic [ref=e1017]:
                  - generic [ref=e1018]:
                    - generic "Previous" [ref=e1019]:
                      - button "Previous" [ref=e1020]
                    - tablist [ref=e1022]:
                      - tab "Page 1" [selected] [ref=e1023]
                      - tab "Page 2" [ref=e1025]
                      - tab "Page 3" [ref=e1027]
                      - tab "Page 4" [ref=e1029]
                      - tab "Page 5" [ref=e1031]
                      - tab "Page 6"
                      - tab "Page 7"
                      - tab "Page 8"
                      - tab "Page 9"
                      - tab "Page 10"
                      - tab "Page 11"
                    - generic "Next" [ref=e1033]:
                      - button "Next" [ref=e1034]
                  - link "See more Premier League" [ref=e1036]:
                    - /url: https://www.msn.com/en-in/sports/football/premier_league?ocid=hpmsn&cvid=6ae9be2b5ed7468eab657f43aa3b9045
          - article [ref=e1038]
          - generic [ref=e1040]:
            - article [ref=e1041] [cursor=pointer]:
              - generic [ref=e1046]:
                - generic [ref=e1047]:
                  - generic [ref=e1048]:
                    - link "Recommended videos" [ref=e1049]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e1050]
                    - link "Recommended videos" [ref=e1053]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e1054]:
                    - generic:
                      - link "See more" [ref=e1055]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e1056]:
                        - button "More options" [ref=e1057]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e1059]:
                  - generic [ref=e1061]:
                    - generic [ref=e1063]:
                      - generic:
                        - article "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [ref=e1066]:
                          - generic [ref=e1067]:
                            - img "Keke Palmer Was Supporting 5 People As A Teenager - Then She Finally Broke Down" [ref=e1069]
                            - generic [ref=e1071]: 12:56
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1072]:
                              - generic [ref=e1073]:
                                - img "TED" [ref=e1074]
                                - generic "TED" [ref=e1076]
                              - link "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [ref=e1077]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/keke-palmer-was-supporting-5-people-as-a-teenager-then-she-finally-broke-down/vi-AA240j91?ocid=hpmsn
                                - heading "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [level=2] [ref=e1078]:
                                  - generic: Keke Palmer was supporting 5 people as a teenager - then she finally broke down
                            - button "See more" [ref=e1082]
                        - article "70 tons of steel lines up a target 2,000 meters away - then the 120mm cannon explodes" [ref=e1085]:
                          - generic [ref=e1086]:
                            - img "70 Tons Of Steel Lines Up A Target 2,000 Meters Away - Then The 120mm Cannon Explodes" [ref=e1088]
                            - generic [ref=e1090]: 02:49
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1091]:
                              - generic [ref=e1092]:
                                - img "Sam Eckholm" [ref=e1093]
                                - generic [ref=e1094]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1095]
                                    - generic [ref=e1096]: ·
                                    - generic [ref=e1097]: 1h
                              - link "70 tons of steel lines up a target 2,000 meters away - then the 120mm cannon explodes" [ref=e1098]:
                                - /url: https://www.msn.com/en-in/news/other/70-tons-of-steel-lines-up-a-target-2-000-meters-away-then-the-120mm-cannon-explodes/vi-AA2dzD68?ocid=hpmsn
                                - heading "70 tons of steel lines up a target 2,000 meters away - then the 120mm cannon explodes" [level=2] [ref=e1099]:
                                  - generic: 70 tons of steel lines up a target 2,000 meters away - then the 120mm cannon explodes
                            - button "See more" [ref=e1103]
                        - article "Nuclear engineer reveals what's happening at Chernobyl after watching Kyle Hill" [ref=e1106]:
                          - generic [ref=e1107]:
                            - img "Nuclear Engineer Reveals What's Happening at Chernobyl After Watching Kyle Hill" [ref=e1109]
                            - generic [ref=e1111]: 20:25
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1112]:
                              - generic [ref=e1113]:
                                - img "T. Folse Nuclear" [ref=e1114]
                                - generic [ref=e1115]:
                                  - generic:
                                    - generic "T. Folse Nuclear" [ref=e1116]
                                    - generic [ref=e1117]: ·
                                    - generic [ref=e1118]: 1h
                              - link "Nuclear engineer reveals what's happening at Chernobyl after watching Kyle Hill" [ref=e1119]:
                                - /url: https://www.msn.com/en-in/news/other/nuclear-engineer-reveals-what-s-happening-at-chernobyl-after-watching-kyle-hill/vi-AA1Jpck4?ocid=hpmsn
                                - heading "Nuclear engineer reveals what's happening at Chernobyl after watching Kyle Hill" [level=2] [ref=e1120]:
                                  - generic: Nuclear engineer reveals what's happening at Chernobyl after watching Kyle Hill
                            - button "See more" [ref=e1124]
                        - article "I wanted more than a vacation in Belize. So I started building a home there" [ref=e1127]:
                          - generic [ref=e1128]:
                            - img "Building My Dream Home in Beautiful Belize" [ref=e1130]
                            - generic [ref=e1132]: 21:59
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1133]:
                              - generic [ref=e1134]:
                                - img "Christian LeBlanc" [ref=e1135]
                                - generic [ref=e1136]:
                                  - generic:
                                    - generic "Christian LeBlanc" [ref=e1137]
                                    - generic [ref=e1138]: ·
                                    - generic [ref=e1139]: 2h
                              - link "I wanted more than a vacation in Belize. So I started building a home there" [ref=e1140]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/i-wanted-more-than-a-vacation-in-belize-so-i-started-building-a-home-there/vi-AA2gBjIt?ocid=hpmsn
                                - heading "I wanted more than a vacation in Belize. So I started building a home there" [level=2] [ref=e1141]:
                                  - generic: I wanted more than a vacation in Belize. So I started building a home there
                            - button "See more" [ref=e1145]
                        - article "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [ref=e1148]:
                          - generic [ref=e1149]:
                            - img "Trevor Noah Breaks Down the Real Reason Idris Elba could NOT play James Bond" [ref=e1151]
                            - generic [ref=e1153]: 09:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1154]:
                              - generic [ref=e1155]:
                                - img "Trevor Noah" [ref=e1156]
                                - generic [ref=e1157]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1158]
                                    - generic [ref=e1159]: ·
                                    - generic [ref=e1160]: 1d
                              - link "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [ref=e1161]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/trevor-noah-breaks-down-the-real-reason-idris-elba-could-not-play-james-bond/vi-AA2gyyaL?ocid=hpmsn
                                - heading "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [level=2] [ref=e1162]:
                                  - generic: Trevor Noah breaks down the real reason Idris Elba could not play James Bond
                            - button "See more" [ref=e1166]
                        - article "Watch how NATO hunts enemy submarines in the North Atlantic" [ref=e1169]:
                          - generic [ref=e1170]:
                            - img "Watch How NATO Hunts Enemy Submarines In The North Atlantic" [ref=e1172]
                            - generic [ref=e1174]: 29:49
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1175]:
                              - generic [ref=e1176]:
                                - img "Sam Eckholm" [ref=e1177]
                                - generic [ref=e1178]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1179]
                                    - generic [ref=e1180]: ·
                                    - generic [ref=e1181]: 1h
                              - link "Watch how NATO hunts enemy submarines in the North Atlantic" [ref=e1182]:
                                - /url: https://www.msn.com/en-in/news/other/watch-how-nato-hunts-enemy-submarines-in-the-north-atlantic/vi-AA1Wvtxu?ocid=hpmsn
                                - heading "Watch how NATO hunts enemy submarines in the North Atlantic" [level=2] [ref=e1183]:
                                  - generic: Watch how NATO hunts enemy submarines in the North Atlantic
                            - button "See more" [ref=e1187]
                        - article "The land was empty. Then my dream villa in Bali slowly started coming to life" [ref=e1190]:
                          - generic [ref=e1191]:
                            - img "BUILDING in BALI - My Dream Villa is 50% COMPLETE" [ref=e1193]
                            - generic [ref=e1195]: 21:13
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1196]:
                              - generic [ref=e1197]:
                                - img "Christian LeBlanc" [ref=e1198]
                                - generic [ref=e1199]:
                                  - generic:
                                    - generic "Christian LeBlanc" [ref=e1200]
                                    - generic [ref=e1201]: ·
                                    - generic [ref=e1202]: 2h
                              - link "The land was empty. Then my dream villa in Bali slowly started coming to life" [ref=e1203]:
                                - /url: https://www.msn.com/en-in/news/other/the-land-was-empty-then-my-dream-villa-in-bali-slowly-started-coming-to-life/vi-AA2gAKU8?ocid=hpmsn
                                - heading "The land was empty. Then my dream villa in Bali slowly started coming to life" [level=2] [ref=e1204]:
                                  - generic: The land was empty. Then my dream villa in Bali slowly started coming to life
                            - button "See more" [ref=e1208]
                        - link "See more" [ref=e1210]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1211]
                          - text: See more
                    - button "next" [ref=e1215]:
                      - img [ref=e1218]
            - article "Psychology says people who check their phone immediately after waking up aren't just addicted" [ref=e1220] [cursor=pointer]:
              - generic [ref=e1222]:
                - img [ref=e1223]
                - generic [ref=e1224]:
                  - generic [ref=e1225]:
                    - generic [ref=e1227]:
                      - img [ref=e1228]
                      - generic [ref=e1229]: India Today
                    - link "Psychology says people who check their phone immediately after waking up aren't just addicted, India Today" [ref=e1230]:
                      - /url: https://www.msn.com/en-in/health/general/psychology-says-people-who-check-their-phone-immediately-after-waking-up-aren-t-just-addicted/ar-AA28z7dS
                      - text: Psychology says people who check their phone immediately after waking up aren't just addicted
                  - generic "Psychology says people who check their phone immediately after waking up aren't just addicted" [ref=e1233]:
                    - generic [ref=e1235]:
                      - generic [ref=e1236]:
                        - button "3,830 Likes" [ref=e1237]:
                          - generic [ref=e1238]:
                            - img [ref=e1239]
                            - generic [ref=e1241]: 4k
                        - button "Dislike" [ref=e1242]:
                          - img [ref=e1244]
                      - link "View comments 32 Comment" [ref=e1247]:
                        - /url: https://www.msn.com/en-in/health/general/psychology-says-people-who-check-their-phone-immediately-after-waking-up-aren-t-just-addicted/ar-AA28z7dS#comments
                        - button "View comments 32 Comment" [ref=e1248]:
                          - img [ref=e1249]
                        - generic [ref=e1251]: "32"
                - generic [ref=e1252]:
                  - button "Hide this story" [ref=e1253]:
                    - img [ref=e1254]
                    - text: Hide this story
                  - button "See more" [ref=e1255]:
                    - img [ref=e1256]
            - 'article "Dia Mirza is anti-Hindu, trolls Modi: Mayor lashes out after BMC removes actor’s anti-firecracker campaign video" [ref=e1257] [cursor=pointer]':
              - generic [ref=e1259]:
                - img [ref=e1260]
                - generic [ref=e1261]:
                  - generic [ref=e1262]:
                    - generic [ref=e1263]:
                      - generic [ref=e1264]:
                        - img [ref=e1265]
                        - generic [ref=e1266]: Hindustan Times
                      - generic [ref=e1267]: ·
                      - generic [ref=e1268]: 8h
                    - 'link "Dia Mirza is anti-Hindu, trolls Modi: Mayor lashes out after BMC removes actor’s anti-firecracker campaign video, Hindustan Times" [ref=e1269]':
                      - /url: https://www.msn.com/en-in/news/other/dia-mirza-is-anti-hindu-trolls-modi-mayor-lashes-out-after-bmc-removes-actor-s-anti-firecracker-campaign-video/ar-AA2gCz2N
                      - text: "Dia Mirza is anti-Hindu, trolls Modi: Mayor lashes out after BMC removes actor’s anti-firecracker campaign video"
                  - 'generic "Dia Mirza is anti-Hindu, trolls Modi: Mayor lashes out after BMC removes actor’s anti-firecracker campaign video" [ref=e1272]':
                    - generic [ref=e1274]:
                      - generic [ref=e1275]:
                        - button "34 Likes" [ref=e1276]:
                          - generic [ref=e1277]:
                            - img [ref=e1278]
                            - generic [ref=e1280]: "34"
                        - button "Dislike" [ref=e1281]:
                          - img [ref=e1283]
                      - link "View comments 4 Comment" [ref=e1286]:
                        - /url: https://www.msn.com/en-in/news/other/dia-mirza-is-anti-hindu-trolls-modi-mayor-lashes-out-after-bmc-removes-actor-s-anti-firecracker-campaign-video/ar-AA2gCz2N#comments
                        - button "View comments 4 Comment" [ref=e1287]:
                          - img [ref=e1288]
                        - generic [ref=e1290]: "4"
                - generic [ref=e1291]:
                  - button "Hide this story" [ref=e1292]:
                    - img [ref=e1293]
                    - text: Hide this story
                  - button "See more" [ref=e1294]:
                    - img [ref=e1295]
            - 'article "''Kaun Didi, Aunty? Aunty gayi'': Bengal CM Suvendu Adhikari mocks Mamata Banerjee, video goes viral | Watch" [ref=e1296] [cursor=pointer]':
              - generic [ref=e1298]:
                - img [ref=e1299]
                - generic [ref=e1300]:
                  - generic [ref=e1301]:
                    - generic [ref=e1302]:
                      - generic [ref=e1303]:
                        - img [ref=e1304]
                        - generic [ref=e1305]: India.com
                      - generic [ref=e1306]: ·
                      - generic [ref=e1307]: 4h
                    - 'link "''Kaun Didi, Aunty? Aunty gayi'': Bengal CM Suvendu Adhikari mocks Mamata Banerjee, video goes viral | Watch, India.com" [ref=e1308]':
                      - /url: https://www.msn.com/en-in/news/other/kaun-didi-aunty-aunty-gayi-bengal-cm-suvendu-adhikari-mocks-mamata-banerjee-video-goes-viral-watch/ar-AA2gDjT1
                      - text: "'Kaun Didi, Aunty? Aunty gayi': Bengal CM Suvendu Adhikari mocks Mamata Banerjee, video goes viral | Watch"
                  - 'generic "''Kaun Didi, Aunty? Aunty gayi'': Bengal CM Suvendu Adhikari mocks Mamata Banerjee, video goes viral | Watch" [ref=e1311]':
                    - generic [ref=e1313]:
                      - generic [ref=e1314]:
                        - button "41 Likes" [ref=e1315]:
                          - generic [ref=e1316]:
                            - img [ref=e1317]
                            - generic [ref=e1319]: "41"
                        - button "Dislike" [ref=e1320]:
                          - img [ref=e1322]
                      - link "View comments 3 Comment" [ref=e1325]:
                        - /url: https://www.msn.com/en-in/news/other/kaun-didi-aunty-aunty-gayi-bengal-cm-suvendu-adhikari-mocks-mamata-banerjee-video-goes-viral-watch/ar-AA2gDjT1#comments
                        - button "View comments 3 Comment" [ref=e1326]:
                          - img [ref=e1327]
                        - generic [ref=e1329]: "3"
                - generic [ref=e1330]:
                  - button "Hide this story" [ref=e1331]:
                    - img [ref=e1332]
                    - text: Hide this story
                  - button "See more" [ref=e1333]:
                    - img [ref=e1334]
            - article "5 signs Hanuman is blessing you without you knowing" [ref=e1335] [cursor=pointer]:
              - generic [ref=e1337]:
                - img [ref=e1338]
                - generic [ref=e1339]:
                  - generic [ref=e1340]:
                    - generic [ref=e1342]:
                      - img [ref=e1343]
                      - generic [ref=e1344]: MyLifeXP
                    - link "5 signs Hanuman is blessing you without you knowing, MyLifeXP" [ref=e1345]:
                      - /url: https://www.msn.com/en-in/lifestyle/other/5-signs-hanuman-is-blessing-you-without-you-knowing/ar-AA20IXyp
                      - text: 5 signs Hanuman is blessing you without you knowing
                  - generic "5 signs Hanuman is blessing you without you knowing" [ref=e1348]:
                    - generic [ref=e1350]:
                      - generic [ref=e1351]:
                        - button "1,695 Likes" [ref=e1352]:
                          - generic [ref=e1353]:
                            - img [ref=e1354]
                            - generic [ref=e1356]: 2k
                        - button "Dislike" [ref=e1357]:
                          - img [ref=e1359]
                      - link "View comments 6 Comment" [ref=e1362]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/5-signs-hanuman-is-blessing-you-without-you-knowing/ar-AA20IXyp#comments
                        - button "View comments 6 Comment" [ref=e1363]:
                          - img [ref=e1364]
                        - generic [ref=e1366]: "6"
                - generic [ref=e1367]:
                  - button "Hide this story" [ref=e1368]:
                    - img [ref=e1369]
                    - text: Hide this story
                  - button "See more" [ref=e1370]:
                    - img [ref=e1371]
            - article [ref=e1372] [cursor=pointer]
            - article "Chandigarh woman’s Diwali office dance to 'Jhalla Wallah' crosses 20 million views" [ref=e1379] [cursor=pointer]:
              - generic [ref=e1381]:
                - img [ref=e1382]
                - generic [ref=e1383]:
                  - generic [ref=e1384]:
                    - generic [ref=e1385]:
                      - generic [ref=e1386]:
                        - img [ref=e1387]
                        - generic [ref=e1388]: The Tribune India
                      - generic [ref=e1389]: ·
                      - generic [ref=e1390]: 4h
                    - link "Chandigarh woman’s Diwali office dance to 'Jhalla Wallah' crosses 20 million views, The Tribune India" [ref=e1391]:
                      - /url: https://www.msn.com/en-in/entertainment/music/chandigarh-woman-s-diwali-office-dance-to-jhalla-wallah-crosses-20-million-views/ar-AA2gEayf
                      - text: Chandigarh woman’s Diwali office dance to 'Jhalla Wallah' crosses 20 million views
                  - generic "Chandigarh woman’s Diwali office dance to 'Jhalla Wallah' crosses 20 million views" [ref=e1394]:
                    - generic [ref=e1396]:
                      - generic [ref=e1397]:
                        - button "19 Likes" [ref=e1398]:
                          - generic [ref=e1399]:
                            - img [ref=e1400]
                            - generic [ref=e1402]: "19"
                        - button "Dislike" [ref=e1403]:
                          - img [ref=e1405]
                      - link "View comments 1 Comment" [ref=e1408]:
                        - /url: https://www.msn.com/en-in/entertainment/music/chandigarh-woman-s-diwali-office-dance-to-jhalla-wallah-crosses-20-million-views/ar-AA2gEayf#comments
                        - button "View comments 1 Comment" [ref=e1409]:
                          - img [ref=e1410]
                        - generic [ref=e1412]: "1"
                - generic [ref=e1413]:
                  - button "Hide this story" [ref=e1414]:
                    - img [ref=e1415]
                    - text: Hide this story
                  - button "See more" [ref=e1416]:
                    - img [ref=e1417]
          - generic [ref=e1418]:
            - article [ref=e1419] [cursor=pointer]
            - article "Just before Punjab polls, Navjot Kaur Sidhu does a disappearing act" [ref=e1426] [cursor=pointer]:
              - generic [ref=e1428]:
                - img [ref=e1429]
                - generic [ref=e1430]:
                  - generic [ref=e1431]:
                    - generic [ref=e1432]:
                      - generic [ref=e1433]:
                        - img [ref=e1434]
                        - generic [ref=e1435]: The Wire India
                      - generic [ref=e1436]: ·
                      - generic [ref=e1437]: 22h
                    - link "Just before Punjab polls, Navjot Kaur Sidhu does a disappearing act, The Wire India" [ref=e1438]:
                      - /url: https://www.msn.com/en-in/news/other/just-before-punjab-polls-navjot-kaur-sidhu-does-a-disappearing-act/ar-AA2gApW1
                      - text: Just before Punjab polls, Navjot Kaur Sidhu does a disappearing act
                  - generic "Just before Punjab polls, Navjot Kaur Sidhu does a disappearing act" [ref=e1441]:
                    - generic [ref=e1443]:
                      - generic [ref=e1444]:
                        - button "8 Likes" [ref=e1445]:
                          - generic [ref=e1446]:
                            - img [ref=e1447]
                            - generic [ref=e1449]: "8"
                        - button "Dislike" [ref=e1450]:
                          - img [ref=e1452]
                      - link "View comments 2 Comment" [ref=e1455]:
                        - /url: https://www.msn.com/en-in/news/other/just-before-punjab-polls-navjot-kaur-sidhu-does-a-disappearing-act/ar-AA2gApW1#comments
                        - button "View comments 2 Comment" [ref=e1456]:
                          - img [ref=e1457]
                        - generic [ref=e1459]: "2"
                - generic [ref=e1460]:
                  - button "Hide this story" [ref=e1461]:
                    - img [ref=e1462]
                    - text: Hide this story
                  - button "See more" [ref=e1463]:
                    - img [ref=e1464]
    - contentinfo [ref=e1467]:
      - generic "Feedback" [ref=e1469] [cursor=pointer]:
        - button "Feedback" [ref=e1470]:
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