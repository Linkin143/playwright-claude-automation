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
        - 'link "Phoenix: Clear, 28 °C" [ref=e31] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
          - generic "Phoenix, Arizona, United States Click here to see more information" [ref=e32]: Phoenix
          - img "Clear" [ref=e34]
          - generic [ref=e35]:
            - generic [ref=e36]: ‎28‎
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
          - button "Sign in to your account" [ref=e49] [cursor=pointer]:
            - generic [ref=e50]: Sign in to your account
            - generic [ref=e52]: Sign in
      - search [ref=e55]:
        - generic [ref=e56]:
          - generic "Web search" [ref=e57] [cursor=pointer]:
            - button "Web search" [ref=e58]:
              - generic:
                - generic:
                  - img
          - searchbox "Enter your search term" [ref=e59]
  - generic [ref=e60]:
    - generic [ref=e61]:
      - generic [ref=e66]:
        - list [ref=e69]:
          - listitem [ref=e70]:
            - link "Outlook.com" [ref=e73] [cursor=pointer]:
              - /url: https://outlook.com
              - generic [ref=e77]: Outlook.com
          - listitem [ref=e78]:
            - link "Flipkart" [ref=e81] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=401531&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e84]:
                - generic [ref=e85]: Flipkart
                - generic [ref=e87]: Sponsored
          - listitem [ref=e88]:
            - link "Find a tutor" [ref=e91] [cursor=pointer]:
              - /url: https://www.bing.com/pros?FORM=BPIMNS
              - generic [ref=e95]: Find a tutor
          - listitem [ref=e96]:
            - link "Booking.com" [ref=e99] [cursor=pointer]:
              - /url: https://www.booking.com/index.html?aid=1624937&label=enin-msn-hp-mestripe
              - generic [ref=e102]:
                - generic [ref=e103]: Booking.com
                - generic [ref=e105]: Sponsored
          - listitem [ref=e106]:
            - link "Ajio" [ref=e109] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=393141&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e112]:
                - generic [ref=e113]: Ajio
                - generic [ref=e115]: Sponsored
          - listitem [ref=e116]:
            - link "Facebook" [ref=e119] [cursor=pointer]:
              - /url: https://www.facebook.com
              - generic [ref=e123]: Facebook
          - listitem [ref=e124]:
            - link "Microsoft 365" [ref=e127] [cursor=pointer]:
              - /url: https://www.office.com/?omkt=en-IN
              - generic [ref=e131]: Microsoft 365
          - listitem [ref=e132]:
            - link "X" [ref=e135] [cursor=pointer]:
              - /url: https://x.com
              - generic [ref=e139]: X
          - listitem [ref=e140]:
            - link "OneDrive" [ref=e143] [cursor=pointer]:
              - /url: https://onedrive.live.com/?wt.mc_id=oo_msn_msnhomepage_header
              - generic [ref=e147]: OneDrive
          - listitem [ref=e148]:
            - link "Skype" [ref=e151] [cursor=pointer]:
              - /url: https://www.skype.com/
              - generic [ref=e155]: Skype
          - listitem [ref=e156]:
            - link "OneNote" [ref=e159] [cursor=pointer]:
              - /url: https://www.onenote.com/notebooks?WT.mc_id=MSN_OneNote_TopMenu&auth=1&wdorigin=msn
              - generic [ref=e163]: OneNote
          - listitem [ref=e164]:
            - link "Maps" [ref=e167] [cursor=pointer]:
              - /url: https://bing.com/maps/?FORM=MSNMAP
              - generic [ref=e171]: Maps
          - listitem [ref=e172]:
            - link "Microsoft Store" [ref=e175] [cursor=pointer]:
              - /url: https://www.microsoft.com/en-in
              - generic [ref=e179]: Microsoft Store
        - button [ref=e180]:
          - img [ref=e183]
      - generic [ref=e185]:
        - banner [ref=e186]
        - generic [ref=e187]:
          - generic [ref=e191]:
            - navigation [ref=e193]:
              - generic [ref=e194]:
                - list [ref=e195]:
                  - listitem [ref=e196]:
                    - link "Discover" [ref=e197] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in
                - list [ref=e198]:
                  - listitem [ref=e199]:
                    - link "News" [ref=e200] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f
                  - listitem [ref=e201]:
                    - link "Sports" [ref=e202] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in/sports
              - generic "Show more topics" [ref=e204] [cursor=pointer]:
                - button "Show more topics" [ref=e205]:
                  - generic:
                    - generic:
                      - img
            - generic "Personalize your feed\"" [ref=e207] [cursor=pointer]:
              - button "Personalize your feed\"" [ref=e208]:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic: Personalize
          - button "Make MSN my homepage" [ref=e210] [cursor=pointer]
      - main [ref=e213]:
        - generic [ref=e216]:
          - generic [ref=e217]:
            - generic [ref=e220]:
              - tablist [ref=e222]:
                - tab "News story" [ref=e223] [cursor=pointer]
                - tab "Sponsored" [ref=e225] [cursor=pointer]
                - tab "News story" [ref=e227] [cursor=pointer]
                - tab "News story" [ref=e229] [cursor=pointer]
                - tab "News story" [ref=e231] [cursor=pointer]
                - tab "Sponsored" [selected] [ref=e233] [cursor=pointer]
                - tab "News story" [ref=e235] [cursor=pointer]
                - tab "News story" [ref=e237] [cursor=pointer]
                - tab "Sponsored" [ref=e239] [cursor=pointer]
                - tab "News story" [ref=e241] [cursor=pointer]
                - tab "News story" [ref=e243] [cursor=pointer]
                - tab "News story" [ref=e245] [cursor=pointer]
                - tab "Sponsored" [ref=e247] [cursor=pointer]
                - tab "News story" [ref=e249] [cursor=pointer]
                - tab "News story" [ref=e251] [cursor=pointer]
                - tab "News story" [ref=e253] [cursor=pointer]
                - tab "News story" [ref=e255] [cursor=pointer]
                - tab "News story" [ref=e257] [cursor=pointer]
                - tab "Sponsored" [ref=e259] [cursor=pointer]
                - tab "News story" [ref=e261] [cursor=pointer]
                - tab "News story" [ref=e263] [cursor=pointer]
                - tab "News story" [ref=e265] [cursor=pointer]
                - tab "News story" [ref=e267] [cursor=pointer]
                - tab "News story" [ref=e269] [cursor=pointer]
                - tab "Sponsored" [ref=e271] [cursor=pointer]
                - tab "News story" [ref=e273] [cursor=pointer]
                - tab "News story" [ref=e275] [cursor=pointer]
                - tab "News story" [ref=e277] [cursor=pointer]
                - tab "News story" [ref=e279] [cursor=pointer]
                - tab "News story" [ref=e281] [cursor=pointer]
              - button [ref=e285]
              - button [ref=e288]
              - article "Install Chrome for Windows" [ref=e289] [cursor=pointer]:
                - generic [ref=e291]:
                  - img [ref=e292]
                  - generic [ref=e293]:
                    - generic [ref=e294]:
                      - generic [ref=e297]: Google Chrome
                      - link "Install Chrome for Windows, Google Chrome" [ref=e298]:
                        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=9fb9b419-7896-41ba-bcc8-bdfa4646ff8b&bdc=pb&bidId=9&bidderId=4&cmExpId=LV1&impId=2&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=5ca971c5-54a7-4bb4-b9c6-133577e56cf4&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8_myEnpOHMYMmcXnJX1N_rTVUCUzcBsOuCb5MMkX6J4Vq725uMz3xMZSjW59DmH8nIF4kgyQAn-qKWLMjqfzdrQyCl24GIQqa2W8MKpO-yzM_EgcscyQ8eNsUAlZhJ_xEGGBkaNgVrUiOY_p-ntwn4iP6PKnrEMw9MpEMs64gQIpXvckkwB6AIB2Kc68TzGV053MGTopUsXYsFVBpgzvqnlZz1ss%26u%3DaHR0cHMlM2ElMmYlMmZhZC5kb3VibGVjbGljay5uZXQlMmZkZG0lMmZ0cmFja2NsayUyZk41Mjk1LjUwNzUxNzhCSU5HRElTUExBWSUyZkIzNDYxNDY5OC40NDY0MzIwMzAlM2JkY190cmtfYWlkJTNkNjM5OTIyMTI4JTNiZGNfdHJrX2NpZCUzZDI0NjYxMTkyNSUzYmRjX2xhdCUzZCUzYmRjX3JkaWQlM2QlM2J0YWdfZm9yX2NoaWxkX2RpcmVjdGVkX3RyZWF0bWVudCUzZCUzYnRmdWElM2QlM2JnZHByJTNkJTI0JTdiR0RQUiU3ZCUzYmdkcHJfY29uc2VudCUzZCUyNCU3YkdEUFJfQ09OU0VOVF83NTUlN2QlM2JsdGQlM2QlM2JkY190ZHYlM2QxJTNmbXNjbGtpZCUzZGNhZjdiNjcwNzM1ODExYzY3ZTQyZGNkZmVlOWM3YzFmJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkMTcxMzg1NiUyNTIwJTI1N0MlMjUyMENocm9tZSUyNTIwV2luZG93cyUyNTIwJTI1N0MlMjUyMERSJTI1MjAlMjU3QyUyNTIwRVNTMDElMjUyMCUyNTdDJTI1MjBOQSUyNTIwJTI1N0MlMjUyMFVTJTI1MjAlMjU3QyUyNTIwZW4lMjUyMCUyNTdDJTI1MjBEZXNrJTI1MjAlMjU3QyUyNTIwRElTUCUyNTIwJTI1N0MlMjUyME1UJTI1MjAlMjU3QyUyNTIwSHlicmlkJTI1MjAlMjU3QyUyNTIwQmluZ19TdGFuZGFyZCUyNnV0bV90ZXJtJTNka2V5d29yZCUyNnV0bV9jb250ZW50JTNkRGVzayUyNTIwJTI1N0MlMjUyMElNUyUyNTIwJTI1N0MlMjUyMEh5YnJpZF9TdGFuZGFyZF8oT1BJRC00NzQ2Mjc3KQ%26rlid%3Dcaf7b670735811c67e42dcdfee9c7c1f&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                        - text: Install Chrome for Windows
                    - link "Sponsored" [ref=e300]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=9fb9b419-7896-41ba-bcc8-bdfa4646ff8b&bdc=pb&bidId=9&bidderId=4&cmExpId=LV1&impId=2&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=5ca971c5-54a7-4bb4-b9c6-133577e56cf4&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8_myEnpOHMYMmcXnJX1N_rTVUCUzcBsOuCb5MMkX6J4Vq725uMz3xMZSjW59DmH8nIF4kgyQAn-qKWLMjqfzdrQyCl24GIQqa2W8MKpO-yzM_EgcscyQ8eNsUAlZhJ_xEGGBkaNgVrUiOY_p-ntwn4iP6PKnrEMw9MpEMs64gQIpXvckkwB6AIB2Kc68TzGV053MGTopUsXYsFVBpgzvqnlZz1ss%26u%3DaHR0cHMlM2ElMmYlMmZhZC5kb3VibGVjbGljay5uZXQlMmZkZG0lMmZ0cmFja2NsayUyZk41Mjk1LjUwNzUxNzhCSU5HRElTUExBWSUyZkIzNDYxNDY5OC40NDY0MzIwMzAlM2JkY190cmtfYWlkJTNkNjM5OTIyMTI4JTNiZGNfdHJrX2NpZCUzZDI0NjYxMTkyNSUzYmRjX2xhdCUzZCUzYmRjX3JkaWQlM2QlM2J0YWdfZm9yX2NoaWxkX2RpcmVjdGVkX3RyZWF0bWVudCUzZCUzYnRmdWElM2QlM2JnZHByJTNkJTI0JTdiR0RQUiU3ZCUzYmdkcHJfY29uc2VudCUzZCUyNCU3YkdEUFJfQ09OU0VOVF83NTUlN2QlM2JsdGQlM2QlM2JkY190ZHYlM2QxJTNmbXNjbGtpZCUzZGNhZjdiNjcwNzM1ODExYzY3ZTQyZGNkZmVlOWM3YzFmJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkMTcxMzg1NiUyNTIwJTI1N0MlMjUyMENocm9tZSUyNTIwV2luZG93cyUyNTIwJTI1N0MlMjUyMERSJTI1MjAlMjU3QyUyNTIwRVNTMDElMjUyMCUyNTdDJTI1MjBOQSUyNTIwJTI1N0MlMjUyMFVTJTI1MjAlMjU3QyUyNTIwZW4lMjUyMCUyNTdDJTI1MjBEZXNrJTI1MjAlMjU3QyUyNTIwRElTUCUyNTIwJTI1N0MlMjUyME1UJTI1MjAlMjU3QyUyNTIwSHlicmlkJTI1MjAlMjU3QyUyNTIwQmluZ19TdGFuZGFyZCUyNnV0bV90ZXJtJTNka2V5d29yZCUyNnV0bV9jb250ZW50JTNkRGVzayUyNTIwJTI1N0MlMjUyMElNUyUyNTIwJTI1N0MlMjUyMEh5YnJpZF9TdGFuZGFyZF8oT1BJRC00NzQ2Mjc3KQ%26rlid%3Dcaf7b670735811c67e42dcdfee9c7c1f&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                  - button "See more" [ref=e302]:
                    - img [ref=e303]
            - article [ref=e304] [cursor=pointer]:
              - generic [ref=e309]:
                - generic [ref=e311]:
                  - link "Top stories" [ref=e313]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e314]
                  - button "More options" [ref=e316]
                - list [ref=e319]:
                  - listitem [ref=e320]:
                    - link "Breaking News18 3h Three killed, one injured as speeding BMW crashes on Coastal Road in Mumbai" [ref=e321]:
                      - /url: https://www.msn.com/en-in/news/other/three-killed-one-injured-as-speeding-bmw-crashes-on-coastal-road-in-mumbai/ar-AA2cANM9
                      - generic [ref=e322]:
                        - generic [ref=e323]:
                          - generic:
                            - generic [ref=e324]: Breaking
                            - img [ref=e325]
                          - generic [ref=e326]:
                            - generic: News18 ·3h
                        - generic [ref=e327]: Three killed, one injured as speeding BMW crashes on Coastal Road in Mumbai
                  - listitem [ref=e328]:
                    - 'link "NDTV 1h ''Uncouth, foul-mouthed'': BJP on Rahul Gandhi''s ''maa'' remarks with comic" [ref=e329]':
                      - /url: https://www.msn.com/en-in/news/other/uncouth-foul-mouthed-bjp-on-rahul-gandhi-s-maa-remarks-with-comic/ar-AA2cAz8H
                      - generic [ref=e330]:
                        - generic [ref=e331]:
                          - img [ref=e332]
                          - generic [ref=e333]:
                            - generic: NDTV ·1h
                        - generic [ref=e334]: "'Uncouth, foul-mouthed': BJP on Rahul Gandhi's 'maa' remarks with comic"
                  - listitem [ref=e335]:
                    - 'link "WION now Inspired by podcasts and Meghalaya murder case: How Siya allegedly planned Ketan Agarwal’s Lohagad fort murder" [ref=e336]':
                      - /url: https://www.msn.com/en-in/news/other/inspired-by-podcasts-and-meghalaya-murder-case-how-siya-allegedly-planned-ketan-agarwal-s-lohagad-fort-murder/ar-AA2cAcwe
                      - generic [ref=e337]:
                        - generic [ref=e338]:
                          - img [ref=e339]
                          - generic [ref=e340]:
                            - generic: WION ·now
                        - generic [ref=e341]: "Inspired by podcasts and Meghalaya murder case: How Siya allegedly planned Ketan Agarwal’s Lohagad fort murder"
                - generic [ref=e343]:
                  - generic [ref=e344]:
                    - generic "Previous" [ref=e345]:
                      - button "Previous" [ref=e346]
                    - tablist [ref=e348]:
                      - tab "Page 1" [selected] [ref=e349]
                      - tab "Page 2" [ref=e351]
                      - tab "Page 3" [ref=e353]
                    - generic "Next" [ref=e355]:
                      - button "Next" [ref=e356]
                  - link "See more" [ref=e358]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc&ocid=hpmsn
            - article [ref=e359] [cursor=pointer]:
              - generic [ref=e363]:
                - generic: Sponsored
            - article "Using the algorithm, we sift through 15,000 stocks every second." [ref=e364] [cursor=pointer]:
              - generic [ref=e366]:
                - img [ref=e367]
                - generic [ref=e368]:
                  - generic [ref=e369]:
                    - generic [ref=e372]: Stocks to Trade
                    - link "Using the algorithm, we sift through 15,000 stocks every second., Stocks to Trade" [ref=e373]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=8ea3a52d-fd7f-42bd-a764-714d52f5a83c&bdc=pb&bidId=7&bidderId=4&cmExpId=LV1&impId=8&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=5ca971c5-54a7-4bb4-b9c6-133577e56cf4&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8rPYGiAauySf9mkqVbM2tiTVUCUztDzNqk9de0L-3B5ZnBAZ54Lsz7uknTtxclrySjBQyZArowRH-OY_XrJUpnWO0PG0lMR1KW0Q0DrzZ8PDrtxuvNQRObyhqysEDjbuGl9OGW5TT4mzL8NuRMZrTY2scQmun3qAcPPZLz5Y0TpLPv1yqT-OKLPHpIsgW5fGdUr1aFuU6rh-z_JnReHGfCD--PCE%26u%3DaHR0cHMlM2ElMmYlMmZscC5zdG9ja3N0b3RyYWRlLmNvbSUyZmFsZ28tdHJhZGVyJTJmaW5kZXgtYy5waHAlM2Z1dG1fc291cmNlJTNkYmluZyUyNmhfY2FtcGFpZ25faWQlM2Q1Njk2MTUwMzglMjZibmdfaWQlM2QxMTgwODc3MzIxNzg3NzIwJTI2aF9hZF9pZCUzZDczODA1MDM5MjU2OTg5JTI2bXNjbGtpZCUzZGRmMTY4ZjExOGFkMzEwODM1ZTM0ZTViZTE3MTdmODA5%26rlid%3Ddf168f118ad310835e34e5be1717f809&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Using the algorithm, we sift through 15,000 stocks every second.
                  - link "Sponsored" [ref=e375]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=8ea3a52d-fd7f-42bd-a764-714d52f5a83c&bdc=pb&bidId=7&bidderId=4&cmExpId=LV1&impId=8&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=5ca971c5-54a7-4bb4-b9c6-133577e56cf4&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8rPYGiAauySf9mkqVbM2tiTVUCUztDzNqk9de0L-3B5ZnBAZ54Lsz7uknTtxclrySjBQyZArowRH-OY_XrJUpnWO0PG0lMR1KW0Q0DrzZ8PDrtxuvNQRObyhqysEDjbuGl9OGW5TT4mzL8NuRMZrTY2scQmun3qAcPPZLz5Y0TpLPv1yqT-OKLPHpIsgW5fGdUr1aFuU6rh-z_JnReHGfCD--PCE%26u%3DaHR0cHMlM2ElMmYlMmZscC5zdG9ja3N0b3RyYWRlLmNvbSUyZmFsZ28tdHJhZGVyJTJmaW5kZXgtYy5waHAlM2Z1dG1fc291cmNlJTNkYmluZyUyNmhfY2FtcGFpZ25faWQlM2Q1Njk2MTUwMzglMjZibmdfaWQlM2QxMTgwODc3MzIxNzg3NzIwJTI2aF9hZF9pZCUzZDczODA1MDM5MjU2OTg5JTI2bXNjbGtpZCUzZGRmMTY4ZjExOGFkMzEwODM1ZTM0ZTViZTE3MTdmODA5%26rlid%3Ddf168f118ad310835e34e5be1717f809&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e377]:
                  - img [ref=e378]
            - article [ref=e379] [cursor=pointer]:
              - generic [ref=e384]:
                - generic [ref=e386]:
                  - link "Games" [ref=e388]:
                    - /url: https://www.msn.com/en-in/play
                    - heading "Games" [level=2] [ref=e389]
                  - button "More options" [ref=e391]
                - list [ref=e395]:
                  - generic:
                    - listitem [ref=e396]:
                      - link "Ghost Range Sniper" [ref=e397]:
                        - /url: https://www.msn.com/en-in/play/games/ghost-range-sniper/cg-9mv8gjg4grt6?ocid=hpmsn&cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc&ei=3
                        - generic [ref=e398]:
                          - img "Ghost Range Sniper"
                    - listitem [ref=e399]:
                      - 'link "Car Destruction King: Mayhem" [ref=e400]':
                        - /url: https://www.msn.com/en-in/play/games/car-destruction-king-mayhem/cg-9pgbzt0smwg4?ocid=hpmsn&cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc&ei=3
                        - generic [ref=e401]:
                          - 'img "Car Destruction King: Mayhem"'
                    - listitem [ref=e402]:
                      - link "Jelly Run 2048" [ref=e403]:
                        - /url: https://www.msn.com/en-in/play/games/jelly-run-2048/cg-9nbckjw55fsv?ocid=hpmsn&cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc&ei=3
                        - generic [ref=e404]:
                          - img "Jelly Run 2048"
                    - listitem [ref=e405]:
                      - link "TapTap Arrow" [ref=e406]:
                        - /url: https://www.msn.com/en-in/play/games/taptap-arrow/cg-9ng0c12cnfsk?ocid=hpmsn&cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc&ei=3
                        - generic [ref=e407]:
                          - img "TapTap Arrow"
                    - listitem [ref=e408]:
                      - link "Zuno" [ref=e409]:
                        - /url: https://www.msn.com/en-in/play/games/zuno/cg-9pff1rr68z1q?ocid=hpmsn&cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc&ei=3
                        - generic [ref=e410]:
                          - img "Zuno"
                    - listitem [ref=e411]:
                      - link "Pizza Inc" [ref=e412]:
                        - /url: https://www.msn.com/en-in/play/games/pizza-inc/cg-9nvxkmwgcz2q?ocid=hpmsn&cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc&ei=3
                        - generic [ref=e413]:
                          - img "Pizza Inc"
                    - listitem [ref=e414]:
                      - link "Piece of Cake" [ref=e415]:
                        - /url: https://www.msn.com/en-in/play/games/piece-of-cake/cg-9n5mln8fpwg8?ocid=hpmsn&cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc&ei=3
                        - generic [ref=e416]:
                          - img "Piece of Cake"
                    - listitem [ref=e417]:
                      - link "Deadly Descent" [ref=e418]:
                        - /url: https://www.msn.com/en-in/play/games/deadly-descent/cg-9n7vxxr7llpk?ocid=hpmsn&cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc&ei=3
                        - generic [ref=e419]:
                          - img "Deadly Descent"
                    - listitem [ref=e420]:
                      - link "Arrow Slide Puzzle" [ref=e421]:
                        - /url: https://www.msn.com/en-in/play/games/arrow-slide-puzzle/cg-9p4rw4gjxb1f?ocid=hpmsn&cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc&ei=3
                        - generic [ref=e422]:
                          - img "Arrow Slide Puzzle"
                - generic [ref=e424]:
                  - generic [ref=e425]:
                    - generic "Previous" [ref=e426]:
                      - button "Previous" [ref=e427]
                    - tablist [ref=e429]:
                      - tab "Page 1" [selected] [ref=e430]
                      - tab "Page 2" [ref=e432]
                    - generic "Next" [ref=e434]:
                      - button "Next" [ref=e435]
                  - link "Explore more games" [ref=e437]:
                    - /url: https://www.msn.com/en-in/play
            - 'article "''Shameful, disgusting'': BJP blasts Rahul Gandhi over ''Chhatron Ki Goonj'' event video, objects to stage act" [ref=e438] [cursor=pointer]':
              - generic [ref=e440]:
                - img [ref=e441]
                - generic [ref=e442]:
                  - generic [ref=e443]:
                    - generic [ref=e444]:
                      - generic [ref=e445]:
                        - img [ref=e446]
                        - generic [ref=e447]: News18
                      - generic [ref=e448]: ·
                      - generic [ref=e449]: 5h
                    - 'link "''Shameful, disgusting'': BJP blasts Rahul Gandhi over ''Chhatron Ki Goonj'' event video, objects to stage act, News18" [ref=e450]':
                      - /url: https://www.msn.com/en-in/news/other/shameful-disgusting-bjp-blasts-rahul-gandhi-over-chhatron-ki-goonj-event-video-objects-to-stage-act/ar-AA2cA9tp
                      - text: "'Shameful, disgusting': BJP blasts Rahul Gandhi over 'Chhatron Ki Goonj' event video, objects to stage act"
                  - 'generic "''Shameful, disgusting'': BJP blasts Rahul Gandhi over ''Chhatron Ki Goonj'' event video, objects to stage act" [ref=e453]':
                    - generic [ref=e455]:
                      - generic [ref=e456]:
                        - button "27 Likes" [ref=e457]:
                          - generic [ref=e458]:
                            - img [ref=e459]
                            - generic [ref=e461]: "27"
                        - button "Dislike" [ref=e462]:
                          - img [ref=e464]
                      - link "View comments 6 Comment" [ref=e467]:
                        - /url: https://www.msn.com/en-in/news/other/shameful-disgusting-bjp-blasts-rahul-gandhi-over-chhatron-ki-goonj-event-video-objects-to-stage-act/ar-AA2cA9tp#comments
                        - button "View comments 6 Comment" [ref=e468]:
                          - img [ref=e469]
                        - generic [ref=e471]: "6"
                - generic [ref=e472]:
                  - button "Hide this story" [ref=e473]:
                    - img [ref=e474]
                    - text: Hide this story
                  - button "See more" [ref=e475]:
                    - img [ref=e476]
            - 'article "PC Gamers: This Game is Worth Installing" [ref=e477] [cursor=pointer]':
              - generic [ref=e479]:
                - img [ref=e480]
                - generic [ref=e481]:
                  - generic [ref=e482]:
                    - generic [ref=e485]: "RAID: Shadow Legends"
                    - 'link "PC Gamers: This Game is Worth Installing, RAID: Shadow Legends" [ref=e486]':
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=5705bc95-b941-405e-be6d-777d140fd8c1&bdc=pb&bidId=6&bidderId=4&cmExpId=LV1&impId=9&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=5ca971c5-54a7-4bb4-b9c6-133577e56cf4&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8hAnJqthtsQi0-BVWK3TqSTVUCUxCOT4TVX-7vFIYlvLyk1qI_WV5oSTnrwc_NGE53D8qSFtkBFND2RPzYzzmQ0S8cBmySveuMCzoV2C1TKimZu6sDu90RpoFc5FaSgzZ3IwAAIQdwda1vTL-qbpfeg9cxv31ABrd5N_ck4oDEGSWkwOKKfKL1U0-g-pzX1mip4ezrQ0_rj-yF7Y_bFYkWudfrdI%26u%3DaHR0cHMlM2ElMmYlMmZscHMucGxhcml1bS5jb20lMmZlbiUyZmRlc2t0b3AlMmZyYWlkJTJmcmRvJTJmY3JvJTJmcmVwbGljYV90aHJfZXhpdDA1X2YwMzhfMnN0cF9qdDM4NDMlM2ZwbGlkJTNkMTc5MTQ5MCUyNnB4bCUzZGJpbmdfbmF0aXZlJTI2cHVibGlzaGVyaWQlM2Q4MDQ3MDcyMDY4NDAyMCUyNnBsYWNlbWVudCUzZDIzMzIyNzAzMjE1MTM3MDZfa2V5d29yZCUyNmFkcGFydG5lcnNldCUzZDEyODc1Mjk1Mjk2MTY5ODUlMjZjbGlja0lkJTNkYWI2NzE0Mzk4Nzc4MWI4MzFjNmE3ZTk2MWFiY2FjNzIlMjZtc2Nsa2lkJTNkYWI2NzE0Mzk4Nzc4MWI4MzFjNmE3ZTk2MWFiY2FjNzIlMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RCaW5nX1JBRF9VU19OYXRpdmVfVGVzdF8xNzkxNDkwJTI2dXRtX3Rlcm0lM2RrZXl3b3JkJTI2dXRtX2NvbnRlbnQlM2RHZW5lcmFsJTI1MjBUZXN0%26rlid%3Dab67143987781b831c6a7e961abcac72&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: "PC Gamers: This Game is Worth Installing"
                  - link "Sponsored" [ref=e488]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=5705bc95-b941-405e-be6d-777d140fd8c1&bdc=pb&bidId=6&bidderId=4&cmExpId=LV1&impId=9&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=5ca971c5-54a7-4bb4-b9c6-133577e56cf4&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8hAnJqthtsQi0-BVWK3TqSTVUCUxCOT4TVX-7vFIYlvLyk1qI_WV5oSTnrwc_NGE53D8qSFtkBFND2RPzYzzmQ0S8cBmySveuMCzoV2C1TKimZu6sDu90RpoFc5FaSgzZ3IwAAIQdwda1vTL-qbpfeg9cxv31ABrd5N_ck4oDEGSWkwOKKfKL1U0-g-pzX1mip4ezrQ0_rj-yF7Y_bFYkWudfrdI%26u%3DaHR0cHMlM2ElMmYlMmZscHMucGxhcml1bS5jb20lMmZlbiUyZmRlc2t0b3AlMmZyYWlkJTJmcmRvJTJmY3JvJTJmcmVwbGljYV90aHJfZXhpdDA1X2YwMzhfMnN0cF9qdDM4NDMlM2ZwbGlkJTNkMTc5MTQ5MCUyNnB4bCUzZGJpbmdfbmF0aXZlJTI2cHVibGlzaGVyaWQlM2Q4MDQ3MDcyMDY4NDAyMCUyNnBsYWNlbWVudCUzZDIzMzIyNzAzMjE1MTM3MDZfa2V5d29yZCUyNmFkcGFydG5lcnNldCUzZDEyODc1Mjk1Mjk2MTY5ODUlMjZjbGlja0lkJTNkYWI2NzE0Mzk4Nzc4MWI4MzFjNmE3ZTk2MWFiY2FjNzIlMjZtc2Nsa2lkJTNkYWI2NzE0Mzk4Nzc4MWI4MzFjNmE3ZTk2MWFiY2FjNzIlMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RCaW5nX1JBRF9VU19OYXRpdmVfVGVzdF8xNzkxNDkwJTI2dXRtX3Rlcm0lM2RrZXl3b3JkJTI2dXRtX2NvbnRlbnQlM2RHZW5lcmFsJTI1MjBUZXN0%26rlid%3Dab67143987781b831c6a7e961abcac72&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e490]:
                  - img [ref=e491]
            - article "Sivaji Ganesan’s eldest daughter and actor Prabhu's sister Shanthi Narayanasamy passes away" [ref=e492] [cursor=pointer]:
              - generic [ref=e494]:
                - img [ref=e495]
                - generic [ref=e496]:
                  - generic [ref=e497]:
                    - generic [ref=e498]:
                      - generic [ref=e499]:
                        - img [ref=e500]
                        - generic [ref=e501]: The Times of India
                      - generic [ref=e502]: ·
                      - generic [ref=e503]: 3h
                    - link "Sivaji Ganesan’s eldest daughter and actor Prabhu's sister Shanthi Narayanasamy passes away, The Times of India" [ref=e504]:
                      - /url: https://www.msn.com/en-in/entertainment/general/sivaji-ganesan-s-eldest-daughter-and-actor-prabhu-s-sister-shanthi-narayanasamy-passes-away/ar-AA2cAs7R
                      - text: Sivaji Ganesan’s eldest daughter and actor Prabhu's sister Shanthi Narayanasamy passes away
                  - generic "Sivaji Ganesan’s eldest daughter and actor Prabhu's sister Shanthi Narayanasamy passes away" [ref=e507]:
                    - generic [ref=e509]:
                      - generic [ref=e510]:
                        - button "6 Likes" [ref=e511]:
                          - generic [ref=e512]:
                            - img [ref=e513]
                            - generic [ref=e515]: "6"
                        - button "Dislike" [ref=e516]:
                          - img [ref=e518]
                      - link "Start the conversation" [ref=e521]:
                        - /url: https://www.msn.com/en-in/entertainment/general/sivaji-ganesan-s-eldest-daughter-and-actor-prabhu-s-sister-shanthi-narayanasamy-passes-away/ar-AA2cAs7R#comments
                        - button "Start the conversation" [ref=e522]:
                          - img [ref=e523]
                - generic [ref=e525]:
                  - button "Hide this story" [ref=e526]:
                    - img [ref=e527]
                    - text: Hide this story
                  - button "See more" [ref=e528]:
                    - img [ref=e529]
            - article "Speeding BMW crashes on Mumbai coastal road, falls off bridge; 3 dead, 1 critical" [ref=e530] [cursor=pointer]:
              - generic [ref=e532]:
                - generic [ref=e538]:
                  - generic [ref=e539]:
                    - generic [ref=e540]:
                      - generic [ref=e541]:
                        - img [ref=e542]
                        - generic [ref=e543]: India Today
                      - generic [ref=e544]: ·
                      - generic [ref=e545]: 2h
                    - link "Speeding BMW crashes on Mumbai coastal road, falls off bridge; 3 dead, 1 critical, India Today" [ref=e546]:
                      - /url: https://www.msn.com/en-in/news/other/speeding-bmw-crashes-on-mumbai-coastal-road-falls-off-bridge-3-dead-1-critical/vi-AA2cBxVQ
                      - text: Speeding BMW crashes on Mumbai coastal road, falls off bridge; 3 dead, 1 critical
                  - generic "Speeding BMW crashes on Mumbai coastal road, falls off bridge; 3 dead, 1 critical" [ref=e549]:
                    - generic [ref=e551]:
                      - generic [ref=e552]:
                        - button "9 Likes" [ref=e553]:
                          - generic [ref=e554]:
                            - img [ref=e555]
                            - generic [ref=e557]: "9"
                        - button "Dislike" [ref=e558]:
                          - img [ref=e560]
                      - link "Start the conversation" [ref=e563]:
                        - /url: https://www.msn.com/en-in/news/other/speeding-bmw-crashes-on-mumbai-coastal-road-falls-off-bridge-3-dead-1-critical/vi-AA2cBxVQ#comments
                        - button "Start the conversation" [ref=e564]:
                          - img [ref=e565]
                - generic [ref=e567]:
                  - button "Hide this story" [ref=e568]:
                    - img [ref=e569]
                    - text: Hide this story
                  - button "See more" [ref=e570]:
                    - img [ref=e571]
          - generic [ref=e572]:
            - article [ref=e573] [cursor=pointer]:
              - generic [ref=e578]:
                - generic [ref=e580]:
                  - link "Top Engaging News" [ref=e582]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc
                    - heading "Top Engaging News" [level=2] [ref=e583]
                  - button "More options" [ref=e585]
                - generic [ref=e587]:
                  - 'link "News18 3 Comments ABVP conquers DUSU polls: Have Rahul Gandhi''s ''Chhatron Ki Goonj'', CJP youth campaigns failed the campus test?" [ref=e589]':
                    - /url: https://www.msn.com/en-in/news/other/abvp-conquers-dusu-polls-have-rahul-gandhi-s-chhatron-ki-goonj-cjp-youth-campaigns-failed-the-campus-test/ar-AA2cyWUF
                    - generic [ref=e590]:
                      - img [ref=e591]
                      - generic [ref=e592]: News18
                      - link "3 Comments" [ref=e594]:
                        - /url: https://www.msn.com/en-in/news/other/abvp-conquers-dusu-polls-have-rahul-gandhi-s-chhatron-ki-goonj-cjp-youth-campaigns-failed-the-campus-test/ar-AA2cyWUF#comments
                        - img [ref=e595]
                        - paragraph [ref=e596]: "3"
                    - paragraph [ref=e597]: "ABVP conquers DUSU polls: Have Rahul Gandhi's 'Chhatron Ki Goonj', CJP youth campaigns failed the campus test?"
                  - link "The Indian Express 2 Comments Delhi man sells ancestral gold to buy iPhone 18 Pro for wife; video goes viral" [ref=e599]:
                    - /url: https://www.msn.com/en-in/lifestyle/other/delhi-man-sells-ancestral-gold-to-buy-iphone-18-pro-for-wife-video-goes-viral/ar-AA2cywoW
                    - generic [ref=e600]:
                      - img [ref=e601]
                      - generic [ref=e602]: The Indian Express
                      - link "2 Comments" [ref=e604]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/delhi-man-sells-ancestral-gold-to-buy-iphone-18-pro-for-wife-video-goes-viral/ar-AA2cywoW#comments
                        - img [ref=e605]
                        - paragraph [ref=e606]: "2"
                    - paragraph [ref=e607]: Delhi man sells ancestral gold to buy iPhone 18 Pro for wife; video goes viral
                  - 'link "NDTV World 3 Comments US-bound F-35 parts end up in China, probe launched: report" [ref=e609]':
                    - /url: https://www.msn.com/en-in/news/other/us-bound-f-35-parts-end-up-in-china-probe-launched-report/ar-AA2czHME
                    - generic [ref=e610]:
                      - img [ref=e611]
                      - generic [ref=e612]: NDTV World
                      - link "3 Comments" [ref=e614]:
                        - /url: https://www.msn.com/en-in/news/other/us-bound-f-35-parts-end-up-in-china-probe-launched-report/ar-AA2czHME#comments
                        - img [ref=e615]
                        - paragraph [ref=e616]: "3"
                    - paragraph [ref=e617]: "US-bound F-35 parts end up in China, probe launched: report"
                - generic [ref=e619]:
                  - generic [ref=e620]:
                    - generic "Previous" [ref=e621]:
                      - button "Previous" [ref=e622]
                    - tablist [ref=e624]:
                      - tab "Page 1" [selected] [ref=e625]
                      - tab "Page 2" [ref=e627]
                      - tab "Page 3" [ref=e629]
                    - generic "Next" [ref=e631]:
                      - button "Next" [ref=e632]
                  - link "See more" [ref=e634]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc
            - article [ref=e635] [cursor=pointer]:
              - generic [ref=e641]:
                - generic [ref=e643]:
                  - link "Phoenix" [ref=e645]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
                    - heading "Phoenix" [level=2] [ref=e646]
                  - button "My location" [ref=e647]
                  - button "More options" [ref=e649]
                - generic [ref=e653]:
                  - generic [ref=e654]:
                    - generic [ref=e656]:
                      - link "Clear" [ref=e657]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
                        - img "Clear" [ref=e658]
                      - link "28°C" [ref=e659]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
                        - generic [ref=e660]: ‎28‎
                        - generic [ref=e662]: ‎°C‎
                    - generic [ref=e664]:
                      - link "Good air quality" [ref=e666]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona&fcsttab=airquality
                        - text: Good air quality
                      - link "See full forecast" [ref=e668]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona&fcsttab=airquality
                        - img "arrow" [ref=e669]
                  - generic [ref=e674]:
                    - link "Larger map" [ref=e675]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Phoenix,Arizona
                      - generic [ref=e676]:
                        - generic:
                          - generic:
                            - img
                            - img
                            - img
                            - img
                      - img
                    - link "Check global air quality" [ref=e677]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Phoenix,Arizona
                      - img [ref=e679]
                      - generic "Check global air quality" [ref=e680]
                      - img [ref=e682]
                - button "See full forecast" [ref=e685]
            - 'article "Payal Mehta dies at 46 after sudden uneasiness: When should you take uneasiness seriously?" [ref=e686] [cursor=pointer]':
              - generic [ref=e688]:
                - img [ref=e689]
                - generic [ref=e690]:
                  - generic [ref=e691]:
                    - generic [ref=e692]:
                      - generic [ref=e693]:
                        - img [ref=e694]
                        - generic [ref=e695]: Times Now
                      - generic [ref=e696]: ·
                      - generic [ref=e697]: 5h
                    - 'link "Payal Mehta dies at 46 after sudden uneasiness: When should you take uneasiness seriously?, Times Now" [ref=e698]':
                      - /url: https://www.msn.com/en-in/news/other/payal-mehta-dies-at-46-after-sudden-uneasiness-when-should-you-take-uneasiness-seriously/ar-AA2cAoXz
                      - text: "Payal Mehta dies at 46 after sudden uneasiness: When should you take uneasiness seriously?"
                  - 'generic "Payal Mehta dies at 46 after sudden uneasiness: When should you take uneasiness seriously?" [ref=e701]':
                    - generic [ref=e703]:
                      - generic [ref=e704]:
                        - button "8 Likes" [ref=e705]:
                          - generic [ref=e706]:
                            - img [ref=e707]
                            - generic [ref=e709]: "8"
                        - button "Dislike" [ref=e710]:
                          - img [ref=e712]
                      - link "Start the conversation" [ref=e715]:
                        - /url: https://www.msn.com/en-in/news/other/payal-mehta-dies-at-46-after-sudden-uneasiness-when-should-you-take-uneasiness-seriously/ar-AA2cAoXz#comments
                        - button "Start the conversation" [ref=e716]:
                          - img [ref=e717]
                - generic [ref=e719]:
                  - button "Hide this story" [ref=e720]:
                    - img [ref=e721]
                    - text: Hide this story
                  - button "See more" [ref=e722]:
                    - img [ref=e723]
            - 'article "Rs 3.18 crore in three days: What devotees donated to Lalbaugcha Raja" [ref=e724] [cursor=pointer]':
              - generic [ref=e726]:
                - img [ref=e727]
                - generic [ref=e728]:
                  - generic [ref=e729]:
                    - generic [ref=e730]:
                      - generic [ref=e731]:
                        - img [ref=e732]
                        - generic [ref=e733]: Moneycontrol
                      - generic [ref=e734]: ·
                      - generic [ref=e735]: 1d
                    - 'link "Rs 3.18 crore in three days: What devotees donated to Lalbaugcha Raja, Moneycontrol" [ref=e736]':
                      - /url: https://www.msn.com/en-in/politics/government/rs-3-18-crore-in-three-days-what-devotees-donated-to-lalbaugcha-raja/ar-AA2cykcy
                      - text: "Rs 3.18 crore in three days: What devotees donated to Lalbaugcha Raja"
                  - 'generic "Rs 3.18 crore in three days: What devotees donated to Lalbaugcha Raja" [ref=e739]':
                    - generic [ref=e741]:
                      - generic [ref=e742]:
                        - button "27 Likes" [ref=e743]:
                          - generic [ref=e744]:
                            - img [ref=e745]
                            - generic [ref=e747]: "27"
                        - button "Dislike" [ref=e748]:
                          - img [ref=e750]
                      - link "Start the conversation" [ref=e753]:
                        - /url: https://www.msn.com/en-in/politics/government/rs-3-18-crore-in-three-days-what-devotees-donated-to-lalbaugcha-raja/ar-AA2cykcy#comments
                        - button "Start the conversation" [ref=e754]:
                          - img [ref=e755]
                - generic [ref=e757]:
                  - button "Hide this story" [ref=e758]:
                    - img [ref=e759]
                    - text: Hide this story
                  - button "See more" [ref=e760]:
                    - img [ref=e761]
            - article [ref=e762] [cursor=pointer]
            - article "Jackie Shroff went from a 10×10 chawl to owning a bungalow, lost it all after Boom flopped" [ref=e769] [cursor=pointer]:
              - generic [ref=e771]:
                - img [ref=e772]
                - generic [ref=e773]:
                  - generic [ref=e774]:
                    - generic [ref=e775]:
                      - generic [ref=e776]:
                        - img [ref=e777]
                        - generic [ref=e778]: The Indian Express
                      - generic [ref=e779]: ·
                      - generic [ref=e780]: 18h
                    - link "Jackie Shroff went from a 10×10 chawl to owning a bungalow, lost it all after Boom flopped, The Indian Express" [ref=e781]:
                      - /url: https://www.msn.com/en-in/entertainment/celebrities/jackie-shroff-went-from-a-10-10-chawl-to-owning-a-bungalow-lost-it-all-after-boom-flopped/ar-AA2czxj4
                      - text: Jackie Shroff went from a 10×10 chawl to owning a bungalow, lost it all after Boom flopped
                  - generic "Jackie Shroff went from a 10×10 chawl to owning a bungalow, lost it all after Boom flopped" [ref=e784]:
                    - generic [ref=e786]:
                      - generic [ref=e787]:
                        - button "17 Likes" [ref=e788]:
                          - generic [ref=e789]:
                            - img [ref=e790]
                            - generic [ref=e792]: "17"
                        - button "Dislike" [ref=e793]:
                          - img [ref=e795]
                      - link "Start the conversation" [ref=e798]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/jackie-shroff-went-from-a-10-10-chawl-to-owning-a-bungalow-lost-it-all-after-boom-flopped/ar-AA2czxj4#comments
                        - button "Start the conversation" [ref=e799]:
                          - img [ref=e800]
                - generic [ref=e802]:
                  - button "Hide this story" [ref=e803]:
                    - img [ref=e804]
                    - text: Hide this story
                  - button "See more" [ref=e805]:
                    - img [ref=e806]
            - article [ref=e807] [cursor=pointer]
            - article [ref=e814] [cursor=pointer]:
              - generic [ref=e820]:
                - generic [ref=e822]:
                  - img "Watchlist suggestions" [ref=e824]
                  - link "Watchlist suggestions" [ref=e825]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e826]
                  - button "More options" [ref=e828]
                - generic [ref=e833]:
                  - link "24K Gold (10 Grams) - Indian Rupee XAUINR ‎+0.69%‎ 144496" [ref=e835]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&ocid=hpmsn
                    - generic [ref=e836]:
                      - generic [ref=e838]: 24K Gold (10 Grams) - Indian Rupee
                      - generic [ref=e840]: XAUINR
                    - generic [ref=e845]:
                      - generic [ref=e846]: ‎+0.69%‎
                      - generic [ref=e847]: "144496"
                    - button "Add to watchlist" [ref=e850]:
                      - img [ref=e851]
                  - link "Silver Silver ‎+1.04%‎ 66.79" [ref=e855]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwr7&ocid=hpmsn
                    - generic [ref=e856]:
                      - generic [ref=e858]: Silver
                      - generic [ref=e860]: Silver
                    - generic [ref=e865]:
                      - generic [ref=e866]: ‎+1.04%‎
                      - generic [ref=e867]: "66.79"
                    - button "Add to watchlist" [ref=e870]:
                      - img [ref=e871]
                  - link "ITC Ltd ITC ‎-1.47%‎ 262.30" [ref=e875]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahie2w&ocid=hpmsn
                    - generic [ref=e876]:
                      - generic [ref=e878]: ITC Ltd
                      - generic [ref=e880]: ITC
                    - generic [ref=e885]:
                      - generic [ref=e886]: ‎-1.47%‎
                      - generic [ref=e887]: "262.30"
                    - button "Add to watchlist" [ref=e890]:
                      - img [ref=e891]
                  - link "Dominion Energy, Inc. D ‎-1.10%‎ 63.58" [ref=e895]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a1qpw7&ocid=hpmsn
                    - generic [ref=e896]:
                      - generic [ref=e898]: Dominion Energy, Inc.
                      - generic [ref=e900]: D
                    - generic [ref=e905]:
                      - generic [ref=e906]: ‎-1.10%‎
                      - generic [ref=e907]: "63.58"
                    - button "Add to watchlist" [ref=e910]:
                      - img [ref=e911]
                  - link "Reliance Industries Ltd RELIANCE ‎-1.41%‎ 1,226.40" [ref=e915]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahjo52&ocid=hpmsn
                    - generic [ref=e916]:
                      - generic [ref=e918]: Reliance Industries Ltd
                      - generic [ref=e920]: RELIANCE
                    - generic [ref=e925]:
                      - generic [ref=e926]: ‎-1.41%‎
                      - generic [ref=e927]: 1,226.40
                    - button "Add to watchlist" [ref=e930]:
                      - img [ref=e931]
                - generic [ref=e935]:
                  - generic [ref=e936]:
                    - generic "Previous" [ref=e937]:
                      - button "Previous" [ref=e938]
                    - tablist [ref=e940]:
                      - tab "Page 1" [selected] [ref=e941]
                      - tab "Page 2" [ref=e943]
                      - tab "Page 3" [ref=e945]
                      - tab "Page 4" [ref=e947]
                      - tab "Page 5" [ref=e949]
                      - tab "Page 6"
                      - tab "Page 7"
                    - generic "Next" [ref=e951]:
                      - button "Next" [ref=e952]
                  - link "See watchlist suggestions" [ref=e954]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
          - article [ref=e956]
          - generic [ref=e958]:
            - 'article "Why two Indians of the same age can look worlds apart: Doctor explains how muscle mass may shape the way you age" [ref=e959] [cursor=pointer]':
              - generic [ref=e961]:
                - img [ref=e962]
                - generic [ref=e963]:
                  - generic [ref=e964]:
                    - generic [ref=e965]:
                      - generic [ref=e966]:
                        - img [ref=e967]
                        - generic [ref=e968]: Hindustan Times
                      - generic [ref=e969]: ·
                      - generic [ref=e970]: 2w
                    - 'link "Why two Indians of the same age can look worlds apart: Doctor explains how muscle mass may shape the way you age, Hindustan Times" [ref=e971]':
                      - /url: https://www.msn.com/en-in/health/fitness-and-exercise/why-two-indians-of-the-same-age-can-look-worlds-apart-doctor-explains-how-muscle-mass-may-shape-the-way-you-age/ar-AA2btGCh
                      - text: "Why two Indians of the same age can look worlds apart: Doctor explains how muscle mass may shape the way you age"
                  - 'generic "Why two Indians of the same age can look worlds apart: Doctor explains how muscle mass may shape the way you age" [ref=e974]':
                    - generic [ref=e976]:
                      - generic [ref=e977]:
                        - button "432 Likes" [ref=e978]:
                          - generic [ref=e979]:
                            - img [ref=e980]
                            - generic [ref=e982]: "432"
                        - button "Dislike" [ref=e983]:
                          - img [ref=e985]
                      - link "View comments 6 Comment" [ref=e988]:
                        - /url: https://www.msn.com/en-in/health/fitness-and-exercise/why-two-indians-of-the-same-age-can-look-worlds-apart-doctor-explains-how-muscle-mass-may-shape-the-way-you-age/ar-AA2btGCh#comments
                        - button "View comments 6 Comment" [ref=e989]:
                          - img [ref=e990]
                        - generic [ref=e992]: "6"
                - generic [ref=e993]:
                  - button "Hide this story" [ref=e994]:
                    - img [ref=e995]
                    - text: Hide this story
                  - button "See more" [ref=e996]:
                    - img [ref=e997]
            - article [ref=e998] [cursor=pointer]:
              - generic [ref=e1004]:
                - generic [ref=e1006]:
                  - img "ICC" [ref=e1008]
                  - link "ICC" [ref=e1009]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc
                    - heading "ICC" [level=2] [ref=e1010]
                  - button "More interests" [ref=e1011]
                  - generic [ref=e1012]:
                    - generic "Live now" [ref=e1013]:
                      - button "Live now" [ref=e1014]
                    - button "More options" [ref=e1015]
                - generic [ref=e1019]:
                  - link "ZIM 76/3 (17.3) Live AUS ZIM elected to bat" [ref=e1020]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-270436?ocid=hpmsn&cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc
                    - generic "ZIM" [ref=e1021]:
                      - generic [ref=e1022]:
                        - generic [ref=e1023]:
                          - generic [ref=e1025]: ZIM
                          - button "Click to follow ZIM":
                            - generic:
                              - img
                        - generic [ref=e1027]:
                          - generic [ref=e1028]: 76/3
                          - generic [ref=e1029]: (17.3)
                    - generic [ref=e1033]: Live
                    - generic "AUS" [ref=e1034]:
                      - generic [ref=e1036]:
                        - generic [ref=e1038]: AUS
                        - button "Click to follow AUS":
                          - generic:
                            - img
                    - generic "ZIM elected to bat" [ref=e1041]
                  - link "ENG 126/2 (9.4) VS SL 124 (18.5) ENG won by 8 wickets" [ref=e1042]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-264913?ocid=hpmsn&cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc
                    - generic "ENG" [ref=e1043]:
                      - generic [ref=e1044]:
                        - img [ref=e1046]
                        - generic [ref=e1048]:
                          - generic [ref=e1050]: ENG
                          - button "Click to follow ENG":
                            - generic:
                              - img
                        - generic [ref=e1052]:
                          - generic [ref=e1053]: 126/2
                          - generic [ref=e1054]: (9.4)
                    - generic [ref=e1058]: VS
                    - generic "SL" [ref=e1059]:
                      - generic [ref=e1060]:
                        - generic [ref=e1061]:
                          - generic [ref=e1063]: SL
                          - button "Click to follow SL":
                            - generic:
                              - img
                        - generic [ref=e1065]:
                          - generic [ref=e1066]: "124"
                          - generic [ref=e1067]: (18.5)
                    - generic "ENG won by 8 wickets" [ref=e1070]
                  - link "JPN 22 Sept 4:00 am IND Sano International Cricket Ground, Sano" [ref=e1071]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-274600?ocid=hpmsn&cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc
                    - generic "JPN" [ref=e1072]:
                      - generic [ref=e1074]:
                        - generic [ref=e1076]: JPN
                        - button "Click to follow JPN":
                          - generic:
                            - img
                    - generic [ref=e1079]:
                      - generic [ref=e1080]: 22 Sept
                      - generic [ref=e1081]: 4:00 am
                    - generic "IND" [ref=e1082]:
                      - generic [ref=e1084]:
                        - generic [ref=e1086]: IND
                        - button "Click to follow IND":
                          - generic:
                            - img
                    - generic "Sano International Cricket Ground, Sano" [ref=e1089]
                - generic [ref=e1091]:
                  - generic [ref=e1092]:
                    - generic "Previous" [ref=e1093]:
                      - button "Previous" [ref=e1094]
                    - tablist [ref=e1096]:
                      - tab "Page 1" [selected] [ref=e1097]
                      - tab "Page 2" [ref=e1099]
                      - tab "Page 3" [ref=e1101]
                      - tab "Page 4" [ref=e1103]
                      - tab "Page 5" [ref=e1105]
                    - generic "Next" [ref=e1107]:
                      - button "Next" [ref=e1108]
                  - link "See more ICC" [ref=e1110]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6aaf9dc3e1c54bf690dbf0b5b8c022bc
            - article "Mecca pact under threat? Houthis warn Pakistan and Turkey against military action | Exclusive details" [ref=e1111] [cursor=pointer]:
              - generic [ref=e1113]:
                - img [ref=e1114]
                - generic [ref=e1115]:
                  - generic [ref=e1116]:
                    - generic [ref=e1117]:
                      - generic [ref=e1118]:
                        - img [ref=e1119]
                        - generic [ref=e1120]: News18
                      - generic [ref=e1121]: ·
                      - generic [ref=e1122]: 12h
                    - link "Mecca pact under threat? Houthis warn Pakistan and Turkey against military action | Exclusive details, News18" [ref=e1123]:
                      - /url: https://www.msn.com/en-in/news/other/mecca-pact-under-threat-houthis-warn-pakistan-and-turkey-against-military-action-exclusive-details/ar-AA2czh3q
                      - text: Mecca pact under threat? Houthis warn Pakistan and Turkey against military action | Exclusive details
                  - generic "Mecca pact under threat? Houthis warn Pakistan and Turkey against military action | Exclusive details" [ref=e1126]:
                    - generic [ref=e1128]:
                      - generic [ref=e1129]:
                        - button "7 Likes" [ref=e1130]:
                          - generic [ref=e1131]:
                            - img [ref=e1132]
                            - generic [ref=e1134]: "7"
                        - button "Dislike" [ref=e1135]:
                          - img [ref=e1137]
                      - link "Start the conversation" [ref=e1140]:
                        - /url: https://www.msn.com/en-in/news/other/mecca-pact-under-threat-houthis-warn-pakistan-and-turkey-against-military-action-exclusive-details/ar-AA2czh3q#comments
                        - button "Start the conversation" [ref=e1141]:
                          - img [ref=e1142]
                - generic [ref=e1144]:
                  - button "Hide this story" [ref=e1145]:
                    - img [ref=e1146]
                    - text: Hide this story
                  - button "See more" [ref=e1147]:
                    - img [ref=e1148]
            - article "On camera, Yemeni man assaults Sikh driver, steals his bus, rams vehicles in UK" [ref=e1149] [cursor=pointer]:
              - generic [ref=e1151]:
                - img [ref=e1152]
                - generic [ref=e1153]:
                  - generic [ref=e1154]:
                    - generic [ref=e1155]:
                      - generic [ref=e1156]:
                        - img [ref=e1157]
                        - generic [ref=e1158]: NDTV
                      - generic [ref=e1159]: ·
                      - generic [ref=e1160]: 4h
                    - link "On camera, Yemeni man assaults Sikh driver, steals his bus, rams vehicles in UK, NDTV" [ref=e1161]:
                      - /url: https://www.msn.com/en-in/news/other/on-camera-yemeni-man-assaults-sikh-driver-steals-his-bus-rams-vehicles-in-uk/ar-AA2cAVjJ
                      - text: On camera, Yemeni man assaults Sikh driver, steals his bus, rams vehicles in UK
                  - generic "On camera, Yemeni man assaults Sikh driver, steals his bus, rams vehicles in UK" [ref=e1164]:
                    - generic [ref=e1166]:
                      - generic [ref=e1167]:
                        - button "9 Likes" [ref=e1168]:
                          - generic [ref=e1169]:
                            - img [ref=e1170]
                            - generic [ref=e1172]: "9"
                        - button "Dislike" [ref=e1173]:
                          - img [ref=e1175]
                      - link "View comments 1 Comment" [ref=e1178]:
                        - /url: https://www.msn.com/en-in/news/other/on-camera-yemeni-man-assaults-sikh-driver-steals-his-bus-rams-vehicles-in-uk/ar-AA2cAVjJ#comments
                        - button "View comments 1 Comment" [ref=e1179]:
                          - img [ref=e1180]
                        - generic [ref=e1182]: "1"
                - generic [ref=e1183]:
                  - button "Hide this story" [ref=e1184]:
                    - img [ref=e1185]
                    - text: Hide this story
                  - button "See more" [ref=e1186]:
                    - img [ref=e1187]
            - article [ref=e1188] [cursor=pointer]
            - 'article "Mahesh Bhatt saw a failed father, so did son Rahul: ''Never fulfilled his responsibilities''" [ref=e1195] [cursor=pointer]':
              - generic [ref=e1197]:
                - img [ref=e1198]
                - generic [ref=e1199]:
                  - generic [ref=e1200]:
                    - generic [ref=e1201]:
                      - generic [ref=e1202]:
                        - img [ref=e1203]
                        - generic [ref=e1204]: The Indian Express
                      - generic [ref=e1205]: ·
                      - generic [ref=e1206]: 4h
                    - 'link "Mahesh Bhatt saw a failed father, so did son Rahul: ''Never fulfilled his responsibilities'', The Indian Express" [ref=e1207]':
                      - /url: https://www.msn.com/en-in/entertainment/general/mahesh-bhatt-saw-a-failed-father-so-did-son-rahul-never-fulfilled-his-responsibilities/ar-AA2cAT5R
                      - text: "Mahesh Bhatt saw a failed father, so did son Rahul: 'Never fulfilled his responsibilities'"
                  - 'generic "Mahesh Bhatt saw a failed father, so did son Rahul: ''Never fulfilled his responsibilities''" [ref=e1210]':
                    - generic [ref=e1212]:
                      - generic [ref=e1213]:
                        - button "4 Likes" [ref=e1214]:
                          - generic [ref=e1215]:
                            - img [ref=e1216]
                            - generic [ref=e1218]: "4"
                        - button "Dislike" [ref=e1219]:
                          - img [ref=e1221]
                      - link "Start the conversation" [ref=e1224]:
                        - /url: https://www.msn.com/en-in/entertainment/general/mahesh-bhatt-saw-a-failed-father-so-did-son-rahul-never-fulfilled-his-responsibilities/ar-AA2cAT5R#comments
                        - button "Start the conversation" [ref=e1225]:
                          - img [ref=e1226]
                - generic [ref=e1228]:
                  - button "Hide this story" [ref=e1229]:
                    - img [ref=e1230]
                    - text: Hide this story
                  - button "See more" [ref=e1231]:
                    - img [ref=e1232]
            - article [ref=e1233] [cursor=pointer]
            - article "Why do India’s women riders hide their hair inside their helmets?" [ref=e1240] [cursor=pointer]:
              - generic [ref=e1242]:
                - img [ref=e1243]
                - generic [ref=e1244]:
                  - generic [ref=e1245]:
                    - generic [ref=e1246]:
                      - generic [ref=e1247]:
                        - img [ref=e1248]
                        - generic [ref=e1249]: The Indian Express
                      - generic [ref=e1250]: ·
                      - generic [ref=e1251]: 5h
                    - link "Why do India’s women riders hide their hair inside their helmets?, The Indian Express" [ref=e1252]:
                      - /url: https://www.msn.com/en-in/news/other/why-do-india-s-women-riders-hide-their-hair-inside-their-helmets/ar-AA2cAppQ
                      - text: Why do India’s women riders hide their hair inside their helmets?
                  - generic "Why do India’s women riders hide their hair inside their helmets?" [ref=e1255]:
                    - generic [ref=e1257]:
                      - generic [ref=e1258]:
                        - button "11 Likes" [ref=e1259]:
                          - generic [ref=e1260]:
                            - img [ref=e1261]
                            - generic [ref=e1263]: "11"
                        - button "Dislike" [ref=e1264]:
                          - img [ref=e1266]
                      - link "Start the conversation" [ref=e1269]:
                        - /url: https://www.msn.com/en-in/news/other/why-do-india-s-women-riders-hide-their-hair-inside-their-helmets/ar-AA2cAppQ#comments
                        - button "Start the conversation" [ref=e1270]:
                          - img [ref=e1271]
                - generic [ref=e1273]:
                  - button "Hide this story" [ref=e1274]:
                    - img [ref=e1275]
                    - text: Hide this story
                  - button "See more" [ref=e1276]:
                    - img [ref=e1277]
    - contentinfo [ref=e1280]:
      - generic "Feedback" [ref=e1282] [cursor=pointer]:
        - button "Feedback" [ref=e1283]:
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