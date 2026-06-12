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
        - 'link "San Jose: Heat Advisory, Clear, 19 °C" [ref=e19] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-San-Jose,California
          - generic "San Jose, California, United States Click here to see more information" [ref=e20]: San Jose
          - img "Clear" [ref=e22]
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
            - link "Nykaa" [ref=e100] [cursor=pointer]:
              - /url: https://sovrn.co/p9zogj8
              - generic [ref=e103]:
                - generic [ref=e104]: Nykaa
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
                - tab [ref=e213] [cursor=pointer]
                - tab [ref=e215] [cursor=pointer]
                - tab [ref=e217] [cursor=pointer]
                - tab [ref=e219] [cursor=pointer]
                - tab [ref=e221] [cursor=pointer]
                - tab [selected] [ref=e223] [cursor=pointer]
                - tab [ref=e225] [cursor=pointer]
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
              - button [ref=e277]
              - button [ref=e280]
              - article "The Norwegian Coastal Route" [ref=e281] [cursor=pointer]:
                - generic [ref=e283]:
                  - img [ref=e284]
                  - generic [ref=e285]:
                    - generic [ref=e286]:
                      - generic [ref=e289]: Havila Voyages
                      - link "The Norwegian Coastal Route, Havila Voyages" [ref=e290]:
                        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=5b8142c8-9165-4dc8-8465-b2b8b0e3c6b9&bdc=pu&bidId=7&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=ee5187ab-2aa7-4612-8af8-34752bb26bbe&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8P9_GSKfpi4qGsu4EIN-CujVUCUzkWaraJCo2w2oXN2IbygjFNBqe4Wfl75cxuE6sjM36vDM8YDKrUPqQ43P5UxdIvQmYp_vopeTGvycoTRi5tmLkcHopGo6n-HIIBv1-U56silwVkcoy43UsDtJAKI3OLcM_HpFk29sAzD10T66bq_4migbtZLuaFmnnCfGoOoTaKA%26u%3DaHR0cHMlM2ElMmYlMmZhZC5kb3VibGVjbGljay5uZXQlMmZzZWFyY2hhZHMlMmZsaW5rJTJmY2xpY2slM2ZsaWQlM2Q1ODcwMDAwOTAzODUxNzkzNiUyNiUyNmRzX2VfYWRpZCUzZDczNjY3NjM4NjYzNDY0JTI2ZHNfZV90YXJnZXRfaWQlM2Rrd2QtMjMyNTQ2NzA5NDA1MDQ3NCUzYWxvYy00MDg0JTI2JTI2ZHNfZV9uZXR3b3JrJTNkYSUyNmRzX3VybF92JTNkMiUyNmRzX2Rlc3RfdXJsJTNkaHR0cHMlM2ElMmYlMmZ3d3cuaGF2aWxhdm95YWdlcy5jb20lM2ZnY2xpZCUzZDRlZTIxMGM4MjgxNjExZTFkNjc1N2FlMzk3YjVhMGVlJTI2Z2Nsc3JjJTNkM3AuZHMlMjYlMjZtc2Nsa2lkJTNkNGVlMjEwYzgyODE2MTFlMWQ2NzU3YWUzOTdiNWEwZWUlMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RVUyUyNTIwJTI1N0MlYzIlYTAwNSUyNTNBJTI1MjBEZW1hbmQlMjUyMEdlbiUyNnV0bV90ZXJtJTNka2V5d29yZCUyNnV0bV9jb250ZW50JTNkU3ByaW5nJTI1MjAyNg%26rlid%3D4ee210c8281611e1d6757ae397b5a0ee&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                        - text: The Norwegian Coastal Route
                    - link "Sponsored" [ref=e292]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=5b8142c8-9165-4dc8-8465-b2b8b0e3c6b9&bdc=pu&bidId=7&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=ee5187ab-2aa7-4612-8af8-34752bb26bbe&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8P9_GSKfpi4qGsu4EIN-CujVUCUzkWaraJCo2w2oXN2IbygjFNBqe4Wfl75cxuE6sjM36vDM8YDKrUPqQ43P5UxdIvQmYp_vopeTGvycoTRi5tmLkcHopGo6n-HIIBv1-U56silwVkcoy43UsDtJAKI3OLcM_HpFk29sAzD10T66bq_4migbtZLuaFmnnCfGoOoTaKA%26u%3DaHR0cHMlM2ElMmYlMmZhZC5kb3VibGVjbGljay5uZXQlMmZzZWFyY2hhZHMlMmZsaW5rJTJmY2xpY2slM2ZsaWQlM2Q1ODcwMDAwOTAzODUxNzkzNiUyNiUyNmRzX2VfYWRpZCUzZDczNjY3NjM4NjYzNDY0JTI2ZHNfZV90YXJnZXRfaWQlM2Rrd2QtMjMyNTQ2NzA5NDA1MDQ3NCUzYWxvYy00MDg0JTI2JTI2ZHNfZV9uZXR3b3JrJTNkYSUyNmRzX3VybF92JTNkMiUyNmRzX2Rlc3RfdXJsJTNkaHR0cHMlM2ElMmYlMmZ3d3cuaGF2aWxhdm95YWdlcy5jb20lM2ZnY2xpZCUzZDRlZTIxMGM4MjgxNjExZTFkNjc1N2FlMzk3YjVhMGVlJTI2Z2Nsc3JjJTNkM3AuZHMlMjYlMjZtc2Nsa2lkJTNkNGVlMjEwYzgyODE2MTFlMWQ2NzU3YWUzOTdiNWEwZWUlMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RVUyUyNTIwJTI1N0MlYzIlYTAwNSUyNTNBJTI1MjBEZW1hbmQlMjUyMEdlbiUyNnV0bV90ZXJtJTNka2V5d29yZCUyNnV0bV9jb250ZW50JTNkU3ByaW5nJTI1MjAyNg%26rlid%3D4ee210c8281611e1d6757ae397b5a0ee&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                  - button "See more" [ref=e294]:
                    - img [ref=e295]
            - article [ref=e296] [cursor=pointer]:
              - generic [ref=e301]:
                - generic [ref=e303]:
                  - link "Top stories" [ref=e305]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a2bbfa156864cbdbb72bbd2602ec8b6&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e306]
                  - button "More options" [ref=e308]
                - list [ref=e311]:
                  - 'listitem "US-Iran war news live updates: Iran rejects Trump’s ‘great settlement’ claim, vows red lines won’t be crossed" [ref=e312]':
                    - generic [ref=e313]:
                      - generic [ref=e314]:
                        - generic:
                          - generic [ref=e315]: Breaking
                          - img [ref=e316]
                        - generic [ref=e317]:
                          - generic: The Indian Express ·3h
                      - generic [ref=e318]: "US-Iran war news live updates: Iran rejects Trump’s ‘great settlement’ claim, vows red lines won’t be crossed"
                  - listitem "Who was Suresh Patnala? Vizag engineer killed in US strike days before 15th anniversary" [ref=e319]:
                    - generic [ref=e320]:
                      - generic [ref=e321]:
                        - img [ref=e322]
                        - generic [ref=e323]:
                          - generic: WION ·now
                      - generic [ref=e324]: Who was Suresh Patnala? Vizag engineer killed in US strike days before 15th anniversary
                  - 'listitem "''Do it when it suits them, don’t when it doesn’t'': Jaishankar at his savage best in Finland" [ref=e325]':
                    - generic [ref=e326]:
                      - generic [ref=e327]:
                        - img [ref=e328]
                        - generic [ref=e329]:
                          - generic: Times Now ·1h
                      - generic [ref=e330]: "'Do it when it suits them, don’t when it doesn’t': Jaishankar at his savage best in Finland"
                - generic [ref=e332]:
                  - generic [ref=e333]:
                    - generic "Previous" [ref=e334]:
                      - button "Previous" [ref=e335]
                    - tablist [ref=e337]:
                      - tab "tab-0" [selected] [ref=e338]
                      - tab "tab-1" [ref=e340]
                      - tab "tab-2" [ref=e342]
                    - generic "Next" [ref=e344]:
                      - button "Next" [ref=e345]
                  - link "See more" [ref=e347]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a2bbfa156864cbdbb72bbd2602ec8b6&ocid=hpmsn
            - article [ref=e348] [cursor=pointer]:
              - generic [ref=e352]:
                - generic: Sponsored
            - article "Hawaiian Airlines® Official. The most flights for Hawaii vacations." [ref=e353] [cursor=pointer]:
              - generic [ref=e355]:
                - img [ref=e356]
                - generic [ref=e357]:
                  - generic [ref=e358]:
                    - generic [ref=e361]: Hawaiian Airlines
                    - link "Hawaiian Airlines® Official. The most flights for Hawaii vacations., Hawaiian Airlines" [ref=e362]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=c41839ed-89b0-41d4-b011-30ef608dd26b&bdc=pu&bidId=3&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=ee5187ab-2aa7-4612-8af8-34752bb26bbe&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8Rx7KcHJxaygurrK8Yn6CIzVUCUwAwIQIbKQb5pGSzbtEWqmtYep73Qf4bPUalPBfZ6wNY5iGNjc-sk5CmNnmVagpP-MKlAXhsICsTaWKtr4yqW11SmvYRu195l79BdYg5TAle8EVRYkvuMmXcaF3uUEbb5DeBAPiSqWvQEFUuyLN6LsLhmVpveSIOok4efiW6KyBuQ%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuYWxhc2thYWlyLmNvbSUyZmNvbnRlbnQlMmZkZWFscyUyZmZsaWdodHMlM2ZvJTNkc2ZvJTJjb2FrJTJjc2pjJTJjc3RzJTI2ZCUzZGhubCUyY29nZyUyY2xpaCUyY2tvYSUyY2l0byUyNnV0bV9zb3VyY2VfcGxhdGZvcm0lM2RNaWNyb3NvZnRBZHMlMjZ1dG1faWQlM2Q2Nzg4MDU4MDYlMjZ1dG1fc291cmNlJTNkbXNhbl9wYWlkJTI2dXRtX21lZGl1bSUzZGRpc3BsYXklMjZ1dG1fY2FtcGFpZ24lM2RfMV9hcy1pbnRlcm5hbF8yX3NmYmF5LWhpLXByb3Mtc3RhdGljXzNfaGktbWxkLWZsaWdodHNfNF9uYV81X3Byb3NwZWN0XzZfaGlnaF83X2Jvb2tpbmdzXzhfZGlzcGxheSUyNnV0bV90ZXJtJTNkNzY3NTk4OTM4MDM0OTklMjZtc2Nsa2lkJTNkNjdiZjE2NmRhNjBmMWIwNmRhOWQ3YzQ2MTlhYzlhZDAlMjZ1dG1fY29udGVudCUzZFNGJTI1M0VISSUyNTIwQWQlMjUyMEdyb3VwJTI1MjAx%26rlid%3D67bf166da60f1b06da9d7c4619ac9ad0&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Hawaiian Airlines® Official. The most flights for Hawaii vacations.
                  - link "Sponsored" [ref=e364]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=c41839ed-89b0-41d4-b011-30ef608dd26b&bdc=pu&bidId=3&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=ee5187ab-2aa7-4612-8af8-34752bb26bbe&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8Rx7KcHJxaygurrK8Yn6CIzVUCUwAwIQIbKQb5pGSzbtEWqmtYep73Qf4bPUalPBfZ6wNY5iGNjc-sk5CmNnmVagpP-MKlAXhsICsTaWKtr4yqW11SmvYRu195l79BdYg5TAle8EVRYkvuMmXcaF3uUEbb5DeBAPiSqWvQEFUuyLN6LsLhmVpveSIOok4efiW6KyBuQ%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuYWxhc2thYWlyLmNvbSUyZmNvbnRlbnQlMmZkZWFscyUyZmZsaWdodHMlM2ZvJTNkc2ZvJTJjb2FrJTJjc2pjJTJjc3RzJTI2ZCUzZGhubCUyY29nZyUyY2xpaCUyY2tvYSUyY2l0byUyNnV0bV9zb3VyY2VfcGxhdGZvcm0lM2RNaWNyb3NvZnRBZHMlMjZ1dG1faWQlM2Q2Nzg4MDU4MDYlMjZ1dG1fc291cmNlJTNkbXNhbl9wYWlkJTI2dXRtX21lZGl1bSUzZGRpc3BsYXklMjZ1dG1fY2FtcGFpZ24lM2RfMV9hcy1pbnRlcm5hbF8yX3NmYmF5LWhpLXByb3Mtc3RhdGljXzNfaGktbWxkLWZsaWdodHNfNF9uYV81X3Byb3NwZWN0XzZfaGlnaF83X2Jvb2tpbmdzXzhfZGlzcGxheSUyNnV0bV90ZXJtJTNkNzY3NTk4OTM4MDM0OTklMjZtc2Nsa2lkJTNkNjdiZjE2NmRhNjBmMWIwNmRhOWQ3YzQ2MTlhYzlhZDAlMjZ1dG1fY29udGVudCUzZFNGJTI1M0VISSUyNTIwQWQlMjUyMEdyb3VwJTI1MjAx%26rlid%3D67bf166da60f1b06da9d7c4619ac9ad0&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e366]:
                  - img [ref=e367]
            - article [ref=e368] [cursor=pointer]:
              - generic [ref=e374]:
                - generic [ref=e376]:
                  - img "Watchlist suggestions" [ref=e378]
                  - link "Watchlist suggestions" [ref=e379]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e380]
                  - button "More options" [ref=e382]
                - generic [ref=e387]:
                  - link "DOW DJI ‎+1.86%‎ 50,848.75" [ref=e389]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a6qja2&ocid=hpmsn
                    - generic [ref=e390]:
                      - generic [ref=e392]: DOW
                      - generic [ref=e394]: DJI
                    - generic [ref=e399]:
                      - generic [ref=e400]: ‎+1.86%‎
                      - generic [ref=e401]: 50,848.75
                    - button "Add to watchlist" [ref=e404]:
                      - img [ref=e405]
                  - link "Nifty Bank Nifty Bank Index Rising fast ‎+1.57%‎ 56,043.30" [ref=e409]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkrnm&noti=Price&ocid=hpmsn
                    - generic [ref=e410]:
                      - generic [ref=e411]:
                        - generic [ref=e412]: Nifty Bank
                        - img "Nifty Bank Index" [ref=e413]
                      - generic [ref=e415]: Rising fast
                    - generic [ref=e420]:
                      - generic [ref=e421]: ‎+1.57%‎
                      - generic [ref=e422]: 56,043.30
                    - button "Add to watchlist" [ref=e425]:
                      - img [ref=e426]
                  - link "USD/INR US Dollar/Indian Rupee ‎-0.47%‎ 95.31" [ref=e430]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=avyo8m&ocid=hpmsn
                    - generic [ref=e431]:
                      - generic [ref=e433]: USD/INR
                      - generic [ref=e435]: US Dollar/Indian Rupee
                    - generic [ref=e440]:
                      - generic [ref=e441]: ‎-0.47%‎
                      - generic [ref=e442]: "95.31"
                    - button "Add to watchlist" [ref=e445]:
                      - img [ref=e446]
                  - link "Gold Gold Rising fast ‎+2.57%‎ 4,219.80" [ref=e450]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwoc&noti=Price&ocid=hpmsn
                    - generic [ref=e451]:
                      - generic [ref=e452]:
                        - generic [ref=e453]: Gold
                        - img "Gold" [ref=e454]
                      - generic [ref=e456]: Rising fast
                    - generic [ref=e461]:
                      - generic [ref=e462]: ‎+2.57%‎
                      - generic [ref=e463]: 4,219.80
                    - button "Add to watchlist" [ref=e466]:
                      - img [ref=e467]
                  - link "24K Gold (10 Grams) - Indian Rupee 24K Gold (10 Grams) - Indian Rupee Dropping fast ‎-2.82%‎ 146614" [ref=e471]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&noti=Price&ocid=hpmsn
                    - generic [ref=e472]:
                      - generic [ref=e473]:
                        - generic [ref=e474]: 24K Gold (10 Grams) - Indian Rupee
                        - img "24K Gold (10 Grams) - Indian Rupee" [ref=e475]
                      - generic [ref=e477]: Dropping fast
                    - generic [ref=e482]:
                      - generic [ref=e483]: ‎-2.82%‎
                      - generic [ref=e484]: "146614"
                    - button "Add to watchlist" [ref=e487]:
                      - img [ref=e488]
                - generic [ref=e492]:
                  - generic [ref=e493]:
                    - generic "Previous" [ref=e494]:
                      - button "Previous" [ref=e495]
                    - tablist [ref=e497]:
                      - tab "tab-0" [selected] [ref=e498]
                      - tab "tab-1" [ref=e500]
                      - tab "tab-2" [ref=e502]
                      - tab "tab-3" [ref=e504]
                      - tab "tab-4" [ref=e506]
                      - tab "tab-5"
                      - tab "tab-6"
                    - generic "Next" [ref=e508]:
                      - button "Next" [ref=e509]
                  - link "See watchlist suggestions" [ref=e511]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - article "Rohit, Reddy in focus as India begin 2027 WC prep with maiden ODI series against Afghanistan" [ref=e512] [cursor=pointer]:
              - generic [ref=e514]:
                - img [ref=e515]
                - generic [ref=e516]:
                  - generic [ref=e517]:
                    - generic [ref=e518]:
                      - generic [ref=e519]:
                        - img [ref=e520]
                        - generic [ref=e521]: Press Trust of India
                      - generic [ref=e522]: ·
                      - generic [ref=e523]: now
                    - link "Rohit, Reddy in focus as India begin 2027 WC prep with maiden ODI series against Afghanistan, Press Trust of India" [ref=e524]:
                      - /url: https://www.msn.com/en-in/health/other/rohit-reddy-in-focus-as-india-begin-2027-wc-prep-with-maiden-odi-series-against-afghanistan/ar-AA25rrzZ
                      - text: Rohit, Reddy in focus as India begin 2027 WC prep with maiden ODI series against Afghanistan
                  - generic "Rohit, Reddy in focus as India begin 2027 WC prep with maiden ODI series against Afghanistan" [ref=e527]:
                    - generic [ref=e529]:
                      - generic [ref=e530]:
                        - button "3 Like" [ref=e531]:
                          - generic [ref=e532]:
                            - img [ref=e533]
                            - generic [ref=e535]: "3"
                        - button "Dislike" [ref=e536]:
                          - img [ref=e538]
                      - link "Start the conversation" [ref=e541]:
                        - /url: https://www.msn.com/en-in/health/other/rohit-reddy-in-focus-as-india-begin-2027-wc-prep-with-maiden-odi-series-against-afghanistan/ar-AA25rrzZ#comments
                        - button "Start the conversation" [ref=e542]:
                          - img [ref=e543]
                - generic [ref=e545]:
                  - button "Hide this story" [ref=e546]:
                    - img [ref=e547]
                    - text: Hide this story
                  - button "See more" [ref=e548]:
                    - img [ref=e549]
            - article "Order Today & Save $10 - $10 Off Same Day Delivery - $10 Off Flowers For Delivery" [ref=e550] [cursor=pointer]:
              - generic [ref=e552]:
                - img [ref=e553]
                - generic [ref=e554]:
                  - generic [ref=e555]:
                    - generic [ref=e558]: FTD
                    - link "Order Today & Save $10 - $10 Off Same Day Delivery - $10 Off Flowers For Delivery, FTD" [ref=e559]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=6135cd38-955e-47a7-9afe-cec8f7cd742d&bdc=pu&bidId=1&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=ee5187ab-2aa7-4612-8af8-34752bb26bbe&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De83YQa1pJARyER_g2Z5xgRSTVUCUwqNm0m7dYR5wqEVgu9gV5BRlRdFlcHRVEIAICMUSmAjagTVo1fvOtRujZV5BRglrGxITwC8uYELG26PgOtA_TluNl8uBgHYSqPzjTeXuhnwTDVQPT9CpiX1kKm1sz-gWokJOfjLMG1fOnTHFMKlZ_3jxMyT1o6VFbXqBl-EChG-Q%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZnRkLmNvbSUyZmNhdGVnb3J5JTJmcGFpZF9zZWFyY2glM2ZyZWZjb2RlJTNkMTEyMDElMjZtYXJrY29kZSUzZDExMjAxJTI2cHJpZCUzZGZzZW0xMGQlMjZjaWQlM2Rmc2VtMTBkJTI2Y21waWQlM2Q1MDYxNjc3NDYlMjZhZ2lkJTNkMTI2MDA0MTk3NTY3OTI0OCUyNnRndGlkJTNka3dkLTc4NzUzMTI1NTAyNTM5JTNhbG9jLTE5MCUyNnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX21lZGl1bSUzZGNwYyUyNm1zY2xraWQlM2QyMmI1ODNkYzU1YjAxMWFhOTFkNmU5ZjdlYTEyMGFiNw%26rlid%3D22b583dc55b011aa91d6e9f7ea120ab7&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Order Today & Save $10 - $10 Off Same Day Delivery - $10 Off Flowers For Delivery
                  - link "Sponsored" [ref=e561]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=6135cd38-955e-47a7-9afe-cec8f7cd742d&bdc=pu&bidId=1&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=jhf2oczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=ee5187ab-2aa7-4612-8af8-34752bb26bbe&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De83YQa1pJARyER_g2Z5xgRSTVUCUwqNm0m7dYR5wqEVgu9gV5BRlRdFlcHRVEIAICMUSmAjagTVo1fvOtRujZV5BRglrGxITwC8uYELG26PgOtA_TluNl8uBgHYSqPzjTeXuhnwTDVQPT9CpiX1kKm1sz-gWokJOfjLMG1fOnTHFMKlZ_3jxMyT1o6VFbXqBl-EChG-Q%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZnRkLmNvbSUyZmNhdGVnb3J5JTJmcGFpZF9zZWFyY2glM2ZyZWZjb2RlJTNkMTEyMDElMjZtYXJrY29kZSUzZDExMjAxJTI2cHJpZCUzZGZzZW0xMGQlMjZjaWQlM2Rmc2VtMTBkJTI2Y21waWQlM2Q1MDYxNjc3NDYlMjZhZ2lkJTNkMTI2MDA0MTk3NTY3OTI0OCUyNnRndGlkJTNka3dkLTc4NzUzMTI1NTAyNTM5JTNhbG9jLTE5MCUyNnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX21lZGl1bSUzZGNwYyUyNm1zY2xraWQlM2QyMmI1ODNkYzU1YjAxMWFhOTFkNmU5ZjdlYTEyMGFiNw%26rlid%3D22b583dc55b011aa91d6e9f7ea120ab7&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e563]:
                  - img [ref=e564]
            - 'article "A profound loss: Tributes pour in after renowned shooting coach Jaspal Rana dies at 49" [ref=e565] [cursor=pointer]':
              - generic [ref=e567]:
                - img [ref=e568]
                - generic [ref=e569]:
                  - generic [ref=e570]:
                    - generic [ref=e571]:
                      - generic [ref=e572]:
                        - img [ref=e573]
                        - generic [ref=e574]: News18
                      - generic [ref=e575]: ·
                      - generic [ref=e576]: 2h
                    - 'link "A profound loss: Tributes pour in after renowned shooting coach Jaspal Rana dies at 49, News18" [ref=e577]':
                      - /url: https://www.msn.com/en-in/news/india/a-profound-loss-tributes-pour-in-after-renowned-shooting-coach-jaspal-rana-dies-at-49/ar-AA25rbSf
                      - text: "A profound loss: Tributes pour in after renowned shooting coach Jaspal Rana dies at 49"
                  - 'generic "A profound loss: Tributes pour in after renowned shooting coach Jaspal Rana dies at 49" [ref=e580]':
                    - generic [ref=e582]:
                      - generic [ref=e583]:
                        - button "6 Like" [ref=e584]:
                          - generic [ref=e585]:
                            - img [ref=e586]
                            - generic [ref=e588]: "6"
                        - button "Dislike" [ref=e589]:
                          - img [ref=e591]
                      - link "Start the conversation" [ref=e594]:
                        - /url: https://www.msn.com/en-in/news/india/a-profound-loss-tributes-pour-in-after-renowned-shooting-coach-jaspal-rana-dies-at-49/ar-AA25rbSf#comments
                        - button "Start the conversation" [ref=e595]:
                          - img [ref=e596]
                - generic [ref=e598]:
                  - button "Hide this story" [ref=e599]:
                    - img [ref=e600]
                    - text: Hide this story
                  - button "See more" [ref=e601]:
                    - img [ref=e602]
            - article "6 warning signs that may indicate a snake is hiding near your home" [ref=e603] [cursor=pointer]:
              - generic [ref=e605]:
                - img [ref=e606]
                - generic [ref=e607]:
                  - generic [ref=e608]:
                    - generic [ref=e609]:
                      - generic [ref=e610]:
                        - img [ref=e611]
                        - generic [ref=e612]: The Economic Times
                      - generic [ref=e613]: ·
                      - generic [ref=e614]: 3w
                    - link "6 warning signs that may indicate a snake is hiding near your home, The Economic Times" [ref=e615]:
                      - /url: https://www.msn.com/en-in/entertainment/news/6-warning-signs-that-may-indicate-a-snake-is-hiding-near-your-home/ss-AA23srxe
                      - text: 6 warning signs that may indicate a snake is hiding near your home
                  - generic "6 warning signs that may indicate a snake is hiding near your home" [ref=e618]:
                    - generic [ref=e620]:
                      - generic [ref=e621]:
                        - button "491 Like" [ref=e622]:
                          - generic [ref=e623]:
                            - img [ref=e624]
                            - generic [ref=e626]: "491"
                        - button "Dislike" [ref=e627]:
                          - img [ref=e629]
                      - link "View comments 1 Comment" [ref=e632]:
                        - /url: https://www.msn.com/en-in/entertainment/news/6-warning-signs-that-may-indicate-a-snake-is-hiding-near-your-home/ss-AA23srxe#comments
                        - button "View comments 1 Comment" [ref=e633]:
                          - img [ref=e634]
                        - generic [ref=e636]: "1"
                - generic [ref=e637]:
                  - button "Hide this story" [ref=e638]:
                    - img [ref=e639]
                    - text: Hide this story
                  - button "See more" [ref=e640]:
                    - img [ref=e641]
          - generic [ref=e642]:
            - article [ref=e643] [cursor=pointer]:
              - generic [ref=e648]:
                - generic [ref=e650]:
                  - link "Top Engaging News" [ref=e652]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a2bbfa156864cbdbb72bbd2602ec8b6
                    - heading "Top Engaging News" [level=2] [ref=e653]
                  - button "More options" [ref=e655]
                - generic [ref=e657]:
                  - 'link "India Today 28 Comments Something is off: Raghuram Rajan questions India''s GDP growth narrative" [ref=e659]':
                    - /url: https://www.msn.com/en-in/news/india/something-is-off-raghuram-rajan-questions-india-s-gdp-growth-narrative/ar-AA25p5vp
                    - generic [ref=e660]:
                      - img [ref=e661]
                      - generic [ref=e662]: India Today
                      - link "28 Comments" [ref=e664]:
                        - /url: https://www.msn.com/en-in/news/india/something-is-off-raghuram-rajan-questions-india-s-gdp-growth-narrative/ar-AA25p5vp#comments
                        - img [ref=e665]
                        - paragraph [ref=e666]: "28"
                    - paragraph [ref=e667]: "Something is off: Raghuram Rajan questions India's GDP growth narrative"
                  - link "India Today 9 Comments Pakistan launched 6 satellites to watch India as ISRO's NavIC struggles with failures" [ref=e669]:
                    - /url: https://www.msn.com/en-in/news/india/pakistan-launched-6-satellites-to-watch-india-as-isro-s-navic-struggles-with-failures/ar-AA25nT5T
                    - generic [ref=e670]:
                      - img [ref=e671]
                      - generic [ref=e672]: India Today
                      - link "9 Comments" [ref=e674]:
                        - /url: https://www.msn.com/en-in/news/india/pakistan-launched-6-satellites-to-watch-india-as-isro-s-navic-struggles-with-failures/ar-AA25nT5T#comments
                        - img [ref=e675]
                        - paragraph [ref=e676]: "9"
                    - paragraph [ref=e677]: Pakistan launched 6 satellites to watch India as ISRO's NavIC struggles with failures
                  - 'link "Moneycontrol 5 Comments Was caught on camera accepting Rs 5 lakh: TMC MP Kirti Azad accuses Kakoli Ghosh Dastidar of corruption" [ref=e679]':
                    - /url: https://www.msn.com/en-in/money/topstories/was-caught-on-camera-accepting-rs-5-lakh-tmc-mp-kirti-azad-accuses-kakoli-ghosh-dastidar-of-corruption/ar-AA25rhCj
                    - generic [ref=e680]:
                      - img [ref=e681]
                      - generic [ref=e682]: Moneycontrol
                      - link "5 Comments" [ref=e684]:
                        - /url: https://www.msn.com/en-in/money/topstories/was-caught-on-camera-accepting-rs-5-lakh-tmc-mp-kirti-azad-accuses-kakoli-ghosh-dastidar-of-corruption/ar-AA25rhCj#comments
                        - img [ref=e685]
                        - paragraph [ref=e686]: "5"
                    - paragraph [ref=e687]: "Was caught on camera accepting Rs 5 lakh: TMC MP Kirti Azad accuses Kakoli Ghosh Dastidar of corruption"
                - generic [ref=e689]:
                  - generic [ref=e690]:
                    - generic "Previous" [ref=e691]:
                      - button "Previous" [ref=e692]
                    - tablist [ref=e694]:
                      - tab "tab-0" [selected] [ref=e695]
                      - tab "tab-1" [ref=e697]
                      - tab "tab-2" [ref=e699]
                    - generic "Next" [ref=e701]:
                      - button "Next" [ref=e702]
                  - link "See more" [ref=e704]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a2bbfa156864cbdbb72bbd2602ec8b6
            - article [ref=e705] [cursor=pointer]:
              - generic [ref=e711]:
                - generic [ref=e713]:
                  - link "San Jose" [ref=e715]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-San-Jose,California
                    - heading "San Jose" [level=2] [ref=e716]
                  - button "My location" [ref=e717]
                  - button "More options" [ref=e719]
                - generic [ref=e723]:
                  - generic [ref=e724]:
                    - generic [ref=e726]:
                      - link "Clear" [ref=e727]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-San-Jose,California
                        - img "Clear" [ref=e728]
                      - link "19°C" [ref=e729]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-San-Jose,California
                        - generic [ref=e730]: ‎19‎
                        - generic [ref=e732]: ‎°C‎
                    - generic [ref=e734]:
                      - link "Heat - AdvisoryHeat advisory" [ref=e736]:
                        - /url: https://www.msn.com/en-in/weather/maps/severeweather/in-San-Jose,California
                        - img "Heat - Advisory" [ref=e738]
                        - text: Heat advisory
                      - link "See full forecast" [ref=e739]:
                        - /url: https://www.msn.com/en-in/weather/maps/severeweather/in-San-Jose,California
                        - img "arrow" [ref=e740]
                  - generic [ref=e745]:
                    - link "Larger map" [ref=e746]:
                      - /url: ""
                      - img
                      - generic [ref=e747]:
                        - generic:
                          - generic:
                            - img
                            - img
                    - link "Check more alert details" [ref=e748]:
                      - /url: ""
                      - generic "Check more alert details" [ref=e749]
                      - img [ref=e751]
                    - link "Click to see more information" [ref=e752]:
                      - /url: ""
                      - img [ref=e753]
                - button "See full forecast" [ref=e756]
            - article "Pakistan reacts with 'act of war' remark after CR Patil's 'not a single drop' comment" [ref=e757] [cursor=pointer]:
              - generic [ref=e759]:
                - img [ref=e760]
                - generic [ref=e761]:
                  - generic [ref=e762]:
                    - generic [ref=e763]:
                      - generic [ref=e764]:
                        - img [ref=e765]
                        - generic [ref=e766]: The Indian Express
                      - generic [ref=e767]: ·
                      - generic [ref=e768]: 3h
                    - link "Pakistan reacts with 'act of war' remark after CR Patil's 'not a single drop' comment, The Indian Express" [ref=e769]:
                      - /url: https://www.msn.com/en-in/news/india/pakistan-reacts-with-act-of-war-remark-after-cr-patil-s-not-a-single-drop-comment/ar-AA25roYh
                      - text: Pakistan reacts with 'act of war' remark after CR Patil's 'not a single drop' comment
                  - generic "Pakistan reacts with 'act of war' remark after CR Patil's 'not a single drop' comment" [ref=e772]:
                    - generic [ref=e774]:
                      - generic [ref=e775]:
                        - button "11 Like" [ref=e776]:
                          - generic [ref=e777]:
                            - img [ref=e778]
                            - generic [ref=e780]: "11"
                        - button "Dislike" [ref=e781]:
                          - img [ref=e783]
                      - link "View comments 1 Comment" [ref=e786]:
                        - /url: https://www.msn.com/en-in/news/india/pakistan-reacts-with-act-of-war-remark-after-cr-patil-s-not-a-single-drop-comment/ar-AA25roYh#comments
                        - button "View comments 1 Comment" [ref=e787]:
                          - img [ref=e788]
                        - generic [ref=e790]: "1"
                - generic [ref=e791]:
                  - button "Hide this story" [ref=e792]:
                    - img [ref=e793]
                    - text: Hide this story
                  - button "See more" [ref=e794]:
                    - img [ref=e795]
            - article "Isha Rikhi confirms marrying Badshah, shares first picture with him" [ref=e796] [cursor=pointer]:
              - generic [ref=e798]:
                - img [ref=e799]
                - generic [ref=e800]:
                  - generic [ref=e801]:
                    - generic [ref=e802]:
                      - generic [ref=e803]:
                        - img [ref=e804]
                        - generic [ref=e805]: Times Now
                      - generic [ref=e806]: ·
                      - generic [ref=e807]: 1d
                    - link "Isha Rikhi confirms marrying Badshah, shares first picture with him, Times Now" [ref=e808]:
                      - /url: https://www.msn.com/en-in/entertainment/bollywood/isha-rikhi-confirms-marrying-badshah-shares-first-picture-with-him/ar-AA25l8NJ
                      - text: Isha Rikhi confirms marrying Badshah, shares first picture with him
                  - generic "Isha Rikhi confirms marrying Badshah, shares first picture with him" [ref=e811]:
                    - generic [ref=e813]:
                      - generic [ref=e814]:
                        - button "162 Like" [ref=e815]:
                          - generic [ref=e816]:
                            - img [ref=e817]
                            - generic [ref=e819]: "162"
                        - button "Dislike" [ref=e820]:
                          - img [ref=e822]
                      - link "Start the conversation" [ref=e825]:
                        - /url: https://www.msn.com/en-in/entertainment/bollywood/isha-rikhi-confirms-marrying-badshah-shares-first-picture-with-him/ar-AA25l8NJ#comments
                        - button "Start the conversation" [ref=e826]:
                          - img [ref=e827]
                - generic [ref=e829]:
                  - button "Hide this story" [ref=e830]:
                    - img [ref=e831]
                    - text: Hide this story
                  - button "See more" [ref=e832]:
                    - img [ref=e833]
            - article [ref=e834] [cursor=pointer]
            - article "Inside Sunil Grover’s stunning two storey dream home" [ref=e841] [cursor=pointer]:
              - generic [ref=e843]:
                - img [ref=e844]
                - generic [ref=e845]:
                  - generic [ref=e846]:
                    - generic [ref=e847]:
                      - generic [ref=e848]:
                        - img [ref=e849]
                        - generic [ref=e850]: The Times of India
                      - generic [ref=e851]: ·
                      - generic [ref=e852]: 5d
                    - link "Inside Sunil Grover’s stunning two storey dream home, The Times of India" [ref=e853]:
                      - /url: https://www.msn.com/en-in/travel/news/inside-sunil-grover-s-stunning-two-storey-dream-home/ss-AA24Z66O
                      - text: Inside Sunil Grover’s stunning two storey dream home
                  - generic "Inside Sunil Grover’s stunning two storey dream home" [ref=e856]:
                    - generic [ref=e858]:
                      - generic [ref=e859]:
                        - button "43 Like" [ref=e860]:
                          - generic [ref=e861]:
                            - img [ref=e862]
                            - generic [ref=e864]: "43"
                        - button "Dislike" [ref=e865]:
                          - img [ref=e867]
                      - link "Start the conversation" [ref=e870]:
                        - /url: https://www.msn.com/en-in/travel/news/inside-sunil-grover-s-stunning-two-storey-dream-home/ss-AA24Z66O#comments
                        - button "Start the conversation" [ref=e871]:
                          - img [ref=e872]
                - generic [ref=e874]:
                  - button "Hide this story" [ref=e875]:
                    - img [ref=e876]
                    - text: Hide this story
                  - button "See more" [ref=e877]:
                    - img [ref=e878]
            - article [ref=e879] [cursor=pointer]
            - article [ref=e886] [cursor=pointer]:
              - generic [ref=e891]:
                - generic [ref=e893]:
                  - link "Games" [ref=e895]:
                    - /url: https://www.msn.com/en-in/play
                    - heading "Games" [level=2] [ref=e896]
                  - button "More options" [ref=e898]
                - list [ref=e902]:
                  - generic:
                    - listitem [ref=e903]:
                      - link "Car Park Simulator" [ref=e904]:
                        - /url: https://www.msn.com/en-in/play/games/car-park-simulator/cg-9n96gnlxsktg?ocid=hpmsn&cvid=6a2bbfa156864cbdbb72bbd2602ec8b6&ei=6
                        - generic [ref=e905]:
                          - img "Car Park Simulator"
                    - listitem [ref=e906]:
                      - 'link "Playground Man: Ragdoll Show" [ref=e907]':
                        - /url: https://www.msn.com/en-in/play/games/playground-man-ragdoll-show/cg-9nj10wf288jp?ocid=hpmsn&cvid=6a2bbfa156864cbdbb72bbd2602ec8b6&ei=6
                        - generic [ref=e908]:
                          - 'img "Playground Man: Ragdoll Show"'
                    - listitem [ref=e909]:
                      - link "bloxd.io" [ref=e910]:
                        - /url: https://www.msn.com/en-in/play/games/bloxdio/cg-9p0rj8ffrg7h?ocid=hpmsn&cvid=6a2bbfa156864cbdbb72bbd2602ec8b6&ei=6
                        - generic [ref=e911]:
                          - img "bloxd.io"
                    - listitem [ref=e912]:
                      - link "Space Waves" [ref=e913]:
                        - /url: https://www.msn.com/en-in/play/games/space-waves/cg-9nm5764dbppg?ocid=hpmsn&cvid=6a2bbfa156864cbdbb72bbd2602ec8b6&ei=6
                        - generic [ref=e914]:
                          - img "Space Waves"
                    - listitem [ref=e915]:
                      - link "Drive Quest" [ref=e916]:
                        - /url: https://www.msn.com/en-in/play/games/drive-quest/cg-9p4tn53ndjkw?ocid=hpmsn&cvid=6a2bbfa156864cbdbb72bbd2602ec8b6&ei=6
                        - generic [ref=e917]:
                          - img "Drive Quest"
                    - listitem [ref=e918]:
                      - link "Mergest Kingdom" [ref=e919]:
                        - /url: https://www.msn.com/en-in/play/games/mergest-kingdom/cg-9pc19rxfzl82?ocid=hpmsn&cvid=6a2bbfa156864cbdbb72bbd2602ec8b6&ei=6
                        - generic [ref=e920]:
                          - img "Mergest Kingdom"
                    - listitem [ref=e921]:
                      - link "LuckyBlocks.io" [ref=e922]:
                        - /url: https://www.msn.com/en-in/play/games/luckyblocksio/cg-9nn8cw6lctxj?ocid=hpmsn&cvid=6a2bbfa156864cbdbb72bbd2602ec8b6&ei=6
                        - generic [ref=e923]:
                          - img "LuckyBlocks.io"
                    - listitem [ref=e924]:
                      - link "Piece of Cake" [ref=e925]:
                        - /url: https://www.msn.com/en-in/play/games/piece-of-cake/cg-9n5mln8fpwg8?ocid=hpmsn&cvid=6a2bbfa156864cbdbb72bbd2602ec8b6&ei=6
                        - generic [ref=e926]:
                          - img "Piece of Cake"
                    - listitem [ref=e927]:
                      - link "Arrow Slide Puzzle" [ref=e928]:
                        - /url: https://www.msn.com/en-in/play/games/arrow-slide-puzzle/cg-9p4rw4gjxb1f?ocid=hpmsn&cvid=6a2bbfa156864cbdbb72bbd2602ec8b6&ei=6
                        - generic [ref=e929]:
                          - img "Arrow Slide Puzzle"
                - link "Explore more games" [ref=e932]:
                  - /url: https://www.msn.com/en-in/play
          - article [ref=e934]
          - generic [ref=e936]:
            - article [ref=e937] [cursor=pointer]:
              - generic [ref=e942]:
                - generic [ref=e943]:
                  - generic [ref=e944]:
                    - link "Recommended videos" [ref=e945]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e946]
                    - link "Recommended videos" [ref=e949]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e950]:
                    - generic:
                      - link "See more" [ref=e951]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e952]:
                        - button "More options" [ref=e953]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e955]:
                  - generic [ref=e957]:
                    - generic [ref=e959]:
                      - generic:
                        - article [ref=e962]:
                          - generic [ref=e963]:
                            - img "Ben Shapiro Takes On the Internet’s Wokest TikToks" [ref=e965]
                            - generic [ref=e967]: 09:21
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e968]:
                              - generic [ref=e969]:
                                - img "Ben Shapiro" [ref=e970]
                                - generic [ref=e971]:
                                  - generic:
                                    - generic "Ben Shapiro" [ref=e972]
                                    - generic [ref=e973]: ·
                                    - generic [ref=e974]: 12h
                              - link "Ben Shapiro takes on the internet’s wokest TikToks" [ref=e975]:
                                - /url: https://www.msn.com/en-in/news/techandscience/ben-shapiro-takes-on-the-internet-s-wokest-tiktoks/vi-AA25pZoK?ocid=hpmsn
                                - heading "Ben Shapiro takes on the internet’s wokest TikToks" [level=2] [ref=e976]:
                                  - generic: Ben Shapiro takes on the internet’s wokest TikToks
                            - button "See more" [ref=e980]
                        - article [ref=e983]:
                          - generic [ref=e984]:
                            - img "The Global Economy Is Quietly Moving On From China" [ref=e986]
                            - generic [ref=e988]: 15:13
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e989]:
                              - generic [ref=e990]:
                                - img "Economics Explained" [ref=e991]
                                - generic [ref=e992]:
                                  - generic:
                                    - generic "Economics Explained" [ref=e993]
                                    - generic [ref=e994]: ·
                                    - generic [ref=e995]: 22h
                              - link "The global economy is quietly moving on from China" [ref=e996]:
                                - /url: https://www.msn.com/en-in/money/markets/the-global-economy-is-quietly-moving-on-from-china/vi-AA25mX4J?ocid=hpmsn
                                - heading "The global economy is quietly moving on from China" [level=2] [ref=e997]:
                                  - generic: The global economy is quietly moving on from China
                            - button "See more" [ref=e1001]
                        - article "Watch what happens when you ride 1,000 miles across the US by train - illegally" [ref=e1004]:
                          - generic [ref=e1005]:
                            - img "Watch What Happens When You Ride 1,000 Miles Across the U.S. by Train - Illegally" [ref=e1007]
                            - generic [ref=e1009]: 20:03
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1010]:
                              - generic [ref=e1011]:
                                - img "Airrack" [ref=e1012]
                                - generic [ref=e1013]:
                                  - generic:
                                    - generic "Airrack" [ref=e1014]
                                    - generic [ref=e1015]: ·
                                    - generic [ref=e1016]: 18h
                              - link "Watch what happens when you ride 1,000 miles across the US by train - illegally" [ref=e1017]:
                                - /url: https://www.msn.com/en-in/news/india/watch-what-happens-when-you-ride-1-000-miles-across-the-us-by-train-illegally/vi-AA1YZWGc?ocid=hpmsn
                                - heading "Watch what happens when you ride 1,000 miles across the US by train - illegally" [level=2] [ref=e1018]:
                                  - generic: Watch what happens when you ride 1,000 miles across the US by train - illegally
                            - button "See more" [ref=e1022]
                        - article [ref=e1025]:
                          - generic [ref=e1026]:
                            - img "This Chubby Mountain Rodent Is Tougher Than It Looks" [ref=e1028]
                            - generic [ref=e1030]: 08:45
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1031]:
                              - generic [ref=e1032]:
                                - img "Animalogic" [ref=e1033]
                                - generic [ref=e1034]:
                                  - generic:
                                    - generic "Animalogic" [ref=e1035]
                                    - generic [ref=e1036]: ·
                                    - generic [ref=e1037]: 21h
                              - link "This chubby mountain rodent is tougher than it looks" [ref=e1038]:
                                - /url: https://www.msn.com/en-in/autos/news/this-chubby-mountain-rodent-is-tougher-than-it-looks/vi-AA25nLDC?ocid=hpmsn
                                - heading "This chubby mountain rodent is tougher than it looks" [level=2] [ref=e1039]:
                                  - generic: This chubby mountain rodent is tougher than it looks
                            - button "See more" [ref=e1043]
                        - article [ref=e1046]:
                          - generic [ref=e1047]:
                            - img "My Shelby GT500 Has Finally Arrived In The UK" [ref=e1049]
                            - generic [ref=e1051]: 19:28
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1052]:
                              - generic [ref=e1053]:
                                - img "Shmee150" [ref=e1054]
                                - generic [ref=e1055]:
                                  - generic:
                                    - generic "Shmee150" [ref=e1056]
                                    - generic [ref=e1057]: ·
                                    - generic [ref=e1058]: 5h
                              - link "My Shelby GT500 has finally arrived in the UK" [ref=e1059]:
                                - /url: https://www.msn.com/en-in/money/topstories/my-shelby-gt500-has-finally-arrived-in-the-uk/vi-AA25r0uK?ocid=hpmsn
                                - heading "My Shelby GT500 has finally arrived in the UK" [level=2] [ref=e1060]:
                                  - generic: My Shelby GT500 has finally arrived in the UK
                            - button "See more" [ref=e1064]
                        - article [ref=e1067]:
                          - generic [ref=e1068]:
                            - img "America’s Best Fast Food Might Now Come From Gas Stations" [ref=e1070]
                            - generic [ref=e1072]: 15:25
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1073]:
                              - generic [ref=e1074]:
                                - img "The Food Theorists" [ref=e1075]
                                - generic [ref=e1076]:
                                  - generic:
                                    - generic "The Food Theorists" [ref=e1077]
                                    - generic [ref=e1078]: ·
                                    - generic [ref=e1079]: 14h
                              - link "America’s best fast food might now come from gas stations" [ref=e1080]:
                                - /url: https://www.msn.com/en-in/foodanddrink/other/america-s-best-fast-food-might-now-come-from-gas-stations/vi-AA22TXhe?ocid=hpmsn
                                - heading "America’s best fast food might now come from gas stations" [level=2] [ref=e1081]:
                                  - generic: America’s best fast food might now come from gas stations
                            - button "See more" [ref=e1085]
                        - article "This tiny pod cabin combines luxury, nature, and minimalist design perfectly" [ref=e1088]:
                          - generic [ref=e1089]:
                            - img "This Tiny Pod Cabin Combines Luxury, Nature, and Minimalist Design Perfectly" [ref=e1091]
                            - generic [ref=e1093]: 07:24
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1094]:
                              - generic [ref=e1095]:
                                - img "NEVER TOO SMALL" [ref=e1096]
                                - generic "NEVER TOO SMALL" [ref=e1098]
                              - link "This tiny pod cabin combines luxury, nature, and minimalist design perfectly" [ref=e1099]:
                                - /url: https://www.msn.com/en-in/travel/news/this-tiny-pod-cabin-combines-luxury-nature-and-minimalist-design-perfectly/vi-AA22Z5T4?ocid=hpmsn
                                - heading "This tiny pod cabin combines luxury, nature, and minimalist design perfectly" [level=2] [ref=e1100]:
                                  - generic: This tiny pod cabin combines luxury, nature, and minimalist design perfectly
                            - button "See more" [ref=e1104]
                        - article [ref=e1107]:
                          - generic [ref=e1108]:
                            - 'img "Watch Me Grow: Tobacco Plant Time Lapse 🌱" [ref=e1110]'
                            - generic [ref=e1112]: 02:06
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1113]:
                              - generic [ref=e1114]:
                                - img "Boxlapse" [ref=e1115]
                                - generic [ref=e1116]:
                                  - generic:
                                    - generic "Boxlapse" [ref=e1117]
                                    - generic [ref=e1118]: ·
                                    - generic [ref=e1119]: 11h
                              - 'link "Watch me grow: Tobacco plant time lapse 🌱" [ref=e1120]':
                                - /url: https://www.msn.com/en-in/foodanddrink/recipes/watch-me-grow-tobacco-plant-time-lapse/vi-AA25qmtT?ocid=hpmsn
                                - 'heading "Watch me grow: Tobacco plant time lapse 🌱" [level=2] [ref=e1121]':
                                  - generic: "Watch me grow: Tobacco plant time lapse 🌱"
                            - button "See more" [ref=e1125]
                        - article "They thought Chick-fil-A would win - then Jollibee entered the competition" [ref=e1128]:
                          - generic [ref=e1129]:
                            - img "“They Thought Chick-fil-A Would Win” - Then Jollibee Entered the Competition" [ref=e1131]
                            - generic [ref=e1133]: 27:41
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1134]:
                              - generic [ref=e1135]:
                                - img "Joshua Weissman" [ref=e1136]
                                - generic [ref=e1137]:
                                  - generic:
                                    - generic "Joshua Weissman" [ref=e1138]
                                    - generic [ref=e1139]: ·
                                    - generic [ref=e1140]: 20h
                              - link "They thought Chick-fil-A would win - then Jollibee entered the competition" [ref=e1141]:
                                - /url: https://www.msn.com/en-in/foodanddrink/other/they-thought-chick-fil-a-would-win-then-jollibee-entered-the-competition/vi-AA22Va2o?ocid=hpmsn
                                - heading "They thought Chick-fil-A would win - then Jollibee entered the competition" [level=2] [ref=e1142]:
                                  - generic: They thought Chick-fil-A would win - then Jollibee entered the competition
                            - button "See more" [ref=e1146]
                        - article [ref=e1149]:
                          - generic [ref=e1150]:
                            - img "Indonesian Sambal Travels from Bali to Europe" [ref=e1152]
                            - generic [ref=e1154]: 06:21
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1155]:
                              - generic [ref=e1156]:
                                - img "Laurence Benson" [ref=e1157]
                                - generic [ref=e1158]:
                                  - generic:
                                    - generic "Laurence Benson" [ref=e1159]
                                    - generic [ref=e1160]: ·
                                    - generic [ref=e1161]: 4h
                              - link "Indonesian sambal travels from Bali to Europe" [ref=e1162]:
                                - /url: https://www.msn.com/en-in/news/world/indonesian-sambal-travels-from-bali-to-europe/vi-AA25rsB6?ocid=hpmsn
                                - heading "Indonesian sambal travels from Bali to Europe" [level=2] [ref=e1163]:
                                  - generic: Indonesian sambal travels from Bali to Europe
                            - button "See more" [ref=e1167]
                        - article [ref=e1170]:
                          - generic [ref=e1171]:
                            - img "DIY Double Down - Building a Better Version at Home" [ref=e1173]
                            - generic [ref=e1175]: 11:41
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1176]:
                              - generic [ref=e1177]:
                                - img "Joshua Weissman" [ref=e1178]
                                - generic [ref=e1179]:
                                  - generic:
                                    - generic "Joshua Weissman" [ref=e1180]
                                    - generic [ref=e1181]: ·
                                    - generic [ref=e1182]: 20h
                              - link "DIY double down - building a better version at home" [ref=e1183]:
                                - /url: https://www.msn.com/en-in/lifestyle/smart-living/diy-double-down-building-a-better-version-at-home/vi-AA21OUSQ?ocid=hpmsn
                                - heading "DIY double down - building a better version at home" [level=2] [ref=e1184]:
                                  - generic: DIY double down - building a better version at home
                            - button "See more" [ref=e1188]
                        - article "Trevor Noah learned the truth about Scottish drinking the hard way" [ref=e1191]:
                          - generic [ref=e1192]:
                            - img "Trevor Noah Learned the Truth About Scottish Drinking the Hard Way Thumbnail" [ref=e1194]
                            - generic [ref=e1196]: 10:17
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1197]:
                              - generic [ref=e1198]:
                                - img "Trevor Noah" [ref=e1199]
                                - generic [ref=e1200]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1201]
                                    - generic [ref=e1202]: ·
                                    - generic [ref=e1203]: 23h
                              - link "Trevor Noah learned the truth about Scottish drinking the hard way" [ref=e1204]:
                                - /url: https://www.msn.com/en-in/news/india/trevor-noah-learned-the-truth-about-scottish-drinking-the-hard-way/vi-AA25nt4D?ocid=hpmsn
                                - heading "Trevor Noah learned the truth about Scottish drinking the hard way" [level=2] [ref=e1205]:
                                  - generic: Trevor Noah learned the truth about Scottish drinking the hard way
                            - button "See more" [ref=e1209]
                        - article [ref=e1212]:
                          - generic [ref=e1213]:
                            - img "Avoiding Crash With Volkswagen Golf During Track Run" [ref=e1215]
                            - generic [ref=e1217]: 09:30
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1218]:
                              - generic [ref=e1219]:
                                - img "Misha Charoudin" [ref=e1220]
                                - generic [ref=e1221]:
                                  - generic:
                                    - generic "Misha Charoudin" [ref=e1222]
                                    - generic [ref=e1223]: ·
                                    - generic [ref=e1224]: 5h
                              - link "Avoiding crash with Volkswagen Golf during track run" [ref=e1225]:
                                - /url: https://www.msn.com/en-in/autos/news/avoiding-crash-with-volkswagen-golf-during-track-run/vi-AA25qEvC?ocid=hpmsn
                                - heading "Avoiding crash with Volkswagen Golf during track run" [level=2] [ref=e1226]:
                                  - generic: Avoiding crash with Volkswagen Golf during track run
                            - button "See more" [ref=e1230]
                        - article "You’re ordering Chipotle wrong, and losing 50% of your food" [ref=e1233]:
                          - generic [ref=e1234]:
                            - img "You’re Ordering Chipotle Wrong, And Losing 50% of Your Food" [ref=e1236]
                            - generic [ref=e1238]: 14:56
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1239]:
                              - generic [ref=e1240]:
                                - img "The Food Theorists" [ref=e1241]
                                - generic [ref=e1242]:
                                  - generic:
                                    - generic "The Food Theorists" [ref=e1243]
                                    - generic [ref=e1244]: ·
                                    - generic [ref=e1245]: 14h
                              - link "You’re ordering Chipotle wrong, and losing 50% of your food" [ref=e1246]:
                                - /url: https://www.msn.com/en-in/foodanddrink/other/you-re-ordering-chipotle-wrong-and-losing-50-of-your-food/vi-AA200V3v?ocid=hpmsn
                                - heading "You’re ordering Chipotle wrong, and losing 50% of your food" [level=2] [ref=e1247]:
                                  - generic: You’re ordering Chipotle wrong, and losing 50% of your food
                            - button "See more" [ref=e1251]
                        - article [ref=e1254]:
                          - generic [ref=e1255]:
                            - img "Do These 6 Viral Kitchen Hacks Actually Work？" [ref=e1257]
                            - generic [ref=e1259]: 23:10
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1260]:
                              - generic [ref=e1261]:
                                - img "Barry Lewis" [ref=e1262]
                                - generic [ref=e1263]:
                                  - generic:
                                    - generic "Barry Lewis" [ref=e1264]
                                    - generic [ref=e1265]: ·
                                    - generic [ref=e1266]: 18h
                              - link "Do these 6 viral kitchen hacks actually work?" [ref=e1267]:
                                - /url: https://www.msn.com/en-in/lifestyle/smart-living/do-these-6-viral-kitchen-hacks-actually-work/vi-AA25owY0?ocid=hpmsn
                                - heading "Do these 6 viral kitchen hacks actually work?" [level=2] [ref=e1268]:
                                  - generic: Do these 6 viral kitchen hacks actually work?
                            - button "See more" [ref=e1272]
                        - article [ref=e1275]:
                          - generic [ref=e1276]:
                            - img "Admin Abuse In Roblox Somehow Got Even Worse" [ref=e1278]
                            - generic [ref=e1280]: 18:17
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1281]:
                              - generic [ref=e1282]:
                                - img "Flamingo" [ref=e1283]
                                - generic [ref=e1284]:
                                  - generic:
                                    - generic "Flamingo" [ref=e1285]
                                    - generic [ref=e1286]: ·
                                    - generic [ref=e1287]: 16h
                              - link "Admin abuse in Roblox somehow got even worse" [ref=e1288]:
                                - /url: https://www.msn.com/en-in/video/news/admin-abuse-in-roblox-somehow-got-even-worse/vi-AA23yt8e?ocid=hpmsn
                                - heading "Admin abuse in Roblox somehow got even worse" [level=2] [ref=e1289]:
                                  - generic: Admin abuse in Roblox somehow got even worse
                            - button "See more" [ref=e1293]
                        - article [ref=e1296]:
                          - generic [ref=e1297]:
                            - img "Crispy, Spicy, Perfect… Why Mexican Potatoes Are So Popular" [ref=e1299]
                            - generic [ref=e1301]: 11:48
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1302]:
                              - generic [ref=e1303]:
                                - img "acooknamedMatt" [ref=e1304]
                                - generic [ref=e1305]:
                                  - generic:
                                    - generic "acooknamedMatt" [ref=e1306]
                                    - generic [ref=e1307]: ·
                                    - generic [ref=e1308]: 17h
                              - link "Crispy, spicy, perfect... why Mexican potatoes are so popular" [ref=e1309]:
                                - /url: https://www.msn.com/en-in/news/india/crispy-spicy-perfect-why-mexican-potatoes-are-so-popular/vi-AA20laaD?ocid=hpmsn
                                - heading "Crispy, spicy, perfect... why Mexican potatoes are so popular" [level=2] [ref=e1310]:
                                  - generic: Crispy, spicy, perfect... why Mexican potatoes are so popular
                            - button "See more" [ref=e1314]
                        - article [ref=e1317]:
                          - generic [ref=e1318]:
                            - img "This Lazy Pasta Recipe Tastes Like It's From a 5 Star Chef" [ref=e1320]
                            - generic [ref=e1322]: 09:50
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1323]:
                              - generic [ref=e1324]:
                                - img "Mr Make It Happen" [ref=e1325]
                                - generic [ref=e1326]:
                                  - generic:
                                    - generic "Mr Make It Happen" [ref=e1327]
                                    - generic [ref=e1328]: ·
                                    - generic [ref=e1329]: 17h
                              - link "This lazy pasta recipe tastes like it's from a 5 star chef" [ref=e1330]:
                                - /url: https://www.msn.com/en-in/foodanddrink/recipes/this-lazy-pasta-recipe-tastes-like-it-s-from-a-5-star-chef/vi-AA1XP6OP?ocid=hpmsn
                                - heading "This lazy pasta recipe tastes like it's from a 5 star chef" [level=2] [ref=e1331]:
                                  - generic: This lazy pasta recipe tastes like it's from a 5 star chef
                            - button "See more" [ref=e1335]
                        - article [ref=e1338]:
                          - generic [ref=e1339]:
                            - img "I Rebuilt A Car That Was In A Serious Crash - And Gave It Back To BMW" [ref=e1341]
                            - generic [ref=e1343]: 17:44
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1344]:
                              - generic [ref=e1345]:
                                - img "Mat Armstrong" [ref=e1346]
                                - generic [ref=e1347]:
                                  - generic:
                                    - generic "Mat Armstrong" [ref=e1348]
                                    - generic [ref=e1349]: ·
                                    - generic [ref=e1350]: 19h
                              - link "I rebuilt a car that was in a serious crash - and gave it back to BMW" [ref=e1351]:
                                - /url: https://www.msn.com/en-in/autos/news/i-rebuilt-a-car-that-was-in-a-serious-crash-and-gave-it-back-to-bmw/vi-AA25nPyn?ocid=hpmsn
                                - heading "I rebuilt a car that was in a serious crash - and gave it back to BMW" [level=2] [ref=e1352]:
                                  - generic: I rebuilt a car that was in a serious crash - and gave it back to BMW
                            - button "See more" [ref=e1356]
                        - article [ref=e1359]:
                          - generic [ref=e1360]:
                            - img "He Took on the Olympic Champion - And Hit a Wall Fast" [ref=e1362]
                            - generic [ref=e1364]: 17:19
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1365]:
                              - generic [ref=e1366]:
                                - img "Magnus Midtbø" [ref=e1367]
                                - generic [ref=e1368]:
                                  - generic:
                                    - generic "Magnus Midtbø" [ref=e1369]
                                    - generic [ref=e1370]: ·
                                    - generic [ref=e1371]: 20h
                              - link "He took on the Olympic champion - and hit a wall fast" [ref=e1372]:
                                - /url: https://www.msn.com/en-in/sports/other/he-took-on-the-olympic-champion-and-hit-a-wall-fast/vi-AA211iF2?ocid=hpmsn
                                - heading "He took on the Olympic champion - and hit a wall fast" [level=2] [ref=e1373]:
                                  - generic: He took on the Olympic champion - and hit a wall fast
                            - button "See more" [ref=e1377]
                        - link "See more" [ref=e1379]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1380]
                          - text: See more
                    - button "next" [ref=e1384]:
                      - img [ref=e1387]
            - 'article "Neurologist says this simple body measurement may predict how long you live: ''It is neither BMI nor weight''" [ref=e1389] [cursor=pointer]':
              - generic [ref=e1391]:
                - img [ref=e1392]
                - generic [ref=e1393]:
                  - generic [ref=e1394]:
                    - generic [ref=e1396]:
                      - img [ref=e1397]
                      - generic [ref=e1398]: Hindustan Times
                    - 'link "Neurologist says this simple body measurement may predict how long you live: ''It is neither BMI nor weight'', Hindustan Times" [ref=e1399]':
                      - /url: https://www.msn.com/en-in/health/other/neurologist-says-this-simple-body-measurement-may-predict-how-long-you-live-it-is-neither-bmi-nor-weight/ar-AA1ZkYlq
                      - text: "Neurologist says this simple body measurement may predict how long you live: 'It is neither BMI nor weight'"
                  - 'generic "Neurologist says this simple body measurement may predict how long you live: ''It is neither BMI nor weight''" [ref=e1402]':
                    - generic [ref=e1404]:
                      - generic [ref=e1405]:
                        - button "21 Like" [ref=e1406]:
                          - generic [ref=e1407]:
                            - img [ref=e1408]
                            - generic [ref=e1410]: "21"
                        - button "Dislike" [ref=e1411]:
                          - img [ref=e1413]
                      - link "View comments 1 Comment" [ref=e1416]:
                        - /url: https://www.msn.com/en-in/health/other/neurologist-says-this-simple-body-measurement-may-predict-how-long-you-live-it-is-neither-bmi-nor-weight/ar-AA1ZkYlq#comments
                        - button "View comments 1 Comment" [ref=e1417]:
                          - img [ref=e1418]
                        - generic [ref=e1420]: "1"
                - generic [ref=e1421]:
                  - button "Hide this story" [ref=e1422]:
                    - img [ref=e1423]
                    - text: Hide this story
                  - button "See more" [ref=e1424]:
                    - img [ref=e1425]
            - article [ref=e1426] [cursor=pointer]:
              - generic [ref=e1432]:
                - generic [ref=e1434]:
                  - img "World Cup coverage" [ref=e1436]
                  - link "World Cup coverage" [ref=e1437]:
                    - /url: https://www.msn.com/en-in/sports/moments/league/ka-KA423370E4?serviceName=contentRetrieverService&query=FIFA+World+Cup+2026--304&newsid=AA25qfxm&ocid=hpmsn&cvid=6a2bbfa156864cbdbb72bbd2602ec8b6
                    - heading "World Cup coverage" [level=2] [ref=e1438]
                  - button "More interests" [ref=e1439]
                  - generic [ref=e1440]:
                    - generic "Popular in your area" [ref=e1441]:
                      - button "Popular in your area" [ref=e1442]
                    - button "More options" [ref=e1443]
                - link "+10 · Curated by Copilot FIFA World Cup 2026 opens with drama on and off pitch" [ref=e1447]:
                  - /url: https://www.msn.com/en-in/sports/moments/league/ka-KA423370E4?serviceName=contentRetrieverService&query=FIFA+World+Cup+2026--304&newsid=AA25qfxm&ocid=hpmsn&cvid=6a2bbfa156864cbdbb72bbd2602ec8b6
                  - generic [ref=e1451]: +10 · Curated by Copilot
                  - button "FIFA World Cup 2026 opens with drama on and off pitch" [ref=e1452]
                - generic [ref=e1454]:
                  - generic [ref=e1455]:
                    - generic "Previous" [ref=e1456]:
                      - button "Previous" [ref=e1457]
                    - tablist [ref=e1459]:
                      - tab "tab-0" [selected] [ref=e1460]
                      - tab "tab-1" [ref=e1462]
                      - tab "tab-2" [ref=e1464]
                      - tab "tab-3" [ref=e1466]
                      - tab "tab-4" [ref=e1468]
                      - tab "tab-5"
                    - generic "Next" [ref=e1470]:
                      - button "Next" [ref=e1471]
                  - link "See full coverage" [ref=e1473]:
                    - /url: https://www.msn.com/en-in/sports/moments/league/ka-KA423370E4?serviceName=contentRetrieverService&query=FIFA+World+Cup+2026--304&newsid=AA25qfxm&ocid=hpmsn&cvid=6a2bbfa156864cbdbb72bbd2602ec8b6
            - 'article "Amid ''Rs 370 ki biryani'' row, Ranvir Shorey defends comedians: ''No need to turn into a lynch mob''" [ref=e1474] [cursor=pointer]':
              - generic [ref=e1476]:
                - img [ref=e1477]
                - generic [ref=e1478]:
                  - generic [ref=e1479]:
                    - generic [ref=e1480]:
                      - generic [ref=e1481]:
                        - img [ref=e1482]
                        - generic [ref=e1483]: NDTV 24x7
                      - generic [ref=e1484]: ·
                      - generic [ref=e1485]: 20h
                    - 'link "Amid ''Rs 370 ki biryani'' row, Ranvir Shorey defends comedians: ''No need to turn into a lynch mob'', NDTV 24x7" [ref=e1486]':
                      - /url: https://www.msn.com/en-in/news/india/amid-rs-370-ki-biryani-row-ranvir-shorey-defends-comedians-no-need-to-turn-into-a-lynch-mob/ar-AA25o8Yb
                      - text: "Amid 'Rs 370 ki biryani' row, Ranvir Shorey defends comedians: 'No need to turn into a lynch mob'"
                  - 'generic "Amid ''Rs 370 ki biryani'' row, Ranvir Shorey defends comedians: ''No need to turn into a lynch mob''" [ref=e1489]':
                    - generic [ref=e1491]:
                      - generic [ref=e1492]:
                        - button "3 Like" [ref=e1493]:
                          - generic [ref=e1494]:
                            - img [ref=e1495]
                            - generic [ref=e1497]: "3"
                        - button "Dislike" [ref=e1498]:
                          - img [ref=e1500]
                      - link "View comments 2 Comment" [ref=e1503]:
                        - /url: https://www.msn.com/en-in/news/india/amid-rs-370-ki-biryani-row-ranvir-shorey-defends-comedians-no-need-to-turn-into-a-lynch-mob/ar-AA25o8Yb#comments
                        - button "View comments 2 Comment" [ref=e1504]:
                          - img [ref=e1505]
                        - generic [ref=e1507]: "2"
                - generic [ref=e1508]:
                  - button "Hide this story" [ref=e1509]:
                    - img [ref=e1510]
                    - text: Hide this story
                  - button "See more" [ref=e1511]:
                    - img [ref=e1512]
            - 'article "Brito dies: Heartbreak for Brazil before their FIFA World Cup 2026 begins" [ref=e1513] [cursor=pointer]':
              - generic [ref=e1515]:
                - img [ref=e1516]
                - generic [ref=e1517]:
                  - generic [ref=e1518]:
                    - generic [ref=e1519]:
                      - generic [ref=e1520]:
                        - img [ref=e1521]
                        - generic [ref=e1522]: The Economic Times
                      - generic [ref=e1523]: ·
                      - generic [ref=e1524]: 4h
                    - 'link "Brito dies: Heartbreak for Brazil before their FIFA World Cup 2026 begins, The Economic Times" [ref=e1525]':
                      - /url: https://www.msn.com/en-in/sports/fifa_world_cup/brito-dies-heartbreak-for-brazil-before-their-fifa-world-cup-2026-begins/ar-AA25rglT
                      - text: "Brito dies: Heartbreak for Brazil before their FIFA World Cup 2026 begins"
                  - 'generic "Brito dies: Heartbreak for Brazil before their FIFA World Cup 2026 begins" [ref=e1528]':
                    - generic [ref=e1530]:
                      - generic [ref=e1531]:
                        - button "10 Like" [ref=e1532]:
                          - generic [ref=e1533]:
                            - img [ref=e1534]
                            - generic [ref=e1536]: "10"
                        - button "Dislike" [ref=e1537]:
                          - img [ref=e1539]
                      - link "Start the conversation" [ref=e1542]:
                        - /url: https://www.msn.com/en-in/sports/fifa_world_cup/brito-dies-heartbreak-for-brazil-before-their-fifa-world-cup-2026-begins/ar-AA25rglT#comments
                        - button "Start the conversation" [ref=e1543]:
                          - img [ref=e1544]
                - generic [ref=e1546]:
                  - button "Hide this story" [ref=e1547]:
                    - img [ref=e1548]
                    - text: Hide this story
                  - button "See more" [ref=e1549]:
                    - img [ref=e1550]
            - article [ref=e1551] [cursor=pointer]
            - article "What happens when you eat 2 eggs daily" [ref=e1558] [cursor=pointer]:
              - generic [ref=e1560]:
                - img [ref=e1561]
                - generic [ref=e1562]:
                  - generic [ref=e1563]:
                    - generic [ref=e1564]:
                      - generic [ref=e1565]:
                        - img [ref=e1566]
                        - generic [ref=e1567]: The Times of India
                      - generic [ref=e1568]: ·
                      - generic [ref=e1569]: 2w
                    - link "What happens when you eat 2 eggs daily, The Times of India" [ref=e1570]:
                      - /url: https://www.msn.com/en-in/health/other/what-happens-when-you-eat-2-eggs-daily/ss-AA23X8xt
                      - text: What happens when you eat 2 eggs daily
                  - generic "What happens when you eat 2 eggs daily" [ref=e1573]:
                    - generic [ref=e1575]:
                      - generic [ref=e1576]:
                        - button "24 Like" [ref=e1577]:
                          - generic [ref=e1578]:
                            - img [ref=e1579]
                            - generic [ref=e1581]: "24"
                        - button "Dislike" [ref=e1582]:
                          - img [ref=e1584]
                      - link "Start the conversation" [ref=e1587]:
                        - /url: https://www.msn.com/en-in/health/other/what-happens-when-you-eat-2-eggs-daily/ss-AA23X8xt#comments
                        - button "Start the conversation" [ref=e1588]:
                          - img [ref=e1589]
                - generic [ref=e1591]:
                  - button "Hide this story" [ref=e1592]:
                    - img [ref=e1593]
                    - text: Hide this story
                  - button "See more" [ref=e1594]:
                    - img [ref=e1595]
          - generic [ref=e1596]:
            - article [ref=e1597] [cursor=pointer]
            - 'article "Ashoke Pandit: We saw WhatsApp chats between Ranveer Singh, Farhan Akhtar and Ritesh Sidhwani before announcing non-cooperation" [ref=e1604] [cursor=pointer]':
              - generic [ref=e1606]:
                - img [ref=e1607]
                - generic [ref=e1608]:
                  - generic [ref=e1609]:
                    - generic [ref=e1610]:
                      - generic [ref=e1611]:
                        - img [ref=e1612]
                        - generic [ref=e1613]: The Times of India
                      - generic [ref=e1614]: ·
                      - generic [ref=e1615]: 12h
                    - 'link "Ashoke Pandit: We saw WhatsApp chats between Ranveer Singh, Farhan Akhtar and Ritesh Sidhwani before announcing non-cooperation, The Times of India" [ref=e1616]':
                      - /url: https://www.msn.com/en-in/entertainment/bollywood/ashoke-pandit-we-saw-whatsapp-chats-between-ranveer-singh-farhan-akhtar-and-ritesh-sidhwani-before-announcing-non-cooperation/ar-AA25qEAp
                      - text: "Ashoke Pandit: We saw WhatsApp chats between Ranveer Singh, Farhan Akhtar and Ritesh Sidhwani before announcing non-cooperation"
                  - 'generic "Ashoke Pandit: We saw WhatsApp chats between Ranveer Singh, Farhan Akhtar and Ritesh Sidhwani before announcing non-cooperation" [ref=e1619]':
                    - generic [ref=e1621]:
                      - generic [ref=e1622]:
                        - button "6 Like" [ref=e1623]:
                          - generic [ref=e1624]:
                            - img [ref=e1625]
                            - generic [ref=e1627]: "6"
                        - button "Dislike" [ref=e1628]:
                          - img [ref=e1630]
                      - link "View comments 1 Comment" [ref=e1633]:
                        - /url: https://www.msn.com/en-in/entertainment/bollywood/ashoke-pandit-we-saw-whatsapp-chats-between-ranveer-singh-farhan-akhtar-and-ritesh-sidhwani-before-announcing-non-cooperation/ar-AA25qEAp#comments
                        - button "View comments 1 Comment" [ref=e1634]:
                          - img [ref=e1635]
                        - generic [ref=e1637]: "1"
                - generic [ref=e1638]:
                  - button "Hide this story" [ref=e1639]:
                    - img [ref=e1640]
                    - text: Hide this story
                  - button "See more" [ref=e1641]:
                    - img [ref=e1642]
    - contentinfo [ref=e1645]:
      - generic "Feedback" [ref=e1647] [cursor=pointer]:
        - button "Feedback" [ref=e1648]:
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