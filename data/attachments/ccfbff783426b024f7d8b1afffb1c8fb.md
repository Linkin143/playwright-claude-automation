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
        - 'link "Chicago: Areal Flood Watch, Cloudy, 24 °C" [ref=e19] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois
          - generic "Chicago, Illinois, United States Click here to see more information" [ref=e20]: Chicago
          - img "Cloudy" [ref=e22]
          - generic [ref=e23]:
            - generic [ref=e24]: ‎24‎
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
            - link "Ajio" [ref=e102] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=393141&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e105]:
                - generic [ref=e106]: Ajio
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
      - generic [ref=e204]:
        - alert [ref=e207]:
          - generic [ref=e210]:
            - 'link "Breaking News Independence Day 2026: PM Modi invokes ''Sapta Dhara'' vision for India''s future focusing on manufacturing to soft power" [ref=e212] [cursor=pointer]':
              - /url: https://www.msn.com/en-in/money/general/independence-day-2026-pm-modi-invokes-sapta-dhara-vision-for-india-s-future-focusing-on-manufacturing-to-soft-power/ar-AA2a9Sc9
              - generic [ref=e213]:
                - img [ref=e214]
                - generic [ref=e215]: Breaking News
              - generic [ref=e216]: "Independence Day 2026: PM Modi invokes 'Sapta Dhara' vision for India's future focusing on manufacturing to soft power"
            - generic "Cancel" [ref=e217] [cursor=pointer]:
              - button "Cancel" [ref=e218]:
                - generic:
                  - generic:
                    - img
        - main [ref=e220]:
          - generic [ref=e223]:
            - generic [ref=e224]:
              - generic [ref=e227]:
                - tablist [ref=e229]:
                  - tab "News story" [ref=e230] [cursor=pointer]
                  - tab "Sponsored" [ref=e232] [cursor=pointer]
                  - tab "News story" [ref=e234] [cursor=pointer]
                  - tab "News story" [ref=e236] [cursor=pointer]
                  - tab "News story" [ref=e238] [cursor=pointer]
                  - tab "Sponsored" [selected] [ref=e240] [cursor=pointer]
                  - tab "News story" [ref=e242] [cursor=pointer]
                  - tab "News story" [ref=e244] [cursor=pointer]
                  - tab "Sponsored" [ref=e246] [cursor=pointer]
                  - tab "News story" [ref=e248] [cursor=pointer]
                  - tab "News story" [ref=e250] [cursor=pointer]
                  - tab "News story" [ref=e252] [cursor=pointer]
                  - tab "Sponsored" [ref=e254] [cursor=pointer]
                  - tab "News story" [ref=e256] [cursor=pointer]
                  - tab "News story" [ref=e258] [cursor=pointer]
                  - tab "News story" [ref=e260] [cursor=pointer]
                  - tab "News story" [ref=e262] [cursor=pointer]
                  - tab "News story" [ref=e264] [cursor=pointer]
                  - tab "Sponsored" [ref=e266] [cursor=pointer]
                  - tab "News story" [ref=e268] [cursor=pointer]
                  - tab "News story" [ref=e270] [cursor=pointer]
                  - tab "News story" [ref=e272] [cursor=pointer]
                  - tab "News story" [ref=e274] [cursor=pointer]
                  - tab "News story" [ref=e276] [cursor=pointer]
                  - tab "Sponsored" [ref=e278] [cursor=pointer]
                  - tab "News story" [ref=e280] [cursor=pointer]
                  - tab "News story" [ref=e282] [cursor=pointer]
                  - tab "News story" [ref=e284] [cursor=pointer]
                  - tab "Sponsored" [ref=e286] [cursor=pointer]
                  - tab "News story" [ref=e288] [cursor=pointer]
                  - tab "News story" [ref=e290] [cursor=pointer]
                - button [ref=e294]
                - button [ref=e297]
                - article "Over 35 Tools - Run All Your Jobs - We Make Switching Easy" [ref=e298] [cursor=pointer]:
                  - generic [ref=e300]:
                    - img [ref=e301]
                    - generic [ref=e302]:
                      - generic [ref=e303]:
                        - generic [ref=e306]: Contractor Foreman
                        - link "Over 35 Tools - Run All Your Jobs - We Make Switching Easy, Contractor Foreman" [ref=e307]:
                          - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=4b526c51-c707-4579-8d8f-f6d4eb01eb04&bdc=oa&bidId=1&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=8938f5c5-2f5a-4be8-8a80-21d238bd444d&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De84RHs6m-Q0rmGpgJhFs3fhTVUCUzJ7mFvlxT6I_dj1vnfvrA26VGnOrIxBG0CMf06jR_67ALogaeDOroyErIIRWkbBBNhnsPA3htnFJeSAbCVJ-Edx65iptLfHbQ6KztYOksKSiBwQIREYaYZd-zQdbbN0X031O0PCxZ3bUP6g_fFrV0xSshAm_Qsd78kW-1xPlkIC6jd4ZdNfojjHCJiNLInqw4%26u%3DaHR0cHMlM2ElMmYlMmZnZXQuY29udHJhY3RvcmZvcmVtYW4uY29tJTJmbHAtYmluZyUyZiUzZnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX21lZGl1bSUzZGNwYyUyNmhfY2FtcGFpZ25faWQlM2Q1MjQ1MTcwOTUlMjZibmdfaWQlM2QxMzE2MTE4Mzg5MjQwNzM5JTI2aF9hZF9pZCUzZDgyMjU3NjUwOTE3MzYzJTI2bXNjbGtpZCUzZDQ2NTU5ODZjZjBmMDFiYTJmMjI1ZjIxMzE2N2VlNjE4JTI2dXRtX2NhbXBhaWduJTNkSU1fU2VhcmNoX0dlbmVyaWNzX01heCUyNTIwQ29udiUyNnV0bV90ZXJtJTNkY29uc3RydWN0aW9uJTI1MjBtYW5hZ2VtZW50JTI1MjBzb2Z0d2FyZSUyNnV0bV9jb250ZW50JTNkQ29yZSUyNTIwTWFuYWdlbWVudCUyNTIwU29mdHdhcmU%26rlid%3D4655986cf0f01ba2f225f213167ee618&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=qrny_sybbe_cerfreirq
                          - text: Over 35 Tools - Run All Your Jobs - We Make Switching Easy
                      - link "Sponsored" [ref=e309]:
                        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=4b526c51-c707-4579-8d8f-f6d4eb01eb04&bdc=oa&bidId=1&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=8938f5c5-2f5a-4be8-8a80-21d238bd444d&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De84RHs6m-Q0rmGpgJhFs3fhTVUCUzJ7mFvlxT6I_dj1vnfvrA26VGnOrIxBG0CMf06jR_67ALogaeDOroyErIIRWkbBBNhnsPA3htnFJeSAbCVJ-Edx65iptLfHbQ6KztYOksKSiBwQIREYaYZd-zQdbbN0X031O0PCxZ3bUP6g_fFrV0xSshAm_Qsd78kW-1xPlkIC6jd4ZdNfojjHCJiNLInqw4%26u%3DaHR0cHMlM2ElMmYlMmZnZXQuY29udHJhY3RvcmZvcmVtYW4uY29tJTJmbHAtYmluZyUyZiUzZnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX21lZGl1bSUzZGNwYyUyNmhfY2FtcGFpZ25faWQlM2Q1MjQ1MTcwOTUlMjZibmdfaWQlM2QxMzE2MTE4Mzg5MjQwNzM5JTI2aF9hZF9pZCUzZDgyMjU3NjUwOTE3MzYzJTI2bXNjbGtpZCUzZDQ2NTU5ODZjZjBmMDFiYTJmMjI1ZjIxMzE2N2VlNjE4JTI2dXRtX2NhbXBhaWduJTNkSU1fU2VhcmNoX0dlbmVyaWNzX01heCUyNTIwQ29udiUyNnV0bV90ZXJtJTNkY29uc3RydWN0aW9uJTI1MjBtYW5hZ2VtZW50JTI1MjBzb2Z0d2FyZSUyNnV0bV9jb250ZW50JTNkQ29yZSUyNTIwTWFuYWdlbWVudCUyNTIwU29mdHdhcmU%26rlid%3D4655986cf0f01ba2f225f213167ee618&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=qrny_sybbe_cerfreirq
                    - button "See more" [ref=e311]:
                      - img [ref=e312]
              - article [ref=e313] [cursor=pointer]:
                - generic [ref=e318]:
                  - generic [ref=e320]:
                    - link "Top stories" [ref=e322]:
                      - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a7fe68da1f943a8bb83a873d1c11307&ocid=hpmsn
                      - heading "Top stories" [level=2] [ref=e323]
                    - button "More options" [ref=e325]
                  - list [ref=e328]:
                    - listitem [ref=e329]:
                      - 'link "Breaking The Economic Times 6m Independence Day 2026: PM Modi invokes ''Sapta Dhara'' vision for India''s future focusing on manufacturing to soft power" [ref=e330]':
                        - /url: https://www.msn.com/en-in/money/general/independence-day-2026-pm-modi-invokes-sapta-dhara-vision-for-india-s-future-focusing-on-manufacturing-to-soft-power/ar-AA2a9Sc9
                        - generic [ref=e331]:
                          - generic [ref=e332]:
                            - generic:
                              - generic [ref=e333]: Breaking
                              - img [ref=e334]
                            - generic [ref=e335]:
                              - generic: The Economic Times ·6m
                          - generic [ref=e336]: "Independence Day 2026: PM Modi invokes 'Sapta Dhara' vision for India's future focusing on manufacturing to soft power"
                    - listitem [ref=e337]:
                      - 'link "Press Trust of India now In 12 years, India transformed from ''Fragile 5'' to world''s fastest-growing major economy: Modi" [ref=e338]':
                        - /url: https://www.msn.com/en-in/news/other/in-12-years-india-transformed-from-fragile-5-to-world-s-fastest-growing-major-economy-modi/ar-AA2a9WVR
                        - generic [ref=e339]:
                          - generic [ref=e340]:
                            - img [ref=e341]
                            - generic [ref=e342]:
                              - generic: Press Trust of India ·now
                          - generic [ref=e343]: "In 12 years, India transformed from 'Fragile 5' to world's fastest-growing major economy: Modi"
                    - listitem [ref=e344]:
                      - 'link "WION now Indonesia earthquake: 7.7 magnitude quake triggers tsunami warning, Flores residents told to flee" [ref=e345]':
                        - /url: https://www.msn.com/en-in/weather/general/indonesia-earthquake-7-7-magnitude-quake-triggers-tsunami-warning-flores-residents-told-to-flee/ar-AA2a9i0Q
                        - generic [ref=e346]:
                          - generic [ref=e347]:
                            - img [ref=e348]
                            - generic [ref=e349]:
                              - generic: WION ·now
                          - generic [ref=e350]: "Indonesia earthquake: 7.7 magnitude quake triggers tsunami warning, Flores residents told to flee"
                  - generic [ref=e352]:
                    - generic [ref=e353]:
                      - generic "Previous" [ref=e354]:
                        - button "Previous" [ref=e355]
                      - tablist [ref=e357]:
                        - tab "tab-0" [selected] [ref=e358]
                        - tab "tab-1" [ref=e360]
                        - tab "tab-2" [ref=e362]
                      - generic "Next" [ref=e364]:
                        - button "Next" [ref=e365]
                    - link "See more" [ref=e367]:
                      - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a7fe68da1f943a8bb83a873d1c11307&ocid=hpmsn
              - article [ref=e368] [cursor=pointer]:
                - generic [ref=e372]:
                  - generic: Sponsored
              - article "Forbes 2026 GLP-Ranking Reveals a Clear Winner" [ref=e373] [cursor=pointer]:
                - generic [ref=e375]:
                  - img [ref=e376]
                  - generic [ref=e377]:
                    - generic [ref=e378]:
                      - generic [ref=e381]: Forbes
                      - link "Forbes 2026 GLP-Ranking Reveals a Clear Winner, Forbes" [ref=e382]:
                        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=8450d281-979a-4462-83e8-6e72a69e2ae7&bdc=oa&bidId=2&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=8938f5c5-2f5a-4be8-8a80-21d238bd444d&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8CgSgQ7q_McB-urnpdgPt_zVUCUzCV19HknzYXRzLHsKXz_R2e1IUK5UhyPfAq-_LYNKm2H2GJIjWr0oahdu0JRiXR6l0AQwgmOYYXhTRChliv6T9EPLL19w2BnSqQfayYEGXm4PSIUnPdh9bYn0raWoRzAgNhW3Na-gcDXS76Gi3auTql3h1oFrpARTIiiJVgRt27jpF7NTM3WnYUbyOD0OXZZo%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZm9yYmVzLmNvbSUyZmhlYWx0aCUyZmwlMmZiZXN0LWdscC0xLW1lZGljYXRpb25zLW5vb20tdjIlMmYlM2ZjaGVjayUzZGIlMjZ1dG1fc291cmNlJTNkTVNBTiUyNnV0bV9jYW1wYWlnbiUzZDY4OTAwNDkxNyUyNmFjY291bnRpZCUzZDE1MDUwNDQzOCUyNnV0bV9jb250ZW50JTNkMTMyNDkxNDQ0OTg5NTYyNyUyNnV0bV90ZXJtJTNka3dkLTIzMzQ2MDY3ODQ1NDE5NDAlM2Fsb2MtMTkwJTI2bmV0d29yayUzZG1zbiUyNnBsYWNlbWVudCUzZGt3ZC0yMzM0NjA2Nzg0NTQxOTQwJTNhbG9jLTE5MCUyNmNyZWF0aXZlJTNkODI4MDc0MDQwMDkxOTYlMjZ1dG1fbWVkaXVtJTNkcGFpZF9uYXRpdmUlMjZlY29tX2NyZWF0aXZlJTNkODI4MDc0MDQwMDkxOTYlMjZlY29tX2NyZWF0aXZlJTNkODI4MDc0MDQwMDkxOTYlMjZlY29tX2lkJTNkNjg5MDA0OTE3JTI2ZWNvbV9wbGFjZW1lbnQlM2Rrd2QtMjMzNDYwNjc4NDU0MTk0MCUzYWxvYy0xOTAlMjZtc2Nsa2lkJTNkOTk1M2E4ZjJmZDJjMWIzZjA0Y2NjMjhkMWJhMjQ1M2YlMjZ1dG1fc291cmNlJTNkYmluZw%26rlid%3D9953a8f2fd2c1b3f04ccc28d1ba2453f&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=qrny_sybbe_cerfreirq
                        - text: Forbes 2026 GLP-Ranking Reveals a Clear Winner
                    - link "Sponsored" [ref=e384]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=8450d281-979a-4462-83e8-6e72a69e2ae7&bdc=oa&bidId=2&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=8938f5c5-2f5a-4be8-8a80-21d238bd444d&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8CgSgQ7q_McB-urnpdgPt_zVUCUzCV19HknzYXRzLHsKXz_R2e1IUK5UhyPfAq-_LYNKm2H2GJIjWr0oahdu0JRiXR6l0AQwgmOYYXhTRChliv6T9EPLL19w2BnSqQfayYEGXm4PSIUnPdh9bYn0raWoRzAgNhW3Na-gcDXS76Gi3auTql3h1oFrpARTIiiJVgRt27jpF7NTM3WnYUbyOD0OXZZo%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZm9yYmVzLmNvbSUyZmhlYWx0aCUyZmwlMmZiZXN0LWdscC0xLW1lZGljYXRpb25zLW5vb20tdjIlMmYlM2ZjaGVjayUzZGIlMjZ1dG1fc291cmNlJTNkTVNBTiUyNnV0bV9jYW1wYWlnbiUzZDY4OTAwNDkxNyUyNmFjY291bnRpZCUzZDE1MDUwNDQzOCUyNnV0bV9jb250ZW50JTNkMTMyNDkxNDQ0OTg5NTYyNyUyNnV0bV90ZXJtJTNka3dkLTIzMzQ2MDY3ODQ1NDE5NDAlM2Fsb2MtMTkwJTI2bmV0d29yayUzZG1zbiUyNnBsYWNlbWVudCUzZGt3ZC0yMzM0NjA2Nzg0NTQxOTQwJTNhbG9jLTE5MCUyNmNyZWF0aXZlJTNkODI4MDc0MDQwMDkxOTYlMjZ1dG1fbWVkaXVtJTNkcGFpZF9uYXRpdmUlMjZlY29tX2NyZWF0aXZlJTNkODI4MDc0MDQwMDkxOTYlMjZlY29tX2NyZWF0aXZlJTNkODI4MDc0MDQwMDkxOTYlMjZlY29tX2lkJTNkNjg5MDA0OTE3JTI2ZWNvbV9wbGFjZW1lbnQlM2Rrd2QtMjMzNDYwNjc4NDU0MTk0MCUzYWxvYy0xOTAlMjZtc2Nsa2lkJTNkOTk1M2E4ZjJmZDJjMWIzZjA0Y2NjMjhkMWJhMjQ1M2YlMjZ1dG1fc291cmNlJTNkYmluZw%26rlid%3D9953a8f2fd2c1b3f04ccc28d1ba2453f&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=qrny_sybbe_cerfreirq
                  - button "See more" [ref=e386]:
                    - img [ref=e387]
              - article [ref=e388] [cursor=pointer]:
                - generic [ref=e394]:
                  - generic [ref=e396]:
                    - img "Watchlist suggestions" [ref=e398]
                    - link "Watchlist suggestions" [ref=e399]:
                      - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                      - heading "Watchlist suggestions" [level=2] [ref=e400]
                    - button "More options" [ref=e402]
                  - generic [ref=e407]:
                    - link "24K Gold (10 Grams) - Indian Rupee XAUINR ‎+0.69%‎ 144496" [ref=e409]:
                      - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&ocid=hpmsn
                      - generic [ref=e410]:
                        - generic [ref=e412]: 24K Gold (10 Grams) - Indian Rupee
                        - generic [ref=e414]: XAUINR
                      - generic [ref=e419]:
                        - generic [ref=e420]: ‎+0.69%‎
                        - generic [ref=e421]: "144496"
                      - button "Add to watchlist" [ref=e424]:
                        - img [ref=e425]
                    - link "Yes Bank Limited YESBANK ‎-1.35%‎ 22.67" [ref=e429]:
                      - /url: https://www.msn.com/en-in/money/watchlist?id=ahkpar&ocid=hpmsn
                      - generic [ref=e430]:
                        - generic [ref=e432]: Yes Bank Limited
                        - generic [ref=e434]: YESBANK
                      - generic [ref=e439]:
                        - generic [ref=e440]: ‎-1.35%‎
                        - generic [ref=e441]: "22.67"
                      - button "Add to watchlist" [ref=e444]:
                        - img [ref=e445]
                    - link "AT&T Inc T ‎+1.26%‎ 24.89" [ref=e449]:
                      - /url: https://www.msn.com/en-in/money/watchlist?id=a23www&ocid=hpmsn
                      - generic [ref=e450]:
                        - generic [ref=e452]: AT&T Inc
                        - generic [ref=e454]: T
                      - generic [ref=e459]:
                        - generic [ref=e460]: ‎+1.26%‎
                        - generic [ref=e461]: "24.89"
                      - button "Add to watchlist" [ref=e464]:
                        - img [ref=e465]
                    - link "Vodafone Idea Ltd IDEA ‎+4.44%‎ 14.11" [ref=e469]:
                      - /url: https://www.msn.com/en-in/money/watchlist?id=ahi8u2&ocid=hpmsn
                      - generic [ref=e470]:
                        - generic [ref=e472]: Vodafone Idea Ltd
                        - generic [ref=e474]: IDEA
                      - generic [ref=e479]:
                        - generic [ref=e480]: ‎+4.44%‎
                        - generic [ref=e481]: "14.11"
                      - button "Add to watchlist" [ref=e484]:
                        - img [ref=e485]
                    - link "Tata Motors Passenger Vehicles Ltd TMPV ‎-4.32%‎ 334.50" [ref=e489]:
                      - /url: https://www.msn.com/en-in/money/watchlist?id=ahk9xm&ocid=hpmsn
                      - generic [ref=e490]:
                        - generic [ref=e492]: Tata Motors Passenger Vehicles Ltd
                        - generic [ref=e494]: TMPV
                      - generic [ref=e499]:
                        - generic [ref=e500]: ‎-4.32%‎
                        - generic [ref=e501]: "334.50"
                      - button "Add to watchlist" [ref=e504]:
                        - img [ref=e505]
                  - generic [ref=e509]:
                    - generic [ref=e510]:
                      - generic "Previous" [ref=e511]:
                        - button "Previous" [ref=e512]
                      - tablist [ref=e514]:
                        - tab "tab-0" [selected] [ref=e515]
                        - tab "tab-1" [ref=e517]
                        - tab "tab-2" [ref=e519]
                        - tab "tab-3" [ref=e521]
                        - tab "tab-4" [ref=e523]
                        - tab "tab-5"
                        - tab "tab-6"
                      - generic "Next" [ref=e525]:
                        - button "Next" [ref=e526]
                    - link "See watchlist suggestions" [ref=e528]:
                      - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
              - 'article "Aditya Dhar asked him not to cross the line: Dhurandhar 2 actor Suvinder Pal Vicky reveals why" [ref=e529] [cursor=pointer]':
                - generic [ref=e531]:
                  - img [ref=e532]
                  - generic [ref=e533]:
                    - generic [ref=e534]:
                      - generic [ref=e535]:
                        - generic [ref=e536]:
                          - img [ref=e537]
                          - generic [ref=e538]: Live Mint
                        - generic [ref=e539]: ·
                        - generic [ref=e540]: 1d
                      - 'link "Aditya Dhar asked him not to cross the line: Dhurandhar 2 actor Suvinder Pal Vicky reveals why, Live Mint" [ref=e541]':
                        - /url: https://www.msn.com/en-in/entertainment/movies/aditya-dhar-asked-him-not-to-cross-the-line-dhurandhar-2-actor-suvinder-pal-vicky-reveals-why/ar-AA2a0K25
                        - text: "Aditya Dhar asked him not to cross the line: Dhurandhar 2 actor Suvinder Pal Vicky reveals why"
                    - 'generic "Aditya Dhar asked him not to cross the line: Dhurandhar 2 actor Suvinder Pal Vicky reveals why" [ref=e544]':
                      - generic [ref=e546]:
                        - generic [ref=e547]:
                          - button "71 Likes" [ref=e548]:
                            - generic [ref=e549]:
                              - img [ref=e550]
                              - generic [ref=e552]: "71"
                          - button "57 Dislikes" [ref=e553]:
                            - img [ref=e555]
                        - link "Start the conversation" [ref=e558]:
                          - /url: https://www.msn.com/en-in/entertainment/movies/aditya-dhar-asked-him-not-to-cross-the-line-dhurandhar-2-actor-suvinder-pal-vicky-reveals-why/ar-AA2a0K25#comments
                          - button "Start the conversation" [ref=e559]:
                            - img [ref=e560]
                  - generic [ref=e562]:
                    - button "Hide this story" [ref=e563]:
                      - img [ref=e564]
                      - text: Hide this story
                    - button "See more" [ref=e565]:
                      - img [ref=e566]
              - article "Diagnose the cost of Excel Hell" [ref=e567] [cursor=pointer]:
                - generic [ref=e569]:
                  - img [ref=e570]
                  - generic [ref=e571]:
                    - generic [ref=e572]:
                      - generic [ref=e575]: Multishoring
                      - link "Diagnose the cost of Excel Hell, Multishoring" [ref=e576]:
                        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=68afe3d9-a717-4ce0-839e-91210546929f&bdc=oa&bidId=3&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=8938f5c5-2f5a-4be8-8a80-21d238bd444d&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8v1MepZxBShuF7P1xRWg_kzVUCUxflVOKRYjhqDI-yDDxj5s4eIG2WBFj-FGpkDWRnGajaDcCzJUFNuqOpDgfcRJN7JIpEKt27_xFK6-JxtgjRcExHrVTGSBdX_juhXK2KnSkGiWGHeCCE1a26rJU-EzUmFYqDtyxRmagjI0msDA3bG50F26QRI4IJsuRoMRAhyMTm6hf05aBJ1o1lFQo_SohPX0%26u%3DaHR0cHMlM2ElMmYlMmZtdWx0aXNob3JpbmcuY29tJTJmd2hpdGVwYXBlcnMlMmZjaGFvcy10by1jYXNoLWZsb3ctdGhlLWJpLXJvaS13aGl0ZXBhcGVyJTNmbXNjbGtpZCUzZDZhY2JhMzA0MWIxYTEyZjFkOGE4Yzk3YmZkOTQ0ZDE0JTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkUkVNJTI2dXRtX3Rlcm0lM2RrZXl3b3JkJTI2dXRtX2NvbnRlbnQlM2RSRU1fQWxs%26rlid%3D6acba3041b1a12f1d8a8c97bfd944d14&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=qrny_sybbe_cerfreirq
                        - text: Diagnose the cost of Excel Hell
                    - link "Sponsored" [ref=e578]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=68afe3d9-a717-4ce0-839e-91210546929f&bdc=oa&bidId=3&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=8938f5c5-2f5a-4be8-8a80-21d238bd444d&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8v1MepZxBShuF7P1xRWg_kzVUCUxflVOKRYjhqDI-yDDxj5s4eIG2WBFj-FGpkDWRnGajaDcCzJUFNuqOpDgfcRJN7JIpEKt27_xFK6-JxtgjRcExHrVTGSBdX_juhXK2KnSkGiWGHeCCE1a26rJU-EzUmFYqDtyxRmagjI0msDA3bG50F26QRI4IJsuRoMRAhyMTm6hf05aBJ1o1lFQo_SohPX0%26u%3DaHR0cHMlM2ElMmYlMmZtdWx0aXNob3JpbmcuY29tJTJmd2hpdGVwYXBlcnMlMmZjaGFvcy10by1jYXNoLWZsb3ctdGhlLWJpLXJvaS13aGl0ZXBhcGVyJTNmbXNjbGtpZCUzZDZhY2JhMzA0MWIxYTEyZjFkOGE4Yzk3YmZkOTQ0ZDE0JTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkUkVNJTI2dXRtX3Rlcm0lM2RrZXl3b3JkJTI2dXRtX2NvbnRlbnQlM2RSRU1fQWxs%26rlid%3D6acba3041b1a12f1d8a8c97bfd944d14&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=qrny_sybbe_cerfreirq
                  - button "See more" [ref=e580]:
                    - img [ref=e581]
              - article "3,000 cops deployed as protest call puts city on alert" [ref=e582] [cursor=pointer]:
                - generic [ref=e584]:
                  - img [ref=e585]
                  - generic [ref=e586]:
                    - generic [ref=e587]:
                      - generic [ref=e588]:
                        - generic [ref=e589]:
                          - img [ref=e590]
                          - generic [ref=e591]: The Times of India
                        - generic [ref=e592]: ·
                        - generic [ref=e593]: 10h
                      - link "3,000 cops deployed as protest call puts city on alert, The Times of India" [ref=e594]:
                        - /url: https://www.msn.com/en-in/news/other/3-000-cops-deployed-as-protest-call-puts-city-on-alert/ar-AA2a89Ig
                        - text: 3,000 cops deployed as protest call puts city on alert
                    - generic "3,000 cops deployed as protest call puts city on alert" [ref=e597]:
                      - generic [ref=e599]:
                        - generic [ref=e600]:
                          - button "2 Likes" [ref=e601]:
                            - generic [ref=e602]:
                              - img [ref=e603]
                              - generic [ref=e605]: "2"
                          - button "Dislike" [ref=e606]:
                            - img [ref=e608]
                        - link "Start the conversation" [ref=e611]:
                          - /url: https://www.msn.com/en-in/news/other/3-000-cops-deployed-as-protest-call-puts-city-on-alert/ar-AA2a89Ig#comments
                          - button "Start the conversation" [ref=e612]:
                            - img [ref=e613]
                  - generic [ref=e615]:
                    - button "Hide this story" [ref=e616]:
                      - img [ref=e617]
                      - text: Hide this story
                    - button "See more" [ref=e618]:
                      - img [ref=e619]
              - 'article "Independence Day celebrations 2026: First visuals from Red Fort, PM Modi soon to reach | News18" [ref=e620] [cursor=pointer]':
                - generic [ref=e622]:
                  - generic [ref=e628]:
                    - generic [ref=e629]:
                      - generic [ref=e630]:
                        - generic [ref=e631]:
                          - img [ref=e632]
                          - generic [ref=e633]: News18
                        - generic [ref=e634]: ·
                        - generic [ref=e635]: 7h
                      - 'link "Independence Day celebrations 2026: First visuals from Red Fort, PM Modi soon to reach | News18, News18" [ref=e636]':
                        - /url: https://www.msn.com/en-in/news/other/independence-day-celebrations-2026-first-visuals-from-red-fort-pm-modi-soon-to-reach-news18/vi-AA2a9qc6
                        - text: "Independence Day celebrations 2026: First visuals from Red Fort, PM Modi soon to reach | News18"
                    - 'generic "Independence Day celebrations 2026: First visuals from Red Fort, PM Modi soon to reach | News18" [ref=e639]':
                      - generic [ref=e641]:
                        - generic [ref=e642]:
                          - button "Like" [ref=e643]:
                            - img [ref=e645]
                          - button "Dislike" [ref=e647]:
                            - img [ref=e649]
                        - link "Start the conversation" [ref=e652]:
                          - /url: https://www.msn.com/en-in/news/other/independence-day-celebrations-2026-first-visuals-from-red-fort-pm-modi-soon-to-reach-news18/vi-AA2a9qc6#comments
                          - button "Start the conversation" [ref=e653]:
                            - img [ref=e654]
                  - generic [ref=e656]:
                    - button "Hide this story" [ref=e657]:
                      - img [ref=e658]
                      - text: Hide this story
                    - button "See more" [ref=e659]:
                      - img [ref=e660]
            - generic [ref=e661]:
              - article [ref=e662] [cursor=pointer]:
                - generic [ref=e667]:
                  - generic [ref=e669]:
                    - link "Top Engaging News" [ref=e671]:
                      - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a7fe68da1f943a8bb83a873d1c11307
                      - heading "Top Engaging News" [level=2] [ref=e672]
                    - button "More options" [ref=e674]
                  - generic [ref=e676]:
                    - link "Times Now 4 Comments Vaibhav Sooryavanshi named vice-captain, set to be Ishan Kishan's deputy; Mohammed Shami selected" [ref=e678]:
                      - /url: https://www.msn.com/en-in/sports/general/vaibhav-sooryavanshi-named-vice-captain-set-to-be-ishan-kishan-s-deputy-mohammed-shami-selected/ar-AA28Z0EY
                      - generic [ref=e679]:
                        - img [ref=e680]
                        - generic [ref=e681]: Times Now
                        - link "4 Comments" [ref=e683]:
                          - /url: https://www.msn.com/en-in/sports/general/vaibhav-sooryavanshi-named-vice-captain-set-to-be-ishan-kishan-s-deputy-mohammed-shami-selected/ar-AA28Z0EY#comments
                          - img [ref=e684]
                          - paragraph [ref=e685]: "4"
                      - paragraph [ref=e686]: Vaibhav Sooryavanshi named vice-captain, set to be Ishan Kishan's deputy; Mohammed Shami selected
                    - link "Times Now 4 Comments AB de Villiers reveals why Rishabh Pant's India call came as a shock" [ref=e688]:
                      - /url: https://www.msn.com/en-in/sports/cricket/ab-de-villiers-reveals-why-rishabh-pant-s-india-call-came-as-a-shock/ar-AA28ZpEm
                      - generic [ref=e689]:
                        - img [ref=e690]
                        - generic [ref=e691]: Times Now
                        - link "4 Comments" [ref=e693]:
                          - /url: https://www.msn.com/en-in/sports/cricket/ab-de-villiers-reveals-why-rishabh-pant-s-india-call-came-as-a-shock/ar-AA28ZpEm#comments
                          - img [ref=e694]
                          - paragraph [ref=e695]: "4"
                      - paragraph [ref=e696]: AB de Villiers reveals why Rishabh Pant's India call came as a shock
                    - 'link "India Today 6 Comments Goal is safe food, safe drugs, safe Maharashtra: FDA Commissioner Tukaram Munde" [ref=e698]':
                      - /url: https://www.msn.com/en-in/health/general/goal-is-safe-food-safe-drugs-safe-maharashtra-fda-commissioner-tukaram-munde/vi-AA28ZIpf
                      - generic [ref=e699]:
                        - img [ref=e700]
                        - generic [ref=e701]: India Today
                        - link "6 Comments" [ref=e703]:
                          - /url: https://www.msn.com/en-in/health/general/goal-is-safe-food-safe-drugs-safe-maharashtra-fda-commissioner-tukaram-munde/vi-AA28ZIpf#comments
                          - img [ref=e704]
                          - paragraph [ref=e705]: "6"
                      - paragraph [ref=e706]: "Goal is safe food, safe drugs, safe Maharashtra: FDA Commissioner Tukaram Munde"
                  - generic [ref=e708]:
                    - generic [ref=e709]:
                      - generic "Previous" [ref=e710]:
                        - button "Previous" [ref=e711]
                      - tablist [ref=e713]:
                        - tab "tab-0" [selected] [ref=e714]
                        - tab "tab-1" [ref=e716]
                        - tab "tab-2" [ref=e718]
                      - generic "Next" [ref=e720]:
                        - button "Next" [ref=e721]
                    - link "See more" [ref=e723]:
                      - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a7fe68da1f943a8bb83a873d1c11307
              - article [ref=e724] [cursor=pointer]:
                - generic [ref=e730]:
                  - generic [ref=e732]:
                    - link "Chicago" [ref=e734]:
                      - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois
                      - heading "Chicago" [level=2] [ref=e735]
                    - button "My location" [ref=e736]
                    - button "More options" [ref=e738]
                  - generic [ref=e742]:
                    - generic [ref=e743]:
                      - generic [ref=e745]:
                        - link "Cloudy" [ref=e746]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois
                          - img "Cloudy" [ref=e747]
                        - link "24°C" [ref=e748]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois
                          - generic [ref=e749]: ‎24‎
                          - generic [ref=e751]: ‎°C‎
                      - generic [ref=e753]:
                        - link "Areal Flood - WatchAreal flood watch" [ref=e755]:
                          - /url: https://www.msn.com/en-in/weather/maps/severeweather/in-Chicago,Illinois
                          - img "Areal Flood - Watch" [ref=e757]
                          - text: Areal flood watch
                        - link "See full forecast" [ref=e758]:
                          - /url: https://www.msn.com/en-in/weather/maps/severeweather/in-Chicago,Illinois
                          - img "arrow" [ref=e759]
                    - generic [ref=e764]:
                      - link "Larger map" [ref=e765]:
                        - /url: ""
                        - img
                        - generic [ref=e766]:
                          - generic:
                            - generic:
                              - img
                              - img
                              - img
                              - img
                      - link "Check more alert details" [ref=e767]:
                        - /url: ""
                        - generic "Check more alert details" [ref=e768]
                        - img [ref=e770]
                      - link "Click to see more information" [ref=e771]:
                        - /url: ""
                        - img [ref=e772]
                  - button "See full forecast" [ref=e775]
              - article "A 66-foot asteroid exploded over Russia and injured 1,500 people" [ref=e776] [cursor=pointer]:
                - generic [ref=e778]:
                  - generic [ref=e782]:
                    - generic [ref=e783]:
                      - generic [ref=e784]:
                        - generic [ref=e785]:
                          - img [ref=e786]
                          - generic [ref=e787]: Veritasium
                        - generic [ref=e788]: ·
                        - generic [ref=e789]: 1w
                      - link "A 66-foot asteroid exploded over Russia and injured 1,500 people, Veritasium" [ref=e790]:
                        - /url: https://www.msn.com/en-in/news/other/a-66-foot-asteroid-exploded-over-russia-and-injured-1-500-people/vi-AA24DHfV
                        - text: A 66-foot asteroid exploded over Russia and injured 1,500 people
                    - generic "A 66-foot asteroid exploded over Russia and injured 1,500 people" [ref=e793]:
                      - generic [ref=e795]:
                        - generic [ref=e796]:
                          - button "146 Likes" [ref=e797]:
                            - generic [ref=e798]:
                              - img [ref=e799]
                              - generic [ref=e801]: "146"
                          - button "40 Dislikes" [ref=e802]:
                            - img [ref=e804]
                        - link "View comments 3 Comment" [ref=e807]:
                          - /url: https://www.msn.com/en-in/news/other/a-66-foot-asteroid-exploded-over-russia-and-injured-1-500-people/vi-AA24DHfV#comments
                          - button "View comments 3 Comment" [ref=e808]:
                            - img [ref=e809]
                          - generic [ref=e811]: "3"
                  - generic [ref=e812]:
                    - button "Hide this story" [ref=e813]:
                      - img [ref=e814]
                      - text: Hide this story
                    - button "See more" [ref=e815]:
                      - img [ref=e816]
              - 'article "India, Israel and more: Full list of countries US named in ''shadow transhipment network'' helping China evade tariffs" [ref=e817] [cursor=pointer]':
                - generic [ref=e819]:
                  - img [ref=e820]
                  - generic [ref=e821]:
                    - generic [ref=e822]:
                      - generic [ref=e823]:
                        - generic [ref=e824]:
                          - img [ref=e825]
                          - generic [ref=e826]: Hindustan Times
                        - generic [ref=e827]: ·
                        - generic [ref=e828]: 22h
                      - 'link "India, Israel and more: Full list of countries US named in ''shadow transhipment network'' helping China evade tariffs, Hindustan Times" [ref=e829]':
                        - /url: https://www.msn.com/en-in/money/economy/india-israel-and-more-full-list-of-countries-us-named-in-shadow-transhipment-network-helping-china-evade-tariffs/ar-AA2a55Jh
                        - text: "India, Israel and more: Full list of countries US named in 'shadow transhipment network' helping China evade tariffs"
                    - 'generic "India, Israel and more: Full list of countries US named in ''shadow transhipment network'' helping China evade tariffs" [ref=e832]':
                      - generic [ref=e834]:
                        - generic [ref=e835]:
                          - button "6 Likes" [ref=e836]:
                            - generic [ref=e837]:
                              - img [ref=e838]
                              - generic [ref=e840]: "6"
                          - button "3 Dislikes" [ref=e841]:
                            - img [ref=e843]
                        - link "Start the conversation" [ref=e846]:
                          - /url: https://www.msn.com/en-in/money/economy/india-israel-and-more-full-list-of-countries-us-named-in-shadow-transhipment-network-helping-china-evade-tariffs/ar-AA2a55Jh#comments
                          - button "Start the conversation" [ref=e847]:
                            - img [ref=e848]
                  - generic [ref=e850]:
                    - button "Hide this story" [ref=e851]:
                      - img [ref=e852]
                      - text: Hide this story
                    - button "See more" [ref=e853]:
                      - img [ref=e854]
              - article [ref=e855] [cursor=pointer]
              - 'article "Placing newspaper under car floor mats: Why more people are doing it and its benefits" [ref=e862] [cursor=pointer]':
                - generic [ref=e864]:
                  - img [ref=e865]
                  - generic [ref=e866]:
                    - generic [ref=e867]:
                      - generic [ref=e868]:
                        - generic [ref=e869]:
                          - img [ref=e870]
                          - generic [ref=e871]: The Economic Times
                        - generic [ref=e872]: ·
                        - generic [ref=e873]: 2w
                      - 'link "Placing newspaper under car floor mats: Why more people are doing it and its benefits, The Economic Times" [ref=e874]':
                        - /url: https://www.msn.com/en-in/lifestyle/other/placing-newspaper-under-car-floor-mats-why-more-people-are-doing-it-and-its-benefits/ss-AA298mYO
                        - text: "Placing newspaper under car floor mats: Why more people are doing it and its benefits"
                    - 'generic "Placing newspaper under car floor mats: Why more people are doing it and its benefits" [ref=e877]':
                      - generic [ref=e879]:
                        - generic [ref=e880]:
                          - button "55 Likes" [ref=e881]:
                            - generic [ref=e882]:
                              - img [ref=e883]
                              - generic [ref=e885]: "55"
                          - button "31 Dislikes" [ref=e886]:
                            - img [ref=e888]
                        - link "Start the conversation" [ref=e891]:
                          - /url: https://www.msn.com/en-in/lifestyle/other/placing-newspaper-under-car-floor-mats-why-more-people-are-doing-it-and-its-benefits/ss-AA298mYO#comments
                          - button "Start the conversation" [ref=e892]:
                            - img [ref=e893]
                  - generic [ref=e895]:
                    - button "Hide this story" [ref=e896]:
                      - img [ref=e897]
                      - text: Hide this story
                    - button "See more" [ref=e898]:
                      - img [ref=e899]
              - article [ref=e900] [cursor=pointer]
              - article [ref=e907] [cursor=pointer]:
                - generic [ref=e912]:
                  - generic [ref=e914]:
                    - link "Games" [ref=e916]:
                      - /url: https://www.msn.com/en-in/play
                      - heading "Games" [level=2] [ref=e917]
                    - button "More options" [ref=e919]
                  - list [ref=e923]:
                    - generic:
                      - listitem [ref=e924]:
                        - link "Save The Pets" [ref=e925]:
                          - /url: https://www.msn.com/en-in/play/games/save-the-pets/cg-9p3610rr8qt5?ocid=hpmsn&cvid=6a7fe68da1f943a8bb83a873d1c11307&ei=9
                          - generic [ref=e926]:
                            - img "Save The Pets"
                      - listitem [ref=e927]:
                        - link "Jelly Run 2048" [ref=e928]:
                          - /url: https://www.msn.com/en-in/play/games/jelly-run-2048/cg-9nbckjw55fsv?ocid=hpmsn&cvid=6a7fe68da1f943a8bb83a873d1c11307&ei=9
                          - generic [ref=e929]:
                            - img "Jelly Run 2048"
                      - listitem [ref=e930]:
                        - link "Ghost Range Sniper" [ref=e931]:
                          - /url: https://www.msn.com/en-in/play/games/ghost-range-sniper/cg-9mv8gjg4grt6?ocid=hpmsn&cvid=6a7fe68da1f943a8bb83a873d1c11307&ei=9
                          - generic [ref=e932]:
                            - img "Ghost Range Sniper"
                      - listitem [ref=e933]:
                        - link "TapTap Arrow" [ref=e934]:
                          - /url: https://www.msn.com/en-in/play/games/taptap-arrow/cg-9ng0c12cnfsk?ocid=hpmsn&cvid=6a7fe68da1f943a8bb83a873d1c11307&ei=9
                          - generic [ref=e935]:
                            - img "TapTap Arrow"
                      - listitem [ref=e936]:
                        - link "Mergest Kingdom" [ref=e937]:
                          - /url: https://www.msn.com/en-in/play/games/mergest-kingdom/cg-9pc19rxfzl82?ocid=hpmsn&cvid=6a7fe68da1f943a8bb83a873d1c11307&ei=9
                          - generic [ref=e938]:
                            - img "Mergest Kingdom"
                      - listitem [ref=e939]:
                        - link "Rooftop Run" [ref=e940]:
                          - /url: https://www.msn.com/en-in/play/games/rooftop-run/cg-9plgt00f15xs?ocid=hpmsn&cvid=6a7fe68da1f943a8bb83a873d1c11307&ei=9
                          - generic [ref=e941]:
                            - img "Rooftop Run"
                      - listitem [ref=e942]:
                        - link "Space Waves" [ref=e943]:
                          - /url: https://www.msn.com/en-in/play/games/space-waves/cg-9nm5764dbppg?ocid=hpmsn&cvid=6a7fe68da1f943a8bb83a873d1c11307&ei=9
                          - generic [ref=e944]:
                            - img "Space Waves"
                      - listitem [ref=e945]:
                        - link "+1 Speed Escape Obby" [ref=e946]:
                          - /url: https://www.msn.com/en-in/play/games/1-speed-escape-obby/cg-9npnzjd1df3l?ocid=hpmsn&cvid=6a7fe68da1f943a8bb83a873d1c11307&ei=9
                          - generic [ref=e947]:
                            - img "+1 Speed Escape Obby"
                      - listitem [ref=e948]:
                        - link "Cars Merge" [ref=e949]:
                          - /url: https://www.msn.com/en-in/play/games/cars-merge/cg-9n022gfn8gsb?ocid=hpmsn&cvid=6a7fe68da1f943a8bb83a873d1c11307&ei=9
                          - generic [ref=e950]:
                            - img "Cars Merge"
                  - generic [ref=e952]:
                    - generic [ref=e953]:
                      - generic "Previous" [ref=e954]:
                        - button "Previous" [ref=e955]
                      - tablist [ref=e957]:
                        - tab "tab-0" [selected] [ref=e958]
                        - tab "tab-1" [ref=e960]
                      - generic "Next" [ref=e962]:
                        - button "Next" [ref=e963]
                    - link "Explore more games" [ref=e965]:
                      - /url: https://www.msn.com/en-in/play
            - article [ref=e967]
            - generic [ref=e969]:
              - article [ref=e970] [cursor=pointer]:
                - generic [ref=e975]:
                  - generic [ref=e976]:
                    - generic [ref=e977]:
                      - link "Recommended videos" [ref=e978]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                        - img [ref=e979]
                      - link "Recommended videos" [ref=e982]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                    - generic [ref=e983]:
                      - generic:
                        - link "See more" [ref=e984]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                        - generic "More options" [ref=e985]:
                          - button "More options" [ref=e986]:
                            - generic:
                              - generic:
                                - img
                  - tabpanel [ref=e988]:
                    - generic [ref=e990]:
                      - generic [ref=e992]:
                        - generic:
                          - article [ref=e995]:
                            - generic [ref=e996]:
                              - img "Disney adults are worldwide I guess" [ref=e998]
                              - generic [ref=e1000]: 03:04
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1001]:
                                - generic [ref=e1002]:
                                  - img "Megan and Ben" [ref=e1003]
                                  - generic "Megan and Ben" [ref=e1005]
                                - link "Why Disney adults are everywhere!" [ref=e1006]:
                                  - /url: https://www.msn.com/en-in/entertainment/general/why-disney-adults-are-everywhere/vi-AA25O9Hw?ocid=hpmsn
                                  - heading "Why Disney adults are everywhere!" [level=2] [ref=e1007]:
                                    - generic: Why Disney adults are everywhere!
                              - button "See more" [ref=e1011]
                          - article "He made the world’s largest donut and struggled to cook it evenly" [ref=e1014]:
                            - generic [ref=e1015]:
                              - img "He made the world’s largest donut and struggled to cook it evenly" [ref=e1017]
                              - generic [ref=e1019]: 06:40
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1020]:
                                - generic [ref=e1021]:
                                  - img "Nick DiGiovanni" [ref=e1022]
                                  - generic [ref=e1023]:
                                    - generic:
                                      - generic "Nick DiGiovanni" [ref=e1024]
                                      - generic [ref=e1025]: ·
                                      - generic [ref=e1026]: 2w
                                - link "He made the world’s largest donut and struggled to cook it evenly" [ref=e1027]:
                                  - /url: https://www.msn.com/en-in/food-and-drink/recipes/he-made-the-world-s-largest-donut-and-struggled-to-cook-it-evenly/vi-AA294hWG?ocid=hpmsn
                                  - heading "He made the world’s largest donut and struggled to cook it evenly" [level=2] [ref=e1028]:
                                    - generic: He made the world’s largest donut and struggled to cook it evenly
                              - button "See more" [ref=e1032]
                          - article "Watch what happens when a basketball is dropped from a 415-foot dam" [ref=e1035]:
                            - generic [ref=e1036]:
                              - img "Watch What Happens When A Basketball Is Dropped From A 415-Foot Dam" [ref=e1038]
                              - generic [ref=e1040]: 03:00
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1041]:
                                - generic [ref=e1042]:
                                  - img "Veritasium" [ref=e1043]
                                  - generic [ref=e1044]:
                                    - generic:
                                      - generic "Veritasium" [ref=e1045]
                                      - generic [ref=e1046]: ·
                                      - generic [ref=e1047]: 1w
                                - link "Watch what happens when a basketball is dropped from a 415-foot dam" [ref=e1048]:
                                  - /url: https://www.msn.com/en-in/sports/general/watch-what-happens-when-a-basketball-is-dropped-from-a-415-foot-dam/vi-AA1Yxi8v?ocid=hpmsn
                                  - heading "Watch what happens when a basketball is dropped from a 415-foot dam" [level=2] [ref=e1049]:
                                    - generic: Watch what happens when a basketball is dropped from a 415-foot dam
                              - button "See more" [ref=e1053]
                          - article "A 160-Foot Underground Tunnel Connects This $26 Million Estate" [ref=e1056]:
                            - generic [ref=e1057]:
                              - img "A 160-Foot Underground Tunnel Connects This $26 Million Estate" [ref=e1059]
                              - generic [ref=e1061]: 43:41
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1062]:
                                - generic [ref=e1063]:
                                  - img "HeavyDSparks" [ref=e1064]
                                  - generic [ref=e1065]:
                                    - generic:
                                      - generic "HeavyDSparks" [ref=e1066]
                                      - generic [ref=e1067]: ·
                                      - generic [ref=e1068]: 2w
                                - link "A 160-Foot Underground Tunnel Connects This $26 Million Estate" [ref=e1069]:
                                  - /url: https://www.msn.com/en-in/lifestyle/other/a-160-foot-underground-tunnel-connects-this-26-million-estate/vi-AA28h2bE?ocid=hpmsn
                                  - heading "A 160-Foot Underground Tunnel Connects This $26 Million Estate" [level=2] [ref=e1070]:
                                    - generic: A 160-Foot Underground Tunnel Connects This $26 Million Estate
                              - button "See more" [ref=e1074]
                          - article "They were sent to fix America’s government - then secretly replaced it" [ref=e1077]:
                            - generic [ref=e1078]:
                              - img "They Were Sent to Fix America’s Government - Then Secretly Replaced It" [ref=e1080]
                              - generic [ref=e1082]: 03:57
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1083]:
                                - generic [ref=e1084]:
                                  - img "TED" [ref=e1085]
                                  - generic [ref=e1086]:
                                    - generic:
                                      - generic "TED" [ref=e1087]
                                      - generic [ref=e1088]: ·
                                      - generic [ref=e1089]: 3w
                                - link "They were sent to fix America’s government - then secretly replaced it" [ref=e1090]:
                                  - /url: https://www.msn.com/en-in/news/other/they-were-sent-to-fix-america-s-government-then-secretly-replaced-it/vi-AA28ruFm?ocid=hpmsn
                                  - heading "They were sent to fix America’s government - then secretly replaced it" [level=2] [ref=e1091]:
                                    - generic: They were sent to fix America’s government - then secretly replaced it
                              - button "See more" [ref=e1095]
                          - article [ref=e1098]:
                            - generic [ref=e1099]:
                              - img "Buying 100 Online Scam Ads - Tracking What Actually Arrived" [ref=e1101]
                              - generic [ref=e1103]: 12:02
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1104]:
                                - generic [ref=e1105]:
                                  - img "Ryan Trahan" [ref=e1106]
                                  - generic [ref=e1107]:
                                    - generic:
                                      - generic "Ryan Trahan" [ref=e1108]
                                      - generic [ref=e1109]: ·
                                      - generic [ref=e1110]: 13h
                                - link "Buying 100 online scam ads - tracking what actually arrived" [ref=e1111]:
                                  - /url: https://www.msn.com/en-in/lifestyle/other/buying-100-online-scam-ads-tracking-what-actually-arrived/vi-AA1Wi84f?ocid=hpmsn
                                  - heading "Buying 100 online scam ads - tracking what actually arrived" [level=2] [ref=e1112]:
                                    - generic: Buying 100 online scam ads - tracking what actually arrived
                              - button "See more" [ref=e1116]
                          - article [ref=e1119]:
                            - generic [ref=e1120]:
                              - img "No One Had Ever Filmed This Cave Before - There’s a Reason Why" [ref=e1122]
                              - generic [ref=e1124]: 34:17
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1125]:
                                - generic [ref=e1126]:
                                  - img "Magnus Midtbø" [ref=e1127]
                                  - generic [ref=e1128]:
                                    - generic:
                                      - generic "Magnus Midtbø" [ref=e1129]
                                      - generic [ref=e1130]: ·
                                      - generic [ref=e1131]: 6h
                                - link "No one had ever filmed this cave before - there’s a reason why" [ref=e1132]:
                                  - /url: https://www.msn.com/en-in/travel/adventure-travel/no-one-had-ever-filmed-this-cave-before-there-s-a-reason-why/vi-AA26rnz6?ocid=hpmsn
                                  - heading "No one had ever filmed this cave before - there’s a reason why" [level=2] [ref=e1133]:
                                    - generic: No one had ever filmed this cave before - there’s a reason why
                              - button "See more" [ref=e1137]
                          - article [ref=e1140]:
                            - generic [ref=e1141]:
                              - img "Why I felt ugly in Asia" [ref=e1143]
                              - generic [ref=e1145]: 00:34
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1146]:
                                - generic [ref=e1147]:
                                  - img "Megan and Ben" [ref=e1148]
                                  - generic [ref=e1149]:
                                    - generic:
                                      - generic "Megan and Ben" [ref=e1150]
                                      - generic [ref=e1151]: ·
                                      - generic [ref=e1152]: 3w
                                - link "I never knew beauty standards could be this wild 🔍" [ref=e1153]:
                                  - /url: https://www.msn.com/en-in/news/other/i-never-knew-beauty-standards-could-be-this-wild/vi-AA2a3BtI?ocid=hpmsn
                                  - heading "I never knew beauty standards could be this wild 🔍" [level=2] [ref=e1154]:
                                    - generic: I never knew beauty standards could be this wild 🔍
                              - button "See more" [ref=e1158]
                          - article "A 66-foot asteroid exploded over Russia and injured 1,500 people" [ref=e1161]:
                            - generic [ref=e1162]:
                              - img "A 66-Foot Asteroid Exploded Over Russia And Injured 1,500 People" [ref=e1164]
                              - generic [ref=e1166]: 20:06
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1167]:
                                - generic [ref=e1168]:
                                  - img "Veritasium" [ref=e1169]
                                  - generic [ref=e1170]:
                                    - generic:
                                      - generic "Veritasium" [ref=e1171]
                                      - generic [ref=e1172]: ·
                                      - generic [ref=e1173]: 1w
                                - link "A 66-foot asteroid exploded over Russia and injured 1,500 people" [ref=e1174]:
                                  - /url: https://www.msn.com/en-in/news/other/a-66-foot-asteroid-exploded-over-russia-and-injured-1-500-people/vi-AA24DHfV?ocid=hpmsn
                                  - heading "A 66-foot asteroid exploded over Russia and injured 1,500 people" [level=2] [ref=e1175]:
                                    - generic: A 66-foot asteroid exploded over Russia and injured 1,500 people
                              - button "See more" [ref=e1179]
                          - article "He was stranded alone on this remote island - then had to fight to survive" [ref=e1182]:
                            - generic [ref=e1183]:
                              - img "He Was Stranded Alone on This Remote Island - Then Had to Fight to Survive" [ref=e1185]
                              - generic [ref=e1187]: 39:09
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1188]:
                                - generic [ref=e1189]:
                                  - img "Magnus Midtbø" [ref=e1190]
                                  - generic [ref=e1191]:
                                    - generic:
                                      - generic "Magnus Midtbø" [ref=e1192]
                                      - generic [ref=e1193]: ·
                                      - generic [ref=e1194]: 6h
                                - link "He was stranded alone on this remote island - then had to fight to survive" [ref=e1195]:
                                  - /url: https://www.msn.com/en-in/money/general/he-was-stranded-alone-on-this-remote-island-then-had-to-fight-to-survive/vi-AA25YktL?ocid=hpmsn
                                  - heading "He was stranded alone on this remote island - then had to fight to survive" [level=2] [ref=e1196]:
                                    - generic: He was stranded alone on this remote island - then had to fight to survive
                              - button "See more" [ref=e1200]
                          - article "He was climbing a tall building without equipment - then someone called the police" [ref=e1203]:
                            - generic [ref=e1204]:
                              - img "He Was Climbing a Tall Building Without Equipment - Then Someone Called the Police" [ref=e1206]
                              - generic [ref=e1208]: 16:56
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1209]:
                                - generic [ref=e1210]:
                                  - img "Magnus Midtbø" [ref=e1211]
                                  - generic [ref=e1212]:
                                    - generic:
                                      - generic "Magnus Midtbø" [ref=e1213]
                                      - generic [ref=e1214]: ·
                                      - generic [ref=e1215]: 6h
                                - link "He was climbing a tall building without equipment - then someone called the police" [ref=e1216]:
                                  - /url: https://www.msn.com/en-in/news/other/he-was-climbing-a-tall-building-without-equipment-then-someone-called-the-police/vi-AA29yecF?ocid=hpmsn
                                  - heading "He was climbing a tall building without equipment - then someone called the police" [level=2] [ref=e1217]:
                                    - generic: He was climbing a tall building without equipment - then someone called the police
                              - button "See more" [ref=e1221]
                          - article "British guys try Canadian snacks!🇨🇦 (Maple snacks everywhere?🍁)" [ref=e1224]:
                            - generic [ref=e1225]:
                              - img "British Guys Try CANADIAN SNACKS!! 🇨🇦 (Maple snacks everywhere!?! 🍁)" [ref=e1227]
                              - generic [ref=e1229]: 09:13
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1230]:
                                - generic [ref=e1231]:
                                  - img "JOLLY" [ref=e1232]
                                  - generic [ref=e1233]:
                                    - generic:
                                      - generic "JOLLY" [ref=e1234]
                                      - generic [ref=e1235]: ·
                                      - generic [ref=e1236]: 12h
                                - link "British guys try Canadian snacks!🇨🇦 (Maple snacks everywhere?🍁)" [ref=e1237]:
                                  - /url: https://www.msn.com/en-in/food-and-drink/world-cuisines/british-guys-try-canadian-snacks-maple-snacks-everywhere/vi-AA2a4t4w?ocid=hpmsn
                                  - heading "British guys try Canadian snacks!🇨🇦 (Maple snacks everywhere?🍁)" [level=2] [ref=e1238]:
                                    - generic: British guys try Canadian snacks!🇨🇦 (Maple snacks everywhere?🍁)
                              - button "See more" [ref=e1242]
                          - article "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [ref=e1245]:
                            - generic [ref=e1246]:
                              - img "Keke Palmer Was Supporting 5 People As A Teenager - Then She Finally Broke Down" [ref=e1248]
                              - generic [ref=e1250]: 12:56
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1251]:
                                - generic [ref=e1252]:
                                  - img "TED" [ref=e1253]
                                  - generic "TED" [ref=e1255]
                                - link "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [ref=e1256]:
                                  - /url: https://www.msn.com/en-in/entertainment/celebrities/keke-palmer-was-supporting-5-people-as-a-teenager-then-she-finally-broke-down/vi-AA240j91?ocid=hpmsn
                                  - heading "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [level=2] [ref=e1257]:
                                    - generic: Keke Palmer was supporting 5 people as a teenager - then she finally broke down
                              - button "See more" [ref=e1261]
                          - article [ref=e1264]:
                            - generic [ref=e1265]:
                              - img "I thought teaching meant more time off?" [ref=e1267]
                              - generic [ref=e1269]: 03:28
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1270]:
                                - generic [ref=e1271]:
                                  - img "Megan and Ben" [ref=e1272]
                                  - generic [ref=e1273]:
                                    - generic:
                                      - generic "Megan and Ben" [ref=e1274]
                                      - generic [ref=e1275]: ·
                                      - generic [ref=e1276]: 7h
                                - link "I thought teaching meant more time off?" [ref=e1277]:
                                  - /url: https://www.msn.com/en-in/money/general/i-thought-teaching-meant-more-time-off/vi-AA2a8KvN?ocid=hpmsn
                                  - heading "I thought teaching meant more time off?" [level=2] [ref=e1278]:
                                    - generic: I thought teaching meant more time off?
                              - button "See more" [ref=e1282]
                          - article "One kick, 35 meters, 11 defenders - then he scored one of football's greatest goals" [ref=e1285]:
                            - generic [ref=e1286]:
                              - img "One Kick, 35 Meters, 11 Defenders - Then He Scored One Of Football's Greatest Goals" [ref=e1288]
                              - generic [ref=e1290]: 03:32
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1291]:
                                - generic [ref=e1292]:
                                  - img "TED" [ref=e1293]
                                  - generic "TED" [ref=e1295]
                                - link "One kick, 35 meters, 11 defenders - then he scored one of football's greatest goals" [ref=e1296]:
                                  - /url: https://www.msn.com/en-in/sports/football/one-kick-35-meters-11-defenders-then-he-scored-one-of-football-s-greatest-goals/vi-AA25y8UW?ocid=hpmsn
                                  - heading "One kick, 35 meters, 11 defenders - then he scored one of football's greatest goals" [level=2] [ref=e1297]:
                                    - generic: One kick, 35 meters, 11 defenders - then he scored one of football's greatest goals
                              - button "See more" [ref=e1301]
                          - article [ref=e1304]:
                            - generic [ref=e1305]:
                              - img "Two Brits try Chicago Pizza for the first time!" [ref=e1307]
                              - generic [ref=e1309]: 11:20
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1310]:
                                - generic [ref=e1311]:
                                  - img "JOLLY" [ref=e1312]
                                  - generic [ref=e1313]:
                                    - generic:
                                      - generic "JOLLY" [ref=e1314]
                                      - generic [ref=e1315]: ·
                                      - generic [ref=e1316]: 1h
                                - link "Two Brits try Chicago pizza for the first time!" [ref=e1317]:
                                  - /url: https://www.msn.com/en-in/entertainment/general/two-brits-try-chicago-pizza-for-the-first-time/vi-AA22pPrD?ocid=hpmsn
                                  - heading "Two Brits try Chicago pizza for the first time!" [level=2] [ref=e1318]:
                                    - generic: Two Brits try Chicago pizza for the first time!
                              - button "See more" [ref=e1322]
                          - article "A 14-year-old folded paper at home – then it held almost 200 pounds" [ref=e1325]:
                            - generic [ref=e1326]:
                              - img "A 14-Year-Old Folded Paper at Home – Then It Held Almost 200 Pounds" [ref=e1328]
                              - generic [ref=e1330]: 06:11
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1331]:
                                - generic [ref=e1332]:
                                  - img "TED" [ref=e1333]
                                  - generic [ref=e1334]:
                                    - generic:
                                      - generic "TED" [ref=e1335]
                                      - generic [ref=e1336]: ·
                                      - generic [ref=e1337]: 13h
                                - link "A 14-year-old folded paper at home – then it held almost 200 pounds" [ref=e1338]:
                                  - /url: https://www.msn.com/en-in/science/physics/a-14-year-old-folded-paper-at-home-then-it-held-almost-200-pounds/vi-AA2a7E70?ocid=hpmsn
                                  - heading "A 14-year-old folded paper at home – then it held almost 200 pounds" [level=2] [ref=e1339]:
                                    - generic: A 14-year-old folded paper at home – then it held almost 200 pounds
                              - button "See more" [ref=e1343]
                          - article [ref=e1346]:
                            - generic [ref=e1347]:
                              - img "He Was Fooling Around on This Cliff - Then His Hand Suddenly Slipped" [ref=e1349]
                              - generic [ref=e1351]: 24:53
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1352]:
                                - generic [ref=e1353]:
                                  - img "Magnus Midtbø" [ref=e1354]
                                  - generic [ref=e1355]:
                                    - generic:
                                      - generic "Magnus Midtbø" [ref=e1356]
                                      - generic [ref=e1357]: ·
                                      - generic [ref=e1358]: 6h
                                - link "He was fooling around on this cliff - then his hand suddenly slipped" [ref=e1359]:
                                  - /url: https://www.msn.com/en-in/sports/general/he-was-fooling-around-on-this-cliff-then-his-hand-suddenly-slipped/vi-AA26T1Hc?ocid=hpmsn
                                  - heading "He was fooling around on this cliff - then his hand suddenly slipped" [level=2] [ref=e1360]:
                                    - generic: He was fooling around on this cliff - then his hand suddenly slipped
                              - button "See more" [ref=e1364]
                          - article [ref=e1367]:
                            - generic [ref=e1368]:
                              - img "How To Find Love in Russia in 60 Seconds" [ref=e1370]
                              - generic [ref=e1372]: 01:04
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1373]:
                                - generic [ref=e1374]:
                                  - img "Radical Living" [ref=e1375]
                                  - generic [ref=e1376]:
                                    - generic:
                                      - generic "Radical Living" [ref=e1377]
                                      - generic [ref=e1378]: ·
                                      - generic [ref=e1379]: 2d
                                - link "How to find love in Russia in 60 seconds" [ref=e1380]:
                                  - /url: https://www.msn.com/en-in/lifestyle/other/how-to-find-love-in-russia-in-60-seconds/vi-AA29WhAr?ocid=hpmsn
                                  - heading "How to find love in Russia in 60 seconds" [level=2] [ref=e1381]:
                                    - generic: How to find love in Russia in 60 seconds
                              - button "See more" [ref=e1385]
                          - article "He tested the world’s most expensive climbing shoes - the results surprised him" [ref=e1388]:
                            - generic [ref=e1389]:
                              - img "He Tested the World’s Most Expensive Climbing Shoes - The Results Surprised Him" [ref=e1391]
                              - generic [ref=e1393]: 21:25
                              - generic:
                                - generic:
                                  - generic:
                                    - img
                              - generic [ref=e1394]:
                                - generic [ref=e1395]:
                                  - img "Magnus Midtbø" [ref=e1396]
                                  - generic [ref=e1397]:
                                    - generic:
                                      - generic "Magnus Midtbø" [ref=e1398]
                                      - generic [ref=e1399]: ·
                                      - generic [ref=e1400]: 6h
                                - link "He tested the world’s most expensive climbing shoes - the results surprised him" [ref=e1401]:
                                  - /url: https://www.msn.com/en-in/sports/general/he-tested-the-world-s-most-expensive-climbing-shoes-the-results-surprised-him/vi-AA28StXp?ocid=hpmsn
                                  - heading "He tested the world’s most expensive climbing shoes - the results surprised him" [level=2] [ref=e1402]:
                                    - generic: He tested the world’s most expensive climbing shoes - the results surprised him
                              - button "See more" [ref=e1406]
                          - link "See more" [ref=e1408]:
                            - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                            - img [ref=e1409]
                            - text: See more
                      - button "next" [ref=e1413]:
                        - img [ref=e1416]
              - article "Delhi school cancels JNU professor Zoya Hasan’s 'Pluralism' talk after VHP members protest" [ref=e1418] [cursor=pointer]:
                - generic [ref=e1420]:
                  - img [ref=e1421]
                  - generic [ref=e1422]:
                    - generic [ref=e1423]:
                      - generic [ref=e1424]:
                        - generic [ref=e1425]:
                          - img [ref=e1426]
                          - generic [ref=e1427]: ThePrint
                        - generic [ref=e1428]: ·
                        - generic [ref=e1429]: 18h
                      - link "Delhi school cancels JNU professor Zoya Hasan’s 'Pluralism' talk after VHP members protest, ThePrint" [ref=e1430]:
                        - /url: https://www.msn.com/en-in/money/general/delhi-school-cancels-jnu-professor-zoya-hasan-s-pluralism-talk-after-vhp-members-protest/ar-AA2a5JsH
                        - text: Delhi school cancels JNU professor Zoya Hasan’s 'Pluralism' talk after VHP members protest
                    - generic "Delhi school cancels JNU professor Zoya Hasan’s 'Pluralism' talk after VHP members protest" [ref=e1433]:
                      - generic [ref=e1435]:
                        - generic [ref=e1436]:
                          - button "13 Likes" [ref=e1437]:
                            - generic [ref=e1438]:
                              - img [ref=e1439]
                              - generic [ref=e1441]: "13"
                          - button "1 Dislike" [ref=e1442]:
                            - img [ref=e1444]
                        - link "View comments 2 Comment" [ref=e1447]:
                          - /url: https://www.msn.com/en-in/money/general/delhi-school-cancels-jnu-professor-zoya-hasan-s-pluralism-talk-after-vhp-members-protest/ar-AA2a5JsH#comments
                          - button "View comments 2 Comment" [ref=e1448]:
                            - img [ref=e1449]
                          - generic [ref=e1451]: "2"
                  - generic [ref=e1452]:
                    - button "Hide this story" [ref=e1453]:
                      - img [ref=e1454]
                      - text: Hide this story
                    - button "See more" [ref=e1455]:
                      - img [ref=e1456]
              - article [ref=e1457] [cursor=pointer]:
                - generic [ref=e1463]:
                  - generic [ref=e1465]:
                    - img "ICC" [ref=e1467]
                    - link "ICC" [ref=e1468]:
                      - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6a7fe68da1f943a8bb83a873d1c11307
                      - heading "ICC" [level=2] [ref=e1469]
                    - button "More interests" [ref=e1470]
                    - generic [ref=e1471]:
                      - generic "Popular in your area" [ref=e1472]:
                        - button "Popular in your area" [ref=e1473]
                      - button "More options" [ref=e1474]
                  - generic [ref=e1478]:
                    - link "AUS 198 12/1 Live BAN 426 AUS trail by 216 runs" [ref=e1479]:
                      - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-270225?ocid=hpmsn&cvid=6a7fe68da1f943a8bb83a873d1c11307
                      - generic "AUS" [ref=e1480]:
                        - generic [ref=e1481]:
                          - generic [ref=e1482]:
                            - generic [ref=e1484]: AUS
                            - button "Click to follow AUS":
                              - generic:
                                - img
                          - generic [ref=e1486]:
                            - generic [ref=e1487]: "198"
                            - generic [ref=e1488]: 12/1
                      - generic [ref=e1492]: Live
                      - generic "BAN" [ref=e1493]:
                        - generic [ref=e1494]:
                          - generic [ref=e1495]:
                            - generic [ref=e1497]: BAN
                            - button "Click to follow BAN":
                              - generic:
                                - img
                          - generic [ref=e1500]: "426"
                      - generic "AUS trail by 216 runs" [ref=e1503]
                    - link "SL Toss IND IND elected to bat" [ref=e1504]:
                      - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-272145?ocid=hpmsn&cvid=6a7fe68da1f943a8bb83a873d1c11307
                      - generic "SL" [ref=e1505]:
                        - generic [ref=e1507]:
                          - generic [ref=e1509]: SL
                          - button "Click to follow SL":
                            - generic:
                              - img
                      - generic [ref=e1513]: Toss
                      - generic "IND" [ref=e1514]:
                        - generic [ref=e1516]:
                          - generic [ref=e1518]: IND
                          - button "Click to follow IND":
                            - generic:
                              - img
                      - generic "IND elected to bat" [ref=e1521]
                    - link "IRE 15 Aug 9:45 am AFG Civil Service Cricket Club, Belfast" [ref=e1522]:
                      - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-270210?ocid=hpmsn&cvid=6a7fe68da1f943a8bb83a873d1c11307
                      - generic "IRE" [ref=e1523]:
                        - generic [ref=e1525]:
                          - generic [ref=e1527]: IRE
                          - button "Click to follow IRE":
                            - generic:
                              - img
                      - generic [ref=e1530]:
                        - generic [ref=e1531]: 15 Aug
                        - generic [ref=e1532]: 9:45 am
                      - generic "AFG" [ref=e1533]:
                        - generic [ref=e1535]:
                          - generic [ref=e1537]: AFG
                          - button "Click to follow AFG":
                            - generic:
                              - img
                      - generic "Civil Service Cricket Club, Belfast" [ref=e1540]
                  - generic [ref=e1542]:
                    - generic [ref=e1543]:
                      - generic "Previous" [ref=e1544]:
                        - button "Previous" [ref=e1545]
                      - tablist [ref=e1547]:
                        - tab "tab-0" [selected] [ref=e1548]
                        - tab "tab-1" [ref=e1550]
                        - tab "tab-2" [ref=e1552]
                        - tab "tab-3" [ref=e1554]
                      - generic "Next" [ref=e1556]:
                        - button "Next" [ref=e1557]
                    - link "See more ICC" [ref=e1559]:
                      - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6a7fe68da1f943a8bb83a873d1c11307
              - 'article "''Threats against Kashmiri Pandits shouldn''t be taken lightly'': Omar Abdullah" [ref=e1560] [cursor=pointer]':
                - generic [ref=e1562]:
                  - img [ref=e1563]
                  - generic [ref=e1564]:
                    - generic [ref=e1565]:
                      - generic [ref=e1566]:
                        - generic [ref=e1567]:
                          - img [ref=e1568]
                          - generic [ref=e1569]: NDTV 24x7
                        - generic [ref=e1570]: ·
                        - generic [ref=e1571]: 14h
                      - 'link "''Threats against Kashmiri Pandits shouldn''t be taken lightly'': Omar Abdullah, NDTV 24x7" [ref=e1572]':
                        - /url: https://www.msn.com/en-in/news/other/threats-against-kashmiri-pandits-shouldn-t-be-taken-lightly-omar-abdullah/ar-AA2a62O4
                        - text: "'Threats against Kashmiri Pandits shouldn't be taken lightly': Omar Abdullah"
                    - 'generic "''Threats against Kashmiri Pandits shouldn''t be taken lightly'': Omar Abdullah" [ref=e1575]':
                      - generic [ref=e1577]:
                        - generic [ref=e1578]:
                          - button "15 Likes" [ref=e1579]:
                            - generic [ref=e1580]:
                              - img [ref=e1581]
                              - generic [ref=e1583]: "15"
                          - button "1 Dislike" [ref=e1584]:
                            - img [ref=e1586]
                        - link "View comments 2 Comment" [ref=e1589]:
                          - /url: https://www.msn.com/en-in/news/other/threats-against-kashmiri-pandits-shouldn-t-be-taken-lightly-omar-abdullah/ar-AA2a62O4#comments
                          - button "View comments 2 Comment" [ref=e1590]:
                            - img [ref=e1591]
                          - generic [ref=e1593]: "2"
                  - generic [ref=e1594]:
                    - button "Hide this story" [ref=e1595]:
                      - img [ref=e1596]
                      - text: Hide this story
                    - button "See more" [ref=e1597]:
                      - img [ref=e1598]
              - article "7 signs you might be spiritually gifted (even if you don’t realise it yet)" [ref=e1599] [cursor=pointer]:
                - generic [ref=e1601]:
                  - img [ref=e1602]
                  - generic [ref=e1603]:
                    - generic [ref=e1604]:
                      - generic [ref=e1606]:
                        - img [ref=e1607]
                        - generic [ref=e1608]: The Times of India
                      - link "7 signs you might be spiritually gifted (even if you don’t realise it yet), The Times of India" [ref=e1609]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/7-signs-you-might-be-spiritually-gifted-even-if-you-don-t-realise-it-yet/ss-AA1TRIsf
                        - text: 7 signs you might be spiritually gifted (even if you don’t realise it yet)
                    - generic "7 signs you might be spiritually gifted (even if you don’t realise it yet)" [ref=e1612]:
                      - generic [ref=e1614]:
                        - generic [ref=e1615]:
                          - button "1,008 Likes" [ref=e1616]:
                            - generic [ref=e1617]:
                              - img [ref=e1618]
                              - generic [ref=e1620]: 1k
                          - button "92 Dislikes" [ref=e1621]:
                            - img [ref=e1623]
                        - link "Start the conversation" [ref=e1626]:
                          - /url: https://www.msn.com/en-in/lifestyle/other/7-signs-you-might-be-spiritually-gifted-even-if-you-don-t-realise-it-yet/ss-AA1TRIsf#comments
                          - button "Start the conversation" [ref=e1627]:
                            - img [ref=e1628]
                  - generic [ref=e1630]:
                    - button "Hide this story" [ref=e1631]:
                      - img [ref=e1632]
                      - text: Hide this story
                    - button "See more" [ref=e1633]:
                      - img [ref=e1634]
              - article [ref=e1635] [cursor=pointer]
              - 'article "Best EV SUVs under Rs 20 lakh: 400+ km range and premium features" [ref=e1642] [cursor=pointer]':
                - generic [ref=e1644]:
                  - img [ref=e1645]
                  - generic [ref=e1646]:
                    - generic [ref=e1647]:
                      - generic [ref=e1648]:
                        - generic [ref=e1649]:
                          - img [ref=e1650]
                          - generic [ref=e1651]: News18
                        - generic [ref=e1652]: ·
                        - generic [ref=e1653]: 5d
                      - 'link "Best EV SUVs under Rs 20 lakh: 400+ km range and premium features, News18" [ref=e1654]':
                        - /url: https://www.msn.com/en-in/autos/electric-cars/best-ev-suvs-under-rs-20-lakh-400-km-range-and-premium-features/ss-AA29K1ta
                        - text: "Best EV SUVs under Rs 20 lakh: 400+ km range and premium features"
                    - 'generic "Best EV SUVs under Rs 20 lakh: 400+ km range and premium features" [ref=e1657]':
                      - generic [ref=e1659]:
                        - generic [ref=e1660]:
                          - button "31 Likes" [ref=e1661]:
                            - generic [ref=e1662]:
                              - img [ref=e1663]
                              - generic [ref=e1665]: "31"
                          - button "18 Dislikes" [ref=e1666]:
                            - img [ref=e1668]
                        - link "Start the conversation" [ref=e1671]:
                          - /url: https://www.msn.com/en-in/autos/electric-cars/best-ev-suvs-under-rs-20-lakh-400-km-range-and-premium-features/ss-AA29K1ta#comments
                          - button "Start the conversation" [ref=e1672]:
                            - img [ref=e1673]
                  - generic [ref=e1675]:
                    - button "Hide this story" [ref=e1676]:
                      - img [ref=e1677]
                      - text: Hide this story
                    - button "See more" [ref=e1678]:
                      - img [ref=e1679]
            - generic [ref=e1680]:
              - article [ref=e1681] [cursor=pointer]
              - 'article "What have I done?: Jinnah reportedly struck his forehead after seeing refugees" [ref=e1688] [cursor=pointer]':
                - generic [ref=e1690]:
                  - img [ref=e1691]
                  - generic [ref=e1692]:
                    - generic [ref=e1693]:
                      - generic [ref=e1694]:
                        - generic [ref=e1695]:
                          - img [ref=e1696]
                          - generic [ref=e1697]: India Today
                        - generic [ref=e1698]: ·
                        - generic [ref=e1699]: 10h
                      - 'link "What have I done?: Jinnah reportedly struck his forehead after seeing refugees, India Today" [ref=e1700]':
                        - /url: https://www.msn.com/en-in/news/other/what-have-i-done-jinnah-reportedly-struck-his-forehead-after-seeing-refugees/ar-AA2a86Vc
                        - text: "What have I done?: Jinnah reportedly struck his forehead after seeing refugees"
                    - 'generic "What have I done?: Jinnah reportedly struck his forehead after seeing refugees" [ref=e1703]':
                      - generic [ref=e1705]:
                        - generic [ref=e1706]:
                          - button "5 Likes" [ref=e1707]:
                            - generic [ref=e1708]:
                              - img [ref=e1709]
                              - generic [ref=e1711]: "5"
                          - button "1 Dislike" [ref=e1712]:
                            - img [ref=e1714]
                        - link "Start the conversation" [ref=e1717]:
                          - /url: https://www.msn.com/en-in/news/other/what-have-i-done-jinnah-reportedly-struck-his-forehead-after-seeing-refugees/ar-AA2a86Vc#comments
                          - button "Start the conversation" [ref=e1718]:
                            - img [ref=e1719]
                  - generic [ref=e1721]:
                    - button "Hide this story" [ref=e1722]:
                      - img [ref=e1723]
                      - text: Hide this story
                    - button "See more" [ref=e1724]:
                      - img [ref=e1725]
    - contentinfo [ref=e1728]:
      - generic "Feedback" [ref=e1730] [cursor=pointer]:
        - button "Feedback" [ref=e1731]:
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