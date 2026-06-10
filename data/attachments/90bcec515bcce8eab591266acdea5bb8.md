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
        - 'link "Chicago: Mostly clear, 22 °C" [ref=e19] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois
          - generic "Chicago, Illinois, United States Click here to see more information" [ref=e20]: Chicago
          - img "Mostly clear" [ref=e22]
          - generic [ref=e23]:
            - generic [ref=e24]: ‎22‎
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
              - article "Two Month Vape Detector Trial" [ref=e281] [cursor=pointer]:
                - generic [ref=e283]:
                  - img [ref=e284]
                  - generic [ref=e285]:
                    - generic [ref=e286]:
                      - generic [ref=e289]: Triton Sensors
                      - link "Two Month Vape Detector Trial, Triton Sensors" [ref=e290]:
                        - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=ee03d1d1-183e-4f59-b867-77c84d83cc49&bdc=oa&bidId=11&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=d581f23d-90e8-494b-9e37-4c552812097b&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8GzcNCQKsNm4PrOV5ILaimjVUCUwHAflcQafG14JW0hpzHJPjC0lOkbZcgR_5Zko8Lnx_XrpEI9IZz50veNPtcN4E0etLLdx7gB7o97-MNNKZbnsJdGbIikscAILJTODW7HQ2Q6UK8LUc7_0tYYqAel2u99Aq-d2nh9QvrMdQVdJgBgFvtrogJ7L13CMLIUrZl1m_Tw%26u%3DaHR0cCUzYSUyZiUyZnRyaXRvbnNlbnNvcnMuY29tJTJmdmFwZS1kZXRlY3RvciUzZnV0bV90ZXJtJTNka2V5d29yZCUyNnV0bV9jYW1wYWlnbiUzZERpc3BsYXklMmItJTJiUmVtYXJrZXRpbmcxJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkcHBjJTI2aHNhX2FjYyUzZDk1NTgxMTIxNDglMjZoc2FfY2FtJTNkMjE5MTQ3NjM1MjUlMjZoc2FfZ3JwJTNkMTIyNzA1NjMyMzYwNjg4MiUyNmhzYV9hZCUzZCUyNmhzYV9zcmMlM2RhJTI2aHNhX3RndCUzZGt3ZC0yMzI4NDkwNzUxMjA1NDg1JTNhbG9jLTE5MCUyNmhzYV9rdyUzZGtleXdvcmQlMjZoc2FfbXQlM2RlJTI2aHNhX25ldCUzZGFkd29yZHMlMjZoc2FfdmVyJTNkMyUyNm1zY2xraWQlM2RlMzQwOWViNDQ5NDIxMGE5N2YwZGY0OWQ1ZTIxZjczZg%26rlid%3De3409eb4494210a97f0df49d5e21f73f&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                        - text: Two Month Vape Detector Trial
                    - link "Sponsored" [ref=e292]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=ee03d1d1-183e-4f59-b867-77c84d83cc49&bdc=oa&bidId=11&bidderId=4&cmExpId=RSV&impId=2&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=d581f23d-90e8-494b-9e37-4c552812097b&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8GzcNCQKsNm4PrOV5ILaimjVUCUwHAflcQafG14JW0hpzHJPjC0lOkbZcgR_5Zko8Lnx_XrpEI9IZz50veNPtcN4E0etLLdx7gB7o97-MNNKZbnsJdGbIikscAILJTODW7HQ2Q6UK8LUc7_0tYYqAel2u99Aq-d2nh9QvrMdQVdJgBgFvtrogJ7L13CMLIUrZl1m_Tw%26u%3DaHR0cCUzYSUyZiUyZnRyaXRvbnNlbnNvcnMuY29tJTJmdmFwZS1kZXRlY3RvciUzZnV0bV90ZXJtJTNka2V5d29yZCUyNnV0bV9jYW1wYWlnbiUzZERpc3BsYXklMmItJTJiUmVtYXJrZXRpbmcxJTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkcHBjJTI2aHNhX2FjYyUzZDk1NTgxMTIxNDglMjZoc2FfY2FtJTNkMjE5MTQ3NjM1MjUlMjZoc2FfZ3JwJTNkMTIyNzA1NjMyMzYwNjg4MiUyNmhzYV9hZCUzZCUyNmhzYV9zcmMlM2RhJTI2aHNhX3RndCUzZGt3ZC0yMzI4NDkwNzUxMjA1NDg1JTNhbG9jLTE5MCUyNmhzYV9rdyUzZGtleXdvcmQlMjZoc2FfbXQlM2RlJTI2aHNhX25ldCUzZGFkd29yZHMlMjZoc2FfdmVyJTNkMyUyNm1zY2xraWQlM2RlMzQwOWViNDQ5NDIxMGE5N2YwZGY0OWQ1ZTIxZjczZg%26rlid%3De3409eb4494210a97f0df49d5e21f73f&rtype=targetURL&tagId=hp2-infopane-6&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                  - button "See more" [ref=e294]:
                    - img [ref=e295]
            - article [ref=e296] [cursor=pointer]:
              - generic [ref=e301]:
                - generic [ref=e303]:
                  - link "Top stories" [ref=e305]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a2917613a884f6ba174b8d9e112de11&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e306]
                  - button "More options" [ref=e308]
                - list [ref=e311]:
                  - listitem "TMC's Sushmita Dev resigns as Rajya Sabha MP in second jolt to Mamata, then meets Assam CM Sarma" [ref=e312]:
                    - generic [ref=e313]:
                      - generic [ref=e314]:
                        - generic:
                          - generic [ref=e315]: Breaking
                          - img [ref=e316]
                        - generic [ref=e317]:
                          - generic: Hindustan Times ·1h
                      - generic [ref=e318]: TMC's Sushmita Dev resigns as Rajya Sabha MP in second jolt to Mamata, then meets Assam CM Sarma
                  - 'listitem "Modi govt 12 years: How India''s infrastructure changed under his watch" [ref=e319]':
                    - generic [ref=e320]:
                      - generic [ref=e321]:
                        - img [ref=e322]
                        - generic [ref=e323]:
                          - generic: WION ·now
                      - generic [ref=e324]: "Modi govt 12 years: How India's infrastructure changed under his watch"
                  - 'listitem "Cong leaders eyeing Rajya Sabha seat spoiled Natarajan''s chances: MP CM Yadav" [ref=e325]':
                    - generic [ref=e326]:
                      - generic [ref=e327]:
                        - img [ref=e328]
                        - generic [ref=e329]:
                          - generic: Press Trust of India ·now
                      - generic [ref=e330]: "Cong leaders eyeing Rajya Sabha seat spoiled Natarajan's chances: MP CM Yadav"
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
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6a2917613a884f6ba174b8d9e112de11&ocid=hpmsn
            - article [ref=e348] [cursor=pointer]:
              - generic [ref=e352]:
                - generic: Sponsored
            - article "DoD Contract Jobs - Security Clearance Required - Federal Government Contract Jobs" [ref=e353] [cursor=pointer]:
              - generic [ref=e355]:
                - img [ref=e356]
                - generic [ref=e357]:
                  - generic [ref=e358]:
                    - generic [ref=e361]: ClearanceJobs
                    - link "DoD Contract Jobs - Security Clearance Required - Federal Government Contract Jobs, ClearanceJobs" [ref=e362]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=56aeab10-bef2-4ca2-b1ac-c323c4d5fb6a&bdc=oa&bidId=1&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=d581f23d-90e8-494b-9e37-4c552812097b&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8T0OkJ_uDscuFiVmQtIc4tjVUCUzg33po9c7GqNx7gxhXH_whSJFKkpBU0q_M5LlZAmljO8j08rS2aTLfK8eO3ZQ573z8BrZ9gtrGiCuHEkPEaPqtSUhZ4YpBhmwIrPms_CDogpT3nKEh_QUxBKhWhmU3wyPljSIgxkvZEokT8I-yDXcJT5C7HhKHh85cCX3g08QRYA%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuY2xlYXJhbmNlam9icy5jb20lMmZyZWdpc3RyYXRpb24lM2Ztc2Nsa2lkJTNkY2IyZTBhNDA0ZjUzMWJhMTQ4ZGE2MDY5NTgzMDYyM2YlMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RCMkMlMjUyMC0lMjUyMEdlbmVyYWwlMjUyMFRlcm1zJTI2dXRtX3Rlcm0lM2RmZWRlcmFsJTI1MjBnb3Zlcm5tZW50JTI1MjBjb250cmFjdCUyNTIwam9icyUyNnV0bV9jb250ZW50JTNkRmVkZXJhbA%26rlid%3Dcb2e0a404f531ba148da60695830623f&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: DoD Contract Jobs - Security Clearance Required - Federal Government Contract Jobs
                  - link "Sponsored" [ref=e364]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=56aeab10-bef2-4ca2-b1ac-c323c4d5fb6a&bdc=oa&bidId=1&bidderId=4&cmExpId=RSV&impId=8&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=d581f23d-90e8-494b-9e37-4c552812097b&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8T0OkJ_uDscuFiVmQtIc4tjVUCUzg33po9c7GqNx7gxhXH_whSJFKkpBU0q_M5LlZAmljO8j08rS2aTLfK8eO3ZQ573z8BrZ9gtrGiCuHEkPEaPqtSUhZ4YpBhmwIrPms_CDogpT3nKEh_QUxBKhWhmU3wyPljSIgxkvZEokT8I-yDXcJT5C7HhKHh85cCX3g08QRYA%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuY2xlYXJhbmNlam9icy5jb20lMmZyZWdpc3RyYXRpb24lM2Ztc2Nsa2lkJTNkY2IyZTBhNDA0ZjUzMWJhMTQ4ZGE2MDY5NTgzMDYyM2YlMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RCMkMlMjUyMC0lMjUyMEdlbmVyYWwlMjUyMFRlcm1zJTI2dXRtX3Rlcm0lM2RmZWRlcmFsJTI1MjBnb3Zlcm5tZW50JTI1MjBjb250cmFjdCUyNTIwam9icyUyNnV0bV9jb250ZW50JTNkRmVkZXJhbA%26rlid%3Dcb2e0a404f531ba148da60695830623f&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e366]:
                  - img [ref=e367]
            - article [ref=e368] [cursor=pointer]:
              - generic [ref=e374]:
                - generic [ref=e376]:
                  - img "World Cup coverage" [ref=e378]
                  - link "World Cup coverage" [ref=e379]:
                    - /url: https://www.msn.com/en-in/sports/moments/league/ka-KAF5537FD5?serviceName=contentRetrieverService&query=FIFA+World+Cup+2026--293&newsid=AA25gkHf&ocid=hpmsn&cvid=6a2917613a884f6ba174b8d9e112de11
                    - heading "World Cup coverage" [level=2] [ref=e380]
                  - button "More interests" [ref=e381]
                  - generic [ref=e382]:
                    - generic "Popular in your area" [ref=e383]:
                      - button "Popular in your area" [ref=e384]
                    - button "More options" [ref=e385]
                - link "+15 · Curated by Copilot FIFA World Cup 2026 advances amid rising form and mounting off‑field strain" [ref=e389]:
                  - /url: https://www.msn.com/en-in/sports/moments/league/ka-KAF5537FD5?serviceName=contentRetrieverService&query=FIFA+World+Cup+2026--293&newsid=AA25gkHf&ocid=hpmsn&cvid=6a2917613a884f6ba174b8d9e112de11
                  - generic [ref=e393]: +15 · Curated by Copilot
                  - button "FIFA World Cup 2026 advances amid rising form and mounting off‑field strain" [ref=e394]
                - generic [ref=e396]:
                  - generic [ref=e397]:
                    - generic "Previous" [ref=e398]:
                      - button "Previous" [ref=e399]
                    - tablist [ref=e401]:
                      - tab "tab-0" [selected] [ref=e402]
                      - tab "tab-1" [ref=e404]
                      - tab "tab-2" [ref=e406]
                      - tab "tab-3" [ref=e408]
                      - tab "tab-4" [ref=e410]
                      - tab "tab-5"
                      - tab "tab-6"
                      - tab "tab-7"
                      - tab "tab-8"
                      - tab "tab-9"
                      - tab "tab-10"
                      - tab "tab-11"
                      - tab "tab-12"
                      - tab "tab-13"
                      - tab "tab-14"
                      - tab "tab-15"
                      - tab "tab-16"
                      - tab "tab-17"
                      - tab "tab-18"
                      - tab "tab-19"
                      - tab "tab-20"
                      - tab "tab-21"
                    - generic "Next" [ref=e412]:
                      - button "Next" [ref=e413]
                  - link "See full coverage" [ref=e415]:
                    - /url: https://www.msn.com/en-in/sports/moments/league/ka-KAF5537FD5?serviceName=contentRetrieverService&query=FIFA+World+Cup+2026--293&newsid=AA25gkHf&ocid=hpmsn&cvid=6a2917613a884f6ba174b8d9e112de11
            - article "Peddi director Buchi Babu Sana removes Janhvi Kapoor's controversial scenes, admits they were 'misleading'" [ref=e416] [cursor=pointer]:
              - generic [ref=e418]:
                - img [ref=e419]
                - generic [ref=e420]:
                  - generic [ref=e421]:
                    - generic [ref=e422]:
                      - generic [ref=e423]:
                        - img [ref=e424]
                        - generic [ref=e425]: Times Now
                      - generic [ref=e426]: ·
                      - generic [ref=e427]: 23h
                    - link "Peddi director Buchi Babu Sana removes Janhvi Kapoor's controversial scenes, admits they were 'misleading', Times Now" [ref=e428]:
                      - /url: https://www.msn.com/en-in/entertainment/news/peddi-director-buchi-babu-sana-removes-janhvi-kapoor-s-controversial-scenes-admits-they-were-misleading/ar-AA25bdrF
                      - text: Peddi director Buchi Babu Sana removes Janhvi Kapoor's controversial scenes, admits they were 'misleading'
                  - generic "Peddi director Buchi Babu Sana removes Janhvi Kapoor's controversial scenes, admits they were 'misleading'" [ref=e431]:
                    - generic [ref=e433]:
                      - generic [ref=e434]:
                        - button "71 Like" [ref=e435]:
                          - generic [ref=e436]:
                            - img [ref=e437]
                            - generic [ref=e439]: "71"
                        - button "Dislike" [ref=e440]:
                          - img [ref=e442]
                      - link "Start the conversation" [ref=e445]:
                        - /url: https://www.msn.com/en-in/entertainment/news/peddi-director-buchi-babu-sana-removes-janhvi-kapoor-s-controversial-scenes-admits-they-were-misleading/ar-AA25bdrF#comments
                        - button "Start the conversation" [ref=e446]:
                          - img [ref=e447]
                - generic [ref=e449]:
                  - button "Hide this story" [ref=e450]:
                    - img [ref=e451]
                    - text: Hide this story
                  - button "See more" [ref=e452]:
                    - img [ref=e453]
            - article "Secure Browsing on Chrome" [ref=e454] [cursor=pointer]:
              - generic [ref=e456]:
                - img [ref=e457]
                - generic [ref=e458]:
                  - generic [ref=e459]:
                    - generic [ref=e462]: Google Chrome
                    - link "Secure Browsing on Chrome, Google Chrome" [ref=e463]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=d6a2dae8-4892-4eca-bff3-864513c9b8d1&bdc=oa&bidId=11&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=d581f23d-90e8-494b-9e37-4c552812097b&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8Ow-26N0CTU9t5hjqJJw1VTVUCUzXnXjFvLOp1EwD9EA7hDi39LaMSpbT3E8gqnTqOxZJk9plnrJXEf6j7mmhTkqm-0QBgHMP4Ni2QOmzzmPk1FgS2TsQi-bfyx2l9oQxVz57pJe5ECqs5if4bo9zoTp2LCPJFz9cFjedkctsCzzKcfGw-9ZtXxXHz_HJzljbMwOvzQ%26u%3DaHR0cHMlM2ElMmYlMmZhZC5kb3VibGVjbGljay5uZXQlMmZkZG0lMmZ0cmFja2NsayUyZk41Mjk1LjUwNzUxNzhCSU5HRElTUExBWSUyZkIzNDYxNDY5OC40NDY0MzEwODglM2JkY190cmtfYWlkJTNkNjM5OTIyMTI4JTNiZGNfdHJrX2NpZCUzZDI0NjYxMTkyNSUzYmRjX2xhdCUzZCUzYmRjX3JkaWQlM2QlM2J0YWdfZm9yX2NoaWxkX2RpcmVjdGVkX3RyZWF0bWVudCUzZCUzYnRmdWElM2QlM2JnZHByJTNkJTI0JTdiR0RQUiU3ZCUzYmdkcHJfY29uc2VudCUzZCUyNCU3YkdEUFJfQ09OU0VOVF83NTUlN2QlM2JsdGQlM2QlM2JkY190ZHYlM2QxJTNmbXNjbGtpZCUzZDlkOGM0ZmEyMzFjMzE1NjcxMDQzMjU4YjI2YTBiYmM2JTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkMTcxMzg1NiUyNTIwJTI1N0MlMjUyMENocm9tZSUyNTIwV2luZG93cyUyNTIwJTI1N0MlMjUyMERSJTI1MjAlMjU3QyUyNTIwRVNTMDElMjUyMCUyNTdDJTI1MjBOQSUyNTIwJTI1N0MlMjUyMFVTJTI1MjAlMjU3QyUyNTIwZW4lMjUyMCUyNTdDJTI1MjBEZXNrJTI1MjAlMjU3QyUyNTIwRElTUCUyNTIwJTI1N0MlMjUyME1UJTI1MjAlMjU3QyUyNTIwSHlicmlkJTI1MjAlMjU3QyUyNTIwQmluZ19DT05RJTI2dXRtX3Rlcm0lM2RrZXl3b3JkJTI2dXRtX2NvbnRlbnQlM2REZXNrJTI1MjAlMjU3QyUyNTIwSU1TJTI1MjAlMjU3QyUyNTIwSHlicmlkX0NPTlFfKE9QSUQtNDc0NjI3MCk%26rlid%3D9d8c4fa231c315671043258b26a0bbc6&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Secure Browsing on Chrome
                  - link "Sponsored" [ref=e465]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=d6a2dae8-4892-4eca-bff3-864513c9b8d1&bdc=oa&bidId=11&bidderId=4&cmExpId=RSV&impId=9&impTy=1&ldc=rhf2nczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=d581f23d-90e8-494b-9e37-4c552812097b&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8Ow-26N0CTU9t5hjqJJw1VTVUCUzXnXjFvLOp1EwD9EA7hDi39LaMSpbT3E8gqnTqOxZJk9plnrJXEf6j7mmhTkqm-0QBgHMP4Ni2QOmzzmPk1FgS2TsQi-bfyx2l9oQxVz57pJe5ECqs5if4bo9zoTp2LCPJFz9cFjedkctsCzzKcfGw-9ZtXxXHz_HJzljbMwOvzQ%26u%3DaHR0cHMlM2ElMmYlMmZhZC5kb3VibGVjbGljay5uZXQlMmZkZG0lMmZ0cmFja2NsayUyZk41Mjk1LjUwNzUxNzhCSU5HRElTUExBWSUyZkIzNDYxNDY5OC40NDY0MzEwODglM2JkY190cmtfYWlkJTNkNjM5OTIyMTI4JTNiZGNfdHJrX2NpZCUzZDI0NjYxMTkyNSUzYmRjX2xhdCUzZCUzYmRjX3JkaWQlM2QlM2J0YWdfZm9yX2NoaWxkX2RpcmVjdGVkX3RyZWF0bWVudCUzZCUzYnRmdWElM2QlM2JnZHByJTNkJTI0JTdiR0RQUiU3ZCUzYmdkcHJfY29uc2VudCUzZCUyNCU3YkdEUFJfQ09OU0VOVF83NTUlN2QlM2JsdGQlM2QlM2JkY190ZHYlM2QxJTNmbXNjbGtpZCUzZDlkOGM0ZmEyMzFjMzE1NjcxMDQzMjU4YjI2YTBiYmM2JTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkMTcxMzg1NiUyNTIwJTI1N0MlMjUyMENocm9tZSUyNTIwV2luZG93cyUyNTIwJTI1N0MlMjUyMERSJTI1MjAlMjU3QyUyNTIwRVNTMDElMjUyMCUyNTdDJTI1MjBOQSUyNTIwJTI1N0MlMjUyMFVTJTI1MjAlMjU3QyUyNTIwZW4lMjUyMCUyNTdDJTI1MjBEZXNrJTI1MjAlMjU3QyUyNTIwRElTUCUyNTIwJTI1N0MlMjUyME1UJTI1MjAlMjU3QyUyNTIwSHlicmlkJTI1MjAlMjU3QyUyNTIwQmluZ19DT05RJTI2dXRtX3Rlcm0lM2RrZXl3b3JkJTI2dXRtX2NvbnRlbnQlM2REZXNrJTI1MjAlMjU3QyUyNTIwSU1TJTI1MjAlMjU3QyUyNTIwSHlicmlkX0NPTlFfKE9QSUQtNDc0NjI3MCk%26rlid%3D9d8c4fa231c315671043258b26a0bbc6&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e467]:
                  - img [ref=e468]
            - article "BCCI withdraws Mohammed Siraj from upcoming Ireland, England T20Is; check India's updated squad" [ref=e469] [cursor=pointer]:
              - generic [ref=e471]:
                - img [ref=e472]
                - generic [ref=e473]:
                  - generic [ref=e474]:
                    - generic [ref=e475]:
                      - generic [ref=e476]:
                        - img [ref=e477]
                        - generic [ref=e478]: Moneycontrol
                      - generic [ref=e479]: ·
                      - generic [ref=e480]: 22h
                    - link "BCCI withdraws Mohammed Siraj from upcoming Ireland, England T20Is; check India's updated squad, Moneycontrol" [ref=e481]:
                      - /url: https://www.msn.com/en-in/sports/cricket/bcci-withdraws-mohammed-siraj-from-upcoming-ireland-england-t20is-check-india-s-updated-squad/ar-AA25aWT1
                      - text: BCCI withdraws Mohammed Siraj from upcoming Ireland, England T20Is; check India's updated squad
                  - generic "BCCI withdraws Mohammed Siraj from upcoming Ireland, England T20Is; check India's updated squad" [ref=e484]:
                    - generic [ref=e486]:
                      - generic [ref=e487]:
                        - button "61 Like" [ref=e488]:
                          - generic [ref=e489]:
                            - img [ref=e490]
                            - generic [ref=e492]: "61"
                        - button "Dislike" [ref=e493]:
                          - img [ref=e495]
                      - link "Start the conversation" [ref=e498]:
                        - /url: https://www.msn.com/en-in/sports/cricket/bcci-withdraws-mohammed-siraj-from-upcoming-ireland-england-t20is-check-india-s-updated-squad/ar-AA25aWT1#comments
                        - button "Start the conversation" [ref=e499]:
                          - img [ref=e500]
                - generic [ref=e502]:
                  - button "Hide this story" [ref=e503]:
                    - img [ref=e504]
                    - text: Hide this story
                  - button "See more" [ref=e505]:
                    - img [ref=e506]
            - 'article "Gold falls below Rs 1.5 lakh amid global sell-off: Check 24K, 22K bullion prices in your city on June 10" [ref=e507] [cursor=pointer]':
              - generic [ref=e509]:
                - img [ref=e510]
                - generic [ref=e511]:
                  - generic [ref=e512]:
                    - generic [ref=e513]:
                      - generic [ref=e514]:
                        - img [ref=e515]
                        - generic [ref=e516]: News18
                      - generic [ref=e517]: ·
                      - generic [ref=e518]: 3h
                    - 'link "Gold falls below Rs 1.5 lakh amid global sell-off: Check 24K, 22K bullion prices in your city on June 10, News18" [ref=e519]':
                      - /url: https://www.msn.com/en-in/money/news/gold-falls-below-rs-1-5-lakh-amid-global-sell-off-check-24k-22k-bullion-prices-in-your-city-on-june-10/ar-AA25fXgC
                      - text: "Gold falls below Rs 1.5 lakh amid global sell-off: Check 24K, 22K bullion prices in your city on June 10"
                  - 'generic "Gold falls below Rs 1.5 lakh amid global sell-off: Check 24K, 22K bullion prices in your city on June 10" [ref=e522]':
                    - generic [ref=e524]:
                      - generic [ref=e525]:
                        - button "6 Like" [ref=e526]:
                          - generic [ref=e527]:
                            - img [ref=e528]
                            - generic [ref=e530]: "6"
                        - button "Dislike" [ref=e531]:
                          - img [ref=e533]
                      - link "Start the conversation" [ref=e536]:
                        - /url: https://www.msn.com/en-in/money/news/gold-falls-below-rs-1-5-lakh-amid-global-sell-off-check-24k-22k-bullion-prices-in-your-city-on-june-10/ar-AA25fXgC#comments
                        - button "Start the conversation" [ref=e537]:
                          - img [ref=e538]
                - generic [ref=e540]:
                  - button "Hide this story" [ref=e541]:
                    - img [ref=e542]
                    - text: Hide this story
                  - button "See more" [ref=e543]:
                    - img [ref=e544]
          - generic [ref=e545]:
            - article [ref=e546] [cursor=pointer]:
              - generic [ref=e551]:
                - generic [ref=e553]:
                  - link "Top Engaging News" [ref=e555]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a2917613a884f6ba174b8d9e112de11
                    - heading "Top Engaging News" [level=2] [ref=e556]
                  - button "More options" [ref=e558]
                - generic [ref=e560]:
                  - 'link "Hindustan Times 8 Comments ‘They are the problem, not you’: Bengaluru founder lists five toxic habits normalised in Indian workplaces" [ref=e562]':
                    - /url: https://www.msn.com/en-in/news/india/they-are-the-problem-not-you-bengaluru-founder-lists-five-toxic-habits-normalised-in-indian-workplaces/ar-AA25ePHk
                    - generic [ref=e563]:
                      - img [ref=e564]
                      - generic [ref=e565]: Hindustan Times
                      - link "8 Comments" [ref=e567]:
                        - /url: https://www.msn.com/en-in/news/india/they-are-the-problem-not-you-bengaluru-founder-lists-five-toxic-habits-normalised-in-indian-workplaces/ar-AA25ePHk#comments
                        - img [ref=e568]
                        - paragraph [ref=e569]: "8"
                    - paragraph [ref=e570]: "‘They are the problem, not you’: Bengaluru founder lists five toxic habits normalised in Indian workplaces"
                  - link "Press Trust of India 10 Comments BJP leaders to perform havans to mark Modi becoming India's longest-serving PM" [ref=e572]:
                    - /url: https://www.msn.com/en-in/news/india/bjp-leaders-to-perform-havans-to-mark-modi-becoming-india-s-longest-serving-pm/ar-AA25cXtl
                    - generic [ref=e573]:
                      - img [ref=e574]
                      - generic [ref=e575]: Press Trust of India
                      - link "10 Comments" [ref=e577]:
                        - /url: https://www.msn.com/en-in/news/india/bjp-leaders-to-perform-havans-to-mark-modi-becoming-india-s-longest-serving-pm/ar-AA25cXtl#comments
                        - img [ref=e578]
                        - paragraph [ref=e579]: "10"
                    - paragraph [ref=e580]: BJP leaders to perform havans to mark Modi becoming India's longest-serving PM
                  - link "NDTV Lifestyle 7 Comments Kangana Ranaut calls Indian nurses' uniform very British, is that so?" [ref=e582]:
                    - /url: https://www.msn.com/en-in/news/india/kangana-ranaut-calls-indian-nurses-uniform-very-british-is-that-so/ar-AA25bGv2
                    - generic [ref=e583]:
                      - img [ref=e584]
                      - generic [ref=e585]: NDTV Lifestyle
                      - link "7 Comments" [ref=e587]:
                        - /url: https://www.msn.com/en-in/news/india/kangana-ranaut-calls-indian-nurses-uniform-very-british-is-that-so/ar-AA25bGv2#comments
                        - img [ref=e588]
                        - paragraph [ref=e589]: "7"
                    - paragraph [ref=e590]: Kangana Ranaut calls Indian nurses' uniform very British, is that so?
                - generic [ref=e592]:
                  - generic [ref=e593]:
                    - generic "Previous" [ref=e594]:
                      - button "Previous" [ref=e595]
                    - tablist [ref=e597]:
                      - tab "tab-0" [selected] [ref=e598]
                      - tab "tab-1" [ref=e600]
                      - tab "tab-2" [ref=e602]
                    - generic "Next" [ref=e604]:
                      - button "Next" [ref=e605]
                  - link "See more" [ref=e607]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6a2917613a884f6ba174b8d9e112de11
            - article [ref=e608] [cursor=pointer]:
              - generic [ref=e614]:
                - generic [ref=e616]:
                  - img "Watchlist suggestions" [ref=e618]
                  - link "Watchlist suggestions" [ref=e619]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e620]
                  - button "More options" [ref=e622]
                - generic [ref=e627]:
                  - link "Gold Gold Dropping fast ‎-1.68%‎ 4,214.60" [ref=e629]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwoc&noti=Price&ocid=hpmsn
                    - generic [ref=e630]:
                      - generic [ref=e631]:
                        - generic [ref=e632]: Gold
                        - img "Gold" [ref=e633]
                      - generic [ref=e635]: Dropping fast
                    - generic [ref=e640]:
                      - generic [ref=e641]: ‎-1.68%‎
                      - generic [ref=e642]: 4,214.60
                    - button "Add to watchlist" [ref=e645]:
                      - img [ref=e646]
                  - link "ITC Ltd ITC Ltd Rising fast ‎+1.93%‎ 285.40" [ref=e650]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahie2w&noti=Price&ocid=hpmsn
                    - generic [ref=e651]:
                      - generic [ref=e652]:
                        - generic [ref=e653]: ITC Ltd
                        - img "ITC Ltd" [ref=e654]
                      - generic [ref=e656]: Rising fast
                    - generic [ref=e661]:
                      - generic [ref=e662]: ‎+1.93%‎
                      - generic [ref=e663]: "285.40"
                    - button "Add to watchlist" [ref=e666]:
                      - img [ref=e667]
                  - link "Citigroup Inc C ‎+1.09%‎ 134.73" [ref=e671]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a1p3ww&ocid=hpmsn
                    - generic [ref=e672]:
                      - generic [ref=e674]: Citigroup Inc
                      - generic [ref=e676]: C
                    - generic [ref=e681]:
                      - generic [ref=e682]: ‎+1.09%‎
                      - generic [ref=e683]: "134.73"
                    - button "Add to watchlist" [ref=e686]:
                      - img [ref=e687]
                  - link "Dominion Energy Inc D ‎+1.11%‎ 66.25" [ref=e691]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a1qpw7&ocid=hpmsn
                    - generic [ref=e692]:
                      - generic [ref=e694]: Dominion Energy Inc
                      - generic [ref=e696]: D
                    - generic [ref=e701]:
                      - generic [ref=e702]: ‎+1.11%‎
                      - generic [ref=e703]: "66.25"
                    - button "Add to watchlist" [ref=e706]:
                      - img [ref=e707]
                  - link "Tata Steel Ltd TATASTEEL ‎-1.44%‎ 200.26" [ref=e711]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkaa2&ocid=hpmsn
                    - generic [ref=e712]:
                      - generic [ref=e714]: Tata Steel Ltd
                      - generic [ref=e716]: TATASTEEL
                    - generic [ref=e721]:
                      - generic [ref=e722]: ‎-1.44%‎
                      - generic [ref=e723]: "200.26"
                    - button "Add to watchlist" [ref=e726]:
                      - img [ref=e727]
                - generic [ref=e731]:
                  - generic [ref=e732]:
                    - generic "Previous" [ref=e733]:
                      - button "Previous" [ref=e734]
                    - tablist [ref=e736]:
                      - tab "tab-0" [selected] [ref=e737]
                      - tab "tab-1" [ref=e739]
                      - tab "tab-2" [ref=e741]
                      - tab "tab-3" [ref=e743]
                      - tab "tab-4" [ref=e745]
                      - tab "tab-5"
                      - tab "tab-6"
                    - generic "Next" [ref=e747]:
                      - button "Next" [ref=e748]
                  - link "See watchlist suggestions" [ref=e750]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - 'article "The 34th floor mystery: Man pays Rs 33 lakh for flat, then makes a shocking discovery" [ref=e751] [cursor=pointer]':
              - generic [ref=e753]:
                - img [ref=e754]
                - generic [ref=e755]:
                  - generic [ref=e756]:
                    - generic [ref=e757]:
                      - generic [ref=e758]:
                        - img [ref=e759]
                        - generic [ref=e760]: NDTV Profit
                      - generic [ref=e761]: ·
                      - generic [ref=e762]: 22h
                    - 'link "The 34th floor mystery: Man pays Rs 33 lakh for flat, then makes a shocking discovery, NDTV Profit" [ref=e763]':
                      - /url: https://www.msn.com/en-in/news/india/the-34th-floor-mystery-man-pays-rs-33-lakh-for-flat-then-makes-a-shocking-discovery/ar-AA25aJLN
                      - text: "The 34th floor mystery: Man pays Rs 33 lakh for flat, then makes a shocking discovery"
                  - 'generic "The 34th floor mystery: Man pays Rs 33 lakh for flat, then makes a shocking discovery" [ref=e766]':
                    - generic [ref=e768]:
                      - generic [ref=e769]:
                        - button "31 Like" [ref=e770]:
                          - generic [ref=e771]:
                            - img [ref=e772]
                            - generic [ref=e774]: "31"
                        - button "Dislike" [ref=e775]:
                          - img [ref=e777]
                      - link "View comments 2 Comment" [ref=e780]:
                        - /url: https://www.msn.com/en-in/news/india/the-34th-floor-mystery-man-pays-rs-33-lakh-for-flat-then-makes-a-shocking-discovery/ar-AA25aJLN#comments
                        - button "View comments 2 Comment" [ref=e781]:
                          - img [ref=e782]
                        - generic [ref=e784]: "2"
                - generic [ref=e785]:
                  - button "Hide this story" [ref=e786]:
                    - img [ref=e787]
                    - text: Hide this story
                  - button "See more" [ref=e788]:
                    - img [ref=e789]
            - article "Pakistan launches manhunt for four PoK protesters after crackdown killing 19 kids, 7 pregnant women" [ref=e790] [cursor=pointer]:
              - generic [ref=e792]:
                - img [ref=e793]
                - generic [ref=e794]:
                  - generic [ref=e795]:
                    - generic [ref=e796]:
                      - generic [ref=e797]:
                        - img [ref=e798]
                        - generic [ref=e799]: The Times of India
                      - generic [ref=e800]: ·
                      - generic [ref=e801]: 2h
                    - link "Pakistan launches manhunt for four PoK protesters after crackdown killing 19 kids, 7 pregnant women, The Times of India" [ref=e802]:
                      - /url: https://www.msn.com/en-in/news/world/pakistan-launches-manhunt-for-four-pok-protesters-after-crackdown-killing-19-kids-7-pregnant-women/ar-AA25fQhu
                      - text: Pakistan launches manhunt for four PoK protesters after crackdown killing 19 kids, 7 pregnant women
                  - generic "Pakistan launches manhunt for four PoK protesters after crackdown killing 19 kids, 7 pregnant women" [ref=e805]:
                    - generic [ref=e807]:
                      - generic [ref=e808]:
                        - button "11 Like" [ref=e809]:
                          - generic [ref=e810]:
                            - img [ref=e811]
                            - generic [ref=e813]: "11"
                        - button "Dislike" [ref=e814]:
                          - img [ref=e816]
                      - link "Start the conversation" [ref=e819]:
                        - /url: https://www.msn.com/en-in/news/world/pakistan-launches-manhunt-for-four-pok-protesters-after-crackdown-killing-19-kids-7-pregnant-women/ar-AA25fQhu#comments
                        - button "Start the conversation" [ref=e820]:
                          - img [ref=e821]
                - generic [ref=e823]:
                  - button "Hide this story" [ref=e824]:
                    - img [ref=e825]
                    - text: Hide this story
                  - button "See more" [ref=e826]:
                    - img [ref=e827]
            - article [ref=e828] [cursor=pointer]
            - 'article "Breaking: Donald Trump booed at Madison Square Garden during NBA Finals game in New York" [ref=e835] [cursor=pointer]':
              - generic [ref=e837]:
                - generic [ref=e841]:
                  - generic [ref=e842]:
                    - generic [ref=e843]:
                      - generic [ref=e844]:
                        - img [ref=e845]
                        - generic [ref=e846]: ABP - Live
                      - generic [ref=e847]: ·
                      - generic [ref=e848]: 17h
                    - 'link "Breaking: Donald Trump booed at Madison Square Garden during NBA Finals game in New York, ABP - Live" [ref=e849]':
                      - /url: https://www.msn.com/en-in/entertainment/bollywood/breaking-donald-trump-booed-at-madison-square-garden-during-nba-finals-game-in-new-york/vi-AA25aknm
                      - text: "Breaking: Donald Trump booed at Madison Square Garden during NBA Finals game in New York"
                  - 'generic "Breaking: Donald Trump booed at Madison Square Garden during NBA Finals game in New York" [ref=e852]':
                    - generic [ref=e854]:
                      - generic [ref=e855]:
                        - button "51 Like" [ref=e856]:
                          - generic [ref=e857]:
                            - img [ref=e858]
                            - generic [ref=e860]: "51"
                        - button "Dislike" [ref=e861]:
                          - img [ref=e863]
                      - link "Start the conversation" [ref=e866]:
                        - /url: https://www.msn.com/en-in/entertainment/bollywood/breaking-donald-trump-booed-at-madison-square-garden-during-nba-finals-game-in-new-york/vi-AA25aknm#comments
                        - button "Start the conversation" [ref=e867]:
                          - img [ref=e868]
                - generic [ref=e870]:
                  - button "Hide this story" [ref=e871]:
                    - img [ref=e872]
                    - text: Hide this story
                  - button "See more" [ref=e873]:
                    - img [ref=e874]
            - article [ref=e875] [cursor=pointer]
            - article [ref=e882] [cursor=pointer]:
              - generic [ref=e888]:
                - generic [ref=e890]:
                  - link "Chicago" [ref=e892]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois
                    - heading "Chicago" [level=2] [ref=e893]
                  - button "My location" [ref=e894]
                  - button "More options" [ref=e896]
                - generic [ref=e900]:
                  - generic [ref=e901]:
                    - generic [ref=e903]:
                      - link "Mostly clear" [ref=e904]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois
                        - img "Mostly clear" [ref=e905]
                      - link "22°C" [ref=e906]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois
                        - generic [ref=e907]: ‎22‎
                        - generic [ref=e909]: ‎°C‎
                    - generic [ref=e911]:
                      - link "Moderate air quality" [ref=e913]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois&fcsttab=airquality
                        - text: Moderate air quality
                      - link "See full forecast" [ref=e915]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois&fcsttab=airquality
                        - img "arrow" [ref=e916]
                  - generic [ref=e921]:
                    - link "Larger map" [ref=e922]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Chicago,Illinois
                      - generic [ref=e923]:
                        - generic:
                          - generic:
                            - img
                            - img
                            - img
                            - img
                            - img
                            - img
                      - img
                    - link "Check global air quality" [ref=e924]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Chicago,Illinois
                      - img [ref=e926]
                      - generic "Check global air quality" [ref=e927]
                      - img [ref=e929]
                - button "See full forecast" [ref=e932]
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
                        - article "We took a supercar on a road trip to the world's richest country - then police stopped us" [ref=e962]:
                          - generic [ref=e963]:
                            - img "We Took A Supercar On A Road Trip To The World's Richest Country - Then Police Stopped Us" [ref=e965]
                            - generic [ref=e967]: 42:16
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e968]:
                              - generic [ref=e969]:
                                - img "Mat Armstrong" [ref=e970]
                                - generic [ref=e971]:
                                  - generic:
                                    - generic "Mat Armstrong" [ref=e972]
                                    - generic [ref=e973]: ·
                                    - generic [ref=e974]: 19h
                              - link "We took a supercar on a road trip to the world's richest country - then police stopped us" [ref=e975]:
                                - /url: https://www.msn.com/en-in/autos/photos/we-took-a-supercar-on-a-road-trip-to-the-world-s-richest-country-then-police-stopped-us/vi-AA25bHT1?ocid=hpmsn
                                - heading "We took a supercar on a road trip to the world's richest country - then police stopped us" [level=2] [ref=e976]:
                                  - generic: We took a supercar on a road trip to the world's richest country - then police stopped us
                            - button "See more" [ref=e980]
                        - article [ref=e983]:
                          - generic [ref=e984]:
                            - img "He Went for Korean Food - Now It Turns Into a Full Feast" [ref=e986]
                            - generic [ref=e988]: 27:09
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e989]:
                              - generic [ref=e990]:
                                - img "Strictly Dumpling" [ref=e991]
                                - generic [ref=e992]:
                                  - generic:
                                    - generic "Strictly Dumpling" [ref=e993]
                                    - generic [ref=e994]: ·
                                    - generic [ref=e995]: 19h
                              - link "He went for Korean food - now it turns into a full feast" [ref=e996]:
                                - /url: https://www.msn.com/en-in/foodanddrink/other/he-went-for-korean-food-now-it-turns-into-a-full-feast/vi-AA20Wc2O?ocid=hpmsn
                                - heading "He went for Korean food - now it turns into a full feast" [level=2] [ref=e997]:
                                  - generic: He went for Korean food - now it turns into a full feast
                            - button "See more" [ref=e1001]
                        - article "40,000-pound dozer starts sliding down a mountain - caught on camera" [ref=e1004]:
                          - generic [ref=e1005]:
                            - img "40,000-Pound Dozer Starts Sliding Down a Mountain - Caught on Camera" [ref=e1007]
                            - generic [ref=e1009]: 15:15
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1010]:
                              - generic [ref=e1011]:
                                - img "HeavyDSparks" [ref=e1012]
                                - generic [ref=e1013]:
                                  - generic:
                                    - generic "HeavyDSparks" [ref=e1014]
                                    - generic [ref=e1015]: ·
                                    - generic [ref=e1016]: 20h
                              - link "40,000-pound dozer starts sliding down a mountain - caught on camera" [ref=e1017]:
                                - /url: https://www.msn.com/en-in/news/world/40-000-pound-dozer-starts-sliding-down-a-mountain-caught-on-camera/vi-AA25bJxI?ocid=hpmsn
                                - heading "40,000-pound dozer starts sliding down a mountain - caught on camera" [level=2] [ref=e1018]:
                                  - generic: 40,000-pound dozer starts sliding down a mountain - caught on camera
                            - button "See more" [ref=e1022]
                        - article [ref=e1025]:
                          - generic [ref=e1026]:
                            - img "Fuel Your Lower Body Power With Quick Morning Fusion" [ref=e1028]
                            - generic [ref=e1030]: 12:28
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1031]:
                              - generic [ref=e1032]:
                                - img "Yoga with Kassandra" [ref=e1033]
                                - generic [ref=e1034]:
                                  - generic:
                                    - generic "Yoga with Kassandra" [ref=e1035]
                                    - generic [ref=e1036]: ·
                                    - generic [ref=e1037]: 5h
                              - link "Fuel your lower body power with quick morning fusion" [ref=e1038]:
                                - /url: https://www.msn.com/en-in/health/nutrition/fuel-your-lower-body-power-with-quick-morning-fusion/vi-AA25eNNy?ocid=hpmsn
                                - heading "Fuel your lower body power with quick morning fusion" [level=2] [ref=e1039]:
                                  - generic: Fuel your lower body power with quick morning fusion
                            - button "See more" [ref=e1043]
                        - article "The unexpected reality Trevor Noah faced after meeting a president" [ref=e1046]:
                          - generic [ref=e1047]:
                            - img "The Unexpected Reality Trevor Noah Faced After Meeting a President Thumbnail" [ref=e1049]
                            - generic [ref=e1051]: 16:23
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1052]:
                              - generic [ref=e1053]:
                                - img "Trevor Noah" [ref=e1054]
                                - generic [ref=e1055]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1056]
                                    - generic [ref=e1057]: ·
                                    - generic [ref=e1058]: 2h
                              - link "The unexpected reality Trevor Noah faced after meeting a president" [ref=e1059]:
                                - /url: https://www.msn.com/en-in/news/world/the-unexpected-reality-trevor-noah-faced-after-meeting-a-president/vi-AA25fKuK?ocid=hpmsn
                                - heading "The unexpected reality Trevor Noah faced after meeting a president" [level=2] [ref=e1060]:
                                  - generic: The unexpected reality Trevor Noah faced after meeting a president
                            - button "See more" [ref=e1064]
                        - article [ref=e1067]:
                          - generic [ref=e1068]:
                            - img "The Truth About FNAF Book Lore" [ref=e1070]
                            - generic [ref=e1072]: 23:56
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1073]:
                              - generic [ref=e1074]:
                                - img "The Game Theorists" [ref=e1075]
                                - generic [ref=e1076]:
                                  - generic:
                                    - generic "The Game Theorists" [ref=e1077]
                                    - generic [ref=e1078]: ·
                                    - generic [ref=e1079]: 18h
                              - link "The truth about FNAF book lore" [ref=e1080]:
                                - /url: https://www.msn.com/en-in/news/offbeat/the-truth-about-fnaf-book-lore/vi-AA1XFUGu?ocid=hpmsn
                                - heading "The truth about FNAF book lore" [level=2] [ref=e1081]:
                                  - generic: The truth about FNAF book lore
                            - button "See more" [ref=e1085]
                        - article [ref=e1088]:
                          - generic [ref=e1089]:
                            - img "The World’s Oldest Recipe Was Written on a Babylonian Tablet" [ref=e1091]
                            - generic [ref=e1093]: 10:16
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1094]:
                              - generic [ref=e1095]:
                                - img "Kent Rollins" [ref=e1096]
                                - generic [ref=e1097]:
                                  - generic:
                                    - generic "Kent Rollins" [ref=e1098]
                                    - generic [ref=e1099]: ·
                                    - generic [ref=e1100]: 18h
                              - link "The world’s oldest recipe was written on a Babylonian tablet" [ref=e1101]:
                                - /url: https://www.msn.com/en-in/news/other/the-world-s-oldest-recipe-was-written-on-a-babylonian-tablet/vi-AA25bZpH?ocid=hpmsn
                                - heading "The world’s oldest recipe was written on a Babylonian tablet" [level=2] [ref=e1102]:
                                  - generic: The world’s oldest recipe was written on a Babylonian tablet
                            - button "See more" [ref=e1106]
                        - article [ref=e1109]:
                          - generic [ref=e1110]:
                            - img "Inside a $22M Hollywood Hills Modern Mansion" [ref=e1112]
                            - generic [ref=e1114]: 25:27
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1115]:
                              - generic [ref=e1116]:
                                - img "Enes Yilmazer" [ref=e1117]
                                - generic [ref=e1118]:
                                  - generic:
                                    - generic "Enes Yilmazer" [ref=e1119]
                                    - generic [ref=e1120]: ·
                                    - generic [ref=e1121]: 11h
                              - link "Inside a $22M Hollywood Hills modern mansion" [ref=e1122]:
                                - /url: https://www.msn.com/en-in/entertainment/hollywood/inside-a-22m-hollywood-hills-modern-mansion/vi-AA1ZKOrj?ocid=hpmsn
                                - heading "Inside a $22M Hollywood Hills modern mansion" [level=2] [ref=e1123]:
                                  - generic: Inside a $22M Hollywood Hills modern mansion
                            - button "See more" [ref=e1127]
                        - article "$500,000 excavator left for dead - then someone turned the key" [ref=e1130]:
                          - generic [ref=e1131]:
                            - img "$500,000 Excavator Left For Dead - Then Someone Turned The Key" [ref=e1133]
                            - generic [ref=e1135]: 23:35
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1136]:
                              - generic [ref=e1137]:
                                - img "HeavyDSparks" [ref=e1138]
                                - generic [ref=e1139]:
                                  - generic:
                                    - generic "HeavyDSparks" [ref=e1140]
                                    - generic [ref=e1141]: ·
                                    - generic [ref=e1142]: 20h
                              - link "$500,000 excavator left for dead - then someone turned the key" [ref=e1143]:
                                - /url: https://www.msn.com/en-in/news/other/500-000-excavator-left-for-dead-then-someone-turned-the-key/vi-AA25bz0v?ocid=hpmsn
                                - heading "$500,000 excavator left for dead - then someone turned the key" [level=2] [ref=e1144]:
                                  - generic: $500,000 excavator left for dead - then someone turned the key
                            - button "See more" [ref=e1148]
                        - article [ref=e1151]:
                          - generic [ref=e1152]:
                            - img "How to Sear Steak with Bone Marrow the American Way" [ref=e1154]
                            - generic [ref=e1156]: 12:51
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1157]:
                              - generic [ref=e1158]:
                                - img "Sous Vide Everything" [ref=e1159]
                                - generic [ref=e1160]:
                                  - generic:
                                    - generic "Sous Vide Everything" [ref=e1161]
                                    - generic [ref=e1162]: ·
                                    - generic [ref=e1163]: 17h
                              - link "How to sear steak with bone marrow the American way" [ref=e1164]:
                                - /url: https://www.msn.com/en-in/foodanddrink/other/how-to-sear-steak-with-bone-marrow-the-american-way/vi-AA1WFNlr?ocid=hpmsn
                                - heading "How to sear steak with bone marrow the American way" [level=2] [ref=e1165]:
                                  - generic: How to sear steak with bone marrow the American way
                            - button "See more" [ref=e1169]
                        - article "Trevor Noah learned the truth about Scottish drinking the hard way" [ref=e1172]:
                          - generic [ref=e1173]:
                            - img "Trevor Noah Learned the Truth About Scottish Drinking the Hard Way Thumbnail" [ref=e1175]
                            - generic [ref=e1177]: 10:17
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1178]:
                              - generic [ref=e1179]:
                                - img "Trevor Noah" [ref=e1180]
                                - generic [ref=e1181]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1182]
                                    - generic [ref=e1183]: ·
                                    - generic [ref=e1184]: 2h
                              - link "Trevor Noah learned the truth about Scottish drinking the hard way" [ref=e1185]:
                                - /url: https://www.msn.com/en-in/news/india/trevor-noah-learned-the-truth-about-scottish-drinking-the-hard-way/vi-AA25gxGY?ocid=hpmsn
                                - heading "Trevor Noah learned the truth about Scottish drinking the hard way" [level=2] [ref=e1186]:
                                  - generic: Trevor Noah learned the truth about Scottish drinking the hard way
                            - button "See more" [ref=e1190]
                        - article [ref=e1193]:
                          - generic [ref=e1194]:
                            - img "High Protein Chinese Chicken Wings and Fried Rice" [ref=e1196]
                            - generic [ref=e1198]: 08:31
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1199]:
                              - generic [ref=e1200]:
                                - img "Mr Make It Happen" [ref=e1201]
                                - generic [ref=e1202]:
                                  - generic:
                                    - generic "Mr Make It Happen" [ref=e1203]
                                    - generic [ref=e1204]: ·
                                    - generic [ref=e1205]: 16h
                              - link "High protein Chinese chicken wings and fried rice" [ref=e1206]:
                                - /url: https://www.msn.com/en-in/foodanddrink/other/high-protein-chinese-chicken-wings-and-fried-rice/vi-AA1X3MmD?ocid=hpmsn
                                - heading "High protein Chinese chicken wings and fried rice" [level=2] [ref=e1207]:
                                  - generic: High protein Chinese chicken wings and fried rice
                            - button "See more" [ref=e1211]
                        - article [ref=e1214]:
                          - generic [ref=e1215]:
                            - img "Did China Build the World’s Largest Ghost City?" [ref=e1217]
                            - generic [ref=e1219]: 11:26
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1220]:
                              - generic [ref=e1221]:
                                - img "MegaBuilds" [ref=e1222]
                                - generic [ref=e1223]:
                                  - generic:
                                    - generic "MegaBuilds" [ref=e1224]
                                    - generic [ref=e1225]: ·
                                    - generic [ref=e1226]: 13h
                              - link "Did China build the world’s largest ghost city?" [ref=e1227]:
                                - /url: https://www.msn.com/en-in/news/world/did-china-build-the-world-s-largest-ghost-city/vi-AA25cQc5?ocid=hpmsn
                                - heading "Did China build the world’s largest ghost city?" [level=2] [ref=e1228]:
                                  - generic: Did China build the world’s largest ghost city?
                            - button "See more" [ref=e1232]
                        - article "What Brock, Misty, and every gym leader should have mega evolved" [ref=e1235]:
                          - generic [ref=e1236]:
                            - img "What Brock, Misty, and Every Gym Leader Should Have Mega Evolved" [ref=e1238]
                            - generic [ref=e1240]: 29:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1241]:
                              - generic [ref=e1242]:
                                - img "MandJTV" [ref=e1243]
                                - generic [ref=e1244]:
                                  - generic:
                                    - generic "MandJTV" [ref=e1245]
                                    - generic [ref=e1246]: ·
                                    - generic [ref=e1247]: 19h
                              - link "What Brock, Misty, and every gym leader should have mega evolved" [ref=e1248]:
                                - /url: https://www.msn.com/en-in/lifestyle/style/what-brock-misty-and-every-gym-leader-should-have-mega-evolved/vi-AA25bP8K?ocid=hpmsn
                                - heading "What Brock, Misty, and every gym leader should have mega evolved" [level=2] [ref=e1249]:
                                  - generic: What Brock, Misty, and every gym leader should have mega evolved
                            - button "See more" [ref=e1253]
                        - article [ref=e1256]:
                          - generic [ref=e1257]:
                            - img "One Cable Held Back a $1 Million Catastrophe" [ref=e1259]
                            - generic [ref=e1261]: 16:39
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1262]:
                              - generic [ref=e1263]:
                                - img "HeavyDSparks" [ref=e1264]
                                - generic [ref=e1265]:
                                  - generic:
                                    - generic "HeavyDSparks" [ref=e1266]
                                    - generic [ref=e1267]: ·
                                    - generic [ref=e1268]: 20h
                              - link "One cable held back a $1 million catastrophe" [ref=e1269]:
                                - /url: https://www.msn.com/en-in/entertainment/news/one-cable-held-back-a-1-million-catastrophe/vi-AA25bwJw?ocid=hpmsn
                                - heading "One cable held back a $1 million catastrophe" [level=2] [ref=e1270]:
                                  - generic: One cable held back a $1 million catastrophe
                            - button "See more" [ref=e1274]
                        - article "Small Christmas decoration hacks for Minecraft houses and villages" [ref=e1277]:
                          - generic [ref=e1278]:
                            - img "Small Christmas Decoration Hacks For Minecraft Houses And Villages" [ref=e1280]
                            - generic [ref=e1282]: 08:54
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1283]:
                              - generic [ref=e1284]:
                                - img "Gorillo" [ref=e1285]
                                - generic [ref=e1286]:
                                  - generic:
                                    - generic "Gorillo" [ref=e1287]
                                    - generic [ref=e1288]: ·
                                    - generic [ref=e1289]: 15h
                              - link "Small Christmas decoration hacks for Minecraft houses and villages" [ref=e1290]:
                                - /url: https://www.msn.com/en-in/travel/news/small-christmas-decoration-hacks-for-minecraft-houses-and-villages/vi-AA25cB7v?ocid=hpmsn
                                - heading "Small Christmas decoration hacks for Minecraft houses and villages" [level=2] [ref=e1291]:
                                  - generic: Small Christmas decoration hacks for Minecraft houses and villages
                            - button "See more" [ref=e1295]
                        - article [ref=e1298]:
                          - generic [ref=e1299]:
                            - img "feeble little horse - bitknot ALBUM REVIEW" [ref=e1301]
                            - generic [ref=e1303]: 06:36
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1304]:
                              - generic [ref=e1305]:
                                - img "The Needle Drop" [ref=e1306]
                                - generic [ref=e1307]:
                                  - generic:
                                    - generic "The Needle Drop" [ref=e1308]
                                    - generic [ref=e1309]: ·
                                    - generic [ref=e1310]: 8h
                              - link "Feeble little horse - Bitknot album review" [ref=e1311]:
                                - /url: https://www.msn.com/en-in/news/world/feeble-little-horse-bitknot-album-review/vi-AA25ediO?ocid=hpmsn
                                - heading "Feeble little horse - Bitknot album review" [level=2] [ref=e1312]:
                                  - generic: Feeble little horse - Bitknot album review
                            - button "See more" [ref=e1316]
                        - article "I recreated Chipotle’s most popular burrito - and took it to another level" [ref=e1319]:
                          - generic [ref=e1320]:
                            - img "I Recreated Chipotle’s Most Popular Burrito - And Took It to Another Level" [ref=e1322]
                            - generic [ref=e1324]: 12:55
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1325]:
                              - generic [ref=e1326]:
                                - img "Joshua Weissman" [ref=e1327]
                                - generic [ref=e1328]:
                                  - generic:
                                    - generic "Joshua Weissman" [ref=e1329]
                                    - generic [ref=e1330]: ·
                                    - generic [ref=e1331]: 20h
                              - link "I recreated Chipotle’s most popular burrito - and took it to another level" [ref=e1332]:
                                - /url: https://www.msn.com/en-in/foodanddrink/other/i-recreated-chipotle-s-most-popular-burrito-and-took-it-to-another-level/vi-AA25bz8E?ocid=hpmsn
                                - heading "I recreated Chipotle’s most popular burrito - and took it to another level" [level=2] [ref=e1333]:
                                  - generic: I recreated Chipotle’s most popular burrito - and took it to another level
                            - button "See more" [ref=e1337]
                        - article "David Beckham tries authentic Korean BBQ for the first time! 🇰🇷🥩" [ref=e1340]:
                          - generic [ref=e1341]:
                            - img "David Beckham Tries Authentic Korean BBQ for the First Time! 🇰🇷🥩" [ref=e1343]
                            - generic [ref=e1345]: 13:16
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1346]:
                              - generic [ref=e1347]:
                                - img "Korean Englishman" [ref=e1348]
                                - generic [ref=e1349]:
                                  - generic:
                                    - generic "Korean Englishman" [ref=e1350]
                                    - generic [ref=e1351]: ·
                                    - generic [ref=e1352]: 1h
                              - link "David Beckham tries authentic Korean BBQ for the first time! 🇰🇷🥩" [ref=e1353]:
                                - /url: https://www.msn.com/en-in/sports/football/david-beckham-tries-authentic-korean-bbq-for-the-first-time/vi-AA237Jf3?ocid=hpmsn
                                - heading "David Beckham tries authentic Korean BBQ for the first time! 🇰🇷🥩" [level=2] [ref=e1354]:
                                  - generic: David Beckham tries authentic Korean BBQ for the first time! 🇰🇷🥩
                            - button "See more" [ref=e1358]
                        - article [ref=e1361]:
                          - generic [ref=e1362]:
                            - img "How to Make Protein-Rich Oxtail Sinigang Soup" [ref=e1364]
                            - generic [ref=e1366]: 09:17
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1367]:
                              - generic [ref=e1368]:
                                - img "acooknamedMatt" [ref=e1369]
                                - generic [ref=e1370]:
                                  - generic:
                                    - generic "acooknamedMatt" [ref=e1371]
                                    - generic [ref=e1372]: ·
                                    - generic [ref=e1373]: 17h
                              - link "How to make protein-rich oxtail sinigang soup" [ref=e1374]:
                                - /url: https://www.msn.com/en-in/news/other/how-to-make-protein-rich-oxtail-sinigang-soup/vi-AA1VzPND?ocid=hpmsn
                                - heading "How to make protein-rich oxtail sinigang soup" [level=2] [ref=e1375]:
                                  - generic: How to make protein-rich oxtail sinigang soup
                            - button "See more" [ref=e1379]
                        - link "See more" [ref=e1381]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1382]
                          - text: See more
                    - button "next" [ref=e1386]:
                      - img [ref=e1389]
            - article "Ram Charan, Buchi Babu watch Peddi amid Janhvi row, internet seeks accountability" [ref=e1391] [cursor=pointer]:
              - generic [ref=e1393]:
                - img [ref=e1394]
                - generic [ref=e1395]:
                  - generic [ref=e1396]:
                    - generic [ref=e1397]:
                      - generic [ref=e1398]:
                        - img [ref=e1399]
                        - generic [ref=e1400]: India Today
                      - generic [ref=e1401]: ·
                      - generic [ref=e1402]: 2d
                    - link "Ram Charan, Buchi Babu watch Peddi amid Janhvi row, internet seeks accountability, India Today" [ref=e1403]:
                      - /url: https://www.msn.com/en-in/entertainment/southcinema/ram-charan-buchi-babu-watch-peddi-amid-janhvi-row-internet-seeks-accountability/ar-AA255qzO
                      - text: Ram Charan, Buchi Babu watch Peddi amid Janhvi row, internet seeks accountability
                  - generic "Ram Charan, Buchi Babu watch Peddi amid Janhvi row, internet seeks accountability" [ref=e1406]:
                    - generic [ref=e1408]:
                      - generic [ref=e1409]:
                        - button "51 Like" [ref=e1410]:
                          - generic [ref=e1411]:
                            - img [ref=e1412]
                            - generic [ref=e1414]: "51"
                        - button "Dislike" [ref=e1415]:
                          - img [ref=e1417]
                      - link "Start the conversation" [ref=e1420]:
                        - /url: https://www.msn.com/en-in/entertainment/southcinema/ram-charan-buchi-babu-watch-peddi-amid-janhvi-row-internet-seeks-accountability/ar-AA255qzO#comments
                        - button "Start the conversation" [ref=e1421]:
                          - img [ref=e1422]
                - generic [ref=e1424]:
                  - button "Hide this story" [ref=e1425]:
                    - img [ref=e1426]
                    - text: Hide this story
                  - button "See more" [ref=e1427]:
                    - img [ref=e1428]
            - article [ref=e1429] [cursor=pointer]:
              - generic [ref=e1434]:
                - generic [ref=e1436]:
                  - link "Games" [ref=e1438]:
                    - /url: https://www.msn.com/en-in/play
                    - heading "Games" [level=2] [ref=e1439]
                  - button "More options" [ref=e1441]
                - list [ref=e1445]:
                  - generic:
                    - listitem [ref=e1446]:
                      - 'link "Screw Puzzle: Nut and Bolt" [ref=e1447]':
                        - /url: https://www.msn.com/en-in/play/games/screw-puzzle-nut-and-bolt/cg-9n21399h2r5p?ocid=hpmsn&cvid=6a2917613a884f6ba174b8d9e112de11&ei=9
                        - generic [ref=e1448]:
                          - 'img "Screw Puzzle: Nut and Bolt"'
                    - listitem [ref=e1449]:
                      - link "Casino Heist Slots" [ref=e1450]:
                        - /url: https://www.msn.com/en-in/play/games/casino-heist-slots/cg-9mt0xqt1zlbq?ocid=hpmsn&cvid=6a2917613a884f6ba174b8d9e112de11&ei=9
                        - generic [ref=e1451]:
                          - img "Casino Heist Slots"
                    - listitem [ref=e1452]:
                      - link "Sudoku Master" [ref=e1453]:
                        - /url: https://www.msn.com/en-in/play/games/sudoku-master/cg-9nsq1zfk0z36?ocid=hpmsn&cvid=6a2917613a884f6ba174b8d9e112de11&ei=9
                        - generic [ref=e1454]:
                          - img "Sudoku Master"
                    - listitem [ref=e1455]:
                      - link "Sandbox City 3D" [ref=e1456]:
                        - /url: https://www.msn.com/en-in/play/games/sandbox-city-3d/cg-9ncn80572ncc?ocid=hpmsn&cvid=6a2917613a884f6ba174b8d9e112de11&ei=9
                        - generic [ref=e1457]:
                          - img "Sandbox City 3D"
                    - listitem [ref=e1458]:
                      - link "Hero Defense King" [ref=e1459]:
                        - /url: https://www.msn.com/en-in/play/games/hero-defense-king/cg-9n78m7m9cdn4?ocid=hpmsn&cvid=6a2917613a884f6ba174b8d9e112de11&ei=9
                        - generic [ref=e1460]:
                          - img "Hero Defense King"
                    - listitem [ref=e1461]:
                      - link "Slotomania – Free Casino Slots" [ref=e1462]:
                        - /url: https://www.msn.com/en-in/play/games/slotomania--free-casino-slots/cg-9wzdncrdsklw?ocid=hpmsn&cvid=6a2917613a884f6ba174b8d9e112de11&ei=9
                        - generic [ref=e1463]:
                          - img "Slotomania – Free Casino Slots"
                    - listitem [ref=e1464]:
                      - link "Stickman Parkour" [ref=e1465]:
                        - /url: https://www.msn.com/en-in/play/games/stickman-parkour/cg-9nz8j2k2m5jb?ocid=hpmsn&cvid=6a2917613a884f6ba174b8d9e112de11&ei=9
                        - generic [ref=e1466]:
                          - img "Stickman Parkour"
                    - listitem [ref=e1467]:
                      - link "Drive Quest" [ref=e1468]:
                        - /url: https://www.msn.com/en-in/play/games/drive-quest/cg-9p4tn53ndjkw?ocid=hpmsn&cvid=6a2917613a884f6ba174b8d9e112de11&ei=9
                        - generic [ref=e1469]:
                          - img "Drive Quest"
                    - listitem [ref=e1470]:
                      - link "Racing Limits" [ref=e1471]:
                        - /url: https://www.msn.com/en-in/play/games/racing-limits/cg-9n7hl5s06zk0?ocid=hpmsn&cvid=6a2917613a884f6ba174b8d9e112de11&ei=9
                        - generic [ref=e1472]:
                          - img "Racing Limits"
                - generic [ref=e1474]:
                  - generic [ref=e1475]:
                    - generic "Previous" [ref=e1476]:
                      - button "Previous" [ref=e1477]
                    - tablist [ref=e1479]:
                      - tab "tab-0" [selected] [ref=e1480]
                      - tab "tab-1" [ref=e1482]
                    - generic "Next" [ref=e1484]:
                      - button "Next" [ref=e1485]
                  - link "Explore more games" [ref=e1487]:
                    - /url: https://www.msn.com/en-in/play
            - 'article "Elon Musk flags India’s declining birth rate: ''Fallen below replacement level''" [ref=e1488] [cursor=pointer]':
              - generic [ref=e1490]:
                - img [ref=e1491]
                - generic [ref=e1492]:
                  - generic [ref=e1493]:
                    - generic [ref=e1494]:
                      - generic [ref=e1495]:
                        - img [ref=e1496]
                        - generic [ref=e1497]: The Indian Express
                      - generic [ref=e1498]: ·
                      - generic [ref=e1499]: 3d
                    - 'link "Elon Musk flags India’s declining birth rate: ''Fallen below replacement level'', The Indian Express" [ref=e1500]':
                      - /url: https://www.msn.com/en-in/news/india/elon-musk-flags-india-s-declining-birth-rate-fallen-below-replacement-level/ar-AA250AkJ
                      - text: "Elon Musk flags India’s declining birth rate: 'Fallen below replacement level'"
                  - 'generic "Elon Musk flags India’s declining birth rate: ''Fallen below replacement level''" [ref=e1503]':
                    - generic [ref=e1505]:
                      - generic [ref=e1506]:
                        - button "45 Like" [ref=e1507]:
                          - generic [ref=e1508]:
                            - img [ref=e1509]
                            - generic [ref=e1511]: "45"
                        - button "Dislike" [ref=e1512]:
                          - img [ref=e1514]
                      - link "Start the conversation" [ref=e1517]:
                        - /url: https://www.msn.com/en-in/news/india/elon-musk-flags-india-s-declining-birth-rate-fallen-below-replacement-level/ar-AA250AkJ#comments
                        - button "Start the conversation" [ref=e1518]:
                          - img [ref=e1519]
                - generic [ref=e1521]:
                  - button "Hide this story" [ref=e1522]:
                    - img [ref=e1523]
                    - text: Hide this story
                  - button "See more" [ref=e1524]:
                    - img [ref=e1525]
            - 'article "''Hands, legs were shaking'': Rs 78,00,00,000 lottery win for Nepali Security Guard in UAE, he plans to build a house and own Mahindra Thar" [ref=e1526] [cursor=pointer]':
              - generic [ref=e1528]:
                - img [ref=e1529]
                - generic [ref=e1530]:
                  - generic [ref=e1531]:
                    - generic [ref=e1532]:
                      - generic [ref=e1533]:
                        - img [ref=e1534]
                        - generic [ref=e1535]: The Economic Times
                      - generic [ref=e1536]: ·
                      - generic [ref=e1537]: 3h
                    - 'link "''Hands, legs were shaking'': Rs 78,00,00,000 lottery win for Nepali Security Guard in UAE, he plans to build a house and own Mahindra Thar, The Economic Times" [ref=e1538]':
                      - /url: https://www.msn.com/en-in/news/india/hands-legs-were-shaking-rs-78-00-00-000-lottery-win-for-nepali-security-guard-in-uae-he-plans-to-build-a-house-and-own-mahindra-thar/ar-AA25fA4a
                      - text: "'Hands, legs were shaking': Rs 78,00,00,000 lottery win for Nepali Security Guard in UAE, he plans to build a house and own Mahindra Thar"
                  - 'generic "''Hands, legs were shaking'': Rs 78,00,00,000 lottery win for Nepali Security Guard in UAE, he plans to build a house and own Mahindra Thar" [ref=e1541]':
                    - generic [ref=e1543]:
                      - generic [ref=e1544]:
                        - button "33 Like" [ref=e1545]:
                          - generic [ref=e1546]:
                            - img [ref=e1547]
                            - generic [ref=e1549]: "33"
                        - button "Dislike" [ref=e1550]:
                          - img [ref=e1552]
                      - link "Start the conversation" [ref=e1555]:
                        - /url: https://www.msn.com/en-in/news/india/hands-legs-were-shaking-rs-78-00-00-000-lottery-win-for-nepali-security-guard-in-uae-he-plans-to-build-a-house-and-own-mahindra-thar/ar-AA25fA4a#comments
                        - button "Start the conversation" [ref=e1556]:
                          - img [ref=e1557]
                - generic [ref=e1559]:
                  - button "Hide this story" [ref=e1560]:
                    - img [ref=e1561]
                    - text: Hide this story
                  - button "See more" [ref=e1562]:
                    - img [ref=e1563]
            - article [ref=e1564] [cursor=pointer]
            - article "Hunar Ali, Mayank Gandhi granted divorce after 9 years of marriage" [ref=e1571] [cursor=pointer]:
              - generic [ref=e1573]:
                - img [ref=e1574]
                - generic [ref=e1575]:
                  - generic [ref=e1576]:
                    - generic [ref=e1577]:
                      - generic [ref=e1578]:
                        - img [ref=e1579]
                        - generic [ref=e1580]: NDTV 24x7
                      - generic [ref=e1581]: ·
                      - generic [ref=e1582]: 4h
                    - link "Hunar Ali, Mayank Gandhi granted divorce after 9 years of marriage, NDTV 24x7" [ref=e1583]:
                      - /url: https://www.msn.com/en-in/lifestyle/relationships/hunar-ali-mayank-gandhi-granted-divorce-after-9-years-of-marriage/ar-AA25eBx8
                      - text: Hunar Ali, Mayank Gandhi granted divorce after 9 years of marriage
                  - generic "Hunar Ali, Mayank Gandhi granted divorce after 9 years of marriage" [ref=e1586]:
                    - generic [ref=e1588]:
                      - generic [ref=e1589]:
                        - button "30 Like" [ref=e1590]:
                          - generic [ref=e1591]:
                            - img [ref=e1592]
                            - generic [ref=e1594]: "30"
                        - button "Dislike" [ref=e1595]:
                          - img [ref=e1597]
                      - link "Start the conversation" [ref=e1600]:
                        - /url: https://www.msn.com/en-in/lifestyle/relationships/hunar-ali-mayank-gandhi-granted-divorce-after-9-years-of-marriage/ar-AA25eBx8#comments
                        - button "Start the conversation" [ref=e1601]:
                          - img [ref=e1602]
                - generic [ref=e1604]:
                  - button "Hide this story" [ref=e1605]:
                    - img [ref=e1606]
                    - text: Hide this story
                  - button "See more" [ref=e1607]:
                    - img [ref=e1608]
          - generic [ref=e1609]:
            - article [ref=e1610] [cursor=pointer]
            - 'article "''Unacceptable'': Congress raps Revanth Reddy after row over ''inspiration from Hitler'' remark" [ref=e1617] [cursor=pointer]':
              - generic [ref=e1619]:
                - img [ref=e1620]
                - generic [ref=e1621]:
                  - generic [ref=e1622]:
                    - generic [ref=e1623]:
                      - generic [ref=e1624]:
                        - img [ref=e1625]
                        - generic [ref=e1626]: News18
                      - generic [ref=e1627]: ·
                      - generic [ref=e1628]: 1h
                    - 'link "''Unacceptable'': Congress raps Revanth Reddy after row over ''inspiration from Hitler'' remark, News18" [ref=e1629]':
                      - /url: https://www.msn.com/en-in/news/india/unacceptable-congress-raps-revanth-reddy-after-row-over-inspiration-from-hitler-remark/ar-AA25fNPe
                      - text: "'Unacceptable': Congress raps Revanth Reddy after row over 'inspiration from Hitler' remark"
                  - 'generic "''Unacceptable'': Congress raps Revanth Reddy after row over ''inspiration from Hitler'' remark" [ref=e1632]':
                    - generic [ref=e1634]:
                      - generic [ref=e1635]:
                        - button "1 Like" [ref=e1636]:
                          - generic [ref=e1637]:
                            - img [ref=e1638]
                            - generic [ref=e1640]: "1"
                        - button "Dislike" [ref=e1641]:
                          - img [ref=e1643]
                      - link "Start the conversation" [ref=e1646]:
                        - /url: https://www.msn.com/en-in/news/india/unacceptable-congress-raps-revanth-reddy-after-row-over-inspiration-from-hitler-remark/ar-AA25fNPe#comments
                        - button "Start the conversation" [ref=e1647]:
                          - img [ref=e1648]
                - generic [ref=e1650]:
                  - button "Hide this story" [ref=e1651]:
                    - img [ref=e1652]
                    - text: Hide this story
                  - button "See more" [ref=e1653]:
                    - img [ref=e1654]
    - contentinfo [ref=e1657]:
      - generic "Feedback" [ref=e1659] [cursor=pointer]:
        - button "Feedback" [ref=e1660]:
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