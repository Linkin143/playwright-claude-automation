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
              - /url: https://clk.tradedoubler.com/click?p=401531&a=3419260&epi=enin-msn-hp-mestripe
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
              - article "The only place with all US Campgrounds & RV Parks" [ref=e283] [cursor=pointer]:
                - generic [ref=e285]:
                  - img [ref=e286]
                  - generic [ref=e287]:
                    - generic [ref=e288]:
                      - generic [ref=e291]: The Dyrt
                      - link "The only place with all US Campgrounds & RV Parks, The Dyrt" [ref=e292]:
                        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=dab60290-6537-4336-8eea-28d9869fad1c&bdc=oa&bidId=11&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=rhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=38397ab0-ad1b-480b-a567-2f755ae801aa&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8L1mBVFcpo3MYmM2SawFeBTVUCUy1CmckLiV3jRpSrjs4AiH_gHkATAFCWuQNqZyC6uJ2iDKTWSH8ms0THCiXuHbs02K9e7s9jBezRPtxFTsmrxfXTitgy-8T90o9PaV6xIgBdYih0eAwZRElrjiCFgKpzeTiRDvCcdW_tUfO-P7jc3O4-E6JUhFQngMSXUykWtbjIw%26u%3DaHR0cHMlM2ElMmYlMmZ0aGVkeXJ0LmNvbSUyZnBybyUzZnNvdXJjZSUzZG1pY3Jvc29mdCUyNmNhbXBhaWduJTNkd2VicHJvbWljcm8lMjZtc2Nsa2lkJTNkYWM0MjdjNTAxOWRmMTNiOTMwOWQxNjcxMmI4OTBhOWM%26rlid%3Dac427c5019df13b9309d16712b890a9c&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=pbageby_5&uberGroup=hore_1c&uberSubGroup=erfreir
                        - text: The only place with all US Campgrounds & RV Parks
                    - link "Sponsored" [ref=e294]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=dab60290-6537-4336-8eea-28d9869fad1c&bdc=oa&bidId=11&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=rhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=38397ab0-ad1b-480b-a567-2f755ae801aa&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8L1mBVFcpo3MYmM2SawFeBTVUCUy1CmckLiV3jRpSrjs4AiH_gHkATAFCWuQNqZyC6uJ2iDKTWSH8ms0THCiXuHbs02K9e7s9jBezRPtxFTsmrxfXTitgy-8T90o9PaV6xIgBdYih0eAwZRElrjiCFgKpzeTiRDvCcdW_tUfO-P7jc3O4-E6JUhFQngMSXUykWtbjIw%26u%3DaHR0cHMlM2ElMmYlMmZ0aGVkeXJ0LmNvbSUyZnBybyUzZnNvdXJjZSUzZG1pY3Jvc29mdCUyNmNhbXBhaWduJTNkd2VicHJvbWljcm8lMjZtc2Nsa2lkJTNkYWM0MjdjNTAxOWRmMTNiOTMwOWQxNjcxMmI4OTBhOWM%26rlid%3Dac427c5019df13b9309d16712b890a9c&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=pbageby_5&uberGroup=hore_1c&uberSubGroup=erfreir
                  - button "See more" [ref=e296]:
                    - img [ref=e297]
            - article "The secret behind Vaibhav Sooryavanshi’s six-hitting? His favourite foods revealed | In photos" [ref=e298] [cursor=pointer]:
              - generic [ref=e300]:
                - img [ref=e301]
                - generic [ref=e302]:
                  - generic [ref=e303]:
                    - generic [ref=e304]:
                      - generic [ref=e305]:
                        - img [ref=e306]
                        - generic [ref=e307]: News18
                      - generic [ref=e308]: ·
                      - generic [ref=e309]: 3d
                    - link "The secret behind Vaibhav Sooryavanshi’s six-hitting? His favourite foods revealed | In photos, News18" [ref=e310]:
                      - /url: https://www.msn.com/en-in/foodanddrink/other/the-secret-behind-vaibhav-sooryavanshi-s-six-hitting-his-favourite-foods-revealed-in-photos/ss-AA24wXm3
                      - text: The secret behind Vaibhav Sooryavanshi’s six-hitting? His favourite foods revealed | In photos
                  - generic "The secret behind Vaibhav Sooryavanshi’s six-hitting? His favourite foods revealed | In photos" [ref=e313]:
                    - generic [ref=e315]:
                      - generic [ref=e316]:
                        - button "157 Like" [ref=e317]:
                          - generic [ref=e318]:
                            - img [ref=e319]
                            - generic [ref=e321]: "157"
                        - button "Dislike" [ref=e322]:
                          - img [ref=e324]
                      - link "Start the conversation" [ref=e327]:
                        - /url: https://www.msn.com/en-in/foodanddrink/other/the-secret-behind-vaibhav-sooryavanshi-s-six-hitting-his-favourite-foods-revealed-in-photos/ss-AA24wXm3#comments
                        - button "Start the conversation" [ref=e328]:
                          - img [ref=e329]
                - generic [ref=e331]:
                  - button "Hide this story" [ref=e332]:
                    - img [ref=e333]
                    - text: Hide this story
                  - button "See more" [ref=e334]:
                    - img [ref=e335]
            - article [ref=e336] [cursor=pointer]:
              - generic [ref=e340]:
                - generic: Sponsored
            - article "Switch to Chrome" [ref=e341] [cursor=pointer]:
              - generic [ref=e343]:
                - img [ref=e344]
                - generic [ref=e345]:
                  - generic [ref=e346]:
                    - generic [ref=e349]: Google Chrome
                    - link "Switch to Chrome, Google Chrome" [ref=e350]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=0010bdc7-45a0-4ba0-a5b3-e320a2cfceed&bdc=oa&bidId=16&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=rhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=38397ab0-ad1b-480b-a567-2f755ae801aa&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De86jNHWqPRAIDazuNUn6te7DVUCUwO3Fvj0s14d-XtQ4ykBy95-kqLJZPvhTscxTdMdesdGI8JUZL1AfInzzbaplhXUuXhKdMf47eCQm2lqeyXZ0mdCKDwyCv3oRf4M1cqL5vJzz3fjTMdXPd1IShxvZWel0lCjVPtxx0v0FKTFdwIdHIrGyoYEa4TVl6t7BUbAh_k9Q%26u%3DaHR0cHMlM2ElMmYlMmZhZC5kb3VibGVjbGljay5uZXQlMmZkZG0lMmZ0cmFja2NsayUyZk41Mjk1LjUwNzUxNzhCSU5HRElTUExBWSUyZkIzNDYxNDY5OC40NDYzMzQzNjclM2JkY190cmtfYWlkJTNkNjM5OTIyMTI4JTNiZGNfdHJrX2NpZCUzZDI0NjYxMTkyNSUzYmRjX2xhdCUzZCUzYmRjX3JkaWQlM2QlM2J0YWdfZm9yX2NoaWxkX2RpcmVjdGVkX3RyZWF0bWVudCUzZCUzYnRmdWElM2QlM2JnZHByJTNkJTI0JTdiR0RQUiU3ZCUzYmdkcHJfY29uc2VudCUzZCUyNCU3YkdEUFJfQ09OU0VOVF83NTUlN2QlM2JsdGQlM2QlM2JkY190ZHYlM2QxJTNmbXNjbGtpZCUzZGY4MGI3ZjJiNTU1MTEyMmQ3OTI3MTUwYTY3MDc1YzhkJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkMTcxMzg1NiUyNTIwJTI1N0MlMjUyMENocm9tZSUyNTIwV2luZG93cyUyNTIwJTI1N0MlMjUyMERSJTI1MjAlMjU3QyUyNTIwRVNTMDElMjUyMCUyNTdDJTI1MjBOQSUyNTIwJTI1N0MlMjUyMFVTJTI1MjAlMjU3QyUyNTIwZW4lMjUyMCUyNTdDJTI1MjBEZXNrJTI1MjAlMjU3QyUyNTIwRElTUCUyNTIwJTI1N0MlMjUyME1UJTI1MjAlMjU3QyUyNTIwSHlicmlkJTI1MjAlMjU3QyUyNTIwQmluZ19Hb29nbGUlMjZ1dG1fdGVybSUzZGtleXdvcmQlMjZ1dG1fY29udGVudCUzZERlc2slMjUyMCUyNTdDJTI1MjBJTVMlMjUyMCUyNTdDJTI1MjBIeWJyaWRfR29vZ2xlXyhPUElELTQ3NDYyNzUp%26rlid%3Df80b7f2b5551122d7927150a67075c8d&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=pbageby_5&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Switch to Chrome
                  - link "Sponsored" [ref=e352]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=0010bdc7-45a0-4ba0-a5b3-e320a2cfceed&bdc=oa&bidId=16&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=rhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=38397ab0-ad1b-480b-a567-2f755ae801aa&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De86jNHWqPRAIDazuNUn6te7DVUCUwO3Fvj0s14d-XtQ4ykBy95-kqLJZPvhTscxTdMdesdGI8JUZL1AfInzzbaplhXUuXhKdMf47eCQm2lqeyXZ0mdCKDwyCv3oRf4M1cqL5vJzz3fjTMdXPd1IShxvZWel0lCjVPtxx0v0FKTFdwIdHIrGyoYEa4TVl6t7BUbAh_k9Q%26u%3DaHR0cHMlM2ElMmYlMmZhZC5kb3VibGVjbGljay5uZXQlMmZkZG0lMmZ0cmFja2NsayUyZk41Mjk1LjUwNzUxNzhCSU5HRElTUExBWSUyZkIzNDYxNDY5OC40NDYzMzQzNjclM2JkY190cmtfYWlkJTNkNjM5OTIyMTI4JTNiZGNfdHJrX2NpZCUzZDI0NjYxMTkyNSUzYmRjX2xhdCUzZCUzYmRjX3JkaWQlM2QlM2J0YWdfZm9yX2NoaWxkX2RpcmVjdGVkX3RyZWF0bWVudCUzZCUzYnRmdWElM2QlM2JnZHByJTNkJTI0JTdiR0RQUiU3ZCUzYmdkcHJfY29uc2VudCUzZCUyNCU3YkdEUFJfQ09OU0VOVF83NTUlN2QlM2JsdGQlM2QlM2JkY190ZHYlM2QxJTNmbXNjbGtpZCUzZGY4MGI3ZjJiNTU1MTEyMmQ3OTI3MTUwYTY3MDc1YzhkJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkMTcxMzg1NiUyNTIwJTI1N0MlMjUyMENocm9tZSUyNTIwV2luZG93cyUyNTIwJTI1N0MlMjUyMERSJTI1MjAlMjU3QyUyNTIwRVNTMDElMjUyMCUyNTdDJTI1MjBOQSUyNTIwJTI1N0MlMjUyMFVTJTI1MjAlMjU3QyUyNTIwZW4lMjUyMCUyNTdDJTI1MjBEZXNrJTI1MjAlMjU3QyUyNTIwRElTUCUyNTIwJTI1N0MlMjUyME1UJTI1MjAlMjU3QyUyNTIwSHlicmlkJTI1MjAlMjU3QyUyNTIwQmluZ19Hb29nbGUlMjZ1dG1fdGVybSUzZGtleXdvcmQlMjZ1dG1fY29udGVudCUzZERlc2slMjUyMCUyNTdDJTI1MjBJTVMlMjUyMCUyNTdDJTI1MjBIeWJyaWRfR29vZ2xlXyhPUElELTQ3NDYyNzUp%26rlid%3Df80b7f2b5551122d7927150a67075c8d&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=pbageby_5&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e354]:
                  - img [ref=e355]
            - article [ref=e356] [cursor=pointer]:
              - generic [ref=e362]:
                - generic [ref=e364]:
                  - img "World Cup coverage" [ref=e366]
                  - link "World Cup coverage" [ref=e367]:
                    - /url: https://www.msn.com/en-in/sports/moments/league/ka-KAC2DE454F?serviceName=contentRetrieverService&query=FIFA+World+Cup+2026--240&newsid=AA24JsNx&ocid=hpmsn&cvid=6a213255658b4b05ab05df07bb979e7b
                    - heading "World Cup coverage" [level=2] [ref=e368]
                  - button "More interests" [ref=e369]
                  - generic [ref=e370]:
                    - generic "Popular in your area" [ref=e371]:
                      - button "Popular in your area" [ref=e372]
                    - button "More options" [ref=e373]
                - link "+17 · Curated by Copilot FIFA World Cup 2026 faces disruptions, policy shifts and rising concerns" [ref=e377]:
                  - /url: https://www.msn.com/en-in/sports/moments/league/ka-KAC2DE454F?serviceName=contentRetrieverService&query=FIFA+World+Cup+2026--240&newsid=AA24JsNx&ocid=hpmsn&cvid=6a213255658b4b05ab05df07bb979e7b
                  - generic [ref=e381]: +17 · Curated by Copilot
                  - button "FIFA World Cup 2026 faces disruptions, policy shifts and rising concerns" [ref=e382]
                - generic [ref=e384]:
                  - generic [ref=e385]:
                    - generic "Previous" [ref=e386]:
                      - button "Previous" [ref=e387]
                    - tablist [ref=e389]:
                      - tab "tab-0" [selected] [ref=e390]
                      - tab "tab-1" [ref=e392]
                    - generic "Next" [ref=e394]:
                      - button "Next" [ref=e395]
                  - link "See full coverage" [ref=e397]:
                    - /url: https://www.msn.com/en-in/sports/moments/league/ka-KAC2DE454F?serviceName=contentRetrieverService&query=FIFA+World+Cup+2026--240&newsid=AA24JsNx&ocid=hpmsn&cvid=6a213255658b4b05ab05df07bb979e7b
            - article [ref=e398] [cursor=pointer]:
              - generic [ref=e403]:
                - generic [ref=e405]:
                  - link "Top stories" [ref=e407]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a213255658b4b05ab05df07bb979e7b&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e408]
                  - button "More options" [ref=e410]
                - list [ref=e413]:
                  - 'listitem "''Even a small sound scares us'': Fear, grief linger in Malviya Nagar day after hotel blaze kills 21" [ref=e414]':
                    - generic [ref=e415]:
                      - generic [ref=e416]:
                        - img [ref=e417]
                        - generic [ref=e418]:
                          - generic: Press Trust of India ·now
                      - generic [ref=e419]: "'Even a small sound scares us': Fear, grief linger in Malviya Nagar day after hotel blaze kills 21"
                  - 'listitem "Southwest monsoon arrives in Kerala: IMD" [ref=e420]':
                    - generic [ref=e421]:
                      - generic [ref=e422]:
                        - img [ref=e423]
                        - generic [ref=e424]:
                          - generic: News18 ·52m
                      - generic [ref=e425]: "Southwest monsoon arrives in Kerala: IMD"
                  - 'listitem "Mamata, Abhishek and 14 days of turmoil: How TMC''s internal battle spilled into the open" [ref=e426]':
                    - generic [ref=e427]:
                      - generic [ref=e428]:
                        - img [ref=e429]
                        - generic [ref=e430]:
                          - generic: The Times of India ·1h
                      - generic [ref=e431]: "Mamata, Abhishek and 14 days of turmoil: How TMC's internal battle spilled into the open"
                - generic [ref=e433]:
                  - generic [ref=e434]:
                    - generic "Previous" [ref=e435]:
                      - button "Previous" [ref=e436]
                    - tablist [ref=e438]:
                      - tab "tab-0" [selected] [ref=e439]
                      - tab "tab-1" [ref=e441]
                      - tab "tab-2" [ref=e443]
                    - generic "Next" [ref=e445]:
                      - button "Next" [ref=e446]
                  - link "See more" [ref=e448]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a213255658b4b05ab05df07bb979e7b&ocid=hpmsn
            - article "Best Site Of $100k Remote Work - Remote Jobs Hiring Immediately - 2026 Best Remote Jobs" [ref=e449] [cursor=pointer]:
              - generic [ref=e451]:
                - img [ref=e452]
                - generic [ref=e453]:
                  - generic [ref=e454]:
                    - generic [ref=e457]: flexjobs.com
                    - link "Best Site Of $100k Remote Work - Remote Jobs Hiring Immediately - 2026 Best Remote Jobs, flexjobs.com" [ref=e458]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=8a3b5213-0469-4993-affd-face238bd813&bdc=oa&bidId=1&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=rhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=38397ab0-ad1b-480b-a567-2f755ae801aa&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8-QsNBOEpVCEYjB1i-RP6jDVUCUzPh1Fl40oQQbDOrQbTc05-LbCaMcD82Z8L9Tu3gh11RdOppxp9_QKJhFHZGBFVQjGrN7ud_LTK7pCQfprszqzRcEt0c1rY8rBS765q0zlFBXfCQhlCqywi7ASkswylLpDrTByFLEtQ4MOJk1d8YwcBygMn-4MGNL2n1aRN8sXsHg%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZmxleGpvYnMuY29tJTJmbHAlMmZyZW1vdGUtam9iczElM2ZuZXR3b3JrJTNkYSUyNmRldmljZSUzZGMlMjZhZHBvc2l0aW9uJTNkJTI2YWRncm91cGlkJTNkMTI3MzIzNjExMTM4MzMwOCUyNnBsYWNlbWVudCUzZCUyNmFkaWQlM2QlMjZtc2Nsa2lkJTNkZTlkMWQ3YTZiMTU1MWFjMTdlYzZiZDg3ODMwM2U0MTYlMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2QlMjU1QnNlYXJjaCUyNTVEJTI1MjB1c2FfbmJfcmVtb3RlX2JldGElMjZ1dG1fdGVybSUzZHJlbW90ZSUyNTIwZW1wbG95bWVudCUyNTIwam9iJTI1MjB3ZWJzaXRlcyUyNnV0bV9jb250ZW50JTNkcmVtb3Rl%26rlid%3De9d1d7a6b1551ac17ec6bd878303e416&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=pbageby_5&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Best Site Of $100k Remote Work - Remote Jobs Hiring Immediately - 2026 Best Remote Jobs
                  - link "Sponsored" [ref=e460]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=8a3b5213-0469-4993-affd-face238bd813&bdc=oa&bidId=1&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=rhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=38397ab0-ad1b-480b-a567-2f755ae801aa&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8-QsNBOEpVCEYjB1i-RP6jDVUCUzPh1Fl40oQQbDOrQbTc05-LbCaMcD82Z8L9Tu3gh11RdOppxp9_QKJhFHZGBFVQjGrN7ud_LTK7pCQfprszqzRcEt0c1rY8rBS765q0zlFBXfCQhlCqywi7ASkswylLpDrTByFLEtQ4MOJk1d8YwcBygMn-4MGNL2n1aRN8sXsHg%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZmxleGpvYnMuY29tJTJmbHAlMmZyZW1vdGUtam9iczElM2ZuZXR3b3JrJTNkYSUyNmRldmljZSUzZGMlMjZhZHBvc2l0aW9uJTNkJTI2YWRncm91cGlkJTNkMTI3MzIzNjExMTM4MzMwOCUyNnBsYWNlbWVudCUzZCUyNmFkaWQlM2QlMjZtc2Nsa2lkJTNkZTlkMWQ3YTZiMTU1MWFjMTdlYzZiZDg3ODMwM2U0MTYlMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2QlMjU1QnNlYXJjaCUyNTVEJTI1MjB1c2FfbmJfcmVtb3RlX2JldGElMjZ1dG1fdGVybSUzZHJlbW90ZSUyNTIwZW1wbG95bWVudCUyNTIwam9iJTI1MjB3ZWJzaXRlcyUyNnV0bV9jb250ZW50JTNkcmVtb3Rl%26rlid%3De9d1d7a6b1551ac17ec6bd878303e416&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=pbageby_5&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e462]:
                  - img [ref=e463]
            - 'article "Gold rate today (June 4, 2026): Check 24K, 22K, 18K prices in Delhi, Mumbai, Kolkata, Chennai, Lucknow and other major cities" [ref=e464] [cursor=pointer]':
              - generic [ref=e466]:
                - img [ref=e467]
                - generic [ref=e468]:
                  - generic [ref=e469]:
                    - generic [ref=e470]:
                      - generic [ref=e471]:
                        - img [ref=e472]
                        - generic [ref=e473]: Times Now
                      - generic [ref=e474]: ·
                      - generic [ref=e475]: 3h
                    - 'link "Gold rate today (June 4, 2026): Check 24K, 22K, 18K prices in Delhi, Mumbai, Kolkata, Chennai, Lucknow and other major cities, Times Now" [ref=e476]':
                      - /url: https://www.msn.com/en-in/money/markets/gold-rate-today-june-4-2026-check-24k-22k-18k-prices-in-delhi-mumbai-kolkata-chennai-lucknow-and-other-major-cities/ar-AA24NE0m
                      - text: "Gold rate today (June 4, 2026): Check 24K, 22K, 18K prices in Delhi, Mumbai, Kolkata, Chennai, Lucknow and other major cities"
                  - 'generic "Gold rate today (June 4, 2026): Check 24K, 22K, 18K prices in Delhi, Mumbai, Kolkata, Chennai, Lucknow and other major cities" [ref=e479]':
                    - generic [ref=e481]:
                      - generic [ref=e482]:
                        - button "7 Like" [ref=e483]:
                          - generic [ref=e484]:
                            - img [ref=e485]
                            - generic [ref=e487]: "7"
                        - button "Dislike" [ref=e488]:
                          - img [ref=e490]
                      - link "Start the conversation" [ref=e493]:
                        - /url: https://www.msn.com/en-in/money/markets/gold-rate-today-june-4-2026-check-24k-22k-18k-prices-in-delhi-mumbai-kolkata-chennai-lucknow-and-other-major-cities/ar-AA24NE0m#comments
                        - button "Start the conversation" [ref=e494]:
                          - img [ref=e495]
                - generic [ref=e497]:
                  - button "Hide this story" [ref=e498]:
                    - img [ref=e499]
                    - text: Hide this story
                  - button "See more" [ref=e500]:
                    - img [ref=e501]
            - article "Can you guess Rajinikanth's first salary? A viral 1971 ID card has the answer" [ref=e502] [cursor=pointer]:
              - generic [ref=e504]:
                - img [ref=e505]
                - generic [ref=e506]:
                  - generic [ref=e507]:
                    - generic [ref=e508]:
                      - generic [ref=e509]:
                        - img [ref=e510]
                        - generic [ref=e511]: India Today
                      - generic [ref=e512]: ·
                      - generic [ref=e513]: 3d
                    - link "Can you guess Rajinikanth's first salary? A viral 1971 ID card has the answer, India Today" [ref=e514]:
                      - /url: https://www.msn.com/en-in/entertainment/southcinema/can-you-guess-rajinikanth-s-first-salary-a-viral-1971-id-card-has-the-answer/ar-AA24sYP1
                      - text: Can you guess Rajinikanth's first salary? A viral 1971 ID card has the answer
                  - generic "Can you guess Rajinikanth's first salary? A viral 1971 ID card has the answer" [ref=e517]:
                    - generic [ref=e519]:
                      - generic [ref=e520]:
                        - button "544 Like" [ref=e521]:
                          - generic [ref=e522]:
                            - img [ref=e523]
                            - generic [ref=e525]: "544"
                        - button "Dislike" [ref=e526]:
                          - img [ref=e528]
                      - link "View comments 4 Comment" [ref=e531]:
                        - /url: https://www.msn.com/en-in/entertainment/southcinema/can-you-guess-rajinikanth-s-first-salary-a-viral-1971-id-card-has-the-answer/ar-AA24sYP1#comments
                        - button "View comments 4 Comment" [ref=e532]:
                          - img [ref=e533]
                        - generic [ref=e535]: "4"
                - generic [ref=e536]:
                  - button "Hide this story" [ref=e537]:
                    - img [ref=e538]
                    - text: Hide this story
                  - button "See more" [ref=e539]:
                    - img [ref=e540]
          - generic [ref=e541]:
            - article [ref=e542] [cursor=pointer]:
              - generic [ref=e547]:
                - generic [ref=e549]:
                  - link "Top Engaging News" [ref=e551]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a213255658b4b05ab05df07bb979e7b
                    - heading "Top Engaging News" [level=2] [ref=e552]
                  - button "More options" [ref=e554]
                - generic [ref=e556]:
                  - link "India Today 10 Comments Aamir Khan to marry Gauri Spratt in private ceremony on July 5" [ref=e558]:
                    - /url: https://www.msn.com/en-in/entertainment/bollywood/aamir-khan-to-marry-gauri-spratt-in-private-ceremony-on-july-5/ar-AA24JbIK
                    - generic [ref=e559]:
                      - img [ref=e560]
                      - generic [ref=e561]: India Today
                      - link "10 Comments" [ref=e563]:
                        - /url: https://www.msn.com/en-in/entertainment/bollywood/aamir-khan-to-marry-gauri-spratt-in-private-ceremony-on-july-5/ar-AA24JbIK#comments
                        - img [ref=e564]
                        - paragraph [ref=e565]: "10"
                    - paragraph [ref=e566]: Aamir Khan to marry Gauri Spratt in private ceremony on July 5
                  - 'link "The Indian Express 7 Comments Breaking: Suryakumar removed as India T20 captain, to lose place in team as well" [ref=e568]':
                    - /url: https://www.msn.com/en-in/sports/other/breaking-suryakumar-removed-as-india-t20-captain-to-lose-place-in-team-as-well/ar-AA24KHfm
                    - generic [ref=e569]:
                      - img [ref=e570]
                      - generic [ref=e571]: The Indian Express
                      - link "7 Comments" [ref=e573]:
                        - /url: https://www.msn.com/en-in/sports/other/breaking-suryakumar-removed-as-india-t20-captain-to-lose-place-in-team-as-well/ar-AA24KHfm#comments
                        - img [ref=e574]
                        - paragraph [ref=e575]: "7"
                    - paragraph [ref=e576]: "Breaking: Suryakumar removed as India T20 captain, to lose place in team as well"
                  - link "ThePrint 7 Comments Army takes cognisance of captain proposal viral video, seeks explanation" [ref=e578]:
                    - /url: https://www.msn.com/en-in/news/india/army-takes-cognisance-of-captain-proposal-viral-video-seeks-explanation/ar-AA24JlFL
                    - generic [ref=e579]:
                      - img [ref=e580]
                      - generic [ref=e581]: ThePrint
                      - link "7 Comments" [ref=e583]:
                        - /url: https://www.msn.com/en-in/news/india/army-takes-cognisance-of-captain-proposal-viral-video-seeks-explanation/ar-AA24JlFL#comments
                        - img [ref=e584]
                        - paragraph [ref=e585]: "7"
                    - paragraph [ref=e586]: Army takes cognisance of captain proposal viral video, seeks explanation
                - generic [ref=e588]:
                  - generic [ref=e589]:
                    - generic "Previous" [ref=e590]:
                      - button "Previous" [ref=e591]
                    - tablist [ref=e593]:
                      - tab "tab-0" [selected] [ref=e594]
                      - tab "tab-1" [ref=e596]
                      - tab "tab-2" [ref=e598]
                    - generic "Next" [ref=e600]:
                      - button "Next" [ref=e601]
                  - link "See more" [ref=e603]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a213255658b4b05ab05df07bb979e7b
            - article [ref=e604] [cursor=pointer]:
              - generic [ref=e610]:
                - generic [ref=e612]:
                  - img "Watchlist suggestions" [ref=e614]
                  - link "Watchlist suggestions" [ref=e615]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e616]
                  - button "More options" [ref=e618]
                - generic [ref=e623]:
                  - link "DOW DJI ‎-1.21%‎ 50,687.07" [ref=e625]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a6qja2&ocid=hpmsn
                    - generic [ref=e626]:
                      - generic [ref=e628]: DOW
                      - generic [ref=e630]: DJI
                    - generic [ref=e635]:
                      - generic [ref=e636]: ‎-1.21%‎
                      - generic [ref=e637]: 50,687.07
                    - button "Add to watchlist" [ref=e640]:
                      - img [ref=e641]
                  - link "Citigroup Inc C ‎-1.01%‎ 129.93" [ref=e645]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a1p3ww&ocid=hpmsn
                    - generic [ref=e646]:
                      - generic [ref=e648]: Citigroup Inc
                      - generic [ref=e650]: C
                    - generic [ref=e655]:
                      - generic [ref=e656]: ‎-1.01%‎
                      - generic [ref=e657]: "129.93"
                    - button "Add to watchlist" [ref=e660]:
                      - img [ref=e661]
                  - link "Dominion Energy Inc D ‎-1.52%‎ 65.46" [ref=e665]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a1qpw7&ocid=hpmsn
                    - generic [ref=e666]:
                      - generic [ref=e668]: Dominion Energy Inc
                      - generic [ref=e670]: D
                    - generic [ref=e675]:
                      - generic [ref=e676]: ‎-1.52%‎
                      - generic [ref=e677]: "65.46"
                    - button "Add to watchlist" [ref=e680]:
                      - img [ref=e681]
                  - link "Reliance Industries Ltd RELIANCE ‎-1.36%‎ 1,295.30" [ref=e685]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahjo52&ocid=hpmsn
                    - generic [ref=e686]:
                      - generic [ref=e688]: Reliance Industries Ltd
                      - generic [ref=e690]: RELIANCE
                    - generic [ref=e695]:
                      - generic [ref=e696]: ‎-1.36%‎
                      - generic [ref=e697]: 1,295.30
                    - button "Add to watchlist" [ref=e700]:
                      - img [ref=e701]
                  - link "AT&T Inc T ‎-4.42%‎ 23.55" [ref=e705]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a23www&ocid=hpmsn
                    - generic [ref=e706]:
                      - generic [ref=e708]: AT&T Inc
                      - generic [ref=e710]: T
                    - generic [ref=e715]:
                      - generic [ref=e716]: ‎-4.42%‎
                      - generic [ref=e717]: "23.55"
                    - button "Add to watchlist" [ref=e720]:
                      - img [ref=e721]
                - generic [ref=e725]:
                  - generic [ref=e726]:
                    - generic "Previous" [ref=e727]:
                      - button "Previous" [ref=e728]
                    - tablist [ref=e730]:
                      - tab "tab-0" [selected] [ref=e731]
                      - tab "tab-1" [ref=e733]
                      - tab "tab-2" [ref=e735]
                      - tab "tab-3" [ref=e737]
                      - tab "tab-4" [ref=e739]
                      - tab "tab-5"
                      - tab "tab-6"
                    - generic "Next" [ref=e741]:
                      - button "Next" [ref=e742]
                  - link "See watchlist suggestions" [ref=e744]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - 'article "Forget keto and gym: Kidney doctor who lost 40 kg says only one rule truly works for weight loss" [ref=e745] [cursor=pointer]':
              - generic [ref=e747]:
                - img [ref=e748]
                - generic [ref=e749]:
                  - generic [ref=e750]:
                    - generic [ref=e752]:
                      - img [ref=e753]
                      - generic [ref=e754]: The Economic Times
                    - 'link "Forget keto and gym: Kidney doctor who lost 40 kg says only one rule truly works for weight loss, The Economic Times" [ref=e755]':
                      - /url: https://www.msn.com/en-in/health/other/forget-keto-and-gym-kidney-doctor-who-lost-40-kg-says-only-one-rule-truly-works-for-weight-loss/ss-AA1RRVwx
                      - text: "Forget keto and gym: Kidney doctor who lost 40 kg says only one rule truly works for weight loss"
                  - 'generic "Forget keto and gym: Kidney doctor who lost 40 kg says only one rule truly works for weight loss" [ref=e758]':
                    - generic [ref=e760]:
                      - generic [ref=e761]:
                        - button "114 Like" [ref=e762]:
                          - generic [ref=e763]:
                            - img [ref=e764]
                            - generic [ref=e766]: "114"
                        - button "Dislike" [ref=e767]:
                          - img [ref=e769]
                      - link "Start the conversation" [ref=e772]:
                        - /url: https://www.msn.com/en-in/health/other/forget-keto-and-gym-kidney-doctor-who-lost-40-kg-says-only-one-rule-truly-works-for-weight-loss/ss-AA1RRVwx#comments
                        - button "Start the conversation" [ref=e773]:
                          - img [ref=e774]
                - generic [ref=e776]:
                  - button "Hide this story" [ref=e777]:
                    - img [ref=e778]
                    - text: Hide this story
                  - button "See more" [ref=e779]:
                    - img [ref=e780]
            - 'article "UK heatwave: Why experts are warning against sleeping with fans on overnight amid rising temperatures" [ref=e781] [cursor=pointer]':
              - generic [ref=e783]:
                - img [ref=e784]
                - generic [ref=e785]:
                  - generic [ref=e786]:
                    - generic [ref=e787]:
                      - generic [ref=e788]:
                        - img [ref=e789]
                        - generic [ref=e790]: The Times of India
                      - generic [ref=e791]: ·
                      - generic [ref=e792]: 1w
                    - 'link "UK heatwave: Why experts are warning against sleeping with fans on overnight amid rising temperatures, The Times of India" [ref=e793]':
                      - /url: https://www.msn.com/en-in/health/health-news/uk-heatwave-why-experts-are-warning-against-sleeping-with-fans-on-overnight-amid-rising-temperatures/ar-AA245cmI
                      - text: "UK heatwave: Why experts are warning against sleeping with fans on overnight amid rising temperatures"
                  - 'generic "UK heatwave: Why experts are warning against sleeping with fans on overnight amid rising temperatures" [ref=e796]':
                    - generic [ref=e798]:
                      - generic [ref=e799]:
                        - button "31 Like" [ref=e800]:
                          - generic [ref=e801]:
                            - img [ref=e802]
                            - generic [ref=e804]: "31"
                        - button "Dislike" [ref=e805]:
                          - img [ref=e807]
                      - link "View comments 6 Comment" [ref=e810]:
                        - /url: https://www.msn.com/en-in/health/health-news/uk-heatwave-why-experts-are-warning-against-sleeping-with-fans-on-overnight-amid-rising-temperatures/ar-AA245cmI#comments
                        - button "View comments 6 Comment" [ref=e811]:
                          - img [ref=e812]
                        - generic [ref=e814]: "6"
                - generic [ref=e815]:
                  - button "Hide this story" [ref=e816]:
                    - img [ref=e817]
                    - text: Hide this story
                  - button "See more" [ref=e818]:
                    - img [ref=e819]
            - article [ref=e820] [cursor=pointer]
            - article "Why you should tear your baggage tag vertically after a flight" [ref=e827] [cursor=pointer]:
              - generic [ref=e829]:
                - img [ref=e830]
                - generic [ref=e831]:
                  - generic [ref=e832]:
                    - generic [ref=e834]:
                      - img [ref=e835]
                      - generic [ref=e836]: The Indian Express
                    - link "Why you should tear your baggage tag vertically after a flight, The Indian Express" [ref=e837]:
                      - /url: https://www.msn.com/en-in/news/india/why-you-should-tear-your-baggage-tag-vertically-after-a-flight/ar-AA1WIjv6
                      - text: Why you should tear your baggage tag vertically after a flight
                  - generic "Why you should tear your baggage tag vertically after a flight" [ref=e840]:
                    - generic [ref=e842]:
                      - generic [ref=e843]:
                        - button "53 Like" [ref=e844]:
                          - generic [ref=e845]:
                            - img [ref=e846]
                            - generic [ref=e848]: "53"
                        - button "Dislike" [ref=e849]:
                          - img [ref=e851]
                      - link "View comments 2 Comment" [ref=e854]:
                        - /url: https://www.msn.com/en-in/news/india/why-you-should-tear-your-baggage-tag-vertically-after-a-flight/ar-AA1WIjv6#comments
                        - button "View comments 2 Comment" [ref=e855]:
                          - img [ref=e856]
                        - generic [ref=e858]: "2"
                - generic [ref=e859]:
                  - button "Hide this story" [ref=e860]:
                    - img [ref=e861]
                    - text: Hide this story
                  - button "See more" [ref=e862]:
                    - img [ref=e863]
            - article [ref=e864] [cursor=pointer]
            - article [ref=e871] [cursor=pointer]:
              - generic [ref=e877]:
                - generic [ref=e879]:
                  - link "Washington" [ref=e881]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
                    - heading "Washington" [level=2] [ref=e882]
                  - button "My location" [ref=e883]
                  - button "More options" [ref=e885]
                - generic [ref=e889]:
                  - generic [ref=e890]:
                    - generic [ref=e892]:
                      - link "Clear" [ref=e893]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
                        - img "Clear" [ref=e894]
                      - link "14°C" [ref=e895]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
                        - generic [ref=e896]: ‎14‎
                        - generic [ref=e898]: ‎°C‎
                    - generic [ref=e900]:
                      - link "Temperatures to plummet next Tuesday" [ref=e902]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
                        - text: Temperatures to plummet next Tuesday
                      - link "See full forecast" [ref=e904]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
                        - img "arrow" [ref=e905]
                  - link "Weather forecast Today High temperature 31° Low temperature 15° Weather forecast Fri High temperature 30° Low temperature 18° Weather forecast Sat High temperature 33° Low temperature 19° Weather forecast Sun High temperature 31° Low temperature 17° Weather forecast Mon High temperature 27° Low temperature 11°" [ref=e907]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
                    - list [ref=e908]:
                      - listitem [ref=e909]:
                        - generic "Weather forecast Today High temperature 31° Low temperature 15°" [ref=e910]:
                          - link "Weather forecast Today High temperature 31° Low temperature 15°" [ref=e911]:
                            - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
                            - generic:
                              - generic:
                                - generic "Today"
                                - generic:
                                  - img "Sunny"
                                - generic:
                                  - generic "High temperature 31°": ‎31°‎
                                  - generic "Low temperature 15°": ‎15°‎
                      - listitem [ref=e912]:
                        - generic "Weather forecast Fri High temperature 30° Low temperature 18°" [ref=e913]:
                          - link "Weather forecast Fri High temperature 30° Low temperature 18°" [ref=e914]:
                            - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
                            - generic:
                              - generic:
                                - generic "Fri"
                                - generic:
                                  - img "Sunny"
                                - generic:
                                  - generic "High temperature 30°": ‎30°‎
                                  - generic "Low temperature 18°": ‎18°‎
                      - listitem [ref=e915]:
                        - generic "Weather forecast Sat High temperature 33° Low temperature 19°" [ref=e916]:
                          - link "Weather forecast Sat High temperature 33° Low temperature 19°" [ref=e917]:
                            - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
                            - generic:
                              - generic:
                                - generic "Sat"
                                - generic:
                                  - img "Mostly sunny"
                                - generic:
                                  - generic "High temperature 33°": ‎33°‎
                                  - generic "Low temperature 19°": ‎19°‎
                      - listitem [ref=e918]:
                        - generic "Weather forecast Sun High temperature 31° Low temperature 17°" [ref=e919]:
                          - link "Weather forecast Sun High temperature 31° Low temperature 17°" [ref=e920]:
                            - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
                            - generic:
                              - generic:
                                - generic "Sun"
                                - generic:
                                  - img "Mostly sunny"
                                - generic:
                                  - generic "High temperature 31°": ‎31°‎
                                  - generic "Low temperature 17°": ‎17°‎
                      - listitem [ref=e921]:
                        - generic "Weather forecast Mon High temperature 27° Low temperature 11°" [ref=e922]:
                          - link "Weather forecast Mon High temperature 27° Low temperature 11°" [ref=e923]:
                            - /url: https://www.msn.com/en-in/weather/forecast/in-Washington,Virginia
                            - generic:
                              - generic:
                                - generic "Mon"
                                - generic:
                                  - img "Mostly sunny"
                                - generic:
                                  - generic "High temperature 27°": ‎27°‎
                                  - generic "Low temperature 11°": ‎11°‎
                - button "See full forecast" [ref=e926]
          - article [ref=e928]
          - generic [ref=e930]:
            - article [ref=e931] [cursor=pointer]:
              - generic [ref=e936]:
                - generic [ref=e937]:
                  - generic [ref=e938]:
                    - link "Recommended videos" [ref=e939]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e940]
                    - link "Recommended videos" [ref=e943]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e944]:
                    - generic:
                      - link "See more" [ref=e945]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e946]:
                        - button "More options" [ref=e947]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e949]:
                  - generic [ref=e951]:
                    - generic [ref=e953]:
                      - generic:
                        - article "Tabu gifted gold bangles to Saroj Khan after shooting iconic 'Rang De' song, recalls dance artiste" [ref=e956]:
                          - generic [ref=e957]:
                            - img "Tabu gifted gold bangles to Saroj Khan after shooting iconic ‘Rang De’ song, recalls dance artiste" [ref=e959]
                            - generic [ref=e961]: 04:23
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e962]:
                              - generic [ref=e963]:
                                - img "The Times of India" [ref=e964]
                                - generic [ref=e965]:
                                  - generic:
                                    - generic "The Times of India" [ref=e966]
                                    - generic [ref=e967]: ·
                                    - generic [ref=e968]: 1w
                              - link "Tabu gifted gold bangles to Saroj Khan after shooting iconic 'Rang De' song, recalls dance artiste" [ref=e969]:
                                - /url: https://www.msn.com/en-in/entertainment/bollywood/tabu-gifted-gold-bangles-to-saroj-khan-after-shooting-iconic-rang-de-song-recalls-dance-artiste/vi-AA23JcpK?ocid=hpmsn
                                - heading "Tabu gifted gold bangles to Saroj Khan after shooting iconic 'Rang De' song, recalls dance artiste" [level=2] [ref=e970]:
                                  - generic: Tabu gifted gold bangles to Saroj Khan after shooting iconic 'Rang De' song, recalls dance artiste
                            - button "See more" [ref=e974]
                        - article "Why did TMC veterans turn against Abhishek Banerjee? Former MP answers" [ref=e977]:
                          - generic [ref=e978]:
                            - img "Why Did TMC Veterans Turn Against Abhishek Banerjee? Former MP Answers" [ref=e980]
                            - generic [ref=e982]: 03:28
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e983]:
                              - generic [ref=e984]:
                                - img "NDTV 24x7" [ref=e985]
                                - generic [ref=e986]:
                                  - generic:
                                    - generic "NDTV 24x7" [ref=e987]
                                    - generic [ref=e988]: ·
                                    - generic [ref=e989]: 13h
                              - link "Why did TMC veterans turn against Abhishek Banerjee? Former MP answers" [ref=e990]:
                                - /url: https://www.msn.com/en-in/news/india/why-did-tmc-veterans-turn-against-abhishek-banerjee-former-mp-answers/vi-AA24LQ1U?ocid=hpmsn
                                - heading "Why did TMC veterans turn against Abhishek Banerjee? Former MP answers" [level=2] [ref=e991]:
                                  - generic: Why did TMC veterans turn against Abhishek Banerjee? Former MP answers
                            - button "See more" [ref=e995]
                        - article "34 years later, Bihar court sends 85-year-old convict to prison in attempt-to-murder case" [ref=e998]:
                          - generic [ref=e999]:
                            - img "34 years later, Bihar court sends 85-Year-Old convict to prison in attempt-to-murder case" [ref=e1001]
                            - generic [ref=e1003]: 03:46
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1004]:
                              - generic [ref=e1005]:
                                - img "The Economic Times" [ref=e1006]
                                - generic [ref=e1007]:
                                  - generic:
                                    - generic "The Economic Times" [ref=e1008]
                                    - generic [ref=e1009]: ·
                                    - generic [ref=e1010]: 20h
                              - link "34 years later, Bihar court sends 85-year-old convict to prison in attempt-to-murder case" [ref=e1011]:
                                - /url: https://www.msn.com/en-in/news/india/34-years-later-bihar-court-sends-85-year-old-convict-to-prison-in-attempt-to-murder-case/vi-AA24HTfT?ocid=hpmsn
                                - heading "34 years later, Bihar court sends 85-year-old convict to prison in attempt-to-murder case" [level=2] [ref=e1012]:
                                  - generic: 34 years later, Bihar court sends 85-year-old convict to prison in attempt-to-murder case
                            - button "See more" [ref=e1016]
                        - article "Centre rejects 'gold sale' report, calls claim 'fake'; RBI confirms 'physical stock unchanged'" [ref=e1019]:
                          - generic [ref=e1020]:
                            - img "Centre Rejects 'Gold Sale' Report, Calls Claim 'Fake'; RBI Confirms 'Physical Stock Unchanged'" [ref=e1022]
                            - generic [ref=e1024]: 05:21
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1025]:
                              - generic [ref=e1026]:
                                - img "Times Now" [ref=e1027]
                                - generic [ref=e1028]:
                                  - generic:
                                    - generic "Times Now" [ref=e1029]
                                    - generic [ref=e1030]: ·
                                    - generic [ref=e1031]: 21h
                              - link "Centre rejects 'gold sale' report, calls claim 'fake'; RBI confirms 'physical stock unchanged'" [ref=e1032]:
                                - /url: https://www.msn.com/en-in/money/topstories/centre-rejects-gold-sale-report-calls-claim-fake-rbi-confirms-physical-stock-unchanged/vi-AA24JwVy?ocid=hpmsn
                                - heading "Centre rejects 'gold sale' report, calls claim 'fake'; RBI confirms 'physical stock unchanged'" [level=2] [ref=e1033]:
                                  - generic: Centre rejects 'gold sale' report, calls claim 'fake'; RBI confirms 'physical stock unchanged'
                            - button "See more" [ref=e1037]
                        - article "This tiny pod cabin combines luxury, nature, and minimalist design perfectly" [ref=e1040]:
                          - generic [ref=e1041]:
                            - img "This Tiny Pod Cabin Combines Luxury, Nature, and Minimalist Design Perfectly" [ref=e1043]
                            - generic [ref=e1045]: 07:24
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1046]:
                              - generic [ref=e1047]:
                                - img "NEVER TOO SMALL" [ref=e1048]
                                - generic [ref=e1049]:
                                  - generic:
                                    - generic "NEVER TOO SMALL" [ref=e1050]
                                    - generic [ref=e1051]: ·
                                    - generic [ref=e1052]: 3w
                              - link "This tiny pod cabin combines luxury, nature, and minimalist design perfectly" [ref=e1053]:
                                - /url: https://www.msn.com/en-in/travel/news/this-tiny-pod-cabin-combines-luxury-nature-and-minimalist-design-perfectly/vi-AA22Z5T4?ocid=hpmsn
                                - heading "This tiny pod cabin combines luxury, nature, and minimalist design perfectly" [level=2] [ref=e1054]:
                                  - generic: This tiny pod cabin combines luxury, nature, and minimalist design perfectly
                            - button "See more" [ref=e1058]
                        - article [ref=e1061]:
                          - generic [ref=e1062]:
                            - img "Delhi Houses Episode 3 House Of The Man Who built IIT Delhi Thumbnail" [ref=e1064]
                            - generic [ref=e1066]: 04:18
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1067]:
                              - generic [ref=e1068]:
                                - img "Hindustan Times" [ref=e1069]
                                - generic "Hindustan Times" [ref=e1071]
                              - link "Delhi houses episode 3 house of the man who built IIT Delhi" [ref=e1072]:
                                - /url: https://www.msn.com/en-in/news/india/delhi-houses-episode-3-house-of-the-man-who-built-iit-delhi/vi-AA229x39?ocid=hpmsn
                                - heading "Delhi houses episode 3 house of the man who built IIT Delhi" [level=2] [ref=e1073]:
                                  - generic: Delhi houses episode 3 house of the man who built IIT Delhi
                            - button "See more" [ref=e1077]
                        - 'article "Boost for air defence: 4th S-400 squadron starts arriving in India from Russia" [ref=e1080]':
                          - generic [ref=e1081]:
                            - 'img "Boost For Air Defence: 4th S-400 Squadron ''Starts Arriving In India From Russia''" [ref=e1083]'
                            - generic [ref=e1085]: 03:12
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1086]:
                              - generic [ref=e1087]:
                                - img "The Times of India" [ref=e1088]
                                - generic [ref=e1089]:
                                  - generic:
                                    - generic "The Times of India" [ref=e1090]
                                    - generic [ref=e1091]: ·
                                    - generic [ref=e1092]: 9h
                              - 'link "Boost for air defence: 4th S-400 squadron starts arriving in India from Russia" [ref=e1093]':
                                - /url: https://www.msn.com/en-in/news/india/boost-for-air-defence-4th-s-400-squadron-starts-arriving-in-india-from-russia/vi-AA24LcoU?ocid=hpmsn
                                - 'heading "Boost for air defence: 4th S-400 squadron starts arriving in India from Russia" [level=2] [ref=e1094]':
                                  - generic: "Boost for air defence: 4th S-400 squadron starts arriving in India from Russia"
                            - button "See more" [ref=e1098]
                        - article [ref=e1101]:
                          - generic [ref=e1102]:
                            - img "#BachpanIsGr8 | Rethinking Early Childhood Learning" [ref=e1104]
                            - generic [ref=e1106]: 00:30
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1107]:
                              - generic [ref=e1108]:
                                - img "NDTV 24x7" [ref=e1109]
                                - generic [ref=e1110]:
                                  - generic:
                                    - generic "NDTV 24x7" [ref=e1111]
                                    - generic [ref=e1112]: ·
                                    - generic [ref=e1113]: 3w
                              - link "#BachpanIsGr8 | Rethinking early childhood learning" [ref=e1114]:
                                - /url: https://www.msn.com/en-in/news/other/bachpanisgr8-rethinking-early-childhood-learning/vi-AA22Ggh0?ocid=hpmsn
                                - heading "#BachpanIsGr8 | Rethinking early childhood learning" [level=2] [ref=e1115]:
                                  - generic: "#BachpanIsGr8 | Rethinking early childhood learning"
                            - button "See more" [ref=e1119]
                        - article "We tried crossing America in the worst car ever - without using roads" [ref=e1122]:
                          - generic [ref=e1123]:
                            - img "We Tried Crossing America In The Worst Car Ever - Without Using Roads" [ref=e1125]
                            - generic [ref=e1127]: 08:01
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1128]:
                              - generic [ref=e1129]:
                                - img "VINwiki" [ref=e1130]
                                - generic [ref=e1131]:
                                  - generic:
                                    - generic "VINwiki" [ref=e1132]
                                    - generic [ref=e1133]: ·
                                    - generic [ref=e1134]: 4w
                              - link "We tried crossing America in the worst car ever - without using roads" [ref=e1135]:
                                - /url: https://www.msn.com/en-in/autos/news/we-tried-crossing-america-in-the-worst-car-ever-without-using-roads/vi-AA22vVAH?ocid=hpmsn
                                - heading "We tried crossing America in the worst car ever - without using roads" [level=2] [ref=e1136]:
                                  - generic: We tried crossing America in the worst car ever - without using roads
                            - button "See more" [ref=e1140]
                        - article [ref=e1143]:
                          - generic [ref=e1144]:
                            - img "Ranking Italian Cities From Best to Worst (Avoid Tourist Traps)" [ref=e1146]
                            - generic [ref=e1148]: 06:51
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1149]:
                              - generic [ref=e1150]:
                                - img "Vincenzo's Plate" [ref=e1151]
                                - generic "Vincenzo's Plate" [ref=e1153]
                              - link "Ranking Italian cities from best to worst (avoid tourist traps)" [ref=e1154]:
                                - /url: https://www.msn.com/en-in/travel/news/ranking-italian-cities-from-best-to-worst-avoid-tourist-traps/vi-AA21y5h4?ocid=hpmsn
                                - heading "Ranking Italian cities from best to worst (avoid tourist traps)" [level=2] [ref=e1155]:
                                  - generic: Ranking Italian cities from best to worst (avoid tourist traps)
                            - button "See more" [ref=e1159]
                        - article "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [ref=e1162]:
                          - generic [ref=e1163]:
                            - img "Keke Palmer Was Supporting 5 People As A Teenager - Then She Finally Broke Down" [ref=e1165]
                            - generic [ref=e1167]: 12:56
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1168]:
                              - generic [ref=e1169]:
                                - img "TED" [ref=e1170]
                                - generic [ref=e1171]:
                                  - generic:
                                    - generic "TED" [ref=e1172]
                                    - generic [ref=e1173]: ·
                                    - generic [ref=e1174]: 2d
                              - link "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [ref=e1175]:
                                - /url: https://www.msn.com/en-in/video/news/keke-palmer-was-supporting-5-people-as-a-teenager-then-she-finally-broke-down/vi-AA240DwE?ocid=hpmsn
                                - heading "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [level=2] [ref=e1176]:
                                  - generic: Keke Palmer was supporting 5 people as a teenager - then she finally broke down
                            - button "See more" [ref=e1180]
                        - article [ref=e1183]:
                          - generic [ref=e1184]:
                            - img "Relaxing Dog Grooming Sounds" [ref=e1186]
                            - generic [ref=e1188]: 03:00
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1189]:
                              - generic [ref=e1190]:
                                - img "Tucker Budzyn" [ref=e1191]
                                - generic "Tucker Budzyn" [ref=e1193]
                              - link "Relaxing dog grooming sounds" [ref=e1194]:
                                - /url: https://www.msn.com/en-in/lifestyle/pets-animals/relaxing-dog-grooming-sounds/vi-AA1Xtv5r?ocid=hpmsn
                                - heading "Relaxing dog grooming sounds" [level=2] [ref=e1195]:
                                  - generic: Relaxing dog grooming sounds
                            - button "See more" [ref=e1199]
                        - article [ref=e1202]:
                          - generic [ref=e1203]:
                            - img "The Legend Of The Abandoned Mustang - And We Found It" [ref=e1205]
                            - generic [ref=e1207]: 12:19
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1208]:
                              - generic [ref=e1209]:
                                - img "VINwiki" [ref=e1210]
                                - generic [ref=e1211]:
                                  - generic:
                                    - generic "VINwiki" [ref=e1212]
                                    - generic [ref=e1213]: ·
                                    - generic [ref=e1214]: 3w
                              - link "The legend of the abandoned Mustang - and we found it" [ref=e1215]:
                                - /url: https://www.msn.com/en-in/video/news/the-legend-of-the-abandoned-mustang-and-we-found-it/vi-AA22ZqQ9?ocid=hpmsn
                                - heading "The legend of the abandoned Mustang - and we found it" [level=2] [ref=e1216]:
                                  - generic: The legend of the abandoned Mustang - and we found it
                            - button "See more" [ref=e1220]
                        - article [ref=e1223]:
                          - generic [ref=e1224]:
                            - 'img "NEET Re-Exam: NTA Announces New Date as June 21, 2026 (Sunday)" [ref=e1226]'
                            - generic [ref=e1228]: 05:29
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1229]:
                              - generic [ref=e1230]:
                                - img "ABP - Live" [ref=e1231]
                                - generic [ref=e1232]:
                                  - generic:
                                    - generic "ABP - Live" [ref=e1233]
                                    - generic [ref=e1234]: ·
                                    - generic [ref=e1235]: 2w
                              - 'link "NEET re-exam: NTA announces new date as June 21, 2026 (Sunday)" [ref=e1236]':
                                - /url: https://www.msn.com/en-in/entertainment/bollywood/neet-re-exam-nta-announces-new-date-as-june-21-2026-sunday/vi-AA23fwhi?ocid=hpmsn
                                - 'heading "NEET re-exam: NTA announces new date as June 21, 2026 (Sunday)" [level=2] [ref=e1237]':
                                  - generic: "NEET re-exam: NTA announces new date as June 21, 2026 (Sunday)"
                            - button "See more" [ref=e1241]
                        - article "Watch what happens when a Komodo dragon locks onto its target" [ref=e1244]:
                          - generic [ref=e1245]:
                            - img "Watch What Happens When a Komodo Dragon Locks Onto Its Target" [ref=e1247]
                            - generic [ref=e1249]: 31:15
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1250]:
                              - generic [ref=e1251]:
                                - img "Real Science" [ref=e1252]
                                - generic [ref=e1253]:
                                  - generic:
                                    - generic "Real Science" [ref=e1254]
                                    - generic [ref=e1255]: ·
                                    - generic [ref=e1256]: 4d
                              - link "Watch what happens when a Komodo dragon locks onto its target" [ref=e1257]:
                                - /url: https://www.msn.com/en-in/lifestyle/pets-animals/watch-what-happens-when-a-komodo-dragon-locks-onto-its-target/vi-AA1XzYDx?ocid=hpmsn
                                - heading "Watch what happens when a Komodo dragon locks onto its target" [level=2] [ref=e1258]:
                                  - generic: Watch what happens when a Komodo dragon locks onto its target
                            - button "See more" [ref=e1262]
                        - 'article "Anu – Ek Hero Mujhme Bhi | #NiveshkaSahiKadam | @amfi_india" [ref=e1265]':
                          - generic [ref=e1266]:
                            - 'img "Anu – Ek Hero Mujhme Bhi | #NiveshkaSahiKadam | @amfi_india" [ref=e1268]'
                            - generic [ref=e1270]: 01:30
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1271]:
                              - generic [ref=e1272]:
                                - img "News18" [ref=e1273]
                                - generic "News18" [ref=e1275]
                              - 'link "Anu – Ek Hero Mujhme Bhi | #NiveshkaSahiKadam | @amfi_india" [ref=e1276]':
                                - /url: https://www.msn.com/en-in/news/india/anu-ek-hero-mujhme-bhi-niveshkasahikadam-amfi-india/vi-AA1LkNbY?ocid=hpmsn
                                - 'heading "Anu – Ek Hero Mujhme Bhi | #NiveshkaSahiKadam | @amfi_india" [level=2] [ref=e1277]':
                                  - generic: "Anu – Ek Hero Mujhme Bhi | #NiveshkaSahiKadam | @amfi_india"
                            - button "See more" [ref=e1281]
                        - article "Hollywood lied about the Old West - and the truth is way more interesting" [ref=e1284]:
                          - generic [ref=e1285]:
                            - img "Hollywood Lied About the Old West - And the Truth Is Way More Interesting" [ref=e1287]
                            - generic [ref=e1289]: 44:41
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1290]:
                              - generic [ref=e1291]:
                                - img "Kent Rollins" [ref=e1292]
                                - generic [ref=e1293]:
                                  - generic:
                                    - generic "Kent Rollins" [ref=e1294]
                                    - generic [ref=e1295]: ·
                                    - generic [ref=e1296]: 1w
                              - link "Hollywood lied about the Old West - and the truth is way more interesting" [ref=e1297]:
                                - /url: https://www.msn.com/en-in/entertainment/hollywood/hollywood-lied-about-the-old-west-and-the-truth-is-way-more-interesting/vi-AA24aKOH?ocid=hpmsn
                                - heading "Hollywood lied about the Old West - and the truth is way more interesting" [level=2] [ref=e1298]:
                                  - generic: Hollywood lied about the Old West - and the truth is way more interesting
                            - button "See more" [ref=e1302]
                        - article [ref=e1305]:
                          - generic [ref=e1306]:
                            - img "No One Is Supposed to Go Down Here - He Entered Anyway" [ref=e1308]
                            - generic [ref=e1310]: 23:05
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1311]:
                              - generic [ref=e1312]:
                                - img "Magnus Midtbø" [ref=e1313]
                                - generic [ref=e1314]:
                                  - generic:
                                    - generic "Magnus Midtbø" [ref=e1315]
                                    - generic [ref=e1316]: ·
                                    - generic [ref=e1317]: 6d
                              - link "No one is supposed to go down here - he entered anyway" [ref=e1318]:
                                - /url: https://www.msn.com/en-in/news/world/no-one-is-supposed-to-go-down-here-he-entered-anyway/vi-AA1YsZ9M?ocid=hpmsn
                                - heading "No one is supposed to go down here - he entered anyway" [level=2] [ref=e1319]:
                                  - generic: No one is supposed to go down here - he entered anyway
                            - button "See more" [ref=e1323]
                        - 'article "Sachin Tendulkar on Facing Muralitharan: Secrets Behind the Legendary Doosra" [ref=e1326]':
                          - generic [ref=e1327]:
                            - 'img "Sachin Tendulkar on Facing Muralitharan: Secrets Behind the Legendary Doosra Thumbnail" [ref=e1329]'
                            - generic [ref=e1331]: 05:04
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1332]:
                              - generic [ref=e1333]:
                                - img "NDTV 24x7" [ref=e1334]
                                - generic "NDTV 24x7" [ref=e1336]
                              - 'link "Sachin Tendulkar on Facing Muralitharan: Secrets Behind the Legendary Doosra" [ref=e1337]':
                                - /url: https://www.msn.com/en-in/sports/cricket/sachin-tendulkar-on-facing-muralitharan-secrets-behind-the-legendary-doosra/vi-AA1OLPQM?ocid=hpmsn
                                - 'heading "Sachin Tendulkar on Facing Muralitharan: Secrets Behind the Legendary Doosra" [level=2] [ref=e1338]':
                                  - generic: "Sachin Tendulkar on Facing Muralitharan: Secrets Behind the Legendary Doosra"
                            - button "See more" [ref=e1342]
                        - article "Richard Nixon won 49 states - then one scandal destroyed his presidency" [ref=e1345]:
                          - generic [ref=e1346]:
                            - img "Richard Nixon Won 49 States - Then One Scandal Destroyed His Presidency" [ref=e1348]
                            - generic [ref=e1350]: 05:39
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1351]:
                              - generic [ref=e1352]:
                                - img "TED" [ref=e1353]
                                - generic [ref=e1354]:
                                  - generic:
                                    - generic "TED" [ref=e1355]
                                    - generic [ref=e1356]: ·
                                    - generic [ref=e1357]: 3w
                              - link "Richard Nixon won 49 states - then one scandal destroyed his presidency" [ref=e1358]:
                                - /url: https://www.msn.com/en-in/news/world/richard-nixon-won-49-states-then-one-scandal-destroyed-his-presidency/vi-AA22AIx3?ocid=hpmsn
                                - heading "Richard Nixon won 49 states - then one scandal destroyed his presidency" [level=2] [ref=e1359]:
                                  - generic: Richard Nixon won 49 states - then one scandal destroyed his presidency
                            - button "See more" [ref=e1363]
                        - link "See more" [ref=e1365]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1366]
                          - text: See more
                    - button "next" [ref=e1370]:
                      - img [ref=e1373]
            - article "Abhijeet Dipke’s family relocates as his political steps spark worries" [ref=e1375] [cursor=pointer]:
              - generic [ref=e1377]:
                - img [ref=e1378]
                - generic [ref=e1379]:
                  - generic [ref=e1380]:
                    - generic [ref=e1381]:
                      - generic [ref=e1382]:
                        - img [ref=e1383]
                        - generic [ref=e1384]: Hindustan Times
                      - generic [ref=e1385]: ·
                      - generic [ref=e1386]: 4h
                    - link "Abhijeet Dipke’s family relocates as his political steps spark worries, Hindustan Times" [ref=e1387]:
                      - /url: https://www.msn.com/en-in/news/india/abhijeet-dipke-s-family-relocates-as-his-political-steps-spark-worries/ar-AA24NbZ0
                      - text: Abhijeet Dipke’s family relocates as his political steps spark worries
                  - generic "Abhijeet Dipke’s family relocates as his political steps spark worries" [ref=e1390]:
                    - generic [ref=e1392]:
                      - generic [ref=e1393]:
                        - button "28 Like" [ref=e1394]:
                          - generic [ref=e1395]:
                            - img [ref=e1396]
                            - generic [ref=e1398]: "28"
                        - button "Dislike" [ref=e1399]:
                          - img [ref=e1401]
                      - link "View comments 13 Comment" [ref=e1404]:
                        - /url: https://www.msn.com/en-in/news/india/abhijeet-dipke-s-family-relocates-as-his-political-steps-spark-worries/ar-AA24NbZ0#comments
                        - button "View comments 13 Comment" [ref=e1405]:
                          - img [ref=e1406]
                        - generic [ref=e1408]: "13"
                - generic [ref=e1409]:
                  - button "Hide this story" [ref=e1410]:
                    - img [ref=e1411]
                    - text: Hide this story
                  - button "See more" [ref=e1412]:
                    - img [ref=e1413]
            - article [ref=e1414] [cursor=pointer]:
              - generic [ref=e1419]:
                - generic [ref=e1421]:
                  - link "Games" [ref=e1423]:
                    - /url: https://www.msn.com/en-in/play
                    - heading "Games" [level=2] [ref=e1424]
                  - button "More options" [ref=e1426]
                - list [ref=e1430]:
                  - generic:
                    - listitem [ref=e1431]:
                      - link "Space Waves" [ref=e1432]:
                        - /url: https://www.msn.com/en-in/play/games/space-waves/cg-9nm5764dbppg?ocid=hpmsn&cvid=6a213255658b4b05ab05df07bb979e7b&ei=8
                        - generic [ref=e1433]:
                          - img "Space Waves"
                    - listitem [ref=e1434]:
                      - link "Drive Quest" [ref=e1435]:
                        - /url: https://www.msn.com/en-in/play/games/drive-quest/cg-9p4tn53ndjkw?ocid=hpmsn&cvid=6a213255658b4b05ab05df07bb979e7b&ei=8
                        - generic [ref=e1436]:
                          - img "Drive Quest"
                    - listitem [ref=e1437]:
                      - link "Cubes2048" [ref=e1438]:
                        - /url: https://www.msn.com/en-in/play/games/cubes2048/cg-9mvd9sprhm6x?ocid=hpmsn&cvid=6a213255658b4b05ab05df07bb979e7b&ei=8
                        - generic [ref=e1439]:
                          - img "Cubes2048"
                    - listitem [ref=e1440]:
                      - link "Cat and Granny" [ref=e1441]:
                        - /url: https://www.msn.com/en-in/play/games/cat-and-granny/cg-9nvw3pnt193n?ocid=hpmsn&cvid=6a213255658b4b05ab05df07bb979e7b&ei=8
                        - generic [ref=e1442]:
                          - img "Cat and Granny"
                    - listitem [ref=e1443]:
                      - link "bloxd.io" [ref=e1444]:
                        - /url: https://www.msn.com/en-in/play/games/bloxdio/cg-9p0rj8ffrg7h?ocid=hpmsn&cvid=6a213255658b4b05ab05df07bb979e7b&ei=8
                        - generic [ref=e1445]:
                          - img "bloxd.io"
                    - listitem [ref=e1446]:
                      - link "Moto X3M" [ref=e1447]:
                        - /url: https://www.msn.com/en-in/play/games/moto-x3m/cg-9pfc45g1xhp7?ocid=hpmsn&cvid=6a213255658b4b05ab05df07bb979e7b&ei=8
                        - generic [ref=e1448]:
                          - img "Moto X3M"
                    - listitem [ref=e1449]:
                      - 'link "Playground Man: Ragdoll Show" [ref=e1450]':
                        - /url: https://www.msn.com/en-in/play/games/playground-man-ragdoll-show/cg-9nj10wf288jp?ocid=hpmsn&cvid=6a213255658b4b05ab05df07bb979e7b&ei=8
                        - generic [ref=e1451]:
                          - 'img "Playground Man: Ragdoll Show"'
                    - listitem [ref=e1452]:
                      - link "Poxel.io" [ref=e1453]:
                        - /url: https://www.msn.com/en-in/play/games/poxelio/cg-9p8cv7cvz5rl?ocid=hpmsn&cvid=6a213255658b4b05ab05df07bb979e7b&ei=8
                        - generic [ref=e1454]:
                          - img "Poxel.io"
                    - listitem [ref=e1455]:
                      - link "Bubble Shooter HD" [ref=e1456]:
                        - /url: https://www.msn.com/en-in/play/games/bubble-shooter-hd/cg-9nzvl6gzqhkj?ocid=hpmsn&cvid=6a213255658b4b05ab05df07bb979e7b&ei=8
                        - generic [ref=e1457]:
                          - img "Bubble Shooter HD"
                - generic [ref=e1459]:
                  - generic [ref=e1460]:
                    - generic "Previous" [ref=e1461]:
                      - button "Previous" [ref=e1462]
                    - tablist [ref=e1464]:
                      - tab "tab-0" [selected] [ref=e1465]
                      - tab "tab-1" [ref=e1467]
                    - generic "Next" [ref=e1469]:
                      - button "Next" [ref=e1470]
                  - link "Explore more games" [ref=e1472]:
                    - /url: https://www.msn.com/en-in/play
            - article "He bought a lifetime airline ticket, and flew the world for decades before losing it" [ref=e1473] [cursor=pointer]:
              - generic [ref=e1475]:
                - img [ref=e1476]
                - generic [ref=e1477]:
                  - generic [ref=e1478]:
                    - generic [ref=e1480]:
                      - img [ref=e1481]
                      - generic [ref=e1482]: News18
                    - link "He bought a lifetime airline ticket, and flew the world for decades before losing it, News18" [ref=e1483]:
                      - /url: https://www.msn.com/en-in/news/india/he-bought-a-lifetime-airline-ticket-and-flew-the-world-for-decades-before-losing-it/ar-AA226Fto
                      - text: He bought a lifetime airline ticket, and flew the world for decades before losing it
                  - generic "He bought a lifetime airline ticket, and flew the world for decades before losing it" [ref=e1486]:
                    - generic [ref=e1488]:
                      - generic [ref=e1489]:
                        - button "181 Like" [ref=e1490]:
                          - generic [ref=e1491]:
                            - img [ref=e1492]
                            - generic [ref=e1494]: "181"
                        - button "Dislike" [ref=e1495]:
                          - img [ref=e1497]
                      - link "View comments 4 Comment" [ref=e1500]:
                        - /url: https://www.msn.com/en-in/news/india/he-bought-a-lifetime-airline-ticket-and-flew-the-world-for-decades-before-losing-it/ar-AA226Fto#comments
                        - button "View comments 4 Comment" [ref=e1501]:
                          - img [ref=e1502]
                        - generic [ref=e1504]: "4"
                - generic [ref=e1505]:
                  - button "Hide this story" [ref=e1506]:
                    - img [ref=e1507]
                    - text: Hide this story
                  - button "See more" [ref=e1508]:
                    - img [ref=e1509]
            - article "Madhya Pradesh man hits wife during fight, she retaliates and beats him to death" [ref=e1510] [cursor=pointer]:
              - generic [ref=e1512]:
                - img [ref=e1513]
                - generic [ref=e1514]:
                  - generic [ref=e1515]:
                    - generic [ref=e1516]:
                      - generic [ref=e1517]:
                        - img [ref=e1518]
                        - generic [ref=e1519]: India Today
                      - generic [ref=e1520]: ·
                      - generic [ref=e1521]: 5h
                    - link "Madhya Pradesh man hits wife during fight, she retaliates and beats him to death, India Today" [ref=e1522]:
                      - /url: https://www.msn.com/en-in/news/india/madhya-pradesh-man-hits-wife-during-fight-she-retaliates-and-beats-him-to-death/ar-AA24MYOv
                      - text: Madhya Pradesh man hits wife during fight, she retaliates and beats him to death
                  - generic "Madhya Pradesh man hits wife during fight, she retaliates and beats him to death" [ref=e1525]:
                    - generic [ref=e1527]:
                      - generic [ref=e1528]:
                        - button "80 Like" [ref=e1529]:
                          - generic [ref=e1530]:
                            - img [ref=e1531]
                            - generic [ref=e1533]: "80"
                        - button "Dislike" [ref=e1534]:
                          - img [ref=e1536]
                      - link "Start the conversation" [ref=e1539]:
                        - /url: https://www.msn.com/en-in/news/india/madhya-pradesh-man-hits-wife-during-fight-she-retaliates-and-beats-him-to-death/ar-AA24MYOv#comments
                        - button "Start the conversation" [ref=e1540]:
                          - img [ref=e1541]
                - generic [ref=e1543]:
                  - button "Hide this story" [ref=e1544]:
                    - img [ref=e1545]
                    - text: Hide this story
                  - button "See more" [ref=e1546]:
                    - img [ref=e1547]
            - article [ref=e1548] [cursor=pointer]
            - article "Rajat Patidar suffers defeat by 92 runs in 1st match as captain after leading RCB to IPL 2026 title" [ref=e1555] [cursor=pointer]:
              - generic [ref=e1557]:
                - img [ref=e1558]
                - generic [ref=e1559]:
                  - generic [ref=e1560]:
                    - generic [ref=e1561]:
                      - generic [ref=e1562]:
                        - img [ref=e1563]
                        - generic [ref=e1564]: News18
                      - generic [ref=e1565]: ·
                      - generic [ref=e1566]: 3h
                    - link "Rajat Patidar suffers defeat by 92 runs in 1st match as captain after leading RCB to IPL 2026 title, News18" [ref=e1567]:
                      - /url: https://www.msn.com/en-in/sports/cricket/rajat-patidar-suffers-defeat-by-92-runs-in-1st-match-as-captain-after-leading-rcb-to-ipl-2026-title/ar-AA24Ni9l
                      - text: Rajat Patidar suffers defeat by 92 runs in 1st match as captain after leading RCB to IPL 2026 title
                  - generic "Rajat Patidar suffers defeat by 92 runs in 1st match as captain after leading RCB to IPL 2026 title" [ref=e1570]:
                    - generic [ref=e1572]:
                      - generic [ref=e1573]:
                        - button "34 Like" [ref=e1574]:
                          - generic [ref=e1575]:
                            - img [ref=e1576]
                            - generic [ref=e1578]: "34"
                        - button "Dislike" [ref=e1579]:
                          - img [ref=e1581]
                      - link "Start the conversation" [ref=e1584]:
                        - /url: https://www.msn.com/en-in/sports/cricket/rajat-patidar-suffers-defeat-by-92-runs-in-1st-match-as-captain-after-leading-rcb-to-ipl-2026-title/ar-AA24Ni9l#comments
                        - button "Start the conversation" [ref=e1585]:
                          - img [ref=e1586]
                - generic [ref=e1588]:
                  - button "Hide this story" [ref=e1589]:
                    - img [ref=e1590]
                    - text: Hide this story
                  - button "See more" [ref=e1591]:
                    - img [ref=e1592]
          - generic [ref=e1593]:
            - article [ref=e1594] [cursor=pointer]
            - article "'Biggest reason I left cricket', Lalit Modi claims Dawood Ibrahim's $4-billion 'Satta Bazaar' targeted him over IPL control" [ref=e1601] [cursor=pointer]:
              - generic [ref=e1603]:
                - img [ref=e1604]
                - generic [ref=e1605]:
                  - generic [ref=e1606]:
                    - generic [ref=e1607]:
                      - generic [ref=e1608]:
                        - img [ref=e1609]
                        - generic [ref=e1610]: The Economic Times
                      - generic [ref=e1611]: ·
                      - generic [ref=e1612]: 5h
                    - link "'Biggest reason I left cricket', Lalit Modi claims Dawood Ibrahim's $4-billion 'Satta Bazaar' targeted him over IPL control, The Economic Times" [ref=e1613]:
                      - /url: https://www.msn.com/en-in/sports/cricket/biggest-reason-i-left-cricket-lalit-modi-claims-dawood-ibrahim-s-4-billion-satta-bazaar-targeted-him-over-ipl-control/ar-AA24MEUf
                      - text: "'Biggest reason I left cricket', Lalit Modi claims Dawood Ibrahim's $4-billion 'Satta Bazaar' targeted him over IPL control"
                  - generic "'Biggest reason I left cricket', Lalit Modi claims Dawood Ibrahim's $4-billion 'Satta Bazaar' targeted him over IPL control" [ref=e1616]:
                    - generic [ref=e1618]:
                      - generic [ref=e1619]:
                        - button "30 Like" [ref=e1620]:
                          - generic [ref=e1621]:
                            - img [ref=e1622]
                            - generic [ref=e1624]: "30"
                        - button "Dislike" [ref=e1625]:
                          - img [ref=e1627]
                      - link "Start the conversation" [ref=e1630]:
                        - /url: https://www.msn.com/en-in/sports/cricket/biggest-reason-i-left-cricket-lalit-modi-claims-dawood-ibrahim-s-4-billion-satta-bazaar-targeted-him-over-ipl-control/ar-AA24MEUf#comments
                        - button "Start the conversation" [ref=e1631]:
                          - img [ref=e1632]
                - generic [ref=e1634]:
                  - button "Hide this story" [ref=e1635]:
                    - img [ref=e1636]
                    - text: Hide this story
                  - button "See more" [ref=e1637]:
                    - img [ref=e1638]
    - contentinfo [ref=e1641]:
      - generic "Feedback" [ref=e1643] [cursor=pointer]:
        - button "Feedback" [ref=e1644]:
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