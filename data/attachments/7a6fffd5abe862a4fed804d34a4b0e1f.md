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
        - 'link "Boydton: Cloudy, 8 °C" [ref=e19] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Boydton,Virginia
          - generic "Boydton, Virginia, United States Click here to see more information" [ref=e20]: Boydton
          - img "Cloudy" [ref=e22]
          - generic [ref=e23]:
            - generic [ref=e24]: ‎8‎
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
          - link "Sign in" [ref=e38] [cursor=pointer]:
            - /url: "#"
      - search [ref=e41]:
        - generic [ref=e42]:
          - generic "Web search" [ref=e43] [cursor=pointer]:
            - button "Web search" [ref=e44]:
              - generic:
                - generic:
                  - img
          - searchbox "Enter your search term" [ref=e45]
  - generic [ref=e46]:
    - generic [ref=e47]:
      - generic [ref=e52]:
        - list [ref=e55]:
          - listitem [ref=e56]:
            - link "Outlook.com" [ref=e59] [cursor=pointer]:
              - /url: https://outlook.com
              - generic [ref=e63]: Outlook.com
          - listitem [ref=e64]:
            - link "Flipkart" [ref=e67] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=401531&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e70]:
                - generic [ref=e71]: Flipkart
                - generic [ref=e73]: Sponsored
          - listitem [ref=e74]:
            - link "Find a tutor" [ref=e77] [cursor=pointer]:
              - /url: https://www.bing.com/pros?FORM=BPIMNS
              - generic [ref=e81]: Find a tutor
          - listitem [ref=e82]:
            - link "Booking.com" [ref=e85] [cursor=pointer]:
              - /url: https://www.booking.com/index.html?aid=1624937&label=enin-msn-hp-mestripe
              - generic [ref=e88]:
                - generic [ref=e89]: Booking.com
                - generic [ref=e91]: Sponsored
          - listitem [ref=e92]:
            - link "Ajio" [ref=e95] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=393141&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e98]:
                - generic [ref=e99]: Ajio
                - generic [ref=e101]: Sponsored
          - listitem [ref=e102]:
            - link "Facebook" [ref=e105] [cursor=pointer]:
              - /url: https://www.facebook.com
              - generic [ref=e109]: Facebook
          - listitem [ref=e110]:
            - link "Microsoft 365" [ref=e113] [cursor=pointer]:
              - /url: https://www.office.com/?omkt=en-IN
              - generic [ref=e117]: Microsoft 365
          - listitem [ref=e118]:
            - link "X" [ref=e121] [cursor=pointer]:
              - /url: https://x.com
              - generic [ref=e125]: X
          - listitem [ref=e126]:
            - link "OneDrive" [ref=e129] [cursor=pointer]:
              - /url: https://onedrive.live.com/?wt.mc_id=oo_msn_msnhomepage_header
              - generic [ref=e133]: OneDrive
          - listitem [ref=e134]:
            - link "Skype" [ref=e137] [cursor=pointer]:
              - /url: https://www.skype.com/
              - generic [ref=e141]: Skype
          - listitem [ref=e142]:
            - link "OneNote" [ref=e145] [cursor=pointer]:
              - /url: https://www.onenote.com/notebooks?WT.mc_id=MSN_OneNote_TopMenu&auth=1&wdorigin=msn
              - generic [ref=e149]: OneNote
          - listitem [ref=e150]:
            - link "Maps" [ref=e153] [cursor=pointer]:
              - /url: https://bing.com/maps/?FORM=MSNMAP
              - generic [ref=e157]: Maps
          - listitem [ref=e158]:
            - link "Microsoft Store" [ref=e161] [cursor=pointer]:
              - /url: https://www.microsoft.com/en-in
              - generic [ref=e165]: Microsoft Store
        - button [ref=e166]:
          - img [ref=e169]
      - generic [ref=e171]:
        - banner [ref=e172]
        - generic [ref=e173]:
          - generic [ref=e177]:
            - navigation [ref=e179]:
              - generic [ref=e180]:
                - list [ref=e181]:
                  - listitem [ref=e182]:
                    - link "Discover" [ref=e183] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in
                - list [ref=e184]:
                  - listitem [ref=e185]:
                    - link "News" [ref=e186] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f
                  - listitem [ref=e187]:
                    - link "Sports" [ref=e188] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in/sports
              - generic "Show more topics" [ref=e190] [cursor=pointer]:
                - button "Show more topics" [ref=e191]:
                  - generic:
                    - generic:
                      - img
            - generic "Personalize your feed\"" [ref=e193] [cursor=pointer]:
              - button "Personalize your feed\"" [ref=e194]:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic: Personalize
          - button "Make MSN my homepage" [ref=e196] [cursor=pointer]
      - main [ref=e199]:
        - generic [ref=e202]:
          - generic [ref=e203]:
            - generic [ref=e206]:
              - tablist [ref=e208]:
                - tab "News story" [ref=e209] [cursor=pointer]
                - tab "News story" [ref=e211] [cursor=pointer]
                - tab "News story" [ref=e213] [cursor=pointer]
                - tab "News story" [ref=e215] [cursor=pointer]
                - tab "News story" [ref=e217] [cursor=pointer]
                - tab "News story" [selected] [ref=e219] [cursor=pointer]
                - tab "News story" [ref=e221] [cursor=pointer]
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
              - button [ref=e259]
              - button [ref=e262]
              - article "R Ashwin gives epic reply to user dig over Sanju Samson" [ref=e263] [cursor=pointer]:
                - generic [ref=e265]:
                  - img [ref=e266]
                  - generic [ref=e267]:
                    - generic [ref=e268]:
                      - generic [ref=e269]:
                        - generic [ref=e270]:
                          - img [ref=e271]
                          - generic [ref=e272]: Times Now
                        - generic [ref=e273]: ·
                        - generic [ref=e274]: 7h
                      - link "R Ashwin gives epic reply to user dig over Sanju Samson, Times Now" [ref=e275]:
                        - /url: https://www.msn.com/en-in/sports/general/r-ashwin-gives-epic-reply-to-user-dig-over-sanju-samson/ar-AA2gz6nz
                        - text: R Ashwin gives epic reply to user dig over Sanju Samson
                    - generic "R Ashwin gives epic reply to user dig over Sanju Samson" [ref=e278]:
                      - generic [ref=e280]:
                        - generic [ref=e281]:
                          - button "9 Likes" [ref=e282]:
                            - generic [ref=e283]:
                              - img [ref=e284]
                              - generic [ref=e286]: "9"
                          - button "Dislike" [ref=e287]:
                            - img [ref=e289]
                        - link "Start the conversation" [ref=e292]:
                          - /url: https://www.msn.com/en-in/sports/general/r-ashwin-gives-epic-reply-to-user-dig-over-sanju-samson/ar-AA2gz6nz#comments
                          - button "Start the conversation" [ref=e293]:
                            - img [ref=e294]
                  - generic [ref=e296]:
                    - button "Hide this story" [ref=e297]:
                      - img [ref=e298]
                      - text: Hide this story
                    - button "See more" [ref=e299]:
                      - img [ref=e300]
            - article "Three satellites track Cyclone Murasu as it barrels towards India. Here's how it looks" [ref=e301] [cursor=pointer]:
              - generic [ref=e303]:
                - img [ref=e304]
                - generic [ref=e305]:
                  - generic [ref=e306]:
                    - generic [ref=e307]:
                      - generic [ref=e308]:
                        - img [ref=e309]
                        - generic [ref=e310]: India Today
                      - generic [ref=e311]: ·
                      - generic [ref=e312]: 5h
                    - link "Three satellites track Cyclone Murasu as it barrels towards India. Here's how it looks, India Today" [ref=e313]:
                      - /url: https://www.msn.com/en-in/news/other/three-satellites-track-cyclone-murasu-as-it-barrels-towards-india-here-s-how-it-looks/ar-AA2gyzVf
                      - text: Three satellites track Cyclone Murasu as it barrels towards India. Here's how it looks
                  - generic "Three satellites track Cyclone Murasu as it barrels towards India. Here's how it looks" [ref=e316]:
                    - generic [ref=e318]:
                      - generic [ref=e319]:
                        - button "64 Likes" [ref=e320]:
                          - generic [ref=e321]:
                            - img [ref=e322]
                            - generic [ref=e324]: "64"
                        - button "Dislike" [ref=e325]:
                          - img [ref=e327]
                      - link "Start the conversation" [ref=e330]:
                        - /url: https://www.msn.com/en-in/news/other/three-satellites-track-cyclone-murasu-as-it-barrels-towards-india-here-s-how-it-looks/ar-AA2gyzVf#comments
                        - button "Start the conversation" [ref=e331]:
                          - img [ref=e332]
                - generic [ref=e334]:
                  - button "Hide this story" [ref=e335]:
                    - img [ref=e336]
                    - text: Hide this story
                  - button "See more" [ref=e337]:
                    - img [ref=e338]
            - article [ref=e339] [cursor=pointer]:
              - generic [ref=e343]:
                - generic: Sponsored
            - article "Hina Khan says she and Rocky Jaiswal got married in less than 15 minutes after cancer diagnosis" [ref=e344] [cursor=pointer]:
              - generic [ref=e346]:
                - img [ref=e347]
                - generic [ref=e348]:
                  - generic [ref=e349]:
                    - generic [ref=e350]:
                      - generic [ref=e351]:
                        - img [ref=e352]
                        - generic [ref=e353]: The Times of India
                      - generic [ref=e354]: ·
                      - generic [ref=e355]: 6h
                    - link "Hina Khan says she and Rocky Jaiswal got married in less than 15 minutes after cancer diagnosis, The Times of India" [ref=e356]:
                      - /url: https://www.msn.com/en-in/entertainment/celebrities/hina-khan-says-she-and-rocky-jaiswal-got-married-in-less-than-15-minutes-after-cancer-diagnosis/ar-AA2gz3yw
                      - text: Hina Khan says she and Rocky Jaiswal got married in less than 15 minutes after cancer diagnosis
                  - generic "Hina Khan says she and Rocky Jaiswal got married in less than 15 minutes after cancer diagnosis" [ref=e359]:
                    - generic [ref=e361]:
                      - generic [ref=e362]:
                        - button "21 Likes" [ref=e363]:
                          - generic [ref=e364]:
                            - img [ref=e365]
                            - generic [ref=e367]: "21"
                        - button "Dislike" [ref=e368]:
                          - img [ref=e370]
                      - link "Start the conversation" [ref=e373]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/hina-khan-says-she-and-rocky-jaiswal-got-married-in-less-than-15-minutes-after-cancer-diagnosis/ar-AA2gz3yw#comments
                        - button "Start the conversation" [ref=e374]:
                          - img [ref=e375]
                - generic [ref=e377]:
                  - button "Hide this story" [ref=e378]:
                    - img [ref=e379]
                    - text: Hide this story
                  - button "See more" [ref=e380]:
                    - img [ref=e381]
            - article [ref=e382] [cursor=pointer]:
              - generic [ref=e388]:
                - generic [ref=e390]:
                  - link "Boydton" [ref=e392]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Boydton,Virginia
                    - heading "Boydton" [level=2] [ref=e393]
                  - button "My location" [ref=e394]
                  - button "More options" [ref=e396]
                - generic [ref=e400]:
                  - generic [ref=e401]:
                    - generic [ref=e403]:
                      - link "Cloudy" [ref=e404]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Boydton,Virginia
                        - img "Cloudy" [ref=e405]
                      - link "8°C" [ref=e406]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Boydton,Virginia
                        - generic [ref=e407]: ‎8‎
                        - generic [ref=e409]: ‎°C‎
                    - generic [ref=e411]:
                      - link "Low temps to drop on Friday" [ref=e413]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Boydton,Virginia
                        - text: Low temps to drop on Friday
                      - link "See full forecast" [ref=e415]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Boydton,Virginia
                        - img "arrow" [ref=e416]
                  - list [ref=e419]:
                    - listitem [ref=e420]:
                      - generic "Weather forecast Today High temperature 18° Low temperature 8°" [ref=e421]:
                        - link "Weather forecast Today High temperature 18° Low temperature 8°" [ref=e422]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Boydton,Virginia
                          - generic:
                            - generic:
                              - generic "Today"
                              - generic:
                                - img "Mostly cloudy"
                              - generic:
                                - generic "High temperature 18°": ‎18°‎
                                - generic "Low temperature 8°": ‎8°‎
                    - listitem [ref=e423]:
                      - generic "Weather forecast Tue High temperature 22° Low temperature 11°" [ref=e424]:
                        - link "Weather forecast Tue High temperature 22° Low temperature 11°" [ref=e425]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Boydton,Virginia
                          - generic:
                            - generic:
                              - generic "Tue"
                              - generic:
                                - img "Sunny"
                              - generic:
                                - generic "High temperature 22°": ‎22°‎
                                - generic "Low temperature 11°": ‎11°‎
                    - listitem [ref=e426]:
                      - generic "Weather forecast Wed High temperature 23° Low temperature 16°" [ref=e427]:
                        - link "Weather forecast Wed High temperature 23° Low temperature 16°" [ref=e428]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Boydton,Virginia
                          - generic:
                            - generic:
                              - generic "Wed"
                              - generic:
                                - img "Mostly sunny"
                              - generic:
                                - generic "High temperature 23°": ‎23°‎
                                - generic "Low temperature 16°": ‎16°‎
                    - listitem [ref=e429]:
                      - generic "Weather forecast Thu High temperature 23° Low temperature 16°" [ref=e430]:
                        - link "Weather forecast Thu High temperature 23° Low temperature 16°" [ref=e431]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Boydton,Virginia
                          - generic:
                            - generic:
                              - generic "Thu"
                              - generic:
                                - img "Light rain"
                              - generic:
                                - generic "High temperature 23°": ‎23°‎
                                - generic "Low temperature 16°": ‎16°‎
                    - listitem [ref=e432]:
                      - generic "Weather forecast Fri High temperature 21° Low temperature 10°" [ref=e433]:
                        - link "Weather forecast Fri High temperature 21° Low temperature 10°" [ref=e434]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Boydton,Virginia
                          - generic:
                            - generic:
                              - generic "Fri"
                              - generic:
                                - img "Partly sunny"
                              - generic:
                                - generic "High temperature 21°": ‎21°‎
                                - generic "Low temperature 10°": ‎10°‎
                - button "See full forecast" [ref=e437]
            - article [ref=e438] [cursor=pointer]:
              - generic [ref=e443]:
                - generic [ref=e445]:
                  - link "Top stories" [ref=e447]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6ae8714378a747339f5e079666b48ca0&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e448]
                  - button "More options" [ref=e450]
                - list [ref=e453]:
                  - listitem [ref=e454]:
                    - link "Hindustan Times 58m Supreme Court allows bursting of green firecrackers in Delhi on November 7-8; restores ban thereafter" [ref=e455]:
                      - /url: https://www.msn.com/en-in/news/other/supreme-court-allows-bursting-of-green-firecrackers-in-delhi-on-november-7-8-restores-ban-thereafter/ar-AA2gA6vk
                      - generic [ref=e456]:
                        - generic [ref=e457]:
                          - img [ref=e458]
                          - generic [ref=e459]:
                            - generic: Hindustan Times ·58m
                        - generic [ref=e460]: Supreme Court allows bursting of green firecrackers in Delhi on November 7-8; restores ban thereafter
                  - listitem [ref=e461]:
                    - 'link "News18 1h Home-delivered drugs: Sukhbir Badal slams Bhagwant Mann after Punjab cop caught on camera planting heroin" [ref=e462]':
                      - /url: https://www.msn.com/en-in/news/other/home-delivered-drugs-sukhbir-badal-slams-bhagwant-mann-after-punjab-cop-caught-on-camera-planting-heroin/ar-AA2gzig4
                      - generic [ref=e463]:
                        - generic [ref=e464]:
                          - img [ref=e465]
                          - generic [ref=e466]:
                            - generic: News18 ·1h
                        - generic [ref=e467]: "Home-delivered drugs: Sukhbir Badal slams Bhagwant Mann after Punjab cop caught on camera planting heroin"
                  - listitem [ref=e468]:
                    - 'link "Press Trust of India now Diwali video row: Dia Mirza anti-Hindutva, speaks against Modi, says Mumbai mayor" [ref=e469]':
                      - /url: https://www.msn.com/en-in/news/other/diwali-video-row-dia-mirza-anti-hindutva-speaks-against-modi-says-mumbai-mayor/ar-AA2gAc5t
                      - generic [ref=e470]:
                        - generic [ref=e471]:
                          - img [ref=e472]
                          - generic [ref=e473]:
                            - generic: Press Trust of India ·now
                        - generic [ref=e474]: "Diwali video row: Dia Mirza anti-Hindutva, speaks against Modi, says Mumbai mayor"
                - generic [ref=e476]:
                  - generic [ref=e477]:
                    - generic "Previous" [ref=e478]:
                      - button "Previous" [ref=e479]
                    - tablist [ref=e481]:
                      - tab "Page 1" [selected] [ref=e482]
                      - tab "Page 2" [ref=e484]
                      - tab "Page 3" [ref=e486]
                    - generic "Next" [ref=e488]:
                      - button "Next" [ref=e489]
                  - link "See more" [ref=e491]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6ae8714378a747339f5e079666b48ca0&ocid=hpmsn
            - article "Backless blouses at Garba nights spark debate, but was the modern blouse always part of Indian tradition?" [ref=e492] [cursor=pointer]:
              - generic [ref=e494]:
                - img [ref=e495]
                - generic [ref=e496]:
                  - generic [ref=e497]:
                    - generic [ref=e498]:
                      - generic [ref=e499]:
                        - img [ref=e500]
                        - generic [ref=e501]: News18
                      - generic [ref=e502]: ·
                      - generic [ref=e503]: 2w
                    - link "Backless blouses at Garba nights spark debate, but was the modern blouse always part of Indian tradition?, News18" [ref=e504]:
                      - /url: https://www.msn.com/en-in/news/other/backless-blouses-at-garba-nights-spark-debate-but-was-the-modern-blouse-always-part-of-indian-tradition/ar-AA2ecIMA
                      - text: Backless blouses at Garba nights spark debate, but was the modern blouse always part of Indian tradition?
                  - generic "Backless blouses at Garba nights spark debate, but was the modern blouse always part of Indian tradition?" [ref=e507]:
                    - generic [ref=e509]:
                      - generic [ref=e510]:
                        - button "376 Likes" [ref=e511]:
                          - generic [ref=e512]:
                            - img [ref=e513]
                            - generic [ref=e515]: "376"
                        - button "Dislike" [ref=e516]:
                          - img [ref=e518]
                      - link "View comments 24 Comment" [ref=e521]:
                        - /url: https://www.msn.com/en-in/news/other/backless-blouses-at-garba-nights-spark-debate-but-was-the-modern-blouse-always-part-of-indian-tradition/ar-AA2ecIMA#comments
                        - button "View comments 24 Comment" [ref=e522]:
                          - img [ref=e523]
                        - generic [ref=e525]: "24"
                - generic [ref=e526]:
                  - button "Hide this story" [ref=e527]:
                    - img [ref=e528]
                    - text: Hide this story
                  - button "See more" [ref=e529]:
                    - img [ref=e530]
            - 'article "Israel election results: Why Netanyahu remains PM as Arab parties emerge as kingmakers" [ref=e531] [cursor=pointer]':
              - generic [ref=e533]:
                - img [ref=e534]
                - generic [ref=e535]:
                  - generic [ref=e536]:
                    - generic [ref=e537]:
                      - generic [ref=e538]:
                        - img [ref=e539]
                        - generic [ref=e540]: The Indian Express
                      - generic [ref=e541]: ·
                      - generic [ref=e542]: 17h
                    - 'link "Israel election results: Why Netanyahu remains PM as Arab parties emerge as kingmakers, The Indian Express" [ref=e543]':
                      - /url: https://www.msn.com/en-in/news/other/israel-election-results-why-netanyahu-remains-pm-as-arab-parties-emerge-as-kingmakers/ar-AA2gxUMc
                      - text: "Israel election results: Why Netanyahu remains PM as Arab parties emerge as kingmakers"
                  - 'generic "Israel election results: Why Netanyahu remains PM as Arab parties emerge as kingmakers" [ref=e546]':
                    - generic [ref=e548]:
                      - generic [ref=e549]:
                        - button "32 Likes" [ref=e550]:
                          - generic [ref=e551]:
                            - img [ref=e552]
                            - generic [ref=e554]: "32"
                        - button "Dislike" [ref=e555]:
                          - img [ref=e557]
                      - link "Start the conversation" [ref=e560]:
                        - /url: https://www.msn.com/en-in/news/other/israel-election-results-why-netanyahu-remains-pm-as-arab-parties-emerge-as-kingmakers/ar-AA2gxUMc#comments
                        - button "Start the conversation" [ref=e561]:
                          - img [ref=e562]
                - generic [ref=e564]:
                  - button "Hide this story" [ref=e565]:
                    - img [ref=e566]
                    - text: Hide this story
                  - button "See more" [ref=e567]:
                    - img [ref=e568]
            - 'article "Sanjay Gupta’s wife reacts to daughter’s middle finger video: ‘Expression of grief and anguish’" [ref=e569] [cursor=pointer]':
              - generic [ref=e571]:
                - img [ref=e572]
                - generic [ref=e573]:
                  - generic [ref=e574]:
                    - generic [ref=e575]:
                      - generic [ref=e576]:
                        - img [ref=e577]
                        - generic [ref=e578]: ABP - Live
                      - generic [ref=e579]: ·
                      - generic [ref=e580]: 5h
                    - 'link "Sanjay Gupta’s wife reacts to daughter’s middle finger video: ‘Expression of grief and anguish’, ABP - Live" [ref=e581]':
                      - /url: https://www.msn.com/en-in/news/other/sanjay-gupta-s-wife-reacts-to-daughter-s-middle-finger-video-expression-of-grief-and-anguish/ar-AA2gysjj
                      - text: "Sanjay Gupta’s wife reacts to daughter’s middle finger video: ‘Expression of grief and anguish’"
                  - 'generic "Sanjay Gupta’s wife reacts to daughter’s middle finger video: ‘Expression of grief and anguish’" [ref=e584]':
                    - generic [ref=e586]:
                      - generic [ref=e587]:
                        - button "23 Likes" [ref=e588]:
                          - generic [ref=e589]:
                            - img [ref=e590]
                            - generic [ref=e592]: "23"
                        - button "Dislike" [ref=e593]:
                          - img [ref=e595]
                      - link "Start the conversation" [ref=e598]:
                        - /url: https://www.msn.com/en-in/news/other/sanjay-gupta-s-wife-reacts-to-daughter-s-middle-finger-video-expression-of-grief-and-anguish/ar-AA2gysjj#comments
                        - button "Start the conversation" [ref=e599]:
                          - img [ref=e600]
                - generic [ref=e602]:
                  - button "Hide this story" [ref=e603]:
                    - img [ref=e604]
                    - text: Hide this story
                  - button "See more" [ref=e605]:
                    - img [ref=e606]
          - generic [ref=e607]:
            - article [ref=e608] [cursor=pointer]:
              - generic [ref=e613]:
                - generic [ref=e615]:
                  - link "Top Engaging News" [ref=e617]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6ae8714378a747339f5e079666b48ca0
                    - heading "Top Engaging News" [level=2] [ref=e618]
                  - button "More options" [ref=e620]
                - generic [ref=e622]:
                  - link "News18 10 Comments Jim Carrey marries for the 3rd time at 64, ties knot with 32-year-old girlfriend Min Ah" [ref=e624]:
                    - /url: https://www.msn.com/en-in/entertainment/celebrities/jim-carrey-marries-for-the-3rd-time-at-64-ties-knot-with-32-year-old-girlfriend-min-ah/ar-AA2dk8bG
                    - generic [ref=e625]:
                      - img [ref=e626]
                      - generic [ref=e627]: News18
                      - link "10 Comments" [ref=e629]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/jim-carrey-marries-for-the-3rd-time-at-64-ties-knot-with-32-year-old-girlfriend-min-ah/ar-AA2dk8bG#comments
                        - img [ref=e630]
                        - paragraph [ref=e631]: "10"
                    - paragraph [ref=e632]: Jim Carrey marries for the 3rd time at 64, ties knot with 32-year-old girlfriend Min Ah
                  - 'link "Hindustan Times 3 Comments Australians are laid-back: Indian man compares public holidays in Australia and India, internet reacts" [ref=e634]':
                    - /url: https://www.msn.com/en-in/news/other/australians-are-laid-back-indian-man-compares-public-holidays-in-australia-and-india-internet-reacts/ar-AA2dmmhs
                    - generic [ref=e635]:
                      - img [ref=e636]
                      - generic [ref=e637]: Hindustan Times
                      - link "3 Comments" [ref=e639]:
                        - /url: https://www.msn.com/en-in/news/other/australians-are-laid-back-indian-man-compares-public-holidays-in-australia-and-india-internet-reacts/ar-AA2dmmhs#comments
                        - img [ref=e640]
                        - paragraph [ref=e641]: "3"
                    - paragraph [ref=e642]: "Australians are laid-back: Indian man compares public holidays in Australia and India, internet reacts"
                  - link "ABP - Live 2 Comments Washington Sundar out of India T20I squad, BCCI names surprise replacement" [ref=e644]:
                    - /url: https://www.msn.com/en-in/sports/cricket/washington-sundar-out-of-india-t20i-squad-bcci-names-surprise-replacement/ar-AA2dltlt
                    - generic [ref=e645]:
                      - img [ref=e646]
                      - generic [ref=e647]: ABP - Live
                      - link "2 Comments" [ref=e649]:
                        - /url: https://www.msn.com/en-in/sports/cricket/washington-sundar-out-of-india-t20i-squad-bcci-names-surprise-replacement/ar-AA2dltlt#comments
                        - img [ref=e650]
                        - paragraph [ref=e651]: "2"
                    - paragraph [ref=e652]: Washington Sundar out of India T20I squad, BCCI names surprise replacement
                - generic [ref=e654]:
                  - generic [ref=e655]:
                    - generic "Previous" [ref=e656]:
                      - button "Previous" [ref=e657]
                    - tablist [ref=e659]:
                      - tab "Page 1" [selected] [ref=e660]
                      - tab "Page 2" [ref=e662]
                      - tab "Page 3" [ref=e664]
                    - generic "Next" [ref=e666]:
                      - button "Next" [ref=e667]
                  - link "See more" [ref=e669]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6ae8714378a747339f5e079666b48ca0
            - article [ref=e670] [cursor=pointer]:
              - generic [ref=e676]:
                - generic [ref=e678]:
                  - img "Watchlist suggestions" [ref=e680]
                  - link "Watchlist suggestions" [ref=e681]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e682]
                  - button "More options" [ref=e684]
                - generic [ref=e689]:
                  - link "SENSEX SENSEX Rising fast ‎+1.66%‎ 75,692.78" [ref=e691]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkucw&noti=Price&ocid=hpmsn
                    - generic [ref=e692]:
                      - generic [ref=e693]:
                        - generic [ref=e694]: SENSEX
                        - img "SENSEX" [ref=e695]
                      - generic [ref=e697]: Rising fast
                    - generic [ref=e702]:
                      - generic [ref=e703]: ‎+1.66%‎
                      - generic [ref=e704]: 75,692.78
                    - button "Add to watchlist" [ref=e707]:
                      - img [ref=e708]
                  - link "NIFTY NIFTY Rising fast ‎+1.68%‎ 23,440.80" [ref=e712]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkqww&noti=Price&ocid=hpmsn
                    - generic [ref=e713]:
                      - generic [ref=e714]:
                        - generic [ref=e715]: NIFTY
                        - img "NIFTY" [ref=e716]
                      - generic [ref=e718]: Rising fast
                    - generic [ref=e723]:
                      - generic [ref=e724]: ‎+1.68%‎
                      - generic [ref=e725]: 23,440.80
                    - button "Add to watchlist" [ref=e728]:
                      - img [ref=e729]
                  - link "24K Gold (10 Grams) - Indian Rupee XAUINR ‎+0.69%‎ 144496" [ref=e733]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&ocid=hpmsn
                    - generic [ref=e734]:
                      - generic [ref=e736]: 24K Gold (10 Grams) - Indian Rupee
                      - generic [ref=e738]: XAUINR
                    - generic [ref=e743]:
                      - generic [ref=e744]: ‎+0.69%‎
                      - generic [ref=e745]: "144496"
                    - button "Add to watchlist" [ref=e748]:
                      - img [ref=e749]
                  - link "Silver Silver Rising fast ‎+2.06%‎ 50.29" [ref=e753]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwr7&noti=Price&ocid=hpmsn
                    - generic [ref=e754]:
                      - generic [ref=e755]:
                        - generic [ref=e756]: Silver
                        - img "Silver" [ref=e757]
                      - generic [ref=e759]: Rising fast
                    - generic [ref=e764]:
                      - generic [ref=e765]: ‎+2.06%‎
                      - generic [ref=e766]: "50.29"
                    - button "Add to watchlist" [ref=e769]:
                      - img [ref=e770]
                  - link "Citigroup Inc. C ‎-2.48%‎ 122.64" [ref=e774]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a1p3ww&ocid=hpmsn
                    - generic [ref=e775]:
                      - generic [ref=e777]: Citigroup Inc.
                      - generic [ref=e779]: C
                    - generic [ref=e784]:
                      - generic [ref=e785]: ‎-2.48%‎
                      - generic [ref=e786]: "122.64"
                    - button "Add to watchlist" [ref=e789]:
                      - img [ref=e790]
                - generic [ref=e794]:
                  - generic [ref=e795]:
                    - generic "Previous" [ref=e796]:
                      - button "Previous" [ref=e797]
                    - tablist [ref=e799]:
                      - tab "Page 1" [selected] [ref=e800]
                      - tab "Page 2" [ref=e802]
                      - tab "Page 3" [ref=e804]
                      - tab "Page 4" [ref=e806]
                      - tab "Page 5" [ref=e808]
                      - tab "Page 6"
                      - tab "Page 7"
                    - generic "Next" [ref=e810]:
                      - button "Next" [ref=e811]
                  - link "See watchlist suggestions" [ref=e813]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - 'article "Drinking water before brushing after waking up: Why more people do it and its benefits" [ref=e814] [cursor=pointer]':
              - generic [ref=e816]:
                - img [ref=e817]
                - generic [ref=e818]:
                  - generic [ref=e819]:
                    - generic [ref=e821]:
                      - img [ref=e822]
                      - generic [ref=e823]: The Economic Times
                    - 'link "Drinking water before brushing after waking up: Why more people do it and its benefits, The Economic Times" [ref=e824]':
                      - /url: https://www.msn.com/en-in/health/general/drinking-water-before-brushing-after-waking-up-why-more-people-do-it-and-its-benefits/ss-AA2bfelU
                      - text: "Drinking water before brushing after waking up: Why more people do it and its benefits"
                  - 'generic "Drinking water before brushing after waking up: Why more people do it and its benefits" [ref=e827]':
                    - generic [ref=e829]:
                      - generic [ref=e830]:
                        - button "91 Likes" [ref=e831]:
                          - generic [ref=e832]:
                            - img [ref=e833]
                            - generic [ref=e835]: "91"
                        - button "Dislike" [ref=e836]:
                          - img [ref=e838]
                      - link "Start the conversation" [ref=e841]:
                        - /url: https://www.msn.com/en-in/health/general/drinking-water-before-brushing-after-waking-up-why-more-people-do-it-and-its-benefits/ss-AA2bfelU#comments
                        - button "Start the conversation" [ref=e842]:
                          - img [ref=e843]
                - generic [ref=e845]:
                  - button "Hide this story" [ref=e846]:
                    - img [ref=e847]
                    - text: Hide this story
                  - button "See more" [ref=e848]:
                    - img [ref=e849]
            - article "Iran hit US early-warning systems before striking military bases across Middle East" [ref=e850] [cursor=pointer]:
              - generic [ref=e852]:
                - img [ref=e853]
                - generic [ref=e854]:
                  - generic [ref=e855]:
                    - generic [ref=e856]:
                      - generic [ref=e857]:
                        - img [ref=e858]
                        - generic [ref=e859]: The Times of India
                      - generic [ref=e860]: ·
                      - generic [ref=e861]: 19h
                    - link "Iran hit US early-warning systems before striking military bases across Middle East, The Times of India" [ref=e862]:
                      - /url: https://www.msn.com/en-in/news/other/iran-hit-us-early-warning-systems-before-striking-military-bases-across-middle-east/ar-AA2gwEwr
                      - text: Iran hit US early-warning systems before striking military bases across Middle East
                  - generic "Iran hit US early-warning systems before striking military bases across Middle East" [ref=e865]:
                    - generic [ref=e867]:
                      - generic [ref=e868]:
                        - button "105 Likes" [ref=e869]:
                          - generic [ref=e870]:
                            - img [ref=e871]
                            - generic [ref=e873]: "105"
                        - button "Dislike" [ref=e874]:
                          - img [ref=e876]
                      - link "View comments 4 Comment" [ref=e879]:
                        - /url: https://www.msn.com/en-in/news/other/iran-hit-us-early-warning-systems-before-striking-military-bases-across-middle-east/ar-AA2gwEwr#comments
                        - button "View comments 4 Comment" [ref=e880]:
                          - img [ref=e881]
                        - generic [ref=e883]: "4"
                - generic [ref=e884]:
                  - button "Hide this story" [ref=e885]:
                    - img [ref=e886]
                    - text: Hide this story
                  - button "See more" [ref=e887]:
                    - img [ref=e888]
            - article [ref=e889] [cursor=pointer]
            - article "Tiger Shroff's team refutes reports of actor making first public appearance after firing incident for a book launch, say not true at all" [ref=e896] [cursor=pointer]:
              - generic [ref=e898]:
                - img [ref=e899]
                - generic [ref=e900]:
                  - generic [ref=e901]:
                    - generic [ref=e902]:
                      - generic [ref=e903]:
                        - img [ref=e904]
                        - generic [ref=e905]: Moneycontrol
                      - generic [ref=e906]: ·
                      - generic [ref=e907]: 4h
                    - link "Tiger Shroff's team refutes reports of actor making first public appearance after firing incident for a book launch, say not true at all, Moneycontrol" [ref=e908]:
                      - /url: https://www.msn.com/en-in/news/other/tiger-shroff-s-team-refutes-reports-of-actor-making-first-public-appearance-after-firing-incident-for-a-book-launch-say-not-true-at-all/ar-AA2gyKa6
                      - text: Tiger Shroff's team refutes reports of actor making first public appearance after firing incident for a book launch, say not true at all
                  - generic "Tiger Shroff's team refutes reports of actor making first public appearance after firing incident for a book launch, say not true at all" [ref=e911]:
                    - generic [ref=e913]:
                      - generic [ref=e914]:
                        - button "3 Likes" [ref=e915]:
                          - generic [ref=e916]:
                            - img [ref=e917]
                            - generic [ref=e919]: "3"
                        - button "Dislike" [ref=e920]:
                          - img [ref=e922]
                      - link "Start the conversation" [ref=e925]:
                        - /url: https://www.msn.com/en-in/news/other/tiger-shroff-s-team-refutes-reports-of-actor-making-first-public-appearance-after-firing-incident-for-a-book-launch-say-not-true-at-all/ar-AA2gyKa6#comments
                        - button "Start the conversation" [ref=e926]:
                          - img [ref=e927]
                - generic [ref=e929]:
                  - button "Hide this story" [ref=e930]:
                    - img [ref=e931]
                    - text: Hide this story
                  - button "See more" [ref=e932]:
                    - img [ref=e933]
            - article [ref=e934] [cursor=pointer]
            - article [ref=e941] [cursor=pointer]:
              - generic [ref=e947]:
                - generic [ref=e949]:
                  - img "ICC" [ref=e951]
                  - link "ICC" [ref=e952]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?uxmode=ruby&ocid=hpmsn&cvid=6ae8714378a747339f5e079666b48ca0
                    - heading "ICC" [level=2] [ref=e953]
                  - button "More interests" [ref=e954]
                  - generic [ref=e955]:
                    - generic "Live now" [ref=e956]:
                      - button "Live now" [ref=e957]
                    - button "More options" [ref=e958]
                - generic [ref=e962]:
                  - link "AFG 81/3 (8.1) VS ZIM 79 (14.3) AFG won by 7 wickets" [ref=e963]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-274662?uxmode=ruby&ocid=hpmsn&cvid=6ae8714378a747339f5e079666b48ca0
                    - generic "AFG" [ref=e964]:
                      - generic [ref=e965]:
                        - img [ref=e967]
                        - generic [ref=e969]:
                          - generic [ref=e971]: AFG
                          - button "Click to follow AFG":
                            - generic:
                              - img
                        - generic [ref=e973]:
                          - generic [ref=e974]: 81/3
                          - generic [ref=e975]: (8.1)
                    - generic [ref=e979]: VS
                    - generic "ZIM" [ref=e980]:
                      - generic [ref=e981]:
                        - generic [ref=e982]:
                          - generic [ref=e984]: ZIM
                          - button "Click to follow ZIM":
                            - generic:
                              - img
                        - generic [ref=e986]:
                          - generic [ref=e987]: "79"
                          - generic [ref=e988]: (14.3)
                    - generic "AFG won by 7 wickets" [ref=e991]
                  - link "NZ 4 Nov 2:00 am IND Eden Park, Auckland" [ref=e992]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-271651?uxmode=ruby&ocid=hpmsn&cvid=6ae8714378a747339f5e079666b48ca0
                    - generic "NZ" [ref=e993]:
                      - generic [ref=e995]:
                        - generic [ref=e997]: NZ
                        - button "Click to follow NZ":
                          - generic:
                            - img
                    - generic [ref=e1000]:
                      - generic [ref=e1001]: 4 Nov
                      - generic [ref=e1002]: 2:00 am
                    - generic "IND" [ref=e1003]:
                      - generic [ref=e1005]:
                        - generic [ref=e1007]: IND
                        - button "Click to follow IND":
                          - generic:
                            - img
                    - generic "Eden Park, Auckland" [ref=e1010]
                  - link "AUS 115/5 (6.0) VS AFG 119/2 (5.1) AFG won by 4 wickets" [ref=e1011]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-275395?uxmode=ruby&ocid=hpmsn&cvid=6ae8714378a747339f5e079666b48ca0
                    - generic "AUS" [ref=e1012]:
                      - generic [ref=e1013]:
                        - generic [ref=e1014]:
                          - generic [ref=e1016]: AUS
                          - button "Click to follow AUS":
                            - generic:
                              - img
                        - generic [ref=e1018]:
                          - generic [ref=e1019]: 115/5
                          - generic [ref=e1020]: (6.0)
                    - generic [ref=e1024]: VS
                    - generic "AFG" [ref=e1025]:
                      - generic [ref=e1026]:
                        - img [ref=e1028]
                        - generic [ref=e1030]:
                          - generic [ref=e1032]: AFG
                          - button "Click to follow AFG":
                            - generic:
                              - img
                        - generic [ref=e1034]:
                          - generic [ref=e1035]: 119/2
                          - generic [ref=e1036]: (5.1)
                    - generic "AFG won by 4 wickets" [ref=e1039]
                - generic [ref=e1041]:
                  - generic [ref=e1042]:
                    - generic "Previous" [ref=e1043]:
                      - button "Previous" [ref=e1044]
                    - tablist [ref=e1046]:
                      - tab "Page 1" [selected] [ref=e1047]
                      - tab "Page 2" [ref=e1049]
                      - tab "Page 3" [ref=e1051]
                      - tab "Page 4" [ref=e1053]
                      - tab "Page 5" [ref=e1055]
                      - tab "Page 6"
                      - tab "Page 7"
                      - tab "Page 8"
                      - tab "Page 9"
                      - tab "Page 10"
                      - tab "Page 11"
                    - generic "Next" [ref=e1057]:
                      - button "Next" [ref=e1058]
                  - link "See more ICC" [ref=e1060]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?uxmode=ruby&ocid=hpmsn&cvid=6ae8714378a747339f5e079666b48ca0
          - article [ref=e1062]
          - generic [ref=e1064]:
            - article [ref=e1065] [cursor=pointer]:
              - generic [ref=e1070]:
                - generic [ref=e1071]:
                  - generic [ref=e1072]:
                    - link "Recommended videos" [ref=e1073]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e1074]
                    - link "Recommended videos" [ref=e1077]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e1078]:
                    - generic:
                      - link "See more" [ref=e1079]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e1080]:
                        - button "More options" [ref=e1081]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e1083]:
                  - generic [ref=e1085]:
                    - generic [ref=e1087]:
                      - generic:
                        - article "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [ref=e1090]:
                          - generic [ref=e1091]:
                            - img "Trevor Noah Breaks Down the Real Reason Idris Elba could NOT play James Bond Thumbnail" [ref=e1093]
                            - generic [ref=e1095]: 09:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1096]:
                              - generic [ref=e1097]:
                                - img "Trevor Noah" [ref=e1098]
                                - generic [ref=e1099]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1100]
                                    - generic [ref=e1101]: ·
                                    - generic [ref=e1102]: 3d
                              - link "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [ref=e1103]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/trevor-noah-breaks-down-the-real-reason-idris-elba-could-not-play-james-bond/vi-AA2gmHAB?ocid=hpmsn
                                - heading "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [level=2] [ref=e1104]:
                                  - generic: Trevor Noah breaks down the real reason Idris Elba could not play James Bond
                            - button "See more" [ref=e1108]
                        - article "She sang “Get rid of Putin” in a Moscow cathedral - Listen to what happened afterwards" [ref=e1111]:
                          - generic [ref=e1112]:
                            - img "She Sang “Get Rid of Putin” in a Moscow Cathedral - Listen to what happened afterwards" [ref=e1114]
                            - generic [ref=e1116]: 13:05
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1117]:
                              - generic [ref=e1118]:
                                - img "TED" [ref=e1119]
                                - generic [ref=e1120]:
                                  - generic:
                                    - generic "TED" [ref=e1121]
                                    - generic [ref=e1122]: ·
                                    - generic [ref=e1123]: 3d
                              - link "She sang “Get rid of Putin” in a Moscow cathedral - Listen to what happened afterwards" [ref=e1124]:
                                - /url: https://www.msn.com/en-in/news/other/she-sang-get-rid-of-putin-in-a-moscow-cathedral-listen-to-what-happened-afterwards/vi-AA2doFSr?ocid=hpmsn
                                - heading "She sang “Get rid of Putin” in a Moscow cathedral - Listen to what happened afterwards" [level=2] [ref=e1125]:
                                  - generic: She sang “Get rid of Putin” in a Moscow cathedral - Listen to what happened afterwards
                            - button "See more" [ref=e1129]
                        - article "Watch a $100 million stealth fighter stop in midair and drop straight down" [ref=e1132]:
                          - generic [ref=e1133]:
                            - img "Watch A $100 Million Stealth Fighter Stop In Midair And Drop Straight Down" [ref=e1135]
                            - generic [ref=e1137]: 20:35
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1138]:
                              - generic [ref=e1139]:
                                - img "Sam Eckholm" [ref=e1140]
                                - generic [ref=e1141]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1142]
                                    - generic [ref=e1143]: ·
                                    - generic [ref=e1144]: 1h
                              - link "Watch a $100 million stealth fighter stop in midair and drop straight down" [ref=e1145]:
                                - /url: https://www.msn.com/en-in/technology/aviation/watch-a-100-million-stealth-fighter-stop-in-midair-and-drop-straight-down/vi-AA2aWVQI?ocid=hpmsn
                                - heading "Watch a $100 million stealth fighter stop in midair and drop straight down" [level=2] [ref=e1146]:
                                  - generic: Watch a $100 million stealth fighter stop in midair and drop straight down
                            - button "See more" [ref=e1150]
                        - article "Trevor Noah’s NYC debut - How a night of laughs turned into a deep reflection on race in America" [ref=e1153]:
                          - generic [ref=e1154]:
                            - img "Trevor Noah’s NYC Debut - How a Night of Laughs Turned into a Deep Reflection on Race in America Thumbnail" [ref=e1156]
                            - generic [ref=e1158]: 08:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1159]:
                              - generic [ref=e1160]:
                                - img "Trevor Noah" [ref=e1161]
                                - generic [ref=e1162]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1163]
                                    - generic [ref=e1164]: ·
                                    - generic [ref=e1165]: 3w
                              - link "Trevor Noah’s NYC debut - How a night of laughs turned into a deep reflection on race in America" [ref=e1166]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/trevor-noah-s-nyc-debut-how-a-night-of-laughs-turned-into-a-deep-reflection-on-race-in-america/vi-AA2dFE5z?ocid=hpmsn
                                - heading "Trevor Noah’s NYC debut - How a night of laughs turned into a deep reflection on race in America" [level=2] [ref=e1167]:
                                  - generic: Trevor Noah’s NYC debut - How a night of laughs turned into a deep reflection on race in America
                            - button "See more" [ref=e1171]
                        - article [ref=e1174]:
                          - generic [ref=e1175]:
                            - img "Watch a $200 Warship Hide Its 57mm Gun - Then Open Fire" [ref=e1177]
                            - generic [ref=e1179]: 22:13
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1180]:
                              - generic [ref=e1181]:
                                - img "Sam Eckholm" [ref=e1182]
                                - generic [ref=e1183]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1184]
                                    - generic [ref=e1185]: ·
                                    - generic [ref=e1186]: 1h
                              - link "Watch a $200 warship hide its 57mm gun - then open fire" [ref=e1187]:
                                - /url: https://www.msn.com/en-in/news/other/watch-a-200-warship-hide-its-57mm-gun-then-open-fire/vi-AA2aRkq0?ocid=hpmsn
                                - heading "Watch a $200 warship hide its 57mm gun - then open fire" [level=2] [ref=e1188]:
                                  - generic: Watch a $200 warship hide its 57mm gun - then open fire
                            - button "See more" [ref=e1192]
                        - article "Watch a man dangle his legs from a C-130 military plane during low-level mountain flying" [ref=e1195]:
                          - generic [ref=e1196]:
                            - img "Watch a Man Dangle His Legs From a C-130 Military Plane During Low-Level Mountain Flying" [ref=e1198]
                            - generic [ref=e1200]: 15:13
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1201]:
                              - generic [ref=e1202]:
                                - img "Sam Eckholm" [ref=e1203]
                                - generic [ref=e1204]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1205]
                                    - generic [ref=e1206]: ·
                                    - generic [ref=e1207]: 1h
                              - link "Watch a man dangle his legs from a C-130 military plane during low-level mountain flying" [ref=e1208]:
                                - /url: https://www.msn.com/en-in/news/other/watch-a-man-dangle-his-legs-from-a-c-130-military-plane-during-low-level-mountain-flying/vi-AA2gzMBE?ocid=hpmsn
                                - heading "Watch a man dangle his legs from a C-130 military plane during low-level mountain flying" [level=2] [ref=e1209]:
                                  - generic: Watch a man dangle his legs from a C-130 military plane during low-level mountain flying
                            - button "See more" [ref=e1213]
                        - article "Watch the real Darkstar up close - the hypersonic jet that stunned Top Gun fans" [ref=e1216]:
                          - generic [ref=e1217]:
                            - img "Watch the Real Darkstar Up Close - The Hypersonic Jet That Stunned Top Gun Fans" [ref=e1219]
                            - generic [ref=e1221]: 12:56
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1222]:
                              - generic [ref=e1223]:
                                - img "Sam Eckholm" [ref=e1224]
                                - generic [ref=e1225]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1226]
                                    - generic [ref=e1227]: ·
                                    - generic [ref=e1228]: 1h
                              - link "Watch the real Darkstar up close - the hypersonic jet that stunned Top Gun fans" [ref=e1229]:
                                - /url: https://www.msn.com/en-in/entertainment/general/watch-the-real-darkstar-up-close-the-hypersonic-jet-that-stunned-top-gun-fans/vi-AA1VDCVW?ocid=hpmsn
                                - heading "Watch the real Darkstar up close - the hypersonic jet that stunned Top Gun fans" [level=2] [ref=e1230]:
                                  - generic: Watch the real Darkstar up close - the hypersonic jet that stunned Top Gun fans
                            - button "See more" [ref=e1234]
                        - link "See more" [ref=e1236]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1237]
                          - text: See more
                    - button "next" [ref=e1241]:
                      - img [ref=e1244]
            - article "Rahul Gandhi's 'protest, then shop' appeal hits 'closed' wall at Connaught Place on Delhi rally day" [ref=e1246] [cursor=pointer]:
              - generic [ref=e1248]:
                - img [ref=e1249]
                - generic [ref=e1250]:
                  - generic [ref=e1251]:
                    - generic [ref=e1252]:
                      - generic [ref=e1253]:
                        - img [ref=e1254]
                        - generic [ref=e1255]: NDTV
                      - generic [ref=e1256]: ·
                      - generic [ref=e1257]: 22h
                    - link "Rahul Gandhi's 'protest, then shop' appeal hits 'closed' wall at Connaught Place on Delhi rally day, NDTV" [ref=e1258]:
                      - /url: https://www.msn.com/en-in/news/other/rahul-gandhi-s-protest-then-shop-appeal-hits-closed-wall-at-connaught-place-on-delhi-rally-day/ar-AA2gx4VK
                      - text: Rahul Gandhi's 'protest, then shop' appeal hits 'closed' wall at Connaught Place on Delhi rally day
                  - generic "Rahul Gandhi's 'protest, then shop' appeal hits 'closed' wall at Connaught Place on Delhi rally day" [ref=e1261]:
                    - generic [ref=e1263]:
                      - generic [ref=e1264]:
                        - button "34 Likes" [ref=e1265]:
                          - generic [ref=e1266]:
                            - img [ref=e1267]
                            - generic [ref=e1269]: "34"
                        - button "Dislike" [ref=e1270]:
                          - img [ref=e1272]
                      - link "View comments 11 Comment" [ref=e1275]:
                        - /url: https://www.msn.com/en-in/news/other/rahul-gandhi-s-protest-then-shop-appeal-hits-closed-wall-at-connaught-place-on-delhi-rally-day/ar-AA2gx4VK#comments
                        - button "View comments 11 Comment" [ref=e1276]:
                          - img [ref=e1277]
                        - generic [ref=e1279]: "11"
                - generic [ref=e1280]:
                  - button "Hide this story" [ref=e1281]:
                    - img [ref=e1282]
                    - text: Hide this story
                  - button "See more" [ref=e1283]:
                    - img [ref=e1284]
            - 'article "''I used to earn Rs 6,000'': Zomato delivery boy has a special message for Deepinder Goyal" [ref=e1285] [cursor=pointer]':
              - generic [ref=e1287]:
                - img [ref=e1288]
                - generic [ref=e1289]:
                  - generic [ref=e1290]:
                    - generic [ref=e1291]:
                      - generic [ref=e1292]:
                        - img [ref=e1293]
                        - generic [ref=e1294]: NDTV Profit
                      - generic [ref=e1295]: ·
                      - generic [ref=e1296]: 1d
                    - 'link "''I used to earn Rs 6,000'': Zomato delivery boy has a special message for Deepinder Goyal, NDTV Profit" [ref=e1297]':
                      - /url: https://www.msn.com/en-in/money/technology/i-used-to-earn-rs-6-000-zomato-delivery-boy-has-a-special-message-for-deepinder-goyal/ar-AA2gubUa
                      - text: "'I used to earn Rs 6,000': Zomato delivery boy has a special message for Deepinder Goyal"
                  - 'generic "''I used to earn Rs 6,000'': Zomato delivery boy has a special message for Deepinder Goyal" [ref=e1300]':
                    - generic [ref=e1302]:
                      - generic [ref=e1303]:
                        - button "57 Likes" [ref=e1304]:
                          - generic [ref=e1305]:
                            - img [ref=e1306]
                            - generic [ref=e1308]: "57"
                        - button "Dislike" [ref=e1309]:
                          - img [ref=e1311]
                      - link "Start the conversation" [ref=e1314]:
                        - /url: https://www.msn.com/en-in/money/technology/i-used-to-earn-rs-6-000-zomato-delivery-boy-has-a-special-message-for-deepinder-goyal/ar-AA2gubUa#comments
                        - button "Start the conversation" [ref=e1315]:
                          - img [ref=e1316]
                - generic [ref=e1318]:
                  - button "Hide this story" [ref=e1319]:
                    - img [ref=e1320]
                    - text: Hide this story
                  - button "See more" [ref=e1321]:
                    - img [ref=e1322]
            - article "Cyclone 'Murasu' forms over Bay of Bengal; southern Odisha, Andhra power utilities on high alert" [ref=e1323] [cursor=pointer]:
              - generic [ref=e1325]:
                - img [ref=e1326]
                - generic [ref=e1327]:
                  - generic [ref=e1328]:
                    - generic [ref=e1329]:
                      - generic [ref=e1330]:
                        - img [ref=e1331]
                        - generic [ref=e1332]: NDTV Profit
                      - generic [ref=e1333]: ·
                      - generic [ref=e1334]: 18h
                    - link "Cyclone 'Murasu' forms over Bay of Bengal; southern Odisha, Andhra power utilities on high alert, NDTV Profit" [ref=e1335]:
                      - /url: https://www.msn.com/en-in/news/other/cyclone-murasu-forms-over-bay-of-bengal-southern-odisha-andhra-power-utilities-on-high-alert/ar-AA2gxCQf
                      - text: Cyclone 'Murasu' forms over Bay of Bengal; southern Odisha, Andhra power utilities on high alert
                  - generic "Cyclone 'Murasu' forms over Bay of Bengal; southern Odisha, Andhra power utilities on high alert" [ref=e1338]:
                    - generic [ref=e1340]:
                      - generic [ref=e1341]:
                        - button "6 Likes" [ref=e1342]:
                          - generic [ref=e1343]:
                            - img [ref=e1344]
                            - generic [ref=e1346]: "6"
                        - button "Dislike" [ref=e1347]:
                          - img [ref=e1349]
                      - link "Start the conversation" [ref=e1352]:
                        - /url: https://www.msn.com/en-in/news/other/cyclone-murasu-forms-over-bay-of-bengal-southern-odisha-andhra-power-utilities-on-high-alert/ar-AA2gxCQf#comments
                        - button "Start the conversation" [ref=e1353]:
                          - img [ref=e1354]
                - generic [ref=e1356]:
                  - button "Hide this story" [ref=e1357]:
                    - img [ref=e1358]
                    - text: Hide this story
                  - button "See more" [ref=e1359]:
                    - img [ref=e1360]
            - 'article "Don''t need lessons on Diwali celebration: Mumbai BJP chief, MLC slam Dia Mirza''s campaign; BMC deletes video" [ref=e1361] [cursor=pointer]':
              - generic [ref=e1363]:
                - img [ref=e1364]
                - generic [ref=e1365]:
                  - generic [ref=e1366]:
                    - generic [ref=e1367]:
                      - generic [ref=e1368]:
                        - img [ref=e1369]
                        - generic [ref=e1370]: ABP - Live
                      - generic [ref=e1371]: ·
                      - generic [ref=e1372]: 3h
                    - 'link "Don''t need lessons on Diwali celebration: Mumbai BJP chief, MLC slam Dia Mirza''s campaign; BMC deletes video, ABP - Live" [ref=e1373]':
                      - /url: https://www.msn.com/en-in/news/other/don-t-need-lessons-on-diwali-celebration-mumbai-bjp-chief-mlc-slam-dia-mirza-s-campaign-bmc-deletes-video/ar-AA2gztAT
                      - text: "Don't need lessons on Diwali celebration: Mumbai BJP chief, MLC slam Dia Mirza's campaign; BMC deletes video"
                  - 'generic "Don''t need lessons on Diwali celebration: Mumbai BJP chief, MLC slam Dia Mirza''s campaign; BMC deletes video" [ref=e1376]':
                    - generic [ref=e1378]:
                      - generic [ref=e1379]:
                        - button "47 Likes" [ref=e1380]:
                          - generic [ref=e1381]:
                            - img [ref=e1382]
                            - generic [ref=e1384]: "47"
                        - button "Dislike" [ref=e1385]:
                          - img [ref=e1387]
                      - link "View comments 10 Comment" [ref=e1390]:
                        - /url: https://www.msn.com/en-in/news/other/don-t-need-lessons-on-diwali-celebration-mumbai-bjp-chief-mlc-slam-dia-mirza-s-campaign-bmc-deletes-video/ar-AA2gztAT#comments
                        - button "View comments 10 Comment" [ref=e1391]:
                          - img [ref=e1392]
                        - generic [ref=e1394]: "10"
                - generic [ref=e1395]:
                  - button "Hide this story" [ref=e1396]:
                    - img [ref=e1397]
                    - text: Hide this story
                  - button "See more" [ref=e1398]:
                    - img [ref=e1399]
            - article [ref=e1400] [cursor=pointer]
            - 'article "Wedding feast turns nightmare in Mumbai: 27 fall ill, newlyweds among them" [ref=e1407] [cursor=pointer]':
              - generic [ref=e1409]:
                - img [ref=e1410]
                - generic [ref=e1411]:
                  - generic [ref=e1412]:
                    - generic [ref=e1413]:
                      - generic [ref=e1414]:
                        - img [ref=e1415]
                        - generic [ref=e1416]: NDTV Profit
                      - generic [ref=e1417]: ·
                      - generic [ref=e1418]: 6h
                    - 'link "Wedding feast turns nightmare in Mumbai: 27 fall ill, newlyweds among them, NDTV Profit" [ref=e1419]':
                      - /url: https://www.msn.com/en-in/food-and-drink/general/wedding-feast-turns-nightmare-in-mumbai-27-fall-ill-newlyweds-among-them/ar-AA2gyRav
                      - text: "Wedding feast turns nightmare in Mumbai: 27 fall ill, newlyweds among them"
                  - 'generic "Wedding feast turns nightmare in Mumbai: 27 fall ill, newlyweds among them" [ref=e1422]':
                    - generic [ref=e1424]:
                      - generic [ref=e1425]:
                        - button "14 Likes" [ref=e1426]:
                          - generic [ref=e1427]:
                            - img [ref=e1428]
                            - generic [ref=e1430]: "14"
                        - button "Dislike" [ref=e1431]:
                          - img [ref=e1433]
                      - link "Start the conversation" [ref=e1436]:
                        - /url: https://www.msn.com/en-in/food-and-drink/general/wedding-feast-turns-nightmare-in-mumbai-27-fall-ill-newlyweds-among-them/ar-AA2gyRav#comments
                        - button "Start the conversation" [ref=e1437]:
                          - img [ref=e1438]
                - generic [ref=e1440]:
                  - button "Hide this story" [ref=e1441]:
                    - img [ref=e1442]
                    - text: Hide this story
                  - button "See more" [ref=e1443]:
                    - img [ref=e1444]
          - generic [ref=e1445]:
            - article [ref=e1446] [cursor=pointer]
            - article "My friend eats 10 to 12 cloves every day. Is that healthy or harmful?" [ref=e1453] [cursor=pointer]:
              - generic [ref=e1455]:
                - img [ref=e1456]
                - generic [ref=e1457]:
                  - generic [ref=e1458]:
                    - generic [ref=e1459]:
                      - generic [ref=e1460]:
                        - img [ref=e1461]
                        - generic [ref=e1462]: The Indian Express
                      - generic [ref=e1463]: ·
                      - generic [ref=e1464]: 7h
                    - link "My friend eats 10 to 12 cloves every day. Is that healthy or harmful?, The Indian Express" [ref=e1465]:
                      - /url: https://www.msn.com/en-in/food-and-drink/general/my-friend-eats-10-to-12-cloves-every-day-is-that-healthy-or-harmful/ar-AA2gypF1
                      - text: My friend eats 10 to 12 cloves every day. Is that healthy or harmful?
                  - generic "My friend eats 10 to 12 cloves every day. Is that healthy or harmful?" [ref=e1468]:
                    - generic [ref=e1470]:
                      - generic [ref=e1471]:
                        - button "25 Likes" [ref=e1472]:
                          - generic [ref=e1473]:
                            - img [ref=e1474]
                            - generic [ref=e1476]: "25"
                        - button "Dislike" [ref=e1477]:
                          - img [ref=e1479]
                      - link "Start the conversation" [ref=e1482]:
                        - /url: https://www.msn.com/en-in/food-and-drink/general/my-friend-eats-10-to-12-cloves-every-day-is-that-healthy-or-harmful/ar-AA2gypF1#comments
                        - button "Start the conversation" [ref=e1483]:
                          - img [ref=e1484]
                - generic [ref=e1486]:
                  - button "Hide this story" [ref=e1487]:
                    - img [ref=e1488]
                    - text: Hide this story
                  - button "See more" [ref=e1489]:
                    - img [ref=e1490]
    - contentinfo [ref=e1493]:
      - generic "Feedback" [ref=e1495] [cursor=pointer]:
        - button "Feedback" [ref=e1496]:
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