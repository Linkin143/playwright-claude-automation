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
        - 'link "Chicago: Mostly cloudy, 22 °C" [ref=e31] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois
          - generic "Chicago, Illinois, United States Click here to see more information" [ref=e32]: Chicago
          - img "Mostly cloudy" [ref=e34]
          - generic [ref=e35]:
            - generic [ref=e36]: ‎22‎
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
              - article "Las Vegas Hotels from $39" [ref=e289] [cursor=pointer]:
                - generic [ref=e291]:
                  - img [ref=e292]
                  - generic [ref=e293]:
                    - generic [ref=e294]:
                      - generic [ref=e297]: Travel Price Drops
                      - link "Las Vegas Hotels from $39, Travel Price Drops" [ref=e298]:
                        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=a00cd519-6505-4439-8aee-ca2deff4fe33&bdc=pb&bidId=13&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=rhf2pczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=dfd904eb-2c10-4be6-b40a-496e8cfc0cff&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8iJjTJHHTmwUbzq_i2J7SwTVUCUyet52lbQA7FxWqQsNOvDowyNtXvZ2s0P1-WUWks1SxeVK86UpIObXpXfE8DhouxuyjebIGHdtAi_gsHBJ1hhOK_D0iFGhnvxBgD6eo-7hRCGSdQkK4VmZkYC0DMoCrPtTMqoLnIjYeLdEwFz8z7oACxIuQrP1I35fSLbWxlSIvjYh1eOqa8_NL57H7I6k0t38%26u%3DaHR0cHMlM2ElMmYlMmZ0cmF2ZWxwcmljZWRyb3BzLmNvbSUyZmhvdGVscyUyZmNpdHklMmZMYXMlMjUyMFZlZ2FzJTNmZGVzdENvZGUlM2RDJTNhMzUxMDclMjZmJTNkayUyNmZ1aWQlM2QxMDQzJTI2YiUzZGV4JTI2cHQlM2QyJTI2bXNjbGtpZCUzZDkwM2ZkZTliMWEzMTEwYjUxODcyYjQwOGVkNjYwYzIxJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkSG90ZWxzXyUyNTVCS2F5YWslMjUyMFNhbGVzJTI1MjBLd3MlMjU1RF9HZW5lcmljX0VYQUNUX1VTX0RFU0tUT1BfQXVkaWVuY2UoTm8lMjUyME5LKV9LX0VYJTI2dXRtX3Rlcm0lM2Rjb3Ntb3BvbGl0YW4lMjUyMGxhcyUyNTIwdmVnYXMlMjZ1dG1fY29udGVudCUzZGNvc21vcG9saXRhbiUyNTIwbGFzJTI1MjB2ZWdhcw%26rlid%3D903fde9b1a3110b51872b408ed660c21&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                        - text: Las Vegas Hotels from $39
                    - link "Sponsored" [ref=e300]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=a00cd519-6505-4439-8aee-ca2deff4fe33&bdc=pb&bidId=13&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=rhf2pczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=dfd904eb-2c10-4be6-b40a-496e8cfc0cff&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8iJjTJHHTmwUbzq_i2J7SwTVUCUyet52lbQA7FxWqQsNOvDowyNtXvZ2s0P1-WUWks1SxeVK86UpIObXpXfE8DhouxuyjebIGHdtAi_gsHBJ1hhOK_D0iFGhnvxBgD6eo-7hRCGSdQkK4VmZkYC0DMoCrPtTMqoLnIjYeLdEwFz8z7oACxIuQrP1I35fSLbWxlSIvjYh1eOqa8_NL57H7I6k0t38%26u%3DaHR0cHMlM2ElMmYlMmZ0cmF2ZWxwcmljZWRyb3BzLmNvbSUyZmhvdGVscyUyZmNpdHklMmZMYXMlMjUyMFZlZ2FzJTNmZGVzdENvZGUlM2RDJTNhMzUxMDclMjZmJTNkayUyNmZ1aWQlM2QxMDQzJTI2YiUzZGV4JTI2cHQlM2QyJTI2bXNjbGtpZCUzZDkwM2ZkZTliMWEzMTEwYjUxODcyYjQwOGVkNjYwYzIxJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkSG90ZWxzXyUyNTVCS2F5YWslMjUyMFNhbGVzJTI1MjBLd3MlMjU1RF9HZW5lcmljX0VYQUNUX1VTX0RFU0tUT1BfQXVkaWVuY2UoTm8lMjUyME5LKV9LX0VYJTI2dXRtX3Rlcm0lM2Rjb3Ntb3BvbGl0YW4lMjUyMGxhcyUyNTIwdmVnYXMlMjZ1dG1fY29udGVudCUzZGNvc21vcG9saXRhbiUyNTIwbGFzJTI1MjB2ZWdhcw%26rlid%3D903fde9b1a3110b51872b408ed660c21&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                  - button "See more" [ref=e302]:
                    - img [ref=e303]
            - article "Your prayers mean nothing" [ref=e304] [cursor=pointer]:
              - generic [ref=e306]:
                - generic [ref=e312]:
                  - generic [ref=e313]:
                    - generic [ref=e314]:
                      - generic [ref=e315]:
                        - img [ref=e316]
                        - generic [ref=e317]: NowThis
                      - generic [ref=e318]: ·
                      - generic [ref=e319]: 3w
                    - link "Your prayers mean nothing, NowThis" [ref=e320]:
                      - /url: https://www.msn.com/en-in/lifestyle/other/your-prayers-mean-nothing/vi-AA29yoBp
                      - text: Your prayers mean nothing
                  - generic "Your prayers mean nothing" [ref=e323]:
                    - generic [ref=e325]:
                      - generic [ref=e326]:
                        - button "48 Likes" [ref=e327]:
                          - generic [ref=e328]:
                            - img [ref=e329]
                            - generic [ref=e331]: "48"
                        - button "10 Dislikes" [ref=e332]:
                          - img [ref=e334]
                      - link "Start the conversation" [ref=e337]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/your-prayers-mean-nothing/vi-AA29yoBp#comments
                        - button "Start the conversation" [ref=e338]:
                          - img [ref=e339]
                - generic [ref=e341]:
                  - button "Hide this story" [ref=e342]:
                    - img [ref=e343]
                    - text: Hide this story
                  - button "See more" [ref=e344]:
                    - img [ref=e345]
            - article [ref=e346] [cursor=pointer]:
              - generic [ref=e350]:
                - generic: Sponsored
            - article "REEF Men's Cruiser Sandal | Size 12 | Midnight Navy" [ref=e351] [cursor=pointer]:
              - generic [ref=e353]:
                - img [ref=e354]
                - generic [ref=e355]:
                  - generic [ref=e356]:
                    - generic [ref=e359]: REEF
                    - link "REEF Men's Cruiser Sandal | Size 12 | Midnight Navy, REEF" [ref=e360]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=b7e059de-5946-48df-96a9-11350d7ceab6&bdc=pb&bidId=29&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=rhf2pczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=dfd904eb-2c10-4be6-b40a-496e8cfc0cff&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8xmiYYp9rRR_wcVKgXL7YaDVUCUxq2jfvht92rVsqisXh9Whd0ekIqUfGgieiS-kjif9GdBSnW8Nk5y7m3QvZT_UZicVXRuVs2dlAjKERFslSb93RC0SUZ57FGo7pAxFodUaa0OWUM63wC4UFa1A7bdttHSaV_a4PS7cxNKYg9_bKXHY0vpy-i6wj8V2Ct1IZn5iMX3NZBb7mCk_QtzyBSYQmbS8%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cucmVlZi5jb20lMmZwcm9kdWN0cyUyZm1lbnMtc2FuZGFscy1jcnVpc2VyLW1pZG5pZ2h0LW5hdnklM2Z2YXJpYW50JTNkNDc3MjcwMDkwMDU3MjMlMjZuYnQlM2RuYiUyNTNBbWljcm9zb2Z0JTI1M0FhJTI1M0E2MDczMjg2OTAlMjUzQTEyOTYzMjU1MTkyMDg5MTMlMjUzQTgxMDIwNDEwOTE5MDIwJTI2bmJfbXQlM2RlJTI2bmJfYm10JTNkYmUlMjZuYl9vaWklM2Q0NTg0NjE5OTAwMTA4MTIxJTI2bmJfcXMlM2RfTkFLV05VTExfJTI2bmJfZmlpJTNkJTI2bmJfbGlfbXMlM2QlMjZuYl9scF9tcyUzZDEwMjA1NyUyNm5iX3BpJTNkQ0o5MDMzLTEyMC1NJTI2bmJfcGMlM2RPbmxpbmUlMjZuYl9jaSUzZDQ1ODQ2MTk5MDAxMDgxMjElMjZ1dG1faWQlM2Q2MDczMjg2OTAtLTEyOTYzMjU1MTkyMDg5MTMtLTgxMDIwNDEwOTE5MDIwLS1kZWZhdWx0JTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkcGFpZCUyNnV0bV9jYW1wYWlnbiUzZHJ0YV9yZWVmX3BzZV9iYXNlX2JpbmdfZWNvbV9zdGRfZHVhbF9jb252X3B1cl9tZW5fcHJvc19iYXNlX3NhbmRhbHMtLTYwNzMyODY5MCUyNnV0bV9jb250ZW50JTNkTWVucyUyNTIwU2FuZGFscy0tMTI5NjMyNTUxOTIwODkxMyUyNnV0bV90ZXJtJTNkODEwMjA0MTA5MTkwMjAtLWRlZmF1bHQlMjZtc2Nsa2lkJTNkMDA0OGY0NDgyYzYxMTFiY2I0MzE5ZWRiZGIzNjAxZGE%26rlid%3D0048f4482c6111bcb4319edbdb3601da&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: REEF Men's Cruiser Sandal | Size 12 | Midnight Navy
                  - link "Sponsored" [ref=e362]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=b7e059de-5946-48df-96a9-11350d7ceab6&bdc=pb&bidId=29&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=rhf2pczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=dfd904eb-2c10-4be6-b40a-496e8cfc0cff&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8xmiYYp9rRR_wcVKgXL7YaDVUCUxq2jfvht92rVsqisXh9Whd0ekIqUfGgieiS-kjif9GdBSnW8Nk5y7m3QvZT_UZicVXRuVs2dlAjKERFslSb93RC0SUZ57FGo7pAxFodUaa0OWUM63wC4UFa1A7bdttHSaV_a4PS7cxNKYg9_bKXHY0vpy-i6wj8V2Ct1IZn5iMX3NZBb7mCk_QtzyBSYQmbS8%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cucmVlZi5jb20lMmZwcm9kdWN0cyUyZm1lbnMtc2FuZGFscy1jcnVpc2VyLW1pZG5pZ2h0LW5hdnklM2Z2YXJpYW50JTNkNDc3MjcwMDkwMDU3MjMlMjZuYnQlM2RuYiUyNTNBbWljcm9zb2Z0JTI1M0FhJTI1M0E2MDczMjg2OTAlMjUzQTEyOTYzMjU1MTkyMDg5MTMlMjUzQTgxMDIwNDEwOTE5MDIwJTI2bmJfbXQlM2RlJTI2bmJfYm10JTNkYmUlMjZuYl9vaWklM2Q0NTg0NjE5OTAwMTA4MTIxJTI2bmJfcXMlM2RfTkFLV05VTExfJTI2bmJfZmlpJTNkJTI2bmJfbGlfbXMlM2QlMjZuYl9scF9tcyUzZDEwMjA1NyUyNm5iX3BpJTNkQ0o5MDMzLTEyMC1NJTI2bmJfcGMlM2RPbmxpbmUlMjZuYl9jaSUzZDQ1ODQ2MTk5MDAxMDgxMjElMjZ1dG1faWQlM2Q2MDczMjg2OTAtLTEyOTYzMjU1MTkyMDg5MTMtLTgxMDIwNDEwOTE5MDIwLS1kZWZhdWx0JTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkcGFpZCUyNnV0bV9jYW1wYWlnbiUzZHJ0YV9yZWVmX3BzZV9iYXNlX2JpbmdfZWNvbV9zdGRfZHVhbF9jb252X3B1cl9tZW5fcHJvc19iYXNlX3NhbmRhbHMtLTYwNzMyODY5MCUyNnV0bV9jb250ZW50JTNkTWVucyUyNTIwU2FuZGFscy0tMTI5NjMyNTUxOTIwODkxMyUyNnV0bV90ZXJtJTNkODEwMjA0MTA5MTkwMjAtLWRlZmF1bHQlMjZtc2Nsa2lkJTNkMDA0OGY0NDgyYzYxMTFiY2I0MzE5ZWRiZGIzNjAxZGE%26rlid%3D0048f4482c6111bcb4319edbdb3601da&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e364]:
                  - img [ref=e365]
            - article [ref=e366] [cursor=pointer]:
              - generic [ref=e372]:
                - generic [ref=e374]:
                  - img "Watchlist suggestions" [ref=e376]
                  - link "Watchlist suggestions" [ref=e377]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e378]
                  - button "More options" [ref=e380]
                - generic [ref=e385]:
                  - link "Gold Gold ‎-3.43%‎ 4,504.10" [ref=e387]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwoc&ocid=hpmsn
                    - generic [ref=e388]:
                      - generic [ref=e390]: Gold
                      - generic [ref=e392]: Gold
                    - generic [ref=e397]:
                      - generic [ref=e398]: ‎-3.43%‎
                      - generic [ref=e399]: 4,504.10
                    - button "Add to watchlist" [ref=e402]:
                      - img [ref=e403]
                  - link "24K Gold (10 Grams) - Indian Rupee XAUINR ‎+0.69%‎ 144496" [ref=e407]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&ocid=hpmsn
                    - generic [ref=e408]:
                      - generic [ref=e410]: 24K Gold (10 Grams) - Indian Rupee
                      - generic [ref=e412]: XAUINR
                    - generic [ref=e417]:
                      - generic [ref=e418]: ‎+0.69%‎
                      - generic [ref=e419]: "144496"
                    - button "Add to watchlist" [ref=e422]:
                      - img [ref=e423]
                  - link "Silver Silver ‎-3.49%‎ 67.79" [ref=e427]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwr7&ocid=hpmsn
                    - generic [ref=e428]:
                      - generic [ref=e430]: Silver
                      - generic [ref=e432]: Silver
                    - generic [ref=e437]:
                      - generic [ref=e438]: ‎-3.49%‎
                      - generic [ref=e439]: "67.79"
                    - button "Add to watchlist" [ref=e442]:
                      - img [ref=e443]
                  - link "ITC Ltd ITC ‎-1.12%‎ 266.00" [ref=e447]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahie2w&ocid=hpmsn
                    - generic [ref=e448]:
                      - generic [ref=e450]: ITC Ltd
                      - generic [ref=e452]: ITC
                    - generic [ref=e457]:
                      - generic [ref=e458]: ‎-1.12%‎
                      - generic [ref=e459]: "266.00"
                    - button "Add to watchlist" [ref=e462]:
                      - img [ref=e463]
                  - link "EUR/INR Euro/Indian Rupee ‎-0.77%‎ 110.458" [ref=e467]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=av8w4c&ocid=hpmsn
                    - generic [ref=e468]:
                      - generic [ref=e470]: EUR/INR
                      - generic [ref=e472]: Euro/Indian Rupee
                    - generic [ref=e477]:
                      - generic [ref=e478]: ‎-0.77%‎
                      - generic [ref=e479]: "110.458"
                    - button "Add to watchlist" [ref=e482]:
                      - img [ref=e483]
                - generic [ref=e487]:
                  - generic [ref=e488]:
                    - generic "Previous" [ref=e489]:
                      - button "Previous" [ref=e490]
                    - tablist [ref=e492]:
                      - tab "tab-0" [selected] [ref=e493]
                      - tab "tab-1" [ref=e495]
                      - tab "tab-2" [ref=e497]
                      - tab "tab-3" [ref=e499]
                      - tab "tab-4" [ref=e501]
                      - tab "tab-5"
                      - tab "tab-6"
                    - generic "Next" [ref=e503]:
                      - button "Next" [ref=e504]
                  - link "See watchlist suggestions" [ref=e506]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - article [ref=e507] [cursor=pointer]:
              - generic [ref=e512]:
                - generic [ref=e514]:
                  - link "Top stories" [ref=e516]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a93f755882a48eeb8028ebd6195b1fe&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e517]
                  - button "More options" [ref=e519]
                - list [ref=e522]:
                  - listitem [ref=e523]:
                    - 'link "WION now Nepal floods: Inside desperate tunnel rescue as over 100 workers remain trapped" [ref=e524]':
                      - /url: https://www.msn.com/en-in/news/other/nepal-floods-inside-desperate-tunnel-rescue-as-over-100-workers-remain-trapped/ar-AA2bd7cf
                      - generic [ref=e525]:
                        - generic [ref=e526]:
                          - img [ref=e527]
                          - generic [ref=e528]:
                            - generic: WION ·now
                        - generic [ref=e529]: "Nepal floods: Inside desperate tunnel rescue as over 100 workers remain trapped"
                  - listitem [ref=e530]:
                    - link "Press Trust of India now India, Uzbekistan agree to deepen cooperation in trade, defence, energy, digital connectivity" [ref=e531]:
                      - /url: https://www.msn.com/en-in/news/other/india-uzbekistan-agree-to-deepen-cooperation-in-trade-defence-energy-digital-connectivity/ar-AA2bcPuk
                      - generic [ref=e532]:
                        - generic [ref=e533]:
                          - img [ref=e534]
                          - generic [ref=e535]:
                            - generic: Press Trust of India ·now
                        - generic [ref=e536]: India, Uzbekistan agree to deepen cooperation in trade, defence, energy, digital connectivity
                  - listitem [ref=e537]:
                    - 'link "The Times of India 4h DNA, unique IDs and geo-tags: How Nepal plans to identify flood victims after burial" [ref=e538]':
                      - /url: https://www.msn.com/en-in/news/other/dna-unique-ids-and-geo-tags-how-nepal-plans-to-identify-flood-victims-after-burial/ar-AA2bcn1w
                      - generic [ref=e539]:
                        - generic [ref=e540]:
                          - img [ref=e541]
                          - generic [ref=e542]:
                            - generic: The Times of India ·4h
                        - generic [ref=e543]: "DNA, unique IDs and geo-tags: How Nepal plans to identify flood victims after burial"
                - generic [ref=e545]:
                  - generic [ref=e546]:
                    - generic "Previous" [ref=e547]:
                      - button "Previous" [ref=e548]
                    - tablist [ref=e550]:
                      - tab "tab-0" [selected] [ref=e551]
                      - tab "tab-1" [ref=e553]
                      - tab "tab-2" [ref=e555]
                    - generic "Next" [ref=e557]:
                      - button "Next" [ref=e558]
                  - link "See more" [ref=e560]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a93f755882a48eeb8028ebd6195b1fe&ocid=hpmsn
            - article "The Average Price Of a New Roof In 2026" [ref=e561] [cursor=pointer]:
              - generic [ref=e563]:
                - img [ref=e564]
                - generic [ref=e565]:
                  - generic [ref=e566]:
                    - generic [ref=e569]: HomeBuddy
                    - link "The Average Price Of a New Roof In 2026, HomeBuddy" [ref=e570]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=34cc1f8b-6119-4e02-acc7-01f61e36b014&bdc=pb&bidId=15&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=rhf2pczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=dfd904eb-2c10-4be6-b40a-496e8cfc0cff&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De80D4VFWTDKhztamQx8H7IyjVUCUz-gLqBvm-n4POlFb5nh7Xi0zkmninH1_z9iV7gTUMLvo2uuOkv-Kgex7KoJ5J3Azwzkne1HZta5AuuaJp3qrgZwLrz_GsleuAMAH2CFDRK65-MaJgi3CeQF6M3sjIUTV0shpUnI_jNaR9f8bI1w8pYFcuoc614AL6oSUtVfijAlvf3ayt7m9YmRF_fUkNrL5c%26u%3DaHR0cHMlM2ElMmYlMmZ0cmFja2luZy5zbWFydGVzdGxpZmVzdHlsZXRyZW5kcy5jb20lMmYxMDI0NjRmZi02MzVjLTQyMDYtOWU2My0zOTM1OGNiMThmOWElM2ZBZEdyb3VwSWQlM2QxMzE4MzE3MzQwODQ0MDg1JTI2QWRJZCUzZDgyMzk1MDg0MjI0NTY4JTI2QmlkTWF0Y2hUeXBlJTNkYmUlMjZDYW1wYWlnbklkJTNkNjM4ODE0ODI3JTI2VGFyZ2V0SWQlM2Rrd2QtMjMzNDE5NDQ2NzU1OTU1MSUzYWxvYy00MDk1JTI2UXVlcnlTdHJpbmclM2RrZXl3b3JkJTI2SWZTZWFyY2glM2FzdHJpbmclM2RzdHJpbmclMjZrZXl3b3JkJTNka2V5d29yZCUyNm1zY2xraWQlM2RiYTc0YzIwMTcwZjQxNWVmMDk3OGE4OTI4N2EzYzNkNiUyNmFkJTNkJTdiYWQlN2Q%26rlid%3Dba74c20170f415ef0978a89287a3c3d6&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: The Average Price Of a New Roof In 2026
                  - link "Sponsored" [ref=e572]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=34cc1f8b-6119-4e02-acc7-01f61e36b014&bdc=pb&bidId=15&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=rhf2pczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=dfd904eb-2c10-4be6-b40a-496e8cfc0cff&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De80D4VFWTDKhztamQx8H7IyjVUCUz-gLqBvm-n4POlFb5nh7Xi0zkmninH1_z9iV7gTUMLvo2uuOkv-Kgex7KoJ5J3Azwzkne1HZta5AuuaJp3qrgZwLrz_GsleuAMAH2CFDRK65-MaJgi3CeQF6M3sjIUTV0shpUnI_jNaR9f8bI1w8pYFcuoc614AL6oSUtVfijAlvf3ayt7m9YmRF_fUkNrL5c%26u%3DaHR0cHMlM2ElMmYlMmZ0cmFja2luZy5zbWFydGVzdGxpZmVzdHlsZXRyZW5kcy5jb20lMmYxMDI0NjRmZi02MzVjLTQyMDYtOWU2My0zOTM1OGNiMThmOWElM2ZBZEdyb3VwSWQlM2QxMzE4MzE3MzQwODQ0MDg1JTI2QWRJZCUzZDgyMzk1MDg0MjI0NTY4JTI2QmlkTWF0Y2hUeXBlJTNkYmUlMjZDYW1wYWlnbklkJTNkNjM4ODE0ODI3JTI2VGFyZ2V0SWQlM2Rrd2QtMjMzNDE5NDQ2NzU1OTU1MSUzYWxvYy00MDk1JTI2UXVlcnlTdHJpbmclM2RrZXl3b3JkJTI2SWZTZWFyY2glM2FzdHJpbmclM2RzdHJpbmclMjZrZXl3b3JkJTNka2V5d29yZCUyNm1zY2xraWQlM2RiYTc0YzIwMTcwZjQxNWVmMDk3OGE4OTI4N2EzYzNkNiUyNmFkJTNkJTdiYWQlN2Q%26rlid%3Dba74c20170f415ef0978a89287a3c3d6&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e574]:
                  - img [ref=e575]
            - 'article "Quote of the day: Chanakya on decision-making — ''Before you start some work, always ask yourself three questions''" [ref=e576] [cursor=pointer]':
              - generic [ref=e578]:
                - img [ref=e579]
                - generic [ref=e580]:
                  - generic [ref=e581]:
                    - generic [ref=e583]:
                      - img [ref=e584]
                      - generic [ref=e585]: Live Mint
                    - 'link "Quote of the day: Chanakya on decision-making — ''Before you start some work, always ask yourself three questions'', Live Mint" [ref=e586]':
                      - /url: https://www.msn.com/en-in/money/general/quote-of-the-day-chanakya-on-decision-making-before-you-start-some-work-always-ask-yourself-three-questions/ar-AA25yyOx
                      - text: "Quote of the day: Chanakya on decision-making — 'Before you start some work, always ask yourself three questions'"
                  - 'generic "Quote of the day: Chanakya on decision-making — ''Before you start some work, always ask yourself three questions''" [ref=e589]':
                    - generic [ref=e591]:
                      - generic [ref=e592]:
                        - button "502 Likes" [ref=e593]:
                          - generic [ref=e594]:
                            - img [ref=e595]
                            - generic [ref=e597]: "502"
                        - button "364 Dislikes" [ref=e598]:
                          - img [ref=e600]
                      - link "View comments 6 Comment" [ref=e603]:
                        - /url: https://www.msn.com/en-in/money/general/quote-of-the-day-chanakya-on-decision-making-before-you-start-some-work-always-ask-yourself-three-questions/ar-AA25yyOx#comments
                        - button "View comments 6 Comment" [ref=e604]:
                          - img [ref=e605]
                        - generic [ref=e607]: "6"
                - generic [ref=e608]:
                  - button "Hide this story" [ref=e609]:
                    - img [ref=e610]
                    - text: Hide this story
                  - button "See more" [ref=e611]:
                    - img [ref=e612]
            - article "What happens behind the scenes at military wives' parties?" [ref=e613] [cursor=pointer]:
              - generic [ref=e615]:
                - img [ref=e616]
                - generic [ref=e617]:
                  - generic [ref=e618]:
                    - generic [ref=e620]:
                      - img [ref=e621]
                      - generic [ref=e622]: India Today
                    - link "What happens behind the scenes at military wives' parties?, India Today" [ref=e623]:
                      - /url: https://www.msn.com/en-in/lifestyle/other/what-happens-behind-the-scenes-at-military-wives-parties/ar-AA27Il7H
                      - text: What happens behind the scenes at military wives' parties?
                  - generic "What happens behind the scenes at military wives' parties?" [ref=e626]:
                    - generic [ref=e628]:
                      - generic [ref=e629]:
                        - button "139 Likes" [ref=e630]:
                          - generic [ref=e631]:
                            - img [ref=e632]
                            - generic [ref=e634]: "139"
                        - button "122 Dislikes" [ref=e635]:
                          - img [ref=e637]
                      - link "View comments 4 Comment" [ref=e640]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/what-happens-behind-the-scenes-at-military-wives-parties/ar-AA27Il7H#comments
                        - button "View comments 4 Comment" [ref=e641]:
                          - img [ref=e642]
                        - generic [ref=e644]: "4"
                - generic [ref=e645]:
                  - button "Hide this story" [ref=e646]:
                    - img [ref=e647]
                    - text: Hide this story
                  - button "See more" [ref=e648]:
                    - img [ref=e649]
          - generic [ref=e650]:
            - article [ref=e651] [cursor=pointer]:
              - generic [ref=e656]:
                - generic [ref=e658]:
                  - link "Top Engaging News" [ref=e660]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a93f755882a48eeb8028ebd6195b1fe
                    - heading "Top Engaging News" [level=2] [ref=e661]
                  - button "More options" [ref=e663]
                - generic [ref=e665]:
                  - 'link "Times Now 9 Comments ''If a Hindu believes there should be no Muslims in India then he''s not a Hindu'': Mohan Bhagwat’s unity pitch in New York" [ref=e667]':
                    - /url: https://www.msn.com/en-in/news/other/if-a-hindu-believes-there-should-be-no-muslims-in-india-then-he-s-not-a-hindu-mohan-bhagwat-s-unity-pitch-in-new-york/ar-AA2bbcZv
                    - generic [ref=e668]:
                      - img [ref=e669]
                      - generic [ref=e670]: Times Now
                      - link "9 Comments" [ref=e672]:
                        - /url: https://www.msn.com/en-in/news/other/if-a-hindu-believes-there-should-be-no-muslims-in-india-then-he-s-not-a-hindu-mohan-bhagwat-s-unity-pitch-in-new-york/ar-AA2bbcZv#comments
                        - img [ref=e673]
                        - paragraph [ref=e674]: "9"
                    - paragraph [ref=e675]: "'If a Hindu believes there should be no Muslims in India then he's not a Hindu': Mohan Bhagwat’s unity pitch in New York"
                  - 'link "The Economic Times 3 Comments 137th Mann Ki Baat: PM Modi highlights history website, backs drug-free youth campaign" [ref=e677]':
                    - /url: https://www.msn.com/en-in/news/other/137th-mann-ki-baat-pm-modi-highlights-history-website-backs-drug-free-youth-campaign/ar-AA2bckQO
                    - generic [ref=e678]:
                      - img [ref=e679]
                      - generic [ref=e680]: The Economic Times
                      - link "3 Comments" [ref=e682]:
                        - /url: https://www.msn.com/en-in/news/other/137th-mann-ki-baat-pm-modi-highlights-history-website-backs-drug-free-youth-campaign/ar-AA2bckQO#comments
                        - img [ref=e683]
                        - paragraph [ref=e684]: "3"
                    - paragraph [ref=e685]: "137th Mann Ki Baat: PM Modi highlights history website, backs drug-free youth campaign"
                  - 'link "The Economic Times 2 Comments Nobody is a friend; India must cut reliance on foreign tech: M2P Fintech’s Madhusudanan R" [ref=e687]':
                    - /url: https://www.msn.com/en-in/money/general/nobody-is-a-friend-india-must-cut-reliance-on-foreign-tech-m2p-fintech-s-madhusudanan-r/ar-AA2babOO
                    - generic [ref=e688]:
                      - img [ref=e689]
                      - generic [ref=e690]: The Economic Times
                      - link "2 Comments" [ref=e692]:
                        - /url: https://www.msn.com/en-in/money/general/nobody-is-a-friend-india-must-cut-reliance-on-foreign-tech-m2p-fintech-s-madhusudanan-r/ar-AA2babOO#comments
                        - img [ref=e693]
                        - paragraph [ref=e694]: "2"
                    - paragraph [ref=e695]: "Nobody is a friend; India must cut reliance on foreign tech: M2P Fintech’s Madhusudanan R"
                - generic [ref=e697]:
                  - generic [ref=e698]:
                    - generic "Previous" [ref=e699]:
                      - button "Previous" [ref=e700]
                    - tablist [ref=e702]:
                      - tab "tab-0" [selected] [ref=e703]
                      - tab "tab-1" [ref=e705]
                      - tab "tab-2" [ref=e707]
                    - generic "Next" [ref=e709]:
                      - button "Next" [ref=e710]
                  - link "See more" [ref=e712]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a93f755882a48eeb8028ebd6195b1fe
            - article [ref=e713] [cursor=pointer]:
              - generic [ref=e719]:
                - generic [ref=e721]:
                  - link "Chicago" [ref=e723]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois
                    - heading "Chicago" [level=2] [ref=e724]
                  - button "My location" [ref=e725]
                  - button "More options" [ref=e727]
                - generic [ref=e731]:
                  - generic [ref=e732]:
                    - generic [ref=e734]:
                      - link "Mostly cloudy" [ref=e735]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois
                        - img "Mostly cloudy" [ref=e736]
                      - link "22°C" [ref=e737]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois
                        - generic [ref=e738]: ‎22‎
                        - generic [ref=e740]: ‎°C‎
                    - generic [ref=e742]:
                      - link "Rain starting soon" [ref=e744]:
                        - /url: https://www.msn.com/en-in/weather/maps/precipitation/in-Chicago,Illinois
                        - text: Rain starting soon
                      - link "See full forecast" [ref=e746]:
                        - /url: https://www.msn.com/en-in/weather/maps/precipitation/in-Chicago,Illinois
                        - img "arrow" [ref=e747]
                  - list [ref=e751]:
                    - listitem [ref=e752]:
                      - generic "Weather forecast Today High temperature 27° Low temperature 23°" [ref=e753]:
                        - link "Weather forecast Today High temperature 27° Low temperature 23°" [ref=e754]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois
                          - generic:
                            - generic:
                              - generic "Today"
                              - generic:
                                - img "Rain showers"
                              - generic:
                                - generic "High temperature 27°": ‎27°‎
                                - generic "Low temperature 23°": ‎23°‎
                    - listitem [ref=e755]:
                      - generic "Weather forecast Mon High temperature 32° Low temperature 24°" [ref=e756]:
                        - link "Weather forecast Mon High temperature 32° Low temperature 24°" [ref=e757]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois
                          - generic:
                            - generic:
                              - generic "Mon"
                              - generic:
                                - img "Mostly sunny"
                              - generic:
                                - generic "High temperature 32°": ‎32°‎
                                - generic "Low temperature 24°": ‎24°‎
                    - listitem [ref=e758]:
                      - generic "Weather forecast Tue High temperature 34° Low temperature 25°" [ref=e759]:
                        - link "Weather forecast Tue High temperature 34° Low temperature 25°" [ref=e760]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois
                          - generic:
                            - generic:
                              - generic "Tue"
                              - generic:
                                - img "Mostly sunny"
                              - generic:
                                - generic "High temperature 34°": ‎34°‎
                                - generic "Low temperature 25°": ‎25°‎
                    - listitem [ref=e761]:
                      - generic "Weather forecast Wed High temperature 34° Low temperature 23°" [ref=e762]:
                        - link "Weather forecast Wed High temperature 34° Low temperature 23°" [ref=e763]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois
                          - generic:
                            - generic:
                              - generic "Wed"
                              - generic:
                                - img "Sunny"
                              - generic:
                                - generic "High temperature 34°": ‎34°‎
                                - generic "Low temperature 23°": ‎23°‎
                    - listitem [ref=e764]:
                      - generic "Weather forecast Thu High temperature 30° Low temperature 22°" [ref=e765]:
                        - link "Weather forecast Thu High temperature 30° Low temperature 22°" [ref=e766]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois
                          - generic:
                            - generic:
                              - generic "Thu"
                              - generic:
                                - img "Mostly sunny"
                              - generic:
                                - generic "High temperature 30°": ‎30°‎
                                - generic "Low temperature 22°": ‎22°‎
                - button "See full forecast" [ref=e769]
            - article "Breathtaking views of Kedarnath amid the Himalayan peaks" [ref=e770] [cursor=pointer]:
              - generic [ref=e772]:
                - generic [ref=e776]:
                  - generic [ref=e777]:
                    - generic [ref=e778]:
                      - generic [ref=e779]:
                        - img [ref=e780]
                        - generic [ref=e781]: The Times of India
                      - generic [ref=e782]: ·
                      - generic [ref=e783]: 3w
                    - link "Breathtaking views of Kedarnath amid the Himalayan peaks, The Times of India" [ref=e784]:
                      - /url: https://www.msn.com/en-in/travel/parks/breathtaking-views-of-kedarnath-amid-the-himalayan-peaks/vi-AA29Fv07
                      - text: Breathtaking views of Kedarnath amid the Himalayan peaks
                  - generic "Breathtaking views of Kedarnath amid the Himalayan peaks" [ref=e787]:
                    - generic [ref=e789]:
                      - generic [ref=e790]:
                        - button "93 Likes" [ref=e791]:
                          - generic [ref=e792]:
                            - img [ref=e793]
                            - generic [ref=e795]: "93"
                        - button "32 Dislikes" [ref=e796]:
                          - img [ref=e798]
                      - link "Start the conversation" [ref=e801]:
                        - /url: https://www.msn.com/en-in/travel/parks/breathtaking-views-of-kedarnath-amid-the-himalayan-peaks/vi-AA29Fv07#comments
                        - button "Start the conversation" [ref=e802]:
                          - img [ref=e803]
                - generic [ref=e805]:
                  - button "Hide this story" [ref=e806]:
                    - img [ref=e807]
                    - text: Hide this story
                  - button "See more" [ref=e808]:
                    - img [ref=e809]
            - 'article "No air freshener: The hotel trick for a bathroom that always smells good" [ref=e810] [cursor=pointer]':
              - generic [ref=e812]:
                - img [ref=e813]
                - generic [ref=e814]:
                  - generic [ref=e815]:
                    - generic [ref=e817]:
                      - img [ref=e818]
                      - generic [ref=e819]: The Economic Times
                    - 'link "No air freshener: The hotel trick for a bathroom that always smells good, The Economic Times" [ref=e820]':
                      - /url: https://www.msn.com/en-in/money/general/no-air-freshener-the-hotel-trick-for-a-bathroom-that-always-smells-good/ar-AA1ZZSVe
                      - text: "No air freshener: The hotel trick for a bathroom that always smells good"
                  - 'generic "No air freshener: The hotel trick for a bathroom that always smells good" [ref=e823]':
                    - generic [ref=e825]:
                      - generic [ref=e826]:
                        - button "26 Likes" [ref=e827]:
                          - generic [ref=e828]:
                            - img [ref=e829]
                            - generic [ref=e831]: "26"
                        - button "20 Dislikes" [ref=e832]:
                          - img [ref=e834]
                      - link "Start the conversation" [ref=e837]:
                        - /url: https://www.msn.com/en-in/money/general/no-air-freshener-the-hotel-trick-for-a-bathroom-that-always-smells-good/ar-AA1ZZSVe#comments
                        - button "Start the conversation" [ref=e838]:
                          - img [ref=e839]
                - generic [ref=e841]:
                  - button "Hide this story" [ref=e842]:
                    - img [ref=e843]
                    - text: Hide this story
                  - button "See more" [ref=e844]:
                    - img [ref=e845]
            - article [ref=e846] [cursor=pointer]
            - 'article "Nepal disaster: Death toll nears 600, 1,900 missing as fresh flood threat raises alarm" [ref=e853] [cursor=pointer]':
              - generic [ref=e855]:
                - generic [ref=e859]:
                  - generic [ref=e860]:
                    - generic [ref=e861]:
                      - generic [ref=e862]:
                        - img [ref=e863]
                        - generic [ref=e864]: ABP - Live
                      - generic [ref=e865]: ·
                      - generic [ref=e866]: 20h
                    - 'link "Nepal disaster: Death toll nears 600, 1,900 missing as fresh flood threat raises alarm, ABP - Live" [ref=e867]':
                      - /url: https://www.msn.com/en-in/weather/general/nepal-disaster-death-toll-nears-600-1-900-missing-as-fresh-flood-threat-raises-alarm/vi-AA2ba8zK
                      - text: "Nepal disaster: Death toll nears 600, 1,900 missing as fresh flood threat raises alarm"
                  - 'generic "Nepal disaster: Death toll nears 600, 1,900 missing as fresh flood threat raises alarm" [ref=e870]':
                    - generic [ref=e872]:
                      - generic [ref=e873]:
                        - button "10 Likes" [ref=e874]:
                          - generic [ref=e875]:
                            - img [ref=e876]
                            - generic [ref=e878]: "10"
                        - button "8 Dislikes" [ref=e879]:
                          - img [ref=e881]
                      - link "Start the conversation" [ref=e884]:
                        - /url: https://www.msn.com/en-in/weather/general/nepal-disaster-death-toll-nears-600-1-900-missing-as-fresh-flood-threat-raises-alarm/vi-AA2ba8zK#comments
                        - button "Start the conversation" [ref=e885]:
                          - img [ref=e886]
                - generic [ref=e888]:
                  - button "Hide this story" [ref=e889]:
                    - img [ref=e890]
                    - text: Hide this story
                  - button "See more" [ref=e891]:
                    - img [ref=e892]
            - article [ref=e893] [cursor=pointer]
            - article [ref=e900] [cursor=pointer]:
              - generic [ref=e906]:
                - generic [ref=e908]:
                  - img "ICC" [ref=e910]
                  - link "ICC" [ref=e911]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6a93f755882a48eeb8028ebd6195b1fe
                    - heading "ICC" [level=2] [ref=e912]
                  - button "More interests" [ref=e913]
                  - generic [ref=e914]:
                    - generic "Live now" [ref=e915]:
                      - button "Live now" [ref=e916]
                    - button "More options" [ref=e917]
                - generic [ref=e921]:
                  - link "ENG 290 177/7 Stumps PAK 110 ENG lead by 357 runs" [ref=e922]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-264907?ocid=hpmsn&cvid=6a93f755882a48eeb8028ebd6195b1fe
                    - generic "ENG" [ref=e923]:
                      - generic [ref=e924]:
                        - generic [ref=e925]:
                          - generic [ref=e927]: ENG
                          - button "Click to follow ENG":
                            - generic:
                              - img
                        - generic [ref=e929]:
                          - generic [ref=e930]: "290"
                          - generic [ref=e931]: 177/7
                    - generic [ref=e935]: Stumps
                    - generic "PAK" [ref=e936]:
                      - generic [ref=e937]:
                        - generic [ref=e938]:
                          - generic [ref=e940]: PAK
                          - button "Click to follow PAK":
                            - generic:
                              - img
                        - generic [ref=e943]: "110"
                    - generic "ENG lead by 357 runs" [ref=e946]
                  - link "SA 146/3 (13.4) VS ZIM 144/8 (20.0) SA won by 7 wickets" [ref=e947]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-273841?ocid=hpmsn&cvid=6a93f755882a48eeb8028ebd6195b1fe
                    - generic "SA" [ref=e948]:
                      - generic [ref=e949]:
                        - img [ref=e951]
                        - generic [ref=e953]:
                          - generic [ref=e955]: SA
                          - button "Click to follow SA":
                            - generic:
                              - img
                        - generic [ref=e957]:
                          - generic [ref=e958]: 146/3
                          - generic [ref=e959]: (13.4)
                    - generic [ref=e963]: VS
                    - generic "ZIM" [ref=e964]:
                      - generic [ref=e965]:
                        - generic [ref=e966]:
                          - generic [ref=e968]: ZIM
                          - button "Click to follow ZIM":
                            - generic:
                              - img
                        - generic [ref=e970]:
                          - generic [ref=e971]: 144/8
                          - generic [ref=e972]: (20.0)
                    - generic "SA won by 7 wickets" [ref=e975]
                  - link "ZIM 1 Sept 12:00 pm SA Namibia Cricket Ground, Windhoek" [ref=e976]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-273843?ocid=hpmsn&cvid=6a93f755882a48eeb8028ebd6195b1fe
                    - generic "ZIM" [ref=e977]:
                      - generic [ref=e979]:
                        - generic [ref=e981]: ZIM
                        - button "Click to follow ZIM":
                          - generic:
                            - img
                    - generic [ref=e984]:
                      - generic [ref=e985]: 1 Sept
                      - generic [ref=e986]: 12:00 pm
                    - generic "SA" [ref=e987]:
                      - generic [ref=e989]:
                        - generic [ref=e991]: SA
                        - button "Click to follow SA":
                          - generic:
                            - img
                    - generic "Namibia Cricket Ground, Windhoek" [ref=e994]
                - generic [ref=e996]:
                  - generic [ref=e997]:
                    - generic "Previous" [ref=e998]:
                      - button "Previous" [ref=e999]
                    - tablist [ref=e1001]:
                      - tab "tab-0" [selected] [ref=e1002]
                      - tab "tab-1" [ref=e1004]
                      - tab "tab-2" [ref=e1006]
                      - tab "tab-3" [ref=e1008]
                    - generic "Next" [ref=e1010]:
                      - button "Next" [ref=e1011]
                  - link "See more ICC" [ref=e1013]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6a93f755882a48eeb8028ebd6195b1fe
          - article [ref=e1015]
          - generic [ref=e1017]:
            - article [ref=e1018] [cursor=pointer]:
              - generic [ref=e1023]:
                - generic [ref=e1024]:
                  - generic [ref=e1025]:
                    - link "Recommended videos" [ref=e1026]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e1027]
                    - link "Recommended videos" [ref=e1030]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e1031]:
                    - generic:
                      - link "See more" [ref=e1032]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e1033]:
                        - button "More options" [ref=e1034]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e1036]:
                  - generic [ref=e1038]:
                    - generic [ref=e1040]:
                      - generic:
                        - article "America planned to drop 10-ton metal rods from space - taxpayers would have paid the bill" [ref=e1043]:
                          - generic [ref=e1044]:
                            - img "America Planned to Drop 10-Ton Metal Rods From Space - Taxpayers Would Have Paid the Bill" [ref=e1046]
                            - generic [ref=e1048]: 24:38
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1049]:
                              - generic [ref=e1050]:
                                - img "Veritasium" [ref=e1051]
                                - generic [ref=e1052]:
                                  - generic:
                                    - generic "Veritasium" [ref=e1053]
                                    - generic [ref=e1054]: ·
                                    - generic [ref=e1055]: 1d
                              - link "America planned to drop 10-ton metal rods from space - taxpayers would have paid the bill" [ref=e1056]:
                                - /url: https://www.msn.com/en-in/news/other/america-planned-to-drop-10-ton-metal-rods-from-space-taxpayers-would-have-paid-the-bill/vi-AA28BQ6e?ocid=hpmsn
                                - heading "America planned to drop 10-ton metal rods from space - taxpayers would have paid the bill" [level=2] [ref=e1057]:
                                  - generic: America planned to drop 10-ton metal rods from space - taxpayers would have paid the bill
                            - button "See more" [ref=e1061]
                        - article [ref=e1064]:
                          - generic [ref=e1065]:
                            - img "Golden Retriever Puppy Questions Bath Time" [ref=e1067]
                            - generic [ref=e1069]: 01:49
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1070]:
                              - generic [ref=e1071]:
                                - img "Tucker Budzyn" [ref=e1072]
                                - generic [ref=e1073]:
                                  - generic:
                                    - generic "Tucker Budzyn" [ref=e1074]
                                    - generic [ref=e1075]: ·
                                    - generic [ref=e1076]: 21h
                              - link "Golden retriever puppy questions bath time" [ref=e1077]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/golden-retriever-puppy-questions-bath-time/vi-AA2baE9b?ocid=hpmsn
                                - heading "Golden retriever puppy questions bath time" [level=2] [ref=e1078]:
                                  - generic: Golden retriever puppy questions bath time
                            - button "See more" [ref=e1082]
                        - article [ref=e1085]:
                          - generic [ref=e1086]:
                            - img "Asian Tribes Try Sour American Candy for the First Time" [ref=e1088]
                            - generic [ref=e1090]: 11:22
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1091]:
                              - generic [ref=e1092]:
                                - img "Best Ever Food Review Show" [ref=e1093]
                                - generic [ref=e1094]:
                                  - generic:
                                    - generic "Best Ever Food Review Show" [ref=e1095]
                                    - generic [ref=e1096]: ·
                                    - generic [ref=e1097]: 4d
                              - link "Asian tribes try sour American candy for the first time" [ref=e1098]:
                                - /url: https://www.msn.com/en-in/food-and-drink/general/asian-tribes-try-sour-american-candy-for-the-first-time/vi-AA24TS5d?ocid=hpmsn
                                - heading "Asian tribes try sour American candy for the first time" [level=2] [ref=e1099]:
                                  - generic: Asian tribes try sour American candy for the first time
                            - button "See more" [ref=e1103]
                        - article [ref=e1106]:
                          - generic [ref=e1107]:
                            - img "Inside the Most Expensive Mansion For Sale in Silicon Valley" [ref=e1109]
                            - generic [ref=e1111]: 36:54
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1112]:
                              - generic [ref=e1113]:
                                - img "Enes Yilmazer" [ref=e1114]
                                - generic [ref=e1115]:
                                  - generic:
                                    - generic "Enes Yilmazer" [ref=e1116]
                                    - generic [ref=e1117]: ·
                                    - generic [ref=e1118]: 14h
                              - link "Inside Silicon Valley’s priciest mansion for sale" [ref=e1119]:
                                - /url: https://www.msn.com/en-in/money/general/inside-silicon-valley-s-priciest-mansion-for-sale/vi-AA27U2Ns?ocid=hpmsn
                                - heading "Inside Silicon Valley’s priciest mansion for sale" [level=2] [ref=e1120]:
                                  - generic: Inside Silicon Valley’s priciest mansion for sale
                            - button "See more" [ref=e1124]
                        - article "Trevor Noah explains why Idris Elba as James Bond wouldn't work (and it's not what you think!)" [ref=e1127]:
                          - generic [ref=e1128]:
                            - img "Trevor Noah Explains Why Idris Elba as James Bond Wouldn't Work (And It's Not What You Think!) Thumbnail" [ref=e1130]
                            - generic [ref=e1132]: 09:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1133]:
                              - generic [ref=e1134]:
                                - img "Trevor Noah" [ref=e1135]
                                - generic [ref=e1136]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1137]
                                    - generic [ref=e1138]: ·
                                    - generic [ref=e1139]: 1w
                              - link "Trevor Noah explains why Idris Elba as James Bond wouldn't work (and it's not what you think!)" [ref=e1140]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/trevor-noah-explains-why-idris-elba-as-james-bond-wouldn-t-work-and-it-s-not-what-you-think/vi-AA2alh08?ocid=hpmsn
                                - heading "Trevor Noah explains why Idris Elba as James Bond wouldn't work (and it's not what you think!)" [level=2] [ref=e1141]:
                                  - generic: Trevor Noah explains why Idris Elba as James Bond wouldn't work (and it's not what you think!)
                            - button "See more" [ref=e1145]
                        - article [ref=e1148]:
                          - generic [ref=e1149]:
                            - img "Richard Hammond Tries To Revive His 7.5 Litre V8 Buick" [ref=e1151]
                            - generic [ref=e1153]: 08:03
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1154]:
                              - generic [ref=e1155]:
                                - img "DRIVETRIBE" [ref=e1156]
                                - generic [ref=e1157]:
                                  - generic:
                                    - generic "DRIVETRIBE" [ref=e1158]
                                    - generic [ref=e1159]: ·
                                    - generic [ref=e1160]: 9h
                              - link "Richard Hammond tries to revive his 7.5 litre V8 Buick" [ref=e1161]:
                                - /url: https://www.msn.com/en-in/autos/motorcycles/richard-hammond-tries-to-revive-his-7-5-litre-v8-buick/vi-AA2bbqcF?ocid=hpmsn
                                - heading "Richard Hammond tries to revive his 7.5 litre V8 Buick" [level=2] [ref=e1162]:
                                  - generic: Richard Hammond tries to revive his 7.5 litre V8 Buick
                            - button "See more" [ref=e1166]
                        - article [ref=e1169]:
                          - generic [ref=e1170]:
                            - img "How to Make Sticky, Crispy Glazed Pork Ribs" [ref=e1172]
                            - generic [ref=e1174]: 08:51
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1175]:
                              - generic [ref=e1176]:
                                - img "America's Test Kitchen" [ref=e1177]
                                - generic [ref=e1178]:
                                  - generic:
                                    - generic "America's Test Kitchen" [ref=e1179]
                                    - generic [ref=e1180]: ·
                                    - generic [ref=e1181]: 22h
                              - link "How to make sticky, crispy glazed pork ribs" [ref=e1182]:
                                - /url: https://www.msn.com/en-in/food-and-drink/recipes/how-to-make-sticky-crispy-glazed-pork-ribs/vi-AA2batSR?ocid=hpmsn
                                - heading "How to make sticky, crispy glazed pork ribs" [level=2] [ref=e1183]:
                                  - generic: How to make sticky, crispy glazed pork ribs
                            - button "See more" [ref=e1187]
                        - article "Watch a $100 million stealth fighter stop in midair and drop straight down" [ref=e1190]:
                          - generic [ref=e1191]:
                            - img "Watch A $100 Million Stealth Fighter Stop In Midair And Drop Straight Down" [ref=e1193]
                            - generic [ref=e1195]: 20:35
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1196]:
                              - generic [ref=e1197]:
                                - img "Sam Eckholm" [ref=e1198]
                                - generic [ref=e1199]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1200]
                                    - generic [ref=e1201]: ·
                                    - generic [ref=e1202]: 2d
                              - link "Watch a $100 million stealth fighter stop in midair and drop straight down" [ref=e1203]:
                                - /url: https://www.msn.com/en-in/technology/aviation/watch-a-100-million-stealth-fighter-stop-in-midair-and-drop-straight-down/vi-AA2aWVQI?ocid=hpmsn
                                - heading "Watch a $100 million stealth fighter stop in midair and drop straight down" [level=2] [ref=e1204]:
                                  - generic: Watch a $100 million stealth fighter stop in midair and drop straight down
                            - button "See more" [ref=e1208]
                        - article [ref=e1211]:
                          - generic [ref=e1212]:
                            - img "The Easy One-Pan Chicken & Root Veggie Dinner" [ref=e1214]
                            - generic [ref=e1216]: 16:41
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1217]:
                              - generic [ref=e1218]:
                                - img "America's Test Kitchen" [ref=e1219]
                                - generic [ref=e1220]:
                                  - generic:
                                    - generic "America's Test Kitchen" [ref=e1221]
                                    - generic [ref=e1222]: ·
                                    - generic [ref=e1223]: 22h
                              - link "The easy one-pan chicken & root veggie dinner" [ref=e1224]:
                                - /url: https://www.msn.com/en-in/food-and-drink/recipes/the-easy-one-pan-chicken-root-veggie-dinner/vi-AA2baIZM?ocid=hpmsn
                                - heading "The easy one-pan chicken & root veggie dinner" [level=2] [ref=e1225]:
                                  - generic: The easy one-pan chicken & root veggie dinner
                            - button "See more" [ref=e1229]
                        - article [ref=e1232]:
                          - generic [ref=e1233]:
                            - img "How to Buy, Clean, and Cook Every Type of Mushroom" [ref=e1235]
                            - generic [ref=e1237]: 04:59
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1238]:
                              - generic [ref=e1239]:
                                - img "America's Test Kitchen" [ref=e1240]
                                - generic [ref=e1241]:
                                  - generic:
                                    - generic "America's Test Kitchen" [ref=e1242]
                                    - generic [ref=e1243]: ·
                                    - generic [ref=e1244]: 22h
                              - link "How to buy, clean, and cook every type of mushroom" [ref=e1245]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/how-to-buy-clean-and-cook-every-type-of-mushroom/vi-AA2baGuL?ocid=hpmsn
                                - heading "How to buy, clean, and cook every type of mushroom" [level=2] [ref=e1246]:
                                  - generic: How to buy, clean, and cook every type of mushroom
                            - button "See more" [ref=e1250]
                        - article "How to make traditional Puerto Rican dumplings & salt cod" [ref=e1253]:
                          - generic [ref=e1254]:
                            - img "How to Make Traditional Puerto Rican Dumplings & Salt Cod" [ref=e1256]
                            - generic [ref=e1258]: 10:50
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1259]:
                              - generic [ref=e1260]:
                                - img "America's Test Kitchen" [ref=e1261]
                                - generic [ref=e1262]:
                                  - generic:
                                    - generic "America's Test Kitchen" [ref=e1263]
                                    - generic [ref=e1264]: ·
                                    - generic [ref=e1265]: 22h
                              - link "How to make traditional Puerto Rican dumplings & salt cod" [ref=e1266]:
                                - /url: https://www.msn.com/en-in/food-and-drink/world-cuisines/how-to-make-traditional-puerto-rican-dumplings-salt-cod/vi-AA2baLn0?ocid=hpmsn
                                - heading "How to make traditional Puerto Rican dumplings & salt cod" [level=2] [ref=e1267]:
                                  - generic: How to make traditional Puerto Rican dumplings & salt cod
                            - button "See more" [ref=e1271]
                        - article [ref=e1274]:
                          - generic [ref=e1275]:
                            - img "Inside a $25,000,000 Los Angeles Modern Home with Detached Guest Home & Tennis Court" [ref=e1277]
                            - generic [ref=e1279]: 29:08
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1280]:
                              - generic [ref=e1281]:
                                - img "Enes Yilmazer" [ref=e1282]
                                - generic [ref=e1283]:
                                  - generic:
                                    - generic "Enes Yilmazer" [ref=e1284]
                                    - generic [ref=e1285]: ·
                                    - generic [ref=e1286]: 14h
                              - link "Touring a $25M Los Angeles estate with a private tennis court" [ref=e1287]:
                                - /url: https://www.msn.com/en-in/money/general/touring-a-25m-los-angeles-estate-with-a-private-tennis-court/vi-AA26TmvX?ocid=hpmsn
                                - heading "Touring a $25M Los Angeles estate with a private tennis court" [level=2] [ref=e1288]:
                                  - generic: Touring a $25M Los Angeles estate with a private tennis court
                            - button "See more" [ref=e1292]
                        - article "How to hand knit a cozy chunky blanket—beginner-friendly & budget yarn hack!" [ref=e1295]:
                          - generic [ref=e1296]:
                            - img "DIY GIANT CHUNKY BLANKET! (easiest budget gift idea!)" [ref=e1298]
                            - generic [ref=e1300]: 04:56
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1301]:
                              - generic [ref=e1302]:
                                - img "Do It On A Dime" [ref=e1303]
                                - generic [ref=e1304]:
                                  - generic:
                                    - generic "Do It On A Dime" [ref=e1305]
                                    - generic [ref=e1306]: ·
                                    - generic [ref=e1307]: 16h
                              - link "How to hand knit a cozy chunky blanket—beginner-friendly & budget yarn hack!" [ref=e1308]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/how-to-hand-knit-a-cozy-chunky-blanket-beginner-friendly-budget-yarn-hack/vi-AA22tvwD?ocid=hpmsn
                                - heading "How to hand knit a cozy chunky blanket—beginner-friendly & budget yarn hack!" [level=2] [ref=e1309]:
                                  - generic: How to hand knit a cozy chunky blanket—beginner-friendly & budget yarn hack!
                            - button "See more" [ref=e1313]
                        - article "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [ref=e1316]:
                          - generic [ref=e1317]:
                            - img "Trevor Noah Breaks Down the Real Reason Idris Elba could NOT play James Bond" [ref=e1319]
                            - generic [ref=e1321]: 09:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1322]:
                              - generic [ref=e1323]:
                                - img "Trevor Noah" [ref=e1324]
                                - generic [ref=e1325]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1326]
                                    - generic [ref=e1327]: ·
                                    - generic [ref=e1328]: 1w
                              - link "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [ref=e1329]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/trevor-noah-breaks-down-the-real-reason-idris-elba-could-not-play-james-bond/vi-AA2agdSv?ocid=hpmsn
                                - heading "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [level=2] [ref=e1330]:
                                  - generic: Trevor Noah breaks down the real reason Idris Elba could not play James Bond
                            - button "See more" [ref=e1334]
                        - article [ref=e1337]:
                          - generic [ref=e1338]:
                            - img "Golden Retriever Is Hiding Something Smart" [ref=e1340]
                            - generic [ref=e1342]: 01:22
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1343]:
                              - generic [ref=e1344]:
                                - img "Tucker Budzyn" [ref=e1345]
                                - generic [ref=e1346]:
                                  - generic:
                                    - generic "Tucker Budzyn" [ref=e1347]
                                    - generic [ref=e1348]: ·
                                    - generic [ref=e1349]: 19h
                              - link "Golden Retriever Is Hiding Something Smart" [ref=e1350]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/golden-retriever-is-hiding-something-smart/vi-AA2baYNx?ocid=hpmsn
                                - heading "Golden Retriever Is Hiding Something Smart" [level=2] [ref=e1351]:
                                  - generic: Golden Retriever Is Hiding Something Smart
                            - button "See more" [ref=e1355]
                        - article [ref=e1358]:
                          - generic [ref=e1359]:
                            - img "Inside a $13,800,000 Paris Designer Apartment" [ref=e1361]
                            - generic [ref=e1363]: 33:13
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1364]:
                              - generic [ref=e1365]:
                                - img "Enes Yilmazer" [ref=e1366]
                                - generic [ref=e1367]:
                                  - generic:
                                    - generic "Enes Yilmazer" [ref=e1368]
                                    - generic [ref=e1369]: ·
                                    - generic [ref=e1370]: 14h
                              - link "Tour a $13.8M Paris apartment crafted by a designer" [ref=e1371]:
                                - /url: https://www.msn.com/en-in/money/general/tour-a-13-8m-paris-apartment-crafted-by-a-designer/vi-AA28l53h?ocid=hpmsn
                                - heading "Tour a $13.8M Paris apartment crafted by a designer" [level=2] [ref=e1372]:
                                  - generic: Tour a $13.8M Paris apartment crafted by a designer
                            - button "See more" [ref=e1376]
                        - 'article "Dollar Tree haul: Discover organization, home decor & party supplies" [ref=e1379]':
                          - generic [ref=e1380]:
                            - img "DOLLAR TREE SHOPPING VLOG! 💚 ORGANIZATION & MORE 💚 Spring/Summer 2017" [ref=e1382]
                            - generic [ref=e1384]: 05:33
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1385]:
                              - generic [ref=e1386]:
                                - img "Do It On A Dime" [ref=e1387]
                                - generic [ref=e1388]:
                                  - generic:
                                    - generic "Do It On A Dime" [ref=e1389]
                                    - generic [ref=e1390]: ·
                                    - generic [ref=e1391]: 6h
                              - 'link "Dollar Tree haul: Discover organization, home decor & party supplies" [ref=e1392]':
                                - /url: https://www.msn.com/en-in/lifestyle/other/dollar-tree-haul-discover-organization-home-decor-party-supplies/vi-AA23Mkeh?ocid=hpmsn
                                - 'heading "Dollar Tree haul: Discover organization, home decor & party supplies" [level=2] [ref=e1393]':
                                  - generic: "Dollar Tree haul: Discover organization, home decor & party supplies"
                            - button "See more" [ref=e1397]
                        - article [ref=e1400]:
                          - generic [ref=e1401]:
                            - img "Plastic surgeon reacts to extreme facial swelling cases in China" [ref=e1403]
                            - generic [ref=e1405]: 08:31
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1406]:
                              - generic [ref=e1407]:
                                - img "Doctor Youn" [ref=e1408]
                                - generic [ref=e1409]:
                                  - generic:
                                    - generic "Doctor Youn" [ref=e1410]
                                    - generic [ref=e1411]: ·
                                    - generic [ref=e1412]: 14h
                              - link "Plastic surgeon examines severe facial swelling cases" [ref=e1413]:
                                - /url: https://www.msn.com/en-in/health/general/plastic-surgeon-examines-severe-facial-swelling-cases/vi-AA258apw?ocid=hpmsn
                                - heading "Plastic surgeon examines severe facial swelling cases" [level=2] [ref=e1414]:
                                  - generic: Plastic surgeon examines severe facial swelling cases
                            - button "See more" [ref=e1418]
                        - article "Trevor Noah thinks America is obsessed with the wrong problems" [ref=e1421]:
                          - generic [ref=e1422]:
                            - img "Trevor Noah Thinks America Is Obsessed With the Wrong Problems" [ref=e1424]
                            - generic [ref=e1426]: 08:48
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1427]:
                              - generic [ref=e1428]:
                                - img "Trevor Noah" [ref=e1429]
                                - generic [ref=e1430]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1431]
                                    - generic [ref=e1432]: ·
                                    - generic [ref=e1433]: 3d
                              - link "Trevor Noah thinks America is obsessed with the wrong problems" [ref=e1434]:
                                - /url: https://www.msn.com/en-in/news/other/trevor-noah-thinks-america-is-obsessed-with-the-wrong-problems/vi-AA2b0Ptz?ocid=hpmsn
                                - heading "Trevor Noah thinks America is obsessed with the wrong problems" [level=2] [ref=e1435]:
                                  - generic: Trevor Noah thinks America is obsessed with the wrong problems
                            - button "See more" [ref=e1439]
                        - article "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [ref=e1442]:
                          - generic [ref=e1443]:
                            - img "Keke Palmer Was Supporting 5 People As A Teenager - Then She Finally Broke Down" [ref=e1445]
                            - generic [ref=e1447]: 12:56
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1448]:
                              - generic [ref=e1449]:
                                - img "TED" [ref=e1450]
                                - generic [ref=e1451]:
                                  - generic:
                                    - generic "TED" [ref=e1452]
                                    - generic [ref=e1453]: ·
                                    - generic [ref=e1454]: 1w
                              - link "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [ref=e1455]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/keke-palmer-was-supporting-5-people-as-a-teenager-then-she-finally-broke-down/vi-AA240j91?ocid=hpmsn
                                - heading "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [level=2] [ref=e1456]:
                                  - generic: Keke Palmer was supporting 5 people as a teenager - then she finally broke down
                            - button "See more" [ref=e1460]
                        - link "See more" [ref=e1462]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1463]
                          - text: See more
                    - button "next" [ref=e1467]:
                      - img [ref=e1470]
            - 'article "What''s wrong with such company?: Lavrov''s blunt reply when asked about Russia''s ''only'' allies" [ref=e1472] [cursor=pointer]':
              - generic [ref=e1474]:
                - img [ref=e1475]
                - generic [ref=e1476]:
                  - generic [ref=e1477]:
                    - generic [ref=e1478]:
                      - generic [ref=e1479]:
                        - img [ref=e1480]
                        - generic [ref=e1481]: News18
                      - generic [ref=e1482]: ·
                      - generic [ref=e1483]: 2h
                    - 'link "What''s wrong with such company?: Lavrov''s blunt reply when asked about Russia''s ''only'' allies, News18" [ref=e1484]':
                      - /url: https://www.msn.com/en-in/news/other/what-s-wrong-with-such-company-lavrov-s-blunt-reply-when-asked-about-russia-s-only-allies/ar-AA2bcvwE
                      - text: "What's wrong with such company?: Lavrov's blunt reply when asked about Russia's 'only' allies"
                  - 'generic "What''s wrong with such company?: Lavrov''s blunt reply when asked about Russia''s ''only'' allies" [ref=e1487]':
                    - generic [ref=e1489]:
                      - generic [ref=e1490]:
                        - button "2 Likes" [ref=e1491]:
                          - generic [ref=e1492]:
                            - img [ref=e1493]
                            - generic [ref=e1495]: "2"
                        - button "Dislike" [ref=e1496]:
                          - img [ref=e1498]
                      - link "Start the conversation" [ref=e1501]:
                        - /url: https://www.msn.com/en-in/news/other/what-s-wrong-with-such-company-lavrov-s-blunt-reply-when-asked-about-russia-s-only-allies/ar-AA2bcvwE#comments
                        - button "Start the conversation" [ref=e1502]:
                          - img [ref=e1503]
                - generic [ref=e1505]:
                  - button "Hide this story" [ref=e1506]:
                    - img [ref=e1507]
                    - text: Hide this story
                  - button "See more" [ref=e1508]:
                    - img [ref=e1509]
            - 'article "Ivanka Trump’s changing appearance: a plastic surgeon’s view" [ref=e1510] [cursor=pointer]':
              - generic [ref=e1512]:
                - generic [ref=e1518]:
                  - generic [ref=e1519]:
                    - generic [ref=e1520]:
                      - generic [ref=e1521]:
                        - img [ref=e1522]
                        - generic [ref=e1523]: Doctor Youn
                      - generic [ref=e1524]: ·
                      - generic [ref=e1525]: 6d
                    - 'link "Ivanka Trump’s changing appearance: a plastic surgeon’s view, Doctor Youn" [ref=e1526]':
                      - /url: https://www.msn.com/en-in/entertainment/general/ivanka-trump-s-changing-appearance-a-plastic-surgeon-s-view/vi-AA22WPHd
                      - text: "Ivanka Trump’s changing appearance: a plastic surgeon’s view"
                  - 'generic "Ivanka Trump’s changing appearance: a plastic surgeon’s view" [ref=e1529]':
                    - generic [ref=e1531]:
                      - generic [ref=e1532]:
                        - button "152 Likes" [ref=e1533]:
                          - generic [ref=e1534]:
                            - img [ref=e1535]
                            - generic [ref=e1537]: "152"
                        - button "57 Dislikes" [ref=e1538]:
                          - img [ref=e1540]
                      - link "Start the conversation" [ref=e1543]:
                        - /url: https://www.msn.com/en-in/entertainment/general/ivanka-trump-s-changing-appearance-a-plastic-surgeon-s-view/vi-AA22WPHd#comments
                        - button "Start the conversation" [ref=e1544]:
                          - img [ref=e1545]
                - generic [ref=e1547]:
                  - button "Hide this story" [ref=e1548]:
                    - img [ref=e1549]
                    - text: Hide this story
                  - button "See more" [ref=e1550]:
                    - img [ref=e1551]
            - article "Indian doctor compares India, UK healthcare after husband falls ill at 10 pm" [ref=e1552] [cursor=pointer]:
              - generic [ref=e1554]:
                - img [ref=e1555]
                - generic [ref=e1556]:
                  - generic [ref=e1557]:
                    - generic [ref=e1558]:
                      - generic [ref=e1559]:
                        - img [ref=e1560]
                        - generic [ref=e1561]: India Today
                      - generic [ref=e1562]: ·
                      - generic [ref=e1563]: 4h
                    - link "Indian doctor compares India, UK healthcare after husband falls ill at 10 pm, India Today" [ref=e1564]:
                      - /url: https://www.msn.com/en-in/health/general/indian-doctor-compares-india-uk-healthcare-after-husband-falls-ill-at-10-pm/ar-AA2bc5v8
                      - text: Indian doctor compares India, UK healthcare after husband falls ill at 10 pm
                  - generic "Indian doctor compares India, UK healthcare after husband falls ill at 10 pm" [ref=e1567]:
                    - generic [ref=e1569]:
                      - generic [ref=e1570]:
                        - button "10 Likes" [ref=e1571]:
                          - generic [ref=e1572]:
                            - img [ref=e1573]
                            - generic [ref=e1575]: "10"
                        - button "3 Dislikes" [ref=e1576]:
                          - img [ref=e1578]
                      - link "Start the conversation" [ref=e1581]:
                        - /url: https://www.msn.com/en-in/health/general/indian-doctor-compares-india-uk-healthcare-after-husband-falls-ill-at-10-pm/ar-AA2bc5v8#comments
                        - button "Start the conversation" [ref=e1582]:
                          - img [ref=e1583]
                - generic [ref=e1585]:
                  - button "Hide this story" [ref=e1586]:
                    - img [ref=e1587]
                    - text: Hide this story
                  - button "See more" [ref=e1588]:
                    - img [ref=e1589]
            - 'article "IMD issues rain warning: Heavy to very heavy showers forecast across several Indian states; what travellers need to know" [ref=e1590] [cursor=pointer]':
              - generic [ref=e1592]:
                - img [ref=e1593]
                - generic [ref=e1594]:
                  - generic [ref=e1595]:
                    - generic [ref=e1596]:
                      - generic [ref=e1597]:
                        - img [ref=e1598]
                        - generic [ref=e1599]: The Times of India
                      - generic [ref=e1600]: ·
                      - generic [ref=e1601]: 5h
                    - 'link "IMD issues rain warning: Heavy to very heavy showers forecast across several Indian states; what travellers need to know, The Times of India" [ref=e1602]':
                      - /url: https://www.msn.com/en-in/weather/meteorology/imd-issues-rain-warning-heavy-to-very-heavy-showers-forecast-across-several-indian-states-what-travellers-need-to-know/ar-AA2bc0Qo
                      - text: "IMD issues rain warning: Heavy to very heavy showers forecast across several Indian states; what travellers need to know"
                  - 'generic "IMD issues rain warning: Heavy to very heavy showers forecast across several Indian states; what travellers need to know" [ref=e1605]':
                    - generic [ref=e1607]:
                      - generic [ref=e1608]:
                        - button "3 Likes" [ref=e1609]:
                          - generic [ref=e1610]:
                            - img [ref=e1611]
                            - generic [ref=e1613]: "3"
                        - button "2 Dislikes" [ref=e1614]:
                          - img [ref=e1616]
                      - link "Start the conversation" [ref=e1619]:
                        - /url: https://www.msn.com/en-in/weather/meteorology/imd-issues-rain-warning-heavy-to-very-heavy-showers-forecast-across-several-indian-states-what-travellers-need-to-know/ar-AA2bc0Qo#comments
                        - button "Start the conversation" [ref=e1620]:
                          - img [ref=e1621]
                - generic [ref=e1623]:
                  - button "Hide this story" [ref=e1624]:
                    - img [ref=e1625]
                    - text: Hide this story
                  - button "See more" [ref=e1626]:
                    - img [ref=e1627]
            - article [ref=e1628] [cursor=pointer]
            - 'article "''Ude jab jab zulfein teri'': Child artists steal the show as PM Modi gets a ''cute'' Bollywood welcome in Uzbekistan | VIDEO" [ref=e1635] [cursor=pointer]':
              - generic [ref=e1637]:
                - img [ref=e1638]
                - generic [ref=e1639]:
                  - generic [ref=e1640]:
                    - generic [ref=e1641]:
                      - generic [ref=e1642]:
                        - img [ref=e1643]
                        - generic [ref=e1644]: The Daily Jagran
                      - generic [ref=e1645]: ·
                      - generic [ref=e1646]: 5h
                    - 'link "''Ude jab jab zulfein teri'': Child artists steal the show as PM Modi gets a ''cute'' Bollywood welcome in Uzbekistan | VIDEO, The Daily Jagran" [ref=e1647]':
                      - /url: https://www.msn.com/en-in/entertainment/music/ude-jab-jab-zulfein-teri-child-artists-steal-the-show-as-pm-modi-gets-a-cute-bollywood-welcome-in-uzbekistan-video/ar-AA2bcBZL
                      - text: "'Ude jab jab zulfein teri': Child artists steal the show as PM Modi gets a 'cute' Bollywood welcome in Uzbekistan | VIDEO"
                  - 'generic "''Ude jab jab zulfein teri'': Child artists steal the show as PM Modi gets a ''cute'' Bollywood welcome in Uzbekistan | VIDEO" [ref=e1650]':
                    - generic [ref=e1652]:
                      - generic [ref=e1653]:
                        - button "17 Likes" [ref=e1654]:
                          - generic [ref=e1655]:
                            - img [ref=e1656]
                            - generic [ref=e1658]: "17"
                        - button "6 Dislikes" [ref=e1659]:
                          - img [ref=e1661]
                      - link "View comments 1 Comment" [ref=e1664]:
                        - /url: https://www.msn.com/en-in/entertainment/music/ude-jab-jab-zulfein-teri-child-artists-steal-the-show-as-pm-modi-gets-a-cute-bollywood-welcome-in-uzbekistan-video/ar-AA2bcBZL#comments
                        - button "View comments 1 Comment" [ref=e1665]:
                          - img [ref=e1666]
                        - generic [ref=e1668]: "1"
                - generic [ref=e1669]:
                  - button "Hide this story" [ref=e1670]:
                    - img [ref=e1671]
                    - text: Hide this story
                  - button "See more" [ref=e1672]:
                    - img [ref=e1673]
          - generic [ref=e1674]:
            - article [ref=e1675] [cursor=pointer]
            - 'article "The best places to retire in India: Affordable, peaceful, and senior-friendly" [ref=e1682] [cursor=pointer]':
              - generic [ref=e1684]:
                - img [ref=e1685]
                - generic [ref=e1686]:
                  - generic [ref=e1687]:
                    - generic [ref=e1689]:
                      - img [ref=e1690]
                      - generic [ref=e1691]: The Times of India
                    - 'link "The best places to retire in India: Affordable, peaceful, and senior-friendly, The Times of India" [ref=e1692]':
                      - /url: https://www.msn.com/en-in/lifestyle/other/the-best-places-to-retire-in-india-affordable-peaceful-and-senior-friendly/ss-AA25bMFz
                      - text: "The best places to retire in India: Affordable, peaceful, and senior-friendly"
                  - 'generic "The best places to retire in India: Affordable, peaceful, and senior-friendly" [ref=e1695]':
                    - generic [ref=e1697]:
                      - generic [ref=e1698]:
                        - button "25 Likes" [ref=e1699]:
                          - generic [ref=e1700]:
                            - img [ref=e1701]
                            - generic [ref=e1703]: "25"
                        - button "21 Dislikes" [ref=e1704]:
                          - img [ref=e1706]
                      - link "Start the conversation" [ref=e1709]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/the-best-places-to-retire-in-india-affordable-peaceful-and-senior-friendly/ss-AA25bMFz#comments
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