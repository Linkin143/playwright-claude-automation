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
        - 'link "Washington: Clear, 14 °C" [ref=e19] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
          - generic "Washington, Virginia, United States Click here to see more information" [ref=e20]: Washington
          - img "Clear" [ref=e22]
          - generic [ref=e23]:
            - generic [ref=e24]: ‎14‎
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
            - link "Nykaa" [ref=e100] [cursor=pointer]:
              - /url: https://sovrn.co/p9zogj8
              - generic [ref=e103]:
                - generic [ref=e104]: Nykaa
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
                    - link "Sports" [ref=e193] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in/sports
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
              - article "Best Hard Mattress 2026" [ref=e281] [cursor=pointer]:
                - generic [ref=e283]:
                  - img [ref=e284]
                  - generic [ref=e285]:
                    - generic [ref=e286]:
                      - generic [ref=e289]: Top 10 Best Mattresses
                      - link "Best Hard Mattress 2026, Top 10 Best Mattresses" [ref=e290]:
                        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=c1f8e5ff-af4c-412d-8c2f-bff5bc4cbb32&bdc=oa&bidId=10&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=rhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=6b909242-dc31-4e82-bd11-dadfaa774a6b&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8V-QdEfo1KjTZuIARScbb4jVUCUxN9rY6TtLKTZLu6cPbdSti-2sTetmyw4LQ0rEmMuKZW-VQ823a1LkpNTdCj5gdFzoPxckAhOsRAT4Xo9qASh-qvASBEmiM6aetsDYvhHuzbm7EF6YSC6g6ehSI8_IAx3533imHOQ_nwRS322QZltSSMG1_d6Gw_oSphRShzzc3Og%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cudG9wMTBtYXR0cmVzc2Vzb25saW5lLmNvbSUyZnRvcC01LWJlc3QtZXh0cmEtZmlybS1tYXR0cmVzc2VzJTJmJTNma3clM2RrZXl3b3JkJTI2a3dxdWVyeSUzZCUyNnd0aXRsZSUzZCUyNmFjY3R5cGUlM2RhY2MxJTI2bXNjbGtpZCUzZGFhN2E0ZjQxZDRiNTE2NDExYmE5MjU1YzljOTExNjRhJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkTWFudWFsX0F1ZGllbmNlc19BbGwlMjUyMFVTJTI1MjBEU0tQX01hdHRyZXNzX01TTiUyNnV0bV90ZXJtJTNka2V5d29yZCUyNnV0bV9jb250ZW50JTNkQmVzdCUyNTIwRXh0cmElMjUyMEZpcm0lMjUyME1hdHRyZXNz%26rlid%3Daa7a4f41d4b516411ba9255c9c91164a&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                        - text: Best Hard Mattress 2026
                    - link "Sponsored" [ref=e292]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=c1f8e5ff-af4c-412d-8c2f-bff5bc4cbb32&bdc=oa&bidId=10&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=rhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=6b909242-dc31-4e82-bd11-dadfaa774a6b&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8V-QdEfo1KjTZuIARScbb4jVUCUxN9rY6TtLKTZLu6cPbdSti-2sTetmyw4LQ0rEmMuKZW-VQ823a1LkpNTdCj5gdFzoPxckAhOsRAT4Xo9qASh-qvASBEmiM6aetsDYvhHuzbm7EF6YSC6g6ehSI8_IAx3533imHOQ_nwRS322QZltSSMG1_d6Gw_oSphRShzzc3Og%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cudG9wMTBtYXR0cmVzc2Vzb25saW5lLmNvbSUyZnRvcC01LWJlc3QtZXh0cmEtZmlybS1tYXR0cmVzc2VzJTJmJTNma3clM2RrZXl3b3JkJTI2a3dxdWVyeSUzZCUyNnd0aXRsZSUzZCUyNmFjY3R5cGUlM2RhY2MxJTI2bXNjbGtpZCUzZGFhN2E0ZjQxZDRiNTE2NDExYmE5MjU1YzljOTExNjRhJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkTWFudWFsX0F1ZGllbmNlc19BbGwlMjUyMFVTJTI1MjBEU0tQX01hdHRyZXNzX01TTiUyNnV0bV90ZXJtJTNka2V5d29yZCUyNnV0bV9jb250ZW50JTNkQmVzdCUyNTIwRXh0cmElMjUyMEZpcm0lMjUyME1hdHRyZXNz%26rlid%3Daa7a4f41d4b516411ba9255c9c91164a&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                  - button "See more" [ref=e294]:
                    - img [ref=e295]
            - 'article "Quote of the day by Monica Bellucci: ''After a while in marriage, it doesn''t work anymore...'' - controversial quote from the ''Malèna'' actress" [ref=e296] [cursor=pointer]':
              - generic [ref=e298]:
                - img [ref=e299]
                - generic [ref=e300]:
                  - generic [ref=e301]:
                    - generic [ref=e302]:
                      - generic [ref=e303]:
                        - img [ref=e304]
                        - generic [ref=e305]: The Economic Times
                      - generic [ref=e306]: ·
                      - generic [ref=e307]: 1d
                    - 'link "Quote of the day by Monica Bellucci: ''After a while in marriage, it doesn''t work anymore...'' - controversial quote from the ''Malèna'' actress, The Economic Times" [ref=e308]':
                      - /url: https://www.msn.com/en-in/entertainment/news/quote-of-the-day-by-monica-bellucci-after-a-while-in-marriage-it-doesn-t-work-anymore-controversial-quote-from-the-mal%C3%A8na-actress/ar-AA24ruwD
                      - text: "Quote of the day by Monica Bellucci: 'After a while in marriage, it doesn't work anymore...' - controversial quote from the 'Malèna' actress"
                  - 'generic "Quote of the day by Monica Bellucci: ''After a while in marriage, it doesn''t work anymore...'' - controversial quote from the ''Malèna'' actress" [ref=e311]':
                    - generic [ref=e313]:
                      - generic [ref=e314]:
                        - button "12 Like" [ref=e315]:
                          - generic [ref=e316]:
                            - img [ref=e317]
                            - generic [ref=e319]: "12"
                        - button "Dislike" [ref=e320]:
                          - img [ref=e322]
                      - link "Start the conversation" [ref=e325]:
                        - /url: https://www.msn.com/en-in/entertainment/news/quote-of-the-day-by-monica-bellucci-after-a-while-in-marriage-it-doesn-t-work-anymore-controversial-quote-from-the-mal%C3%A8na-actress/ar-AA24ruwD#comments
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
            - article "Compare Top 5 Best RV Mattresses that Suits You the Best. View Our Top Picks" [ref=e339] [cursor=pointer]:
              - generic [ref=e341]:
                - img [ref=e342]
                - generic [ref=e343]:
                  - generic [ref=e344]:
                    - generic [ref=e347]: Top 10 Best Mattresses
                    - link "Compare Top 5 Best RV Mattresses that Suits You the Best. View Our Top Picks, Top 10 Best Mattresses" [ref=e348]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=228d8a92-8f41-4853-9df0-732aac129119&bdc=oa&bidId=16&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=rhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=6b909242-dc31-4e82-bd11-dadfaa774a6b&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8RAFLDnwCBo1VOj2EqID3XDVUCUxWqDXHVTfl60h8PYHkK189GNpYTHJR13M0LTi_oO51r4RYg2rgDwKVX7cTsZeYZJpAMuBao3gKLhZW1PmKsDHB_0nijerN-evtP-xoi-x3p89deOh3epUA49836DieXkyr4NjFn50RGdckUkN45neIU3cdLlFvZZ3OszErFDTehw%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cudG9wMTBtYXR0cmVzc2Vzb25saW5lLmNvbSUyZnRvcC01LWJlc3QtcnYtbWF0dHJlc3NlcyUzZmt3JTNka2V5d29yZCUyNmt3cXVlcnklM2QlMjZ3dGl0bGUlM2QlMjZhY2N0eXBlJTNkYWNjMSUyNm1zY2xraWQlM2QzMjdjMzAzMGQ3ZmExY2MzOWQ4YjVhMmQ5ZmRlYWFjZSUyNnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX21lZGl1bSUzZGNwYyUyNnV0bV9jYW1wYWlnbiUzZE1hbnVhbF9BdWRpZW5jZXNfQWxsJTI1MjBVUyUyNTIwRFNLUF9SVl9NYXR0cmVzc19NU04lMjZ1dG1fdGVybSUzZGtleXdvcmQlMjZ1dG1fY29udGVudCUzZEJlc3QlMjUyMFJWJTI1MjBNYXR0cmVzcw%26rlid%3D327c3030d7fa1cc39d8b5a2d9fdeaace&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Compare Top 5 Best RV Mattresses that Suits You the Best. View Our Top Picks
                  - link "Sponsored" [ref=e350]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=228d8a92-8f41-4853-9df0-732aac129119&bdc=oa&bidId=16&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=rhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=6b909242-dc31-4e82-bd11-dadfaa774a6b&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8RAFLDnwCBo1VOj2EqID3XDVUCUxWqDXHVTfl60h8PYHkK189GNpYTHJR13M0LTi_oO51r4RYg2rgDwKVX7cTsZeYZJpAMuBao3gKLhZW1PmKsDHB_0nijerN-evtP-xoi-x3p89deOh3epUA49836DieXkyr4NjFn50RGdckUkN45neIU3cdLlFvZZ3OszErFDTehw%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cudG9wMTBtYXR0cmVzc2Vzb25saW5lLmNvbSUyZnRvcC01LWJlc3QtcnYtbWF0dHJlc3NlcyUzZmt3JTNka2V5d29yZCUyNmt3cXVlcnklM2QlMjZ3dGl0bGUlM2QlMjZhY2N0eXBlJTNkYWNjMSUyNm1zY2xraWQlM2QzMjdjMzAzMGQ3ZmExY2MzOWQ4YjVhMmQ5ZmRlYWFjZSUyNnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX21lZGl1bSUzZGNwYyUyNnV0bV9jYW1wYWlnbiUzZE1hbnVhbF9BdWRpZW5jZXNfQWxsJTI1MjBVUyUyNTIwRFNLUF9SVl9NYXR0cmVzc19NU04lMjZ1dG1fdGVybSUzZGtleXdvcmQlMjZ1dG1fY29udGVudCUzZEJlc3QlMjUyMFJWJTI1MjBNYXR0cmVzcw%26rlid%3D327c3030d7fa1cc39d8b5a2d9fdeaace&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
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
                  - link "Nifty Bank Nifty Bank Index Dropping fast ‎-1.07%‎ 53,658.55" [ref=e375]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkrnm&noti=Price&ocid=hpmsn
                    - generic [ref=e376]:
                      - generic [ref=e377]:
                        - generic [ref=e378]: Nifty Bank
                        - img "Nifty Bank Index" [ref=e379]
                      - generic [ref=e381]: Dropping fast
                    - generic [ref=e386]:
                      - generic [ref=e387]: ‎-1.07%‎
                      - generic [ref=e388]: 53,658.55
                    - button "Add to watchlist" [ref=e391]:
                      - img [ref=e392]
                  - link "Gold Gold Dropping fast ‎-1.53%‎ 4,522.80" [ref=e396]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwoc&noti=Price&ocid=hpmsn
                    - generic [ref=e397]:
                      - generic [ref=e398]:
                        - generic [ref=e399]: Gold
                        - img "Gold" [ref=e400]
                      - generic [ref=e402]: Dropping fast
                    - generic [ref=e407]:
                      - generic [ref=e408]: ‎-1.53%‎
                      - generic [ref=e409]: 4,522.80
                    - button "Add to watchlist" [ref=e412]:
                      - img [ref=e413]
                  - link "24K Gold (10 Grams) - Indian Rupee XAUINR ‎-1.12%‎ 153830" [ref=e417]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&ocid=hpmsn
                    - generic [ref=e418]:
                      - generic [ref=e420]: 24K Gold (10 Grams) - Indian Rupee
                      - generic [ref=e422]: XAUINR
                    - generic [ref=e427]:
                      - generic [ref=e428]: ‎-1.12%‎
                      - generic [ref=e429]: "153830"
                    - button "Add to watchlist" [ref=e432]:
                      - img [ref=e433]
                  - link "ITC Ltd ITC Ltd Dropping fast ‎-1.97%‎ 281.25" [ref=e437]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahie2w&noti=Price&ocid=hpmsn
                    - generic [ref=e438]:
                      - generic [ref=e439]:
                        - generic [ref=e440]: ITC Ltd
                        - img "ITC Ltd" [ref=e441]
                      - generic [ref=e443]: Dropping fast
                    - generic [ref=e448]:
                      - generic [ref=e449]: ‎-1.97%‎
                      - generic [ref=e450]: "281.25"
                    - button "Add to watchlist" [ref=e453]:
                      - img [ref=e454]
                  - link "Adani Power Ltd Adani Power Ltd Dropping fast ‎-4.26%‎ 233.00" [ref=e458]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahgr9c&noti=Price&ocid=hpmsn
                    - generic [ref=e459]:
                      - generic [ref=e460]:
                        - generic [ref=e461]: Adani Power Ltd
                        - img "Adani Power Ltd" [ref=e462]
                      - generic [ref=e464]: Dropping fast
                    - generic [ref=e469]:
                      - generic [ref=e470]: ‎-4.26%‎
                      - generic [ref=e471]: "233.00"
                    - button "Add to watchlist" [ref=e474]:
                      - img [ref=e475]
                - generic [ref=e479]:
                  - generic [ref=e480]:
                    - generic "Previous" [ref=e481]:
                      - button "Previous" [ref=e482]
                    - tablist [ref=e484]:
                      - tab "tab-0" [selected] [ref=e485]
                      - tab "tab-1" [ref=e487]
                      - tab "tab-2" [ref=e489]
                      - tab "tab-3" [ref=e491]
                      - tab "tab-4" [ref=e493]
                      - tab "tab-5"
                      - tab "tab-6"
                    - generic "Next" [ref=e495]:
                      - button "Next" [ref=e496]
                  - link "See watchlist suggestions" [ref=e498]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - article [ref=e499] [cursor=pointer]:
              - generic [ref=e504]:
                - generic [ref=e506]:
                  - link "Top stories" [ref=e508]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a1d48225f704fcc96cb67e199213193&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e509]
                  - button "More options" [ref=e511]
                - list [ref=e514]:
                  - 'listitem "''This is fraud'': Rahul Gandhi raises fresh questions over CBSE OSM row, alleges phone-scanned answer sheets" [ref=e515]':
                    - generic [ref=e516]:
                      - generic [ref=e517]:
                        - img [ref=e518]
                        - generic [ref=e519]:
                          - generic: WION ·now
                      - generic [ref=e520]: "'This is fraud': Rahul Gandhi raises fresh questions over CBSE OSM row, alleges phone-scanned answer sheets"
                  - 'listitem "Got ₹7 lakh gifts, wanted car: UP woman found dead months after wedding with social media influencer" [ref=e521]':
                    - generic [ref=e522]:
                      - generic [ref=e523]:
                        - img [ref=e524]
                        - generic [ref=e525]:
                          - generic: Hindustan Times ·1h
                      - generic [ref=e526]: "Got ₹7 lakh gifts, wanted car: UP woman found dead months after wedding with social media influencer"
                  - listitem "US hits military sites, radars inside Iranian territory in 'self-defence' strikes" [ref=e527]:
                    - generic [ref=e528]:
                      - generic [ref=e529]:
                        - img [ref=e530]
                        - generic [ref=e531]:
                          - generic: The Indian Express ·2h
                      - generic [ref=e532]: US hits military sites, radars inside Iranian territory in 'self-defence' strikes
                - generic [ref=e534]:
                  - generic [ref=e535]:
                    - generic "Previous" [ref=e536]:
                      - button "Previous" [ref=e537]
                    - tablist [ref=e539]:
                      - tab "tab-0" [selected] [ref=e540]
                      - tab "tab-1" [ref=e542]
                      - tab "tab-2" [ref=e544]
                    - generic "Next" [ref=e546]:
                      - button "Next" [ref=e547]
                  - link "See more" [ref=e549]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a1d48225f704fcc96cb67e199213193&ocid=hpmsn
            - article "This Game is So Beautiful (A Must-Have!)" [ref=e550] [cursor=pointer]:
              - generic [ref=e552]:
                - img [ref=e553]
                - generic [ref=e554]:
                  - generic [ref=e555]:
                    - generic [ref=e558]: "Raid: Shadow Legends"
                    - 'link "This Game is So Beautiful (A Must-Have!), Raid: Shadow Legends" [ref=e559]':
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=0c930f86-8042-4acc-91f6-ac879c33cf64&bdc=oa&bidId=10&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=rhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=6b909242-dc31-4e82-bd11-dadfaa774a6b&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8lKlT0Tb0ynWJch1S-Z_msDVUCUxaJvqur8zp9CO3Z1jGA0GfOXQuU1gQ_TwV5tWYsYz9zE6znrRaIl-XLYRNkTW_FvP9fT8blbXlSEcrzNPQ63GrEUDt-bvK7pUeiESpWRRDseIyFzYuiQFST-84kN3NMzE24U1IWOkzuWfTTca2ps59BgSNxCUt57XN9Nb9grPpmQ%26u%3DaHR0cHMlM2ElMmYlMmZscHMucGxhcml1bS5jb20lMmZlbiUyZmRlc2t0b3AlMmZyYWlkJTJmcmRvJTJmY3JvJTJmcmVwbGljYV90aHJfZXhpdDA1X2YwMzhfMnN0cF9qdDM4NDMlM2ZwbGlkJTNkMTc5MTQ5MCUyNnB4bCUzZGJpbmdfbmF0aXZlJTI2cHVibGlzaGVyaWQlM2Q4MDQ3MDcxNzU1ODk2MiUyNnBsYWNlbWVudCUzZDIzMzIyNzAzMjE1MTM3MDZfa2V5d29yZCUyNmFkcGFydG5lcnNldCUzZDEyODc1Mjk1Mjk2MTY5ODUlMjZjbGlja0lkJTNkNDQ4YzY2MjllMjUxMWRkZmY1NzYwYzM0YWE3NTg0MWElMjZtc2Nsa2lkJTNkNDQ4YzY2MjllMjUxMWRkZmY1NzYwYzM0YWE3NTg0MWElMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RCaW5nX1JBRF9VU19OYXRpdmVfVGVzdF8xNzkxNDkwJTI2dXRtX3Rlcm0lM2RrZXl3b3JkJTI2dXRtX2NvbnRlbnQlM2RHZW5lcmFsJTI1MjBUZXN0%26rlid%3D448c6629e2511ddff5760c34aa75841a&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: This Game is So Beautiful (A Must-Have!)
                  - link "Sponsored" [ref=e561]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=0c930f86-8042-4acc-91f6-ac879c33cf64&bdc=oa&bidId=10&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=rhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=6b909242-dc31-4e82-bd11-dadfaa774a6b&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8lKlT0Tb0ynWJch1S-Z_msDVUCUxaJvqur8zp9CO3Z1jGA0GfOXQuU1gQ_TwV5tWYsYz9zE6znrRaIl-XLYRNkTW_FvP9fT8blbXlSEcrzNPQ63GrEUDt-bvK7pUeiESpWRRDseIyFzYuiQFST-84kN3NMzE24U1IWOkzuWfTTca2ps59BgSNxCUt57XN9Nb9grPpmQ%26u%3DaHR0cHMlM2ElMmYlMmZscHMucGxhcml1bS5jb20lMmZlbiUyZmRlc2t0b3AlMmZyYWlkJTJmcmRvJTJmY3JvJTJmcmVwbGljYV90aHJfZXhpdDA1X2YwMzhfMnN0cF9qdDM4NDMlM2ZwbGlkJTNkMTc5MTQ5MCUyNnB4bCUzZGJpbmdfbmF0aXZlJTI2cHVibGlzaGVyaWQlM2Q4MDQ3MDcxNzU1ODk2MiUyNnBsYWNlbWVudCUzZDIzMzIyNzAzMjE1MTM3MDZfa2V5d29yZCUyNmFkcGFydG5lcnNldCUzZDEyODc1Mjk1Mjk2MTY5ODUlMjZjbGlja0lkJTNkNDQ4YzY2MjllMjUxMWRkZmY1NzYwYzM0YWE3NTg0MWElMjZtc2Nsa2lkJTNkNDQ4YzY2MjllMjUxMWRkZmY1NzYwYzM0YWE3NTg0MWElMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RCaW5nX1JBRF9VU19OYXRpdmVfVGVzdF8xNzkxNDkwJTI2dXRtX3Rlcm0lM2RrZXl3b3JkJTI2dXRtX2NvbnRlbnQlM2RHZW5lcmFsJTI1MjBUZXN0%26rlid%3D448c6629e2511ddff5760c34aa75841a&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e563]:
                  - img [ref=e564]
            - article "Indian women strike a pose in sarees at Eiffel Tower in Paris. Video is viral" [ref=e565] [cursor=pointer]:
              - generic [ref=e567]:
                - img [ref=e568]
                - generic [ref=e569]:
                  - generic [ref=e570]:
                    - generic [ref=e571]:
                      - generic [ref=e572]:
                        - img [ref=e573]
                        - generic [ref=e574]: India Today
                      - generic [ref=e575]: ·
                      - generic [ref=e576]: 2h
                    - link "Indian women strike a pose in sarees at Eiffel Tower in Paris. Video is viral, India Today" [ref=e577]:
                      - /url: https://www.msn.com/en-in/entertainment/hollywood/indian-women-strike-a-pose-in-sarees-at-eiffel-tower-in-paris-video-is-viral/ar-AA24wkNh
                      - text: Indian women strike a pose in sarees at Eiffel Tower in Paris. Video is viral
                  - generic "Indian women strike a pose in sarees at Eiffel Tower in Paris. Video is viral" [ref=e580]:
                    - generic [ref=e582]:
                      - generic [ref=e583]:
                        - button "17 Like" [ref=e584]:
                          - generic [ref=e585]:
                            - img [ref=e586]
                            - generic [ref=e588]: "17"
                        - button "Dislike" [ref=e589]:
                          - img [ref=e591]
                      - link "View comments 2 Comment" [ref=e594]:
                        - /url: https://www.msn.com/en-in/entertainment/hollywood/indian-women-strike-a-pose-in-sarees-at-eiffel-tower-in-paris-video-is-viral/ar-AA24wkNh#comments
                        - button "View comments 2 Comment" [ref=e595]:
                          - img [ref=e596]
                        - generic [ref=e598]: "2"
                - generic [ref=e599]:
                  - button "Hide this story" [ref=e600]:
                    - img [ref=e601]
                    - text: Hide this story
                  - button "See more" [ref=e602]:
                    - img [ref=e603]
            - 'article "Vaibhav Sooryavanshi supremacy: How much prize money did he win in IPL 2026? Full breakdown" [ref=e604] [cursor=pointer]':
              - generic [ref=e606]:
                - img [ref=e607]
                - generic [ref=e608]:
                  - generic [ref=e609]:
                    - generic [ref=e610]:
                      - generic [ref=e611]:
                        - img [ref=e612]
                        - generic [ref=e613]: Hindustan Times
                      - generic [ref=e614]: ·
                      - generic [ref=e615]: 7h
                    - 'link "Vaibhav Sooryavanshi supremacy: How much prize money did he win in IPL 2026? Full breakdown, Hindustan Times" [ref=e616]':
                      - /url: https://www.msn.com/en-in/sports/cricket/vaibhav-sooryavanshi-supremacy-how-much-prize-money-did-he-win-in-ipl-2026-full-breakdown/ar-AA24w1jF
                      - text: "Vaibhav Sooryavanshi supremacy: How much prize money did he win in IPL 2026? Full breakdown"
                  - 'generic "Vaibhav Sooryavanshi supremacy: How much prize money did he win in IPL 2026? Full breakdown" [ref=e619]':
                    - generic [ref=e621]:
                      - generic [ref=e622]:
                        - button "70 Like" [ref=e623]:
                          - generic [ref=e624]:
                            - img [ref=e625]
                            - generic [ref=e627]: "70"
                        - button "Dislike" [ref=e628]:
                          - img [ref=e630]
                      - link "Start the conversation" [ref=e633]:
                        - /url: https://www.msn.com/en-in/sports/cricket/vaibhav-sooryavanshi-supremacy-how-much-prize-money-did-he-win-in-ipl-2026-full-breakdown/ar-AA24w1jF#comments
                        - button "Start the conversation" [ref=e634]:
                          - img [ref=e635]
                - generic [ref=e637]:
                  - button "Hide this story" [ref=e638]:
                    - img [ref=e639]
                    - text: Hide this story
                  - button "See more" [ref=e640]:
                    - img [ref=e641]
          - generic [ref=e642]:
            - article [ref=e643] [cursor=pointer]:
              - generic [ref=e648]:
                - generic [ref=e650]:
                  - link "Top Engaging News" [ref=e652]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a1d48225f704fcc96cb67e199213193
                    - heading "Top Engaging News" [level=2] [ref=e653]
                  - button "More options" [ref=e655]
                - generic [ref=e657]:
                  - link "The Economic Times 11 Comments Harsh Goenka shares Swiss hotel's special rules for Indian guests, says 'our civic sense seriously needs to be upgraded' amid viral garba videos" [ref=e659]:
                    - /url: https://www.msn.com/en-in/news/other/harsh-goenka-shares-swiss-hotel-s-special-rules-for-indian-guests-says-our-civic-sense-seriously-needs-to-be-upgraded-amid-viral-garba-videos/ar-AA24u80r
                    - generic [ref=e660]:
                      - img [ref=e661]
                      - generic [ref=e662]: The Economic Times
                      - link "11 Comments" [ref=e664]:
                        - /url: https://www.msn.com/en-in/news/other/harsh-goenka-shares-swiss-hotel-s-special-rules-for-indian-guests-says-our-civic-sense-seriously-needs-to-be-upgraded-amid-viral-garba-videos/ar-AA24u80r#comments
                        - img [ref=e665]
                        - paragraph [ref=e666]: "11"
                    - paragraph [ref=e667]: Harsh Goenka shares Swiss hotel's special rules for Indian guests, says 'our civic sense seriously needs to be upgraded' amid viral garba videos
                  - link "The Indian Express 4 Comments Suman Kalyanpur, the gentle voice of Hindi cinema, passes away" [ref=e669]:
                    - /url: https://www.msn.com/en-in/entertainment/southcinema/suman-kalyanpur-the-gentle-voice-of-hindi-cinema-passes-away/ar-AA24v771
                    - generic [ref=e670]:
                      - img [ref=e671]
                      - generic [ref=e672]: The Indian Express
                      - link "4 Comments" [ref=e674]:
                        - /url: https://www.msn.com/en-in/entertainment/southcinema/suman-kalyanpur-the-gentle-voice-of-hindi-cinema-passes-away/ar-AA24v771#comments
                        - img [ref=e675]
                        - paragraph [ref=e676]: "4"
                    - paragraph [ref=e677]: Suman Kalyanpur, the gentle voice of Hindi cinema, passes away
                  - link "ThePrint 4 Comments How the culture ministry’s post about a 4,500-yr-old Pashupati seal triggered a national identity crisis" [ref=e679]:
                    - /url: https://www.msn.com/en-in/news/india/how-the-culture-ministry-s-post-about-a-4-500-yr-old-pashupati-seal-triggered-a-national-identity-crisis/ar-AA24wM9Y
                    - generic [ref=e680]:
                      - img [ref=e681]
                      - generic [ref=e682]: ThePrint
                      - link "4 Comments" [ref=e684]:
                        - /url: https://www.msn.com/en-in/news/india/how-the-culture-ministry-s-post-about-a-4-500-yr-old-pashupati-seal-triggered-a-national-identity-crisis/ar-AA24wM9Y#comments
                        - img [ref=e685]
                        - paragraph [ref=e686]: "4"
                    - paragraph [ref=e687]: How the culture ministry’s post about a 4,500-yr-old Pashupati seal triggered a national identity crisis
                - generic [ref=e689]:
                  - generic [ref=e690]:
                    - generic "Previous" [ref=e691]:
                      - button "Previous" [ref=e692]
                    - tablist [ref=e694]:
                      - tab "tab-0" [selected] [ref=e695]
                      - tab "tab-1" [ref=e697]
                      - tab "tab-2" [ref=e699]
                    - generic "Next" [ref=e701]:
                      - button "Next" [ref=e702]
                  - link "See more" [ref=e704]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a1d48225f704fcc96cb67e199213193
            - article [ref=e705] [cursor=pointer]:
              - generic [ref=e711]:
                - generic [ref=e713]:
                  - link "Washington" [ref=e715]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
                    - heading "Washington" [level=2] [ref=e716]
                  - button "My location" [ref=e717]
                  - button "More options" [ref=e719]
                - generic [ref=e723]:
                  - generic [ref=e724]:
                    - generic [ref=e726]:
                      - link "Clear" [ref=e727]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
                        - img "Clear" [ref=e728]
                      - link "14°C" [ref=e729]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
                        - generic [ref=e730]: ‎14‎
                        - generic [ref=e732]: ‎°C‎
                    - generic [ref=e734]:
                      - link "Good air quality" [ref=e736]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia&fcsttab=airquality
                        - text: Good air quality
                      - link "See full forecast" [ref=e738]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia&fcsttab=airquality
                        - img "arrow" [ref=e739]
                  - generic [ref=e744]:
                    - link "Larger map" [ref=e745]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Washington,Virginia
                      - generic [ref=e746]:
                        - generic:
                          - generic:
                            - img
                            - img
                      - img
                    - link "Check global air quality" [ref=e747]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Washington,Virginia
                      - img [ref=e749]
                      - generic "Check global air quality" [ref=e750]
                      - img [ref=e752]
                - button "See full forecast" [ref=e755]
            - 'article "Ghaziabad horror: International para-athlete Chirag Tyagi found dead" [ref=e756] [cursor=pointer]':
              - generic [ref=e758]:
                - generic [ref=e762]:
                  - generic [ref=e763]:
                    - generic [ref=e764]:
                      - generic [ref=e765]:
                        - img [ref=e766]
                        - generic [ref=e767]: ABP - Live
                      - generic [ref=e768]: ·
                      - generic [ref=e769]: 23h
                    - 'link "Ghaziabad horror: International para-athlete Chirag Tyagi found dead, ABP - Live" [ref=e770]':
                      - /url: https://www.msn.com/en-in/news/india/ghaziabad-horror-international-para-athlete-chirag-tyagi-found-dead/vi-AA24sKza
                      - text: "Ghaziabad horror: International para-athlete Chirag Tyagi found dead"
                  - 'generic "Ghaziabad horror: International para-athlete Chirag Tyagi found dead" [ref=e773]':
                    - generic [ref=e775]:
                      - generic [ref=e776]:
                        - button "41 Like" [ref=e777]:
                          - generic [ref=e778]:
                            - img [ref=e779]
                            - generic [ref=e781]: "41"
                        - button "Dislike" [ref=e782]:
                          - img [ref=e784]
                      - link "View comments 1 Comment" [ref=e787]:
                        - /url: https://www.msn.com/en-in/news/india/ghaziabad-horror-international-para-athlete-chirag-tyagi-found-dead/vi-AA24sKza#comments
                        - button "View comments 1 Comment" [ref=e788]:
                          - img [ref=e789]
                        - generic [ref=e791]: "1"
                - generic [ref=e792]:
                  - button "Hide this story" [ref=e793]:
                    - img [ref=e794]
                    - text: Hide this story
                  - button "See more" [ref=e795]:
                    - img [ref=e796]
            - 'article "Weather alert: IMD forecasts thunderstorms, hailstorms in 19 states on June 1; heavy rain likely | Affected regions" [ref=e797] [cursor=pointer]':
              - generic [ref=e799]:
                - img [ref=e800]
                - generic [ref=e801]:
                  - generic [ref=e802]:
                    - generic [ref=e803]:
                      - generic [ref=e804]:
                        - img [ref=e805]
                        - generic [ref=e806]: The Daily Jagran
                      - generic [ref=e807]: ·
                      - generic [ref=e808]: 19h
                    - 'link "Weather alert: IMD forecasts thunderstorms, hailstorms in 19 states on June 1; heavy rain likely | Affected regions, The Daily Jagran" [ref=e809]':
                      - /url: https://www.msn.com/en-in/news/india/weather-alert-imd-forecasts-thunderstorms-hailstorms-in-19-states-on-june-1-heavy-rain-likely-affected-regions/ar-AA24ustm
                      - text: "Weather alert: IMD forecasts thunderstorms, hailstorms in 19 states on June 1; heavy rain likely | Affected regions"
                  - 'generic "Weather alert: IMD forecasts thunderstorms, hailstorms in 19 states on June 1; heavy rain likely | Affected regions" [ref=e812]':
                    - generic [ref=e814]:
                      - generic [ref=e815]:
                        - button "18 Like" [ref=e816]:
                          - generic [ref=e817]:
                            - img [ref=e818]
                            - generic [ref=e820]: "18"
                        - button "Dislike" [ref=e821]:
                          - img [ref=e823]
                      - link "View comments 1 Comment" [ref=e826]:
                        - /url: https://www.msn.com/en-in/news/india/weather-alert-imd-forecasts-thunderstorms-hailstorms-in-19-states-on-june-1-heavy-rain-likely-affected-regions/ar-AA24ustm#comments
                        - button "View comments 1 Comment" [ref=e827]:
                          - img [ref=e828]
                        - generic [ref=e830]: "1"
                - generic [ref=e831]:
                  - button "Hide this story" [ref=e832]:
                    - img [ref=e833]
                    - text: Hide this story
                  - button "See more" [ref=e834]:
                    - img [ref=e835]
            - article [ref=e836] [cursor=pointer]
            - 'article "Bombers vs bulldozers: US strikes fall short as Iran restores access to underground missile sites" [ref=e843] [cursor=pointer]':
              - generic [ref=e845]:
                - img [ref=e846]
                - generic [ref=e847]:
                  - generic [ref=e848]:
                    - generic [ref=e849]:
                      - generic [ref=e850]:
                        - img [ref=e851]
                        - generic [ref=e852]: News18
                      - generic [ref=e853]: ·
                      - generic [ref=e854]: 3h
                    - 'link "Bombers vs bulldozers: US strikes fall short as Iran restores access to underground missile sites, News18" [ref=e855]':
                      - /url: https://www.msn.com/en-in/news/world/bombers-vs-bulldozers-us-strikes-fall-short-as-iran-restores-access-to-underground-missile-sites/ar-AA24wu95
                      - text: "Bombers vs bulldozers: US strikes fall short as Iran restores access to underground missile sites"
                  - 'generic "Bombers vs bulldozers: US strikes fall short as Iran restores access to underground missile sites" [ref=e858]':
                    - generic [ref=e860]:
                      - generic [ref=e861]:
                        - button "3 Like" [ref=e862]:
                          - generic [ref=e863]:
                            - img [ref=e864]
                            - generic [ref=e866]: "3"
                        - button "Dislike" [ref=e867]:
                          - img [ref=e869]
                      - link "Start the conversation" [ref=e872]:
                        - /url: https://www.msn.com/en-in/news/world/bombers-vs-bulldozers-us-strikes-fall-short-as-iran-restores-access-to-underground-missile-sites/ar-AA24wu95#comments
                        - button "Start the conversation" [ref=e873]:
                          - img [ref=e874]
                - generic [ref=e876]:
                  - button "Hide this story" [ref=e877]:
                    - img [ref=e878]
                    - text: Hide this story
                  - button "See more" [ref=e879]:
                    - img [ref=e880]
            - article [ref=e881] [cursor=pointer]
            - article "Demolition drive removes Dum Dum Stn encroachers" [ref=e888] [cursor=pointer]:
              - generic [ref=e890]:
                - img [ref=e891]
                - generic [ref=e892]:
                  - generic [ref=e893]:
                    - generic [ref=e894]:
                      - generic [ref=e895]:
                        - img [ref=e896]
                        - generic [ref=e897]: The Times of India
                      - generic [ref=e898]: ·
                      - generic [ref=e899]: 15h
                    - link "Demolition drive removes Dum Dum Stn encroachers, The Times of India" [ref=e900]:
                      - /url: https://www.msn.com/en-in/news/india/demolition-drive-removes-dum-dum-stn-encroachers/ar-AA24uIUj
                      - text: Demolition drive removes Dum Dum Stn encroachers
                  - generic "Demolition drive removes Dum Dum Stn encroachers" [ref=e903]:
                    - generic [ref=e905]:
                      - generic [ref=e906]:
                        - button "42 Like" [ref=e907]:
                          - generic [ref=e908]:
                            - img [ref=e909]
                            - generic [ref=e911]: "42"
                        - button "Dislike" [ref=e912]:
                          - img [ref=e914]
                      - link "Start the conversation" [ref=e917]:
                        - /url: https://www.msn.com/en-in/news/india/demolition-drive-removes-dum-dum-stn-encroachers/ar-AA24uIUj#comments
                        - button "Start the conversation" [ref=e918]:
                          - img [ref=e919]
                - generic [ref=e921]:
                  - button "Hide this story" [ref=e922]:
                    - img [ref=e923]
                    - text: Hide this story
                  - button "See more" [ref=e924]:
                    - img [ref=e925]
          - article [ref=e927]
          - generic [ref=e929]:
            - article [ref=e930] [cursor=pointer]:
              - generic [ref=e935]:
                - generic [ref=e936]:
                  - generic [ref=e937]:
                    - link "Recommended videos" [ref=e938]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e939]
                    - link "Recommended videos" [ref=e942]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e943]:
                    - generic:
                      - link "See more" [ref=e944]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e945]:
                        - button "More options" [ref=e946]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e948]:
                  - generic [ref=e950]:
                    - generic [ref=e952]:
                      - generic:
                        - article [ref=e955]:
                          - generic [ref=e956]:
                            - img "Golden Retriever Always Involved No Matter What" [ref=e958]
                            - generic [ref=e960]: 03:05
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e961]:
                              - generic [ref=e962]:
                                - img "Tucker Budzyn" [ref=e963]
                                - generic "Tucker Budzyn" [ref=e965]
                              - link "Golden retriever always involved no matter what" [ref=e966]:
                                - /url: https://www.msn.com/en-in/news/india/golden-retriever-always-involved-no-matter-what/vi-AA20o2vi?ocid=hpmsn
                                - heading "Golden retriever always involved no matter what" [level=2] [ref=e967]:
                                  - generic: Golden retriever always involved no matter what
                            - button "See more" [ref=e971]
                        - article "After PM Balen Shah's controversial remarks, India hosts Nepal opposition chief" [ref=e974]:
                          - generic [ref=e975]:
                            - img "After PM Balen Shah's Controversial Remarks, India Hosts Nepal Opposition Chief" [ref=e977]
                            - generic [ref=e979]: 03:01
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e980]:
                              - generic [ref=e981]:
                                - img "The Times of India" [ref=e982]
                                - generic [ref=e983]:
                                  - generic:
                                    - generic "The Times of India" [ref=e984]
                                    - generic [ref=e985]: ·
                                    - generic [ref=e986]: now
                              - link "After PM Balen Shah's controversial remarks, India hosts Nepal opposition chief" [ref=e987]:
                                - /url: https://www.msn.com/en-in/video/news/after-pm-balen-shah-s-controversial-remarks-india-hosts-nepal-opposition-chief/vi-AA24x1fM?ocid=hpmsn
                                - heading "After PM Balen Shah's controversial remarks, India hosts Nepal opposition chief" [level=2] [ref=e988]:
                                  - generic: After PM Balen Shah's controversial remarks, India hosts Nepal opposition chief
                            - button "See more" [ref=e992]
                        - 'article "Weather alert: Strong winds trigger major road accident in Uttar Pradesh" [ref=e995]':
                          - generic [ref=e996]:
                            - 'img "Weather Alert: Strong Winds Trigger Major Road Accident in Uttar Pradesh" [ref=e998]'
                            - generic [ref=e1000]: 00:54
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1001]:
                              - generic [ref=e1002]:
                                - img "ABP - Live" [ref=e1003]
                                - generic [ref=e1004]:
                                  - generic:
                                    - generic "ABP - Live" [ref=e1005]
                                    - generic [ref=e1006]: ·
                                    - generic [ref=e1007]: 23h
                              - 'link "Weather alert: Strong winds trigger major road accident in Uttar Pradesh" [ref=e1008]':
                                - /url: https://www.msn.com/en-in/news/india/weather-alert-strong-winds-trigger-major-road-accident-in-uttar-pradesh/vi-AA24sozq?ocid=hpmsn
                                - 'heading "Weather alert: Strong winds trigger major road accident in Uttar Pradesh" [level=2] [ref=e1009]':
                                  - generic: "Weather alert: Strong winds trigger major road accident in Uttar Pradesh"
                            - button "See more" [ref=e1013]
                        - 'article "''Gandhi is the hero'': Kamal Haasan on the message behind his documentary" [ref=e1016]':
                          - generic [ref=e1017]:
                            - 'img "''Gandhi Is The Hero'': Kamal Haasan On The Message Behind His Documentary" [ref=e1019]'
                            - generic [ref=e1021]: 03:27
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1022]:
                              - generic [ref=e1023]:
                                - img "NDTV 24x7" [ref=e1024]
                                - generic "NDTV 24x7" [ref=e1026]
                              - 'link "''Gandhi is the hero'': Kamal Haasan on the message behind his documentary" [ref=e1027]':
                                - /url: https://www.msn.com/en-in/video/news/gandhi-is-the-hero-kamal-haasan-on-the-message-behind-his-documentary/vi-AA1Vn0tL?ocid=hpmsn
                                - 'heading "''Gandhi is the hero'': Kamal Haasan on the message behind his documentary" [level=2] [ref=e1028]':
                                  - generic: "'Gandhi is the hero': Kamal Haasan on the message behind his documentary"
                            - button "See more" [ref=e1032]
                        - article [ref=e1035]:
                          - generic [ref=e1036]:
                            - img "Inside Japan’s Abandoned Love Hotel" [ref=e1038]
                            - generic [ref=e1040]: 17:20
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1041]:
                              - generic [ref=e1042]:
                                - img "Tokyo Lens" [ref=e1043]
                                - generic "Tokyo Lens" [ref=e1045]
                              - link "Inside Japan’s abandoned love hotel" [ref=e1046]:
                                - /url: https://www.msn.com/en-in/news/world/inside-japan-s-abandoned-love-hotel/vi-AA21gETr?ocid=hpmsn
                                - heading "Inside Japan’s abandoned love hotel" [level=2] [ref=e1047]:
                                  - generic: Inside Japan’s abandoned love hotel
                            - button "See more" [ref=e1051]
                        - article [ref=e1054]:
                          - generic [ref=e1055]:
                            - img "This Paris Apartment Has a Kitchen Behind Doors - And It’s Genius" [ref=e1057]
                            - generic [ref=e1059]: 10:13
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1060]:
                              - generic [ref=e1061]:
                                - img "NEVER TOO SMALL" [ref=e1062]
                                - generic "NEVER TOO SMALL" [ref=e1064]
                              - link "This Paris apartment has a kitchen behind doors - and it’s genius" [ref=e1065]:
                                - /url: https://www.msn.com/en-in/travel/news/this-paris-apartment-has-a-kitchen-behind-doors-and-it-s-genius/vi-AA1VDROX?ocid=hpmsn
                                - heading "This Paris apartment has a kitchen behind doors - and it’s genius" [level=2] [ref=e1066]:
                                  - generic: This Paris apartment has a kitchen behind doors - and it’s genius
                            - button "See more" [ref=e1070]
                        - article [ref=e1073]:
                          - generic [ref=e1074]:
                            - img "Golden Retriever Finds The Perfect Chew Toy" [ref=e1076]
                            - generic [ref=e1078]: 01:47
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1079]:
                              - generic [ref=e1080]:
                                - img "Tucker Budzyn" [ref=e1081]
                                - generic [ref=e1082]:
                                  - generic:
                                    - generic "Tucker Budzyn" [ref=e1083]
                                    - generic [ref=e1084]: ·
                                    - generic [ref=e1085]: 2w
                              - link "Golden retriever finds the perfect chew toy" [ref=e1086]:
                                - /url: https://www.msn.com/en-in/entertainment/hollywood/golden-retriever-finds-the-perfect-chew-toy/vi-AA23nl0Q?ocid=hpmsn
                                - heading "Golden retriever finds the perfect chew toy" [level=2] [ref=e1087]:
                                  - generic: Golden retriever finds the perfect chew toy
                            - button "See more" [ref=e1091]
                        - article "America's ally Armenia stuns US; Su-30 jets spotted carrying deadly Iranian glide bombs | WATCH" [ref=e1094]:
                          - generic [ref=e1095]:
                            - img "America's Ally Armenia Stuns US; Su-30 Jets Spotted Carrying Deadly Iranian Glide Bombs | WATCH" [ref=e1097]
                            - generic [ref=e1099]: 08:37
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1100]:
                              - generic [ref=e1101]:
                                - img "The Times of India" [ref=e1102]
                                - generic [ref=e1103]:
                                  - generic:
                                    - generic "The Times of India" [ref=e1104]
                                    - generic [ref=e1105]: ·
                                    - generic [ref=e1106]: 21h
                              - link "America's ally Armenia stuns US; Su-30 jets spotted carrying deadly Iranian glide bombs | WATCH" [ref=e1107]:
                                - /url: https://www.msn.com/en-in/news/world/america-s-ally-armenia-stuns-us-su-30-jets-spotted-carrying-deadly-iranian-glide-bombs-watch/vi-AA24sNuV?ocid=hpmsn
                                - heading "America's ally Armenia stuns US; Su-30 jets spotted carrying deadly Iranian glide bombs | WATCH" [level=2] [ref=e1108]:
                                  - generic: America's ally Armenia stuns US; Su-30 jets spotted carrying deadly Iranian glide bombs | WATCH
                            - button "See more" [ref=e1112]
                        - 'article "Breaking news: US naval activity intensifies in Strait of Hormuz" [ref=e1115]':
                          - generic [ref=e1116]:
                            - 'img "Breaking News: US Naval Activity Intensifies in Strait of Hormuz" [ref=e1118]'
                            - generic [ref=e1120]: 02:21
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1121]:
                              - generic [ref=e1122]:
                                - img "ABP - Live" [ref=e1123]
                                - generic [ref=e1124]:
                                  - generic:
                                    - generic "ABP - Live" [ref=e1125]
                                    - generic [ref=e1126]: ·
                                    - generic [ref=e1127]: 21h
                              - 'link "Breaking news: US naval activity intensifies in Strait of Hormuz" [ref=e1128]':
                                - /url: https://www.msn.com/en-in/news/world/breaking-news-us-naval-activity-intensifies-in-strait-of-hormuz/vi-AA24sQ1f?ocid=hpmsn
                                - 'heading "Breaking news: US naval activity intensifies in Strait of Hormuz" [level=2] [ref=e1129]':
                                  - generic: "Breaking news: US naval activity intensifies in Strait of Hormuz"
                            - button "See more" [ref=e1133]
                        - 'article "Breaking news: High-level meeting at PM residence in Delhi today" [ref=e1136]':
                          - generic [ref=e1137]:
                            - 'img "Breaking News: High-Level Meeting at PM Residence in Delhi Today" [ref=e1139]'
                            - generic [ref=e1141]: 02:21
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1142]:
                              - generic [ref=e1143]:
                                - img "ABP - Live" [ref=e1144]
                                - generic [ref=e1145]:
                                  - generic:
                                    - generic "ABP - Live" [ref=e1146]
                                    - generic [ref=e1147]: ·
                                    - generic [ref=e1148]: 20h
                              - 'link "Breaking news: High-level meeting at PM residence in Delhi today" [ref=e1149]':
                                - /url: https://www.msn.com/en-in/news/india/breaking-news-high-level-meeting-at-pm-residence-in-delhi-today/vi-AA24t7Rl?ocid=hpmsn
                                - 'heading "Breaking news: High-level meeting at PM residence in Delhi today" [level=2] [ref=e1150]':
                                  - generic: "Breaking news: High-level meeting at PM residence in Delhi today"
                            - button "See more" [ref=e1154]
                        - article "15-year-old Vaibhav Sooryavanshi rewrites IPL history, fastest to 1,000 runs" [ref=e1157]:
                          - generic [ref=e1158]:
                            - img "15-Year-Old Vaibhav Sooryavanshi Rewrites IPL History, Fastest To 1,000 Runs" [ref=e1160]
                            - generic [ref=e1162]: 03:02
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1163]:
                              - generic [ref=e1164]:
                                - img "NDTV 24x7" [ref=e1165]
                                - generic [ref=e1166]:
                                  - generic:
                                    - generic "NDTV 24x7" [ref=e1167]
                                    - generic [ref=e1168]: ·
                                    - generic [ref=e1169]: 2d
                              - link "15-year-old Vaibhav Sooryavanshi rewrites IPL history, fastest to 1,000 runs" [ref=e1170]:
                                - /url: https://www.msn.com/en-in/sports/cricket/15-year-old-vaibhav-sooryavanshi-rewrites-ipl-history-fastest-to-1-000-runs/vi-AA24ntI1?ocid=hpmsn
                                - heading "15-year-old Vaibhav Sooryavanshi rewrites IPL history, fastest to 1,000 runs" [level=2] [ref=e1171]:
                                  - generic: 15-year-old Vaibhav Sooryavanshi rewrites IPL history, fastest to 1,000 runs
                            - button "See more" [ref=e1175]
                        - article [ref=e1178]:
                          - generic [ref=e1179]:
                            - img "Sameera Reddy’s Healing Journey Through Yoga" [ref=e1181]
                            - generic [ref=e1183]: 03:14
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1184]:
                              - generic [ref=e1185]:
                                - img "The Times of India" [ref=e1186]
                                - generic "The Times of India" [ref=e1188]
                              - link "Sameera Reddy’s Healing Journey Through Yoga" [ref=e1189]:
                                - /url: https://www.msn.com/en-in/health/wellness/sameera-reddy-s-healing-journey-through-yoga/vi-AA1OzByc?ocid=hpmsn
                                - heading "Sameera Reddy’s Healing Journey Through Yoga" [level=2] [ref=e1190]:
                                  - generic: Sameera Reddy’s Healing Journey Through Yoga
                            - button "See more" [ref=e1194]
                        - 'article "BJP leader Annamalai to launch new movement in Tamil Nadu: Sources" [ref=e1197]':
                          - generic [ref=e1198]:
                            - 'img "BJP Leader Annamalai To Launch \"New Movement\" In Tamil Nadu: Sources" [ref=e1200]'
                            - generic [ref=e1202]: 09:27
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1203]:
                              - generic [ref=e1204]:
                                - img "NDTV 24x7" [ref=e1205]
                                - generic [ref=e1206]:
                                  - generic:
                                    - generic "NDTV 24x7" [ref=e1207]
                                    - generic [ref=e1208]: ·
                                    - generic [ref=e1209]: 14h
                              - 'link "BJP leader Annamalai to launch new movement in Tamil Nadu: Sources" [ref=e1210]':
                                - /url: https://www.msn.com/en-in/news/india/bjp-leader-annamalai-to-launch-new-movement-in-tamil-nadu-sources/vi-AA24ukzQ?ocid=hpmsn
                                - 'heading "BJP leader Annamalai to launch new movement in Tamil Nadu: Sources" [level=2] [ref=e1211]':
                                  - generic: "BJP leader Annamalai to launch new movement in Tamil Nadu: Sources"
                            - button "See more" [ref=e1215]
                        - article [ref=e1218]:
                          - generic [ref=e1219]:
                            - img "Watch What Happens When a Sloth Falls From a 100-Foot Tree" [ref=e1221]
                            - generic [ref=e1223]: 23:48
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1224]:
                              - generic [ref=e1225]:
                                - img "Real Science" [ref=e1226]
                                - generic "Real Science" [ref=e1228]
                              - link "Watch what happens when a sloth falls from a 100-foot tree" [ref=e1229]:
                                - /url: https://www.msn.com/en-in/news/india/watch-what-happens-when-a-sloth-falls-from-a-100-foot-tree/vi-AA1YK1vf?ocid=hpmsn
                                - heading "Watch what happens when a sloth falls from a 100-foot tree" [level=2] [ref=e1230]:
                                  - generic: Watch what happens when a sloth falls from a 100-foot tree
                            - button "See more" [ref=e1234]
                        - article "Khushbu Sundar meets Narendra Modi to personally invite him to daughter’s wedding" [ref=e1237]:
                          - generic [ref=e1238]:
                            - img "Khushbu Sundar Meets Narendra Modi To Personally Invite Him To Daughter’s Wedding" [ref=e1240]
                            - generic [ref=e1242]: 04:14
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1243]:
                              - generic [ref=e1244]:
                                - img "The Times of India" [ref=e1245]
                                - generic [ref=e1246]:
                                  - generic:
                                    - generic "The Times of India" [ref=e1247]
                                    - generic [ref=e1248]: ·
                                    - generic [ref=e1249]: 1d
                              - link "Khushbu Sundar meets Narendra Modi to personally invite him to daughter’s wedding" [ref=e1250]:
                                - /url: https://www.msn.com/en-in/lifestyle/weddings/khushbu-sundar-meets-narendra-modi-to-personally-invite-him-to-daughter-s-wedding/vi-AA24pHcG?ocid=hpmsn
                                - heading "Khushbu Sundar meets Narendra Modi to personally invite him to daughter’s wedding" [level=2] [ref=e1251]:
                                  - generic: Khushbu Sundar meets Narendra Modi to personally invite him to daughter’s wedding
                            - button "See more" [ref=e1255]
                        - 'article "Anu – Ek Hero Mujhme Bhi | #NiveshkaSahiKadam | @amfi_india" [ref=e1258]':
                          - generic [ref=e1259]:
                            - 'img "Anu – Ek Hero Mujhme Bhi | #NiveshkaSahiKadam | @amfi_india" [ref=e1261]'
                            - generic [ref=e1263]: 01:30
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1264]:
                              - generic [ref=e1265]:
                                - img "News18" [ref=e1266]
                                - generic "News18" [ref=e1268]
                              - 'link "Anu – Ek Hero Mujhme Bhi | #NiveshkaSahiKadam | @amfi_india" [ref=e1269]':
                                - /url: https://www.msn.com/en-in/news/india/anu-ek-hero-mujhme-bhi-niveshkasahikadam-amfi-india/vi-AA1LkNbY?ocid=hpmsn
                                - 'heading "Anu – Ek Hero Mujhme Bhi | #NiveshkaSahiKadam | @amfi_india" [level=2] [ref=e1270]':
                                  - generic: "Anu – Ek Hero Mujhme Bhi | #NiveshkaSahiKadam | @amfi_india"
                            - button "See more" [ref=e1274]
                        - article [ref=e1277]:
                          - generic [ref=e1278]:
                            - img "Watch What Happens When a Great White Shark Attacks" [ref=e1280]
                            - generic [ref=e1282]: 26:34
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1283]:
                              - generic [ref=e1284]:
                                - img "Real Science" [ref=e1285]
                                - generic "Real Science" [ref=e1287]
                              - link "Watch what happens when a great white shark attacks" [ref=e1288]:
                                - /url: https://www.msn.com/en-in/lifestyle/pets-animals/watch-what-happens-when-a-great-white-shark-attacks/vi-AA1XEBQ6?ocid=hpmsn
                                - heading "Watch what happens when a great white shark attacks" [level=2] [ref=e1289]:
                                  - generic: Watch what happens when a great white shark attacks
                            - button "See more" [ref=e1293]
                        - article [ref=e1296]:
                          - generic [ref=e1297]:
                            - img "This Apartment Has No Bedroom Walls… And People Love It" [ref=e1299]
                            - generic [ref=e1301]: 06:26
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1302]:
                              - generic [ref=e1303]:
                                - img "NEVER TOO SMALL" [ref=e1304]
                                - generic "NEVER TOO SMALL" [ref=e1306]
                              - link "This apartment has no bedroom walls and people love it" [ref=e1307]:
                                - /url: https://www.msn.com/en-in/video/entertainment/this-apartment-has-no-bedroom-walls-and-people-love-it/vi-AA20f1Ju?ocid=hpmsn
                                - heading "This apartment has no bedroom walls and people love it" [level=2] [ref=e1308]:
                                  - generic: This apartment has no bedroom walls and people love it
                            - button "See more" [ref=e1312]
                        - article [ref=e1315]:
                          - generic [ref=e1316]:
                            - img "My unforgettable journey in nepal" [ref=e1318]
                            - generic [ref=e1320]: 17:16
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1321]:
                              - generic [ref=e1322]:
                                - img "Sam Chui" [ref=e1323]
                                - generic "Sam Chui" [ref=e1325]
                              - link "My unforgettable journey in nepal" [ref=e1326]:
                                - /url: https://www.msn.com/en-in/travel/news/my-unforgettable-journey-in-nepal/vi-AA1Gm7yd?ocid=hpmsn
                                - heading "My unforgettable journey in nepal" [level=2] [ref=e1327]:
                                  - generic: My unforgettable journey in nepal
                            - button "See more" [ref=e1331]
                        - 'article "NEET paper leak case: Delhi court sends 5 accused to judicial custody till June 2" [ref=e1334]':
                          - generic [ref=e1335]:
                            - 'img "NEET paper leak case: Delhi court sends 5 accused to judicial custody till June 2" [ref=e1337]'
                            - generic [ref=e1339]: 02:50
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1340]:
                              - generic [ref=e1341]:
                                - img "India Today" [ref=e1342]
                                - generic [ref=e1343]:
                                  - generic:
                                    - generic "India Today" [ref=e1344]
                                    - generic [ref=e1345]: ·
                                    - generic [ref=e1346]: 1w
                              - 'link "NEET paper leak case: Delhi court sends 5 accused to judicial custody till June 2" [ref=e1347]':
                                - /url: https://www.msn.com/en-in/news/india/neet-paper-leak-case-delhi-court-sends-5-accused-to-judicial-custody-till-june-2/vi-AA23EqBH?ocid=hpmsn
                                - 'heading "NEET paper leak case: Delhi court sends 5 accused to judicial custody till June 2" [level=2] [ref=e1348]':
                                  - generic: "NEET paper leak case: Delhi court sends 5 accused to judicial custody till June 2"
                            - button "See more" [ref=e1352]
                        - link "See more" [ref=e1354]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1355]
                          - text: See more
                    - button "next" [ref=e1359]:
                      - img [ref=e1362]
            - article "Why Vijay chose Jana Nayagan over Karuppu as his final film" [ref=e1364] [cursor=pointer]:
              - generic [ref=e1366]:
                - img [ref=e1367]
                - generic [ref=e1368]:
                  - generic [ref=e1369]:
                    - generic [ref=e1370]:
                      - generic [ref=e1371]:
                        - img [ref=e1372]
                        - generic [ref=e1373]: India Today
                      - generic [ref=e1374]: ·
                      - generic [ref=e1375]: 6h
                    - link "Why Vijay chose Jana Nayagan over Karuppu as his final film, India Today" [ref=e1376]:
                      - /url: https://www.msn.com/en-in/entertainment/southcinema/why-vijay-chose-jana-nayagan-over-karuppu-as-his-final-film/ar-AA24vRwI
                      - text: Why Vijay chose Jana Nayagan over Karuppu as his final film
                  - generic "Why Vijay chose Jana Nayagan over Karuppu as his final film" [ref=e1379]:
                    - generic [ref=e1381]:
                      - generic [ref=e1382]:
                        - button "17 Like" [ref=e1383]:
                          - generic [ref=e1384]:
                            - img [ref=e1385]
                            - generic [ref=e1387]: "17"
                        - button "Dislike" [ref=e1388]:
                          - img [ref=e1390]
                      - link "Start the conversation" [ref=e1393]:
                        - /url: https://www.msn.com/en-in/entertainment/southcinema/why-vijay-chose-jana-nayagan-over-karuppu-as-his-final-film/ar-AA24vRwI#comments
                        - button "Start the conversation" [ref=e1394]:
                          - img [ref=e1395]
                - generic [ref=e1397]:
                  - button "Hide this story" [ref=e1398]:
                    - img [ref=e1399]
                    - text: Hide this story
                  - button "See more" [ref=e1400]:
                    - img [ref=e1401]
            - article "Vaibhav Sooryavanshi tells Sunil Gavaskar he’s started practicing with red ball, but keeps his cards close to his chest" [ref=e1402] [cursor=pointer]:
              - generic [ref=e1404]:
                - img [ref=e1405]
                - generic [ref=e1406]:
                  - generic [ref=e1407]:
                    - generic [ref=e1408]:
                      - generic [ref=e1409]:
                        - img [ref=e1410]
                        - generic [ref=e1411]: Hindustan Times
                      - generic [ref=e1412]: ·
                      - generic [ref=e1413]: 7h
                    - link "Vaibhav Sooryavanshi tells Sunil Gavaskar he’s started practicing with red ball, but keeps his cards close to his chest, Hindustan Times" [ref=e1414]:
                      - /url: https://www.msn.com/en-in/sports/cricket/vaibhav-sooryavanshi-tells-sunil-gavaskar-he-s-started-practicing-with-red-ball-but-keeps-his-cards-close-to-his-chest/ar-AA24vq3l
                      - text: Vaibhav Sooryavanshi tells Sunil Gavaskar he’s started practicing with red ball, but keeps his cards close to his chest
                  - generic "Vaibhav Sooryavanshi tells Sunil Gavaskar he’s started practicing with red ball, but keeps his cards close to his chest" [ref=e1417]:
                    - generic [ref=e1419]:
                      - generic [ref=e1420]:
                        - button "69 Like" [ref=e1421]:
                          - generic [ref=e1422]:
                            - img [ref=e1423]
                            - generic [ref=e1425]: "69"
                        - button "Dislike" [ref=e1426]:
                          - img [ref=e1428]
                      - link "Start the conversation" [ref=e1431]:
                        - /url: https://www.msn.com/en-in/sports/cricket/vaibhav-sooryavanshi-tells-sunil-gavaskar-he-s-started-practicing-with-red-ball-but-keeps-his-cards-close-to-his-chest/ar-AA24vq3l#comments
                        - button "Start the conversation" [ref=e1432]:
                          - img [ref=e1433]
                - generic [ref=e1435]:
                  - button "Hide this story" [ref=e1436]:
                    - img [ref=e1437]
                    - text: Hide this story
                  - button "See more" [ref=e1438]:
                    - img [ref=e1439]
            - article "5 foods that have maximum amount of cancer-causing acrylamide" [ref=e1440] [cursor=pointer]:
              - generic [ref=e1442]:
                - img [ref=e1443]
                - generic [ref=e1444]:
                  - generic [ref=e1445]:
                    - generic [ref=e1447]:
                      - img [ref=e1448]
                      - generic [ref=e1449]: The Times of India
                    - link "5 foods that have maximum amount of cancer-causing acrylamide, The Times of India" [ref=e1450]:
                      - /url: https://www.msn.com/en-in/health/other/5-foods-that-have-maximum-amount-of-cancer-causing-acrylamide/ss-AA1H2Wbj
                      - text: 5 foods that have maximum amount of cancer-causing acrylamide
                  - generic "5 foods that have maximum amount of cancer-causing acrylamide" [ref=e1453]:
                    - generic [ref=e1455]:
                      - generic [ref=e1456]:
                        - button "164 Like" [ref=e1457]:
                          - generic [ref=e1458]:
                            - img [ref=e1459]
                            - generic [ref=e1461]: "164"
                        - button "Dislike" [ref=e1462]:
                          - img [ref=e1464]
                      - link "Start the conversation" [ref=e1467]:
                        - /url: https://www.msn.com/en-in/health/other/5-foods-that-have-maximum-amount-of-cancer-causing-acrylamide/ss-AA1H2Wbj#comments
                        - button "Start the conversation" [ref=e1468]:
                          - img [ref=e1469]
                - generic [ref=e1471]:
                  - button "Hide this story" [ref=e1472]:
                    - img [ref=e1473]
                    - text: Hide this story
                  - button "See more" [ref=e1474]:
                    - img [ref=e1475]
            - 'article "Asian Games 2026: Indian government steps in; Suryakumar Yadav dropped" [ref=e1476] [cursor=pointer]':
              - generic [ref=e1478]:
                - img [ref=e1479]
                - generic [ref=e1480]:
                  - generic [ref=e1481]:
                    - generic [ref=e1482]:
                      - generic [ref=e1483]:
                        - img [ref=e1484]
                        - generic [ref=e1485]: ABP - Live
                      - generic [ref=e1486]: ·
                      - generic [ref=e1487]: 19h
                    - 'link "Asian Games 2026: Indian government steps in; Suryakumar Yadav dropped, ABP - Live" [ref=e1488]':
                      - /url: https://www.msn.com/en-in/sports/cricket/asian-games-2026-indian-government-steps-in-suryakumar-yadav-dropped/ar-AA24t8M9
                      - text: "Asian Games 2026: Indian government steps in; Suryakumar Yadav dropped"
                  - 'generic "Asian Games 2026: Indian government steps in; Suryakumar Yadav dropped" [ref=e1491]':
                    - generic [ref=e1493]:
                      - generic [ref=e1494]:
                        - button "74 Like" [ref=e1495]:
                          - generic [ref=e1496]:
                            - img [ref=e1497]
                            - generic [ref=e1499]: "74"
                        - button "Dislike" [ref=e1500]:
                          - img [ref=e1502]
                      - link "Start the conversation" [ref=e1505]:
                        - /url: https://www.msn.com/en-in/sports/cricket/asian-games-2026-indian-government-steps-in-suryakumar-yadav-dropped/ar-AA24t8M9#comments
                        - button "Start the conversation" [ref=e1506]:
                          - img [ref=e1507]
                - generic [ref=e1509]:
                  - button "Hide this story" [ref=e1510]:
                    - img [ref=e1511]
                    - text: Hide this story
                  - button "See more" [ref=e1512]:
                    - img [ref=e1513]
            - article [ref=e1514] [cursor=pointer]
            - 'article "Sachin Tendulkar suggests 3 radical rule changes for IPL: ''Impact player needs to...''" [ref=e1521] [cursor=pointer]':
              - generic [ref=e1523]:
                - img [ref=e1524]
                - generic [ref=e1525]:
                  - generic [ref=e1526]:
                    - generic [ref=e1527]:
                      - generic [ref=e1528]:
                        - img [ref=e1529]
                        - generic [ref=e1530]: News18
                      - generic [ref=e1531]: ·
                      - generic [ref=e1532]: 20h
                    - 'link "Sachin Tendulkar suggests 3 radical rule changes for IPL: ''Impact player needs to...'', News18" [ref=e1533]':
                      - /url: https://www.msn.com/en-in/sports/cricket/sachin-tendulkar-suggests-3-radical-rule-changes-for-ipl-impact-player-needs-to/ar-AA24u5M2
                      - text: "Sachin Tendulkar suggests 3 radical rule changes for IPL: 'Impact player needs to...'"
                  - 'generic "Sachin Tendulkar suggests 3 radical rule changes for IPL: ''Impact player needs to...''" [ref=e1536]':
                    - generic [ref=e1538]:
                      - generic [ref=e1539]:
                        - button "34 Like" [ref=e1540]:
                          - generic [ref=e1541]:
                            - img [ref=e1542]
                            - generic [ref=e1544]: "34"
                        - button "Dislike" [ref=e1545]:
                          - img [ref=e1547]
                      - link "Start the conversation" [ref=e1550]:
                        - /url: https://www.msn.com/en-in/sports/cricket/sachin-tendulkar-suggests-3-radical-rule-changes-for-ipl-impact-player-needs-to/ar-AA24u5M2#comments
                        - button "Start the conversation" [ref=e1551]:
                          - img [ref=e1552]
                - generic [ref=e1554]:
                  - button "Hide this story" [ref=e1555]:
                    - img [ref=e1556]
                    - text: Hide this story
                  - button "See more" [ref=e1557]:
                    - img [ref=e1558]
          - generic [ref=e1559]:
            - article [ref=e1560] [cursor=pointer]
            - 'article "''Arin is born in 2003, so do the math'': Madhuri Dixit shuts down claims she was four months pregnant during ''Dola Re Dola'' shoot" [ref=e1567] [cursor=pointer]':
              - generic [ref=e1569]:
                - img [ref=e1570]
                - generic [ref=e1571]:
                  - generic [ref=e1572]:
                    - generic [ref=e1573]:
                      - generic [ref=e1574]:
                        - img [ref=e1575]
                        - generic [ref=e1576]: The Times of India
                      - generic [ref=e1577]: ·
                      - generic [ref=e1578]: 1d
                    - 'link "''Arin is born in 2003, so do the math'': Madhuri Dixit shuts down claims she was four months pregnant during ''Dola Re Dola'' shoot, The Times of India" [ref=e1579]':
                      - /url: https://www.msn.com/en-in/entertainment/bollywood/arin-is-born-in-2003-so-do-the-math-madhuri-dixit-shuts-down-claims-she-was-four-months-pregnant-during-dola-re-dola-shoot/ar-AA24tCBb
                      - text: "'Arin is born in 2003, so do the math': Madhuri Dixit shuts down claims she was four months pregnant during 'Dola Re Dola' shoot"
                  - 'generic "''Arin is born in 2003, so do the math'': Madhuri Dixit shuts down claims she was four months pregnant during ''Dola Re Dola'' shoot" [ref=e1582]':
                    - generic [ref=e1584]:
                      - generic [ref=e1585]:
                        - button "20 Like" [ref=e1586]:
                          - generic [ref=e1587]:
                            - img [ref=e1588]
                            - generic [ref=e1590]: "20"
                        - button "Dislike" [ref=e1591]:
                          - img [ref=e1593]
                      - link "Start the conversation" [ref=e1596]:
                        - /url: https://www.msn.com/en-in/entertainment/bollywood/arin-is-born-in-2003-so-do-the-math-madhuri-dixit-shuts-down-claims-she-was-four-months-pregnant-during-dola-re-dola-shoot/ar-AA24tCBb#comments
                        - button "Start the conversation" [ref=e1597]:
                          - img [ref=e1598]
                - generic [ref=e1600]:
                  - button "Hide this story" [ref=e1601]:
                    - img [ref=e1602]
                    - text: Hide this story
                  - button "See more" [ref=e1603]:
                    - img [ref=e1604]
    - contentinfo [ref=e1607]:
      - generic "Feedback" [ref=e1609] [cursor=pointer]:
        - button "Feedback" [ref=e1610]:
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