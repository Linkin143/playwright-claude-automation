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
        - 'link "Moses Lake: Mostly clear, 19 °C" [ref=e19] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington
          - generic "Moses Lake, Washington, United States Click here to see more information" [ref=e20]: Moses Lake
          - img "Mostly clear" [ref=e22]
          - generic [ref=e23]:
            - generic [ref=e24]: ‎19‎
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
          - button "Sign in to your account" [ref=e37] [cursor=pointer]:
            - generic [ref=e38]: Sign in to your account
            - generic [ref=e40]: Sign in
      - search [ref=e41]:
        - search [ref=e43]:
          - generic [ref=e44]:
            - generic "Web search" [ref=e45] [cursor=pointer]:
              - button "Web search" [ref=e46]:
                - generic:
                  - generic:
                    - img
            - searchbox "Enter your search term" [ref=e47]
            - generic "Open Copilot" [ref=e51] [cursor=pointer]:
              - button "Open Copilot" [ref=e52]:
                - generic:
                  - generic:
                    - generic:
                      - img "Open Copilot"
  - generic [ref=e53]:
    - generic [ref=e54]:
      - generic [ref=e59]:
        - list [ref=e62]:
          - listitem [ref=e63]:
            - link "Outlook.com" [ref=e66] [cursor=pointer]:
              - /url: https://outlook.com
              - generic [ref=e70]: Outlook.com
          - listitem [ref=e71]:
            - link "Flipkart" [ref=e74] [cursor=pointer]:
              - /url: https://ww81.sitepvvaff.com/sssdomweb?enk=o=tjn52:tsid=42386:u=affinity-308.com:b=308:qld=NoReferer:pos=1:blid=0&subid=enin-msn-hp-mestripe
              - generic [ref=e77]:
                - generic [ref=e78]: Flipkart
                - generic [ref=e80]: Sponsored
          - listitem [ref=e81]:
            - link "Find a tutor" [ref=e84] [cursor=pointer]:
              - /url: https://www.bing.com/pros?FORM=BPIMNS
              - generic [ref=e88]: Find a tutor
          - listitem [ref=e89]:
            - link "Booking.com" [ref=e92] [cursor=pointer]:
              - /url: https://www.booking.com/index.html?aid=1624937&label=enin-msn-hp-mestripe
              - generic [ref=e95]:
                - generic [ref=e96]: Booking.com
                - generic [ref=e98]: Sponsored
          - listitem [ref=e99]:
            - link "Nykaa" [ref=e102] [cursor=pointer]:
              - /url: https://sovrn.co/p9zogj8
              - generic [ref=e105]:
                - generic [ref=e106]: Nykaa
                - generic [ref=e108]: Sponsored
          - listitem [ref=e109]:
            - link "Facebook" [ref=e112] [cursor=pointer]:
              - /url: https://www.facebook.com
              - generic [ref=e116]: Facebook
          - listitem [ref=e117]:
            - link "Microsoft 365" [ref=e120] [cursor=pointer]:
              - /url: https://www.office.com/?omkt=en-IN
              - generic [ref=e124]: Microsoft 365
          - listitem [ref=e125]:
            - link "X" [ref=e128] [cursor=pointer]:
              - /url: https://x.com
              - generic [ref=e132]: X
          - listitem [ref=e133]:
            - link "OneDrive" [ref=e136] [cursor=pointer]:
              - /url: https://onedrive.live.com/?wt.mc_id=oo_msn_msnhomepage_header
              - generic [ref=e140]: OneDrive
          - listitem [ref=e141]:
            - link "Skype" [ref=e144] [cursor=pointer]:
              - /url: https://www.skype.com/
              - generic [ref=e148]: Skype
          - listitem [ref=e149]:
            - link "OneNote" [ref=e152] [cursor=pointer]:
              - /url: https://www.onenote.com/notebooks?WT.mc_id=MSN_OneNote_TopMenu&auth=1&wdorigin=msn
              - generic [ref=e156]: OneNote
          - listitem [ref=e157]:
            - link "Maps" [ref=e160] [cursor=pointer]:
              - /url: https://bing.com/maps/?FORM=MSNMAP
              - generic [ref=e164]: Maps
          - listitem [ref=e165]:
            - link "Microsoft Store" [ref=e168] [cursor=pointer]:
              - /url: https://www.microsoft.com/en-in
              - generic [ref=e172]: Microsoft Store
        - button [ref=e173]:
          - img [ref=e176]
      - generic [ref=e178]:
        - banner [ref=e179]
        - generic [ref=e180]:
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
              - generic "Show more topics" [ref=e197] [cursor=pointer]:
                - button "Show more topics" [ref=e198]:
                  - generic:
                    - generic:
                      - img
            - generic "Personalize your feed\"" [ref=e200] [cursor=pointer]:
              - button "Personalize your feed\"" [ref=e201]:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic: Personalize
          - button "Make MSN my homepage" [ref=e203] [cursor=pointer]
      - main [ref=e206]:
        - generic [ref=e208]:
          - generic [ref=e209]:
            - generic [ref=e212]:
              - tablist [ref=e214]:
                - tab [ref=e215] [cursor=pointer]
                - tab [ref=e217] [cursor=pointer]
                - tab [ref=e219] [cursor=pointer]
                - tab [ref=e221] [cursor=pointer]
                - tab [ref=e223] [cursor=pointer]
                - tab [selected] [ref=e225] [cursor=pointer]
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
                - tab [ref=e275] [cursor=pointer]
              - button [ref=e279]
              - button [ref=e282]
              - article "Official Ford® Offers" [ref=e283] [cursor=pointer]:
                - generic [ref=e285]:
                  - img [ref=e286]
                  - generic [ref=e287]:
                    - generic [ref=e288]:
                      - generic [ref=e291]: Ford Motor Company
                      - link "Official Ford® Offers, Ford Motor Company" [ref=e292]:
                        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=33aa0c49-78f5-49bc-bd1d-f6ac056d9096&bdc=pb&bidId=4&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=jhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=10d6f70e-95ea-4452-a8d8-6d398064bc62&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8IPneexU8fmHAMaMeLSliAjVUCUy7mt7xaYKMux1h6QsgTfr1Pp5EFghSMmEGDwok9DfRo1avABSJRBt-o6UecjLnFeg0YZ0Q7EkmIJ0wH_TzHy3Y4UOP95yQkl3kYI6Bywj2tIz_kNBSOalhdwYxolIWvzuZ70Ve6YajkFeTX5Q0TeVGBVFPViNMT1XWdz2PsBLgOw%26u%3DaHR0cHMlM2ElMmYlMmZwaXhlbC5ldmVyZXN0dGVjaC5uZXQlMmYyNTE5JTJmY3ElM2Zldl9zaWQlM2QxMCUyNmV2X2xuJTNka2V5d29yZCUyNmV2X2x0eCUzZCUyNmV2X2x4JTNka3dkLTIzMzMzNjk4MzMwMzA3MDAlM2Fsb2MtMTkwJTI2ZXZfY3J4JTNkODE1NzAxNjU0ODg4NjYlMjZldl9tdCUzZGUlMjZldl9kdmMlM2RjJTI2ZXZfcGh5JTNkMTEwOTExJTI2ZXZfbG9jJTNkJTI2ZXZfY3glM2Q1ODE0MzA0NTIlMjZldl9heCUzZDEzMDUxMjE2MDM0MzgzNDUlMjZldl9leCUzZCUyNmV2X2VmaWQlM2Q3ODJjNDAyNjRhZWIxMGE2Zjg2NTJhMzRlYWNiMzJiYSUzYUclM2FzJTI2dXJsJTNkaHR0cHMlMjUzQSUyNTJGJTI1MkZ3d3cuZm9yZC5jb20lMjUyRnN1dnMlMjUyRmJyb25jby1zcG9ydCUyNTJGJTI1M0ZsZWFkc291cmNlJTI1M0RuYXRpb25hbC1wYWlkc2VhcmNoJTI1MjZzZWFyY2hpZCUyNTNENTgxNDMwNDUyJTI1N0MxMzA1MTIxNjAzNDM4MzQ1JTI1N0Nrd2QtMjMzMzM2OTgzMzAzMDcwMCUyNTNBbG9jLTE5MCUyNTI2ZmNpZCUyNTNEcHNlXzU4MTQzMDQ1Ml9iaW5nJTI1MjZzX2t3Y2lkJTI1M0RBTCEyNTE5ITEwITgxNTcwMTY1NDg4ODY2ISEhITIzMzMzNjk4MzMwMzA3MDAhITU4MTQzMDQ1MiExMzA1MTIxNjAzNDM4MzQ1JTI1MjZlZl9pZCUyNTNENzgyYzQwMjY0YWViMTBhNmY4NjUyYTM0ZWFjYjMyYmElMjUzQUclMjUzQXMlMjUyNmdjbGlkJTI1M0Q3ODJjNDAyNjRhZWIxMGE2Zjg2NTJhMzRlYWNiMzJiYSUyNTI2Z2Nsc3JjJTI1M0QzcC5kcyUyNTI2JTI2bXNjbGtpZCUzZDc4MmM0MDI2NGFlYjEwYTZmODY1MmEzNGVhY2IzMmJh%26rlid%3D782c40264aeb10a6f8652a34eacb32ba&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                        - text: Official Ford® Offers
                    - link "Sponsored" [ref=e294]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=33aa0c49-78f5-49bc-bd1d-f6ac056d9096&bdc=pb&bidId=4&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=jhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=10d6f70e-95ea-4452-a8d8-6d398064bc62&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8IPneexU8fmHAMaMeLSliAjVUCUy7mt7xaYKMux1h6QsgTfr1Pp5EFghSMmEGDwok9DfRo1avABSJRBt-o6UecjLnFeg0YZ0Q7EkmIJ0wH_TzHy3Y4UOP95yQkl3kYI6Bywj2tIz_kNBSOalhdwYxolIWvzuZ70Ve6YajkFeTX5Q0TeVGBVFPViNMT1XWdz2PsBLgOw%26u%3DaHR0cHMlM2ElMmYlMmZwaXhlbC5ldmVyZXN0dGVjaC5uZXQlMmYyNTE5JTJmY3ElM2Zldl9zaWQlM2QxMCUyNmV2X2xuJTNka2V5d29yZCUyNmV2X2x0eCUzZCUyNmV2X2x4JTNka3dkLTIzMzMzNjk4MzMwMzA3MDAlM2Fsb2MtMTkwJTI2ZXZfY3J4JTNkODE1NzAxNjU0ODg4NjYlMjZldl9tdCUzZGUlMjZldl9kdmMlM2RjJTI2ZXZfcGh5JTNkMTEwOTExJTI2ZXZfbG9jJTNkJTI2ZXZfY3glM2Q1ODE0MzA0NTIlMjZldl9heCUzZDEzMDUxMjE2MDM0MzgzNDUlMjZldl9leCUzZCUyNmV2X2VmaWQlM2Q3ODJjNDAyNjRhZWIxMGE2Zjg2NTJhMzRlYWNiMzJiYSUzYUclM2FzJTI2dXJsJTNkaHR0cHMlMjUzQSUyNTJGJTI1MkZ3d3cuZm9yZC5jb20lMjUyRnN1dnMlMjUyRmJyb25jby1zcG9ydCUyNTJGJTI1M0ZsZWFkc291cmNlJTI1M0RuYXRpb25hbC1wYWlkc2VhcmNoJTI1MjZzZWFyY2hpZCUyNTNENTgxNDMwNDUyJTI1N0MxMzA1MTIxNjAzNDM4MzQ1JTI1N0Nrd2QtMjMzMzM2OTgzMzAzMDcwMCUyNTNBbG9jLTE5MCUyNTI2ZmNpZCUyNTNEcHNlXzU4MTQzMDQ1Ml9iaW5nJTI1MjZzX2t3Y2lkJTI1M0RBTCEyNTE5ITEwITgxNTcwMTY1NDg4ODY2ISEhITIzMzMzNjk4MzMwMzA3MDAhITU4MTQzMDQ1MiExMzA1MTIxNjAzNDM4MzQ1JTI1MjZlZl9pZCUyNTNENzgyYzQwMjY0YWViMTBhNmY4NjUyYTM0ZWFjYjMyYmElMjUzQUclMjUzQXMlMjUyNmdjbGlkJTI1M0Q3ODJjNDAyNjRhZWIxMGE2Zjg2NTJhMzRlYWNiMzJiYSUyNTI2Z2Nsc3JjJTI1M0QzcC5kcyUyNTI2JTI2bXNjbGtpZCUzZDc4MmM0MDI2NGFlYjEwYTZmODY1MmEzNGVhY2IzMmJh%26rlid%3D782c40264aeb10a6f8652a34eacb32ba&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                  - button "See more" [ref=e296]:
                    - img [ref=e297]
            - article [ref=e298] [cursor=pointer]:
              - generic [ref=e303]:
                - generic [ref=e305]:
                  - link "Top stories" [ref=e307]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a12a01e13e94b7aa82d68814c9a2797&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e308]
                  - button "More options" [ref=e310]
                - list [ref=e313]:
                  - listitem "Who was Nasire Best? Secret Service identifies White House shooting suspect — Top 5 updates on 21-year-old gunman" [ref=e314]:
                    - generic [ref=e315]:
                      - generic [ref=e316]:
                        - generic:
                          - generic [ref=e317]: Breaking
                          - img [ref=e318]
                        - generic [ref=e319]:
                          - generic: Live Mint ·4h
                      - generic [ref=e320]: Who was Nasire Best? Secret Service identifies White House shooting suspect — Top 5 updates on 21-year-old gunman
                  - listitem "Has Iran agreed to surrender enriched uranium and reopen Hormuz in new US deal?" [ref=e321]:
                    - generic [ref=e322]:
                      - generic [ref=e323]:
                        - img [ref=e324]
                        - generic [ref=e325]:
                          - generic: WION ·now
                      - generic [ref=e326]: Has Iran agreed to surrender enriched uranium and reopen Hormuz in new US deal?
                  - listitem "Twisha Sharma's husband recalls dispute over Ajmer trip hours before her death" [ref=e327]:
                    - generic [ref=e328]:
                      - generic [ref=e329]:
                        - img [ref=e330]
                        - generic [ref=e331]:
                          - generic: NDTV 24x7 ·21m
                      - generic [ref=e332]: Twisha Sharma's husband recalls dispute over Ajmer trip hours before her death
                - generic [ref=e334]:
                  - generic [ref=e335]:
                    - generic "Previous" [ref=e336]:
                      - button "Previous" [ref=e337]
                    - tablist [ref=e339]:
                      - tab "tab-0" [selected] [ref=e340]
                      - tab "tab-1" [ref=e342]
                      - tab "tab-2" [ref=e344]
                    - generic "Next" [ref=e346]:
                      - button "Next" [ref=e347]
                  - link "See more" [ref=e349]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a12a01e13e94b7aa82d68814c9a2797&ocid=hpmsn
            - article [ref=e350] [cursor=pointer]:
              - generic [ref=e354]:
                - generic: Sponsored
            - 'article "Paying for Healthcare in Retirement: A Guide for Investors With $1,000,000+" [ref=e355] [cursor=pointer]':
              - generic [ref=e357]:
                - img [ref=e358]
                - generic [ref=e359]:
                  - generic [ref=e360]:
                    - generic [ref=e363]: Fisher Investments
                    - 'link "Paying for Healthcare in Retirement: A Guide for Investors With $1,000,000+, Fisher Investments" [ref=e364]':
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=9dd64d33-58c6-44b8-845e-84ff1366cc0d&bdc=pb&bidId=6&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=jhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=10d6f70e-95ea-4452-a8d8-6d398064bc62&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8SPwhegtn8gMjauLcqOt-ITVUCUxS5Hy8UPW59ZR9ZGjHO8O4P4jdGQPztoKDCHEMatWRPaEI6RQhrkKbV3AiJLj0IVIC9nIQWnTv3bKt9MJBcPUeLmV-A_1WFZxaHr9EIAt3FcgHvwI1zVZZnIStBplV8jJctHoWgOKVVMUbC8MVB4AYeuJjDL1a1T9dZQ6uKEsUNQ%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZmlzaGVyaW52ZXN0bWVudHMuY29tJTJmZW4tdXMlMmZjYW1wYWlnbnMlMmZocGhjJTJmaGUlM2ZwcGNwX3BsYXRmb3JtJTNkYmluZyUyNmNjJTNkMElMMyUyNnBjJTNkTVNOQlEyNUFJNSUyNnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX21lZGl1bSUzZGNwYyUyNnV0bV9jYW1wYWlnbiUzZE1TQU4tUk9OLU1pY3Jvc29mdC1QbGFjZW1lbnRzJTI2dXRtX3Rlcm0lM2RrZXl3b3JkJTI2c2VhcmNocXVlcnklM2RrZXl3b3JkJTI2bXNjbGtpZCUzZDA2ZTJjY2IxOTQ4NDEwYWRhMjkwYTZhMzM0YTQxNjNmJTI2dXRtX2NvbnRlbnQlM2RNU0FOJTI1MjAtJTI1MjBNUyUyNTIwU2l0ZXMlMjUyMC0lMjUyMEJyb2Fk%26rlid%3D06e2ccb1948410ada290a6a334a4163f&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: "Paying for Healthcare in Retirement: A Guide for Investors With $1,000,000+"
                  - link "Sponsored" [ref=e366]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=9dd64d33-58c6-44b8-845e-84ff1366cc0d&bdc=pb&bidId=6&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=jhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=10d6f70e-95ea-4452-a8d8-6d398064bc62&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8SPwhegtn8gMjauLcqOt-ITVUCUxS5Hy8UPW59ZR9ZGjHO8O4P4jdGQPztoKDCHEMatWRPaEI6RQhrkKbV3AiJLj0IVIC9nIQWnTv3bKt9MJBcPUeLmV-A_1WFZxaHr9EIAt3FcgHvwI1zVZZnIStBplV8jJctHoWgOKVVMUbC8MVB4AYeuJjDL1a1T9dZQ6uKEsUNQ%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZmlzaGVyaW52ZXN0bWVudHMuY29tJTJmZW4tdXMlMmZjYW1wYWlnbnMlMmZocGhjJTJmaGUlM2ZwcGNwX3BsYXRmb3JtJTNkYmluZyUyNmNjJTNkMElMMyUyNnBjJTNkTVNOQlEyNUFJNSUyNnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX21lZGl1bSUzZGNwYyUyNnV0bV9jYW1wYWlnbiUzZE1TQU4tUk9OLU1pY3Jvc29mdC1QbGFjZW1lbnRzJTI2dXRtX3Rlcm0lM2RrZXl3b3JkJTI2c2VhcmNocXVlcnklM2RrZXl3b3JkJTI2bXNjbGtpZCUzZDA2ZTJjY2IxOTQ4NDEwYWRhMjkwYTZhMzM0YTQxNjNmJTI2dXRtX2NvbnRlbnQlM2RNU0FOJTI1MjAtJTI1MjBNUyUyNTIwU2l0ZXMlMjUyMC0lMjUyMEJyb2Fk%26rlid%3D06e2ccb1948410ada290a6a334a4163f&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e368]:
                  - img [ref=e369]
            - article [ref=e370] [cursor=pointer]:
              - generic [ref=e376]:
                - generic [ref=e378]:
                  - img "Watchlist suggestions" [ref=e380]
                  - link "Watchlist suggestions" [ref=e381]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e382]
                  - button "More options" [ref=e384]
                - generic [ref=e389]:
                  - link "Nifty Bank NIFTYBANK ‎+1.15%‎ 54,055.35" [ref=e391]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkrnm&ocid=hpmsn
                    - generic [ref=e392]:
                      - generic [ref=e394]: Nifty Bank
                      - generic [ref=e396]: NIFTYBANK
                    - generic [ref=e401]:
                      - generic [ref=e402]: ‎+1.15%‎
                      - generic [ref=e403]: 54,055.35
                    - button "Add to watchlist" [ref=e406]:
                      - img [ref=e407]
                  - link "USD/INR US Dollar/Indian Rupee ‎-0.53%‎ 95.69" [ref=e411]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=avyo8m&ocid=hpmsn
                    - generic [ref=e412]:
                      - generic [ref=e414]: USD/INR
                      - generic [ref=e416]: US Dollar/Indian Rupee
                    - generic [ref=e421]:
                      - generic [ref=e422]: ‎-0.53%‎
                      - generic [ref=e423]: "95.69"
                    - button "Add to watchlist" [ref=e426]:
                      - img [ref=e427]
                  - link "Silver Silver ‎-1.06%‎ 75.92" [ref=e431]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwr7&ocid=hpmsn
                    - generic [ref=e432]:
                      - generic [ref=e434]: Silver
                      - generic [ref=e436]: Silver
                    - generic [ref=e441]:
                      - generic [ref=e442]: ‎-1.06%‎
                      - generic [ref=e443]: "75.92"
                    - button "Add to watchlist" [ref=e446]:
                      - img [ref=e447]
                  - link "ITC Ltd ITC ‎-2.06%‎ 301.70" [ref=e451]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahie2w&ocid=hpmsn
                    - generic [ref=e452]:
                      - generic [ref=e454]: ITC Ltd
                      - generic [ref=e456]: ITC
                    - generic [ref=e461]:
                      - generic [ref=e462]: ‎-2.06%‎
                      - generic [ref=e463]: "301.70"
                    - button "Add to watchlist" [ref=e466]:
                      - img [ref=e467]
                  - link "Yes Bank Ltd YESBANK ‎+1.39%‎ 21.87" [ref=e471]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkpar&ocid=hpmsn
                    - generic [ref=e472]:
                      - generic [ref=e474]: Yes Bank Ltd
                      - generic [ref=e476]: YESBANK
                    - generic [ref=e481]:
                      - generic [ref=e482]: ‎+1.39%‎
                      - generic [ref=e483]: "21.87"
                    - button "Add to watchlist" [ref=e486]:
                      - img [ref=e487]
                - generic [ref=e491]:
                  - generic [ref=e492]:
                    - generic "Previous" [ref=e493]:
                      - button "Previous" [ref=e494]
                    - tablist [ref=e496]:
                      - tab "tab-0" [selected] [ref=e497]
                      - tab "tab-1" [ref=e499]
                      - tab "tab-2" [ref=e501]
                      - tab "tab-3" [ref=e503]
                      - tab "tab-4" [ref=e505]
                      - tab "tab-5"
                      - tab "tab-6"
                    - generic "Next" [ref=e507]:
                      - button "Next" [ref=e508]
                  - link "See watchlist suggestions" [ref=e510]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - article "Iran shuts western airspace as US weighs fresh strikes; Rubio in Delhi flags 'progress' in Tehran talks" [ref=e511] [cursor=pointer]:
              - generic [ref=e513]:
                - img [ref=e514]
                - generic [ref=e515]:
                  - generic [ref=e516]:
                    - generic [ref=e517]:
                      - generic [ref=e518]:
                        - img [ref=e519]
                        - generic [ref=e520]: The Indian Express
                      - generic [ref=e521]: ·
                      - generic [ref=e522]: 15h
                    - link "Iran shuts western airspace as US weighs fresh strikes; Rubio in Delhi flags 'progress' in Tehran talks, The Indian Express" [ref=e523]:
                      - /url: https://www.msn.com/en-in/news/world/iran-shuts-western-airspace-as-us-weighs-fresh-strikes-rubio-in-delhi-flags-progress-in-tehran-talks/ar-AA23TuaZ
                      - text: Iran shuts western airspace as US weighs fresh strikes; Rubio in Delhi flags 'progress' in Tehran talks
                  - generic "Iran shuts western airspace as US weighs fresh strikes; Rubio in Delhi flags 'progress' in Tehran talks" [ref=e526]:
                    - generic [ref=e528]:
                      - generic [ref=e529]:
                        - button "15 Like" [ref=e530]:
                          - generic [ref=e531]:
                            - img [ref=e532]
                            - generic [ref=e534]: "15"
                        - button "Dislike" [ref=e535]:
                          - img [ref=e537]
                      - link "Start the conversation" [ref=e540]:
                        - /url: https://www.msn.com/en-in/news/world/iran-shuts-western-airspace-as-us-weighs-fresh-strikes-rubio-in-delhi-flags-progress-in-tehran-talks/ar-AA23TuaZ#comments
                        - button "Start the conversation" [ref=e541]:
                          - img [ref=e542]
                - generic [ref=e544]:
                  - button "Hide this story" [ref=e545]:
                    - img [ref=e546]
                    - text: Hide this story
                  - button "See more" [ref=e547]:
                    - img [ref=e548]
            - article "Samsung - 42\" Class S90H OLED 4K UHD Smartvision AI Smart Tizen TV (2026)" [ref=e549] [cursor=pointer]:
              - generic [ref=e551]:
                - img [ref=e552]
                - generic [ref=e553]:
                  - generic [ref=e554]:
                    - generic [ref=e557]: Best Buy
                    - link "Samsung - 42\" Class S90H OLED 4K UHD Smartvision AI Smart Tizen TV (2026), Best Buy" [ref=e558]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=85227618-c5b0-430d-8861-2fa5bf788f9b&bdc=pb&bidId=17&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=jhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=10d6f70e-95ea-4452-a8d8-6d398064bc62&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De84zSCqbQYaRa0PkME61hMIDVUCUx6aSqAlZnm88WkODtEW6CG8Sp3O9VUEjKpP3gr6sPZmKK-_HXyZ01b7EoxktTfw4LG7_kmZaZu9k1za4F-7yds7HgB6E5NWnJR-yIQ781iPGMK-oCnZb6OCkz__ar-FXR-uD5gqNKhIrcj-S08fPqFgvc-atljj05aNxNLki9EiA%26u%3DaHR0cHMlM2ElMmYlMmZhZC5kb3VibGVjbGljay5uZXQlMmZzZWFyY2hhZHMlMmZsaW5rJTJmY2xpY2slM2ZsaWQlM2Q1ODcwMDAwODc5NjcyODY2NyUyNmRzX2FfY2lkJTNkNDA1NDg4ODQ0JTI2ZHNfYV9jYWlkJTNkMjE4MjYyNDc3NDElMjYlMjZkc19lX2FkaWQlM2Q3Mzk0MjQ3MjE5MTQ4NyUyNmRzX2VfdGFyZ2V0X2lkJTNkcGxhLTIzMjU3NDE5NzE1OTI0OTIlMjZkc19lX3Byb2R1Y3RfZ3JvdXBfaWQlM2QyMzI1NzQxOTcxNTkyNDkyJTI2ZHNfZV9wcm9kdWN0X2lkJTNkNjY3MTY1OSUyNmRzX2VfcHJvZHVjdF9jb3VudHJ5JTNkVVMlMjZkc19lX3Byb2R1Y3RfbGFuZ3VhZ2UlM2RFTiUyNmRzX2VfcHJvZHVjdF9jaGFubmVsJTNkT25saW5lJTI2ZHNfZV9uZXR3b3JrJTNkYSUyNmRzX3VybF92JTNkMiUyNmRzX2Rlc3RfdXJsJTNkaHR0cHMlM2ElMmYlMmZ3d3cuYmVzdGJ1eS5jb20lMmZwcm9kdWN0JTJmc2Ftc3VuZy00Mi1jbGFzcy1zOTBoLW9sZWQtNGstdWhkLXNtYXJ0dmlzaW9uLWFpLXNtYXJ0LXRpemVuLXR2LTIwMjYlMmZKSkdSRjNRM0wyJTJmc2t1JTJmNjY3MTY1OSUzZnV0bV9zb3VyY2UlM2RmZWVkJTI2ZXh0U3RvcmVJZCUzZCUyNnJlZiUzZDIxMiUyNmxvYyUzZDElMjZnY2xpZCUzZDEwYzkyNTM2NTZiYjE2YTU4YTc0NGYyNGY2OWJkZWZlJTI2Z2Nsc3JjJTNkM3AuZHMlMjZtc2Nsa2lkJTNkMTBjOTI1MzY1NmJiMTZhNThhNzQ0ZjI0ZjY5YmRlZmU%26rlid%3D10c9253656bb16a58a744f24f69bdefe&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Samsung - 42" Class S90H OLED 4K UHD Smartvision AI Smart Tizen TV (2026)
                  - link "Sponsored" [ref=e560]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=85227618-c5b0-430d-8861-2fa5bf788f9b&bdc=pb&bidId=17&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=jhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=10d6f70e-95ea-4452-a8d8-6d398064bc62&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De84zSCqbQYaRa0PkME61hMIDVUCUx6aSqAlZnm88WkODtEW6CG8Sp3O9VUEjKpP3gr6sPZmKK-_HXyZ01b7EoxktTfw4LG7_kmZaZu9k1za4F-7yds7HgB6E5NWnJR-yIQ781iPGMK-oCnZb6OCkz__ar-FXR-uD5gqNKhIrcj-S08fPqFgvc-atljj05aNxNLki9EiA%26u%3DaHR0cHMlM2ElMmYlMmZhZC5kb3VibGVjbGljay5uZXQlMmZzZWFyY2hhZHMlMmZsaW5rJTJmY2xpY2slM2ZsaWQlM2Q1ODcwMDAwODc5NjcyODY2NyUyNmRzX2FfY2lkJTNkNDA1NDg4ODQ0JTI2ZHNfYV9jYWlkJTNkMjE4MjYyNDc3NDElMjYlMjZkc19lX2FkaWQlM2Q3Mzk0MjQ3MjE5MTQ4NyUyNmRzX2VfdGFyZ2V0X2lkJTNkcGxhLTIzMjU3NDE5NzE1OTI0OTIlMjZkc19lX3Byb2R1Y3RfZ3JvdXBfaWQlM2QyMzI1NzQxOTcxNTkyNDkyJTI2ZHNfZV9wcm9kdWN0X2lkJTNkNjY3MTY1OSUyNmRzX2VfcHJvZHVjdF9jb3VudHJ5JTNkVVMlMjZkc19lX3Byb2R1Y3RfbGFuZ3VhZ2UlM2RFTiUyNmRzX2VfcHJvZHVjdF9jaGFubmVsJTNkT25saW5lJTI2ZHNfZV9uZXR3b3JrJTNkYSUyNmRzX3VybF92JTNkMiUyNmRzX2Rlc3RfdXJsJTNkaHR0cHMlM2ElMmYlMmZ3d3cuYmVzdGJ1eS5jb20lMmZwcm9kdWN0JTJmc2Ftc3VuZy00Mi1jbGFzcy1zOTBoLW9sZWQtNGstdWhkLXNtYXJ0dmlzaW9uLWFpLXNtYXJ0LXRpemVuLXR2LTIwMjYlMmZKSkdSRjNRM0wyJTJmc2t1JTJmNjY3MTY1OSUzZnV0bV9zb3VyY2UlM2RmZWVkJTI2ZXh0U3RvcmVJZCUzZCUyNnJlZiUzZDIxMiUyNmxvYyUzZDElMjZnY2xpZCUzZDEwYzkyNTM2NTZiYjE2YTU4YTc0NGYyNGY2OWJkZWZlJTI2Z2Nsc3JjJTNkM3AuZHMlMjZtc2Nsa2lkJTNkMTBjOTI1MzY1NmJiMTZhNThhNzQ0ZjI0ZjY5YmRlZmU%26rlid%3D10c9253656bb16a58a744f24f69bdefe&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e562]:
                  - img [ref=e563]
            - 'article "White House shooting: 21-year-old Nasire Best, who identified himself as Jesus Christ, shot dead" [ref=e564] [cursor=pointer]':
              - generic [ref=e566]:
                - img [ref=e567]
                - generic [ref=e568]:
                  - generic [ref=e569]:
                    - generic [ref=e570]:
                      - generic [ref=e571]:
                        - img [ref=e572]
                        - generic [ref=e573]: The Times of India
                      - generic [ref=e574]: ·
                      - generic [ref=e575]: 4h
                    - 'link "White House shooting: 21-year-old Nasire Best, who identified himself as Jesus Christ, shot dead, The Times of India" [ref=e576]':
                      - /url: https://www.msn.com/en-in/news/world/white-house-shooting-21-year-old-nasire-best-who-identified-himself-as-jesus-christ-shot-dead/ar-AA23Us29
                      - text: "White House shooting: 21-year-old Nasire Best, who identified himself as Jesus Christ, shot dead"
                  - 'generic "White House shooting: 21-year-old Nasire Best, who identified himself as Jesus Christ, shot dead" [ref=e579]':
                    - generic [ref=e581]:
                      - generic [ref=e582]:
                        - button "10 Like" [ref=e583]:
                          - generic [ref=e584]:
                            - img [ref=e585]
                            - generic [ref=e587]: "10"
                        - button "Dislike" [ref=e588]:
                          - img [ref=e590]
                      - link "Start the conversation" [ref=e593]:
                        - /url: https://www.msn.com/en-in/news/world/white-house-shooting-21-year-old-nasire-best-who-identified-himself-as-jesus-christ-shot-dead/ar-AA23Us29#comments
                        - button "Start the conversation" [ref=e594]:
                          - img [ref=e595]
                - generic [ref=e597]:
                  - button "Hide this story" [ref=e598]:
                    - img [ref=e599]
                    - text: Hide this story
                  - button "See more" [ref=e600]:
                    - img [ref=e601]
            - article "Watch what happens when a chimpanzee snaps – even lions back off" [ref=e602] [cursor=pointer]:
              - generic [ref=e604]:
                - generic [ref=e610]:
                  - generic [ref=e611]:
                    - generic [ref=e612]:
                      - generic [ref=e613]:
                        - img [ref=e614]
                        - generic [ref=e615]: Real Science
                      - generic [ref=e616]: ·
                      - generic [ref=e617]: 2w
                    - link "Watch what happens when a chimpanzee snaps – even lions back off, Real Science" [ref=e618]:
                      - /url: https://www.msn.com/en-in/news/world/watch-what-happens-when-a-chimpanzee-snaps-even-lions-back-off/vi-AA22GrDn
                      - text: Watch what happens when a chimpanzee snaps – even lions back off
                  - generic "Watch what happens when a chimpanzee snaps – even lions back off" [ref=e621]:
                    - generic [ref=e623]:
                      - generic [ref=e624]:
                        - button "396 Like" [ref=e625]:
                          - generic [ref=e626]:
                            - img [ref=e627]
                            - generic [ref=e629]: "396"
                        - button "Dislike" [ref=e630]:
                          - img [ref=e632]
                      - link "Start the conversation" [ref=e635]:
                        - /url: https://www.msn.com/en-in/news/world/watch-what-happens-when-a-chimpanzee-snaps-even-lions-back-off/vi-AA22GrDn#comments
                        - button "Start the conversation" [ref=e636]:
                          - img [ref=e637]
                - generic [ref=e639]:
                  - button "Hide this story" [ref=e640]:
                    - img [ref=e641]
                    - text: Hide this story
                  - button "See more" [ref=e642]:
                    - img [ref=e643]
          - generic [ref=e644]:
            - article [ref=e645] [cursor=pointer]:
              - generic [ref=e650]:
                - generic [ref=e652]:
                  - link "Top Engaging News" [ref=e654]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a12a01e13e94b7aa82d68814c9a2797
                    - heading "Top Engaging News" [level=2] [ref=e655]
                  - button "More options" [ref=e657]
                - generic [ref=e659]:
                  - link "The Economic Times 13 Comments 'Would Kasab have got bail too?' Centre’s explosive question to Supreme Court during heated UAPA debate" [ref=e661]:
                    - /url: https://www.msn.com/en-in/news/india/would-kasab-have-got-bail-too-centre-s-explosive-question-to-supreme-court-during-heated-uapa-debate/ar-AA23RFJU
                    - generic [ref=e662]:
                      - img [ref=e663]
                      - generic [ref=e664]: The Economic Times
                      - link "13 Comments" [ref=e666]:
                        - /url: https://www.msn.com/en-in/news/india/would-kasab-have-got-bail-too-centre-s-explosive-question-to-supreme-court-during-heated-uapa-debate/ar-AA23RFJU#comments
                        - img [ref=e667]
                        - paragraph [ref=e668]: "13"
                    - paragraph [ref=e669]: "'Would Kasab have got bail too?' Centre’s explosive question to Supreme Court during heated UAPA debate"
                  - 'link "Times Now 3 Comments Rs 2.87 lakh crore RBI dividend to Centre sparks federalism debate: Punjab minister raises alarm" [ref=e671]':
                    - /url: https://www.msn.com/en-in/news/india/rs-2-87-lakh-crore-rbi-dividend-to-centre-sparks-federalism-debate-punjab-minister-raises-alarm/ar-AA23RQOj
                    - generic [ref=e672]:
                      - img [ref=e673]
                      - generic [ref=e674]: Times Now
                      - link "3 Comments" [ref=e676]:
                        - /url: https://www.msn.com/en-in/news/india/rs-2-87-lakh-crore-rbi-dividend-to-centre-sparks-federalism-debate-punjab-minister-raises-alarm/ar-AA23RQOj#comments
                        - img [ref=e677]
                        - paragraph [ref=e678]: "3"
                    - paragraph [ref=e679]: "Rs 2.87 lakh crore RBI dividend to Centre sparks federalism debate: Punjab minister raises alarm"
                  - link "India Today 7 Comments I went home to saffron Bengal and this is what I saw" [ref=e681]:
                    - /url: https://www.msn.com/en-in/entertainment/tv/i-went-home-to-saffron-bengal-and-this-is-what-i-saw/ar-AA23RXiH
                    - generic [ref=e682]:
                      - img [ref=e683]
                      - generic [ref=e684]: India Today
                      - link "7 Comments" [ref=e686]:
                        - /url: https://www.msn.com/en-in/entertainment/tv/i-went-home-to-saffron-bengal-and-this-is-what-i-saw/ar-AA23RXiH#comments
                        - img [ref=e687]
                        - paragraph [ref=e688]: "7"
                    - paragraph [ref=e689]: I went home to saffron Bengal and this is what I saw
                - generic [ref=e691]:
                  - generic [ref=e692]:
                    - generic "Previous" [ref=e693]:
                      - button "Previous" [ref=e694]
                    - tablist [ref=e696]:
                      - tab "tab-0" [selected] [ref=e697]
                      - tab "tab-1" [ref=e699]
                      - tab "tab-2" [ref=e701]
                    - generic "Next" [ref=e703]:
                      - button "Next" [ref=e704]
                  - link "See more" [ref=e706]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a12a01e13e94b7aa82d68814c9a2797
            - article [ref=e707] [cursor=pointer]:
              - generic [ref=e713]:
                - generic [ref=e715]:
                  - link "Moses Lake" [ref=e717]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington
                    - heading "Moses Lake" [level=2] [ref=e718]
                  - button "My location" [ref=e719]
                  - button "More options" [ref=e721]
                - generic [ref=e725]:
                  - generic [ref=e726]:
                    - generic [ref=e728]:
                      - link "Mostly clear" [ref=e729]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington
                        - img "Mostly clear" [ref=e730]
                      - link "19°C" [ref=e731]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington
                        - generic [ref=e732]: ‎19‎
                        - generic [ref=e734]: ‎°C‎
                    - generic [ref=e736]:
                      - link "Temperatures to rise next Wednesday" [ref=e738]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington
                        - text: Temperatures to rise next Wednesday
                      - link "See full forecast" [ref=e740]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington
                        - img "arrow" [ref=e741]
                  - link "Weather forecast Today High temperature 29° Low temperature 13° Weather forecast Sun High temperature 29° Low temperature 12° Weather forecast Mon High temperature 25° Low temperature 9° Weather forecast Tue High temperature 19° Low temperature 11° Weather forecast Wed High temperature 25° Low temperature 12°" [ref=e743]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington
                    - list [ref=e744]:
                      - listitem [ref=e745]:
                        - generic "Weather forecast Today High temperature 29° Low temperature 13°" [ref=e746]:
                          - link "Weather forecast Today High temperature 29° Low temperature 13°" [ref=e747]:
                            - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington
                            - generic:
                              - generic:
                                - generic "Today"
                                - generic:
                                  - img "Partly sunny"
                                - generic:
                                  - generic "High temperature 29°": ‎29°‎
                                  - generic "Low temperature 13°": ‎13°‎
                      - listitem [ref=e748]:
                        - generic "Weather forecast Sun High temperature 29° Low temperature 12°" [ref=e749]:
                          - link "Weather forecast Sun High temperature 29° Low temperature 12°" [ref=e750]:
                            - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington
                            - generic:
                              - generic:
                                - generic "Sun"
                                - generic:
                                  - img "Sunny"
                                - generic:
                                  - generic "High temperature 29°": ‎29°‎
                                  - generic "Low temperature 12°": ‎12°‎
                      - listitem [ref=e751]:
                        - generic "Weather forecast Mon High temperature 25° Low temperature 9°" [ref=e752]:
                          - link "Weather forecast Mon High temperature 25° Low temperature 9°" [ref=e753]:
                            - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington
                            - generic:
                              - generic:
                                - generic "Mon"
                                - generic:
                                  - img "Partly sunny"
                                - generic:
                                  - generic "High temperature 25°": ‎25°‎
                                  - generic "Low temperature 9°": ‎9°‎
                      - listitem [ref=e754]:
                        - generic "Weather forecast Tue High temperature 19° Low temperature 11°" [ref=e755]:
                          - link "Weather forecast Tue High temperature 19° Low temperature 11°" [ref=e756]:
                            - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington
                            - generic:
                              - generic:
                                - generic "Tue"
                                - generic:
                                  - img "Partly sunny"
                                - generic:
                                  - generic "High temperature 19°": ‎19°‎
                                  - generic "Low temperature 11°": ‎11°‎
                      - listitem [ref=e757]:
                        - generic "Weather forecast Wed High temperature 25° Low temperature 12°" [ref=e758]:
                          - link "Weather forecast Wed High temperature 25° Low temperature 12°" [ref=e759]:
                            - /url: https://www.msn.com/en-in/weather/forecast/in-Moses-Lake,Washington
                            - generic:
                              - generic:
                                - generic "Wed"
                                - generic:
                                  - img "Partly sunny"
                                - generic:
                                  - generic "High temperature 25°": ‎25°‎
                                  - generic "Low temperature 12°": ‎12°‎
                - button "See full forecast" [ref=e762]
            - 'article "Viral AI photo trend: How to create your ''childhood self'' portrait, check the exact prompts to try now" [ref=e763] [cursor=pointer]':
              - generic [ref=e765]:
                - img [ref=e766]
                - generic [ref=e767]:
                  - generic [ref=e768]:
                    - generic [ref=e769]:
                      - generic [ref=e770]:
                        - img [ref=e771]
                        - generic [ref=e772]: The Economic Times
                      - generic [ref=e773]: ·
                      - generic [ref=e774]: 3w
                    - 'link "Viral AI photo trend: How to create your ''childhood self'' portrait, check the exact prompts to try now, The Economic Times" [ref=e775]':
                      - /url: https://www.msn.com/en-in/money/news/viral-ai-photo-trend-how-to-create-your-childhood-self-portrait-check-the-exact-prompts-to-try-now/ar-AA22a7nr
                      - text: "Viral AI photo trend: How to create your 'childhood self' portrait, check the exact prompts to try now"
                  - 'generic "Viral AI photo trend: How to create your ''childhood self'' portrait, check the exact prompts to try now" [ref=e778]':
                    - generic [ref=e780]:
                      - generic [ref=e781]:
                        - button "466 Like" [ref=e782]:
                          - generic [ref=e783]:
                            - img [ref=e784]
                            - generic [ref=e786]: "466"
                        - button "Dislike" [ref=e787]:
                          - img [ref=e789]
                      - link "View comments 5 Comment" [ref=e792]:
                        - /url: https://www.msn.com/en-in/money/news/viral-ai-photo-trend-how-to-create-your-childhood-self-portrait-check-the-exact-prompts-to-try-now/ar-AA22a7nr#comments
                        - button "View comments 5 Comment" [ref=e793]:
                          - img [ref=e794]
                        - generic [ref=e796]: "5"
                - generic [ref=e797]:
                  - button "Hide this story" [ref=e798]:
                    - img [ref=e799]
                    - text: Hide this story
                  - button "See more" [ref=e800]:
                    - img [ref=e801]
            - article "Courtney Stodden calls marriage to Doug Hutchison \"Adult trauma in plain sight\"" [ref=e802] [cursor=pointer]:
              - generic [ref=e804]:
                - img [ref=e805]
                - generic [ref=e806]:
                  - generic [ref=e807]:
                    - generic [ref=e808]:
                      - generic [ref=e809]:
                        - img [ref=e810]
                        - generic [ref=e811]: NDTV 24x7
                      - generic [ref=e812]: ·
                      - generic [ref=e813]: 1d
                    - link "Courtney Stodden calls marriage to Doug Hutchison \"Adult trauma in plain sight\", NDTV 24x7" [ref=e814]:
                      - /url: https://www.msn.com/en-in/news/world/courtney-stodden-calls-marriage-to-doug-hutchison-adult-trauma-in-plain-sight/ar-AA23OCA7
                      - text: Courtney Stodden calls marriage to Doug Hutchison "Adult trauma in plain sight"
                  - generic "Courtney Stodden calls marriage to Doug Hutchison \"Adult trauma in plain sight\"" [ref=e817]:
                    - generic [ref=e819]:
                      - generic [ref=e820]:
                        - button "5 Like" [ref=e821]:
                          - generic [ref=e822]:
                            - img [ref=e823]
                            - generic [ref=e825]: "5"
                        - button "Dislike" [ref=e826]:
                          - img [ref=e828]
                      - link "Start the conversation" [ref=e831]:
                        - /url: https://www.msn.com/en-in/news/world/courtney-stodden-calls-marriage-to-doug-hutchison-adult-trauma-in-plain-sight/ar-AA23OCA7#comments
                        - button "Start the conversation" [ref=e832]:
                          - img [ref=e833]
                - generic [ref=e835]:
                  - button "Hide this story" [ref=e836]:
                    - img [ref=e837]
                    - text: Hide this story
                  - button "See more" [ref=e838]:
                    - img [ref=e839]
            - article [ref=e840] [cursor=pointer]
            - 'article "Breaking news: Petrol, diesel and CNG prices hiked again across India" [ref=e847] [cursor=pointer]':
              - generic [ref=e849]:
                - generic [ref=e853]:
                  - generic [ref=e854]:
                    - generic [ref=e855]:
                      - generic [ref=e856]:
                        - img [ref=e857]
                        - generic [ref=e858]: ABP - Live
                      - generic [ref=e859]: ·
                      - generic [ref=e860]: 20h
                    - 'link "Breaking news: Petrol, diesel and CNG prices hiked again across India, ABP - Live" [ref=e861]':
                      - /url: https://www.msn.com/en-in/news/india/breaking-news-petrol-diesel-and-cng-prices-hiked-again-across-india/vi-AA23R6bV
                      - text: "Breaking news: Petrol, diesel and CNG prices hiked again across India"
                  - 'generic "Breaking news: Petrol, diesel and CNG prices hiked again across India" [ref=e864]':
                    - generic [ref=e866]:
                      - generic [ref=e867]:
                        - button "83 Like" [ref=e868]:
                          - generic [ref=e869]:
                            - img [ref=e870]
                            - generic [ref=e872]: "83"
                        - button "Dislike" [ref=e873]:
                          - img [ref=e875]
                      - link "Start the conversation" [ref=e878]:
                        - /url: https://www.msn.com/en-in/news/india/breaking-news-petrol-diesel-and-cng-prices-hiked-again-across-india/vi-AA23R6bV#comments
                        - button "Start the conversation" [ref=e879]:
                          - img [ref=e880]
                - generic [ref=e882]:
                  - button "Hide this story" [ref=e883]:
                    - img [ref=e884]
                    - text: Hide this story
                  - button "See more" [ref=e885]:
                    - img [ref=e886]
            - article [ref=e887] [cursor=pointer]
            - article [ref=e894] [cursor=pointer]:
              - generic [ref=e899]:
                - generic [ref=e901]:
                  - link "Games" [ref=e903]:
                    - /url: https://www.msn.com/en-in/play
                    - heading "Games" [level=2] [ref=e904]
                  - button "More options" [ref=e906]
                - list [ref=e910]:
                  - generic:
                    - listitem [ref=e911]:
                      - 'link "TropicVille: Merge & Chill" [ref=e912]':
                        - /url: https://www.msn.com/en-in/play/games/tropicville-merge--chill/cg-9pf1t08q15q1?ocid=hpmsn&cvid=6a12a01e13e94b7aa82d68814c9a2797&ei=7
                        - generic [ref=e913]:
                          - 'img "TropicVille: Merge & Chill"'
                    - listitem [ref=e914]:
                      - link "Cut the Rope 2" [ref=e915]:
                        - /url: https://www.msn.com/en-in/play/games/cut-the-rope-2/cg-9ng73zbcqwxn?ocid=hpmsn&cvid=6a12a01e13e94b7aa82d68814c9a2797&ei=7
                        - generic [ref=e916]:
                          - img "Cut the Rope 2"
                    - listitem [ref=e917]:
                      - link "Blox Slider" [ref=e918]:
                        - /url: https://www.msn.com/en-in/play/games/blox-slider/cg-9nz2g54dvb12?ocid=hpmsn&cvid=6a12a01e13e94b7aa82d68814c9a2797&ei=7
                        - generic [ref=e919]:
                          - img "Blox Slider"
                    - listitem [ref=e920]:
                      - link "Yarn Fever" [ref=e921]:
                        - /url: https://www.msn.com/en-in/play/games/yarn-fever/cg-9nqn9tbhg8t9?ocid=hpmsn&cvid=6a12a01e13e94b7aa82d68814c9a2797&ei=7
                        - generic [ref=e922]:
                          - img "Yarn Fever"
                    - listitem [ref=e923]:
                      - link "Sudoku Master" [ref=e924]:
                        - /url: https://www.msn.com/en-in/play/games/sudoku-master/cg-9nsq1zfk0z36?ocid=hpmsn&cvid=6a12a01e13e94b7aa82d68814c9a2797&ei=7
                        - generic [ref=e925]:
                          - img "Sudoku Master"
                    - listitem [ref=e926]:
                      - link "Video Poker Multihand" [ref=e927]:
                        - /url: https://www.msn.com/en-in/play/games/video-poker-multihand/cg-9nzf23d88vd7?ocid=hpmsn&cvid=6a12a01e13e94b7aa82d68814c9a2797&ei=7
                        - generic [ref=e928]:
                          - img "Video Poker Multihand"
                    - listitem [ref=e929]:
                      - link "Solitaire Classic" [ref=e930]:
                        - /url: https://www.msn.com/en-in/play/games/solitaire-classic/cg-9nw9cpw514b6?ocid=hpmsn&cvid=6a12a01e13e94b7aa82d68814c9a2797&ei=7
                        - generic [ref=e931]:
                          - img "Solitaire Classic"
                    - listitem [ref=e932]:
                      - 'link "Water Sort Quest : Mission" [ref=e933]':
                        - /url: https://www.msn.com/en-in/play/games/water-sort-quest--mission/cg-9pfv0gvk3xh9?ocid=hpmsn&cvid=6a12a01e13e94b7aa82d68814c9a2797&ei=7
                        - generic [ref=e934]:
                          - 'img "Water Sort Quest : Mission"'
                    - listitem [ref=e935]:
                      - link "Sudoku Classic" [ref=e936]:
                        - /url: https://www.msn.com/en-in/play/games/sudoku-classic/cg-9n8b4qqvn5m6?ocid=hpmsn&cvid=6a12a01e13e94b7aa82d68814c9a2797&ei=7
                        - generic [ref=e937]:
                          - img "Sudoku Classic"
                - generic [ref=e939]:
                  - generic [ref=e940]:
                    - generic "Previous" [ref=e941]:
                      - button "Previous" [ref=e942]
                    - tablist [ref=e944]:
                      - tab "tab-0" [selected] [ref=e945]
                      - tab "tab-1" [ref=e947]
                    - generic "Next" [ref=e949]:
                      - button "Next" [ref=e950]
                  - link "Explore more games" [ref=e952]:
                    - /url: https://www.msn.com/en-in/play
          - article [ref=e954]
          - generic [ref=e956]:
            - article [ref=e957] [cursor=pointer]:
              - generic [ref=e962]:
                - generic [ref=e963]:
                  - generic [ref=e964]:
                    - link "Recommended videos" [ref=e965]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e966]
                    - link "Recommended videos" [ref=e969]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e970]:
                    - generic:
                      - link "See more" [ref=e971]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e972]:
                        - button "More options" [ref=e973]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e975]:
                  - generic [ref=e977]:
                    - generic [ref=e979]:
                      - generic:
                        - article [ref=e982]:
                          - generic [ref=e983]:
                            - img "Rare 'Albino Russell's Viper' Found in Pune's Bhor" [ref=e985]
                            - generic [ref=e987]: 00:39
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e988]:
                              - generic [ref=e989]:
                                - img "NDTV 24x7" [ref=e990]
                                - generic [ref=e991]:
                                  - generic:
                                    - generic "NDTV 24x7" [ref=e992]
                                    - generic [ref=e993]: ·
                                    - generic [ref=e994]: 1d
                              - link "Rare 'albino Russell's viper' found in Pune's Bhor" [ref=e995]:
                                - /url: https://www.msn.com/en-in/news/india/rare-albino-russell-s-viper-found-in-pune-s-bhor/vi-AA23PDX7?ocid=hpmsn
                                - heading "Rare 'albino Russell's viper' found in Pune's Bhor" [level=2] [ref=e996]:
                                  - generic: Rare 'albino Russell's viper' found in Pune's Bhor
                            - button "See more" [ref=e1000]
                        - article "Army orders inquiry after Cheetah helicopter carrying senior officers crashes near Leh | Watch" [ref=e1003]:
                          - generic [ref=e1004]:
                            - img "Army Orders Inquiry After Cheetah Helicopter Carrying Senior Officers Crashes Near Leh | Watch" [ref=e1006]
                            - generic [ref=e1008]: 03:48
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1009]:
                              - generic [ref=e1010]:
                                - img "The Times of India" [ref=e1011]
                                - generic [ref=e1012]:
                                  - generic:
                                    - generic "The Times of India" [ref=e1013]
                                    - generic [ref=e1014]: ·
                                    - generic [ref=e1015]: 13h
                              - link "Army orders inquiry after Cheetah helicopter carrying senior officers crashes near Leh | Watch" [ref=e1016]:
                                - /url: https://www.msn.com/en-in/news/india/army-orders-inquiry-after-cheetah-helicopter-carrying-senior-officers-crashes-near-leh-watch/vi-AA23SB8C?ocid=hpmsn
                                - heading "Army orders inquiry after Cheetah helicopter carrying senior officers crashes near Leh | Watch" [level=2] [ref=e1017]:
                                  - generic: Army orders inquiry after Cheetah helicopter carrying senior officers crashes near Leh | Watch
                            - button "See more" [ref=e1021]
                        - article [ref=e1024]:
                          - generic [ref=e1025]:
                            - 'img "Breaking News: Heavy Rain Triggers Massive Traffic Jam in Pune" [ref=e1027]'
                            - generic [ref=e1029]: 00:42
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1030]:
                              - generic [ref=e1031]:
                                - img "ABP - Live" [ref=e1032]
                                - generic [ref=e1033]:
                                  - generic:
                                    - generic "ABP - Live" [ref=e1034]
                                    - generic [ref=e1035]: ·
                                    - generic [ref=e1036]: 20h
                              - 'link "Breaking news: Heavy rain triggers massive traffic jam in Pune" [ref=e1037]':
                                - /url: https://www.msn.com/en-in/news/india/breaking-news-heavy-rain-triggers-massive-traffic-jam-in-pune/vi-AA23Rqdt?ocid=hpmsn
                                - 'heading "Breaking news: Heavy rain triggers massive traffic jam in Pune" [level=2] [ref=e1038]':
                                  - generic: "Breaking news: Heavy rain triggers massive traffic jam in Pune"
                            - button "See more" [ref=e1042]
                        - article "Political row intensifies in West Bengal after BJP government cuts Bakri Eid holiday to one day" [ref=e1045]:
                          - generic [ref=e1046]:
                            - img "Political Row Intensifies in West Bengal After BJP Government Cuts Bakri Eid Holiday to One Day" [ref=e1048]
                            - generic [ref=e1050]: 07:24
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1051]:
                              - generic [ref=e1052]:
                                - img "News18" [ref=e1053]
                                - generic [ref=e1054]:
                                  - generic:
                                    - generic "News18" [ref=e1055]
                                    - generic [ref=e1056]: ·
                                    - generic [ref=e1057]: 20h
                              - link "Political row intensifies in West Bengal after BJP government cuts Bakri Eid holiday to one day" [ref=e1058]:
                                - /url: https://www.msn.com/en-in/video/news/political-row-intensifies-in-west-bengal-after-bjp-government-cuts-bakri-eid-holiday-to-one-day/vi-AA23Tu3c?ocid=hpmsn
                                - heading "Political row intensifies in West Bengal after BJP government cuts Bakri Eid holiday to one day" [level=2] [ref=e1059]:
                                  - generic: Political row intensifies in West Bengal after BJP government cuts Bakri Eid holiday to one day
                            - button "See more" [ref=e1063]
                        - article [ref=e1066]:
                          - generic [ref=e1067]:
                            - img "Watch What Happens When Metal Bones Face a 150 MPH Baseball" [ref=e1069]
                            - generic [ref=e1071]: 43:00
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1072]:
                              - generic [ref=e1073]:
                                - img "Hacksmith Industries" [ref=e1074]
                                - generic [ref=e1075]:
                                  - generic:
                                    - generic "Hacksmith Industries" [ref=e1076]
                                    - generic [ref=e1077]: ·
                                    - generic [ref=e1078]: 2w
                              - link "Watch what happens when metal bones face a 150 MPH baseball" [ref=e1079]:
                                - /url: https://www.msn.com/en-in/news/india/watch-what-happens-when-metal-bones-face-a-150-mph-baseball/vi-AA1YtVGC?ocid=hpmsn
                                - heading "Watch what happens when metal bones face a 150 MPH baseball" [level=2] [ref=e1080]:
                                  - generic: Watch what happens when metal bones face a 150 MPH baseball
                            - button "See more" [ref=e1084]
                        - 'article "West Asia conflict: India waives customs duty on 40 petrochemicals till 30 June" [ref=e1087]':
                          - generic [ref=e1088]:
                            - 'img "West Asia Conflict: India waives customs duty on 40 petrochemicals till 30 June" [ref=e1090]'
                            - generic [ref=e1092]: 03:53
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1093]:
                              - generic [ref=e1094]:
                                - img "The Economic Times" [ref=e1095]
                                - generic "The Economic Times" [ref=e1097]
                              - 'link "West Asia conflict: India waives customs duty on 40 petrochemicals till 30 June" [ref=e1098]':
                                - /url: https://www.msn.com/en-in/news/india/west-asia-conflict-india-waives-customs-duty-on-40-petrochemicals-till-30-june/vi-AA201Ms4?ocid=hpmsn
                                - 'heading "West Asia conflict: India waives customs duty on 40 petrochemicals till 30 June" [level=2] [ref=e1099]':
                                  - generic: "West Asia conflict: India waives customs duty on 40 petrochemicals till 30 June"
                            - button "See more" [ref=e1103]
                        - article "Norwegian press ignored Uyghur camps? Heated NDTV debate with Helle Lyng" [ref=e1106]:
                          - generic [ref=e1107]:
                            - img "\"Norwegian Press Ignored Uyghur Camps?\" Heated NDTV Debate With Helle Lyng" [ref=e1109]
                            - generic [ref=e1111]: 02:06
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1112]:
                              - generic [ref=e1113]:
                                - img "NDTV 24x7" [ref=e1114]
                                - generic [ref=e1115]:
                                  - generic:
                                    - generic "NDTV 24x7" [ref=e1116]
                                    - generic [ref=e1117]: ·
                                    - generic [ref=e1118]: 3d
                              - link "Norwegian press ignored Uyghur camps? Heated NDTV debate with Helle Lyng" [ref=e1119]:
                                - /url: https://www.msn.com/en-in/news/world/norwegian-press-ignored-uyghur-camps-heated-ndtv-debate-with-helle-lyng/vi-AA23FCGC?ocid=hpmsn
                                - heading "Norwegian press ignored Uyghur camps? Heated NDTV debate with Helle Lyng" [level=2] [ref=e1120]:
                                  - generic: Norwegian press ignored Uyghur camps? Heated NDTV debate with Helle Lyng
                            - button "See more" [ref=e1124]
                        - article "Tabu gifted gold bangles to Saroj Khan after shooting iconic 'Rang De' song, recalls dance artiste" [ref=e1127]:
                          - generic [ref=e1128]:
                            - img "Tabu gifted gold bangles to Saroj Khan after shooting iconic ‘Rang De’ song, recalls dance artiste" [ref=e1130]
                            - generic [ref=e1132]: 04:23
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1133]:
                              - generic [ref=e1134]:
                                - img "The Times of India" [ref=e1135]
                                - generic [ref=e1136]:
                                  - generic:
                                    - generic "The Times of India" [ref=e1137]
                                    - generic [ref=e1138]: ·
                                    - generic [ref=e1139]: 2d
                              - link "Tabu gifted gold bangles to Saroj Khan after shooting iconic 'Rang De' song, recalls dance artiste" [ref=e1140]:
                                - /url: https://www.msn.com/en-in/entertainment/bollywood/tabu-gifted-gold-bangles-to-saroj-khan-after-shooting-iconic-rang-de-song-recalls-dance-artiste/vi-AA23JcpK?ocid=hpmsn
                                - heading "Tabu gifted gold bangles to Saroj Khan after shooting iconic 'Rang De' song, recalls dance artiste" [level=2] [ref=e1141]:
                                  - generic: Tabu gifted gold bangles to Saroj Khan after shooting iconic 'Rang De' song, recalls dance artiste
                            - button "See more" [ref=e1145]
                        - 'article "‘Free mein milega’: Iran tells Marco Rubio to take ‘sabhyata ka crash course’ in India" [ref=e1148]':
                          - generic [ref=e1149]:
                            - 'img "‘Free Mein Milega’: Iran Tells Marco Rubio To Take ‘Sabhyata Ka Crash Course’ In India" [ref=e1151]'
                            - generic [ref=e1153]: 03:03
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1154]:
                              - generic [ref=e1155]:
                                - img "The Times of India" [ref=e1156]
                                - generic [ref=e1157]:
                                  - generic:
                                    - generic "The Times of India" [ref=e1158]
                                    - generic [ref=e1159]: ·
                                    - generic [ref=e1160]: 7h
                              - 'link "‘Free mein milega’: Iran tells Marco Rubio to take ‘sabhyata ka crash course’ in India" [ref=e1161]':
                                - /url: https://www.msn.com/en-in/news/india/free-mein-milega-iran-tells-marco-rubio-to-take-sabhyata-ka-crash-course-in-india/vi-AA23TOfd?ocid=hpmsn
                                - 'heading "‘Free mein milega’: Iran tells Marco Rubio to take ‘sabhyata ka crash course’ in India" [level=2] [ref=e1162]':
                                  - generic: "‘Free mein milega’: Iran tells Marco Rubio to take ‘sabhyata ka crash course’ in India"
                            - button "See more" [ref=e1166]
                        - 'article "Inside Kolkata’s Kalighat Temple: The unique bhog of fish, prawns and mutton offered to Goddess Kali" [ref=e1169]':
                          - generic [ref=e1170]:
                            - 'img "Inside Kolkata’s Kalighat Temple: The Unique Bhog Of Fish, Prawns And Mutton Offered To Goddess Kali" [ref=e1172]'
                            - generic [ref=e1174]: 05:28
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1175]:
                              - generic [ref=e1176]:
                                - img "NDTV 24x7" [ref=e1177]
                                - generic [ref=e1178]:
                                  - generic:
                                    - generic "NDTV 24x7" [ref=e1179]
                                    - generic [ref=e1180]: ·
                                    - generic [ref=e1181]: 4w
                              - 'link "Inside Kolkata’s Kalighat Temple: The unique bhog of fish, prawns and mutton offered to Goddess Kali" [ref=e1182]':
                                - /url: https://www.msn.com/en-in/news/india/inside-kolkata-s-kalighat-temple-the-unique-bhog-of-fish-prawns-and-mutton-offered-to-goddess-kali/vi-AA21Isjh?ocid=hpmsn
                                - 'heading "Inside Kolkata’s Kalighat Temple: The unique bhog of fish, prawns and mutton offered to Goddess Kali" [level=2] [ref=e1183]':
                                  - generic: "Inside Kolkata’s Kalighat Temple: The unique bhog of fish, prawns and mutton offered to Goddess Kali"
                            - button "See more" [ref=e1187]
                        - article "Raghav Chadha appointed chairman of petitions committee in Rajya Sabha weeks after joining BJP" [ref=e1190]:
                          - generic [ref=e1191]:
                            - img "Raghav Chadha Appointed Chairman Of Petitions Committee In Rajya Sabha Weeks After Joining BJP" [ref=e1193]
                            - generic [ref=e1195]: 03:03
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1196]:
                              - generic [ref=e1197]:
                                - img "The Times of India" [ref=e1198]
                                - generic [ref=e1199]:
                                  - generic:
                                    - generic "The Times of India" [ref=e1200]
                                    - generic [ref=e1201]: ·
                                    - generic [ref=e1202]: 8h
                              - link "Raghav Chadha appointed chairman of petitions committee in Rajya Sabha weeks after joining BJP" [ref=e1203]:
                                - /url: https://www.msn.com/en-in/news/india/raghav-chadha-appointed-chairman-of-petitions-committee-in-rajya-sabha-weeks-after-joining-bjp/vi-AA23U53N?ocid=hpmsn
                                - heading "Raghav Chadha appointed chairman of petitions committee in Rajya Sabha weeks after joining BJP" [level=2] [ref=e1204]:
                                  - generic: Raghav Chadha appointed chairman of petitions committee in Rajya Sabha weeks after joining BJP
                            - button "See more" [ref=e1208]
                        - 'article "Banaras: Amish Tripathi Reveals the Untold Mysteries Hidden in India’s Most Spiritual City" [ref=e1211]':
                          - generic [ref=e1212]:
                            - 'img "Banaras: Amish Tripathi Reveals the Untold Mysteries Hidden in India’s Most Spiritual City" [ref=e1214]'
                            - generic [ref=e1216]: 24:51
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1217]:
                              - generic [ref=e1218]:
                                - img "The Times of India" [ref=e1219]
                                - generic "The Times of India" [ref=e1221]
                              - 'link "Banaras: Amish Tripathi Reveals the Untold Mysteries Hidden in India’s Most Spiritual City" [ref=e1222]':
                                - /url: https://www.msn.com/en-in/travel/news/banaras-amish-tripathi-reveals-the-untold-mysteries-hidden-in-india-s-most-spiritual-city/vi-AA1Rttz0?ocid=hpmsn
                                - 'heading "Banaras: Amish Tripathi Reveals the Untold Mysteries Hidden in India’s Most Spiritual City" [level=2] [ref=e1223]':
                                  - generic: "Banaras: Amish Tripathi Reveals the Untold Mysteries Hidden in India’s Most Spiritual City"
                            - button "See more" [ref=e1227]
                        - article "Watch a massive grizzly-polar bear hybrid hunt across the Arctic" [ref=e1230]:
                          - generic [ref=e1231]:
                            - img "Watch a Massive Grizzly-Polar Bear Hybrid Hunt Across the Arctic" [ref=e1233]
                            - generic [ref=e1235]: 12:36
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1236]:
                              - generic [ref=e1237]:
                                - img "Real Science" [ref=e1238]
                                - generic [ref=e1239]:
                                  - generic:
                                    - generic "Real Science" [ref=e1240]
                                    - generic [ref=e1241]: ·
                                    - generic [ref=e1242]: 2w
                              - link "Watch a massive grizzly-polar bear hybrid hunt across the Arctic" [ref=e1243]:
                                - /url: https://www.msn.com/en-in/news/india/watch-a-massive-grizzly-polar-bear-hybrid-hunt-across-the-arctic/vi-AA22GGV3?ocid=hpmsn
                                - heading "Watch a massive grizzly-polar bear hybrid hunt across the Arctic" [level=2] [ref=e1244]:
                                  - generic: Watch a massive grizzly-polar bear hybrid hunt across the Arctic
                            - button "See more" [ref=e1248]
                        - article "Sunny Hinduja on his life post Aspirants, self-doubt and why he still seeks validation from his wife" [ref=e1251]:
                          - generic [ref=e1252]:
                            - img "Sunny Hinduja on his life post Aspirants, self-doubt and why he still seeks validation from his wife" [ref=e1254]
                            - generic [ref=e1256]: 12:35
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1257]:
                              - generic [ref=e1258]:
                                - img "The Times of India" [ref=e1259]
                                - generic [ref=e1260]:
                                  - generic:
                                    - generic "The Times of India" [ref=e1261]
                                    - generic [ref=e1262]: ·
                                    - generic [ref=e1263]: 4d
                              - link "Sunny Hinduja on his life post Aspirants, self-doubt and why he still seeks validation from his wife" [ref=e1264]:
                                - /url: https://www.msn.com/en-in/news/india/sunny-hinduja-on-his-life-post-aspirants-self-doubt-and-why-he-still-seeks-validation-from-his-wife/vi-AA23yYtt?ocid=hpmsn
                                - heading "Sunny Hinduja on his life post Aspirants, self-doubt and why he still seeks validation from his wife" [level=2] [ref=e1265]:
                                  - generic: Sunny Hinduja on his life post Aspirants, self-doubt and why he still seeks validation from his wife
                            - button "See more" [ref=e1269]
                        - 'article "''Gandhi is the hero'': Kamal Haasan on the message behind his documentary" [ref=e1272]':
                          - generic [ref=e1273]:
                            - 'img "''Gandhi Is The Hero'': Kamal Haasan On The Message Behind His Documentary" [ref=e1275]'
                            - generic [ref=e1277]: 03:27
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1278]:
                              - generic [ref=e1279]:
                                - img "NDTV 24x7" [ref=e1280]
                                - generic "NDTV 24x7" [ref=e1282]
                              - 'link "''Gandhi is the hero'': Kamal Haasan on the message behind his documentary" [ref=e1283]':
                                - /url: https://www.msn.com/en-in/video/news/gandhi-is-the-hero-kamal-haasan-on-the-message-behind-his-documentary/vi-AA1Vn0tL?ocid=hpmsn
                                - 'heading "''Gandhi is the hero'': Kamal Haasan on the message behind his documentary" [level=2] [ref=e1284]':
                                  - generic: "'Gandhi is the hero': Kamal Haasan on the message behind his documentary"
                            - button "See more" [ref=e1288]
                        - 'article "Norway journalist Helly Lyng | Norway presser episode: Gaurie Dwivedi breaks down the controversy" [ref=e1291]':
                          - generic [ref=e1292]:
                            - 'img "Norway Journalist Helly Lyng | Norway Presser Episode: Gaurie Dwivedi Breaks Down The Controversy" [ref=e1294]'
                            - generic [ref=e1296]: 06:25
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1297]:
                              - generic [ref=e1298]:
                                - img "NDTV 24x7" [ref=e1299]
                                - generic [ref=e1300]:
                                  - generic:
                                    - generic "NDTV 24x7" [ref=e1301]
                                    - generic [ref=e1302]: ·
                                    - generic [ref=e1303]: 21h
                              - 'link "Norway journalist Helly Lyng | Norway presser episode: Gaurie Dwivedi breaks down the controversy" [ref=e1304]':
                                - /url: https://www.msn.com/en-in/news/world/norway-journalist-helly-lyng-norway-presser-episode-gaurie-dwivedi-breaks-down-the-controversy/vi-AA23RQr1?ocid=hpmsn
                                - 'heading "Norway journalist Helly Lyng | Norway presser episode: Gaurie Dwivedi breaks down the controversy" [level=2] [ref=e1305]':
                                  - generic: "Norway journalist Helly Lyng | Norway presser episode: Gaurie Dwivedi breaks down the controversy"
                            - button "See more" [ref=e1309]
                        - article "Marco Rubio's explosive NDTV interview sets stage for key India-US talks" [ref=e1312]:
                          - generic [ref=e1313]:
                            - img "Marco Rubio's Explosive NDTV Interview Sets Stage For Key India-US Talks" [ref=e1315]
                            - generic [ref=e1317]: 33:37
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1318]:
                              - generic [ref=e1319]:
                                - img "NDTV 24x7" [ref=e1320]
                                - generic [ref=e1321]:
                                  - generic:
                                    - generic "NDTV 24x7" [ref=e1322]
                                    - generic [ref=e1323]: ·
                                    - generic [ref=e1324]: 12h
                              - link "Marco Rubio's explosive NDTV interview sets stage for key India-US talks" [ref=e1325]:
                                - /url: https://www.msn.com/en-in/news/world/marco-rubio-s-explosive-ndtv-interview-sets-stage-for-key-india-us-talks/vi-AA23TgRZ?ocid=hpmsn
                                - heading "Marco Rubio's explosive NDTV interview sets stage for key India-US talks" [level=2] [ref=e1326]:
                                  - generic: Marco Rubio's explosive NDTV interview sets stage for key India-US talks
                            - button "See more" [ref=e1330]
                        - article "India conducts successful Agni-1 missile test; Strategic Forces Command validates all parameters" [ref=e1333]:
                          - generic [ref=e1334]:
                            - img "India Conducts Successful Agni-1 Missile Test; Strategic Forces Command Validates All Parameters" [ref=e1336]
                            - generic [ref=e1338]: 03:19
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1339]:
                              - generic [ref=e1340]:
                                - img "The Times of India" [ref=e1341]
                                - generic [ref=e1342]:
                                  - generic:
                                    - generic "The Times of India" [ref=e1343]
                                    - generic [ref=e1344]: ·
                                    - generic [ref=e1345]: 1d
                              - link "India conducts successful Agni-1 missile test; Strategic Forces Command validates all parameters" [ref=e1346]:
                                - /url: https://www.msn.com/en-in/news/india/india-conducts-successful-agni-1-missile-test-strategic-forces-command-validates-all-parameters/vi-AA23PAsA?ocid=hpmsn
                                - heading "India conducts successful Agni-1 missile test; Strategic Forces Command validates all parameters" [level=2] [ref=e1347]:
                                  - generic: India conducts successful Agni-1 missile test; Strategic Forces Command validates all parameters
                            - button "See more" [ref=e1351]
                        - article "Sachin Tendulkar Reveals The Story Behind the Helicopter Shot & Uppercut" [ref=e1354]:
                          - generic [ref=e1355]:
                            - img "Sachin Tendulkar Reveals The Story Behind the Helicopter Shot & Uppercut Thumbnail" [ref=e1357]
                            - generic [ref=e1359]: 03:40
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1360]:
                              - generic [ref=e1361]:
                                - img "NDTV 24x7" [ref=e1362]
                                - generic "NDTV 24x7" [ref=e1364]
                              - link "Sachin Tendulkar Reveals The Story Behind the Helicopter Shot & Uppercut" [ref=e1365]:
                                - /url: https://www.msn.com/en-in/sports/cricket/sachin-tendulkar-reveals-the-story-behind-the-helicopter-shot-uppercut/vi-AA1OLwId?ocid=hpmsn
                                - heading "Sachin Tendulkar Reveals The Story Behind the Helicopter Shot & Uppercut" [level=2] [ref=e1366]:
                                  - generic: Sachin Tendulkar Reveals The Story Behind the Helicopter Shot & Uppercut
                            - button "See more" [ref=e1370]
                        - 'article "Anu – Ek Hero Mujhme Bhi | #NiveshkaSahiKadam | @amfi_india" [ref=e1373]':
                          - generic [ref=e1374]:
                            - 'img "Anu – Ek Hero Mujhme Bhi | #NiveshkaSahiKadam | @amfi_india" [ref=e1376]'
                            - generic [ref=e1378]: 01:30
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1379]:
                              - generic [ref=e1380]:
                                - img "News18" [ref=e1381]
                                - generic "News18" [ref=e1383]
                              - 'link "Anu – Ek Hero Mujhme Bhi | #NiveshkaSahiKadam | @amfi_india" [ref=e1384]':
                                - /url: https://www.msn.com/en-in/news/india/anu-ek-hero-mujhme-bhi-niveshkasahikadam-amfi-india/vi-AA1LkNbY?ocid=hpmsn
                                - 'heading "Anu – Ek Hero Mujhme Bhi | #NiveshkaSahiKadam | @amfi_india" [level=2] [ref=e1385]':
                                  - generic: "Anu – Ek Hero Mujhme Bhi | #NiveshkaSahiKadam | @amfi_india"
                            - button "See more" [ref=e1389]
                        - link "See more" [ref=e1391]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1392]
                          - text: See more
                    - button "next" [ref=e1396]:
                      - img [ref=e1399]
            - article "Girl, 10, murdered in Tamil Nadu, CM Vijay vows strict action amid outcry" [ref=e1401] [cursor=pointer]:
              - generic [ref=e1403]:
                - img [ref=e1404]
                - generic [ref=e1405]:
                  - generic [ref=e1406]:
                    - generic [ref=e1407]:
                      - generic [ref=e1408]:
                        - img [ref=e1409]
                        - generic [ref=e1410]: India Today
                      - generic [ref=e1411]: ·
                      - generic [ref=e1412]: 21h
                    - link "Girl, 10, murdered in Tamil Nadu, CM Vijay vows strict action amid outcry, India Today" [ref=e1413]:
                      - /url: https://www.msn.com/en-in/news/india/girl-10-murdered-in-tamil-nadu-cm-vijay-vows-strict-action-amid-outcry/ar-AA23SF2u
                      - text: Girl, 10, murdered in Tamil Nadu, CM Vijay vows strict action amid outcry
                  - generic "Girl, 10, murdered in Tamil Nadu, CM Vijay vows strict action amid outcry" [ref=e1416]:
                    - generic [ref=e1418]:
                      - generic [ref=e1419]:
                        - button "43 Like" [ref=e1420]:
                          - generic [ref=e1421]:
                            - img [ref=e1422]
                            - generic [ref=e1424]: "43"
                        - button "Dislike" [ref=e1425]:
                          - img [ref=e1427]
                      - link "View comments 3 Comment" [ref=e1430]:
                        - /url: https://www.msn.com/en-in/news/india/girl-10-murdered-in-tamil-nadu-cm-vijay-vows-strict-action-amid-outcry/ar-AA23SF2u#comments
                        - button "View comments 3 Comment" [ref=e1431]:
                          - img [ref=e1432]
                        - generic [ref=e1434]: "3"
                - generic [ref=e1435]:
                  - button "Hide this story" [ref=e1436]:
                    - img [ref=e1437]
                    - text: Hide this story
                  - button "See more" [ref=e1438]:
                    - img [ref=e1439]
            - article [ref=e1440] [cursor=pointer]:
              - generic [ref=e1446]:
                - generic [ref=e1448]:
                  - img "IPL" [ref=e1450]
                  - link "IPL" [ref=e1451]:
                    - /url: https://www.msn.com/en-in/sports/cricket/ipl?ocid=hpmsn&cvid=6a12a01e13e94b7aa82d68814c9a2797
                    - heading "IPL" [level=2] [ref=e1452]
                  - button "More interests" [ref=e1453]
                  - generic [ref=e1454]:
                    - generic "Popular in your area" [ref=e1455]:
                      - button "Popular in your area" [ref=e1456]
                    - button "More options" [ref=e1457]
                - generic [ref=e1461]:
                  - link "KKR 24 May 2:00 pm DC Eden Gardens, Kolkata" [ref=e1462]:
                    - /url: https://www.msn.com/en-in/sports/cricket/ipl/game-center/sp-id-270341?ocid=hpmsn&cvid=6a12a01e13e94b7aa82d68814c9a2797
                    - generic "KKR" [ref=e1463]:
                      - generic [ref=e1465]:
                        - generic [ref=e1467]: KKR
                        - button "Click to follow KKR":
                          - generic:
                            - img
                    - generic [ref=e1470]:
                      - generic [ref=e1471]: 24 May
                      - generic [ref=e1472]: 2:00 pm
                    - generic "DC" [ref=e1473]:
                      - generic [ref=e1475]:
                        - generic [ref=e1477]: DC
                        - button "Click to follow DC":
                          - generic:
                            - img
                    - generic "Eden Gardens, Kolkata" [ref=e1480]
                  - link "LSG 196/6 (20.0) VS PBKS 200/3 (18.0) PBKS won by 7 wickets" [ref=e1481]:
                    - /url: https://www.msn.com/en-in/sports/cricket/ipl/game-center/sp-id-270339?ocid=hpmsn&cvid=6a12a01e13e94b7aa82d68814c9a2797
                    - generic "LSG" [ref=e1482]:
                      - generic [ref=e1483]:
                        - generic [ref=e1484]:
                          - generic [ref=e1486]: LSG
                          - button "Click to follow LSG":
                            - generic:
                              - img
                        - generic [ref=e1488]:
                          - generic [ref=e1489]: 196/6
                          - generic [ref=e1490]: (20.0)
                    - generic [ref=e1494]: VS
                    - generic "PBKS" [ref=e1495]:
                      - generic [ref=e1496]:
                        - img [ref=e1498]
                        - generic [ref=e1500]:
                          - generic [ref=e1502]: PBKS
                          - button "Click to follow PBKS":
                            - generic:
                              - img
                        - generic [ref=e1504]:
                          - generic [ref=e1505]: 200/3
                          - generic [ref=e1506]: (18.0)
                    - generic "PBKS won by 7 wickets" [ref=e1509]
                  - link "MI 24 May 10:00 am RR Wankhede Stadium, Mumbai" [ref=e1510]:
                    - /url: https://www.msn.com/en-in/sports/cricket/ipl/game-center/sp-id-270340?ocid=hpmsn&cvid=6a12a01e13e94b7aa82d68814c9a2797
                    - generic "MI" [ref=e1511]:
                      - generic [ref=e1513]:
                        - generic [ref=e1515]: MI
                        - button "Click to follow MI":
                          - generic:
                            - img
                    - generic [ref=e1518]:
                      - generic [ref=e1519]: 24 May
                      - generic [ref=e1520]: 10:00 am
                    - generic "RR" [ref=e1521]:
                      - generic [ref=e1523]:
                        - generic [ref=e1525]: RR
                        - button "Click to follow RR":
                          - generic:
                            - img
                    - generic "Wankhede Stadium, Mumbai" [ref=e1528]
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
                  - link "See more IPL" [ref=e1549]:
                    - /url: https://www.msn.com/en-in/sports/cricket/ipl?ocid=hpmsn&cvid=6a12a01e13e94b7aa82d68814c9a2797
            - 'article "Arya Babbar slams Prateik Smita Patil for disrespecting Raj Babbar: ''We become villains, but when you need money, then he is your father''" [ref=e1550] [cursor=pointer]':
              - generic [ref=e1552]:
                - img [ref=e1553]
                - generic [ref=e1554]:
                  - generic [ref=e1555]:
                    - generic [ref=e1556]:
                      - generic [ref=e1557]:
                        - img [ref=e1558]
                        - generic [ref=e1559]: The Times of India
                      - generic [ref=e1560]: ·
                      - generic [ref=e1561]: 1d
                    - 'link "Arya Babbar slams Prateik Smita Patil for disrespecting Raj Babbar: ''We become villains, but when you need money, then he is your father'', The Times of India" [ref=e1562]':
                      - /url: https://www.msn.com/en-in/entertainment/oscars/arya-babbar-slams-prateik-smita-patil-for-disrespecting-raj-babbar-we-become-villains-but-when-you-need-money-then-he-is-your-father/ar-AA23O9Xg
                      - text: "Arya Babbar slams Prateik Smita Patil for disrespecting Raj Babbar: 'We become villains, but when you need money, then he is your father'"
                  - 'generic "Arya Babbar slams Prateik Smita Patil for disrespecting Raj Babbar: ''We become villains, but when you need money, then he is your father''" [ref=e1565]':
                    - generic [ref=e1567]:
                      - generic [ref=e1568]:
                        - button "31 Like" [ref=e1569]:
                          - generic [ref=e1570]:
                            - img [ref=e1571]
                            - generic [ref=e1573]: "31"
                        - button "Dislike" [ref=e1574]:
                          - img [ref=e1576]
                      - link "Start the conversation" [ref=e1579]:
                        - /url: https://www.msn.com/en-in/entertainment/oscars/arya-babbar-slams-prateik-smita-patil-for-disrespecting-raj-babbar-we-become-villains-but-when-you-need-money-then-he-is-your-father/ar-AA23O9Xg#comments
                        - button "Start the conversation" [ref=e1580]:
                          - img [ref=e1581]
                - generic [ref=e1583]:
                  - button "Hide this story" [ref=e1584]:
                    - img [ref=e1585]
                    - text: Hide this story
                  - button "See more" [ref=e1586]:
                    - img [ref=e1587]
            - article "Watch what happens when a Komodo dragon locks onto its target" [ref=e1588] [cursor=pointer]:
              - generic [ref=e1590]:
                - generic [ref=e1596]:
                  - generic [ref=e1597]:
                    - generic [ref=e1598]:
                      - generic [ref=e1599]:
                        - img [ref=e1600]
                        - generic [ref=e1601]: Real Science
                      - generic [ref=e1602]: ·
                      - generic [ref=e1603]: 1w
                    - link "Watch what happens when a Komodo dragon locks onto its target, Real Science" [ref=e1604]:
                      - /url: https://www.msn.com/en-in/lifestyle/pets-animals/watch-what-happens-when-a-komodo-dragon-locks-onto-its-target/vi-AA1XzYDx
                      - text: Watch what happens when a Komodo dragon locks onto its target
                  - generic "Watch what happens when a Komodo dragon locks onto its target" [ref=e1607]:
                    - generic [ref=e1609]:
                      - generic [ref=e1610]:
                        - button "367 Like" [ref=e1611]:
                          - generic [ref=e1612]:
                            - img [ref=e1613]
                            - generic [ref=e1615]: "367"
                        - button "Dislike" [ref=e1616]:
                          - img [ref=e1618]
                      - link "Start the conversation" [ref=e1621]:
                        - /url: https://www.msn.com/en-in/lifestyle/pets-animals/watch-what-happens-when-a-komodo-dragon-locks-onto-its-target/vi-AA1XzYDx#comments
                        - button "Start the conversation" [ref=e1622]:
                          - img [ref=e1623]
                - generic [ref=e1625]:
                  - button "Hide this story" [ref=e1626]:
                    - img [ref=e1627]
                    - text: Hide this story
                  - button "See more" [ref=e1628]:
                    - img [ref=e1629]
            - article [ref=e1630] [cursor=pointer]
            - article "Top Neuroscientist recommends 3 workouts to naturally 'grow' new brain cells" [ref=e1637] [cursor=pointer]:
              - generic [ref=e1639]:
                - img [ref=e1640]
                - generic [ref=e1641]:
                  - generic [ref=e1642]:
                    - generic [ref=e1644]:
                      - img [ref=e1645]
                      - generic [ref=e1646]: The Times of India
                    - link "Top Neuroscientist recommends 3 workouts to naturally 'grow' new brain cells, The Times of India" [ref=e1647]:
                      - /url: https://www.msn.com/en-in/health/other/top-neuroscientist-recommends-3-workouts-to-naturally-grow-new-brain-cells/ar-AA1PLAYa
                      - text: Top Neuroscientist recommends 3 workouts to naturally 'grow' new brain cells
                  - generic "Top Neuroscientist recommends 3 workouts to naturally 'grow' new brain cells" [ref=e1650]:
                    - generic [ref=e1652]:
                      - generic [ref=e1653]:
                        - button "190 Like" [ref=e1654]:
                          - generic [ref=e1655]:
                            - img [ref=e1656]
                            - generic [ref=e1658]: "190"
                        - button "Dislike" [ref=e1659]:
                          - img [ref=e1661]
                      - link "Start the conversation" [ref=e1664]:
                        - /url: https://www.msn.com/en-in/health/other/top-neuroscientist-recommends-3-workouts-to-naturally-grow-new-brain-cells/ar-AA1PLAYa#comments
                        - button "Start the conversation" [ref=e1665]:
                          - img [ref=e1666]
                - generic [ref=e1668]:
                  - button "Hide this story" [ref=e1669]:
                    - img [ref=e1670]
                    - text: Hide this story
                  - button "See more" [ref=e1671]:
                    - img [ref=e1672]
          - generic [ref=e1673]:
            - article [ref=e1674] [cursor=pointer]
            - 'article "50-foot ancient snake discovered in India: Vasuki indicus could be one of the largest snakes ever found" [ref=e1681] [cursor=pointer]':
              - generic [ref=e1683]:
                - img [ref=e1684]
                - generic [ref=e1685]:
                  - generic [ref=e1686]:
                    - generic [ref=e1687]:
                      - generic [ref=e1688]:
                        - img [ref=e1689]
                        - generic [ref=e1690]: The Times of India
                      - generic [ref=e1691]: ·
                      - generic [ref=e1692]: 3w
                    - 'link "50-foot ancient snake discovered in India: Vasuki indicus could be one of the largest snakes ever found, The Times of India" [ref=e1693]':
                      - /url: https://www.msn.com/en-in/autos/news/50-foot-ancient-snake-discovered-in-india-vasuki-indicus-could-be-one-of-the-largest-snakes-ever-found/ar-AA223IX9
                      - text: "50-foot ancient snake discovered in India: Vasuki indicus could be one of the largest snakes ever found"
                  - 'generic "50-foot ancient snake discovered in India: Vasuki indicus could be one of the largest snakes ever found" [ref=e1696]':
                    - generic [ref=e1698]:
                      - generic [ref=e1699]:
                        - button "2k Like" [ref=e1700]:
                          - generic [ref=e1701]:
                            - img [ref=e1702]
                            - generic [ref=e1704]: 2k
                        - button "Dislike" [ref=e1705]:
                          - img [ref=e1707]
                      - link "View comments 6 Comment" [ref=e1710]:
                        - /url: https://www.msn.com/en-in/autos/news/50-foot-ancient-snake-discovered-in-india-vasuki-indicus-could-be-one-of-the-largest-snakes-ever-found/ar-AA223IX9#comments
                        - button "View comments 6 Comment" [ref=e1711]:
                          - img [ref=e1712]
                        - generic [ref=e1714]: "6"
                - generic [ref=e1715]:
                  - button "Hide this story" [ref=e1716]:
                    - img [ref=e1717]
                    - text: Hide this story
                  - button "See more" [ref=e1718]:
                    - img [ref=e1719]
    - contentinfo [ref=e1722]:
      - generic "Feedback" [ref=e1724] [cursor=pointer]:
        - button "Feedback" [ref=e1725]:
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