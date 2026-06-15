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
        - 'link "Phoenix: Partly cloudy, 34 °C" [ref=e19] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
          - generic "Phoenix, Arizona, United States Click here to see more information" [ref=e20]: Phoenix
          - img "Partly cloudy" [ref=e22]
          - generic [ref=e23]:
            - generic [ref=e24]: ‎34‎
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
                    - link "World Cup" [ref=e195] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in/sports/moments/league/ka-mit?serviceName=contentRetrieverService&query=FIFA%20World%20Cup%202026
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
              - article "Price Starting from $2.5 - Quickbooks? Switch To Xero - Switching To Xero Is Easy" [ref=e283] [cursor=pointer]:
                - generic [ref=e285]:
                  - img [ref=e286]
                  - generic [ref=e287]:
                    - generic [ref=e288]:
                      - generic [ref=e291]: xero.com
                      - link "Price Starting from $2.5 - Quickbooks? Switch To Xero - Switching To Xero Is Easy, xero.com" [ref=e292]:
                        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=de0a8e82-c4e6-4885-82f1-564af4f520e5&bdc=pb&bidId=2&bidderId=4&cmExpId=LV5&impId=2&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=a2a67a35-c96d-414d-bad0-1fa194cbcd6f&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8OTeK77qx_Z5MK_s64frN5TVUCUwGFZXStsIRTHcghvlF8qXVFBjoLKSYBmt-abZ3GmHk-TOUrNtC5840glK7lF-eAOqgQU0dK2A7UiZnLMnmc2jo0kZrHSp04kswMggLWA5029nAXgiJ4hX4UXV1exxsPGTENmw6e29r_CkKUYQpvoyyiF0I-B9Z6k7lNlOgFZhH0w%26u%3DaHR0cHMlM2ElMmYlMmZhZC5kb3VibGVjbGljay5uZXQlMmZzZWFyY2hhZHMlMmZsaW5rJTJmY2xpY2slM2ZsaWQlM2Q0MzcwMDA4MDM3NTgzODE2NyUyNmRzX3Nfa3dnaWQlM2Q1ODcwMDAwODczNTkzMjkwMiUyNmRzX2FfY2lkJTNkNjUzNzM3MTQ2MCUyNmRzX2FfY2FpZCUzZDIxNDA0OTM4NTA5JTI2ZHNfYV9hZ2lkJTNkMTYzOTU5MzYyNzk2JTI2ZHNfYV9saWQlM2Rrd2QtNDMwMDM3NjYlMjYlMjZkc19lX2FkaWQlM2Q4MTg0NTAyNjA3OTc5NiUyNmRzX2VfdGFyZ2V0X2lkJTNka3dkLTgxODQ1MjI1MDg2MzAyJTNhbG9jLTE5MCUyNiUyNmRzX2VfbmV0d29yayUzZGElMjZkc191cmxfdiUzZDIlMjZkc19kZXN0X3VybCUzZGh0dHBzJTNhJTJmJTJmd3d3Lnhlcm8uY29tJTJmdXMlMmZ0cnktbm93JTJmcXVpY2tib29rcy1hbHRlcm5hdGl2ZSUyZiUzZnV0bV9zb3VyY2UlM2RNSUNST1NPRlQlMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkVVMlMmItJTJiTkIlMmItJTJiTEYlMmItJTJiU01CJTJiLSUyYkNvbXBldGl0b3IlMjZ1dG1fY29udGVudCUzZFFCJTI2dXRtX3Rlcm0lM2RxdWlja2Jvb2tzJTJiYWNjb3VudGluZyUyYnNvZnR3YXJlJTI2ZHNfa2lkJTNkNDMwMDM3NjYlMjZnY2xpZCUzZDg4ODRjNmY0N2ZkMjE3OTAwYTlmYWNkYmI3YzcyYzljJTI2Z2Nsc3JjJTNkM3AuZHMlMjYlMjZtc2Nsa2lkJTNkODg4NGM2ZjQ3ZmQyMTc5MDBhOWZhY2RiYjdjNzJjOWMlMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RVUyUyNTIwLSUyNTIwTkIlMjUyMC0lMjUyMExGJTI1MjAtJTI1MjBTTUIlMjUyMC0lMjUyMENvbXBldGl0b3IlMjZ1dG1fdGVybSUzZHF1aWNrYm9va3MlMjUyMGFjY291bnRpbmclMjUyMHNvZnR3YXJlJTI2dXRtX2NvbnRlbnQlM2RRQg%26rlid%3D8884c6f47fd217900a9facdbb7c72c9c&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                        - text: Price Starting from $2.5 - Quickbooks? Switch To Xero - Switching To Xero Is Easy
                    - link "Sponsored" [ref=e294]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=de0a8e82-c4e6-4885-82f1-564af4f520e5&bdc=pb&bidId=2&bidderId=4&cmExpId=LV5&impId=2&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=a2a67a35-c96d-414d-bad0-1fa194cbcd6f&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8OTeK77qx_Z5MK_s64frN5TVUCUwGFZXStsIRTHcghvlF8qXVFBjoLKSYBmt-abZ3GmHk-TOUrNtC5840glK7lF-eAOqgQU0dK2A7UiZnLMnmc2jo0kZrHSp04kswMggLWA5029nAXgiJ4hX4UXV1exxsPGTENmw6e29r_CkKUYQpvoyyiF0I-B9Z6k7lNlOgFZhH0w%26u%3DaHR0cHMlM2ElMmYlMmZhZC5kb3VibGVjbGljay5uZXQlMmZzZWFyY2hhZHMlMmZsaW5rJTJmY2xpY2slM2ZsaWQlM2Q0MzcwMDA4MDM3NTgzODE2NyUyNmRzX3Nfa3dnaWQlM2Q1ODcwMDAwODczNTkzMjkwMiUyNmRzX2FfY2lkJTNkNjUzNzM3MTQ2MCUyNmRzX2FfY2FpZCUzZDIxNDA0OTM4NTA5JTI2ZHNfYV9hZ2lkJTNkMTYzOTU5MzYyNzk2JTI2ZHNfYV9saWQlM2Rrd2QtNDMwMDM3NjYlMjYlMjZkc19lX2FkaWQlM2Q4MTg0NTAyNjA3OTc5NiUyNmRzX2VfdGFyZ2V0X2lkJTNka3dkLTgxODQ1MjI1MDg2MzAyJTNhbG9jLTE5MCUyNiUyNmRzX2VfbmV0d29yayUzZGElMjZkc191cmxfdiUzZDIlMjZkc19kZXN0X3VybCUzZGh0dHBzJTNhJTJmJTJmd3d3Lnhlcm8uY29tJTJmdXMlMmZ0cnktbm93JTJmcXVpY2tib29rcy1hbHRlcm5hdGl2ZSUyZiUzZnV0bV9zb3VyY2UlM2RNSUNST1NPRlQlMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkVVMlMmItJTJiTkIlMmItJTJiTEYlMmItJTJiU01CJTJiLSUyYkNvbXBldGl0b3IlMjZ1dG1fY29udGVudCUzZFFCJTI2dXRtX3Rlcm0lM2RxdWlja2Jvb2tzJTJiYWNjb3VudGluZyUyYnNvZnR3YXJlJTI2ZHNfa2lkJTNkNDMwMDM3NjYlMjZnY2xpZCUzZDg4ODRjNmY0N2ZkMjE3OTAwYTlmYWNkYmI3YzcyYzljJTI2Z2Nsc3JjJTNkM3AuZHMlMjYlMjZtc2Nsa2lkJTNkODg4NGM2ZjQ3ZmQyMTc5MDBhOWZhY2RiYjdjNzJjOWMlMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RVUyUyNTIwLSUyNTIwTkIlMjUyMC0lMjUyMExGJTI1MjAtJTI1MjBTTUIlMjUyMC0lMjUyMENvbXBldGl0b3IlMjZ1dG1fdGVybSUzZHF1aWNrYm9va3MlMjUyMGFjY291bnRpbmclMjUyMHNvZnR3YXJlJTI2dXRtX2NvbnRlbnQlM2RRQg%26rlid%3D8884c6f47fd217900a9facdbb7c72c9c&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                  - button "See more" [ref=e296]:
                    - img [ref=e297]
            - article [ref=e298] [cursor=pointer]:
              - generic [ref=e303]:
                - generic [ref=e305]:
                  - link "Top stories" [ref=e307]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a2fc81492e84161a5206f21857573ed&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e308]
                  - button "More options" [ref=e310]
                - list [ref=e313]:
                  - listitem "Noida Airport begins passenger flights; first flight from Lucknow" [ref=e314]:
                    - generic [ref=e315]:
                      - generic [ref=e316]:
                        - generic:
                          - generic [ref=e317]: Breaking
                          - img [ref=e318]
                        - generic [ref=e319]:
                          - generic: Press Trust of India ·7m
                      - generic [ref=e320]: Noida Airport begins passenger flights; first flight from Lucknow
                  - 'listitem "Iran-US peace deal: Strait of Hormuz reopening uncertain amid ''toll vs service charge'' row, mines danger, sailor killings" [ref=e321]':
                    - generic [ref=e322]:
                      - generic [ref=e323]:
                        - img [ref=e324]
                        - generic [ref=e325]:
                          - generic: WION ·now
                      - generic [ref=e326]: "Iran-US peace deal: Strait of Hormuz reopening uncertain amid 'toll vs service charge' row, mines danger, sailor killings"
                  - listitem "Trinamool rebels to join this camp. Leader who opposed merger makes U-turn" [ref=e327]:
                    - generic [ref=e328]:
                      - generic [ref=e329]:
                        - img [ref=e330]
                        - generic [ref=e331]:
                          - generic: NDTV 24x7 ·46m
                      - generic [ref=e332]: Trinamool rebels to join this camp. Leader who opposed merger makes U-turn
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
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a2fc81492e84161a5206f21857573ed&ocid=hpmsn
            - article [ref=e350] [cursor=pointer]:
              - generic [ref=e354]:
                - generic: Sponsored
            - article "No Middleman - No Fees - No Commissions" [ref=e355] [cursor=pointer]:
              - generic [ref=e357]:
                - img [ref=e358]
                - generic [ref=e359]:
                  - generic [ref=e360]:
                    - generic [ref=e363]: Repo Finder
                    - link "No Middleman - No Fees - No Commissions, Repo Finder" [ref=e364]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=cbba6361-1f89-4a34-bbd5-f663de87d664&bdc=pb&bidId=4&bidderId=4&cmExpId=LV5&impId=8&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=a2a67a35-c96d-414d-bad0-1fa194cbcd6f&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De83nx1aI9r14cxpidvVHoSazVUCUyMMBUTkG4zFjtBHZbvr3dgWit3LeL3xYJUL6AwDLUusmWV_pHllFAm07A2TfMqWy02rWntWn6abUsHDxDOdgEsU8A23WS_fyL76H6anUGdzP1vGVBjLlotpyt9f2kNbbB1oUzlhDznM7DyTpRKJNT8oD2gV9aFewJt_nt7xsws3Q%26u%3DaHR0cHMlM2ElMmYlMmZyZXBvZmluZGVyLmNvbSUzZnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX21lZGl1bSUzZGNwYyUyNnV0bV9jYW1wYWlnbiUzZEltYWdlJTI1MjBhZHMlMjZ1dG1fdGVybSUzZGtleXdvcmQlMjZ1dG1fY29udGVudCUzZDc2NjIyNDQzODI4NTI1JTI2bXNjbGtpZCUzZDM2YThhNDEwMDZkMTFmMDc5OTdjY2UzZmNlYzQ5YTBh%26rlid%3D36a8a41006d11f07997cce3fcec49a0a&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: No Middleman - No Fees - No Commissions
                  - link "Sponsored" [ref=e366]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=cbba6361-1f89-4a34-bbd5-f663de87d664&bdc=pb&bidId=4&bidderId=4&cmExpId=LV5&impId=8&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=a2a67a35-c96d-414d-bad0-1fa194cbcd6f&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De83nx1aI9r14cxpidvVHoSazVUCUyMMBUTkG4zFjtBHZbvr3dgWit3LeL3xYJUL6AwDLUusmWV_pHllFAm07A2TfMqWy02rWntWn6abUsHDxDOdgEsU8A23WS_fyL76H6anUGdzP1vGVBjLlotpyt9f2kNbbB1oUzlhDznM7DyTpRKJNT8oD2gV9aFewJt_nt7xsws3Q%26u%3DaHR0cHMlM2ElMmYlMmZyZXBvZmluZGVyLmNvbSUzZnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX21lZGl1bSUzZGNwYyUyNnV0bV9jYW1wYWlnbiUzZEltYWdlJTI1MjBhZHMlMjZ1dG1fdGVybSUzZGtleXdvcmQlMjZ1dG1fY29udGVudCUzZDc2NjIyNDQzODI4NTI1JTI2bXNjbGtpZCUzZDM2YThhNDEwMDZkMTFmMDc5OTdjY2UzZmNlYzQ5YTBh%26rlid%3D36a8a41006d11f07997cce3fcec49a0a&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e368]:
                  - img [ref=e369]
            - article [ref=e370] [cursor=pointer]:
              - generic [ref=e376]:
                - generic [ref=e378]:
                  - img "World Cup coverage" [ref=e380]
                  - link "World Cup coverage" [ref=e381]:
                    - /url: https://www.msn.com/en-in/sports/moments/league/ka-KAB16EB853?serviceName=contentRetrieverService&query=FIFA+World+Cup+2026--327&newsid=AA25E5Ta&ocid=hpmsn&cvid=6a2fc81492e84161a5206f21857573ed
                    - heading "World Cup coverage" [level=2] [ref=e382]
                  - button "More interests" [ref=e383]
                  - generic [ref=e384]:
                    - generic "Popular in your area" [ref=e385]:
                      - button "Popular in your area" [ref=e386]
                    - button "More options" [ref=e387]
                - link "+12 · Curated by Copilot FIFA World Cup 2026 group drama builds across early upsets" [ref=e391]:
                  - /url: https://www.msn.com/en-in/sports/moments/league/ka-KAB16EB853?serviceName=contentRetrieverService&query=FIFA+World+Cup+2026--327&newsid=AA25E5Ta&ocid=hpmsn&cvid=6a2fc81492e84161a5206f21857573ed
                  - generic [ref=e395]: +12 · Curated by Copilot
                  - button "FIFA World Cup 2026 group drama builds across early upsets" [ref=e396]
                - generic [ref=e398]:
                  - generic [ref=e399]:
                    - generic "Previous" [ref=e400]:
                      - button "Previous" [ref=e401]
                    - tablist [ref=e403]:
                      - tab "tab-0" [selected] [ref=e404]
                      - tab "tab-1" [ref=e406]
                      - tab "tab-2" [ref=e408]
                      - tab "tab-3" [ref=e410]
                      - tab "tab-4" [ref=e412]
                      - tab "tab-5"
                      - tab "tab-6"
                      - tab "tab-7"
                      - tab "tab-8"
                      - tab "tab-9"
                      - tab "tab-10"
                      - tab "tab-11"
                    - generic "Next" [ref=e414]:
                      - button "Next" [ref=e415]
                  - link "See full coverage" [ref=e417]:
                    - /url: https://www.msn.com/en-in/sports/moments/league/ka-KAB16EB853?serviceName=contentRetrieverService&query=FIFA+World+Cup+2026--327&newsid=AA25E5Ta&ocid=hpmsn&cvid=6a2fc81492e84161a5206f21857573ed
            - article "Did Huma Qureshi just ‘hard-launch’ her boyfriend? Rachit Singh’s reply sparks buzz" [ref=e418] [cursor=pointer]:
              - generic [ref=e420]:
                - img [ref=e421]
                - generic [ref=e422]:
                  - generic [ref=e423]:
                    - generic [ref=e424]:
                      - generic [ref=e425]:
                        - img [ref=e426]
                        - generic [ref=e427]: The Indian Express
                      - generic [ref=e428]: ·
                      - generic [ref=e429]: 20h
                    - link "Did Huma Qureshi just ‘hard-launch’ her boyfriend? Rachit Singh’s reply sparks buzz, The Indian Express" [ref=e430]:
                      - /url: https://www.msn.com/en-in/entertainment/bollywood/did-huma-qureshi-just-hard-launch-her-boyfriend-rachit-singh-s-reply-sparks-buzz/ar-AA25CF0p
                      - text: Did Huma Qureshi just ‘hard-launch’ her boyfriend? Rachit Singh’s reply sparks buzz
                  - generic "Did Huma Qureshi just ‘hard-launch’ her boyfriend? Rachit Singh’s reply sparks buzz" [ref=e433]:
                    - generic [ref=e435]:
                      - generic [ref=e436]:
                        - button "19 Like" [ref=e437]:
                          - generic [ref=e438]:
                            - img [ref=e439]
                            - generic [ref=e441]: "19"
                        - button "Dislike" [ref=e442]:
                          - img [ref=e444]
                      - link "Start the conversation" [ref=e447]:
                        - /url: https://www.msn.com/en-in/entertainment/bollywood/did-huma-qureshi-just-hard-launch-her-boyfriend-rachit-singh-s-reply-sparks-buzz/ar-AA25CF0p#comments
                        - button "Start the conversation" [ref=e448]:
                          - img [ref=e449]
                - generic [ref=e451]:
                  - button "Hide this story" [ref=e452]:
                    - img [ref=e453]
                    - text: Hide this story
                  - button "See more" [ref=e454]:
                    - img [ref=e455]
            - article "Forbes Reveals Program To Clear $21K-$100K+ Debt Without a Loan (Check Eligibility)" [ref=e456] [cursor=pointer]:
              - generic [ref=e458]:
                - img [ref=e459]
                - generic [ref=e460]:
                  - generic [ref=e461]:
                    - generic [ref=e464]: Forbes
                    - link "Forbes Reveals Program To Clear $21K-$100K+ Debt Without a Loan (Check Eligibility), Forbes" [ref=e465]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=bc93eccb-d587-44ed-b115-eecc70a0f9c1&bdc=pb&bidId=14&bidderId=4&cmExpId=LV5&impId=9&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=a2a67a35-c96d-414d-bad0-1fa194cbcd6f&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8FMXgn8V3Hjfohs5eBaE68TVUCUxyU-1I3u1W-JCafY-EvRbpZjiKPCiRyv25nJxyVuRoajD1kGmGxbWi-n69H4qPa81l4iSgOxmo7JsAT1EydRXN4zmX_i5v0VsVfwXALlXCgDtJSASoAlKXIK1GVULTx3KnDo0f4aZs1do-q7efkFgRYjrcK6Is2IiYuZzaue6zvA%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZm9yYmVzLmNvbSUyZmFkdmlzb3IlMmZqb3VybmV5JTJmZGVidC1yZWxpZWYtc3AlMmZmYXNwJTJmdjElM2ZscF9zMSUzZFNMNE1TTiUyNnV0bV9jYW1wYWlnbiUzZDY4ODk2MDE5NyUyNmFjY291bnRpZCUzZDE1MDUwMDI0NyUyNnV0bV9jb250ZW50JTNkMTMxMjgxOTc1NDMyMzQ1NiUyNnV0bV90ZXJtJTNka3dkLTIzMzM4NTA4NzAyMTk2ODAlM2Fsb2MtMTkwJTI2bmV0d29yayUzZG1zbiUyNnBsYWNlbWVudCUzZGt3ZC0yMzMzODUwODcwMjE5NjgwJTNhbG9jLTE5MCUyNmNyZWF0aXZlJTNkODIwNTE0ODUyMTI4OTQlMjZ1dG1fc291cmNlJTNkTVNBTiUyNnV0bV9tZWRpdW0lM2RwYWlkX25hdGl2ZSUyNmVjb21fY3JlYXRpdmUlM2Q4MjA1MTQ4NTIxMjg5NCUyNmxwX3M0JTNkNjg4OTYwMTk3JTI2bXNjbGtpZCUzZDg4MzEzODY0OWNkMTEzNTAyODM0NTI0YjU0YzQ3NmY1%26rlid%3D883138649cd113502834524b54c476f5&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Forbes Reveals Program To Clear $21K-$100K+ Debt Without a Loan (Check Eligibility)
                  - link "Sponsored" [ref=e467]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=bc93eccb-d587-44ed-b115-eecc70a0f9c1&bdc=pb&bidId=14&bidderId=4&cmExpId=LV5&impId=9&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=a2a67a35-c96d-414d-bad0-1fa194cbcd6f&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8FMXgn8V3Hjfohs5eBaE68TVUCUxyU-1I3u1W-JCafY-EvRbpZjiKPCiRyv25nJxyVuRoajD1kGmGxbWi-n69H4qPa81l4iSgOxmo7JsAT1EydRXN4zmX_i5v0VsVfwXALlXCgDtJSASoAlKXIK1GVULTx3KnDo0f4aZs1do-q7efkFgRYjrcK6Is2IiYuZzaue6zvA%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZm9yYmVzLmNvbSUyZmFkdmlzb3IlMmZqb3VybmV5JTJmZGVidC1yZWxpZWYtc3AlMmZmYXNwJTJmdjElM2ZscF9zMSUzZFNMNE1TTiUyNnV0bV9jYW1wYWlnbiUzZDY4ODk2MDE5NyUyNmFjY291bnRpZCUzZDE1MDUwMDI0NyUyNnV0bV9jb250ZW50JTNkMTMxMjgxOTc1NDMyMzQ1NiUyNnV0bV90ZXJtJTNka3dkLTIzMzM4NTA4NzAyMTk2ODAlM2Fsb2MtMTkwJTI2bmV0d29yayUzZG1zbiUyNnBsYWNlbWVudCUzZGt3ZC0yMzMzODUwODcwMjE5NjgwJTNhbG9jLTE5MCUyNmNyZWF0aXZlJTNkODIwNTE0ODUyMTI4OTQlMjZ1dG1fc291cmNlJTNkTVNBTiUyNnV0bV9tZWRpdW0lM2RwYWlkX25hdGl2ZSUyNmVjb21fY3JlYXRpdmUlM2Q4MjA1MTQ4NTIxMjg5NCUyNmxwX3M0JTNkNjg4OTYwMTk3JTI2bXNjbGtpZCUzZDg4MzEzODY0OWNkMTEzNTAyODM0NTI0YjU0YzQ3NmY1%26rlid%3D883138649cd113502834524b54c476f5&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e469]:
                  - img [ref=e470]
            - article "6 warning signs that may indicate a snake is hiding near your home" [ref=e471] [cursor=pointer]:
              - generic [ref=e473]:
                - img [ref=e474]
                - generic [ref=e475]:
                  - generic [ref=e476]:
                    - generic [ref=e477]:
                      - generic [ref=e478]:
                        - img [ref=e479]
                        - generic [ref=e480]: The Economic Times
                      - generic [ref=e481]: ·
                      - generic [ref=e482]: 3w
                    - link "6 warning signs that may indicate a snake is hiding near your home, The Economic Times" [ref=e483]:
                      - /url: https://www.msn.com/en-in/entertainment/news/6-warning-signs-that-may-indicate-a-snake-is-hiding-near-your-home/ss-AA23srxe
                      - text: 6 warning signs that may indicate a snake is hiding near your home
                  - generic "6 warning signs that may indicate a snake is hiding near your home" [ref=e486]:
                    - generic [ref=e488]:
                      - generic [ref=e489]:
                        - button "757 Like" [ref=e490]:
                          - generic [ref=e491]:
                            - img [ref=e492]
                            - generic [ref=e494]: "757"
                        - button "Dislike" [ref=e495]:
                          - img [ref=e497]
                      - link "View comments 1 Comment" [ref=e500]:
                        - /url: https://www.msn.com/en-in/entertainment/news/6-warning-signs-that-may-indicate-a-snake-is-hiding-near-your-home/ss-AA23srxe#comments
                        - button "View comments 1 Comment" [ref=e501]:
                          - img [ref=e502]
                        - generic [ref=e504]: "1"
                - generic [ref=e505]:
                  - button "Hide this story" [ref=e506]:
                    - img [ref=e507]
                    - text: Hide this story
                  - button "See more" [ref=e508]:
                    - img [ref=e509]
            - 'article "Monsoon has vanished: Satellite images show rain collapse, India faces 64% deficit" [ref=e510] [cursor=pointer]':
              - generic [ref=e512]:
                - img [ref=e513]
                - generic [ref=e514]:
                  - generic [ref=e515]:
                    - generic [ref=e516]:
                      - generic [ref=e517]:
                        - img [ref=e518]
                        - generic [ref=e519]: India Today
                      - generic [ref=e520]: ·
                      - generic [ref=e521]: 3h
                    - 'link "Monsoon has vanished: Satellite images show rain collapse, India faces 64% deficit, India Today" [ref=e522]':
                      - /url: https://www.msn.com/en-in/entertainment/tv/monsoon-has-vanished-satellite-images-show-rain-collapse-india-faces-64-deficit/ar-AA25EqXy
                      - text: "Monsoon has vanished: Satellite images show rain collapse, India faces 64% deficit"
                  - 'generic "Monsoon has vanished: Satellite images show rain collapse, India faces 64% deficit" [ref=e525]':
                    - generic [ref=e527]:
                      - generic [ref=e528]:
                        - button "56 Like" [ref=e529]:
                          - generic [ref=e530]:
                            - img [ref=e531]
                            - generic [ref=e533]: "56"
                        - button "Dislike" [ref=e534]:
                          - img [ref=e536]
                      - link "View comments 3 Comment" [ref=e539]:
                        - /url: https://www.msn.com/en-in/entertainment/tv/monsoon-has-vanished-satellite-images-show-rain-collapse-india-faces-64-deficit/ar-AA25EqXy#comments
                        - button "View comments 3 Comment" [ref=e540]:
                          - img [ref=e541]
                        - generic [ref=e543]: "3"
                - generic [ref=e544]:
                  - button "Hide this story" [ref=e545]:
                    - img [ref=e546]
                    - text: Hide this story
                  - button "See more" [ref=e547]:
                    - img [ref=e548]
          - generic [ref=e549]:
            - article [ref=e550] [cursor=pointer]:
              - generic [ref=e555]:
                - generic [ref=e557]:
                  - link "Top Engaging News" [ref=e559]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a2fc81492e84161a5206f21857573ed
                    - heading "Top Engaging News" [level=2] [ref=e560]
                  - button "More options" [ref=e562]
                - generic [ref=e564]:
                  - 'link "Times Now 10 Comments Urmila Matondkar''s ex-husband Mohsin Akhtar gets married two years after divorce: Allah''s script is better" [ref=e566]':
                    - /url: https://www.msn.com/en-in/entertainment/bollywood/urmila-matondkar-s-ex-husband-mohsin-akhtar-gets-married-two-years-after-divorce-allah-s-script-is-better/ar-AA25D57Q
                    - generic [ref=e567]:
                      - img [ref=e568]
                      - generic [ref=e569]: Times Now
                      - link "10 Comments" [ref=e571]:
                        - /url: https://www.msn.com/en-in/entertainment/bollywood/urmila-matondkar-s-ex-husband-mohsin-akhtar-gets-married-two-years-after-divorce-allah-s-script-is-better/ar-AA25D57Q#comments
                        - img [ref=e572]
                        - paragraph [ref=e573]: "10"
                    - paragraph [ref=e574]: "Urmila Matondkar's ex-husband Mohsin Akhtar gets married two years after divorce: Allah's script is better"
                  - 'link "The Indian Express 5 Comments Who won the Iran-US war: Trump, Tehran or Pakistan? And who lost?" [ref=e576]':
                    - /url: https://www.msn.com/en-in/news/world/who-won-the-iran-us-war-trump-tehran-or-pakistan-and-who-lost/ar-AA25DziN
                    - generic [ref=e577]:
                      - img [ref=e578]
                      - generic [ref=e579]: The Indian Express
                      - link "5 Comments" [ref=e581]:
                        - /url: https://www.msn.com/en-in/news/world/who-won-the-iran-us-war-trump-tehran-or-pakistan-and-who-lost/ar-AA25DziN#comments
                        - img [ref=e582]
                        - paragraph [ref=e583]: "5"
                    - paragraph [ref=e584]: "Who won the Iran-US war: Trump, Tehran or Pakistan? And who lost?"
                  - link "India Today 4 Comments Indian Army unveils new dress code, phases out colonial-era traditions" [ref=e586]:
                    - /url: https://www.msn.com/en-in/lifestyle/style/indian-army-unveils-new-dress-code-phases-out-colonial-era-traditions/ar-AA25E0JB
                    - generic [ref=e587]:
                      - img [ref=e588]
                      - generic [ref=e589]: India Today
                      - link "4 Comments" [ref=e591]:
                        - /url: https://www.msn.com/en-in/lifestyle/style/indian-army-unveils-new-dress-code-phases-out-colonial-era-traditions/ar-AA25E0JB#comments
                        - img [ref=e592]
                        - paragraph [ref=e593]: "4"
                    - paragraph [ref=e594]: Indian Army unveils new dress code, phases out colonial-era traditions
                - generic [ref=e596]:
                  - generic [ref=e597]:
                    - generic "Previous" [ref=e598]:
                      - button "Previous" [ref=e599]
                    - tablist [ref=e601]:
                      - tab "tab-0" [selected] [ref=e602]
                      - tab "tab-1" [ref=e604]
                      - tab "tab-2" [ref=e606]
                    - generic "Next" [ref=e608]:
                      - button "Next" [ref=e609]
                  - link "See more" [ref=e611]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a2fc81492e84161a5206f21857573ed
            - article [ref=e612] [cursor=pointer]:
              - generic [ref=e618]:
                - generic [ref=e620]:
                  - img "Watchlist suggestions" [ref=e622]
                  - link "Watchlist suggestions" [ref=e623]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e624]
                  - button "More options" [ref=e626]
                - generic [ref=e631]:
                  - link "USD/INR US Dollar/Indian Rupee ‎-0.42%‎ 94.6975" [ref=e633]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=avyo8m&ocid=hpmsn
                    - generic [ref=e634]:
                      - generic [ref=e636]: USD/INR
                      - generic [ref=e638]: US Dollar/Indian Rupee
                    - generic [ref=e643]:
                      - generic [ref=e644]: ‎-0.42%‎
                      - generic [ref=e645]: "94.6975"
                    - button "Add to watchlist" [ref=e648]:
                      - img [ref=e649]
                  - link "Gold Gold Rising fast ‎+2.87%‎ 4,360.50" [ref=e653]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwoc&noti=Price&ocid=hpmsn
                    - generic [ref=e654]:
                      - generic [ref=e655]:
                        - generic [ref=e656]: Gold
                        - img "Gold" [ref=e657]
                      - generic [ref=e659]: Rising fast
                    - generic [ref=e664]:
                      - generic [ref=e665]: ‎+2.87%‎
                      - generic [ref=e666]: 4,360.50
                    - button "Add to watchlist" [ref=e669]:
                      - img [ref=e670]
                  - link "24K Gold (10 Grams) - Indian Rupee 24K Gold (10 Grams) - Indian Rupee Rising fast ‎+1.56%‎ 149368" [ref=e674]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&noti=Price&ocid=hpmsn
                    - generic [ref=e675]:
                      - generic [ref=e676]:
                        - generic [ref=e677]: 24K Gold (10 Grams) - Indian Rupee
                        - img "24K Gold (10 Grams) - Indian Rupee" [ref=e678]
                      - generic [ref=e680]: Rising fast
                    - generic [ref=e685]:
                      - generic [ref=e686]: ‎+1.56%‎
                      - generic [ref=e687]: "149368"
                    - button "Add to watchlist" [ref=e690]:
                      - img [ref=e691]
                  - link "Silver Silver Rising fast ‎+4.11%‎ 70.77" [ref=e695]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwr7&noti=Price&ocid=hpmsn
                    - generic [ref=e696]:
                      - generic [ref=e697]:
                        - generic [ref=e698]: Silver
                        - img "Silver" [ref=e699]
                      - generic [ref=e701]: Rising fast
                    - generic [ref=e706]:
                      - generic [ref=e707]: ‎+4.11%‎
                      - generic [ref=e708]: "70.77"
                    - button "Add to watchlist" [ref=e711]:
                      - img [ref=e712]
                  - link "Citigroup Inc C ‎+1.27%‎ 139.83" [ref=e716]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a1p3ww&ocid=hpmsn
                    - generic [ref=e717]:
                      - generic [ref=e719]: Citigroup Inc
                      - generic [ref=e721]: C
                    - generic [ref=e726]:
                      - generic [ref=e727]: ‎+1.27%‎
                      - generic [ref=e728]: "139.83"
                    - button "Add to watchlist" [ref=e731]:
                      - img [ref=e732]
                - generic [ref=e736]:
                  - generic [ref=e737]:
                    - generic "Previous" [ref=e738]:
                      - button "Previous" [ref=e739]
                    - tablist [ref=e741]:
                      - tab "tab-0" [selected] [ref=e742]
                      - tab "tab-1" [ref=e744]
                      - tab "tab-2" [ref=e746]
                      - tab "tab-3" [ref=e748]
                      - tab "tab-4" [ref=e750]
                      - tab "tab-5"
                      - tab "tab-6"
                    - generic "Next" [ref=e752]:
                      - button "Next" [ref=e753]
                  - link "See watchlist suggestions" [ref=e755]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - 'article "GK: Which Indian city is called the litchi capital of the world?" [ref=e756] [cursor=pointer]':
              - generic [ref=e758]:
                - img [ref=e759]
                - generic [ref=e760]:
                  - generic [ref=e761]:
                    - generic [ref=e762]:
                      - generic [ref=e763]:
                        - img [ref=e764]
                        - generic [ref=e765]: News18
                      - generic [ref=e766]: ·
                      - generic [ref=e767]: 3w
                    - 'link "GK: Which Indian city is called the litchi capital of the world?, News18" [ref=e768]':
                      - /url: https://www.msn.com/en-in/travel/tripideas/gk-which-indian-city-is-called-the-litchi-capital-of-the-world/ss-AA23ywsO
                      - text: "GK: Which Indian city is called the litchi capital of the world?"
                  - 'generic "GK: Which Indian city is called the litchi capital of the world?" [ref=e771]':
                    - generic [ref=e773]:
                      - generic [ref=e774]:
                        - button "950 Like" [ref=e775]:
                          - generic [ref=e776]:
                            - img [ref=e777]
                            - generic [ref=e779]: "950"
                        - button "Dislike" [ref=e780]:
                          - img [ref=e782]
                      - link "View comments 17 Comment" [ref=e785]:
                        - /url: https://www.msn.com/en-in/travel/tripideas/gk-which-indian-city-is-called-the-litchi-capital-of-the-world/ss-AA23ywsO#comments
                        - button "View comments 17 Comment" [ref=e786]:
                          - img [ref=e787]
                        - generic [ref=e789]: "17"
                - generic [ref=e790]:
                  - button "Hide this story" [ref=e791]:
                    - img [ref=e792]
                    - text: Hide this story
                  - button "See more" [ref=e793]:
                    - img [ref=e794]
            - article "Rahul Gandhi slams US and Modi over death of three Indian sailors in Gulf of Oman strike" [ref=e795] [cursor=pointer]:
              - generic [ref=e797]:
                - generic [ref=e803]:
                  - generic [ref=e804]:
                    - generic [ref=e805]:
                      - generic [ref=e806]:
                        - img [ref=e807]
                        - generic [ref=e808]: The Times of India
                      - generic [ref=e809]: ·
                      - generic [ref=e810]: 18h
                    - link "Rahul Gandhi slams US and Modi over death of three Indian sailors in Gulf of Oman strike, The Times of India" [ref=e811]:
                      - /url: https://www.msn.com/en-in/news/india/rahul-gandhi-slams-us-and-modi-over-death-of-three-indian-sailors-in-gulf-of-oman-strike/vi-AA25Br0q
                      - text: Rahul Gandhi slams US and Modi over death of three Indian sailors in Gulf of Oman strike
                  - generic "Rahul Gandhi slams US and Modi over death of three Indian sailors in Gulf of Oman strike" [ref=e814]:
                    - generic [ref=e816]:
                      - generic [ref=e817]:
                        - button "24 Like" [ref=e818]:
                          - generic [ref=e819]:
                            - img [ref=e820]
                            - generic [ref=e822]: "24"
                        - button "Dislike" [ref=e823]:
                          - img [ref=e825]
                      - link "View comments 1 Comment" [ref=e828]:
                        - /url: https://www.msn.com/en-in/news/india/rahul-gandhi-slams-us-and-modi-over-death-of-three-indian-sailors-in-gulf-of-oman-strike/vi-AA25Br0q#comments
                        - button "View comments 1 Comment" [ref=e829]:
                          - img [ref=e830]
                        - generic [ref=e832]: "1"
                - generic [ref=e833]:
                  - button "Hide this story" [ref=e834]:
                    - img [ref=e835]
                    - text: Hide this story
                  - button "See more" [ref=e836]:
                    - img [ref=e837]
            - article [ref=e838] [cursor=pointer]
            - article "Bermuda Triangle's mystery solved? Scientists discover hidden rock layer underground | What it means" [ref=e845] [cursor=pointer]:
              - generic [ref=e847]:
                - img [ref=e848]
                - generic [ref=e849]:
                  - generic [ref=e850]:
                    - generic [ref=e852]:
                      - img [ref=e853]
                      - generic [ref=e854]: The Daily Jagran
                    - link "Bermuda Triangle's mystery solved? Scientists discover hidden rock layer underground | What it means, The Daily Jagran" [ref=e855]:
                      - /url: https://www.msn.com/en-in/news/techandscience/bermuda-triangle-s-mystery-solved-scientists-discover-hidden-rock-layer-underground-what-it-means/ar-AA23g6NP
                      - text: Bermuda Triangle's mystery solved? Scientists discover hidden rock layer underground | What it means
                  - generic "Bermuda Triangle's mystery solved? Scientists discover hidden rock layer underground | What it means" [ref=e858]:
                    - generic [ref=e860]:
                      - generic [ref=e861]:
                        - button "755 Like" [ref=e862]:
                          - generic [ref=e863]:
                            - img [ref=e864]
                            - generic [ref=e866]: "755"
                        - button "Dislike" [ref=e867]:
                          - img [ref=e869]
                      - link "View comments 2 Comment" [ref=e872]:
                        - /url: https://www.msn.com/en-in/news/techandscience/bermuda-triangle-s-mystery-solved-scientists-discover-hidden-rock-layer-underground-what-it-means/ar-AA23g6NP#comments
                        - button "View comments 2 Comment" [ref=e873]:
                          - img [ref=e874]
                        - generic [ref=e876]: "2"
                - generic [ref=e877]:
                  - button "Hide this story" [ref=e878]:
                    - img [ref=e879]
                    - text: Hide this story
                  - button "See more" [ref=e880]:
                    - img [ref=e881]
            - article [ref=e882] [cursor=pointer]
            - article [ref=e889] [cursor=pointer]:
              - generic [ref=e895]:
                - generic [ref=e897]:
                  - link "Phoenix" [ref=e899]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
                    - heading "Phoenix" [level=2] [ref=e900]
                  - button "My location" [ref=e901]
                  - button "More options" [ref=e903]
                - generic [ref=e907]:
                  - generic [ref=e908]:
                    - generic [ref=e910]:
                      - link "Partly cloudy" [ref=e911]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
                        - img "Partly cloudy" [ref=e912]
                      - link "34°C" [ref=e913]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona
                        - generic [ref=e914]: ‎34‎
                        - generic [ref=e916]: ‎°C‎
                    - generic [ref=e918]:
                      - link "Satisfactory" [ref=e920]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona&fcsttab=airquality
                        - text: Satisfactory
                      - link "See full forecast" [ref=e922]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona&fcsttab=airquality
                        - img "arrow" [ref=e923]
                  - generic [ref=e928]:
                    - link "Larger map" [ref=e929]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Phoenix,Arizona
                      - generic [ref=e930]:
                        - generic:
                          - generic:
                            - img
                            - img
                            - img
                            - img
                      - img
                    - link "Check global air quality" [ref=e931]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Phoenix,Arizona
                      - img [ref=e933]
                      - generic "Check global air quality" [ref=e934]
                      - img [ref=e936]
                - button "See full forecast" [ref=e939]
          - article [ref=e941]
          - generic [ref=e943]:
            - article [ref=e944] [cursor=pointer]:
              - generic [ref=e949]:
                - generic [ref=e950]:
                  - generic [ref=e951]:
                    - link "Recommended videos" [ref=e952]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e953]
                    - link "Recommended videos" [ref=e956]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e957]:
                    - generic:
                      - link "See more" [ref=e958]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e959]:
                        - button "More options" [ref=e960]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e962]:
                  - generic [ref=e964]:
                    - generic [ref=e966]:
                      - generic:
                        - article [ref=e969]:
                          - generic [ref=e970]:
                            - img "The Future Of My Car Collection Starts Here" [ref=e972]
                            - generic [ref=e974]: 18:36
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e975]:
                              - generic [ref=e976]:
                                - img "Shmee150" [ref=e977]
                                - generic [ref=e978]:
                                  - generic:
                                    - generic "Shmee150" [ref=e979]
                                    - generic [ref=e980]: ·
                                    - generic [ref=e981]: 1d
                              - link "The future of my car collection starts here" [ref=e982]:
                                - /url: https://www.msn.com/en-in/autos/news/the-future-of-my-car-collection-starts-here/vi-AA25AfgU?ocid=hpmsn
                                - heading "The future of my car collection starts here" [level=2] [ref=e983]:
                                  - generic: The future of my car collection starts here
                            - button "See more" [ref=e987]
                        - article "Watch how these grown men run away from 'evil' cartoon characters" [ref=e990]:
                          - generic [ref=e991]:
                            - img "Watch How These Grown Men Run Away From \"Evil\" Cartoon Characters" [ref=e993]
                            - generic [ref=e995]: 29:36
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e996]:
                              - generic [ref=e997]:
                                - img "Topper Guild" [ref=e998]
                                - generic [ref=e999]:
                                  - generic:
                                    - generic "Topper Guild" [ref=e1000]
                                    - generic [ref=e1001]: ·
                                    - generic [ref=e1002]: 2d
                              - link "Watch how these grown men run away from 'evil' cartoon characters" [ref=e1003]:
                                - /url: https://www.msn.com/en-in/lifestyle/relationships/watch-how-these-grown-men-run-away-from-evil-cartoon-characters/vi-AA23IZ8Y?ocid=hpmsn
                                - heading "Watch how these grown men run away from 'evil' cartoon characters" [level=2] [ref=e1004]:
                                  - generic: Watch how these grown men run away from 'evil' cartoon characters
                            - button "See more" [ref=e1008]
                        - article [ref=e1011]:
                          - generic [ref=e1012]:
                            - img "Quick Homemade Peach Cobbler Dessert Everyone Will Love" [ref=e1014]
                            - generic [ref=e1016]: 10:10
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1017]:
                              - generic [ref=e1018]:
                                - img "Mr Make It Happen" [ref=e1019]
                                - generic [ref=e1020]:
                                  - generic:
                                    - generic "Mr Make It Happen" [ref=e1021]
                                    - generic [ref=e1022]: ·
                                    - generic [ref=e1023]: 3h
                              - link "Quick homemade peach cobbler dessert everyone will love" [ref=e1024]:
                                - /url: https://www.msn.com/en-in/news/other/quick-homemade-peach-cobbler-dessert-everyone-will-love/vi-AA1WXk2s?ocid=hpmsn
                                - heading "Quick homemade peach cobbler dessert everyone will love" [level=2] [ref=e1025]:
                                  - generic: Quick homemade peach cobbler dessert everyone will love
                            - button "See more" [ref=e1029]
                        - article [ref=e1032]:
                          - generic [ref=e1033]:
                            - img "I GOT MY DREAM NYC APARTMENT!" [ref=e1035]
                            - generic [ref=e1037]: 12:43
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1038]:
                              - generic [ref=e1039]:
                                - img "Brett.Conti" [ref=e1040]
                                - generic [ref=e1041]:
                                  - generic:
                                    - generic "Brett.Conti" [ref=e1042]
                                    - generic [ref=e1043]: ·
                                    - generic [ref=e1044]: 2d
                              - link "I got my dream NYC apartment!" [ref=e1045]:
                                - /url: https://www.msn.com/en-in/news/other/i-got-my-dream-nyc-apartment/vi-AA25tT0O?ocid=hpmsn
                                - heading "I got my dream NYC apartment!" [level=2] [ref=e1046]:
                                  - generic: I got my dream NYC apartment!
                            - button "See more" [ref=e1050]
                        - article "This tiny pod cabin combines luxury, nature, and minimalist design perfectly" [ref=e1053]:
                          - generic [ref=e1054]:
                            - img "This Tiny Pod Cabin Combines Luxury, Nature, and Minimalist Design Perfectly" [ref=e1056]
                            - generic [ref=e1058]: 07:24
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1059]:
                              - generic [ref=e1060]:
                                - img "NEVER TOO SMALL" [ref=e1061]
                                - generic "NEVER TOO SMALL" [ref=e1063]
                              - link "This tiny pod cabin combines luxury, nature, and minimalist design perfectly" [ref=e1064]:
                                - /url: https://www.msn.com/en-in/travel/news/this-tiny-pod-cabin-combines-luxury-nature-and-minimalist-design-perfectly/vi-AA22Z5T4?ocid=hpmsn
                                - heading "This tiny pod cabin combines luxury, nature, and minimalist design perfectly" [level=2] [ref=e1065]:
                                  - generic: This tiny pod cabin combines luxury, nature, and minimalist design perfectly
                            - button "See more" [ref=e1069]
                        - article [ref=e1072]:
                          - generic [ref=e1073]:
                            - img "Working from home & smart home studio tour" [ref=e1075]
                            - generic [ref=e1077]: 11:36
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1078]:
                              - generic [ref=e1079]:
                                - img "Undecided with Matt Ferrell" [ref=e1080]
                                - generic "Undecided with Matt Ferrell" [ref=e1082]
                              - link "Working from home & smart home studio tour" [ref=e1083]:
                                - /url: https://www.msn.com/en-in/money/news/working-from-home-smart-home-studio-tour/vi-AA20XFvs?ocid=hpmsn
                                - heading "Working from home & smart home studio tour" [level=2] [ref=e1084]:
                                  - generic: Working from home & smart home studio tour
                            - button "See more" [ref=e1088]
                        - article [ref=e1091]:
                          - generic [ref=e1092]:
                            - img "High Protein Honey Soy Chicken Meal Prep" [ref=e1094]
                            - generic [ref=e1096]: 06:46
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1097]:
                              - generic [ref=e1098]:
                                - img "Chef Jack Ovens" [ref=e1099]
                                - generic [ref=e1100]:
                                  - generic:
                                    - generic "Chef Jack Ovens" [ref=e1101]
                                    - generic [ref=e1102]: ·
                                    - generic [ref=e1103]: 2d
                              - link "High protein honey soy chicken meal prep" [ref=e1104]:
                                - /url: https://www.msn.com/en-in/foodanddrink/other/high-protein-honey-soy-chicken-meal-prep/vi-AA24EnqZ?ocid=hpmsn
                                - heading "High protein honey soy chicken meal prep" [level=2] [ref=e1105]:
                                  - generic: High protein honey soy chicken meal prep
                            - button "See more" [ref=e1109]
                        - article [ref=e1112]:
                          - generic [ref=e1113]:
                            - img "Kim Petras - Detour ALBUM REVIEW" [ref=e1115]
                            - generic [ref=e1117]: 09:17
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1118]:
                              - generic [ref=e1119]:
                                - img "The Needle Drop" [ref=e1120]
                                - generic [ref=e1121]:
                                  - generic:
                                    - generic "The Needle Drop" [ref=e1122]
                                    - generic [ref=e1123]: ·
                                    - generic [ref=e1124]: 2d
                              - link "Kim Petras - Detour album review" [ref=e1125]:
                                - /url: https://www.msn.com/en-in/autos/news/kim-petras-detour-album-review/vi-AA25vT2q?ocid=hpmsn
                                - heading "Kim Petras - Detour album review" [level=2] [ref=e1126]:
                                  - generic: Kim Petras - Detour album review
                            - button "See more" [ref=e1130]
                        - article [ref=e1133]:
                          - generic [ref=e1134]:
                            - img "This is what happened when I turned Walmart steaks into luxury" [ref=e1136]
                            - generic [ref=e1138]: 12:01
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1139]:
                              - generic [ref=e1140]:
                                - img "Guga Foods" [ref=e1141]
                                - generic [ref=e1142]:
                                  - generic:
                                    - generic "Guga Foods" [ref=e1143]
                                    - generic [ref=e1144]: ·
                                    - generic [ref=e1145]: 2d
                              - link "This is what happened when I turned Walmart steaks into luxury" [ref=e1146]:
                                - /url: https://www.msn.com/en-in/video/entertainment/this-is-what-happened-when-i-turned-walmart-steaks-into-luxury/vi-AA1XUZMr?ocid=hpmsn
                                - heading "This is what happened when I turned Walmart steaks into luxury" [level=2] [ref=e1147]:
                                  - generic: This is what happened when I turned Walmart steaks into luxury
                            - button "See more" [ref=e1151]
                        - article [ref=e1154]:
                          - generic [ref=e1155]:
                            - img "Classic Smash Burgers Made Easy at Home" [ref=e1157]
                            - generic [ref=e1159]: 10:45
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1160]:
                              - generic [ref=e1161]:
                                - img "acooknamedMatt" [ref=e1162]
                                - generic [ref=e1163]:
                                  - generic:
                                    - generic "acooknamedMatt" [ref=e1164]
                                    - generic [ref=e1165]: ·
                                    - generic [ref=e1166]: 2h
                              - link "Classic smash burgers made easy at home" [ref=e1167]:
                                - /url: https://www.msn.com/en-in/foodanddrink/other/classic-smash-burgers-made-easy-at-home/vi-AA1VFhx2?ocid=hpmsn
                                - heading "Classic smash burgers made easy at home" [level=2] [ref=e1168]:
                                  - generic: Classic smash burgers made easy at home
                            - button "See more" [ref=e1172]
                        - article "160,000 people were sent to this island to die - then the experiments began" [ref=e1175]:
                          - generic [ref=e1176]:
                            - img "160,000 People Were Sent To This Island To Die - Then The Experiments Began" [ref=e1178]
                            - generic [ref=e1180]: 14:49
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1181]:
                              - generic [ref=e1182]:
                                - img "Yes Theory" [ref=e1183]
                                - generic [ref=e1184]:
                                  - generic:
                                    - generic "Yes Theory" [ref=e1185]
                                    - generic [ref=e1186]: ·
                                    - generic [ref=e1187]: 2w
                              - link "160,000 people were sent to this island to die - then the experiments began" [ref=e1188]:
                                - /url: https://www.msn.com/en-in/news/world/160-000-people-were-sent-to-this-island-to-die-then-the-experiments-began/vi-AA24qmx9?ocid=hpmsn
                                - heading "160,000 people were sent to this island to die - then the experiments began" [level=2] [ref=e1189]:
                                  - generic: 160,000 people were sent to this island to die - then the experiments began
                            - button "See more" [ref=e1193]
                        - article "What happens when you upgrade every ingredient in a grilled cheese" [ref=e1196]:
                          - generic [ref=e1197]:
                            - img "What Happens When You Upgrade Every Ingredient in a Grilled Cheese" [ref=e1199]
                            - generic [ref=e1201]: 12:16
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1202]:
                              - generic [ref=e1203]:
                                - img "Guga Foods" [ref=e1204]
                                - generic [ref=e1205]:
                                  - generic:
                                    - generic "Guga Foods" [ref=e1206]
                                    - generic [ref=e1207]: ·
                                    - generic [ref=e1208]: 2d
                              - link "What happens when you upgrade every ingredient in a grilled cheese" [ref=e1209]:
                                - /url: https://www.msn.com/en-in/money/markets/what-happens-when-you-upgrade-every-ingredient-in-a-grilled-cheese/vi-AA1W9Bze?ocid=hpmsn
                                - heading "What happens when you upgrade every ingredient in a grilled cheese" [level=2] [ref=e1210]:
                                  - generic: What happens when you upgrade every ingredient in a grilled cheese
                            - button "See more" [ref=e1214]
                        - article [ref=e1217]:
                          - generic [ref=e1218]:
                            - img "Best of Ben Shapiro’s Woke TikTok Reactions" [ref=e1220]
                            - generic [ref=e1222]: 14:27
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1223]:
                              - generic [ref=e1224]:
                                - img "Ben Shapiro" [ref=e1225]
                                - generic [ref=e1226]:
                                  - generic:
                                    - generic "Ben Shapiro" [ref=e1227]
                                    - generic [ref=e1228]: ·
                                    - generic [ref=e1229]: 2d
                              - link "Best of Ben Shapiro’s woke TikTok reactions" [ref=e1230]:
                                - /url: https://www.msn.com/en-in/entertainment/bollywood/best-of-ben-shapiro-s-woke-tiktok-reactions/vi-AA24mAT7?ocid=hpmsn
                                - heading "Best of Ben Shapiro’s woke TikTok reactions" [level=2] [ref=e1231]:
                                  - generic: Best of Ben Shapiro’s woke TikTok reactions
                            - button "See more" [ref=e1235]
                        - article "What makes Indonesian food so different from expectations?" [ref=e1238]:
                          - generic [ref=e1239]:
                            - img "What Makes Indonesian Food So Different from Expectations?" [ref=e1241]
                            - generic [ref=e1243]: 13:50
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1244]:
                              - generic [ref=e1245]:
                                - img "Laurence Benson" [ref=e1246]
                                - generic [ref=e1247]:
                                  - generic:
                                    - generic "Laurence Benson" [ref=e1248]
                                    - generic [ref=e1249]: ·
                                    - generic [ref=e1250]: 6h
                              - link "What makes Indonesian food so different from expectations?" [ref=e1251]:
                                - /url: https://www.msn.com/en-in/foodanddrink/other/what-makes-indonesian-food-so-different-from-expectations/vi-AA25EbpL?ocid=hpmsn
                                - heading "What makes Indonesian food so different from expectations?" [level=2] [ref=e1252]:
                                  - generic: What makes Indonesian food so different from expectations?
                            - button "See more" [ref=e1256]
                        - article "This homemade version takes the McChicken to another level" [ref=e1259]:
                          - generic [ref=e1260]:
                            - img "This Homemade Version Takes the McChicken to Another Level" [ref=e1262]
                            - generic [ref=e1264]: 16:20
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1265]:
                              - generic [ref=e1266]:
                                - img "Barry Lewis" [ref=e1267]
                                - generic [ref=e1268]:
                                  - generic:
                                    - generic "Barry Lewis" [ref=e1269]
                                    - generic [ref=e1270]: ·
                                    - generic [ref=e1271]: 2d
                              - link "This homemade version takes the McChicken to another level" [ref=e1272]:
                                - /url: https://www.msn.com/en-in/foodanddrink/other/this-homemade-version-takes-the-mcchicken-to-another-level/vi-AA1YXXUe?ocid=hpmsn
                                - heading "This homemade version takes the McChicken to another level" [level=2] [ref=e1273]:
                                  - generic: This homemade version takes the McChicken to another level
                            - button "See more" [ref=e1277]
                        - article [ref=e1280]:
                          - generic [ref=e1281]:
                            - img "Quick Morning Yoga for Tight Hips & Glutes Strength" [ref=e1283]
                            - generic [ref=e1285]: 13:15
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1286]:
                              - generic [ref=e1287]:
                                - img "Yoga with Kassandra" [ref=e1288]
                                - generic [ref=e1289]:
                                  - generic:
                                    - generic "Yoga with Kassandra" [ref=e1290]
                                    - generic [ref=e1291]: ·
                                    - generic [ref=e1292]: 1d
                              - link "Quick morning yoga for tight hips & glutes strength" [ref=e1293]:
                                - /url: https://www.msn.com/en-in/health/wellness/quick-morning-yoga-for-tight-hips-glutes-strength/vi-AA25A2KR?ocid=hpmsn
                                - heading "Quick morning yoga for tight hips & glutes strength" [level=2] [ref=e1294]:
                                  - generic: Quick morning yoga for tight hips & glutes strength
                            - button "See more" [ref=e1298]
                        - article [ref=e1301]:
                          - generic [ref=e1302]:
                            - img "Ben Shapiro Reacts to Andrew Tate's Viral Interview" [ref=e1304]
                            - generic [ref=e1306]: 08:46
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1307]:
                              - generic [ref=e1308]:
                                - img "Ben Shapiro" [ref=e1309]
                                - generic [ref=e1310]:
                                  - generic:
                                    - generic "Ben Shapiro" [ref=e1311]
                                    - generic [ref=e1312]: ·
                                    - generic [ref=e1313]: 2d
                              - link "Ben Shapiro reacts to Andrew Tate's viral interview" [ref=e1314]:
                                - /url: https://www.msn.com/en-in/video/news/ben-shapiro-reacts-to-andrew-tate-s-viral-interview/vi-AA24mDiV?ocid=hpmsn
                                - heading "Ben Shapiro reacts to Andrew Tate's viral interview" [level=2] [ref=e1315]:
                                  - generic: Ben Shapiro reacts to Andrew Tate's viral interview
                            - button "See more" [ref=e1319]
                        - article [ref=e1322]:
                          - generic [ref=e1323]:
                            - img "2 WORST Chess Bots Battle Each Other" [ref=e1325]
                            - generic [ref=e1327]: 24:28
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1328]:
                              - generic [ref=e1329]:
                                - img "GothamChess" [ref=e1330]
                                - generic [ref=e1331]:
                                  - generic:
                                    - generic "GothamChess" [ref=e1332]
                                    - generic [ref=e1333]: ·
                                    - generic [ref=e1334]: 1d
                              - link "2 worst chess bots battle each other" [ref=e1335]:
                                - /url: https://www.msn.com/en-in/money/technology/2-worst-chess-bots-battle-each-other/vi-AA25zWd0?ocid=hpmsn
                                - heading "2 worst chess bots battle each other" [level=2] [ref=e1336]:
                                  - generic: 2 worst chess bots battle each other
                            - button "See more" [ref=e1340]
                        - article [ref=e1343]:
                          - generic [ref=e1344]:
                            - img "How to Make Restaurant Style Curly Fries at Home" [ref=e1346]
                            - generic [ref=e1348]: 08:00
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1349]:
                              - generic [ref=e1350]:
                                - img "acooknamedMatt" [ref=e1351]
                                - generic [ref=e1352]:
                                  - generic:
                                    - generic "acooknamedMatt" [ref=e1353]
                                    - generic [ref=e1354]: ·
                                    - generic [ref=e1355]: 2h
                              - link "How to make restaurant style curly fries at home" [ref=e1356]:
                                - /url: https://www.msn.com/en-in/lifestyle/style/how-to-make-restaurant-style-curly-fries-at-home/vi-AA1X3JRP?ocid=hpmsn
                                - heading "How to make restaurant style curly fries at home" [level=2] [ref=e1357]:
                                  - generic: How to make restaurant style curly fries at home
                            - button "See more" [ref=e1361]
                        - article [ref=e1364]:
                          - generic [ref=e1365]:
                            - img "My SLS Black Series Finally Has Full Power Again" [ref=e1367]
                            - generic [ref=e1369]: 19:13
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1370]:
                              - generic [ref=e1371]:
                                - img "Shmee150" [ref=e1372]
                                - generic [ref=e1373]:
                                  - generic:
                                    - generic "Shmee150" [ref=e1374]
                                    - generic [ref=e1375]: ·
                                    - generic [ref=e1376]: 2d
                              - link "My SLS Black Series finally has full power again" [ref=e1377]:
                                - /url: https://www.msn.com/en-in/news/india/my-sls-black-series-finally-has-full-power-again/vi-AA25wt65?ocid=hpmsn
                                - heading "My SLS Black Series finally has full power again" [level=2] [ref=e1378]:
                                  - generic: My SLS Black Series finally has full power again
                            - button "See more" [ref=e1382]
                        - link "See more" [ref=e1384]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1385]
                          - text: See more
                    - button "next" [ref=e1389]:
                      - img [ref=e1392]
            - 'article "Salman Khan kala hiran controversy: Senior actor Govind Namdev says, \"I would never do a film against Salman\"" [ref=e1394] [cursor=pointer]':
              - generic [ref=e1396]:
                - img [ref=e1397]
                - generic [ref=e1398]:
                  - generic [ref=e1399]:
                    - generic [ref=e1400]:
                      - generic [ref=e1401]:
                        - img [ref=e1402]
                        - generic [ref=e1403]: Moneycontrol
                      - generic [ref=e1404]: ·
                      - generic [ref=e1405]: 6h
                    - 'link "Salman Khan kala hiran controversy: Senior actor Govind Namdev says, \"I would never do a film against Salman\", Moneycontrol" [ref=e1406]':
                      - /url: https://www.msn.com/en-in/entertainment/news/salman-khan-kala-hiran-controversy-senior-actor-govind-namdev-says-i-would-never-do-a-film-against-salman/ar-AA25EiqP
                      - text: "Salman Khan kala hiran controversy: Senior actor Govind Namdev says, \"I would never do a film against Salman\""
                  - 'generic "Salman Khan kala hiran controversy: Senior actor Govind Namdev says, \"I would never do a film against Salman\"" [ref=e1409]':
                    - generic [ref=e1411]:
                      - generic [ref=e1412]:
                        - button "26 Like" [ref=e1413]:
                          - generic [ref=e1414]:
                            - img [ref=e1415]
                            - generic [ref=e1417]: "26"
                        - button "Dislike" [ref=e1418]:
                          - img [ref=e1420]
                      - link "Start the conversation" [ref=e1423]:
                        - /url: https://www.msn.com/en-in/entertainment/news/salman-khan-kala-hiran-controversy-senior-actor-govind-namdev-says-i-would-never-do-a-film-against-salman/ar-AA25EiqP#comments
                        - button "Start the conversation" [ref=e1424]:
                          - img [ref=e1425]
                - generic [ref=e1427]:
                  - button "Hide this story" [ref=e1428]:
                    - img [ref=e1429]
                    - text: Hide this story
                  - button "See more" [ref=e1430]:
                    - img [ref=e1431]
            - 'article "Buchi Babu Sana admits Peddi trailer was ''too much'', backfired: ''We can''t afford such things with big movies''" [ref=e1432] [cursor=pointer]':
              - generic [ref=e1434]:
                - img [ref=e1435]
                - generic [ref=e1436]:
                  - generic [ref=e1437]:
                    - generic [ref=e1438]:
                      - generic [ref=e1439]:
                        - img [ref=e1440]
                        - generic [ref=e1441]: Hindustan Times
                      - generic [ref=e1442]: ·
                      - generic [ref=e1443]: 2d
                    - 'link "Buchi Babu Sana admits Peddi trailer was ''too much'', backfired: ''We can''t afford such things with big movies'', Hindustan Times" [ref=e1444]':
                      - /url: https://www.msn.com/en-in/entertainment/southcinema/buchi-babu-sana-admits-peddi-trailer-was-too-much-backfired-we-can-t-afford-such-things-with-big-movies/ar-AA25xPAR
                      - text: "Buchi Babu Sana admits Peddi trailer was 'too much', backfired: 'We can't afford such things with big movies'"
                  - 'generic "Buchi Babu Sana admits Peddi trailer was ''too much'', backfired: ''We can''t afford such things with big movies''" [ref=e1447]':
                    - generic [ref=e1449]:
                      - generic [ref=e1450]:
                        - button "28 Like" [ref=e1451]:
                          - generic [ref=e1452]:
                            - img [ref=e1453]
                            - generic [ref=e1455]: "28"
                        - button "Dislike" [ref=e1456]:
                          - img [ref=e1458]
                      - link "View comments 2 Comment" [ref=e1461]:
                        - /url: https://www.msn.com/en-in/entertainment/southcinema/buchi-babu-sana-admits-peddi-trailer-was-too-much-backfired-we-can-t-afford-such-things-with-big-movies/ar-AA25xPAR#comments
                        - button "View comments 2 Comment" [ref=e1462]:
                          - img [ref=e1463]
                        - generic [ref=e1465]: "2"
                - generic [ref=e1466]:
                  - button "Hide this story" [ref=e1467]:
                    - img [ref=e1468]
                    - text: Hide this story
                  - button "See more" [ref=e1469]:
                    - img [ref=e1470]
            - article "Software engineer, 27, dies during office party at Telangana farmhouse" [ref=e1471] [cursor=pointer]:
              - generic [ref=e1473]:
                - img [ref=e1474]
                - generic [ref=e1475]:
                  - generic [ref=e1476]:
                    - generic [ref=e1477]:
                      - generic [ref=e1478]:
                        - img [ref=e1479]
                        - generic [ref=e1480]: NDTV 24x7
                      - generic [ref=e1481]: ·
                      - generic [ref=e1482]: 5h
                    - link "Software engineer, 27, dies during office party at Telangana farmhouse, NDTV 24x7" [ref=e1483]:
                      - /url: https://www.msn.com/en-in/news/india/software-engineer-27-dies-during-office-party-at-telangana-farmhouse/ar-AA25EiI0
                      - text: Software engineer, 27, dies during office party at Telangana farmhouse
                  - generic "Software engineer, 27, dies during office party at Telangana farmhouse" [ref=e1486]:
                    - generic [ref=e1488]:
                      - generic [ref=e1489]:
                        - button "23 Like" [ref=e1490]:
                          - generic [ref=e1491]:
                            - img [ref=e1492]
                            - generic [ref=e1494]: "23"
                        - button "Dislike" [ref=e1495]:
                          - img [ref=e1497]
                      - link "View comments 1 Comment" [ref=e1500]:
                        - /url: https://www.msn.com/en-in/news/india/software-engineer-27-dies-during-office-party-at-telangana-farmhouse/ar-AA25EiI0#comments
                        - button "View comments 1 Comment" [ref=e1501]:
                          - img [ref=e1502]
                        - generic [ref=e1504]: "1"
                - generic [ref=e1505]:
                  - button "Hide this story" [ref=e1506]:
                    - img [ref=e1507]
                    - text: Hide this story
                  - button "See more" [ref=e1508]:
                    - img [ref=e1509]
            - 'article "World’s first trillionaire Elon Musk explains why AI will make money useless: ''Robots will run …''" [ref=e1510] [cursor=pointer]':
              - generic [ref=e1512]:
                - img [ref=e1513]
                - generic [ref=e1514]:
                  - generic [ref=e1515]:
                    - generic [ref=e1516]:
                      - generic [ref=e1517]:
                        - img [ref=e1518]
                        - generic [ref=e1519]: The Times of India
                      - generic [ref=e1520]: ·
                      - generic [ref=e1521]: 6h
                    - 'link "World’s first trillionaire Elon Musk explains why AI will make money useless: ''Robots will run …'', The Times of India" [ref=e1522]':
                      - /url: https://www.msn.com/en-in/money/news/world-s-first-trillionaire-elon-musk-explains-why-ai-will-make-money-useless-robots-will-run/ar-AA25EkQy
                      - text: "World’s first trillionaire Elon Musk explains why AI will make money useless: 'Robots will run …'"
                  - 'generic "World’s first trillionaire Elon Musk explains why AI will make money useless: ''Robots will run …''" [ref=e1525]':
                    - generic [ref=e1527]:
                      - generic [ref=e1528]:
                        - button "42 Like" [ref=e1529]:
                          - generic [ref=e1530]:
                            - img [ref=e1531]
                            - generic [ref=e1533]: "42"
                        - button "Dislike" [ref=e1534]:
                          - img [ref=e1536]
                      - link "View comments 1 Comment" [ref=e1539]:
                        - /url: https://www.msn.com/en-in/money/news/world-s-first-trillionaire-elon-musk-explains-why-ai-will-make-money-useless-robots-will-run/ar-AA25EkQy#comments
                        - button "View comments 1 Comment" [ref=e1540]:
                          - img [ref=e1541]
                        - generic [ref=e1543]: "1"
                - generic [ref=e1544]:
                  - button "Hide this story" [ref=e1545]:
                    - img [ref=e1546]
                    - text: Hide this story
                  - button "See more" [ref=e1547]:
                    - img [ref=e1548]
            - article [ref=e1549] [cursor=pointer]
            - 'article "''It''s not your resume'': Engineer reveals how she went from Rs 10 lakh to Rs 80 lakh salary in just one year" [ref=e1556] [cursor=pointer]':
              - generic [ref=e1558]:
                - img [ref=e1559]
                - generic [ref=e1560]:
                  - generic [ref=e1561]:
                    - generic [ref=e1562]:
                      - generic [ref=e1563]:
                        - img [ref=e1564]
                        - generic [ref=e1565]: Moneycontrol
                      - generic [ref=e1566]: ·
                      - generic [ref=e1567]: 4h
                    - 'link "''It''s not your resume'': Engineer reveals how she went from Rs 10 lakh to Rs 80 lakh salary in just one year, Moneycontrol" [ref=e1568]':
                      - /url: https://www.msn.com/en-in/money/news/it-s-not-your-resume-engineer-reveals-how-she-went-from-rs-10-lakh-to-rs-80-lakh-salary-in-just-one-year/ar-AA25EvNn
                      - text: "'It's not your resume': Engineer reveals how she went from Rs 10 lakh to Rs 80 lakh salary in just one year"
                  - 'generic "''It''s not your resume'': Engineer reveals how she went from Rs 10 lakh to Rs 80 lakh salary in just one year" [ref=e1571]':
                    - generic [ref=e1573]:
                      - generic [ref=e1574]:
                        - button "59 Like" [ref=e1575]:
                          - generic [ref=e1576]:
                            - img [ref=e1577]
                            - generic [ref=e1579]: "59"
                        - button "Dislike" [ref=e1580]:
                          - img [ref=e1582]
                      - link "Start the conversation" [ref=e1585]:
                        - /url: https://www.msn.com/en-in/money/news/it-s-not-your-resume-engineer-reveals-how-she-went-from-rs-10-lakh-to-rs-80-lakh-salary-in-just-one-year/ar-AA25EvNn#comments
                        - button "Start the conversation" [ref=e1586]:
                          - img [ref=e1587]
                - generic [ref=e1589]:
                  - button "Hide this story" [ref=e1590]:
                    - img [ref=e1591]
                    - text: Hide this story
                  - button "See more" [ref=e1592]:
                    - img [ref=e1593]
          - generic [ref=e1594]:
            - article [ref=e1595] [cursor=pointer]
            - 'article "In video: 21-year-old dies after fatal jump at Brazil’s Skeleton Bridge; what travellers should know before chasing adventure sports" [ref=e1602] [cursor=pointer]':
              - generic [ref=e1604]:
                - img [ref=e1605]
                - generic [ref=e1606]:
                  - generic [ref=e1607]:
                    - generic [ref=e1608]:
                      - generic [ref=e1609]:
                        - img [ref=e1610]
                        - generic [ref=e1611]: The Times of India
                      - generic [ref=e1612]: ·
                      - generic [ref=e1613]: 2h
                    - 'link "In video: 21-year-old dies after fatal jump at Brazil’s Skeleton Bridge; what travellers should know before chasing adventure sports, The Times of India" [ref=e1614]':
                      - /url: https://www.msn.com/en-in/news/india/in-video-21-year-old-dies-after-fatal-jump-at-brazil-s-skeleton-bridge-what-travellers-should-know-before-chasing-adventure-sports/ar-AA25BFsq
                      - text: "In video: 21-year-old dies after fatal jump at Brazil’s Skeleton Bridge; what travellers should know before chasing adventure sports"
                  - 'generic "In video: 21-year-old dies after fatal jump at Brazil’s Skeleton Bridge; what travellers should know before chasing adventure sports" [ref=e1617]':
                    - generic [ref=e1619]:
                      - generic [ref=e1620]:
                        - button "20 Like" [ref=e1621]:
                          - generic [ref=e1622]:
                            - img [ref=e1623]
                            - generic [ref=e1625]: "20"
                        - button "Dislike" [ref=e1626]:
                          - img [ref=e1628]
                      - link "Start the conversation" [ref=e1631]:
                        - /url: https://www.msn.com/en-in/news/india/in-video-21-year-old-dies-after-fatal-jump-at-brazil-s-skeleton-bridge-what-travellers-should-know-before-chasing-adventure-sports/ar-AA25BFsq#comments
                        - button "Start the conversation" [ref=e1632]:
                          - img [ref=e1633]
                - generic [ref=e1635]:
                  - button "Hide this story" [ref=e1636]:
                    - img [ref=e1637]
                    - text: Hide this story
                  - button "See more" [ref=e1638]:
                    - img [ref=e1639]
    - contentinfo [ref=e1642]:
      - generic "Feedback" [ref=e1644] [cursor=pointer]:
        - button "Feedback" [ref=e1645]:
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