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
        - 'link "Phoenix: Clear, 14 °C" [ref=e26] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona?loc=eyJsIjoiUGhvZW5peCIsInIiOiJBcml6b25hIiwiYyI6IlVuaXRlZCBTdGF0ZXMiLCJpIjoiVVMiLCJnIjoiZW4taW4iLCJ4IjotMTEyLjA3MTU2MzcyMDcwMzEyLCJ5IjozMy40NTY1NzM0ODYzMjgxMjV9&weadegreetype=C&ocid=msnheader&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333
          - img "Clear" [ref=e28]
          - generic [ref=e29]:
            - generic [ref=e30]: ‎14‎
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
                - tab "News story" [ref=e263] [cursor=pointer]
                - tab "News story" [ref=e265] [cursor=pointer]
                - tab "News story" [ref=e267] [cursor=pointer]
                - tab "Sponsored" [ref=e269] [cursor=pointer]
                - tab "News story" [ref=e271] [cursor=pointer]
                - tab "News story" [ref=e273] [cursor=pointer]
              - button [ref=e277]
              - button [ref=e280]
              - article "Tirzepatide Is Finally Affordable Now" [ref=e281] [cursor=pointer]:
                - generic [ref=e283]:
                  - img [ref=e284]
                  - generic [ref=e285]:
                    - generic [ref=e286]:
                      - generic [ref=e289]: GLP-1 Meds
                      - link "Tirzepatide Is Finally Affordable Now, GLP-1 Meds" [ref=e290]:
                        - /url: https://www.bing.com/api/v2/mediation/tracking?d=UsxCqFuSflcKjEhetA3AJLEpOFJfgdiNO1P4jyyMYOwcTyfP2kRbK-orZ72B6-EO0t0ORTlMaifdMB5aAaQS6S_QRfMKJOIXKiT1V1FShxsziOF6qmFZU0zGK-fw2ePffdxah9MSy2T6yuZkmKa0WUt-aKZseQnecVUcARojT05tIj-odm5ykh2CmAKVazeH-crt2xDWQr9bNmX2mdYhiQ9_g7JKesBA7vlgoTPPMFPwfMsFTY7wTCyr3_V6auqJkeH3wdhrwwxM2W8RVdmL5chzxs1aDHgnpKRQ2VnUVW-SCRk8XuFmAqonXhL-q-92k7nm&e=1&n=vLBmhJrAXIfRz73-&rId=6557ec7f-0dc3-4ceb-90ef-d402b4c1b537&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8s-btbXY-6zCejyI3XusczDVUCUzR9ZbnuoBl8R5qJfg47KpwdiTfJ42f8k-M6yxZpLKxrGVy4-SnY-ybtxu2JcB_8w_dno-k7178CJQB6sECg5ueYT0NB6Ph8LCzETlh0i8kLaWr0QU_vO-BOGOaRRsVw90jB76EOf5fDX8ViZw9dsOPKb2pHBU6AyyV3BXGNCxH0iMaPX04GTF3wIaLeyv0tN0%26u%3DaHR0cHMlM2ElMmYlMmZkaXJlY3RtZWRzLmNvbSUyZmRtLW9mZmVycy1zdGMlMmYlM2ZvaWQlM2QxMiUyNnVpZCUzZDYxJTI2YWZmaWQlM2QxODMlMjZzb3VyY2VfaWQlM2RtaWNyb3NvZnQlMjZzdWIxJTNkbWljcm9zb2Z0JTI2c3ViMiUzZDQ4ODMwODMyOSUyNnN1YjMlM2QxMjI3MDU2NjE5Njc1NjUwJTI2c3ViNCUzZDc2NjkxMTg0MDUxMjYyJTI2c3ViNSUzZDQ3YmNkMzg3ODczNzE4NDVmZTlkYjk2ZTM4Y2UyMWQzJTI2c3ViNiUzZGJpbmclMjZtc2Nsa2lkJTNkNDdiY2QzODc4NzM3MTg0NWZlOWRiOTZlMzhjZTIxZDM%26rlid%3D47bcd38787371845fe9db96e38ce21d3&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                        - text: Tirzepatide Is Finally Affordable Now
                    - link "Sponsored" [ref=e292]:
                      - /url: https://www.bing.com/api/v2/mediation/tracking?d=UsxCqFuSflcKjEhetA3AJLEpOFJfgdiNO1P4jyyMYOwcTyfP2kRbK-orZ72B6-EO0t0ORTlMaifdMB5aAaQS6S_QRfMKJOIXKiT1V1FShxsziOF6qmFZU0zGK-fw2ePffdxah9MSy2T6yuZkmKa0WUt-aKZseQnecVUcARojT05tIj-odm5ykh2CmAKVazeH-crt2xDWQr9bNmX2mdYhiQ9_g7JKesBA7vlgoTPPMFPwfMsFTY7wTCyr3_V6auqJkeH3wdhrwwxM2W8RVdmL5chzxs1aDHgnpKRQ2VnUVW-SCRk8XuFmAqonXhL-q-92k7nm&e=1&n=vLBmhJrAXIfRz73-&rId=6557ec7f-0dc3-4ceb-90ef-d402b4c1b537&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8s-btbXY-6zCejyI3XusczDVUCUzR9ZbnuoBl8R5qJfg47KpwdiTfJ42f8k-M6yxZpLKxrGVy4-SnY-ybtxu2JcB_8w_dno-k7178CJQB6sECg5ueYT0NB6Ph8LCzETlh0i8kLaWr0QU_vO-BOGOaRRsVw90jB76EOf5fDX8ViZw9dsOPKb2pHBU6AyyV3BXGNCxH0iMaPX04GTF3wIaLeyv0tN0%26u%3DaHR0cHMlM2ElMmYlMmZkaXJlY3RtZWRzLmNvbSUyZmRtLW9mZmVycy1zdGMlMmYlM2ZvaWQlM2QxMiUyNnVpZCUzZDYxJTI2YWZmaWQlM2QxODMlMjZzb3VyY2VfaWQlM2RtaWNyb3NvZnQlMjZzdWIxJTNkbWljcm9zb2Z0JTI2c3ViMiUzZDQ4ODMwODMyOSUyNnN1YjMlM2QxMjI3MDU2NjE5Njc1NjUwJTI2c3ViNCUzZDc2NjkxMTg0MDUxMjYyJTI2c3ViNSUzZDQ3YmNkMzg3ODczNzE4NDVmZTlkYjk2ZTM4Y2UyMWQzJTI2c3ViNiUzZGJpbmclMjZtc2Nsa2lkJTNkNDdiY2QzODc4NzM3MTg0NWZlOWRiOTZlMzhjZTIxZDM%26rlid%3D47bcd38787371845fe9db96e38ce21d3&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                  - button "See more" [ref=e294]:
                    - img [ref=e295]
            - 'article "I lost 3 years of my professional life at Zoho: Techie''s viral post sparks debate" [ref=e296] [cursor=pointer]':
              - generic [ref=e298]:
                - img [ref=e299]
                - generic [ref=e300]:
                  - generic [ref=e301]:
                    - generic [ref=e302]:
                      - generic [ref=e303]:
                        - img [ref=e304]
                        - generic [ref=e305]: NDTV
                      - generic [ref=e306]: ·
                      - generic [ref=e307]: 5h
                    - 'link "I lost 3 years of my professional life at Zoho: Techie''s viral post sparks debate, NDTV" [ref=e308]':
                      - /url: https://www.msn.com/en-in/news/other/i-lost-3-years-of-my-professional-life-at-zoho-techie-s-viral-post-sparks-debate/ar-AA2gE7RA
                      - text: "I lost 3 years of my professional life at Zoho: Techie's viral post sparks debate"
                  - 'generic "I lost 3 years of my professional life at Zoho: Techie''s viral post sparks debate" [ref=e311]':
                    - generic [ref=e313]:
                      - generic [ref=e314]:
                        - button "4 Likes" [ref=e315]:
                          - generic [ref=e316]:
                            - img [ref=e317]
                            - generic [ref=e319]: "4"
                        - button "Dislike" [ref=e320]:
                          - img [ref=e322]
                      - link "Start the conversation" [ref=e325]:
                        - /url: https://www.msn.com/en-in/news/other/i-lost-3-years-of-my-professional-life-at-zoho-techie-s-viral-post-sparks-debate/ar-AA2gE7RA#comments
                        - button "Start the conversation" [ref=e326]:
                          - img [ref=e327]
                - generic [ref=e329]:
                  - button "Hide this story" [ref=e330]:
                    - img [ref=e331]
                    - text: Hide this story
                  - button "See more" [ref=e332]:
                    - img [ref=e333]
            - article [ref=e334] [cursor=pointer]:
              - generic [ref=e338]:
                - generic: Sponsored
            - article [ref=e339] [cursor=pointer]:
              - generic [ref=e344]:
                - generic [ref=e346]:
                  - link "Top stories" [ref=e348]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e349]
                  - button "More options" [ref=e351]
                - list [ref=e354]:
                  - listitem [ref=e355]:
                    - 'link "Press Trust of India now Dia Mirza video row: Congress demands BJP''s apology, action against BMC officials" [ref=e356]':
                      - /url: https://www.msn.com/en-in/news/other/dia-mirza-video-row-congress-demands-bjp-s-apology-action-against-bmc-officials/ar-AA2gEnm2
                      - generic [ref=e357]:
                        - generic [ref=e358]:
                          - img [ref=e359]
                          - generic [ref=e360]:
                            - generic: Press Trust of India ·now
                        - generic [ref=e361]: "Dia Mirza video row: Congress demands BJP's apology, action against BMC officials"
                  - listitem [ref=e362]:
                    - link "Hindustan Times 4h Technical snag suspected after 2 helicopters collide near Everest Base Camp" [ref=e363]:
                      - /url: https://www.msn.com/en-in/news/other/technical-snag-suspected-after-2-helicopters-collide-near-everest-base-camp/ar-AA2gEif7
                      - generic [ref=e364]:
                        - generic [ref=e365]:
                          - img [ref=e366]
                          - generic [ref=e367]:
                            - generic: Hindustan Times ·4h
                        - generic [ref=e368]: Technical snag suspected after 2 helicopters collide near Everest Base Camp
                  - listitem [ref=e369]:
                    - 'link "NDTV 1h Can''t occupy a site indefinitely in name of protest: Top Court''s big remark" [ref=e370]':
                      - /url: https://www.msn.com/en-in/news/other/can-t-occupy-a-site-indefinitely-in-name-of-protest-top-court-s-big-remark/ar-AA2gDx9h
                      - generic [ref=e371]:
                        - generic [ref=e372]:
                          - img [ref=e373]
                          - generic [ref=e374]:
                            - generic: NDTV ·1h
                        - generic [ref=e375]: "Can't occupy a site indefinitely in name of protest: Top Court's big remark"
                - generic [ref=e377]:
                  - generic [ref=e378]:
                    - generic "Previous" [ref=e379]:
                      - button "Previous" [ref=e380]
                    - tablist [ref=e382]:
                      - tab "Page 1" [selected] [ref=e383]
                      - tab "Page 2" [ref=e385]
                      - tab "Page 3" [ref=e387]
                    - generic "Next" [ref=e389]:
                      - button "Next" [ref=e390]
                  - link "See more" [ref=e392]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&ocid=hpmsn
            - article "This Tool Makes Traveling Cheaper" [ref=e393] [cursor=pointer]:
              - generic [ref=e395]:
                - img [ref=e396]
                - generic [ref=e397]:
                  - generic [ref=e398]:
                    - generic [ref=e401]: onlineshoppingtools.com
                    - link "This Tool Makes Traveling Cheaper, onlineshoppingtools.com" [ref=e402]:
                      - /url: https://www.bing.com/api/v2/mediation/tracking?d=ptLgEJu7Py5GFhriQQZ7BmlbJMWnP242J63erOT2Fts_hOowu_EFRSrv2UIQ6XZyYa3-JbirxcW0OjJSQtPCkvTdOFvNaYRIGk0EahflBBYNhRWaPI0Sx1K_pUF1vupCXuloYrBEIgGAk696BjGGDzFi4_ZzFXPHc8qsZbbFvddmHEWtI-KSw77YeiBjGJarbWg3xYp_0dzrb-W9ncWcNTxFT3pd5g36OiTBpsiz_lsIfFe8Y2N19MCGZ4BqBTcqHBv1OcFFnTDUGQkXJuuPctxyjHVAN0_9emI-DSE5SyCys4I123Zs8WoGIRcG7VAC&e=1&n=jwk2YQ-NbuN5YRS0&rId=6557ec7f-0dc3-4ceb-90ef-d402b4c1b537&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8BfPGDCDPvVldJs0ujyePYDVUCUzO2MxHWqOAfejd_sjZw8vqj-v5CcoUkpZZM6d2amlRMIdRhT5epRjqMgsQHnaqcZ3sHats7Zri-wEiNGOKa3atJFMuep_nem_00BaU9Px7oZ4ziyhec-voHXSMIFe7Xfmin5z0Bipj9tNUwYxSjWtBokdhS8a-_J24mcjgaekZZEwkWDkZzugSSYu06RfXNZE%26u%3DaHR0cHMlM2ElMmYlMmZnby5vbmxpbmVzaG9wcGluZ3Rvb2xzLmNvbSUyZjE0JTJmMTcyNDQlM2ZkcyUzZDE0JTI2Y2FtcGFpZ24lM2Q2Nzg4MDY4MDElMjZhZGdyb3VwJTNkMTE2NjU4MzgwNjQ2Njg1OSUyNmNyZWF0aXZlJTNkNzI5MTE4NDExMDA0OTklMjZwdWJsaXNoZXIlM2RhJTI2c291cmNlJTNka3dkLTIzMjQ3MTExODA1MTg3MDglM2Fsb2MtMTkwJTI2ZGV2aWNlJTNkYyUyNnBvc3RiYWNrJTNkMTVlNDVhNjBkODQzMWExZThiNTAzMDg5NjdiYTM1OGMlMjZtc2Nsa2lkJTNkMTVlNDVhNjBkODQzMWExZThiNTAzMDg5NjdiYTM1OGM%26rlid%3D15e45a60d8431a1e8b50308967ba358c&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                      - text: This Tool Makes Traveling Cheaper
                  - link "Sponsored" [ref=e404]:
                    - /url: https://www.bing.com/api/v2/mediation/tracking?d=ptLgEJu7Py5GFhriQQZ7BmlbJMWnP242J63erOT2Fts_hOowu_EFRSrv2UIQ6XZyYa3-JbirxcW0OjJSQtPCkvTdOFvNaYRIGk0EahflBBYNhRWaPI0Sx1K_pUF1vupCXuloYrBEIgGAk696BjGGDzFi4_ZzFXPHc8qsZbbFvddmHEWtI-KSw77YeiBjGJarbWg3xYp_0dzrb-W9ncWcNTxFT3pd5g36OiTBpsiz_lsIfFe8Y2N19MCGZ4BqBTcqHBv1OcFFnTDUGQkXJuuPctxyjHVAN0_9emI-DSE5SyCys4I123Zs8WoGIRcG7VAC&e=1&n=jwk2YQ-NbuN5YRS0&rId=6557ec7f-0dc3-4ceb-90ef-d402b4c1b537&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8BfPGDCDPvVldJs0ujyePYDVUCUzO2MxHWqOAfejd_sjZw8vqj-v5CcoUkpZZM6d2amlRMIdRhT5epRjqMgsQHnaqcZ3sHats7Zri-wEiNGOKa3atJFMuep_nem_00BaU9Px7oZ4ziyhec-voHXSMIFe7Xfmin5z0Bipj9tNUwYxSjWtBokdhS8a-_J24mcjgaekZZEwkWDkZzugSSYu06RfXNZE%26u%3DaHR0cHMlM2ElMmYlMmZnby5vbmxpbmVzaG9wcGluZ3Rvb2xzLmNvbSUyZjE0JTJmMTcyNDQlM2ZkcyUzZDE0JTI2Y2FtcGFpZ24lM2Q2Nzg4MDY4MDElMjZhZGdyb3VwJTNkMTE2NjU4MzgwNjQ2Njg1OSUyNmNyZWF0aXZlJTNkNzI5MTE4NDExMDA0OTklMjZwdWJsaXNoZXIlM2RhJTI2c291cmNlJTNka3dkLTIzMjQ3MTExODA1MTg3MDglM2Fsb2MtMTkwJTI2ZGV2aWNlJTNkYyUyNnBvc3RiYWNrJTNkMTVlNDVhNjBkODQzMWExZThiNTAzMDg5NjdiYTM1OGMlMjZtc2Nsa2lkJTNkMTVlNDVhNjBkODQzMWExZThiNTAzMDg5NjdiYTM1OGM%26rlid%3D15e45a60d8431a1e8b50308967ba358c&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                - button "See more" [ref=e406]:
                  - img [ref=e407]
            - article "Why you should throw a water bottle under your hotel bed, 99% guests skip this safety trick" [ref=e408] [cursor=pointer]:
              - generic [ref=e410]:
                - img [ref=e411]
                - generic [ref=e412]:
                  - generic [ref=e413]:
                    - generic [ref=e415]:
                      - img [ref=e416]
                      - generic [ref=e417]: News18
                    - link "Why you should throw a water bottle under your hotel bed, 99% guests skip this safety trick, News18" [ref=e418]:
                      - /url: https://www.msn.com/en-in/news/other/why-you-should-throw-a-water-bottle-under-your-hotel-bed-99-guests-skip-this-safety-trick/ss-AA25MEe4
                      - text: Why you should throw a water bottle under your hotel bed, 99% guests skip this safety trick
                  - generic "Why you should throw a water bottle under your hotel bed, 99% guests skip this safety trick" [ref=e421]:
                    - generic [ref=e423]:
                      - generic [ref=e424]:
                        - button "106 Likes" [ref=e425]:
                          - generic [ref=e426]:
                            - img [ref=e427]
                            - generic [ref=e429]: "106"
                        - button "Dislike" [ref=e430]:
                          - img [ref=e432]
                      - link "View comments 12 Comment" [ref=e435]:
                        - /url: https://www.msn.com/en-in/news/other/why-you-should-throw-a-water-bottle-under-your-hotel-bed-99-guests-skip-this-safety-trick/ss-AA25MEe4#comments
                        - button "View comments 12 Comment" [ref=e436]:
                          - img [ref=e437]
                        - generic [ref=e439]: "12"
                - generic [ref=e440]:
                  - button "Hide this story" [ref=e441]:
                    - img [ref=e442]
                    - text: Hide this story
                  - button "See more" [ref=e443]:
                    - img [ref=e444]
            - article [ref=e445] [cursor=pointer]:
              - generic [ref=e451]:
                - generic [ref=e453]:
                  - link "Phoenix" [ref=e455]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona?loc=eyJsIjoiUGhvZW5peCIsInIiOiJBcml6b25hIiwiYyI6IlVuaXRlZCBTdGF0ZXMiLCJpIjoiVVMiLCJnIjoiZW4taW4iLCJ4IjotMTEyLjA3MTU2MzcyMDcwMzEyLCJ5IjozMy40NTY1NzM0ODYzMjgxMjV9&weadegreetype=C&ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&content=AQICard_wxaqi
                    - heading "Phoenix" [level=2] [ref=e456]
                  - button "My location" [ref=e457]
                  - button "More options" [ref=e459]
                - generic [ref=e463]:
                  - generic [ref=e464]:
                    - generic [ref=e466]:
                      - link "Clear" [ref=e467]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona?loc=eyJsIjoiUGhvZW5peCIsInIiOiJBcml6b25hIiwiYyI6IlVuaXRlZCBTdGF0ZXMiLCJpIjoiVVMiLCJnIjoiZW4taW4iLCJ4IjotMTEyLjA3MTU2MzcyMDcwMzEyLCJ5IjozMy40NTY1NzM0ODYzMjgxMjV9&weadegreetype=C&ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&content=AQICard_wxaqi
                        - img "Clear" [ref=e468]
                      - link "14°C" [ref=e469]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona?loc=eyJsIjoiUGhvZW5peCIsInIiOiJBcml6b25hIiwiYyI6IlVuaXRlZCBTdGF0ZXMiLCJpIjoiVVMiLCJnIjoiZW4taW4iLCJ4IjotMTEyLjA3MTU2MzcyMDcwMzEyLCJ5IjozMy40NTY1NzM0ODYzMjgxMjV9&weadegreetype=C&ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&content=AQICard_wxaqi
                        - generic [ref=e470]: ‎14‎
                        - generic [ref=e472]: ‎°C‎
                    - generic [ref=e474]:
                      - link "Good air quality" [ref=e476]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona?loc=eyJsIjoiUGhvZW5peCIsInIiOiJBcml6b25hIiwiYyI6IlVuaXRlZCBTdGF0ZXMiLCJpIjoiVVMiLCJnIjoiZW4taW4iLCJ4IjotMTEyLjA3MTU2MzcyMDcwMzEyLCJ5IjozMy40NTY1NzM0ODYzMjgxMjV9&weadegreetype=C&ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&fcsttab=airquality
                        - text: Good air quality
                      - link "See full forecast" [ref=e478]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Phoenix,Arizona?loc=eyJsIjoiUGhvZW5peCIsInIiOiJBcml6b25hIiwiYyI6IlVuaXRlZCBTdGF0ZXMiLCJpIjoiVVMiLCJnIjoiZW4taW4iLCJ4IjotMTEyLjA3MTU2MzcyMDcwMzEyLCJ5IjozMy40NTY1NzM0ODYzMjgxMjV9&weadegreetype=C&ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&fcsttab=airquality
                        - img "arrow" [ref=e479]
                  - generic [ref=e484]:
                    - link "Larger map" [ref=e485]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Phoenix,Arizona?loc=eyJsIjoiUGhvZW5peCIsInIiOiJBcml6b25hIiwiYyI6IlVuaXRlZCBTdGF0ZXMiLCJpIjoiVVMiLCJnIjoiZW4taW4iLCJ4IjotMTEyLjA3MTU2MzcyMDcwMzEyLCJ5IjozMy40NTY1NzM0ODYzMjgxMjV9&weadegreetype=C&ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&content=AQICard_wxaqi&zoom=8
                      - generic [ref=e486]:
                        - generic:
                          - generic:
                            - img
                            - img
                            - img
                            - img
                      - img
                    - link "Check global air quality" [ref=e487]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Phoenix,Arizona?loc=eyJsIjoiUGhvZW5peCIsInIiOiJBcml6b25hIiwiYyI6IlVuaXRlZCBTdGF0ZXMiLCJpIjoiVVMiLCJnIjoiZW4taW4iLCJ4IjotMTEyLjA3MTU2MzcyMDcwMzEyLCJ5IjozMy40NTY1NzM0ODYzMjgxMjV9&weadegreetype=C&ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&content=AQICard_wxaqi&zoom=8
                      - img [ref=e489]
                      - generic "Check global air quality" [ref=e490]
                      - img [ref=e492]
                - button "See full forecast" [ref=e495]
            - 'article "''We are going to crash'': 20-year-old Learjet pilot''s final words on audio, texted boyfriend 10 minutes earlier" [ref=e496] [cursor=pointer]':
              - generic [ref=e498]:
                - img [ref=e499]
                - generic [ref=e500]:
                  - generic [ref=e501]:
                    - generic [ref=e502]:
                      - generic [ref=e503]:
                        - img [ref=e504]
                        - generic [ref=e505]: Times Now
                      - generic [ref=e506]: ·
                      - generic [ref=e507]: 4h
                    - 'link "''We are going to crash'': 20-year-old Learjet pilot''s final words on audio, texted boyfriend 10 minutes earlier, Times Now" [ref=e508]':
                      - /url: https://www.msn.com/en-in/news/other/we-are-going-to-crash-20-year-old-learjet-pilot-s-final-words-on-audio-texted-boyfriend-10-minutes-earlier/ar-AA2gDQtf
                      - text: "'We are going to crash': 20-year-old Learjet pilot's final words on audio, texted boyfriend 10 minutes earlier"
                  - 'generic "''We are going to crash'': 20-year-old Learjet pilot''s final words on audio, texted boyfriend 10 minutes earlier" [ref=e511]':
                    - generic [ref=e513]:
                      - generic [ref=e514]:
                        - button "23 Likes" [ref=e515]:
                          - generic [ref=e516]:
                            - img [ref=e517]
                            - generic [ref=e519]: "23"
                        - button "Dislike" [ref=e520]:
                          - img [ref=e522]
                      - link "View comments 1 Comment" [ref=e525]:
                        - /url: https://www.msn.com/en-in/news/other/we-are-going-to-crash-20-year-old-learjet-pilot-s-final-words-on-audio-texted-boyfriend-10-minutes-earlier/ar-AA2gDQtf#comments
                        - button "View comments 1 Comment" [ref=e526]:
                          - img [ref=e527]
                        - generic [ref=e529]: "1"
                - generic [ref=e530]:
                  - button "Hide this story" [ref=e531]:
                    - img [ref=e532]
                    - text: Hide this story
                  - button "See more" [ref=e533]:
                    - img [ref=e534]
            - article "London Car Service - Professional Chauffeurs - All-Inclusive Rates" [ref=e535] [cursor=pointer]:
              - generic [ref=e537]:
                - img [ref=e538]
                - generic [ref=e539]:
                  - generic [ref=e540]:
                    - generic [ref=e543]: Blacklane
                    - link "London Car Service - Professional Chauffeurs - All-Inclusive Rates, Blacklane" [ref=e544]:
                      - /url: https://www.bing.com/api/v2/mediation/tracking?d=x57g5lBwb4wLB6k0SJ-4UEJkQjg3DG80-2MMgIplxSxY4lsDqRy8p2wzL8UeEWRQ8ud306yBC_CfpCwb9DKD2nTAVzxLfvKXgg91zXgudost2DIrE8HuU3d153Xi8I40Xda6heNp38_J0lL-Rwv4aJKgyMVhtr4Xl0n7xJruCclfXAgz84KkYNGX5A0HM2C4CXOOdpm1xMZWsnQXVLaCzMw09hk0eTftCkYWVO76yncPOtvsSEqq3XTvsD03c7gfja4QMgyeOnw_dJhqt4tyFNAn8LJuMONjpKs_azqNXA2MDCvMM140aOCTVAkk__Yn&e=1&n=bm51y_3X78cS1XTs&rId=6557ec7f-0dc3-4ceb-90ef-d402b4c1b537&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8JMoomTjSU95UJVDoWGwQPzVUCUwCoiNv5DkpJKb3fkizqFWB31iNEXmZ5mdlzXaJhiC4xkTfEBXVN1QUeQ4TLc4uHY2ivSMmAvGMUC-aS2TlinU0DVfx4NE3xX4YftsDscu19VYGaaS2PKIMTafa88PqDhgEVQIkwpBQpkyO27xeUMRhfjm-KgPhCjVI4k5AB0v5aZhv6_UuYDUXJK1eC6UxTck%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuYmxhY2tsYW5lLmNvbSUyZmVuJTJmY291bnRyaWVzJTJmdWslMmZsb25kb24lMmYlM2Z1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZkZXZpY2UlM2RjJTI2dXRtX2NhbXBhaWduX2lkJTNkNDQ2MTE2OTc4JTI2dXRtX2FkZ3JvdXBfaWQlM2QxMTY1NDg0MTQ5NTM4NTA2JTI2bmV0d29yayUzZGElMjZsb2NfcGh5c2ljYWxfbXMlM2Q3ODA3MyUyNmFkcG9zaXRpb24lM2QlMjZmZWVkaXRlbWlkJTNkJTI2dGFyZ2V0aWQlM2Rrd2QtNzI4NDM0NDI4MjAzMDMlMjZ1dG1fY2FtcGFpZ24lM2RTZWFyY2glMjUyMEVOJTI1MjAtJTI1MjBHQi1MT04lMjUyMC0lMjUyMExvbmRvbiUyNnV0bV9hZGdyb3VwJTNkVDAxJTI1MjAtJTI1MjBHQi1MT04lMjUyMC0lMjUyMExvbmRvbiUyNTIwLSUyNTIwQ2FyJTI2dXRtX2NvbnRlbnQlM2RjYXItc2VydmljZSUyNnV0bV9hY2NvdW50JTNkQmxhY2tsYW5lJTI1MjAtJTI1MjBOb24tQnJhbmQlMjZ1dG1fdGVybSUzZGV4ZWN1dGl2ZSUyNTIwY2FyJTI1MjBsb25kb24lMjZtYXRjaHR5cGUlM2RlJTI2bXNjbGtpZCUzZDIwYjAwY2FkNzhhYTE0ZjJhZjViNjY0NGM3NTMyZTgy%26rlid%3D20b00cad78aa14f2af5b6644c7532e82&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                      - text: London Car Service - Professional Chauffeurs - All-Inclusive Rates
                  - link "Sponsored" [ref=e546]:
                    - /url: https://www.bing.com/api/v2/mediation/tracking?d=x57g5lBwb4wLB6k0SJ-4UEJkQjg3DG80-2MMgIplxSxY4lsDqRy8p2wzL8UeEWRQ8ud306yBC_CfpCwb9DKD2nTAVzxLfvKXgg91zXgudost2DIrE8HuU3d153Xi8I40Xda6heNp38_J0lL-Rwv4aJKgyMVhtr4Xl0n7xJruCclfXAgz84KkYNGX5A0HM2C4CXOOdpm1xMZWsnQXVLaCzMw09hk0eTftCkYWVO76yncPOtvsSEqq3XTvsD03c7gfja4QMgyeOnw_dJhqt4tyFNAn8LJuMONjpKs_azqNXA2MDCvMM140aOCTVAkk__Yn&e=1&n=bm51y_3X78cS1XTs&rId=6557ec7f-0dc3-4ceb-90ef-d402b4c1b537&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8JMoomTjSU95UJVDoWGwQPzVUCUwCoiNv5DkpJKb3fkizqFWB31iNEXmZ5mdlzXaJhiC4xkTfEBXVN1QUeQ4TLc4uHY2ivSMmAvGMUC-aS2TlinU0DVfx4NE3xX4YftsDscu19VYGaaS2PKIMTafa88PqDhgEVQIkwpBQpkyO27xeUMRhfjm-KgPhCjVI4k5AB0v5aZhv6_UuYDUXJK1eC6UxTck%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuYmxhY2tsYW5lLmNvbSUyZmVuJTJmY291bnRyaWVzJTJmdWslMmZsb25kb24lMmYlM2Z1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZkZXZpY2UlM2RjJTI2dXRtX2NhbXBhaWduX2lkJTNkNDQ2MTE2OTc4JTI2dXRtX2FkZ3JvdXBfaWQlM2QxMTY1NDg0MTQ5NTM4NTA2JTI2bmV0d29yayUzZGElMjZsb2NfcGh5c2ljYWxfbXMlM2Q3ODA3MyUyNmFkcG9zaXRpb24lM2QlMjZmZWVkaXRlbWlkJTNkJTI2dGFyZ2V0aWQlM2Rrd2QtNzI4NDM0NDI4MjAzMDMlMjZ1dG1fY2FtcGFpZ24lM2RTZWFyY2glMjUyMEVOJTI1MjAtJTI1MjBHQi1MT04lMjUyMC0lMjUyMExvbmRvbiUyNnV0bV9hZGdyb3VwJTNkVDAxJTI1MjAtJTI1MjBHQi1MT04lMjUyMC0lMjUyMExvbmRvbiUyNTIwLSUyNTIwQ2FyJTI2dXRtX2NvbnRlbnQlM2RjYXItc2VydmljZSUyNnV0bV9hY2NvdW50JTNkQmxhY2tsYW5lJTI1MjAtJTI1MjBOb24tQnJhbmQlMjZ1dG1fdGVybSUzZGV4ZWN1dGl2ZSUyNTIwY2FyJTI1MjBsb25kb24lMjZtYXRjaHR5cGUlM2RlJTI2bXNjbGtpZCUzZDIwYjAwY2FkNzhhYTE0ZjJhZjViNjY0NGM3NTMyZTgy%26rlid%3D20b00cad78aa14f2af5b6644c7532e82&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                - button "See more" [ref=e548]:
                  - img [ref=e549]
            - article [ref=e550] [cursor=pointer]:
              - generic [ref=e556]:
                - generic [ref=e558]:
                  - img "Premier League" [ref=e560]
                  - link "Premier League" [ref=e561]:
                    - /url: https://www.msn.com/en-in/sports/football/premier_league?ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333
                    - heading "Premier League" [level=2] [ref=e562]
                  - button "More interests" [ref=e563]
                  - generic [ref=e564]:
                    - generic "Popular in your area" [ref=e565]:
                      - button "Popular in your area" [ref=e566]
                    - button "More options" [ref=e567]
                - generic [ref=e571]:
                  - link "Newcastle Final · 2 Nov 0 - 1 Everton" [ref=e573]:
                    - /url: https://www.msn.com/en-in/sports/football/premier_league/game-center/sp-id-72221368?ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333
                    - generic [ref=e574]:
                      - generic [ref=e575]:
                        - generic [ref=e576]:
                          - button "Click to follow Newcastle":
                            - generic:
                              - img
                        - generic "Newcastle" [ref=e577]
                      - generic [ref=e579]:
                        - generic "2 Nov - Final" [ref=e580]: Final · 2 Nov
                        - generic [ref=e581]:
                          - generic [ref=e583]: "0"
                          - generic [ref=e584]: "-"
                          - generic [ref=e585]:
                            - generic [ref=e586]: "1"
                            - img [ref=e588]
                      - generic [ref=e590]:
                        - generic [ref=e591]:
                          - button "Click to follow Everton":
                            - generic:
                              - img
                        - generic "Everton" [ref=e592]
                  - link "Everton 8:00 pm 6 Nov Coventry" [ref=e594]:
                    - /url: https://www.msn.com/en-in/sports/football/premier_league/game-center/sp-id-72221378?ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333
                    - generic [ref=e595]:
                      - generic [ref=e596]:
                        - generic [ref=e597]:
                          - button "Click to follow Everton":
                            - generic:
                              - img
                        - generic "Everton" [ref=e598]
                      - generic [ref=e600]:
                        - generic "8:00 pm" [ref=e601]:
                          - generic [ref=e602]: 8:00 pm
                        - generic "6 Nov" [ref=e603]
                      - generic [ref=e604]:
                        - generic [ref=e605]:
                          - button "Click to follow Coventry":
                            - generic:
                              - img
                        - generic "Coventry" [ref=e606]
                  - link "Leeds United 12:30 pm 7 Nov Tottenham" [ref=e608]:
                    - /url: https://www.msn.com/en-in/sports/football/premier_league/game-center/sp-id-72221384?ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333
                    - generic [ref=e609]:
                      - generic [ref=e610]:
                        - generic [ref=e611]:
                          - button "Click to follow Leeds United":
                            - generic:
                              - img
                        - generic "Leeds United" [ref=e612]
                      - generic [ref=e614]:
                        - generic "12:30 pm" [ref=e615]:
                          - generic [ref=e616]: 12:30 pm
                        - generic "7 Nov" [ref=e617]
                      - generic [ref=e618]:
                        - generic [ref=e619]:
                          - button "Click to follow Tottenham":
                            - generic:
                              - img
                        - generic "Tottenham" [ref=e620]
                - generic [ref=e622]:
                  - generic [ref=e623]:
                    - generic "Previous" [ref=e624]:
                      - button "Previous" [ref=e625]
                    - tablist [ref=e627]:
                      - tab "Page 1" [selected] [ref=e628]
                      - tab "Page 2" [ref=e630]
                      - tab "Page 3" [ref=e632]
                      - tab "Page 4" [ref=e634]
                      - tab "Page 5" [ref=e636]
                      - tab "Page 6"
                      - tab "Page 7"
                      - tab "Page 8"
                      - tab "Page 9"
                      - tab "Page 10"
                      - tab "Page 11"
                    - generic "Next" [ref=e638]:
                      - button "Next" [ref=e639]
                  - link "See more Premier League" [ref=e641]:
                    - /url: https://www.msn.com/en-in/sports/football/premier_league?ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333
          - generic [ref=e642]:
            - article [ref=e643] [cursor=pointer]:
              - generic [ref=e648]:
                - generic [ref=e650]:
                  - link "Top Engaging News" [ref=e652]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333
                    - heading "Top Engaging News" [level=2] [ref=e653]
                  - button "More options" [ref=e655]
                - generic [ref=e657]:
                  - link "News18 10 Comments Jim Carrey marries for the 3rd time at 64, ties knot with 32-year-old girlfriend Min Ah" [ref=e659]:
                    - /url: https://www.msn.com/en-in/entertainment/celebrities/jim-carrey-marries-for-the-3rd-time-at-64-ties-knot-with-32-year-old-girlfriend-min-ah/ar-AA2dk8bG
                    - generic [ref=e660]:
                      - img [ref=e661]
                      - generic [ref=e662]: News18
                      - link "10 Comments" [ref=e664]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/jim-carrey-marries-for-the-3rd-time-at-64-ties-knot-with-32-year-old-girlfriend-min-ah/ar-AA2dk8bG#comments
                        - img [ref=e665]
                        - paragraph [ref=e666]: "10"
                    - paragraph [ref=e667]: Jim Carrey marries for the 3rd time at 64, ties knot with 32-year-old girlfriend Min Ah
                  - 'link "Hindustan Times 3 Comments Australians are laid-back: Indian man compares public holidays in Australia and India, internet reacts" [ref=e669]':
                    - /url: https://www.msn.com/en-in/news/other/australians-are-laid-back-indian-man-compares-public-holidays-in-australia-and-india-internet-reacts/ar-AA2dmmhs
                    - generic [ref=e670]:
                      - img [ref=e671]
                      - generic [ref=e672]: Hindustan Times
                      - link "3 Comments" [ref=e674]:
                        - /url: https://www.msn.com/en-in/news/other/australians-are-laid-back-indian-man-compares-public-holidays-in-australia-and-india-internet-reacts/ar-AA2dmmhs#comments
                        - img [ref=e675]
                        - paragraph [ref=e676]: "3"
                    - paragraph [ref=e677]: "Australians are laid-back: Indian man compares public holidays in Australia and India, internet reacts"
                  - link "ABP - Live 2 Comments Washington Sundar out of India T20I squad, BCCI names surprise replacement" [ref=e679]:
                    - /url: https://www.msn.com/en-in/sports/cricket/washington-sundar-out-of-india-t20i-squad-bcci-names-surprise-replacement/ar-AA2dltlt
                    - generic [ref=e680]:
                      - img [ref=e681]
                      - generic [ref=e682]: ABP - Live
                      - link "2 Comments" [ref=e684]:
                        - /url: https://www.msn.com/en-in/sports/cricket/washington-sundar-out-of-india-t20i-squad-bcci-names-surprise-replacement/ar-AA2dltlt#comments
                        - img [ref=e685]
                        - paragraph [ref=e686]: "2"
                    - paragraph [ref=e687]: Washington Sundar out of India T20I squad, BCCI names surprise replacement
                - generic [ref=e689]:
                  - generic [ref=e690]:
                    - generic "Previous" [ref=e691]:
                      - button "Previous" [ref=e692]
                    - tablist [ref=e694]:
                      - tab "Page 1" [selected] [ref=e695]
                      - tab "Page 2" [ref=e697]
                      - tab "Page 3" [ref=e699]
                    - generic "Next" [ref=e701]:
                      - button "Next" [ref=e702]
                  - link "See more" [ref=e704]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333
            - article [ref=e705] [cursor=pointer]
            - article "Woman weeps, claims Rs 2.75 lakh jewellery, cash stolen on train. Railways reacts" [ref=e712] [cursor=pointer]:
              - generic [ref=e714]:
                - img [ref=e715]
                - generic [ref=e716]:
                  - generic [ref=e717]:
                    - generic [ref=e718]:
                      - generic [ref=e719]:
                        - img [ref=e720]
                        - generic [ref=e721]: India Today
                      - generic [ref=e722]: ·
                      - generic [ref=e723]: 3h
                    - link "Woman weeps, claims Rs 2.75 lakh jewellery, cash stolen on train. Railways reacts, India Today" [ref=e724]:
                      - /url: https://www.msn.com/en-in/news/other/woman-weeps-claims-rs-2-75-lakh-jewellery-cash-stolen-on-train-railways-reacts/ar-AA2gE8sU
                      - text: Woman weeps, claims Rs 2.75 lakh jewellery, cash stolen on train. Railways reacts
                  - generic "Woman weeps, claims Rs 2.75 lakh jewellery, cash stolen on train. Railways reacts" [ref=e727]:
                    - generic [ref=e729]:
                      - generic [ref=e730]:
                        - button "29 Likes" [ref=e731]:
                          - generic [ref=e732]:
                            - img [ref=e733]
                            - generic [ref=e735]: "29"
                        - button "Dislike" [ref=e736]:
                          - img [ref=e738]
                      - link "View comments 11 Comment" [ref=e741]:
                        - /url: https://www.msn.com/en-in/news/other/woman-weeps-claims-rs-2-75-lakh-jewellery-cash-stolen-on-train-railways-reacts/ar-AA2gE8sU#comments
                        - button "View comments 11 Comment" [ref=e742]:
                          - img [ref=e743]
                        - generic [ref=e745]: "11"
                - generic [ref=e746]:
                  - button "Hide this story" [ref=e747]:
                    - img [ref=e748]
                    - text: Hide this story
                  - button "See more" [ref=e749]:
                    - img [ref=e750]
            - article [ref=e751] [cursor=pointer]:
              - generic [ref=e757]:
                - generic [ref=e759]:
                  - img "Watchlist suggestions" [ref=e761]
                  - link "Watchlist suggestions" [ref=e762]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e763]
                  - button "More options" [ref=e765]
                - generic [ref=e770]:
                  - link "SENSEX SENSEX Rising fast ‎+1.62%‎ 76,917.85" [ref=e772]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkucw&noti=Price&ocid=hpmsn
                    - generic [ref=e773]:
                      - generic [ref=e774]:
                        - generic [ref=e775]: SENSEX
                        - img "SENSEX" [ref=e776]
                      - generic [ref=e778]: Rising fast
                    - generic [ref=e783]:
                      - generic [ref=e784]: ‎+1.62%‎
                      - generic [ref=e785]: 76,917.85
                    - button "Add to watchlist" [ref=e788]:
                      - img [ref=e789]
                  - link "NIFTY NIFTY Rising fast ‎+1.58%‎ 23,810.85" [ref=e793]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahkqww&noti=Price&ocid=hpmsn
                    - generic [ref=e794]:
                      - generic [ref=e795]:
                        - generic [ref=e796]: NIFTY
                        - img "NIFTY" [ref=e797]
                      - generic [ref=e799]: Rising fast
                    - generic [ref=e804]:
                      - generic [ref=e805]: ‎+1.58%‎
                      - generic [ref=e806]: 23,810.85
                    - button "Add to watchlist" [ref=e809]:
                      - img [ref=e810]
                  - link "Gold Gold ‎-1.45%‎ 3,911.90" [ref=e814]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwoc&ocid=hpmsn
                    - generic [ref=e815]:
                      - generic [ref=e817]: Gold
                      - generic [ref=e819]: Gold
                    - generic [ref=e824]:
                      - generic [ref=e825]: ‎-1.45%‎
                      - generic [ref=e826]: 3,911.90
                    - button "Add to watchlist" [ref=e829]:
                      - img [ref=e830]
                  - link "24K Gold (10 Grams) - Indian Rupee XAUINR ‎+0.69%‎ 144496" [ref=e834]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&ocid=hpmsn
                    - generic [ref=e835]:
                      - generic [ref=e837]: 24K Gold (10 Grams) - Indian Rupee
                      - generic [ref=e839]: XAUINR
                    - generic [ref=e844]:
                      - generic [ref=e845]: ‎+0.69%‎
                      - generic [ref=e846]: "144496"
                    - button "Add to watchlist" [ref=e849]:
                      - img [ref=e850]
                  - link "Silver Silver Dropping fast ‎-3.95%‎ 48.88" [ref=e854]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwr7&noti=Price&ocid=hpmsn
                    - generic [ref=e855]:
                      - generic [ref=e856]:
                        - generic [ref=e857]: Silver
                        - img "Silver" [ref=e858]
                      - generic [ref=e860]: Dropping fast
                    - generic [ref=e865]:
                      - generic [ref=e866]: ‎-3.95%‎
                      - generic [ref=e867]: "48.88"
                    - button "Add to watchlist" [ref=e870]:
                      - img [ref=e871]
                - generic [ref=e875]:
                  - generic [ref=e876]:
                    - generic "Previous" [ref=e877]:
                      - button "Previous" [ref=e878]
                    - tablist [ref=e880]:
                      - tab "Page 1" [selected] [ref=e881]
                      - tab "Page 2" [ref=e883]
                      - tab "Page 3" [ref=e885]
                      - tab "Page 4" [ref=e887]
                      - tab "Page 5" [ref=e889]
                      - tab "Page 6"
                      - tab "Page 7"
                    - generic "Next" [ref=e891]:
                      - button "Next" [ref=e892]
                  - link "See watchlist suggestions" [ref=e894]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - 'article "Ramayana advance box office collection: Ranbir Kapoor''s film crosses Rs 36 crore, yet falls behind Yash''s Toxic" [ref=e895] [cursor=pointer]':
              - generic [ref=e897]:
                - img [ref=e898]
                - generic [ref=e899]:
                  - generic [ref=e900]:
                    - generic [ref=e901]:
                      - generic [ref=e902]:
                        - img [ref=e903]
                        - generic [ref=e904]: The Times of India
                      - generic [ref=e905]: ·
                      - generic [ref=e906]: 1d
                    - 'link "Ramayana advance box office collection: Ranbir Kapoor''s film crosses Rs 36 crore, yet falls behind Yash''s Toxic, The Times of India" [ref=e907]':
                      - /url: https://www.msn.com/en-in/entertainment/movies/ramayana-advance-box-office-collection-ranbir-kapoor-s-film-crosses-rs-36-crore-yet-falls-behind-yash-s-toxic/ar-AA2gwwN1
                      - text: "Ramayana advance box office collection: Ranbir Kapoor's film crosses Rs 36 crore, yet falls behind Yash's Toxic"
                  - 'generic "Ramayana advance box office collection: Ranbir Kapoor''s film crosses Rs 36 crore, yet falls behind Yash''s Toxic" [ref=e910]':
                    - generic [ref=e912]:
                      - generic [ref=e913]:
                        - button "121 Likes" [ref=e914]:
                          - generic [ref=e915]:
                            - img [ref=e916]
                            - generic [ref=e918]: "121"
                        - button "Dislike" [ref=e919]:
                          - img [ref=e921]
                      - link "View comments 1 Comment" [ref=e924]:
                        - /url: https://www.msn.com/en-in/entertainment/movies/ramayana-advance-box-office-collection-ranbir-kapoor-s-film-crosses-rs-36-crore-yet-falls-behind-yash-s-toxic/ar-AA2gwwN1#comments
                        - button "View comments 1 Comment" [ref=e925]:
                          - img [ref=e926]
                        - generic [ref=e928]: "1"
                - generic [ref=e929]:
                  - button "Hide this story" [ref=e930]:
                    - img [ref=e931]
                    - text: Hide this story
                  - button "See more" [ref=e932]:
                    - img [ref=e933]
            - article "Alia Bhatt says she sleeps 9 hours every day; Sadhguru asks her 'When will you live?'" [ref=e934] [cursor=pointer]:
              - generic [ref=e936]:
                - img [ref=e937]
                - generic [ref=e938]:
                  - generic [ref=e939]:
                    - generic [ref=e941]:
                      - img [ref=e942]
                      - generic [ref=e943]: Hindustan Times
                    - link "Alia Bhatt says she sleeps 9 hours every day; Sadhguru asks her 'When will you live?', Hindustan Times" [ref=e944]:
                      - /url: https://www.msn.com/en-in/health/mindandbody/alia-bhatt-says-she-sleeps-9-hours-every-day-sadhguru-asks-her-when-will-you-live/ar-AA20R3yi
                      - text: Alia Bhatt says she sleeps 9 hours every day; Sadhguru asks her 'When will you live?'
                  - generic "Alia Bhatt says she sleeps 9 hours every day; Sadhguru asks her 'When will you live?'" [ref=e947]:
                    - generic [ref=e949]:
                      - generic [ref=e950]:
                        - button "1,836 Likes" [ref=e951]:
                          - generic [ref=e952]:
                            - img [ref=e953]
                            - generic [ref=e955]: 2k
                        - button "Dislike" [ref=e956]:
                          - img [ref=e958]
                      - link "View comments 63 Comment" [ref=e961]:
                        - /url: https://www.msn.com/en-in/health/mindandbody/alia-bhatt-says-she-sleeps-9-hours-every-day-sadhguru-asks-her-when-will-you-live/ar-AA20R3yi#comments
                        - button "View comments 63 Comment" [ref=e962]:
                          - img [ref=e963]
                        - generic [ref=e965]: "63"
                - generic [ref=e966]:
                  - button "Hide this story" [ref=e967]:
                    - img [ref=e968]
                    - text: Hide this story
                  - button "See more" [ref=e969]:
                    - img [ref=e970]
            - article [ref=e971] [cursor=pointer]:
              - generic [ref=e976]:
                - generic [ref=e978]:
                  - link "Games" [ref=e980]:
                    - /url: https://www.msn.com/en-in/play?ocid=hpmsn&cgfrom=cg_ntp_sd_cardtitle
                    - heading "Games" [level=2] [ref=e981]
                  - button "More options" [ref=e983]
                - list [ref=e987]:
                  - generic:
                    - listitem [ref=e988]:
                      - link "Hidden Objects" [ref=e989]:
                        - /url: https://www.msn.com/en-in/play/games/hidden-objects/cg-9nrl7s8gcnmh?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&ei=3
                        - generic [ref=e990]:
                          - img "Hidden Objects"
                    - listitem [ref=e991]:
                      - link "Mansion Tale" [ref=e992]:
                        - /url: https://www.msn.com/en-in/play/games/mansion-tale/cg-9n4rb3rv2sz1?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&ei=3
                        - generic [ref=e993]:
                          - img "Mansion Tale"
                    - listitem [ref=e994]:
                      - link "Ellie Summer Spa Beauty Salon" [ref=e995]:
                        - /url: https://www.msn.com/en-in/play/games/ellie-summer-spa-beauty-salon/cg-9n729w70lx1m?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&ei=3
                        - generic [ref=e996]:
                          - img "Ellie Summer Spa Beauty Salon"
                    - listitem [ref=e997]:
                      - 'link "2048: X2 Merge Blocks" [ref=e998]':
                        - /url: https://www.msn.com/en-in/play/games/2048-x2-merge-blocks/cg-9nr9fdnj9k7l?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&ei=3
                        - generic [ref=e999]:
                          - 'img "2048: X2 Merge Blocks"'
                    - listitem [ref=e1000]:
                      - link "Tsunamis.io" [ref=e1001]:
                        - /url: https://www.msn.com/en-in/play/games/tsunamisio/cg-9nnf9891srv6?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&ei=3
                        - generic [ref=e1002]:
                          - img "Tsunamis.io"
                    - listitem [ref=e1003]:
                      - link "Real Car Driving" [ref=e1004]:
                        - /url: https://www.msn.com/en-in/play/games/real-car-driving/cg-9n1f6qpb51zl?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&ei=3
                        - generic [ref=e1005]:
                          - img "Real Car Driving"
                    - listitem [ref=e1006]:
                      - link "Tropical Merge" [ref=e1007]:
                        - /url: https://www.msn.com/en-in/play/games/tropical-merge/cg-9n5tk2sn4464?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&ei=3
                        - generic [ref=e1008]:
                          - img "Tropical Merge"
                    - listitem [ref=e1009]:
                      - link "Merge Haven" [ref=e1010]:
                        - /url: https://www.msn.com/en-in/play/games/merge-haven/cg-9nv74hgpzr0n?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&ei=3
                        - generic [ref=e1011]:
                          - img "Merge Haven"
                    - listitem [ref=e1012]:
                      - link "Mega Shark" [ref=e1013]:
                        - /url: https://www.msn.com/en-in/play/games/mega-shark/cg-9n08jz7kbjx5?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ae9bff8b9f7454b85fe8f7dcf7eb333&ei=3
                        - generic [ref=e1014]:
                          - img "Mega Shark"
                - generic [ref=e1016]:
                  - generic [ref=e1017]:
                    - generic "Previous" [ref=e1018]:
                      - button "Previous" [ref=e1019]
                    - tablist [ref=e1021]:
                      - tab "Page 1" [selected] [ref=e1022]
                      - tab "Page 2" [ref=e1024]
                    - generic "Next" [ref=e1026]:
                      - button "Next" [ref=e1027]
                  - link "Explore more games" [ref=e1029]:
                    - /url: https://www.msn.com/en-in/play?ocid=hpmsn&cgfrom=cg_ntp_sd_cardseemore
            - 'article "Japan joins US, EU in asking citizens to stock up for emergencies: Here''s what''s happening" [ref=e1030] [cursor=pointer]':
              - generic [ref=e1032]:
                - img [ref=e1033]
                - generic [ref=e1034]:
                  - generic [ref=e1035]:
                    - generic [ref=e1036]:
                      - generic [ref=e1037]:
                        - img [ref=e1038]
                        - generic [ref=e1039]: NDTV Profit
                      - generic [ref=e1040]: ·
                      - generic [ref=e1041]: 17h
                    - 'link "Japan joins US, EU in asking citizens to stock up for emergencies: Here''s what''s happening, NDTV Profit" [ref=e1042]':
                      - /url: https://www.msn.com/en-in/news/other/japan-joins-us-eu-in-asking-citizens-to-stock-up-for-emergencies-here-s-what-s-happening/ar-AA2gBAnf
                      - text: "Japan joins US, EU in asking citizens to stock up for emergencies: Here's what's happening"
                  - 'generic "Japan joins US, EU in asking citizens to stock up for emergencies: Here''s what''s happening" [ref=e1045]':
                    - generic [ref=e1047]:
                      - generic [ref=e1048]:
                        - button "6 Likes" [ref=e1049]:
                          - generic [ref=e1050]:
                            - img [ref=e1051]
                            - generic [ref=e1053]: "6"
                        - button "Dislike" [ref=e1054]:
                          - img [ref=e1056]
                      - link "Start the conversation" [ref=e1059]:
                        - /url: https://www.msn.com/en-in/news/other/japan-joins-us-eu-in-asking-citizens-to-stock-up-for-emergencies-here-s-what-s-happening/ar-AA2gBAnf#comments
                        - button "Start the conversation" [ref=e1060]:
                          - img [ref=e1061]
                - generic [ref=e1063]:
                  - button "Hide this story" [ref=e1064]:
                    - img [ref=e1065]
                    - text: Hide this story
                  - button "See more" [ref=e1066]:
                    - img [ref=e1067]
            - article [ref=e1068] [cursor=pointer]
            - article "Imran Khan apologises, says won't protest again. Bombay High Court says 'go to USA'" [ref=e1075] [cursor=pointer]:
              - generic [ref=e1077]:
                - img [ref=e1078]
                - generic [ref=e1079]:
                  - generic [ref=e1080]:
                    - generic [ref=e1081]:
                      - generic [ref=e1082]:
                        - img [ref=e1083]
                        - generic [ref=e1084]: ThePrint
                      - generic [ref=e1085]: ·
                      - generic [ref=e1086]: 21h
                    - link "Imran Khan apologises, says won't protest again. Bombay High Court says 'go to USA', ThePrint" [ref=e1087]:
                      - /url: https://www.msn.com/en-in/news/other/imran-khan-apologises-says-won-t-protest-again-bombay-high-court-says-go-to-usa/ar-AA2gARyn
                      - text: Imran Khan apologises, says won't protest again. Bombay High Court says 'go to USA'
                  - generic "Imran Khan apologises, says won't protest again. Bombay High Court says 'go to USA'" [ref=e1090]:
                    - generic [ref=e1092]:
                      - generic [ref=e1093]:
                        - button "80 Likes" [ref=e1094]:
                          - generic [ref=e1095]:
                            - img [ref=e1096]
                            - generic [ref=e1098]: "80"
                        - button "Dislike" [ref=e1099]:
                          - img [ref=e1101]
                      - link "View comments 9 Comment" [ref=e1104]:
                        - /url: https://www.msn.com/en-in/news/other/imran-khan-apologises-says-won-t-protest-again-bombay-high-court-says-go-to-usa/ar-AA2gARyn#comments
                        - button "View comments 9 Comment" [ref=e1105]:
                          - img [ref=e1106]
                        - generic [ref=e1108]: "9"
                - generic [ref=e1109]:
                  - button "Hide this story" [ref=e1110]:
                    - img [ref=e1111]
                    - text: Hide this story
                  - button "See more" [ref=e1112]:
                    - img [ref=e1113]
          - article [ref=e1115]
          - generic [ref=e1117]:
            - article [ref=e1118] [cursor=pointer]:
              - generic [ref=e1123]:
                - generic [ref=e1124]:
                  - generic [ref=e1125]:
                    - link "Recommended videos" [ref=e1126]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e1127]
                    - link "Recommended videos" [ref=e1130]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e1131]:
                    - generic:
                      - link "See more" [ref=e1132]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e1133]:
                        - button "More options" [ref=e1134]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e1136]:
                  - generic [ref=e1138]:
                    - generic [ref=e1140]:
                      - generic:
                        - article "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [ref=e1143]:
                          - generic [ref=e1144]:
                            - img "Keke Palmer Was Supporting 5 People As A Teenager - Then She Finally Broke Down" [ref=e1146]
                            - generic [ref=e1148]: 12:56
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1149]:
                              - generic [ref=e1150]:
                                - img "TED" [ref=e1151]
                                - generic "TED" [ref=e1153]
                              - link "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [ref=e1154]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/keke-palmer-was-supporting-5-people-as-a-teenager-then-she-finally-broke-down/vi-AA240j91?ocid=hpmsn
                                - heading "Keke Palmer was supporting 5 people as a teenager - then she finally broke down" [level=2] [ref=e1155]:
                                  - generic: Keke Palmer was supporting 5 people as a teenager - then she finally broke down
                            - button "See more" [ref=e1159]
                        - article "70 tons of steel lines up a target 2,000 meters away - then the 120mm cannon explodes" [ref=e1162]:
                          - generic [ref=e1163]:
                            - img "70 Tons Of Steel Lines Up A Target 2,000 Meters Away - Then The 120mm Cannon Explodes" [ref=e1165]
                            - generic [ref=e1167]: 02:49
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1168]:
                              - generic [ref=e1169]:
                                - img "Sam Eckholm" [ref=e1170]
                                - generic [ref=e1171]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1172]
                                    - generic [ref=e1173]: ·
                                    - generic [ref=e1174]: 1h
                              - link "70 tons of steel lines up a target 2,000 meters away - then the 120mm cannon explodes" [ref=e1175]:
                                - /url: https://www.msn.com/en-in/news/other/70-tons-of-steel-lines-up-a-target-2-000-meters-away-then-the-120mm-cannon-explodes/vi-AA2dzD68?ocid=hpmsn
                                - heading "70 tons of steel lines up a target 2,000 meters away - then the 120mm cannon explodes" [level=2] [ref=e1176]:
                                  - generic: 70 tons of steel lines up a target 2,000 meters away - then the 120mm cannon explodes
                            - button "See more" [ref=e1180]
                        - article "Nuclear engineer reveals what's happening at Chernobyl after watching Kyle Hill" [ref=e1183]:
                          - generic [ref=e1184]:
                            - img "Nuclear Engineer Reveals What's Happening at Chernobyl After Watching Kyle Hill" [ref=e1186]
                            - generic [ref=e1188]: 20:25
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1189]:
                              - generic [ref=e1190]:
                                - img "T. Folse Nuclear" [ref=e1191]
                                - generic [ref=e1192]:
                                  - generic:
                                    - generic "T. Folse Nuclear" [ref=e1193]
                                    - generic [ref=e1194]: ·
                                    - generic [ref=e1195]: 1h
                              - link "Nuclear engineer reveals what's happening at Chernobyl after watching Kyle Hill" [ref=e1196]:
                                - /url: https://www.msn.com/en-in/news/other/nuclear-engineer-reveals-what-s-happening-at-chernobyl-after-watching-kyle-hill/vi-AA1Jpck4?ocid=hpmsn
                                - heading "Nuclear engineer reveals what's happening at Chernobyl after watching Kyle Hill" [level=2] [ref=e1197]:
                                  - generic: Nuclear engineer reveals what's happening at Chernobyl after watching Kyle Hill
                            - button "See more" [ref=e1201]
                        - article "I wanted more than a vacation in Belize. So I started building a home there" [ref=e1204]:
                          - generic [ref=e1205]:
                            - img "Building My Dream Home in Beautiful Belize" [ref=e1207]
                            - generic [ref=e1209]: 21:59
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1210]:
                              - generic [ref=e1211]:
                                - img "Christian LeBlanc" [ref=e1212]
                                - generic [ref=e1213]:
                                  - generic:
                                    - generic "Christian LeBlanc" [ref=e1214]
                                    - generic [ref=e1215]: ·
                                    - generic [ref=e1216]: 2h
                              - link "I wanted more than a vacation in Belize. So I started building a home there" [ref=e1217]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/i-wanted-more-than-a-vacation-in-belize-so-i-started-building-a-home-there/vi-AA2gBjIt?ocid=hpmsn
                                - heading "I wanted more than a vacation in Belize. So I started building a home there" [level=2] [ref=e1218]:
                                  - generic: I wanted more than a vacation in Belize. So I started building a home there
                            - button "See more" [ref=e1222]
                        - article "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [ref=e1225]:
                          - generic [ref=e1226]:
                            - img "Trevor Noah Breaks Down the Real Reason Idris Elba could NOT play James Bond" [ref=e1228]
                            - generic [ref=e1230]: 09:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1231]:
                              - generic [ref=e1232]:
                                - img "Trevor Noah" [ref=e1233]
                                - generic [ref=e1234]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1235]
                                    - generic [ref=e1236]: ·
                                    - generic [ref=e1237]: 1d
                              - link "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [ref=e1238]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/trevor-noah-breaks-down-the-real-reason-idris-elba-could-not-play-james-bond/vi-AA2gyyaL?ocid=hpmsn
                                - heading "Trevor Noah breaks down the real reason Idris Elba could not play James Bond" [level=2] [ref=e1239]:
                                  - generic: Trevor Noah breaks down the real reason Idris Elba could not play James Bond
                            - button "See more" [ref=e1243]
                        - article "Watch how NATO hunts enemy submarines in the North Atlantic" [ref=e1246]:
                          - generic [ref=e1247]:
                            - img "Watch How NATO Hunts Enemy Submarines In The North Atlantic" [ref=e1249]
                            - generic [ref=e1251]: 29:49
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1252]:
                              - generic [ref=e1253]:
                                - img "Sam Eckholm" [ref=e1254]
                                - generic [ref=e1255]:
                                  - generic:
                                    - generic "Sam Eckholm" [ref=e1256]
                                    - generic [ref=e1257]: ·
                                    - generic [ref=e1258]: 1h
                              - link "Watch how NATO hunts enemy submarines in the North Atlantic" [ref=e1259]:
                                - /url: https://www.msn.com/en-in/news/other/watch-how-nato-hunts-enemy-submarines-in-the-north-atlantic/vi-AA1Wvtxu?ocid=hpmsn
                                - heading "Watch how NATO hunts enemy submarines in the North Atlantic" [level=2] [ref=e1260]:
                                  - generic: Watch how NATO hunts enemy submarines in the North Atlantic
                            - button "See more" [ref=e1264]
                        - article "The land was empty. Then my dream villa in Bali slowly started coming to life" [ref=e1267]:
                          - generic [ref=e1268]:
                            - img "BUILDING in BALI - My Dream Villa is 50% COMPLETE" [ref=e1270]
                            - generic [ref=e1272]: 21:13
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1273]:
                              - generic [ref=e1274]:
                                - img "Christian LeBlanc" [ref=e1275]
                                - generic [ref=e1276]:
                                  - generic:
                                    - generic "Christian LeBlanc" [ref=e1277]
                                    - generic [ref=e1278]: ·
                                    - generic [ref=e1279]: 2h
                              - link "The land was empty. Then my dream villa in Bali slowly started coming to life" [ref=e1280]:
                                - /url: https://www.msn.com/en-in/news/other/the-land-was-empty-then-my-dream-villa-in-bali-slowly-started-coming-to-life/vi-AA2gAKU8?ocid=hpmsn
                                - heading "The land was empty. Then my dream villa in Bali slowly started coming to life" [level=2] [ref=e1281]:
                                  - generic: The land was empty. Then my dream villa in Bali slowly started coming to life
                            - button "See more" [ref=e1285]
                        - link "See more" [ref=e1287]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1288]
                          - text: See more
                    - button "next" [ref=e1292]:
                      - img [ref=e1295]
            - 'article "Robber glues woman’s hands: Masked man attacks Bengaluru receptionist; police verify his background" [ref=e1297] [cursor=pointer]':
              - generic [ref=e1299]:
                - img [ref=e1300]
                - generic [ref=e1301]:
                  - generic [ref=e1302]:
                    - generic [ref=e1303]:
                      - generic [ref=e1304]:
                        - img [ref=e1305]
                        - generic [ref=e1306]: The Times of India
                      - generic [ref=e1307]: ·
                      - generic [ref=e1308]: 1h
                    - 'link "Robber glues woman’s hands: Masked man attacks Bengaluru receptionist; police verify his background, The Times of India" [ref=e1309]':
                      - /url: https://www.msn.com/en-in/news/other/robber-glues-woman-s-hands-masked-man-attacks-bengaluru-receptionist-police-verify-his-background/ar-AA2gEhzC
                      - text: "Robber glues woman’s hands: Masked man attacks Bengaluru receptionist; police verify his background"
                  - 'generic "Robber glues woman’s hands: Masked man attacks Bengaluru receptionist; police verify his background" [ref=e1312]':
                    - generic [ref=e1314]:
                      - generic [ref=e1315]:
                        - button "1 Like" [ref=e1316]:
                          - generic [ref=e1317]:
                            - img [ref=e1318]
                            - generic [ref=e1320]: "1"
                        - button "Dislike" [ref=e1321]:
                          - img [ref=e1323]
                      - link "Start the conversation" [ref=e1326]:
                        - /url: https://www.msn.com/en-in/news/other/robber-glues-woman-s-hands-masked-man-attacks-bengaluru-receptionist-police-verify-his-background/ar-AA2gEhzC#comments
                        - button "Start the conversation" [ref=e1327]:
                          - img [ref=e1328]
                - generic [ref=e1330]:
                  - button "Hide this story" [ref=e1331]:
                    - img [ref=e1332]
                    - text: Hide this story
                  - button "See more" [ref=e1333]:
                    - img [ref=e1334]
            - article "Can a snake bite through jeans or boots? Here’s what experts say and tips to stay safe outdoors" [ref=e1335] [cursor=pointer]:
              - generic [ref=e1337]:
                - img [ref=e1338]
                - generic [ref=e1339]:
                  - generic [ref=e1340]:
                    - generic [ref=e1342]:
                      - img [ref=e1343]
                      - generic [ref=e1344]: The Times of India
                    - link "Can a snake bite through jeans or boots? Here’s what experts say and tips to stay safe outdoors, The Times of India" [ref=e1345]:
                      - /url: https://www.msn.com/en-in/news/other/can-a-snake-bite-through-jeans-or-boots-here-s-what-experts-say-and-tips-to-stay-safe-outdoors/ss-AA26M5hU
                      - text: Can a snake bite through jeans or boots? Here’s what experts say and tips to stay safe outdoors
                  - generic "Can a snake bite through jeans or boots? Here’s what experts say and tips to stay safe outdoors" [ref=e1348]:
                    - generic [ref=e1350]:
                      - generic [ref=e1351]:
                        - button "72 Likes" [ref=e1352]:
                          - generic [ref=e1353]:
                            - img [ref=e1354]
                            - generic [ref=e1356]: "72"
                        - button "Dislike" [ref=e1357]:
                          - img [ref=e1359]
                      - link "Start the conversation" [ref=e1362]:
                        - /url: https://www.msn.com/en-in/news/other/can-a-snake-bite-through-jeans-or-boots-here-s-what-experts-say-and-tips-to-stay-safe-outdoors/ss-AA26M5hU#comments
                        - button "Start the conversation" [ref=e1363]:
                          - img [ref=e1364]
                - generic [ref=e1366]:
                  - button "Hide this story" [ref=e1367]:
                    - img [ref=e1368]
                    - text: Hide this story
                  - button "See more" [ref=e1369]:
                    - img [ref=e1370]
            - 'article "Same origin, different story: Satellite reveals how Cyclone Murasu differs from Arnab" [ref=e1371] [cursor=pointer]':
              - generic [ref=e1373]:
                - img [ref=e1374]
                - generic [ref=e1375]:
                  - generic [ref=e1376]:
                    - generic [ref=e1377]:
                      - generic [ref=e1378]:
                        - img [ref=e1379]
                        - generic [ref=e1380]: India Today
                      - generic [ref=e1381]: ·
                      - generic [ref=e1382]: 5h
                    - 'link "Same origin, different story: Satellite reveals how Cyclone Murasu differs from Arnab, India Today" [ref=e1383]':
                      - /url: https://www.msn.com/en-in/weather/meteorology/same-origin-different-story-satellite-reveals-how-cyclone-murasu-differs-from-arnab/ar-AA2gE0eg
                      - text: "Same origin, different story: Satellite reveals how Cyclone Murasu differs from Arnab"
                  - 'generic "Same origin, different story: Satellite reveals how Cyclone Murasu differs from Arnab" [ref=e1386]':
                    - generic [ref=e1388]:
                      - generic [ref=e1389]:
                        - button "9 Likes" [ref=e1390]:
                          - generic [ref=e1391]:
                            - img [ref=e1392]
                            - generic [ref=e1394]: "9"
                        - button "Dislike" [ref=e1395]:
                          - img [ref=e1397]
                      - link "Start the conversation" [ref=e1400]:
                        - /url: https://www.msn.com/en-in/weather/meteorology/same-origin-different-story-satellite-reveals-how-cyclone-murasu-differs-from-arnab/ar-AA2gE0eg#comments
                        - button "Start the conversation" [ref=e1401]:
                          - img [ref=e1402]
                - generic [ref=e1404]:
                  - button "Hide this story" [ref=e1405]:
                    - img [ref=e1406]
                    - text: Hide this story
                  - button "See more" [ref=e1407]:
                    - img [ref=e1408]
            - article "Chandigarh woman's spontaneous Diwali office dance to Jhalla Wallah becomes a hit" [ref=e1409] [cursor=pointer]:
              - generic [ref=e1411]:
                - img [ref=e1412]
                - generic [ref=e1413]:
                  - generic [ref=e1414]:
                    - generic [ref=e1415]:
                      - generic [ref=e1416]:
                        - img [ref=e1417]
                        - generic [ref=e1418]: India Today
                      - generic [ref=e1419]: ·
                      - generic [ref=e1420]: 21h
                    - link "Chandigarh woman's spontaneous Diwali office dance to Jhalla Wallah becomes a hit, India Today" [ref=e1421]:
                      - /url: https://www.msn.com/en-in/entertainment/music/chandigarh-woman-s-spontaneous-diwali-office-dance-to-jhalla-wallah-becomes-a-hit/ar-AA2gBenL
                      - text: Chandigarh woman's spontaneous Diwali office dance to Jhalla Wallah becomes a hit
                  - generic "Chandigarh woman's spontaneous Diwali office dance to Jhalla Wallah becomes a hit" [ref=e1424]:
                    - generic [ref=e1426]:
                      - generic [ref=e1427]:
                        - button "133 Likes" [ref=e1428]:
                          - generic [ref=e1429]:
                            - img [ref=e1430]
                            - generic [ref=e1432]: "133"
                        - button "Dislike" [ref=e1433]:
                          - img [ref=e1435]
                      - link "Start the conversation" [ref=e1438]:
                        - /url: https://www.msn.com/en-in/entertainment/music/chandigarh-woman-s-spontaneous-diwali-office-dance-to-jhalla-wallah-becomes-a-hit/ar-AA2gBenL#comments
                        - button "Start the conversation" [ref=e1439]:
                          - img [ref=e1440]
                - generic [ref=e1442]:
                  - button "Hide this story" [ref=e1443]:
                    - img [ref=e1444]
                    - text: Hide this story
                  - button "See more" [ref=e1445]:
                    - img [ref=e1446]
            - 'article "70-year-old father reflects on the one thing he would have done differently: \"If I were 40 again, I would never...\"" [ref=e1447] [cursor=pointer]':
              - generic [ref=e1449]:
                - img [ref=e1450]
                - generic [ref=e1451]:
                  - generic [ref=e1452]:
                    - generic [ref=e1454]:
                      - img [ref=e1455]
                      - generic [ref=e1456]: The Times of India
                    - 'link "70-year-old father reflects on the one thing he would have done differently: \"If I were 40 again, I would never...\", The Times of India" [ref=e1457]':
                      - /url: https://www.msn.com/en-in/news/other/70-year-old-father-reflects-on-the-one-thing-he-would-have-done-differently-if-i-were-40-again-i-would-never/ar-AA25hgP5
                      - text: "70-year-old father reflects on the one thing he would have done differently: \"If I were 40 again, I would never...\""
                  - 'generic "70-year-old father reflects on the one thing he would have done differently: \"If I were 40 again, I would never...\"" [ref=e1460]':
                    - generic [ref=e1462]:
                      - generic [ref=e1463]:
                        - button "275 Likes" [ref=e1464]:
                          - generic [ref=e1465]:
                            - img [ref=e1466]
                            - generic [ref=e1468]: "275"
                        - button "Dislike" [ref=e1469]:
                          - img [ref=e1471]
                      - link "View comments 5 Comment" [ref=e1474]:
                        - /url: https://www.msn.com/en-in/news/other/70-year-old-father-reflects-on-the-one-thing-he-would-have-done-differently-if-i-were-40-again-i-would-never/ar-AA25hgP5#comments
                        - button "View comments 5 Comment" [ref=e1475]:
                          - img [ref=e1476]
                        - generic [ref=e1478]: "5"
                - generic [ref=e1479]:
                  - button "Hide this story" [ref=e1480]:
                    - img [ref=e1481]
                    - text: Hide this story
                  - button "See more" [ref=e1482]:
                    - img [ref=e1483]
            - article "Deepinder Goyal says select people should not buy Temple wearable, plans to change return policy" [ref=e1484] [cursor=pointer]:
              - generic [ref=e1486]:
                - img [ref=e1487]
                - generic [ref=e1488]:
                  - generic [ref=e1489]:
                    - generic [ref=e1490]:
                      - generic [ref=e1491]:
                        - img [ref=e1492]
                        - generic [ref=e1493]: India Today
                      - generic [ref=e1494]: ·
                      - generic [ref=e1495]: 21h
                    - link "Deepinder Goyal says select people should not buy Temple wearable, plans to change return policy, India Today" [ref=e1496]:
                      - /url: https://www.msn.com/en-in/health/general/deepinder-goyal-says-select-people-should-not-buy-temple-wearable-plans-to-change-return-policy/ar-AA2gB9Bp
                      - text: Deepinder Goyal says select people should not buy Temple wearable, plans to change return policy
                  - generic "Deepinder Goyal says select people should not buy Temple wearable, plans to change return policy" [ref=e1499]:
                    - generic [ref=e1501]:
                      - generic [ref=e1502]:
                        - button "10 Likes" [ref=e1503]:
                          - generic [ref=e1504]:
                            - img [ref=e1505]
                            - generic [ref=e1507]: "10"
                        - button "Dislike" [ref=e1508]:
                          - img [ref=e1510]
                      - link "Start the conversation" [ref=e1513]:
                        - /url: https://www.msn.com/en-in/health/general/deepinder-goyal-says-select-people-should-not-buy-temple-wearable-plans-to-change-return-policy/ar-AA2gB9Bp#comments
                        - button "Start the conversation" [ref=e1514]:
                          - img [ref=e1515]
                - generic [ref=e1517]:
                  - button "Hide this story" [ref=e1518]:
                    - img [ref=e1519]
                    - text: Hide this story
                  - button "See more" [ref=e1520]:
                    - img [ref=e1521]
            - 'article "When Steve Jobs told Apple employees at a town hall: Nike sells shoes, but they never talk about…" [ref=e1522] [cursor=pointer]':
              - generic [ref=e1524]:
                - img [ref=e1525]
                - generic [ref=e1526]:
                  - generic [ref=e1527]:
                    - generic [ref=e1528]:
                      - generic [ref=e1529]:
                        - img [ref=e1530]
                        - generic [ref=e1531]: The Times of India
                      - generic [ref=e1532]: ·
                      - generic [ref=e1533]: 2w
                    - 'link "When Steve Jobs told Apple employees at a town hall: Nike sells shoes, but they never talk about…, The Times of India" [ref=e1534]':
                      - /url: https://www.msn.com/en-in/money/general/when-steve-jobs-told-apple-employees-at-a-town-hall-nike-sells-shoes-but-they-never-talk-about/ar-AA2epRVp
                      - text: "When Steve Jobs told Apple employees at a town hall: Nike sells shoes, but they never talk about…"
                  - 'generic "When Steve Jobs told Apple employees at a town hall: Nike sells shoes, but they never talk about…" [ref=e1537]':
                    - generic [ref=e1539]:
                      - generic [ref=e1540]:
                        - button "54 Likes" [ref=e1541]:
                          - generic [ref=e1542]:
                            - img [ref=e1543]
                            - generic [ref=e1545]: "54"
                        - button "Dislike" [ref=e1546]:
                          - img [ref=e1548]
                      - link "Start the conversation" [ref=e1551]:
                        - /url: https://www.msn.com/en-in/money/general/when-steve-jobs-told-apple-employees-at-a-town-hall-nike-sells-shoes-but-they-never-talk-about/ar-AA2epRVp#comments
                        - button "Start the conversation" [ref=e1552]:
                          - img [ref=e1553]
                - generic [ref=e1555]:
                  - button "Hide this story" [ref=e1556]:
                    - img [ref=e1557]
                    - text: Hide this story
                  - button "See more" [ref=e1558]:
                    - img [ref=e1559]
            - 'article "Husband arrested in abetment case: Pune techie found hanging; in-laws booked over gold demands" [ref=e1560] [cursor=pointer]':
              - generic [ref=e1562]:
                - img [ref=e1563]
                - generic [ref=e1564]:
                  - generic [ref=e1565]:
                    - generic [ref=e1566]:
                      - generic [ref=e1567]:
                        - img [ref=e1568]
                        - generic [ref=e1569]: The Times of India
                      - generic [ref=e1570]: ·
                      - generic [ref=e1571]: 7h
                    - 'link "Husband arrested in abetment case: Pune techie found hanging; in-laws booked over gold demands, The Times of India" [ref=e1572]':
                      - /url: https://www.msn.com/en-in/news/other/husband-arrested-in-abetment-case-pune-techie-found-hanging-in-laws-booked-over-gold-demands/ar-AA2gCZ8K
                      - text: "Husband arrested in abetment case: Pune techie found hanging; in-laws booked over gold demands"
                  - 'generic "Husband arrested in abetment case: Pune techie found hanging; in-laws booked over gold demands" [ref=e1575]':
                    - generic [ref=e1577]:
                      - generic [ref=e1578]:
                        - button "31 Likes" [ref=e1579]:
                          - generic [ref=e1580]:
                            - img [ref=e1581]
                            - generic [ref=e1583]: "31"
                        - button "Dislike" [ref=e1584]:
                          - img [ref=e1586]
                      - link "View comments 1 Comment" [ref=e1589]:
                        - /url: https://www.msn.com/en-in/news/other/husband-arrested-in-abetment-case-pune-techie-found-hanging-in-laws-booked-over-gold-demands/ar-AA2gCZ8K#comments
                        - button "View comments 1 Comment" [ref=e1590]:
                          - img [ref=e1591]
                        - generic [ref=e1593]: "1"
                - generic [ref=e1594]:
                  - button "Hide this story" [ref=e1595]:
                    - img [ref=e1596]
                    - text: Hide this story
                  - button "See more" [ref=e1597]:
                    - img [ref=e1598]
    - contentinfo [ref=e1601]:
      - generic "Feedback" [ref=e1603] [cursor=pointer]:
        - button "Feedback" [ref=e1604]:
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