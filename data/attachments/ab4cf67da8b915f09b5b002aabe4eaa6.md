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
        - 'link "Phoenix: Excessive Heat Warning, Sunny, 37 °C" [ref=e19] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
          - generic "Phoenix, Arizona, United States Click here to see more information" [ref=e20]: Phoenix
          - img "Sunny" [ref=e22]
          - generic [ref=e23]:
            - generic [ref=e24]: ‎37‎
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
                - tab "Sponsored" [ref=e213] [cursor=pointer]
                - tab "News story" [ref=e215] [cursor=pointer]
                - tab "News story" [ref=e217] [cursor=pointer]
                - tab "News story" [ref=e219] [cursor=pointer]
                - tab "Sponsored" [selected] [ref=e221] [cursor=pointer]
                - tab "News story" [ref=e223] [cursor=pointer]
                - tab "News story" [ref=e225] [cursor=pointer]
                - tab "Sponsored" [ref=e227] [cursor=pointer]
                - tab "News story" [ref=e229] [cursor=pointer]
                - tab "News story" [ref=e231] [cursor=pointer]
                - tab "News story" [ref=e233] [cursor=pointer]
                - tab "Sponsored" [ref=e235] [cursor=pointer]
                - tab "News story" [ref=e237] [cursor=pointer]
                - tab "News story" [ref=e239] [cursor=pointer]
                - tab "News story" [ref=e241] [cursor=pointer]
                - tab "News story" [ref=e243] [cursor=pointer]
                - tab "News story" [ref=e245] [cursor=pointer]
                - tab "Sponsored" [ref=e247] [cursor=pointer]
                - tab "News story" [ref=e249] [cursor=pointer]
                - tab "News story" [ref=e251] [cursor=pointer]
                - tab "News story" [ref=e253] [cursor=pointer]
                - tab "News story" [ref=e255] [cursor=pointer]
                - tab "News story" [ref=e257] [cursor=pointer]
                - tab "News story" [ref=e259] [cursor=pointer]
                - tab "News story" [ref=e261] [cursor=pointer]
                - tab "News story" [ref=e263] [cursor=pointer]
                - tab "News story" [ref=e265] [cursor=pointer]
                - tab "News story" [ref=e267] [cursor=pointer]
              - button [ref=e271]
              - button [ref=e274]
              - article "Solidteknics Ql226d 10 Inch Aus-Ion Lightning Oven-To-Table Dual Handle Wrought Iron Pan" [ref=e275] [cursor=pointer]:
                - generic [ref=e277]:
                  - img [ref=e278]
                  - generic [ref=e279]:
                    - generic [ref=e280]:
                      - generic [ref=e283]: Walmart
                      - link "Solidteknics Ql226d 10 Inch Aus-Ion Lightning Oven-To-Table Dual Handle Wrought Iron Pan, Walmart" [ref=e284]:
                        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=82dcc33a-2ee0-448a-aeea-ff729ade3de5&bdc=pb&bidId=23&bidderId=4&cmExpId=LV3&impId=2&impTy=1&ldc=jhf2pczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=204f124c-920e-49c0-be1a-54da66911461&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De82W-YLfnZDY6Wfji00S_B8TVUCUyD8nt3PzCg-locNE845NVaWGxd3U9Kq9qxFkcjt5sCDwXPX-ZgwBN5H8QiGCrPaQf0C87rIBnlyiYtxQfsDl0-H68Irw0YLkbROYTgA_6SJDkiVDGMARky3liJU7F5_vvQIZXsuiboX_W53YZ3uuUD5hnL4Jf6yF6KqCRLntogDsBoJK2zr_WcnCgeS1HgEkI%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cud2FsbWFydC5jb20lMmZpcCUyZlNvbGlkdGVrbmljcy1BVVMtSU9OLTEwLWluY2gtT3Zlbi10by1UYWJsZS1Ta2lsbGV0LUxpZ2h0d2VpZ2h0LVZlcnNhdGlsZS1Db29rd2FyZS1GcnlpbmctQmFraW5nLUdyaWxsaW5nLVNlYW1sZXNzLVRyYW5zaXRpb25zLVN0b3ZldG9wLVRhYmxlLVBlcmZvcm1hJTJmMTUzNDM5MTU5NjAlM2Z3bWxzcGFydG5lciUzZHdscGElMjZzZWxlY3RlZFNlbGxlcklkJTNkNDA1JTI2c291cmNlaWQlM2Rkc25fbXBtYXhfYjc4MTY2NDgtYzFhYS00Y2JlLWEzNDgtYmFkZTdlNmQxODVlJTI2dmVoJTNkZHNuJTI2d21sc3BhcnRuZXIlM2Rkc25fbXBtYXhfYjc4MTY2NDgtYzFhYS00Y2JlLWEzNDgtYmFkZTdlNmQxODVlJTI2Y24lM2QwMHBkX2Z5MjdfbXBfbXBfbG9faW50X2Rpc19tcG1heC1wMTNuJTI2d2w5JTNkJTI2d2wxMSUzZE9ubGluZSUyNm1zY2xraWQlM2RhYTAxOTBkZjhlNjMxZjg2MzBmNmZhNGUyMjU0NDdmMQ%26rlid%3Daa0190df8e631f8630f6fa4e225447f1&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                        - text: Solidteknics Ql226d 10 Inch Aus-Ion Lightning Oven-To-Table Dual Handle Wrought Iron Pan
                    - link "Sponsored" [ref=e286]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=82dcc33a-2ee0-448a-aeea-ff729ade3de5&bdc=pb&bidId=23&bidderId=4&cmExpId=LV3&impId=2&impTy=1&ldc=jhf2pczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=204f124c-920e-49c0-be1a-54da66911461&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De82W-YLfnZDY6Wfji00S_B8TVUCUyD8nt3PzCg-locNE845NVaWGxd3U9Kq9qxFkcjt5sCDwXPX-ZgwBN5H8QiGCrPaQf0C87rIBnlyiYtxQfsDl0-H68Irw0YLkbROYTgA_6SJDkiVDGMARky3liJU7F5_vvQIZXsuiboX_W53YZ3uuUD5hnL4Jf6yF6KqCRLntogDsBoJK2zr_WcnCgeS1HgEkI%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cud2FsbWFydC5jb20lMmZpcCUyZlNvbGlkdGVrbmljcy1BVVMtSU9OLTEwLWluY2gtT3Zlbi10by1UYWJsZS1Ta2lsbGV0LUxpZ2h0d2VpZ2h0LVZlcnNhdGlsZS1Db29rd2FyZS1GcnlpbmctQmFraW5nLUdyaWxsaW5nLVNlYW1sZXNzLVRyYW5zaXRpb25zLVN0b3ZldG9wLVRhYmxlLVBlcmZvcm1hJTJmMTUzNDM5MTU5NjAlM2Z3bWxzcGFydG5lciUzZHdscGElMjZzZWxlY3RlZFNlbGxlcklkJTNkNDA1JTI2c291cmNlaWQlM2Rkc25fbXBtYXhfYjc4MTY2NDgtYzFhYS00Y2JlLWEzNDgtYmFkZTdlNmQxODVlJTI2dmVoJTNkZHNuJTI2d21sc3BhcnRuZXIlM2Rkc25fbXBtYXhfYjc4MTY2NDgtYzFhYS00Y2JlLWEzNDgtYmFkZTdlNmQxODVlJTI2Y24lM2QwMHBkX2Z5MjdfbXBfbXBfbG9faW50X2Rpc19tcG1heC1wMTNuJTI2d2w5JTNkJTI2d2wxMSUzZE9ubGluZSUyNm1zY2xraWQlM2RhYTAxOTBkZjhlNjMxZjg2MzBmNmZhNGUyMjU0NDdmMQ%26rlid%3Daa0190df8e631f8630f6fa4e225447f1&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                  - button "See more" [ref=e288]:
                    - img [ref=e289]
            - 'article "Neelam Kothari, 56, never skips these 3 morning staples: Actor shares how to make her simple drink & what she eats for breakfast every day" [ref=e290] [cursor=pointer]':
              - generic [ref=e292]:
                - img [ref=e293]
                - generic [ref=e294]:
                  - generic [ref=e295]:
                    - generic [ref=e296]:
                      - generic [ref=e297]:
                        - img [ref=e298]
                        - generic [ref=e299]: The Economic Times
                      - generic [ref=e300]: ·
                      - generic [ref=e301]: 8h
                    - 'link "Neelam Kothari, 56, never skips these 3 morning staples: Actor shares how to make her simple drink & what she eats for breakfast every day, The Economic Times" [ref=e302]':
                      - /url: https://www.msn.com/en-in/food-and-drink/recipes/neelam-kothari-56-never-skips-these-3-morning-staples-actor-shares-how-to-make-her-simple-drink-what-she-eats-for-breakfast-every-day/ar-AA2b6rod
                      - text: "Neelam Kothari, 56, never skips these 3 morning staples: Actor shares how to make her simple drink & what she eats for breakfast every day"
                  - 'generic "Neelam Kothari, 56, never skips these 3 morning staples: Actor shares how to make her simple drink & what she eats for breakfast every day" [ref=e305]':
                    - generic [ref=e307]:
                      - generic [ref=e308]:
                        - button "2 Likes" [ref=e309]:
                          - generic [ref=e310]:
                            - img [ref=e311]
                            - generic [ref=e313]: "2"
                        - button "7 Dislikes" [ref=e314]:
                          - img [ref=e316]
                      - link "Start the conversation" [ref=e319]:
                        - /url: https://www.msn.com/en-in/food-and-drink/recipes/neelam-kothari-56-never-skips-these-3-morning-staples-actor-shares-how-to-make-her-simple-drink-what-she-eats-for-breakfast-every-day/ar-AA2b6rod#comments
                        - button "Start the conversation" [ref=e320]:
                          - img [ref=e321]
                - generic [ref=e323]:
                  - button "Hide this story" [ref=e324]:
                    - img [ref=e325]
                    - text: Hide this story
                  - button "See more" [ref=e326]:
                    - img [ref=e327]
            - article [ref=e328] [cursor=pointer]:
              - generic [ref=e332]:
                - generic: Sponsored
            - article "Partner with Confidence!" [ref=e333] [cursor=pointer]:
              - generic [ref=e335]:
                - img [ref=e336]
                - generic [ref=e337]:
                  - generic [ref=e338]:
                    - generic [ref=e341]: Beaumont Strata Managers
                    - link "Partner with Confidence!, Beaumont Strata Managers" [ref=e342]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=05d3689e-2d9c-4735-96e4-ef76abeb481c&bdc=pb&bidId=12&bidderId=4&cmExpId=LV3&impId=8&impTy=1&ldc=jhf2pczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=204f124c-920e-49c0-be1a-54da66911461&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8a69BLS2PyGMVAUUu22ie_zVUCUxSofExG2E96f1fJtVujY_PTD61dbajf1hf6xcKWy1RF3ADkTJ1wsMlOxmHI4JfWy4cLgAS54Js3FBAiB2DJuFX6_GLi89U5nNScs75R82arRBD5tdhQh-_akHyZTI4R60Qk5_orQ0iSyp7ezgIVkoZOGXv379izQOQfQKZxOxBs8rfJ5yJrHEz7dOCSA7XXfQ%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuYmVhdW1vbnRzdHJhdGEuY29tLmF1JTJmJTNmdXRtX3NvdXJjZSUzZFJMJTI2dXRtX21lZGl1bSUzZGNwYyUyNnV0bV9jYW1wYWlnbiUzZEJlYXVtb250U3RyYXRhTWFuYWdlcnNOZXdTb3V0aFdhbGVzJTI2c2NpZCUzZDM3NzU4OA%26rlid%3D19948150dea81da4b0aeebc1729fd5ea&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Partner with Confidence!
                  - link "Sponsored" [ref=e344]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=05d3689e-2d9c-4735-96e4-ef76abeb481c&bdc=pb&bidId=12&bidderId=4&cmExpId=LV3&impId=8&impTy=1&ldc=jhf2pczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=204f124c-920e-49c0-be1a-54da66911461&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8a69BLS2PyGMVAUUu22ie_zVUCUxSofExG2E96f1fJtVujY_PTD61dbajf1hf6xcKWy1RF3ADkTJ1wsMlOxmHI4JfWy4cLgAS54Js3FBAiB2DJuFX6_GLi89U5nNScs75R82arRBD5tdhQh-_akHyZTI4R60Qk5_orQ0iSyp7ezgIVkoZOGXv379izQOQfQKZxOxBs8rfJ5yJrHEz7dOCSA7XXfQ%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuYmVhdW1vbnRzdHJhdGEuY29tLmF1JTJmJTNmdXRtX3NvdXJjZSUzZFJMJTI2dXRtX21lZGl1bSUzZGNwYyUyNnV0bV9jYW1wYWlnbiUzZEJlYXVtb250U3RyYXRhTWFuYWdlcnNOZXdTb3V0aFdhbGVzJTI2c2NpZCUzZDM3NzU4OA%26rlid%3D19948150dea81da4b0aeebc1729fd5ea&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e346]:
                  - img [ref=e347]
            - article [ref=e348] [cursor=pointer]:
              - generic [ref=e354]:
                - generic [ref=e356]:
                  - img "Watchlist suggestions" [ref=e358]
                  - link "Watchlist suggestions" [ref=e359]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e360]
                  - button "More options" [ref=e362]
                - generic [ref=e367]:
                  - link "Gold Gold ‎-1.02%‎ 4,616.60" [ref=e369]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwoc&ocid=hpmsn
                    - generic [ref=e370]:
                      - generic [ref=e372]: Gold
                      - generic [ref=e374]: Gold
                    - generic [ref=e379]:
                      - generic [ref=e380]: ‎-1.02%‎
                      - generic [ref=e381]: 4,616.60
                    - button "Add to watchlist" [ref=e384]:
                      - img [ref=e385]
                  - link "24K Gold (10 Grams) - Indian Rupee XAUINR ‎+0.69%‎ 144496" [ref=e389]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&ocid=hpmsn
                    - generic [ref=e390]:
                      - generic [ref=e392]: 24K Gold (10 Grams) - Indian Rupee
                      - generic [ref=e394]: XAUINR
                    - generic [ref=e399]:
                      - generic [ref=e400]: ‎+0.69%‎
                      - generic [ref=e401]: "144496"
                    - button "Add to watchlist" [ref=e404]:
                      - img [ref=e405]
                  - link "ITC Ltd ITC ‎-1.12%‎ 266.00" [ref=e409]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahie2w&ocid=hpmsn
                    - generic [ref=e410]:
                      - generic [ref=e412]: ITC Ltd
                      - generic [ref=e414]: ITC
                    - generic [ref=e419]:
                      - generic [ref=e420]: ‎-1.12%‎
                      - generic [ref=e421]: "266.00"
                    - button "Add to watchlist" [ref=e424]:
                      - img [ref=e425]
                  - link "AT&T Inc AT&T Inc Rising fast ‎+2.03%‎ 25.95" [ref=e429]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a23www&noti=Price&ocid=hpmsn
                    - generic [ref=e430]:
                      - generic [ref=e431]:
                        - generic [ref=e432]: AT&T Inc
                        - img "AT&T Inc" [ref=e433]
                      - generic [ref=e435]: Rising fast
                    - generic [ref=e440]:
                      - generic [ref=e441]: ‎+2.03%‎
                      - generic [ref=e442]: "25.95"
                    - button "Add to watchlist" [ref=e445]:
                      - img [ref=e446]
                  - link "Vodafone Idea Ltd Vodafone Idea Ltd Dropping fast ‎-1.94%‎ 14.68" [ref=e450]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahi8u2&noti=Price&ocid=hpmsn
                    - generic [ref=e451]:
                      - generic [ref=e452]:
                        - generic [ref=e453]: Vodafone Idea Ltd
                        - img "Vodafone Idea Ltd" [ref=e454]
                      - generic [ref=e456]: Dropping fast
                    - generic [ref=e461]:
                      - generic [ref=e462]: ‎-1.94%‎
                      - generic [ref=e463]: "14.68"
                    - button "Add to watchlist" [ref=e466]:
                      - img [ref=e467]
                - generic [ref=e471]:
                  - generic [ref=e472]:
                    - generic "Previous" [ref=e473]:
                      - button "Previous" [ref=e474]
                    - tablist [ref=e476]:
                      - tab "tab-0" [selected] [ref=e477]
                      - tab "tab-1" [ref=e479]
                      - tab "tab-2" [ref=e481]
                      - tab "tab-3" [ref=e483]
                      - tab "tab-4" [ref=e485]
                      - tab "tab-5"
                      - tab "tab-6"
                    - generic "Next" [ref=e487]:
                      - button "Next" [ref=e488]
                  - link "See watchlist suggestions" [ref=e490]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - article [ref=e491] [cursor=pointer]:
              - generic [ref=e496]:
                - generic [ref=e498]:
                  - link "Top stories" [ref=e500]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a91ac368c544c7ba0ecff51c86b1670&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e501]
                  - button "More options" [ref=e503]
                - list [ref=e506]:
                  - listitem [ref=e507]:
                    - link "Press Trust of India now Death toll rises to 579 in Nepal; rescue operations resume at full pace" [ref=e508]:
                      - /url: https://www.msn.com/en-in/news/other/death-toll-rises-to-579-in-nepal-rescue-operations-resume-at-full-pace/ar-AA2b7oqb
                      - generic [ref=e509]:
                        - generic [ref=e510]:
                          - img [ref=e511]
                          - generic [ref=e512]:
                            - generic: Press Trust of India ·now
                        - generic [ref=e513]: Death toll rises to 579 in Nepal; rescue operations resume at full pace
                  - listitem [ref=e514]:
                    - link "WION now Karnataka minister B Nagendra breaks down as he resigns from cabinet amid scam row | Video" [ref=e515]:
                      - /url: https://www.msn.com/en-in/news/other/karnataka-minister-b-nagendra-breaks-down-as-he-resigns-from-cabinet-amid-scam-row-video/ar-AA2b7XWL
                      - generic [ref=e516]:
                        - generic [ref=e517]:
                          - img [ref=e518]
                          - generic [ref=e519]:
                            - generic: WION ·now
                        - generic [ref=e520]: Karnataka minister B Nagendra breaks down as he resigns from cabinet amid scam row | Video
                  - listitem [ref=e521]:
                    - 'link "NDTV 24x7 35m Inside Sonia Gandhi''s ''Belonging'': The 3 flashpoints in memoir publishing row" [ref=e522]':
                      - /url: https://www.msn.com/en-in/news/other/inside-sonia-gandhi-s-belonging-the-3-flashpoints-in-memoir-publishing-row/ar-AA2b85jx
                      - generic [ref=e523]:
                        - generic [ref=e524]:
                          - img [ref=e525]
                          - generic [ref=e526]:
                            - generic: NDTV 24x7 ·35m
                        - generic [ref=e527]: "Inside Sonia Gandhi's 'Belonging': The 3 flashpoints in memoir publishing row"
                - generic [ref=e529]:
                  - generic [ref=e530]:
                    - generic "Previous" [ref=e531]:
                      - button "Previous" [ref=e532]
                    - tablist [ref=e534]:
                      - tab "tab-0" [selected] [ref=e535]
                      - tab "tab-1" [ref=e537]
                      - tab "tab-2" [ref=e539]
                    - generic "Next" [ref=e541]:
                      - button "Next" [ref=e542]
                  - link "See more" [ref=e544]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a91ac368c544c7ba0ecff51c86b1670&ocid=hpmsn
            - article "Find Your Inspiration Here" [ref=e545] [cursor=pointer]:
              - generic [ref=e547]:
                - img [ref=e548]
                - generic [ref=e549]:
                  - generic [ref=e550]:
                    - generic [ref=e553]: Prison Fellowship
                    - link "Find Your Inspiration Here, Prison Fellowship" [ref=e554]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=b80adc5a-1953-4a78-a63e-08a6258a4ee5&bdc=pb&bidId=9&bidderId=4&cmExpId=LV3&impId=9&impTy=1&ldc=jhf2pczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=204f124c-920e-49c0-be1a-54da66911461&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8cZmED-KUXwvbAfByZhw7nTVUCUyHJmRlZTcqZ_a_1metKW8C3ZdCXVjXM6ol4RxPcv1ZXZOV1WSGNtxfZky6sEsWCcwOmv7mUEdwuCiFPbbvEtSsMk-WNGDh2AV7Cd91CVG3y3pP6ylIEBFK-y0D9T6LZrf2__DUme_NiofJCkbX4TrExAsUdTkagxVRPgrayNItaCjsn_ZTNSeh-EKCY0By5Lc%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cucHJpc29uZmVsbG93c2hpcC5vcmclMmZscCUyZmluc3BpcmF0aW9uYWwtcmVzb3VyY2VzJTJmJTNmbXMlM2RHTkRTQUEyNzE3MDA0JTI2dXRtX3NvdXJjZSUzZG1pY3Jvc29mdCUyNnV0bV9tZWRpdW0lM2RhZCUyNnV0bV9jYW1wYWlnbiUzZHBmX21pY3Jvc29mdF9wZi1nbl90cmFmZmljX2thdGllLXBvcGVqb3ktaW5zcGlyYXRpb25hbC10ZXN0aW1vbnktZnkyNyUyNm1zY2xraWQlM2RkMzYwMjg2NzI2YjcxYjU0NDZmNTQyZjY4YTgwZjlhYw%26rlid%3Dd360286726b71b5446f542f68a80f9ac&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Find Your Inspiration Here
                  - link "Sponsored" [ref=e556]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=b80adc5a-1953-4a78-a63e-08a6258a4ee5&bdc=pb&bidId=9&bidderId=4&cmExpId=LV3&impId=9&impTy=1&ldc=jhf2pczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=204f124c-920e-49c0-be1a-54da66911461&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8cZmED-KUXwvbAfByZhw7nTVUCUyHJmRlZTcqZ_a_1metKW8C3ZdCXVjXM6ol4RxPcv1ZXZOV1WSGNtxfZky6sEsWCcwOmv7mUEdwuCiFPbbvEtSsMk-WNGDh2AV7Cd91CVG3y3pP6ylIEBFK-y0D9T6LZrf2__DUme_NiofJCkbX4TrExAsUdTkagxVRPgrayNItaCjsn_ZTNSeh-EKCY0By5Lc%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cucHJpc29uZmVsbG93c2hpcC5vcmclMmZscCUyZmluc3BpcmF0aW9uYWwtcmVzb3VyY2VzJTJmJTNmbXMlM2RHTkRTQUEyNzE3MDA0JTI2dXRtX3NvdXJjZSUzZG1pY3Jvc29mdCUyNnV0bV9tZWRpdW0lM2RhZCUyNnV0bV9jYW1wYWlnbiUzZHBmX21pY3Jvc29mdF9wZi1nbl90cmFmZmljX2thdGllLXBvcGVqb3ktaW5zcGlyYXRpb25hbC10ZXN0aW1vbnktZnkyNyUyNm1zY2xraWQlM2RkMzYwMjg2NzI2YjcxYjU0NDZmNTQyZjY4YTgwZjlhYw%26rlid%3Dd360286726b71b5446f542f68a80f9ac&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e558]:
                  - img [ref=e559]
            - 'article "Rs 10 lakh in one FD or Rs 1 lakh in 10 FDs: Which option is better?" [ref=e560] [cursor=pointer]':
              - generic [ref=e562]:
                - img [ref=e563]
                - generic [ref=e564]:
                  - generic [ref=e565]:
                    - generic [ref=e567]:
                      - img [ref=e568]
                      - generic [ref=e569]: NDTV Profit
                    - 'link "Rs 10 lakh in one FD or Rs 1 lakh in 10 FDs: Which option is better?, NDTV Profit" [ref=e570]':
                      - /url: https://www.msn.com/en-in/money/investment/rs-10-lakh-in-one-fd-or-rs-1-lakh-in-10-fds-which-option-is-better/ar-AA1SFsbH
                      - text: "Rs 10 lakh in one FD or Rs 1 lakh in 10 FDs: Which option is better?"
                  - 'generic "Rs 10 lakh in one FD or Rs 1 lakh in 10 FDs: Which option is better?" [ref=e573]':
                    - generic [ref=e575]:
                      - generic [ref=e576]:
                        - button "993 Likes" [ref=e577]:
                          - generic [ref=e578]:
                            - img [ref=e579]
                            - generic [ref=e581]: "993"
                        - button "306 Dislikes" [ref=e582]:
                          - img [ref=e584]
                      - link "View comments 6 Comment" [ref=e587]:
                        - /url: https://www.msn.com/en-in/money/investment/rs-10-lakh-in-one-fd-or-rs-1-lakh-in-10-fds-which-option-is-better/ar-AA1SFsbH#comments
                        - button "View comments 6 Comment" [ref=e588]:
                          - img [ref=e589]
                        - generic [ref=e591]: "6"
                - generic [ref=e592]:
                  - button "Hide this story" [ref=e593]:
                    - img [ref=e594]
                    - text: Hide this story
                  - button "See more" [ref=e595]:
                    - img [ref=e596]
            - article "14th floor fall only broke teeth? Court in Sushant Singh Rajput's ex-manager's death case" [ref=e597] [cursor=pointer]:
              - generic [ref=e599]:
                - img [ref=e600]
                - generic [ref=e601]:
                  - generic [ref=e602]:
                    - generic [ref=e603]:
                      - generic [ref=e604]:
                        - img [ref=e605]
                        - generic [ref=e606]: NDTV 24x7
                      - generic [ref=e607]: ·
                      - generic [ref=e608]: 6h
                    - link "14th floor fall only broke teeth? Court in Sushant Singh Rajput's ex-manager's death case, NDTV 24x7" [ref=e609]:
                      - /url: https://www.msn.com/en-in/news/other/14th-floor-fall-only-broke-teeth-court-in-sushant-singh-rajput-s-ex-manager-s-death-case/ar-AA2b6Fjc
                      - text: 14th floor fall only broke teeth? Court in Sushant Singh Rajput's ex-manager's death case
                  - generic "14th floor fall only broke teeth? Court in Sushant Singh Rajput's ex-manager's death case" [ref=e612]:
                    - generic [ref=e614]:
                      - generic [ref=e615]:
                        - button "12 Likes" [ref=e616]:
                          - generic [ref=e617]:
                            - img [ref=e618]
                            - generic [ref=e620]: "12"
                        - button "4 Dislikes" [ref=e621]:
                          - img [ref=e623]
                      - link "Start the conversation" [ref=e626]:
                        - /url: https://www.msn.com/en-in/news/other/14th-floor-fall-only-broke-teeth-court-in-sushant-singh-rajput-s-ex-manager-s-death-case/ar-AA2b6Fjc#comments
                        - button "Start the conversation" [ref=e627]:
                          - img [ref=e628]
                - generic [ref=e630]:
                  - button "Hide this story" [ref=e631]:
                    - img [ref=e632]
                    - text: Hide this story
                  - button "See more" [ref=e633]:
                    - img [ref=e634]
          - generic [ref=e635]:
            - article [ref=e636] [cursor=pointer]:
              - generic [ref=e641]:
                - generic [ref=e643]:
                  - link "Top Engaging News" [ref=e645]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a91ac368c544c7ba0ecff51c86b1670
                    - heading "Top Engaging News" [level=2] [ref=e646]
                  - button "More options" [ref=e648]
                - generic [ref=e650]:
                  - link "Hindustan Times 37 Comments Vijay among top 3 PM choices, Rahul Gandhi also on list. Who is the No. 1?" [ref=e652]:
                    - /url: https://www.msn.com/en-in/news/other/vijay-among-top-3-pm-choices-rahul-gandhi-also-on-list-who-is-the-no-1/ar-AA2b5fgh
                    - generic [ref=e653]:
                      - img [ref=e654]
                      - generic [ref=e655]: Hindustan Times
                      - link "37 Comments" [ref=e657]:
                        - /url: https://www.msn.com/en-in/news/other/vijay-among-top-3-pm-choices-rahul-gandhi-also-on-list-who-is-the-no-1/ar-AA2b5fgh#comments
                        - img [ref=e658]
                        - paragraph [ref=e659]: "37"
                    - paragraph [ref=e660]: Vijay among top 3 PM choices, Rahul Gandhi also on list. Who is the No. 1?
                  - 'link "India Today 4 Comments CJP''s Abhijeet Dipke beats ex-boss Arvind Kejriwal on list of preferred PM: MOTN survey" [ref=e662]':
                    - /url: https://www.msn.com/en-in/news/other/cjp-s-abhijeet-dipke-beats-ex-boss-arvind-kejriwal-on-list-of-preferred-pm-motn-survey/ar-AA2b5DMX
                    - generic [ref=e663]:
                      - img [ref=e664]
                      - generic [ref=e665]: India Today
                      - link "4 Comments" [ref=e667]:
                        - /url: https://www.msn.com/en-in/news/other/cjp-s-abhijeet-dipke-beats-ex-boss-arvind-kejriwal-on-list-of-preferred-pm-motn-survey/ar-AA2b5DMX#comments
                        - img [ref=e668]
                        - paragraph [ref=e669]: "4"
                    - paragraph [ref=e670]: "CJP's Abhijeet Dipke beats ex-boss Arvind Kejriwal on list of preferred PM: MOTN survey"
                  - link "Hindustan Times 3 Comments Delhi couple held over Pakistan espionage links, were in touch with operatives since 2024, sent SIM cards via Dubai" [ref=e672]:
                    - /url: https://www.msn.com/en-in/news/other/delhi-couple-held-over-pakistan-espionage-links-were-in-touch-with-operatives-since-2024-sent-sim-cards-via-dubai/ar-AA2b5zZo
                    - generic [ref=e673]:
                      - img [ref=e674]
                      - generic [ref=e675]: Hindustan Times
                      - link "3 Comments" [ref=e677]:
                        - /url: https://www.msn.com/en-in/news/other/delhi-couple-held-over-pakistan-espionage-links-were-in-touch-with-operatives-since-2024-sent-sim-cards-via-dubai/ar-AA2b5zZo#comments
                        - img [ref=e678]
                        - paragraph [ref=e679]: "3"
                    - paragraph [ref=e680]: Delhi couple held over Pakistan espionage links, were in touch with operatives since 2024, sent SIM cards via Dubai
                - generic [ref=e682]:
                  - generic [ref=e683]:
                    - generic "Previous" [ref=e684]:
                      - button "Previous" [ref=e685]
                    - tablist [ref=e687]:
                      - tab "tab-0" [selected] [ref=e688]
                      - tab "tab-1" [ref=e690]
                      - tab "tab-2" [ref=e692]
                    - generic "Next" [ref=e694]:
                      - button "Next" [ref=e695]
                  - link "See more" [ref=e697]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a91ac368c544c7ba0ecff51c86b1670
            - article [ref=e698] [cursor=pointer]:
              - generic [ref=e704]:
                - generic [ref=e706]:
                  - link "Phoenix" [ref=e708]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
                    - heading "Phoenix" [level=2] [ref=e709]
                  - button "My location" [ref=e710]
                  - button "More options" [ref=e712]
                - generic [ref=e716]:
                  - generic [ref=e717]:
                    - generic [ref=e719]:
                      - link "Sunny" [ref=e720]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
                        - img "Sunny" [ref=e721]
                      - link "37°C" [ref=e722]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
                        - generic [ref=e723]: ‎37‎
                        - generic [ref=e725]: ‎°C‎
                    - generic [ref=e727]:
                      - link "Excessive Heat - WarningExcessive heat warning" [ref=e729]:
                        - /url: https://www.msn.com/en-in/weather/maps/severeweather/in-Phoenix,Arizona
                        - img "Excessive Heat - Warning" [ref=e731]
                        - text: Excessive heat warning
                      - link "See full forecast" [ref=e732]:
                        - /url: https://www.msn.com/en-in/weather/maps/severeweather/in-Phoenix,Arizona
                        - img "arrow" [ref=e733]
                  - generic [ref=e738]:
                    - link "Larger map" [ref=e739]:
                      - /url: ""
                      - img
                      - generic [ref=e740]:
                        - generic:
                          - generic:
                            - img
                            - img
                            - img
                            - img
                    - link "Check more alert details" [ref=e741]:
                      - /url: ""
                      - generic "Check more alert details" [ref=e742]
                      - img [ref=e744]
                    - link "Click to see more information" [ref=e745]:
                      - /url: ""
                      - img [ref=e746]
                - button "See full forecast" [ref=e749]
            - article "He paid $20,000 to sleep under the ocean - then sharks started circling his bed" [ref=e750] [cursor=pointer]:
              - generic [ref=e752]:
                - generic [ref=e756]:
                  - generic [ref=e757]:
                    - generic [ref=e758]:
                      - generic [ref=e759]:
                        - img [ref=e760]
                        - generic [ref=e761]: Trek Trendy
                      - generic [ref=e762]: ·
                      - generic [ref=e763]: 7h
                    - link "He paid $20,000 to sleep under the ocean - then sharks started circling his bed, Trek Trendy" [ref=e764]:
                      - /url: https://www.msn.com/en-in/travel/general/he-paid-20-000-to-sleep-under-the-ocean-then-sharks-started-circling-his-bed/vi-AA28ATV4
                      - text: He paid $20,000 to sleep under the ocean - then sharks started circling his bed
                  - generic "He paid $20,000 to sleep under the ocean - then sharks started circling his bed" [ref=e767]:
                    - generic [ref=e769]:
                      - generic [ref=e770]:
                        - button "331 Likes" [ref=e771]:
                          - generic [ref=e772]:
                            - img [ref=e773]
                            - generic [ref=e775]: "331"
                        - button "78 Dislikes" [ref=e776]:
                          - img [ref=e778]
                      - link "Start the conversation" [ref=e781]:
                        - /url: https://www.msn.com/en-in/travel/general/he-paid-20-000-to-sleep-under-the-ocean-then-sharks-started-circling-his-bed/vi-AA28ATV4#comments
                        - button "Start the conversation" [ref=e782]:
                          - img [ref=e783]
                - generic [ref=e785]:
                  - button "Hide this story" [ref=e786]:
                    - img [ref=e787]
                    - text: Hide this story
                  - button "See more" [ref=e788]:
                    - img [ref=e789]
            - 'article "Our daughter is not a defective toy: They were told to replace her and what her parents did will remain an example forever" [ref=e790] [cursor=pointer]':
              - generic [ref=e792]:
                - img [ref=e793]
                - generic [ref=e794]:
                  - generic [ref=e795]:
                    - generic [ref=e797]:
                      - img [ref=e798]
                      - generic [ref=e799]: The Times of India
                    - 'link "Our daughter is not a defective toy: They were told to replace her and what her parents did will remain an example forever, The Times of India" [ref=e800]':
                      - /url: https://www.msn.com/en-in/lifestyle/other/our-daughter-is-not-a-defective-toy-they-were-told-to-replace-her-and-what-her-parents-did-will-remain-an-example-forever/ar-AA26OaNd
                      - text: "Our daughter is not a defective toy: They were told to replace her and what her parents did will remain an example forever"
                  - 'generic "Our daughter is not a defective toy: They were told to replace her and what her parents did will remain an example forever" [ref=e803]':
                    - generic [ref=e805]:
                      - generic [ref=e806]:
                        - button "575 Likes" [ref=e807]:
                          - generic [ref=e808]:
                            - img [ref=e809]
                            - generic [ref=e811]: "575"
                        - button "322 Dislikes" [ref=e812]:
                          - img [ref=e814]
                      - link "View comments 6 Comment" [ref=e817]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/our-daughter-is-not-a-defective-toy-they-were-told-to-replace-her-and-what-her-parents-did-will-remain-an-example-forever/ar-AA26OaNd#comments
                        - button "View comments 6 Comment" [ref=e818]:
                          - img [ref=e819]
                        - generic [ref=e821]: "6"
                - generic [ref=e822]:
                  - button "Hide this story" [ref=e823]:
                    - img [ref=e824]
                    - text: Hide this story
                  - button "See more" [ref=e825]:
                    - img [ref=e826]
            - article [ref=e827] [cursor=pointer]
            - 'article "Nepal flash floods: Nearly 390 dead, 1000+ missing" [ref=e834] [cursor=pointer]':
              - generic [ref=e836]:
                - generic [ref=e840]:
                  - generic [ref=e841]:
                    - generic [ref=e842]:
                      - generic [ref=e843]:
                        - img [ref=e844]
                        - generic [ref=e845]: WION
                      - generic [ref=e846]: ·
                      - generic [ref=e847]: 15h
                    - 'link "Nepal flash floods: Nearly 390 dead, 1000+ missing, WION" [ref=e848]':
                      - /url: https://www.msn.com/en-in/weather/general/nepal-flash-floods-nearly-390-dead-1000-missing/vi-AA2b4yiD
                      - text: "Nepal flash floods: Nearly 390 dead, 1000+ missing"
                  - 'generic "Nepal flash floods: Nearly 390 dead, 1000+ missing" [ref=e851]':
                    - generic [ref=e853]:
                      - generic [ref=e854]:
                        - button "23 Likes" [ref=e855]:
                          - generic [ref=e856]:
                            - img [ref=e857]
                            - generic [ref=e859]: "23"
                        - button "4 Dislikes" [ref=e860]:
                          - img [ref=e862]
                      - link "Start the conversation" [ref=e865]:
                        - /url: https://www.msn.com/en-in/weather/general/nepal-flash-floods-nearly-390-dead-1000-missing/vi-AA2b4yiD#comments
                        - button "Start the conversation" [ref=e866]:
                          - img [ref=e867]
                - generic [ref=e869]:
                  - button "Hide this story" [ref=e870]:
                    - img [ref=e871]
                    - text: Hide this story
                  - button "See more" [ref=e872]:
                    - img [ref=e873]
            - article [ref=e874] [cursor=pointer]
            - article [ref=e881] [cursor=pointer]:
              - generic [ref=e887]:
                - generic [ref=e889]:
                  - img "ICC" [ref=e891]
                  - link "ICC" [ref=e892]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6a91ac368c544c7ba0ecff51c86b1670
                    - heading "ICC" [level=2] [ref=e893]
                  - button "More interests" [ref=e894]
                  - generic [ref=e895]:
                    - generic "Live now" [ref=e896]:
                      - button "Live now" [ref=e897]
                    - button "More options" [ref=e898]
                - generic [ref=e902]:
                  - link "ENG 290 0/0 Tea PAK 110 ENG lead by 180 runs" [ref=e903]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-264907?ocid=hpmsn&cvid=6a91ac368c544c7ba0ecff51c86b1670
                    - generic "ENG" [ref=e904]:
                      - generic [ref=e905]:
                        - generic [ref=e906]:
                          - generic [ref=e908]: ENG
                          - button "Click to follow ENG":
                            - generic:
                              - img
                        - generic [ref=e910]:
                          - generic [ref=e911]: "290"
                          - generic [ref=e912]: 0/0
                    - generic [ref=e916]: Tea
                    - generic "PAK" [ref=e917]:
                      - generic [ref=e918]:
                        - generic [ref=e919]:
                          - generic [ref=e921]: PAK
                          - button "Click to follow PAK":
                            - generic:
                              - img
                        - generic [ref=e924]: "110"
                    - generic "ENG lead by 180 runs" [ref=e927]
                  - link "NAM 163/9 (20.0) VS SA 145/9 (20.0) NAM won by 18 runs" [ref=e928]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-273840?ocid=hpmsn&cvid=6a91ac368c544c7ba0ecff51c86b1670
                    - generic "NAM" [ref=e929]:
                      - generic [ref=e930]:
                        - img [ref=e932]
                        - generic [ref=e934]:
                          - generic [ref=e936]: NAM
                          - button "Click to follow NAM":
                            - generic:
                              - img
                        - generic [ref=e938]:
                          - generic [ref=e939]: 163/9
                          - generic [ref=e940]: (20.0)
                    - generic [ref=e944]: VS
                    - generic "SA" [ref=e945]:
                      - generic [ref=e946]:
                        - generic [ref=e947]:
                          - generic [ref=e949]: SA
                          - button "Click to follow SA":
                            - generic:
                              - img
                        - generic [ref=e951]:
                          - generic [ref=e952]: 145/9
                          - generic [ref=e953]: (20.0)
                    - generic "NAM won by 18 runs" [ref=e956]
                  - link "SA 29 Aug 12:00 pm ZIM Namibia Cricket Ground, Windhoek" [ref=e957]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-273841?ocid=hpmsn&cvid=6a91ac368c544c7ba0ecff51c86b1670
                    - generic "SA" [ref=e958]:
                      - generic [ref=e960]:
                        - generic [ref=e962]: SA
                        - button "Click to follow SA":
                          - generic:
                            - img
                    - generic [ref=e965]:
                      - generic [ref=e966]: 29 Aug
                      - generic [ref=e967]: 12:00 pm
                    - generic "ZIM" [ref=e968]:
                      - generic [ref=e970]:
                        - generic [ref=e972]: ZIM
                        - button "Click to follow ZIM":
                          - generic:
                            - img
                    - generic "Namibia Cricket Ground, Windhoek" [ref=e975]
                - generic [ref=e977]:
                  - generic [ref=e978]:
                    - generic "Previous" [ref=e979]:
                      - button "Previous" [ref=e980]
                    - tablist [ref=e982]:
                      - tab "tab-0" [selected] [ref=e983]
                      - tab "tab-1" [ref=e985]
                      - tab "tab-2" [ref=e987]
                      - tab "tab-3" [ref=e989]
                      - tab "tab-4" [ref=e991]
                      - tab "tab-5"
                      - tab "tab-6"
                      - tab "tab-7"
                      - tab "tab-8"
                    - generic "Next" [ref=e993]:
                      - button "Next" [ref=e994]
                  - link "See more ICC" [ref=e996]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6a91ac368c544c7ba0ecff51c86b1670
          - article [ref=e998]
          - generic [ref=e1000]:
            - article [ref=e1001] [cursor=pointer]:
              - generic [ref=e1006]:
                - generic [ref=e1007]:
                  - generic [ref=e1008]:
                    - link "Recommended videos" [ref=e1009]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e1010]
                    - link "Recommended videos" [ref=e1013]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e1014]:
                    - generic:
                      - link "See more" [ref=e1015]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e1016]:
                        - button "More options" [ref=e1017]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e1019]:
                  - generic [ref=e1021]:
                    - generic [ref=e1023]:
                      - generic:
                        - article [ref=e1026]:
                          - generic [ref=e1027]:
                            - img "Rare Noble M12 GTO Goes Full Speed at Nürburgring" [ref=e1029]
                            - generic [ref=e1031]: 10:14
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1032]:
                              - generic [ref=e1033]:
                                - img "Misha Charoudin" [ref=e1034]
                                - generic [ref=e1035]:
                                  - generic:
                                    - generic "Misha Charoudin" [ref=e1036]
                                    - generic [ref=e1037]: ·
                                    - generic [ref=e1038]: 4d
                              - link "Rare Noble M12 GTO goes full speed at Nürburgring" [ref=e1039]:
                                - /url: https://www.msn.com/en-in/sports/general/rare-noble-m12-gto-goes-full-speed-at-n%C3%BCrburgring/vi-AA2aPg7E?ocid=hpmsn
                                - heading "Rare Noble M12 GTO goes full speed at Nürburgring" [level=2] [ref=e1040]:
                                  - generic: Rare Noble M12 GTO goes full speed at Nürburgring
                            - button "See more" [ref=e1044]
                        - article [ref=e1047]:
                          - generic [ref=e1048]:
                            - img "A Thermite Reaction Hit The Rails - Then 150 Tons Still Couldn’t Hold It" [ref=e1050]
                            - generic [ref=e1052]: 27:20
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1053]:
                              - generic [ref=e1054]:
                                - img "Veritasium" [ref=e1055]
                                - generic [ref=e1056]:
                                  - generic:
                                    - generic "Veritasium" [ref=e1057]
                                    - generic [ref=e1058]: ·
                                    - generic [ref=e1059]: 2h
                              - link "A thermite reaction hit the rails - then 150 tons still couldn’t hold it" [ref=e1060]:
                                - /url: https://www.msn.com/en-in/science/general/a-thermite-reaction-hit-the-rails-then-150-tons-still-couldn-t-hold-it/vi-AA22TG5u?ocid=hpmsn
                                - heading "A thermite reaction hit the rails - then 150 tons still couldn’t hold it" [level=2] [ref=e1061]:
                                  - generic: A thermite reaction hit the rails - then 150 tons still couldn’t hold it
                            - button "See more" [ref=e1065]
                        - article "Architect transforms a tiny abandoned Malta apartment into a bright home" [ref=e1068]:
                          - generic [ref=e1069]:
                            - img "Architect Transforms a Tiny Abandoned Malta Apartment Into a Bright Home" [ref=e1071]
                            - generic [ref=e1073]: 10:49
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1074]:
                              - generic [ref=e1075]:
                                - img "NEVER TOO SMALL" [ref=e1076]
                                - generic [ref=e1077]:
                                  - generic:
                                    - generic "NEVER TOO SMALL" [ref=e1078]
                                    - generic [ref=e1079]: ·
                                    - generic [ref=e1080]: 3h
                              - link "Architect transforms a tiny abandoned Malta apartment into a bright home" [ref=e1081]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/architect-transforms-a-tiny-abandoned-malta-apartment-into-a-bright-home/vi-AA1R2w1R?ocid=hpmsn
                                - heading "Architect transforms a tiny abandoned Malta apartment into a bright home" [level=2] [ref=e1082]:
                                  - generic: Architect transforms a tiny abandoned Malta apartment into a bright home
                            - button "See more" [ref=e1086]
                        - article "Watch a $100 million stealth fighter stop in midair and drop straight down" [ref=e1089]:
                          - generic [ref=e1090]:
                            - img "Watch A $100 Million Stealth Fighter Stop In Midair And Drop Straight Down" [ref=e1092]
                            - generic [ref=e1094]: 20:35
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1095]:
                              - generic [ref=e1096]:
                                - img "Sam Eckholm" [ref=e1097]
                                - generic [ref=e1098]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1099]
                                    - generic [ref=e1100]: ·
                                    - generic [ref=e1101]: 7h
                              - link "Watch a $100 million stealth fighter stop in midair and drop straight down" [ref=e1102]:
                                - /url: https://www.msn.com/en-in/technology/aviation/watch-a-100-million-stealth-fighter-stop-in-midair-and-drop-straight-down/vi-AA2aWVQI?ocid=hpmsn
                                - heading "Watch a $100 million stealth fighter stop in midair and drop straight down" [level=2] [ref=e1103]:
                                  - generic: Watch a $100 million stealth fighter stop in midair and drop straight down
                            - button "See more" [ref=e1107]
                        - article [ref=e1110]:
                          - generic [ref=e1111]:
                            - img "She Gave Birth to Her Children - Then DNA Said She Was Their Aunt" [ref=e1113]
                            - generic [ref=e1115]: 04:23
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1116]:
                              - generic [ref=e1117]:
                                - img "TED" [ref=e1118]
                                - generic [ref=e1119]:
                                  - generic:
                                    - generic "TED" [ref=e1120]
                                    - generic [ref=e1121]: ·
                                    - generic [ref=e1122]: 6d
                              - link "She gave birth to her children - then DNA said she was their aunt" [ref=e1123]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/she-gave-birth-to-her-children-then-dna-said-she-was-their-aunt/vi-AA22042y?ocid=hpmsn
                                - heading "She gave birth to her children - then DNA said she was their aunt" [level=2] [ref=e1124]:
                                  - generic: She gave birth to her children - then DNA said she was their aunt
                            - button "See more" [ref=e1128]
                        - article "A missing plane story was only the beginning of these bizarre passenger complaints" [ref=e1131]:
                          - generic [ref=e1132]:
                            - img "A Missing Plane Story Was Only the Beginning of These Bizarre Passenger Complaints" [ref=e1134]
                            - generic [ref=e1136]: 29:35
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1137]:
                              - generic [ref=e1138]:
                                - img "Ryan Trahan" [ref=e1139]
                                - generic [ref=e1140]:
                                  - generic:
                                    - generic "Ryan Trahan" [ref=e1141]
                                    - generic [ref=e1142]: ·
                                    - generic [ref=e1143]: 1w
                              - link "A missing plane story was only the beginning of these bizarre passenger complaints" [ref=e1144]:
                                - /url: https://www.msn.com/en-in/travel/air-travel/a-missing-plane-story-was-only-the-beginning-of-these-bizarre-passenger-complaints/vi-AA2aDjI8?ocid=hpmsn
                                - heading "A missing plane story was only the beginning of these bizarre passenger complaints" [level=2] [ref=e1145]:
                                  - generic: A missing plane story was only the beginning of these bizarre passenger complaints
                            - button "See more" [ref=e1149]
                        - article [ref=e1152]:
                          - generic [ref=e1153]:
                            - img "A Toyota GR Yaris Blasts Past the Driver at Nurburgring" [ref=e1155]
                            - generic [ref=e1157]: 11:09
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1158]:
                              - generic [ref=e1159]:
                                - img "Misha Charoudin" [ref=e1160]
                                - generic [ref=e1161]:
                                  - generic:
                                    - generic "Misha Charoudin" [ref=e1162]
                                    - generic [ref=e1163]: ·
                                    - generic [ref=e1164]: 1h
                              - link "A Toyota GR Yaris Blasts Past the Driver at Nurburgring" [ref=e1165]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/a-toyota-gr-yaris-blasts-past-the-driver-at-nurburgring/vi-AA2b7XFc?ocid=hpmsn
                                - heading "A Toyota GR Yaris Blasts Past the Driver at Nurburgring" [level=2] [ref=e1166]:
                                  - generic: A Toyota GR Yaris Blasts Past the Driver at Nurburgring
                            - button "See more" [ref=e1170]
                        - article "Millions took DNA tests for fun - one helped catch a serial killer" [ref=e1173]:
                          - generic [ref=e1174]:
                            - img "Millions Took DNA Tests For Fun - One Helped Catch A Serial Killer" [ref=e1176]
                            - generic [ref=e1178]: 27:11
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1179]:
                              - generic [ref=e1180]:
                                - img "Veritasium" [ref=e1181]
                                - generic "Veritasium" [ref=e1183]
                              - link "Millions took DNA tests for fun - one helped catch a serial killer" [ref=e1184]:
                                - /url: https://www.msn.com/en-in/news/other/millions-took-dna-tests-for-fun-one-helped-catch-a-serial-killer/vi-AA28MZJP?ocid=hpmsn
                                - heading "Millions took DNA tests for fun - one helped catch a serial killer" [level=2] [ref=e1185]:
                                  - generic: Millions took DNA tests for fun - one helped catch a serial killer
                            - button "See more" [ref=e1189]
                        - article "America planned to drop 10-ton metal rods from space - taxpayers would have paid the bill" [ref=e1192]:
                          - generic [ref=e1193]:
                            - img "America Planned to Drop 10-Ton Metal Rods From Space - Taxpayers Would Have Paid the Bill" [ref=e1195]
                            - generic [ref=e1197]: 24:38
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1198]:
                              - generic [ref=e1199]:
                                - img "Veritasium" [ref=e1200]
                                - generic [ref=e1201]:
                                  - generic:
                                    - generic "Veritasium" [ref=e1202]
                                    - generic [ref=e1203]: ·
                                    - generic [ref=e1204]: 2h
                              - link "America planned to drop 10-ton metal rods from space - taxpayers would have paid the bill" [ref=e1205]:
                                - /url: https://www.msn.com/en-in/news/other/america-planned-to-drop-10-ton-metal-rods-from-space-taxpayers-would-have-paid-the-bill/vi-AA28BQ6e?ocid=hpmsn
                                - heading "America planned to drop 10-ton metal rods from space - taxpayers would have paid the bill" [level=2] [ref=e1206]:
                                  - generic: America planned to drop 10-ton metal rods from space - taxpayers would have paid the bill
                            - button "See more" [ref=e1210]
                        - article [ref=e1213]:
                          - generic [ref=e1214]:
                            - img "Trevor Noah’s Wild First Encounter With Julius Malema Thumbnail" [ref=e1216]
                            - generic [ref=e1218]: 07:23
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1219]:
                              - generic [ref=e1220]:
                                - img "Trevor Noah" [ref=e1221]
                                - generic [ref=e1222]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1223]
                                    - generic [ref=e1224]: ·
                                    - generic [ref=e1225]: 1w
                              - link "Trevor Noah’s wild first encounter with Julius Malema" [ref=e1226]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/trevor-noah-s-wild-first-encounter-with-julius-malema/vi-AA2alROK?ocid=hpmsn
                                - heading "Trevor Noah’s wild first encounter with Julius Malema" [level=2] [ref=e1227]:
                                  - generic: Trevor Noah’s wild first encounter with Julius Malema
                            - button "See more" [ref=e1231]
                        - article "He paid $20,000 to sleep under the ocean - then sharks started circling his bed" [ref=e1234]:
                          - generic [ref=e1235]:
                            - img "He Paid $20,000 to Sleep Under the Ocean - Then Sharks Started Circling His Bed" [ref=e1237]
                            - generic [ref=e1239]: 19:44
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1240]:
                              - generic [ref=e1241]:
                                - img "Trek Trendy" [ref=e1242]
                                - generic [ref=e1243]:
                                  - generic:
                                    - generic "Trek Trendy" [ref=e1244]
                                    - generic [ref=e1245]: ·
                                    - generic [ref=e1246]: 7h
                              - link "He paid $20,000 to sleep under the ocean - then sharks started circling his bed" [ref=e1247]:
                                - /url: https://www.msn.com/en-in/travel/general/he-paid-20-000-to-sleep-under-the-ocean-then-sharks-started-circling-his-bed/vi-AA28ATV4?ocid=hpmsn
                                - heading "He paid $20,000 to sleep under the ocean - then sharks started circling his bed" [level=2] [ref=e1248]:
                                  - generic: He paid $20,000 to sleep under the ocean - then sharks started circling his bed
                            - button "See more" [ref=e1252]
                        - article "London housing is so expensive even the fireplace had to become storage" [ref=e1255]:
                          - generic [ref=e1256]:
                            - img "London Housing Is So Expensive Even the Fireplace Had to Become Storage" [ref=e1258]
                            - generic [ref=e1260]: 11:04
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1261]:
                              - generic [ref=e1262]:
                                - img "NEVER TOO SMALL" [ref=e1263]
                                - generic [ref=e1264]:
                                  - generic:
                                    - generic "NEVER TOO SMALL" [ref=e1265]
                                    - generic [ref=e1266]: ·
                                    - generic [ref=e1267]: 3h
                              - link "London housing is so expensive even the fireplace had to become storage" [ref=e1268]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/london-housing-is-so-expensive-even-the-fireplace-had-to-become-storage/vi-AA2b7fUy?ocid=hpmsn
                                - heading "London housing is so expensive even the fireplace had to become storage" [level=2] [ref=e1269]:
                                  - generic: London housing is so expensive even the fireplace had to become storage
                            - button "See more" [ref=e1273]
                        - article "Inside the LA mansion with a theater, gym, wine cellar, and wellness center" [ref=e1276]:
                          - generic [ref=e1277]:
                            - img "Inside the LA Mansion With a Theater, Gym, Wine Cellar, and Wellness Center" [ref=e1279]
                            - generic [ref=e1281]: 31:48
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1282]:
                              - generic [ref=e1283]:
                                - img "The Luxury Home Show" [ref=e1284]
                                - generic [ref=e1285]:
                                  - generic:
                                    - generic "The Luxury Home Show" [ref=e1286]
                                    - generic [ref=e1287]: ·
                                    - generic [ref=e1288]: 2h
                              - link "Inside the LA mansion with a theater, gym, wine cellar, and wellness center" [ref=e1289]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/inside-the-la-mansion-with-a-theater-gym-wine-cellar-and-wellness-center/vi-AA2a7gOd?ocid=hpmsn
                                - heading "Inside the LA mansion with a theater, gym, wine cellar, and wellness center" [level=2] [ref=e1290]:
                                  - generic: Inside the LA mansion with a theater, gym, wine cellar, and wellness center
                            - button "See more" [ref=e1294]
                        - article "They tore down every wall... then found a Spanish Civil War secret" [ref=e1297]:
                          - generic [ref=e1298]:
                            - img "They Tore Down Every Wall... Then Found A Spanish Civil War Secret" [ref=e1300]
                            - generic [ref=e1302]: 09:44
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1303]:
                              - generic [ref=e1304]:
                                - img "NEVER TOO SMALL" [ref=e1305]
                                - generic [ref=e1306]:
                                  - generic:
                                    - generic "NEVER TOO SMALL" [ref=e1307]
                                    - generic [ref=e1308]: ·
                                    - generic [ref=e1309]: 3h
                              - link "They tore down every wall... then found a Spanish Civil War secret" [ref=e1310]:
                                - /url: https://www.msn.com/en-in/news/other/they-tore-down-every-wall-then-found-a-spanish-civil-war-secret/vi-AA29isR8?ocid=hpmsn
                                - heading "They tore down every wall... then found a Spanish Civil War secret" [level=2] [ref=e1311]:
                                  - generic: They tore down every wall... then found a Spanish Civil War secret
                            - button "See more" [ref=e1315]
                        - article "A family of 5 lives inside this tiny 45sqm Japanese home - and it somehow works perfectly" [ref=e1318]:
                          - generic [ref=e1319]:
                            - img "A Family of 5 Lives Inside This Tiny 45sqm Japanese Home - And It Somehow Works Perfectly" [ref=e1321]
                            - generic [ref=e1323]: 06:10
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1324]:
                              - generic [ref=e1325]:
                                - img "NEVER TOO SMALL" [ref=e1326]
                                - generic [ref=e1327]:
                                  - generic:
                                    - generic "NEVER TOO SMALL" [ref=e1328]
                                    - generic [ref=e1329]: ·
                                    - generic [ref=e1330]: 3h
                              - link "A family of 5 lives inside this tiny 45sqm Japanese home - and it somehow works perfectly" [ref=e1331]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/a-family-of-5-lives-inside-this-tiny-45sqm-japanese-home-and-it-somehow-works-perfectly/vi-AA23tp1x?ocid=hpmsn
                                - heading "A family of 5 lives inside this tiny 45sqm Japanese home - and it somehow works perfectly" [level=2] [ref=e1332]:
                                  - generic: A family of 5 lives inside this tiny 45sqm Japanese home - and it somehow works perfectly
                            - button "See more" [ref=e1336]
                        - article [ref=e1339]:
                          - generic [ref=e1340]:
                            - img "Threatened Mid-Flight – Then Offered Drinks Like Nothing Happened" [ref=e1342]
                            - generic [ref=e1344]: 08:38
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1345]:
                              - generic [ref=e1346]:
                                - img "Trek Trendy" [ref=e1347]
                                - generic [ref=e1348]:
                                  - generic:
                                    - generic "Trek Trendy" [ref=e1349]
                                    - generic [ref=e1350]: ·
                                    - generic [ref=e1351]: 7h
                              - link "Threatened mid-flight – then offered drinks like nothing happened" [ref=e1352]:
                                - /url: https://www.msn.com/en-in/news/other/threatened-mid-flight-then-offered-drinks-like-nothing-happened/vi-AA1WXLj3?ocid=hpmsn
                                - heading "Threatened mid-flight – then offered drinks like nothing happened" [level=2] [ref=e1353]:
                                  - generic: Threatened mid-flight – then offered drinks like nothing happened
                            - button "See more" [ref=e1357]
                        - article "This $30 million Dubai mansion has a rooftop pool you can see through" [ref=e1360]:
                          - generic [ref=e1361]:
                            - img "This $30 Million Dubai Mansion Has A Rooftop Pool You Can See Through" [ref=e1363]
                            - generic [ref=e1365]: 28:40
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1366]:
                              - generic [ref=e1367]:
                                - img "The Luxury Home Show" [ref=e1368]
                                - generic [ref=e1369]:
                                  - generic:
                                    - generic "The Luxury Home Show" [ref=e1370]
                                    - generic [ref=e1371]: ·
                                    - generic [ref=e1372]: 2h
                              - link "This $30 million Dubai mansion has a rooftop pool you can see through" [ref=e1373]:
                                - /url: https://www.msn.com/en-in/money/general/this-30-million-dubai-mansion-has-a-rooftop-pool-you-can-see-through/vi-AA28nbHv?ocid=hpmsn
                                - heading "This $30 million Dubai mansion has a rooftop pool you can see through" [level=2] [ref=e1374]:
                                  - generic: This $30 million Dubai mansion has a rooftop pool you can see through
                            - button "See more" [ref=e1378]
                        - article "Cheap supercharged Jaguar gets new subframe and a hidden engine problem" [ref=e1381]:
                          - generic [ref=e1382]:
                            - img "Cheap Supercharged Jaguar Gets New Subframe And A Hidden Engine Problem" [ref=e1384]
                            - generic [ref=e1386]: 09:46
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1387]:
                              - generic [ref=e1388]:
                                - img "DRIVETRIBE" [ref=e1389]
                                - generic [ref=e1390]:
                                  - generic:
                                    - generic "DRIVETRIBE" [ref=e1391]
                                    - generic [ref=e1392]: ·
                                    - generic [ref=e1393]: 1h
                              - link "Cheap supercharged Jaguar gets new subframe and a hidden engine problem" [ref=e1394]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/cheap-supercharged-jaguar-gets-new-subframe-and-a-hidden-engine-problem/vi-AA2b7Nnf?ocid=hpmsn
                                - heading "Cheap supercharged Jaguar gets new subframe and a hidden engine problem" [level=2] [ref=e1395]:
                                  - generic: Cheap supercharged Jaguar gets new subframe and a hidden engine problem
                            - button "See more" [ref=e1399]
                        - article "These chefs tried making carbonara - a Roman chef was not impressed" [ref=e1402]:
                          - generic [ref=e1403]:
                            - img "These Chefs Tried Making Carbonara - A Roman Chef Was Not Impressed" [ref=e1405]
                            - generic [ref=e1407]: 15:56
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1408]:
                              - generic [ref=e1409]:
                                - img "Vincenzo's Plate" [ref=e1410]
                                - generic [ref=e1411]:
                                  - generic:
                                    - generic "Vincenzo's Plate" [ref=e1412]
                                    - generic [ref=e1413]: ·
                                    - generic [ref=e1414]: 2h
                              - link "These chefs tried making carbonara - a Roman chef was not impressed" [ref=e1415]:
                                - /url: https://www.msn.com/en-in/food-and-drink/recipes/these-chefs-tried-making-carbonara-a-roman-chef-was-not-impressed/vi-AA2b7CQt?ocid=hpmsn
                                - heading "These chefs tried making carbonara - a Roman chef was not impressed" [level=2] [ref=e1416]:
                                  - generic: These chefs tried making carbonara - a Roman chef was not impressed
                            - button "See more" [ref=e1420]
                        - article [ref=e1423]:
                          - generic [ref=e1424]:
                            - img "He Was Offered $45 Million To Betray His Country - He Said No" [ref=e1426]
                            - generic [ref=e1428]: 05:21
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1429]:
                              - generic [ref=e1430]:
                                - img "TED" [ref=e1431]
                                - generic [ref=e1432]:
                                  - generic:
                                    - generic "TED" [ref=e1433]
                                    - generic [ref=e1434]: ·
                                    - generic [ref=e1435]: 6d
                              - link "He was offered $45 million to betray his country - he said no" [ref=e1436]:
                                - /url: https://www.msn.com/en-in/news/other/he-was-offered-45-million-to-betray-his-country-he-said-no/vi-AA26MSov?ocid=hpmsn
                                - heading "He was offered $45 million to betray his country - he said no" [level=2] [ref=e1437]:
                                  - generic: He was offered $45 million to betray his country - he said no
                            - button "See more" [ref=e1441]
                        - link "See more" [ref=e1443]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1444]
                          - text: See more
                    - button "next" [ref=e1448]:
                      - img [ref=e1451]
            - article "2,600 years ago, an Indian physician documented 1,120 illnesses. Scotland has now honoured him" [ref=e1453] [cursor=pointer]:
              - generic [ref=e1455]:
                - img [ref=e1456]
                - generic [ref=e1457]:
                  - generic [ref=e1458]:
                    - generic [ref=e1460]:
                      - img [ref=e1461]
                      - generic [ref=e1462]: India Today
                    - link "2,600 years ago, an Indian physician documented 1,120 illnesses. Scotland has now honoured him, India Today" [ref=e1463]:
                      - /url: https://www.msn.com/en-in/health/general/2-600-years-ago-an-indian-physician-documented-1-120-illnesses-scotland-has-now-honoured-him/ar-AA26iL8E
                      - text: 2,600 years ago, an Indian physician documented 1,120 illnesses. Scotland has now honoured him
                  - generic "2,600 years ago, an Indian physician documented 1,120 illnesses. Scotland has now honoured him" [ref=e1466]:
                    - generic [ref=e1468]:
                      - generic [ref=e1469]:
                        - button "430 Likes" [ref=e1470]:
                          - generic [ref=e1471]:
                            - img [ref=e1472]
                            - generic [ref=e1474]: "430"
                        - button "38 Dislikes" [ref=e1475]:
                          - img [ref=e1477]
                      - link "View comments 11 Comment" [ref=e1480]:
                        - /url: https://www.msn.com/en-in/health/general/2-600-years-ago-an-indian-physician-documented-1-120-illnesses-scotland-has-now-honoured-him/ar-AA26iL8E#comments
                        - button "View comments 11 Comment" [ref=e1481]:
                          - img [ref=e1482]
                        - generic [ref=e1484]: "11"
                - generic [ref=e1485]:
                  - button "Hide this story" [ref=e1486]:
                    - img [ref=e1487]
                    - text: Hide this story
                  - button "See more" [ref=e1488]:
                    - img [ref=e1489]
            - article "Watch Sweden’s $200 million stealth warship fire its hidden 57mm cannon" [ref=e1490] [cursor=pointer]:
              - generic [ref=e1492]:
                - generic [ref=e1498]:
                  - generic [ref=e1499]:
                    - generic [ref=e1500]:
                      - generic [ref=e1501]:
                        - img [ref=e1502]
                        - generic [ref=e1503]: Sam Eckholm
                      - generic [ref=e1504]: ·
                      - generic [ref=e1505]: 7h
                    - link "Watch Sweden’s $200 million stealth warship fire its hidden 57mm cannon, Sam Eckholm" [ref=e1506]:
                      - /url: https://www.msn.com/en-in/news/other/watch-sweden-s-200-million-stealth-warship-fire-its-hidden-57mm-cannon/vi-AA2b62I3
                      - text: Watch Sweden’s $200 million stealth warship fire its hidden 57mm cannon
                  - generic "Watch Sweden’s $200 million stealth warship fire its hidden 57mm cannon" [ref=e1509]:
                    - generic [ref=e1511]:
                      - generic [ref=e1512]:
                        - button "1 Like" [ref=e1513]:
                          - generic [ref=e1514]:
                            - img [ref=e1515]
                            - generic [ref=e1517]: "1"
                        - button "1 Dislike" [ref=e1518]:
                          - img [ref=e1520]
                      - link "Start the conversation" [ref=e1523]:
                        - /url: https://www.msn.com/en-in/news/other/watch-sweden-s-200-million-stealth-warship-fire-its-hidden-57mm-cannon/vi-AA2b62I3#comments
                        - button "Start the conversation" [ref=e1524]:
                          - img [ref=e1525]
                - generic [ref=e1527]:
                  - button "Hide this story" [ref=e1528]:
                    - img [ref=e1529]
                    - text: Hide this story
                  - button "See more" [ref=e1530]:
                    - img [ref=e1531]
            - 'article "Toxic review controversy: Legal notices sent to YouTubers, influencers over negative reviews" [ref=e1532] [cursor=pointer]':
              - generic [ref=e1534]:
                - img [ref=e1535]
                - generic [ref=e1536]:
                  - generic [ref=e1537]:
                    - generic [ref=e1538]:
                      - generic [ref=e1539]:
                        - img [ref=e1540]
                        - generic [ref=e1541]: News18
                      - generic [ref=e1542]: ·
                      - generic [ref=e1543]: 10h
                    - 'link "Toxic review controversy: Legal notices sent to YouTubers, influencers over negative reviews, News18" [ref=e1544]':
                      - /url: https://www.msn.com/en-in/entertainment/movies/toxic-review-controversy-legal-notices-sent-to-youtubers-influencers-over-negative-reviews/ar-AA2b5q5B
                      - text: "Toxic review controversy: Legal notices sent to YouTubers, influencers over negative reviews"
                  - 'generic "Toxic review controversy: Legal notices sent to YouTubers, influencers over negative reviews" [ref=e1547]':
                    - generic [ref=e1549]:
                      - generic [ref=e1550]:
                        - button "16 Likes" [ref=e1551]:
                          - generic [ref=e1552]:
                            - img [ref=e1553]
                            - generic [ref=e1555]: "16"
                        - button "11 Dislikes" [ref=e1556]:
                          - img [ref=e1558]
                      - link "Start the conversation" [ref=e1561]:
                        - /url: https://www.msn.com/en-in/entertainment/movies/toxic-review-controversy-legal-notices-sent-to-youtubers-influencers-over-negative-reviews/ar-AA2b5q5B#comments
                        - button "Start the conversation" [ref=e1562]:
                          - img [ref=e1563]
                - generic [ref=e1565]:
                  - button "Hide this story" [ref=e1566]:
                    - img [ref=e1567]
                    - text: Hide this story
                  - button "See more" [ref=e1568]:
                    - img [ref=e1569]
            - article "Which language is known as the queen of all languages?" [ref=e1570] [cursor=pointer]:
              - generic [ref=e1572]:
                - img [ref=e1573]
                - generic [ref=e1574]:
                  - generic [ref=e1575]:
                    - generic [ref=e1577]:
                      - img [ref=e1578]
                      - generic [ref=e1579]: Jagran Josh
                    - link "Which language is known as the queen of all languages?, Jagran Josh" [ref=e1580]:
                      - /url: https://www.msn.com/en-in/money/general/which-language-is-known-as-the-queen-of-all-languages/ar-AA22iZ2P
                      - text: Which language is known as the queen of all languages?
                  - generic "Which language is known as the queen of all languages?" [ref=e1583]:
                    - generic [ref=e1585]:
                      - generic [ref=e1586]:
                        - button "119 Likes" [ref=e1587]:
                          - generic [ref=e1588]:
                            - img [ref=e1589]
                            - generic [ref=e1591]: "119"
                        - button "68 Dislikes" [ref=e1592]:
                          - img [ref=e1594]
                      - link "View comments 20 Comment" [ref=e1597]:
                        - /url: https://www.msn.com/en-in/money/general/which-language-is-known-as-the-queen-of-all-languages/ar-AA22iZ2P#comments
                        - button "View comments 20 Comment" [ref=e1598]:
                          - img [ref=e1599]
                        - generic [ref=e1601]: "20"
                - generic [ref=e1602]:
                  - button "Hide this story" [ref=e1603]:
                    - img [ref=e1604]
                    - text: Hide this story
                  - button "See more" [ref=e1605]:
                    - img [ref=e1606]
            - article [ref=e1607] [cursor=pointer]
            - 'article "Nepal says no to foreign rescue teams despite massive flood toll: The 2015 lesson behind it" [ref=e1614] [cursor=pointer]':
              - generic [ref=e1616]:
                - img [ref=e1617]
                - generic [ref=e1618]:
                  - generic [ref=e1619]:
                    - generic [ref=e1620]:
                      - generic [ref=e1621]:
                        - img [ref=e1622]
                        - generic [ref=e1623]: Hindustan Times
                      - generic [ref=e1624]: ·
                      - generic [ref=e1625]: 10h
                    - 'link "Nepal says no to foreign rescue teams despite massive flood toll: The 2015 lesson behind it, Hindustan Times" [ref=e1626]':
                      - /url: https://www.msn.com/en-in/public-safety-and-emergencies/natural-disasters/nepal-says-no-to-foreign-rescue-teams-despite-massive-flood-toll-the-2015-lesson-behind-it/ar-AA2b5RZ1
                      - text: "Nepal says no to foreign rescue teams despite massive flood toll: The 2015 lesson behind it"
                  - 'generic "Nepal says no to foreign rescue teams despite massive flood toll: The 2015 lesson behind it" [ref=e1629]':
                    - generic [ref=e1631]:
                      - generic [ref=e1632]:
                        - button "4 Likes" [ref=e1633]:
                          - generic [ref=e1634]:
                            - img [ref=e1635]
                            - generic [ref=e1637]: "4"
                        - button "Dislike" [ref=e1638]:
                          - img [ref=e1640]
                      - link "Start the conversation" [ref=e1643]:
                        - /url: https://www.msn.com/en-in/public-safety-and-emergencies/natural-disasters/nepal-says-no-to-foreign-rescue-teams-despite-massive-flood-toll-the-2015-lesson-behind-it/ar-AA2b5RZ1#comments
                        - button "Start the conversation" [ref=e1644]:
                          - img [ref=e1645]
                - generic [ref=e1647]:
                  - button "Hide this story" [ref=e1648]:
                    - img [ref=e1649]
                    - text: Hide this story
                  - button "See more" [ref=e1650]:
                    - img [ref=e1651]
          - generic [ref=e1652]:
            - article [ref=e1653] [cursor=pointer]
            - article "Kangana Ranaut ends fight with 'bade bhai' Baba Ramdev on Raksha Bandhan; accepts rakhi, sweets - 'bhool chook maaf'" [ref=e1660] [cursor=pointer]:
              - generic [ref=e1662]:
                - img [ref=e1663]
                - generic [ref=e1664]:
                  - generic [ref=e1665]:
                    - generic [ref=e1666]:
                      - generic [ref=e1667]:
                        - img [ref=e1668]
                        - generic [ref=e1669]: Times Now
                      - generic [ref=e1670]: ·
                      - generic [ref=e1671]: 8h
                    - link "Kangana Ranaut ends fight with 'bade bhai' Baba Ramdev on Raksha Bandhan; accepts rakhi, sweets - 'bhool chook maaf', Times Now" [ref=e1672]:
                      - /url: https://www.msn.com/en-in/entertainment/celebrities/kangana-ranaut-ends-fight-with-bade-bhai-baba-ramdev-on-raksha-bandhan-accepts-rakhi-sweets-bhool-chook-maaf/ar-AA2b5tgF
                      - text: Kangana Ranaut ends fight with 'bade bhai' Baba Ramdev on Raksha Bandhan; accepts rakhi, sweets - 'bhool chook maaf'
                  - generic "Kangana Ranaut ends fight with 'bade bhai' Baba Ramdev on Raksha Bandhan; accepts rakhi, sweets - 'bhool chook maaf'" [ref=e1675]:
                    - generic [ref=e1677]:
                      - generic [ref=e1678]:
                        - button "18 Likes" [ref=e1679]:
                          - generic [ref=e1680]:
                            - img [ref=e1681]
                            - generic [ref=e1683]: "18"
                        - button "11 Dislikes" [ref=e1684]:
                          - img [ref=e1686]
                      - link "View comments 1 Comment" [ref=e1689]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/kangana-ranaut-ends-fight-with-bade-bhai-baba-ramdev-on-raksha-bandhan-accepts-rakhi-sweets-bhool-chook-maaf/ar-AA2b5tgF#comments
                        - button "View comments 1 Comment" [ref=e1690]:
                          - img [ref=e1691]
                        - generic [ref=e1693]: "1"
                - generic [ref=e1694]:
                  - button "Hide this story" [ref=e1695]:
                    - img [ref=e1696]
                    - text: Hide this story
                  - button "See more" [ref=e1697]:
                    - img [ref=e1698]
    - contentinfo [ref=e1701]:
      - generic "Feedback" [ref=e1703] [cursor=pointer]:
        - button "Feedback" [ref=e1704]:
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