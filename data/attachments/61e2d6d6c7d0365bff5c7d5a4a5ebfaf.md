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
        - 'link "Des Moines: Clear, 8 °C" [ref=e19] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
          - generic "Des Moines, Iowa, United States Click here to see more information" [ref=e20]: Des Moines
          - img "Clear" [ref=e22]
          - generic [ref=e23]:
            - generic [ref=e24]: ‎8‎
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
                - tab "Sponsored" [ref=e259] [cursor=pointer]
                - tab "News story" [ref=e261] [cursor=pointer]
                - tab "News story" [ref=e263] [cursor=pointer]
                - tab "News story" [ref=e265] [cursor=pointer]
                - tab "Sponsored" [ref=e267] [cursor=pointer]
                - tab "News story" [ref=e269] [cursor=pointer]
                - tab "News story" [ref=e271] [cursor=pointer]
              - button [ref=e275]
              - button [ref=e278]
              - article "CGAU is the stock you need - Experts weigh in on CGAU - Here's why you should buy CGAU" [ref=e279] [cursor=pointer]:
                - generic [ref=e281]:
                  - img [ref=e282]
                  - generic [ref=e283]:
                    - generic [ref=e284]:
                      - generic [ref=e287]: zacks.com
                      - link "CGAU is the stock you need - Experts weigh in on CGAU - Here's why you should buy CGAU, zacks.com" [ref=e288]:
                        - /url: https://www.bing.com/api/v1/mediation/tracking?d=1by4x9sjCSn0xEQl9OvCO0CYDMPqFhUzezMDReLC8vqtdP_ptVkjcBTj6l49fbdTxsnkRwITYbrDf4f2wWJ3zroL_xLKvENnD023K7nPaqHx90QpHR4M9UfHvFEOOCDRrRxrEGf2wFj4TdjtW8gq46b09ovYhZ8ojLv2MLzKGiZ5FuP-_u0O8XbUUv7FH9ML0ibTi_nJYqU-S7C_dWF0f4kzPfUvKgnnJaeU2C4vLMnSFJlx5motO4zu4DNtaLdUOfg10aGwJg-93cpR6WMCiTOKmDVnE06f68Hw_GHwXvtBsndSxNkdLFiJdTC6Hs2FW0Zwo_-wgofb0_dO3NM&e=1&n=8xca9570UAELfN6H&rId=1aa06d83-7764-4295-baa8-1c8c3e8ab35d&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8eQdnB5E7Rjx6b93PNVBEfzVUCUyBqYpBoOmYCjGz0_zDeo2Fl0Wwsvoth6WgOCqntWPb0uGZTnbG5lQxWrATxgw-7iPr3uvV4KVNx_unjV7Tvv3zNF28EAm8O2i7YoJ8BNwVO2viet-xmjUpKLdJrBP8UxkKNL-UK4v-fqsrKNhkAslDyaKKX4jXSVxfeE9nCcg34TB5rtEt4o1La-qbxdjikPs%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuemFja3MuY29tJTJmcmVnaXN0cmF0aW9uJTJmcGZwJTJmJTNmYWxlcnQlM2RUQ0tfQTEyNDclMjZ0JTNkQ0dBVSUyNmFkaWQlM2RBQl9CSU5HX1NFQVJDSF9Ccm9hZF9USUNLRVJfRXhwYW5zaW9uX0NlbnRlcnJhR29sZF9BMTI0NyUyNmNpZCUzZHBzLWNwYy1CSU5HLVNFQVJDSC1USUNLRVItRXhwYW5zaW9uLUNlbnRlcnJhR29sZC1BMTI0NyUyNm9mZmVyJTNkdGlja2VyJTI2cGFydG5lciUzZGJpbmclMjZjaGFubmVsJTNkc2VhcmNoJTI2Y2FtcGFpZ25pZCUzZCUyNTVCU2VhcmNoJTI1NUQlMjUyMFRpY2tlciUyNTIwRXhwYW5zaW9uJTI1MjAzJTI1MjAoQnJvYWQpJTI2YWRncm91cGlkJTNkQ2VudGVycmElMjUyMEdvbGQlMjUyMChCcm9hZCklMjZsb2NfcGh5c2ljYWxfbXMlM2QxMDA5MDMlMjZtYXRjaHR5cGUlM2RlJTI2ZGV2aWNlJTNkYyUyNmtleXdvcmQlM2RDZW50ZXJyYSUyNTIwR29sZCUyNTIwc3RvY2slMjUyMGJ1eSUyNTIwb3IlMjUyMHNlbGwlMjZtc2Nsa2lkJTNkZTE4Zjk5ZTJjNjY1MTQwODUxOWRmMzM3MjYxZTAwYWElMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2QlMjU1QlNlYXJjaCUyNTVEJTI1MjBUaWNrZXIlMjUyMEV4cGFuc2lvbiUyNTIwMyUyNTIwKEJyb2FkKSUyNnV0bV90ZXJtJTNkQ2VudGVycmElMjUyMEdvbGQlMjUyMHN0b2NrJTI1MjBidXklMjUyMG9yJTI1MjBzZWxsJTI2dXRtX2NvbnRlbnQlM2RDZW50ZXJyYSUyNTIwR29sZCUyNTIwKEJyb2FkKQ%26rlid%3De18f99e2c6651408519df337261e00aa&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                        - text: CGAU is the stock you need - Experts weigh in on CGAU - Here's why you should buy CGAU
                    - link "Sponsored" [ref=e290]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?d=1by4x9sjCSn0xEQl9OvCO0CYDMPqFhUzezMDReLC8vqtdP_ptVkjcBTj6l49fbdTxsnkRwITYbrDf4f2wWJ3zroL_xLKvENnD023K7nPaqHx90QpHR4M9UfHvFEOOCDRrRxrEGf2wFj4TdjtW8gq46b09ovYhZ8ojLv2MLzKGiZ5FuP-_u0O8XbUUv7FH9ML0ibTi_nJYqU-S7C_dWF0f4kzPfUvKgnnJaeU2C4vLMnSFJlx5motO4zu4DNtaLdUOfg10aGwJg-93cpR6WMCiTOKmDVnE06f68Hw_GHwXvtBsndSxNkdLFiJdTC6Hs2FW0Zwo_-wgofb0_dO3NM&e=1&n=8xca9570UAELfN6H&rId=1aa06d83-7764-4295-baa8-1c8c3e8ab35d&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8eQdnB5E7Rjx6b93PNVBEfzVUCUyBqYpBoOmYCjGz0_zDeo2Fl0Wwsvoth6WgOCqntWPb0uGZTnbG5lQxWrATxgw-7iPr3uvV4KVNx_unjV7Tvv3zNF28EAm8O2i7YoJ8BNwVO2viet-xmjUpKLdJrBP8UxkKNL-UK4v-fqsrKNhkAslDyaKKX4jXSVxfeE9nCcg34TB5rtEt4o1La-qbxdjikPs%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuemFja3MuY29tJTJmcmVnaXN0cmF0aW9uJTJmcGZwJTJmJTNmYWxlcnQlM2RUQ0tfQTEyNDclMjZ0JTNkQ0dBVSUyNmFkaWQlM2RBQl9CSU5HX1NFQVJDSF9Ccm9hZF9USUNLRVJfRXhwYW5zaW9uX0NlbnRlcnJhR29sZF9BMTI0NyUyNmNpZCUzZHBzLWNwYy1CSU5HLVNFQVJDSC1USUNLRVItRXhwYW5zaW9uLUNlbnRlcnJhR29sZC1BMTI0NyUyNm9mZmVyJTNkdGlja2VyJTI2cGFydG5lciUzZGJpbmclMjZjaGFubmVsJTNkc2VhcmNoJTI2Y2FtcGFpZ25pZCUzZCUyNTVCU2VhcmNoJTI1NUQlMjUyMFRpY2tlciUyNTIwRXhwYW5zaW9uJTI1MjAzJTI1MjAoQnJvYWQpJTI2YWRncm91cGlkJTNkQ2VudGVycmElMjUyMEdvbGQlMjUyMChCcm9hZCklMjZsb2NfcGh5c2ljYWxfbXMlM2QxMDA5MDMlMjZtYXRjaHR5cGUlM2RlJTI2ZGV2aWNlJTNkYyUyNmtleXdvcmQlM2RDZW50ZXJyYSUyNTIwR29sZCUyNTIwc3RvY2slMjUyMGJ1eSUyNTIwb3IlMjUyMHNlbGwlMjZtc2Nsa2lkJTNkZTE4Zjk5ZTJjNjY1MTQwODUxOWRmMzM3MjYxZTAwYWElMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2QlMjU1QlNlYXJjaCUyNTVEJTI1MjBUaWNrZXIlMjUyMEV4cGFuc2lvbiUyNTIwMyUyNTIwKEJyb2FkKSUyNnV0bV90ZXJtJTNkQ2VudGVycmElMjUyMEdvbGQlMjUyMHN0b2NrJTI1MjBidXklMjUyMG9yJTI1MjBzZWxsJTI2dXRtX2NvbnRlbnQlM2RDZW50ZXJyYSUyNTIwR29sZCUyNTIwKEJyb2FkKQ%26rlid%3De18f99e2c6651408519df337261e00aa&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                  - button "See more" [ref=e292]:
                    - img [ref=e293]
            - article [ref=e294] [cursor=pointer]:
              - generic [ref=e299]:
                - generic [ref=e301]:
                  - link "Top stories" [ref=e303]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6ad5e0796c0946a0abb1f4be0b41f658&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e304]
                  - button "More options" [ref=e306]
                - list [ref=e309]:
                  - listitem [ref=e310]:
                    - 'link "Breaking The Daily Jagran 3h Tiger Shroff firing case: All three shooters arrested from Rajasthan''s Kota" [ref=e311]':
                      - /url: https://www.msn.com/en-in/news/other/tiger-shroff-firing-case-all-three-shooters-arrested-from-rajasthan-s-kota/ar-AA2fynz7
                      - generic [ref=e312]:
                        - generic [ref=e313]:
                          - generic:
                            - generic [ref=e314]: Breaking
                            - img [ref=e315]
                          - generic [ref=e316]:
                            - generic: The Daily Jagran ·3h
                        - generic [ref=e317]: "Tiger Shroff firing case: All three shooters arrested from Rajasthan's Kota"
                  - listitem [ref=e318]:
                    - 'link "WION now Tiger Shroff firing: Who are Anil Pandit, Harman Sandhu and others named in Bishnoi gang post?" [ref=e319]':
                      - /url: https://www.msn.com/en-in/news/other/tiger-shroff-firing-who-are-anil-pandit-harman-sandhu-and-others-named-in-bishnoi-gang-post/ar-AA2fzcyU
                      - generic [ref=e320]:
                        - generic [ref=e321]:
                          - img [ref=e322]
                          - generic [ref=e323]:
                            - generic: WION ·now
                        - generic [ref=e324]: "Tiger Shroff firing: Who are Anil Pandit, Harman Sandhu and others named in Bishnoi gang post?"
                  - listitem [ref=e325]:
                    - link "Times Now 20m India-US trade deal near finalisation, Marco Rubio says; fuel-purchase tariffs put on hold" [ref=e326]:
                      - /url: https://www.msn.com/en-in/money/economy/india-us-trade-deal-near-finalisation-marco-rubio-says-fuel-purchase-tariffs-put-on-hold/ar-AA2fyMkp
                      - generic [ref=e327]:
                        - generic [ref=e328]:
                          - img [ref=e329]
                          - generic [ref=e330]:
                            - generic: Times Now ·20m
                        - generic [ref=e331]: India-US trade deal near finalisation, Marco Rubio says; fuel-purchase tariffs put on hold
                - generic [ref=e333]:
                  - generic [ref=e334]:
                    - generic "Previous" [ref=e335]:
                      - button "Previous" [ref=e336]
                    - tablist [ref=e338]:
                      - tab "Page 1" [selected] [ref=e339]
                      - tab "Page 2" [ref=e341]
                      - tab "Page 3" [ref=e343]
                    - generic "Next" [ref=e345]:
                      - button "Next" [ref=e346]
                  - link "See more" [ref=e348]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6ad5e0796c0946a0abb1f4be0b41f658&ocid=hpmsn
            - article [ref=e349] [cursor=pointer]:
              - generic [ref=e353]:
                - generic: Sponsored
            - article "Up To 21 Months Of No Interest - 0% Intro APR - Up To 21 Months - 5 Best Balance Transfer Cards" [ref=e354] [cursor=pointer]:
              - generic [ref=e356]:
                - img [ref=e357]
                - generic [ref=e358]:
                  - generic [ref=e359]:
                    - generic [ref=e362]: NerdWallet
                    - link "Up To 21 Months Of No Interest - 0% Intro APR - Up To 21 Months - 5 Best Balance Transfer Cards, NerdWallet" [ref=e363]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?d=5B3VWAJ-UzFTh8pct6a5XPtxEVI6PTwKLKeWZEoTy9BajwN5InWTK4MFycFWxLeFEs4VU_9DErdCkTwH8lKum_8fjWa8kViUfD6kc6Xq-y3iJaLwV07L2AO4aitPNn1qEX9L1PAz220eJ2xyyz-bC-bq_D25nJAAhaLyNjkNb3XrCy0Y7LggWvH9-8THSR3rU787JUuxij-68QGZHCUDHyz2JyeSCmQ0QxmiJPsNisU-tLtWU0D5QX04vpJxHpGynTFlXR9VwIeRStZZ6Byx_9BdI-Rq6bEHzWMBd9Tz98rolv3CEuOBZPDBjLPnjf_k3suNlqs1XHrD9B8&e=1&n=2lEFECLZJ2l0J6OO&rId=1aa06d83-7764-4295-baa8-1c8c3e8ab35d&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8-FA-rFBh8zskh0-7xhlfojVUCUxUNEx88W7nbgpNaTp6qqE3UxnIMEcjou4nS_6Xoqnmu9VSQzEllzWCw-hAlGieUuD3O2-37DnjHtcTY5NG5T4R2IYZE2ghTMlkXLCX9C4uKrmGmsIdmNS19CVttxOEi5tK2Gw2dRp1GlQfqGCd_HlqYMFXpRkvwE2tO2cuFnD9PkO-B8Xv5zu1fifLxFoDfrM%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cubmVyZHdhbGxldC5jb20lMmZjcmVkaXQtY2FyZHMlMmZtJTJmYmVzdCUyZmJhbGFuY2UtdHJhbnNmZXIlM2Z1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RjY19ta3RnX3BhaWRfMjAyNl9idCUyNnV0bV9jb250ZW50JTNkdGElMjZta3RnX3BsYWNlJTNka3dkLTgzMDE1MTE3MjUxMjQ3JTNhbG9jLTE5MCUyNm1zY2xraWQlM2RlZTQ2ODI3OGJhNzcxMDIwNjczM2U4YWQ1YTBjOGVlNQ%26rlid%3Dee468278ba7710206733e8ad5a0c8ee5&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                      - text: Up To 21 Months Of No Interest - 0% Intro APR - Up To 21 Months - 5 Best Balance Transfer Cards
                  - link "Sponsored" [ref=e365]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?d=5B3VWAJ-UzFTh8pct6a5XPtxEVI6PTwKLKeWZEoTy9BajwN5InWTK4MFycFWxLeFEs4VU_9DErdCkTwH8lKum_8fjWa8kViUfD6kc6Xq-y3iJaLwV07L2AO4aitPNn1qEX9L1PAz220eJ2xyyz-bC-bq_D25nJAAhaLyNjkNb3XrCy0Y7LggWvH9-8THSR3rU787JUuxij-68QGZHCUDHyz2JyeSCmQ0QxmiJPsNisU-tLtWU0D5QX04vpJxHpGynTFlXR9VwIeRStZZ6Byx_9BdI-Rq6bEHzWMBd9Tz98rolv3CEuOBZPDBjLPnjf_k3suNlqs1XHrD9B8&e=1&n=2lEFECLZJ2l0J6OO&rId=1aa06d83-7764-4295-baa8-1c8c3e8ab35d&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8-FA-rFBh8zskh0-7xhlfojVUCUxUNEx88W7nbgpNaTp6qqE3UxnIMEcjou4nS_6Xoqnmu9VSQzEllzWCw-hAlGieUuD3O2-37DnjHtcTY5NG5T4R2IYZE2ghTMlkXLCX9C4uKrmGmsIdmNS19CVttxOEi5tK2Gw2dRp1GlQfqGCd_HlqYMFXpRkvwE2tO2cuFnD9PkO-B8Xv5zu1fifLxFoDfrM%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cubmVyZHdhbGxldC5jb20lMmZjcmVkaXQtY2FyZHMlMmZtJTJmYmVzdCUyZmJhbGFuY2UtdHJhbnNmZXIlM2Z1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RjY19ta3RnX3BhaWRfMjAyNl9idCUyNnV0bV9jb250ZW50JTNkdGElMjZta3RnX3BsYWNlJTNka3dkLTgzMDE1MTE3MjUxMjQ3JTNhbG9jLTE5MCUyNm1zY2xraWQlM2RlZTQ2ODI3OGJhNzcxMDIwNjczM2U4YWQ1YTBjOGVlNQ%26rlid%3Dee468278ba7710206733e8ad5a0c8ee5&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                - button "See more" [ref=e367]:
                  - img [ref=e368]
            - article [ref=e369] [cursor=pointer]:
              - generic [ref=e375]:
                - generic [ref=e377]:
                  - link "Des Moines" [ref=e379]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
                    - heading "Des Moines" [level=2] [ref=e380]
                  - button "My location" [ref=e381]
                  - button "More options" [ref=e383]
                - generic [ref=e387]:
                  - generic [ref=e388]:
                    - generic [ref=e390]:
                      - link "Clear" [ref=e391]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
                        - img "Clear" [ref=e392]
                      - link "8°C" [ref=e393]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
                        - generic [ref=e394]: ‎8‎
                        - generic [ref=e396]: ‎°C‎
                    - generic [ref=e398]:
                      - link "Temperatures to plummet on Saturday" [ref=e400]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
                        - text: Temperatures to plummet on Saturday
                      - link "See full forecast" [ref=e402]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
                        - img "arrow" [ref=e403]
                  - list [ref=e406]:
                    - listitem [ref=e407]:
                      - generic "Weather forecast Today High temperature 21° Low temperature 6°" [ref=e408]:
                        - link "Weather forecast Today High temperature 21° Low temperature 6°" [ref=e409]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
                          - generic:
                            - generic:
                              - generic "Today"
                              - generic:
                                - img "Mostly sunny"
                              - generic:
                                - generic "High temperature 21°": ‎21°‎
                                - generic "Low temperature 6°": ‎6°‎
                    - listitem [ref=e410]:
                      - generic "Weather forecast Tue High temperature 21° Low temperature 7°" [ref=e411]:
                        - link "Weather forecast Tue High temperature 21° Low temperature 7°" [ref=e412]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
                          - generic:
                            - generic:
                              - generic "Tue"
                              - generic:
                                - img "Sunny"
                              - generic:
                                - generic "High temperature 21°": ‎21°‎
                                - generic "Low temperature 7°": ‎7°‎
                    - listitem [ref=e413]:
                      - generic "Weather forecast Wed High temperature 23° Low temperature 8°" [ref=e414]:
                        - link "Weather forecast Wed High temperature 23° Low temperature 8°" [ref=e415]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
                          - generic:
                            - generic:
                              - generic "Wed"
                              - generic:
                                - img "Sunny"
                              - generic:
                                - generic "High temperature 23°": ‎23°‎
                                - generic "Low temperature 8°": ‎8°‎
                    - listitem [ref=e416]:
                      - generic "Weather forecast Thu High temperature 23° Low temperature 10°" [ref=e417]:
                        - link "Weather forecast Thu High temperature 23° Low temperature 10°" [ref=e418]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
                          - generic:
                            - generic:
                              - generic "Thu"
                              - generic:
                                - img "Sunny"
                              - generic:
                                - generic "High temperature 23°": ‎23°‎
                                - generic "Low temperature 10°": ‎10°‎
                    - listitem [ref=e419]:
                      - generic "Weather forecast Fri High temperature 23° Low temperature 12°" [ref=e420]:
                        - link "Weather forecast Fri High temperature 23° Low temperature 12°" [ref=e421]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
                          - generic:
                            - generic:
                              - generic "Fri"
                              - generic:
                                - img "Sunny"
                              - generic:
                                - generic "High temperature 23°": ‎23°‎
                                - generic "Low temperature 12°": ‎12°‎
                - button "See full forecast" [ref=e424]
            - 'article "Reel ke chakkar mein thuk jaoge: Vaibhav Sooryavanshi’s cheeky warning to paparazzi - watch" [ref=e425] [cursor=pointer]':
              - generic [ref=e427]:
                - img [ref=e428]
                - generic [ref=e429]:
                  - generic [ref=e430]:
                    - generic [ref=e431]:
                      - generic [ref=e432]:
                        - img [ref=e433]
                        - generic [ref=e434]: ABP - Live
                      - generic [ref=e435]: ·
                      - generic [ref=e436]: 3d
                    - 'link "Reel ke chakkar mein thuk jaoge: Vaibhav Sooryavanshi’s cheeky warning to paparazzi - watch, ABP - Live" [ref=e437]':
                      - /url: https://www.msn.com/en-in/entertainment/celebrities/reel-ke-chakkar-mein-thuk-jaoge-vaibhav-sooryavanshi-s-cheeky-warning-to-paparazzi-watch/ar-AA2eiRdR
                      - text: "Reel ke chakkar mein thuk jaoge: Vaibhav Sooryavanshi’s cheeky warning to paparazzi - watch"
                  - 'generic "Reel ke chakkar mein thuk jaoge: Vaibhav Sooryavanshi’s cheeky warning to paparazzi - watch" [ref=e440]':
                    - generic [ref=e442]:
                      - generic [ref=e443]:
                        - button "118 Likes" [ref=e444]:
                          - generic [ref=e445]:
                            - img [ref=e446]
                            - generic [ref=e448]: "118"
                        - button "Dislike" [ref=e449]:
                          - img [ref=e451]
                      - link "Start the conversation" [ref=e454]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/reel-ke-chakkar-mein-thuk-jaoge-vaibhav-sooryavanshi-s-cheeky-warning-to-paparazzi-watch/ar-AA2eiRdR#comments
                        - button "Start the conversation" [ref=e455]:
                          - img [ref=e456]
                - generic [ref=e458]:
                  - button "Hide this story" [ref=e459]:
                    - img [ref=e460]
                    - text: Hide this story
                  - button "See more" [ref=e461]:
                    - img [ref=e462]
            - article "Transfer Company Ownership" [ref=e463] [cursor=pointer]:
              - generic [ref=e465]:
                - img [ref=e466]
                - generic [ref=e467]:
                  - generic [ref=e468]:
                    - generic [ref=e471]: Sell Your Way
                    - link "Transfer Company Ownership, Sell Your Way" [ref=e472]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?d=t08fDdwJstPV95YFbN1dhLwl647QOpqa0kGxq-DSC6btxvyi6LeEz9CVmx8_QSFd1yFeACA0mnqUH23IbfUtL67yZ1fkWV5OH98_FPi6g9XRDQrW8cAz96QwPiYQqctIcQ055TTVWL4-2zvShCrMWJy0EmzU3pcQO4XdS5v4EC5bIC8qulTSMbWjorNrh1_hP0f_gMRXX0SSlKWsRuRI6b7OgPI62R9etR6qnodXfgAsF-ZmTaQl9BO4TnG9ZDfyY958xMAw59MtlC55JiD9OLEMdepfFnYejdzYNlVxDllze0Ima1HPM-1bZIHiMGRDJL9V1eRu6eN9aQ4&e=1&n=j0jffjQ6TmZUYWmg&rId=1aa06d83-7764-4295-baa8-1c8c3e8ab35d&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8I0OrwmoCXZ6TjtHuAo8urjVUCUwZIPNeeDdKIS2zKdCw-SWK6Dfb93VHe2YDOUL9GnkMuaorHRlztHrCNkarsz7KtqsddtFNQ1LwJJFWx3lm6hicmuzGx0qzvA5BL5e03HspGEJMDt2TJlm_0aU0yLWm2C5JY-er_LkOftpMFyYyYPPbGLiwNLW7221qen_ArYDXOZ6EXnvIFz_O1vKVVvKLAuU%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuc2VsbHlvdXJ3YXkub3JnJTJmdHJhbnNmZXItb3duZXJzaGlwJTNmdXRtX2NhbXBhaWduJTNkZGlzcGxheXJlbWFya2V0aW5nJTI2dXRtX21lZGl1bSUzZHBwYyUyNnV0bV9zb3VyY2UlM2RiaW5nJTI2bXNjbGtpZCUzZGJmZGFkNTg1ZDk1ZDEzODEwMmU1YmY1MDM5MjYxYWRk%26rlid%3Dbfdad585d95d138102e5bf5039261add&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                      - text: Transfer Company Ownership
                  - link "Sponsored" [ref=e474]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?d=t08fDdwJstPV95YFbN1dhLwl647QOpqa0kGxq-DSC6btxvyi6LeEz9CVmx8_QSFd1yFeACA0mnqUH23IbfUtL67yZ1fkWV5OH98_FPi6g9XRDQrW8cAz96QwPiYQqctIcQ055TTVWL4-2zvShCrMWJy0EmzU3pcQO4XdS5v4EC5bIC8qulTSMbWjorNrh1_hP0f_gMRXX0SSlKWsRuRI6b7OgPI62R9etR6qnodXfgAsF-ZmTaQl9BO4TnG9ZDfyY958xMAw59MtlC55JiD9OLEMdepfFnYejdzYNlVxDllze0Ima1HPM-1bZIHiMGRDJL9V1eRu6eN9aQ4&e=1&n=j0jffjQ6TmZUYWmg&rId=1aa06d83-7764-4295-baa8-1c8c3e8ab35d&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8I0OrwmoCXZ6TjtHuAo8urjVUCUwZIPNeeDdKIS2zKdCw-SWK6Dfb93VHe2YDOUL9GnkMuaorHRlztHrCNkarsz7KtqsddtFNQ1LwJJFWx3lm6hicmuzGx0qzvA5BL5e03HspGEJMDt2TJlm_0aU0yLWm2C5JY-er_LkOftpMFyYyYPPbGLiwNLW7221qen_ArYDXOZ6EXnvIFz_O1vKVVvKLAuU%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuc2VsbHlvdXJ3YXkub3JnJTJmdHJhbnNmZXItb3duZXJzaGlwJTNmdXRtX2NhbXBhaWduJTNkZGlzcGxheXJlbWFya2V0aW5nJTI2dXRtX21lZGl1bSUzZHBwYyUyNnV0bV9zb3VyY2UlM2RiaW5nJTI2bXNjbGtpZCUzZGJmZGFkNTg1ZDk1ZDEzODEwMmU1YmY1MDM5MjYxYWRk%26rlid%3Dbfdad585d95d138102e5bf5039261add&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                - button "See more" [ref=e476]:
                  - img [ref=e477]
            - article "Maharashtra RPF officer makes another daring rescue as woman slips from moving train" [ref=e478] [cursor=pointer]:
              - generic [ref=e480]:
                - img [ref=e481]
                - generic [ref=e482]:
                  - generic [ref=e483]:
                    - generic [ref=e484]:
                      - generic [ref=e485]:
                        - img [ref=e486]
                        - generic [ref=e487]: India Today
                      - generic [ref=e488]: ·
                      - generic [ref=e489]: 4h
                    - link "Maharashtra RPF officer makes another daring rescue as woman slips from moving train, India Today" [ref=e490]:
                      - /url: https://www.msn.com/en-in/news/other/maharashtra-rpf-officer-makes-another-daring-rescue-as-woman-slips-from-moving-train/ar-AA2fy9NC
                      - text: Maharashtra RPF officer makes another daring rescue as woman slips from moving train
                  - generic "Maharashtra RPF officer makes another daring rescue as woman slips from moving train" [ref=e493]:
                    - generic [ref=e495]:
                      - generic [ref=e496]:
                        - button "60 Likes" [ref=e497]:
                          - generic [ref=e498]:
                            - img [ref=e499]
                            - generic [ref=e501]: "60"
                        - button "Dislike" [ref=e502]:
                          - img [ref=e504]
                      - link "Start the conversation" [ref=e507]:
                        - /url: https://www.msn.com/en-in/news/other/maharashtra-rpf-officer-makes-another-daring-rescue-as-woman-slips-from-moving-train/ar-AA2fy9NC#comments
                        - button "Start the conversation" [ref=e508]:
                          - img [ref=e509]
                - generic [ref=e511]:
                  - button "Hide this story" [ref=e512]:
                    - img [ref=e513]
                    - text: Hide this story
                  - button "See more" [ref=e514]:
                    - img [ref=e515]
            - 'article "''Unacceptable'': Paswan defends ''Leave India'' notice to Imran Khan over Mumbai stir<br>" [ref=e516] [cursor=pointer]':
              - generic [ref=e518]:
                - img [ref=e519]
                - generic [ref=e520]:
                  - generic [ref=e521]:
                    - generic [ref=e522]:
                      - generic [ref=e523]:
                        - img [ref=e524]
                        - generic [ref=e525]: The Times of India
                      - generic [ref=e526]: ·
                      - generic [ref=e527]: 23h
                    - 'link "''Unacceptable'': Paswan defends ''Leave India'' notice to Imran Khan over Mumbai stir<br>, The Times of India" [ref=e528]':
                      - /url: https://www.msn.com/en-in/news/other/unacceptable-paswan-defends-leave-india-notice-to-imran-khan-over-mumbai-stir-br/ar-AA2etMsW
                      - text: "'Unacceptable': Paswan defends 'Leave India' notice to Imran Khan over Mumbai stir<br>"
                  - 'generic "''Unacceptable'': Paswan defends ''Leave India'' notice to Imran Khan over Mumbai stir<br>" [ref=e531]':
                    - generic [ref=e533]:
                      - generic [ref=e534]:
                        - button "28 Likes" [ref=e535]:
                          - generic [ref=e536]:
                            - img [ref=e537]
                            - generic [ref=e539]: "28"
                        - button "Dislike" [ref=e540]:
                          - img [ref=e542]
                      - link "View comments 2 Comment" [ref=e545]:
                        - /url: https://www.msn.com/en-in/news/other/unacceptable-paswan-defends-leave-india-notice-to-imran-khan-over-mumbai-stir-br/ar-AA2etMsW#comments
                        - button "View comments 2 Comment" [ref=e546]:
                          - img [ref=e547]
                        - generic [ref=e549]: "2"
                - generic [ref=e550]:
                  - button "Hide this story" [ref=e551]:
                    - img [ref=e552]
                    - text: Hide this story
                  - button "See more" [ref=e553]:
                    - img [ref=e554]
          - generic [ref=e555]:
            - article [ref=e556] [cursor=pointer]:
              - generic [ref=e561]:
                - generic [ref=e563]:
                  - link "Top Engaging News" [ref=e565]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6ad5e0796c0946a0abb1f4be0b41f658
                    - heading "Top Engaging News" [level=2] [ref=e566]
                  - button "More options" [ref=e568]
                - generic [ref=e570]:
                  - link "News18 10 Comments Jim Carrey marries for the 3rd time at 64, ties knot with 32-year-old girlfriend Min Ah" [ref=e572]:
                    - /url: https://www.msn.com/en-in/entertainment/celebrities/jim-carrey-marries-for-the-3rd-time-at-64-ties-knot-with-32-year-old-girlfriend-min-ah/ar-AA2dk8bG
                    - generic [ref=e573]:
                      - img [ref=e574]
                      - generic [ref=e575]: News18
                      - link "10 Comments" [ref=e577]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/jim-carrey-marries-for-the-3rd-time-at-64-ties-knot-with-32-year-old-girlfriend-min-ah/ar-AA2dk8bG#comments
                        - img [ref=e578]
                        - paragraph [ref=e579]: "10"
                    - paragraph [ref=e580]: Jim Carrey marries for the 3rd time at 64, ties knot with 32-year-old girlfriend Min Ah
                  - 'link "Hindustan Times 2 Comments Australians are laid-back: Indian man compares public holidays in Australia and India, internet reacts" [ref=e582]':
                    - /url: https://www.msn.com/en-in/news/other/australians-are-laid-back-indian-man-compares-public-holidays-in-australia-and-india-internet-reacts/ar-AA2dmmhs
                    - generic [ref=e583]:
                      - img [ref=e584]
                      - generic [ref=e585]: Hindustan Times
                      - link "2 Comments" [ref=e587]:
                        - /url: https://www.msn.com/en-in/news/other/australians-are-laid-back-indian-man-compares-public-holidays-in-australia-and-india-internet-reacts/ar-AA2dmmhs#comments
                        - img [ref=e588]
                        - paragraph [ref=e589]: "2"
                    - paragraph [ref=e590]: "Australians are laid-back: Indian man compares public holidays in Australia and India, internet reacts"
                  - link "ABP - Live 2 Comments Washington Sundar out of India T20I squad, BCCI names surprise replacement" [ref=e592]:
                    - /url: https://www.msn.com/en-in/sports/cricket/washington-sundar-out-of-india-t20i-squad-bcci-names-surprise-replacement/ar-AA2dltlt
                    - generic [ref=e593]:
                      - img [ref=e594]
                      - generic [ref=e595]: ABP - Live
                      - link "2 Comments" [ref=e597]:
                        - /url: https://www.msn.com/en-in/sports/cricket/washington-sundar-out-of-india-t20i-squad-bcci-names-surprise-replacement/ar-AA2dltlt#comments
                        - img [ref=e598]
                        - paragraph [ref=e599]: "2"
                    - paragraph [ref=e600]: Washington Sundar out of India T20I squad, BCCI names surprise replacement
                - generic [ref=e602]:
                  - generic [ref=e603]:
                    - generic "Previous" [ref=e604]:
                      - button "Previous" [ref=e605]
                    - tablist [ref=e607]:
                      - tab "Page 1" [selected] [ref=e608]
                      - tab "Page 2" [ref=e610]
                      - tab "Page 3" [ref=e612]
                    - generic "Next" [ref=e614]:
                      - button "Next" [ref=e615]
                  - link "See more" [ref=e617]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6ad5e0796c0946a0abb1f4be0b41f658
            - article [ref=e618] [cursor=pointer]:
              - generic [ref=e623]:
                - generic [ref=e625]:
                  - link "Games" [ref=e627]:
                    - /url: https://www.msn.com/en-in/play
                    - heading "Games" [level=2] [ref=e628]
                  - button "More options" [ref=e630]
                - list [ref=e634]:
                  - generic:
                    - listitem [ref=e635]:
                      - link "Hexa Stack" [ref=e636]:
                        - /url: https://www.msn.com/en-in/play/games/hexa-stack/cg-9nrtsrw7wfqb?ocid=hpmsn&cvid=6ad5e0796c0946a0abb1f4be0b41f658&ei=6
                        - generic [ref=e637]:
                          - img "Hexa Stack"
                    - listitem [ref=e638]:
                      - 'link "Stickman Kombat: 2D Fighting" [ref=e639]':
                        - /url: https://www.msn.com/en-in/play/games/stickman-kombat-2d-fighting/cg-9pnh0zvss3z4?ocid=hpmsn&cvid=6ad5e0796c0946a0abb1f4be0b41f658&ei=6
                        - generic [ref=e640]:
                          - 'img "Stickman Kombat: 2D Fighting"'
                    - listitem [ref=e641]:
                      - 'link "Idol Livestream: Doll Dress Up" [ref=e642]':
                        - /url: https://www.msn.com/en-in/play/games/idol-livestream-doll-dress-up/cg-9nvf53gxpx1x?ocid=hpmsn&cvid=6ad5e0796c0946a0abb1f4be0b41f658&ei=6
                        - generic [ref=e643]:
                          - 'img "Idol Livestream: Doll Dress Up"'
                    - listitem [ref=e644]:
                      - link "Deadly Descent" [ref=e645]:
                        - /url: https://www.msn.com/en-in/play/games/deadly-descent/cg-9n7vxxr7llpk?ocid=hpmsn&cvid=6ad5e0796c0946a0abb1f4be0b41f658&ei=6
                        - generic [ref=e646]:
                          - img "Deadly Descent"
                    - listitem [ref=e647]:
                      - link "Paper.io 2" [ref=e648]:
                        - /url: https://www.msn.com/en-in/play/games/paperio-2/cg-9p3z21qf167w?ocid=hpmsn&cvid=6ad5e0796c0946a0abb1f4be0b41f658&ei=6
                        - generic [ref=e649]:
                          - img "Paper.io 2"
                    - listitem [ref=e650]:
                      - link "Survival Karts" [ref=e651]:
                        - /url: https://www.msn.com/en-in/play/games/survival-karts/cg-9mxlkjlsf9bg?ocid=hpmsn&cvid=6ad5e0796c0946a0abb1f4be0b41f658&ei=6
                        - generic [ref=e652]:
                          - img "Survival Karts"
                    - listitem [ref=e653]:
                      - link "Word Ties" [ref=e654]:
                        - /url: https://www.msn.com/en-in/play/games/word-ties/cg-9nlgmb9ptlxw?ocid=hpmsn&cvid=6ad5e0796c0946a0abb1f4be0b41f658&ei=6
                        - generic [ref=e655]:
                          - img "Word Ties"
                    - listitem [ref=e656]:
                      - link "+1 Speed Escape Obby" [ref=e657]:
                        - /url: https://www.msn.com/en-in/play/games/1-speed-escape-obby/cg-9npnzjd1df3l?ocid=hpmsn&cvid=6ad5e0796c0946a0abb1f4be0b41f658&ei=6
                        - generic [ref=e658]:
                          - img "+1 Speed Escape Obby"
                    - listitem [ref=e659]:
                      - link "Crazy Hen Level" [ref=e660]:
                        - /url: https://www.msn.com/en-in/play/games/crazy-hen-level/cg-9n8d3994xkh6?ocid=hpmsn&cvid=6ad5e0796c0946a0abb1f4be0b41f658&ei=6
                        - generic [ref=e661]:
                          - img "Crazy Hen Level"
                - generic [ref=e663]:
                  - generic [ref=e664]:
                    - generic "Previous" [ref=e665]:
                      - button "Previous" [ref=e666]
                    - tablist [ref=e668]:
                      - tab "Page 1" [selected] [ref=e669]
                      - tab "Page 2" [ref=e671]
                    - generic "Next" [ref=e673]:
                      - button "Next" [ref=e674]
                  - link "Explore more games" [ref=e676]:
                    - /url: https://www.msn.com/en-in/play
            - 'article "Heart attack symptoms: 6 early morning warning signs of the silent killer you should never ignore" [ref=e677] [cursor=pointer]':
              - generic [ref=e679]:
                - img [ref=e680]
                - generic [ref=e681]:
                  - generic [ref=e682]:
                    - generic [ref=e684]:
                      - img [ref=e685]
                      - generic [ref=e686]: Times Now
                    - 'link "Heart attack symptoms: 6 early morning warning signs of the silent killer you should never ignore, Times Now" [ref=e687]':
                      - /url: https://www.msn.com/en-in/health/diseases-and-conditions/heart-attack-symptoms-6-early-morning-warning-signs-of-the-silent-killer-you-should-never-ignore/ar-AA1SRlDo
                      - text: "Heart attack symptoms: 6 early morning warning signs of the silent killer you should never ignore"
                  - 'generic "Heart attack symptoms: 6 early morning warning signs of the silent killer you should never ignore" [ref=e690]':
                    - generic [ref=e692]:
                      - generic [ref=e693]:
                        - button "1,088 Likes" [ref=e694]:
                          - generic [ref=e695]:
                            - img [ref=e696]
                            - generic [ref=e698]: 1k
                        - button "Dislike" [ref=e699]:
                          - img [ref=e701]
                      - link "Start the conversation" [ref=e704]:
                        - /url: https://www.msn.com/en-in/health/diseases-and-conditions/heart-attack-symptoms-6-early-morning-warning-signs-of-the-silent-killer-you-should-never-ignore/ar-AA1SRlDo#comments
                        - button "Start the conversation" [ref=e705]:
                          - img [ref=e706]
                - generic [ref=e708]:
                  - button "Hide this story" [ref=e709]:
                    - img [ref=e710]
                    - text: Hide this story
                  - button "See more" [ref=e711]:
                    - img [ref=e712]
            - article "Infosys, Cognizant and TCS H-1B visa registrations plunge amid Trump’s US immigration crackdown" [ref=e713] [cursor=pointer]:
              - generic [ref=e715]:
                - img [ref=e716]
                - generic [ref=e717]:
                  - generic [ref=e718]:
                    - generic [ref=e719]:
                      - generic [ref=e720]:
                        - img [ref=e721]
                        - generic [ref=e722]: Hindustan Times
                      - generic [ref=e723]: ·
                      - generic [ref=e724]: 6h
                    - link "Infosys, Cognizant and TCS H-1B visa registrations plunge amid Trump’s US immigration crackdown, Hindustan Times" [ref=e725]:
                      - /url: https://www.msn.com/en-in/money/general/infosys-cognizant-and-tcs-h-1b-visa-registrations-plunge-amid-trump-s-us-immigration-crackdown/ar-AA2ftSo8
                      - text: Infosys, Cognizant and TCS H-1B visa registrations plunge amid Trump’s US immigration crackdown
                  - generic "Infosys, Cognizant and TCS H-1B visa registrations plunge amid Trump’s US immigration crackdown" [ref=e728]:
                    - generic [ref=e730]:
                      - generic [ref=e731]:
                        - button "5 Likes" [ref=e732]:
                          - generic [ref=e733]:
                            - img [ref=e734]
                            - generic [ref=e736]: "5"
                        - button "Dislike" [ref=e737]:
                          - img [ref=e739]
                      - link "Start the conversation" [ref=e742]:
                        - /url: https://www.msn.com/en-in/money/general/infosys-cognizant-and-tcs-h-1b-visa-registrations-plunge-amid-trump-s-us-immigration-crackdown/ar-AA2ftSo8#comments
                        - button "Start the conversation" [ref=e743]:
                          - img [ref=e744]
                - generic [ref=e746]:
                  - button "Hide this story" [ref=e747]:
                    - img [ref=e748]
                    - text: Hide this story
                  - button "See more" [ref=e749]:
                    - img [ref=e750]
            - article [ref=e751] [cursor=pointer]
            - article "Stop cooking pasta wrong - an Italian chef reveals 10 huge mistakes" [ref=e758] [cursor=pointer]:
              - generic [ref=e760]:
                - generic [ref=e764]:
                  - generic [ref=e765]:
                    - generic [ref=e766]:
                      - generic [ref=e767]:
                        - img [ref=e768]
                        - generic [ref=e769]: Vincenzo's Plate
                      - generic [ref=e770]: ·
                      - generic [ref=e771]: 1d
                    - link "Stop cooking pasta wrong - an Italian chef reveals 10 huge mistakes, Vincenzo's Plate" [ref=e772]:
                      - /url: https://www.msn.com/en-in/food-and-drink/recipes/stop-cooking-pasta-wrong-an-italian-chef-reveals-10-huge-mistakes/vi-AA2axWGv
                      - text: Stop cooking pasta wrong - an Italian chef reveals 10 huge mistakes
                  - generic "Stop cooking pasta wrong - an Italian chef reveals 10 huge mistakes" [ref=e775]:
                    - generic [ref=e777]:
                      - generic [ref=e778]:
                        - button "47 Likes" [ref=e779]:
                          - generic [ref=e780]:
                            - img [ref=e781]
                            - generic [ref=e783]: "47"
                        - button "Dislike" [ref=e784]:
                          - img [ref=e786]
                      - link "Start the conversation" [ref=e789]:
                        - /url: https://www.msn.com/en-in/food-and-drink/recipes/stop-cooking-pasta-wrong-an-italian-chef-reveals-10-huge-mistakes/vi-AA2axWGv#comments
                        - button "Start the conversation" [ref=e790]:
                          - img [ref=e791]
                - generic [ref=e793]:
                  - button "Hide this story" [ref=e794]:
                    - img [ref=e795]
                    - text: Hide this story
                  - button "See more" [ref=e796]:
                    - img [ref=e797]
            - article [ref=e798] [cursor=pointer]
            - article [ref=e805] [cursor=pointer]:
              - generic [ref=e811]:
                - generic [ref=e813]:
                  - img "Watchlist suggestions" [ref=e815]
                  - link "Watchlist suggestions" [ref=e816]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e817]
                  - button "More options" [ref=e819]
                - generic [ref=e824]:
                  - link "SENSEX SENSEX Dropping fast ‎-1.26%‎ 73,786.81" [ref=e826]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkucw&noti=Price&ocid=hpmsn
                    - generic [ref=e827]:
                      - generic [ref=e828]:
                        - generic [ref=e829]: SENSEX
                        - img "SENSEX" [ref=e830]
                      - generic [ref=e832]: Dropping fast
                    - generic [ref=e837]:
                      - generic [ref=e838]: ‎-1.26%‎
                      - generic [ref=e839]: 73,786.81
                    - button "Add to watchlist" [ref=e842]:
                      - img [ref=e843]
                  - link "NIFTY NIFTY Dropping fast ‎-1.20%‎ 22,867.95" [ref=e847]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkqww&noti=Price&ocid=hpmsn
                    - generic [ref=e848]:
                      - generic [ref=e849]:
                        - generic [ref=e850]: NIFTY
                        - img "NIFTY" [ref=e851]
                      - generic [ref=e853]: Dropping fast
                    - generic [ref=e858]:
                      - generic [ref=e859]: ‎-1.20%‎
                      - generic [ref=e860]: 22,867.95
                    - button "Add to watchlist" [ref=e863]:
                      - img [ref=e864]
                  - link "24K Gold (10 Grams) - Indian Rupee XAUINR ‎+0.69%‎ 144496" [ref=e868]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&ocid=hpmsn
                    - generic [ref=e869]:
                      - generic [ref=e871]: 24K Gold (10 Grams) - Indian Rupee
                      - generic [ref=e873]: XAUINR
                    - generic [ref=e878]:
                      - generic [ref=e879]: ‎+0.69%‎
                      - generic [ref=e880]: "144496"
                    - button "Add to watchlist" [ref=e883]:
                      - img [ref=e884]
                  - link "ITC Ltd ITC ‎-1.02%‎ 260.80" [ref=e888]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahie2w&ocid=hpmsn
                    - generic [ref=e889]:
                      - generic [ref=e891]: ITC Ltd
                      - generic [ref=e893]: ITC
                    - generic [ref=e898]:
                      - generic [ref=e899]: ‎-1.02%‎
                      - generic [ref=e900]: "260.80"
                    - button "Add to watchlist" [ref=e903]:
                      - img [ref=e904]
                  - link "Dominion Energy, Inc. D ‎+1.11%‎ 63.56" [ref=e908]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a1qpw7&ocid=hpmsn
                    - generic [ref=e909]:
                      - generic [ref=e911]: Dominion Energy, Inc.
                      - generic [ref=e913]: D
                    - generic [ref=e918]:
                      - generic [ref=e919]: ‎+1.11%‎
                      - generic [ref=e920]: "63.56"
                    - button "Add to watchlist" [ref=e923]:
                      - img [ref=e924]
                - generic [ref=e928]:
                  - generic [ref=e929]:
                    - generic "Previous" [ref=e930]:
                      - button "Previous" [ref=e931]
                    - tablist [ref=e933]:
                      - tab "Page 1" [selected] [ref=e934]
                      - tab "Page 2" [ref=e936]
                      - tab "Page 3" [ref=e938]
                      - tab "Page 4" [ref=e940]
                      - tab "Page 5" [ref=e942]
                      - tab "Page 6"
                      - tab "Page 7"
                    - generic "Next" [ref=e944]:
                      - button "Next" [ref=e945]
                  - link "See watchlist suggestions" [ref=e947]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
          - article [ref=e949]
          - generic [ref=e951]:
            - article [ref=e952] [cursor=pointer]:
              - generic [ref=e957]:
                - generic [ref=e958]:
                  - generic [ref=e959]:
                    - link "Recommended videos" [ref=e960]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e961]
                    - link "Recommended videos" [ref=e964]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e965]:
                    - generic:
                      - link "See more" [ref=e966]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e967]:
                        - button "More options" [ref=e968]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e970]:
                  - generic [ref=e972]:
                    - generic [ref=e974]:
                      - generic:
                        - article "She sang \"Get rid of Putin\" in a Moscow cathedral - Listen to what happened afterwards" [ref=e977]:
                          - generic [ref=e978]:
                            - img "She Sang “Get Rid of Putin” in a Moscow Cathedral - Listen to what happened afterwards" [ref=e980]
                            - generic [ref=e982]: 13:05
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e983]:
                              - generic [ref=e984]:
                                - img "TED" [ref=e985]
                                - generic [ref=e986]:
                                  - generic:
                                    - generic "TED" [ref=e987]
                                    - generic [ref=e988]: ·
                                    - generic [ref=e989]: 1w
                              - link "She sang \"Get rid of Putin\" in a Moscow cathedral - Listen to what happened afterwards" [ref=e990]:
                                - /url: https://www.msn.com/en-in/news/other/she-sang-get-rid-of-putin-in-a-moscow-cathedral-listen-to-what-happened-afterwards/vi-AA2doFSr?ocid=hpmsn
                                - heading "She sang \"Get rid of Putin\" in a Moscow cathedral - Listen to what happened afterwards" [level=2] [ref=e991]:
                                  - generic: She sang "Get rid of Putin" in a Moscow cathedral - Listen to what happened afterwards
                            - button "See more" [ref=e995]
                        - article "Xiaomi 17 Pro Max review puts unexpected pressure on Apple" [ref=e998]:
                          - generic [ref=e999]:
                            - img "Xiaomi 17 Pro Max review puts unexpected pressure on Apple" [ref=e1001]
                            - generic [ref=e1003]: 12:56
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1004]:
                              - generic [ref=e1005]:
                                - img "MrWhoseTheBoss" [ref=e1006]
                                - generic [ref=e1007]:
                                  - generic:
                                    - generic "MrWhoseTheBoss" [ref=e1008]
                                    - generic [ref=e1009]: ·
                                    - generic [ref=e1010]: 2d
                              - link "Xiaomi 17 Pro Max review puts unexpected pressure on Apple" [ref=e1011]:
                                - /url: https://www.msn.com/en-in/technology/hardware-and-devices/xiaomi-17-pro-max-review-puts-unexpected-pressure-on-apple/vi-AA1W45uZ?ocid=hpmsn
                                - heading "Xiaomi 17 Pro Max review puts unexpected pressure on Apple" [level=2] [ref=e1012]:
                                  - generic: Xiaomi 17 Pro Max review puts unexpected pressure on Apple
                            - button "See more" [ref=e1016]
                        - article [ref=e1019]:
                          - generic [ref=e1020]:
                            - img "Man Jumps From Mountain - And Finds Cows On His Way Down" [ref=e1022]
                            - generic [ref=e1024]: 05:08
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1025]:
                              - generic [ref=e1026]:
                                - img "Chris Finck" [ref=e1027]
                                - generic [ref=e1028]:
                                  - generic:
                                    - generic "Chris Finck" [ref=e1029]
                                    - generic [ref=e1030]: ·
                                    - generic [ref=e1031]: 6d
                              - link "Man jumps from mountain - and finds cows on his way down" [ref=e1032]:
                                - /url: https://www.msn.com/en-in/news/other/man-jumps-from-mountain-and-finds-cows-on-his-way-down/vi-AA1X3Dq9?ocid=hpmsn
                                - heading "Man jumps from mountain - and finds cows on his way down" [level=2] [ref=e1033]:
                                  - generic: Man jumps from mountain - and finds cows on his way down
                            - button "See more" [ref=e1037]
                        - article [ref=e1040]:
                          - generic [ref=e1041]:
                            - img "Street Artist Spray Paints a Tree of Life on a Mirror" [ref=e1043]
                            - generic [ref=e1045]: 09:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1046]:
                              - generic [ref=e1047]:
                                - img "Mr. Spray" [ref=e1048]
                                - generic [ref=e1049]:
                                  - generic:
                                    - generic "Mr. Spray" [ref=e1050]
                                    - generic [ref=e1051]: ·
                                    - generic [ref=e1052]: 9h
                              - link "Street artist spray paints a tree of life on a mirror" [ref=e1053]:
                                - /url: https://www.msn.com/en-in/news/other/street-artist-spray-paints-a-tree-of-life-on-a-mirror/vi-AA2evdKb?ocid=hpmsn
                                - heading "Street artist spray paints a tree of life on a mirror" [level=2] [ref=e1054]:
                                  - generic: Street artist spray paints a tree of life on a mirror
                            - button "See more" [ref=e1058]
                        - article [ref=e1061]:
                          - generic [ref=e1062]:
                            - img "They Sang About the Devil... Then a Man Was Killed at Their Concert" [ref=e1064]
                            - generic [ref=e1066]: 19:42
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1067]:
                              - generic [ref=e1068]:
                                - img "Polyphonic" [ref=e1069]
                                - generic [ref=e1070]:
                                  - generic:
                                    - generic "Polyphonic" [ref=e1071]
                                    - generic [ref=e1072]: ·
                                    - generic [ref=e1073]: 3d
                              - link "They sang about the devil... then a man was killed at their concert" [ref=e1074]:
                                - /url: https://www.msn.com/en-in/entertainment/music/they-sang-about-the-devil-then-a-man-was-killed-at-their-concert/vi-AA2bd3yJ?ocid=hpmsn
                                - heading "They sang about the devil... then a man was killed at their concert" [level=2] [ref=e1075]:
                                  - generic: They sang about the devil... then a man was killed at their concert
                            - button "See more" [ref=e1079]
                        - article [ref=e1082]:
                          - generic [ref=e1083]:
                            - img "How Did Land Rover’s First Chassis Survive This Barn Find?" [ref=e1085]
                            - generic [ref=e1087]: 13:49
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1088]:
                              - generic [ref=e1089]:
                                - img "DRIVETRIBE" [ref=e1090]
                                - generic [ref=e1091]:
                                  - generic:
                                    - generic "DRIVETRIBE" [ref=e1092]
                                    - generic [ref=e1093]: ·
                                    - generic [ref=e1094]: 10h
                              - link "How did Land Rover’s first chassis survive this barn find?" [ref=e1095]:
                                - /url: https://www.msn.com/en-in/autos/general/how-did-land-rover-s-first-chassis-survive-this-barn-find/vi-AA2evxst?ocid=hpmsn
                                - heading "How did Land Rover’s first chassis survive this barn find?" [level=2] [ref=e1096]:
                                  - generic: How did Land Rover’s first chassis survive this barn find?
                            - button "See more" [ref=e1100]
                        - article [ref=e1103]:
                          - generic [ref=e1104]:
                            - img "Riding the Most Risky Log Transport Bikes of Indonesia" [ref=e1106]
                            - generic [ref=e1108]: 15:51
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1109]:
                              - generic [ref=e1110]:
                                - img "Fluctus - Video" [ref=e1111]
                                - generic "Fluctus - Video" [ref=e1113]
                              - link "Riding the most risky log transport bikes of Indonesia" [ref=e1114]:
                                - /url: https://www.msn.com/en-in/technology/general/riding-the-most-risky-log-transport-bikes-of-indonesia/vi-AA2bnuhz?ocid=hpmsn
                                - heading "Riding the most risky log transport bikes of Indonesia" [level=2] [ref=e1115]:
                                  - generic: Riding the most risky log transport bikes of Indonesia
                            - button "See more" [ref=e1119]
                        - article "British chefs take on a Korean convenience store gourmet challenge" [ref=e1122]:
                          - generic [ref=e1123]:
                            - img "British Chefs Take On a Korean Convenience Store Gourmet Challenge!" [ref=e1125]
                            - generic [ref=e1127]: 17:42
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1128]:
                              - generic [ref=e1129]:
                                - img "Korean Englishman" [ref=e1130]
                                - generic [ref=e1131]:
                                  - generic:
                                    - generic "Korean Englishman" [ref=e1132]
                                    - generic [ref=e1133]: ·
                                    - generic [ref=e1134]: 8h
                              - link "British chefs take on a Korean convenience store gourmet challenge" [ref=e1135]:
                                - /url: https://www.msn.com/en-in/food-and-drink/recipes/british-chefs-take-on-a-korean-convenience-store-gourmet-challenge/vi-AA2cMGpa?ocid=hpmsn
                                - heading "British chefs take on a Korean convenience store gourmet challenge" [level=2] [ref=e1136]:
                                  - generic: British chefs take on a Korean convenience store gourmet challenge
                            - button "See more" [ref=e1140]
                        - article [ref=e1143]:
                          - generic [ref=e1144]:
                            - img "Can a 700 HP Land Rover Defender Really Handle a Racetrack?" [ref=e1146]
                            - generic [ref=e1148]: 07:26
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1149]:
                              - generic [ref=e1150]:
                                - img "DRIVETRIBE" [ref=e1151]
                                - generic [ref=e1152]:
                                  - generic:
                                    - generic "DRIVETRIBE" [ref=e1153]
                                    - generic [ref=e1154]: ·
                                    - generic [ref=e1155]: 6h
                              - link "Can a 700 HP Land Rover Defender really handle a racetrack?" [ref=e1156]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/can-a-700-hp-land-rover-defender-really-handle-a-racetrack/vi-AA2fvGlu?ocid=hpmsn
                                - heading "Can a 700 HP Land Rover Defender really handle a racetrack?" [level=2] [ref=e1157]:
                                  - generic: Can a 700 HP Land Rover Defender really handle a racetrack?
                            - button "See more" [ref=e1161]
                        - article [ref=e1164]:
                          - generic [ref=e1165]:
                            - img "Can Izzy Beat Richard Hammond In A Track Battle?" [ref=e1167]
                            - generic [ref=e1169]: 12:48
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1170]:
                              - generic [ref=e1171]:
                                - img "DRIVETRIBE" [ref=e1172]
                                - generic [ref=e1173]:
                                  - generic:
                                    - generic "DRIVETRIBE" [ref=e1174]
                                    - generic [ref=e1175]: ·
                                    - generic [ref=e1176]: 10h
                              - link "Can Izzy beat Richard Hammond in a track battle?" [ref=e1177]:
                                - /url: https://www.msn.com/en-in/sports/general/can-izzy-beat-richard-hammond-in-a-track-battle/vi-AA2ev99W?ocid=hpmsn
                                - heading "Can Izzy beat Richard Hammond in a track battle?" [level=2] [ref=e1178]:
                                  - generic: Can Izzy beat Richard Hammond in a track battle?
                            - button "See more" [ref=e1182]
                        - article "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [ref=e1185]:
                          - generic [ref=e1186]:
                            - img "Trevor Noah Breaks Down the Real Reason Idris Elba could NOT play James Bond Thumbnail" [ref=e1188]
                            - generic [ref=e1190]: 09:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1191]:
                              - generic [ref=e1192]:
                                - img "Trevor Noah" [ref=e1193]
                                - generic [ref=e1194]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1195]
                                    - generic [ref=e1196]: ·
                                    - generic [ref=e1197]: 1d
                              - link "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [ref=e1198]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/trevor-noah-breaks-down-the-real-reason-idris-elba-could-not-play-james-bond/vi-AA2esh18?ocid=hpmsn
                                - heading "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [level=2] [ref=e1199]:
                                  - generic: Trevor Noah breaks down the real reason Idris Elba could not play James Bond
                            - button "See more" [ref=e1203]
                        - article "What makes this hidden Ford so important to Hammond?" [ref=e1206]:
                          - generic [ref=e1207]:
                            - img "What Makes This Hidden Ford So Important To Hammond?" [ref=e1209]
                            - generic [ref=e1211]: 06:37
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1212]:
                              - generic [ref=e1213]:
                                - img "DRIVETRIBE" [ref=e1214]
                                - generic [ref=e1215]:
                                  - generic:
                                    - generic "DRIVETRIBE" [ref=e1216]
                                    - generic [ref=e1217]: ·
                                    - generic [ref=e1218]: 10h
                              - link "What makes this hidden Ford so important to Hammond?" [ref=e1219]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/what-makes-this-hidden-ford-so-important-to-hammond/vi-AA2ev6Bx?ocid=hpmsn
                                - heading "What makes this hidden Ford so important to Hammond?" [level=2] [ref=e1220]:
                                  - generic: What makes this hidden Ford so important to Hammond?
                            - button "See more" [ref=e1224]
                        - link "See more" [ref=e1226]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1227]
                          - text: See more
                    - button "next" [ref=e1231]:
                      - img [ref=e1234]
            - 'article "Avengers: Doomsday trailer 2 shows Robert Downey Jr''s Doctor Doom in action, watch" [ref=e1236] [cursor=pointer]':
              - generic [ref=e1238]:
                - img [ref=e1239]
                - generic [ref=e1240]:
                  - generic [ref=e1241]:
                    - generic [ref=e1243]:
                      - img [ref=e1244]
                      - generic [ref=e1245]: NDTV 24x7
                    - 'link "Avengers: Doomsday trailer 2 shows Robert Downey Jr''s Doctor Doom in action, watch, NDTV 24x7" [ref=e1246]':
                      - /url: https://www.msn.com/en-in/entertainment/movies/avengers-doomsday-trailer-2-shows-robert-downey-jr-s-doctor-doom-in-action-watch/ar-AA2aaI9A
                      - text: "Avengers: Doomsday trailer 2 shows Robert Downey Jr's Doctor Doom in action, watch"
                  - 'generic "Avengers: Doomsday trailer 2 shows Robert Downey Jr''s Doctor Doom in action, watch" [ref=e1249]':
                    - generic [ref=e1251]:
                      - generic [ref=e1252]:
                        - button "43 Likes" [ref=e1253]:
                          - generic [ref=e1254]:
                            - img [ref=e1255]
                            - generic [ref=e1257]: "43"
                        - button "Dislike" [ref=e1258]:
                          - img [ref=e1260]
                      - link "Start the conversation" [ref=e1263]:
                        - /url: https://www.msn.com/en-in/entertainment/movies/avengers-doomsday-trailer-2-shows-robert-downey-jr-s-doctor-doom-in-action-watch/ar-AA2aaI9A#comments
                        - button "Start the conversation" [ref=e1264]:
                          - img [ref=e1265]
                - generic [ref=e1267]:
                  - button "Hide this story" [ref=e1268]:
                    - img [ref=e1269]
                    - text: Hide this story
                  - button "See more" [ref=e1270]:
                    - img [ref=e1271]
            - article [ref=e1272] [cursor=pointer]:
              - generic [ref=e1278]:
                - generic [ref=e1280]:
                  - img "ICC" [ref=e1282]
                  - link "ICC" [ref=e1283]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?uxmode=ruby&ocid=hpmsn&cvid=6ad5e0796c0946a0abb1f4be0b41f658
                    - heading "ICC" [level=2] [ref=e1284]
                  - button "More interests" [ref=e1285]
                  - generic [ref=e1286]:
                    - generic "Live now" [ref=e1287]:
                      - button "Live now" [ref=e1288]
                    - button "More options" [ref=e1289]
                - generic [ref=e1293]:
                  - link "SA 20/2 Delayed AUS Bad ground conditions" [ref=e1294]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-269791?uxmode=ruby&ocid=hpmsn&cvid=6ad5e0796c0946a0abb1f4be0b41f658
                    - generic "SA" [ref=e1295]:
                      - generic [ref=e1296]:
                        - generic [ref=e1297]:
                          - generic [ref=e1299]: SA
                          - button "Click to follow SA":
                            - generic:
                              - img
                        - generic [ref=e1302]: 20/2
                    - generic [ref=e1306]: Delayed
                    - generic "AUS" [ref=e1307]:
                      - generic [ref=e1309]:
                        - generic [ref=e1311]: AUS
                        - button "Click to follow AUS":
                          - generic:
                            - img
                    - generic "Bad ground conditions" [ref=e1314]
                  - link "AFG 19 Oct 11:30 am ZIM Zayed Cricket Stadium, Abu Dhabi" [ref=e1315]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-274657?uxmode=ruby&ocid=hpmsn&cvid=6ad5e0796c0946a0abb1f4be0b41f658
                    - generic "AFG" [ref=e1316]:
                      - generic [ref=e1318]:
                        - generic [ref=e1320]: AFG
                        - button "Click to follow AFG":
                          - generic:
                            - img
                    - generic [ref=e1323]:
                      - generic [ref=e1324]: 19 Oct
                      - generic [ref=e1325]: 11:30 am
                    - generic "ZIM" [ref=e1326]:
                      - generic [ref=e1328]:
                        - generic [ref=e1330]: ZIM
                        - button "Click to follow ZIM":
                          - generic:
                            - img
                    - generic "Zayed Cricket Stadium, Abu Dhabi" [ref=e1333]
                  - link "PAK 20 Oct 8:00 am ENG Rawalpindi Cricket Stadium, Rawalpindi" [ref=e1334]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-274143?uxmode=ruby&ocid=hpmsn&cvid=6ad5e0796c0946a0abb1f4be0b41f658
                    - generic "PAK" [ref=e1335]:
                      - generic [ref=e1337]:
                        - generic [ref=e1339]: PAK
                        - button "Click to follow PAK":
                          - generic:
                            - img
                    - generic [ref=e1342]:
                      - generic [ref=e1343]: 20 Oct
                      - generic [ref=e1344]: 8:00 am
                    - generic "ENG" [ref=e1345]:
                      - generic [ref=e1347]:
                        - generic [ref=e1349]: ENG
                        - button "Click to follow ENG":
                          - generic:
                            - img
                    - generic "Rawalpindi Cricket Stadium, Rawalpindi" [ref=e1352]
                - generic [ref=e1354]:
                  - generic [ref=e1355]:
                    - generic "Previous" [ref=e1356]:
                      - button "Previous" [ref=e1357]
                    - tablist [ref=e1359]:
                      - tab "Page 1" [selected] [ref=e1360]
                      - tab "Page 2" [ref=e1362]
                      - tab "Page 3" [ref=e1364]
                      - tab "Page 4" [ref=e1366]
                      - tab "Page 5" [ref=e1368]
                      - tab "Page 6"
                      - tab "Page 7"
                    - generic "Next" [ref=e1370]:
                      - button "Next" [ref=e1371]
                  - link "See more ICC" [ref=e1373]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?uxmode=ruby&ocid=hpmsn&cvid=6ad5e0796c0946a0abb1f4be0b41f658
            - article "Psychology says people who never share their problems and fight alone may be protecting more than their privacy" [ref=e1374] [cursor=pointer]:
              - generic [ref=e1376]:
                - img [ref=e1377]
                - generic [ref=e1378]:
                  - generic [ref=e1379]:
                    - generic [ref=e1381]:
                      - img [ref=e1382]
                      - generic [ref=e1383]: The Economic Times
                    - link "Psychology says people who never share their problems and fight alone may be protecting more than their privacy, The Economic Times" [ref=e1384]:
                      - /url: https://www.msn.com/en-in/news/other/psychology-says-people-who-never-share-their-problems-and-fight-alone-may-be-protecting-more-than-their-privacy/ar-AA2bSq7b
                      - text: Psychology says people who never share their problems and fight alone may be protecting more than their privacy
                  - generic "Psychology says people who never share their problems and fight alone may be protecting more than their privacy" [ref=e1387]:
                    - generic [ref=e1389]:
                      - generic [ref=e1390]:
                        - button "151 Likes" [ref=e1391]:
                          - generic [ref=e1392]:
                            - img [ref=e1393]
                            - generic [ref=e1395]: "151"
                        - button "Dislike" [ref=e1396]:
                          - img [ref=e1398]
                      - link "Start the conversation" [ref=e1401]:
                        - /url: https://www.msn.com/en-in/news/other/psychology-says-people-who-never-share-their-problems-and-fight-alone-may-be-protecting-more-than-their-privacy/ar-AA2bSq7b#comments
                        - button "Start the conversation" [ref=e1402]:
                          - img [ref=e1403]
                - generic [ref=e1405]:
                  - button "Hide this story" [ref=e1406]:
                    - img [ref=e1407]
                    - text: Hide this story
                  - button "See more" [ref=e1408]:
                    - img [ref=e1409]
            - 'article "Ranabaali box office collection day 3: Vijay Deverakonda-Rashmika Mandanna film struggles amid Jailer 2 wave" [ref=e1410] [cursor=pointer]':
              - generic [ref=e1412]:
                - img [ref=e1413]
                - generic [ref=e1414]:
                  - generic [ref=e1415]:
                    - generic [ref=e1416]:
                      - generic [ref=e1417]:
                        - img [ref=e1418]
                        - generic [ref=e1419]: NDTV
                      - generic [ref=e1420]: ·
                      - generic [ref=e1421]: 4h
                    - 'link "Ranabaali box office collection day 3: Vijay Deverakonda-Rashmika Mandanna film struggles amid Jailer 2 wave, NDTV" [ref=e1422]':
                      - /url: https://www.msn.com/en-in/entertainment/movies/ranabaali-box-office-collection-day-3-vijay-deverakonda-rashmika-mandanna-film-struggles-amid-jailer-2-wave/ar-AA2fyeVT
                      - text: "Ranabaali box office collection day 3: Vijay Deverakonda-Rashmika Mandanna film struggles amid Jailer 2 wave"
                  - 'generic "Ranabaali box office collection day 3: Vijay Deverakonda-Rashmika Mandanna film struggles amid Jailer 2 wave" [ref=e1425]':
                    - generic [ref=e1427]:
                      - generic [ref=e1428]:
                        - button "12 Likes" [ref=e1429]:
                          - generic [ref=e1430]:
                            - img [ref=e1431]
                            - generic [ref=e1433]: "12"
                        - button "Dislike" [ref=e1434]:
                          - img [ref=e1436]
                      - link "Start the conversation" [ref=e1439]:
                        - /url: https://www.msn.com/en-in/entertainment/movies/ranabaali-box-office-collection-day-3-vijay-deverakonda-rashmika-mandanna-film-struggles-amid-jailer-2-wave/ar-AA2fyeVT#comments
                        - button "Start the conversation" [ref=e1440]:
                          - img [ref=e1441]
                - generic [ref=e1443]:
                  - button "Hide this story" [ref=e1444]:
                    - img [ref=e1445]
                    - text: Hide this story
                  - button "See more" [ref=e1446]:
                    - img [ref=e1447]
            - article [ref=e1448] [cursor=pointer]
            - 'article "''First and last warning'': Who is Anil Pandit, who claimed firing at Tiger Shroff''s car?" [ref=e1455] [cursor=pointer]':
              - generic [ref=e1457]:
                - img [ref=e1458]
                - generic [ref=e1459]:
                  - generic [ref=e1460]:
                    - generic [ref=e1461]:
                      - generic [ref=e1462]:
                        - img [ref=e1463]
                        - generic [ref=e1464]: NDTV Profit
                      - generic [ref=e1465]: ·
                      - generic [ref=e1466]: 7h
                    - 'link "''First and last warning'': Who is Anil Pandit, who claimed firing at Tiger Shroff''s car?, NDTV Profit" [ref=e1467]':
                      - /url: https://www.msn.com/en-in/entertainment/celebrities/first-and-last-warning-who-is-anil-pandit-who-claimed-firing-at-tiger-shroff-s-car/ar-AA2eMu9q
                      - text: "'First and last warning': Who is Anil Pandit, who claimed firing at Tiger Shroff's car?"
                  - 'generic "''First and last warning'': Who is Anil Pandit, who claimed firing at Tiger Shroff''s car?" [ref=e1470]':
                    - generic [ref=e1472]:
                      - generic [ref=e1473]:
                        - button "43 Likes" [ref=e1474]:
                          - generic [ref=e1475]:
                            - img [ref=e1476]
                            - generic [ref=e1478]: "43"
                        - button "Dislike" [ref=e1479]:
                          - img [ref=e1481]
                      - link "View comments 1 Comment" [ref=e1484]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/first-and-last-warning-who-is-anil-pandit-who-claimed-firing-at-tiger-shroff-s-car/ar-AA2eMu9q#comments
                        - button "View comments 1 Comment" [ref=e1485]:
                          - img [ref=e1486]
                        - generic [ref=e1488]: "1"
                - generic [ref=e1489]:
                  - button "Hide this story" [ref=e1490]:
                    - img [ref=e1491]
                    - text: Hide this story
                  - button "See more" [ref=e1492]:
                    - img [ref=e1493]
          - generic [ref=e1494]:
            - article [ref=e1495] [cursor=pointer]
            - 'article "Shilpa Shinde turns into Mata Sita for Delhi’s Ramleela, video goes viral: Watch" [ref=e1502] [cursor=pointer]':
              - generic [ref=e1504]:
                - img [ref=e1505]
                - generic [ref=e1506]:
                  - generic [ref=e1507]:
                    - generic [ref=e1508]:
                      - generic [ref=e1509]:
                        - img [ref=e1510]
                        - generic [ref=e1511]: ABP - Live
                      - generic [ref=e1512]: ·
                      - generic [ref=e1513]: 5h
                    - 'link "Shilpa Shinde turns into Mata Sita for Delhi’s Ramleela, video goes viral: Watch, ABP - Live" [ref=e1514]':
                      - /url: https://www.msn.com/en-in/entertainment/celebrities/shilpa-shinde-turns-into-mata-sita-for-delhi-s-ramleela-video-goes-viral-watch/ar-AA2fxzxo
                      - text: "Shilpa Shinde turns into Mata Sita for Delhi’s Ramleela, video goes viral: Watch"
                  - 'generic "Shilpa Shinde turns into Mata Sita for Delhi’s Ramleela, video goes viral: Watch" [ref=e1517]':
                    - generic [ref=e1519]:
                      - generic [ref=e1520]:
                        - button "24 Likes" [ref=e1521]:
                          - generic [ref=e1522]:
                            - img [ref=e1523]
                            - generic [ref=e1525]: "24"
                        - button "Dislike" [ref=e1526]:
                          - img [ref=e1528]
                      - link "Start the conversation" [ref=e1531]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/shilpa-shinde-turns-into-mata-sita-for-delhi-s-ramleela-video-goes-viral-watch/ar-AA2fxzxo#comments
                        - button "Start the conversation" [ref=e1532]:
                          - img [ref=e1533]
                - generic [ref=e1535]:
                  - button "Hide this story" [ref=e1536]:
                    - img [ref=e1537]
                    - text: Hide this story
                  - button "See more" [ref=e1538]:
                    - img [ref=e1539]
    - contentinfo [ref=e1542]:
      - generic "Feedback" [ref=e1544] [cursor=pointer]:
        - button "Feedback" [ref=e1545]:
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