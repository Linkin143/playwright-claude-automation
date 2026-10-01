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
  - generic [ref=e8]:
    - generic [ref=e9]:
      - img "Terms of Use" [ref=e10]
      - link "BannerHeadlineAndLead" [ref=e11] [cursor=pointer]:
        - /url: https://go.microsoft.com/fwlink/?LinkID=2092201
        - paragraph [ref=e12]: We have updated our Terms of Use.
    - generic [ref=e13]:
      - button "DismissBanner" [ref=e14] [cursor=pointer]: Dismiss
      - button "ActionButton1" [ref=e15] [cursor=pointer]: Learn more
  - banner [ref=e18]:
    - generic [ref=e19]:
      - generic "Skip to content" [ref=e20] [cursor=pointer]:
        - button "Skip to content" [ref=e21]:
          - generic:
            - generic: Skip to content
      - generic "Skip to footer" [ref=e22] [cursor=pointer]:
        - button "Skip to footer" [ref=e23]:
          - generic:
            - generic: Skip to footer
      - link "MSN" [ref=e26] [cursor=pointer]:
        - /url: https://www.msn.com/en-in
      - search [ref=e30]:
        - generic [ref=e31]:
          - generic "Web search" [ref=e32] [cursor=pointer]:
            - button "Web search" [ref=e33]:
              - generic:
                - generic:
                  - img
          - searchbox "Enter your search term" [ref=e34]
      - generic [ref=e35]:
        - 'link "Moses Lake: Partly cloudy, 8 °C" [ref=e38] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington?loc=eyJsIjoiTW9zZXMgTGFrZSIsInIiOiJXYXNoaW5ndG9uIiwiYyI6IlVuaXRlZCBTdGF0ZXMiLCJpIjoiVVMiLCJnIjoiZW4taW4iLCJ4IjotMTE5LjMwMDc5NjUwODc4OTA2LCJ5Ijo0Ny4xMzI5MDQwNTI3MzQzNzV9&weadegreetype=C&ocid=msnheader&cvid=6abe364d001d4875a6f38ee219046bf5
          - img "Partly cloudy" [ref=e40]
          - generic [ref=e41]:
            - generic [ref=e42]: ‎8‎
            - generic [ref=e44]: ‎°C‎
        - generic "Open settings" [ref=e48] [cursor=pointer]:
          - button "Open settings" [ref=e49]:
            - generic:
              - generic:
                - generic:
                  - generic: Page settings
                  - generic:
                    - img
        - generic "Sign in" [ref=e53]:
          - button "Sign in to your account" [ref=e55] [cursor=pointer]:
            - generic [ref=e56]: Sign in to your account
            - generic [ref=e58]: Sign in
  - generic [ref=e59]:
    - generic [ref=e60]:
      - generic [ref=e65]:
        - list [ref=e68]:
          - listitem [ref=e69]:
            - link "Outlook.com" [ref=e72] [cursor=pointer]:
              - /url: https://outlook.com
              - generic [ref=e76]: Outlook.com
          - listitem [ref=e77]:
            - link "Flipkart" [ref=e80] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=401531&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e83]:
                - generic [ref=e84]: Flipkart
                - generic [ref=e86]: Sponsored
          - listitem [ref=e87]:
            - link "Find a tutor" [ref=e90] [cursor=pointer]:
              - /url: https://www.bing.com/pros?FORM=BPIMNS
              - generic [ref=e94]: Find a tutor
          - listitem [ref=e95]:
            - link "Booking.com" [ref=e98] [cursor=pointer]:
              - /url: https://www.booking.com/index.html?aid=1624937&label=enin-msn-hp-mestripe
              - generic [ref=e101]:
                - generic [ref=e102]: Booking.com
                - generic [ref=e104]: Sponsored
          - listitem [ref=e105]:
            - link "Ajio" [ref=e108] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=393141&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e111]:
                - generic [ref=e112]: Ajio
                - generic [ref=e114]: Sponsored
          - listitem [ref=e115]:
            - link "Facebook" [ref=e118] [cursor=pointer]:
              - /url: https://www.facebook.com
              - generic [ref=e122]: Facebook
          - listitem [ref=e123]:
            - link "Microsoft 365" [ref=e126] [cursor=pointer]:
              - /url: https://www.office.com/?omkt=en-IN
              - generic [ref=e130]: Microsoft 365
          - listitem [ref=e131]:
            - link "X" [ref=e134] [cursor=pointer]:
              - /url: https://x.com
              - generic [ref=e138]: X
          - listitem [ref=e139]:
            - link "OneDrive" [ref=e142] [cursor=pointer]:
              - /url: https://onedrive.live.com/?wt.mc_id=oo_msn_msnhomepage_header
              - generic [ref=e146]: OneDrive
          - listitem [ref=e147]:
            - link "Skype" [ref=e150] [cursor=pointer]:
              - /url: https://www.skype.com/
              - generic [ref=e154]: Skype
          - listitem [ref=e155]:
            - link "OneNote" [ref=e158] [cursor=pointer]:
              - /url: https://www.onenote.com/notebooks?WT.mc_id=MSN_OneNote_TopMenu&auth=1&wdorigin=msn
              - generic [ref=e162]: OneNote
          - listitem [ref=e163]:
            - link "Maps" [ref=e166] [cursor=pointer]:
              - /url: https://bing.com/maps/?FORM=MSNMAP
              - generic [ref=e170]: Maps
          - listitem [ref=e171]:
            - link "Microsoft Store" [ref=e174] [cursor=pointer]:
              - /url: https://www.microsoft.com/en-in
              - generic [ref=e178]: Microsoft Store
        - button [ref=e179]:
          - img [ref=e182]
      - generic [ref=e184]:
        - banner [ref=e185]
        - generic [ref=e190]:
          - navigation [ref=e192]:
            - generic [ref=e193]:
              - list [ref=e194]:
                - listitem [ref=e195]:
                  - link "Discover" [ref=e196] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in
              - list [ref=e197]:
                - listitem [ref=e198]:
                  - link "News" [ref=e199] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f
                - listitem [ref=e200]:
                  - link "Sports" [ref=e201] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/sports
                - listitem [ref=e202]:
                  - link "Play" [ref=e203] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/play?cgfrom=cg_home_pivot
                - listitem [ref=e204]:
                  - link "Money" [ref=e205] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/money
                - listitem [ref=e206]:
                  - link "Weather" [ref=e207] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/weather
                - listitem [ref=e208]:
                  - link "Watch" [ref=e209] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/video
                - listitem [ref=e210]:
                  - link "Shopping" [ref=e211] [cursor=pointer]:
                    - /url: https://www.bing.com/shop?entrypoint=msn&adunitId=378983&propertyId=316966&FORM=NVBSHP
          - generic "Personalize your feed\"" [ref=e213] [cursor=pointer]:
            - button "Personalize your feed\"" [ref=e214]:
              - generic:
                - generic:
                  - img
              - generic:
                - generic: Personalize
      - main [ref=e217]:
        - generic [ref=e220]:
          - generic [ref=e221]:
            - generic [ref=e224]:
              - tablist [ref=e226]:
                - tab "News story" [ref=e227] [cursor=pointer]
                - tab "Sponsored" [ref=e229] [cursor=pointer]
                - tab "News story" [ref=e231] [cursor=pointer]
                - tab "News story" [ref=e233] [cursor=pointer]
                - tab "News story" [selected] [ref=e235] [cursor=pointer]
                - tab "Sponsored" [ref=e237] [cursor=pointer]
                - tab "News story" [ref=e239] [cursor=pointer]
                - tab "News story" [ref=e241] [cursor=pointer]
                - tab "Sponsored" [ref=e243] [cursor=pointer]
                - tab "News story" [ref=e245] [cursor=pointer]
                - tab "News story" [ref=e247] [cursor=pointer]
                - tab "News story" [ref=e249] [cursor=pointer]
                - tab "Sponsored" [ref=e251] [cursor=pointer]
                - tab "News story" [ref=e253] [cursor=pointer]
                - tab "News story" [ref=e255] [cursor=pointer]
                - tab "News story" [ref=e257] [cursor=pointer]
                - tab "News story" [ref=e259] [cursor=pointer]
                - tab "News story" [ref=e261] [cursor=pointer]
                - tab "Sponsored" [ref=e263] [cursor=pointer]
                - tab "News story" [ref=e265] [cursor=pointer]
                - tab "News story" [ref=e267] [cursor=pointer]
                - tab "News story" [ref=e269] [cursor=pointer]
                - tab "News story" [ref=e271] [cursor=pointer]
                - tab "News story" [ref=e273] [cursor=pointer]
                - tab "Sponsored" [ref=e275] [cursor=pointer]
                - tab "News story" [ref=e277] [cursor=pointer]
                - tab "News story" [ref=e279] [cursor=pointer]
                - tab "News story" [ref=e281] [cursor=pointer]
                - tab "Sponsored" [ref=e283] [cursor=pointer]
                - tab "News story" [ref=e285] [cursor=pointer]
                - tab "News story" [ref=e287] [cursor=pointer]
              - button [ref=e291]
              - button [ref=e294]
              - article "Why do jeans have a tiny pocket inside the front pocket?" [ref=e295] [cursor=pointer]:
                - generic [ref=e297]:
                  - img [ref=e298]
                  - generic [ref=e299]:
                    - generic [ref=e300]:
                      - generic [ref=e301]:
                        - generic [ref=e302]:
                          - img [ref=e303]
                          - generic [ref=e304]: The Economic Times
                        - generic [ref=e305]: ·
                        - generic [ref=e306]: 2w
                      - link "Why do jeans have a tiny pocket inside the front pocket?, The Economic Times" [ref=e307]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/why-do-jeans-have-a-tiny-pocket-inside-the-front-pocket/ss-AA2cjDsI
                        - text: Why do jeans have a tiny pocket inside the front pocket?
                    - generic "Why do jeans have a tiny pocket inside the front pocket?" [ref=e310]:
                      - generic [ref=e312]:
                        - generic [ref=e313]:
                          - button "210 Likes" [ref=e314]:
                            - generic [ref=e315]:
                              - img [ref=e316]
                              - generic [ref=e318]: "210"
                          - button "Dislike" [ref=e319]:
                            - img [ref=e321]
                        - link "Start the conversation" [ref=e324]:
                          - /url: https://www.msn.com/en-in/lifestyle/other/why-do-jeans-have-a-tiny-pocket-inside-the-front-pocket/ss-AA2cjDsI#comments
                          - button "Start the conversation" [ref=e325]:
                            - img [ref=e326]
                  - generic [ref=e328]:
                    - button "Hide this story" [ref=e329]:
                      - img [ref=e330]
                      - text: Hide this story
                    - button "See more" [ref=e331]:
                      - img [ref=e332]
            - article [ref=e333] [cursor=pointer]:
              - generic [ref=e338]:
                - generic [ref=e340]:
                  - link "Top stories" [ref=e342]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6abe364d001d4875a6f38ee219046bf5&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e343]
                  - button "More options" [ref=e345]
                - list [ref=e348]:
                  - listitem [ref=e349]:
                    - 'link "Breaking News18 4h An Indian prevented 9/11-like tragedy: PM Modi praises Flydubai''s hero pilot Smit Machchhar" [ref=e350]':
                      - /url: https://www.msn.com/en-in/news/other/an-indian-prevented-9-11-like-tragedy-pm-modi-praises-flydubai-s-hero-pilot-smit-machchhar/ar-AA2dk03w
                      - generic [ref=e351]:
                        - generic [ref=e352]:
                          - generic:
                            - generic [ref=e353]: Breaking
                            - img [ref=e354]
                          - generic [ref=e355]:
                            - generic: News18 ·4h
                        - generic [ref=e356]: "An Indian prevented 9/11-like tragedy: PM Modi praises Flydubai's hero pilot Smit Machchhar"
                  - listitem [ref=e357]:
                    - link "Press Trust of India now India survive Pakistan scare to enter final after Abhishek's late strike" [ref=e358]:
                      - /url: https://www.msn.com/en-in/sports/cricket/india-survive-pakistan-scare-to-enter-final-after-abhishek-s-late-strike/ar-AA2dkNiE
                      - generic [ref=e359]:
                        - generic [ref=e360]:
                          - img [ref=e361]
                          - generic [ref=e362]:
                            - generic: Press Trust of India ·now
                        - generic [ref=e363]: India survive Pakistan scare to enter final after Abhishek's late strike
                  - listitem [ref=e364]:
                    - 'link "The Indian Express 9h Asian Games 2026 medal tally, day 13 live: Check India’s gold, silver, bronze winners list on 1st October" [ref=e365]':
                      - /url: https://www.msn.com/en-in/sports/other/asian-games-2026-medal-tally-day-13-live-check-india-s-gold-silver-bronze-winners-list-on-1st-october/ar-AA2djpoH
                      - generic [ref=e366]:
                        - generic [ref=e367]:
                          - img [ref=e368]
                          - generic [ref=e369]:
                            - generic: The Indian Express ·9h
                        - generic [ref=e370]: "Asian Games 2026 medal tally, day 13 live: Check India’s gold, silver, bronze winners list on 1st October"
                - generic [ref=e372]:
                  - generic [ref=e373]:
                    - generic "Previous" [ref=e374]:
                      - button "Previous" [ref=e375]
                    - tablist [ref=e377]:
                      - tab "Page 1" [selected] [ref=e378]
                      - tab "Page 2" [ref=e380]
                      - tab "Page 3" [ref=e382]
                    - generic "Next" [ref=e384]:
                      - button "Next" [ref=e385]
                  - link "See more" [ref=e387]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6abe364d001d4875a6f38ee219046bf5&ocid=hpmsn
            - article [ref=e388] [cursor=pointer]:
              - generic [ref=e392]:
                - generic: Sponsored
            - article "Neem Karoli Baba playfully hit Hanuman Ansh producer as a child. Now she's counting her blessings" [ref=e393] [cursor=pointer]:
              - generic [ref=e395]:
                - img [ref=e396]
                - generic [ref=e397]:
                  - generic [ref=e398]:
                    - generic [ref=e399]:
                      - generic [ref=e400]:
                        - img [ref=e401]
                        - generic [ref=e402]: NDTV
                      - generic [ref=e403]: ·
                      - generic [ref=e404]: 23h
                    - link "Neem Karoli Baba playfully hit Hanuman Ansh producer as a child. Now she's counting her blessings, NDTV" [ref=e405]:
                      - /url: https://www.msn.com/en-in/entertainment/movies/neem-karoli-baba-playfully-hit-hanuman-ansh-producer-as-a-child-now-she-s-counting-her-blessings/ar-AA2dgXA0
                      - text: Neem Karoli Baba playfully hit Hanuman Ansh producer as a child. Now she's counting her blessings
                  - generic "Neem Karoli Baba playfully hit Hanuman Ansh producer as a child. Now she's counting her blessings" [ref=e408]:
                    - generic [ref=e410]:
                      - generic [ref=e411]:
                        - button "76 Likes" [ref=e412]:
                          - generic [ref=e413]:
                            - img [ref=e414]
                            - generic [ref=e416]: "76"
                        - button "Dislike" [ref=e417]:
                          - img [ref=e419]
                      - link "Start the conversation" [ref=e422]:
                        - /url: https://www.msn.com/en-in/entertainment/movies/neem-karoli-baba-playfully-hit-hanuman-ansh-producer-as-a-child-now-she-s-counting-her-blessings/ar-AA2dgXA0#comments
                        - button "Start the conversation" [ref=e423]:
                          - img [ref=e424]
                - generic [ref=e426]:
                  - button "Hide this story" [ref=e427]:
                    - img [ref=e428]
                    - text: Hide this story
                  - button "See more" [ref=e429]:
                    - img [ref=e430]
            - article "Pet Insurance Comparison Chart - Avoid High Veterinarian Bills - Animal Insurance Plans 2026" [ref=e431] [cursor=pointer]:
              - generic [ref=e433]:
                - img [ref=e434]
                - generic [ref=e435]:
                  - generic [ref=e436]:
                    - generic [ref=e439]: Top Pet Insurance Plans
                    - link "Pet Insurance Comparison Chart - Avoid High Veterinarian Bills - Animal Insurance Plans 2026, Top Pet Insurance Plans" [ref=e440]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=d5233bf9-6432-4572-92f4-f4da78ea8720&bdc=pb&bidId=1&bidderId=4&cmExpId=LV5&impId=8&impTy=1&ldc=jhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=9222164a-534b-4be5-a45a-d17556185882&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8kCiqJUCBssjG4Y3SHeDEIDVUCUxmsIxAvIPVDCIhpUbQXvB_REIjLGygXwu02E4WjKuJWFMOJJGmTliVYH6Ap7pet--s-E_rKYld1oSzuF8BYZTluQ4yzZRzvt3hbk8LhETB7z2YUvsOyi95MbiZ0CJpTaVEqravIN3MIq8c3606PrpYr9y2kGS12-5U1R5pKAtTZU-v7q8Ft7SyGie-cECkseY%26u%3DaHR0cHMlM2ElMmYlMmZ0b3BwZXRpbnN1cmFuY2VwbGFucy5jb20lMmYlM2Z1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RCaW5nJTJiQ1BDJTJiQ2FtcGFpZ24lMjZia3clM2QlMjUyQnRvcCUyNTIwJTI1MkJhZmZvcmRhYmxlJTI1MjAlMjUyQnBldCUyNTIwJTI1MkJpbnN1cmFuY2UlMjZiY2FtcGlkJTNkMzU3MTg5NzQ3JTI2YmNhbXAlM2RCaW5nJTI1MjBQZXQlMjUyMEluc3VyYW5jZSUyNTIwRFQlMjUyMEJNTSUyNmJhZ2lkJTNkMTE5OTU2NzYwODI5MTA0OSUyNmJhZyUzZGFmZm9yZGFibGUlMjUyMHBldCUyNTIwaW5zdXJhbmNlJTI1MjAlMjUyQiUyNTJGJTI1MkIlMjZidGFyaWQlM2Rrd2QtNzQ5NzMxMjc5MDUyMTIlM2Fsb2MtMTkwJTI2YmlkbSUzZGJiJTI2Ym5ldCUzZGElMjZiZCUzZGMlMjZibW9idmFsJTNkMCUyNmJ0JTNkc2VhcmNobmF0aXZlJTI2dXRtX3Rlcm0lM2QlMjUyQnRvcCUyNTIwJTI1MkJhZmZvcmRhYmxlJTI1MjAlMjUyQnBldCUyNTIwJTI1MkJpbnN1cmFuY2UlMjZjJTNkNzQ5NzMwODMzMDg2NDklMjZtJTNkZSUyNmslM2Q3NDk3MzEyNzkwNTIxMiUyNmJwaHlzaWNhbCUzZDExMDkxMSUyNmJmZWVkaWQlM2QlMjZiaW50ZXJlc3QlM2QlMjZhJTNkJTI2dHMlM2QlMjZ0dCUzZGJkdCUyNnRvcGljJTNkQklfUElfQmluZ19MUSUyNm5pY2hlJTNkJTI2dXBmJTNkJTI2Y3R5cGUlM2QlMjZleHAlM2QlMjZwcSUzZCUyNmR5biUzZCUyNmNhbXR5cGUlM2RwcyUyNm1zY2xraWQlM2RhZDkyN2QxZmVkMzMxMTIzMmJmMDE3YTFkYjdjMmMyMiUyNnV0bV9jb250ZW50JTNkYWZmb3JkYWJsZSUyNTIwcGV0JTI1MjBpbnN1cmFuY2UlMjUyMCUyNTJCJTI1MkYlMjUyQg%26rlid%3Dad927d1fed3311232bf017a1db7c2c22&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Pet Insurance Comparison Chart - Avoid High Veterinarian Bills - Animal Insurance Plans 2026
                  - link "Sponsored" [ref=e442]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=d5233bf9-6432-4572-92f4-f4da78ea8720&bdc=pb&bidId=1&bidderId=4&cmExpId=LV5&impId=8&impTy=1&ldc=jhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=9222164a-534b-4be5-a45a-d17556185882&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8kCiqJUCBssjG4Y3SHeDEIDVUCUxmsIxAvIPVDCIhpUbQXvB_REIjLGygXwu02E4WjKuJWFMOJJGmTliVYH6Ap7pet--s-E_rKYld1oSzuF8BYZTluQ4yzZRzvt3hbk8LhETB7z2YUvsOyi95MbiZ0CJpTaVEqravIN3MIq8c3606PrpYr9y2kGS12-5U1R5pKAtTZU-v7q8Ft7SyGie-cECkseY%26u%3DaHR0cHMlM2ElMmYlMmZ0b3BwZXRpbnN1cmFuY2VwbGFucy5jb20lMmYlM2Z1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RCaW5nJTJiQ1BDJTJiQ2FtcGFpZ24lMjZia3clM2QlMjUyQnRvcCUyNTIwJTI1MkJhZmZvcmRhYmxlJTI1MjAlMjUyQnBldCUyNTIwJTI1MkJpbnN1cmFuY2UlMjZiY2FtcGlkJTNkMzU3MTg5NzQ3JTI2YmNhbXAlM2RCaW5nJTI1MjBQZXQlMjUyMEluc3VyYW5jZSUyNTIwRFQlMjUyMEJNTSUyNmJhZ2lkJTNkMTE5OTU2NzYwODI5MTA0OSUyNmJhZyUzZGFmZm9yZGFibGUlMjUyMHBldCUyNTIwaW5zdXJhbmNlJTI1MjAlMjUyQiUyNTJGJTI1MkIlMjZidGFyaWQlM2Rrd2QtNzQ5NzMxMjc5MDUyMTIlM2Fsb2MtMTkwJTI2YmlkbSUzZGJiJTI2Ym5ldCUzZGElMjZiZCUzZGMlMjZibW9idmFsJTNkMCUyNmJ0JTNkc2VhcmNobmF0aXZlJTI2dXRtX3Rlcm0lM2QlMjUyQnRvcCUyNTIwJTI1MkJhZmZvcmRhYmxlJTI1MjAlMjUyQnBldCUyNTIwJTI1MkJpbnN1cmFuY2UlMjZjJTNkNzQ5NzMwODMzMDg2NDklMjZtJTNkZSUyNmslM2Q3NDk3MzEyNzkwNTIxMiUyNmJwaHlzaWNhbCUzZDExMDkxMSUyNmJmZWVkaWQlM2QlMjZiaW50ZXJlc3QlM2QlMjZhJTNkJTI2dHMlM2QlMjZ0dCUzZGJkdCUyNnRvcGljJTNkQklfUElfQmluZ19MUSUyNm5pY2hlJTNkJTI2dXBmJTNkJTI2Y3R5cGUlM2QlMjZleHAlM2QlMjZwcSUzZCUyNmR5biUzZCUyNmNhbXR5cGUlM2RwcyUyNm1zY2xraWQlM2RhZDkyN2QxZmVkMzMxMTIzMmJmMDE3YTFkYjdjMmMyMiUyNnV0bV9jb250ZW50JTNkYWZmb3JkYWJsZSUyNTIwcGV0JTI1MjBpbnN1cmFuY2UlMjUyMCUyNTJCJTI1MkYlMjUyQg%26rlid%3Dad927d1fed3311232bf017a1db7c2c22&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e444]:
                  - img [ref=e445]
            - article "Those tiny bumps on the F and J keys aren't manufacturing marks; they let your fingers find the home row without looking at the keyboard" [ref=e446] [cursor=pointer]:
              - generic [ref=e448]:
                - img [ref=e449]
                - generic [ref=e450]:
                  - generic [ref=e451]:
                    - generic [ref=e453]:
                      - img [ref=e454]
                      - generic [ref=e455]: The Economic Times
                    - link "Those tiny bumps on the F and J keys aren't manufacturing marks; they let your fingers find the home row without looking at the keyboard, The Economic Times" [ref=e456]:
                      - /url: https://www.msn.com/en-in/technology/general/those-tiny-bumps-on-the-f-and-j-keys-aren-t-manufacturing-marks-they-let-your-fingers-find-the-home-row-without-looking-at-the-keyboard/ar-AA2b1FNC
                      - text: Those tiny bumps on the F and J keys aren't manufacturing marks; they let your fingers find the home row without looking at the keyboard
                  - generic "Those tiny bumps on the F and J keys aren't manufacturing marks; they let your fingers find the home row without looking at the keyboard" [ref=e459]:
                    - generic [ref=e461]:
                      - generic [ref=e462]:
                        - button "511 Likes" [ref=e463]:
                          - generic [ref=e464]:
                            - img [ref=e465]
                            - generic [ref=e467]: "511"
                        - button "Dislike" [ref=e468]:
                          - img [ref=e470]
                      - link "Start the conversation" [ref=e473]:
                        - /url: https://www.msn.com/en-in/technology/general/those-tiny-bumps-on-the-f-and-j-keys-aren-t-manufacturing-marks-they-let-your-fingers-find-the-home-row-without-looking-at-the-keyboard/ar-AA2b1FNC#comments
                        - button "Start the conversation" [ref=e474]:
                          - img [ref=e475]
                - generic [ref=e477]:
                  - button "Hide this story" [ref=e478]:
                    - img [ref=e479]
                    - text: Hide this story
                  - button "See more" [ref=e480]:
                    - img [ref=e481]
            - article [ref=e482] [cursor=pointer]:
              - generic [ref=e488]:
                - generic [ref=e490]:
                  - link "Moses Lake" [ref=e492]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington?loc=eyJsIjoiTW9zZXMgTGFrZSIsInIiOiJXYXNoaW5ndG9uIiwiYyI6IlVuaXRlZCBTdGF0ZXMiLCJpIjoiVVMiLCJnIjoiZW4taW4iLCJ4IjotMTE5LjMwMDc5NjUwODc4OTA2LCJ5Ijo0Ny4xMzI5MDQwNTI3MzQzNzV9&weadegreetype=C&ocid=hpmsn&cvid=6abe364d001d4875a6f38ee219046bf5&content=AQICard_wxaqi
                    - heading "Moses Lake" [level=2] [ref=e493]
                  - button "My location" [ref=e494]
                  - button "More options" [ref=e496]
                - generic [ref=e500]:
                  - generic [ref=e501]:
                    - generic [ref=e503]:
                      - link "Partly cloudy" [ref=e504]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington?loc=eyJsIjoiTW9zZXMgTGFrZSIsInIiOiJXYXNoaW5ndG9uIiwiYyI6IlVuaXRlZCBTdGF0ZXMiLCJpIjoiVVMiLCJnIjoiZW4taW4iLCJ4IjotMTE5LjMwMDc5NjUwODc4OTA2LCJ5Ijo0Ny4xMzI5MDQwNTI3MzQzNzV9&weadegreetype=C&ocid=hpmsn&cvid=6abe364d001d4875a6f38ee219046bf5&content=AQICard_wxaqi
                        - img "Partly cloudy" [ref=e505]
                      - link "8°C" [ref=e506]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington?loc=eyJsIjoiTW9zZXMgTGFrZSIsInIiOiJXYXNoaW5ndG9uIiwiYyI6IlVuaXRlZCBTdGF0ZXMiLCJpIjoiVVMiLCJnIjoiZW4taW4iLCJ4IjotMTE5LjMwMDc5NjUwODc4OTA2LCJ5Ijo0Ny4xMzI5MDQwNTI3MzQzNzV9&weadegreetype=C&ocid=hpmsn&cvid=6abe364d001d4875a6f38ee219046bf5&content=AQICard_wxaqi
                        - generic [ref=e507]: ‎8‎
                        - generic [ref=e509]: ‎°C‎
                    - generic [ref=e511]:
                      - link "Good air quality" [ref=e513]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington?loc=eyJsIjoiTW9zZXMgTGFrZSIsInIiOiJXYXNoaW5ndG9uIiwiYyI6IlVuaXRlZCBTdGF0ZXMiLCJpIjoiVVMiLCJnIjoiZW4taW4iLCJ4IjotMTE5LjMwMDc5NjUwODc4OTA2LCJ5Ijo0Ny4xMzI5MDQwNTI3MzQzNzV9&weadegreetype=C&ocid=hpmsn&cvid=6abe364d001d4875a6f38ee219046bf5&fcsttab=airquality
                        - text: Good air quality
                      - link "See full forecast" [ref=e515]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington?loc=eyJsIjoiTW9zZXMgTGFrZSIsInIiOiJXYXNoaW5ndG9uIiwiYyI6IlVuaXRlZCBTdGF0ZXMiLCJpIjoiVVMiLCJnIjoiZW4taW4iLCJ4IjotMTE5LjMwMDc5NjUwODc4OTA2LCJ5Ijo0Ny4xMzI5MDQwNTI3MzQzNzV9&weadegreetype=C&ocid=hpmsn&cvid=6abe364d001d4875a6f38ee219046bf5&fcsttab=airquality
                        - img "arrow" [ref=e516]
                  - generic [ref=e521]:
                    - link "Larger map" [ref=e522]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Moses-Lake,Washington?loc=eyJsIjoiTW9zZXMgTGFrZSIsInIiOiJXYXNoaW5ndG9uIiwiYyI6IlVuaXRlZCBTdGF0ZXMiLCJpIjoiVVMiLCJnIjoiZW4taW4iLCJ4IjotMTE5LjMwMDc5NjUwODc4OTA2LCJ5Ijo0Ny4xMzI5MDQwNTI3MzQzNzV9&weadegreetype=C&ocid=hpmsn&cvid=6abe364d001d4875a6f38ee219046bf5&content=AQICard_wxaqi&zoom=8
                      - generic [ref=e523]:
                        - generic:
                          - generic:
                            - img
                            - img
                      - img
                    - link "Check global air quality" [ref=e524]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Moses-Lake,Washington?loc=eyJsIjoiTW9zZXMgTGFrZSIsInIiOiJXYXNoaW5ndG9uIiwiYyI6IlVuaXRlZCBTdGF0ZXMiLCJpIjoiVVMiLCJnIjoiZW4taW4iLCJ4IjotMTE5LjMwMDc5NjUwODc4OTA2LCJ5Ijo0Ny4xMzI5MDQwNTI3MzQzNzV9&weadegreetype=C&ocid=hpmsn&cvid=6abe364d001d4875a6f38ee219046bf5&content=AQICard_wxaqi&zoom=8
                      - img [ref=e526]
                      - generic "Check global air quality" [ref=e527]
                      - img [ref=e529]
                - button "See full forecast" [ref=e532]
            - article "Psychology says people who check their phone immediately after waking up aren't just addicted" [ref=e533] [cursor=pointer]:
              - generic [ref=e535]:
                - img [ref=e536]
                - generic [ref=e537]:
                  - generic [ref=e538]:
                    - generic [ref=e540]:
                      - img [ref=e541]
                      - generic [ref=e542]: India Today
                    - link "Psychology says people who check their phone immediately after waking up aren't just addicted, India Today" [ref=e543]:
                      - /url: https://www.msn.com/en-in/health/general/psychology-says-people-who-check-their-phone-immediately-after-waking-up-aren-t-just-addicted/ar-AA28z7dS
                      - text: Psychology says people who check their phone immediately after waking up aren't just addicted
                  - generic "Psychology says people who check their phone immediately after waking up aren't just addicted" [ref=e546]:
                    - generic [ref=e548]:
                      - generic [ref=e549]:
                        - button "3,078 Likes" [ref=e550]:
                          - generic [ref=e551]:
                            - img [ref=e552]
                            - generic [ref=e554]: 3k
                        - button "Dislike" [ref=e555]:
                          - img [ref=e557]
                      - link "View comments 28 Comment" [ref=e560]:
                        - /url: https://www.msn.com/en-in/health/general/psychology-says-people-who-check-their-phone-immediately-after-waking-up-aren-t-just-addicted/ar-AA28z7dS#comments
                        - button "View comments 28 Comment" [ref=e561]:
                          - img [ref=e562]
                        - generic [ref=e564]: "28"
                - generic [ref=e565]:
                  - button "Hide this story" [ref=e566]:
                    - img [ref=e567]
                    - text: Hide this story
                  - button "See more" [ref=e568]:
                    - img [ref=e569]
            - article "10 Best Pet Insurance - 2026 - The Winner Is Clear - We Tried Them All" [ref=e570] [cursor=pointer]:
              - generic [ref=e572]:
                - img [ref=e573]
                - generic [ref=e574]:
                  - generic [ref=e575]:
                    - generic [ref=e578]: fund.com
                    - link "10 Best Pet Insurance - 2026 - The Winner Is Clear - We Tried Them All, fund.com" [ref=e579]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=374398f1-65ef-4473-999a-78ad41c4b35a&bdc=pb&bidId=1&bidderId=4&cmExpId=LV5&impId=9&impTy=1&ldc=jhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=9222164a-534b-4be5-a45a-d17556185882&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8W3Tnv6sXtgr07bQv-zYK4jVUCUxp_WwdnsT1fwJbMeeQihZry68vleWxKC4w8T6qnvZITReVv2ZabnX8yH--L4adJC60cP5fgwZTIFM7pLvQcpuFj1GgoBbaludQpriADi_JtK0_r2wpvmFPW1G1DRJeXvpb_g87BQFI71WPIj47ZrVtXGON0cq6olzrmWWDURdbKQovFy1mhYSFFe5g40EiLF4%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZnVuZC5jb20lMmZ0b3AlMmZwZXQtaW5zdXJhbmNlJTJmYjElMmZkZXNrJTJmJTNmdXRtX3NvdXJjZSUzZGJpbmclMjZhZGlkJTNkNzY0ODQ5Mzg5NTYyNTElMjZjcV9hY2NfYmluZyUzZEYxMTVTMTlSJTI2Y3FfY21wX2JpbmclM2Q0MTkwOTQ4ODclMjZjcV9hZGdfYmluZyUzZDEyMjM3NTY5MzIyNzUzNzUlMjZjcV90ZXJtJTNkcGV0JTI1MjBpbnN1cmFuY2UlMjUyMHJldmlld3MlMjUyMDIwMjAlMjZjcV9wbGFjJTNkJTI2Y3FfbmV0JTNkYSUyNmNxX210eXBlJTNkZSUyNmNxX2R2YyUzZGMlMjZjcV9sb2MlM2QxMTA5MTElMjZ0dmFyJTNkJTI2c3R2YXIlM2QlMjZ1dG1fc291cmNlJTNkYmluZyUyNmFkaWQlM2Q3NjQ4NDkzODk1NjI1MSUyNmJtc2wlM2QxMTA5MTElMjZ0dmFyJTNkJTI2bXNjbGtpZCUzZGUyNjRhMzdjNDBiZTEzYzE3YWM3YzljMjc2ZjFhNjE1%26rlid%3De264a37c40be13c17ac7c9c276f1a615&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: 10 Best Pet Insurance - 2026 - The Winner Is Clear - We Tried Them All
                  - link "Sponsored" [ref=e581]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=374398f1-65ef-4473-999a-78ad41c4b35a&bdc=pb&bidId=1&bidderId=4&cmExpId=LV5&impId=9&impTy=1&ldc=jhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=9222164a-534b-4be5-a45a-d17556185882&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8W3Tnv6sXtgr07bQv-zYK4jVUCUxp_WwdnsT1fwJbMeeQihZry68vleWxKC4w8T6qnvZITReVv2ZabnX8yH--L4adJC60cP5fgwZTIFM7pLvQcpuFj1GgoBbaludQpriADi_JtK0_r2wpvmFPW1G1DRJeXvpb_g87BQFI71WPIj47ZrVtXGON0cq6olzrmWWDURdbKQovFy1mhYSFFe5g40EiLF4%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZnVuZC5jb20lMmZ0b3AlMmZwZXQtaW5zdXJhbmNlJTJmYjElMmZkZXNrJTJmJTNmdXRtX3NvdXJjZSUzZGJpbmclMjZhZGlkJTNkNzY0ODQ5Mzg5NTYyNTElMjZjcV9hY2NfYmluZyUzZEYxMTVTMTlSJTI2Y3FfY21wX2JpbmclM2Q0MTkwOTQ4ODclMjZjcV9hZGdfYmluZyUzZDEyMjM3NTY5MzIyNzUzNzUlMjZjcV90ZXJtJTNkcGV0JTI1MjBpbnN1cmFuY2UlMjUyMHJldmlld3MlMjUyMDIwMjAlMjZjcV9wbGFjJTNkJTI2Y3FfbmV0JTNkYSUyNmNxX210eXBlJTNkZSUyNmNxX2R2YyUzZGMlMjZjcV9sb2MlM2QxMTA5MTElMjZ0dmFyJTNkJTI2c3R2YXIlM2QlMjZ1dG1fc291cmNlJTNkYmluZyUyNmFkaWQlM2Q3NjQ4NDkzODk1NjI1MSUyNmJtc2wlM2QxMTA5MTElMjZ0dmFyJTNkJTI2bXNjbGtpZCUzZGUyNjRhMzdjNDBiZTEzYzE3YWM3YzljMjc2ZjFhNjE1%26rlid%3De264a37c40be13c17ac7c9c276f1a615&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e583]:
                  - img [ref=e584]
            - article [ref=e585] [cursor=pointer]:
              - generic [ref=e591]:
                - generic [ref=e593]:
                  - img "ICC" [ref=e595]
                  - link "ICC" [ref=e596]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6abe364d001d4875a6f38ee219046bf5
                    - heading "ICC" [level=2] [ref=e597]
                  - button "More interests" [ref=e598]
                  - generic [ref=e599]:
                    - generic "Popular in your area" [ref=e600]:
                      - button "Popular in your area" [ref=e601]
                    - button "More options" [ref=e602]
                - generic [ref=e606]:
                  - link "IND 169/7 (20.0) VS SL 45 (9.5) IND won by 124 runs" [ref=e607]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-274308?ocid=hpmsn&cvid=6abe364d001d4875a6f38ee219046bf5
                    - generic "IND" [ref=e608]:
                      - generic [ref=e609]:
                        - img [ref=e611]
                        - generic [ref=e613]:
                          - generic [ref=e615]: IND
                          - button "Click to follow IND":
                            - generic:
                              - img
                        - generic [ref=e617]:
                          - generic [ref=e618]: 169/7
                          - generic [ref=e619]: (20.0)
                    - generic [ref=e623]: VS
                    - generic "SL" [ref=e624]:
                      - generic [ref=e625]:
                        - generic [ref=e626]:
                          - generic [ref=e628]: SL
                          - button "Click to follow SL":
                            - generic:
                              - img
                        - generic [ref=e630]:
                          - generic [ref=e631]: "45"
                          - generic [ref=e632]: (9.5)
                    - generic "IND won by 124 runs" [ref=e635]
                  - link "PAK 112/4 (11.3) VS BAN 111/7 (13.0) PAK won by 6 wickets" [ref=e636]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-274307?ocid=hpmsn&cvid=6abe364d001d4875a6f38ee219046bf5
                    - generic "PAK" [ref=e637]:
                      - generic [ref=e638]:
                        - img [ref=e640]
                        - generic [ref=e642]:
                          - generic [ref=e644]: PAK
                          - button "Click to follow PAK":
                            - generic:
                              - img
                        - generic [ref=e646]:
                          - generic [ref=e647]: 112/4
                          - generic [ref=e648]: (11.3)
                    - generic [ref=e652]: VS
                    - generic "BAN" [ref=e653]:
                      - generic [ref=e654]:
                        - generic [ref=e655]:
                          - generic [ref=e657]: BAN
                          - button "Click to follow BAN":
                            - generic:
                              - img
                        - generic [ref=e659]:
                          - generic [ref=e660]: 111/7
                          - generic [ref=e661]: (13.0)
                    - generic "PAK won by 6 wickets" [ref=e664]
                  - link "SA 145/4 (28.0) VS AUS 322/9 (50.0) AUS won by 45 runs (D/L)" [ref=e665]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-269789?ocid=hpmsn&cvid=6abe364d001d4875a6f38ee219046bf5
                    - generic "SA" [ref=e666]:
                      - generic [ref=e667]:
                        - generic [ref=e668]:
                          - generic [ref=e670]: SA
                          - button "Click to follow SA":
                            - generic:
                              - img
                        - generic [ref=e672]:
                          - generic [ref=e673]: 145/4
                          - generic [ref=e674]: (28.0)
                    - generic [ref=e678]: VS
                    - generic "AUS" [ref=e679]:
                      - generic [ref=e680]:
                        - img [ref=e682]
                        - generic [ref=e684]:
                          - generic [ref=e686]: AUS
                          - button "Click to follow AUS":
                            - generic:
                              - img
                        - generic [ref=e688]:
                          - generic [ref=e689]: 322/9
                          - generic [ref=e690]: (50.0)
                    - generic "AUS won by 45 runs (D/L)" [ref=e693]
                - generic [ref=e695]:
                  - generic [ref=e696]:
                    - generic "Previous" [ref=e697]:
                      - button "Previous" [ref=e698]
                    - tablist [ref=e700]:
                      - tab "Page 1" [selected] [ref=e701]
                      - tab "Page 2" [ref=e703]
                      - tab "Page 3" [ref=e705]
                      - tab "Page 4" [ref=e707]
                      - tab "Page 5" [ref=e709]
                      - tab "Page 6"
                      - tab "Page 7"
                    - generic "Next" [ref=e711]:
                      - button "Next" [ref=e712]
                  - link "See more ICC" [ref=e714]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6abe364d001d4875a6f38ee219046bf5
          - generic [ref=e715]:
            - article [ref=e716] [cursor=pointer]:
              - generic [ref=e721]:
                - generic [ref=e723]:
                  - link "Top Engaging News" [ref=e725]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6abe364d001d4875a6f38ee219046bf5
                    - heading "Top Engaging News" [level=2] [ref=e726]
                  - button "More options" [ref=e728]
                - generic [ref=e730]:
                  - link "India Today 16 Comments Ex-IAS Divya Mittal joins politics, sets record straight after Rahul-Congress buzz" [ref=e732]:
                    - /url: https://www.msn.com/en-in/news/other/ex-ias-divya-mittal-joins-politics-sets-record-straight-after-rahul-congress-buzz/ar-AA2dhihj
                    - generic [ref=e733]:
                      - img [ref=e734]
                      - generic [ref=e735]: India Today
                      - link "16 Comments" [ref=e737]:
                        - /url: https://www.msn.com/en-in/news/other/ex-ias-divya-mittal-joins-politics-sets-record-straight-after-rahul-congress-buzz/ar-AA2dhihj#comments
                        - img [ref=e738]
                        - paragraph [ref=e739]: "16"
                    - paragraph [ref=e740]: Ex-IAS Divya Mittal joins politics, sets record straight after Rahul-Congress buzz
                  - 'link "NDTV 4 Comments One of your best people: Son of flydubai passenger praises Indian pilot" [ref=e742]':
                    - /url: https://www.msn.com/en-in/news/other/one-of-your-best-people-son-of-flydubai-passenger-praises-indian-pilot/ar-AA2djIru
                    - generic [ref=e743]:
                      - img [ref=e744]
                      - generic [ref=e745]: NDTV
                      - link "4 Comments" [ref=e747]:
                        - /url: https://www.msn.com/en-in/news/other/one-of-your-best-people-son-of-flydubai-passenger-praises-indian-pilot/ar-AA2djIru#comments
                        - img [ref=e748]
                        - paragraph [ref=e749]: "4"
                    - paragraph [ref=e750]: "One of your best people: Son of flydubai passenger praises Indian pilot"
                  - 'link "News18 3 Comments An Indian prevented 9/11-like tragedy: PM Modi praises Flydubai''s hero pilot Smit Machchhar" [ref=e752]':
                    - /url: https://www.msn.com/en-in/news/other/an-indian-prevented-9-11-like-tragedy-pm-modi-praises-flydubai-s-hero-pilot-smit-machchhar/ar-AA2dk03w
                    - generic [ref=e753]:
                      - img [ref=e754]
                      - generic [ref=e755]: News18
                      - link "3 Comments" [ref=e757]:
                        - /url: https://www.msn.com/en-in/news/other/an-indian-prevented-9-11-like-tragedy-pm-modi-praises-flydubai-s-hero-pilot-smit-machchhar/ar-AA2dk03w#comments
                        - img [ref=e758]
                        - paragraph [ref=e759]: "3"
                    - paragraph [ref=e760]: "An Indian prevented 9/11-like tragedy: PM Modi praises Flydubai's hero pilot Smit Machchhar"
                - generic [ref=e762]:
                  - generic [ref=e763]:
                    - generic "Previous" [ref=e764]:
                      - button "Previous" [ref=e765]
                    - tablist [ref=e767]:
                      - tab "Page 1" [selected] [ref=e768]
                      - tab "Page 2" [ref=e770]
                      - tab "Page 3" [ref=e772]
                    - generic "Next" [ref=e774]:
                      - button "Next" [ref=e775]
                  - link "See more" [ref=e777]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6abe364d001d4875a6f38ee219046bf5
            - article [ref=e778] [cursor=pointer]
            - article "Want Korean glass skin? These 5 daily habits make all the difference" [ref=e785] [cursor=pointer]:
              - generic [ref=e787]:
                - img [ref=e788]
                - generic [ref=e789]:
                  - generic [ref=e790]:
                    - generic [ref=e792]:
                      - img [ref=e793]
                      - generic [ref=e794]: The Times of India
                    - link "Want Korean glass skin? These 5 daily habits make all the difference, The Times of India" [ref=e795]:
                      - /url: https://www.msn.com/en-in/lifestyle/other/want-korean-glass-skin-these-5-daily-habits-make-all-the-difference/ss-AA29rVdI
                      - text: Want Korean glass skin? These 5 daily habits make all the difference
                  - generic "Want Korean glass skin? These 5 daily habits make all the difference" [ref=e798]:
                    - generic [ref=e800]:
                      - generic [ref=e801]:
                        - button "2,651 Likes" [ref=e802]:
                          - generic [ref=e803]:
                            - img [ref=e804]
                            - generic [ref=e806]: 3k
                        - button "Dislike" [ref=e807]:
                          - img [ref=e809]
                      - link "View comments 3 Comment" [ref=e812]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/want-korean-glass-skin-these-5-daily-habits-make-all-the-difference/ss-AA29rVdI#comments
                        - button "View comments 3 Comment" [ref=e813]:
                          - img [ref=e814]
                        - generic [ref=e816]: "3"
                - generic [ref=e817]:
                  - button "Hide this story" [ref=e818]:
                    - img [ref=e819]
                    - text: Hide this story
                  - button "See more" [ref=e820]:
                    - img [ref=e821]
            - article [ref=e822] [cursor=pointer]:
              - generic [ref=e828]:
                - generic [ref=e830]:
                  - img "Watchlist suggestions" [ref=e832]
                  - link "Watchlist suggestions" [ref=e833]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e834]
                  - button "More options" [ref=e836]
                - generic [ref=e841]:
                  - link "USD/INR US Dollar/Indian Rupee ‎+0.35%‎ 96.315" [ref=e843]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=avyo8m&ocid=hpmsn
                    - generic [ref=e844]:
                      - generic [ref=e846]: USD/INR
                      - generic [ref=e848]: US Dollar/Indian Rupee
                    - generic [ref=e853]:
                      - generic [ref=e854]: ‎+0.35%‎
                      - generic [ref=e855]: "96.315"
                    - button "Add to watchlist" [ref=e858]:
                      - img [ref=e859]
                  - link "24K Gold (10 Grams) - Indian Rupee XAUINR ‎+0.69%‎ 144496" [ref=e863]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&ocid=hpmsn
                    - generic [ref=e864]:
                      - generic [ref=e866]: 24K Gold (10 Grams) - Indian Rupee
                      - generic [ref=e868]: XAUINR
                    - generic [ref=e873]:
                      - generic [ref=e874]: ‎+0.69%‎
                      - generic [ref=e875]: "144496"
                    - button "Add to watchlist" [ref=e878]:
                      - img [ref=e879]
                  - link "ITC Ltd ITC Ltd Dropping fast ‎-2.61%‎ 255.90" [ref=e883]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahie2w&noti=Price&ocid=hpmsn
                    - generic [ref=e884]:
                      - generic [ref=e885]:
                        - generic [ref=e886]: ITC Ltd
                        - img "ITC Ltd" [ref=e887]
                      - generic [ref=e889]: Dropping fast
                    - generic [ref=e894]:
                      - generic [ref=e895]: ‎-2.61%‎
                      - generic [ref=e896]: "255.90"
                    - button "Add to watchlist" [ref=e899]:
                      - img [ref=e900]
                  - link "Citigroup Inc. C ‎-1.01%‎ 129.48" [ref=e904]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a1p3ww&ocid=hpmsn
                    - generic [ref=e905]:
                      - generic [ref=e907]: Citigroup Inc.
                      - generic [ref=e909]: C
                    - generic [ref=e914]:
                      - generic [ref=e915]: ‎-1.01%‎
                      - generic [ref=e916]: "129.48"
                    - button "Add to watchlist" [ref=e919]:
                      - img [ref=e920]
                  - link "Tata Steel Ltd Tata Steel Ltd Dropping fast ‎-3.42%‎ 178.00" [ref=e924]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkaa2&noti=Price&ocid=hpmsn
                    - generic [ref=e925]:
                      - generic [ref=e926]:
                        - generic [ref=e927]: Tata Steel Ltd
                        - img "Tata Steel Ltd" [ref=e928]
                      - generic [ref=e930]: Dropping fast
                    - generic [ref=e935]:
                      - generic [ref=e936]: ‎-3.42%‎
                      - generic [ref=e937]: "178.00"
                    - button "Add to watchlist" [ref=e940]:
                      - img [ref=e941]
                - generic [ref=e945]:
                  - generic [ref=e946]:
                    - generic "Previous" [ref=e947]:
                      - button "Previous" [ref=e948]
                    - tablist [ref=e950]:
                      - tab "Page 1" [selected] [ref=e951]
                      - tab "Page 2" [ref=e953]
                      - tab "Page 3" [ref=e955]
                      - tab "Page 4" [ref=e957]
                      - tab "Page 5" [ref=e959]
                      - tab "Page 6"
                      - tab "Page 7"
                    - generic "Next" [ref=e961]:
                      - button "Next" [ref=e962]
                  - link "See watchlist suggestions" [ref=e964]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - article "Earning below Rs 25,000? New PF rule can change your monthly salary from October" [ref=e965] [cursor=pointer]:
              - generic [ref=e967]:
                - img [ref=e968]
                - generic [ref=e969]:
                  - generic [ref=e970]:
                    - generic [ref=e971]:
                      - generic [ref=e972]:
                        - img [ref=e973]
                        - generic [ref=e974]: The Financial Express
                      - generic [ref=e975]: ·
                      - generic [ref=e976]: 21h
                    - link "Earning below Rs 25,000? New PF rule can change your monthly salary from October, The Financial Express" [ref=e977]:
                      - /url: https://www.msn.com/en-in/money/personal-finance/earning-below-rs-25-000-new-pf-rule-can-change-your-monthly-salary-from-october/ar-AA2dgxsR
                      - text: Earning below Rs 25,000? New PF rule can change your monthly salary from October
                  - generic "Earning below Rs 25,000? New PF rule can change your monthly salary from October" [ref=e980]:
                    - generic [ref=e982]:
                      - generic [ref=e983]:
                        - button "20 Likes" [ref=e984]:
                          - generic [ref=e985]:
                            - img [ref=e986]
                            - generic [ref=e988]: "20"
                        - button "Dislike" [ref=e989]:
                          - img [ref=e991]
                      - link "Start the conversation" [ref=e994]:
                        - /url: https://www.msn.com/en-in/money/personal-finance/earning-below-rs-25-000-new-pf-rule-can-change-your-monthly-salary-from-october/ar-AA2dgxsR#comments
                        - button "Start the conversation" [ref=e995]:
                          - img [ref=e996]
                - generic [ref=e998]:
                  - button "Hide this story" [ref=e999]:
                    - img [ref=e1000]
                    - text: Hide this story
                  - button "See more" [ref=e1001]:
                    - img [ref=e1002]
            - 'article "Fortis gastroenterologist reveals if dal has enough protein: ‘You are a fool if…’" [ref=e1003] [cursor=pointer]':
              - generic [ref=e1005]:
                - img [ref=e1006]
                - generic [ref=e1007]:
                  - generic [ref=e1008]:
                    - generic [ref=e1010]:
                      - img [ref=e1011]
                      - generic [ref=e1012]: Hindustan Times
                    - 'link "Fortis gastroenterologist reveals if dal has enough protein: ‘You are a fool if…’, Hindustan Times" [ref=e1013]':
                      - /url: https://www.msn.com/en-in/health/diet/fortis-gastroenterologist-reveals-if-dal-has-enough-protein-you-are-a-fool-if/ar-AA1O00x5
                      - text: "Fortis gastroenterologist reveals if dal has enough protein: ‘You are a fool if…’"
                  - 'generic "Fortis gastroenterologist reveals if dal has enough protein: ‘You are a fool if…’" [ref=e1016]':
                    - generic [ref=e1018]:
                      - generic [ref=e1019]:
                        - button "3,024 Likes" [ref=e1020]:
                          - generic [ref=e1021]:
                            - img [ref=e1022]
                            - generic [ref=e1024]: 3k
                        - button "Dislike" [ref=e1025]:
                          - img [ref=e1027]
                      - link "View comments 52 Comment" [ref=e1030]:
                        - /url: https://www.msn.com/en-in/health/diet/fortis-gastroenterologist-reveals-if-dal-has-enough-protein-you-are-a-fool-if/ar-AA1O00x5#comments
                        - button "View comments 52 Comment" [ref=e1031]:
                          - img [ref=e1032]
                        - generic [ref=e1034]: "52"
                - generic [ref=e1035]:
                  - button "Hide this story" [ref=e1036]:
                    - img [ref=e1037]
                    - text: Hide this story
                  - button "See more" [ref=e1038]:
                    - img [ref=e1039]
            - article "Scientists found a shark that could be over 500 years old... then looked at its eyes" [ref=e1040] [cursor=pointer]:
              - generic [ref=e1042]:
                - generic [ref=e1048]:
                  - generic [ref=e1049]:
                    - generic [ref=e1050]:
                      - generic [ref=e1051]:
                        - img [ref=e1052]
                        - generic [ref=e1053]: Real Science
                      - generic [ref=e1054]: ·
                      - generic [ref=e1055]: 1w
                    - link "Scientists found a shark that could be over 500 years old... then looked at its eyes, Real Science" [ref=e1056]:
                      - /url: https://www.msn.com/en-in/money/general/scientists-found-a-shark-that-could-be-over-500-years-old-then-looked-at-its-eyes/vi-AA2cy5Qm
                      - text: Scientists found a shark that could be over 500 years old... then looked at its eyes
                  - generic "Scientists found a shark that could be over 500 years old... then looked at its eyes" [ref=e1059]:
                    - generic [ref=e1061]:
                      - generic [ref=e1062]:
                        - button "261 Likes" [ref=e1063]:
                          - generic [ref=e1064]:
                            - img [ref=e1065]
                            - generic [ref=e1067]: "261"
                        - button "Dislike" [ref=e1068]:
                          - img [ref=e1070]
                      - link "Start the conversation" [ref=e1073]:
                        - /url: https://www.msn.com/en-in/money/general/scientists-found-a-shark-that-could-be-over-500-years-old-then-looked-at-its-eyes/vi-AA2cy5Qm#comments
                        - button "Start the conversation" [ref=e1074]:
                          - img [ref=e1075]
                - generic [ref=e1077]:
                  - button "Hide this story" [ref=e1078]:
                    - img [ref=e1079]
                    - text: Hide this story
                  - button "See more" [ref=e1080]:
                    - img [ref=e1081]
            - article "Marriage-ending answer on Family Feud?" [ref=e1082] [cursor=pointer]:
              - generic [ref=e1084]:
                - generic [ref=e1090]:
                  - generic [ref=e1091]:
                    - generic [ref=e1092]:
                      - generic [ref=e1093]:
                        - img [ref=e1094]
                        - generic [ref=e1095]: Family Feud
                      - generic [ref=e1096]: ·
                      - generic [ref=e1097]: 1w
                    - link "Marriage-ending answer on Family Feud?, Family Feud" [ref=e1098]:
                      - /url: https://www.msn.com/en-in/news/other/marriage-ending-answer-on-family-feud/vi-AA28zR6P
                      - text: Marriage-ending answer on Family Feud?
                  - generic "Marriage-ending answer on Family Feud?" [ref=e1101]:
                    - generic [ref=e1103]:
                      - generic [ref=e1104]:
                        - button "7 Likes" [ref=e1105]:
                          - generic [ref=e1106]:
                            - img [ref=e1107]
                            - generic [ref=e1109]: "7"
                        - button "Dislike" [ref=e1110]:
                          - img [ref=e1112]
                      - link "Start the conversation" [ref=e1115]:
                        - /url: https://www.msn.com/en-in/news/other/marriage-ending-answer-on-family-feud/vi-AA28zR6P#comments
                        - button "Start the conversation" [ref=e1116]:
                          - img [ref=e1117]
                - generic [ref=e1119]:
                  - button "Hide this story" [ref=e1120]:
                    - img [ref=e1121]
                    - text: Hide this story
                  - button "See more" [ref=e1122]:
                    - img [ref=e1123]
            - article [ref=e1124] [cursor=pointer]
            - article "Find the three differences hidden in these two identical pictures of a boy and a girl going to school" [ref=e1131] [cursor=pointer]:
              - generic [ref=e1133]:
                - img [ref=e1134]
                - generic [ref=e1135]:
                  - generic [ref=e1136]:
                    - generic [ref=e1138]:
                      - img [ref=e1139]
                      - generic [ref=e1140]: Jagran Josh
                    - link "Find the three differences hidden in these two identical pictures of a boy and a girl going to school, Jagran Josh" [ref=e1141]:
                      - /url: https://www.msn.com/en-in/news/other/find-the-three-differences-hidden-in-these-two-identical-pictures-of-a-boy-and-a-girl-going-to-school/ar-AA1VREvl
                      - text: Find the three differences hidden in these two identical pictures of a boy and a girl going to school
                  - generic "Find the three differences hidden in these two identical pictures of a boy and a girl going to school" [ref=e1144]:
                    - generic [ref=e1146]:
                      - generic [ref=e1147]:
                        - button "1,893 Likes" [ref=e1148]:
                          - generic [ref=e1149]:
                            - img [ref=e1150]
                            - generic [ref=e1152]: 2k
                        - button "Dislike" [ref=e1153]:
                          - img [ref=e1155]
                      - link "View comments 15 Comment" [ref=e1158]:
                        - /url: https://www.msn.com/en-in/news/other/find-the-three-differences-hidden-in-these-two-identical-pictures-of-a-boy-and-a-girl-going-to-school/ar-AA1VREvl#comments
                        - button "View comments 15 Comment" [ref=e1159]:
                          - img [ref=e1160]
                        - generic [ref=e1162]: "15"
                - generic [ref=e1163]:
                  - button "Hide this story" [ref=e1164]:
                    - img [ref=e1165]
                    - text: Hide this story
                  - button "See more" [ref=e1166]:
                    - img [ref=e1167]
          - article [ref=e1169]
          - generic [ref=e1171]:
            - article "10 life lessons from Neem Karoli Baba to teach your children" [ref=e1172] [cursor=pointer]:
              - generic [ref=e1174]:
                - img [ref=e1175]
                - generic [ref=e1176]:
                  - generic [ref=e1177]:
                    - generic [ref=e1179]:
                      - img [ref=e1180]
                      - generic [ref=e1181]: Moneycontrol
                    - link "10 life lessons from Neem Karoli Baba to teach your children, Moneycontrol" [ref=e1182]:
                      - /url: https://www.msn.com/en-in/lifestyle/other/10-life-lessons-from-neem-karoli-baba-to-teach-your-children/ar-AA226b4L
                      - text: 10 life lessons from Neem Karoli Baba to teach your children
                  - generic "10 life lessons from Neem Karoli Baba to teach your children" [ref=e1185]:
                    - generic [ref=e1187]:
                      - generic [ref=e1188]:
                        - button "1,322 Likes" [ref=e1189]:
                          - generic [ref=e1190]:
                            - img [ref=e1191]
                            - generic [ref=e1193]: 1k
                        - button "Dislike" [ref=e1194]:
                          - img [ref=e1196]
                      - link "View comments 2 Comment" [ref=e1199]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/10-life-lessons-from-neem-karoli-baba-to-teach-your-children/ar-AA226b4L#comments
                        - button "View comments 2 Comment" [ref=e1200]:
                          - img [ref=e1201]
                        - generic [ref=e1203]: "2"
                - generic [ref=e1204]:
                  - button "Hide this story" [ref=e1205]:
                    - img [ref=e1206]
                    - text: Hide this story
                  - button "See more" [ref=e1207]:
                    - img [ref=e1208]
            - article "MBA grad starts capsicum farming with Rs 20 lakh investment, now makes Rs 2.25 crore profit yearly" [ref=e1209] [cursor=pointer]:
              - generic [ref=e1211]:
                - img [ref=e1212]
                - generic [ref=e1213]:
                  - generic [ref=e1214]:
                    - generic [ref=e1215]:
                      - generic [ref=e1216]:
                        - img [ref=e1217]
                        - generic [ref=e1218]: Moneycontrol
                      - generic [ref=e1219]: ·
                      - generic [ref=e1220]: 1w
                    - link "MBA grad starts capsicum farming with Rs 20 lakh investment, now makes Rs 2.25 crore profit yearly, Moneycontrol" [ref=e1221]:
                      - /url: https://www.msn.com/en-in/money/general/mba-grad-starts-capsicum-farming-with-rs-20-lakh-investment-now-makes-rs-2-25-crore-profit-yearly/ar-AA2cBi6q
                      - text: MBA grad starts capsicum farming with Rs 20 lakh investment, now makes Rs 2.25 crore profit yearly
                  - generic "MBA grad starts capsicum farming with Rs 20 lakh investment, now makes Rs 2.25 crore profit yearly" [ref=e1224]:
                    - generic [ref=e1226]:
                      - generic [ref=e1227]:
                        - button "349 Likes" [ref=e1228]:
                          - generic [ref=e1229]:
                            - img [ref=e1230]
                            - generic [ref=e1232]: "349"
                        - button "Dislike" [ref=e1233]:
                          - img [ref=e1235]
                      - link "View comments 7 Comment" [ref=e1238]:
                        - /url: https://www.msn.com/en-in/money/general/mba-grad-starts-capsicum-farming-with-rs-20-lakh-investment-now-makes-rs-2-25-crore-profit-yearly/ar-AA2cBi6q#comments
                        - button "View comments 7 Comment" [ref=e1239]:
                          - img [ref=e1240]
                        - generic [ref=e1242]: "7"
                - generic [ref=e1243]:
                  - button "Hide this story" [ref=e1244]:
                    - img [ref=e1245]
                    - text: Hide this story
                  - button "See more" [ref=e1246]:
                    - img [ref=e1247]
            - 'article "Rajma vs chole: Which has more protein? The answer may surprise you" [ref=e1248] [cursor=pointer]':
              - generic [ref=e1250]:
                - img [ref=e1251]
                - generic [ref=e1252]:
                  - generic [ref=e1253]:
                    - generic [ref=e1254]:
                      - generic [ref=e1255]:
                        - img [ref=e1256]
                        - generic [ref=e1257]: The Indian Express
                      - generic [ref=e1258]: ·
                      - generic [ref=e1259]: 1w
                    - 'link "Rajma vs chole: Which has more protein? The answer may surprise you, The Indian Express" [ref=e1260]':
                      - /url: https://www.msn.com/en-in/food-and-drink/recipes/rajma-vs-chole-which-has-more-protein-the-answer-may-surprise-you/ar-AA2cBSXS
                      - text: "Rajma vs chole: Which has more protein? The answer may surprise you"
                  - 'generic "Rajma vs chole: Which has more protein? The answer may surprise you" [ref=e1263]':
                    - generic [ref=e1265]:
                      - generic [ref=e1266]:
                        - button "217 Likes" [ref=e1267]:
                          - generic [ref=e1268]:
                            - img [ref=e1269]
                            - generic [ref=e1271]: "217"
                        - button "Dislike" [ref=e1272]:
                          - img [ref=e1274]
                      - link "View comments 2 Comment" [ref=e1277]:
                        - /url: https://www.msn.com/en-in/food-and-drink/recipes/rajma-vs-chole-which-has-more-protein-the-answer-may-surprise-you/ar-AA2cBSXS#comments
                        - button "View comments 2 Comment" [ref=e1278]:
                          - img [ref=e1279]
                        - generic [ref=e1281]: "2"
                - generic [ref=e1282]:
                  - button "Hide this story" [ref=e1283]:
                    - img [ref=e1284]
                    - text: Hide this story
                  - button "See more" [ref=e1285]:
                    - img [ref=e1286]
            - article "Do you often see 11:11? Here's why many believe it's more than a coincidence" [ref=e1287] [cursor=pointer]:
              - generic [ref=e1289]:
                - img [ref=e1290]
                - generic [ref=e1291]:
                  - generic [ref=e1292]:
                    - generic [ref=e1294]:
                      - img [ref=e1295]
                      - generic [ref=e1296]: News18
                    - link "Do you often see 11:11? Here's why many believe it's more than a coincidence, News18" [ref=e1297]:
                      - /url: https://www.msn.com/en-in/lifestyle/other/do-you-often-see-11-11-here-s-why-many-believe-it-s-more-than-a-coincidence/ss-AA28b6IT
                      - text: Do you often see 11:11? Here's why many believe it's more than a coincidence
                  - generic "Do you often see 11:11? Here's why many believe it's more than a coincidence" [ref=e1300]:
                    - generic [ref=e1302]:
                      - generic [ref=e1303]:
                        - button "2,252 Likes" [ref=e1304]:
                          - generic [ref=e1305]:
                            - img [ref=e1306]
                            - generic [ref=e1308]: 2k
                        - button "Dislike" [ref=e1309]:
                          - img [ref=e1311]
                      - link "View comments 2 Comment" [ref=e1314]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/do-you-often-see-11-11-here-s-why-many-believe-it-s-more-than-a-coincidence/ss-AA28b6IT#comments
                        - button "View comments 2 Comment" [ref=e1315]:
                          - img [ref=e1316]
                        - generic [ref=e1318]: "2"
                - generic [ref=e1319]:
                  - button "Hide this story" [ref=e1320]:
                    - img [ref=e1321]
                    - text: Hide this story
                  - button "See more" [ref=e1322]:
                    - img [ref=e1323]
            - 'article "Herschelle Gibbs to message Rohit Sharma after his ‘stinker’ of a century celebration against West Indies: ‘What was that?’" [ref=e1324] [cursor=pointer]':
              - generic [ref=e1326]:
                - img [ref=e1327]
                - generic [ref=e1328]:
                  - generic [ref=e1329]:
                    - generic [ref=e1330]:
                      - generic [ref=e1331]:
                        - img [ref=e1332]
                        - generic [ref=e1333]: Hindustan Times
                      - generic [ref=e1334]: ·
                      - generic [ref=e1335]: 6h
                    - 'link "Herschelle Gibbs to message Rohit Sharma after his ‘stinker’ of a century celebration against West Indies: ‘What was that?’, Hindustan Times" [ref=e1336]':
                      - /url: https://www.msn.com/en-in/sports/cricket/herschelle-gibbs-to-message-rohit-sharma-after-his-stinker-of-a-century-celebration-against-west-indies-what-was-that/ar-AA2djaOs
                      - text: "Herschelle Gibbs to message Rohit Sharma after his ‘stinker’ of a century celebration against West Indies: ‘What was that?’"
                  - 'generic "Herschelle Gibbs to message Rohit Sharma after his ‘stinker’ of a century celebration against West Indies: ‘What was that?’" [ref=e1339]':
                    - generic [ref=e1341]:
                      - generic [ref=e1342]:
                        - button "39 Likes" [ref=e1343]:
                          - generic [ref=e1344]:
                            - img [ref=e1345]
                            - generic [ref=e1347]: "39"
                        - button "Dislike" [ref=e1348]:
                          - img [ref=e1350]
                      - link "Start the conversation" [ref=e1353]:
                        - /url: https://www.msn.com/en-in/sports/cricket/herschelle-gibbs-to-message-rohit-sharma-after-his-stinker-of-a-century-celebration-against-west-indies-what-was-that/ar-AA2djaOs#comments
                        - button "Start the conversation" [ref=e1354]:
                          - img [ref=e1355]
                - generic [ref=e1357]:
                  - button "Hide this story" [ref=e1358]:
                    - img [ref=e1359]
                    - text: Hide this story
                  - button "See more" [ref=e1360]:
                    - img [ref=e1361]
            - article "UP woman sells land for Rs 10 lakh, pays two men, gets husband murdered" [ref=e1362] [cursor=pointer]:
              - generic [ref=e1364]:
                - img [ref=e1365]
                - generic [ref=e1366]:
                  - generic [ref=e1367]:
                    - generic [ref=e1368]:
                      - generic [ref=e1369]:
                        - img [ref=e1370]
                        - generic [ref=e1371]: India Today
                      - generic [ref=e1372]: ·
                      - generic [ref=e1373]: 4h
                    - link "UP woman sells land for Rs 10 lakh, pays two men, gets husband murdered, India Today" [ref=e1374]:
                      - /url: https://www.msn.com/en-in/news/other/up-woman-sells-land-for-rs-10-lakh-pays-two-men-gets-husband-murdered/ar-AA2djo3u
                      - text: UP woman sells land for Rs 10 lakh, pays two men, gets husband murdered
                  - generic "UP woman sells land for Rs 10 lakh, pays two men, gets husband murdered" [ref=e1377]:
                    - generic [ref=e1379]:
                      - generic [ref=e1380]:
                        - button "19 Likes" [ref=e1381]:
                          - generic [ref=e1382]:
                            - img [ref=e1383]
                            - generic [ref=e1385]: "19"
                        - button "Dislike" [ref=e1386]:
                          - img [ref=e1388]
                      - link "Start the conversation" [ref=e1391]:
                        - /url: https://www.msn.com/en-in/news/other/up-woman-sells-land-for-rs-10-lakh-pays-two-men-gets-husband-murdered/ar-AA2djo3u#comments
                        - button "Start the conversation" [ref=e1392]:
                          - img [ref=e1393]
                - generic [ref=e1395]:
                  - button "Hide this story" [ref=e1396]:
                    - img [ref=e1397]
                    - text: Hide this story
                  - button "See more" [ref=e1398]:
                    - img [ref=e1399]
            - 'article "Not your money or muscle: Women find these three traits attractive in men as per globally acclaimed dating coach" [ref=e1400] [cursor=pointer]':
              - generic [ref=e1402]:
                - img [ref=e1403]
                - generic [ref=e1404]:
                  - generic [ref=e1405]:
                    - generic [ref=e1407]:
                      - img [ref=e1408]
                      - generic [ref=e1409]: The Times of India
                    - 'link "Not your money or muscle: Women find these three traits attractive in men as per globally acclaimed dating coach, The Times of India" [ref=e1410]':
                      - /url: https://www.msn.com/en-in/news/other/not-your-money-or-muscle-women-find-these-three-traits-attractive-in-men-as-per-globally-acclaimed-dating-coach/ar-AA2825FG
                      - text: "Not your money or muscle: Women find these three traits attractive in men as per globally acclaimed dating coach"
                  - 'generic "Not your money or muscle: Women find these three traits attractive in men as per globally acclaimed dating coach" [ref=e1413]':
                    - generic [ref=e1415]:
                      - generic [ref=e1416]:
                        - button "1,313 Likes" [ref=e1417]:
                          - generic [ref=e1418]:
                            - img [ref=e1419]
                            - generic [ref=e1421]: 1k
                        - button "Dislike" [ref=e1422]:
                          - img [ref=e1424]
                      - link "View comments 5 Comment" [ref=e1427]:
                        - /url: https://www.msn.com/en-in/news/other/not-your-money-or-muscle-women-find-these-three-traits-attractive-in-men-as-per-globally-acclaimed-dating-coach/ar-AA2825FG#comments
                        - button "View comments 5 Comment" [ref=e1428]:
                          - img [ref=e1429]
                        - generic [ref=e1431]: "5"
                - generic [ref=e1432]:
                  - button "Hide this story" [ref=e1433]:
                    - img [ref=e1434]
                    - text: Hide this story
                  - button "See more" [ref=e1435]:
                    - img [ref=e1436]
            - article "Rajpal Yadav was ‘disrespected’ and asked to leave Mushtaq Khan's prayer meet? Here's the truth. Watch" [ref=e1437] [cursor=pointer]:
              - generic [ref=e1439]:
                - img [ref=e1440]
                - generic [ref=e1441]:
                  - generic [ref=e1442]:
                    - generic [ref=e1443]:
                      - generic [ref=e1444]:
                        - img [ref=e1445]
                        - generic [ref=e1446]: Hindustan Times
                      - generic [ref=e1447]: ·
                      - generic [ref=e1448]: 2h
                    - link "Rajpal Yadav was ‘disrespected’ and asked to leave Mushtaq Khan's prayer meet? Here's the truth. Watch, Hindustan Times" [ref=e1449]:
                      - /url: https://www.msn.com/en-in/entertainment/celebrities/rajpal-yadav-was-disrespected-and-asked-to-leave-mushtaq-khan-s-prayer-meet-here-s-the-truth-watch/ar-AA2djyJC
                      - text: Rajpal Yadav was ‘disrespected’ and asked to leave Mushtaq Khan's prayer meet? Here's the truth. Watch
                  - generic "Rajpal Yadav was ‘disrespected’ and asked to leave Mushtaq Khan's prayer meet? Here's the truth. Watch" [ref=e1452]:
                    - generic [ref=e1454]:
                      - generic [ref=e1455]:
                        - button "3 Likes" [ref=e1456]:
                          - generic [ref=e1457]:
                            - img [ref=e1458]
                            - generic [ref=e1460]: "3"
                        - button "Dislike" [ref=e1461]:
                          - img [ref=e1463]
                      - link "Start the conversation" [ref=e1466]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/rajpal-yadav-was-disrespected-and-asked-to-leave-mushtaq-khan-s-prayer-meet-here-s-the-truth-watch/ar-AA2djyJC#comments
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