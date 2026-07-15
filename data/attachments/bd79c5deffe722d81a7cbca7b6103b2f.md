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
        - 'link "Washington: Heat Advisory, Clear, 22 °C" [ref=e19] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
          - generic "Washington, Virginia, United States Click here to see more information" [ref=e20]: Washington
          - img "Clear" [ref=e22]
          - generic [ref=e23]:
            - generic [ref=e24]: ‎22‎
            - generic [ref=e26]: ‎°C‎
        - generic "Open settings" [ref=e30] [cursor=pointer]:
          - button "Open settings" [ref=e31]:
            - generic:
              - generic:
                - generic:
                  - generic: Page settings
                  - generic:
                    - img
        - generic "Sign In" [ref=e35]:
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
          - generic "Open Copilot" [ref=e49] [cursor=pointer]:
            - button "Open Copilot" [ref=e50]:
              - generic:
                - generic:
                  - generic:
                    - img "Open Copilot"
  - generic [ref=e51]:
    - generic [ref=e52]:
      - generic [ref=e57]:
        - list [ref=e60]:
          - listitem [ref=e61]:
            - link "Outlook.com" [ref=e64] [cursor=pointer]:
              - /url: https://outlook.com
              - generic [ref=e68]: Outlook.com
          - listitem [ref=e69]:
            - link "Flipkart" [ref=e72] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=401531&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e75]:
                - generic [ref=e76]: Flipkart
                - generic [ref=e78]: Sponsored
          - listitem [ref=e79]:
            - link "Find a tutor" [ref=e82] [cursor=pointer]:
              - /url: https://www.bing.com/pros?FORM=BPIMNS
              - generic [ref=e86]: Find a tutor
          - listitem [ref=e87]:
            - link "Booking.com" [ref=e90] [cursor=pointer]:
              - /url: https://www.booking.com/index.html?aid=1624937&label=enin-msn-hp-mestripe
              - generic [ref=e93]:
                - generic [ref=e94]: Booking.com
                - generic [ref=e96]: Sponsored
          - listitem [ref=e97]:
            - link "Ajio" [ref=e100] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=393141&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e103]:
                - generic [ref=e104]: Ajio
                - generic [ref=e106]: Sponsored
          - listitem [ref=e107]:
            - link "Facebook" [ref=e110] [cursor=pointer]:
              - /url: https://www.facebook.com
              - generic [ref=e114]: Facebook
          - listitem [ref=e115]:
            - link "Microsoft 365" [ref=e118] [cursor=pointer]:
              - /url: https://www.office.com/?omkt=en-IN
              - generic [ref=e122]: Microsoft 365
          - listitem [ref=e123]:
            - link "X" [ref=e126] [cursor=pointer]:
              - /url: https://x.com
              - generic [ref=e130]: X
          - listitem [ref=e131]:
            - link "OneDrive" [ref=e134] [cursor=pointer]:
              - /url: https://onedrive.live.com/?wt.mc_id=oo_msn_msnhomepage_header
              - generic [ref=e138]: OneDrive
          - listitem [ref=e139]:
            - link "Skype" [ref=e142] [cursor=pointer]:
              - /url: https://www.skype.com/
              - generic [ref=e146]: Skype
          - listitem [ref=e147]:
            - link "OneNote" [ref=e150] [cursor=pointer]:
              - /url: https://www.onenote.com/notebooks?WT.mc_id=MSN_OneNote_TopMenu&auth=1&wdorigin=msn
              - generic [ref=e154]: OneNote
          - listitem [ref=e155]:
            - link "Maps" [ref=e158] [cursor=pointer]:
              - /url: https://bing.com/maps/?FORM=MSNMAP
              - generic [ref=e162]: Maps
          - listitem [ref=e163]:
            - link "Microsoft Store" [ref=e166] [cursor=pointer]:
              - /url: https://www.microsoft.com/en-in
              - generic [ref=e170]: Microsoft Store
        - button [ref=e171]:
          - img [ref=e174]
      - generic [ref=e176]:
        - banner [ref=e177]
        - generic [ref=e178]:
          - generic [ref=e182]:
            - navigation [ref=e184]:
              - generic [ref=e185]:
                - list [ref=e186]:
                  - listitem [ref=e187]:
                    - link "Discover" [ref=e188] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in
                - list [ref=e189]:
                  - listitem [ref=e190]:
                    - link "News" [ref=e191] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f
                  - listitem [ref=e192]:
                    - link "World Cup" [ref=e193] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in/sports/moments/league/ka-mit?serviceName=contentRetrieverService&query=FIFA%20World%20Cup%202026
              - generic "Show more topics" [ref=e195] [cursor=pointer]:
                - button "Show more topics" [ref=e196]:
                  - generic:
                    - generic:
                      - img
            - generic "Personalize your feed\"" [ref=e198] [cursor=pointer]:
              - button "Personalize your feed\"" [ref=e199]:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic: Personalize
          - button "Make MSN my homepage" [ref=e201] [cursor=pointer]
      - main [ref=e204]:
        - generic [ref=e206]:
          - generic [ref=e207]:
            - generic [ref=e210]:
              - tablist [ref=e212]:
                - tab [ref=e213] [cursor=pointer]
                - tab [ref=e215] [cursor=pointer]
                - tab [ref=e217] [cursor=pointer]
                - tab [ref=e219] [cursor=pointer]
                - tab [ref=e221] [cursor=pointer]
                - tab [selected] [ref=e223] [cursor=pointer]
                - tab [ref=e225] [cursor=pointer]
                - tab [ref=e227] [cursor=pointer]
                - tab [ref=e229] [cursor=pointer]
                - tab [ref=e231] [cursor=pointer]
                - tab [ref=e233] [cursor=pointer]
                - tab [ref=e235] [cursor=pointer]
                - tab [ref=e237] [cursor=pointer]
                - tab [ref=e239] [cursor=pointer]
                - tab [ref=e241] [cursor=pointer]
                - tab [ref=e243] [cursor=pointer]
                - tab [ref=e245] [cursor=pointer]
                - tab [ref=e247] [cursor=pointer]
                - tab [ref=e249] [cursor=pointer]
                - tab [ref=e251] [cursor=pointer]
                - tab [ref=e253] [cursor=pointer]
                - tab [ref=e255] [cursor=pointer]
                - tab [ref=e257] [cursor=pointer]
                - tab [ref=e259] [cursor=pointer]
                - tab [ref=e261] [cursor=pointer]
                - tab [ref=e263] [cursor=pointer]
                - tab [ref=e265] [cursor=pointer]
                - tab [ref=e267] [cursor=pointer]
                - tab [ref=e269] [cursor=pointer]
                - tab [ref=e271] [cursor=pointer]
                - tab [ref=e273] [cursor=pointer]
              - button [ref=e277]
              - button [ref=e280]
              - article "This PC Game is A Must-Have" [ref=e281] [cursor=pointer]:
                - generic [ref=e283]:
                  - img [ref=e284]
                  - generic [ref=e285]:
                    - generic [ref=e286]:
                      - generic [ref=e289]: "RAID: Shadow Legends"
                      - 'link "This PC Game is A Must-Have, RAID: Shadow Legends" [ref=e290]':
                        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=64dccc8c-023a-4fc3-bef8-6dcf3eb0723d&bdc=pu&bidId=5&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=44167189-c604-402b-a8d1-271f9640f2ef&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8jxMZva3pIAuuTIzH32sGdTVUCUwc9WHvdKxS9W9keEX8GCOVIQJUDKi82plcE8_7wJtjHA7vQivN24Vib-Xjq03781KSR9BL8GsfAJwUbVp9QztOANyy6m4vvjUhtSxuNiRsek0bluiMqTfZptxDWGBqokkhk_9SBRmyi8AL8Kcs7VVeF9UUaKMfprf-QOEi61ztYasdu9oPOI98dQ3nct74Wfk%26u%3DaHR0cHMlM2ElMmYlMmZscHMucGxhcml1bS5jb20lMmZlbiUyZmRlc2t0b3AlMmZyYWlkJTJmcmRvJTJmbWVkaWElMmZhbGljZV9tX2YwNThfcHJlbHBfanQzOTAzJTNmcGxpZCUzZDE3ODQyMTElMjZweGwlM2RiaW5nX25hdGl2ZSUyNnB1Ymxpc2hlcmlkJTNkODA3NDU1OTY4Nzk4MjQlMjZwbGFjZW1lbnQlM2QyMzMyNTQ1MTk5NDYwNTI2X2tleXdvcmQlMjZhZHBhcnRuZXJzZXQlM2QxMjkxOTI3NTczNjA0MjUzJTI2Y2xpY2tJZCUzZDY1OTg3YjhjOGEyMDFhNmJlMGU5MTFkYmFiYmViNDNjJTI2bXNjbGtpZCUzZDY1OTg3YjhjOGEyMDFhNmJlMGU5MTFkYmFiYmViNDNjJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkQmluZ19SQURfVVNfTmF0aXZlX0lQc18xNzg0MjExJTI2dXRtX3Rlcm0lM2RrZXl3b3JkJTI2dXRtX2NvbnRlbnQlM2RJUHM%26rlid%3D65987b8c8a201a6be0e911dbabbeb43c&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                        - text: This PC Game is A Must-Have
                    - link "Sponsored" [ref=e292]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=64dccc8c-023a-4fc3-bef8-6dcf3eb0723d&bdc=pu&bidId=5&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=44167189-c604-402b-a8d1-271f9640f2ef&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8jxMZva3pIAuuTIzH32sGdTVUCUwc9WHvdKxS9W9keEX8GCOVIQJUDKi82plcE8_7wJtjHA7vQivN24Vib-Xjq03781KSR9BL8GsfAJwUbVp9QztOANyy6m4vvjUhtSxuNiRsek0bluiMqTfZptxDWGBqokkhk_9SBRmyi8AL8Kcs7VVeF9UUaKMfprf-QOEi61ztYasdu9oPOI98dQ3nct74Wfk%26u%3DaHR0cHMlM2ElMmYlMmZscHMucGxhcml1bS5jb20lMmZlbiUyZmRlc2t0b3AlMmZyYWlkJTJmcmRvJTJmbWVkaWElMmZhbGljZV9tX2YwNThfcHJlbHBfanQzOTAzJTNmcGxpZCUzZDE3ODQyMTElMjZweGwlM2RiaW5nX25hdGl2ZSUyNnB1Ymxpc2hlcmlkJTNkODA3NDU1OTY4Nzk4MjQlMjZwbGFjZW1lbnQlM2QyMzMyNTQ1MTk5NDYwNTI2X2tleXdvcmQlMjZhZHBhcnRuZXJzZXQlM2QxMjkxOTI3NTczNjA0MjUzJTI2Y2xpY2tJZCUzZDY1OTg3YjhjOGEyMDFhNmJlMGU5MTFkYmFiYmViNDNjJTI2bXNjbGtpZCUzZDY1OTg3YjhjOGEyMDFhNmJlMGU5MTFkYmFiYmViNDNjJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkQmluZ19SQURfVVNfTmF0aXZlX0lQc18xNzg0MjExJTI2dXRtX3Rlcm0lM2RrZXl3b3JkJTI2dXRtX2NvbnRlbnQlM2RJUHM%26rlid%3D65987b8c8a201a6be0e911dbabbeb43c&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                  - button "See more" [ref=e294]:
                    - img [ref=e295]
            - article "India welcomes Canada's remark delinking government from Nijjar killing" [ref=e296] [cursor=pointer]:
              - generic [ref=e298]:
                - img [ref=e299]
                - generic [ref=e300]:
                  - generic [ref=e301]:
                    - generic [ref=e302]:
                      - generic [ref=e303]:
                        - img [ref=e304]
                        - generic [ref=e305]: The Times of India
                      - generic [ref=e306]: ·
                      - generic [ref=e307]: 6h
                    - link "India welcomes Canada's remark delinking government from Nijjar killing, The Times of India" [ref=e308]:
                      - /url: https://www.msn.com/en-in/news/other/india-welcomes-canada-s-remark-delinking-government-from-nijjar-killing/ar-AA27V5t7
                      - text: India welcomes Canada's remark delinking government from Nijjar killing
                  - generic "India welcomes Canada's remark delinking government from Nijjar killing" [ref=e311]:
                    - generic [ref=e313]:
                      - generic [ref=e314]:
                        - button "12 Likes" [ref=e315]:
                          - generic [ref=e316]:
                            - img [ref=e317]
                            - generic [ref=e319]: "12"
                        - button "Dislike" [ref=e320]:
                          - img [ref=e322]
                      - link "Start the conversation" [ref=e325]:
                        - /url: https://www.msn.com/en-in/news/other/india-welcomes-canada-s-remark-delinking-government-from-nijjar-killing/ar-AA27V5t7#comments
                        - button "Start the conversation" [ref=e326]:
                          - img [ref=e327]
                - generic [ref=e329]:
                  - button "Hide this story" [ref=e330]:
                    - img [ref=e331]
                    - text: Hide this story
                  - button "See more" [ref=e332]:
                    - img [ref=e333]
            - article [ref=e334] [cursor=pointer]:
              - generic [ref=e338]:
                - generic: Sponsored
            - article "Earn up to 4% APY on eligible account balances" [ref=e339] [cursor=pointer]:
              - generic [ref=e341]:
                - img [ref=e342]
                - generic [ref=e343]:
                  - generic [ref=e344]:
                    - generic [ref=e347]: FOREX.com
                    - link "Earn up to 4% APY on eligible account balances, FOREX.com" [ref=e348]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=d701bf0c-425e-4117-a430-118e856ae3b4&bdc=pu&bidId=5&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=44167189-c604-402b-a8d1-271f9640f2ef&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8bfR4AzozgR709un-JSgMNDVUCUyrEY84-FdJm3gvbZQ9Qy4gTI8CicaQaCicg9tGOWCd83D4OeerJRJh1_LDD4tRC1qF1shT8prF57eOgkTDZl4yRw0pcYLSU1Htla4IPBUa2uM-9C3ZfODzWe8EzLww5Sx2Igd-EP96nKS7ZPdwclu7a__x0KqJjAqoh92Nav2dEKg3ySEuewOJanduMWXQ86s%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZm9yZXguY29tJTJmZW4tdXMlMmZscCUyZmxhcmdlc3QtYnJva2VyJTJmJTNmbXNjbGtpZCUzZGVlODBjNjY2ZGVhYTFiZjM1MmM1YWMzMWZmMzRhYTkx%26rlid%3Dee80c666deaa1bf352c5ac31ff34aa91&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Earn up to 4% APY on eligible account balances
                  - link "Sponsored" [ref=e350]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=d701bf0c-425e-4117-a430-118e856ae3b4&bdc=pu&bidId=5&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=44167189-c604-402b-a8d1-271f9640f2ef&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8bfR4AzozgR709un-JSgMNDVUCUyrEY84-FdJm3gvbZQ9Qy4gTI8CicaQaCicg9tGOWCd83D4OeerJRJh1_LDD4tRC1qF1shT8prF57eOgkTDZl4yRw0pcYLSU1Htla4IPBUa2uM-9C3ZfODzWe8EzLww5Sx2Igd-EP96nKS7ZPdwclu7a__x0KqJjAqoh92Nav2dEKg3ySEuewOJanduMWXQ86s%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZm9yZXguY29tJTJmZW4tdXMlMmZscCUyZmxhcmdlc3QtYnJva2VyJTJmJTNmbXNjbGtpZCUzZGVlODBjNjY2ZGVhYTFiZjM1MmM1YWMzMWZmMzRhYTkx%26rlid%3Dee80c666deaa1bf352c5ac31ff34aa91&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e352]:
                  - img [ref=e353]
            - article [ref=e354] [cursor=pointer]:
              - generic [ref=e360]:
                - generic [ref=e362]:
                  - img "Watchlist suggestions" [ref=e364]
                  - link "Watchlist suggestions" [ref=e365]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e366]
                  - button "More options" [ref=e368]
                - generic [ref=e373]:
                  - link "Nifty Bank Nifty Bank Index Rising fast ‎+1.00%‎ 58,038.90" [ref=e375]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkrnm&noti=Price&ocid=hpmsn
                    - generic [ref=e376]:
                      - generic [ref=e377]:
                        - generic [ref=e378]: Nifty Bank
                        - img "Nifty Bank Index" [ref=e379]
                      - generic [ref=e381]: Rising fast
                    - generic [ref=e386]:
                      - generic [ref=e387]: ‎+1.00%‎
                      - generic [ref=e388]: 58,038.90
                    - button "Add to watchlist" [ref=e391]:
                      - img [ref=e392]
                  - link "24K Gold (10 Grams) - Indian Rupee XAUINR ‎+0.69%‎ 144496" [ref=e396]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&ocid=hpmsn
                    - generic [ref=e397]:
                      - generic [ref=e399]: 24K Gold (10 Grams) - Indian Rupee
                      - generic [ref=e401]: XAUINR
                    - generic [ref=e406]:
                      - generic [ref=e407]: ‎+0.69%‎
                      - generic [ref=e408]: "144496"
                    - button "Add to watchlist" [ref=e411]:
                      - img [ref=e412]
                  - link "Citigroup Inc Citigroup Inc Dropping fast ‎-5.29%‎ 133.27" [ref=e416]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a1p3ww&noti=Price&ocid=hpmsn
                    - generic [ref=e417]:
                      - generic [ref=e418]:
                        - generic [ref=e419]: Citigroup Inc
                        - img "Citigroup Inc" [ref=e420]
                      - generic [ref=e422]: Dropping fast
                    - generic [ref=e427]:
                      - generic [ref=e428]: ‎-5.29%‎
                      - generic [ref=e429]: "133.27"
                    - button "Add to watchlist" [ref=e432]:
                      - img [ref=e433]
                  - link "AT&T Inc T ‎-1.25%‎ 21.28" [ref=e437]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a23www&ocid=hpmsn
                    - generic [ref=e438]:
                      - generic [ref=e440]: AT&T Inc
                      - generic [ref=e442]: T
                    - generic [ref=e447]:
                      - generic [ref=e448]: ‎-1.25%‎
                      - generic [ref=e449]: "21.28"
                    - button "Add to watchlist" [ref=e452]:
                      - img [ref=e453]
                  - link "Adani Power Ltd Adani Power Ltd Dropping fast ‎-1.58%‎ 222.59" [ref=e457]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahgr9c&noti=Price&ocid=hpmsn
                    - generic [ref=e458]:
                      - generic [ref=e459]:
                        - generic [ref=e460]: Adani Power Ltd
                        - img "Adani Power Ltd" [ref=e461]
                      - generic [ref=e463]: Dropping fast
                    - generic [ref=e468]:
                      - generic [ref=e469]: ‎-1.58%‎
                      - generic [ref=e470]: "222.59"
                    - button "Add to watchlist" [ref=e473]:
                      - img [ref=e474]
                - generic [ref=e478]:
                  - generic [ref=e479]:
                    - generic "Previous" [ref=e480]:
                      - button "Previous" [ref=e481]
                    - tablist [ref=e483]:
                      - tab "tab-0" [selected] [ref=e484]
                      - tab "tab-1" [ref=e486]
                      - tab "tab-2" [ref=e488]
                      - tab "tab-3" [ref=e490]
                      - tab "tab-4" [ref=e492]
                      - tab "tab-5"
                      - tab "tab-6"
                    - generic "Next" [ref=e494]:
                      - button "Next" [ref=e495]
                  - link "See watchlist suggestions" [ref=e497]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - article [ref=e498] [cursor=pointer]:
              - generic [ref=e503]:
                - generic [ref=e505]:
                  - link "Top stories" [ref=e507]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a57219c92fc436992911fc995ad3eca&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e508]
                  - button "More options" [ref=e510]
                - list [ref=e513]:
                  - listitem [ref=e514]:
                    - 'link "WION now ''Hey Trump...'': Iran invokes prophets in biblical message to US as war resumes" [ref=e515]':
                      - /url: https://www.msn.com/en-in/news/world/hey-trump-iran-invokes-prophets-in-biblical-message-to-us-as-war-resumes/ar-AA27VDco
                      - generic [ref=e516]:
                        - generic [ref=e517]:
                          - img [ref=e518]
                          - generic [ref=e519]:
                            - generic: WION ·now
                        - generic [ref=e520]: "'Hey Trump...': Iran invokes prophets in biblical message to US as war resumes"
                  - listitem [ref=e521]:
                    - 'link "NDTV 24x7 25m India-UK trade deal kicks in: What gets cheaper, which sectors gain most" [ref=e522]':
                      - /url: https://www.msn.com/en-in/money/news/india-uk-trade-deal-kicks-in-what-gets-cheaper-which-sectors-gain-most/ar-AA27Waza
                      - generic [ref=e523]:
                        - generic [ref=e524]:
                          - img [ref=e525]
                          - generic [ref=e526]:
                            - generic: NDTV 24x7 ·25m
                        - generic [ref=e527]: "India-UK trade deal kicks in: What gets cheaper, which sectors gain most"
                  - listitem [ref=e528]:
                    - link "NDTV World 42m Relief for India, China as US lowers 500% Russian oil tariff threat to 100%" [ref=e529]:
                      - /url: https://www.msn.com/en-in/money/news/relief-for-india-china-as-us-lowers-500-russian-oil-tariff-threat-to-100/ar-AA27VUrx
                      - generic [ref=e530]:
                        - generic [ref=e531]:
                          - img [ref=e532]
                          - generic [ref=e533]:
                            - generic: NDTV World ·42m
                        - generic [ref=e534]: Relief for India, China as US lowers 500% Russian oil tariff threat to 100%
                - generic [ref=e536]:
                  - generic [ref=e537]:
                    - generic "Previous" [ref=e538]:
                      - button "Previous" [ref=e539]
                    - tablist [ref=e541]:
                      - tab "tab-0" [selected] [ref=e542]
                      - tab "tab-1" [ref=e544]
                      - tab "tab-2" [ref=e546]
                    - generic "Next" [ref=e548]:
                      - button "Next" [ref=e549]
                  - link "See more" [ref=e551]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a57219c92fc436992911fc995ad3eca&ocid=hpmsn
            - article "Real Engineers, No Call Center" [ref=e552] [cursor=pointer]:
              - generic [ref=e554]:
                - img [ref=e555]
                - generic [ref=e556]:
                  - generic [ref=e557]:
                    - generic [ref=e560]: Infradapt LLC
                    - link "Real Engineers, No Call Center, Infradapt LLC" [ref=e561]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=2ad2efca-294f-414e-9f89-3c6ec8d07fdf&bdc=pu&bidId=10&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=44167189-c604-402b-a8d1-271f9640f2ef&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8EnGqz0q3O774jf4JbGf7wjVUCUw7Na8h-adODvKXFH8B2muECukmKx9GzSJWmac53iP9gewcDrautdHo_EXHdzLwjo6JV-tz-aMoY8E-CwuUpBchHjT8iAj_wY0ZAAd72OTqdPCogKGeEaKqz8Mr_hE7ldW4N2bB2XBKUqbXS3UR8eG6NwQmeHlqwyoscsz3kOl_w98byrYmimQ_UyxMi0AiZWs%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuaW5mcmFkYXB0LmNvbSUyZiUyZiUzZnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX21lZGl1bSUzZHBwYyUyNnV0bV9jYW1wYWlnbiUzZDEzMjA1MTYzNjE4ODEwOTUlMjZ1dG1fdGVybSUzZGtleXdvcmQlMjZ1dG1fY29udGVudCUzZGUlMjZtc2Nsa2lkJTNkMjFhN2FkYjIwYjYyMTViZjlmYmVjN2U1MmFmY2NhMjE%26rlid%3D21a7adb20b6215bf9fbec7e52afcca21&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Real Engineers, No Call Center
                  - link "Sponsored" [ref=e563]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=2ad2efca-294f-414e-9f89-3c6ec8d07fdf&bdc=pu&bidId=10&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=44167189-c604-402b-a8d1-271f9640f2ef&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8EnGqz0q3O774jf4JbGf7wjVUCUw7Na8h-adODvKXFH8B2muECukmKx9GzSJWmac53iP9gewcDrautdHo_EXHdzLwjo6JV-tz-aMoY8E-CwuUpBchHjT8iAj_wY0ZAAd72OTqdPCogKGeEaKqz8Mr_hE7ldW4N2bB2XBKUqbXS3UR8eG6NwQmeHlqwyoscsz3kOl_w98byrYmimQ_UyxMi0AiZWs%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuaW5mcmFkYXB0LmNvbSUyZiUyZiUzZnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX21lZGl1bSUzZHBwYyUyNnV0bV9jYW1wYWlnbiUzZDEzMjA1MTYzNjE4ODEwOTUlMjZ1dG1fdGVybSUzZGtleXdvcmQlMjZ1dG1fY29udGVudCUzZGUlMjZtc2Nsa2lkJTNkMjFhN2FkYjIwYjYyMTViZjlmYmVjN2U1MmFmY2NhMjE%26rlid%3D21a7adb20b6215bf9fbec7e52afcca21&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e565]:
                  - img [ref=e566]
            - article "Urban Company employee denied customer's washroom. What happened next shocked many" [ref=e567] [cursor=pointer]:
              - generic [ref=e569]:
                - img [ref=e570]
                - generic [ref=e571]:
                  - generic [ref=e572]:
                    - generic [ref=e573]:
                      - generic [ref=e574]:
                        - img [ref=e575]
                        - generic [ref=e576]: India Today
                      - generic [ref=e577]: ·
                      - generic [ref=e578]: 21h
                    - link "Urban Company employee denied customer's washroom. What happened next shocked many, India Today" [ref=e579]:
                      - /url: https://www.msn.com/en-in/news/world/urban-company-employee-denied-customer-s-washroom-what-happened-next-shocked-many/ar-AA27SbUk
                      - text: Urban Company employee denied customer's washroom. What happened next shocked many
                  - generic "Urban Company employee denied customer's washroom. What happened next shocked many" [ref=e582]:
                    - generic [ref=e584]:
                      - generic [ref=e585]:
                        - button "94 Likes" [ref=e586]:
                          - generic [ref=e587]:
                            - img [ref=e588]
                            - generic [ref=e590]: "94"
                        - button "Dislike" [ref=e591]:
                          - img [ref=e593]
                      - link "View comments 10 Comment" [ref=e596]:
                        - /url: https://www.msn.com/en-in/news/world/urban-company-employee-denied-customer-s-washroom-what-happened-next-shocked-many/ar-AA27SbUk#comments
                        - button "View comments 10 Comment" [ref=e597]:
                          - img [ref=e598]
                        - generic [ref=e600]: "10"
                - generic [ref=e601]:
                  - button "Hide this story" [ref=e602]:
                    - img [ref=e603]
                    - text: Hide this story
                  - button "See more" [ref=e604]:
                    - img [ref=e605]
            - 'article "''If we die, we die together'': Wife of man sucked out of plane says she held onto his legs" [ref=e606] [cursor=pointer]':
              - generic [ref=e608]:
                - img [ref=e609]
                - generic [ref=e610]:
                  - generic [ref=e611]:
                    - generic [ref=e612]:
                      - generic [ref=e613]:
                        - img [ref=e614]
                        - generic [ref=e615]: News18
                      - generic [ref=e616]: ·
                      - generic [ref=e617]: 14h
                    - 'link "''If we die, we die together'': Wife of man sucked out of plane says she held onto his legs, News18" [ref=e618]':
                      - /url: https://www.msn.com/en-in/entertainment/hollywood/if-we-die-we-die-together-wife-of-man-sucked-out-of-plane-says-she-held-onto-his-legs/ar-AA27TuSy
                      - text: "'If we die, we die together': Wife of man sucked out of plane says she held onto his legs"
                  - 'generic "''If we die, we die together'': Wife of man sucked out of plane says she held onto his legs" [ref=e621]':
                    - generic [ref=e623]:
                      - generic [ref=e624]:
                        - button "12 Likes" [ref=e625]:
                          - generic [ref=e626]:
                            - img [ref=e627]
                            - generic [ref=e629]: "12"
                        - button "Dislike" [ref=e630]:
                          - img [ref=e632]
                      - link "View comments 1 Comment" [ref=e635]:
                        - /url: https://www.msn.com/en-in/entertainment/hollywood/if-we-die-we-die-together-wife-of-man-sucked-out-of-plane-says-she-held-onto-his-legs/ar-AA27TuSy#comments
                        - button "View comments 1 Comment" [ref=e636]:
                          - img [ref=e637]
                        - generic [ref=e639]: "1"
                - generic [ref=e640]:
                  - button "Hide this story" [ref=e641]:
                    - img [ref=e642]
                    - text: Hide this story
                  - button "See more" [ref=e643]:
                    - img [ref=e644]
          - generic [ref=e645]:
            - article [ref=e646] [cursor=pointer]:
              - generic [ref=e651]:
                - generic [ref=e653]:
                  - link "Top Engaging News" [ref=e655]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a57219c92fc436992911fc995ad3eca
                    - heading "Top Engaging News" [level=2] [ref=e656]
                  - button "More options" [ref=e658]
                - generic [ref=e660]:
                  - 'link "News18 12 Comments ''People who don''t want ethanol-blended fuel can buy 100% petrol, but pay more'': Nitin Gadkari" [ref=e662]':
                    - /url: https://www.msn.com/en-in/money/topstories/people-who-don-t-want-ethanol-blended-fuel-can-buy-100-petrol-but-pay-more-nitin-gadkari/ar-AA27W7B0
                    - generic [ref=e663]:
                      - img [ref=e664]
                      - generic [ref=e665]: News18
                      - link "12 Comments" [ref=e667]:
                        - /url: https://www.msn.com/en-in/money/topstories/people-who-don-t-want-ethanol-blended-fuel-can-buy-100-petrol-but-pay-more-nitin-gadkari/ar-AA27W7B0#comments
                        - img [ref=e668]
                        - paragraph [ref=e669]: "12"
                    - paragraph [ref=e670]: "'People who don't want ethanol-blended fuel can buy 100% petrol, but pay more': Nitin Gadkari"
                  - 'link "The Times of India 5 Comments From Rahul Gandhi to Vijay to Nadda: CJP invites leaders across party lines to back NEET protesters" [ref=e672]':
                    - /url: https://www.msn.com/en-in/news/india/from-rahul-gandhi-to-vijay-to-nadda-cjp-invites-leaders-across-party-lines-to-back-neet-protesters/ar-AA27Ssm6
                    - generic [ref=e673]:
                      - img [ref=e674]
                      - generic [ref=e675]: The Times of India
                      - link "5 Comments" [ref=e677]:
                        - /url: https://www.msn.com/en-in/news/india/from-rahul-gandhi-to-vijay-to-nadda-cjp-invites-leaders-across-party-lines-to-back-neet-protesters/ar-AA27Ssm6#comments
                        - img [ref=e678]
                        - paragraph [ref=e679]: "5"
                    - paragraph [ref=e680]: "From Rahul Gandhi to Vijay to Nadda: CJP invites leaders across party lines to back NEET protesters"
                  - link "India Today 2 Comments Slovak leader's reaction after tasting Bihari thekua gifted by PM Modi goes viral" [ref=e682]:
                    - /url: https://www.msn.com/en-in/news/india/slovak-leader-s-reaction-after-tasting-bihari-thekua-gifted-by-pm-modi-goes-viral/ar-AA27SkdI
                    - generic [ref=e683]:
                      - img [ref=e684]
                      - generic [ref=e685]: India Today
                      - link "2 Comments" [ref=e687]:
                        - /url: https://www.msn.com/en-in/news/india/slovak-leader-s-reaction-after-tasting-bihari-thekua-gifted-by-pm-modi-goes-viral/ar-AA27SkdI#comments
                        - img [ref=e688]
                        - paragraph [ref=e689]: "2"
                    - paragraph [ref=e690]: Slovak leader's reaction after tasting Bihari thekua gifted by PM Modi goes viral
                - generic [ref=e692]:
                  - generic [ref=e693]:
                    - generic "Previous" [ref=e694]:
                      - button "Previous" [ref=e695]
                    - tablist [ref=e697]:
                      - tab "tab-0" [selected] [ref=e698]
                      - tab "tab-1" [ref=e700]
                      - tab "tab-2" [ref=e702]
                    - generic "Next" [ref=e704]:
                      - button "Next" [ref=e705]
                  - link "See more" [ref=e707]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a57219c92fc436992911fc995ad3eca
            - article [ref=e708] [cursor=pointer]:
              - generic [ref=e714]:
                - generic [ref=e716]:
                  - link "Washington" [ref=e718]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
                    - heading "Washington" [level=2] [ref=e719]
                  - button "My location" [ref=e720]
                  - button "More options" [ref=e722]
                - generic [ref=e726]:
                  - generic [ref=e727]:
                    - generic [ref=e729]:
                      - link "Clear" [ref=e730]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
                        - img "Clear" [ref=e731]
                      - link "22°C" [ref=e732]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
                        - generic [ref=e733]: ‎22‎
                        - generic [ref=e735]: ‎°C‎
                    - generic [ref=e737]:
                      - link "Heat - AdvisoryHeat advisory" [ref=e739]:
                        - /url: https://www.msn.com/en-in/weather/maps/severeweather/in-Washington,Virginia
                        - img "Heat - Advisory" [ref=e741]
                        - text: Heat advisory
                      - link "See full forecast" [ref=e742]:
                        - /url: https://www.msn.com/en-in/weather/maps/severeweather/in-Washington,Virginia
                        - img "arrow" [ref=e743]
                  - generic [ref=e748]:
                    - link "Larger map" [ref=e749]:
                      - /url: ""
                      - img
                      - generic [ref=e750]:
                        - generic:
                          - generic:
                            - img
                            - img
                            - img
                            - img
                    - link "Check more alert details" [ref=e751]:
                      - /url: ""
                      - generic "Check more alert details" [ref=e752]
                      - img [ref=e754]
                    - link "Click to see more information" [ref=e755]:
                      - /url: ""
                      - img [ref=e756]
                - button "See full forecast" [ref=e759]
            - article "US uses sea drones in combat for first time to strike Iran's Bandar Abbas naval base" [ref=e760] [cursor=pointer]:
              - generic [ref=e762]:
                - generic [ref=e766]:
                  - generic [ref=e767]:
                    - generic [ref=e768]:
                      - generic [ref=e769]:
                        - img [ref=e770]
                        - generic [ref=e771]: The Economic Times
                      - generic [ref=e772]: ·
                      - generic [ref=e773]: 20h
                    - link "US uses sea drones in combat for first time to strike Iran's Bandar Abbas naval base, The Economic Times" [ref=e774]:
                      - /url: https://www.msn.com/en-in/news/world/us-uses-sea-drones-in-combat-for-first-time-to-strike-iran-s-bandar-abbas-naval-base/vi-AA27RejM
                      - text: US uses sea drones in combat for first time to strike Iran's Bandar Abbas naval base
                  - generic "US uses sea drones in combat for first time to strike Iran's Bandar Abbas naval base" [ref=e777]:
                    - generic [ref=e779]:
                      - generic [ref=e780]:
                        - button "69 Likes" [ref=e781]:
                          - generic [ref=e782]:
                            - img [ref=e783]
                            - generic [ref=e785]: "69"
                        - button "Dislike" [ref=e786]:
                          - img [ref=e788]
                      - link "Start the conversation" [ref=e791]:
                        - /url: https://www.msn.com/en-in/news/world/us-uses-sea-drones-in-combat-for-first-time-to-strike-iran-s-bandar-abbas-naval-base/vi-AA27RejM#comments
                        - button "Start the conversation" [ref=e792]:
                          - img [ref=e793]
                - generic [ref=e795]:
                  - button "Hide this story" [ref=e796]:
                    - img [ref=e797]
                    - text: Hide this story
                  - button "See more" [ref=e798]:
                    - img [ref=e799]
            - article "Your eyes are warning you, 5 silent signs you should never ignore" [ref=e800] [cursor=pointer]:
              - generic [ref=e802]:
                - img [ref=e803]
                - generic [ref=e804]:
                  - generic [ref=e805]:
                    - generic [ref=e807]:
                      - img [ref=e808]
                      - generic [ref=e809]: Times Now
                    - link "Your eyes are warning you, 5 silent signs you should never ignore, Times Now" [ref=e810]:
                      - /url: https://www.msn.com/en-in/health/other/your-eyes-are-warning-you-5-silent-signs-you-should-never-ignore/ar-AA1ZE9Ro
                      - text: Your eyes are warning you, 5 silent signs you should never ignore
                  - generic "Your eyes are warning you, 5 silent signs you should never ignore" [ref=e813]:
                    - generic [ref=e815]:
                      - generic [ref=e816]:
                        - button "4,027 Likes" [ref=e817]:
                          - generic [ref=e818]:
                            - img [ref=e819]
                            - generic [ref=e821]: 4k
                        - button "Dislike" [ref=e822]:
                          - img [ref=e824]
                      - link "View comments 4 Comment" [ref=e827]:
                        - /url: https://www.msn.com/en-in/health/other/your-eyes-are-warning-you-5-silent-signs-you-should-never-ignore/ar-AA1ZE9Ro#comments
                        - button "View comments 4 Comment" [ref=e828]:
                          - img [ref=e829]
                        - generic [ref=e831]: "4"
                - generic [ref=e832]:
                  - button "Hide this story" [ref=e833]:
                    - img [ref=e834]
                    - text: Hide this story
                  - button "See more" [ref=e835]:
                    - img [ref=e836]
            - article [ref=e837] [cursor=pointer]
            - article "The power of your thoughts" [ref=e844] [cursor=pointer]:
              - generic [ref=e846]:
                - img [ref=e847]
                - generic [ref=e848]:
                  - generic [ref=e849]:
                    - generic [ref=e851]:
                      - img [ref=e852]
                      - generic [ref=e853]: The New Indian Express
                    - link "The power of your thoughts, The New Indian Express" [ref=e854]:
                      - /url: https://www.msn.com/en-in/money/technology/the-power-of-your-thoughts/ar-AA1YQaQN
                      - text: The power of your thoughts
                  - generic "The power of your thoughts" [ref=e857]:
                    - generic [ref=e859]:
                      - generic [ref=e860]:
                        - button "469 Likes" [ref=e861]:
                          - generic [ref=e862]:
                            - img [ref=e863]
                            - generic [ref=e865]: "469"
                        - button "Dislike" [ref=e866]:
                          - img [ref=e868]
                      - link "Start the conversation" [ref=e871]:
                        - /url: https://www.msn.com/en-in/money/technology/the-power-of-your-thoughts/ar-AA1YQaQN#comments
                        - button "Start the conversation" [ref=e872]:
                          - img [ref=e873]
                - generic [ref=e875]:
                  - button "Hide this story" [ref=e876]:
                    - img [ref=e877]
                    - text: Hide this story
                  - button "See more" [ref=e878]:
                    - img [ref=e879]
            - article [ref=e880] [cursor=pointer]
            - article "He was fooling around on the edge - then his hand suddenly slipped" [ref=e887] [cursor=pointer]:
              - generic [ref=e889]:
                - generic [ref=e895]:
                  - generic [ref=e896]:
                    - generic [ref=e897]:
                      - generic [ref=e898]:
                        - img [ref=e899]
                        - generic [ref=e900]: Magnus Midtbø
                      - generic [ref=e901]: ·
                      - generic [ref=e902]: 1d
                    - link "He was fooling around on the edge - then his hand suddenly slipped, Magnus Midtbø" [ref=e903]:
                      - /url: https://www.msn.com/en-in/travel/news/he-was-fooling-around-on-the-edge-then-his-hand-suddenly-slipped/vi-AA25YAAa
                      - text: He was fooling around on the edge - then his hand suddenly slipped
                  - generic "He was fooling around on the edge - then his hand suddenly slipped" [ref=e906]:
                    - generic [ref=e908]:
                      - generic [ref=e909]:
                        - button "382 Likes" [ref=e910]:
                          - generic [ref=e911]:
                            - img [ref=e912]
                            - generic [ref=e914]: "382"
                        - button "Dislike" [ref=e915]:
                          - img [ref=e917]
                      - link "Start the conversation" [ref=e920]:
                        - /url: https://www.msn.com/en-in/travel/news/he-was-fooling-around-on-the-edge-then-his-hand-suddenly-slipped/vi-AA25YAAa#comments
                        - button "Start the conversation" [ref=e921]:
                          - img [ref=e922]
                - generic [ref=e924]:
                  - button "Hide this story" [ref=e925]:
                    - img [ref=e926]
                    - text: Hide this story
                  - button "See more" [ref=e927]:
                    - img [ref=e928]
          - article [ref=e930]
          - generic [ref=e932]:
            - article [ref=e933] [cursor=pointer]:
              - generic [ref=e938]:
                - generic [ref=e939]:
                  - generic [ref=e940]:
                    - link "Recommended videos" [ref=e941]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e942]
                    - link "Recommended videos" [ref=e945]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e946]:
                    - generic:
                      - link "See more" [ref=e947]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e948]:
                        - button "More options" [ref=e949]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e951]:
                  - generic [ref=e953]:
                    - generic [ref=e955]:
                      - generic:
                        - article "He paid $28,455 for India's most luxurious train - then he got an entire rail car" [ref=e958]:
                          - generic [ref=e959]:
                            - img "He Paid $28,455 for India's Most Luxurious Train - Then He Got an Entire Rail Car" [ref=e961]
                            - generic [ref=e963]: 25:26
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e964]:
                              - generic [ref=e965]:
                                - img "Trek Trendy" [ref=e966]
                                - generic [ref=e967]:
                                  - generic:
                                    - generic "Trek Trendy" [ref=e968]
                                    - generic [ref=e969]: ·
                                    - generic [ref=e970]: 5d
                              - link "He paid $28,455 for India's most luxurious train - then he got an entire rail car" [ref=e971]:
                                - /url: https://www.msn.com/en-in/video/peopleandplaces/he-paid-28-455-for-india-s-most-luxurious-train-then-he-got-an-entire-rail-car/vi-AA27xXJj?ocid=hpmsn
                                - heading "He paid $28,455 for India's most luxurious train - then he got an entire rail car" [level=2] [ref=e972]:
                                  - generic: He paid $28,455 for India's most luxurious train - then he got an entire rail car
                            - button "See more" [ref=e976]
                        - article [ref=e979]:
                          - generic [ref=e980]:
                            - img "Jolly’s Silver Play Button Unboxing & Season 2 Sneak Peek!" [ref=e982]
                            - generic [ref=e984]: 06:36
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e985]:
                              - generic [ref=e986]:
                                - img "JOLLY" [ref=e987]
                                - generic [ref=e988]:
                                  - generic:
                                    - generic "JOLLY" [ref=e989]
                                    - generic [ref=e990]: ·
                                    - generic [ref=e991]: 6h
                              - link "Jolly’s silver play button unboxing & season 2 sneak peek!" [ref=e992]:
                                - /url: https://www.msn.com/en-in/tv/news/jolly-s-silver-play-button-unboxing-season-2-sneak-peek/vi-AA27K0x4?ocid=hpmsn
                                - heading "Jolly’s silver play button unboxing & season 2 sneak peek!" [level=2] [ref=e993]:
                                  - generic: Jolly’s silver play button unboxing & season 2 sneak peek!
                            - button "See more" [ref=e997]
                        - article [ref=e1000]:
                          - generic [ref=e1001]:
                            - img "Why the United States Has Missiles Ready at All Times - Instant Strike" [ref=e1003]
                            - generic [ref=e1005]: 25:49
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1006]:
                              - generic [ref=e1007]:
                                - img "Sam Eckholm" [ref=e1008]
                                - generic [ref=e1009]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1010]
                                    - generic [ref=e1011]: ·
                                    - generic [ref=e1012]: 5d
                              - link "Why the United States has missiles ready at all times - instant strike" [ref=e1013]:
                                - /url: https://www.msn.com/en-in/news/world/why-the-united-states-has-missiles-ready-at-all-times-instant-strike/vi-AA22AckL?ocid=hpmsn
                                - heading "Why the United States has missiles ready at all times - instant strike" [level=2] [ref=e1014]:
                                  - generic: Why the United States has missiles ready at all times - instant strike
                            - button "See more" [ref=e1018]
                        - article "They ignored warnings about this forest - then man-eating bears surrounded them" [ref=e1021]:
                          - generic [ref=e1022]:
                            - img "They Ignored Warnings About This Forest - Then Man-Eating Bears Surrounded Them" [ref=e1024]
                            - generic [ref=e1026]: 23:24
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1027]:
                              - generic [ref=e1028]:
                                - img "Magnus Midtbø" [ref=e1029]
                                - generic [ref=e1030]:
                                  - generic:
                                    - generic "Magnus Midtbø" [ref=e1031]
                                    - generic [ref=e1032]: ·
                                    - generic [ref=e1033]: 17h
                              - link "They ignored warnings about this forest - then man-eating bears surrounded them" [ref=e1034]:
                                - /url: https://www.msn.com/en-in/video/animals/they-ignored-warnings-about-this-forest-then-man-eating-bears-surrounded-them/vi-AA25NmpN?ocid=hpmsn
                                - heading "They ignored warnings about this forest - then man-eating bears surrounded them" [level=2] [ref=e1035]:
                                  - generic: They ignored warnings about this forest - then man-eating bears surrounded them
                            - button "See more" [ref=e1039]
                        - article [ref=e1042]:
                          - generic [ref=e1043]:
                            - img "An Asteroid Exploded Over Russia - And We Never Saw It Coming" [ref=e1045]
                            - generic [ref=e1047]: 18:31
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1048]:
                              - generic [ref=e1049]:
                                - img "Veritasium" [ref=e1050]
                                - generic [ref=e1051]:
                                  - generic:
                                    - generic "Veritasium" [ref=e1052]
                                    - generic [ref=e1053]: ·
                                    - generic [ref=e1054]: 1d
                              - link "An asteroid exploded over Russia - and we never saw it coming" [ref=e1055]:
                                - /url: https://www.msn.com/en-in/news/world/an-asteroid-exploded-over-russia-and-we-never-saw-it-coming/vi-AA20kKzm?ocid=hpmsn
                                - heading "An asteroid exploded over Russia - and we never saw it coming" [level=2] [ref=e1056]:
                                  - generic: An asteroid exploded over Russia - and we never saw it coming
                            - button "See more" [ref=e1060]
                        - article [ref=e1063]:
                          - generic [ref=e1064]:
                            - img "I Filmed My Greenhouse For 4 Months │ Time-lapse" [ref=e1066]
                            - generic [ref=e1068]: 02:54
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1069]:
                              - generic [ref=e1070]:
                                - img "Boxlapse" [ref=e1071]
                                - generic [ref=e1072]:
                                  - generic:
                                    - generic "Boxlapse" [ref=e1073]
                                    - generic [ref=e1074]: ·
                                    - generic [ref=e1075]: 8h
                              - link "I filmed my greenhouse for 4 months │ Time-lapse" [ref=e1076]:
                                - /url: https://www.msn.com/en-in/lifestyle/family-relationships/i-filmed-my-greenhouse-for-4-months-time-lapse/vi-AA27Uo5F?ocid=hpmsn
                                - heading "I filmed my greenhouse for 4 months │ Time-lapse" [level=2] [ref=e1077]:
                                  - generic: I filmed my greenhouse for 4 months │ Time-lapse
                            - button "See more" [ref=e1081]
                        - article "You're stepping over a line - Tom Cruise shut down 60 Minutes host live" [ref=e1084]:
                          - generic [ref=e1085]:
                            - img "“You’re Stepping Over A Line” - Tom Cruise Shut Down 60 Minutes Host Live" [ref=e1087]
                            - generic [ref=e1089]: 24:41
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1090]:
                              - generic [ref=e1091]:
                                - img "Moon" [ref=e1092]
                                - generic [ref=e1093]:
                                  - generic:
                                    - generic "Moon" [ref=e1094]
                                    - generic [ref=e1095]: ·
                                    - generic [ref=e1096]: 1w
                              - link "You're stepping over a line - Tom Cruise shut down 60 Minutes host live" [ref=e1097]:
                                - /url: https://www.msn.com/en-in/news/other/you-re-stepping-over-a-line-tom-cruise-shut-down-60-minutes-host-live/vi-AA27jig3?ocid=hpmsn
                                - heading "You're stepping over a line - Tom Cruise shut down 60 Minutes host live" [level=2] [ref=e1098]:
                                  - generic: You're stepping over a line - Tom Cruise shut down 60 Minutes host live
                            - button "See more" [ref=e1102]
                        - article [ref=e1105]:
                          - generic [ref=e1106]:
                            - img "HOW TO STOP BEING LAZY" [ref=e1108]
                            - generic [ref=e1110]: 17:05
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1111]:
                              - generic [ref=e1112]:
                                - img "Silicon Valley Girl" [ref=e1113]
                                - generic "Silicon Valley Girl" [ref=e1115]
                              - link "How to stop being lazy" [ref=e1116]:
                                - /url: https://www.msn.com/en-in/health/fitness/how-to-stop-being-lazy/vi-AA1Md1O2?ocid=hpmsn
                                - heading "How to stop being lazy" [level=2] [ref=e1117]:
                                  - generic: How to stop being lazy
                            - button "See more" [ref=e1121]
                        - article "Watch America's secret satellites detect missile launches anywhere on Earth in seconds" [ref=e1124]:
                          - generic [ref=e1125]:
                            - img "Watch America's Secret Satellites Detect Missile Launches Anywhere On Earth In Seconds" [ref=e1127]
                            - generic [ref=e1129]: 17:40
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1130]:
                              - generic [ref=e1131]:
                                - img "Sam Eckholm" [ref=e1132]
                                - generic [ref=e1133]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1134]
                                    - generic [ref=e1135]: ·
                                    - generic [ref=e1136]: 1w
                              - link "Watch America's secret satellites detect missile launches anywhere on Earth in seconds" [ref=e1137]:
                                - /url: https://www.msn.com/en-in/news/techandscience/watch-america-s-secret-satellites-detect-missile-launches-anywhere-on-earth-in-seconds/vi-AA26Xx7P?ocid=hpmsn
                                - heading "Watch America's secret satellites detect missile launches anywhere on Earth in seconds" [level=2] [ref=e1138]:
                                  - generic: Watch America's secret satellites detect missile launches anywhere on Earth in seconds
                            - button "See more" [ref=e1142]
                        - article [ref=e1145]:
                          - generic [ref=e1146]:
                            - img "Watch What Happens When a Car Outruns the Wind Behind It" [ref=e1148]
                            - generic [ref=e1150]: 21:36
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1151]:
                              - generic [ref=e1152]:
                                - img "Veritasium" [ref=e1153]
                                - generic [ref=e1154]:
                                  - generic:
                                    - generic "Veritasium" [ref=e1155]
                                    - generic [ref=e1156]: ·
                                    - generic [ref=e1157]: 1w
                              - link "Watch what happens when a car outruns the wind behind it" [ref=e1158]:
                                - /url: https://www.msn.com/en-in/video/watch/watch-what-happens-when-a-car-outruns-the-wind-behind-it/vi-AA1YOMkE?ocid=hpmsn
                                - heading "Watch what happens when a car outruns the wind behind it" [level=2] [ref=e1159]:
                                  - generic: Watch what happens when a car outruns the wind behind it
                            - button "See more" [ref=e1163]
                        - article [ref=e1166]:
                          - generic [ref=e1167]:
                            - img "He Was Fooling Around on the Edge - Then His Hand Suddenly Slipped" [ref=e1169]
                            - generic [ref=e1171]: 27:39
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1172]:
                              - generic [ref=e1173]:
                                - img "Magnus Midtbø" [ref=e1174]
                                - generic [ref=e1175]:
                                  - generic:
                                    - generic "Magnus Midtbø" [ref=e1176]
                                    - generic [ref=e1177]: ·
                                    - generic [ref=e1178]: 1d
                              - link "He was fooling around on the edge - then his hand suddenly slipped" [ref=e1179]:
                                - /url: https://www.msn.com/en-in/travel/news/he-was-fooling-around-on-the-edge-then-his-hand-suddenly-slipped/vi-AA25YAAa?ocid=hpmsn
                                - heading "He was fooling around on the edge - then his hand suddenly slipped" [level=2] [ref=e1180]:
                                  - generic: He was fooling around on the edge - then his hand suddenly slipped
                            - button "See more" [ref=e1184]
                        - article "Watch NATO hunt Russian submarines underwater - \"Silent War\"" [ref=e1187]:
                          - generic [ref=e1188]:
                            - img "Watch NATO Hunt Russian Submarines Underwater - “Silent War”" [ref=e1190]
                            - generic [ref=e1192]: 28:21
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1193]:
                              - generic [ref=e1194]:
                                - img "Sam Eckholm" [ref=e1195]
                                - generic [ref=e1196]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1197]
                                    - generic [ref=e1198]: ·
                                    - generic [ref=e1199]: 5d
                              - link "Watch NATO hunt Russian submarines underwater - \"Silent War\"" [ref=e1200]:
                                - /url: https://www.msn.com/en-in/news/other/watch-nato-hunt-russian-submarines-underwater-silent-war/vi-AA22Akc1?ocid=hpmsn
                                - heading "Watch NATO hunt Russian submarines underwater - \"Silent War\"" [level=2] [ref=e1201]:
                                  - generic: Watch NATO hunt Russian submarines underwater - "Silent War"
                            - button "See more" [ref=e1205]
                        - 'article "Josh Teaches Ollie Korean: Demonstratives & Hilarious Pronunciation Fails!" [ref=e1208]':
                          - generic [ref=e1209]:
                            - 'img "Josh Teaches Ollie Korean: Demonstratives & Hilarious Pronunciation Fails!" [ref=e1211]'
                            - generic [ref=e1213]: 08:06
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1214]:
                              - generic [ref=e1215]:
                                - img "JOLLY" [ref=e1216]
                                - generic [ref=e1217]:
                                  - generic:
                                    - generic "JOLLY" [ref=e1218]
                                    - generic [ref=e1219]: ·
                                    - generic [ref=e1220]: 2h
                              - 'link "Josh Teaches Ollie Korean: Demonstratives & Hilarious Pronunciation Fails!" [ref=e1221]':
                                - /url: https://www.msn.com/en-in/news/opinion/josh-teaches-ollie-korean-demonstratives-hilarious-pronunciation-fails/vi-AA27FDlE?ocid=hpmsn
                                - 'heading "Josh Teaches Ollie Korean: Demonstratives & Hilarious Pronunciation Fails!" [level=2] [ref=e1222]':
                                  - generic: "Josh Teaches Ollie Korean: Demonstratives & Hilarious Pronunciation Fails!"
                            - button "See more" [ref=e1226]
                        - article "Watch America's 10,000-ton Navy destroyer unleash 96 missiles" [ref=e1229]:
                          - generic [ref=e1230]:
                            - img "Watch America's 10,000-Ton Navy Destroyer Unleash 96 Missiles" [ref=e1232]
                            - generic [ref=e1234]: 20:53
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1235]:
                              - generic [ref=e1236]:
                                - img "Sam Eckholm" [ref=e1237]
                                - generic [ref=e1238]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1239]
                                    - generic [ref=e1240]: ·
                                    - generic [ref=e1241]: 5d
                              - link "Watch America's 10,000-ton Navy destroyer unleash 96 missiles" [ref=e1242]:
                                - /url: https://www.msn.com/en-in/news/us/watch-america-s-10-000-ton-navy-destroyer-unleash-96-missiles/vi-AA27xJzU?ocid=hpmsn
                                - heading "Watch America's 10,000-ton Navy destroyer unleash 96 missiles" [level=2] [ref=e1243]:
                                  - generic: Watch America's 10,000-ton Navy destroyer unleash 96 missiles
                            - button "See more" [ref=e1247]
                        - article "This man almost died from venom - because we misunderstood king cobras" [ref=e1250]:
                          - generic [ref=e1251]:
                            - img "This Man Almost Died From Venom - Because We Misunderstood King Cobras" [ref=e1253]
                            - generic [ref=e1255]: 05:32
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1256]:
                              - generic [ref=e1257]:
                                - img "TED" [ref=e1258]
                                - generic [ref=e1259]:
                                  - generic:
                                    - generic "TED" [ref=e1260]
                                    - generic [ref=e1261]: ·
                                    - generic [ref=e1262]: 1w
                              - link "This man almost died from venom - because we misunderstood king cobras" [ref=e1263]:
                                - /url: https://www.msn.com/en-in/video/news/this-man-almost-died-from-venom-because-we-misunderstood-king-cobras/vi-AA1V5dVL?ocid=hpmsn
                                - heading "This man almost died from venom - because we misunderstood king cobras" [level=2] [ref=e1264]:
                                  - generic: This man almost died from venom - because we misunderstood king cobras
                            - button "See more" [ref=e1268]
                        - article [ref=e1271]:
                          - generic [ref=e1272]:
                            - img "Inside a $6.5M nuclear bunker mansion" [ref=e1274]
                            - generic [ref=e1276]: 35:11
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1277]:
                              - generic [ref=e1278]:
                                - img "Enes Yilmazer" [ref=e1279]
                                - generic [ref=e1280]:
                                  - generic:
                                    - generic "Enes Yilmazer" [ref=e1281]
                                    - generic [ref=e1282]: ·
                                    - generic [ref=e1283]: 3w
                              - link "Inside a $6,500,000 nuclear bunker mansion" [ref=e1284]:
                                - /url: https://www.msn.com/en-in/news/world/inside-a-6-500-000-nuclear-bunker-mansion/vi-AA23GhJA?ocid=hpmsn
                                - heading "Inside a $6,500,000 nuclear bunker mansion" [level=2] [ref=e1285]:
                                  - generic: Inside a $6,500,000 nuclear bunker mansion
                            - button "See more" [ref=e1289]
                        - article [ref=e1292]:
                          - generic [ref=e1293]:
                            - img "This Football Champion is a Chess Grandmaster" [ref=e1295]
                            - generic [ref=e1297]: 24:42
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1298]:
                              - generic [ref=e1299]:
                                - img "GothamChess" [ref=e1300]
                                - generic "GothamChess" [ref=e1302]
                              - link "This football champion is a chess grandmaster" [ref=e1303]:
                                - /url: https://www.msn.com/en-in/sports/other/this-football-champion-is-a-chess-grandmaster/vi-AA24AlBN?ocid=hpmsn
                                - heading "This football champion is a chess grandmaster" [level=2] [ref=e1304]:
                                  - generic: This football champion is a chess grandmaster
                            - button "See more" [ref=e1308]
                        - article "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [ref=e1311]:
                          - generic [ref=e1312]:
                            - img "Keke Palmer Was Supporting 5 People As A Teenager - Then She Finally Broke Down" [ref=e1314]
                            - generic [ref=e1316]: 12:56
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1317]:
                              - generic [ref=e1318]:
                                - img "TED" [ref=e1319]
                                - generic [ref=e1320]:
                                  - generic:
                                    - generic "TED" [ref=e1321]
                                    - generic [ref=e1322]: ·
                                    - generic [ref=e1323]: 1w
                              - link "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [ref=e1324]:
                                - /url: https://www.msn.com/en-in/video/peopleandplaces/keke-palmer-was-supporting-5-people-as-a-teenager-then-she-finally-broke-down/vi-AA240j91?ocid=hpmsn
                                - heading "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [level=2] [ref=e1325]:
                                  - generic: Keke Palmer was supporting 5 people as a teenager - then she finally broke down
                            - button "See more" [ref=e1329]
                        - article "7 continents are drifting toward each other - and scientists warn it’s accelerating" [ref=e1332]:
                          - generic [ref=e1333]:
                            - img "7 Continents Are Drifting Toward Each Other - And Scientists Warn It’s Accelerating" [ref=e1335]
                            - generic [ref=e1337]: 05:11
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1338]:
                              - generic [ref=e1339]:
                                - img "TED" [ref=e1340]
                                - generic [ref=e1341]:
                                  - generic:
                                    - generic "TED" [ref=e1342]
                                    - generic [ref=e1343]: ·
                                    - generic [ref=e1344]: 5d
                              - link "7 continents are drifting toward each other - and scientists warn it’s accelerating" [ref=e1345]:
                                - /url: https://www.msn.com/en-in/news/techandscience/7-continents-are-drifting-toward-each-other-and-scientists-warn-it-s-accelerating/vi-AA24lZ6s?ocid=hpmsn
                                - heading "7 continents are drifting toward each other - and scientists warn it’s accelerating" [level=2] [ref=e1346]:
                                  - generic: 7 continents are drifting toward each other - and scientists warn it’s accelerating
                            - button "See more" [ref=e1350]
                        - article [ref=e1353]:
                          - generic [ref=e1354]:
                            - img "The Most Ridiculous Celebrity Takes Of The Week" [ref=e1356]
                            - generic [ref=e1358]: 09:30
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1359]:
                              - generic [ref=e1360]:
                                - img "Ben Shapiro" [ref=e1361]
                                - generic [ref=e1362]:
                                  - generic:
                                    - generic "Ben Shapiro" [ref=e1363]
                                    - generic [ref=e1364]: ·
                                    - generic [ref=e1365]: 5d
                              - link "The most ridiculous celebrity takes of the week" [ref=e1366]:
                                - /url: https://www.msn.com/en-in/entertainment/news/the-most-ridiculous-celebrity-takes-of-the-week/vi-AA26OPGa?ocid=hpmsn
                                - heading "The most ridiculous celebrity takes of the week" [level=2] [ref=e1367]:
                                  - generic: The most ridiculous celebrity takes of the week
                            - button "See more" [ref=e1371]
                        - link "See more" [ref=e1373]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1374]
                          - text: See more
                    - button "next" [ref=e1378]:
                      - img [ref=e1381]
            - article "Aamir Khan rejects 'love jihad' tag, says 'Gauri is not even Hindu'" [ref=e1383] [cursor=pointer]:
              - generic [ref=e1385]:
                - img [ref=e1386]
                - generic [ref=e1387]:
                  - generic [ref=e1388]:
                    - generic [ref=e1389]:
                      - generic [ref=e1390]:
                        - img [ref=e1391]
                        - generic [ref=e1392]: The Daily Jagran
                      - generic [ref=e1393]: ·
                      - generic [ref=e1394]: 1h
                    - link "Aamir Khan rejects 'love jihad' tag, says 'Gauri is not even Hindu', The Daily Jagran" [ref=e1395]:
                      - /url: https://www.msn.com/en-in/entertainment/bollywood/aamir-khan-rejects-love-jihad-tag-says-gauri-is-not-even-hindu/ar-AA27W5r6
                      - text: Aamir Khan rejects 'love jihad' tag, says 'Gauri is not even Hindu'
                  - generic "Aamir Khan rejects 'love jihad' tag, says 'Gauri is not even Hindu'" [ref=e1398]:
                    - generic [ref=e1400]:
                      - generic [ref=e1401]:
                        - button "20 Likes" [ref=e1402]:
                          - generic [ref=e1403]:
                            - img [ref=e1404]
                            - generic [ref=e1406]: "20"
                        - button "Dislike" [ref=e1407]:
                          - img [ref=e1409]
                      - link "Start the conversation" [ref=e1412]:
                        - /url: https://www.msn.com/en-in/entertainment/bollywood/aamir-khan-rejects-love-jihad-tag-says-gauri-is-not-even-hindu/ar-AA27W5r6#comments
                        - button "Start the conversation" [ref=e1413]:
                          - img [ref=e1414]
                - generic [ref=e1416]:
                  - button "Hide this story" [ref=e1417]:
                    - img [ref=e1418]
                    - text: Hide this story
                  - button "See more" [ref=e1419]:
                    - img [ref=e1420]
            - 'article "''People who don''t want ethanol-blended fuel can buy 100% petrol, but pay more'': Nitin Gadkari" [ref=e1421] [cursor=pointer]':
              - generic [ref=e1423]:
                - img [ref=e1424]
                - generic [ref=e1425]:
                  - generic [ref=e1426]:
                    - generic [ref=e1427]:
                      - generic [ref=e1428]:
                        - img [ref=e1429]
                        - generic [ref=e1430]: News18
                      - generic [ref=e1431]: ·
                      - generic [ref=e1432]: 2h
                    - 'link "''People who don''t want ethanol-blended fuel can buy 100% petrol, but pay more'': Nitin Gadkari, News18" [ref=e1433]':
                      - /url: https://www.msn.com/en-in/money/topstories/people-who-don-t-want-ethanol-blended-fuel-can-buy-100-petrol-but-pay-more-nitin-gadkari/ar-AA27W7B0
                      - text: "'People who don't want ethanol-blended fuel can buy 100% petrol, but pay more': Nitin Gadkari"
                  - 'generic "''People who don''t want ethanol-blended fuel can buy 100% petrol, but pay more'': Nitin Gadkari" [ref=e1436]':
                    - generic [ref=e1438]:
                      - generic [ref=e1439]:
                        - button "40 Likes" [ref=e1440]:
                          - generic [ref=e1441]:
                            - img [ref=e1442]
                            - generic [ref=e1444]: "40"
                        - button "Dislike" [ref=e1445]:
                          - img [ref=e1447]
                      - link "View comments 12 Comment" [ref=e1450]:
                        - /url: https://www.msn.com/en-in/money/topstories/people-who-don-t-want-ethanol-blended-fuel-can-buy-100-petrol-but-pay-more-nitin-gadkari/ar-AA27W7B0#comments
                        - button "View comments 12 Comment" [ref=e1451]:
                          - img [ref=e1452]
                        - generic [ref=e1454]: "12"
                - generic [ref=e1455]:
                  - button "Hide this story" [ref=e1456]:
                    - img [ref=e1457]
                    - text: Hide this story
                  - button "See more" [ref=e1458]:
                    - img [ref=e1459]
            - article "Harry Kane's 6-word tweet ahead of England's FIFA World Cup 2026 semifinal against Argentina goes viral" [ref=e1460] [cursor=pointer]:
              - generic [ref=e1462]:
                - img [ref=e1463]
                - generic [ref=e1464]:
                  - generic [ref=e1465]:
                    - generic [ref=e1466]:
                      - generic [ref=e1467]:
                        - img [ref=e1468]
                        - generic [ref=e1469]: News18
                      - generic [ref=e1470]: ·
                      - generic [ref=e1471]: 6h
                    - link "Harry Kane's 6-word tweet ahead of England's FIFA World Cup 2026 semifinal against Argentina goes viral, News18" [ref=e1472]:
                      - /url: https://www.msn.com/en-in/sports/other/harry-kane-s-6-word-tweet-ahead-of-england-s-fifa-world-cup-2026-semifinal-against-argentina-goes-viral/ar-AA27V7QW
                      - text: Harry Kane's 6-word tweet ahead of England's FIFA World Cup 2026 semifinal against Argentina goes viral
                  - generic "Harry Kane's 6-word tweet ahead of England's FIFA World Cup 2026 semifinal against Argentina goes viral" [ref=e1475]:
                    - generic [ref=e1477]:
                      - generic [ref=e1478]:
                        - button "15 Likes" [ref=e1479]:
                          - generic [ref=e1480]:
                            - img [ref=e1481]
                            - generic [ref=e1483]: "15"
                        - button "Dislike" [ref=e1484]:
                          - img [ref=e1486]
                      - link "Start the conversation" [ref=e1489]:
                        - /url: https://www.msn.com/en-in/sports/other/harry-kane-s-6-word-tweet-ahead-of-england-s-fifa-world-cup-2026-semifinal-against-argentina-goes-viral/ar-AA27V7QW#comments
                        - button "Start the conversation" [ref=e1490]:
                          - img [ref=e1491]
                - generic [ref=e1493]:
                  - button "Hide this story" [ref=e1494]:
                    - img [ref=e1495]
                    - text: Hide this story
                  - button "See more" [ref=e1496]:
                    - img [ref=e1497]
            - article "What happens when you eat 1 banana daily for 45 days" [ref=e1498] [cursor=pointer]:
              - generic [ref=e1500]:
                - img [ref=e1501]
                - generic [ref=e1502]:
                  - generic [ref=e1503]:
                    - generic [ref=e1505]:
                      - img [ref=e1506]
                      - generic [ref=e1507]: The Times of India
                    - link "What happens when you eat 1 banana daily for 45 days, The Times of India" [ref=e1508]:
                      - /url: https://www.msn.com/en-in/foodanddrink/other/what-happens-when-you-eat-1-banana-daily-for-45-days/ss-AA25AlsW
                      - text: What happens when you eat 1 banana daily for 45 days
                  - generic "What happens when you eat 1 banana daily for 45 days" [ref=e1511]:
                    - generic [ref=e1513]:
                      - generic [ref=e1514]:
                        - button "477 Likes" [ref=e1515]:
                          - generic [ref=e1516]:
                            - img [ref=e1517]
                            - generic [ref=e1519]: "477"
                        - button "Dislike" [ref=e1520]:
                          - img [ref=e1522]
                      - link "View comments 4 Comment" [ref=e1525]:
                        - /url: https://www.msn.com/en-in/foodanddrink/other/what-happens-when-you-eat-1-banana-daily-for-45-days/ss-AA25AlsW#comments
                        - button "View comments 4 Comment" [ref=e1526]:
                          - img [ref=e1527]
                        - generic [ref=e1529]: "4"
                - generic [ref=e1530]:
                  - button "Hide this story" [ref=e1531]:
                    - img [ref=e1532]
                    - text: Hide this story
                  - button "See more" [ref=e1533]:
                    - img [ref=e1534]
            - article [ref=e1535] [cursor=pointer]
            - article "Lamine Yamal scripts European football history after France win with record no one has ever matched" [ref=e1542] [cursor=pointer]:
              - generic [ref=e1544]:
                - img [ref=e1545]
                - generic [ref=e1546]:
                  - generic [ref=e1547]:
                    - generic [ref=e1548]:
                      - generic [ref=e1549]:
                        - img [ref=e1550]
                        - generic [ref=e1551]: The Times of India
                      - generic [ref=e1552]: ·
                      - generic [ref=e1553]: 6h
                    - link "Lamine Yamal scripts European football history after France win with record no one has ever matched, The Times of India" [ref=e1554]:
                      - /url: https://www.msn.com/en-in/sports/fifa_world_cup/lamine-yamal-scripts-european-football-history-after-france-win-with-record-no-one-has-ever-matched/ar-AA27VRT9
                      - text: Lamine Yamal scripts European football history after France win with record no one has ever matched
                  - generic "Lamine Yamal scripts European football history after France win with record no one has ever matched" [ref=e1557]:
                    - generic [ref=e1559]:
                      - generic [ref=e1560]:
                        - button "35 Likes" [ref=e1561]:
                          - generic [ref=e1562]:
                            - img [ref=e1563]
                            - generic [ref=e1565]: "35"
                        - button "Dislike" [ref=e1566]:
                          - img [ref=e1568]
                      - link "Start the conversation" [ref=e1571]:
                        - /url: https://www.msn.com/en-in/sports/fifa_world_cup/lamine-yamal-scripts-european-football-history-after-france-win-with-record-no-one-has-ever-matched/ar-AA27VRT9#comments
                        - button "Start the conversation" [ref=e1572]:
                          - img [ref=e1573]
                - generic [ref=e1575]:
                  - button "Hide this story" [ref=e1576]:
                    - img [ref=e1577]
                    - text: Hide this story
                  - button "See more" [ref=e1578]:
                    - img [ref=e1579]
          - generic [ref=e1580]:
            - article [ref=e1581] [cursor=pointer]
            - 'article "''Took court for a ride'': SC slaps Rs 3 lakh penalty on Samay Raina, warns of adding ''another zero''" [ref=e1588] [cursor=pointer]':
              - generic [ref=e1590]:
                - img [ref=e1591]
                - generic [ref=e1592]:
                  - generic [ref=e1593]:
                    - generic [ref=e1594]:
                      - generic [ref=e1595]:
                        - img [ref=e1596]
                        - generic [ref=e1597]: NDTV Profit
                      - generic [ref=e1598]: ·
                      - generic [ref=e1599]: 18h
                    - 'link "''Took court for a ride'': SC slaps Rs 3 lakh penalty on Samay Raina, warns of adding ''another zero'', NDTV Profit" [ref=e1600]':
                      - /url: https://www.msn.com/en-in/news/india/took-court-for-a-ride-sc-slaps-rs-3-lakh-penalty-on-samay-raina-warns-of-adding-another-zero/ar-AA27SPoq
                      - text: "'Took court for a ride': SC slaps Rs 3 lakh penalty on Samay Raina, warns of adding 'another zero'"
                  - 'generic "''Took court for a ride'': SC slaps Rs 3 lakh penalty on Samay Raina, warns of adding ''another zero''" [ref=e1603]':
                    - generic [ref=e1605]:
                      - generic [ref=e1606]:
                        - button "69 Likes" [ref=e1607]:
                          - generic [ref=e1608]:
                            - img [ref=e1609]
                            - generic [ref=e1611]: "69"
                        - button "Dislike" [ref=e1612]:
                          - img [ref=e1614]
                      - link "View comments 9 Comment" [ref=e1617]:
                        - /url: https://www.msn.com/en-in/news/india/took-court-for-a-ride-sc-slaps-rs-3-lakh-penalty-on-samay-raina-warns-of-adding-another-zero/ar-AA27SPoq#comments
                        - button "View comments 9 Comment" [ref=e1618]:
                          - img [ref=e1619]
                        - generic [ref=e1621]: "9"
                - generic [ref=e1622]:
                  - button "Hide this story" [ref=e1623]:
                    - img [ref=e1624]
                    - text: Hide this story
                  - button "See more" [ref=e1625]:
                    - img [ref=e1626]
    - contentinfo [ref=e1629]:
      - generic "Feedback" [ref=e1631] [cursor=pointer]:
        - button "Feedback" [ref=e1632]:
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