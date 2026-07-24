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
        - 'link "Des Moines: Mostly cloudy, 20 °C" [ref=e19] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
          - generic "Des Moines, Iowa, United States Click here to see more information" [ref=e20]: Des Moines
          - img "Mostly cloudy" [ref=e22]
          - generic [ref=e23]:
            - generic [ref=e24]: ‎20‎
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
                - tab "News story" [ref=e213] [cursor=pointer]
                - tab "Sponsored" [ref=e215] [cursor=pointer]
                - tab "News story" [ref=e217] [cursor=pointer]
                - tab "News story" [ref=e219] [cursor=pointer]
                - tab "News story" [ref=e221] [cursor=pointer]
                - tab "Sponsored" [selected] [ref=e223] [cursor=pointer]
                - tab "News story" [ref=e225] [cursor=pointer]
                - tab "News story" [ref=e227] [cursor=pointer]
                - tab "Sponsored" [ref=e229] [cursor=pointer]
                - tab "News story" [ref=e231] [cursor=pointer]
                - tab "News story" [ref=e233] [cursor=pointer]
                - tab "News story" [ref=e235] [cursor=pointer]
                - tab "Sponsored" [ref=e237] [cursor=pointer]
                - tab "News story" [ref=e239] [cursor=pointer]
                - tab "News story" [ref=e241] [cursor=pointer]
                - tab "News story" [ref=e243] [cursor=pointer]
                - tab "News story" [ref=e245] [cursor=pointer]
                - tab "News story" [ref=e247] [cursor=pointer]
                - tab "Sponsored" [ref=e249] [cursor=pointer]
                - tab "News story" [ref=e251] [cursor=pointer]
                - tab "News story" [ref=e253] [cursor=pointer]
                - tab "News story" [ref=e255] [cursor=pointer]
                - tab "News story" [ref=e257] [cursor=pointer]
                - tab "News story" [ref=e259] [cursor=pointer]
                - tab "Sponsored" [ref=e261] [cursor=pointer]
                - tab "News story" [ref=e263] [cursor=pointer]
                - tab "News story" [ref=e265] [cursor=pointer]
                - tab "News story" [ref=e267] [cursor=pointer]
                - tab "Sponsored" [ref=e269] [cursor=pointer]
                - tab "News story" [ref=e271] [cursor=pointer]
                - tab "News story" [ref=e273] [cursor=pointer]
              - button [ref=e277]
              - button [ref=e280]
              - article "Women's Pointelle Knee High Socks - Soft White - Medium - Cotton Blend - Bombas" [ref=e281] [cursor=pointer]:
                - generic [ref=e283]:
                  - img [ref=e284]
                  - generic [ref=e285]:
                    - generic [ref=e286]:
                      - generic [ref=e289]: Bombas
                      - link "Women's Pointelle Knee High Socks - Soft White - Medium - Cotton Blend - Bombas, Bombas" [ref=e290]:
                        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=9ec821ff-378b-49ce-935b-96ac8bf020b2&bdc=pb&bidId=1&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=cafa7b45-4b14-447a-82b7-aad1d7d503ce&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8WxoNadVS9xVNtnE77-DhVzVUCUw80yxfDcpwTirWE2cy5cFtZ8PXm9Rt6YDmC0-6RbxkPtIGpgR8vqie-CRTtXtthuh996hLk1nNnqNro-Sh1nJvlZBexCdSkmpRUbwOq_-b3wRbERiVb0OLhjeNCUJ-axgRoVVG8HeFW6YIdIA5Ew8j5bKd70YPAO63vli9-PHhfA3WRe8h0LSbtmYgJziEEPE%26u%3DaHR0cHMlM2ElMmYlMmZib21iYXMuY29tJTJmcHJvZHVjdHMlMmZ3b21lbnMtcG9pbnRlbGxlLWtuZWUtaGlnaC1zb2NrcyUzZnZhcmlhbnQlM2Rzb2Z0LXdoaXRlJTI2c2l6ZSUzZG0lMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RQTUFYLVBMQV9CaW5nX1BNYXhfU29ja3MtU29jay1BQ1EtTk9ORSUyNm1zY2xraWQlM2Q3YzE0YWRkYWUxN2IxZjAzZmRkMmM3YjllMzFjNGQ2NyUyNnV0bV90ZXJtJTNkMjMyOTUyMTU0MjUxNDE0NiUyNnV0bV9jb250ZW50JTNkRHJlc3MlMjUyMFNvY2tz%26rlid%3D7c14addae17b1f03fdd2c7b9e31c4d67&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                        - text: Women's Pointelle Knee High Socks - Soft White - Medium - Cotton Blend - Bombas
                    - link "Sponsored" [ref=e292]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=9ec821ff-378b-49ce-935b-96ac8bf020b2&bdc=pb&bidId=1&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=cafa7b45-4b14-447a-82b7-aad1d7d503ce&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8WxoNadVS9xVNtnE77-DhVzVUCUw80yxfDcpwTirWE2cy5cFtZ8PXm9Rt6YDmC0-6RbxkPtIGpgR8vqie-CRTtXtthuh996hLk1nNnqNro-Sh1nJvlZBexCdSkmpRUbwOq_-b3wRbERiVb0OLhjeNCUJ-axgRoVVG8HeFW6YIdIA5Ew8j5bKd70YPAO63vli9-PHhfA3WRe8h0LSbtmYgJziEEPE%26u%3DaHR0cHMlM2ElMmYlMmZib21iYXMuY29tJTJmcHJvZHVjdHMlMmZ3b21lbnMtcG9pbnRlbGxlLWtuZWUtaGlnaC1zb2NrcyUzZnZhcmlhbnQlM2Rzb2Z0LXdoaXRlJTI2c2l6ZSUzZG0lMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RQTUFYLVBMQV9CaW5nX1BNYXhfU29ja3MtU29jay1BQ1EtTk9ORSUyNm1zY2xraWQlM2Q3YzE0YWRkYWUxN2IxZjAzZmRkMmM3YjllMzFjNGQ2NyUyNnV0bV90ZXJtJTNkMjMyOTUyMTU0MjUxNDE0NiUyNnV0bV9jb250ZW50JTNkRHJlc3MlMjUyMFNvY2tz%26rlid%3D7c14addae17b1f03fdd2c7b9e31c4d67&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                  - button "See more" [ref=e294]:
                    - img [ref=e295]
            - 'article "Don''t let a 4-year degree dictate a 40-year career: IIT graduate''s career advice divides internet" [ref=e296] [cursor=pointer]':
              - generic [ref=e298]:
                - img [ref=e299]
                - generic [ref=e300]:
                  - generic [ref=e301]:
                    - generic [ref=e302]:
                      - generic [ref=e303]:
                        - img [ref=e304]
                        - generic [ref=e305]: Hindustan Times
                      - generic [ref=e306]: ·
                      - generic [ref=e307]: 4d
                    - 'link "Don''t let a 4-year degree dictate a 40-year career: IIT graduate''s career advice divides internet, Hindustan Times" [ref=e308]':
                      - /url: https://www.msn.com/en-in/money/general/don-t-let-a-4-year-degree-dictate-a-40-year-career-iit-graduate-s-career-advice-divides-internet/ar-AA28eaXf
                      - text: "Don't let a 4-year degree dictate a 40-year career: IIT graduate's career advice divides internet"
                  - 'generic "Don''t let a 4-year degree dictate a 40-year career: IIT graduate''s career advice divides internet" [ref=e311]':
                    - generic [ref=e313]:
                      - generic [ref=e314]:
                        - button "33 Likes" [ref=e315]:
                          - generic [ref=e316]:
                            - img [ref=e317]
                            - generic [ref=e319]: "33"
                        - button "Dislike" [ref=e320]:
                          - img [ref=e322]
                      - link "View comments 1 Comment" [ref=e325]:
                        - /url: https://www.msn.com/en-in/money/general/don-t-let-a-4-year-degree-dictate-a-40-year-career-iit-graduate-s-career-advice-divides-internet/ar-AA28eaXf#comments
                        - button "View comments 1 Comment" [ref=e326]:
                          - img [ref=e327]
                        - generic [ref=e329]: "1"
                - generic [ref=e330]:
                  - button "Hide this story" [ref=e331]:
                    - img [ref=e332]
                    - text: Hide this story
                  - button "See more" [ref=e333]:
                    - img [ref=e334]
            - article [ref=e335] [cursor=pointer]:
              - generic [ref=e339]:
                - generic: Sponsored
            - article "Calculate Downtime With SeQent" [ref=e340] [cursor=pointer]:
              - generic [ref=e342]:
                - img [ref=e343]
                - generic [ref=e344]:
                  - generic [ref=e345]:
                    - generic [ref=e348]: SeQent
                    - link "Calculate Downtime With SeQent, SeQent" [ref=e349]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=7eec298d-13c0-42b5-a2d5-17660de82309&bdc=pb&bidId=5&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=cafa7b45-4b14-447a-82b7-aad1d7d503ce&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8fDNSMITrRHEVudZITVfOdzVUCUxiQs_cLhnkbpoRHrEHDEsx2I0D5WLIosQ6rm0pKiDPVE7oeI3ecjW0_qZ-bhxbis053RuZmx-CVCWTP1ISVDLVDnPdSCS1kJtldNLWa_v24c3Tgh7XsqIgl2HhmmUScusOaUTzpg4KJC4nL_Qlgk71jpGL7c4Zuzhu7fiLXibhj1PsF7XDBBfMJ15U8EWSK0o%26u%3DaHR0cHMlM2ElMmYlMmZzZXFlbnQuY29tJTJmcm9pLWNhbGN1bGF0b3IlMmYlM2ZjYW1wYWlnbiUzZDUzMzU2MjA3MiUyNmNvbnRlbnQlM2QlMjZrZXl3b3JkJTNka2V5d29yZCUyNnV0bV90ZXJtJTNka2V5d29yZCUyNnV0bV9jYW1wYWlnbiUzZFNlUWVudCUyYi0lMmJEaXNwbGF5JTJiLSUyYlJlZHVjZSUyYkRvd250aW1lJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkcHBjJTI2aHNhX2FjYyUzZDY4NTc1NzM3NDUlMjZoc2FfY2FtJTNkMjM1Njc1MDU3OTYlMjZoc2FfZ3JwJTNkMTM1MDIwMjk5NTY3MDQ1MCUyNmhzYV9hZCUzZCUyNmhzYV9zcmMlM2RhJTI2aHNhX3RndCUzZGt3ZC0yMzM2MTg3MzMyMzE3MjU4JTNhbG9jLTE5MCUyNmhzYV9rdyUzZGtleXdvcmQlMjZoc2FfbXQlM2RlJTI2aHNhX25ldCUzZGJpbmclMjZoc2FfdmVyJTNkMyUyNm1zY2xraWQlM2RmYzk3NmExMWIxYTIxMjkyNDhhYjAwNzJiM2M1ZmM4Yg%26rlid%3Dfc976a11b1a2129248ab0072b3c5fc8b&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Calculate Downtime With SeQent
                  - link "Sponsored" [ref=e351]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=7eec298d-13c0-42b5-a2d5-17660de82309&bdc=pb&bidId=5&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=cafa7b45-4b14-447a-82b7-aad1d7d503ce&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8fDNSMITrRHEVudZITVfOdzVUCUxiQs_cLhnkbpoRHrEHDEsx2I0D5WLIosQ6rm0pKiDPVE7oeI3ecjW0_qZ-bhxbis053RuZmx-CVCWTP1ISVDLVDnPdSCS1kJtldNLWa_v24c3Tgh7XsqIgl2HhmmUScusOaUTzpg4KJC4nL_Qlgk71jpGL7c4Zuzhu7fiLXibhj1PsF7XDBBfMJ15U8EWSK0o%26u%3DaHR0cHMlM2ElMmYlMmZzZXFlbnQuY29tJTJmcm9pLWNhbGN1bGF0b3IlMmYlM2ZjYW1wYWlnbiUzZDUzMzU2MjA3MiUyNmNvbnRlbnQlM2QlMjZrZXl3b3JkJTNka2V5d29yZCUyNnV0bV90ZXJtJTNka2V5d29yZCUyNnV0bV9jYW1wYWlnbiUzZFNlUWVudCUyYi0lMmJEaXNwbGF5JTJiLSUyYlJlZHVjZSUyYkRvd250aW1lJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkcHBjJTI2aHNhX2FjYyUzZDY4NTc1NzM3NDUlMjZoc2FfY2FtJTNkMjM1Njc1MDU3OTYlMjZoc2FfZ3JwJTNkMTM1MDIwMjk5NTY3MDQ1MCUyNmhzYV9hZCUzZCUyNmhzYV9zcmMlM2RhJTI2aHNhX3RndCUzZGt3ZC0yMzM2MTg3MzMyMzE3MjU4JTNhbG9jLTE5MCUyNmhzYV9rdyUzZGtleXdvcmQlMjZoc2FfbXQlM2RlJTI2aHNhX25ldCUzZGJpbmclMjZoc2FfdmVyJTNkMyUyNm1zY2xraWQlM2RmYzk3NmExMWIxYTIxMjkyNDhhYjAwNzJiM2M1ZmM4Yg%26rlid%3Dfc976a11b1a2129248ab0072b3c5fc8b&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e353]:
                  - img [ref=e354]
            - article [ref=e355] [cursor=pointer]:
              - generic [ref=e361]:
                - generic [ref=e363]:
                  - img "Watchlist suggestions" [ref=e365]
                  - link "Watchlist suggestions" [ref=e366]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e367]
                  - button "More options" [ref=e369]
                - generic [ref=e374]:
                  - link "NASDAQ COMP ‎-2.15%‎ 25,137.69" [ref=e376]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a3oxnm&ocid=hpmsn
                    - generic [ref=e377]:
                      - generic [ref=e379]: NASDAQ
                      - generic [ref=e381]: COMP
                    - generic [ref=e386]:
                      - generic [ref=e387]: ‎-2.15%‎
                      - generic [ref=e388]: 25,137.69
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
                  - link "Tata Steel Ltd TATASTEEL ‎-1.03%‎ 182.33" [ref=e416]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkaa2&ocid=hpmsn
                    - generic [ref=e417]:
                      - generic [ref=e419]: Tata Steel Ltd
                      - generic [ref=e421]: TATASTEEL
                    - generic [ref=e426]:
                      - generic [ref=e427]: ‎-1.03%‎
                      - generic [ref=e428]: "182.33"
                    - button "Add to watchlist" [ref=e431]:
                      - img [ref=e432]
                  - link "Vodafone Idea Ltd Vodafone Idea Ltd Dropping fast ‎-2.27%‎ 12.90" [ref=e436]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahi8u2&noti=Price&ocid=hpmsn
                    - generic [ref=e437]:
                      - generic [ref=e438]:
                        - generic [ref=e439]: Vodafone Idea Ltd
                        - img "Vodafone Idea Ltd" [ref=e440]
                      - generic [ref=e442]: Dropping fast
                    - generic [ref=e447]:
                      - generic [ref=e448]: ‎-2.27%‎
                      - generic [ref=e449]: "12.90"
                    - button "Add to watchlist" [ref=e452]:
                      - img [ref=e453]
                  - link "Infosys Ltd INFY ‎-2.38%‎ 10.67" [ref=e457]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a1vkgh&ocid=hpmsn
                    - generic [ref=e458]:
                      - generic [ref=e460]: Infosys Ltd
                      - generic [ref=e462]: INFY
                    - generic [ref=e467]:
                      - generic [ref=e468]: ‎-2.38%‎
                      - generic [ref=e469]: "10.67"
                    - button "Add to watchlist" [ref=e472]:
                      - img [ref=e473]
                - generic [ref=e477]:
                  - generic [ref=e478]:
                    - generic "Previous" [ref=e479]:
                      - button "Previous" [ref=e480]
                    - tablist [ref=e482]:
                      - tab "tab-0" [selected] [ref=e483]
                      - tab "tab-1" [ref=e485]
                      - tab "tab-2" [ref=e487]
                      - tab "tab-3" [ref=e489]
                      - tab "tab-4" [ref=e491]
                      - tab "tab-5"
                      - tab "tab-6"
                    - generic "Next" [ref=e493]:
                      - button "Next" [ref=e494]
                  - link "See watchlist suggestions" [ref=e496]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - article [ref=e497] [cursor=pointer]:
              - generic [ref=e502]:
                - generic [ref=e504]:
                  - link "Top stories" [ref=e506]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a6302656f2549d08c0bb735b902bb4a&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e507]
                  - button "More options" [ref=e509]
                - list [ref=e512]:
                  - listitem [ref=e513]:
                    - link "WION now CJP to hold talks with Centre at 12:30 pm – Where will the meeting take place? Details here" [ref=e514]:
                      - /url: https://www.msn.com/en-in/news/other/cjp-to-hold-talks-with-centre-at-12-30-pm-where-will-the-meeting-take-place-details-here/ar-AA28ySxf
                      - generic [ref=e515]:
                        - generic [ref=e516]:
                          - img [ref=e517]
                          - generic [ref=e518]:
                            - generic: WION ·now
                        - generic [ref=e519]: CJP to hold talks with Centre at 12:30 pm – Where will the meeting take place? Details here
                  - listitem [ref=e520]:
                    - 'link "Press Trust of India now Hollow assurances: Kejriwal on PM''s fast-track court promise to punish paper leaks accused" [ref=e521]':
                      - /url: https://www.msn.com/en-in/news/other/hollow-assurances-kejriwal-on-pm-s-fast-track-court-promise-to-punish-paper-leaks-accused/ar-AA28zzIT
                      - generic [ref=e522]:
                        - generic [ref=e523]:
                          - img [ref=e524]
                          - generic [ref=e525]:
                            - generic: Press Trust of India ·now
                        - generic [ref=e526]: "Hollow assurances: Kejriwal on PM's fast-track court promise to punish paper leaks accused"
                  - listitem [ref=e527]:
                    - 'link "Hindustan Times 43m ''Desperate, hollow'': Opposition reacts to PM Modi''s midnight selfie video on NEET paper leak" [ref=e528]':
                      - /url: https://www.msn.com/en-in/news/other/desperate-hollow-opposition-reacts-to-pm-modi-s-midnight-selfie-video-on-neet-paper-leak/ar-AA28zYrT
                      - generic [ref=e529]:
                        - generic [ref=e530]:
                          - img [ref=e531]
                          - generic [ref=e532]:
                            - generic: Hindustan Times ·43m
                        - generic [ref=e533]: "'Desperate, hollow': Opposition reacts to PM Modi's midnight selfie video on NEET paper leak"
                - generic [ref=e535]:
                  - generic [ref=e536]:
                    - generic "Previous" [ref=e537]:
                      - button "Previous" [ref=e538]
                    - tablist [ref=e540]:
                      - tab "tab-0" [selected] [ref=e541]
                      - tab "tab-1" [ref=e543]
                      - tab "tab-2" [ref=e545]
                    - generic "Next" [ref=e547]:
                      - button "Next" [ref=e548]
                  - link "See more" [ref=e550]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a6302656f2549d08c0bb735b902bb4a&ocid=hpmsn
            - article "The Top-Rated Fantasy Game Of The Year" [ref=e551] [cursor=pointer]:
              - generic [ref=e553]:
                - img [ref=e554]
                - generic [ref=e555]:
                  - generic [ref=e556]:
                    - generic [ref=e559]: Try Mmorpg
                    - link "The Top-Rated Fantasy Game Of The Year, Try Mmorpg" [ref=e560]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=b681d438-ea7e-4542-b107-3c84d78ae7fd&bdc=pb&bidId=12&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=cafa7b45-4b14-447a-82b7-aad1d7d503ce&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8y3mzIW_BwDMwKvww2W1__zVUCUzDWI5JK4Y77vb-dxuhy6qICS59oy8C9-kO-KHt-_hut6d3V7fk754EBizE42IKGFENWQnfXjdrIVROZQrCyQyfFtPtJKBso4H9C1e_X6yy83JytaXGxIEOzXs28EJlzP_fik5IN-Hq5ULEIHrDnfR6VqvVgLiztDtJz2WBqz-mti9P5Afavas6v9tvI0CreQ0%26u%3DaHR0cHMlM2ElMmYlMmZyYWlkbW1vcnBnLmNvbSUzZm1zY2xraWQlM2Q4ODI0NzcyYzc1MjIxZWUwMDQ1ZDFkNGY3NzQ1MzBhZCUyNkFkR3JvdXBJZCUzZDExODE5NzcwODUxMjQwODklMjZBZElkJTNkNzM4NzM3OTQ1NTExNTElMjZCaWRNYXRjaFR5cGUlM2RiZSUyNkNhbXBhaWduSWQlM2Q1NzA4NDgyNzAlMjZUYXJnZXRJZCUzZGt3ZC0yMzI1NjczMjUyMjgzMDcxJTNhbG9jLTE5MCUyNlF1ZXJ5U3RyaW5nJTNka2V5d29yZCUyNklmU2VhcmNoJTNhc3RyaW5nJTNkc3RyaW5nJTI2a2V5d29yZCUzZGtleXdvcmQlMjZNYXRjaFR5cGUlM2RlJTI2Y3BpZCUzZDU1NjRjYzE4LTQyNmEtNGYyMy1hNTQ4LTg3OTdiMDMxNjgzNyUyNmJhY2tncm91bmQlM2QwNA%26rlid%3D8824772c75221ee0045d1d4f774530ad&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: The Top-Rated Fantasy Game Of The Year
                  - link "Sponsored" [ref=e562]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=b681d438-ea7e-4542-b107-3c84d78ae7fd&bdc=pb&bidId=12&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=cafa7b45-4b14-447a-82b7-aad1d7d503ce&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8y3mzIW_BwDMwKvww2W1__zVUCUzDWI5JK4Y77vb-dxuhy6qICS59oy8C9-kO-KHt-_hut6d3V7fk754EBizE42IKGFENWQnfXjdrIVROZQrCyQyfFtPtJKBso4H9C1e_X6yy83JytaXGxIEOzXs28EJlzP_fik5IN-Hq5ULEIHrDnfR6VqvVgLiztDtJz2WBqz-mti9P5Afavas6v9tvI0CreQ0%26u%3DaHR0cHMlM2ElMmYlMmZyYWlkbW1vcnBnLmNvbSUzZm1zY2xraWQlM2Q4ODI0NzcyYzc1MjIxZWUwMDQ1ZDFkNGY3NzQ1MzBhZCUyNkFkR3JvdXBJZCUzZDExODE5NzcwODUxMjQwODklMjZBZElkJTNkNzM4NzM3OTQ1NTExNTElMjZCaWRNYXRjaFR5cGUlM2RiZSUyNkNhbXBhaWduSWQlM2Q1NzA4NDgyNzAlMjZUYXJnZXRJZCUzZGt3ZC0yMzI1NjczMjUyMjgzMDcxJTNhbG9jLTE5MCUyNlF1ZXJ5U3RyaW5nJTNka2V5d29yZCUyNklmU2VhcmNoJTNhc3RyaW5nJTNkc3RyaW5nJTI2a2V5d29yZCUzZGtleXdvcmQlMjZNYXRjaFR5cGUlM2RlJTI2Y3BpZCUzZDU1NjRjYzE4LTQyNmEtNGYyMy1hNTQ4LTg3OTdiMDMxNjgzNyUyNmJhY2tncm91bmQlM2QwNA%26rlid%3D8824772c75221ee0045d1d4f774530ad&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e564]:
                  - img [ref=e565]
            - article "Psychology says people who eat very fast tend to have these personality traits" [ref=e566] [cursor=pointer]:
              - generic [ref=e568]:
                - img [ref=e569]
                - generic [ref=e570]:
                  - generic [ref=e571]:
                    - generic [ref=e572]:
                      - generic [ref=e573]:
                        - img [ref=e574]
                        - generic [ref=e575]: The Times of India
                      - generic [ref=e576]: ·
                      - generic [ref=e577]: 2w
                    - link "Psychology says people who eat very fast tend to have these personality traits, The Times of India" [ref=e578]:
                      - /url: https://www.msn.com/en-in/lifestyle/other/psychology-says-people-who-eat-very-fast-tend-to-have-these-personality-traits/ss-AA27jBIN
                      - text: Psychology says people who eat very fast tend to have these personality traits
                  - generic "Psychology says people who eat very fast tend to have these personality traits" [ref=e581]:
                    - generic [ref=e583]:
                      - generic [ref=e584]:
                        - button "858 Likes" [ref=e585]:
                          - generic [ref=e586]:
                            - img [ref=e587]
                            - generic [ref=e589]: "858"
                        - button "Dislike" [ref=e590]:
                          - img [ref=e592]
                      - link "View comments 6 Comment" [ref=e595]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/psychology-says-people-who-eat-very-fast-tend-to-have-these-personality-traits/ss-AA27jBIN#comments
                        - button "View comments 6 Comment" [ref=e596]:
                          - img [ref=e597]
                        - generic [ref=e599]: "6"
                - generic [ref=e600]:
                  - button "Hide this story" [ref=e601]:
                    - img [ref=e602]
                    - text: Hide this story
                  - button "See more" [ref=e603]:
                    - img [ref=e604]
            - 'article "''Strictest action coming'': PM Modi releases midnight video message amid NEET paper leak CJP protest" [ref=e605] [cursor=pointer]':
              - generic [ref=e607]:
                - generic [ref=e613]:
                  - generic [ref=e614]:
                    - generic [ref=e615]:
                      - generic [ref=e616]:
                        - img [ref=e617]
                        - generic [ref=e618]: The Economic Times
                      - generic [ref=e619]: ·
                      - generic [ref=e620]: 4h
                    - 'link "''Strictest action coming'': PM Modi releases midnight video message amid NEET paper leak CJP protest, The Economic Times" [ref=e621]':
                      - /url: https://www.msn.com/en-in/news/other/strictest-action-coming-pm-modi-releases-midnight-video-message-amid-neet-paper-leak-cjp-protest/vi-AA28yeCk
                      - text: "'Strictest action coming': PM Modi releases midnight video message amid NEET paper leak CJP protest"
                  - 'generic "''Strictest action coming'': PM Modi releases midnight video message amid NEET paper leak CJP protest" [ref=e624]':
                    - generic [ref=e626]:
                      - generic [ref=e627]:
                        - button "45 Likes" [ref=e628]:
                          - generic [ref=e629]:
                            - img [ref=e630]
                            - generic [ref=e632]: "45"
                        - button "Dislike" [ref=e633]:
                          - img [ref=e635]
                      - link "Start the conversation" [ref=e638]:
                        - /url: https://www.msn.com/en-in/news/other/strictest-action-coming-pm-modi-releases-midnight-video-message-amid-neet-paper-leak-cjp-protest/vi-AA28yeCk#comments
                        - button "Start the conversation" [ref=e639]:
                          - img [ref=e640]
                - generic [ref=e642]:
                  - button "Hide this story" [ref=e643]:
                    - img [ref=e644]
                    - text: Hide this story
                  - button "See more" [ref=e645]:
                    - img [ref=e646]
          - generic [ref=e647]:
            - article [ref=e648] [cursor=pointer]:
              - generic [ref=e653]:
                - generic [ref=e655]:
                  - link "Top Engaging News" [ref=e657]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a6302656f2549d08c0bb735b902bb4a
                    - heading "Top Engaging News" [level=2] [ref=e658]
                  - button "More options" [ref=e660]
                - generic [ref=e662]:
                  - 'link "Live Mint 8 Comments Cockroach Janta Party protest: A look at the education of Abhijeet Dipke, Saurav Das and Ashutosh Ranka" [ref=e664]':
                    - /url: https://www.msn.com/en-in/news/other/cockroach-janta-party-protest-a-look-at-the-education-of-abhijeet-dipke-saurav-das-and-ashutosh-ranka/ar-AA28xSyP
                    - generic [ref=e665]:
                      - img [ref=e666]
                      - generic [ref=e667]: Live Mint
                      - link "8 Comments" [ref=e669]:
                        - /url: https://www.msn.com/en-in/news/other/cockroach-janta-party-protest-a-look-at-the-education-of-abhijeet-dipke-saurav-das-and-ashutosh-ranka/ar-AA28xSyP#comments
                        - img [ref=e670]
                        - paragraph [ref=e671]: "8"
                    - paragraph [ref=e672]: "Cockroach Janta Party protest: A look at the education of Abhijeet Dipke, Saurav Das and Ashutosh Ranka"
                  - 'link "Times Now 7 Comments Sonam Wangchuk ends 26-day hunger strike after PM Modi''s announcement: ''Done in view of...''" [ref=e674]':
                    - /url: https://www.msn.com/en-in/news/other/sonam-wangchuk-ends-26-day-hunger-strike-after-pm-modi-s-announcement-done-in-view-of/ar-AA28xHSH
                    - generic [ref=e675]:
                      - img [ref=e676]
                      - generic [ref=e677]: Times Now
                      - link "7 Comments" [ref=e679]:
                        - /url: https://www.msn.com/en-in/news/other/sonam-wangchuk-ends-26-day-hunger-strike-after-pm-modi-s-announcement-done-in-view-of/ar-AA28xHSH#comments
                        - img [ref=e680]
                        - paragraph [ref=e681]: "7"
                    - paragraph [ref=e682]: "Sonam Wangchuk ends 26-day hunger strike after PM Modi's announcement: 'Done in view of...'"
                  - link "ThePrint 9 Comments Govt replaces education secy Vineet Joshi. Modi says 'more strict action against paper leaks tomorrow'" [ref=e684]:
                    - /url: https://www.msn.com/en-in/money/general/govt-replaces-education-secy-vineet-joshi-modi-says-more-strict-action-against-paper-leaks-tomorrow/ar-AA28xCGg
                    - generic [ref=e685]:
                      - img [ref=e686]
                      - generic [ref=e687]: ThePrint
                      - link "9 Comments" [ref=e689]:
                        - /url: https://www.msn.com/en-in/money/general/govt-replaces-education-secy-vineet-joshi-modi-says-more-strict-action-against-paper-leaks-tomorrow/ar-AA28xCGg#comments
                        - img [ref=e690]
                        - paragraph [ref=e691]: "9"
                    - paragraph [ref=e692]: Govt replaces education secy Vineet Joshi. Modi says 'more strict action against paper leaks tomorrow'
                - generic [ref=e694]:
                  - generic [ref=e695]:
                    - generic "Previous" [ref=e696]:
                      - button "Previous" [ref=e697]
                    - tablist [ref=e699]:
                      - tab "tab-0" [selected] [ref=e700]
                      - tab "tab-1" [ref=e702]
                      - tab "tab-2" [ref=e704]
                    - generic "Next" [ref=e706]:
                      - button "Next" [ref=e707]
                  - link "See more" [ref=e709]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a6302656f2549d08c0bb735b902bb4a
            - article [ref=e710] [cursor=pointer]:
              - generic [ref=e716]:
                - generic [ref=e718]:
                  - link "Des Moines" [ref=e720]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
                    - heading "Des Moines" [level=2] [ref=e721]
                  - button "My location" [ref=e722]
                  - button "More options" [ref=e724]
                - generic [ref=e728]:
                  - generic [ref=e729]:
                    - generic [ref=e731]:
                      - link "Mostly cloudy" [ref=e732]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
                        - img "Mostly cloudy" [ref=e733]
                      - link "20°C" [ref=e734]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
                        - generic [ref=e735]: ‎20‎
                        - generic [ref=e737]: ‎°C‎
                    - generic [ref=e739]:
                      - link "Satisfactory" [ref=e741]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa&fcsttab=airquality
                        - text: Satisfactory
                      - link "See full forecast" [ref=e743]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa&fcsttab=airquality
                        - img "arrow" [ref=e744]
                  - generic [ref=e749]:
                    - link "Larger map" [ref=e750]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Des-Moines,Iowa
                      - generic [ref=e751]:
                        - generic:
                          - generic:
                            - img
                            - img
                            - img
                            - img
                      - img
                    - link "Check global air quality" [ref=e752]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Des-Moines,Iowa
                      - img [ref=e754]
                      - generic "Check global air quality" [ref=e755]
                      - img [ref=e757]
                - button "See full forecast" [ref=e760]
            - 'article "Heart attack symptoms: 6 early morning warning signs of the silent killer you should never ignore" [ref=e761] [cursor=pointer]':
              - generic [ref=e763]:
                - img [ref=e764]
                - generic [ref=e765]:
                  - generic [ref=e766]:
                    - generic [ref=e768]:
                      - img [ref=e769]
                      - generic [ref=e770]: Times Now
                    - 'link "Heart attack symptoms: 6 early morning warning signs of the silent killer you should never ignore, Times Now" [ref=e771]':
                      - /url: https://www.msn.com/en-in/health/diseases-and-conditions/heart-attack-symptoms-6-early-morning-warning-signs-of-the-silent-killer-you-should-never-ignore/ar-AA1SRlDo
                      - text: "Heart attack symptoms: 6 early morning warning signs of the silent killer you should never ignore"
                  - 'generic "Heart attack symptoms: 6 early morning warning signs of the silent killer you should never ignore" [ref=e774]':
                    - generic [ref=e776]:
                      - generic [ref=e777]:
                        - button "393 Likes" [ref=e778]:
                          - generic [ref=e779]:
                            - img [ref=e780]
                            - generic [ref=e782]: "393"
                        - button "Dislike" [ref=e783]:
                          - img [ref=e785]
                      - link "Start the conversation" [ref=e788]:
                        - /url: https://www.msn.com/en-in/health/diseases-and-conditions/heart-attack-symptoms-6-early-morning-warning-signs-of-the-silent-killer-you-should-never-ignore/ar-AA1SRlDo#comments
                        - button "Start the conversation" [ref=e789]:
                          - img [ref=e790]
                - generic [ref=e792]:
                  - button "Hide this story" [ref=e793]:
                    - img [ref=e794]
                    - text: Hide this story
                  - button "See more" [ref=e795]:
                    - img [ref=e796]
            - article "Cristiano Ronaldo vs Lionel Messi debate officially over. There's a clear winner" [ref=e797] [cursor=pointer]:
              - generic [ref=e799]:
                - generic [ref=e805]:
                  - generic [ref=e806]:
                    - generic [ref=e807]:
                      - generic [ref=e808]:
                        - img [ref=e809]
                        - generic [ref=e810]: NDTV 24x7
                      - generic [ref=e811]: ·
                      - generic [ref=e812]: 2w
                    - link "Cristiano Ronaldo vs Lionel Messi debate officially over. There's a clear winner, NDTV 24x7" [ref=e813]:
                      - /url: https://www.msn.com/en-in/sports/football/cristiano-ronaldo-vs-lionel-messi-debate-officially-over-there-s-a-clear-winner/vi-AA27uGPZ
                      - text: Cristiano Ronaldo vs Lionel Messi debate officially over. There's a clear winner
                  - generic "Cristiano Ronaldo vs Lionel Messi debate officially over. There's a clear winner" [ref=e816]:
                    - generic [ref=e818]:
                      - generic [ref=e819]:
                        - button "1,844 Likes" [ref=e820]:
                          - generic [ref=e821]:
                            - img [ref=e822]
                            - generic [ref=e824]: 2k
                        - button "Dislike" [ref=e825]:
                          - img [ref=e827]
                      - link "View comments 38 Comment" [ref=e830]:
                        - /url: https://www.msn.com/en-in/sports/football/cristiano-ronaldo-vs-lionel-messi-debate-officially-over-there-s-a-clear-winner/vi-AA27uGPZ#comments
                        - button "View comments 38 Comment" [ref=e831]:
                          - img [ref=e832]
                        - generic [ref=e834]: "38"
                - generic [ref=e835]:
                  - button "Hide this story" [ref=e836]:
                    - img [ref=e837]
                    - text: Hide this story
                  - button "See more" [ref=e838]:
                    - img [ref=e839]
            - article [ref=e840] [cursor=pointer]
            - article "Pakistan will export 60,000 tonnes of rice to China. But how is cash-strapped Islamabad managing it?" [ref=e847] [cursor=pointer]:
              - generic [ref=e849]:
                - img [ref=e850]
                - generic [ref=e851]:
                  - generic [ref=e852]:
                    - generic [ref=e853]:
                      - generic [ref=e854]:
                        - img [ref=e855]
                        - generic [ref=e856]: News18
                      - generic [ref=e857]: ·
                      - generic [ref=e858]: 14h
                    - link "Pakistan will export 60,000 tonnes of rice to China. But how is cash-strapped Islamabad managing it?, News18" [ref=e859]:
                      - /url: https://www.msn.com/en-in/money/economy/pakistan-will-export-60-000-tonnes-of-rice-to-china-but-how-is-cash-strapped-islamabad-managing-it/ar-AA28xIHN
                      - text: Pakistan will export 60,000 tonnes of rice to China. But how is cash-strapped Islamabad managing it?
                  - generic "Pakistan will export 60,000 tonnes of rice to China. But how is cash-strapped Islamabad managing it?" [ref=e862]:
                    - generic [ref=e864]:
                      - generic [ref=e865]:
                        - button "2 Likes" [ref=e866]:
                          - generic [ref=e867]:
                            - img [ref=e868]
                            - generic [ref=e870]: "2"
                        - button "Dislike" [ref=e871]:
                          - img [ref=e873]
                      - link "View comments 2 Comment" [ref=e876]:
                        - /url: https://www.msn.com/en-in/money/economy/pakistan-will-export-60-000-tonnes-of-rice-to-china-but-how-is-cash-strapped-islamabad-managing-it/ar-AA28xIHN#comments
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
            - article [ref=e893] [cursor=pointer]:
              - generic [ref=e898]:
                - generic [ref=e900]:
                  - link "Games" [ref=e902]:
                    - /url: https://www.msn.com/en-in/play
                    - heading "Games" [level=2] [ref=e903]
                  - button "More options" [ref=e905]
                - list [ref=e909]:
                  - generic:
                    - listitem [ref=e910]:
                      - link "bloxd.io" [ref=e911]:
                        - /url: https://www.msn.com/en-in/play/games/bloxdio/cg-9p0rj8ffrg7h?ocid=hpmsn&cvid=6a6302656f2549d08c0bb735b902bb4a&ei=6
                        - generic [ref=e912]:
                          - img "bloxd.io"
                    - listitem [ref=e913]:
                      - link "TapTap Arrow" [ref=e914]:
                        - /url: https://www.msn.com/en-in/play/games/taptap-arrow/cg-9ng0c12cnfsk?ocid=hpmsn&cvid=6a6302656f2549d08c0bb735b902bb4a&ei=6
                        - generic [ref=e915]:
                          - img "TapTap Arrow"
                    - listitem [ref=e916]:
                      - link "LuckyBlocks.io" [ref=e917]:
                        - /url: https://www.msn.com/en-in/play/games/luckyblocksio/cg-9nn8cw6lctxj?ocid=hpmsn&cvid=6a6302656f2549d08c0bb735b902bb4a&ei=6
                        - generic [ref=e918]:
                          - img "LuckyBlocks.io"
                    - listitem [ref=e919]:
                      - 'link "Car Destruction King: Mayhem" [ref=e920]':
                        - /url: https://www.msn.com/en-in/play/games/car-destruction-king-mayhem/cg-9pgbzt0smwg4?ocid=hpmsn&cvid=6a6302656f2549d08c0bb735b902bb4a&ei=6
                        - generic [ref=e921]:
                          - 'img "Car Destruction King: Mayhem"'
                    - listitem [ref=e922]:
                      - 'link "Gas Station: Junkyard Tycoon" [ref=e923]':
                        - /url: https://www.msn.com/en-in/play/games/gas-station-junkyard-tycoon/cg-9n7l5r165cm3?ocid=hpmsn&cvid=6a6302656f2549d08c0bb735b902bb4a&ei=6
                        - generic [ref=e924]:
                          - 'img "Gas Station: Junkyard Tycoon"'
                    - listitem [ref=e925]:
                      - link "Piece of Cake" [ref=e926]:
                        - /url: https://www.msn.com/en-in/play/games/piece-of-cake/cg-9n5mln8fpwg8?ocid=hpmsn&cvid=6a6302656f2549d08c0bb735b902bb4a&ei=6
                        - generic [ref=e927]:
                          - img "Piece of Cake"
                    - listitem [ref=e928]:
                      - link "Jigsaw Solitaire" [ref=e929]:
                        - /url: https://www.msn.com/en-in/play/games/jigsaw-solitaire/cg-9nljmfbvx7xj?ocid=hpmsn&cvid=6a6302656f2549d08c0bb735b902bb4a&ei=6
                        - generic [ref=e930]:
                          - img "Jigsaw Solitaire"
                    - listitem [ref=e931]:
                      - link "Rooftop Run" [ref=e932]:
                        - /url: https://www.msn.com/en-in/play/games/rooftop-run/cg-9plgt00f15xs?ocid=hpmsn&cvid=6a6302656f2549d08c0bb735b902bb4a&ei=6
                        - generic [ref=e933]:
                          - img "Rooftop Run"
                    - listitem [ref=e934]:
                      - link "Veck.io" [ref=e935]:
                        - /url: https://www.msn.com/en-in/play/games/veckio/cg-9mz3sdptqwm2?ocid=hpmsn&cvid=6a6302656f2549d08c0bb735b902bb4a&ei=6
                        - generic [ref=e936]:
                          - img "Veck.io"
                - generic [ref=e938]:
                  - generic [ref=e939]:
                    - generic "Previous" [ref=e940]:
                      - button "Previous" [ref=e941]
                    - tablist [ref=e943]:
                      - tab "tab-0" [selected] [ref=e944]
                      - tab "tab-1" [ref=e946]
                    - generic "Next" [ref=e948]:
                      - button "Next" [ref=e949]
                  - link "Explore more games" [ref=e951]:
                    - /url: https://www.msn.com/en-in/play
          - article [ref=e953]
          - generic [ref=e955]:
            - article [ref=e956] [cursor=pointer]:
              - generic [ref=e961]:
                - generic [ref=e962]:
                  - generic [ref=e963]:
                    - link "Recommended videos" [ref=e964]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e965]
                    - link "Recommended videos" [ref=e968]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e969]:
                    - generic:
                      - link "See more" [ref=e970]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e971]:
                        - button "More options" [ref=e972]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e974]:
                  - generic [ref=e976]:
                    - generic [ref=e978]:
                      - generic:
                        - article "Watch America's 10,000-ton Navy destroyer unleash 96 missiles" [ref=e981]:
                          - generic [ref=e982]:
                            - img "Watch America's 10,000-Ton Navy Destroyer Unleash 96 Missiles" [ref=e984]
                            - generic [ref=e986]: 20:53
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e987]:
                              - generic [ref=e988]:
                                - img "Sam Eckholm" [ref=e989]
                                - generic [ref=e990]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e991]
                                    - generic [ref=e992]: ·
                                    - generic [ref=e993]: 14h
                              - link "Watch America's 10,000-ton Navy destroyer unleash 96 missiles" [ref=e994]:
                                - /url: https://www.msn.com/en-in/news/other/watch-america-s-10-000-ton-navy-destroyer-unleash-96-missiles/vi-AA27xJzU?ocid=hpmsn
                                - heading "Watch America's 10,000-ton Navy destroyer unleash 96 missiles" [level=2] [ref=e995]:
                                  - generic: Watch America's 10,000-ton Navy destroyer unleash 96 missiles
                            - button "See more" [ref=e999]
                        - article "They ignored warnings about this forest - then man-eating bears surrounded them" [ref=e1002]:
                          - generic [ref=e1003]:
                            - img "They Ignored Warnings About This Forest - Then Man-Eating Bears Surrounded Them" [ref=e1005]
                            - generic [ref=e1007]: 23:24
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1008]:
                              - generic [ref=e1009]:
                                - img "Magnus Midtbø" [ref=e1010]
                                - generic [ref=e1011]:
                                  - generic:
                                    - generic "Magnus Midtbø" [ref=e1012]
                                    - generic [ref=e1013]: ·
                                    - generic [ref=e1014]: 14h
                              - link "They ignored warnings about this forest - then man-eating bears surrounded them" [ref=e1015]:
                                - /url: https://www.msn.com/en-in/money/general/they-ignored-warnings-about-this-forest-then-man-eating-bears-surrounded-them/vi-AA25NmpN?ocid=hpmsn
                                - heading "They ignored warnings about this forest - then man-eating bears surrounded them" [level=2] [ref=e1016]:
                                  - generic: They ignored warnings about this forest - then man-eating bears surrounded them
                            - button "See more" [ref=e1020]
                        - article [ref=e1023]:
                          - generic [ref=e1024]:
                            - img "An Asteroid Exploded Over Russia - And We Never Saw It Coming" [ref=e1026]
                            - generic [ref=e1028]: 18:31
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1029]:
                              - generic [ref=e1030]:
                                - img "Veritasium" [ref=e1031]
                                - generic [ref=e1032]:
                                  - generic:
                                    - generic "Veritasium" [ref=e1033]
                                    - generic [ref=e1034]: ·
                                    - generic [ref=e1035]: 17h
                              - link "An asteroid exploded over Russia - and we never saw it coming" [ref=e1036]:
                                - /url: https://www.msn.com/en-in/news/other/an-asteroid-exploded-over-russia-and-we-never-saw-it-coming/vi-AA20kKzm?ocid=hpmsn
                                - heading "An asteroid exploded over Russia - and we never saw it coming" [level=2] [ref=e1037]:
                                  - generic: An asteroid exploded over Russia - and we never saw it coming
                            - button "See more" [ref=e1041]
                        - article "The ocean suddenly pulled back - then a 100-foot wall of water came for the coast" [ref=e1044]:
                          - generic [ref=e1045]:
                            - img "The Ocean Suddenly Pulled Back - Then a 100-Foot Wall of Water Came for the Coast" [ref=e1047]
                            - generic [ref=e1049]: 03:36
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1050]:
                              - generic [ref=e1051]:
                                - img "TED" [ref=e1052]
                                - generic [ref=e1053]:
                                  - generic:
                                    - generic "TED" [ref=e1054]
                                    - generic [ref=e1055]: ·
                                    - generic [ref=e1056]: 3d
                              - link "The ocean suddenly pulled back - then a 100-foot wall of water came for the coast" [ref=e1057]:
                                - /url: https://www.msn.com/en-in/weather/general/the-ocean-suddenly-pulled-back-then-a-100-foot-wall-of-water-came-for-the-coast/vi-AA27T9or?ocid=hpmsn
                                - heading "The ocean suddenly pulled back - then a 100-foot wall of water came for the coast" [level=2] [ref=e1058]:
                                  - generic: The ocean suddenly pulled back - then a 100-foot wall of water came for the coast
                            - button "See more" [ref=e1062]
                        - article [ref=e1065]:
                          - generic [ref=e1066]:
                            - img "Porsche GT3 RS Pushes Hard Through Nürburgring Circuit" [ref=e1068]
                            - generic [ref=e1070]: 09:16
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1071]:
                              - generic [ref=e1072]:
                                - img "Misha Charoudin" [ref=e1073]
                                - generic [ref=e1074]:
                                  - generic:
                                    - generic "Misha Charoudin" [ref=e1075]
                                    - generic [ref=e1076]: ·
                                    - generic [ref=e1077]: 1w
                              - link "Porsche GT3 RS pushes hard through Nürburgring circuit" [ref=e1078]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/porsche-gt3-rs-pushes-hard-through-n%C3%BCrburgring-circuit/vi-AA27HRvA?ocid=hpmsn
                                - heading "Porsche GT3 RS pushes hard through Nürburgring circuit" [level=2] [ref=e1079]:
                                  - generic: Porsche GT3 RS pushes hard through Nürburgring circuit
                            - button "See more" [ref=e1083]
                        - article [ref=e1086]:
                          - generic [ref=e1087]:
                            - img "Who is Nugu? Jolly’s Hilarious Season 2 Finale Korean Lesson!" [ref=e1089]
                            - generic [ref=e1091]: 06:59
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1092]:
                              - generic [ref=e1093]:
                                - img "JOLLY" [ref=e1094]
                                - generic [ref=e1095]:
                                  - generic:
                                    - generic "JOLLY" [ref=e1096]
                                    - generic [ref=e1097]: ·
                                    - generic [ref=e1098]: 9h
                              - link "Who is Nugu? Jolly’s hilarious season 2 finale Korean lesson!" [ref=e1099]:
                                - /url: https://www.msn.com/en-in/entertainment/general/who-is-nugu-jolly-s-hilarious-season-2-finale-korean-lesson/vi-AA28yB39?ocid=hpmsn
                                - heading "Who is Nugu? Jolly’s hilarious season 2 finale Korean lesson!" [level=2] [ref=e1100]:
                                  - generic: Who is Nugu? Jolly’s hilarious season 2 finale Korean lesson!
                            - button "See more" [ref=e1104]
                        - article [ref=e1107]:
                          - generic [ref=e1108]:
                            - img "Serious criminal charges lead to denied bail" [ref=e1110]
                            - generic [ref=e1112]: 07:53
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1113]:
                              - generic [ref=e1114]:
                                - img "Ben Shapiro" [ref=e1115]
                                - generic [ref=e1116]:
                                  - generic:
                                    - generic "Ben Shapiro" [ref=e1117]
                                    - generic [ref=e1118]: ·
                                    - generic [ref=e1119]: 12h
                              - link "These charges were so bad, he was denied bail" [ref=e1120]:
                                - /url: https://www.msn.com/en-in/news/other/these-charges-were-so-bad-he-was-denied-bail/vi-AA231Q7r?ocid=hpmsn
                                - heading "These charges were so bad, he was denied bail" [level=2] [ref=e1121]:
                                  - generic: These charges were so bad, he was denied bail
                            - button "See more" [ref=e1125]
                        - article "This giant thought he was strong - then he got humbled by a rock climber" [ref=e1128]:
                          - generic [ref=e1129]:
                            - img "This Giant Thought He Was Strong - Then He Got Humbled by a Rock Climber" [ref=e1131]
                            - generic [ref=e1133]: 18:03
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1134]:
                              - generic [ref=e1135]:
                                - img "Magnus Midtbø" [ref=e1136]
                                - generic [ref=e1137]:
                                  - generic:
                                    - generic "Magnus Midtbø" [ref=e1138]
                                    - generic [ref=e1139]: ·
                                    - generic [ref=e1140]: 14h
                              - link "This giant thought he was strong - then he got humbled by a rock climber" [ref=e1141]:
                                - /url: https://www.msn.com/en-in/entertainment/general/this-giant-thought-he-was-strong-then-he-got-humbled-by-a-rock-climber/vi-AA26lKud?ocid=hpmsn
                                - heading "This giant thought he was strong - then he got humbled by a rock climber" [level=2] [ref=e1142]:
                                  - generic: This giant thought he was strong - then he got humbled by a rock climber
                            - button "See more" [ref=e1146]
                        - article [ref=e1149]:
                          - generic [ref=e1150]:
                            - img "Why Does James May Roast DriveTribe’s V10 BMW M5 Touring?" [ref=e1152]
                            - generic [ref=e1154]: 08:48
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1155]:
                              - generic [ref=e1156]:
                                - img "DRIVETRIBE" [ref=e1157]
                                - generic [ref=e1158]:
                                  - generic:
                                    - generic "DRIVETRIBE" [ref=e1159]
                                    - generic [ref=e1160]: ·
                                    - generic [ref=e1161]: 7h
                              - link "Why does James May roast DriveTribe’s V10 BMW M5 Touring?" [ref=e1162]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/why-does-james-may-roast-drivetribe-s-v10-bmw-m5-touring/vi-AA28yVGM?ocid=hpmsn
                                - heading "Why does James May roast DriveTribe’s V10 BMW M5 Touring?" [level=2] [ref=e1163]:
                                  - generic: Why does James May roast DriveTribe’s V10 BMW M5 Touring?
                            - button "See more" [ref=e1167]
                        - article [ref=e1170]:
                          - generic [ref=e1171]:
                            - 'img "Graphene: The Material Transforming Our Future Today" [ref=e1173]'
                            - generic [ref=e1175]: 15:01
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1176]:
                              - generic [ref=e1177]:
                                - img "Undecided with Matt Ferrell" [ref=e1178]
                                - generic "Undecided with Matt Ferrell" [ref=e1180]
                              - 'link "Graphene: The material transforming our future today" [ref=e1181]':
                                - /url: https://www.msn.com/en-in/technology/general/graphene-the-material-transforming-our-future-today/vi-AA25vnsf?ocid=hpmsn
                                - 'heading "Graphene: The material transforming our future today" [level=2] [ref=e1182]':
                                  - generic: "Graphene: The material transforming our future today"
                            - button "See more" [ref=e1186]
                        - article "British footballers try Korean BBQ for the first time | Hashtag United's epic taste test!" [ref=e1189]:
                          - generic [ref=e1190]:
                            - img "British Footballers Try Korean BBQ for the First Time | Hashtag United's Epic Taste Test!" [ref=e1192]
                            - generic [ref=e1194]: 11:22
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1195]:
                              - generic [ref=e1196]:
                                - img "Korean Englishman" [ref=e1197]
                                - generic [ref=e1198]:
                                  - generic:
                                    - generic "Korean Englishman" [ref=e1199]
                                    - generic [ref=e1200]: ·
                                    - generic [ref=e1201]: 5h
                              - link "British footballers try Korean BBQ for the first time | Hashtag United's epic taste test!" [ref=e1202]:
                                - /url: https://www.msn.com/en-in/entertainment/general/british-footballers-try-korean-bbq-for-the-first-time-hashtag-united-s-epic-taste-test/vi-AA237JeE?ocid=hpmsn
                                - heading "British footballers try Korean BBQ for the first time | Hashtag United's epic taste test!" [level=2] [ref=e1203]:
                                  - generic: British footballers try Korean BBQ for the first time | Hashtag United's epic taste test!
                            - button "See more" [ref=e1207]
                        - article [ref=e1210]:
                          - generic [ref=e1211]:
                            - img "They Took Away My International Master Chess Title" [ref=e1213]
                            - generic [ref=e1215]: 09:59
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1216]:
                              - generic [ref=e1217]:
                                - img "GothamChess" [ref=e1218]
                                - generic [ref=e1219]:
                                  - generic:
                                    - generic "GothamChess" [ref=e1220]
                                    - generic [ref=e1221]: ·
                                    - generic [ref=e1222]: 5h
                              - link "They took away my International Master chess title" [ref=e1223]:
                                - /url: https://www.msn.com/en-in/money/general/they-took-away-my-international-master-chess-title/vi-AA28zgiw?ocid=hpmsn
                                - heading "They took away my International Master chess title" [level=2] [ref=e1224]:
                                  - generic: They took away my International Master chess title
                            - button "See more" [ref=e1228]
                        - article "He paid $38,000 for Japan’s most exclusive train - then he saw the suite" [ref=e1231]:
                          - generic [ref=e1232]:
                            - img "He Paid $38,000 For Japan’s Most Exclusive Train - Then He Saw The Suite" [ref=e1234]
                            - generic [ref=e1236]: 27:07
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1237]:
                              - generic [ref=e1238]:
                                - img "Trek Trendy" [ref=e1239]
                                - generic "Trek Trendy" [ref=e1241]
                              - link "He paid $38,000 for Japan’s most exclusive train - then he saw the suite" [ref=e1242]:
                                - /url: https://www.msn.com/en-in/travel/rail-travel/he-paid-38-000-for-japan-s-most-exclusive-train-then-he-saw-the-suite/vi-AA25bDYZ?ocid=hpmsn
                                - heading "He paid $38,000 for Japan’s most exclusive train - then he saw the suite" [level=2] [ref=e1243]:
                                  - generic: He paid $38,000 for Japan’s most exclusive train - then he saw the suite
                            - button "See more" [ref=e1247]
                        - article "Watch America's secret satellites detect missile launches anywhere on Earth in seconds" [ref=e1250]:
                          - generic [ref=e1251]:
                            - img "Watch America's Secret Satellites Detect Missile Launches Anywhere On Earth In Seconds" [ref=e1253]
                            - generic [ref=e1255]: 17:40
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
                                    - generic [ref=e1262]: 3w
                              - link "Watch America's secret satellites detect missile launches anywhere on Earth in seconds" [ref=e1263]:
                                - /url: https://www.msn.com/en-in/technology/general/watch-america-s-secret-satellites-detect-missile-launches-anywhere-on-earth-in-seconds/vi-AA26Xx7P?ocid=hpmsn
                                - heading "Watch America's secret satellites detect missile launches anywhere on Earth in seconds" [level=2] [ref=e1264]:
                                  - generic: Watch America's secret satellites detect missile launches anywhere on Earth in seconds
                            - button "See more" [ref=e1268]
                        - article [ref=e1271]:
                          - generic [ref=e1272]:
                            - img "Touring One of America’s Largest Homes" [ref=e1274]
                            - generic [ref=e1276]: 56:48
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
                                    - generic [ref=e1283]: 12h
                              - link "Touring one of America’s largest private homes" [ref=e1284]:
                                - /url: https://www.msn.com/en-in/money/general/touring-one-of-america-s-largest-private-homes/vi-AA1ZFQoS?ocid=hpmsn
                                - heading "Touring one of America’s largest private homes" [level=2] [ref=e1285]:
                                  - generic: Touring one of America’s largest private homes
                            - button "See more" [ref=e1289]
                        - article [ref=e1292]:
                          - generic [ref=e1293]:
                            - img "Inside a $6.5M nuclear bunker mansion" [ref=e1295]
                            - generic [ref=e1297]: 35:11
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1298]:
                              - generic [ref=e1299]:
                                - img "Enes Yilmazer" [ref=e1300]
                                - generic [ref=e1301]:
                                  - generic:
                                    - generic "Enes Yilmazer" [ref=e1302]
                                    - generic [ref=e1303]: ·
                                    - generic [ref=e1304]: 12h
                              - link "Inside a $6.5 million luxury bunker mansion" [ref=e1305]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/inside-a-6-5-million-luxury-bunker-mansion/vi-AA23GffH?ocid=hpmsn
                                - heading "Inside a $6.5 million luxury bunker mansion" [level=2] [ref=e1306]:
                                  - generic: Inside a $6.5 million luxury bunker mansion
                            - button "See more" [ref=e1310]
                        - article "Trevor Noah explains why Idris Elba as James Bond wouldn't work (and it's not what you think!)" [ref=e1313]:
                          - generic [ref=e1314]:
                            - img "Trevor Noah Explains Why Idris Elba as James Bond Wouldn't Work (And It's Not What You Think!) Thumbnail" [ref=e1316]
                            - generic [ref=e1318]: 09:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1319]:
                              - generic [ref=e1320]:
                                - img "Trevor Noah" [ref=e1321]
                                - generic [ref=e1322]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1323]
                                    - generic [ref=e1324]: ·
                                    - generic [ref=e1325]: 21h
                              - link "Trevor Noah explains why Idris Elba as James Bond wouldn't work (and it's not what you think!)" [ref=e1326]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/trevor-noah-explains-why-idris-elba-as-james-bond-wouldn-t-work-and-it-s-not-what-you-think/vi-AA28vPPM?ocid=hpmsn
                                - heading "Trevor Noah explains why Idris Elba as James Bond wouldn't work (and it's not what you think!)" [level=2] [ref=e1327]:
                                  - generic: Trevor Noah explains why Idris Elba as James Bond wouldn't work (and it's not what you think!)
                            - button "See more" [ref=e1331]
                        - article [ref=e1334]:
                          - generic [ref=e1335]:
                            - img "Inside Bruce Willis’s $37,500,000 Private Island Mansion" [ref=e1337]
                            - generic [ref=e1339]: 29:56
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1340]:
                              - generic [ref=e1341]:
                                - img "Enes Yilmazer" [ref=e1342]
                                - generic [ref=e1343]:
                                  - generic:
                                    - generic "Enes Yilmazer" [ref=e1344]
                                    - generic [ref=e1345]: ·
                                    - generic [ref=e1346]: 12h
                              - link "Inside Bruce Willis's private island estate" [ref=e1347]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/inside-bruce-willis-s-private-island-estate/vi-AA1X51N9?ocid=hpmsn
                                - heading "Inside Bruce Willis's private island estate" [level=2] [ref=e1348]:
                                  - generic: Inside Bruce Willis's private island estate
                            - button "See more" [ref=e1352]
                        - article [ref=e1355]:
                          - generic [ref=e1356]:
                            - img "Inside Hawaii’s Most Expensive Mansion" [ref=e1358]
                            - generic [ref=e1360]: 23:34
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1361]:
                              - generic [ref=e1362]:
                                - img "Enes Yilmazer" [ref=e1363]
                                - generic "Enes Yilmazer" [ref=e1365]
                              - link "Inside Hawaii’s most expensive mansion" [ref=e1366]:
                                - /url: https://www.msn.com/en-in/money/general/inside-hawaii-s-most-expensive-mansion/vi-AA1VwDmp?ocid=hpmsn
                                - heading "Inside Hawaii’s most expensive mansion" [level=2] [ref=e1367]:
                                  - generic: Inside Hawaii’s most expensive mansion
                            - button "See more" [ref=e1371]
                        - article [ref=e1374]:
                          - generic [ref=e1375]:
                            - img "Inside Zaha Hadid’s $41M Floating Bridge Penthouse" [ref=e1377]
                            - generic [ref=e1379]: 38:18
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1380]:
                              - generic [ref=e1381]:
                                - img "Enes Yilmazer" [ref=e1382]
                                - generic "Enes Yilmazer" [ref=e1384]
                              - link "Inside a $41M Zaha Hadid floating bridge penthouse" [ref=e1385]:
                                - /url: https://www.msn.com/en-in/entertainment/general/inside-a-41m-zaha-hadid-floating-bridge-penthouse/vi-AA1X8CRM?ocid=hpmsn
                                - heading "Inside a $41M Zaha Hadid floating bridge penthouse" [level=2] [ref=e1386]:
                                  - generic: Inside a $41M Zaha Hadid floating bridge penthouse
                            - button "See more" [ref=e1390]
                        - link "See more" [ref=e1392]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1393]
                          - text: See more
                    - button "next" [ref=e1397]:
                      - img [ref=e1400]
            - article "Mumbai protest video shows man opening police van latch, students flee" [ref=e1402] [cursor=pointer]:
              - generic [ref=e1404]:
                - img [ref=e1405]
                - generic [ref=e1406]:
                  - generic [ref=e1407]:
                    - generic [ref=e1408]:
                      - generic [ref=e1409]:
                        - img [ref=e1410]
                        - generic [ref=e1411]: India Today
                      - generic [ref=e1412]: ·
                      - generic [ref=e1413]: 23h
                    - link "Mumbai protest video shows man opening police van latch, students flee, India Today" [ref=e1414]:
                      - /url: https://www.msn.com/en-in/news/other/mumbai-protest-video-shows-man-opening-police-van-latch-students-flee/ar-AA28uW96
                      - text: Mumbai protest video shows man opening police van latch, students flee
                  - generic "Mumbai protest video shows man opening police van latch, students flee" [ref=e1417]:
                    - generic [ref=e1419]:
                      - generic [ref=e1420]:
                        - button "47 Likes" [ref=e1421]:
                          - generic [ref=e1422]:
                            - img [ref=e1423]
                            - generic [ref=e1425]: "47"
                        - button "Dislike" [ref=e1426]:
                          - img [ref=e1428]
                      - link "Start the conversation" [ref=e1431]:
                        - /url: https://www.msn.com/en-in/news/other/mumbai-protest-video-shows-man-opening-police-van-latch-students-flee/ar-AA28uW96#comments
                        - button "Start the conversation" [ref=e1432]:
                          - img [ref=e1433]
                - generic [ref=e1435]:
                  - button "Hide this story" [ref=e1436]:
                    - img [ref=e1437]
                    - text: Hide this story
                  - button "See more" [ref=e1438]:
                    - img [ref=e1439]
            - article [ref=e1440] [cursor=pointer]:
              - generic [ref=e1446]:
                - generic [ref=e1448]:
                  - img "ICC" [ref=e1450]
                  - link "ICC" [ref=e1451]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6a6302656f2549d08c0bb735b902bb4a
                    - heading "ICC" [level=2] [ref=e1452]
                  - button "More interests" [ref=e1453]
                  - generic [ref=e1454]:
                    - generic "Popular in your area" [ref=e1455]:
                      - button "Popular in your area" [ref=e1456]
                    - button "More options" [ref=e1457]
                - generic [ref=e1461]:
                  - link "ZIM 125/7 (20.0) VS IND 126/3 (13.2) IND won by 7 wickets" [ref=e1462]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-270411?ocid=hpmsn&cvid=6a6302656f2549d08c0bb735b902bb4a
                    - generic "ZIM" [ref=e1463]:
                      - generic [ref=e1464]:
                        - generic [ref=e1465]:
                          - generic [ref=e1467]: ZIM
                          - button "Click to follow ZIM":
                            - generic:
                              - img
                        - generic [ref=e1469]:
                          - generic [ref=e1470]: 125/7
                          - generic [ref=e1471]: (20.0)
                    - generic [ref=e1475]: VS
                    - generic "IND" [ref=e1476]:
                      - generic [ref=e1477]:
                        - img [ref=e1479]
                        - generic [ref=e1481]:
                          - generic [ref=e1483]: IND
                          - button "Click to follow IND":
                            - generic:
                              - img
                        - generic [ref=e1485]:
                          - generic [ref=e1486]: 126/3
                          - generic [ref=e1487]: (13.2)
                    - generic "IND won by 7 wickets" [ref=e1490]
                  - link "ZIM 25 Jul 11:00 am IND Harare Sports Club, Harare" [ref=e1491]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-270412?ocid=hpmsn&cvid=6a6302656f2549d08c0bb735b902bb4a
                    - generic "ZIM" [ref=e1492]:
                      - generic [ref=e1494]:
                        - generic [ref=e1496]: ZIM
                        - button "Click to follow ZIM":
                          - generic:
                            - img
                    - generic [ref=e1499]:
                      - generic [ref=e1500]: 25 Jul
                      - generic [ref=e1501]: 11:00 am
                    - generic "IND" [ref=e1502]:
                      - generic [ref=e1504]:
                        - generic [ref=e1506]: IND
                        - button "Click to follow IND":
                          - generic:
                            - img
                    - generic "Harare Sports Club, Harare" [ref=e1509]
                  - link "WI 25 Jul 2:00 pm PAK Brian Lara Cricket Academy, Tarouba" [ref=e1510]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-271576?ocid=hpmsn&cvid=6a6302656f2549d08c0bb735b902bb4a
                    - generic "WI" [ref=e1511]:
                      - generic [ref=e1513]:
                        - generic [ref=e1515]: WI
                        - button "Click to follow WI":
                          - generic:
                            - img
                    - generic [ref=e1518]:
                      - generic [ref=e1519]: 25 Jul
                      - generic [ref=e1520]: 2:00 pm
                    - generic "PAK" [ref=e1521]:
                      - generic [ref=e1523]:
                        - generic [ref=e1525]: PAK
                        - button "Click to follow PAK":
                          - generic:
                            - img
                    - generic "Brian Lara Cricket Academy, Tarouba" [ref=e1528]
                - generic [ref=e1530]:
                  - generic [ref=e1531]:
                    - generic "Previous" [ref=e1532]:
                      - button "Previous" [ref=e1533]
                    - tablist [ref=e1535]:
                      - tab "tab-0" [selected] [ref=e1536]
                      - tab "tab-1" [ref=e1538]
                      - tab "tab-2" [ref=e1540]
                      - tab "tab-3" [ref=e1542]
                      - tab "tab-4" [ref=e1544]
                    - generic "Next" [ref=e1546]:
                      - button "Next" [ref=e1547]
                  - link "See more ICC" [ref=e1549]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6a6302656f2549d08c0bb735b902bb4a
            - 'article "Won’t forget Indian military’s rescue of 12 Chinese crew members after ship fire: China''s defence attache" [ref=e1550] [cursor=pointer]':
              - generic [ref=e1552]:
                - img [ref=e1553]
                - generic [ref=e1554]:
                  - generic [ref=e1555]:
                    - generic [ref=e1556]:
                      - generic [ref=e1557]:
                        - img [ref=e1558]
                        - generic [ref=e1559]: The Times of India
                      - generic [ref=e1560]: ·
                      - generic [ref=e1561]: 7h
                    - 'link "Won’t forget Indian military’s rescue of 12 Chinese crew members after ship fire: China''s defence attache, The Times of India" [ref=e1562]':
                      - /url: https://www.msn.com/en-in/news/other/won-t-forget-indian-military-s-rescue-of-12-chinese-crew-members-after-ship-fire-china-s-defence-attache/ar-AA28yT6T
                      - text: "Won’t forget Indian military’s rescue of 12 Chinese crew members after ship fire: China's defence attache"
                  - 'generic "Won’t forget Indian military’s rescue of 12 Chinese crew members after ship fire: China''s defence attache" [ref=e1565]':
                    - generic [ref=e1567]:
                      - generic [ref=e1568]:
                        - button "72 Likes" [ref=e1569]:
                          - generic [ref=e1570]:
                            - img [ref=e1571]
                            - generic [ref=e1573]: "72"
                        - button "Dislike" [ref=e1574]:
                          - img [ref=e1576]
                      - link "View comments 3 Comment" [ref=e1579]:
                        - /url: https://www.msn.com/en-in/news/other/won-t-forget-indian-military-s-rescue-of-12-chinese-crew-members-after-ship-fire-china-s-defence-attache/ar-AA28yT6T#comments
                        - button "View comments 3 Comment" [ref=e1580]:
                          - img [ref=e1581]
                        - generic [ref=e1583]: "3"
                - generic [ref=e1584]:
                  - button "Hide this story" [ref=e1585]:
                    - img [ref=e1586]
                    - text: Hide this story
                  - button "See more" [ref=e1587]:
                    - img [ref=e1588]
            - 'article "PM Modi''s message to Sonam Wangchuk after 26-day fast: ''Regain your old weight''" [ref=e1589] [cursor=pointer]':
              - generic [ref=e1591]:
                - img [ref=e1592]
                - generic [ref=e1593]:
                  - generic [ref=e1594]:
                    - generic [ref=e1595]:
                      - generic [ref=e1596]:
                        - img [ref=e1597]
                        - generic [ref=e1598]: Times Now
                      - generic [ref=e1599]: ·
                      - generic [ref=e1600]: 6h
                    - 'link "PM Modi''s message to Sonam Wangchuk after 26-day fast: ''Regain your old weight'', Times Now" [ref=e1601]':
                      - /url: https://www.msn.com/en-in/news/other/pm-modi-s-message-to-sonam-wangchuk-after-26-day-fast-regain-your-old-weight/ar-AA28yCtD
                      - text: "PM Modi's message to Sonam Wangchuk after 26-day fast: 'Regain your old weight'"
                  - 'generic "PM Modi''s message to Sonam Wangchuk after 26-day fast: ''Regain your old weight''" [ref=e1604]':
                    - generic [ref=e1606]:
                      - generic [ref=e1607]:
                        - button "102 Likes" [ref=e1608]:
                          - generic [ref=e1609]:
                            - img [ref=e1610]
                            - generic [ref=e1612]: "102"
                        - button "Dislike" [ref=e1613]:
                          - img [ref=e1615]
                      - link "Start the conversation" [ref=e1618]:
                        - /url: https://www.msn.com/en-in/news/other/pm-modi-s-message-to-sonam-wangchuk-after-26-day-fast-regain-your-old-weight/ar-AA28yCtD#comments
                        - button "Start the conversation" [ref=e1619]:
                          - img [ref=e1620]
                - generic [ref=e1622]:
                  - button "Hide this story" [ref=e1623]:
                    - img [ref=e1624]
                    - text: Hide this story
                  - button "See more" [ref=e1625]:
                    - img [ref=e1626]
            - article [ref=e1627] [cursor=pointer]
            - 'article "Petrol, diesel & CNG fresh prices announced: Check city-wise rates for July 24" [ref=e1634] [cursor=pointer]':
              - generic [ref=e1636]:
                - img [ref=e1637]
                - generic [ref=e1638]:
                  - generic [ref=e1639]:
                    - generic [ref=e1640]:
                      - generic [ref=e1641]:
                        - img [ref=e1642]
                        - generic [ref=e1643]: News18
                      - generic [ref=e1644]: ·
                      - generic [ref=e1645]: 4h
                    - 'link "Petrol, diesel & CNG fresh prices announced: Check city-wise rates for July 24, News18" [ref=e1646]':
                      - /url: https://www.msn.com/en-in/money/general/petrol-diesel-cng-fresh-prices-announced-check-city-wise-rates-for-july-24/ar-AA28yX5I
                      - text: "Petrol, diesel & CNG fresh prices announced: Check city-wise rates for July 24"
                  - 'generic "Petrol, diesel & CNG fresh prices announced: Check city-wise rates for July 24" [ref=e1649]':
                    - generic [ref=e1651]:
                      - generic [ref=e1652]:
                        - button "24 Likes" [ref=e1653]:
                          - generic [ref=e1654]:
                            - img [ref=e1655]
                            - generic [ref=e1657]: "24"
                        - button "Dislike" [ref=e1658]:
                          - img [ref=e1660]
                      - link "Start the conversation" [ref=e1663]:
                        - /url: https://www.msn.com/en-in/money/general/petrol-diesel-cng-fresh-prices-announced-check-city-wise-rates-for-july-24/ar-AA28yX5I#comments
                        - button "Start the conversation" [ref=e1664]:
                          - img [ref=e1665]
                - generic [ref=e1667]:
                  - button "Hide this story" [ref=e1668]:
                    - img [ref=e1669]
                    - text: Hide this story
                  - button "See more" [ref=e1670]:
                    - img [ref=e1671]
          - generic [ref=e1672]:
            - article [ref=e1673] [cursor=pointer]
            - article "India's first hydrogen train covers 900 km in 5 days, marks green rail milestone" [ref=e1680] [cursor=pointer]:
              - generic [ref=e1682]:
                - img [ref=e1683]
                - generic [ref=e1684]:
                  - generic [ref=e1685]:
                    - generic [ref=e1686]:
                      - generic [ref=e1687]:
                        - img [ref=e1688]
                        - generic [ref=e1689]: News18
                      - generic [ref=e1690]: ·
                      - generic [ref=e1691]: 3h
                    - link "India's first hydrogen train covers 900 km in 5 days, marks green rail milestone, News18" [ref=e1692]:
                      - /url: https://www.msn.com/en-in/money/general/india-s-first-hydrogen-train-covers-900-km-in-5-days-marks-green-rail-milestone/ar-AA28yUSZ
                      - text: India's first hydrogen train covers 900 km in 5 days, marks green rail milestone
                  - generic "India's first hydrogen train covers 900 km in 5 days, marks green rail milestone" [ref=e1695]:
                    - generic [ref=e1697]:
                      - generic [ref=e1698]:
                        - button "46 Likes" [ref=e1699]:
                          - generic [ref=e1700]:
                            - img [ref=e1701]
                            - generic [ref=e1703]: "46"
                        - button "Dislike" [ref=e1704]:
                          - img [ref=e1706]
                      - link "Start the conversation" [ref=e1709]:
                        - /url: https://www.msn.com/en-in/money/general/india-s-first-hydrogen-train-covers-900-km-in-5-days-marks-green-rail-milestone/ar-AA28yUSZ#comments
                        - button "Start the conversation" [ref=e1710]:
                          - img [ref=e1711]
                - generic [ref=e1713]:
                  - button "Hide this story" [ref=e1714]:
                    - img [ref=e1715]
                    - text: Hide this story
                  - button "See more" [ref=e1716]:
                    - img [ref=e1717]
    - contentinfo [ref=e1720]:
      - generic "Feedback" [ref=e1722] [cursor=pointer]:
        - button "Feedback" [ref=e1723]:
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