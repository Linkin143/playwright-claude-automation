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
      - search [ref=e18]:
        - generic [ref=e19]:
          - generic "Web search" [ref=e20] [cursor=pointer]:
            - button "Web search" [ref=e21]:
              - generic:
                - generic:
                  - img
          - searchbox "Enter your search term" [ref=e22]
      - generic [ref=e23]:
        - 'link "Boydton: Clear, 10 °C" [ref=e26] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Boydton,Virginia?loc=eyJsIjoiQm95ZHRvbiIsInIiOiJWaXJnaW5pYSIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTc4LjM5NzE2MzM5MTExMzI4LCJ5IjozNi42NjY0NzcyMDMzNjkxNH0%3D&weadegreetype=C&ocid=msnheader&cvid=6ae5bc4e07b846838875925eb8d0d0a9
          - img "Clear" [ref=e28]
          - generic [ref=e29]:
            - generic [ref=e30]: ‎10‎
            - generic [ref=e32]: ‎°C‎
        - generic "Open settings" [ref=e36] [cursor=pointer]:
          - button "Open settings" [ref=e37]:
            - generic:
              - generic:
                - generic:
                  - generic: Page settings
                  - generic:
                    - img
        - generic "Sign in" [ref=e41]:
          - button "Sign in to your account" [ref=e43] [cursor=pointer]:
            - generic [ref=e44]: Sign in to your account
            - generic [ref=e46]: Sign in
  - generic [ref=e47]:
    - generic [ref=e48]:
      - generic [ref=e53]:
        - list [ref=e56]:
          - listitem [ref=e57]:
            - link "Outlook.com" [ref=e60] [cursor=pointer]:
              - /url: https://outlook.com
              - generic [ref=e64]: Outlook.com
          - listitem [ref=e65]:
            - link "Flipkart" [ref=e68] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=401531&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e71]:
                - generic [ref=e72]: Flipkart
                - generic [ref=e74]: Sponsored
          - listitem [ref=e75]:
            - link "Find a tutor" [ref=e78] [cursor=pointer]:
              - /url: https://www.bing.com/pros?FORM=BPIMNS
              - generic [ref=e82]: Find a tutor
          - listitem [ref=e83]:
            - link "Booking.com" [ref=e86] [cursor=pointer]:
              - /url: https://www.booking.com/index.html?aid=1624937&label=enin-msn-hp-mestripe
              - generic [ref=e89]:
                - generic [ref=e90]: Booking.com
                - generic [ref=e92]: Sponsored
          - listitem [ref=e93]:
            - link "Ajio" [ref=e96] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=393141&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e99]:
                - generic [ref=e100]: Ajio
                - generic [ref=e102]: Sponsored
          - listitem [ref=e103]:
            - link "Facebook" [ref=e106] [cursor=pointer]:
              - /url: https://www.facebook.com
              - generic [ref=e110]: Facebook
          - listitem [ref=e111]:
            - link "Microsoft 365" [ref=e114] [cursor=pointer]:
              - /url: https://www.office.com/?omkt=en-IN
              - generic [ref=e118]: Microsoft 365
          - listitem [ref=e119]:
            - link "X" [ref=e122] [cursor=pointer]:
              - /url: https://x.com
              - generic [ref=e126]: X
          - listitem [ref=e127]:
            - link "OneDrive" [ref=e130] [cursor=pointer]:
              - /url: https://onedrive.live.com/?wt.mc_id=oo_msn_msnhomepage_header
              - generic [ref=e134]: OneDrive
          - listitem [ref=e135]:
            - link "Skype" [ref=e138] [cursor=pointer]:
              - /url: https://www.skype.com/
              - generic [ref=e142]: Skype
          - listitem [ref=e143]:
            - link "OneNote" [ref=e146] [cursor=pointer]:
              - /url: https://www.onenote.com/notebooks?WT.mc_id=MSN_OneNote_TopMenu&auth=1&wdorigin=msn
              - generic [ref=e150]: OneNote
          - listitem [ref=e151]:
            - link "Maps" [ref=e154] [cursor=pointer]:
              - /url: https://bing.com/maps/?FORM=MSNMAP
              - generic [ref=e158]: Maps
          - listitem [ref=e159]:
            - link "Microsoft Store" [ref=e162] [cursor=pointer]:
              - /url: https://www.microsoft.com/en-in
              - generic [ref=e166]: Microsoft Store
        - button [ref=e167]:
          - img [ref=e170]
      - generic [ref=e172]:
        - banner [ref=e173]
        - generic [ref=e178]:
          - navigation [ref=e180]:
            - generic [ref=e181]:
              - list [ref=e182]:
                - listitem [ref=e183]:
                  - link "Discover" [ref=e184] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in
              - list [ref=e185]:
                - listitem [ref=e186]:
                  - link "News" [ref=e187] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f
                - listitem [ref=e188]:
                  - link "Sports" [ref=e189] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/sports
                - listitem [ref=e190]:
                  - link "Play" [ref=e191] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/play?cgfrom=cg_home_pivot
                - listitem [ref=e192]:
                  - link "Money" [ref=e193] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/money
                - listitem [ref=e194]:
                  - link "Weather" [ref=e195] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/weather
                - listitem [ref=e196]:
                  - link "Watch" [ref=e197] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/video
                - listitem [ref=e198]:
                  - link "Shopping" [ref=e199] [cursor=pointer]:
                    - /url: https://www.bing.com/shop?entrypoint=msn&adunitId=378983&propertyId=316966&FORM=NVBSHP
          - generic "Personalize your feed\"" [ref=e201] [cursor=pointer]:
            - button "Personalize your feed\"" [ref=e202]:
              - generic:
                - generic:
                  - img
              - generic:
                - generic: Personalize
      - main [ref=e205]:
        - generic [ref=e208]:
          - generic [ref=e209]:
            - generic [ref=e212]:
              - tablist [ref=e214]:
                - tab "News story" [ref=e215] [cursor=pointer]
                - tab "Sponsored" [ref=e217] [cursor=pointer]
                - tab "News story" [ref=e219] [cursor=pointer]
                - tab "News story" [ref=e221] [cursor=pointer]
                - tab "News story" [ref=e223] [cursor=pointer]
                - tab "Sponsored" [selected] [ref=e225] [cursor=pointer]
                - tab "News story" [ref=e227] [cursor=pointer]
                - tab "News story" [ref=e229] [cursor=pointer]
                - tab "Sponsored" [ref=e231] [cursor=pointer]
                - tab "News story" [ref=e233] [cursor=pointer]
                - tab "News story" [ref=e235] [cursor=pointer]
                - tab "News story" [ref=e237] [cursor=pointer]
                - tab "Sponsored" [ref=e239] [cursor=pointer]
                - tab "News story" [ref=e241] [cursor=pointer]
                - tab "News story" [ref=e243] [cursor=pointer]
                - tab "News story" [ref=e245] [cursor=pointer]
                - tab "News story" [ref=e247] [cursor=pointer]
                - tab "News story" [ref=e249] [cursor=pointer]
                - tab "Sponsored" [ref=e251] [cursor=pointer]
                - tab "News story" [ref=e253] [cursor=pointer]
                - tab "News story" [ref=e255] [cursor=pointer]
                - tab "News story" [ref=e257] [cursor=pointer]
                - tab "News story" [ref=e259] [cursor=pointer]
                - tab "News story" [ref=e261] [cursor=pointer]
                - tab "Sponsored" [ref=e263] [cursor=pointer]
                - tab "News story" [ref=e265] [cursor=pointer]
                - tab "News story" [ref=e267] [cursor=pointer]
                - tab "News story" [ref=e269] [cursor=pointer]
                - tab "Sponsored" [ref=e271] [cursor=pointer]
                - tab "News story" [ref=e273] [cursor=pointer]
                - tab "News story" [ref=e275] [cursor=pointer]
              - button [ref=e279]
              - button [ref=e282]
              - article "Pokemon TCG Assorted Cards - Pokemon Bulk Card Bundle" [ref=e283] [cursor=pointer]:
                - generic [ref=e285]:
                  - img [ref=e286]
                  - generic [ref=e287]:
                    - generic [ref=e288]:
                      - generic [ref=e291]: Temu US
                      - link "Pokemon TCG Assorted Cards - Pokemon Bulk Card Bundle, Temu US" [ref=e292]:
                        - /url: https://www.bing.com/api/v2/mediation/tracking?d=s-BqBBXOTFgZzOQ5gIGMb4lIVMvMWe8rNvfxFgUKPfJ1kcuViGFjA6yKq56S1Rfif1ClyJuivU4iedmWcnnaJdji9FDokCyaW0K1R8tlm8XGr-k3CyIJoTjbX_pDVJmFnlHc3DdFdr9m_27FHQyaa-kh4Hjc4FQIign691fkRQJMaIWjXT3Sdih406c56JE92KlriNdKNK-clvcyk0BBA4Z-E7wBDQbu1LPoMlTDfKdGD6Hg2amvMvE8X2neaa_Kz2OmSUWufU7rSz9tGfAMH066i8Dr_gKGj12mk2XYczTMQ8yyy4n7WgaiKSHaBCKwY-Gslw&e=1&n=aQodcyJ1l7xeAIqW&rId=3d8e7b85-cfcc-4fe7-be03-2b0705d6fd36&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8Qy-qP21hvEXy-FAbrFN-nDVUCUxtz1vojK-1BJJ9FTsHcB_KOyWf1weP_CKcnN9kMDmN74o9yhbVgt2AUmME2u_MzjD7VgIC2OBt1Tp92BvAEiHzdSCYtbpDWhXv347fLsnXO2GWLqJ6mPg6Umm1UdfsepjxmtI5SsJ1vMoZjP7gSHqJoC1vfOnnqymgJjOwYczP-V7zA1klpLL1UeJOx0JoC2Q%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cudGVtdS5jb20lMmZ1bCUyZmt1aXBlciUyZnVuOS5odG1sJTNmc3ViaiUzZGdvb2RzLXVuLXYyJTI2X2JnX2ZzJTNkMSUyNl9wX2p1bXBfaWQlM2QxMDU0JTI2X3hfdnN0X3NjZW5lJTNkYWRnJTI2Z29vZHNfaWQlM2Q2MDI2NTYyMDI0NDg0MzQlMjZza3VfaWQlM2QzNjc4MzcxMDU0Mjc4MCUyNmFkZ19jdHglM2RhLWQwZWQzYWZjJTdlai0xZGM1NjM3ZiUyNl94X25zX3Byb2R1Y3RfaWQlM2QxMjUxNjk1LTM2NzgzNzEwNTQyNzgwJTI2X3hfYWRzX3N1Yl9jaGFubmVsJTNkc2hvcHBpbmclMjZfcF9yZnMlM2QxJTI2X3hfbnNfcHJ6X3R5cGUlM2QtMSUyNl94X2dtY19jYXRhbG9nJTNkMTI1MTY5NSUyNmxvY2FsZV9vdmVycmlkZSUzZDIxMSU3ZWVuJTdlVVNEJTI2X3hfbnNfc2t1X2lkJTNkMzY3ODM3MTA1NDI3ODAlMjZtcmtfcmVjJTNkMSUyNl94X25zX2NhdGFsb2dfaWQlM2QxMjUxNjk1JTI2X3hfYWRzX2NoYW5uZWwlM2RiaW5nJTI2X3hfZ21jX2FjY291bnQlM2QzNTQ0NDkxJTI2X3hfYWRzX2NyZWF0aXZlX2lkJTNkNTI0NjAzMzg2JTI2X3hfbnNfZGV2aWNlJTNkYyUyNl94X2Fkc19hY2NvdW50JTNkMTc2ODA1NzYzJTI2X3hfbnNfbWF0Y2hfdHlwZSUzZGUlMjZfeF9uc19tc2Nsa2lkJTNkN2I3NDQ5OWNjMzc1MTcyM2ZkMTAyMzc5N2YzYTVkZjclMjZfeF9hZHNfc2V0JTNkNTI0NjAzMzg2JTI2X3hfbnNfc291cmNlJTNkYSUyNl94X2Fkc19pZCUzZDUyNDYwMzM4NiUyNl94X25zX2tleXdvcmQlM2RfTkFLV05VTExfJTI2bXNjbGtpZCUzZDdiNzQ0OTljYzM3NTE3MjNmZDEwMjM3OTdmM2E1ZGY3%26rlid%3D7b74499cc3751723fd1023797f3a5df7&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                        - text: Pokemon TCG Assorted Cards - Pokemon Bulk Card Bundle
                    - link "Sponsored" [ref=e294]:
                      - /url: https://www.bing.com/api/v2/mediation/tracking?d=s-BqBBXOTFgZzOQ5gIGMb4lIVMvMWe8rNvfxFgUKPfJ1kcuViGFjA6yKq56S1Rfif1ClyJuivU4iedmWcnnaJdji9FDokCyaW0K1R8tlm8XGr-k3CyIJoTjbX_pDVJmFnlHc3DdFdr9m_27FHQyaa-kh4Hjc4FQIign691fkRQJMaIWjXT3Sdih406c56JE92KlriNdKNK-clvcyk0BBA4Z-E7wBDQbu1LPoMlTDfKdGD6Hg2amvMvE8X2neaa_Kz2OmSUWufU7rSz9tGfAMH066i8Dr_gKGj12mk2XYczTMQ8yyy4n7WgaiKSHaBCKwY-Gslw&e=1&n=aQodcyJ1l7xeAIqW&rId=3d8e7b85-cfcc-4fe7-be03-2b0705d6fd36&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8Qy-qP21hvEXy-FAbrFN-nDVUCUxtz1vojK-1BJJ9FTsHcB_KOyWf1weP_CKcnN9kMDmN74o9yhbVgt2AUmME2u_MzjD7VgIC2OBt1Tp92BvAEiHzdSCYtbpDWhXv347fLsnXO2GWLqJ6mPg6Umm1UdfsepjxmtI5SsJ1vMoZjP7gSHqJoC1vfOnnqymgJjOwYczP-V7zA1klpLL1UeJOx0JoC2Q%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cudGVtdS5jb20lMmZ1bCUyZmt1aXBlciUyZnVuOS5odG1sJTNmc3ViaiUzZGdvb2RzLXVuLXYyJTI2X2JnX2ZzJTNkMSUyNl9wX2p1bXBfaWQlM2QxMDU0JTI2X3hfdnN0X3NjZW5lJTNkYWRnJTI2Z29vZHNfaWQlM2Q2MDI2NTYyMDI0NDg0MzQlMjZza3VfaWQlM2QzNjc4MzcxMDU0Mjc4MCUyNmFkZ19jdHglM2RhLWQwZWQzYWZjJTdlai0xZGM1NjM3ZiUyNl94X25zX3Byb2R1Y3RfaWQlM2QxMjUxNjk1LTM2NzgzNzEwNTQyNzgwJTI2X3hfYWRzX3N1Yl9jaGFubmVsJTNkc2hvcHBpbmclMjZfcF9yZnMlM2QxJTI2X3hfbnNfcHJ6X3R5cGUlM2QtMSUyNl94X2dtY19jYXRhbG9nJTNkMTI1MTY5NSUyNmxvY2FsZV9vdmVycmlkZSUzZDIxMSU3ZWVuJTdlVVNEJTI2X3hfbnNfc2t1X2lkJTNkMzY3ODM3MTA1NDI3ODAlMjZtcmtfcmVjJTNkMSUyNl94X25zX2NhdGFsb2dfaWQlM2QxMjUxNjk1JTI2X3hfYWRzX2NoYW5uZWwlM2RiaW5nJTI2X3hfZ21jX2FjY291bnQlM2QzNTQ0NDkxJTI2X3hfYWRzX2NyZWF0aXZlX2lkJTNkNTI0NjAzMzg2JTI2X3hfbnNfZGV2aWNlJTNkYyUyNl94X2Fkc19hY2NvdW50JTNkMTc2ODA1NzYzJTI2X3hfbnNfbWF0Y2hfdHlwZSUzZGUlMjZfeF9uc19tc2Nsa2lkJTNkN2I3NDQ5OWNjMzc1MTcyM2ZkMTAyMzc5N2YzYTVkZjclMjZfeF9hZHNfc2V0JTNkNTI0NjAzMzg2JTI2X3hfbnNfc291cmNlJTNkYSUyNl94X2Fkc19pZCUzZDUyNDYwMzM4NiUyNl94X25zX2tleXdvcmQlM2RfTkFLV05VTExfJTI2bXNjbGtpZCUzZDdiNzQ0OTljYzM3NTE3MjNmZDEwMjM3OTdmM2E1ZGY3%26rlid%3D7b74499cc3751723fd1023797f3a5df7&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                  - button "See more" [ref=e296]:
                    - img [ref=e297]
            - article [ref=e298] [cursor=pointer]:
              - generic [ref=e303]:
                - generic [ref=e305]:
                  - link "Top stories" [ref=e307]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6ae5bc4e07b846838875925eb8d0d0a9&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e308]
                  - button "More options" [ref=e310]
                - list [ref=e313]:
                  - listitem [ref=e314]:
                    - link "Breaking Hindustan Times 1h 6-year-old girl in critical condition after Class 3 student assaults her with stone, flower pot at Panchkula school" [ref=e315]:
                      - /url: https://www.msn.com/en-in/news/other/6-year-old-girl-in-critical-condition-after-class-3-student-assaults-her-with-stone-flower-pot-at-panchkula-school/ar-AA2gsTCX
                      - generic [ref=e316]:
                        - generic [ref=e317]:
                          - generic:
                            - generic [ref=e318]: Breaking
                            - img [ref=e319]
                          - generic [ref=e320]:
                            - generic: Hindustan Times ·1h
                        - generic [ref=e321]: 6-year-old girl in critical condition after Class 3 student assaults her with stone, flower pot at Panchkula school
                  - listitem [ref=e322]:
                    - link "Press Trust of India now Man attacks two Andhra Govt school girls inside classroom with chainsaw" [ref=e323]:
                      - /url: https://www.msn.com/en-in/news/other/man-attacks-two-andhra-govt-school-girls-inside-classroom-with-chainsaw/ar-AA2gtdSg
                      - generic [ref=e324]:
                        - generic [ref=e325]:
                          - img [ref=e326]
                          - generic [ref=e327]:
                            - generic: Press Trust of India ·now
                        - generic [ref=e328]: Man attacks two Andhra Govt school girls inside classroom with chainsaw
                  - listitem [ref=e329]:
                    - 'link "Times Now 1h India bloc Nov 1 protest: Rahul Gandhi calls march from Connaught Place to Ramlila Maidan, Delhi Police says no permission sought" [ref=e330]':
                      - /url: https://www.msn.com/en-in/news/other/india-bloc-nov-1-protest-rahul-gandhi-calls-march-from-connaught-place-to-ramlila-maidan-delhi-police-says-no-permission-sought/ar-AA2gsJLg
                      - generic [ref=e331]:
                        - generic [ref=e332]:
                          - img [ref=e333]
                          - generic [ref=e334]:
                            - generic: Times Now ·1h
                        - generic [ref=e335]: "India bloc Nov 1 protest: Rahul Gandhi calls march from Connaught Place to Ramlila Maidan, Delhi Police says no permission sought"
                - generic [ref=e337]:
                  - generic [ref=e338]:
                    - generic "Previous" [ref=e339]:
                      - button "Previous" [ref=e340]
                    - tablist [ref=e342]:
                      - tab "Page 1" [selected] [ref=e343]
                      - tab "Page 2" [ref=e345]
                      - tab "Page 3" [ref=e347]
                    - generic "Next" [ref=e349]:
                      - button "Next" [ref=e350]
                  - link "See more" [ref=e352]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6ae5bc4e07b846838875925eb8d0d0a9&ocid=hpmsn
            - article [ref=e353] [cursor=pointer]:
              - generic [ref=e357]:
                - generic: Sponsored
            - 'article "Opposition mock parliament: Akhilesh Yadav questions EC''s neutrality as INDIA bloc prepares public impeachment of Gyanesh Kumar" [ref=e358] [cursor=pointer]':
              - generic [ref=e360]:
                - button "Play video preview" [ref=e365]
                - generic [ref=e367]:
                  - generic [ref=e368]:
                    - generic [ref=e369]:
                      - generic [ref=e370]:
                        - img [ref=e371]
                        - generic [ref=e372]: ABP - Live
                      - generic [ref=e373]: ·
                      - generic [ref=e374]: now
                    - 'link "Opposition mock parliament: Akhilesh Yadav questions EC''s neutrality as INDIA bloc prepares public impeachment of Gyanesh Kumar, ABP - Live" [ref=e375]':
                      - /url: https://www.msn.com/en-in/news/other/opposition-mock-parliament-akhilesh-yadav-questions-ec-s-neutrality-as-india-bloc-prepares-public-impeachment-of-gyanesh-kumar/vi-AA2gsEE2
                      - text: "Opposition mock parliament: Akhilesh Yadav questions EC's neutrality as INDIA bloc prepares public impeachment of Gyanesh Kumar"
                  - 'generic "Opposition mock parliament: Akhilesh Yadav questions EC''s neutrality as INDIA bloc prepares public impeachment of Gyanesh Kumar" [ref=e378]':
                    - generic [ref=e380]:
                      - generic [ref=e381]:
                        - button "Like" [ref=e382]:
                          - img [ref=e384]
                        - button "Dislike" [ref=e386]:
                          - img [ref=e388]
                      - link "Start the conversation" [ref=e391]:
                        - /url: https://www.msn.com/en-in/news/other/opposition-mock-parliament-akhilesh-yadav-questions-ec-s-neutrality-as-india-bloc-prepares-public-impeachment-of-gyanesh-kumar/vi-AA2gsEE2#comments
                        - button "Start the conversation" [ref=e392]:
                          - img [ref=e393]
                - generic [ref=e395]:
                  - button "Hide this story" [ref=e396]:
                    - img [ref=e397]
                    - text: Hide this story
                  - button "See more" [ref=e398]:
                    - img [ref=e399]
            - article "This Game is So Beautiful (A Must-Have!)" [ref=e400] [cursor=pointer]:
              - generic [ref=e402]:
                - img [ref=e403]
                - generic [ref=e404]:
                  - generic [ref=e405]:
                    - generic [ref=e408]: "Raid: Shadow Legends"
                    - 'link "This Game is So Beautiful (A Must-Have!), Raid: Shadow Legends" [ref=e409]':
                      - /url: https://www.bing.com/api/v2/mediation/tracking?d=LQuLjxv_o_Ce-hmzAl-F8xoxcMSJcFmS3zgmkTBHRd7zRSuVAWS5RNm16fA214FG-_s3djJbGW3k2FosNYmkh_LsGpw4DTQMIm2ljyaSBbugJwZyYZO-C36RhJOG1NMLX1pfGDkipieFZ1P1hPf84bUc5xhUy_Aa-IpL5dQCiOdXv3F0uheT9BWkT-Po4HFO3blKkunPbDWmTMcuuYRZYHXEpc-geIGy-F6318bYirtqhAztmxWAOHBZ0rrYUgsazejZd2eYBrKo1rdVdTbcd2lhbfdMD-MQdMUQlK8hY5BEKnf6LMcqq63VWI8cPauM&e=1&n=ZXbYJcAMVqxKal0l&rId=3d8e7b85-cfcc-4fe7-be03-2b0705d6fd36&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8CJ2GMdbpFCVthmw5nTUNFzVUCUw-0dPY5-oj-iaI_pGebYg6vlwAGJu6AbjfEYeltPLM9kgz-QLEantF1cwRDGaHMh0YcpuYOTjlD7XcDjGzU9DKlMERVWcZUMcN5VyomImRXTWdwHBIphZl7gScKn-cM9WMHbjoVpIxNLyxwMGWgfMT_ikYr50IrOB9gE8MI759lQQ_Rlyrfc9fQQOUMK7pVOE%26u%3DaHR0cHMlM2ElMmYlMmZscHMucGxhcml1bS5jb20lMmZlbiUyZmRlc2t0b3AlMmZyYWlkJTJmcmRvJTJmY3JvJTJmcmVwbGljYV90aHJfZXhpdDA1X2YwMzhfMnN0cF9qdDM4NDMlM2ZwbGlkJTNkMTc5MTQ5MCUyNnB4bCUzZGJpbmdfbmF0aXZlJTI2cHVibGlzaGVyaWQlM2Q4MDQ3MDcxNzU1ODk2MiUyNnBsYWNlbWVudCUzZDIzMzIyNzAzMjE1MTM3MDZfa2V5d29yZCUyNmFkcGFydG5lcnNldCUzZDEyODc1Mjk1Mjk2MTY5ODUlMjZjbGlja0lkJTNkYjQ5MDRmMjA4NzIyMTRiMzBkNTQyNWM1M2I2ZGM4NjUlMjZtc2Nsa2lkJTNkYjQ5MDRmMjA4NzIyMTRiMzBkNTQyNWM1M2I2ZGM4NjUlMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RCaW5nX1JBRF9VU19OYXRpdmVfVGVzdF8xNzkxNDkwJTI2dXRtX3Rlcm0lM2RrZXl3b3JkJTI2dXRtX2NvbnRlbnQlM2RHZW5lcmFsJTI1MjBUZXN0%26rlid%3Db4904f20872214b30d5425c53b6dc865&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                      - text: This Game is So Beautiful (A Must-Have!)
                  - link "Sponsored" [ref=e411]:
                    - /url: https://www.bing.com/api/v2/mediation/tracking?d=LQuLjxv_o_Ce-hmzAl-F8xoxcMSJcFmS3zgmkTBHRd7zRSuVAWS5RNm16fA214FG-_s3djJbGW3k2FosNYmkh_LsGpw4DTQMIm2ljyaSBbugJwZyYZO-C36RhJOG1NMLX1pfGDkipieFZ1P1hPf84bUc5xhUy_Aa-IpL5dQCiOdXv3F0uheT9BWkT-Po4HFO3blKkunPbDWmTMcuuYRZYHXEpc-geIGy-F6318bYirtqhAztmxWAOHBZ0rrYUgsazejZd2eYBrKo1rdVdTbcd2lhbfdMD-MQdMUQlK8hY5BEKnf6LMcqq63VWI8cPauM&e=1&n=ZXbYJcAMVqxKal0l&rId=3d8e7b85-cfcc-4fe7-be03-2b0705d6fd36&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8CJ2GMdbpFCVthmw5nTUNFzVUCUw-0dPY5-oj-iaI_pGebYg6vlwAGJu6AbjfEYeltPLM9kgz-QLEantF1cwRDGaHMh0YcpuYOTjlD7XcDjGzU9DKlMERVWcZUMcN5VyomImRXTWdwHBIphZl7gScKn-cM9WMHbjoVpIxNLyxwMGWgfMT_ikYr50IrOB9gE8MI759lQQ_Rlyrfc9fQQOUMK7pVOE%26u%3DaHR0cHMlM2ElMmYlMmZscHMucGxhcml1bS5jb20lMmZlbiUyZmRlc2t0b3AlMmZyYWlkJTJmcmRvJTJmY3JvJTJmcmVwbGljYV90aHJfZXhpdDA1X2YwMzhfMnN0cF9qdDM4NDMlM2ZwbGlkJTNkMTc5MTQ5MCUyNnB4bCUzZGJpbmdfbmF0aXZlJTI2cHVibGlzaGVyaWQlM2Q4MDQ3MDcxNzU1ODk2MiUyNnBsYWNlbWVudCUzZDIzMzIyNzAzMjE1MTM3MDZfa2V5d29yZCUyNmFkcGFydG5lcnNldCUzZDEyODc1Mjk1Mjk2MTY5ODUlMjZjbGlja0lkJTNkYjQ5MDRmMjA4NzIyMTRiMzBkNTQyNWM1M2I2ZGM4NjUlMjZtc2Nsa2lkJTNkYjQ5MDRmMjA4NzIyMTRiMzBkNTQyNWM1M2I2ZGM4NjUlMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RCaW5nX1JBRF9VU19OYXRpdmVfVGVzdF8xNzkxNDkwJTI2dXRtX3Rlcm0lM2RrZXl3b3JkJTI2dXRtX2NvbnRlbnQlM2RHZW5lcmFsJTI1MjBUZXN0%26rlid%3Db4904f20872214b30d5425c53b6dc865&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                - button "See more" [ref=e413]:
                  - img [ref=e414]
            - article "Tamil Nadu govt raises upper age limit by 5 years for govt jobs; check revised category-wise limit" [ref=e415] [cursor=pointer]:
              - generic [ref=e417]:
                - img [ref=e418]
                - generic [ref=e419]:
                  - generic [ref=e420]:
                    - generic [ref=e421]:
                      - generic [ref=e422]:
                        - img [ref=e423]
                        - generic [ref=e424]: The Daily Jagran
                      - generic [ref=e425]: ·
                      - generic [ref=e426]: 19h
                    - link "Tamil Nadu govt raises upper age limit by 5 years for govt jobs; check revised category-wise limit, The Daily Jagran" [ref=e427]:
                      - /url: https://www.msn.com/en-in/money/general/tamil-nadu-govt-raises-upper-age-limit-by-5-years-for-govt-jobs-check-revised-category-wise-limit/ar-AA2gq34n
                      - text: Tamil Nadu govt raises upper age limit by 5 years for govt jobs; check revised category-wise limit
                  - generic "Tamil Nadu govt raises upper age limit by 5 years for govt jobs; check revised category-wise limit" [ref=e430]:
                    - generic [ref=e432]:
                      - generic [ref=e433]:
                        - button "32 Likes" [ref=e434]:
                          - generic [ref=e435]:
                            - img [ref=e436]
                            - generic [ref=e438]: "32"
                        - button "Dislike" [ref=e439]:
                          - img [ref=e441]
                      - link "View comments 1 Comment" [ref=e444]:
                        - /url: https://www.msn.com/en-in/money/general/tamil-nadu-govt-raises-upper-age-limit-by-5-years-for-govt-jobs-check-revised-category-wise-limit/ar-AA2gq34n#comments
                        - button "View comments 1 Comment" [ref=e445]:
                          - img [ref=e446]
                        - generic [ref=e448]: "1"
                - generic [ref=e449]:
                  - button "Hide this story" [ref=e450]:
                    - img [ref=e451]
                    - text: Hide this story
                  - button "See more" [ref=e452]:
                    - img [ref=e453]
            - article [ref=e454] [cursor=pointer]:
              - generic [ref=e459]:
                - generic [ref=e461]:
                  - link "Games" [ref=e463]:
                    - /url: https://www.msn.com/en-in/play?ocid=hpmsn&cgfrom=cg_ntp_sd_cardtitle
                    - heading "Games" [level=2] [ref=e464]
                  - button "More options" [ref=e466]
                - list [ref=e470]:
                  - generic:
                    - listitem [ref=e471]:
                      - link "Real Car Driving" [ref=e472]:
                        - /url: https://www.msn.com/en-in/play/games/real-car-driving/cg-9n1f6qpb51zl?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9&ei=3
                        - generic [ref=e473]:
                          - img "Real Car Driving"
                    - listitem [ref=e474]:
                      - link "Jigsaw Hexa Puzzle" [ref=e475]:
                        - /url: https://www.msn.com/en-in/play/games/jigsaw-hexa-puzzle/cg-9n3n28nf7d2z?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9&ei=3
                        - generic [ref=e476]:
                          - img "Jigsaw Hexa Puzzle"
                    - listitem [ref=e477]:
                      - link "Hidden Objects" [ref=e478]:
                        - /url: https://www.msn.com/en-in/play/games/hidden-objects/cg-9nrl7s8gcnmh?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9&ei=3
                        - generic [ref=e479]:
                          - img "Hidden Objects"
                    - listitem [ref=e480]:
                      - link "Contract Deer Hunter" [ref=e481]:
                        - /url: https://www.msn.com/en-in/play/games/contract-deer-hunter/cg-9n5mtb00vthw?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9&ei=3
                        - generic [ref=e482]:
                          - img "Contract Deer Hunter"
                    - listitem [ref=e483]:
                      - link "Mergest Kingdom" [ref=e484]:
                        - /url: https://www.msn.com/en-in/play/games/mergest-kingdom/cg-9pc19rxfzl82?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9&ei=3
                        - generic [ref=e485]:
                          - img "Mergest Kingdom"
                    - listitem [ref=e486]:
                      - link "Kick the Buddy" [ref=e487]:
                        - /url: https://www.msn.com/en-in/play/games/kick-the-buddy/cg-9ncz9n76wh8w?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9&ei=3
                        - generic [ref=e488]:
                          - img "Kick the Buddy"
                    - listitem [ref=e489]:
                      - link "Tropical Merge" [ref=e490]:
                        - /url: https://www.msn.com/en-in/play/games/tropical-merge/cg-9n5tk2sn4464?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9&ei=3
                        - generic [ref=e491]:
                          - img "Tropical Merge"
                    - listitem [ref=e492]:
                      - link "Merge Haven" [ref=e493]:
                        - /url: https://www.msn.com/en-in/play/games/merge-haven/cg-9nv74hgpzr0n?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9&ei=3
                        - generic [ref=e494]:
                          - img "Merge Haven"
                    - listitem [ref=e495]:
                      - link "Block Blast Frenzy" [ref=e496]:
                        - /url: https://www.msn.com/en-in/play/games/block-blast-frenzy/cg-9ndnjp19g5q9?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9&ei=3
                        - generic [ref=e497]:
                          - img "Block Blast Frenzy"
                - generic [ref=e499]:
                  - generic [ref=e500]:
                    - generic "Previous" [ref=e501]:
                      - button "Previous" [ref=e502]
                    - tablist [ref=e504]:
                      - tab "Page 1" [selected] [ref=e505]
                      - tab "Page 2" [ref=e507]
                    - generic "Next" [ref=e509]:
                      - button "Next" [ref=e510]
                  - link "Explore more games" [ref=e512]:
                    - /url: https://www.msn.com/en-in/play?ocid=hpmsn&cgfrom=cg_ntp_sd_cardseemore
            - 'article "Prakash Raj has lost work due to political opinions, refuses to live in fear: wife" [ref=e513] [cursor=pointer]':
              - generic [ref=e515]:
                - img [ref=e516]
                - generic [ref=e517]:
                  - generic [ref=e518]:
                    - generic [ref=e519]:
                      - generic [ref=e520]:
                        - img [ref=e521]
                        - generic [ref=e522]: The Indian Express
                      - generic [ref=e523]: ·
                      - generic [ref=e524]: 21h
                    - 'link "Prakash Raj has lost work due to political opinions, refuses to live in fear: wife, The Indian Express" [ref=e525]':
                      - /url: https://www.msn.com/en-in/news/other/prakash-raj-has-lost-work-due-to-political-opinions-refuses-to-live-in-fear-wife/ar-AA2gpXGp
                      - text: "Prakash Raj has lost work due to political opinions, refuses to live in fear: wife"
                  - 'generic "Prakash Raj has lost work due to political opinions, refuses to live in fear: wife" [ref=e528]':
                    - generic [ref=e530]:
                      - generic [ref=e531]:
                        - button "132 Likes" [ref=e532]:
                          - generic [ref=e533]:
                            - img [ref=e534]
                            - generic [ref=e536]: "132"
                        - button "Dislike" [ref=e537]:
                          - img [ref=e539]
                      - link "View comments 38 Comment" [ref=e542]:
                        - /url: https://www.msn.com/en-in/news/other/prakash-raj-has-lost-work-due-to-political-opinions-refuses-to-live-in-fear-wife/ar-AA2gpXGp#comments
                        - button "View comments 38 Comment" [ref=e543]:
                          - img [ref=e544]
                        - generic [ref=e546]: "38"
                - generic [ref=e547]:
                  - button "Hide this story" [ref=e548]:
                    - img [ref=e549]
                    - text: Hide this story
                  - button "See more" [ref=e550]:
                    - img [ref=e551]
            - article "Impress with Unique Finds!" [ref=e552] [cursor=pointer]:
              - generic [ref=e554]:
                - img [ref=e555]
                - generic [ref=e556]:
                  - generic [ref=e557]:
                    - generic [ref=e560]: Top Rated Consumer
                    - link "Impress with Unique Finds!, Top Rated Consumer" [ref=e561]:
                      - /url: https://www.bing.com/api/v2/mediation/tracking?d=Nwjegq6CYYWG167UPYRyS6UGlVXznWgadiZNOkXfRGMDQSw4jfWI_JnyhhwsPchDlo2dA4WuPjRqPJ75PpcvxUvszaKTZ2YT4AR5zmiaP_K50o2tqA-awf7DJ6AgwtzDPDZjMo9wsDGgy8Cm8ywCIO4yRjYq-H7VqBP6Jrbamn-Eq2m_qr-0FskgAcvZa6j3TqrIBPoXU4Xm0oh-rpI67zEsKOo8kFS-wppuZ5M6BQ7ZLT0LZicsph6mXDbU1GNpH2kINRrM_CfVRpcnEu-ARPM5NJCVpoggZb3quZtDy4aLuOmasV-QKshjbNajbeRb&e=1&n=EzyMx3S9G4ue3jsR&rId=3d8e7b85-cfcc-4fe7-be03-2b0705d6fd36&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8gIWDyV5ERABc1iGCJoK1iDVUCUywm-hcJFawbsZAlmIQtkpunxv8l-_sImHf4L3j6Y-WAO8n_PFa2D26YlD8TnlXBhscB5D56al60VnGsogWnZp88atHeBK_o-F2EQqESmn0RBMQ22D_qE7hH2uAr8rs4O5lmSsgAjJzIBzM2KEGEZ_62Ct_yq1ngAISqKlhxwiF10yA-Y5dfE7XH9g6NPOY-8s%26u%3DaHR0cHMlM2ElMmYlMmZ0b3ByYXRlZGNvbnN1bWVyLmNvbSUyZmJlc3QtZ2lmdHMlM2Z1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RhJTI2dXRtX2NhbXBhaWduJTNkNTMzNjY5NTY2JTI2dXRtX3Rlcm0lM2QxMzY0NDk2NjU4NzUyNjg3JTI2dXRtX2NvbnRlbnQlM2Q4NTI4MTQ2ODE4NjA5NCUyNnRndCUzZGt3ZC0yMzM3MDgwNjg1NDM5Njk2JTNhbG9jLTE5MCUyNmQlM2RjJTI2cXMlM2RrZXl3b3JkJTI2a3clM2RrZXl3b3JkJTI2bXNjbGtpZCUzZDcyOTdhZDRiMjIzYjFhNDZjNTg0YzdhZTllNzQ2YzFl%26rlid%3D7297ad4b223b1a46c584c7ae9e746c1e&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                      - text: Impress with Unique Finds!
                  - link "Sponsored" [ref=e563]:
                    - /url: https://www.bing.com/api/v2/mediation/tracking?d=Nwjegq6CYYWG167UPYRyS6UGlVXznWgadiZNOkXfRGMDQSw4jfWI_JnyhhwsPchDlo2dA4WuPjRqPJ75PpcvxUvszaKTZ2YT4AR5zmiaP_K50o2tqA-awf7DJ6AgwtzDPDZjMo9wsDGgy8Cm8ywCIO4yRjYq-H7VqBP6Jrbamn-Eq2m_qr-0FskgAcvZa6j3TqrIBPoXU4Xm0oh-rpI67zEsKOo8kFS-wppuZ5M6BQ7ZLT0LZicsph6mXDbU1GNpH2kINRrM_CfVRpcnEu-ARPM5NJCVpoggZb3quZtDy4aLuOmasV-QKshjbNajbeRb&e=1&n=EzyMx3S9G4ue3jsR&rId=3d8e7b85-cfcc-4fe7-be03-2b0705d6fd36&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8gIWDyV5ERABc1iGCJoK1iDVUCUywm-hcJFawbsZAlmIQtkpunxv8l-_sImHf4L3j6Y-WAO8n_PFa2D26YlD8TnlXBhscB5D56al60VnGsogWnZp88atHeBK_o-F2EQqESmn0RBMQ22D_qE7hH2uAr8rs4O5lmSsgAjJzIBzM2KEGEZ_62Ct_yq1ngAISqKlhxwiF10yA-Y5dfE7XH9g6NPOY-8s%26u%3DaHR0cHMlM2ElMmYlMmZ0b3ByYXRlZGNvbnN1bWVyLmNvbSUyZmJlc3QtZ2lmdHMlM2Z1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RhJTI2dXRtX2NhbXBhaWduJTNkNTMzNjY5NTY2JTI2dXRtX3Rlcm0lM2QxMzY0NDk2NjU4NzUyNjg3JTI2dXRtX2NvbnRlbnQlM2Q4NTI4MTQ2ODE4NjA5NCUyNnRndCUzZGt3ZC0yMzM3MDgwNjg1NDM5Njk2JTNhbG9jLTE5MCUyNmQlM2RjJTI2cXMlM2RrZXl3b3JkJTI2a3clM2RrZXl3b3JkJTI2bXNjbGtpZCUzZDcyOTdhZDRiMjIzYjFhNDZjNTg0YzdhZTllNzQ2YzFl%26rlid%3D7297ad4b223b1a46c584c7ae9e746c1e&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                - button "See more" [ref=e565]:
                  - img [ref=e566]
            - article [ref=e567] [cursor=pointer]:
              - generic [ref=e573]:
                - generic [ref=e575]:
                  - link "Boydton" [ref=e577]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Boydton,Virginia?loc=eyJsIjoiQm95ZHRvbiIsInIiOiJWaXJnaW5pYSIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTc4LjM5NzE2MzM5MTExMzI4LCJ5IjozNi42NjY0NzcyMDMzNjkxNH0%3D&weadegreetype=C&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9&content=AQICard_wxaqi
                    - heading "Boydton" [level=2] [ref=e578]
                  - button "My location" [ref=e579]
                  - button "More options" [ref=e581]
                - generic [ref=e585]:
                  - generic [ref=e586]:
                    - generic [ref=e588]:
                      - link "Clear" [ref=e589]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Boydton,Virginia?loc=eyJsIjoiQm95ZHRvbiIsInIiOiJWaXJnaW5pYSIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTc4LjM5NzE2MzM5MTExMzI4LCJ5IjozNi42NjY0NzcyMDMzNjkxNH0%3D&weadegreetype=C&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9&content=AQICard_wxaqi
                        - img "Clear" [ref=e590]
                      - link "10°C" [ref=e591]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Boydton,Virginia?loc=eyJsIjoiQm95ZHRvbiIsInIiOiJWaXJnaW5pYSIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTc4LjM5NzE2MzM5MTExMzI4LCJ5IjozNi42NjY0NzcyMDMzNjkxNH0%3D&weadegreetype=C&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9&content=AQICard_wxaqi
                        - generic [ref=e592]: ‎10‎
                        - generic [ref=e594]: ‎°C‎
                    - generic [ref=e596]:
                      - link "Satisfactory" [ref=e598]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Boydton,Virginia?loc=eyJsIjoiQm95ZHRvbiIsInIiOiJWaXJnaW5pYSIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTc4LjM5NzE2MzM5MTExMzI4LCJ5IjozNi42NjY0NzcyMDMzNjkxNH0%3D&weadegreetype=C&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9&fcsttab=airquality
                        - text: Satisfactory
                      - link "See full forecast" [ref=e600]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Boydton,Virginia?loc=eyJsIjoiQm95ZHRvbiIsInIiOiJWaXJnaW5pYSIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTc4LjM5NzE2MzM5MTExMzI4LCJ5IjozNi42NjY0NzcyMDMzNjkxNH0%3D&weadegreetype=C&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9&fcsttab=airquality
                        - img "arrow" [ref=e601]
                  - generic [ref=e606]:
                    - link "Larger map" [ref=e607]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Boydton,Virginia?loc=eyJsIjoiQm95ZHRvbiIsInIiOiJWaXJnaW5pYSIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTc4LjM5NzE2MzM5MTExMzI4LCJ5IjozNi42NjY0NzcyMDMzNjkxNH0%3D&weadegreetype=C&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9&content=AQICard_wxaqi&zoom=8
                      - generic [ref=e608]:
                        - generic:
                          - generic:
                            - img
                            - img
                            - img
                            - img
                      - img
                    - link "Check global air quality" [ref=e609]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Boydton,Virginia?loc=eyJsIjoiQm95ZHRvbiIsInIiOiJWaXJnaW5pYSIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTc4LjM5NzE2MzM5MTExMzI4LCJ5IjozNi42NjY0NzcyMDMzNjkxNH0%3D&weadegreetype=C&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9&content=AQICard_wxaqi&zoom=8
                      - img [ref=e611]
                      - generic "Check global air quality" [ref=e612]
                      - img [ref=e614]
                - button "See full forecast" [ref=e617]
          - generic [ref=e618]:
            - article [ref=e619] [cursor=pointer]:
              - generic [ref=e624]:
                - generic [ref=e626]:
                  - link "Top Engaging News" [ref=e628]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9
                    - heading "Top Engaging News" [level=2] [ref=e629]
                  - button "More options" [ref=e631]
                - generic [ref=e633]:
                  - link "News18 10 Comments Jim Carrey marries for the 3rd time at 64, ties knot with 32-year-old girlfriend Min Ah" [ref=e635]:
                    - /url: https://www.msn.com/en-in/entertainment/celebrities/jim-carrey-marries-for-the-3rd-time-at-64-ties-knot-with-32-year-old-girlfriend-min-ah/ar-AA2dk8bG
                    - generic [ref=e636]:
                      - img [ref=e637]
                      - generic [ref=e638]: News18
                      - link "10 Comments" [ref=e640]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/jim-carrey-marries-for-the-3rd-time-at-64-ties-knot-with-32-year-old-girlfriend-min-ah/ar-AA2dk8bG#comments
                        - img [ref=e641]
                        - paragraph [ref=e642]: "10"
                    - paragraph [ref=e643]: Jim Carrey marries for the 3rd time at 64, ties knot with 32-year-old girlfriend Min Ah
                  - 'link "Hindustan Times 3 Comments Australians are laid-back: Indian man compares public holidays in Australia and India, internet reacts" [ref=e645]':
                    - /url: https://www.msn.com/en-in/news/other/australians-are-laid-back-indian-man-compares-public-holidays-in-australia-and-india-internet-reacts/ar-AA2dmmhs
                    - generic [ref=e646]:
                      - img [ref=e647]
                      - generic [ref=e648]: Hindustan Times
                      - link "3 Comments" [ref=e650]:
                        - /url: https://www.msn.com/en-in/news/other/australians-are-laid-back-indian-man-compares-public-holidays-in-australia-and-india-internet-reacts/ar-AA2dmmhs#comments
                        - img [ref=e651]
                        - paragraph [ref=e652]: "3"
                    - paragraph [ref=e653]: "Australians are laid-back: Indian man compares public holidays in Australia and India, internet reacts"
                  - link "ABP - Live 2 Comments Washington Sundar out of India T20I squad, BCCI names surprise replacement" [ref=e655]:
                    - /url: https://www.msn.com/en-in/sports/cricket/washington-sundar-out-of-india-t20i-squad-bcci-names-surprise-replacement/ar-AA2dltlt
                    - generic [ref=e656]:
                      - img [ref=e657]
                      - generic [ref=e658]: ABP - Live
                      - link "2 Comments" [ref=e660]:
                        - /url: https://www.msn.com/en-in/sports/cricket/washington-sundar-out-of-india-t20i-squad-bcci-names-surprise-replacement/ar-AA2dltlt#comments
                        - img [ref=e661]
                        - paragraph [ref=e662]: "2"
                    - paragraph [ref=e663]: Washington Sundar out of India T20I squad, BCCI names surprise replacement
                - generic [ref=e665]:
                  - generic [ref=e666]:
                    - generic "Previous" [ref=e667]:
                      - button "Previous" [ref=e668]
                    - tablist [ref=e670]:
                      - tab "Page 1" [selected] [ref=e671]
                      - tab "Page 2" [ref=e673]
                      - tab "Page 3" [ref=e675]
                    - generic "Next" [ref=e677]:
                      - button "Next" [ref=e678]
                  - link "See more" [ref=e680]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9
            - article [ref=e681] [cursor=pointer]
            - article "He was filming inside a military-run country then everything went wrong" [ref=e688] [cursor=pointer]:
              - generic [ref=e690]:
                - button "Play video preview" [ref=e695]
                - generic [ref=e697]:
                  - generic [ref=e698]:
                    - generic [ref=e699]:
                      - generic [ref=e700]:
                        - img [ref=e701]
                        - generic [ref=e702]: Best Ever Food Review Show
                      - generic [ref=e703]: ·
                      - generic [ref=e704]: 3d
                    - link "He was filming inside a military-run country then everything went wrong, Best Ever Food Review Show" [ref=e705]:
                      - /url: https://www.msn.com/en-in/news/other/he-was-filming-inside-a-military-run-country-then-everything-went-wrong/vi-AA2amjFP
                      - text: He was filming inside a military-run country then everything went wrong
                  - generic "He was filming inside a military-run country then everything went wrong" [ref=e708]:
                    - generic [ref=e710]:
                      - generic [ref=e711]:
                        - button "156 Likes" [ref=e712]:
                          - generic [ref=e713]:
                            - img [ref=e714]
                            - generic [ref=e716]: "156"
                        - button "Dislike" [ref=e717]:
                          - img [ref=e719]
                      - link "Start the conversation" [ref=e722]:
                        - /url: https://www.msn.com/en-in/news/other/he-was-filming-inside-a-military-run-country-then-everything-went-wrong/vi-AA2amjFP#comments
                        - button "Start the conversation" [ref=e723]:
                          - img [ref=e724]
                - generic [ref=e726]:
                  - button "Hide this story" [ref=e727]:
                    - img [ref=e728]
                    - text: Hide this story
                  - button "See more" [ref=e729]:
                    - img [ref=e730]
            - article [ref=e731] [cursor=pointer]:
              - generic [ref=e737]:
                - generic [ref=e739]:
                  - img "Watchlist suggestions" [ref=e741]
                  - link "Watchlist suggestions" [ref=e742]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e743]
                  - button "More options" [ref=e745]
                - generic [ref=e750]:
                  - link "NASDAQ COMP ‎-2.86%‎ 25,437.00" [ref=e752]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a3oxnm&ocid=hpmsn
                    - generic [ref=e753]:
                      - generic [ref=e755]: NASDAQ
                      - generic [ref=e757]: COMP
                    - generic [ref=e762]:
                      - generic [ref=e763]: ‎-2.86%‎
                      - generic [ref=e764]: 25,437.00
                    - button "Add to watchlist" [ref=e767]:
                      - img [ref=e768]
                  - link "USD/INR US Dollar/Indian Rupee ‎-0.35%‎ 94.8551" [ref=e772]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=avyo8m&ocid=hpmsn
                    - generic [ref=e773]:
                      - generic [ref=e775]: USD/INR
                      - generic [ref=e777]: US Dollar/Indian Rupee
                    - generic [ref=e782]:
                      - generic [ref=e783]: ‎-0.35%‎
                      - generic [ref=e784]: "94.8551"
                    - button "Add to watchlist" [ref=e787]:
                      - img [ref=e788]
                  - link "Gold Gold ‎-3.29%‎ 3,898.90" [ref=e792]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwoc&ocid=hpmsn
                    - generic [ref=e793]:
                      - generic [ref=e795]: Gold
                      - generic [ref=e797]: Gold
                    - generic [ref=e802]:
                      - generic [ref=e803]: ‎-3.29%‎
                      - generic [ref=e804]: 3,898.90
                    - button "Add to watchlist" [ref=e807]:
                      - img [ref=e808]
                  - link "24K Gold (10 Grams) - Indian Rupee XAUINR ‎+0.69%‎ 144496" [ref=e812]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&ocid=hpmsn
                    - generic [ref=e813]:
                      - generic [ref=e815]: 24K Gold (10 Grams) - Indian Rupee
                      - generic [ref=e817]: XAUINR
                    - generic [ref=e822]:
                      - generic [ref=e823]: ‎+0.69%‎
                      - generic [ref=e824]: "144496"
                    - button "Add to watchlist" [ref=e827]:
                      - img [ref=e828]
                  - link "Silver Silver ‎-5.93%‎ 49.28" [ref=e832]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwr7&ocid=hpmsn
                    - generic [ref=e833]:
                      - generic [ref=e835]: Silver
                      - generic [ref=e837]: Silver
                    - generic [ref=e842]:
                      - generic [ref=e843]: ‎-5.93%‎
                      - generic [ref=e844]: "49.28"
                    - button "Add to watchlist" [ref=e847]:
                      - img [ref=e848]
                - generic [ref=e852]:
                  - generic [ref=e853]:
                    - generic "Previous" [ref=e854]:
                      - button "Previous" [ref=e855]
                    - tablist [ref=e857]:
                      - tab "Page 1" [selected] [ref=e858]
                      - tab "Page 2" [ref=e860]
                      - tab "Page 3" [ref=e862]
                      - tab "Page 4" [ref=e864]
                      - tab "Page 5" [ref=e866]
                      - tab "Page 6"
                      - tab "Page 7"
                    - generic "Next" [ref=e868]:
                      - button "Next" [ref=e869]
                  - link "See watchlist suggestions" [ref=e871]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - article "6-year-old girl in critical condition after Class 3 student assaults her with stone, flower pot at Panchkula school" [ref=e872] [cursor=pointer]:
              - generic [ref=e874]:
                - img [ref=e875]
                - generic [ref=e876]:
                  - generic [ref=e877]:
                    - generic [ref=e878]:
                      - generic [ref=e879]:
                        - img [ref=e880]
                        - generic [ref=e881]: Hindustan Times
                      - generic [ref=e882]: ·
                      - generic [ref=e883]: 1h
                    - link "6-year-old girl in critical condition after Class 3 student assaults her with stone, flower pot at Panchkula school, Hindustan Times" [ref=e884]:
                      - /url: https://www.msn.com/en-in/news/other/6-year-old-girl-in-critical-condition-after-class-3-student-assaults-her-with-stone-flower-pot-at-panchkula-school/ar-AA2gsTCX
                      - text: 6-year-old girl in critical condition after Class 3 student assaults her with stone, flower pot at Panchkula school
                  - generic "6-year-old girl in critical condition after Class 3 student assaults her with stone, flower pot at Panchkula school" [ref=e887]:
                    - generic [ref=e889]:
                      - generic [ref=e890]:
                        - button "28 Likes" [ref=e891]:
                          - generic [ref=e892]:
                            - img [ref=e893]
                            - generic [ref=e895]: "28"
                        - button "Dislike" [ref=e896]:
                          - img [ref=e898]
                      - link "View comments 1 Comment" [ref=e901]:
                        - /url: https://www.msn.com/en-in/news/other/6-year-old-girl-in-critical-condition-after-class-3-student-assaults-her-with-stone-flower-pot-at-panchkula-school/ar-AA2gsTCX#comments
                        - button "View comments 1 Comment" [ref=e902]:
                          - img [ref=e903]
                        - generic [ref=e905]: "1"
                - generic [ref=e906]:
                  - button "Hide this story" [ref=e907]:
                    - img [ref=e908]
                    - text: Hide this story
                  - button "See more" [ref=e909]:
                    - img [ref=e910]
            - 'article "CBSE drops class 10 environmental education: New subject choices explained" [ref=e911] [cursor=pointer]':
              - generic [ref=e913]:
                - img [ref=e914]
                - generic [ref=e915]:
                  - generic [ref=e916]:
                    - generic [ref=e917]:
                      - generic [ref=e918]:
                        - img [ref=e919]
                        - generic [ref=e920]: India Today
                      - generic [ref=e921]: ·
                      - generic [ref=e922]: 1d
                    - 'link "CBSE drops class 10 environmental education: New subject choices explained, India Today" [ref=e923]':
                      - /url: https://www.msn.com/en-in/news/other/cbse-drops-class-10-environmental-education-new-subject-choices-explained/ar-AA2glD8L
                      - text: "CBSE drops class 10 environmental education: New subject choices explained"
                  - 'generic "CBSE drops class 10 environmental education: New subject choices explained" [ref=e926]':
                    - generic [ref=e928]:
                      - generic [ref=e929]:
                        - button "4 Likes" [ref=e930]:
                          - generic [ref=e931]:
                            - img [ref=e932]
                            - generic [ref=e934]: "4"
                        - button "Dislike" [ref=e935]:
                          - img [ref=e937]
                      - link "Start the conversation" [ref=e940]:
                        - /url: https://www.msn.com/en-in/news/other/cbse-drops-class-10-environmental-education-new-subject-choices-explained/ar-AA2glD8L#comments
                        - button "Start the conversation" [ref=e941]:
                          - img [ref=e942]
                - generic [ref=e944]:
                  - button "Hide this story" [ref=e945]:
                    - img [ref=e946]
                    - text: Hide this story
                  - button "See more" [ref=e947]:
                    - img [ref=e948]
            - article [ref=e949] [cursor=pointer]:
              - generic [ref=e955]:
                - generic [ref=e957]:
                  - img "ICC" [ref=e959]
                  - link "ICC" [ref=e960]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?uxmode=ruby&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9
                    - heading "ICC" [level=2] [ref=e961]
                  - button "More interests" [ref=e962]
                  - generic [ref=e963]:
                    - generic "Live now" [ref=e964]:
                      - button "Live now" [ref=e965]
                    - button "More options" [ref=e966]
                - generic [ref=e970]:
                  - link "SA 329 387 Live AUS 429 42/6 AUS need 246 runs" [ref=e971]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-269792?uxmode=ruby&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9
                    - generic "SA" [ref=e972]:
                      - generic [ref=e973]:
                        - generic [ref=e974]:
                          - generic [ref=e976]: SA
                          - button "Click to follow SA":
                            - generic:
                              - img
                        - generic [ref=e978]:
                          - generic [ref=e979]: "329"
                          - generic [ref=e980]: "387"
                    - generic [ref=e984]: Live
                    - generic "AUS" [ref=e985]:
                      - generic [ref=e986]:
                        - generic [ref=e987]:
                          - generic [ref=e989]: AUS
                          - button "Click to follow AUS":
                            - generic:
                              - img
                        - generic [ref=e991]:
                          - generic [ref=e992]: "429"
                          - generic [ref=e993]: 42/6
                    - generic "AUS need 246 runs" [ref=e996]
                  - link "PAK Live SL 144/2 (26.3) PAK elected to field" [ref=e997]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-274148?uxmode=ruby&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9
                    - generic "PAK" [ref=e998]:
                      - generic [ref=e1000]:
                        - generic [ref=e1002]: PAK
                        - button "Click to follow PAK":
                          - generic:
                            - img
                    - generic [ref=e1006]: Live
                    - generic "SL" [ref=e1007]:
                      - generic [ref=e1008]:
                        - generic [ref=e1009]:
                          - generic [ref=e1011]: SL
                          - button "Click to follow SL":
                            - generic:
                              - img
                        - generic [ref=e1013]:
                          - generic [ref=e1014]: 144/2
                          - generic [ref=e1015]: (26.3)
                    - generic "PAK elected to field" [ref=e1018]
                  - link "SCO 100/3 (6.0) VS AFG 121/4 (6.0) AFG won by 21 runs" [ref=e1019]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-275389?uxmode=ruby&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9
                    - generic "SCO" [ref=e1020]:
                      - generic [ref=e1021]:
                        - generic [ref=e1022]:
                          - generic [ref=e1024]: SCO
                          - button "Click to follow SCO":
                            - generic:
                              - img
                        - generic [ref=e1026]:
                          - generic [ref=e1027]: 100/3
                          - generic [ref=e1028]: (6.0)
                    - generic [ref=e1032]: VS
                    - generic "AFG" [ref=e1033]:
                      - generic [ref=e1034]:
                        - img [ref=e1036]
                        - generic [ref=e1038]:
                          - generic [ref=e1040]: AFG
                          - button "Click to follow AFG":
                            - generic:
                              - img
                        - generic [ref=e1042]:
                          - generic [ref=e1043]: 121/4
                          - generic [ref=e1044]: (6.0)
                    - generic "AFG won by 21 runs" [ref=e1047]
                - generic [ref=e1049]:
                  - generic [ref=e1050]:
                    - generic "Previous" [ref=e1051]:
                      - button "Previous" [ref=e1052]
                    - tablist [ref=e1054]:
                      - tab "Page 1" [selected] [ref=e1055]
                      - tab "Page 2" [ref=e1057]
                      - tab "Page 3" [ref=e1059]
                      - tab "Page 4" [ref=e1061]
                      - tab "Page 5" [ref=e1063]
                      - tab "Page 6"
                      - tab "Page 7"
                      - tab "Page 8"
                      - tab "Page 9"
                      - tab "Page 10"
                      - tab "Page 11"
                    - generic "Next" [ref=e1065]:
                      - button "Next" [ref=e1066]
                  - link "See more ICC" [ref=e1068]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?uxmode=ruby&ocid=hpmsn&cvid=6ae5bc4e07b846838875925eb8d0d0a9
            - article "Isha Ambani’s reaction to her nephew running on stage at Jio IPO event reveals a lesson in gentle parenting" [ref=e1069] [cursor=pointer]:
              - generic [ref=e1071]:
                - img [ref=e1072]
                - generic [ref=e1073]:
                  - generic [ref=e1074]:
                    - generic [ref=e1075]:
                      - generic [ref=e1076]:
                        - img [ref=e1077]
                        - generic [ref=e1078]: News18
                      - generic [ref=e1079]: ·
                      - generic [ref=e1080]: 23h
                    - link "Isha Ambani’s reaction to her nephew running on stage at Jio IPO event reveals a lesson in gentle parenting, News18" [ref=e1081]:
                      - /url: https://www.msn.com/en-in/news/other/isha-ambani-s-reaction-to-her-nephew-running-on-stage-at-jio-ipo-event-reveals-a-lesson-in-gentle-parenting/ar-AA2gp5SA
                      - text: Isha Ambani’s reaction to her nephew running on stage at Jio IPO event reveals a lesson in gentle parenting
                  - generic "Isha Ambani’s reaction to her nephew running on stage at Jio IPO event reveals a lesson in gentle parenting" [ref=e1084]:
                    - generic [ref=e1086]:
                      - generic [ref=e1087]:
                        - button "56 Likes" [ref=e1088]:
                          - generic [ref=e1089]:
                            - img [ref=e1090]
                            - generic [ref=e1092]: "56"
                        - button "Dislike" [ref=e1093]:
                          - img [ref=e1095]
                      - link "Start the conversation" [ref=e1098]:
                        - /url: https://www.msn.com/en-in/news/other/isha-ambani-s-reaction-to-her-nephew-running-on-stage-at-jio-ipo-event-reveals-a-lesson-in-gentle-parenting/ar-AA2gp5SA#comments
                        - button "Start the conversation" [ref=e1099]:
                          - img [ref=e1100]
                - generic [ref=e1102]:
                  - button "Hide this story" [ref=e1103]:
                    - img [ref=e1104]
                    - text: Hide this story
                  - button "See more" [ref=e1105]:
                    - img [ref=e1106]
            - article [ref=e1107] [cursor=pointer]
            - article "Bob accidentally becomes king of England (hilarious scene) | Minions (2015)" [ref=e1114] [cursor=pointer]:
              - generic [ref=e1116]:
                - button "Play video preview" [ref=e1120]
                - generic [ref=e1121]:
                  - generic [ref=e1122]:
                    - generic [ref=e1124]:
                      - img [ref=e1125]
                      - generic [ref=e1126]: Popcorn Picks
                    - link "Bob accidentally becomes king of England (hilarious scene) | Minions (2015), Popcorn Picks" [ref=e1127]:
                      - /url: https://www.msn.com/en-in/entertainment/movies/bob-accidentally-becomes-king-of-england-hilarious-scene-minions-2015/vi-AA2b83it
                      - text: Bob accidentally becomes king of England (hilarious scene) | Minions (2015)
                  - generic "Bob accidentally becomes king of England (hilarious scene) | Minions (2015)" [ref=e1130]:
                    - generic [ref=e1132]:
                      - generic [ref=e1133]:
                        - button "539 Likes" [ref=e1134]:
                          - generic [ref=e1135]:
                            - img [ref=e1136]
                            - generic [ref=e1138]: "539"
                        - button "Dislike" [ref=e1139]:
                          - img [ref=e1141]
                      - link "Start the conversation" [ref=e1144]:
                        - /url: https://www.msn.com/en-in/entertainment/movies/bob-accidentally-becomes-king-of-england-hilarious-scene-minions-2015/vi-AA2b83it#comments
                        - button "Start the conversation" [ref=e1145]:
                          - img [ref=e1146]
                - generic [ref=e1148]:
                  - button "Hide this story" [ref=e1149]:
                    - img [ref=e1150]
                    - text: Hide this story
                  - button "See more" [ref=e1151]:
                    - img [ref=e1152]
          - article [ref=e1154]
          - generic [ref=e1156]:
            - article [ref=e1157] [cursor=pointer]:
              - generic [ref=e1162]:
                - generic [ref=e1163]:
                  - generic [ref=e1164]:
                    - link "Recommended videos" [ref=e1165]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e1166]
                    - link "Recommended videos" [ref=e1169]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e1170]:
                    - generic:
                      - link "See more" [ref=e1171]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e1172]:
                        - button "More options" [ref=e1173]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e1175]:
                  - generic [ref=e1177]:
                    - generic [ref=e1179]:
                      - generic:
                        - article [ref=e1182]:
                          - generic [ref=e1183]:
                            - img "Crashed Chevrolet Corvette Z06 Sells for $26,250" [ref=e1185]
                            - generic [ref=e1187]: 22:44
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1188]:
                              - generic [ref=e1189]:
                                - img "Donut Media" [ref=e1190]
                                - generic [ref=e1191]:
                                  - generic:
                                    - generic "Donut Media" [ref=e1192]
                                    - generic [ref=e1193]: ·
                                    - generic [ref=e1194]: 5h
                              - link "Crashed Chevrolet Corvette Z06 sells for $26,250" [ref=e1195]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/crashed-chevrolet-corvette-z06-sells-for-26-250/vi-AA2geWGw?ocid=hpmsn
                                - heading "Crashed Chevrolet Corvette Z06 sells for $26,250" [level=2] [ref=e1196]:
                                  - generic: Crashed Chevrolet Corvette Z06 sells for $26,250
                            - button "See more" [ref=e1200]
                        - article [ref=e1203]:
                          - generic [ref=e1204]:
                            - img "Watch This 45-Tesla Monster Stop Metal Dead in Mid-Air" [ref=e1206]
                            - generic [ref=e1208]: 23:04
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1209]:
                              - generic [ref=e1210]:
                                - img "Veritasium" [ref=e1211]
                                - generic [ref=e1212]:
                                  - generic:
                                    - generic "Veritasium" [ref=e1213]
                                    - generic [ref=e1214]: ·
                                    - generic [ref=e1215]: 1w
                              - link "Watch this 45-tesla monster stop metal dead in mid-air" [ref=e1216]:
                                - /url: https://www.msn.com/en-in/science/general/watch-this-45-tesla-monster-stop-metal-dead-in-mid-air/vi-AA294Ee9?ocid=hpmsn
                                - heading "Watch this 45-tesla monster stop metal dead in mid-air" [level=2] [ref=e1217]:
                                  - generic: Watch this 45-tesla monster stop metal dead in mid-air
                            - button "See more" [ref=e1221]
                        - article "He was fooling around on the outside of the plane - then his grip suddenly slipped" [ref=e1224]:
                          - generic [ref=e1225]:
                            - img "He Was Fooling Around on the Outside of the Plane - Then His Grip Suddenly Slipped" [ref=e1227]
                            - generic [ref=e1229]: 28:36
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1230]:
                              - generic [ref=e1231]:
                                - img "Magnus Midtbø" [ref=e1232]
                                - generic [ref=e1233]:
                                  - generic:
                                    - generic "Magnus Midtbø" [ref=e1234]
                                    - generic [ref=e1235]: ·
                                    - generic [ref=e1236]: 7h
                              - link "He was fooling around on the outside of the plane - then his grip suddenly slipped" [ref=e1237]:
                                - /url: https://www.msn.com/en-in/travel/general/he-was-fooling-around-on-the-outside-of-the-plane-then-his-grip-suddenly-slipped/vi-AA2cc1qH?ocid=hpmsn
                                - heading "He was fooling around on the outside of the plane - then his grip suddenly slipped" [level=2] [ref=e1238]:
                                  - generic: He was fooling around on the outside of the plane - then his grip suddenly slipped
                            - button "See more" [ref=e1242]
                        - article "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [ref=e1245]:
                          - generic [ref=e1246]:
                            - img "Trevor Noah Breaks Down the Real Reason Idris Elba could NOT play James Bond Thumbnail" [ref=e1248]
                            - generic [ref=e1250]: 09:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1251]:
                              - generic [ref=e1252]:
                                - img "Trevor Noah" [ref=e1253]
                                - generic [ref=e1254]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1255]
                                    - generic [ref=e1256]: ·
                                    - generic [ref=e1257]: 1d
                              - link "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [ref=e1258]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/trevor-noah-breaks-down-the-real-reason-idris-elba-could-not-play-james-bond/vi-AA2gmMtD?ocid=hpmsn
                                - heading "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [level=2] [ref=e1259]:
                                  - generic: Trevor Noah breaks down the real reason Idris Elba could not play James Bond
                            - button "See more" [ref=e1263]
                        - article "Richard Hammond brings his 7.5-litre V8 Buick Riviera back to life" [ref=e1266]:
                          - generic [ref=e1267]:
                            - img "Richard Hammond Brings His 7.5-Litre V8 Buick Riviera Back to Life" [ref=e1269]
                            - generic [ref=e1271]: 08:03
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1272]:
                              - generic [ref=e1273]:
                                - img "DRIVETRIBE" [ref=e1274]
                                - generic [ref=e1275]:
                                  - generic:
                                    - generic "DRIVETRIBE" [ref=e1276]
                                    - generic [ref=e1277]: ·
                                    - generic [ref=e1278]: 2h
                              - link "Richard Hammond brings his 7.5-litre V8 Buick Riviera back to life" [ref=e1279]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/richard-hammond-brings-his-7-5-litre-v8-buick-riviera-back-to-life/vi-AA2gskxr?ocid=hpmsn
                                - heading "Richard Hammond brings his 7.5-litre V8 Buick Riviera back to life" [level=2] [ref=e1280]:
                                  - generic: Richard Hammond brings his 7.5-litre V8 Buick Riviera back to life
                            - button "See more" [ref=e1284]
                        - article "He looks like a regular guy... then he starts lifting things most strongmen can't" [ref=e1287]:
                          - generic [ref=e1288]:
                            - img "He Looks Like a Regular Guy... Then He Starts Lifting Things Most Strongmen Can’t" [ref=e1290]
                            - generic [ref=e1292]: 17:53
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1293]:
                              - generic [ref=e1294]:
                                - img "Magnus Midtbø" [ref=e1295]
                                - generic [ref=e1296]:
                                  - generic:
                                    - generic "Magnus Midtbø" [ref=e1297]
                                    - generic [ref=e1298]: ·
                                    - generic [ref=e1299]: 1d
                              - link "He looks like a regular guy... then he starts lifting things most strongmen can't" [ref=e1300]:
                                - /url: https://www.msn.com/en-in/health/fitness-and-exercise/he-looks-like-a-regular-guy-then-he-starts-lifting-things-most-strongmen-can-t/vi-AA2cFcEl?ocid=hpmsn
                                - heading "He looks like a regular guy... then he starts lifting things most strongmen can't" [level=2] [ref=e1301]:
                                  - generic: He looks like a regular guy... then he starts lifting things most strongmen can't
                            - button "See more" [ref=e1305]
                        - article "The 34-year experiment that turned plastic tubes into a living species" [ref=e1308]:
                          - generic [ref=e1309]:
                            - img "The 34-Year Experiment That Turned Plastic Tubes Into A Living “Species”" [ref=e1311]
                            - generic [ref=e1313]: 21:38
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1314]:
                              - generic [ref=e1315]:
                                - img "Veritasium" [ref=e1316]
                                - generic [ref=e1317]:
                                  - generic:
                                    - generic "Veritasium" [ref=e1318]
                                    - generic [ref=e1319]: ·
                                    - generic [ref=e1320]: 21h
                              - link "The 34-year experiment that turned plastic tubes into a living species" [ref=e1321]:
                                - /url: https://www.msn.com/en-in/technology/general/the-34-year-experiment-that-turned-plastic-tubes-into-a-living-species/vi-AA1Rg62t?ocid=hpmsn
                                - heading "The 34-year experiment that turned plastic tubes into a living species" [level=2] [ref=e1322]:
                                  - generic: The 34-year experiment that turned plastic tubes into a living species
                            - button "See more" [ref=e1326]
                        - article "Trevor Noah’s NYC debut - How a night of laughs turned into a deep reflection on race in America" [ref=e1329]:
                          - generic [ref=e1330]:
                            - img "Trevor Noah’s NYC Debut - How a Night of Laughs Turned into a Deep Reflection on Race in America Thumbnail" [ref=e1332]
                            - generic [ref=e1334]: 08:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1335]:
                              - generic [ref=e1336]:
                                - img "Trevor Noah" [ref=e1337]
                                - generic [ref=e1338]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1339]
                                    - generic [ref=e1340]: ·
                                    - generic [ref=e1341]: 3w
                              - link "Trevor Noah’s NYC debut - How a night of laughs turned into a deep reflection on race in America" [ref=e1342]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/trevor-noah-s-nyc-debut-how-a-night-of-laughs-turned-into-a-deep-reflection-on-race-in-america/vi-AA2dFE5z?ocid=hpmsn
                                - heading "Trevor Noah’s NYC debut - How a night of laughs turned into a deep reflection on race in America" [level=2] [ref=e1343]:
                                  - generic: Trevor Noah’s NYC debut - How a night of laughs turned into a deep reflection on race in America
                            - button "See more" [ref=e1347]
                        - article "The former Stig's Lancia Delta Integrale was an unexpected classic car bargain" [ref=e1350]:
                          - generic [ref=e1351]:
                            - img "The Former Stig's Lancia Delta Integrale Was an Unexpected Classic Car Bargain" [ref=e1353]
                            - generic [ref=e1355]: 18:35
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1356]:
                              - generic [ref=e1357]:
                                - img "DRIVETRIBE" [ref=e1358]
                                - generic [ref=e1359]:
                                  - generic:
                                    - generic "DRIVETRIBE" [ref=e1360]
                                    - generic [ref=e1361]: ·
                                    - generic [ref=e1362]: 4h
                              - link "The former Stig's Lancia Delta Integrale was an unexpected classic car bargain" [ref=e1363]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/the-former-stig-s-lancia-delta-integrale-was-an-unexpected-classic-car-bargain/vi-AA2grZPE?ocid=hpmsn
                                - heading "The former Stig's Lancia Delta Integrale was an unexpected classic car bargain" [level=2] [ref=e1364]:
                                  - generic: The former Stig's Lancia Delta Integrale was an unexpected classic car bargain
                            - button "See more" [ref=e1368]
                        - link "See more" [ref=e1370]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1371]
                          - text: See more
                    - button "next" [ref=e1375]:
                      - img [ref=e1378]
            - article "Ram Gopal Varma faces Rs 29.67 cr recovery notice, film industry warned against working with him" [ref=e1380] [cursor=pointer]:
              - generic [ref=e1382]:
                - img [ref=e1383]
                - generic [ref=e1384]:
                  - generic [ref=e1385]:
                    - generic [ref=e1386]:
                      - generic [ref=e1387]:
                        - img [ref=e1388]
                        - generic [ref=e1389]: The Indian Express
                      - generic [ref=e1390]: ·
                      - generic [ref=e1391]: 2h
                    - link "Ram Gopal Varma faces Rs 29.67 cr recovery notice, film industry warned against working with him, The Indian Express" [ref=e1392]:
                      - /url: https://www.msn.com/en-in/money/general/ram-gopal-varma-faces-rs-29-67-cr-recovery-notice-film-industry-warned-against-working-with-him/ar-AA2gtdR6
                      - text: Ram Gopal Varma faces Rs 29.67 cr recovery notice, film industry warned against working with him
                  - generic "Ram Gopal Varma faces Rs 29.67 cr recovery notice, film industry warned against working with him" [ref=e1395]:
                    - generic [ref=e1397]:
                      - generic [ref=e1398]:
                        - button "Like" [ref=e1399]:
                          - img [ref=e1401]
                        - button "Dislike" [ref=e1403]:
                          - img [ref=e1405]
                      - link "Start the conversation" [ref=e1408]:
                        - /url: https://www.msn.com/en-in/money/general/ram-gopal-varma-faces-rs-29-67-cr-recovery-notice-film-industry-warned-against-working-with-him/ar-AA2gtdR6#comments
                        - button "Start the conversation" [ref=e1409]:
                          - img [ref=e1410]
                - generic [ref=e1412]:
                  - button "Hide this story" [ref=e1413]:
                    - img [ref=e1414]
                    - text: Hide this story
                  - button "See more" [ref=e1415]:
                    - img [ref=e1416]
            - article "CJP's Abhijeet Dipke explains why he criticised Diljit Dosanjh after singer's fiery response, wants older brother to end row" [ref=e1417] [cursor=pointer]:
              - generic [ref=e1419]:
                - img [ref=e1420]
                - generic [ref=e1421]:
                  - generic [ref=e1422]:
                    - generic [ref=e1423]:
                      - generic [ref=e1424]:
                        - img [ref=e1425]
                        - generic [ref=e1426]: Hindustan Times
                      - generic [ref=e1427]: ·
                      - generic [ref=e1428]: 6h
                    - link "CJP's Abhijeet Dipke explains why he criticised Diljit Dosanjh after singer's fiery response, wants older brother to end row, Hindustan Times" [ref=e1429]:
                      - /url: https://www.msn.com/en-in/news/other/cjp-s-abhijeet-dipke-explains-why-he-criticised-diljit-dosanjh-after-singer-s-fiery-response-wants-older-brother-to-end-row/ar-AA2grZ4W
                      - text: CJP's Abhijeet Dipke explains why he criticised Diljit Dosanjh after singer's fiery response, wants older brother to end row
                  - generic "CJP's Abhijeet Dipke explains why he criticised Diljit Dosanjh after singer's fiery response, wants older brother to end row" [ref=e1432]:
                    - generic [ref=e1434]:
                      - generic [ref=e1435]:
                        - button "12 Likes" [ref=e1436]:
                          - generic [ref=e1437]:
                            - img [ref=e1438]
                            - generic [ref=e1440]: "12"
                        - button "Dislike" [ref=e1441]:
                          - img [ref=e1443]
                      - link "Start the conversation" [ref=e1446]:
                        - /url: https://www.msn.com/en-in/news/other/cjp-s-abhijeet-dipke-explains-why-he-criticised-diljit-dosanjh-after-singer-s-fiery-response-wants-older-brother-to-end-row/ar-AA2grZ4W#comments
                        - button "Start the conversation" [ref=e1447]:
                          - img [ref=e1448]
                - generic [ref=e1450]:
                  - button "Hide this story" [ref=e1451]:
                    - img [ref=e1452]
                    - text: Hide this story
                  - button "See more" [ref=e1453]:
                    - img [ref=e1454]
            - 'article "When Steve Jobs told Apple employees at a town hall: Nike sells shoes, but they never talk about…" [ref=e1455] [cursor=pointer]':
              - generic [ref=e1457]:
                - img [ref=e1458]
                - generic [ref=e1459]:
                  - generic [ref=e1460]:
                    - generic [ref=e1461]:
                      - generic [ref=e1462]:
                        - img [ref=e1463]
                        - generic [ref=e1464]: The Times of India
                      - generic [ref=e1465]: ·
                      - generic [ref=e1466]: 2w
                    - 'link "When Steve Jobs told Apple employees at a town hall: Nike sells shoes, but they never talk about…, The Times of India" [ref=e1467]':
                      - /url: https://www.msn.com/en-in/money/general/when-steve-jobs-told-apple-employees-at-a-town-hall-nike-sells-shoes-but-they-never-talk-about/ar-AA2epRVp
                      - text: "When Steve Jobs told Apple employees at a town hall: Nike sells shoes, but they never talk about…"
                  - 'generic "When Steve Jobs told Apple employees at a town hall: Nike sells shoes, but they never talk about…" [ref=e1470]':
                    - generic [ref=e1472]:
                      - generic [ref=e1473]:
                        - button "46 Likes" [ref=e1474]:
                          - generic [ref=e1475]:
                            - img [ref=e1476]
                            - generic [ref=e1478]: "46"
                        - button "Dislike" [ref=e1479]:
                          - img [ref=e1481]
                      - link "Start the conversation" [ref=e1484]:
                        - /url: https://www.msn.com/en-in/money/general/when-steve-jobs-told-apple-employees-at-a-town-hall-nike-sells-shoes-but-they-never-talk-about/ar-AA2epRVp#comments
                        - button "Start the conversation" [ref=e1485]:
                          - img [ref=e1486]
                - generic [ref=e1488]:
                  - button "Hide this story" [ref=e1489]:
                    - img [ref=e1490]
                    - text: Hide this story
                  - button "See more" [ref=e1491]:
                    - img [ref=e1492]
            - 'article "Ranabaali box office collection day 12: Rashmika Mandanna-Vijay Deverakonda film shows no growth, mints Rs 55 crore in India" [ref=e1493] [cursor=pointer]':
              - generic [ref=e1495]:
                - img [ref=e1496]
                - generic [ref=e1497]:
                  - generic [ref=e1498]:
                    - generic [ref=e1499]:
                      - generic [ref=e1500]:
                        - img [ref=e1501]
                        - generic [ref=e1502]: NDTV
                      - generic [ref=e1503]: ·
                      - generic [ref=e1504]: 3d
                    - 'link "Ranabaali box office collection day 12: Rashmika Mandanna-Vijay Deverakonda film shows no growth, mints Rs 55 crore in India, NDTV" [ref=e1505]':
                      - /url: https://www.msn.com/en-in/entertainment/movies/ranabaali-box-office-collection-day-12-rashmika-mandanna-vijay-deverakonda-film-shows-no-growth-mints-rs-55-crore-in-india/ar-AA2gdJKc
                      - text: "Ranabaali box office collection day 12: Rashmika Mandanna-Vijay Deverakonda film shows no growth, mints Rs 55 crore in India"
                  - 'generic "Ranabaali box office collection day 12: Rashmika Mandanna-Vijay Deverakonda film shows no growth, mints Rs 55 crore in India" [ref=e1508]':
                    - generic [ref=e1510]:
                      - generic [ref=e1511]:
                        - button "152 Likes" [ref=e1512]:
                          - generic [ref=e1513]:
                            - img [ref=e1514]
                            - generic [ref=e1516]: "152"
                        - button "Dislike" [ref=e1517]:
                          - img [ref=e1519]
                      - link "Start the conversation" [ref=e1522]:
                        - /url: https://www.msn.com/en-in/entertainment/movies/ranabaali-box-office-collection-day-12-rashmika-mandanna-vijay-deverakonda-film-shows-no-growth-mints-rs-55-crore-in-india/ar-AA2gdJKc#comments
                        - button "Start the conversation" [ref=e1523]:
                          - img [ref=e1524]
                - generic [ref=e1526]:
                  - button "Hide this story" [ref=e1527]:
                    - img [ref=e1528]
                    - text: Hide this story
                  - button "See more" [ref=e1529]:
                    - img [ref=e1530]
            - article "Meet Bhavitha Mandava, the Hyderabad-born architecture student who was discovered at a New York subway station" [ref=e1531] [cursor=pointer]:
              - generic [ref=e1533]:
                - img [ref=e1534]
                - generic [ref=e1535]:
                  - generic [ref=e1536]:
                    - generic [ref=e1537]:
                      - generic [ref=e1538]:
                        - img [ref=e1539]
                        - generic [ref=e1540]: The Times of India
                      - generic [ref=e1541]: ·
                      - generic [ref=e1542]: 18h
                    - link "Meet Bhavitha Mandava, the Hyderabad-born architecture student who was discovered at a New York subway station, The Times of India" [ref=e1543]:
                      - /url: https://www.msn.com/en-in/news/other/meet-bhavitha-mandava-the-hyderabad-born-architecture-student-who-was-discovered-at-a-new-york-subway-station/ar-AA2gqUpR
                      - text: Meet Bhavitha Mandava, the Hyderabad-born architecture student who was discovered at a New York subway station
                  - generic "Meet Bhavitha Mandava, the Hyderabad-born architecture student who was discovered at a New York subway station" [ref=e1546]:
                    - generic [ref=e1548]:
                      - generic [ref=e1549]:
                        - button "30 Likes" [ref=e1550]:
                          - generic [ref=e1551]:
                            - img [ref=e1552]
                            - generic [ref=e1554]: "30"
                        - button "Dislike" [ref=e1555]:
                          - img [ref=e1557]
                      - link "Start the conversation" [ref=e1560]:
                        - /url: https://www.msn.com/en-in/news/other/meet-bhavitha-mandava-the-hyderabad-born-architecture-student-who-was-discovered-at-a-new-york-subway-station/ar-AA2gqUpR#comments
                        - button "Start the conversation" [ref=e1561]:
                          - img [ref=e1562]
                - generic [ref=e1564]:
                  - button "Hide this story" [ref=e1565]:
                    - img [ref=e1566]
                    - text: Hide this story
                  - button "See more" [ref=e1567]:
                    - img [ref=e1568]
            - article "'Ramayana' draws mixed early reviews; 'Godzilla Minus Zero' wins rave reviews ahead of box office clash" [ref=e1569] [cursor=pointer]:
              - generic [ref=e1571]:
                - img [ref=e1572]
                - generic [ref=e1573]:
                  - generic [ref=e1574]:
                    - generic [ref=e1575]:
                      - generic [ref=e1576]:
                        - img [ref=e1577]
                        - generic [ref=e1578]: The Times of India
                      - generic [ref=e1579]: ·
                      - generic [ref=e1580]: 8h
                    - link "'Ramayana' draws mixed early reviews; 'Godzilla Minus Zero' wins rave reviews ahead of box office clash, The Times of India" [ref=e1581]:
                      - /url: https://www.msn.com/en-in/entertainment/movies/ramayana-draws-mixed-early-reviews-godzilla-minus-zero-wins-rave-reviews-ahead-of-box-office-clash/ar-AA2gssyM
                      - text: "'Ramayana' draws mixed early reviews; 'Godzilla Minus Zero' wins rave reviews ahead of box office clash"
                  - generic "'Ramayana' draws mixed early reviews; 'Godzilla Minus Zero' wins rave reviews ahead of box office clash" [ref=e1584]:
                    - generic [ref=e1586]:
                      - generic [ref=e1587]:
                        - button "21 Likes" [ref=e1588]:
                          - generic [ref=e1589]:
                            - img [ref=e1590]
                            - generic [ref=e1592]: "21"
                        - button "Dislike" [ref=e1593]:
                          - img [ref=e1595]
                      - link "Start the conversation" [ref=e1598]:
                        - /url: https://www.msn.com/en-in/entertainment/movies/ramayana-draws-mixed-early-reviews-godzilla-minus-zero-wins-rave-reviews-ahead-of-box-office-clash/ar-AA2gssyM#comments
                        - button "Start the conversation" [ref=e1599]:
                          - img [ref=e1600]
                - generic [ref=e1602]:
                  - button "Hide this story" [ref=e1603]:
                    - img [ref=e1604]
                    - text: Hide this story
                  - button "See more" [ref=e1605]:
                    - img [ref=e1606]
            - article "Do you often see 11:11? Here's why many believe it's more than a coincidence" [ref=e1607] [cursor=pointer]:
              - generic [ref=e1609]:
                - img [ref=e1610]
                - generic [ref=e1611]:
                  - generic [ref=e1612]:
                    - generic [ref=e1614]:
                      - img [ref=e1615]
                      - generic [ref=e1616]: News18
                    - link "Do you often see 11:11? Here's why many believe it's more than a coincidence, News18" [ref=e1617]:
                      - /url: https://www.msn.com/en-in/news/other/do-you-often-see-11-11-here-s-why-many-believe-it-s-more-than-a-coincidence/ss-AA28b6IT
                      - text: Do you often see 11:11? Here's why many believe it's more than a coincidence
                  - generic "Do you often see 11:11? Here's why many believe it's more than a coincidence" [ref=e1620]:
                    - generic [ref=e1622]:
                      - generic [ref=e1623]:
                        - button "2,977 Likes" [ref=e1624]:
                          - generic [ref=e1625]:
                            - img [ref=e1626]
                            - generic [ref=e1628]: 3k
                        - button "Dislike" [ref=e1629]:
                          - img [ref=e1631]
                      - link "View comments 5 Comment" [ref=e1634]:
                        - /url: https://www.msn.com/en-in/news/other/do-you-often-see-11-11-here-s-why-many-believe-it-s-more-than-a-coincidence/ss-AA28b6IT#comments
                        - button "View comments 5 Comment" [ref=e1635]:
                          - img [ref=e1636]
                        - generic [ref=e1638]: "5"
                - generic [ref=e1639]:
                  - button "Hide this story" [ref=e1640]:
                    - img [ref=e1641]
                    - text: Hide this story
                  - button "See more" [ref=e1642]:
                    - img [ref=e1643]
            - article "5 South stars whose impressive educational degrees may surprise you" [ref=e1644] [cursor=pointer]:
              - generic [ref=e1646]:
                - img [ref=e1647]
                - generic [ref=e1648]:
                  - generic [ref=e1649]:
                    - generic [ref=e1651]:
                      - img [ref=e1652]
                      - generic [ref=e1653]: The Times of India
                    - link "5 South stars whose impressive educational degrees may surprise you, The Times of India" [ref=e1654]:
                      - /url: https://www.msn.com/en-in/news/other/5-south-stars-whose-impressive-educational-degrees-may-surprise-you/ar-AA2d7y6U
                      - text: 5 South stars whose impressive educational degrees may surprise you
                  - generic "5 South stars whose impressive educational degrees may surprise you" [ref=e1657]:
                    - generic [ref=e1659]:
                      - generic [ref=e1660]:
                        - button "901 Likes" [ref=e1661]:
                          - generic [ref=e1662]:
                            - img [ref=e1663]
                            - generic [ref=e1665]: "901"
                        - button "Dislike" [ref=e1666]:
                          - img [ref=e1668]
                      - link "View comments 14 Comment" [ref=e1671]:
                        - /url: https://www.msn.com/en-in/news/other/5-south-stars-whose-impressive-educational-degrees-may-surprise-you/ar-AA2d7y6U#comments
                        - button "View comments 14 Comment" [ref=e1672]:
                          - img [ref=e1673]
                        - generic [ref=e1675]: "14"
                - generic [ref=e1676]:
                  - button "Hide this story" [ref=e1677]:
                    - img [ref=e1678]
                    - text: Hide this story
                  - button "See more" [ref=e1679]:
                    - img [ref=e1680]
    - contentinfo [ref=e1683]:
      - generic "Feedback" [ref=e1685] [cursor=pointer]:
        - button "Feedback" [ref=e1686]:
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