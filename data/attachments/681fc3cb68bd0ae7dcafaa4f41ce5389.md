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
        - paragraph [ref=e12]: We are updating our Terms of Use.
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
      - generic [ref=e28]:
        - 'link "Dulles: Partly cloudy, 24 °C" [ref=e31] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Dulles,Virginia
          - generic "Dulles, Virginia, United States Click here to see more information" [ref=e32]: Dulles
          - img "Partly cloudy" [ref=e34]
          - generic [ref=e35]:
            - generic [ref=e36]: ‎24‎
            - generic [ref=e38]: ‎°C‎
        - generic "Open settings" [ref=e42] [cursor=pointer]:
          - button "Open settings" [ref=e43]:
            - generic:
              - generic:
                - generic:
                  - generic: Page settings
                  - generic:
                    - img
        - generic "Sign in" [ref=e47]:
          - link "Sign in" [ref=e50] [cursor=pointer]:
            - /url: "#"
      - search [ref=e53]:
        - generic [ref=e54]:
          - generic "Web search" [ref=e55] [cursor=pointer]:
            - button "Web search" [ref=e56]:
              - generic:
                - generic:
                  - img
          - searchbox "Enter your search term" [ref=e57]
  - generic [ref=e58]:
    - generic [ref=e59]:
      - generic [ref=e64]:
        - list [ref=e67]:
          - listitem [ref=e68]:
            - link "Outlook.com" [ref=e71] [cursor=pointer]:
              - /url: https://outlook.com
              - generic [ref=e75]: Outlook.com
          - listitem [ref=e76]:
            - link "Flipkart" [ref=e79] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=401531&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e82]:
                - generic [ref=e83]: Flipkart
                - generic [ref=e85]: Sponsored
          - listitem [ref=e86]:
            - link "Find a tutor" [ref=e89] [cursor=pointer]:
              - /url: https://www.bing.com/pros?FORM=BPIMNS
              - generic [ref=e93]: Find a tutor
          - listitem [ref=e94]:
            - link "Booking.com" [ref=e97] [cursor=pointer]:
              - /url: https://www.booking.com/index.html?aid=1624937&label=enin-msn-hp-mestripe
              - generic [ref=e100]:
                - generic [ref=e101]: Booking.com
                - generic [ref=e103]: Sponsored
          - listitem [ref=e104]:
            - link "Ajio" [ref=e107] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=393141&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e110]:
                - generic [ref=e111]: Ajio
                - generic [ref=e113]: Sponsored
          - listitem [ref=e114]:
            - link "Facebook" [ref=e117] [cursor=pointer]:
              - /url: https://www.facebook.com
              - generic [ref=e121]: Facebook
          - listitem [ref=e122]:
            - link "Microsoft 365" [ref=e125] [cursor=pointer]:
              - /url: https://www.office.com/?omkt=en-IN
              - generic [ref=e129]: Microsoft 365
          - listitem [ref=e130]:
            - link "X" [ref=e133] [cursor=pointer]:
              - /url: https://x.com
              - generic [ref=e137]: X
          - listitem [ref=e138]:
            - link "OneDrive" [ref=e141] [cursor=pointer]:
              - /url: https://onedrive.live.com/?wt.mc_id=oo_msn_msnhomepage_header
              - generic [ref=e145]: OneDrive
          - listitem [ref=e146]:
            - link "Skype" [ref=e149] [cursor=pointer]:
              - /url: https://www.skype.com/
              - generic [ref=e153]: Skype
          - listitem [ref=e154]:
            - link "OneNote" [ref=e157] [cursor=pointer]:
              - /url: https://www.onenote.com/notebooks?WT.mc_id=MSN_OneNote_TopMenu&auth=1&wdorigin=msn
              - generic [ref=e161]: OneNote
          - listitem [ref=e162]:
            - link "Maps" [ref=e165] [cursor=pointer]:
              - /url: https://bing.com/maps/?FORM=MSNMAP
              - generic [ref=e169]: Maps
          - listitem [ref=e170]:
            - link "Microsoft Store" [ref=e173] [cursor=pointer]:
              - /url: https://www.microsoft.com/en-in
              - generic [ref=e177]: Microsoft Store
        - button [ref=e178]:
          - img [ref=e181]
      - generic [ref=e183]:
        - banner [ref=e184]
        - generic [ref=e185]:
          - generic [ref=e189]:
            - navigation [ref=e191]:
              - generic [ref=e192]:
                - list [ref=e193]:
                  - listitem [ref=e194]:
                    - link "Discover" [ref=e195] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in
                - list [ref=e196]:
                  - listitem [ref=e197]:
                    - link "News" [ref=e198] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f
                  - listitem [ref=e199]:
                    - link "Sports" [ref=e200] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in/sports
              - generic "Show more topics" [ref=e202] [cursor=pointer]:
                - button "Show more topics" [ref=e203]:
                  - generic:
                    - generic:
                      - img
            - generic "Personalize your feed\"" [ref=e205] [cursor=pointer]:
              - button "Personalize your feed\"" [ref=e206]:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic: Personalize
          - button "Make MSN my homepage" [ref=e208] [cursor=pointer]
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
              - article "Shop Now on Mercari Japan - Buy Unique Collectibles - Verified Sellers from Japan" [ref=e289] [cursor=pointer]:
                - generic [ref=e291]:
                  - img [ref=e292]
                  - generic [ref=e293]:
                    - generic [ref=e294]:
                      - generic [ref=e297]: japan.us.mercari.com
                      - link "Shop Now on Mercari Japan - Buy Unique Collectibles - Verified Sellers from Japan, japan.us.mercari.com" [ref=e298]:
                        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=593af02b-06a8-437e-8690-8dfee53d46ce&bdc=pb&bidId=1&bidderId=4&cmExpId=LV5&impId=2&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=60c3aa9d-8af4-4c36-bc44-58e253857815&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8dkUoIFmDTT8bGTgUidyglzVUCUxbJgZpv7442cOAw5jTvrd-efgLnyUwBEE0VmPMTJvBzwYL-dPMNtMTwyKxt8ZJEYBVQm3uIotkBb695Hd2BmWDNXz3oOhUR9ROLNWthJ7E_tD785ZwcDQYSZfdBQcVYci5VIVrhGNElrHx_UvuIlmbiJyzRdNV4hlQAlhT5WKOH9exrEkLKLIj0Vc6Lc6fAeo%26u%3DaHR0cHMlM2ElMmYlMmZqYXBhbi51cy5tZXJjYXJpLmNvbSUzZnV0bV9jYW1wYWlnbiUzZE1DU1BNRVIzODklMjZ1dG1fc291cmNlJTNkTWljcm9zb2Z0QWRzJTI2dXRtX21lZGl1bSUzZFNFTSUyNmNhbXBhaWduU291cmNlJTNkbWNzcGFwYWNfTUNTUE1FUjM4OV9VU19NaWNyb3NvZnRBZHNfU0VNX1VTX1dlYl9Db252ZXJzaW9uX0dlbmVyaWNUcmFkaW5nQ2FyZHNfUG9rZW1vbl9BTExrd19FTl9OQSUyNnV0bV9jb250ZW50JTNkbWNzcGFwYWNfTUNTUDEyMF9VU19NaWNyb3NvZnRBZHNfU0VNX1VTX1dlYl9Db252ZXJzaW9uX0dlbmVyaWNUcmFkaW5nQ2FyZHNfQUxMa3clMjZ1dG1fdGVybSUzZHBva2Vtb24lMjUyMGVsaXRlJTI1MjB0cmFpbmVyJTI1MjBib3glMjZtc2Nsa2lkJTNkMDk5NzIwMzY0ZjhhMTBhNGI1OGE0YWExOTU5M2Q2YjI%26rlid%3D099720364f8a10a4b58a4aa19593d6b2&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                        - text: Shop Now on Mercari Japan - Buy Unique Collectibles - Verified Sellers from Japan
                    - link "Sponsored" [ref=e300]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=593af02b-06a8-437e-8690-8dfee53d46ce&bdc=pb&bidId=1&bidderId=4&cmExpId=LV5&impId=2&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=60c3aa9d-8af4-4c36-bc44-58e253857815&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8dkUoIFmDTT8bGTgUidyglzVUCUxbJgZpv7442cOAw5jTvrd-efgLnyUwBEE0VmPMTJvBzwYL-dPMNtMTwyKxt8ZJEYBVQm3uIotkBb695Hd2BmWDNXz3oOhUR9ROLNWthJ7E_tD785ZwcDQYSZfdBQcVYci5VIVrhGNElrHx_UvuIlmbiJyzRdNV4hlQAlhT5WKOH9exrEkLKLIj0Vc6Lc6fAeo%26u%3DaHR0cHMlM2ElMmYlMmZqYXBhbi51cy5tZXJjYXJpLmNvbSUzZnV0bV9jYW1wYWlnbiUzZE1DU1BNRVIzODklMjZ1dG1fc291cmNlJTNkTWljcm9zb2Z0QWRzJTI2dXRtX21lZGl1bSUzZFNFTSUyNmNhbXBhaWduU291cmNlJTNkbWNzcGFwYWNfTUNTUE1FUjM4OV9VU19NaWNyb3NvZnRBZHNfU0VNX1VTX1dlYl9Db252ZXJzaW9uX0dlbmVyaWNUcmFkaW5nQ2FyZHNfUG9rZW1vbl9BTExrd19FTl9OQSUyNnV0bV9jb250ZW50JTNkbWNzcGFwYWNfTUNTUDEyMF9VU19NaWNyb3NvZnRBZHNfU0VNX1VTX1dlYl9Db252ZXJzaW9uX0dlbmVyaWNUcmFkaW5nQ2FyZHNfQUxMa3clMjZ1dG1fdGVybSUzZHBva2Vtb24lMjUyMGVsaXRlJTI1MjB0cmFpbmVyJTI1MjBib3glMjZtc2Nsa2lkJTNkMDk5NzIwMzY0ZjhhMTBhNGI1OGE0YWExOTU5M2Q2YjI%26rlid%3D099720364f8a10a4b58a4aa19593d6b2&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                  - button "See more" [ref=e302]:
                    - img [ref=e303]
            - 'article "Toxic box office collection day 6: Yash''s film doesn''t crash on first Monday, mints Rs 221.55 crore in India" [ref=e304] [cursor=pointer]':
              - generic [ref=e306]:
                - img [ref=e307]
                - generic [ref=e308]:
                  - generic [ref=e309]:
                    - generic [ref=e310]:
                      - generic [ref=e311]:
                        - img [ref=e312]
                        - generic [ref=e313]: NDTV
                      - generic [ref=e314]: ·
                      - generic [ref=e315]: 1d
                    - 'link "Toxic box office collection day 6: Yash''s film doesn''t crash on first Monday, mints Rs 221.55 crore in India, NDTV" [ref=e316]':
                      - /url: https://www.msn.com/en-in/entertainment/movies/toxic-box-office-collection-day-6-yash-s-film-doesn-t-crash-on-first-monday-mints-rs-221-55-crore-in-india/ar-AA2bjUox
                      - text: "Toxic box office collection day 6: Yash's film doesn't crash on first Monday, mints Rs 221.55 crore in India"
                  - 'generic "Toxic box office collection day 6: Yash''s film doesn''t crash on first Monday, mints Rs 221.55 crore in India" [ref=e319]':
                    - generic [ref=e321]:
                      - generic [ref=e322]:
                        - button "146 Likes" [ref=e323]:
                          - generic [ref=e324]:
                            - img [ref=e325]
                            - generic [ref=e327]: "146"
                        - button "159 Dislikes" [ref=e328]:
                          - img [ref=e330]
                      - link "View comments 3 Comment" [ref=e333]:
                        - /url: https://www.msn.com/en-in/entertainment/movies/toxic-box-office-collection-day-6-yash-s-film-doesn-t-crash-on-first-monday-mints-rs-221-55-crore-in-india/ar-AA2bjUox#comments
                        - button "View comments 3 Comment" [ref=e334]:
                          - img [ref=e335]
                        - generic [ref=e337]: "3"
                - generic [ref=e338]:
                  - button "Hide this story" [ref=e339]:
                    - img [ref=e340]
                    - text: Hide this story
                  - button "See more" [ref=e341]:
                    - img [ref=e342]
            - article [ref=e343] [cursor=pointer]:
              - generic [ref=e347]:
                - generic: Sponsored
            - article "Fatima & Lourdes - All Inclusive Tour Packages - A 'Life Changing' Experience" [ref=e348] [cursor=pointer]:
              - generic [ref=e350]:
                - img [ref=e351]
                - generic [ref=e352]:
                  - generic [ref=e353]:
                    - generic [ref=e356]: travel.glimmertours.com
                    - link "Fatima & Lourdes - All Inclusive Tour Packages - A 'Life Changing' Experience, travel.glimmertours.com" [ref=e357]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=d5be9540-a846-4b4e-a821-5397aec78dc4&bdc=pb&bidId=1&bidderId=4&cmExpId=LV5&impId=8&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=60c3aa9d-8af4-4c36-bc44-58e253857815&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8OGjlqmRRzPs0XaSnyH0MfDVUCUy5yHQ1xG7vtguciXQdh9CyFIGjOleFMhWbv1P05kZm1y4NfDOqWbAUUZMlxlKeDXee7BttgMPMZ0YyTy68zV9Ij8bMqbU-2sSPOAQJt69R5CawjVDg-oEan079sK4IlmsUXRWZNsO1NShFkJW5mOomZ91B-ZuirjMT2f2t5vJGI5Qx_4SXTBA-MrVpqooja-M%26u%3DaHR0cHMlM2ElMmYlMmZ0cmF2ZWwuZ2xpbW1lcnRvdXJzLmNvbSUyZmluaXRpYWwtcXVlc3Rpb24lMmYlM2ZpdGluZXJhcnklM2RGTCUyNnJlZiUzZGJpbmclMjZ1dG1fdGVybSUzZHRyYXZlbCUyNTIwdG8lMjUyMGZhdGltYSUyNTIwcG9ydHVnYWwlMjZ1dG1fY2FtcGFpZ24lM2RSTSUyYi0lMmJHVCUyYi0lMmJDViUyYjElMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RwcGMlMjZoc2FfYWNjJTNkNjM4NTE1NDcxMyUyNmhzYV9jYW0lM2QxOTYyNDQyMTkwMSUyNmhzYV9ncnAlM2QxMzI4MjEyMzMzMzg5OTk4JTI2aHNhX2FkJTNkJTI2aHNhX3NyYyUzZGElMjZoc2FfdGd0JTNka3dkLTgzMDE0MTcyNzczMjQzJTNhbG9jLTE5MCUyNmhzYV9rdyUzZHRyYXZlbCUyNTIwdG8lMjUyMGZhdGltYSUyNTIwcG9ydHVnYWwlMjZoc2FfbXQlM2RlJTI2aHNhX25ldCUzZGFkd29yZHMlMjZoc2FfdmVyJTNkMyUyNm1zY2xraWQlM2RhYTYwN2RmZWUxNzUxYjdiMWRlMDE3NjkzYjZjMjVhMQ%26rlid%3Daa607dfee1751b7b1de017693b6c25a1&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Fatima & Lourdes - All Inclusive Tour Packages - A 'Life Changing' Experience
                  - link "Sponsored" [ref=e359]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=d5be9540-a846-4b4e-a821-5397aec78dc4&bdc=pb&bidId=1&bidderId=4&cmExpId=LV5&impId=8&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=60c3aa9d-8af4-4c36-bc44-58e253857815&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8OGjlqmRRzPs0XaSnyH0MfDVUCUy5yHQ1xG7vtguciXQdh9CyFIGjOleFMhWbv1P05kZm1y4NfDOqWbAUUZMlxlKeDXee7BttgMPMZ0YyTy68zV9Ij8bMqbU-2sSPOAQJt69R5CawjVDg-oEan079sK4IlmsUXRWZNsO1NShFkJW5mOomZ91B-ZuirjMT2f2t5vJGI5Qx_4SXTBA-MrVpqooja-M%26u%3DaHR0cHMlM2ElMmYlMmZ0cmF2ZWwuZ2xpbW1lcnRvdXJzLmNvbSUyZmluaXRpYWwtcXVlc3Rpb24lMmYlM2ZpdGluZXJhcnklM2RGTCUyNnJlZiUzZGJpbmclMjZ1dG1fdGVybSUzZHRyYXZlbCUyNTIwdG8lMjUyMGZhdGltYSUyNTIwcG9ydHVnYWwlMjZ1dG1fY2FtcGFpZ24lM2RSTSUyYi0lMmJHVCUyYi0lMmJDViUyYjElMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RwcGMlMjZoc2FfYWNjJTNkNjM4NTE1NDcxMyUyNmhzYV9jYW0lM2QxOTYyNDQyMTkwMSUyNmhzYV9ncnAlM2QxMzI4MjEyMzMzMzg5OTk4JTI2aHNhX2FkJTNkJTI2aHNhX3NyYyUzZGElMjZoc2FfdGd0JTNka3dkLTgzMDE0MTcyNzczMjQzJTNhbG9jLTE5MCUyNmhzYV9rdyUzZHRyYXZlbCUyNTIwdG8lMjUyMGZhdGltYSUyNTIwcG9ydHVnYWwlMjZoc2FfbXQlM2RlJTI2aHNhX25ldCUzZGFkd29yZHMlMjZoc2FfdmVyJTNkMyUyNm1zY2xraWQlM2RhYTYwN2RmZWUxNzUxYjdiMWRlMDE3NjkzYjZjMjVhMQ%26rlid%3Daa607dfee1751b7b1de017693b6c25a1&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e361]:
                  - img [ref=e362]
            - article [ref=e363] [cursor=pointer]:
              - generic [ref=e369]:
                - generic [ref=e371]:
                  - img "Watchlist suggestions" [ref=e373]
                  - link "Watchlist suggestions" [ref=e374]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e375]
                  - button "More options" [ref=e377]
                - generic [ref=e382]:
                  - link "24K Gold (10 Grams) - Indian Rupee XAUINR ‎+0.69%‎ 144496" [ref=e384]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&ocid=hpmsn
                    - generic [ref=e385]:
                      - generic [ref=e387]: 24K Gold (10 Grams) - Indian Rupee
                      - generic [ref=e389]: XAUINR
                    - generic [ref=e394]:
                      - generic [ref=e395]: ‎+0.69%‎
                      - generic [ref=e396]: "144496"
                    - button "Add to watchlist" [ref=e399]:
                      - img [ref=e400]
                  - link "Silver Silver ‎-1.16%‎ 64.61" [ref=e404]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwr7&ocid=hpmsn
                    - generic [ref=e405]:
                      - generic [ref=e407]: Silver
                      - generic [ref=e409]: Silver
                    - generic [ref=e414]:
                      - generic [ref=e415]: ‎-1.16%‎
                      - generic [ref=e416]: "64.61"
                    - button "Add to watchlist" [ref=e419]:
                      - img [ref=e420]
                  - link "Vodafone Idea Ltd Vodafone Idea Ltd Rising fast ‎+3.56%‎ 14.56" [ref=e424]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahi8u2&noti=Price&ocid=hpmsn
                    - generic [ref=e425]:
                      - generic [ref=e426]:
                        - generic [ref=e427]: Vodafone Idea Ltd
                        - img "Vodafone Idea Ltd" [ref=e428]
                      - generic [ref=e430]: Rising fast
                    - generic [ref=e435]:
                      - generic [ref=e436]: ‎+3.56%‎
                      - generic [ref=e437]: "14.56"
                    - button "Add to watchlist" [ref=e440]:
                      - img [ref=e441]
                  - link "Adani Power Ltd ADANIPOWER ‎+1.23%‎ 206.88" [ref=e445]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahgr9c&ocid=hpmsn
                    - generic [ref=e446]:
                      - generic [ref=e448]: Adani Power Ltd
                      - generic [ref=e450]: ADANIPOWER
                    - generic [ref=e455]:
                      - generic [ref=e456]: ‎+1.23%‎
                      - generic [ref=e457]: "206.88"
                    - button "Add to watchlist" [ref=e460]:
                      - img [ref=e461]
                  - link "HDFC Bank Limited HDFCBANK ‎-1.22%‎ 703.25" [ref=e465]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahi3jc&ocid=hpmsn
                    - generic [ref=e466]:
                      - generic [ref=e468]: HDFC Bank Limited
                      - generic [ref=e470]: HDFCBANK
                    - generic [ref=e475]:
                      - generic [ref=e476]: ‎-1.22%‎
                      - generic [ref=e477]: "703.25"
                    - button "Add to watchlist" [ref=e480]:
                      - img [ref=e481]
                - generic [ref=e485]:
                  - generic [ref=e486]:
                    - generic "Previous" [ref=e487]:
                      - button "Previous" [ref=e488]
                    - tablist [ref=e490]:
                      - tab "Page 1" [selected] [ref=e491]
                      - tab "Page 2" [ref=e493]
                      - tab "Page 3" [ref=e495]
                      - tab "Page 4" [ref=e497]
                      - tab "Page 5" [ref=e499]
                      - tab "Page 6"
                      - tab "Page 7"
                    - generic "Next" [ref=e501]:
                      - button "Next" [ref=e502]
                  - link "See watchlist suggestions" [ref=e504]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - article [ref=e505] [cursor=pointer]:
              - generic [ref=e510]:
                - generic [ref=e512]:
                  - link "Top stories" [ref=e514]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a97da17656e49bb91387854bd78cf7c&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e515]
                  - button "More options" [ref=e517]
                - list [ref=e520]:
                  - listitem [ref=e521]:
                    - 'link "WION 10m Iran attacks Bahrain, Iraqi Kurdistan as Trump claims ‘total control’ of Hormuz; Houthis back Tehran, Peru cuts ties: What''s happening" [ref=e522]':
                      - /url: https://www.msn.com/en-in/news/other/iran-attacks-bahrain-iraqi-kurdistan-as-trump-claims-total-control-of-hormuz-houthis-back-tehran-peru-cuts-ties-what-s-happening/ar-AA2bno2g
                      - generic [ref=e523]:
                        - generic [ref=e524]:
                          - img [ref=e525]
                          - generic [ref=e526]:
                            - generic: WION ·10m
                        - generic [ref=e527]: "Iran attacks Bahrain, Iraqi Kurdistan as Trump claims ‘total control’ of Hormuz; Houthis back Tehran, Peru cuts ties: What's happening"
                  - listitem [ref=e528]:
                    - 'link "Times Now 40m Disha Salian case: Father Satish Salian reacts to Bombay HC''s CBI probe order - ''Tears are flowing''" [ref=e529]':
                      - /url: https://www.msn.com/en-in/news/other/disha-salian-case-father-satish-salian-reacts-to-bombay-hc-s-cbi-probe-order-tears-are-flowing/ar-AA2boPNT
                      - generic [ref=e530]:
                        - generic [ref=e531]:
                          - img [ref=e532]
                          - generic [ref=e533]:
                            - generic: Times Now ·40m
                        - generic [ref=e534]: "Disha Salian case: Father Satish Salian reacts to Bombay HC's CBI probe order - 'Tears are flowing'"
                  - listitem [ref=e535]:
                    - link "The Times of India 1m CM Vijay announces to drop cases against farmers, teachers during DMK regime" [ref=e536]:
                      - /url: https://www.msn.com/en-in/news/other/cm-vijay-announces-to-drop-cases-against-farmers-teachers-during-dmk-regime/ar-AA2boIch
                      - generic [ref=e537]:
                        - generic [ref=e538]:
                          - img [ref=e539]
                          - generic [ref=e540]:
                            - generic: The Times of India ·1m
                        - generic [ref=e541]: CM Vijay announces to drop cases against farmers, teachers during DMK regime
                - generic [ref=e543]:
                  - generic [ref=e544]:
                    - generic "Previous" [ref=e545]:
                      - button "Previous" [ref=e546]
                    - tablist [ref=e548]:
                      - tab "Page 1" [selected] [ref=e549]
                      - tab "Page 2" [ref=e551]
                      - tab "Page 3" [ref=e553]
                    - generic "Next" [ref=e555]:
                      - button "Next" [ref=e556]
                  - link "See more" [ref=e558]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a97da17656e49bb91387854bd78cf7c&ocid=hpmsn
            - article "Yakgear Standncast Kayak Canoe Outriggers [01-0096]" [ref=e559] [cursor=pointer]:
              - generic [ref=e561]:
                - img [ref=e562]
                - generic [ref=e563]:
                  - generic [ref=e564]:
                    - generic [ref=e567]: Egret Marine
                    - link "Yakgear Standncast Kayak Canoe Outriggers [01-0096], Egret Marine" [ref=e568]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=53f33aba-30e3-491a-a949-1a39401ede47&bdc=pb&bidId=15&bidderId=4&cmExpId=LV5&impId=9&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=60c3aa9d-8af4-4c36-bc44-58e253857815&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De89KLuL7YIeHVtn3ikZkYmlzVUCUzdmWE0-MihFHtpty8Mat0TWz7qf0iz_CBRcgA0U87DTrc4c2X61gxdqFJUITJNat_liPgoh3hzfoSfRXVsQ6WxQAsMxZrencL1UiGF1PYdrGTB7UgMfNHTPpOqhA9d8hyvnYiFUwyeZEfJzm7Nrv0VDpLt3LH1_venNHsIAwyQ_jxHYXHys4FVUeeiQAPS-GY%26u%3DaHR0cHMlM2ElMmYlMmZlZ3JldG1hcmluZS5jb20lMmZwcm9kdWN0cyUyZnlha2dlYXItc3RhbmRuY2FzdC1rYXlhay1jYW5vZS1vdXRyaWdnZXJzJTNmdmFyaWFudCUzZDQ2NDI3NTYwOTAyNzg3JTI2dXRtX21lZGl1bSUzZGNwYyUyNnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX2NhbXBhaWduJTNkQmluZyUyNTIwU2hvcHBpbmclMjZjb3VudHJ5JTNkVVMlMjZtc2Nsa2lkJTNkNWM2MGYwNmNkODhkMTcxMmVmYjE5YWZiMDI5NDE3MGMlMjZ1dG1fdGVybSUzZDQ1ODg2NzQzNDkxNjcxNTIlMjZ1dG1fY29udGVudCUzZEFkJTI1MjBncm91cCUyNTIwJTI1MjMx%26rlid%3D5c60f06cd88d1712efb19afb0294170c&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Yakgear Standncast Kayak Canoe Outriggers [01-0096]
                  - link "Sponsored" [ref=e570]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=53f33aba-30e3-491a-a949-1a39401ede47&bdc=pb&bidId=15&bidderId=4&cmExpId=LV5&impId=9&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=60c3aa9d-8af4-4c36-bc44-58e253857815&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De89KLuL7YIeHVtn3ikZkYmlzVUCUzdmWE0-MihFHtpty8Mat0TWz7qf0iz_CBRcgA0U87DTrc4c2X61gxdqFJUITJNat_liPgoh3hzfoSfRXVsQ6WxQAsMxZrencL1UiGF1PYdrGTB7UgMfNHTPpOqhA9d8hyvnYiFUwyeZEfJzm7Nrv0VDpLt3LH1_venNHsIAwyQ_jxHYXHys4FVUeeiQAPS-GY%26u%3DaHR0cHMlM2ElMmYlMmZlZ3JldG1hcmluZS5jb20lMmZwcm9kdWN0cyUyZnlha2dlYXItc3RhbmRuY2FzdC1rYXlhay1jYW5vZS1vdXRyaWdnZXJzJTNmdmFyaWFudCUzZDQ2NDI3NTYwOTAyNzg3JTI2dXRtX21lZGl1bSUzZGNwYyUyNnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX2NhbXBhaWduJTNkQmluZyUyNTIwU2hvcHBpbmclMjZjb3VudHJ5JTNkVVMlMjZtc2Nsa2lkJTNkNWM2MGYwNmNkODhkMTcxMmVmYjE5YWZiMDI5NDE3MGMlMjZ1dG1fdGVybSUzZDQ1ODg2NzQzNDkxNjcxNTIlMjZ1dG1fY29udGVudCUzZEFkJTI1MjBncm91cCUyNTIwJTI1MjMx%26rlid%3D5c60f06cd88d1712efb19afb0294170c&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e572]:
                  - img [ref=e573]
            - 'article "''We were not on the highway'': Rajasthan family responds after viral expressway lunch video sparks backlash" [ref=e574] [cursor=pointer]':
              - generic [ref=e576]:
                - img [ref=e577]
                - generic [ref=e578]:
                  - generic [ref=e579]:
                    - generic [ref=e580]:
                      - generic [ref=e581]:
                        - img [ref=e582]
                        - generic [ref=e583]: Moneycontrol
                      - generic [ref=e584]: ·
                      - generic [ref=e585]: 1d
                    - 'link "''We were not on the highway'': Rajasthan family responds after viral expressway lunch video sparks backlash, Moneycontrol" [ref=e586]':
                      - /url: https://www.msn.com/en-in/news/other/we-were-not-on-the-highway-rajasthan-family-responds-after-viral-expressway-lunch-video-sparks-backlash/ar-AA2bjm9J
                      - text: "'We were not on the highway': Rajasthan family responds after viral expressway lunch video sparks backlash"
                  - 'generic "''We were not on the highway'': Rajasthan family responds after viral expressway lunch video sparks backlash" [ref=e589]':
                    - generic [ref=e591]:
                      - generic [ref=e592]:
                        - button "65 Likes" [ref=e593]:
                          - generic [ref=e594]:
                            - img [ref=e595]
                            - generic [ref=e597]: "65"
                        - button "47 Dislikes" [ref=e598]:
                          - img [ref=e600]
                      - link "View comments 6 Comment" [ref=e603]:
                        - /url: https://www.msn.com/en-in/news/other/we-were-not-on-the-highway-rajasthan-family-responds-after-viral-expressway-lunch-video-sparks-backlash/ar-AA2bjm9J#comments
                        - button "View comments 6 Comment" [ref=e604]:
                          - img [ref=e605]
                        - generic [ref=e607]: "6"
                - generic [ref=e608]:
                  - button "Hide this story" [ref=e609]:
                    - img [ref=e610]
                    - text: Hide this story
                  - button "See more" [ref=e611]:
                    - img [ref=e612]
            - article "From Tihar Jail, Yasin Malik decides to divorce wife Mushaal, says he won't let her 'live like a widow'" [ref=e613] [cursor=pointer]:
              - generic [ref=e615]:
                - img [ref=e616]
                - generic [ref=e617]:
                  - generic [ref=e618]:
                    - generic [ref=e619]:
                      - generic [ref=e620]:
                        - img [ref=e621]
                        - generic [ref=e622]: Times Now
                      - generic [ref=e623]: ·
                      - generic [ref=e624]: 13h
                    - link "From Tihar Jail, Yasin Malik decides to divorce wife Mushaal, says he won't let her 'live like a widow', Times Now" [ref=e625]:
                      - /url: https://www.msn.com/en-in/family-and-relationships/marriage/from-tihar-jail-yasin-malik-decides-to-divorce-wife-mushaal-says-he-won-t-let-her-live-like-a-widow/ar-AA2bmv4k
                      - text: From Tihar Jail, Yasin Malik decides to divorce wife Mushaal, says he won't let her 'live like a widow'
                  - generic "From Tihar Jail, Yasin Malik decides to divorce wife Mushaal, says he won't let her 'live like a widow'" [ref=e628]:
                    - generic [ref=e630]:
                      - generic [ref=e631]:
                        - button "42 Likes" [ref=e632]:
                          - generic [ref=e633]:
                            - img [ref=e634]
                            - generic [ref=e636]: "42"
                        - button "36 Dislikes" [ref=e637]:
                          - img [ref=e639]
                      - link "View comments 9 Comment" [ref=e642]:
                        - /url: https://www.msn.com/en-in/family-and-relationships/marriage/from-tihar-jail-yasin-malik-decides-to-divorce-wife-mushaal-says-he-won-t-let-her-live-like-a-widow/ar-AA2bmv4k#comments
                        - button "View comments 9 Comment" [ref=e643]:
                          - img [ref=e644]
                        - generic [ref=e646]: "9"
                - generic [ref=e647]:
                  - button "Hide this story" [ref=e648]:
                    - img [ref=e649]
                    - text: Hide this story
                  - button "See more" [ref=e650]:
                    - img [ref=e651]
          - generic [ref=e652]:
            - article [ref=e653] [cursor=pointer]:
              - generic [ref=e658]:
                - generic [ref=e660]:
                  - link "Top Engaging News" [ref=e662]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a97da17656e49bb91387854bd78cf7c
                    - heading "Top Engaging News" [level=2] [ref=e663]
                  - button "More options" [ref=e665]
                - generic [ref=e667]:
                  - link "Hindustan Times 21 Comments Why PM Modi is again asking Indians not to buy gold, travel or marry abroad" [ref=e669]:
                    - /url: https://www.msn.com/en-in/money/personal-finance/why-pm-modi-is-again-asking-indians-not-to-buy-gold-travel-or-marry-abroad/ar-AA2bkugb
                    - generic [ref=e670]:
                      - img [ref=e671]
                      - generic [ref=e672]: Hindustan Times
                      - link "21 Comments" [ref=e674]:
                        - /url: https://www.msn.com/en-in/money/personal-finance/why-pm-modi-is-again-asking-indians-not-to-buy-gold-travel-or-marry-abroad/ar-AA2bkugb#comments
                        - img [ref=e675]
                        - paragraph [ref=e676]: "21"
                    - paragraph [ref=e677]: Why PM Modi is again asking Indians not to buy gold, travel or marry abroad
                  - link "ThePrint 10 Comments Not charity but moral liability—Nepal seeks compensation from China, US, India for Rasuwa flash flood" [ref=e679]:
                    - /url: https://www.msn.com/en-in/weather/general/not-charity-but-moral-liability-nepal-seeks-compensation-from-china-us-india-for-rasuwa-flash-flood/ar-AA2blRER
                    - generic [ref=e680]:
                      - img [ref=e681]
                      - generic [ref=e682]: ThePrint
                      - link "10 Comments" [ref=e684]:
                        - /url: https://www.msn.com/en-in/weather/general/not-charity-but-moral-liability-nepal-seeks-compensation-from-china-us-india-for-rasuwa-flash-flood/ar-AA2blRER#comments
                        - img [ref=e685]
                        - paragraph [ref=e686]: "10"
                    - paragraph [ref=e687]: Not charity but moral liability—Nepal seeks compensation from China, US, India for Rasuwa flash flood
                  - 'link "Times Now 6 Comments Supreme Court''s Article 142 masterstroke: All FIRs quashed, CJP march called off - 10 points" [ref=e689]':
                    - /url: https://www.msn.com/en-in/news/other/supreme-court-s-article-142-masterstroke-all-firs-quashed-cjp-march-called-off-10-points/ar-AA2bmtsW
                    - generic [ref=e690]:
                      - img [ref=e691]
                      - generic [ref=e692]: Times Now
                      - link "6 Comments" [ref=e694]:
                        - /url: https://www.msn.com/en-in/news/other/supreme-court-s-article-142-masterstroke-all-firs-quashed-cjp-march-called-off-10-points/ar-AA2bmtsW#comments
                        - img [ref=e695]
                        - paragraph [ref=e696]: "6"
                    - paragraph [ref=e697]: "Supreme Court's Article 142 masterstroke: All FIRs quashed, CJP march called off - 10 points"
                - generic [ref=e699]:
                  - generic [ref=e700]:
                    - generic "Previous" [ref=e701]:
                      - button "Previous" [ref=e702]
                    - tablist [ref=e704]:
                      - tab "Page 1" [selected] [ref=e705]
                      - tab "Page 2" [ref=e707]
                      - tab "Page 3" [ref=e709]
                    - generic "Next" [ref=e711]:
                      - button "Next" [ref=e712]
                  - link "See more" [ref=e714]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a97da17656e49bb91387854bd78cf7c
            - article [ref=e715] [cursor=pointer]:
              - generic [ref=e721]:
                - generic [ref=e723]:
                  - link "Dulles" [ref=e725]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Dulles,Virginia
                    - heading "Dulles" [level=2] [ref=e726]
                  - button "My location" [ref=e727]
                  - button "More options" [ref=e729]
                - generic [ref=e733]:
                  - generic [ref=e734]:
                    - generic [ref=e736]:
                      - link "Partly cloudy" [ref=e737]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Dulles,Virginia
                        - img "Partly cloudy" [ref=e738]
                      - link "24°C" [ref=e739]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Dulles,Virginia
                        - generic [ref=e740]: ‎24‎
                        - generic [ref=e742]: ‎°C‎
                    - generic [ref=e744]:
                      - link "Humidity 83%" [ref=e746]:
                        - /url: https://www.msn.com/en-in/weather/hourlyforecast/in-Dulles,Virginia
                        - text: Humidity 83%
                      - link "See full forecast" [ref=e748]:
                        - /url: https://www.msn.com/en-in/weather/hourlyforecast/in-Dulles,Virginia
                        - img "arrow" [ref=e749]
                  - list [ref=e752]:
                    - listitem [ref=e753]:
                      - generic "Weather forecast Today High temperature 34° Low temperature 23°" [ref=e754]:
                        - link "Weather forecast Today High temperature 34° Low temperature 23°" [ref=e755]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Dulles,Virginia
                          - generic:
                            - generic:
                              - generic "Today"
                              - generic:
                                - img "Light rain showers"
                              - generic:
                                - generic "High temperature 34°": ‎34°‎
                                - generic "Low temperature 23°": ‎23°‎
                    - listitem [ref=e756]:
                      - generic "Weather forecast Thu High temperature 35° Low temperature 23°" [ref=e757]:
                        - link "Weather forecast Thu High temperature 35° Low temperature 23°" [ref=e758]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Dulles,Virginia
                          - generic:
                            - generic:
                              - generic "Thu"
                              - generic:
                                - img "Sunny"
                              - generic:
                                - generic "High temperature 35°": ‎35°‎
                                - generic "Low temperature 23°": ‎23°‎
                    - listitem [ref=e759]:
                      - generic "Weather forecast Fri High temperature 34° Low temperature 20°" [ref=e760]:
                        - link "Weather forecast Fri High temperature 34° Low temperature 20°" [ref=e761]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Dulles,Virginia
                          - generic:
                            - generic:
                              - generic "Fri"
                              - generic:
                                - img "Mostly sunny"
                              - generic:
                                - generic "High temperature 34°": ‎34°‎
                                - generic "Low temperature 20°": ‎20°‎
                    - listitem [ref=e762]:
                      - generic "Weather forecast Sat High temperature 29° Low temperature 17°" [ref=e763]:
                        - link "Weather forecast Sat High temperature 29° Low temperature 17°" [ref=e764]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Dulles,Virginia
                          - generic:
                            - generic:
                              - generic "Sat"
                              - generic:
                                - img "Mostly sunny"
                              - generic:
                                - generic "High temperature 29°": ‎29°‎
                                - generic "Low temperature 17°": ‎17°‎
                    - listitem [ref=e765]:
                      - generic "Weather forecast Sun High temperature 28° Low temperature 17°" [ref=e766]:
                        - link "Weather forecast Sun High temperature 28° Low temperature 17°" [ref=e767]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Dulles,Virginia
                          - generic:
                            - generic:
                              - generic "Sun"
                              - generic:
                                - img "Mostly sunny"
                              - generic:
                                - generic "High temperature 28°": ‎28°‎
                                - generic "Low temperature 17°": ‎17°‎
                - button "See full forecast" [ref=e770]
            - article "Psychology says people who eat very fast tend to have these personality traits" [ref=e771] [cursor=pointer]:
              - generic [ref=e773]:
                - img [ref=e774]
                - generic [ref=e775]:
                  - generic [ref=e776]:
                    - generic [ref=e778]:
                      - img [ref=e779]
                      - generic [ref=e780]: The Times of India
                    - link "Psychology says people who eat very fast tend to have these personality traits, The Times of India" [ref=e781]:
                      - /url: https://www.msn.com/en-in/lifestyle/other/psychology-says-people-who-eat-very-fast-tend-to-have-these-personality-traits/ss-AA27jBIN
                      - text: Psychology says people who eat very fast tend to have these personality traits
                  - generic "Psychology says people who eat very fast tend to have these personality traits" [ref=e784]:
                    - generic [ref=e786]:
                      - generic [ref=e787]:
                        - button "1,541 Likes" [ref=e788]:
                          - generic [ref=e789]:
                            - img [ref=e790]
                            - generic [ref=e792]: 2k
                        - button "1,544 Dislikes" [ref=e793]:
                          - img [ref=e795]
                      - link "View comments 12 Comment" [ref=e798]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/psychology-says-people-who-eat-very-fast-tend-to-have-these-personality-traits/ss-AA27jBIN#comments
                        - button "View comments 12 Comment" [ref=e799]:
                          - img [ref=e800]
                        - generic [ref=e802]: "12"
                - generic [ref=e803]:
                  - button "Hide this story" [ref=e804]:
                    - img [ref=e805]
                    - text: Hide this story
                  - button "See more" [ref=e806]:
                    - img [ref=e807]
            - 'article "Nepal disaster: Rescue operations intensify as new Himalayan flood threat looms" [ref=e808] [cursor=pointer]':
              - generic [ref=e810]:
                - generic [ref=e816]:
                  - generic [ref=e817]:
                    - generic [ref=e818]:
                      - generic [ref=e819]:
                        - img [ref=e820]
                        - generic [ref=e821]: ABP - Live
                      - generic [ref=e822]: ·
                      - generic [ref=e823]: 22h
                    - 'link "Nepal disaster: Rescue operations intensify as new Himalayan flood threat looms, ABP - Live" [ref=e824]':
                      - /url: https://www.msn.com/en-in/weather/general/nepal-disaster-rescue-operations-intensify-as-new-himalayan-flood-threat-looms/vi-AA2bjKLn
                      - text: "Nepal disaster: Rescue operations intensify as new Himalayan flood threat looms"
                  - 'generic "Nepal disaster: Rescue operations intensify as new Himalayan flood threat looms" [ref=e827]':
                    - generic [ref=e829]:
                      - generic [ref=e830]:
                        - button "35 Likes" [ref=e831]:
                          - generic [ref=e832]:
                            - img [ref=e833]
                            - generic [ref=e835]: "35"
                        - button "26 Dislikes" [ref=e836]:
                          - img [ref=e838]
                      - link "Start the conversation" [ref=e841]:
                        - /url: https://www.msn.com/en-in/weather/general/nepal-disaster-rescue-operations-intensify-as-new-himalayan-flood-threat-looms/vi-AA2bjKLn#comments
                        - button "Start the conversation" [ref=e842]:
                          - img [ref=e843]
                - generic [ref=e845]:
                  - button "Hide this story" [ref=e846]:
                    - img [ref=e847]
                    - text: Hide this story
                  - button "See more" [ref=e848]:
                    - img [ref=e849]
            - article [ref=e850] [cursor=pointer]
            - article "4 golds for India, but throwball star Amardeep forced to sell vegetables, drive cab" [ref=e857] [cursor=pointer]:
              - generic [ref=e859]:
                - img [ref=e860]
                - generic [ref=e861]:
                  - generic [ref=e862]:
                    - generic [ref=e863]:
                      - generic [ref=e864]:
                        - img [ref=e865]
                        - generic [ref=e866]: India Today
                      - generic [ref=e867]: ·
                      - generic [ref=e868]: 14h
                    - link "4 golds for India, but throwball star Amardeep forced to sell vegetables, drive cab, India Today" [ref=e869]:
                      - /url: https://www.msn.com/en-in/sports/general/4-golds-for-india-but-throwball-star-amardeep-forced-to-sell-vegetables-drive-cab/ar-AA2bmTv0
                      - text: 4 golds for India, but throwball star Amardeep forced to sell vegetables, drive cab
                  - generic "4 golds for India, but throwball star Amardeep forced to sell vegetables, drive cab" [ref=e872]:
                    - generic [ref=e874]:
                      - generic [ref=e875]:
                        - button "7 Likes" [ref=e876]:
                          - generic [ref=e877]:
                            - img [ref=e878]
                            - generic [ref=e880]: "7"
                        - button "Dislike" [ref=e881]:
                          - img [ref=e883]
                      - link "Start the conversation" [ref=e886]:
                        - /url: https://www.msn.com/en-in/sports/general/4-golds-for-india-but-throwball-star-amardeep-forced-to-sell-vegetables-drive-cab/ar-AA2bmTv0#comments
                        - button "Start the conversation" [ref=e887]:
                          - img [ref=e888]
                - generic [ref=e890]:
                  - button "Hide this story" [ref=e891]:
                    - img [ref=e892]
                    - text: Hide this story
                  - button "See more" [ref=e893]:
                    - img [ref=e894]
            - article [ref=e895] [cursor=pointer]
            - article [ref=e902] [cursor=pointer]:
              - generic [ref=e907]:
                - generic [ref=e909]:
                  - link "Games" [ref=e911]:
                    - /url: https://www.msn.com/en-in/play
                    - heading "Games" [level=2] [ref=e912]
                  - button "More options" [ref=e914]
                - list [ref=e918]:
                  - generic:
                    - listitem [ref=e919]:
                      - link "Deadly Descent" [ref=e920]:
                        - /url: https://www.msn.com/en-in/play/games/deadly-descent/cg-9n7vxxr7llpk?ocid=hpmsn&cvid=6a97da17656e49bb91387854bd78cf7c&ei=4
                        - generic [ref=e921]:
                          - img "Deadly Descent"
                    - listitem [ref=e922]:
                      - link "TapTap Arrow" [ref=e923]:
                        - /url: https://www.msn.com/en-in/play/games/taptap-arrow/cg-9ng0c12cnfsk?ocid=hpmsn&cvid=6a97da17656e49bb91387854bd78cf7c&ei=4
                        - generic [ref=e924]:
                          - img "TapTap Arrow"
                    - listitem [ref=e925]:
                      - link "Save The Pets" [ref=e926]:
                        - /url: https://www.msn.com/en-in/play/games/save-the-pets/cg-9p3610rr8qt5?ocid=hpmsn&cvid=6a97da17656e49bb91387854bd78cf7c&ei=4
                        - generic [ref=e927]:
                          - img "Save The Pets"
                    - listitem [ref=e928]:
                      - link "Driving School Simulator FRVR" [ref=e929]:
                        - /url: https://www.msn.com/en-in/play/games/driving-school-simulator-frvr/cg-9ntwnlrpg2v1?ocid=hpmsn&cvid=6a97da17656e49bb91387854bd78cf7c&ei=4
                        - generic [ref=e930]:
                          - img "Driving School Simulator FRVR"
                    - listitem [ref=e931]:
                      - link "Arrow Slide Puzzle" [ref=e932]:
                        - /url: https://www.msn.com/en-in/play/games/arrow-slide-puzzle/cg-9p4rw4gjxb1f?ocid=hpmsn&cvid=6a97da17656e49bb91387854bd78cf7c&ei=4
                        - generic [ref=e933]:
                          - img "Arrow Slide Puzzle"
                    - listitem [ref=e934]:
                      - link "bloxd.io" [ref=e935]:
                        - /url: https://www.msn.com/en-in/play/games/bloxdio/cg-9p0rj8ffrg7h?ocid=hpmsn&cvid=6a97da17656e49bb91387854bd78cf7c&ei=4
                        - generic [ref=e936]:
                          - img "bloxd.io"
                    - listitem [ref=e937]:
                      - link "Jelly Run 2048" [ref=e938]:
                        - /url: https://www.msn.com/en-in/play/games/jelly-run-2048/cg-9nbckjw55fsv?ocid=hpmsn&cvid=6a97da17656e49bb91387854bd78cf7c&ei=4
                        - generic [ref=e939]:
                          - img "Jelly Run 2048"
                    - listitem [ref=e940]:
                      - link "Space Waves" [ref=e941]:
                        - /url: https://www.msn.com/en-in/play/games/space-waves/cg-9nm5764dbppg?ocid=hpmsn&cvid=6a97da17656e49bb91387854bd78cf7c&ei=4
                        - generic [ref=e942]:
                          - img "Space Waves"
                    - listitem [ref=e943]:
                      - link "Veck.io" [ref=e944]:
                        - /url: https://www.msn.com/en-in/play/games/veckio/cg-9mz3sdptqwm2?ocid=hpmsn&cvid=6a97da17656e49bb91387854bd78cf7c&ei=4
                        - generic [ref=e945]:
                          - img "Veck.io"
                - generic [ref=e947]:
                  - generic [ref=e948]:
                    - generic "Previous" [ref=e949]:
                      - button "Previous" [ref=e950]
                    - tablist [ref=e952]:
                      - tab "Page 1" [selected] [ref=e953]
                      - tab "Page 2" [ref=e955]
                    - generic "Next" [ref=e957]:
                      - button "Next" [ref=e958]
                  - link "Explore more games" [ref=e960]:
                    - /url: https://www.msn.com/en-in/play
          - article [ref=e962]
          - generic [ref=e964]:
            - article [ref=e965] [cursor=pointer]:
              - generic [ref=e970]:
                - generic [ref=e971]:
                  - generic [ref=e972]:
                    - link "Recommended videos" [ref=e973]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e974]
                    - link "Recommended videos" [ref=e977]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e978]:
                    - generic:
                      - link "See more" [ref=e979]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e980]:
                        - button "More options" [ref=e981]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e983]:
                  - generic [ref=e985]:
                    - generic [ref=e987]:
                      - generic:
                        - article [ref=e990]:
                          - generic [ref=e991]:
                            - img "Watch a Passenger Open an Airplane Door Mid-Flight" [ref=e993]
                            - generic [ref=e995]: 18:48
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e996]:
                              - generic [ref=e997]:
                                - img "Veritasium" [ref=e998]
                                - generic [ref=e999]:
                                  - generic:
                                    - generic "Veritasium" [ref=e1000]
                                    - generic [ref=e1001]: ·
                                    - generic [ref=e1002]: 17h
                              - link "Watch a passenger open an airplane door mid-flight" [ref=e1003]:
                                - /url: https://www.msn.com/en-in/news/other/watch-a-passenger-open-an-airplane-door-mid-flight/vi-AA29LXN5?ocid=hpmsn
                                - heading "Watch a passenger open an airplane door mid-flight" [level=2] [ref=e1004]:
                                  - generic: Watch a passenger open an airplane door mid-flight
                            - button "See more" [ref=e1008]
                        - article [ref=e1011]:
                          - generic [ref=e1012]:
                            - img "Discover the art of shoji making in Japan" [ref=e1014]
                            - generic [ref=e1016]: 12:49
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1017]:
                              - generic [ref=e1018]:
                                - img "Tokyo Lens" [ref=e1019]
                                - generic "Tokyo Lens" [ref=e1021]
                              - link "I spent 24 hours with Japanese craftsmen" [ref=e1022]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/i-spent-24-hours-with-japanese-craftsmen/vi-AA28IvMF?ocid=hpmsn
                                - heading "I spent 24 hours with Japanese craftsmen" [level=2] [ref=e1023]:
                                  - generic: I spent 24 hours with Japanese craftsmen
                            - button "See more" [ref=e1027]
                        - article [ref=e1030]:
                          - generic [ref=e1031]:
                            - img "Asian Tribes Try Sour American Candy for the First Time" [ref=e1033]
                            - generic [ref=e1035]: 11:22
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1036]:
                              - generic [ref=e1037]:
                                - img "Best Ever Food Review Show" [ref=e1038]
                                - generic [ref=e1039]:
                                  - generic:
                                    - generic "Best Ever Food Review Show" [ref=e1040]
                                    - generic [ref=e1041]: ·
                                    - generic [ref=e1042]: 20h
                              - link "Asian tribes try sour American candy for the first time" [ref=e1043]:
                                - /url: https://www.msn.com/en-in/food-and-drink/general/asian-tribes-try-sour-american-candy-for-the-first-time/vi-AA24TS5d?ocid=hpmsn
                                - heading "Asian tribes try sour American candy for the first time" [level=2] [ref=e1044]:
                                  - generic: Asian tribes try sour American candy for the first time
                            - button "See more" [ref=e1048]
                        - article "England's last Old English town feels like stepping back 700 years" [ref=e1051]:
                          - generic [ref=e1052]:
                            - img "England's Last Old English Town Feels Like Stepping Back 700 Years" [ref=e1054]
                            - generic [ref=e1056]: 16:39
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1057]:
                              - generic [ref=e1058]:
                                - img "Xiaomanyc." [ref=e1059]
                                - generic [ref=e1060]:
                                  - generic:
                                    - generic "Xiaomanyc." [ref=e1061]
                                    - generic [ref=e1062]: ·
                                    - generic [ref=e1063]: 21h
                              - link "England's last Old English town feels like stepping back 700 years" [ref=e1064]:
                                - /url: https://www.msn.com/en-in/news/other/england-s-last-old-english-town-feels-like-stepping-back-700-years/vi-AA28ngzt?ocid=hpmsn
                                - heading "England's last Old English town feels like stepping back 700 years" [level=2] [ref=e1065]:
                                  - generic: England's last Old English town feels like stepping back 700 years
                            - button "See more" [ref=e1069]
                        - article "A Boeing 737 was dragged onto a cliff - now it's the world's wildest villa" [ref=e1072]:
                          - generic [ref=e1073]:
                            - img "A Boeing 737 Was Dragged Onto a Cliff - Now It's the World's Wildest Villa" [ref=e1075]
                            - generic [ref=e1077]: 23:08
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1078]:
                              - generic [ref=e1079]:
                                - img "The Luxury Home Show" [ref=e1080]
                                - generic [ref=e1081]:
                                  - generic:
                                    - generic "The Luxury Home Show" [ref=e1082]
                                    - generic [ref=e1083]: ·
                                    - generic [ref=e1084]: 16h
                              - link "A Boeing 737 was dragged onto a cliff - now it's the world's wildest villa" [ref=e1085]:
                                - /url: https://www.msn.com/en-in/travel/air-travel/a-boeing-737-was-dragged-onto-a-cliff-now-it-s-the-world-s-wildest-villa/vi-AA27DcYi?ocid=hpmsn
                                - heading "A Boeing 737 was dragged onto a cliff - now it's the world's wildest villa" [level=2] [ref=e1086]:
                                  - generic: A Boeing 737 was dragged onto a cliff - now it's the world's wildest villa
                            - button "See more" [ref=e1090]
                        - article [ref=e1093]:
                          - generic [ref=e1094]:
                            - img "American vs English Snacks! Ft. The New York Jets" [ref=e1096]
                            - generic [ref=e1098]: 10:00
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1099]:
                              - generic [ref=e1100]:
                                - img "JOLLY" [ref=e1101]
                                - generic [ref=e1102]:
                                  - generic:
                                    - generic "JOLLY" [ref=e1103]
                                    - generic [ref=e1104]: ·
                                    - generic [ref=e1105]: 2h
                              - link "American vs English snacks! Ft. the New York Jets" [ref=e1106]:
                                - /url: https://www.msn.com/en-in/food-and-drink/recipes/american-vs-english-snacks-ft-the-new-york-jets/vi-AA2boGZN?ocid=hpmsn
                                - heading "American vs English snacks! Ft. the New York Jets" [level=2] [ref=e1107]:
                                  - generic: American vs English snacks! Ft. the New York Jets
                            - button "See more" [ref=e1111]
                        - article "96 million black balls suddenly covered LA’s water supply - and triggered a panic" [ref=e1114]:
                          - generic [ref=e1115]:
                            - img "96 Million Black Balls Suddenly Covered LA’s Water Supply - And Triggered a Panic" [ref=e1117]
                            - generic [ref=e1119]: 12:07
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1120]:
                              - generic [ref=e1121]:
                                - img "Veritasium" [ref=e1122]
                                - generic [ref=e1123]:
                                  - generic:
                                    - generic "Veritasium" [ref=e1124]
                                    - generic [ref=e1125]: ·
                                    - generic [ref=e1126]: 1d
                              - link "96 million black balls suddenly covered LA’s water supply - and triggered a panic" [ref=e1127]:
                                - /url: https://www.msn.com/en-in/money/general/96-million-black-balls-suddenly-covered-la-s-water-supply-and-triggered-a-panic/vi-AA2aob10?ocid=hpmsn
                                - heading "96 million black balls suddenly covered LA’s water supply - and triggered a panic" [level=2] [ref=e1128]:
                                  - generic: 96 million black balls suddenly covered LA’s water supply - and triggered a panic
                            - button "See more" [ref=e1132]
                        - article [ref=e1135]:
                          - generic [ref=e1136]:
                            - img "Top Gear Africa Special Cars Finally Found In Uganda" [ref=e1138]
                            - generic [ref=e1140]: 06:08
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1141]:
                              - generic [ref=e1142]:
                                - img "DRIVETRIBE" [ref=e1143]
                                - generic [ref=e1144]:
                                  - generic:
                                    - generic "DRIVETRIBE" [ref=e1145]
                                    - generic [ref=e1146]: ·
                                    - generic [ref=e1147]: 5h
                              - link "Top Gear Africa special cars finally found in Uganda" [ref=e1148]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/top-gear-africa-special-cars-finally-found-in-uganda/vi-AA2bnIko?ocid=hpmsn
                                - heading "Top Gear Africa special cars finally found in Uganda" [level=2] [ref=e1149]:
                                  - generic: Top Gear Africa special cars finally found in Uganda
                            - button "See more" [ref=e1153]
                        - article "They grow thousands of monster crabs here... but 3 out of 10 escape" [ref=e1156]:
                          - generic [ref=e1157]:
                            - img "They Grow Thousands of Monster Crabs Here... But 3 Out of 10 Escape" [ref=e1159]
                            - generic [ref=e1161]: 23:38
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1162]:
                              - generic [ref=e1163]:
                                - img "Best Ever Food Review Show" [ref=e1164]
                                - generic [ref=e1165]:
                                  - generic:
                                    - generic "Best Ever Food Review Show" [ref=e1166]
                                    - generic [ref=e1167]: ·
                                    - generic [ref=e1168]: 4h
                              - link "They grow thousands of monster crabs here... but 3 out of 10 escape" [ref=e1169]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/they-grow-thousands-of-monster-crabs-here-but-3-out-of-10-escape/vi-AA2bocvY?ocid=hpmsn
                                - heading "They grow thousands of monster crabs here... but 3 out of 10 escape" [level=2] [ref=e1170]:
                                  - generic: They grow thousands of monster crabs here... but 3 out of 10 escape
                            - button "See more" [ref=e1174]
                        - article [ref=e1177]:
                          - generic [ref=e1178]:
                            - img "He Can't Eat Meat Anymore... Here's Why" [ref=e1180]
                            - generic [ref=e1182]: 20:49
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1183]:
                              - generic [ref=e1184]:
                                - img "Best Ever Food Review Show" [ref=e1185]
                                - generic [ref=e1186]:
                                  - generic:
                                    - generic "Best Ever Food Review Show" [ref=e1187]
                                    - generic [ref=e1188]: ·
                                    - generic [ref=e1189]: 2d
                              - link "He can't eat meat anymore... here's why" [ref=e1190]:
                                - /url: https://www.msn.com/en-in/food-and-drink/recipes/he-can-t-eat-meat-anymore-here-s-why/vi-AA2aMVfy?ocid=hpmsn
                                - heading "He can't eat meat anymore... here's why" [level=2] [ref=e1191]:
                                  - generic: He can't eat meat anymore... here's why
                            - button "See more" [ref=e1195]
                        - article "These oysters can’t be eaten raw. The reason is more serious than you think" [ref=e1198]:
                          - generic [ref=e1199]:
                            - img "These Oysters Can’t Be Eaten Raw... The Reason Is More Serious Than You Think" [ref=e1201]
                            - generic [ref=e1203]: 21:30
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1204]:
                              - generic [ref=e1205]:
                                - img "Best Ever Food Review Show" [ref=e1206]
                                - generic [ref=e1207]:
                                  - generic:
                                    - generic "Best Ever Food Review Show" [ref=e1208]
                                    - generic [ref=e1209]: ·
                                    - generic [ref=e1210]: 5h
                              - link "These oysters can’t be eaten raw. The reason is more serious than you think" [ref=e1211]:
                                - /url: https://www.msn.com/en-in/food-and-drink/general/these-oysters-can-t-be-eaten-raw-the-reason-is-more-serious-than-you-think/vi-AA2bnZHv?ocid=hpmsn
                                - heading "These oysters can’t be eaten raw. The reason is more serious than you think" [level=2] [ref=e1212]:
                                  - generic: These oysters can’t be eaten raw. The reason is more serious than you think
                            - button "See more" [ref=e1216]
                        - article "The ocean suddenly pulled back - then a 100-foot wall of water came for the coast" [ref=e1219]:
                          - generic [ref=e1220]:
                            - img "The Ocean Suddenly Pulled Back - Then a 100-Foot Wall of Water Came for the Coast" [ref=e1222]
                            - generic [ref=e1224]: 03:36
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1225]:
                              - generic [ref=e1226]:
                                - img "TED" [ref=e1227]
                                - generic [ref=e1228]:
                                  - generic:
                                    - generic "TED" [ref=e1229]
                                    - generic [ref=e1230]: ·
                                    - generic [ref=e1231]: 17h
                              - link "The ocean suddenly pulled back - then a 100-foot wall of water came for the coast" [ref=e1232]:
                                - /url: https://www.msn.com/en-in/weather/general/the-ocean-suddenly-pulled-back-then-a-100-foot-wall-of-water-came-for-the-coast/vi-AA27T9or?ocid=hpmsn
                                - heading "The ocean suddenly pulled back - then a 100-foot wall of water came for the coast" [level=2] [ref=e1233]:
                                  - generic: The ocean suddenly pulled back - then a 100-foot wall of water came for the coast
                            - button "See more" [ref=e1237]
                        - article [ref=e1240]:
                          - generic [ref=e1241]:
                            - img "Who Keeps Ditching Supercars in the Desert?" [ref=e1243]
                            - generic [ref=e1245]: 12:34
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1246]:
                              - generic [ref=e1247]:
                                - img "Donut Media" [ref=e1248]
                                - generic [ref=e1249]:
                                  - generic:
                                    - generic "Donut Media" [ref=e1250]
                                    - generic [ref=e1251]: ·
                                    - generic [ref=e1252]: 10h
                              - link "Who keeps ditching supercars in the desert?" [ref=e1253]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/who-keeps-ditching-supercars-in-the-desert/vi-AA2aYkl4?ocid=hpmsn
                                - heading "Who keeps ditching supercars in the desert?" [level=2] [ref=e1254]:
                                  - generic: Who keeps ditching supercars in the desert?
                            - button "See more" [ref=e1258]
                        - article [ref=e1261]:
                          - generic [ref=e1262]:
                            - img "The 15 Worst Celebrity Plastic Surgery Disasters" [ref=e1264]
                            - generic [ref=e1266]: 15:24
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1267]:
                              - generic [ref=e1268]:
                                - img "Doctor Youn" [ref=e1269]
                                - generic [ref=e1270]:
                                  - generic:
                                    - generic "Doctor Youn" [ref=e1271]
                                    - generic [ref=e1272]: ·
                                    - generic [ref=e1273]: 11h
                              - link "15 notable celebrity plastic surgery outcomes" [ref=e1274]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/15-notable-celebrity-plastic-surgery-outcomes/vi-AA2bmxRT?ocid=hpmsn
                                - heading "15 notable celebrity plastic surgery outcomes" [level=2] [ref=e1275]:
                                  - generic: 15 notable celebrity plastic surgery outcomes
                            - button "See more" [ref=e1279]
                        - article [ref=e1282]:
                          - generic [ref=e1283]:
                            - img "James May Calls Hammond’s V10 BMW Estate A Bad Buy" [ref=e1285]
                            - generic [ref=e1287]: 08:48
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1288]:
                              - generic [ref=e1289]:
                                - img "DRIVETRIBE" [ref=e1290]
                                - generic [ref=e1291]:
                                  - generic:
                                    - generic "DRIVETRIBE" [ref=e1292]
                                    - generic [ref=e1293]: ·
                                    - generic [ref=e1294]: 9h
                              - link "James May calls Hammond’s V10 BMW estate a bad buy" [ref=e1295]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/james-may-calls-hammond-s-v10-bmw-estate-a-bad-buy/vi-AA2bnplw?ocid=hpmsn
                                - heading "James May calls Hammond’s V10 BMW estate a bad buy" [level=2] [ref=e1296]:
                                  - generic: James May calls Hammond’s V10 BMW estate a bad buy
                            - button "See more" [ref=e1300]
                        - article [ref=e1303]:
                          - generic [ref=e1304]:
                            - img "Inside one of the world’s largest private jets" [ref=e1306]
                            - generic [ref=e1308]: 16:36
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1309]:
                              - generic [ref=e1310]:
                                - img "Enes Yilmazer" [ref=e1311]
                                - generic [ref=e1312]:
                                  - generic:
                                    - generic "Enes Yilmazer" [ref=e1313]
                                    - generic [ref=e1314]: ·
                                    - generic [ref=e1315]: 11h
                              - link "Inside one of the world’s largest private jets" [ref=e1316]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/inside-one-of-the-world-s-largest-private-jets/vi-AA2bmAyX?ocid=hpmsn
                                - heading "Inside one of the world’s largest private jets" [level=2] [ref=e1317]:
                                  - generic: Inside one of the world’s largest private jets
                            - button "See more" [ref=e1321]
                        - article [ref=e1324]:
                          - generic [ref=e1325]:
                            - img "This MG ZT-T Got Fixed After James May’s Tesla Bump" [ref=e1327]
                            - generic [ref=e1329]: 19:55
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1330]:
                              - generic [ref=e1331]:
                                - img "DRIVETRIBE" [ref=e1332]
                                - generic [ref=e1333]:
                                  - generic:
                                    - generic "DRIVETRIBE" [ref=e1334]
                                    - generic [ref=e1335]: ·
                                    - generic [ref=e1336]: 9h
                              - link "This MG ZT-T got fixed after James May’s Tesla bump" [ref=e1337]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/this-mg-zt-t-got-fixed-after-james-may-s-tesla-bump/vi-AA2bnkla?ocid=hpmsn
                                - heading "This MG ZT-T got fixed after James May’s Tesla bump" [level=2] [ref=e1338]:
                                  - generic: This MG ZT-T got fixed after James May’s Tesla bump
                            - button "See more" [ref=e1342]
                        - article [ref=e1345]:
                          - generic [ref=e1346]:
                            - 'img "WTF Moments: Plastic Surgery Chaos" [ref=e1348]'
                            - generic [ref=e1350]: 12:29
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1351]:
                              - generic [ref=e1352]:
                                - img "Doctor Youn" [ref=e1353]
                                - generic [ref=e1354]:
                                  - generic:
                                    - generic "Doctor Youn" [ref=e1355]
                                    - generic [ref=e1356]: ·
                                    - generic [ref=e1357]: 7h
                              - link "Plastic surgery’s most surprising medical cases" [ref=e1358]:
                                - /url: https://www.msn.com/en-in/health/general/plastic-surgery-s-most-surprising-medical-cases/vi-AA2bnd3e?ocid=hpmsn
                                - heading "Plastic surgery’s most surprising medical cases" [level=2] [ref=e1359]:
                                  - generic: Plastic surgery’s most surprising medical cases
                            - button "See more" [ref=e1363]
                        - article "Something strange happens to buildings during an earthquake - and it can tear them apart" [ref=e1366]:
                          - generic [ref=e1367]:
                            - img "Something Strange Happens To Buildings During An Earthquake - And It Can Tear Them Apart" [ref=e1369]
                            - generic [ref=e1371]: 04:51
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1372]:
                              - generic [ref=e1373]:
                                - img "TED" [ref=e1374]
                                - generic [ref=e1375]:
                                  - generic:
                                    - generic "TED" [ref=e1376]
                                    - generic [ref=e1377]: ·
                                    - generic [ref=e1378]: 16h
                              - link "Something strange happens to buildings during an earthquake - and it can tear them apart" [ref=e1379]:
                                - /url: https://www.msn.com/en-in/news/other/something-strange-happens-to-buildings-during-an-earthquake-and-it-can-tear-them-apart/vi-AA2bmh5u?ocid=hpmsn
                                - heading "Something strange happens to buildings during an earthquake - and it can tear them apart" [level=2] [ref=e1380]:
                                  - generic: Something strange happens to buildings during an earthquake - and it can tear them apart
                            - button "See more" [ref=e1384]
                        - article "She secretly restored her dad's car - and he couldn't believe his eyes" [ref=e1387]:
                          - generic [ref=e1388]:
                            - img "She Secretly Restored Her Dad's Car - And He Couldn't Believe His Eyes" [ref=e1390]
                            - generic [ref=e1392]: 27:05
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1393]:
                              - generic [ref=e1394]:
                                - img "Donut Media" [ref=e1395]
                                - generic [ref=e1396]:
                                  - generic:
                                    - generic "Donut Media" [ref=e1397]
                                    - generic [ref=e1398]: ·
                                    - generic [ref=e1399]: 10h
                              - link "She secretly restored her dad's car - and he couldn't believe his eyes" [ref=e1400]:
                                - /url: https://www.msn.com/en-in/autos/buying/she-secretly-restored-her-dad-s-car-and-he-couldn-t-believe-his-eyes/vi-AA26rnkH?ocid=hpmsn
                                - heading "She secretly restored her dad's car - and he couldn't believe his eyes" [level=2] [ref=e1401]:
                                  - generic: She secretly restored her dad's car - and he couldn't believe his eyes
                            - button "See more" [ref=e1405]
                        - link "See more" [ref=e1407]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1408]
                          - text: See more
                    - button "next" [ref=e1412]:
                      - img [ref=e1415]
            - article "Once 'junior Amitabh Bachchan', Master Ravi is now a corporate leader" [ref=e1417] [cursor=pointer]:
              - generic [ref=e1419]:
                - img [ref=e1420]
                - generic [ref=e1421]:
                  - generic [ref=e1422]:
                    - generic [ref=e1423]:
                      - generic [ref=e1424]:
                        - img [ref=e1425]
                        - generic [ref=e1426]: NDTV
                      - generic [ref=e1427]: ·
                      - generic [ref=e1428]: 21h
                    - link "Once 'junior Amitabh Bachchan', Master Ravi is now a corporate leader, NDTV" [ref=e1429]:
                      - /url: https://www.msn.com/en-in/money/general/once-junior-amitabh-bachchan-master-ravi-is-now-a-corporate-leader/ar-AA2bkuzX
                      - text: Once 'junior Amitabh Bachchan', Master Ravi is now a corporate leader
                  - generic "Once 'junior Amitabh Bachchan', Master Ravi is now a corporate leader" [ref=e1432]:
                    - generic [ref=e1434]:
                      - generic [ref=e1435]:
                        - button "39 Likes" [ref=e1436]:
                          - generic [ref=e1437]:
                            - img [ref=e1438]
                            - generic [ref=e1440]: "39"
                        - button "32 Dislikes" [ref=e1441]:
                          - img [ref=e1443]
                      - link "Start the conversation" [ref=e1446]:
                        - /url: https://www.msn.com/en-in/money/general/once-junior-amitabh-bachchan-master-ravi-is-now-a-corporate-leader/ar-AA2bkuzX#comments
                        - button "Start the conversation" [ref=e1447]:
                          - img [ref=e1448]
                - generic [ref=e1450]:
                  - button "Hide this story" [ref=e1451]:
                    - img [ref=e1452]
                    - text: Hide this story
                  - button "See more" [ref=e1453]:
                    - img [ref=e1454]
            - 'article "Tukaram Mundhe’s decision reversed: Why CM Devendra Fadnavis stayed FDA chief’s ban on sale of loose oil" [ref=e1455] [cursor=pointer]':
              - generic [ref=e1457]:
                - img [ref=e1458]
                - generic [ref=e1459]:
                  - generic [ref=e1460]:
                    - generic [ref=e1461]:
                      - generic [ref=e1462]:
                        - img [ref=e1463]
                        - generic [ref=e1464]: News18
                      - generic [ref=e1465]: ·
                      - generic [ref=e1466]: 18h
                    - 'link "Tukaram Mundhe’s decision reversed: Why CM Devendra Fadnavis stayed FDA chief’s ban on sale of loose oil, News18" [ref=e1467]':
                      - /url: https://www.msn.com/en-in/money/general/tukaram-mundhe-s-decision-reversed-why-cm-devendra-fadnavis-stayed-fda-chief-s-ban-on-sale-of-loose-oil/ar-AA2blTyh
                      - text: "Tukaram Mundhe’s decision reversed: Why CM Devendra Fadnavis stayed FDA chief’s ban on sale of loose oil"
                  - 'generic "Tukaram Mundhe’s decision reversed: Why CM Devendra Fadnavis stayed FDA chief’s ban on sale of loose oil" [ref=e1470]':
                    - generic [ref=e1472]:
                      - generic [ref=e1473]:
                        - button "37 Likes" [ref=e1474]:
                          - generic [ref=e1475]:
                            - img [ref=e1476]
                            - generic [ref=e1478]: "37"
                        - button "22 Dislikes" [ref=e1479]:
                          - img [ref=e1481]
                      - link "View comments 7 Comment" [ref=e1484]:
                        - /url: https://www.msn.com/en-in/money/general/tukaram-mundhe-s-decision-reversed-why-cm-devendra-fadnavis-stayed-fda-chief-s-ban-on-sale-of-loose-oil/ar-AA2blTyh#comments
                        - button "View comments 7 Comment" [ref=e1485]:
                          - img [ref=e1486]
                        - generic [ref=e1488]: "7"
                - generic [ref=e1489]:
                  - button "Hide this story" [ref=e1490]:
                    - img [ref=e1491]
                    - text: Hide this story
                  - button "See more" [ref=e1492]:
                    - img [ref=e1493]
            - article "Why are more Indian women choosing not to marry? Here’s what the data says about changing attitudes towards marriage and relationships" [ref=e1494] [cursor=pointer]:
              - generic [ref=e1496]:
                - img [ref=e1497]
                - generic [ref=e1498]:
                  - generic [ref=e1499]:
                    - generic [ref=e1500]:
                      - generic [ref=e1501]:
                        - img [ref=e1502]
                        - generic [ref=e1503]: The Times of India
                      - generic [ref=e1504]: ·
                      - generic [ref=e1505]: 3w
                    - link "Why are more Indian women choosing not to marry? Here’s what the data says about changing attitudes towards marriage and relationships, The Times of India" [ref=e1506]:
                      - /url: https://www.msn.com/en-in/lifestyle/other/why-are-more-indian-women-choosing-not-to-marry-here-s-what-the-data-says-about-changing-attitudes-towards-marriage-and-relationships/ar-AA29IB2n
                      - text: Why are more Indian women choosing not to marry? Here’s what the data says about changing attitudes towards marriage and relationships
                  - generic "Why are more Indian women choosing not to marry? Here’s what the data says about changing attitudes towards marriage and relationships" [ref=e1509]:
                    - generic [ref=e1511]:
                      - generic [ref=e1512]:
                        - button "301 Likes" [ref=e1513]:
                          - generic [ref=e1514]:
                            - img [ref=e1515]
                            - generic [ref=e1517]: "301"
                        - button "342 Dislikes" [ref=e1518]:
                          - img [ref=e1520]
                      - link "View comments 33 Comment" [ref=e1523]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/why-are-more-indian-women-choosing-not-to-marry-here-s-what-the-data-says-about-changing-attitudes-towards-marriage-and-relationships/ar-AA29IB2n#comments
                        - button "View comments 33 Comment" [ref=e1524]:
                          - img [ref=e1525]
                        - generic [ref=e1527]: "33"
                - generic [ref=e1528]:
                  - button "Hide this story" [ref=e1529]:
                    - img [ref=e1530]
                    - text: Hide this story
                  - button "See more" [ref=e1531]:
                    - img [ref=e1532]
            - 'article "Indian woman in America shares one workplace habit she learnt from her peers: ''Lately realized that it is a skill''" [ref=e1533] [cursor=pointer]':
              - generic [ref=e1535]:
                - img [ref=e1536]
                - generic [ref=e1537]:
                  - generic [ref=e1538]:
                    - generic [ref=e1539]:
                      - generic [ref=e1540]:
                        - img [ref=e1541]
                        - generic [ref=e1542]: News18
                      - generic [ref=e1543]: ·
                      - generic [ref=e1544]: 2w
                    - 'link "Indian woman in America shares one workplace habit she learnt from her peers: ''Lately realized that it is a skill'', News18" [ref=e1545]':
                      - /url: https://www.msn.com/en-in/money/general/indian-woman-in-america-shares-one-workplace-habit-she-learnt-from-her-peers-lately-realized-that-it-is-a-skill/ar-AA2aajei
                      - text: "Indian woman in America shares one workplace habit she learnt from her peers: 'Lately realized that it is a skill'"
                  - 'generic "Indian woman in America shares one workplace habit she learnt from her peers: ''Lately realized that it is a skill''" [ref=e1548]':
                    - generic [ref=e1550]:
                      - generic [ref=e1551]:
                        - button "84 Likes" [ref=e1552]:
                          - generic [ref=e1553]:
                            - img [ref=e1554]
                            - generic [ref=e1556]: "84"
                        - button "127 Dislikes" [ref=e1557]:
                          - img [ref=e1559]
                      - link "View comments 2 Comment" [ref=e1562]:
                        - /url: https://www.msn.com/en-in/money/general/indian-woman-in-america-shares-one-workplace-habit-she-learnt-from-her-peers-lately-realized-that-it-is-a-skill/ar-AA2aajei#comments
                        - button "View comments 2 Comment" [ref=e1563]:
                          - img [ref=e1564]
                        - generic [ref=e1566]: "2"
                - generic [ref=e1567]:
                  - button "Hide this story" [ref=e1568]:
                    - img [ref=e1569]
                    - text: Hide this story
                  - button "See more" [ref=e1570]:
                    - img [ref=e1571]
            - article [ref=e1572] [cursor=pointer]
            - 'article "GK: Which city is known as the grape capital of India?" [ref=e1579] [cursor=pointer]':
              - generic [ref=e1581]:
                - img [ref=e1582]
                - generic [ref=e1583]:
                  - generic [ref=e1584]:
                    - generic [ref=e1585]:
                      - generic [ref=e1586]:
                        - img [ref=e1587]
                        - generic [ref=e1588]: News18
                      - generic [ref=e1589]: ·
                      - generic [ref=e1590]: 1w
                    - 'link "GK: Which city is known as the grape capital of India?, News18" [ref=e1591]':
                      - /url: https://www.msn.com/en-in/money/general/gk-which-city-is-known-as-the-grape-capital-of-india/ss-AA2asrTq
                      - text: "GK: Which city is known as the grape capital of India?"
                  - 'generic "GK: Which city is known as the grape capital of India?" [ref=e1594]':
                    - generic [ref=e1596]:
                      - generic [ref=e1597]:
                        - button "31 Likes" [ref=e1598]:
                          - generic [ref=e1599]:
                            - img [ref=e1600]
                            - generic [ref=e1602]: "31"
                        - button "37 Dislikes" [ref=e1603]:
                          - img [ref=e1605]
                      - link "Start the conversation" [ref=e1608]:
                        - /url: https://www.msn.com/en-in/money/general/gk-which-city-is-known-as-the-grape-capital-of-india/ss-AA2asrTq#comments
                        - button "Start the conversation" [ref=e1609]:
                          - img [ref=e1610]
                - generic [ref=e1612]:
                  - button "Hide this story" [ref=e1613]:
                    - img [ref=e1614]
                    - text: Hide this story
                  - button "See more" [ref=e1615]:
                    - img [ref=e1616]
          - generic [ref=e1617]:
            - article [ref=e1618] [cursor=pointer]
            - article "Why is share market falling today? Know key reasons behind Sensex, Nifty crash on September 2" [ref=e1625] [cursor=pointer]:
              - generic [ref=e1627]:
                - img [ref=e1628]
                - generic [ref=e1629]:
                  - generic [ref=e1630]:
                    - generic [ref=e1631]:
                      - generic [ref=e1632]:
                        - img [ref=e1633]
                        - generic [ref=e1634]: News18
                      - generic [ref=e1635]: ·
                      - generic [ref=e1636]: 3h
                    - link "Why is share market falling today? Know key reasons behind Sensex, Nifty crash on September 2, News18" [ref=e1637]:
                      - /url: https://www.msn.com/en-in/money/economy/why-is-share-market-falling-today-know-key-reasons-behind-sensex-nifty-crash-on-september-2/ar-AA2bnQF2
                      - text: Why is share market falling today? Know key reasons behind Sensex, Nifty crash on September 2
                  - generic "Why is share market falling today? Know key reasons behind Sensex, Nifty crash on September 2" [ref=e1640]:
                    - generic [ref=e1642]:
                      - generic [ref=e1643]:
                        - button "14 Likes" [ref=e1644]:
                          - generic [ref=e1645]:
                            - img [ref=e1646]
                            - generic [ref=e1648]: "14"
                        - button "16 Dislikes" [ref=e1649]:
                          - img [ref=e1651]
                      - link "View comments 1 Comment" [ref=e1654]:
                        - /url: https://www.msn.com/en-in/money/economy/why-is-share-market-falling-today-know-key-reasons-behind-sensex-nifty-crash-on-september-2/ar-AA2bnQF2#comments
                        - button "View comments 1 Comment" [ref=e1655]:
                          - img [ref=e1656]
                        - generic [ref=e1658]: "1"
                - generic [ref=e1659]:
                  - button "Hide this story" [ref=e1660]:
                    - img [ref=e1661]
                    - text: Hide this story
                  - button "See more" [ref=e1662]:
                    - img [ref=e1663]
    - contentinfo [ref=e1666]:
      - generic "Feedback" [ref=e1668] [cursor=pointer]:
        - button "Feedback" [ref=e1669]:
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