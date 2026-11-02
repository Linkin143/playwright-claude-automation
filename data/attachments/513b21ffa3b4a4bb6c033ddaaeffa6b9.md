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
      - search [ref=e18]:
        - generic [ref=e19]:
          - generic "Web search" [ref=e20] [cursor=pointer]:
            - button "Web search" [ref=e21]:
              - generic:
                - generic:
                  - img
          - searchbox "Enter your search term" [ref=e22]
      - generic [ref=e23]:
        - 'link "Cheyenne: Mostly cloudy, 8 °C" [ref=e26] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Cheyenne,Wyoming?loc=eyJsIjoiQ2hleWVubmUiLCJyIjoiV3lvbWluZyIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTEwNC43OTUyNDk5Mzg5NjQ4NCwieSI6NDEuMTQ0MjQ1MTQ3NzA1MDh9&weadegreetype=C&ocid=msnheader&cvid=6ae873a1966143f5a7671acea052c54b
          - img "Mostly cloudy" [ref=e28]
          - generic [ref=e29]:
            - generic [ref=e30]: ‎8‎
            - generic [ref=e32]: ‎°C‎
        - generic "Open settings" [ref=e36] [cursor=pointer]:
          - button "Open settings" [ref=e37]:
            - generic:
              - generic:
                - generic:
                  - generic: Page settings
                  - generic:
                    - img
        - generic "Sign in" [ref=e41]:
          - button "Sign in to your account" [ref=e43] [cursor=pointer]:
            - generic [ref=e44]: Sign in to your account
            - generic [ref=e46]: Sign in
  - generic [ref=e47]:
    - generic [ref=e48]:
      - generic [ref=e53]:
        - list [ref=e56]:
          - listitem [ref=e57]:
            - link "Outlook.com" [ref=e60] [cursor=pointer]:
              - /url: https://outlook.com
              - generic [ref=e64]: Outlook.com
          - listitem [ref=e65]:
            - link "Flipkart" [ref=e68] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=401531&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e71]:
                - generic [ref=e72]: Flipkart
                - generic [ref=e74]: Sponsored
          - listitem [ref=e75]:
            - link "Find a tutor" [ref=e78] [cursor=pointer]:
              - /url: https://www.bing.com/pros?FORM=BPIMNS
              - generic [ref=e82]: Find a tutor
          - listitem [ref=e83]:
            - link "Booking.com" [ref=e86] [cursor=pointer]:
              - /url: https://www.booking.com/index.html?aid=1624937&label=enin-msn-hp-mestripe
              - generic [ref=e89]:
                - generic [ref=e90]: Booking.com
                - generic [ref=e92]: Sponsored
          - listitem [ref=e93]:
            - link "Ajio" [ref=e96] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=393141&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e99]:
                - generic [ref=e100]: Ajio
                - generic [ref=e102]: Sponsored
          - listitem [ref=e103]:
            - link "Facebook" [ref=e106] [cursor=pointer]:
              - /url: https://www.facebook.com
              - generic [ref=e110]: Facebook
          - listitem [ref=e111]:
            - link "Microsoft 365" [ref=e114] [cursor=pointer]:
              - /url: https://www.office.com/?omkt=en-IN
              - generic [ref=e118]: Microsoft 365
          - listitem [ref=e119]:
            - link "X" [ref=e122] [cursor=pointer]:
              - /url: https://x.com
              - generic [ref=e126]: X
          - listitem [ref=e127]:
            - link "OneDrive" [ref=e130] [cursor=pointer]:
              - /url: https://onedrive.live.com/?wt.mc_id=oo_msn_msnhomepage_header
              - generic [ref=e134]: OneDrive
          - listitem [ref=e135]:
            - link "Skype" [ref=e138] [cursor=pointer]:
              - /url: https://www.skype.com/
              - generic [ref=e142]: Skype
          - listitem [ref=e143]:
            - link "OneNote" [ref=e146] [cursor=pointer]:
              - /url: https://www.onenote.com/notebooks?WT.mc_id=MSN_OneNote_TopMenu&auth=1&wdorigin=msn
              - generic [ref=e150]: OneNote
          - listitem [ref=e151]:
            - link "Maps" [ref=e154] [cursor=pointer]:
              - /url: https://bing.com/maps/?FORM=MSNMAP
              - generic [ref=e158]: Maps
          - listitem [ref=e159]:
            - link "Microsoft Store" [ref=e162] [cursor=pointer]:
              - /url: https://www.microsoft.com/en-in
              - generic [ref=e166]: Microsoft Store
        - button [ref=e167]:
          - img [ref=e170]
      - generic [ref=e172]:
        - banner [ref=e173]:
          - generic [ref=e176]:
            - iframe [ref=e179]:
              - generic [active] [ref=f4e1]:
                - generic [ref=f4e2]:
                  - generic [ref=f4e4]:
                    - generic:
                      - generic:
                        - link "Privacy Settings" [ref=f4e5] [cursor=pointer]:
                          - /url: https://account.microsoft.com/privacy/ad-settings
                        - generic:
                          - generic:
                            - generic:
                              - generic:
                                - generic: Temu
                            - generic:
                              - generic: Temu Finds
                            - generic:
                              - generic: Hurry, limited stock available, don't miss out on these amazing deals
                            - button "Learn more" [ref=f4e7] [cursor=pointer]:
                              - generic [ref=f4e8]:
                                - generic [ref=f4e9]: Learn more
                                - img [ref=f4e10]
                      - link "Temu Finds" [ref=f4e12] [cursor=pointer]:
                        - /url: https://www.bing.com/aclick?ld=e8Kt2UPtZJuCe7IJ2_YI5a3DVUCUwzl6_e1bb1zO_2wFqOUXmwKICCta9axjgvoiFtVUyKlt3Hq0BKKAPs5OeBFnPgIXUfN0bJBt99WUH_-dh9ug_ajLtHJ3Z8Y0Sw4h7w7-zbvp1cC-ZbJ8d-zMTUzJhCLDg0hENVjbyfYaSWs8YqQdIaS_kHqUlUpYnbt0Hy1t3Df-fLH91P_Z1aboZCJVVkLCU&u=aHR0cHMlM2ElMmYlMmZ3d3cudGVtdS5jb20lMmZrdWlwZXIlMmZ1bjEuaHRtbCUzZnN1YmolM2RmZWVkLXVuJTI2X2JnX2ZzJTNkMSUyNl9wX21hdDJfdHlwZSUzZDEwMDUlMjZfcF9qdW1wX2lkJTNkMTExOSUyNl94X3ZzdF9zY2VuZSUzZGFkZyUyNmxvY2FsZV9vdmVycmlkZSUzZDIxMSU3ZWVuJTdlVVNEJTI2X3BfcmZzJTNkMSUyNl94X2Fkc19jaGFubmVsJTNkYmluZyUyNl94X2Fkc19hY2NvdW50JTNkMTc2NDgzNDQ2JTI2X3hfYWRzX2NyZWF0aXZlX2lkJTNkODIxODg5Mzg4Nzc2NjklMjZfeF9uc19kZXZpY2UlM2RjJTI2X3hfYWRzX2FjY291bnQlM2QxNzY0ODM0NDYlMjZfeF9uc19tYXRjaF90eXBlJTNkZSUyNl94X25zX21zY2xraWQlM2RiMTIwZWRlMTA4NmUxYTBjMWRlYzg3MDk3YmNhZGNlZSUyNl94X2Fkc19zZXQlM2Q1MjQ5MDY5MDMlMjZfeF9uc19zb3VyY2UlM2RhJTI2X3hfYWRzX2lkJTNkMTMxNTAxODk4ODMwNjA1MCUyNl94X25zX2tleXdvcmQlM2RrZXl3b3JkJTI2bXNjbGtpZCUzZGIxMjBlZGUxMDg2ZTFhMGMxZGVjODcwOTdiY2FkY2Vl&rlid=b120ede1086e1a0c1dec87097bcadcee
                  - iframe [ref=f4e13]:
                    
                  - img
                - img
            - generic: Sponsored
        - generic [ref=e184]:
          - navigation [ref=e186]:
            - generic [ref=e187]:
              - list [ref=e188]:
                - listitem [ref=e189]:
                  - link "Discover" [ref=e190] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in
              - list [ref=e191]:
                - listitem [ref=e192]:
                  - link "News" [ref=e193] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f
                - listitem [ref=e194]:
                  - link "Sports" [ref=e195] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/sports
                - listitem [ref=e196]:
                  - link "Play" [ref=e197] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/play?cgfrom=cg_home_pivot
                - listitem [ref=e198]:
                  - link "Money" [ref=e199] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/money
                - listitem [ref=e200]:
                  - link "Weather" [ref=e201] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/weather
                - listitem [ref=e202]:
                  - link "Watch" [ref=e203] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/video
                - listitem [ref=e204]:
                  - link "Shopping" [ref=e205] [cursor=pointer]:
                    - /url: https://www.bing.com/shop?entrypoint=msn&adunitId=378983&propertyId=316966&FORM=NVBSHP
          - generic "Personalize your feed\"" [ref=e207] [cursor=pointer]:
            - button "Personalize your feed\"" [ref=e208]:
              - generic:
                - generic:
                  - img
              - generic:
                - generic: Personalize
      - main [ref=e211]:
        - generic [ref=e214]:
          - generic [ref=e215]:
            - generic [ref=e218]:
              - tablist [ref=e220]:
                - tab "News story" [ref=e221] [cursor=pointer]
                - tab "Sponsored" [ref=e223] [cursor=pointer]
                - tab "News story" [ref=e225] [cursor=pointer]
                - tab "News story" [ref=e227] [cursor=pointer]
                - tab "News story" [ref=e229] [cursor=pointer]
                - tab "Sponsored" [selected] [ref=e231] [cursor=pointer]
                - tab "News story" [ref=e233] [cursor=pointer]
                - tab "News story" [ref=e235] [cursor=pointer]
                - tab "Sponsored" [ref=e237] [cursor=pointer]
                - tab "News story" [ref=e239] [cursor=pointer]
                - tab "News story" [ref=e241] [cursor=pointer]
                - tab "News story" [ref=e243] [cursor=pointer]
                - tab "Sponsored" [ref=e245] [cursor=pointer]
                - tab "News story" [ref=e247] [cursor=pointer]
                - tab "News story" [ref=e249] [cursor=pointer]
                - tab "News story" [ref=e251] [cursor=pointer]
                - tab "News story" [ref=e253] [cursor=pointer]
                - tab "News story" [ref=e255] [cursor=pointer]
                - tab "Sponsored" [ref=e257] [cursor=pointer]
                - tab "News story" [ref=e259] [cursor=pointer]
                - tab "News story" [ref=e261] [cursor=pointer]
                - tab "News story" [ref=e263] [cursor=pointer]
                - tab "News story" [ref=e265] [cursor=pointer]
                - tab "News story" [ref=e267] [cursor=pointer]
                - tab "Sponsored" [ref=e269] [cursor=pointer]
                - tab "News story" [ref=e271] [cursor=pointer]
                - tab "News story" [ref=e273] [cursor=pointer]
                - tab "News story" [ref=e275] [cursor=pointer]
                - tab "Sponsored" [ref=e277] [cursor=pointer]
                - tab "News story" [ref=e279] [cursor=pointer]
                - tab "News story" [ref=e281] [cursor=pointer]
              - button [ref=e285]
              - button [ref=e288]
              - article "Omar Abdullah, Nidhi Razdan share new wedding pictures with parents" [ref=e289] [cursor=pointer]:
                - generic [ref=e291]:
                  - img [ref=e292]
                  - generic [ref=e293]:
                    - generic [ref=e294]:
                      - generic [ref=e295]:
                        - generic [ref=e296]:
                          - img [ref=e297]
                          - generic [ref=e298]: ABP - Live
                        - generic [ref=e299]: ·
                        - generic [ref=e300]: 23h
                      - link "Omar Abdullah, Nidhi Razdan share new wedding pictures with parents, ABP - Live" [ref=e301]:
                        - /url: https://www.msn.com/en-in/news/other/omar-abdullah-nidhi-razdan-share-new-wedding-pictures-with-parents/ar-AA2gwxXo
                        - text: Omar Abdullah, Nidhi Razdan share new wedding pictures with parents
                    - generic "Omar Abdullah, Nidhi Razdan share new wedding pictures with parents" [ref=e304]:
                      - generic [ref=e306]:
                        - generic [ref=e307]:
                          - button "61 Likes" [ref=e308]:
                            - generic [ref=e309]:
                              - img [ref=e310]
                              - generic [ref=e312]: "61"
                          - button "Dislike" [ref=e313]:
                            - img [ref=e315]
                        - link "View comments 3 Comment" [ref=e318]:
                          - /url: https://www.msn.com/en-in/news/other/omar-abdullah-nidhi-razdan-share-new-wedding-pictures-with-parents/ar-AA2gwxXo#comments
                          - button "View comments 3 Comment" [ref=e319]:
                            - img [ref=e320]
                          - generic [ref=e322]: "3"
                  - generic [ref=e323]:
                    - button "Hide this story" [ref=e324]:
                      - img [ref=e325]
                      - text: Hide this story
                    - button "See more" [ref=e326]:
                      - img [ref=e327]
            - article "Three satellites track Cyclone Murasu as it barrels towards India. Here's how it looks" [ref=e328] [cursor=pointer]:
              - generic [ref=e330]:
                - img [ref=e331]
                - generic [ref=e332]:
                  - generic [ref=e333]:
                    - generic [ref=e334]:
                      - generic [ref=e335]:
                        - img [ref=e336]
                        - generic [ref=e337]: India Today
                      - generic [ref=e338]: ·
                      - generic [ref=e339]: 5h
                    - link "Three satellites track Cyclone Murasu as it barrels towards India. Here's how it looks, India Today" [ref=e340]:
                      - /url: https://www.msn.com/en-in/news/other/three-satellites-track-cyclone-murasu-as-it-barrels-towards-india-here-s-how-it-looks/ar-AA2gyzVf
                      - text: Three satellites track Cyclone Murasu as it barrels towards India. Here's how it looks
                  - generic "Three satellites track Cyclone Murasu as it barrels towards India. Here's how it looks" [ref=e343]:
                    - generic [ref=e345]:
                      - generic [ref=e346]:
                        - button "65 Likes" [ref=e347]:
                          - generic [ref=e348]:
                            - img [ref=e349]
                            - generic [ref=e351]: "65"
                        - button "Dislike" [ref=e352]:
                          - img [ref=e354]
                      - link "Start the conversation" [ref=e357]:
                        - /url: https://www.msn.com/en-in/news/other/three-satellites-track-cyclone-murasu-as-it-barrels-towards-india-here-s-how-it-looks/ar-AA2gyzVf#comments
                        - button "Start the conversation" [ref=e358]:
                          - img [ref=e359]
                - generic [ref=e361]:
                  - button "Hide this story" [ref=e362]:
                    - img [ref=e363]
                    - text: Hide this story
                  - button "See more" [ref=e364]:
                    - img [ref=e365]
            - article [ref=e366] [cursor=pointer]:
              - generic [ref=e369]:
                - iframe [ref=e372]:
                  - generic [active] [ref=f5e1]:
                    - generic [ref=f5e2]:
                      - generic [ref=f5e4]:
                        - generic:
                          - generic:
                            - link "Privacy Settings" [ref=f5e5] [cursor=pointer]:
                              - /url: https://account.microsoft.com/privacy/ad-settings
                            - generic:
                              - generic:
                                - generic:
                                  - generic:
                                    - generic: Temu
                                - generic:
                                  - generic: Temu Finds
                              - button "Learn more" [ref=f5e7] [cursor=pointer]:
                                - img [ref=f5e8]
                          - link "Temu Finds" [ref=f5e10] [cursor=pointer]:
                            - /url: https://www.bing.com/aclick?ld=e8s5IpzDpUQ_iRQ1Jd1XFu0TVUCUzChaqalaNMeaRln6pMvT8ANJhHoYT8dSiTAYtbD_cCp876sJsKpXKcXODE8AADc6qIna5WT80vy1vgEPaedB3rN6X9mKMg72bpYQplmYNNQ-Zj_G4XwBh9LFuQYcM2cWe22RAgga0qMVZza5_jX-CcStWhuA0ew1Ts64FJckqj5VsMh7-x_Ov2rEWDD9kKrp0&u=aHR0cHMlM2ElMmYlMmZ3d3cudGVtdS5jb20lMmZrdWlwZXIlMmZ1bjEuaHRtbCUzZnN1YmolM2RmZWVkLXVuJTI2X2JnX2ZzJTNkMSUyNl9wX21hdDJfdHlwZSUzZDEwMDUlMjZfcF9qdW1wX2lkJTNkMTExOSUyNl94X3ZzdF9zY2VuZSUzZGFkZyUyNmxvY2FsZV9vdmVycmlkZSUzZDIxMSU3ZWVuJTdlVVNEJTI2X3BfcmZzJTNkMSUyNl94X2Fkc19jaGFubmVsJTNkYmluZyUyNl94X2Fkc19hY2NvdW50JTNkMTc2NDgzNDQ2JTI2X3hfYWRzX2NyZWF0aXZlX2lkJTNkODIxMjAyMTM3MzM4MDclMjZfeF9uc19kZXZpY2UlM2RjJTI2X3hfYWRzX2FjY291bnQlM2QxNzY0ODM0NDYlMjZfeF9uc19tYXRjaF90eXBlJTNkZSUyNl94X25zX21zY2xraWQlM2Q3NTk5ZTNjZDRhNTUxZGJjYzgwMDg5MjUzOWYxNWU4NCUyNl94X2Fkc19zZXQlM2Q1MjQ2MDczNjMlMjZfeF9uc19zb3VyY2UlM2RhJTI2X3hfYWRzX2lkJTNkMTMxMzkxOTM5Mzg5MjEyOSUyNl94X25zX2tleXdvcmQlM2RrZXl3b3JkJTI2bXNjbGtpZCUzZDc1OTllM2NkNGE1NTFkYmNjODAwODkyNTM5ZjE1ZTg0&rlid=7599e3cd4a551dbcc800892539f15e84
                      - iframe [ref=f5e11]:
                        
                      - img
                    - img
                - generic:
                  - generic: Sponsored
                - generic [ref=e373]:
                  - generic: Sponsored
            - article [ref=e374] [cursor=pointer]:
              - generic [ref=e379]:
                - generic [ref=e381]:
                  - link "Top stories" [ref=e383]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6ae873a1966143f5a7671acea052c54b&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e384]
                  - button "More options" [ref=e386]
                - list [ref=e389]:
                  - listitem [ref=e390]:
                    - link "Hindustan Times 1h Supreme Court allows bursting of green firecrackers in Delhi on November 7-8; restores ban thereafter" [ref=e391]:
                      - /url: https://www.msn.com/en-in/news/other/supreme-court-allows-bursting-of-green-firecrackers-in-delhi-on-november-7-8-restores-ban-thereafter/ar-AA2gA6vk
                      - generic [ref=e392]:
                        - generic [ref=e393]:
                          - img [ref=e394]
                          - generic [ref=e395]:
                            - generic: Hindustan Times ·1h
                        - generic [ref=e396]: Supreme Court allows bursting of green firecrackers in Delhi on November 7-8; restores ban thereafter
                  - listitem [ref=e397]:
                    - 'link "News18 1h Home-delivered drugs: Sukhbir Badal slams Bhagwant Mann after Punjab cop caught on camera planting heroin" [ref=e398]':
                      - /url: https://www.msn.com/en-in/news/other/home-delivered-drugs-sukhbir-badal-slams-bhagwant-mann-after-punjab-cop-caught-on-camera-planting-heroin/ar-AA2gzig4
                      - generic [ref=e399]:
                        - generic [ref=e400]:
                          - img [ref=e401]
                          - generic [ref=e402]:
                            - generic: News18 ·1h
                        - generic [ref=e403]: "Home-delivered drugs: Sukhbir Badal slams Bhagwant Mann after Punjab cop caught on camera planting heroin"
                  - listitem [ref=e404]:
                    - link "Press Trust of India now Severe cyclonic storm Murasu to cross Andhra coast, moderate rain forecast across AP" [ref=e405]:
                      - /url: https://www.msn.com/en-in/weather/meteorology/severe-cyclonic-storm-murasu-to-cross-andhra-coast-moderate-rain-forecast-across-ap/ar-AA2gziAy
                      - generic [ref=e406]:
                        - generic [ref=e407]:
                          - img [ref=e408]
                          - generic [ref=e409]:
                            - generic: Press Trust of India ·now
                        - generic [ref=e410]: Severe cyclonic storm Murasu to cross Andhra coast, moderate rain forecast across AP
                - generic [ref=e412]:
                  - generic [ref=e413]:
                    - generic "Previous" [ref=e414]:
                      - button "Previous" [ref=e415]
                    - tablist [ref=e417]:
                      - tab "Page 1" [selected] [ref=e418]
                      - tab "Page 2" [ref=e420]
                      - tab "Page 3" [ref=e422]
                    - generic "Next" [ref=e424]:
                      - button "Next" [ref=e425]
                  - link "See more" [ref=e427]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6ae873a1966143f5a7671acea052c54b&ocid=hpmsn
            - article "BTCC Official Website - Crypto Margin Trading - Low 0.01% Trading Fees" [ref=e428] [cursor=pointer]:
              - generic [ref=e430]:
                - img [ref=e431]
                - generic [ref=e432]:
                  - generic [ref=e433]:
                    - generic [ref=e436]: btcc.com
                    - link "BTCC Official Website - Crypto Margin Trading - Low 0.01% Trading Fees, btcc.com" [ref=e437]:
                      - /url: https://www.bing.com/api/v2/mediation/tracking?d=mOgx8DZUqsR9wZRpd15IS8XyDSHOvdO9LIG-p6I7C0JWrwdgQBsglAYkJxWzR7Cixi_5DkBmMhGnO5wX4E3WIq0fDA_T3OHH4wax6VoxC4JOI_ku2DPROa4tTmW_Y8M7lYTdEXUW3SeHrApm_krz1WT9QFczNsHxc9KajJeJcSwFgyofBuLBBFCrq9AAeN-KR0Et6GHNLNVsheAFFlZt18oXQmXDyw7ROf9ZfbzIzeA1i7dRKXF_k4tJa6rlWdq4VYN2jZOt6CTRuwA21V0sP-FOfeMhOdRLSXZbxHZVW7A2wBfteU7kEoJSZofGNpHC&e=1&n=JPvWUVzJ4soFWgQ1&rId=3bc120e1-11d8-4654-959a-1acfc3d2ef03&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8lYJJFqEVM-RGppcqCnLizzVUCUxZFbls3UxSkfDkF1RU8HqpGF9ebXPpMN8hTrZucnmo_Y1CZolC-wD_9T6I1X6CsFms-QGsDahehpCmMntSm6FZQ1QGhE8--ENs_o_c2Yuz-coz-lstWP_I6xqzdPN2C8cq0NIYQDQQ9n02s75g9jLapT2nxWRNmJvJ2P4cD9XaWy3xh278AwnKC3ka9vLc5Mk%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuYnRjYy5jb20lMmZlbi1VUyUyZnJlZ2lzdGVyJTNmdXRtX3NvdXJjZSUzZGtvbCUyNmludml0ZUNvZGUlM2RCVENDTFBMJTI2dXRtX21lZGl1bSUzZGNwYyUyNnV0bV9jYW1wYWlnbiUzZEJpbmdfTGV2ZXJhZ2VfMTAyOSUyNnV0bV90ZXJtJTNkbWFyZ2luJTI1MjB0cmFkaW5nJTI1MjBiaXRjb2luJTI2dXRtX2NvbnRlbnQlM2RtYXJnaW4lMjUyMHRyYWRpbmclMjUyMGJpdGNvaW4lMjZtc2Nsa2lkJTNkMWRlZjhkZDUzYzFhMTM4NjkxYmJlNzNkNGZiOWIzYzM%26rlid%3D1def8dd53c1a138691bbe73d4fb9b3c3&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                      - text: BTCC Official Website - Crypto Margin Trading - Low 0.01% Trading Fees
                  - link "Sponsored" [ref=e439]:
                    - /url: https://www.bing.com/api/v2/mediation/tracking?d=mOgx8DZUqsR9wZRpd15IS8XyDSHOvdO9LIG-p6I7C0JWrwdgQBsglAYkJxWzR7Cixi_5DkBmMhGnO5wX4E3WIq0fDA_T3OHH4wax6VoxC4JOI_ku2DPROa4tTmW_Y8M7lYTdEXUW3SeHrApm_krz1WT9QFczNsHxc9KajJeJcSwFgyofBuLBBFCrq9AAeN-KR0Et6GHNLNVsheAFFlZt18oXQmXDyw7ROf9ZfbzIzeA1i7dRKXF_k4tJa6rlWdq4VYN2jZOt6CTRuwA21V0sP-FOfeMhOdRLSXZbxHZVW7A2wBfteU7kEoJSZofGNpHC&e=1&n=JPvWUVzJ4soFWgQ1&rId=3bc120e1-11d8-4654-959a-1acfc3d2ef03&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8lYJJFqEVM-RGppcqCnLizzVUCUxZFbls3UxSkfDkF1RU8HqpGF9ebXPpMN8hTrZucnmo_Y1CZolC-wD_9T6I1X6CsFms-QGsDahehpCmMntSm6FZQ1QGhE8--ENs_o_c2Yuz-coz-lstWP_I6xqzdPN2C8cq0NIYQDQQ9n02s75g9jLapT2nxWRNmJvJ2P4cD9XaWy3xh278AwnKC3ka9vLc5Mk%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuYnRjYy5jb20lMmZlbi1VUyUyZnJlZ2lzdGVyJTNmdXRtX3NvdXJjZSUzZGtvbCUyNmludml0ZUNvZGUlM2RCVENDTFBMJTI2dXRtX21lZGl1bSUzZGNwYyUyNnV0bV9jYW1wYWlnbiUzZEJpbmdfTGV2ZXJhZ2VfMTAyOSUyNnV0bV90ZXJtJTNkbWFyZ2luJTI1MjB0cmFkaW5nJTI1MjBiaXRjb2luJTI2dXRtX2NvbnRlbnQlM2RtYXJnaW4lMjUyMHRyYWRpbmclMjUyMGJpdGNvaW4lMjZtc2Nsa2lkJTNkMWRlZjhkZDUzYzFhMTM4NjkxYmJlNzNkNGZiOWIzYzM%26rlid%3D1def8dd53c1a138691bbe73d4fb9b3c3&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                - button "See more" [ref=e441]:
                  - img [ref=e442]
            - 'article "Israel election results: Why Netanyahu remains PM as Arab parties emerge as kingmakers" [ref=e443] [cursor=pointer]':
              - generic [ref=e445]:
                - img [ref=e446]
                - generic [ref=e447]:
                  - generic [ref=e448]:
                    - generic [ref=e449]:
                      - generic [ref=e450]:
                        - img [ref=e451]
                        - generic [ref=e452]: The Indian Express
                      - generic [ref=e453]: ·
                      - generic [ref=e454]: 17h
                    - 'link "Israel election results: Why Netanyahu remains PM as Arab parties emerge as kingmakers, The Indian Express" [ref=e455]':
                      - /url: https://www.msn.com/en-in/news/other/israel-election-results-why-netanyahu-remains-pm-as-arab-parties-emerge-as-kingmakers/ar-AA2gxUMc
                      - text: "Israel election results: Why Netanyahu remains PM as Arab parties emerge as kingmakers"
                  - 'generic "Israel election results: Why Netanyahu remains PM as Arab parties emerge as kingmakers" [ref=e458]':
                    - generic [ref=e460]:
                      - generic [ref=e461]:
                        - button "32 Likes" [ref=e462]:
                          - generic [ref=e463]:
                            - img [ref=e464]
                            - generic [ref=e466]: "32"
                        - button "Dislike" [ref=e467]:
                          - img [ref=e469]
                      - link "Start the conversation" [ref=e472]:
                        - /url: https://www.msn.com/en-in/news/other/israel-election-results-why-netanyahu-remains-pm-as-arab-parties-emerge-as-kingmakers/ar-AA2gxUMc#comments
                        - button "Start the conversation" [ref=e473]:
                          - img [ref=e474]
                - generic [ref=e476]:
                  - button "Hide this story" [ref=e477]:
                    - img [ref=e478]
                    - text: Hide this story
                  - button "See more" [ref=e479]:
                    - img [ref=e480]
            - article [ref=e481] [cursor=pointer]:
              - generic [ref=e486]:
                - generic [ref=e488]:
                  - link "Games" [ref=e490]:
                    - /url: https://www.msn.com/en-in/play?ocid=hpmsn&cgfrom=cg_ntp_sd_cardtitle
                    - heading "Games" [level=2] [ref=e491]
                  - button "More options" [ref=e493]
                - list [ref=e497]:
                  - generic:
                    - listitem [ref=e498]:
                      - link "Hidden Objects" [ref=e499]:
                        - /url: https://www.msn.com/en-in/play/games/hidden-objects/cg-9nrl7s8gcnmh?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b&ei=3
                        - generic [ref=e500]:
                          - img "Hidden Objects"
                    - listitem [ref=e501]:
                      - link "Real Car Driving" [ref=e502]:
                        - /url: https://www.msn.com/en-in/play/games/real-car-driving/cg-9n1f6qpb51zl?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b&ei=3
                        - generic [ref=e503]:
                          - img "Real Car Driving"
                    - listitem [ref=e504]:
                      - link "Mansion Tale" [ref=e505]:
                        - /url: https://www.msn.com/en-in/play/games/mansion-tale/cg-9n4rb3rv2sz1?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b&ei=3
                        - generic [ref=e506]:
                          - img "Mansion Tale"
                    - listitem [ref=e507]:
                      - link "Piece of Cake" [ref=e508]:
                        - /url: https://www.msn.com/en-in/play/games/piece-of-cake/cg-9n5mln8fpwg8?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b&ei=3
                        - generic [ref=e509]:
                          - img "Piece of Cake"
                    - listitem [ref=e510]:
                      - link "Tropical Merge" [ref=e511]:
                        - /url: https://www.msn.com/en-in/play/games/tropical-merge/cg-9n5tk2sn4464?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b&ei=3
                        - generic [ref=e512]:
                          - img "Tropical Merge"
                    - listitem [ref=e513]:
                      - link "Enchanted Waters" [ref=e514]:
                        - /url: https://www.msn.com/en-in/play/games/enchanted-waters/cg-9pnwgfx8cgml?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b&ei=3
                        - generic [ref=e515]:
                          - img "Enchanted Waters"
                    - listitem [ref=e516]:
                      - link "Mergest Kingdom" [ref=e517]:
                        - /url: https://www.msn.com/en-in/play/games/mergest-kingdom/cg-9pc19rxfzl82?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b&ei=3
                        - generic [ref=e518]:
                          - img "Mergest Kingdom"
                    - listitem [ref=e519]:
                      - link "Snake Escape Puzzle" [ref=e520]:
                        - /url: https://www.msn.com/en-in/play/games/snake-escape-puzzle/cg-9nl06d0k9gwl?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b&ei=3
                        - generic [ref=e521]:
                          - img "Snake Escape Puzzle"
                    - listitem [ref=e522]:
                      - link "Kick the Buddy" [ref=e523]:
                        - /url: https://www.msn.com/en-in/play/games/kick-the-buddy/cg-9ncz9n76wh8w?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b&ei=3
                        - generic [ref=e524]:
                          - img "Kick the Buddy"
                - generic [ref=e526]:
                  - generic [ref=e527]:
                    - generic "Previous" [ref=e528]:
                      - button "Previous" [ref=e529]
                    - tablist [ref=e531]:
                      - tab "Page 1" [selected] [ref=e532]
                      - tab "Page 2" [ref=e534]
                    - generic "Next" [ref=e536]:
                      - button "Next" [ref=e537]
                  - link "Explore more games" [ref=e539]:
                    - /url: https://www.msn.com/en-in/play?ocid=hpmsn&cgfrom=cg_ntp_sd_cardseemore
            - 'article "Sanjay Gupta’s wife reacts to daughter’s middle finger video: ‘Expression of grief and anguish’" [ref=e540] [cursor=pointer]':
              - generic [ref=e542]:
                - img [ref=e543]
                - generic [ref=e544]:
                  - generic [ref=e545]:
                    - generic [ref=e546]:
                      - generic [ref=e547]:
                        - img [ref=e548]
                        - generic [ref=e549]: ABP - Live
                      - generic [ref=e550]: ·
                      - generic [ref=e551]: 5h
                    - 'link "Sanjay Gupta’s wife reacts to daughter’s middle finger video: ‘Expression of grief and anguish’, ABP - Live" [ref=e552]':
                      - /url: https://www.msn.com/en-in/news/other/sanjay-gupta-s-wife-reacts-to-daughter-s-middle-finger-video-expression-of-grief-and-anguish/ar-AA2gysjj
                      - text: "Sanjay Gupta’s wife reacts to daughter’s middle finger video: ‘Expression of grief and anguish’"
                  - 'generic "Sanjay Gupta’s wife reacts to daughter’s middle finger video: ‘Expression of grief and anguish’" [ref=e555]':
                    - generic [ref=e557]:
                      - generic [ref=e558]:
                        - button "23 Likes" [ref=e559]:
                          - generic [ref=e560]:
                            - img [ref=e561]
                            - generic [ref=e563]: "23"
                        - button "Dislike" [ref=e564]:
                          - img [ref=e566]
                      - link "Start the conversation" [ref=e569]:
                        - /url: https://www.msn.com/en-in/news/other/sanjay-gupta-s-wife-reacts-to-daughter-s-middle-finger-video-expression-of-grief-and-anguish/ar-AA2gysjj#comments
                        - button "Start the conversation" [ref=e570]:
                          - img [ref=e571]
                - generic [ref=e573]:
                  - button "Hide this story" [ref=e574]:
                    - img [ref=e575]
                    - text: Hide this story
                  - button "See more" [ref=e576]:
                    - img [ref=e577]
            - article "Here Are 30+ of The Coolest Gifts in Wyoming" [ref=e578] [cursor=pointer]:
              - generic [ref=e580]:
                - img [ref=e581]
                - generic [ref=e582]:
                  - generic [ref=e583]:
                    - generic [ref=e586]: Top Discounts
                    - link "Here Are 30+ of The Coolest Gifts in Wyoming, Top Discounts" [ref=e587]:
                      - /url: https://msft-ssp-uswest.adnxs.com/click2?e=wqT_3QKhAfBDoQAAAAMAxBkFAQij56HXBhDm2fbcleL06lgYgJWMp6ntmu4sIO77sBAomAIwxH04uARApc759wJI8opOUABaA1VTRGIBBZBoAXABeJmgZ4ABtJcGiAEBkAEAmAEFoAECqQGNKO0NvjDRP7EBEQoouQEAAACgR-H2P8EVHgDJFQo02AGOvQLgAQDwAQD4AQA./s=9d9f6e1624801fd7e57e226add2e9988c17b0d8b/bcr=AAAAAAAA8D8=/pp=0.27/bn=101300/clickenc=https%3A%2F%2Fapi.taboola.com%2F2.0%2Fjson%2Fmsn-india-home%2Frecommendations.notify-click%3Fapp.type%3Dbidder%26app.apikey%3D69629143827c91b118c7e0dc9f2a4eb0059feae9%26response.id%3D__ac5dbd9f2da9647a3c799e9cacbe7e66__bff01fcecd606c3f4bdb7a36550390a9%26response.session%3Dv2_cf05ce3897390bad7d1a218c6cf3702a_3232576738053786240_1793618851_1793618851_CIi3jgYQ7_w-GJXi9evBsPDGUCABKAww4QE4kaQOQLj8D0iDq9oDUPcFWABgAGj7rfPC-bL5ndUBcAGAAQCIAQCQAQCYAQA%26item.id%3D%257E%257EV1%257E%257E-529592518901891974%257E%257EzuXhY_DoBbZGgr1FgRPN_A0iFm11w2HXd9I2yBXF1g_yQcfB55lwcTnnJkOGtzpx2emsvF4GkqgUZaY5oVa5OgMsM89YWURQjppUNhwWXiA-J81FPQPL5bcRi3D1_ALu5oKrsYKTouKJhHJxYvz8r9_7qpt49K-S5B42LryVsU3uKDuOEKEDqgSDxMcsmvZrJs-uC3-WWmrUP_51FzAi-JvTT-DJN9zsoqckv-hu2gmanFyGHV0YFPtSeFvQ2WnMJyTipbrFEKm_U4mZlQLrFSBmGuRC_T8k0BH2Gohf15GGwmRhYxDi-f8V-GR90xU2rXRCLuBqQ_M_TmfEt-sZ8-53n9Y7ldMVuHr1jvszdxO4BlQNAqhLBlhi-cmymJZy%26item.type%3Dtext%26sig%3D1ded820c779762d25fab84dcaae8e889090ebdb95782%26redir%3Dhttps%253A%252F%252Fpostback.lol%252Fcf%252Fr%252F6ace661f5e77810012b85a8c%253Fclick_id%253DtblwkwsMgAGcCiCMKG2wk4bqNCVV2RwNxuL9nJYqmbyS-rmxLqdxx7glahDv_D4Ywsvavov3oMdOIJzrjuCZNCjMnHkwkJ2ZGDj6-JeZj82g0_gBQA0%2526site%253Dmsn-india-home%2526site_id%253D1031791%2526title%253DHere%252BAre%252B30%25252B%252Bof%252BThe%252BCoolest%252BGifts%252Bin%252BWyoming%2526platform%253DDesktop%2526campaign_id%253D50744976%2526campaign_item_id%253D4369444057%2526thumbnail%253Dhttps%25253A%25252F%25252Fcdn.taboola.com%25252Flibtrc%25252Fstatic%25252Fthumbnails%25252Fc3526ebf0042868ef405c559b51eeed8.jpg%2526camp_name%253DLimitless%252B-%252BGadget%252BListicle%252B-%252BDT%252B-%252BNo%252BAud%2B%250A%250A%250A%2526tblci%253DtblwkwsMgAGcCiCMKG2wk4bqNCVV2RwNxuL9nJYqmbyS-rmxLqdxx7glahDv_D4Ywsvavov3oMdOIJzrjuCZNCjMnHkwkJ2ZGDj6-JeZj82g0_gBQA0%2523tblcitblwkwsMgAGcCiCMKG2wk4bqNCVV2RwNxuL9nJYqmbyS-rmxLqdxx7glahDv_D4Ywsvavov3oMdOIJzrjuCZNCjMnHkwkJ2ZGDj6-JeZj82g0_gBQA0%26st%3Df%26ui%3D3232576738053786240%26cpb%3DGPghINrqHyoZbGEudGFib29sYXN5bmRpY2F0aW9uLmNvbTIIdHJjMjAxMTA4gL7f5gpAkaQOSLj8D1CDq9oDWPcFYwjXFhC67wEYI2RjCMicARCbxQEYQ2RjCOPLARDyhwIYB2RjCNIDEOAGGAhkYwiDywEQtIYCGAlkYwiguAEQxIkCGEpkYwihpQEQpNEBGAtkYwiCvQEQhIcCGE5kYwjQ__________8BEND__________wEYMGRjCMDHARDigAIYUWRjCP4WEIogGBNkYwjiTxDxaRg2ZGMI3AoQoBAYFmRjCNAMENMSGBdkYwiWFBCYHBgYZGMIqIUBEO6oARg6ZGMI9BQQnh0YH2RqEjQ1NzY5MTYwOTEzMTUyODA0MXgBgAGaI4gBrnmQARaYAZzrjuCZNKIBBFNDT06qARJTQ09OX01TRlRfTU9ORVRJWkWyARJTQ09OX01TRlRfTU9ORVRJWkW6AQRob21lwAHAngTKAQJsYdABANsBEAHcAQ%26viperAppType%3DSCON
                      - text: Here Are 30+ of The Coolest Gifts in Wyoming
                  - link "Sponsored" [ref=e589]:
                    - /url: https://msft-ssp-uswest.adnxs.com/click2?e=wqT_3QKhAfBDoQAAAAMAxBkFAQij56HXBhDm2fbcleL06lgYgJWMp6ntmu4sIO77sBAomAIwxH04uARApc759wJI8opOUABaA1VTRGIBBZBoAXABeJmgZ4ABtJcGiAEBkAEAmAEFoAECqQGNKO0NvjDRP7EBEQoouQEAAACgR-H2P8EVHgDJFQo02AGOvQLgAQDwAQD4AQA./s=9d9f6e1624801fd7e57e226add2e9988c17b0d8b/bcr=AAAAAAAA8D8=/pp=0.27/bn=101300/clickenc=https%3A%2F%2Fapi.taboola.com%2F2.0%2Fjson%2Fmsn-india-home%2Frecommendations.notify-click%3Fapp.type%3Dbidder%26app.apikey%3D69629143827c91b118c7e0dc9f2a4eb0059feae9%26response.id%3D__ac5dbd9f2da9647a3c799e9cacbe7e66__bff01fcecd606c3f4bdb7a36550390a9%26response.session%3Dv2_cf05ce3897390bad7d1a218c6cf3702a_3232576738053786240_1793618851_1793618851_CIi3jgYQ7_w-GJXi9evBsPDGUCABKAww4QE4kaQOQLj8D0iDq9oDUPcFWABgAGj7rfPC-bL5ndUBcAGAAQCIAQCQAQCYAQA%26item.id%3D%257E%257EV1%257E%257E-529592518901891974%257E%257EzuXhY_DoBbZGgr1FgRPN_A0iFm11w2HXd9I2yBXF1g_yQcfB55lwcTnnJkOGtzpx2emsvF4GkqgUZaY5oVa5OgMsM89YWURQjppUNhwWXiA-J81FPQPL5bcRi3D1_ALu5oKrsYKTouKJhHJxYvz8r9_7qpt49K-S5B42LryVsU3uKDuOEKEDqgSDxMcsmvZrJs-uC3-WWmrUP_51FzAi-JvTT-DJN9zsoqckv-hu2gmanFyGHV0YFPtSeFvQ2WnMJyTipbrFEKm_U4mZlQLrFSBmGuRC_T8k0BH2Gohf15GGwmRhYxDi-f8V-GR90xU2rXRCLuBqQ_M_TmfEt-sZ8-53n9Y7ldMVuHr1jvszdxO4BlQNAqhLBlhi-cmymJZy%26item.type%3Dtext%26sig%3D1ded820c779762d25fab84dcaae8e889090ebdb95782%26redir%3Dhttps%253A%252F%252Fpostback.lol%252Fcf%252Fr%252F6ace661f5e77810012b85a8c%253Fclick_id%253DtblwkwsMgAGcCiCMKG2wk4bqNCVV2RwNxuL9nJYqmbyS-rmxLqdxx7glahDv_D4Ywsvavov3oMdOIJzrjuCZNCjMnHkwkJ2ZGDj6-JeZj82g0_gBQA0%2526site%253Dmsn-india-home%2526site_id%253D1031791%2526title%253DHere%252BAre%252B30%25252B%252Bof%252BThe%252BCoolest%252BGifts%252Bin%252BWyoming%2526platform%253DDesktop%2526campaign_id%253D50744976%2526campaign_item_id%253D4369444057%2526thumbnail%253Dhttps%25253A%25252F%25252Fcdn.taboola.com%25252Flibtrc%25252Fstatic%25252Fthumbnails%25252Fc3526ebf0042868ef405c559b51eeed8.jpg%2526camp_name%253DLimitless%252B-%252BGadget%252BListicle%252B-%252BDT%252B-%252BNo%252BAud%2B%250A%250A%250A%2526tblci%253DtblwkwsMgAGcCiCMKG2wk4bqNCVV2RwNxuL9nJYqmbyS-rmxLqdxx7glahDv_D4Ywsvavov3oMdOIJzrjuCZNCjMnHkwkJ2ZGDj6-JeZj82g0_gBQA0%2523tblcitblwkwsMgAGcCiCMKG2wk4bqNCVV2RwNxuL9nJYqmbyS-rmxLqdxx7glahDv_D4Ywsvavov3oMdOIJzrjuCZNCjMnHkwkJ2ZGDj6-JeZj82g0_gBQA0%26st%3Df%26ui%3D3232576738053786240%26cpb%3DGPghINrqHyoZbGEudGFib29sYXN5bmRpY2F0aW9uLmNvbTIIdHJjMjAxMTA4gL7f5gpAkaQOSLj8D1CDq9oDWPcFYwjXFhC67wEYI2RjCMicARCbxQEYQ2RjCOPLARDyhwIYB2RjCNIDEOAGGAhkYwiDywEQtIYCGAlkYwiguAEQxIkCGEpkYwihpQEQpNEBGAtkYwiCvQEQhIcCGE5kYwjQ__________8BEND__________wEYMGRjCMDHARDigAIYUWRjCP4WEIogGBNkYwjiTxDxaRg2ZGMI3AoQoBAYFmRjCNAMENMSGBdkYwiWFBCYHBgYZGMIqIUBEO6oARg6ZGMI9BQQnh0YH2RqEjQ1NzY5MTYwOTEzMTUyODA0MXgBgAGaI4gBrnmQARaYAZzrjuCZNKIBBFNDT06qARJTQ09OX01TRlRfTU9ORVRJWkWyARJTQ09OX01TRlRfTU9ORVRJWkW6AQRob21lwAHAngTKAQJsYdABANsBEAHcAQ%26viperAppType%3DSCON
                - button "See more" [ref=e591]:
                  - img [ref=e592]
            - article [ref=e593] [cursor=pointer]:
              - generic [ref=e599]:
                - generic [ref=e601]:
                  - link "Cheyenne" [ref=e603]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Cheyenne,Wyoming?loc=eyJsIjoiQ2hleWVubmUiLCJyIjoiV3lvbWluZyIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTEwNC43OTUyNDk5Mzg5NjQ4NCwieSI6NDEuMTQ0MjQ1MTQ3NzA1MDh9&weadegreetype=C&ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b&content=AQICard_wxaqi
                    - heading "Cheyenne" [level=2] [ref=e604]
                  - button "My location" [ref=e605]
                  - button "More options" [ref=e607]
                - generic [ref=e611]:
                  - generic [ref=e612]:
                    - generic [ref=e614]:
                      - link "Mostly cloudy" [ref=e615]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Cheyenne,Wyoming?loc=eyJsIjoiQ2hleWVubmUiLCJyIjoiV3lvbWluZyIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTEwNC43OTUyNDk5Mzg5NjQ4NCwieSI6NDEuMTQ0MjQ1MTQ3NzA1MDh9&weadegreetype=C&ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b&content=AQICard_wxaqi
                        - img "Mostly cloudy" [ref=e616]
                      - link "8°C" [ref=e617]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Cheyenne,Wyoming?loc=eyJsIjoiQ2hleWVubmUiLCJyIjoiV3lvbWluZyIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTEwNC43OTUyNDk5Mzg5NjQ4NCwieSI6NDEuMTQ0MjQ1MTQ3NzA1MDh9&weadegreetype=C&ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b&content=AQICard_wxaqi
                        - generic [ref=e618]: ‎8‎
                        - generic [ref=e620]: ‎°C‎
                    - generic [ref=e622]:
                      - link "Good air quality" [ref=e624]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Cheyenne,Wyoming?loc=eyJsIjoiQ2hleWVubmUiLCJyIjoiV3lvbWluZyIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTEwNC43OTUyNDk5Mzg5NjQ4NCwieSI6NDEuMTQ0MjQ1MTQ3NzA1MDh9&weadegreetype=C&ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b&fcsttab=airquality
                        - text: Good air quality
                      - link "See full forecast" [ref=e626]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Cheyenne,Wyoming?loc=eyJsIjoiQ2hleWVubmUiLCJyIjoiV3lvbWluZyIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTEwNC43OTUyNDk5Mzg5NjQ4NCwieSI6NDEuMTQ0MjQ1MTQ3NzA1MDh9&weadegreetype=C&ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b&fcsttab=airquality
                        - img "arrow" [ref=e627]
                  - generic [ref=e632]:
                    - link "Larger map" [ref=e633]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Cheyenne,Wyoming?loc=eyJsIjoiQ2hleWVubmUiLCJyIjoiV3lvbWluZyIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTEwNC43OTUyNDk5Mzg5NjQ4NCwieSI6NDEuMTQ0MjQ1MTQ3NzA1MDh9&weadegreetype=C&ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b&content=AQICard_wxaqi&zoom=8
                      - generic [ref=e634]:
                        - generic:
                          - generic:
                            - img
                            - img
                            - img
                            - img
                            - img
                            - img
                      - img
                    - link "Check global air quality" [ref=e635]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Cheyenne,Wyoming?loc=eyJsIjoiQ2hleWVubmUiLCJyIjoiV3lvbWluZyIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTEwNC43OTUyNDk5Mzg5NjQ4NCwieSI6NDEuMTQ0MjQ1MTQ3NzA1MDh9&weadegreetype=C&ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b&content=AQICard_wxaqi&zoom=8
                      - img [ref=e637]
                      - generic "Check global air quality" [ref=e638]
                      - img [ref=e640]
                - button "See full forecast" [ref=e643]
          - generic [ref=e644]:
            - article [ref=e645] [cursor=pointer]:
              - generic [ref=e650]:
                - generic [ref=e652]:
                  - link "Top Engaging News" [ref=e654]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b
                    - heading "Top Engaging News" [level=2] [ref=e655]
                  - button "More options" [ref=e657]
                - generic [ref=e659]:
                  - link "News18 10 Comments Jim Carrey marries for the 3rd time at 64, ties knot with 32-year-old girlfriend Min Ah" [ref=e661]:
                    - /url: https://www.msn.com/en-in/entertainment/celebrities/jim-carrey-marries-for-the-3rd-time-at-64-ties-knot-with-32-year-old-girlfriend-min-ah/ar-AA2dk8bG
                    - generic [ref=e662]:
                      - img [ref=e663]
                      - generic [ref=e664]: News18
                      - link "10 Comments" [ref=e666]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/jim-carrey-marries-for-the-3rd-time-at-64-ties-knot-with-32-year-old-girlfriend-min-ah/ar-AA2dk8bG#comments
                        - img [ref=e667]
                        - paragraph [ref=e668]: "10"
                    - paragraph [ref=e669]: Jim Carrey marries for the 3rd time at 64, ties knot with 32-year-old girlfriend Min Ah
                  - 'link "Hindustan Times 3 Comments Australians are laid-back: Indian man compares public holidays in Australia and India, internet reacts" [ref=e671]':
                    - /url: https://www.msn.com/en-in/news/other/australians-are-laid-back-indian-man-compares-public-holidays-in-australia-and-india-internet-reacts/ar-AA2dmmhs
                    - generic [ref=e672]:
                      - img [ref=e673]
                      - generic [ref=e674]: Hindustan Times
                      - link "3 Comments" [ref=e676]:
                        - /url: https://www.msn.com/en-in/news/other/australians-are-laid-back-indian-man-compares-public-holidays-in-australia-and-india-internet-reacts/ar-AA2dmmhs#comments
                        - img [ref=e677]
                        - paragraph [ref=e678]: "3"
                    - paragraph [ref=e679]: "Australians are laid-back: Indian man compares public holidays in Australia and India, internet reacts"
                  - link "ABP - Live 2 Comments Washington Sundar out of India T20I squad, BCCI names surprise replacement" [ref=e681]:
                    - /url: https://www.msn.com/en-in/sports/cricket/washington-sundar-out-of-india-t20i-squad-bcci-names-surprise-replacement/ar-AA2dltlt
                    - generic [ref=e682]:
                      - img [ref=e683]
                      - generic [ref=e684]: ABP - Live
                      - link "2 Comments" [ref=e686]:
                        - /url: https://www.msn.com/en-in/sports/cricket/washington-sundar-out-of-india-t20i-squad-bcci-names-surprise-replacement/ar-AA2dltlt#comments
                        - img [ref=e687]
                        - paragraph [ref=e688]: "2"
                    - paragraph [ref=e689]: Washington Sundar out of India T20I squad, BCCI names surprise replacement
                - generic [ref=e691]:
                  - generic [ref=e692]:
                    - generic "Previous" [ref=e693]:
                      - button "Previous" [ref=e694]
                    - tablist [ref=e696]:
                      - tab "Page 1" [selected] [ref=e697]
                      - tab "Page 2" [ref=e699]
                      - tab "Page 3" [ref=e701]
                    - generic "Next" [ref=e703]:
                      - button "Next" [ref=e704]
                  - link "See more" [ref=e706]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b
            - article [ref=e707] [cursor=pointer]
            - 'article "Drinking water before brushing after waking up: Why more people do it and its benefits" [ref=e714] [cursor=pointer]':
              - generic [ref=e716]:
                - img [ref=e717]
                - generic [ref=e718]:
                  - generic [ref=e719]:
                    - generic [ref=e721]:
                      - img [ref=e722]
                      - generic [ref=e723]: The Economic Times
                    - 'link "Drinking water before brushing after waking up: Why more people do it and its benefits, The Economic Times" [ref=e724]':
                      - /url: https://www.msn.com/en-in/health/general/drinking-water-before-brushing-after-waking-up-why-more-people-do-it-and-its-benefits/ss-AA2bfelU
                      - text: "Drinking water before brushing after waking up: Why more people do it and its benefits"
                  - 'generic "Drinking water before brushing after waking up: Why more people do it and its benefits" [ref=e727]':
                    - generic [ref=e729]:
                      - generic [ref=e730]:
                        - button "92 Likes" [ref=e731]:
                          - generic [ref=e732]:
                            - img [ref=e733]
                            - generic [ref=e735]: "92"
                        - button "Dislike" [ref=e736]:
                          - img [ref=e738]
                      - link "Start the conversation" [ref=e741]:
                        - /url: https://www.msn.com/en-in/health/general/drinking-water-before-brushing-after-waking-up-why-more-people-do-it-and-its-benefits/ss-AA2bfelU#comments
                        - button "Start the conversation" [ref=e742]:
                          - img [ref=e743]
                - generic [ref=e745]:
                  - button "Hide this story" [ref=e746]:
                    - img [ref=e747]
                    - text: Hide this story
                  - button "See more" [ref=e748]:
                    - img [ref=e749]
            - article [ref=e750] [cursor=pointer]:
              - generic [ref=e756]:
                - generic [ref=e758]:
                  - img "Watchlist suggestions" [ref=e760]
                  - link "Watchlist suggestions" [ref=e761]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e762]
                  - button "More options" [ref=e764]
                - generic [ref=e769]:
                  - link "SENSEX SENSEX Rising fast ‎+1.66%‎ 75,692.78" [ref=e771]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkucw&noti=Price&ocid=hpmsn
                    - generic [ref=e772]:
                      - generic [ref=e773]:
                        - generic [ref=e774]: SENSEX
                        - img "SENSEX" [ref=e775]
                      - generic [ref=e777]: Rising fast
                    - generic [ref=e782]:
                      - generic [ref=e783]: ‎+1.66%‎
                      - generic [ref=e784]: 75,692.78
                    - button "Add to watchlist" [ref=e787]:
                      - img [ref=e788]
                  - link "NIFTY NIFTY Rising fast ‎+1.68%‎ 23,440.80" [ref=e792]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkqww&noti=Price&ocid=hpmsn
                    - generic [ref=e793]:
                      - generic [ref=e794]:
                        - generic [ref=e795]: NIFTY
                        - img "NIFTY" [ref=e796]
                      - generic [ref=e798]: Rising fast
                    - generic [ref=e803]:
                      - generic [ref=e804]: ‎+1.68%‎
                      - generic [ref=e805]: 23,440.80
                    - button "Add to watchlist" [ref=e808]:
                      - img [ref=e809]
                  - link "24K Gold (10 Grams) - Indian Rupee XAUINR ‎+0.69%‎ 144496" [ref=e813]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&ocid=hpmsn
                    - generic [ref=e814]:
                      - generic [ref=e816]: 24K Gold (10 Grams) - Indian Rupee
                      - generic [ref=e818]: XAUINR
                    - generic [ref=e823]:
                      - generic [ref=e824]: ‎+0.69%‎
                      - generic [ref=e825]: "144496"
                    - button "Add to watchlist" [ref=e828]:
                      - img [ref=e829]
                  - link "Silver Silver Rising fast ‎+2.04%‎ 50.28" [ref=e833]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwr7&noti=Price&ocid=hpmsn
                    - generic [ref=e834]:
                      - generic [ref=e835]:
                        - generic [ref=e836]: Silver
                        - img "Silver" [ref=e837]
                      - generic [ref=e839]: Rising fast
                    - generic [ref=e844]:
                      - generic [ref=e845]: ‎+2.04%‎
                      - generic [ref=e846]: "50.28"
                    - button "Add to watchlist" [ref=e849]:
                      - img [ref=e850]
                  - link "Citigroup Inc. C ‎-2.48%‎ 122.64" [ref=e854]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a1p3ww&ocid=hpmsn
                    - generic [ref=e855]:
                      - generic [ref=e857]: Citigroup Inc.
                      - generic [ref=e859]: C
                    - generic [ref=e864]:
                      - generic [ref=e865]: ‎-2.48%‎
                      - generic [ref=e866]: "122.64"
                    - button "Add to watchlist" [ref=e869]:
                      - img [ref=e870]
                - generic [ref=e874]:
                  - generic [ref=e875]:
                    - generic "Previous" [ref=e876]:
                      - button "Previous" [ref=e877]
                    - tablist [ref=e879]:
                      - tab "Page 1" [selected] [ref=e880]
                      - tab "Page 2" [ref=e882]
                      - tab "Page 3" [ref=e884]
                      - tab "Page 4" [ref=e886]
                      - tab "Page 5" [ref=e888]
                      - tab "Page 6"
                      - tab "Page 7"
                    - generic "Next" [ref=e890]:
                      - button "Next" [ref=e891]
                  - link "See watchlist suggestions" [ref=e893]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - 'article "PM Modi welcomes launch of Varanasi-New Delhi Vande Bharat sleeper train: Check route, schedule, fare" [ref=e894] [cursor=pointer]':
              - generic [ref=e896]:
                - img [ref=e897]
                - generic [ref=e898]:
                  - generic [ref=e899]:
                    - generic [ref=e900]:
                      - generic [ref=e901]:
                        - img [ref=e902]
                        - generic [ref=e903]: News18
                      - generic [ref=e904]: ·
                      - generic [ref=e905]: 2d
                    - 'link "PM Modi welcomes launch of Varanasi-New Delhi Vande Bharat sleeper train: Check route, schedule, fare, News18" [ref=e906]':
                      - /url: https://www.msn.com/en-in/news/other/pm-modi-welcomes-launch-of-varanasi-new-delhi-vande-bharat-sleeper-train-check-route-schedule-fare/ar-AA2gtnSX
                      - text: "PM Modi welcomes launch of Varanasi-New Delhi Vande Bharat sleeper train: Check route, schedule, fare"
                  - 'generic "PM Modi welcomes launch of Varanasi-New Delhi Vande Bharat sleeper train: Check route, schedule, fare" [ref=e909]':
                    - generic [ref=e911]:
                      - generic [ref=e912]:
                        - button "79 Likes" [ref=e913]:
                          - generic [ref=e914]:
                            - img [ref=e915]
                            - generic [ref=e917]: "79"
                        - button "Dislike" [ref=e918]:
                          - img [ref=e920]
                      - link "Start the conversation" [ref=e923]:
                        - /url: https://www.msn.com/en-in/news/other/pm-modi-welcomes-launch-of-varanasi-new-delhi-vande-bharat-sleeper-train-check-route-schedule-fare/ar-AA2gtnSX#comments
                        - button "Start the conversation" [ref=e924]:
                          - img [ref=e925]
                - generic [ref=e927]:
                  - button "Hide this story" [ref=e928]:
                    - img [ref=e929]
                    - text: Hide this story
                  - button "See more" [ref=e930]:
                    - img [ref=e931]
            - article "Vijay minister Aadhav Arjuna calls for separate Tamil Nadu flag on par with tricolor, triggers row" [ref=e932] [cursor=pointer]:
              - generic [ref=e934]:
                - img [ref=e935]
                - generic [ref=e936]:
                  - generic [ref=e937]:
                    - generic [ref=e938]:
                      - generic [ref=e939]:
                        - img [ref=e940]
                        - generic [ref=e941]: Moneycontrol
                      - generic [ref=e942]: ·
                      - generic [ref=e943]: 8h
                    - link "Vijay minister Aadhav Arjuna calls for separate Tamil Nadu flag on par with tricolor, triggers row, Moneycontrol" [ref=e944]:
                      - /url: https://www.msn.com/en-in/news/other/vijay-minister-aadhav-arjuna-calls-for-separate-tamil-nadu-flag-on-par-with-tricolor-triggers-row/ar-AA2gyE9g
                      - text: Vijay minister Aadhav Arjuna calls for separate Tamil Nadu flag on par with tricolor, triggers row
                  - generic "Vijay minister Aadhav Arjuna calls for separate Tamil Nadu flag on par with tricolor, triggers row" [ref=e947]:
                    - generic [ref=e949]:
                      - generic [ref=e950]:
                        - button "24 Likes" [ref=e951]:
                          - generic [ref=e952]:
                            - img [ref=e953]
                            - generic [ref=e955]: "24"
                        - button "Dislike" [ref=e956]:
                          - img [ref=e958]
                      - link "View comments 5 Comment" [ref=e961]:
                        - /url: https://www.msn.com/en-in/news/other/vijay-minister-aadhav-arjuna-calls-for-separate-tamil-nadu-flag-on-par-with-tricolor-triggers-row/ar-AA2gyE9g#comments
                        - button "View comments 5 Comment" [ref=e962]:
                          - img [ref=e963]
                        - generic [ref=e965]: "5"
                - generic [ref=e966]:
                  - button "Hide this story" [ref=e967]:
                    - img [ref=e968]
                    - text: Hide this story
                  - button "See more" [ref=e969]:
                    - img [ref=e970]
            - article [ref=e971] [cursor=pointer]:
              - generic [ref=e977]:
                - generic [ref=e979]:
                  - img "ICC" [ref=e981]
                  - link "ICC" [ref=e982]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b
                    - heading "ICC" [level=2] [ref=e983]
                  - button "More interests" [ref=e984]
                  - generic [ref=e985]:
                    - generic "Live now" [ref=e986]:
                      - button "Live now" [ref=e987]
                    - button "More options" [ref=e988]
                - generic [ref=e992]:
                  - link "AFG 81/3 (8.1) VS ZIM 79 (14.3) AFG won by 7 wickets" [ref=e993]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-274662?ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b
                    - generic "AFG" [ref=e994]:
                      - generic [ref=e995]:
                        - img [ref=e997]
                        - generic [ref=e999]:
                          - generic [ref=e1001]: AFG
                          - button "Click to follow AFG":
                            - generic:
                              - img
                        - generic [ref=e1003]:
                          - generic [ref=e1004]: 81/3
                          - generic [ref=e1005]: (8.1)
                    - generic [ref=e1009]: VS
                    - generic "ZIM" [ref=e1010]:
                      - generic [ref=e1011]:
                        - generic [ref=e1012]:
                          - generic [ref=e1014]: ZIM
                          - button "Click to follow ZIM":
                            - generic:
                              - img
                        - generic [ref=e1016]:
                          - generic [ref=e1017]: "79"
                          - generic [ref=e1018]: (14.3)
                    - generic "AFG won by 7 wickets" [ref=e1021]
                  - link "NZ 4 Nov 2:00 am IND Eden Park, Auckland" [ref=e1022]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-271651?ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b
                    - generic "NZ" [ref=e1023]:
                      - generic [ref=e1025]:
                        - generic [ref=e1027]: NZ
                        - button "Click to follow NZ":
                          - generic:
                            - img
                    - generic [ref=e1030]:
                      - generic [ref=e1031]: 4 Nov
                      - generic [ref=e1032]: 2:00 am
                    - generic "IND" [ref=e1033]:
                      - generic [ref=e1035]:
                        - generic [ref=e1037]: IND
                        - button "Click to follow IND":
                          - generic:
                            - img
                    - generic "Eden Park, Auckland" [ref=e1040]
                  - link "AUS 115/5 (6.0) VS AFG 119/2 (5.1) AFG won by 4 wickets" [ref=e1041]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-275395?ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b
                    - generic "AUS" [ref=e1042]:
                      - generic [ref=e1043]:
                        - generic [ref=e1044]:
                          - generic [ref=e1046]: AUS
                          - button "Click to follow AUS":
                            - generic:
                              - img
                        - generic [ref=e1048]:
                          - generic [ref=e1049]: 115/5
                          - generic [ref=e1050]: (6.0)
                    - generic [ref=e1054]: VS
                    - generic "AFG" [ref=e1055]:
                      - generic [ref=e1056]:
                        - img [ref=e1058]
                        - generic [ref=e1060]:
                          - generic [ref=e1062]: AFG
                          - button "Click to follow AFG":
                            - generic:
                              - img
                        - generic [ref=e1064]:
                          - generic [ref=e1065]: 119/2
                          - generic [ref=e1066]: (5.1)
                    - generic "AFG won by 4 wickets" [ref=e1069]
                - generic [ref=e1071]:
                  - generic [ref=e1072]:
                    - generic "Previous" [ref=e1073]:
                      - button "Previous" [ref=e1074]
                    - tablist [ref=e1076]:
                      - tab "Page 1" [selected] [ref=e1077]
                      - tab "Page 2" [ref=e1079]
                      - tab "Page 3" [ref=e1081]
                      - tab "Page 4" [ref=e1083]
                      - tab "Page 5" [ref=e1085]
                      - tab "Page 6"
                      - tab "Page 7"
                      - tab "Page 8"
                      - tab "Page 9"
                      - tab "Page 10"
                      - tab "Page 11"
                    - generic "Next" [ref=e1087]:
                      - button "Next" [ref=e1088]
                  - link "See more ICC" [ref=e1090]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6ae873a1966143f5a7671acea052c54b
            - 'article "Shah Rukh Khan turns 61: From eating 1 meal a day to hitting gym for just half hour, how the actor stays fit and toned" [ref=e1091] [cursor=pointer]':
              - generic [ref=e1093]:
                - img [ref=e1094]
                - generic [ref=e1095]:
                  - generic [ref=e1096]:
                    - generic [ref=e1097]:
                      - generic [ref=e1098]:
                        - img [ref=e1099]
                        - generic [ref=e1100]: Hindustan Times
                      - generic [ref=e1101]: ·
                      - generic [ref=e1102]: 5h
                    - 'link "Shah Rukh Khan turns 61: From eating 1 meal a day to hitting gym for just half hour, how the actor stays fit and toned, Hindustan Times" [ref=e1103]':
                      - /url: https://www.msn.com/en-in/entertainment/celebrities/shah-rukh-khan-turns-61-from-eating-1-meal-a-day-to-hitting-gym-for-just-half-hour-how-the-actor-stays-fit-and-toned/ar-AA2gyMOi
                      - text: "Shah Rukh Khan turns 61: From eating 1 meal a day to hitting gym for just half hour, how the actor stays fit and toned"
                  - 'generic "Shah Rukh Khan turns 61: From eating 1 meal a day to hitting gym for just half hour, how the actor stays fit and toned" [ref=e1106]':
                    - generic [ref=e1108]:
                      - generic [ref=e1109]:
                        - button "46 Likes" [ref=e1110]:
                          - generic [ref=e1111]:
                            - img [ref=e1112]
                            - generic [ref=e1114]: "46"
                        - button "Dislike" [ref=e1115]:
                          - img [ref=e1117]
                      - link "Start the conversation" [ref=e1120]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/shah-rukh-khan-turns-61-from-eating-1-meal-a-day-to-hitting-gym-for-just-half-hour-how-the-actor-stays-fit-and-toned/ar-AA2gyMOi#comments
                        - button "Start the conversation" [ref=e1121]:
                          - img [ref=e1122]
                - generic [ref=e1124]:
                  - button "Hide this story" [ref=e1125]:
                    - img [ref=e1126]
                    - text: Hide this story
                  - button "See more" [ref=e1127]:
                    - img [ref=e1128]
            - article [ref=e1129] [cursor=pointer]
            - article "5 South stars whose impressive educational degrees may surprise you" [ref=e1136] [cursor=pointer]:
              - generic [ref=e1138]:
                - img [ref=e1139]
                - generic [ref=e1140]:
                  - generic [ref=e1141]:
                    - generic [ref=e1143]:
                      - img [ref=e1144]
                      - generic [ref=e1145]: The Times of India
                    - link "5 South stars whose impressive educational degrees may surprise you, The Times of India" [ref=e1146]:
                      - /url: https://www.msn.com/en-in/news/other/5-south-stars-whose-impressive-educational-degrees-may-surprise-you/ar-AA2d7y6U
                      - text: 5 South stars whose impressive educational degrees may surprise you
                  - generic "5 South stars whose impressive educational degrees may surprise you" [ref=e1149]:
                    - generic [ref=e1151]:
                      - generic [ref=e1152]:
                        - button "968 Likes" [ref=e1153]:
                          - generic [ref=e1154]:
                            - img [ref=e1155]
                            - generic [ref=e1157]: "968"
                        - button "Dislike" [ref=e1158]:
                          - img [ref=e1160]
                      - link "View comments 14 Comment" [ref=e1163]:
                        - /url: https://www.msn.com/en-in/news/other/5-south-stars-whose-impressive-educational-degrees-may-surprise-you/ar-AA2d7y6U#comments
                        - button "View comments 14 Comment" [ref=e1164]:
                          - img [ref=e1165]
                        - generic [ref=e1167]: "14"
                - generic [ref=e1168]:
                  - button "Hide this story" [ref=e1169]:
                    - img [ref=e1170]
                    - text: Hide this story
                  - button "See more" [ref=e1171]:
                    - img [ref=e1172]
          - article [ref=e1174]:
            - generic [ref=e1178]:
              - iframe [ref=e1181]:
                - generic [ref=f10e2]:
                  - iframe [ref=f10e3] [cursor=pointer]:
                    - img [ref=f13e1]
                  - iframe [ref=f10e5]:
                    - generic [ref=f11e5]:
                      - img [ref=f11e8]
                      - img [ref=f11e11]
                      - img [ref=f11e14]
                      - img [ref=f11e15]
                      - img [ref=f11e18]
                      - img [ref=f11e21]
                  - iframe [ref=f10e6]:
                    
                  - img
              - generic: Sponsored
          - generic [ref=e1182]:
            - article [ref=e1183] [cursor=pointer]:
              - generic [ref=e1188]:
                - generic [ref=e1189]:
                  - generic [ref=e1190]:
                    - link "Recommended videos" [ref=e1191]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e1192]
                    - link "Recommended videos" [ref=e1195]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e1196]:
                    - generic:
                      - link "See more" [ref=e1197]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e1198]:
                        - button "More options" [ref=e1199]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e1201]:
                  - generic [ref=e1203]:
                    - generic [ref=e1205]:
                      - generic:
                        - article "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [ref=e1208]:
                          - generic [ref=e1209]:
                            - img "Trevor Noah Breaks Down the Real Reason Idris Elba could NOT play James Bond Thumbnail" [ref=e1211]
                            - generic [ref=e1213]: 09:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1214]:
                              - generic [ref=e1215]:
                                - img "Trevor Noah" [ref=e1216]
                                - generic [ref=e1217]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1218]
                                    - generic [ref=e1219]: ·
                                    - generic [ref=e1220]: 3d
                              - link "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [ref=e1221]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/trevor-noah-breaks-down-the-real-reason-idris-elba-could-not-play-james-bond/vi-AA2gmHAB?ocid=hpmsn
                                - heading "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [level=2] [ref=e1222]:
                                  - generic: Trevor Noah breaks down the real reason Idris Elba could not play James Bond
                            - button "See more" [ref=e1226]
                        - article "She sang “Get rid of Putin” in a Moscow cathedral - Listen to what happened afterwards" [ref=e1229]:
                          - generic [ref=e1230]:
                            - img "She Sang “Get Rid of Putin” in a Moscow Cathedral - Listen to what happened afterwards" [ref=e1232]
                            - generic [ref=e1234]: 13:05
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1235]:
                              - generic [ref=e1236]:
                                - img "TED" [ref=e1237]
                                - generic [ref=e1238]:
                                  - generic:
                                    - generic "TED" [ref=e1239]
                                    - generic [ref=e1240]: ·
                                    - generic [ref=e1241]: 3d
                              - link "She sang “Get rid of Putin” in a Moscow cathedral - Listen to what happened afterwards" [ref=e1242]:
                                - /url: https://www.msn.com/en-in/news/other/she-sang-get-rid-of-putin-in-a-moscow-cathedral-listen-to-what-happened-afterwards/vi-AA2doFSr?ocid=hpmsn
                                - heading "She sang “Get rid of Putin” in a Moscow cathedral - Listen to what happened afterwards" [level=2] [ref=e1243]:
                                  - generic: She sang “Get rid of Putin” in a Moscow cathedral - Listen to what happened afterwards
                            - button "See more" [ref=e1247]
                        - article "Watch a $100 million stealth fighter stop in midair and drop straight down" [ref=e1250]:
                          - generic [ref=e1251]:
                            - img "Watch A $100 Million Stealth Fighter Stop In Midair And Drop Straight Down" [ref=e1253]
                            - generic [ref=e1255]: 20:35
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1256]:
                              - generic [ref=e1257]:
                                - img "Sam Eckholm" [ref=e1258]
                                - generic [ref=e1259]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1260]
                                    - generic [ref=e1261]: ·
                                    - generic [ref=e1262]: 1h
                              - link "Watch a $100 million stealth fighter stop in midair and drop straight down" [ref=e1263]:
                                - /url: https://www.msn.com/en-in/technology/aviation/watch-a-100-million-stealth-fighter-stop-in-midair-and-drop-straight-down/vi-AA2aWVQI?ocid=hpmsn
                                - heading "Watch a $100 million stealth fighter stop in midair and drop straight down" [level=2] [ref=e1264]:
                                  - generic: Watch a $100 million stealth fighter stop in midair and drop straight down
                            - button "See more" [ref=e1268]
                        - article "Trevor Noah’s NYC debut - How a night of laughs turned into a deep reflection on race in America" [ref=e1271]:
                          - generic [ref=e1272]:
                            - img "Trevor Noah’s NYC Debut - How a Night of Laughs Turned into a Deep Reflection on Race in America Thumbnail" [ref=e1274]
                            - generic [ref=e1276]: 08:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1277]:
                              - generic [ref=e1278]:
                                - img "Trevor Noah" [ref=e1279]
                                - generic [ref=e1280]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1281]
                                    - generic [ref=e1282]: ·
                                    - generic [ref=e1283]: 3w
                              - link "Trevor Noah’s NYC debut - How a night of laughs turned into a deep reflection on race in America" [ref=e1284]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/trevor-noah-s-nyc-debut-how-a-night-of-laughs-turned-into-a-deep-reflection-on-race-in-america/vi-AA2dFE5z?ocid=hpmsn
                                - heading "Trevor Noah’s NYC debut - How a night of laughs turned into a deep reflection on race in America" [level=2] [ref=e1285]:
                                  - generic: Trevor Noah’s NYC debut - How a night of laughs turned into a deep reflection on race in America
                            - button "See more" [ref=e1289]
                        - article [ref=e1292]:
                          - generic [ref=e1293]:
                            - img "Watch a $200 Warship Hide Its 57mm Gun - Then Open Fire" [ref=e1295]
                            - generic [ref=e1297]: 22:13
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1298]:
                              - generic [ref=e1299]:
                                - img "Sam Eckholm" [ref=e1300]
                                - generic [ref=e1301]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1302]
                                    - generic [ref=e1303]: ·
                                    - generic [ref=e1304]: 2h
                              - link "Watch a $200 warship hide its 57mm gun - then open fire" [ref=e1305]:
                                - /url: https://www.msn.com/en-in/news/other/watch-a-200-warship-hide-its-57mm-gun-then-open-fire/vi-AA2aRkq0?ocid=hpmsn
                                - heading "Watch a $200 warship hide its 57mm gun - then open fire" [level=2] [ref=e1306]:
                                  - generic: Watch a $200 warship hide its 57mm gun - then open fire
                            - button "See more" [ref=e1310]
                        - article "Watch a man dangle his legs from a C-130 military plane during low-level mountain flying" [ref=e1313]:
                          - generic [ref=e1314]:
                            - img "Watch a Man Dangle His Legs From a C-130 Military Plane During Low-Level Mountain Flying" [ref=e1316]
                            - generic [ref=e1318]: 15:13
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1319]:
                              - generic [ref=e1320]:
                                - img "Sam Eckholm" [ref=e1321]
                                - generic [ref=e1322]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1323]
                                    - generic [ref=e1324]: ·
                                    - generic [ref=e1325]: 2h
                              - link "Watch a man dangle his legs from a C-130 military plane during low-level mountain flying" [ref=e1326]:
                                - /url: https://www.msn.com/en-in/news/other/watch-a-man-dangle-his-legs-from-a-c-130-military-plane-during-low-level-mountain-flying/vi-AA2gzMBE?ocid=hpmsn
                                - heading "Watch a man dangle his legs from a C-130 military plane during low-level mountain flying" [level=2] [ref=e1327]:
                                  - generic: Watch a man dangle his legs from a C-130 military plane during low-level mountain flying
                            - button "See more" [ref=e1331]
                        - article "Watch the real Darkstar up close - the hypersonic jet that stunned Top Gun fans" [ref=e1334]:
                          - generic [ref=e1335]:
                            - img "Watch the Real Darkstar Up Close - The Hypersonic Jet That Stunned Top Gun Fans" [ref=e1337]
                            - generic [ref=e1339]: 12:56
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1340]:
                              - generic [ref=e1341]:
                                - img "Sam Eckholm" [ref=e1342]
                                - generic [ref=e1343]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1344]
                                    - generic [ref=e1345]: ·
                                    - generic [ref=e1346]: 1h
                              - link "Watch the real Darkstar up close - the hypersonic jet that stunned Top Gun fans" [ref=e1347]:
                                - /url: https://www.msn.com/en-in/entertainment/general/watch-the-real-darkstar-up-close-the-hypersonic-jet-that-stunned-top-gun-fans/vi-AA1VDCVW?ocid=hpmsn
                                - heading "Watch the real Darkstar up close - the hypersonic jet that stunned Top Gun fans" [level=2] [ref=e1348]:
                                  - generic: Watch the real Darkstar up close - the hypersonic jet that stunned Top Gun fans
                            - button "See more" [ref=e1352]
                        - link "See more" [ref=e1354]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1355]
                          - text: See more
                    - button "next" [ref=e1359]:
                      - img [ref=e1362]
            - article "Cyclone 'Murasu' forms over Bay of Bengal; southern Odisha, Andhra power utilities on high alert" [ref=e1364] [cursor=pointer]:
              - generic [ref=e1366]:
                - img [ref=e1367]
                - generic [ref=e1368]:
                  - generic [ref=e1369]:
                    - generic [ref=e1370]:
                      - generic [ref=e1371]:
                        - img [ref=e1372]
                        - generic [ref=e1373]: NDTV Profit
                      - generic [ref=e1374]: ·
                      - generic [ref=e1375]: 18h
                    - link "Cyclone 'Murasu' forms over Bay of Bengal; southern Odisha, Andhra power utilities on high alert, NDTV Profit" [ref=e1376]:
                      - /url: https://www.msn.com/en-in/news/other/cyclone-murasu-forms-over-bay-of-bengal-southern-odisha-andhra-power-utilities-on-high-alert/ar-AA2gxCQf
                      - text: Cyclone 'Murasu' forms over Bay of Bengal; southern Odisha, Andhra power utilities on high alert
                  - generic "Cyclone 'Murasu' forms over Bay of Bengal; southern Odisha, Andhra power utilities on high alert" [ref=e1379]:
                    - generic [ref=e1381]:
                      - generic [ref=e1382]:
                        - button "6 Likes" [ref=e1383]:
                          - generic [ref=e1384]:
                            - img [ref=e1385]
                            - generic [ref=e1387]: "6"
                        - button "Dislike" [ref=e1388]:
                          - img [ref=e1390]
                      - link "Start the conversation" [ref=e1393]:
                        - /url: https://www.msn.com/en-in/news/other/cyclone-murasu-forms-over-bay-of-bengal-southern-odisha-andhra-power-utilities-on-high-alert/ar-AA2gxCQf#comments
                        - button "Start the conversation" [ref=e1394]:
                          - img [ref=e1395]
                - generic [ref=e1397]:
                  - button "Hide this story" [ref=e1398]:
                    - img [ref=e1399]
                    - text: Hide this story
                  - button "See more" [ref=e1400]:
                    - img [ref=e1401]
            - 'article "''Go sell ice cream'': AR Rahman reacts to Ramayana music criticism" [ref=e1402] [cursor=pointer]':
              - generic [ref=e1404]:
                - img [ref=e1405]
                - generic [ref=e1406]:
                  - generic [ref=e1407]:
                    - generic [ref=e1408]:
                      - generic [ref=e1409]:
                        - img [ref=e1410]
                        - generic [ref=e1411]: NDTV
                      - generic [ref=e1412]: ·
                      - generic [ref=e1413]: 6h
                    - 'link "''Go sell ice cream'': AR Rahman reacts to Ramayana music criticism, NDTV" [ref=e1414]':
                      - /url: https://www.msn.com/en-in/entertainment/music/go-sell-ice-cream-ar-rahman-reacts-to-ramayana-music-criticism/ar-AA2gyHc6
                      - text: "'Go sell ice cream': AR Rahman reacts to Ramayana music criticism"
                  - 'generic "''Go sell ice cream'': AR Rahman reacts to Ramayana music criticism" [ref=e1417]':
                    - generic [ref=e1419]:
                      - generic [ref=e1420]:
                        - button "25 Likes" [ref=e1421]:
                          - generic [ref=e1422]:
                            - img [ref=e1423]
                            - generic [ref=e1425]: "25"
                        - button "Dislike" [ref=e1426]:
                          - img [ref=e1428]
                      - link "View comments 10 Comment" [ref=e1431]:
                        - /url: https://www.msn.com/en-in/entertainment/music/go-sell-ice-cream-ar-rahman-reacts-to-ramayana-music-criticism/ar-AA2gyHc6#comments
                        - button "View comments 10 Comment" [ref=e1432]:
                          - img [ref=e1433]
                        - generic [ref=e1435]: "10"
                - generic [ref=e1436]:
                  - button "Hide this story" [ref=e1437]:
                    - img [ref=e1438]
                    - text: Hide this story
                  - button "See more" [ref=e1439]:
                    - img [ref=e1440]
            - 'article "Don''t need lessons on Diwali celebration: Mumbai BJP chief, MLC slam Dia Mirza''s campaign; BMC deletes video" [ref=e1441] [cursor=pointer]':
              - generic [ref=e1443]:
                - img [ref=e1444]
                - generic [ref=e1445]:
                  - generic [ref=e1446]:
                    - generic [ref=e1447]:
                      - generic [ref=e1448]:
                        - img [ref=e1449]
                        - generic [ref=e1450]: ABP - Live
                      - generic [ref=e1451]: ·
                      - generic [ref=e1452]: 3h
                    - 'link "Don''t need lessons on Diwali celebration: Mumbai BJP chief, MLC slam Dia Mirza''s campaign; BMC deletes video, ABP - Live" [ref=e1453]':
                      - /url: https://www.msn.com/en-in/news/other/don-t-need-lessons-on-diwali-celebration-mumbai-bjp-chief-mlc-slam-dia-mirza-s-campaign-bmc-deletes-video/ar-AA2gztAT
                      - text: "Don't need lessons on Diwali celebration: Mumbai BJP chief, MLC slam Dia Mirza's campaign; BMC deletes video"
                  - 'generic "Don''t need lessons on Diwali celebration: Mumbai BJP chief, MLC slam Dia Mirza''s campaign; BMC deletes video" [ref=e1456]':
                    - generic [ref=e1458]:
                      - generic [ref=e1459]:
                        - button "50 Likes" [ref=e1460]:
                          - generic [ref=e1461]:
                            - img [ref=e1462]
                            - generic [ref=e1464]: "50"
                        - button "Dislike" [ref=e1465]:
                          - img [ref=e1467]
                      - link "View comments 10 Comment" [ref=e1470]:
                        - /url: https://www.msn.com/en-in/news/other/don-t-need-lessons-on-diwali-celebration-mumbai-bjp-chief-mlc-slam-dia-mirza-s-campaign-bmc-deletes-video/ar-AA2gztAT#comments
                        - button "View comments 10 Comment" [ref=e1471]:
                          - img [ref=e1472]
                        - generic [ref=e1474]: "10"
                - generic [ref=e1475]:
                  - button "Hide this story" [ref=e1476]:
                    - img [ref=e1477]
                    - text: Hide this story
                  - button "See more" [ref=e1478]:
                    - img [ref=e1479]
            - article "Psychology says people who check their phone immediately after waking up aren't just addicted" [ref=e1480] [cursor=pointer]:
              - generic [ref=e1482]:
                - img [ref=e1483]
                - generic [ref=e1484]:
                  - generic [ref=e1485]:
                    - generic [ref=e1487]:
                      - img [ref=e1488]
                      - generic [ref=e1489]: India Today
                    - link "Psychology says people who check their phone immediately after waking up aren't just addicted, India Today" [ref=e1490]:
                      - /url: https://www.msn.com/en-in/health/general/psychology-says-people-who-check-their-phone-immediately-after-waking-up-aren-t-just-addicted/ar-AA28z7dS
                      - text: Psychology says people who check their phone immediately after waking up aren't just addicted
                  - generic "Psychology says people who check their phone immediately after waking up aren't just addicted" [ref=e1493]:
                    - generic [ref=e1495]:
                      - generic [ref=e1496]:
                        - button "3,816 Likes" [ref=e1497]:
                          - generic [ref=e1498]:
                            - img [ref=e1499]
                            - generic [ref=e1501]: 4k
                        - button "Dislike" [ref=e1502]:
                          - img [ref=e1504]
                      - link "View comments 31 Comment" [ref=e1507]:
                        - /url: https://www.msn.com/en-in/health/general/psychology-says-people-who-check-their-phone-immediately-after-waking-up-aren-t-just-addicted/ar-AA28z7dS#comments
                        - button "View comments 31 Comment" [ref=e1508]:
                          - img [ref=e1509]
                        - generic [ref=e1511]: "31"
                - generic [ref=e1512]:
                  - button "Hide this story" [ref=e1513]:
                    - img [ref=e1514]
                    - text: Hide this story
                  - button "See more" [ref=e1515]:
                    - img [ref=e1516]
            - article "Jailer 2 is only behind Dhurandhar 2 in highest grossing movies of 2026 list; how much has it earned in 18 days?" [ref=e1517] [cursor=pointer]:
              - generic [ref=e1519]:
                - img [ref=e1520]
                - generic [ref=e1521]:
                  - generic [ref=e1522]:
                    - generic [ref=e1523]:
                      - generic [ref=e1524]:
                        - img [ref=e1525]
                        - generic [ref=e1526]: The Daily Jagran
                      - generic [ref=e1527]: ·
                      - generic [ref=e1528]: 6h
                    - link "Jailer 2 is only behind Dhurandhar 2 in highest grossing movies of 2026 list; how much has it earned in 18 days?, The Daily Jagran" [ref=e1529]:
                      - /url: https://www.msn.com/en-in/entertainment/movies/jailer-2-is-only-behind-dhurandhar-2-in-highest-grossing-movies-of-2026-list-how-much-has-it-earned-in-18-days/ar-AA2gyrY2
                      - text: Jailer 2 is only behind Dhurandhar 2 in highest grossing movies of 2026 list; how much has it earned in 18 days?
                  - generic "Jailer 2 is only behind Dhurandhar 2 in highest grossing movies of 2026 list; how much has it earned in 18 days?" [ref=e1532]:
                    - generic [ref=e1534]:
                      - generic [ref=e1535]:
                        - button "9 Likes" [ref=e1536]:
                          - generic [ref=e1537]:
                            - img [ref=e1538]
                            - generic [ref=e1540]: "9"
                        - button "Dislike" [ref=e1541]:
                          - img [ref=e1543]
                      - link "Start the conversation" [ref=e1546]:
                        - /url: https://www.msn.com/en-in/entertainment/movies/jailer-2-is-only-behind-dhurandhar-2-in-highest-grossing-movies-of-2026-list-how-much-has-it-earned-in-18-days/ar-AA2gyrY2#comments
                        - button "Start the conversation" [ref=e1547]:
                          - img [ref=e1548]
                - generic [ref=e1550]:
                  - button "Hide this story" [ref=e1551]:
                    - img [ref=e1552]
                    - text: Hide this story
                  - button "See more" [ref=e1553]:
                    - img [ref=e1554]
            - article "My friend eats 10 to 12 cloves every day. Is that healthy or harmful?" [ref=e1555] [cursor=pointer]:
              - generic [ref=e1557]:
                - img [ref=e1558]
                - generic [ref=e1559]:
                  - generic [ref=e1560]:
                    - generic [ref=e1561]:
                      - generic [ref=e1562]:
                        - img [ref=e1563]
                        - generic [ref=e1564]: The Indian Express
                      - generic [ref=e1565]: ·
                      - generic [ref=e1566]: 7h
                    - link "My friend eats 10 to 12 cloves every day. Is that healthy or harmful?, The Indian Express" [ref=e1567]:
                      - /url: https://www.msn.com/en-in/food-and-drink/general/my-friend-eats-10-to-12-cloves-every-day-is-that-healthy-or-harmful/ar-AA2gypF1
                      - text: My friend eats 10 to 12 cloves every day. Is that healthy or harmful?
                  - generic "My friend eats 10 to 12 cloves every day. Is that healthy or harmful?" [ref=e1570]:
                    - generic [ref=e1572]:
                      - generic [ref=e1573]:
                        - button "26 Likes" [ref=e1574]:
                          - generic [ref=e1575]:
                            - img [ref=e1576]
                            - generic [ref=e1578]: "26"
                        - button "Dislike" [ref=e1579]:
                          - img [ref=e1581]
                      - link "Start the conversation" [ref=e1584]:
                        - /url: https://www.msn.com/en-in/food-and-drink/general/my-friend-eats-10-to-12-cloves-every-day-is-that-healthy-or-harmful/ar-AA2gypF1#comments
                        - button "Start the conversation" [ref=e1585]:
                          - img [ref=e1586]
                - generic [ref=e1588]:
                  - button "Hide this story" [ref=e1589]:
                    - img [ref=e1590]
                    - text: Hide this story
                  - button "See more" [ref=e1591]:
                    - img [ref=e1592]
            - 'article "Wedding feast turns nightmare in Mumbai: 27 fall ill, newlyweds among them" [ref=e1593] [cursor=pointer]':
              - generic [ref=e1595]:
                - img [ref=e1596]
                - generic [ref=e1597]:
                  - generic [ref=e1598]:
                    - generic [ref=e1599]:
                      - generic [ref=e1600]:
                        - img [ref=e1601]
                        - generic [ref=e1602]: NDTV Profit
                      - generic [ref=e1603]: ·
                      - generic [ref=e1604]: 7h
                    - 'link "Wedding feast turns nightmare in Mumbai: 27 fall ill, newlyweds among them, NDTV Profit" [ref=e1605]':
                      - /url: https://www.msn.com/en-in/food-and-drink/general/wedding-feast-turns-nightmare-in-mumbai-27-fall-ill-newlyweds-among-them/ar-AA2gyRav
                      - text: "Wedding feast turns nightmare in Mumbai: 27 fall ill, newlyweds among them"
                  - 'generic "Wedding feast turns nightmare in Mumbai: 27 fall ill, newlyweds among them" [ref=e1608]':
                    - generic [ref=e1610]:
                      - generic [ref=e1611]:
                        - button "14 Likes" [ref=e1612]:
                          - generic [ref=e1613]:
                            - img [ref=e1614]
                            - generic [ref=e1616]: "14"
                        - button "Dislike" [ref=e1617]:
                          - img [ref=e1619]
                      - link "Start the conversation" [ref=e1622]:
                        - /url: https://www.msn.com/en-in/food-and-drink/general/wedding-feast-turns-nightmare-in-mumbai-27-fall-ill-newlyweds-among-them/ar-AA2gyRav#comments
                        - button "Start the conversation" [ref=e1623]:
                          - img [ref=e1624]
                - generic [ref=e1626]:
                  - button "Hide this story" [ref=e1627]:
                    - img [ref=e1628]
                    - text: Hide this story
                  - button "See more" [ref=e1629]:
                    - img [ref=e1630]
            - article "NASA grew corn in space but something \"strange\" happened—here's what scientists found" [ref=e1631] [cursor=pointer]:
              - generic [ref=e1633]:
                - img [ref=e1634]
                - generic [ref=e1635]:
                  - generic [ref=e1636]:
                    - generic [ref=e1638]:
                      - img [ref=e1639]
                      - generic [ref=e1640]: Moneycontrol
                    - link "NASA grew corn in space but something \"strange\" happened—here's what scientists found, Moneycontrol" [ref=e1641]:
                      - /url: https://www.msn.com/en-in/science/agronomy/nasa-grew-corn-in-space-but-something-strange-happened-here-s-what-scientists-found/ar-AA2bkg3b
                      - text: NASA grew corn in space but something "strange" happened—here's what scientists found
                  - generic "NASA grew corn in space but something \"strange\" happened—here's what scientists found" [ref=e1644]:
                    - generic [ref=e1646]:
                      - generic [ref=e1647]:
                        - button "136 Likes" [ref=e1648]:
                          - generic [ref=e1649]:
                            - img [ref=e1650]
                            - generic [ref=e1652]: "136"
                        - button "Dislike" [ref=e1653]:
                          - img [ref=e1655]
                      - link "View comments 1 Comment" [ref=e1658]:
                        - /url: https://www.msn.com/en-in/science/agronomy/nasa-grew-corn-in-space-but-something-strange-happened-here-s-what-scientists-found/ar-AA2bkg3b#comments
                        - button "View comments 1 Comment" [ref=e1659]:
                          - img [ref=e1660]
                        - generic [ref=e1662]: "1"
                - generic [ref=e1663]:
                  - button "Hide this story" [ref=e1664]:
                    - img [ref=e1665]
                    - text: Hide this story
                  - button "See more" [ref=e1666]:
                    - img [ref=e1667]
    - contentinfo [ref=e1670]:
      - generic "Feedback" [ref=e1672] [cursor=pointer]:
        - button "Feedback" [ref=e1673]:
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