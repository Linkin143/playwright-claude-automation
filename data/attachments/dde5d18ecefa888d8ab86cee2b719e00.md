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
        - 'link "Des Moines: Excessive Heat Warning, Clear, 29 °C" [ref=e19] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
          - img "Clear" [ref=e21]
          - generic [ref=e22]:
            - generic [ref=e23]: ‎29‎
            - generic [ref=e25]: ‎°C‎
        - generic "Open settings" [ref=e29] [cursor=pointer]:
          - button "Open settings" [ref=e30]:
            - generic:
              - generic:
                - generic:
                  - generic: Page settings
                  - generic:
                    - img
        - generic "Sign In" [ref=e34]:
          - button "Sign in to your account" [ref=e36] [cursor=pointer]:
            - generic [ref=e37]: Sign in to your account
            - generic [ref=e39]: Sign in
      - search [ref=e42]:
        - generic [ref=e43]:
          - generic "Web search" [ref=e44] [cursor=pointer]:
            - button "Web search" [ref=e45]:
              - generic:
                - generic:
                  - img
          - searchbox "Enter your search term" [ref=e46]
          - generic "Open Copilot" [ref=e50] [cursor=pointer]:
            - button "Open Copilot" [ref=e51]:
              - generic:
                - generic:
                  - generic:
                    - img "Open Copilot"
  - generic [ref=e52]:
    - generic [ref=e53]:
      - generic [ref=e58]:
        - list [ref=e61]:
          - listitem [ref=e62]:
            - link "Outlook.com" [ref=e65] [cursor=pointer]:
              - /url: https://outlook.com
              - generic [ref=e69]: Outlook.com
          - listitem [ref=e70]:
            - link "Flipkart" [ref=e73] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=401531&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e76]:
                - generic [ref=e77]: Flipkart
                - generic [ref=e79]: Sponsored
          - listitem [ref=e80]:
            - link "Find a tutor" [ref=e83] [cursor=pointer]:
              - /url: https://www.bing.com/pros?FORM=BPIMNS
              - generic [ref=e87]: Find a tutor
          - listitem [ref=e88]:
            - link "Booking.com" [ref=e91] [cursor=pointer]:
              - /url: https://www.booking.com/index.html?aid=1624937&label=enin-msn-hp-mestripe
              - generic [ref=e94]:
                - generic [ref=e95]: Booking.com
                - generic [ref=e97]: Sponsored
          - listitem [ref=e98]:
            - link "Ajio" [ref=e101] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=393141&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e104]:
                - generic [ref=e105]: Ajio
                - generic [ref=e107]: Sponsored
          - listitem [ref=e108]:
            - link "Facebook" [ref=e111] [cursor=pointer]:
              - /url: https://www.facebook.com
              - generic [ref=e115]: Facebook
          - listitem [ref=e116]:
            - link "Microsoft 365" [ref=e119] [cursor=pointer]:
              - /url: https://www.office.com/?omkt=en-IN
              - generic [ref=e123]: Microsoft 365
          - listitem [ref=e124]:
            - link "X" [ref=e127] [cursor=pointer]:
              - /url: https://x.com
              - generic [ref=e131]: X
          - listitem [ref=e132]:
            - link "OneDrive" [ref=e135] [cursor=pointer]:
              - /url: https://onedrive.live.com/?wt.mc_id=oo_msn_msnhomepage_header
              - generic [ref=e139]: OneDrive
          - listitem [ref=e140]:
            - link "Skype" [ref=e143] [cursor=pointer]:
              - /url: https://www.skype.com/
              - generic [ref=e147]: Skype
          - listitem [ref=e148]:
            - link "OneNote" [ref=e151] [cursor=pointer]:
              - /url: https://www.onenote.com/notebooks?WT.mc_id=MSN_OneNote_TopMenu&auth=1&wdorigin=msn
              - generic [ref=e155]: OneNote
          - listitem [ref=e156]:
            - link "Maps" [ref=e159] [cursor=pointer]:
              - /url: https://bing.com/maps/?FORM=MSNMAP
              - generic [ref=e163]: Maps
          - listitem [ref=e164]:
            - link "Microsoft Store" [ref=e167] [cursor=pointer]:
              - /url: https://www.microsoft.com/en-in
              - generic [ref=e171]: Microsoft Store
        - button [ref=e172]:
          - img [ref=e175]
      - generic [ref=e177]:
        - banner [ref=e178]
        - generic [ref=e179]:
          - generic [ref=e183]:
            - navigation [ref=e185]:
              - generic [ref=e186]:
                - list [ref=e187]:
                  - listitem [ref=e188]:
                    - link "Discover" [ref=e189] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in
                - list [ref=e190]:
                  - listitem [ref=e191]:
                    - link "News" [ref=e192] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f
                  - listitem [ref=e193]:
                    - link "Sports" [ref=e194] [cursor=pointer]:
                      - /url: https://www.msn.com/en-in/sports
              - generic "Show more topics" [ref=e196] [cursor=pointer]:
                - button "Show more topics" [ref=e197]:
                  - generic:
                    - generic:
                      - img
            - generic "Personalize your feed\"" [ref=e199] [cursor=pointer]:
              - button "Personalize your feed\"" [ref=e200]:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic: Personalize
          - button "Make MSN my homepage" [ref=e202] [cursor=pointer]
      - main [ref=e205]:
        - generic [ref=e207]:
          - generic [ref=e208]:
            - generic [ref=e211]:
              - tablist [ref=e213]:
                - tab "News story" [ref=e214] [cursor=pointer]
                - tab "Sponsored" [ref=e216] [cursor=pointer]
                - tab "News story" [ref=e218] [cursor=pointer]
                - tab "News story" [ref=e220] [cursor=pointer]
                - tab "News story" [ref=e222] [cursor=pointer]
                - tab "Sponsored" [selected] [ref=e224] [cursor=pointer]
                - tab "News story" [ref=e226] [cursor=pointer]
                - tab "News story" [ref=e228] [cursor=pointer]
                - tab "Sponsored" [ref=e230] [cursor=pointer]
                - tab "News story" [ref=e232] [cursor=pointer]
                - tab "News story" [ref=e234] [cursor=pointer]
                - tab "News story" [ref=e236] [cursor=pointer]
                - tab "Sponsored" [ref=e238] [cursor=pointer]
                - tab "News story" [ref=e240] [cursor=pointer]
                - tab "News story" [ref=e242] [cursor=pointer]
                - tab "News story" [ref=e244] [cursor=pointer]
                - tab "News story" [ref=e246] [cursor=pointer]
                - tab "News story" [ref=e248] [cursor=pointer]
                - tab "Sponsored" [ref=e250] [cursor=pointer]
                - tab "News story" [ref=e252] [cursor=pointer]
                - tab "News story" [ref=e254] [cursor=pointer]
                - tab "News story" [ref=e256] [cursor=pointer]
                - tab "News story" [ref=e258] [cursor=pointer]
                - tab "News story" [ref=e260] [cursor=pointer]
                - tab "Sponsored" [ref=e262] [cursor=pointer]
                - tab "News story" [ref=e264] [cursor=pointer]
                - tab "News story" [ref=e266] [cursor=pointer]
                - tab "News story" [ref=e268] [cursor=pointer]
                - tab "Sponsored" [ref=e270] [cursor=pointer]
                - tab "News story" [ref=e272] [cursor=pointer]
                - tab "News story" [ref=e274] [cursor=pointer]
              - button [ref=e278]
              - button [ref=e281]
              - article "This Tool Makes Traveling Cheaper" [ref=e282] [cursor=pointer]:
                - generic [ref=e284]:
                  - img [ref=e285]
                  - generic [ref=e286]:
                    - generic [ref=e287]:
                      - generic [ref=e290]: Online Shopping Tools
                      - link "This Tool Makes Traveling Cheaper, Online Shopping Tools" [ref=e291]:
                        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=7f0e03fb-265b-42c4-9d01-1e3e728ddacd&bdc=pb&bidId=2&bidderId=4&cmExpId=LV4&impId=2&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=17c855ee-be6d-478e-9405-365031f403d2&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8hL8gI9LNYYPstH4n_5_eCDVUCUyi_-coVBUl2IErSj_rDwdH5qp8DpOiJuR3H1jK3i-GlLJ4RNvGoBHdc_49xl2o3zNZjLavFm34_m_JPj2_igpzwcXJZOnrPCjKrgx4bgU8LJdnfXzKfyQiQRVIqCV0-DfJ5RshZQR3Ked9iCSGH5fTJbTsbSphm-G9qpOH9GaEx4832kHSLZJ_s2wh3Daq9WE%26u%3DaHR0cHMlM2ElMmYlMmZnby5vbmxpbmVzaG9wcGluZ3Rvb2xzLmNvbSUyZjE0JTJmMTgzNDIlM2ZkcyUzZDE0JTI2Y2FtcGFpZ24lM2Q2Nzg5MDE5ODMlMjZhZGdyb3VwJTNkMTE2OTg4MjMzNzE0NTc1OCUyNmNyZWF0aXZlJTNkNzMxMTc5OTg1OTU0ODMlMjZwdWJsaXNoZXIlM2RhJTI2c291cmNlJTNka3dkLTIzMjQ5MTczMzg5NDM0MjIlM2Fsb2MtMTkwJTI2ZGV2aWNlJTNkYyUyNnBvc3RiYWNrJTNkOWM0YTQ3NGMyYzkwMTAzODI2ZWMyZDJiMmM5NmEyNWUlMjZwb3B1cCUzZDElMjZ1eGlkJTNkYmclMjZlYyUzZDAlMjZtc2Nsa2lkJTNkOWM0YTQ3NGMyYzkwMTAzODI2ZWMyZDJiMmM5NmEyNWU%26rlid%3D9c4a474c2c90103826ec2d2b2c96a25e&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                        - text: This Tool Makes Traveling Cheaper
                    - link "Sponsored" [ref=e293]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=7f0e03fb-265b-42c4-9d01-1e3e728ddacd&bdc=pb&bidId=2&bidderId=4&cmExpId=LV4&impId=2&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=17c855ee-be6d-478e-9405-365031f403d2&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8hL8gI9LNYYPstH4n_5_eCDVUCUyi_-coVBUl2IErSj_rDwdH5qp8DpOiJuR3H1jK3i-GlLJ4RNvGoBHdc_49xl2o3zNZjLavFm34_m_JPj2_igpzwcXJZOnrPCjKrgx4bgU8LJdnfXzKfyQiQRVIqCV0-DfJ5RshZQR3Ked9iCSGH5fTJbTsbSphm-G9qpOH9GaEx4832kHSLZJ_s2wh3Daq9WE%26u%3DaHR0cHMlM2ElMmYlMmZnby5vbmxpbmVzaG9wcGluZ3Rvb2xzLmNvbSUyZjE0JTJmMTgzNDIlM2ZkcyUzZDE0JTI2Y2FtcGFpZ24lM2Q2Nzg5MDE5ODMlMjZhZGdyb3VwJTNkMTE2OTg4MjMzNzE0NTc1OCUyNmNyZWF0aXZlJTNkNzMxMTc5OTg1OTU0ODMlMjZwdWJsaXNoZXIlM2RhJTI2c291cmNlJTNka3dkLTIzMjQ5MTczMzg5NDM0MjIlM2Fsb2MtMTkwJTI2ZGV2aWNlJTNkYyUyNnBvc3RiYWNrJTNkOWM0YTQ3NGMyYzkwMTAzODI2ZWMyZDJiMmM5NmEyNWUlMjZwb3B1cCUzZDElMjZ1eGlkJTNkYmclMjZlYyUzZDAlMjZtc2Nsa2lkJTNkOWM0YTQ3NGMyYzkwMTAzODI2ZWMyZDJiMmM5NmEyNWU%26rlid%3D9c4a474c2c90103826ec2d2b2c96a25e&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                  - button "See more" [ref=e295]:
                    - img [ref=e296]
            - article [ref=e297] [cursor=pointer]:
              - generic [ref=e302]:
                - generic [ref=e304]:
                  - link "Top stories" [ref=e306]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a67000580f0428b9dba643872872a8f&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e307]
                  - button "More options" [ref=e309]
                - list [ref=e312]:
                  - listitem [ref=e313]:
                    - link "Breaking The Times of India 4h Two killed, five wounded in Seattle mass shooting at food festival" [ref=e314]:
                      - /url: https://www.msn.com/en-in/news/other/two-killed-five-wounded-in-seattle-mass-shooting-at-food-festival/ar-AA28KG7g
                      - generic [ref=e315]:
                        - generic [ref=e316]:
                          - generic:
                            - generic [ref=e317]: Breaking
                            - img [ref=e318]
                          - generic [ref=e319]:
                            - generic: The Times of India ·4h
                        - generic [ref=e320]: Two killed, five wounded in Seattle mass shooting at food festival
                  - listitem [ref=e321]:
                    - 'link "WION now ''Agitation cannot justify lathi-charge'': CJI Surya Kant''s big response to police brutality against protesting students" [ref=e322]':
                      - /url: https://www.msn.com/en-in/news/other/agitation-cannot-justify-lathi-charge-cji-surya-kant-s-big-response-to-police-brutality-against-protesting-students/ar-AA28KuXp
                      - generic [ref=e323]:
                        - generic [ref=e324]:
                          - img [ref=e325]
                          - generic [ref=e326]:
                            - generic: WION ·now
                        - generic [ref=e327]: "'Agitation cannot justify lathi-charge': CJI Surya Kant's big response to police brutality against protesting students"
                  - listitem [ref=e328]:
                    - link "NDTV 24x7 6m Anti-paper leak bill in Parliament today, young MPs to lead charge" [ref=e329]:
                      - /url: https://www.msn.com/en-in/money/general/anti-paper-leak-bill-in-parliament-today-young-mps-to-lead-charge/ar-AA28KPqL
                      - generic [ref=e330]:
                        - generic [ref=e331]:
                          - img [ref=e332]
                          - generic [ref=e333]:
                            - generic: NDTV 24x7 ·6m
                        - generic [ref=e334]: Anti-paper leak bill in Parliament today, young MPs to lead charge
                - generic [ref=e336]:
                  - generic [ref=e337]:
                    - generic "Previous" [ref=e338]:
                      - button "Previous" [ref=e339]
                    - tablist [ref=e341]:
                      - tab "tab-0" [selected] [ref=e342]
                      - tab "tab-1" [ref=e344]
                      - tab "tab-2" [ref=e346]
                    - generic "Next" [ref=e348]:
                      - button "Next" [ref=e349]
                  - link "See more" [ref=e351]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a67000580f0428b9dba643872872a8f&ocid=hpmsn
            - article [ref=e352] [cursor=pointer]:
              - generic [ref=e356]:
                - generic: Sponsored
            - article "VEVOR Universal Rv Stabilizer Rv Bumper Stabilizer For Trailers Campers Fifth Wheel Compact Foldable Design For Easy Storage Adjustable Height From" [ref=e357] [cursor=pointer]:
              - generic [ref=e359]:
                - img [ref=e360]
                - generic [ref=e361]:
                  - generic [ref=e362]:
                    - generic [ref=e365]: VEVOR
                    - link "VEVOR Universal Rv Stabilizer Rv Bumper Stabilizer For Trailers Campers Fifth Wheel Compact Foldable Design For Easy Storage Adjustable Height From, VEVOR" [ref=e366]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=d26c0d70-5122-42a6-b9be-363452b778b6&bdc=pb&bidId=12&bidderId=4&cmExpId=LV4&impId=8&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=17c855ee-be6d-478e-9405-365031f403d2&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8nqF-1fQoeMEb2w1A7udB9DVUCUzvrR5Nean6BPMzjsyeCPW4gddJkdh-940C959zZ8hwb2qSQzwMNfBXpKZvFvnfM2l_JWD5dqtfTtNRQAUebiFA5JDIMuDSiM_xBzMBZm-h37d2_CplMELyEuq3NqHX0Rl0g-nKn8yFXvJrD6f0SjU2no84tjP8qYgUjfx6Yx0Y8i7gChvXiIhfPWRPAamIF84%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cudmV2b3IuY29tJTJmcnYtamFja3Mtc3RhYmlsaXplcnMtY18xMjI1NSUyZnZldm9yLXVuaXZlcnNhbC1ydi1zdGFiaWxpemVyLXJ2LWJ1bXBlci1zdGFiaWxpemVyLWZvci10cmFpbGVycy1jYW1wZXJzLWZpZnRoLXdoZWVsLWNvbXBhY3QtZm9sZGFibGUtZGVzaWduLWZvci1lYXN5LXN0b3JhZ2UtYWRqdXN0YWJsZS1oZWlnaHQtZnJvbS0xMi1pbmNoLXRvLTI4LWluY2gtcmVkdWNlcy1ydi13b2JibGUtMnBjcy1wXzAxMDk4ODM3MTc5NyUzZmFkcCUzZGdtYyUyNnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX21lZGl1bSUzZGNwYyUyNnV0bV9pZCUzZDYwNjMzMDg0OCUyNnV0bV9jYW1wYWlnbiUzZE5DLU1TQU4tRmVlZGJhc2VkLUFsbC1VUy1za3UzMCVlNSVhNCVhOSVlNyU4MiViOSVlNSU4NyViYiUyNTNDMTAtYWxsJTI1MjBhdWRpZW5jZS1FQ1BDLVpRTCUyNm1zY2xraWQlM2QxOThjZjY1NjQwMTAxNDdkYjJhNTljMzE0MDE2ODI2ZSUyNnV0bV90ZXJtJTNkNDU4NzQzNzQwMjk0MjAyNiUyNnV0bV9jb250ZW50JTNkQWQlMjUyMGdyb3VwJTI1MjAlMjUyMzE%26rlid%3D198cf6564010147db2a59c314016826e&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: VEVOR Universal Rv Stabilizer Rv Bumper Stabilizer For Trailers Campers Fifth Wheel Compact Foldable Design For Easy Storage Adjustable Height From
                  - link "Sponsored" [ref=e368]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=d26c0d70-5122-42a6-b9be-363452b778b6&bdc=pb&bidId=12&bidderId=4&cmExpId=LV4&impId=8&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=17c855ee-be6d-478e-9405-365031f403d2&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8nqF-1fQoeMEb2w1A7udB9DVUCUzvrR5Nean6BPMzjsyeCPW4gddJkdh-940C959zZ8hwb2qSQzwMNfBXpKZvFvnfM2l_JWD5dqtfTtNRQAUebiFA5JDIMuDSiM_xBzMBZm-h37d2_CplMELyEuq3NqHX0Rl0g-nKn8yFXvJrD6f0SjU2no84tjP8qYgUjfx6Yx0Y8i7gChvXiIhfPWRPAamIF84%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cudmV2b3IuY29tJTJmcnYtamFja3Mtc3RhYmlsaXplcnMtY18xMjI1NSUyZnZldm9yLXVuaXZlcnNhbC1ydi1zdGFiaWxpemVyLXJ2LWJ1bXBlci1zdGFiaWxpemVyLWZvci10cmFpbGVycy1jYW1wZXJzLWZpZnRoLXdoZWVsLWNvbXBhY3QtZm9sZGFibGUtZGVzaWduLWZvci1lYXN5LXN0b3JhZ2UtYWRqdXN0YWJsZS1oZWlnaHQtZnJvbS0xMi1pbmNoLXRvLTI4LWluY2gtcmVkdWNlcy1ydi13b2JibGUtMnBjcy1wXzAxMDk4ODM3MTc5NyUzZmFkcCUzZGdtYyUyNnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX21lZGl1bSUzZGNwYyUyNnV0bV9pZCUzZDYwNjMzMDg0OCUyNnV0bV9jYW1wYWlnbiUzZE5DLU1TQU4tRmVlZGJhc2VkLUFsbC1VUy1za3UzMCVlNSVhNCVhOSVlNyU4MiViOSVlNSU4NyViYiUyNTNDMTAtYWxsJTI1MjBhdWRpZW5jZS1FQ1BDLVpRTCUyNm1zY2xraWQlM2QxOThjZjY1NjQwMTAxNDdkYjJhNTljMzE0MDE2ODI2ZSUyNnV0bV90ZXJtJTNkNDU4NzQzNzQwMjk0MjAyNiUyNnV0bV9jb250ZW50JTNkQWQlMjUyMGdyb3VwJTI1MjAlMjUyMzE%26rlid%3D198cf6564010147db2a59c314016826e&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e370]:
                  - img [ref=e371]
            - article [ref=e372] [cursor=pointer]:
              - generic [ref=e378]:
                - generic [ref=e380]:
                  - img "Watchlist suggestions" [ref=e382]
                  - link "Watchlist suggestions" [ref=e383]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e384]
                  - button "More options" [ref=e386]
                - generic [ref=e391]:
                  - link "USD/INR US Dollar/Indian Rupee ‎-0.41%‎ 96.17" [ref=e393]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=avyo8m&ocid=hpmsn
                    - generic [ref=e394]:
                      - generic [ref=e396]: USD/INR
                      - generic [ref=e398]: US Dollar/Indian Rupee
                    - generic [ref=e403]:
                      - generic [ref=e404]: ‎-0.41%‎
                      - generic [ref=e405]: "96.17"
                    - button "Add to watchlist" [ref=e408]:
                      - img [ref=e409]
                  - link "24K Gold (10 Grams) - Indian Rupee XAUINR ‎+0.69%‎ 144496" [ref=e413]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&ocid=hpmsn
                    - generic [ref=e414]:
                      - generic [ref=e416]: 24K Gold (10 Grams) - Indian Rupee
                      - generic [ref=e418]: XAUINR
                    - generic [ref=e423]:
                      - generic [ref=e424]: ‎+0.69%‎
                      - generic [ref=e425]: "144496"
                    - button "Add to watchlist" [ref=e428]:
                      - img [ref=e429]
                  - link "Silver Silver Rising fast ‎+1.53%‎ 59.81" [ref=e433]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwr7&noti=Price&ocid=hpmsn
                    - generic [ref=e434]:
                      - generic [ref=e435]:
                        - generic [ref=e436]: Silver
                        - img "Silver" [ref=e437]
                      - generic [ref=e439]: Rising fast
                    - generic [ref=e444]:
                      - generic [ref=e445]: ‎+1.53%‎
                      - generic [ref=e446]: "59.81"
                    - button "Add to watchlist" [ref=e449]:
                      - img [ref=e450]
                  - link "ITC Ltd ITC ‎+1.13%‎ 286.65" [ref=e454]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahie2w&ocid=hpmsn
                    - generic [ref=e455]:
                      - generic [ref=e457]: ITC Ltd
                      - generic [ref=e459]: ITC
                    - generic [ref=e464]:
                      - generic [ref=e465]: ‎+1.13%‎
                      - generic [ref=e466]: "286.65"
                    - button "Add to watchlist" [ref=e469]:
                      - img [ref=e470]
                  - link "AT&T Inc T ‎+5.10%‎ 24.13" [ref=e474]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a23www&ocid=hpmsn
                    - generic [ref=e475]:
                      - generic [ref=e477]: AT&T Inc
                      - generic [ref=e479]: T
                    - generic [ref=e484]:
                      - generic [ref=e485]: ‎+5.10%‎
                      - generic [ref=e486]: "24.13"
                    - button "Add to watchlist" [ref=e489]:
                      - img [ref=e490]
                - generic [ref=e494]:
                  - generic [ref=e495]:
                    - generic "Previous" [ref=e496]:
                      - button "Previous" [ref=e497]
                    - tablist [ref=e499]:
                      - tab "tab-0" [selected] [ref=e500]
                      - tab "tab-1" [ref=e502]
                      - tab "tab-2" [ref=e504]
                      - tab "tab-3" [ref=e506]
                      - tab "tab-4" [ref=e508]
                      - tab "tab-5"
                      - tab "tab-6"
                    - generic "Next" [ref=e510]:
                      - button "Next" [ref=e511]
                  - link "See watchlist suggestions" [ref=e513]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - 'article "Suryakumar Yadav''s subtle message to Indian team management: ''Batted 1000 balls for 3 hours''" [ref=e514] [cursor=pointer]':
              - generic [ref=e516]:
                - img [ref=e517]
                - generic [ref=e518]:
                  - generic [ref=e519]:
                    - generic [ref=e520]:
                      - generic [ref=e521]:
                        - img [ref=e522]
                        - generic [ref=e523]: News18
                      - generic [ref=e524]: ·
                      - generic [ref=e525]: 3h
                    - 'link "Suryakumar Yadav''s subtle message to Indian team management: ''Batted 1000 balls for 3 hours'', News18" [ref=e526]':
                      - /url: https://www.msn.com/en-in/sports/cricket/suryakumar-yadav-s-subtle-message-to-indian-team-management-batted-1000-balls-for-3-hours/ar-AA28LbEN
                      - text: "Suryakumar Yadav's subtle message to Indian team management: 'Batted 1000 balls for 3 hours'"
                  - 'generic "Suryakumar Yadav''s subtle message to Indian team management: ''Batted 1000 balls for 3 hours''" [ref=e529]':
                    - generic [ref=e531]:
                      - generic [ref=e532]:
                        - button "11 Likes" [ref=e533]:
                          - generic [ref=e534]:
                            - img [ref=e535]
                            - generic [ref=e537]: "11"
                        - button "1 Dislike" [ref=e538]:
                          - img [ref=e540]
                      - link "Start the conversation" [ref=e543]:
                        - /url: https://www.msn.com/en-in/sports/cricket/suryakumar-yadav-s-subtle-message-to-indian-team-management-batted-1000-balls-for-3-hours/ar-AA28LbEN#comments
                        - button "Start the conversation" [ref=e544]:
                          - img [ref=e545]
                - generic [ref=e547]:
                  - button "Hide this story" [ref=e548]:
                    - img [ref=e549]
                    - text: Hide this story
                  - button "See more" [ref=e550]:
                    - img [ref=e551]
            - article "This PC Game is A Must-Have" [ref=e552] [cursor=pointer]:
              - generic [ref=e554]:
                - img [ref=e555]
                - generic [ref=e556]:
                  - generic [ref=e557]:
                    - generic [ref=e560]: "RAID: Shadow Legends"
                    - 'link "This PC Game is A Must-Have, RAID: Shadow Legends" [ref=e561]':
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=eb6448df-418f-4be8-9a66-f31f69461bd4&bdc=pb&bidId=3&bidderId=4&cmExpId=LV4&impId=9&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=17c855ee-be6d-478e-9405-365031f403d2&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8Ll0iSBGLOfeJNujSSq51TjVUCUwAIoQCPNhhr0NWtBveeXylNkIe-3cKdyVpXK4NaLJtdRQqyW1DN2VnkXjQGbMkIrXH4V7ZKhcnXW8AvlZIqVfWSa8CgYv71qrtVTGs1OfQ8cBkH3NjffV2mDQ1GQGDUFo3le0qjp4z7qnBgcNAu7uDGGmfPF6siFBi3x_vxQVE0OWQcEFrFwcgC_ZyKFFPW-w%26u%3DaHR0cHMlM2ElMmYlMmZscHMucGxhcml1bS5jb20lMmZlbiUyZmRlc2t0b3AlMmZyYWlkJTJmcmRvJTJmbWVkaWElMmZhbGljZV9tX2YwNThfcHJlbHBfanQzOTAzJTNmcGxpZCUzZDE3ODQyMTElMjZweGwlM2RiaW5nX25hdGl2ZSUyNnB1Ymxpc2hlcmlkJTNkODA3NDU1OTY4Nzk4MjQlMjZwbGFjZW1lbnQlM2QyMzMyNTQ1MTk5NDYwNTI2X2tleXdvcmQlMjZhZHBhcnRuZXJzZXQlM2QxMjkxOTI3NTczNjA0MjUzJTI2Y2xpY2tJZCUzZGQ1YmQwYzk4MzRmNDE4MjU3ZDVkNjZmZjM0ZjJmNWMyJTI2bXNjbGtpZCUzZGQ1YmQwYzk4MzRmNDE4MjU3ZDVkNjZmZjM0ZjJmNWMyJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkQmluZ19SQURfVVNfTmF0aXZlX0lQc18xNzg0MjExJTI2dXRtX3Rlcm0lM2RrZXl3b3JkJTI2dXRtX2NvbnRlbnQlM2RJUHM%26rlid%3Dd5bd0c9834f418257d5d66ff34f2f5c2&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: This PC Game is A Must-Have
                  - link "Sponsored" [ref=e563]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=eb6448df-418f-4be8-9a66-f31f69461bd4&bdc=pb&bidId=3&bidderId=4&cmExpId=LV4&impId=9&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=17c855ee-be6d-478e-9405-365031f403d2&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8Ll0iSBGLOfeJNujSSq51TjVUCUwAIoQCPNhhr0NWtBveeXylNkIe-3cKdyVpXK4NaLJtdRQqyW1DN2VnkXjQGbMkIrXH4V7ZKhcnXW8AvlZIqVfWSa8CgYv71qrtVTGs1OfQ8cBkH3NjffV2mDQ1GQGDUFo3le0qjp4z7qnBgcNAu7uDGGmfPF6siFBi3x_vxQVE0OWQcEFrFwcgC_ZyKFFPW-w%26u%3DaHR0cHMlM2ElMmYlMmZscHMucGxhcml1bS5jb20lMmZlbiUyZmRlc2t0b3AlMmZyYWlkJTJmcmRvJTJmbWVkaWElMmZhbGljZV9tX2YwNThfcHJlbHBfanQzOTAzJTNmcGxpZCUzZDE3ODQyMTElMjZweGwlM2RiaW5nX25hdGl2ZSUyNnB1Ymxpc2hlcmlkJTNkODA3NDU1OTY4Nzk4MjQlMjZwbGFjZW1lbnQlM2QyMzMyNTQ1MTk5NDYwNTI2X2tleXdvcmQlMjZhZHBhcnRuZXJzZXQlM2QxMjkxOTI3NTczNjA0MjUzJTI2Y2xpY2tJZCUzZGQ1YmQwYzk4MzRmNDE4MjU3ZDVkNjZmZjM0ZjJmNWMyJTI2bXNjbGtpZCUzZGQ1YmQwYzk4MzRmNDE4MjU3ZDVkNjZmZjM0ZjJmNWMyJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkQmluZ19SQURfVVNfTmF0aXZlX0lQc18xNzg0MjExJTI2dXRtX3Rlcm0lM2RrZXl3b3JkJTI2dXRtX2NvbnRlbnQlM2RJUHM%26rlid%3Dd5bd0c9834f418257d5d66ff34f2f5c2&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e565]:
                  - img [ref=e566]
            - 'article "School holiday tomorrow, July 27: Will schools remain closed on Monday as IMD predicts heavy rainfall in several states?" [ref=e567] [cursor=pointer]':
              - generic [ref=e569]:
                - img [ref=e570]
                - generic [ref=e571]:
                  - generic [ref=e572]:
                    - generic [ref=e573]:
                      - generic [ref=e574]:
                        - img [ref=e575]
                        - generic [ref=e576]: The Economic Times
                      - generic [ref=e577]: ·
                      - generic [ref=e578]: 18h
                    - 'link "School holiday tomorrow, July 27: Will schools remain closed on Monday as IMD predicts heavy rainfall in several states?, The Economic Times" [ref=e579]':
                      - /url: https://www.msn.com/en-in/weather/meteorology/school-holiday-tomorrow-july-27-will-schools-remain-closed-on-monday-as-imd-predicts-heavy-rainfall-in-several-states/ar-AA28IsuG
                      - text: "School holiday tomorrow, July 27: Will schools remain closed on Monday as IMD predicts heavy rainfall in several states?"
                  - 'generic "School holiday tomorrow, July 27: Will schools remain closed on Monday as IMD predicts heavy rainfall in several states?" [ref=e582]':
                    - generic [ref=e584]:
                      - generic [ref=e585]:
                        - button "50 Likes" [ref=e586]:
                          - generic [ref=e587]:
                            - img [ref=e588]
                            - generic [ref=e590]: "50"
                        - button "37 Dislikes" [ref=e591]:
                          - img [ref=e593]
                      - link "Start the conversation" [ref=e596]:
                        - /url: https://www.msn.com/en-in/weather/meteorology/school-holiday-tomorrow-july-27-will-schools-remain-closed-on-monday-as-imd-predicts-heavy-rainfall-in-several-states/ar-AA28IsuG#comments
                        - button "Start the conversation" [ref=e597]:
                          - img [ref=e598]
                - generic [ref=e600]:
                  - button "Hide this story" [ref=e601]:
                    - img [ref=e602]
                    - text: Hide this story
                  - button "See more" [ref=e603]:
                    - img [ref=e604]
            - article "PM Modi returns with message to students, announces Nandan Nilekani-led task force on exam reforms" [ref=e605] [cursor=pointer]:
              - generic [ref=e607]:
                - img [ref=e608]
                - generic [ref=e609]:
                  - generic [ref=e610]:
                    - generic [ref=e611]:
                      - generic [ref=e612]:
                        - img [ref=e613]
                        - generic [ref=e614]: The Times of India
                      - generic [ref=e615]: ·
                      - generic [ref=e616]: 17h
                    - link "PM Modi returns with message to students, announces Nandan Nilekani-led task force on exam reforms, The Times of India" [ref=e617]:
                      - /url: https://www.msn.com/en-in/money/general/pm-modi-returns-with-message-to-students-announces-nandan-nilekani-led-task-force-on-exam-reforms/ar-AA28ItGn
                      - text: PM Modi returns with message to students, announces Nandan Nilekani-led task force on exam reforms
                  - generic "PM Modi returns with message to students, announces Nandan Nilekani-led task force on exam reforms" [ref=e620]:
                    - generic [ref=e622]:
                      - generic [ref=e623]:
                        - button "224 Likes" [ref=e624]:
                          - generic [ref=e625]:
                            - img [ref=e626]
                            - generic [ref=e628]: "224"
                        - button "38 Dislikes" [ref=e629]:
                          - img [ref=e631]
                      - link "View comments 11 Comment" [ref=e634]:
                        - /url: https://www.msn.com/en-in/money/general/pm-modi-returns-with-message-to-students-announces-nandan-nilekani-led-task-force-on-exam-reforms/ar-AA28ItGn#comments
                        - button "View comments 11 Comment" [ref=e635]:
                          - img [ref=e636]
                        - generic [ref=e638]: "11"
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
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a67000580f0428b9dba643872872a8f
                    - heading "Top Engaging News" [level=2] [ref=e655]
                  - button "More options" [ref=e657]
                - generic [ref=e659]:
                  - link "India Today 11 Comments From Pakistan to Nepal, India's Gen Z is 'josh' of the world" [ref=e661]:
                    - /url: https://www.msn.com/en-in/news/other/from-pakistan-to-nepal-india-s-gen-z-is-josh-of-the-world/ar-AA28Hefn
                    - generic [ref=e662]:
                      - img [ref=e663]
                      - generic [ref=e664]: India Today
                      - link "11 Comments" [ref=e666]:
                        - /url: https://www.msn.com/en-in/news/other/from-pakistan-to-nepal-india-s-gen-z-is-josh-of-the-world/ar-AA28Hefn#comments
                        - img [ref=e667]
                        - paragraph [ref=e668]: "11"
                    - paragraph [ref=e669]: From Pakistan to Nepal, India's Gen Z is 'josh' of the world
                  - link "The Times of India 11 Comments PM Modi returns with message to students, announces Nandan Nilekani-led task force on exam reforms" [ref=e671]:
                    - /url: https://www.msn.com/en-in/money/general/pm-modi-returns-with-message-to-students-announces-nandan-nilekani-led-task-force-on-exam-reforms/ar-AA28ItGn
                    - generic [ref=e672]:
                      - img [ref=e673]
                      - generic [ref=e674]: The Times of India
                      - link "11 Comments" [ref=e676]:
                        - /url: https://www.msn.com/en-in/money/general/pm-modi-returns-with-message-to-students-announces-nandan-nilekani-led-task-force-on-exam-reforms/ar-AA28ItGn#comments
                        - img [ref=e677]
                        - paragraph [ref=e678]: "11"
                    - paragraph [ref=e679]: PM Modi returns with message to students, announces Nandan Nilekani-led task force on exam reforms
                  - link "News18 9 Comments How UP Volunteer 'Junaid Bhai' Became A Face Of The CJP Protest At Jantar Mantar?" [ref=e681]:
                    - /url: https://www.msn.com/en-in/news/other/how-up-volunteer-junaid-bhai-became-a-face-of-the-cjp-protest-at-jantar-mantar/ar-AA28It6J
                    - generic [ref=e682]:
                      - img [ref=e683]
                      - generic [ref=e684]: News18
                      - link "9 Comments" [ref=e686]:
                        - /url: https://www.msn.com/en-in/news/other/how-up-volunteer-junaid-bhai-became-a-face-of-the-cjp-protest-at-jantar-mantar/ar-AA28It6J#comments
                        - img [ref=e687]
                        - paragraph [ref=e688]: "9"
                    - paragraph [ref=e689]: How UP Volunteer 'Junaid Bhai' Became A Face Of The CJP Protest At Jantar Mantar?
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
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a67000580f0428b9dba643872872a8f
            - article [ref=e707] [cursor=pointer]:
              - generic [ref=e713]:
                - generic [ref=e715]:
                  - link "Des Moines" [ref=e717]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
                    - heading "Des Moines" [level=2] [ref=e718]
                  - button "My location" [ref=e719]
                  - button "More options" [ref=e721]
                - generic [ref=e725]:
                  - generic [ref=e726]:
                    - generic [ref=e728]:
                      - link "Clear" [ref=e729]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
                        - img "Clear" [ref=e730]
                      - link "29°C" [ref=e731]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Des-Moines,Iowa
                        - generic [ref=e732]: ‎29‎
                        - generic [ref=e734]: ‎°C‎
                    - generic [ref=e736]:
                      - link "Excessive Heat - WarningExcessive heat warning" [ref=e738]:
                        - /url: https://www.msn.com/en-in/weather/maps/severeweather/in-Des-Moines,Iowa
                        - img "Excessive Heat - Warning" [ref=e740]
                        - text: Excessive heat warning
                      - link "See full forecast" [ref=e741]:
                        - /url: https://www.msn.com/en-in/weather/maps/severeweather/in-Des-Moines,Iowa
                        - img "arrow" [ref=e742]
                  - generic [ref=e747]:
                    - link "Larger map" [ref=e748]:
                      - /url: ""
                      - img
                      - generic [ref=e749]:
                        - generic:
                          - generic:
                            - img
                            - img
                            - img
                            - img
                    - link "Check more alert details" [ref=e750]:
                      - /url: ""
                      - generic "Check more alert details" [ref=e751]
                      - img [ref=e753]
                    - link "Click to see more information" [ref=e754]:
                      - /url: ""
                      - img [ref=e755]
                - button "See full forecast" [ref=e758]
            - article "'I will give you Rs 1 crore, give me my daughter back', father of NEET suicide victim says as CJP wraps up protest" [ref=e759] [cursor=pointer]:
              - generic [ref=e761]:
                - img [ref=e762]
                - generic [ref=e763]:
                  - generic [ref=e764]:
                    - generic [ref=e765]:
                      - generic [ref=e766]:
                        - img [ref=e767]
                        - generic [ref=e768]: Moneycontrol
                      - generic [ref=e769]: ·
                      - generic [ref=e770]: 14h
                    - link "'I will give you Rs 1 crore, give me my daughter back', father of NEET suicide victim says as CJP wraps up protest, Moneycontrol" [ref=e771]:
                      - /url: https://www.msn.com/en-in/news/other/i-will-give-you-rs-1-crore-give-me-my-daughter-back-father-of-neet-suicide-victim-says-as-cjp-wraps-up-protest/ar-AA28IwUu
                      - text: "'I will give you Rs 1 crore, give me my daughter back', father of NEET suicide victim says as CJP wraps up protest"
                  - generic "'I will give you Rs 1 crore, give me my daughter back', father of NEET suicide victim says as CJP wraps up protest" [ref=e774]:
                    - generic [ref=e776]:
                      - generic [ref=e777]:
                        - button "114 Likes" [ref=e778]:
                          - generic [ref=e779]:
                            - img [ref=e780]
                            - generic [ref=e782]: "114"
                        - button "20 Dislikes" [ref=e783]:
                          - img [ref=e785]
                      - link "View comments 15 Comment" [ref=e788]:
                        - /url: https://www.msn.com/en-in/news/other/i-will-give-you-rs-1-crore-give-me-my-daughter-back-father-of-neet-suicide-victim-says-as-cjp-wraps-up-protest/ar-AA28IwUu#comments
                        - button "View comments 15 Comment" [ref=e789]:
                          - img [ref=e790]
                        - generic [ref=e792]: "15"
                - generic [ref=e793]:
                  - button "Hide this story" [ref=e794]:
                    - img [ref=e795]
                    - text: Hide this story
                  - button "See more" [ref=e796]:
                    - img [ref=e797]
            - 'article "Jana Nayagan movie | From silver screen to secretariat: CM Vijay''s ''Jana Nayagan'' arrives" [ref=e798] [cursor=pointer]':
              - generic [ref=e800]:
                - generic [ref=e806]:
                  - generic [ref=e807]:
                    - generic [ref=e808]:
                      - generic [ref=e809]:
                        - img [ref=e810]
                        - generic [ref=e811]: NDTV 24x7
                      - generic [ref=e812]: ·
                      - generic [ref=e813]: 2w
                    - 'link "Jana Nayagan movie | From silver screen to secretariat: CM Vijay''s ''Jana Nayagan'' arrives, NDTV 24x7" [ref=e814]':
                      - /url: https://www.msn.com/en-in/entertainment/movies/jana-nayagan-movie-from-silver-screen-to-secretariat-cm-vijay-s-jana-nayagan-arrives/vi-AA27K2Bl
                      - text: "Jana Nayagan movie | From silver screen to secretariat: CM Vijay's 'Jana Nayagan' arrives"
                  - 'generic "Jana Nayagan movie | From silver screen to secretariat: CM Vijay''s ''Jana Nayagan'' arrives" [ref=e817]':
                    - generic [ref=e819]:
                      - generic [ref=e820]:
                        - button "527 Likes" [ref=e821]:
                          - generic [ref=e822]:
                            - img [ref=e823]
                            - generic [ref=e825]: "527"
                        - button "137 Dislikes" [ref=e826]:
                          - img [ref=e828]
                      - link "Start the conversation" [ref=e831]:
                        - /url: https://www.msn.com/en-in/entertainment/movies/jana-nayagan-movie-from-silver-screen-to-secretariat-cm-vijay-s-jana-nayagan-arrives/vi-AA27K2Bl#comments
                        - button "Start the conversation" [ref=e832]:
                          - img [ref=e833]
                - generic [ref=e835]:
                  - button "Hide this story" [ref=e836]:
                    - img [ref=e837]
                    - text: Hide this story
                  - button "See more" [ref=e838]:
                    - img [ref=e839]
            - article [ref=e840] [cursor=pointer]
            - article "Psychology says people who check their phone immediately after waking up aren't just addicted" [ref=e847] [cursor=pointer]:
              - generic [ref=e849]:
                - img [ref=e850]
                - generic [ref=e851]:
                  - generic [ref=e852]:
                    - generic [ref=e853]:
                      - generic [ref=e854]:
                        - img [ref=e855]
                        - generic [ref=e856]: India Today
                      - generic [ref=e857]: ·
                      - generic [ref=e858]: 3d
                    - link "Psychology says people who check their phone immediately after waking up aren't just addicted, India Today" [ref=e859]:
                      - /url: https://www.msn.com/en-in/health/general/psychology-says-people-who-check-their-phone-immediately-after-waking-up-aren-t-just-addicted/ar-AA28z7dS
                      - text: Psychology says people who check their phone immediately after waking up aren't just addicted
                  - generic "Psychology says people who check their phone immediately after waking up aren't just addicted" [ref=e862]:
                    - generic [ref=e864]:
                      - generic [ref=e865]:
                        - button "194 Likes" [ref=e866]:
                          - generic [ref=e867]:
                            - img [ref=e868]
                            - generic [ref=e870]: "194"
                        - button "93 Dislikes" [ref=e871]:
                          - img [ref=e873]
                      - link "View comments 2 Comment" [ref=e876]:
                        - /url: https://www.msn.com/en-in/health/general/psychology-says-people-who-check-their-phone-immediately-after-waking-up-aren-t-just-addicted/ar-AA28z7dS#comments
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
                        - /url: https://www.msn.com/en-in/play/games/bloxdio/cg-9p0rj8ffrg7h?ocid=hpmsn&cvid=6a67000580f0428b9dba643872872a8f&ei=7
                        - generic [ref=e912]:
                          - img "bloxd.io"
                    - listitem [ref=e913]:
                      - link "TapTap Arrow" [ref=e914]:
                        - /url: https://www.msn.com/en-in/play/games/taptap-arrow/cg-9ng0c12cnfsk?ocid=hpmsn&cvid=6a67000580f0428b9dba643872872a8f&ei=7
                        - generic [ref=e915]:
                          - img "TapTap Arrow"
                    - listitem [ref=e916]:
                      - link "Piece of Cake" [ref=e917]:
                        - /url: https://www.msn.com/en-in/play/games/piece-of-cake/cg-9n5mln8fpwg8?ocid=hpmsn&cvid=6a67000580f0428b9dba643872872a8f&ei=7
                        - generic [ref=e918]:
                          - img "Piece of Cake"
                    - listitem [ref=e919]:
                      - 'link "Car Destruction King: Mayhem" [ref=e920]':
                        - /url: https://www.msn.com/en-in/play/games/car-destruction-king-mayhem/cg-9pgbzt0smwg4?ocid=hpmsn&cvid=6a67000580f0428b9dba643872872a8f&ei=7
                        - generic [ref=e921]:
                          - 'img "Car Destruction King: Mayhem"'
                    - listitem [ref=e922]:
                      - link "Veck.io" [ref=e923]:
                        - /url: https://www.msn.com/en-in/play/games/veckio/cg-9mz3sdptqwm2?ocid=hpmsn&cvid=6a67000580f0428b9dba643872872a8f&ei=7
                        - generic [ref=e924]:
                          - img "Veck.io"
                    - listitem [ref=e925]:
                      - link "Arrow Slide Puzzle" [ref=e926]:
                        - /url: https://www.msn.com/en-in/play/games/arrow-slide-puzzle/cg-9p4rw4gjxb1f?ocid=hpmsn&cvid=6a67000580f0428b9dba643872872a8f&ei=7
                        - generic [ref=e927]:
                          - img "Arrow Slide Puzzle"
                    - listitem [ref=e928]:
                      - link "Solitaire Mahjong Classic" [ref=e929]:
                        - /url: https://www.msn.com/en-in/play/games/solitaire-mahjong-classic/cg-9p3m290dfqkb?ocid=hpmsn&cvid=6a67000580f0428b9dba643872872a8f&ei=7
                        - generic [ref=e930]:
                          - img "Solitaire Mahjong Classic"
                    - listitem [ref=e931]:
                      - link "Save The Pets" [ref=e932]:
                        - /url: https://www.msn.com/en-in/play/games/save-the-pets/cg-9p3610rr8qt5?ocid=hpmsn&cvid=6a67000580f0428b9dba643872872a8f&ei=7
                        - generic [ref=e933]:
                          - img "Save The Pets"
                    - listitem [ref=e934]:
                      - link "Jelly Run 2048" [ref=e935]:
                        - /url: https://www.msn.com/en-in/play/games/jelly-run-2048/cg-9nbckjw55fsv?ocid=hpmsn&cvid=6a67000580f0428b9dba643872872a8f&ei=7
                        - generic [ref=e936]:
                          - img "Jelly Run 2048"
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
                        - article [ref=e981]:
                          - generic [ref=e982]:
                            - img "He Was Fooling Around on the Edge - Then His Hand Suddenly Slipped" [ref=e984]
                            - generic [ref=e986]: 27:39
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e987]:
                              - generic [ref=e988]:
                                - img "Magnus Midtbø" [ref=e989]
                                - generic [ref=e990]:
                                  - generic:
                                    - generic "Magnus Midtbø" [ref=e991]
                                    - generic [ref=e992]: ·
                                    - generic [ref=e993]: 2d
                              - link "He was fooling around on the edge - then his hand suddenly slipped" [ref=e994]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/he-was-fooling-around-on-the-edge-then-his-hand-suddenly-slipped/vi-AA25YAAa?ocid=hpmsn
                                - heading "He was fooling around on the edge - then his hand suddenly slipped" [level=2] [ref=e995]:
                                  - generic: He was fooling around on the edge - then his hand suddenly slipped
                            - button "See more" [ref=e999]
                        - article [ref=e1002]:
                          - generic [ref=e1003]:
                            - img "Golden Retriever Performs His Masterpiece" [ref=e1005]
                            - generic [ref=e1007]: 00:49
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1008]:
                              - generic [ref=e1009]:
                                - img "Tucker Budzyn" [ref=e1010]
                                - generic [ref=e1011]:
                                  - generic:
                                    - generic "Tucker Budzyn" [ref=e1012]
                                    - generic [ref=e1013]: ·
                                    - generic [ref=e1014]: 16h
                              - link "Golden retriever performs his masterpiece" [ref=e1015]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/golden-retriever-performs-his-masterpiece/vi-AA28IPrY?ocid=hpmsn
                                - heading "Golden retriever performs his masterpiece" [level=2] [ref=e1016]:
                                  - generic: Golden retriever performs his masterpiece
                            - button "See more" [ref=e1020]
                        - article "America planned to drop 10-ton metal rods from space - taxpayers would have paid the bill" [ref=e1023]:
                          - generic [ref=e1024]:
                            - img "America Planned to Drop 10-Ton Metal Rods From Space - Taxpayers Would Have Paid the Bill" [ref=e1026]
                            - generic [ref=e1028]: 24:38
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
                                    - generic [ref=e1035]: 2d
                              - link "America planned to drop 10-ton metal rods from space - taxpayers would have paid the bill" [ref=e1036]:
                                - /url: https://www.msn.com/en-in/news/other/america-planned-to-drop-10-ton-metal-rods-from-space-taxpayers-would-have-paid-the-bill/vi-AA28BQ6e?ocid=hpmsn
                                - heading "America planned to drop 10-ton metal rods from space - taxpayers would have paid the bill" [level=2] [ref=e1037]:
                                  - generic: America planned to drop 10-ton metal rods from space - taxpayers would have paid the bill
                            - button "See more" [ref=e1041]
                        - article [ref=e1044]:
                          - generic [ref=e1045]:
                            - img "He Rejected $50M - Most Valuable Car On Earth" [ref=e1047]
                            - generic [ref=e1049]: 19:07
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1050]:
                              - generic [ref=e1051]:
                                - img "VINwiki" [ref=e1052]
                                - generic [ref=e1053]:
                                  - generic:
                                    - generic "VINwiki" [ref=e1054]
                                    - generic [ref=e1055]: ·
                                    - generic [ref=e1056]: 2d
                              - link "He rejected $50M - most valuable car on Earth" [ref=e1057]:
                                - /url: https://www.msn.com/en-in/autos/general/he-rejected-50m-most-valuable-car-on-earth/vi-AA20fMPJ?ocid=hpmsn
                                - heading "He rejected $50M - most valuable car on Earth" [level=2] [ref=e1058]:
                                  - generic: He rejected $50M - most valuable car on Earth
                            - button "See more" [ref=e1062]
                        - article "The US government has a weapon against presidents - and it can end careers fast" [ref=e1065]:
                          - generic [ref=e1066]:
                            - img "The U.S. Government Has a Weapon Against Presidents - And It Can End Careers Fast" [ref=e1068]
                            - generic [ref=e1070]: 05:12
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1071]:
                              - generic [ref=e1072]:
                                - img "TED" [ref=e1073]
                                - generic [ref=e1074]:
                                  - generic:
                                    - generic "TED" [ref=e1075]
                                    - generic [ref=e1076]: ·
                                    - generic [ref=e1077]: 5d
                              - link "The US government has a weapon against presidents - and it can end careers fast" [ref=e1078]:
                                - /url: https://www.msn.com/en-in/news/other/the-us-government-has-a-weapon-against-presidents-and-it-can-end-careers-fast/vi-AA22Ullw?ocid=hpmsn
                                - heading "The US government has a weapon against presidents - and it can end careers fast" [level=2] [ref=e1079]:
                                  - generic: The US government has a weapon against presidents - and it can end careers fast
                            - button "See more" [ref=e1083]
                        - article [ref=e1086]:
                          - generic [ref=e1087]:
                            - img "Touring Hawaii’s Priciest Mansion" [ref=e1089]
                            - generic [ref=e1091]: 23:34
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1092]:
                              - generic [ref=e1093]:
                                - img "Enes Yilmazer" [ref=e1094]
                                - generic [ref=e1095]:
                                  - generic:
                                    - generic "Enes Yilmazer" [ref=e1096]
                                    - generic [ref=e1097]: ·
                                    - generic [ref=e1098]: 13h
                              - link "Inside Hawaii’s most expensive luxury mansion" [ref=e1099]:
                                - /url: https://www.msn.com/en-in/money/general/inside-hawaii-s-most-expensive-luxury-mansion/vi-AA1VTxOi?ocid=hpmsn
                                - heading "Inside Hawaii’s most expensive luxury mansion" [level=2] [ref=e1100]:
                                  - generic: Inside Hawaii’s most expensive luxury mansion
                            - button "See more" [ref=e1104]
                        - article "Watch America's 10,000-ton Navy destroyer unleash 96 missiles" [ref=e1107]:
                          - generic [ref=e1108]:
                            - img "Watch America's 10,000-Ton Navy Destroyer Unleash 96 Missiles" [ref=e1110]
                            - generic [ref=e1112]: 20:53
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1113]:
                              - generic [ref=e1114]:
                                - img "Sam Eckholm" [ref=e1115]
                                - generic [ref=e1116]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1117]
                                    - generic [ref=e1118]: ·
                                    - generic [ref=e1119]: 2d
                              - link "Watch America's 10,000-ton Navy destroyer unleash 96 missiles" [ref=e1120]:
                                - /url: https://www.msn.com/en-in/news/other/watch-america-s-10-000-ton-navy-destroyer-unleash-96-missiles/vi-AA27xJzU?ocid=hpmsn
                                - heading "Watch America's 10,000-ton Navy destroyer unleash 96 missiles" [level=2] [ref=e1121]:
                                  - generic: Watch America's 10,000-ton Navy destroyer unleash 96 missiles
                            - button "See more" [ref=e1125]
                        - article [ref=e1128]:
                          - generic [ref=e1129]:
                            - img "Honda Integra Type R Goes Full Pace At Nürburgring" [ref=e1131]
                            - generic [ref=e1133]: 09:46
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1134]:
                              - generic [ref=e1135]:
                                - img "Misha Charoudin" [ref=e1136]
                                - generic [ref=e1137]:
                                  - generic:
                                    - generic "Misha Charoudin" [ref=e1138]
                                    - generic [ref=e1139]: ·
                                    - generic [ref=e1140]: 14h
                              - link "Honda Integra Type R goes full pace at Nürburgring" [ref=e1141]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/honda-integra-type-r-goes-full-pace-at-n%C3%BCrburgring/vi-AA28Ief3?ocid=hpmsn
                                - heading "Honda Integra Type R goes full pace at Nürburgring" [level=2] [ref=e1142]:
                                  - generic: Honda Integra Type R goes full pace at Nürburgring
                            - button "See more" [ref=e1146]
                        - article [ref=e1149]:
                          - generic [ref=e1150]:
                            - img "An Asteroid Exploded Over Russia - And We Never Saw It Coming" [ref=e1152]
                            - generic [ref=e1154]: 18:31
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1155]:
                              - generic [ref=e1156]:
                                - img "Veritasium" [ref=e1157]
                                - generic [ref=e1158]:
                                  - generic:
                                    - generic "Veritasium" [ref=e1159]
                                    - generic [ref=e1160]: ·
                                    - generic [ref=e1161]: 3d
                              - link "An asteroid exploded over Russia - and we never saw it coming" [ref=e1162]:
                                - /url: https://www.msn.com/en-in/news/other/an-asteroid-exploded-over-russia-and-we-never-saw-it-coming/vi-AA20kKzm?ocid=hpmsn
                                - heading "An asteroid exploded over Russia - and we never saw it coming" [level=2] [ref=e1163]:
                                  - generic: An asteroid exploded over Russia - and we never saw it coming
                            - button "See more" [ref=e1167]
                        - article "Farmers started snitching on their neighbors - the seed monopoly that turned rural America against itself" [ref=e1170]:
                          - generic [ref=e1171]:
                            - img "Farmers Started Snitching on Their Neighbors - The Seed Monopoly That Turned Rural America Against Itself" [ref=e1173]
                            - generic [ref=e1175]: 46:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1176]:
                              - generic [ref=e1177]:
                                - img "Veritasium" [ref=e1178]
                                - generic [ref=e1179]:
                                  - generic:
                                    - generic "Veritasium" [ref=e1180]
                                    - generic [ref=e1181]: ·
                                    - generic [ref=e1182]: 2d
                              - link "Farmers started snitching on their neighbors - the seed monopoly that turned rural America against itself" [ref=e1183]:
                                - /url: https://www.msn.com/en-in/money/general/farmers-started-snitching-on-their-neighbors-the-seed-monopoly-that-turned-rural-america-against-itself/vi-AA28C0kd?ocid=hpmsn
                                - heading "Farmers started snitching on their neighbors - the seed monopoly that turned rural America against itself" [level=2] [ref=e1184]:
                                  - generic: Farmers started snitching on their neighbors - the seed monopoly that turned rural America against itself
                            - button "See more" [ref=e1188]
                        - article "Watch America's $500 million warship blast across the ocean at 47 mph" [ref=e1191]:
                          - generic [ref=e1192]:
                            - img "Watch America's $500 Million Warship Blast Across The Ocean At 47 MPH" [ref=e1194]
                            - generic [ref=e1196]: 20:52
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1197]:
                              - generic [ref=e1198]:
                                - img "Sam Eckholm" [ref=e1199]
                                - generic [ref=e1200]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1201]
                                    - generic [ref=e1202]: ·
                                    - generic [ref=e1203]: 3d
                              - link "Watch America's $500 million warship blast across the ocean at 47 mph" [ref=e1204]:
                                - /url: https://www.msn.com/en-in/news/other/watch-america-s-500-million-warship-blast-across-the-ocean-at-47-mph/vi-AA27CqcG?ocid=hpmsn
                                - heading "Watch America's $500 million warship blast across the ocean at 47 mph" [level=2] [ref=e1205]:
                                  - generic: Watch America's $500 million warship blast across the ocean at 47 mph
                            - button "See more" [ref=e1209]
                        - article "This woman smelled her husband’s disease 12 years before doctors diagnosed him" [ref=e1212]:
                          - generic [ref=e1213]:
                            - img "This Woman Smelled Her Husband’s Disease 12 Years Before Doctors Diagnosed Him" [ref=e1215]
                            - generic [ref=e1217]: 17:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1218]:
                              - generic [ref=e1219]:
                                - img "TED" [ref=e1220]
                                - generic [ref=e1221]:
                                  - generic:
                                    - generic "TED" [ref=e1222]
                                    - generic [ref=e1223]: ·
                                    - generic [ref=e1224]: 1w
                              - link "This woman smelled her husband’s disease 12 years before doctors diagnosed him" [ref=e1225]:
                                - /url: https://www.msn.com/en-in/health/diseases-and-conditions/this-woman-smelled-her-husband-s-disease-12-years-before-doctors-diagnosed-him/vi-AA22BtPF?ocid=hpmsn
                                - heading "This woman smelled her husband’s disease 12 years before doctors diagnosed him" [level=2] [ref=e1226]:
                                  - generic: This woman smelled her husband’s disease 12 years before doctors diagnosed him
                            - button "See more" [ref=e1230]
                        - article "Watch NATO hunt Russian submarines underwater - \"Silent War\"" [ref=e1233]:
                          - generic [ref=e1234]:
                            - img "Watch NATO Hunt Russian Submarines Underwater - “Silent War”" [ref=e1236]
                            - generic [ref=e1238]: 28:21
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1239]:
                              - generic [ref=e1240]:
                                - img "Sam Eckholm" [ref=e1241]
                                - generic [ref=e1242]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1243]
                                    - generic [ref=e1244]: ·
                                    - generic [ref=e1245]: 2w
                              - link "Watch NATO hunt Russian submarines underwater - \"Silent War\"" [ref=e1246]:
                                - /url: https://www.msn.com/en-in/news/other/watch-nato-hunt-russian-submarines-underwater-silent-war/vi-AA22Akc1?ocid=hpmsn
                                - heading "Watch NATO hunt Russian submarines underwater - \"Silent War\"" [level=2] [ref=e1247]:
                                  - generic: Watch NATO hunt Russian submarines underwater - "Silent War"
                            - button "See more" [ref=e1251]
                        - article "The ocean suddenly pulled back - then a 100-foot wall of water came for the coast" [ref=e1254]:
                          - generic [ref=e1255]:
                            - img "The Ocean Suddenly Pulled Back - Then a 100-Foot Wall of Water Came for the Coast" [ref=e1257]
                            - generic [ref=e1259]: 03:36
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1260]:
                              - generic [ref=e1261]:
                                - img "TED" [ref=e1262]
                                - generic [ref=e1263]:
                                  - generic:
                                    - generic "TED" [ref=e1264]
                                    - generic [ref=e1265]: ·
                                    - generic [ref=e1266]: 6d
                              - link "The ocean suddenly pulled back - then a 100-foot wall of water came for the coast" [ref=e1267]:
                                - /url: https://www.msn.com/en-in/weather/general/the-ocean-suddenly-pulled-back-then-a-100-foot-wall-of-water-came-for-the-coast/vi-AA27T9or?ocid=hpmsn
                                - heading "The ocean suddenly pulled back - then a 100-foot wall of water came for the coast" [level=2] [ref=e1268]:
                                  - generic: The ocean suddenly pulled back - then a 100-foot wall of water came for the coast
                            - button "See more" [ref=e1272]
                        - article "I made my passenger nervous during Nürburgring lap inside Seat Cupra" [ref=e1275]:
                          - generic [ref=e1276]:
                            - img "I Made My Passenger Nervous During Nürburgring Lap Inside Seat Cupra" [ref=e1278]
                            - generic [ref=e1280]: 10:19
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1281]:
                              - generic [ref=e1282]:
                                - img "Misha Charoudin" [ref=e1283]
                                - generic [ref=e1284]:
                                  - generic:
                                    - generic "Misha Charoudin" [ref=e1285]
                                    - generic [ref=e1286]: ·
                                    - generic [ref=e1287]: 14h
                              - link "I made my passenger nervous during Nürburgring lap inside Seat Cupra" [ref=e1288]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/i-made-my-passenger-nervous-during-n%C3%BCrburgring-lap-inside-seat-cupra/vi-AA28IQ0f?ocid=hpmsn
                                - heading "I made my passenger nervous during Nürburgring lap inside Seat Cupra" [level=2] [ref=e1289]:
                                  - generic: I made my passenger nervous during Nürburgring lap inside Seat Cupra
                            - button "See more" [ref=e1293]
                        - article "The unexpected reality Trevor Noah faced after meeting a president" [ref=e1296]:
                          - generic [ref=e1297]:
                            - img "The Unexpected Reality Trevor Noah Faced After Meeting a President" [ref=e1299]
                            - generic [ref=e1301]: 16:23
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1302]:
                              - generic [ref=e1303]:
                                - img "Trevor Noah" [ref=e1304]
                                - generic [ref=e1305]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1306]
                                    - generic [ref=e1307]: ·
                                    - generic [ref=e1308]: 2d
                              - link "The unexpected reality Trevor Noah faced after meeting a president" [ref=e1309]:
                                - /url: https://www.msn.com/en-in/entertainment/general/the-unexpected-reality-trevor-noah-faced-after-meeting-a-president/vi-AA28AQqM?ocid=hpmsn
                                - heading "The unexpected reality Trevor Noah faced after meeting a president" [level=2] [ref=e1310]:
                                  - generic: The unexpected reality Trevor Noah faced after meeting a president
                            - button "See more" [ref=e1314]
                        - article [ref=e1317]:
                          - generic [ref=e1318]:
                            - img "Driving $1.5M Car To The Most Dangerous Part Of Town" [ref=e1320]
                            - generic [ref=e1322]: 10:14
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1323]:
                              - generic [ref=e1324]:
                                - img "VINwiki" [ref=e1325]
                                - generic "VINwiki" [ref=e1327]
                              - link "Driving $1.5M car to the most dangerous part of town" [ref=e1328]:
                                - /url: https://www.msn.com/en-in/news/other/driving-1-5m-car-to-the-most-dangerous-part-of-town/vi-AA1WTIeK?ocid=hpmsn
                                - heading "Driving $1.5M car to the most dangerous part of town" [level=2] [ref=e1329]:
                                  - generic: Driving $1.5M car to the most dangerous part of town
                            - button "See more" [ref=e1333]
                        - article "He got upgraded to a $65,000 suite - then the first dinner bill arrived" [ref=e1336]:
                          - generic [ref=e1337]:
                            - img "He Got Upgraded To A $65,000 Suite - Then The First Dinner Bill Arrived" [ref=e1339]
                            - generic [ref=e1341]: 28:00
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1342]:
                              - generic [ref=e1343]:
                                - img "Trek Trendy" [ref=e1344]
                                - generic "Trek Trendy" [ref=e1346]
                              - link "He got upgraded to a $65,000 suite - then the first dinner bill arrived" [ref=e1347]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/he-got-upgraded-to-a-65-000-suite-then-the-first-dinner-bill-arrived/vi-AA25L1uj?ocid=hpmsn
                                - heading "He got upgraded to a $65,000 suite - then the first dinner bill arrived" [level=2] [ref=e1348]:
                                  - generic: He got upgraded to a $65,000 suite - then the first dinner bill arrived
                            - button "See more" [ref=e1352]
                        - article [ref=e1355]:
                          - generic [ref=e1356]:
                            - img "She Gave Birth to Her Children - Then DNA Said She Was Their Aunt" [ref=e1358]
                            - generic [ref=e1360]: 04:23
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1361]:
                              - generic [ref=e1362]:
                                - img "TED" [ref=e1363]
                                - generic [ref=e1364]:
                                  - generic:
                                    - generic "TED" [ref=e1365]
                                    - generic [ref=e1366]: ·
                                    - generic [ref=e1367]: 1w
                              - link "She gave birth to her children - then DNA said she was their aunt" [ref=e1368]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/she-gave-birth-to-her-children-then-dna-said-she-was-their-aunt/vi-AA220ASG?ocid=hpmsn
                                - heading "She gave birth to her children - then DNA said she was their aunt" [level=2] [ref=e1369]:
                                  - generic: She gave birth to her children - then DNA said she was their aunt
                            - button "See more" [ref=e1373]
                        - 'article "Learning Korean negation: Funny phrases & essential grammar with Ollie & Josh | JOLLY Ep. IX" [ref=e1376]':
                          - generic [ref=e1377]:
                            - 'img "Learning Korean Negation: Funny Phrases & Essential Grammar with Ollie & Josh | JOLLY Ep. IX" [ref=e1379]'
                            - generic [ref=e1381]: 08:41
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1382]:
                              - generic [ref=e1383]:
                                - img "JOLLY" [ref=e1384]
                                - generic [ref=e1385]:
                                  - generic:
                                    - generic "JOLLY" [ref=e1386]
                                    - generic [ref=e1387]: ·
                                    - generic [ref=e1388]: 1d
                              - 'link "Learning Korean negation: Funny phrases & essential grammar with Ollie & Josh | JOLLY Ep. IX" [ref=e1389]':
                                - /url: https://www.msn.com/en-in/entertainment/general/learning-korean-negation-funny-phrases-essential-grammar-with-ollie-josh-jolly-ep-ix/vi-AA27Fk6S?ocid=hpmsn
                                - 'heading "Learning Korean negation: Funny phrases & essential grammar with Ollie & Josh | JOLLY Ep. IX" [level=2] [ref=e1390]':
                                  - generic: "Learning Korean negation: Funny phrases & essential grammar with Ollie & Josh | JOLLY Ep. IX"
                            - button "See more" [ref=e1394]
                        - link "See more" [ref=e1396]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1397]
                          - text: See more
                    - button "next" [ref=e1401]:
                      - img [ref=e1404]
            - article "MEA fact-checks viral post claiming 'no foreign funding for CJP' as misleading — here's the truth" [ref=e1406] [cursor=pointer]:
              - generic [ref=e1408]:
                - img [ref=e1409]
                - generic [ref=e1410]:
                  - generic [ref=e1411]:
                    - generic [ref=e1412]:
                      - generic [ref=e1413]:
                        - img [ref=e1414]
                        - generic [ref=e1415]: Live Mint
                      - generic [ref=e1416]: ·
                      - generic [ref=e1417]: 16h
                    - link "MEA fact-checks viral post claiming 'no foreign funding for CJP' as misleading — here's the truth, Live Mint" [ref=e1418]:
                      - /url: https://www.msn.com/en-in/news/other/mea-fact-checks-viral-post-claiming-no-foreign-funding-for-cjp-as-misleading-here-s-the-truth/ar-AA28IDC2
                      - text: MEA fact-checks viral post claiming 'no foreign funding for CJP' as misleading — here's the truth
                  - generic "MEA fact-checks viral post claiming 'no foreign funding for CJP' as misleading — here's the truth" [ref=e1421]:
                    - generic [ref=e1423]:
                      - generic [ref=e1424]:
                        - button "40 Likes" [ref=e1425]:
                          - generic [ref=e1426]:
                            - img [ref=e1427]
                            - generic [ref=e1429]: "40"
                        - button "6 Dislikes" [ref=e1430]:
                          - img [ref=e1432]
                      - link "View comments 2 Comment" [ref=e1435]:
                        - /url: https://www.msn.com/en-in/news/other/mea-fact-checks-viral-post-claiming-no-foreign-funding-for-cjp-as-misleading-here-s-the-truth/ar-AA28IDC2#comments
                        - button "View comments 2 Comment" [ref=e1436]:
                          - img [ref=e1437]
                        - generic [ref=e1439]: "2"
                - generic [ref=e1440]:
                  - button "Hide this story" [ref=e1441]:
                    - img [ref=e1442]
                    - text: Hide this story
                  - button "See more" [ref=e1443]:
                    - img [ref=e1444]
            - article [ref=e1445] [cursor=pointer]:
              - generic [ref=e1451]:
                - generic [ref=e1453]:
                  - img "ICC" [ref=e1455]
                  - link "ICC" [ref=e1456]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6a67000580f0428b9dba643872872a8f
                    - heading "ICC" [level=2] [ref=e1457]
                  - button "More interests" [ref=e1458]
                  - generic [ref=e1459]:
                    - generic "Popular in your area" [ref=e1460]:
                      - button "Popular in your area" [ref=e1461]
                    - button "More options" [ref=e1462]
                - generic [ref=e1466]:
                  - link "WI 311 Stumps PAK 199/3 PAK trail by 112 runs" [ref=e1467]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-271576?ocid=hpmsn&cvid=6a67000580f0428b9dba643872872a8f
                    - generic "WI" [ref=e1468]:
                      - generic [ref=e1469]:
                        - generic [ref=e1470]:
                          - generic [ref=e1472]: WI
                          - button "Click to follow WI":
                            - generic:
                              - img
                        - generic [ref=e1475]: "311"
                    - generic [ref=e1479]: Stumps
                    - generic "PAK" [ref=e1480]:
                      - generic [ref=e1481]:
                        - generic [ref=e1482]:
                          - generic [ref=e1484]: PAK
                          - button "Click to follow PAK":
                            - generic:
                              - img
                        - generic [ref=e1487]: 199/3
                    - generic "PAK trail by 112 runs" [ref=e1490]
                  - link "ZIM 157/7 (20.0) VS IND 192/5 (20.0) IND won by 35 runs" [ref=e1491]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-270413?ocid=hpmsn&cvid=6a67000580f0428b9dba643872872a8f
                    - generic "ZIM" [ref=e1492]:
                      - generic [ref=e1493]:
                        - generic [ref=e1494]:
                          - generic [ref=e1496]: ZIM
                          - button "Click to follow ZIM":
                            - generic:
                              - img
                        - generic [ref=e1498]:
                          - generic [ref=e1499]: 157/7
                          - generic [ref=e1500]: (20.0)
                    - generic [ref=e1504]: VS
                    - generic "IND" [ref=e1505]:
                      - generic [ref=e1506]:
                        - img [ref=e1508]
                        - generic [ref=e1510]:
                          - generic [ref=e1512]: IND
                          - button "Click to follow IND":
                            - generic:
                              - img
                        - generic [ref=e1514]:
                          - generic [ref=e1515]: 192/5
                          - generic [ref=e1516]: (20.0)
                    - generic "IND won by 35 runs" [ref=e1519]
                  - link "WI 2 Aug 2:00 pm PAK Queen's Park Oval, Port of Spain" [ref=e1520]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-271578?ocid=hpmsn&cvid=6a67000580f0428b9dba643872872a8f
                    - generic "WI" [ref=e1521]:
                      - generic [ref=e1523]:
                        - generic [ref=e1525]: WI
                        - button "Click to follow WI":
                          - generic:
                            - img
                    - generic [ref=e1528]:
                      - generic [ref=e1529]: 2 Aug
                      - generic [ref=e1530]: 2:00 pm
                    - generic "PAK" [ref=e1531]:
                      - generic [ref=e1533]:
                        - generic [ref=e1535]: PAK
                        - button "Click to follow PAK":
                          - generic:
                            - img
                    - generic "Queen's Park Oval, Port of Spain" [ref=e1538]
                - generic [ref=e1540]:
                  - generic [ref=e1541]:
                    - generic "Previous" [ref=e1542]:
                      - button "Previous" [ref=e1543]
                    - tablist [ref=e1545]:
                      - tab "tab-0" [selected] [ref=e1546]
                      - tab "tab-1" [ref=e1548]
                      - tab "tab-2" [ref=e1550]
                    - generic "Next" [ref=e1552]:
                      - button "Next" [ref=e1553]
                  - link "See more ICC" [ref=e1555]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6a67000580f0428b9dba643872872a8f
            - article "Mathayus battles Memnon in the final fight – The Scorpion King" [ref=e1556] [cursor=pointer]:
              - generic [ref=e1558]:
                - generic [ref=e1562]:
                  - generic [ref=e1563]:
                    - generic [ref=e1564]:
                      - generic [ref=e1565]:
                        - img [ref=e1566]
                        - generic [ref=e1567]: Popcorn Picks
                      - generic [ref=e1568]: ·
                      - generic [ref=e1569]: 1w
                    - link "Mathayus battles Memnon in the final fight – The Scorpion King, Popcorn Picks" [ref=e1570]:
                      - /url: https://www.msn.com/en-in/entertainment/movies/mathayus-battles-memnon-in-the-final-fight-the-scorpion-king/vi-AA1NFYyU
                      - text: Mathayus battles Memnon in the final fight – The Scorpion King
                  - generic "Mathayus battles Memnon in the final fight – The Scorpion King" [ref=e1573]:
                    - generic [ref=e1575]:
                      - generic [ref=e1576]:
                        - button "153 Likes" [ref=e1577]:
                          - generic [ref=e1578]:
                            - img [ref=e1579]
                            - generic [ref=e1581]: "153"
                        - button "42 Dislikes" [ref=e1582]:
                          - img [ref=e1584]
                      - link "Start the conversation" [ref=e1587]:
                        - /url: https://www.msn.com/en-in/entertainment/movies/mathayus-battles-memnon-in-the-final-fight-the-scorpion-king/vi-AA1NFYyU#comments
                        - button "Start the conversation" [ref=e1588]:
                          - img [ref=e1589]
                - generic [ref=e1591]:
                  - button "Hide this story" [ref=e1592]:
                    - img [ref=e1593]
                    - text: Hide this story
                  - button "See more" [ref=e1594]:
                    - img [ref=e1595]
            - article "Delhi police crack down on posts targeting PM Modi after NEET protest" [ref=e1596] [cursor=pointer]:
              - generic [ref=e1598]:
                - img [ref=e1599]
                - generic [ref=e1600]:
                  - generic [ref=e1601]:
                    - generic [ref=e1602]:
                      - generic [ref=e1603]:
                        - img [ref=e1604]
                        - generic [ref=e1605]: NDTV 24x7
                      - generic [ref=e1606]: ·
                      - generic [ref=e1607]: 12h
                    - link "Delhi police crack down on posts targeting PM Modi after NEET protest, NDTV 24x7" [ref=e1608]:
                      - /url: https://www.msn.com/en-in/news/other/delhi-police-crack-down-on-posts-targeting-pm-modi-after-neet-protest/ar-AA28IJkL
                      - text: Delhi police crack down on posts targeting PM Modi after NEET protest
                  - generic "Delhi police crack down on posts targeting PM Modi after NEET protest" [ref=e1611]:
                    - generic [ref=e1613]:
                      - generic [ref=e1614]:
                        - button "66 Likes" [ref=e1615]:
                          - generic [ref=e1616]:
                            - img [ref=e1617]
                            - generic [ref=e1619]: "66"
                        - button "5 Dislikes" [ref=e1620]:
                          - img [ref=e1622]
                      - link "Start the conversation" [ref=e1625]:
                        - /url: https://www.msn.com/en-in/news/other/delhi-police-crack-down-on-posts-targeting-pm-modi-after-neet-protest/ar-AA28IJkL#comments
                        - button "Start the conversation" [ref=e1626]:
                          - img [ref=e1627]
                - generic [ref=e1629]:
                  - button "Hide this story" [ref=e1630]:
                    - img [ref=e1631]
                    - text: Hide this story
                  - button "See more" [ref=e1632]:
                    - img [ref=e1633]
            - article [ref=e1634] [cursor=pointer]
            - 'article "Gold rate today: Check 24K, 22K gold prices in Mumbai, Delhi, Chennai, Kolkata, Bengaluru on July 27" [ref=e1641] [cursor=pointer]':
              - generic [ref=e1643]:
                - img [ref=e1644]
                - generic [ref=e1645]:
                  - generic [ref=e1646]:
                    - generic [ref=e1647]:
                      - generic [ref=e1648]:
                        - img [ref=e1649]
                        - generic [ref=e1650]: NDTV Profit
                      - generic [ref=e1651]: ·
                      - generic [ref=e1652]: 5h
                    - 'link "Gold rate today: Check 24K, 22K gold prices in Mumbai, Delhi, Chennai, Kolkata, Bengaluru on July 27, NDTV Profit" [ref=e1653]':
                      - /url: https://www.msn.com/en-in/money/economy/gold-rate-today-check-24k-22k-gold-prices-in-mumbai-delhi-chennai-kolkata-bengaluru-on-july-27/ar-AA28JOhZ
                      - text: "Gold rate today: Check 24K, 22K gold prices in Mumbai, Delhi, Chennai, Kolkata, Bengaluru on July 27"
                  - 'generic "Gold rate today: Check 24K, 22K gold prices in Mumbai, Delhi, Chennai, Kolkata, Bengaluru on July 27" [ref=e1656]':
                    - generic [ref=e1658]:
                      - generic [ref=e1659]:
                        - button "14 Likes" [ref=e1660]:
                          - generic [ref=e1661]:
                            - img [ref=e1662]
                            - generic [ref=e1664]: "14"
                        - button "8 Dislikes" [ref=e1665]:
                          - img [ref=e1667]
                      - link "Start the conversation" [ref=e1670]:
                        - /url: https://www.msn.com/en-in/money/economy/gold-rate-today-check-24k-22k-gold-prices-in-mumbai-delhi-chennai-kolkata-bengaluru-on-july-27/ar-AA28JOhZ#comments
                        - button "Start the conversation" [ref=e1671]:
                          - img [ref=e1672]
                - generic [ref=e1674]:
                  - button "Hide this story" [ref=e1675]:
                    - img [ref=e1676]
                    - text: Hide this story
                  - button "See more" [ref=e1677]:
                    - img [ref=e1678]
          - generic [ref=e1679]:
            - article [ref=e1680] [cursor=pointer]
            - article "Virat Kohli, Anushka Sharma buy 2,644 sq ft apartment in Mumbai's Versova for ₹18.29 crore" [ref=e1687] [cursor=pointer]:
              - generic [ref=e1689]:
                - img [ref=e1690]
                - generic [ref=e1691]:
                  - generic [ref=e1692]:
                    - generic [ref=e1693]:
                      - generic [ref=e1694]:
                        - img [ref=e1695]
                        - generic [ref=e1696]: Hindustan Times
                      - generic [ref=e1697]: ·
                      - generic [ref=e1698]: 2h
                    - link "Virat Kohli, Anushka Sharma buy 2,644 sq ft apartment in Mumbai's Versova for ₹18.29 crore, Hindustan Times" [ref=e1699]:
                      - /url: https://www.msn.com/en-in/money/general/virat-kohli-anushka-sharma-buy-2-644-sq-ft-apartment-in-mumbai-s-versova-for-18-29-crore/ar-AA28KWz5
                      - text: Virat Kohli, Anushka Sharma buy 2,644 sq ft apartment in Mumbai's Versova for ₹18.29 crore
                  - generic "Virat Kohli, Anushka Sharma buy 2,644 sq ft apartment in Mumbai's Versova for ₹18.29 crore" [ref=e1702]:
                    - generic [ref=e1704]:
                      - generic [ref=e1705]:
                        - button "8 Likes" [ref=e1706]:
                          - generic [ref=e1707]:
                            - img [ref=e1708]
                            - generic [ref=e1710]: "8"
                        - button "1 Dislike" [ref=e1711]:
                          - img [ref=e1713]
                      - link "Start the conversation" [ref=e1716]:
                        - /url: https://www.msn.com/en-in/money/general/virat-kohli-anushka-sharma-buy-2-644-sq-ft-apartment-in-mumbai-s-versova-for-18-29-crore/ar-AA28KWz5#comments
                        - button "Start the conversation" [ref=e1717]:
                          - img [ref=e1718]
                - generic [ref=e1720]:
                  - button "Hide this story" [ref=e1721]:
                    - img [ref=e1722]
                    - text: Hide this story
                  - button "See more" [ref=e1723]:
                    - img [ref=e1724]
    - contentinfo [ref=e1727]:
      - generic "Feedback" [ref=e1729] [cursor=pointer]:
        - button "Feedback" [ref=e1730]:
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