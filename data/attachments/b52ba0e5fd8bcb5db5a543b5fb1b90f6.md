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
        - 'link "Cheyenne: Mostly cloudy, 12 °C" [ref=e31] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Cheyenne,Wyoming
          - generic "Cheyenne, Wyoming, United States Click here to see more information" [ref=e32]: Cheyenne
          - img "Mostly cloudy" [ref=e34]
          - generic [ref=e35]:
            - generic [ref=e36]: ‎12‎
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
                - tab "News story" [ref=e247] [cursor=pointer]
                - tab "News story" [ref=e249] [cursor=pointer]
                - tab "News story" [ref=e251] [cursor=pointer]
                - tab "News story" [ref=e253] [cursor=pointer]
                - tab "News story" [ref=e255] [cursor=pointer]
                - tab "Sponsored" [ref=e257] [cursor=pointer]
                - tab "News story" [ref=e259] [cursor=pointer]
                - tab "News story" [ref=e261] [cursor=pointer]
                - tab "News story" [ref=e263] [cursor=pointer]
                - tab "News story" [ref=e265] [cursor=pointer]
                - tab "News story" [ref=e267] [cursor=pointer]
                - tab "Sponsored" [ref=e269] [cursor=pointer]
                - tab "News story" [ref=e271] [cursor=pointer]
                - tab "News story" [ref=e273] [cursor=pointer]
                - tab "News story" [ref=e275] [cursor=pointer]
                - tab "Sponsored" [ref=e277] [cursor=pointer]
                - tab "News story" [ref=e279] [cursor=pointer]
                - tab "News story" [ref=e281] [cursor=pointer]
              - button [ref=e285]
              - button [ref=e288]
              - 'article "Linux Administration : The Linux Operating System And Command Line" [ref=e289] [cursor=pointer]':
                - generic [ref=e291]:
                  - img [ref=e292]
                  - generic [ref=e293]:
                    - generic [ref=e294]:
                      - generic [ref=e297]: eBay
                      - 'link "Linux Administration : The Linux Operating System And Command Line, eBay" [ref=e298]':
                        - /url: https://www.bing.com/api/v1/mediation/tracking?d=3M0EPsUGHiL3jhq7Hj7_ykcDzI10TEbjGoL_N9Z9Zck7wZXS_qqNxIgMKLM6dK06vaByknLP-H_aQqGEPTGm6PCTUm5aYewGAO5Xyz_XlKdjPHqmR4-DinvU7VPlLVI7OX8lu6r8np7oaNTQjYnnZnV-owdjcW1L1jf9KU68EGTTTazF55WpXFZ5A12aoGUrohIpwO0NTAgluDmDV1_UXts9tTZ0iKlu_Osdd1y2zjPH7dashbYVGSMuIBcxwz39ZmVctHQBOMh7m2XLmZqqgqxjsXGDm2FOmohLaaagsFKyrth2diW-TPINyDCn7Pru60wIwi4zDljAkdX_LiI03BpZw2BuBg&e=1&n=pqZNyLwR8IwNmqTR&rId=e34e9b94-bcb2-499c-b2f7-c75ea613b7eb&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8rlTUDMZFMpt0UmFgL0r8eDVUCUxVIbTiTiN6vOuINfZZlRhyDzodMVlaLWpCFjCJV18lVwpqprltBdze0Bfs41vNiYbpvxr-rv9qW2DJXxRtVJsU9JFi0Mz8iH7lI2QD-Fp1RSzoUNmI8CE5iqrhjbXWp10qYZ6Ely4imyrR1FRvRz-mzBuUIByivqK3aSb5gnQUbMzS6sE8QNs1m2AoItDGxGc%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZWJheS5jb20lMmZpdG0lMmYzNjY1NDYxOTEyODklM2ZjaG4lM2RwcyUyNl90cmtwYXJtcyUzZGlzcHIlMjUzRDElMjZhbWRhdGElM2RlbmMlMjUzQTFpWllWX2hrU1IxaVRQaDBtVUx4LWlnMjElMjZub3JvdmVyJTNkMSUyNm1rZXZ0JTNkMSUyNm1rcmlkJTNkNzExLTE3MjI5Ny00MzMzMDEtMiUyNm1rY2lkJTNkNCUyNm1rc2NpZCUzZDEwMSUyNml0ZW1pZCUzZDM2NjU0NjE5MTI4OSUyNnRhcmdldGlkJTNkJTI2ZGV2aWNlJTNkYyUyNm1rdHlwZSUzZCUyNmdvb2dsZWxvYyUzZDk5MzcwJTI2cG9pJTNkJTI2Y2FtcGFpZ25pZCUzZDYwNDIwMjMxMSUyNm1rZ3JvdXBpZCUzZDEyMjkyNTUwNTM2ODk0NjAlMjZybHNhdGFyZ2V0JTNkJTI2YWJjSWQlM2QlMjZtZXJjaGFudGlkJTNkNTEyOTElMjZtc2Nsa2lkJTNkMzMzMTA5Njk3NzI2MTViZGFmZmM2M2RmNDFmMWUwNmQ%26rlid%3D33310969772615bdaffc63df41f1e06d&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                        - text: "Linux Administration : The Linux Operating System And Command Line"
                    - link "Sponsored" [ref=e300]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?d=3M0EPsUGHiL3jhq7Hj7_ykcDzI10TEbjGoL_N9Z9Zck7wZXS_qqNxIgMKLM6dK06vaByknLP-H_aQqGEPTGm6PCTUm5aYewGAO5Xyz_XlKdjPHqmR4-DinvU7VPlLVI7OX8lu6r8np7oaNTQjYnnZnV-owdjcW1L1jf9KU68EGTTTazF55WpXFZ5A12aoGUrohIpwO0NTAgluDmDV1_UXts9tTZ0iKlu_Osdd1y2zjPH7dashbYVGSMuIBcxwz39ZmVctHQBOMh7m2XLmZqqgqxjsXGDm2FOmohLaaagsFKyrth2diW-TPINyDCn7Pru60wIwi4zDljAkdX_LiI03BpZw2BuBg&e=1&n=pqZNyLwR8IwNmqTR&rId=e34e9b94-bcb2-499c-b2f7-c75ea613b7eb&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8rlTUDMZFMpt0UmFgL0r8eDVUCUxVIbTiTiN6vOuINfZZlRhyDzodMVlaLWpCFjCJV18lVwpqprltBdze0Bfs41vNiYbpvxr-rv9qW2DJXxRtVJsU9JFi0Mz8iH7lI2QD-Fp1RSzoUNmI8CE5iqrhjbXWp10qYZ6Ely4imyrR1FRvRz-mzBuUIByivqK3aSb5gnQUbMzS6sE8QNs1m2AoItDGxGc%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZWJheS5jb20lMmZpdG0lMmYzNjY1NDYxOTEyODklM2ZjaG4lM2RwcyUyNl90cmtwYXJtcyUzZGlzcHIlMjUzRDElMjZhbWRhdGElM2RlbmMlMjUzQTFpWllWX2hrU1IxaVRQaDBtVUx4LWlnMjElMjZub3JvdmVyJTNkMSUyNm1rZXZ0JTNkMSUyNm1rcmlkJTNkNzExLTE3MjI5Ny00MzMzMDEtMiUyNm1rY2lkJTNkNCUyNm1rc2NpZCUzZDEwMSUyNml0ZW1pZCUzZDM2NjU0NjE5MTI4OSUyNnRhcmdldGlkJTNkJTI2ZGV2aWNlJTNkYyUyNm1rdHlwZSUzZCUyNmdvb2dsZWxvYyUzZDk5MzcwJTI2cG9pJTNkJTI2Y2FtcGFpZ25pZCUzZDYwNDIwMjMxMSUyNm1rZ3JvdXBpZCUzZDEyMjkyNTUwNTM2ODk0NjAlMjZybHNhdGFyZ2V0JTNkJTI2YWJjSWQlM2QlMjZtZXJjaGFudGlkJTNkNTEyOTElMjZtc2Nsa2lkJTNkMzMzMTA5Njk3NzI2MTViZGFmZmM2M2RmNDFmMWUwNmQ%26rlid%3D33310969772615bdaffc63df41f1e06d&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                  - button "See more" [ref=e302]:
                    - img [ref=e303]
            - article "Yami Gautam wins best actor (female) National Award for Article 370, proud husband Aditya Dhar cheers for her" [ref=e304] [cursor=pointer]:
              - generic [ref=e306]:
                - img [ref=e307]
                - generic [ref=e308]:
                  - generic [ref=e309]:
                    - generic [ref=e310]:
                      - generic [ref=e311]:
                        - img [ref=e312]
                        - generic [ref=e313]: Hindustan Times
                      - generic [ref=e314]: ·
                      - generic [ref=e315]: 2d
                    - link "Yami Gautam wins best actor (female) National Award for Article 370, proud husband Aditya Dhar cheers for her, Hindustan Times" [ref=e316]:
                      - /url: https://www.msn.com/en-in/entertainment/celebrities/yami-gautam-wins-best-actor-female-national-award-for-article-370-proud-husband-aditya-dhar-cheers-for-her/ar-AA2cJJ58
                      - text: Yami Gautam wins best actor (female) National Award for Article 370, proud husband Aditya Dhar cheers for her
                  - generic "Yami Gautam wins best actor (female) National Award for Article 370, proud husband Aditya Dhar cheers for her" [ref=e319]:
                    - generic [ref=e321]:
                      - generic [ref=e322]:
                        - button "144 Likes" [ref=e323]:
                          - generic [ref=e324]:
                            - img [ref=e325]
                            - generic [ref=e327]: "144"
                        - button "Dislike" [ref=e328]:
                          - img [ref=e330]
                      - link "Start the conversation" [ref=e333]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/yami-gautam-wins-best-actor-female-national-award-for-article-370-proud-husband-aditya-dhar-cheers-for-her/ar-AA2cJJ58#comments
                        - button "Start the conversation" [ref=e334]:
                          - img [ref=e335]
                - generic [ref=e337]:
                  - button "Hide this story" [ref=e338]:
                    - img [ref=e339]
                    - text: Hide this story
                  - button "See more" [ref=e340]:
                    - img [ref=e341]
            - article [ref=e342] [cursor=pointer]:
              - generic [ref=e346]:
                - generic: Sponsored
            - article "Unbiased Peptide Vendor Reviews From Real Researchers" [ref=e347] [cursor=pointer]:
              - generic [ref=e349]:
                - img [ref=e350]
                - generic [ref=e351]:
                  - generic [ref=e352]:
                    - generic [ref=e355]: peptidecritic.com
                    - link "Unbiased Peptide Vendor Reviews From Real Researchers, peptidecritic.com" [ref=e356]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?d=2bM9vRt5bsojAxO39Y0sElI0C-ZXoYCFqf7gGGRLbGkgiXSRlIM86O_n-jpb8QL8xaE7CXCFdTDU1laaYCnxozMrsNov4d2w4qUkptZibdIElgLm_dabd9GXa3gLfB1Tkhl6B4hqhz5tJbjbxeBEUkPteKyWJqMXkyr0ART8KmHc_JamgJPnEYN7IaLs4GS1w-jE6cp5-FiFsV6bmeSHqnuxGviMPsXzSl2mA5XVvpshaNlBCiE6QNY1fq99FH4Xb4eqJ_REr2yZnlKYSMLT64E28P05ZkgClWHuDh0L_h0hAgcYOhUsG5utsu8WPKG0qubvnxq3cwyogCkQpU_jPLtu0g&e=1&n=Fuu7Ilx2HwFfE9k-&rId=e34e9b94-bcb2-499c-b2f7-c75ea613b7eb&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8_YNmh4h2AUoYQr6Fugh49TVUCUwkXR1O_ITzCsFrFBDbPyl5E_CXqsCIgNFjgON3wRymrCuJ27uzrJbap4eQUlV8llncnvutIt4t3Hq10oyWaXMqV2bFANqWnhBLKCknSocc1907a_XgDyI6rxmIzk7srzI862KVMnGLUINIfHUyMR00AyHe0Dx1SksMUeGoskSwL8oKwqQTXGEb2Js46O9rVRQ%26u%3DaHR0cHMlM2ElMmYlMmZwZXB0aWRlY3JpdGljLmNvbSUyZmxwJTJmY29tbXVuaXR5JTNmbXNjbGtpZCUzZDRhMWU1NWM5MmY1MzE5MWJkNjE0M2Y3ZjE5ODQ2Zjll%26rlid%3D4a1e55c92f53191bd6143f7f19846f9e&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                      - text: Unbiased Peptide Vendor Reviews From Real Researchers
                  - link "Sponsored" [ref=e358]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?d=2bM9vRt5bsojAxO39Y0sElI0C-ZXoYCFqf7gGGRLbGkgiXSRlIM86O_n-jpb8QL8xaE7CXCFdTDU1laaYCnxozMrsNov4d2w4qUkptZibdIElgLm_dabd9GXa3gLfB1Tkhl6B4hqhz5tJbjbxeBEUkPteKyWJqMXkyr0ART8KmHc_JamgJPnEYN7IaLs4GS1w-jE6cp5-FiFsV6bmeSHqnuxGviMPsXzSl2mA5XVvpshaNlBCiE6QNY1fq99FH4Xb4eqJ_REr2yZnlKYSMLT64E28P05ZkgClWHuDh0L_h0hAgcYOhUsG5utsu8WPKG0qubvnxq3cwyogCkQpU_jPLtu0g&e=1&n=Fuu7Ilx2HwFfE9k-&rId=e34e9b94-bcb2-499c-b2f7-c75ea613b7eb&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8_YNmh4h2AUoYQr6Fugh49TVUCUwkXR1O_ITzCsFrFBDbPyl5E_CXqsCIgNFjgON3wRymrCuJ27uzrJbap4eQUlV8llncnvutIt4t3Hq10oyWaXMqV2bFANqWnhBLKCknSocc1907a_XgDyI6rxmIzk7srzI862KVMnGLUINIfHUyMR00AyHe0Dx1SksMUeGoskSwL8oKwqQTXGEb2Js46O9rVRQ%26u%3DaHR0cHMlM2ElMmYlMmZwZXB0aWRlY3JpdGljLmNvbSUyZmxwJTJmY29tbXVuaXR5JTNmbXNjbGtpZCUzZDRhMWU1NWM5MmY1MzE5MWJkNjE0M2Y3ZjE5ODQ2Zjll%26rlid%3D4a1e55c92f53191bd6143f7f19846f9e&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                - button "See more" [ref=e360]:
                  - img [ref=e361]
            - article [ref=e362] [cursor=pointer]:
              - generic [ref=e368]:
                - generic [ref=e370]:
                  - link "Cheyenne" [ref=e372]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Cheyenne,Wyoming
                    - heading "Cheyenne" [level=2] [ref=e373]
                  - button "My location" [ref=e374]
                  - button "More options" [ref=e376]
                - generic [ref=e380]:
                  - generic [ref=e381]:
                    - generic [ref=e383]:
                      - link "Mostly cloudy" [ref=e384]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Cheyenne,Wyoming
                        - img "Mostly cloudy" [ref=e385]
                      - link "12°C" [ref=e386]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Cheyenne,Wyoming
                        - generic [ref=e387]: ‎12‎
                        - generic [ref=e389]: ‎°C‎
                    - generic [ref=e391]:
                      - link "Temperatures to plummet next Wednesday" [ref=e393]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Cheyenne,Wyoming
                        - text: Temperatures to plummet next Wednesday
                      - link "See full forecast" [ref=e395]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Cheyenne,Wyoming
                        - img "arrow" [ref=e396]
                  - list [ref=e399]:
                    - listitem [ref=e400]:
                      - generic "Weather forecast Today High temperature 19° Low temperature 12°" [ref=e401]:
                        - link "Weather forecast Today High temperature 19° Low temperature 12°" [ref=e402]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Cheyenne,Wyoming
                          - generic:
                            - generic:
                              - generic "Today"
                              - generic:
                                - img "Light rain showers"
                              - generic:
                                - generic "High temperature 19°": ‎19°‎
                                - generic "Low temperature 12°": ‎12°‎
                    - listitem [ref=e403]:
                      - generic "Weather forecast Sat High temperature 25° Low temperature 10°" [ref=e404]:
                        - link "Weather forecast Sat High temperature 25° Low temperature 10°" [ref=e405]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Cheyenne,Wyoming
                          - generic:
                            - generic:
                              - generic "Sat"
                              - generic:
                                - img "Sunny"
                              - generic:
                                - generic "High temperature 25°": ‎25°‎
                                - generic "Low temperature 10°": ‎10°‎
                    - listitem [ref=e406]:
                      - generic "Weather forecast Sun High temperature 25° Low temperature 12°" [ref=e407]:
                        - link "Weather forecast Sun High temperature 25° Low temperature 12°" [ref=e408]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Cheyenne,Wyoming
                          - generic:
                            - generic:
                              - generic "Sun"
                              - generic:
                                - img "Mostly sunny"
                              - generic:
                                - generic "High temperature 25°": ‎25°‎
                                - generic "Low temperature 12°": ‎12°‎
                    - listitem [ref=e409]:
                      - generic "Weather forecast Mon High temperature 20° Low temperature 10°" [ref=e410]:
                        - link "Weather forecast Mon High temperature 20° Low temperature 10°" [ref=e411]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Cheyenne,Wyoming
                          - generic:
                            - generic:
                              - generic "Mon"
                              - generic:
                                - img "Mostly cloudy"
                              - generic:
                                - generic "High temperature 20°": ‎20°‎
                                - generic "Low temperature 10°": ‎10°‎
                    - listitem [ref=e412]:
                      - generic "Weather forecast Tue High temperature 18° Low temperature 8°" [ref=e413]:
                        - link "Weather forecast Tue High temperature 18° Low temperature 8°" [ref=e414]:
                          - /url: https://www.msn.com/en-in/weather/forecast/in-Cheyenne,Wyoming
                          - generic:
                            - generic:
                              - generic "Tue"
                              - generic:
                                - img "Partly sunny"
                              - generic:
                                - generic "High temperature 18°": ‎18°‎
                                - generic "Low temperature 8°": ‎8°‎
                - button "See full forecast" [ref=e417]
            - article [ref=e418] [cursor=pointer]:
              - generic [ref=e423]:
                - generic [ref=e425]:
                  - link "Top stories" [ref=e427]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6ab636d5b09948798e8ac813fc6d6eff&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e428]
                  - button "More options" [ref=e430]
                - list [ref=e433]:
                  - listitem [ref=e434]:
                    - link "Press Trust of India now Congress youth wing protesters don Gyanesh Kumar masks, demand CEC's resignation in Delhi" [ref=e435]:
                      - /url: https://www.msn.com/en-in/news/other/congress-youth-wing-protesters-don-gyanesh-kumar-masks-demand-cec-s-resignation-in-delhi/ar-AA2cWUQ0
                      - generic [ref=e436]:
                        - generic [ref=e437]:
                          - img [ref=e438]
                          - generic [ref=e439]:
                            - generic: Press Trust of India ·now
                        - generic [ref=e440]: Congress youth wing protesters don Gyanesh Kumar masks, demand CEC's resignation in Delhi
                  - listitem [ref=e441]:
                    - 'link "WION now Asian Games 2026: How Suruchi and Kamaljeet ended India''s wait for shooting gold" [ref=e442]':
                      - /url: https://www.msn.com/en-in/sports/general/asian-games-2026-how-suruchi-and-kamaljeet-ended-india-s-wait-for-shooting-gold/ar-AA2cWHd2
                      - generic [ref=e443]:
                        - generic [ref=e444]:
                          - img [ref=e445]
                          - generic [ref=e446]:
                            - generic: WION ·now
                        - generic [ref=e447]: "Asian Games 2026: How Suruchi and Kamaljeet ended India's wait for shooting gold"
                  - listitem [ref=e448]:
                    - link "The Indian Express 2h Another harassment video surfaces from Bihar’s Banka, third incident in 7 days" [ref=e449]:
                      - /url: https://www.msn.com/en-in/news/other/another-harassment-video-surfaces-from-bihar-s-banka-third-incident-in-7-days/ar-AA2cWjjn
                      - generic [ref=e450]:
                        - generic [ref=e451]:
                          - img [ref=e452]
                          - generic [ref=e453]:
                            - generic: The Indian Express ·2h
                        - generic [ref=e454]: Another harassment video surfaces from Bihar’s Banka, third incident in 7 days
                - generic [ref=e456]:
                  - generic [ref=e457]:
                    - generic "Previous" [ref=e458]:
                      - button "Previous" [ref=e459]
                    - tablist [ref=e461]:
                      - tab "Page 1" [selected] [ref=e462]
                      - tab "Page 2" [ref=e464]
                      - tab "Page 3" [ref=e466]
                    - generic "Next" [ref=e468]:
                      - button "Next" [ref=e469]
                  - link "See more" [ref=e471]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6ab636d5b09948798e8ac813fc6d6eff&ocid=hpmsn
            - article "Linux Assembly Language Programming" [ref=e472] [cursor=pointer]:
              - generic [ref=e474]:
                - img [ref=e475]
                - generic [ref=e476]:
                  - generic [ref=e477]:
                    - generic [ref=e480]: eBay
                    - link "Linux Assembly Language Programming, eBay" [ref=e481]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?d=He6RJTGA93YIwBrnVLYXG3LAMifpgRzzfweP6YjVDhHxji6CuMcfvTZ6l48J5gIBbXoAhTNXGbAoZGg_RQT1tUDQiSNVAXaP5TRxfjqVtARCUdlomx_JuGKg4n6nojw8lTK8_plKKJKh3BgueYJcp1wYpGjpRHWWbHfgudqj_Q9qJ3g4C-B_Fu8GbaV-3-GwvwXufUd4ZsnuganGnMfLgqR519a0Sg_9coBR0kM_zBBs7UlbySnC5Z4FcuONVrrAhX9z7hovyUAbb9pYMnM0M--cuoNlG7aJVjXeN9VBlC32vNNPiIaLEkF6PjRmT4N-QlvAz8DtEoH0RZeZOOV-E7iHhg&e=1&n=pSxY1V5rhWNmW59W&rId=e34e9b94-bcb2-499c-b2f7-c75ea613b7eb&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8qtWklT12-nzWh9PMgNiSgjVUCUyQTHdhpUzpvc344mrFJ-QGElBiYI90fJPPhyLxfjcRd5j23t1-zc102SpX7vAerQpWPwByAgRwJrHU-ypPXba4rpXR-EjheWIVI6ykgAEI0EBCYIwDbiFFZiGDwqIXiL8r-qyeM2bzJhurY1CZvNm1lmC9BgbSEOGJFBBu9p-30qSqQ4ZhY5ymAvMBar3EPyY%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZWJheS5jb20lMmZpdG0lMmYxMjY2NjA3NDQyMDclM2ZjaG4lM2RwcyUyNl90cmtwYXJtcyUzZGlzcHIlMjUzRDElMjZhbWRhdGElM2RlbmMlMjUzQTE5WEFOTUEzY1NGaWdiMndGc1BfbjRnMCUyNm5vcm92ZXIlM2QxJTI2bWtldnQlM2QxJTI2bWtyaWQlM2Q3MTEtMTcyMjk3LTQzMzMwMS0yJTI2bWtjaWQlM2Q0JTI2bWtzY2lkJTNkMTAxJTI2aXRlbWlkJTNkMTI2NjYwNzQ0MjA3JTI2dGFyZ2V0aWQlM2QlMjZkZXZpY2UlM2RjJTI2bWt0eXBlJTNkJTI2Z29vZ2xlbG9jJTNkOTkzNzAlMjZwb2klM2QlMjZjYW1wYWlnbmlkJTNkNjA0MjAyMzEzJTI2bWtncm91cGlkJTNkMTIzNTg1MjEyMjUwMTUzMCUyNnJsc2F0YXJnZXQlM2QlMjZhYmNJZCUzZCUyNm1lcmNoYW50aWQlM2Q1MTI5MSUyNm1zY2xraWQlM2RlOGUyYmU5MDViOWIxNzNiNzZkOGQ0MjY2ZDRjMWM0Yg%26rlid%3De8e2be905b9b173b76d8d4266d4c1c4b&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                      - text: Linux Assembly Language Programming
                  - link "Sponsored" [ref=e483]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?d=He6RJTGA93YIwBrnVLYXG3LAMifpgRzzfweP6YjVDhHxji6CuMcfvTZ6l48J5gIBbXoAhTNXGbAoZGg_RQT1tUDQiSNVAXaP5TRxfjqVtARCUdlomx_JuGKg4n6nojw8lTK8_plKKJKh3BgueYJcp1wYpGjpRHWWbHfgudqj_Q9qJ3g4C-B_Fu8GbaV-3-GwvwXufUd4ZsnuganGnMfLgqR519a0Sg_9coBR0kM_zBBs7UlbySnC5Z4FcuONVrrAhX9z7hovyUAbb9pYMnM0M--cuoNlG7aJVjXeN9VBlC32vNNPiIaLEkF6PjRmT4N-QlvAz8DtEoH0RZeZOOV-E7iHhg&e=1&n=pSxY1V5rhWNmW59W&rId=e34e9b94-bcb2-499c-b2f7-c75ea613b7eb&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8qtWklT12-nzWh9PMgNiSgjVUCUyQTHdhpUzpvc344mrFJ-QGElBiYI90fJPPhyLxfjcRd5j23t1-zc102SpX7vAerQpWPwByAgRwJrHU-ypPXba4rpXR-EjheWIVI6ykgAEI0EBCYIwDbiFFZiGDwqIXiL8r-qyeM2bzJhurY1CZvNm1lmC9BgbSEOGJFBBu9p-30qSqQ4ZhY5ymAvMBar3EPyY%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZWJheS5jb20lMmZpdG0lMmYxMjY2NjA3NDQyMDclM2ZjaG4lM2RwcyUyNl90cmtwYXJtcyUzZGlzcHIlMjUzRDElMjZhbWRhdGElM2RlbmMlMjUzQTE5WEFOTUEzY1NGaWdiMndGc1BfbjRnMCUyNm5vcm92ZXIlM2QxJTI2bWtldnQlM2QxJTI2bWtyaWQlM2Q3MTEtMTcyMjk3LTQzMzMwMS0yJTI2bWtjaWQlM2Q0JTI2bWtzY2lkJTNkMTAxJTI2aXRlbWlkJTNkMTI2NjYwNzQ0MjA3JTI2dGFyZ2V0aWQlM2QlMjZkZXZpY2UlM2RjJTI2bWt0eXBlJTNkJTI2Z29vZ2xlbG9jJTNkOTkzNzAlMjZwb2klM2QlMjZjYW1wYWlnbmlkJTNkNjA0MjAyMzEzJTI2bWtncm91cGlkJTNkMTIzNTg1MjEyMjUwMTUzMCUyNnJsc2F0YXJnZXQlM2QlMjZhYmNJZCUzZCUyNm1lcmNoYW50aWQlM2Q1MTI5MSUyNm1zY2xraWQlM2RlOGUyYmU5MDViOWIxNzNiNzZkOGQ0MjY2ZDRjMWM0Yg%26rlid%3De8e2be905b9b173b76d8d4266d4c1c4b&rtype=targetURL&sv=2048f17184094805b470e2e73aceb760
                - button "See more" [ref=e485]:
                  - img [ref=e486]
            - 'article "My father was of loose character: Kanpur millionaire''s son on murder motive" [ref=e487] [cursor=pointer]':
              - generic [ref=e489]:
                - img [ref=e490]
                - generic [ref=e491]:
                  - generic [ref=e492]:
                    - generic [ref=e493]:
                      - generic [ref=e494]:
                        - img [ref=e495]
                        - generic [ref=e496]: India Today
                      - generic [ref=e497]: ·
                      - generic [ref=e498]: 14h
                    - 'link "My father was of loose character: Kanpur millionaire''s son on murder motive, India Today" [ref=e499]':
                      - /url: https://www.msn.com/en-in/news/other/my-father-was-of-loose-character-kanpur-millionaire-s-son-on-murder-motive/ar-AA2cV6rY
                      - text: "My father was of loose character: Kanpur millionaire's son on murder motive"
                  - 'generic "My father was of loose character: Kanpur millionaire''s son on murder motive" [ref=e502]':
                    - generic [ref=e504]:
                      - generic [ref=e505]:
                        - button "37 Likes" [ref=e506]:
                          - generic [ref=e507]:
                            - img [ref=e508]
                            - generic [ref=e510]: "37"
                        - button "Dislike" [ref=e511]:
                          - img [ref=e513]
                      - link "View comments 2 Comment" [ref=e516]:
                        - /url: https://www.msn.com/en-in/news/other/my-father-was-of-loose-character-kanpur-millionaire-s-son-on-murder-motive/ar-AA2cV6rY#comments
                        - button "View comments 2 Comment" [ref=e517]:
                          - img [ref=e518]
                        - generic [ref=e520]: "2"
                - generic [ref=e521]:
                  - button "Hide this story" [ref=e522]:
                    - img [ref=e523]
                    - text: Hide this story
                  - button "See more" [ref=e524]:
                    - img [ref=e525]
            - article "18-year-old hits jackpot, Tamil Nadu CM Vijay announces Rs 75 lakh cash reward after Asian Games gold" [ref=e526] [cursor=pointer]:
              - generic [ref=e528]:
                - img [ref=e529]
                - generic [ref=e530]:
                  - generic [ref=e531]:
                    - generic [ref=e532]:
                      - generic [ref=e533]:
                        - img [ref=e534]
                        - generic [ref=e535]: Moneycontrol
                      - generic [ref=e536]: ·
                      - generic [ref=e537]: 20h
                    - link "18-year-old hits jackpot, Tamil Nadu CM Vijay announces Rs 75 lakh cash reward after Asian Games gold, Moneycontrol" [ref=e538]:
                      - /url: https://www.msn.com/en-in/sports/general/18-year-old-hits-jackpot-tamil-nadu-cm-vijay-announces-rs-75-lakh-cash-reward-after-asian-games-gold/ar-AA2cTmEJ
                      - text: 18-year-old hits jackpot, Tamil Nadu CM Vijay announces Rs 75 lakh cash reward after Asian Games gold
                  - generic "18-year-old hits jackpot, Tamil Nadu CM Vijay announces Rs 75 lakh cash reward after Asian Games gold" [ref=e541]:
                    - generic [ref=e543]:
                      - generic [ref=e544]:
                        - button "156 Likes" [ref=e545]:
                          - generic [ref=e546]:
                            - img [ref=e547]
                            - generic [ref=e549]: "156"
                        - button "Dislike" [ref=e550]:
                          - img [ref=e552]
                      - link "Start the conversation" [ref=e555]:
                        - /url: https://www.msn.com/en-in/sports/general/18-year-old-hits-jackpot-tamil-nadu-cm-vijay-announces-rs-75-lakh-cash-reward-after-asian-games-gold/ar-AA2cTmEJ#comments
                        - button "Start the conversation" [ref=e556]:
                          - img [ref=e557]
                - generic [ref=e559]:
                  - button "Hide this story" [ref=e560]:
                    - img [ref=e561]
                    - text: Hide this story
                  - button "See more" [ref=e562]:
                    - img [ref=e563]
          - generic [ref=e564]:
            - article [ref=e565] [cursor=pointer]:
              - generic [ref=e570]:
                - generic [ref=e572]:
                  - link "Top Engaging News" [ref=e574]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6ab636d5b09948798e8ac813fc6d6eff
                    - heading "Top Engaging News" [level=2] [ref=e575]
                  - button "More options" [ref=e577]
                - generic [ref=e579]:
                  - 'link "The Times of India 4 Comments \"We know the risk\": Meet Seema Dhaka, the Delhi cop who traced 76 missing children and made history with her promotion" [ref=e581]':
                    - /url: https://www.msn.com/en-in/news/other/we-know-the-risk-meet-seema-dhaka-the-delhi-cop-who-traced-76-missing-children-and-made-history-with-her-promotion/ar-AA2cSOVw
                    - generic [ref=e582]:
                      - img [ref=e583]
                      - generic [ref=e584]: The Times of India
                      - link "4 Comments" [ref=e586]:
                        - /url: https://www.msn.com/en-in/news/other/we-know-the-risk-meet-seema-dhaka-the-delhi-cop-who-traced-76-missing-children-and-made-history-with-her-promotion/ar-AA2cSOVw#comments
                        - img [ref=e587]
                        - paragraph [ref=e588]: "4"
                    - paragraph [ref=e589]: "\"We know the risk\": Meet Seema Dhaka, the Delhi cop who traced 76 missing children and made history with her promotion"
                  - 'link "News18 7 Comments ‘One Ukraine firm makes 100 missiles a month, India can’t make just 200-300’: Defence secy at News18 DEFCON 2026" [ref=e591]':
                    - /url: https://www.msn.com/en-in/news/other/one-ukraine-firm-makes-100-missiles-a-month-india-can-t-make-just-200-300-defence-secy-at-news18-defcon-2026/ar-AA2cTNXf
                    - generic [ref=e592]:
                      - img [ref=e593]
                      - generic [ref=e594]: News18
                      - link "7 Comments" [ref=e596]:
                        - /url: https://www.msn.com/en-in/news/other/one-ukraine-firm-makes-100-missiles-a-month-india-can-t-make-just-200-300-defence-secy-at-news18-defcon-2026/ar-AA2cTNXf#comments
                        - img [ref=e597]
                        - paragraph [ref=e598]: "7"
                    - paragraph [ref=e599]: "‘One Ukraine firm makes 100 missiles a month, India can’t make just 200-300’: Defence secy at News18 DEFCON 2026"
                  - 'link "The Economic Times 2 Comments Forget stocks, property and gold: Best investment is... Harsh Goenka shares Warren Buffett’s advice on where to put your time & effort" [ref=e601]':
                    - /url: https://www.msn.com/en-in/money/top-stocks/forget-stocks-property-and-gold-best-investment-is-harsh-goenka-shares-warren-buffett-s-advice-on-where-to-put-your-time-effort/ar-AA2cUuvZ
                    - generic [ref=e602]:
                      - img [ref=e603]
                      - generic [ref=e604]: The Economic Times
                      - link "2 Comments" [ref=e606]:
                        - /url: https://www.msn.com/en-in/money/top-stocks/forget-stocks-property-and-gold-best-investment-is-harsh-goenka-shares-warren-buffett-s-advice-on-where-to-put-your-time-effort/ar-AA2cUuvZ#comments
                        - img [ref=e607]
                        - paragraph [ref=e608]: "2"
                    - paragraph [ref=e609]: "Forget stocks, property and gold: Best investment is... Harsh Goenka shares Warren Buffett’s advice on where to put your time & effort"
                - generic [ref=e611]:
                  - generic [ref=e612]:
                    - generic "Previous" [ref=e613]:
                      - button "Previous" [ref=e614]
                    - tablist [ref=e616]:
                      - tab "Page 1" [selected] [ref=e617]
                      - tab "Page 2" [ref=e619]
                      - tab "Page 3" [ref=e621]
                    - generic "Next" [ref=e623]:
                      - button "Next" [ref=e624]
                  - link "See more" [ref=e626]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6ab636d5b09948798e8ac813fc6d6eff
            - article [ref=e627] [cursor=pointer]:
              - generic [ref=e632]:
                - generic [ref=e634]:
                  - link "Games" [ref=e636]:
                    - /url: https://www.msn.com/en-in/play
                    - heading "Games" [level=2] [ref=e637]
                  - button "More options" [ref=e639]
                - list [ref=e643]:
                  - generic:
                    - listitem [ref=e644]:
                      - link "+1 Speed Escape Obby" [ref=e645]:
                        - /url: https://www.msn.com/en-in/play/games/1-speed-escape-obby/cg-9npnzjd1df3l?ocid=hpmsn&cvid=6ab636d5b09948798e8ac813fc6d6eff&ei=5
                        - generic [ref=e646]:
                          - img "+1 Speed Escape Obby"
                    - listitem [ref=e647]:
                      - link "Krakax.com" [ref=e648]:
                        - /url: https://www.msn.com/en-in/play/games/krakaxcom/cg-9pljz194bgfq?ocid=hpmsn&cvid=6ab636d5b09948798e8ac813fc6d6eff&ei=5
                        - generic [ref=e649]:
                          - img "Krakax.com"
                    - listitem [ref=e650]:
                      - link "Rally Champion" [ref=e651]:
                        - /url: https://www.msn.com/en-in/play/games/rally-champion/cg-9pmdcq52j3hj?ocid=hpmsn&cvid=6ab636d5b09948798e8ac813fc6d6eff&ei=5
                        - generic [ref=e652]:
                          - img "Rally Champion"
                    - listitem [ref=e653]:
                      - link "Deadly Descent" [ref=e654]:
                        - /url: https://www.msn.com/en-in/play/games/deadly-descent/cg-9n7vxxr7llpk?ocid=hpmsn&cvid=6ab636d5b09948798e8ac813fc6d6eff&ei=5
                        - generic [ref=e655]:
                          - img "Deadly Descent"
                    - listitem [ref=e656]:
                      - link "Jelly Run 2048" [ref=e657]:
                        - /url: https://www.msn.com/en-in/play/games/jelly-run-2048/cg-9nbckjw55fsv?ocid=hpmsn&cvid=6ab636d5b09948798e8ac813fc6d6eff&ei=5
                        - generic [ref=e658]:
                          - img "Jelly Run 2048"
                    - listitem [ref=e659]:
                      - link "Ghost Range Sniper" [ref=e660]:
                        - /url: https://www.msn.com/en-in/play/games/ghost-range-sniper/cg-9mv8gjg4grt6?ocid=hpmsn&cvid=6ab636d5b09948798e8ac813fc6d6eff&ei=5
                        - generic [ref=e661]:
                          - img "Ghost Range Sniper"
                    - listitem [ref=e662]:
                      - link "Mega Shark" [ref=e663]:
                        - /url: https://www.msn.com/en-in/play/games/mega-shark/cg-9n08jz7kbjx5?ocid=hpmsn&cvid=6ab636d5b09948798e8ac813fc6d6eff&ei=5
                        - generic [ref=e664]:
                          - img "Mega Shark"
                    - listitem [ref=e665]:
                      - link "Rooftop Run" [ref=e666]:
                        - /url: https://www.msn.com/en-in/play/games/rooftop-run/cg-9plgt00f15xs?ocid=hpmsn&cvid=6ab636d5b09948798e8ac813fc6d6eff&ei=5
                        - generic [ref=e667]:
                          - img "Rooftop Run"
                    - listitem [ref=e668]:
                      - link "TapTap Arrow" [ref=e669]:
                        - /url: https://www.msn.com/en-in/play/games/taptap-arrow/cg-9ng0c12cnfsk?ocid=hpmsn&cvid=6ab636d5b09948798e8ac813fc6d6eff&ei=5
                        - generic [ref=e670]:
                          - img "TapTap Arrow"
                - generic [ref=e672]:
                  - generic [ref=e673]:
                    - generic "Previous" [ref=e674]:
                      - button "Previous" [ref=e675]
                    - tablist [ref=e677]:
                      - tab "Page 1" [selected] [ref=e678]
                      - tab "Page 2" [ref=e680]
                    - generic "Next" [ref=e682]:
                      - button "Next" [ref=e683]
                  - link "Explore more games" [ref=e685]:
                    - /url: https://www.msn.com/en-in/play
            - article "Medha Roopam, daughter of CEC Gyanesh Kumar, at centre of fresh controversy" [ref=e686] [cursor=pointer]:
              - generic [ref=e688]:
                - img [ref=e689]
                - generic [ref=e690]:
                  - generic [ref=e691]:
                    - generic [ref=e692]:
                      - generic [ref=e693]:
                        - img [ref=e694]
                        - generic [ref=e695]: Times Now
                      - generic [ref=e696]: ·
                      - generic [ref=e697]: 3h
                    - link "Medha Roopam, daughter of CEC Gyanesh Kumar, at centre of fresh controversy, Times Now" [ref=e698]:
                      - /url: https://www.msn.com/en-in/news/other/medha-roopam-daughter-of-cec-gyanesh-kumar-at-centre-of-fresh-controversy/ar-AA2cVyAU
                      - text: Medha Roopam, daughter of CEC Gyanesh Kumar, at centre of fresh controversy
                  - generic "Medha Roopam, daughter of CEC Gyanesh Kumar, at centre of fresh controversy" [ref=e701]:
                    - generic [ref=e703]:
                      - generic [ref=e704]:
                        - button "22 Likes" [ref=e705]:
                          - generic [ref=e706]:
                            - img [ref=e707]
                            - generic [ref=e709]: "22"
                        - button "Dislike" [ref=e710]:
                          - img [ref=e712]
                      - link "Start the conversation" [ref=e715]:
                        - /url: https://www.msn.com/en-in/news/other/medha-roopam-daughter-of-cec-gyanesh-kumar-at-centre-of-fresh-controversy/ar-AA2cVyAU#comments
                        - button "Start the conversation" [ref=e716]:
                          - img [ref=e717]
                - generic [ref=e719]:
                  - button "Hide this story" [ref=e720]:
                    - img [ref=e721]
                    - text: Hide this story
                  - button "See more" [ref=e722]:
                    - img [ref=e723]
            - 'article "No proposal from petroleum ministry to scrap Rs 5 fee on UPI transactions at fuel stations: Sources" [ref=e724] [cursor=pointer]':
              - generic [ref=e726]:
                - img [ref=e727]
                - generic [ref=e728]:
                  - generic [ref=e729]:
                    - generic [ref=e730]:
                      - generic [ref=e731]:
                        - img [ref=e732]
                        - generic [ref=e733]: NDTV Profit
                      - generic [ref=e734]: ·
                      - generic [ref=e735]: 17h
                    - 'link "No proposal from petroleum ministry to scrap Rs 5 fee on UPI transactions at fuel stations: Sources, NDTV Profit" [ref=e736]':
                      - /url: https://www.msn.com/en-in/money/economy/no-proposal-from-petroleum-ministry-to-scrap-rs-5-fee-on-upi-transactions-at-fuel-stations-sources/ar-AA2cUyy1
                      - text: "No proposal from petroleum ministry to scrap Rs 5 fee on UPI transactions at fuel stations: Sources"
                  - 'generic "No proposal from petroleum ministry to scrap Rs 5 fee on UPI transactions at fuel stations: Sources" [ref=e739]':
                    - generic [ref=e741]:
                      - generic [ref=e742]:
                        - button "4 Likes" [ref=e743]:
                          - generic [ref=e744]:
                            - img [ref=e745]
                            - generic [ref=e747]: "4"
                        - button "Dislike" [ref=e748]:
                          - img [ref=e750]
                      - link "Start the conversation" [ref=e753]:
                        - /url: https://www.msn.com/en-in/money/economy/no-proposal-from-petroleum-ministry-to-scrap-rs-5-fee-on-upi-transactions-at-fuel-stations-sources/ar-AA2cUyy1#comments
                        - button "Start the conversation" [ref=e754]:
                          - img [ref=e755]
                - generic [ref=e757]:
                  - button "Hide this story" [ref=e758]:
                    - img [ref=e759]
                    - text: Hide this story
                  - button "See more" [ref=e760]:
                    - img [ref=e761]
            - article [ref=e762] [cursor=pointer]
            - article "Those tiny bumps on the F and J keys aren't manufacturing marks; they let your fingers find the home row without looking at the keyboard" [ref=e769] [cursor=pointer]:
              - generic [ref=e771]:
                - img [ref=e772]
                - generic [ref=e773]:
                  - generic [ref=e774]:
                    - generic [ref=e775]:
                      - generic [ref=e776]:
                        - img [ref=e777]
                        - generic [ref=e778]: The Economic Times
                      - generic [ref=e779]: ·
                      - generic [ref=e780]: 4w
                    - link "Those tiny bumps on the F and J keys aren't manufacturing marks; they let your fingers find the home row without looking at the keyboard, The Economic Times" [ref=e781]:
                      - /url: https://www.msn.com/en-in/technology/general/those-tiny-bumps-on-the-f-and-j-keys-aren-t-manufacturing-marks-they-let-your-fingers-find-the-home-row-without-looking-at-the-keyboard/ar-AA2b1FNC
                      - text: Those tiny bumps on the F and J keys aren't manufacturing marks; they let your fingers find the home row without looking at the keyboard
                  - generic "Those tiny bumps on the F and J keys aren't manufacturing marks; they let your fingers find the home row without looking at the keyboard" [ref=e784]:
                    - generic [ref=e786]:
                      - generic [ref=e787]:
                        - button "177 Likes" [ref=e788]:
                          - generic [ref=e789]:
                            - img [ref=e790]
                            - generic [ref=e792]: "177"
                        - button "Dislike" [ref=e793]:
                          - img [ref=e795]
                      - link "Start the conversation" [ref=e798]:
                        - /url: https://www.msn.com/en-in/technology/general/those-tiny-bumps-on-the-f-and-j-keys-aren-t-manufacturing-marks-they-let-your-fingers-find-the-home-row-without-looking-at-the-keyboard/ar-AA2b1FNC#comments
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
                  - link "Silver Silver Rising fast ‎+1.65%‎ 65.06" [ref=e855]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwr7&noti=Price&ocid=hpmsn
                    - generic [ref=e856]:
                      - generic [ref=e857]:
                        - generic [ref=e858]: Silver
                        - img "Silver" [ref=e859]
                      - generic [ref=e861]: Rising fast
                    - generic [ref=e866]:
                      - generic [ref=e867]: ‎+1.65%‎
                      - generic [ref=e868]: "65.06"
                    - button "Add to watchlist" [ref=e871]:
                      - img [ref=e872]
                  - link "Dominion Energy, Inc. D ‎-1.26%‎ 60.40" [ref=e876]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a1qpw7&ocid=hpmsn
                    - generic [ref=e877]:
                      - generic [ref=e879]: Dominion Energy, Inc.
                      - generic [ref=e881]: D
                    - generic [ref=e886]:
                      - generic [ref=e887]: ‎-1.26%‎
                      - generic [ref=e888]: "60.40"
                    - button "Add to watchlist" [ref=e891]:
                      - img [ref=e892]
                  - link "Vodafone Idea Ltd IDEA ‎+1.42%‎ 14.32" [ref=e896]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahi8u2&ocid=hpmsn
                    - generic [ref=e897]:
                      - generic [ref=e899]: Vodafone Idea Ltd
                      - generic [ref=e901]: IDEA
                    - generic [ref=e906]:
                      - generic [ref=e907]: ‎+1.42%‎
                      - generic [ref=e908]: "14.32"
                    - button "Add to watchlist" [ref=e911]:
                      - img [ref=e912]
                  - link "Adani Power Ltd Adani Power Ltd Rising fast ‎+1.65%‎ 202.78" [ref=e916]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahgr9c&noti=Price&ocid=hpmsn
                    - generic [ref=e917]:
                      - generic [ref=e918]:
                        - generic [ref=e919]: Adani Power Ltd
                        - img "Adani Power Ltd" [ref=e920]
                      - generic [ref=e922]: Rising fast
                    - generic [ref=e927]:
                      - generic [ref=e928]: ‎+1.65%‎
                      - generic [ref=e929]: "202.78"
                    - button "Add to watchlist" [ref=e932]:
                      - img [ref=e933]
                - generic [ref=e937]:
                  - generic [ref=e938]:
                    - generic "Previous" [ref=e939]:
                      - button "Previous" [ref=e940]
                    - tablist [ref=e942]:
                      - tab "Page 1" [selected] [ref=e943]
                      - tab "Page 2" [ref=e945]
                      - tab "Page 3" [ref=e947]
                      - tab "Page 4" [ref=e949]
                      - tab "Page 5" [ref=e951]
                      - tab "Page 6"
                      - tab "Page 7"
                    - generic "Next" [ref=e953]:
                      - button "Next" [ref=e954]
                  - link "See watchlist suggestions" [ref=e956]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
          - article [ref=e958]
          - generic [ref=e960]:
            - article [ref=e961] [cursor=pointer]:
              - generic [ref=e966]:
                - generic [ref=e967]:
                  - generic [ref=e968]:
                    - link "Recommended videos" [ref=e969]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e970]
                    - link "Recommended videos" [ref=e973]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e974]:
                    - generic:
                      - link "See more" [ref=e975]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e976]:
                        - button "More options" [ref=e977]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e979]:
                  - generic [ref=e981]:
                    - generic [ref=e983]:
                      - generic:
                        - article "A seal was surrounded by orcas - then a humpback came charging in" [ref=e986]:
                          - generic [ref=e987]:
                            - img "A Seal Was Surrounded by Orcas - Then a Humpback Came Charging In" [ref=e989]
                            - generic [ref=e991]: 04:18
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e992]:
                              - generic [ref=e993]:
                                - img "TED" [ref=e994]
                                - generic [ref=e995]:
                                  - generic:
                                    - generic "TED" [ref=e996]
                                    - generic [ref=e997]: ·
                                    - generic [ref=e998]: 19h
                              - link "A seal was surrounded by orcas - then a humpback came charging in" [ref=e999]:
                                - /url: https://www.msn.com/en-in/news/other/a-seal-was-surrounded-by-orcas-then-a-humpback-came-charging-in/vi-AA2cTR4n?ocid=hpmsn
                                - heading "A seal was surrounded by orcas - then a humpback came charging in" [level=2] [ref=e1000]:
                                  - generic: A seal was surrounded by orcas - then a humpback came charging in
                            - button "See more" [ref=e1004]
                        - article "He booked a $9,400 first-class flight - then the crew turned his seat into a private bedroom" [ref=e1007]:
                          - generic [ref=e1008]:
                            - img "He Booked a $9,400 First-Class Flight - Then the Crew Turned His Seat Into a Private Bedroom" [ref=e1010]
                            - generic [ref=e1012]: 20:22
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1013]:
                              - generic [ref=e1014]:
                                - img "Trek Trendy" [ref=e1015]
                                - generic [ref=e1016]:
                                  - generic:
                                    - generic "Trek Trendy" [ref=e1017]
                                    - generic [ref=e1018]: ·
                                    - generic [ref=e1019]: 1h
                              - link "He booked a $9,400 first-class flight - then the crew turned his seat into a private bedroom" [ref=e1020]:
                                - /url: https://www.msn.com/en-in/travel/air-travel/he-booked-a-9-400-first-class-flight-then-the-crew-turned-his-seat-into-a-private-bedroom/vi-AA2bp7Lc?ocid=hpmsn
                                - heading "He booked a $9,400 first-class flight - then the crew turned his seat into a private bedroom" [level=2] [ref=e1021]:
                                  - generic: He booked a $9,400 first-class flight - then the crew turned his seat into a private bedroom
                            - button "See more" [ref=e1025]
                        - article "Why big phone brands ditched chargers - the reason nobody says out loud" [ref=e1028]:
                          - generic [ref=e1029]:
                            - img "Why big phone brands ditched chargers - the reason nobody says out loud" [ref=e1031]
                            - generic [ref=e1033]: 13:03
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1034]:
                              - generic [ref=e1035]:
                                - img "MrWhoseTheBoss" [ref=e1036]
                                - generic [ref=e1037]:
                                  - generic:
                                    - generic "MrWhoseTheBoss" [ref=e1038]
                                    - generic [ref=e1039]: ·
                                    - generic [ref=e1040]: 2h
                              - link "Why big phone brands ditched chargers - the reason nobody says out loud" [ref=e1041]:
                                - /url: https://www.msn.com/en-in/technology/tech-companies/why-big-phone-brands-ditched-chargers-the-reason-nobody-says-out-loud/vi-AA1VDaAh?ocid=hpmsn
                                - heading "Why big phone brands ditched chargers - the reason nobody says out loud" [level=2] [ref=e1042]:
                                  - generic: Why big phone brands ditched chargers - the reason nobody says out loud
                            - button "See more" [ref=e1046]
                        - article "Trevor Noah’s NYC debut - How a night of laughs turned into a deep reflection on race in America" [ref=e1049]:
                          - generic [ref=e1050]:
                            - img "Trevor Noah’s NYC Debut - How a Night of Laughs Turned into a Deep Reflection on Race in America" [ref=e1052]
                            - generic [ref=e1054]: 08:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1055]:
                              - generic [ref=e1056]:
                                - img "Trevor Noah" [ref=e1057]
                                - generic [ref=e1058]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1059]
                                    - generic [ref=e1060]: ·
                                    - generic [ref=e1061]: 3d
                              - link "Trevor Noah’s NYC debut - How a night of laughs turned into a deep reflection on race in America" [ref=e1062]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/trevor-noah-s-nyc-debut-how-a-night-of-laughs-turned-into-a-deep-reflection-on-race-in-america/vi-AA2cIRs6?ocid=hpmsn
                                - heading "Trevor Noah’s NYC debut - How a night of laughs turned into a deep reflection on race in America" [level=2] [ref=e1063]:
                                  - generic: Trevor Noah’s NYC debut - How a night of laughs turned into a deep reflection on race in America
                            - button "See more" [ref=e1067]
                        - article [ref=e1070]:
                          - generic [ref=e1071]:
                            - img "Returning to a Rimac Hypercar After a Serious Crash" [ref=e1073]
                            - generic [ref=e1075]: 07:48
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1076]:
                              - generic [ref=e1077]:
                                - img "DRIVETRIBE" [ref=e1078]
                                - generic [ref=e1079]:
                                  - generic:
                                    - generic "DRIVETRIBE" [ref=e1080]
                                    - generic [ref=e1081]: ·
                                    - generic [ref=e1082]: 1h
                              - link "Returning to a Rimac hypercar after a serious crash" [ref=e1083]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/returning-to-a-rimac-hypercar-after-a-serious-crash/vi-AA2cWzYO?ocid=hpmsn
                                - heading "Returning to a Rimac hypercar after a serious crash" [level=2] [ref=e1084]:
                                  - generic: Returning to a Rimac hypercar after a serious crash
                            - button "See more" [ref=e1088]
                        - article [ref=e1091]:
                          - generic [ref=e1092]:
                            - img "How a Classic Car Workshop Changed After Its TV Show" [ref=e1094]
                            - generic [ref=e1096]: 13:09
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1097]:
                              - generic [ref=e1098]:
                                - img "DRIVETRIBE" [ref=e1099]
                                - generic [ref=e1100]:
                                  - generic:
                                    - generic "DRIVETRIBE" [ref=e1101]
                                    - generic [ref=e1102]: ·
                                    - generic [ref=e1103]: 3h
                              - link "How a classic car workshop changed after its TV show" [ref=e1104]:
                                - /url: https://www.msn.com/en-in/news/other/how-a-classic-car-workshop-changed-after-its-tv-show/vi-AA2cWBWf?ocid=hpmsn
                                - heading "How a classic car workshop changed after its TV show" [level=2] [ref=e1105]:
                                  - generic: How a classic car workshop changed after its TV show
                            - button "See more" [ref=e1109]
                        - article "Trevor’s first taco experience in America leads to a larger conversation about immigration, identity, and contradictions in American culture" [ref=e1112]:
                          - generic [ref=e1113]:
                            - img "Trevor’s first taco experience in America leads to a larger conversation about immigration, identity, and contradictions in American culture. Thumbnail" [ref=e1115]
                            - generic [ref=e1117]: 12:00
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1118]:
                              - generic [ref=e1119]:
                                - img "Trevor Noah" [ref=e1120]
                                - generic [ref=e1121]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1122]
                                    - generic [ref=e1123]: ·
                                    - generic [ref=e1124]: 5h
                              - link "Trevor’s first taco experience in America leads to a larger conversation about immigration, identity, and contradictions in American culture" [ref=e1125]:
                                - /url: https://www.msn.com/en-in/news/other/trevor-s-first-taco-experience-in-america-leads-to-a-larger-conversation-about-immigration-identity-and-contradictions-in-american-culture/vi-AA2cWeKh?ocid=hpmsn
                                - heading "Trevor’s first taco experience in America leads to a larger conversation about immigration, identity, and contradictions in American culture" [level=2] [ref=e1126]:
                                  - generic: Trevor’s first taco experience in America leads to a larger conversation about immigration, identity, and contradictions in American culture
                            - button "See more" [ref=e1130]
                        - article [ref=e1133]:
                          - generic [ref=e1134]:
                            - img "Threatened Mid-Flight – Then Offered Drinks Like Nothing Happened" [ref=e1136]
                            - generic [ref=e1138]: 08:38
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1139]:
                              - generic [ref=e1140]:
                                - img "Trek Trendy" [ref=e1141]
                                - generic [ref=e1142]:
                                  - generic:
                                    - generic "Trek Trendy" [ref=e1143]
                                    - generic [ref=e1144]: ·
                                    - generic [ref=e1145]: 1h
                              - link "Threatened mid-flight – then offered drinks like nothing happened" [ref=e1146]:
                                - /url: https://www.msn.com/en-in/news/other/threatened-mid-flight-then-offered-drinks-like-nothing-happened/vi-AA1WXLj3?ocid=hpmsn
                                - heading "Threatened mid-flight – then offered drinks like nothing happened" [level=2] [ref=e1147]:
                                  - generic: Threatened mid-flight – then offered drinks like nothing happened
                            - button "See more" [ref=e1151]
                        - article "He paid $20,000 to sleep under the ocean - then sharks started circling his bed" [ref=e1154]:
                          - generic [ref=e1155]:
                            - img "He Paid $20,000 to Sleep Under the Ocean - Then Sharks Started Circling His Bed" [ref=e1157]
                            - generic [ref=e1159]: 19:44
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1160]:
                              - generic [ref=e1161]:
                                - img "Trek Trendy" [ref=e1162]
                                - generic [ref=e1163]:
                                  - generic:
                                    - generic "Trek Trendy" [ref=e1164]
                                    - generic [ref=e1165]: ·
                                    - generic [ref=e1166]: 1h
                              - link "He paid $20,000 to sleep under the ocean - then sharks started circling his bed" [ref=e1167]:
                                - /url: https://www.msn.com/en-in/news/other/he-paid-20-000-to-sleep-under-the-ocean-then-sharks-started-circling-his-bed/vi-AA28ATV4?ocid=hpmsn
                                - heading "He paid $20,000 to sleep under the ocean - then sharks started circling his bed" [level=2] [ref=e1168]:
                                  - generic: He paid $20,000 to sleep under the ocean - then sharks started circling his bed
                            - button "See more" [ref=e1172]
                        - article "He paid for a sleeper on America’s most scenic train - then night fell" [ref=e1175]:
                          - generic [ref=e1176]:
                            - img "He Paid for a Sleeper on America’s Most Scenic Train - Then Night Fell" [ref=e1178]
                            - generic [ref=e1180]: 28:34
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1181]:
                              - generic [ref=e1182]:
                                - img "Trek Trendy" [ref=e1183]
                                - generic [ref=e1184]:
                                  - generic:
                                    - generic "Trek Trendy" [ref=e1185]
                                    - generic [ref=e1186]: ·
                                    - generic [ref=e1187]: 1h
                              - link "He paid for a sleeper on America’s most scenic train - then night fell" [ref=e1188]:
                                - /url: https://www.msn.com/en-in/news/other/he-paid-for-a-sleeper-on-america-s-most-scenic-train-then-night-fell/vi-AA20k3hi?ocid=hpmsn
                                - heading "He paid for a sleeper on America’s most scenic train - then night fell" [level=2] [ref=e1189]:
                                  - generic: He paid for a sleeper on America’s most scenic train - then night fell
                            - button "See more" [ref=e1193]
                        - article [ref=e1196]:
                          - generic [ref=e1197]:
                            - img "Trevor Noah’s Wild First Encounter With Julius Malema" [ref=e1199]
                            - generic [ref=e1201]: 07:23
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1202]:
                              - generic [ref=e1203]:
                                - img "Trevor Noah" [ref=e1204]
                                - generic [ref=e1205]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1206]
                                    - generic [ref=e1207]: ·
                                    - generic [ref=e1208]: 5h
                              - link "Trevor Noah’s wild first encounter with Julius Malema" [ref=e1209]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/trevor-noah-s-wild-first-encounter-with-julius-malema/vi-AA2cVDDA?ocid=hpmsn
                                - heading "Trevor Noah’s wild first encounter with Julius Malema" [level=2] [ref=e1210]:
                                  - generic: Trevor Noah’s wild first encounter with Julius Malema
                            - button "See more" [ref=e1214]
                        - article [ref=e1217]:
                          - generic [ref=e1218]:
                            - img "Trevor shares a deeply personal story about his mother" [ref=e1220]
                            - generic [ref=e1222]: 13:12
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1223]:
                              - generic [ref=e1224]:
                                - img "Trevor Noah" [ref=e1225]
                                - generic [ref=e1226]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1227]
                                    - generic [ref=e1228]: ·
                                    - generic [ref=e1229]: 5h
                              - link "Trevor shares a deeply personal story about his mother" [ref=e1230]:
                                - /url: https://www.msn.com/en-in/news/other/trevor-shares-a-deeply-personal-story-about-his-mother/vi-AA2cW2go?ocid=hpmsn
                                - heading "Trevor shares a deeply personal story about his mother" [level=2] [ref=e1231]:
                                  - generic: Trevor shares a deeply personal story about his mother
                            - button "See more" [ref=e1235]
                        - article "When a game becomes an identity - Trevor explores the true impact of football" [ref=e1238]:
                          - generic [ref=e1239]:
                            - img "When a Game Becomes an Identity - Trevor Explores the True Impact of Football Thumbnail" [ref=e1241]
                            - generic [ref=e1243]: 05:59
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1244]:
                              - generic [ref=e1245]:
                                - img "Trevor Noah" [ref=e1246]
                                - generic [ref=e1247]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1248]
                                    - generic [ref=e1249]: ·
                                    - generic [ref=e1250]: 5h
                              - link "When a game becomes an identity - Trevor explores the true impact of football" [ref=e1251]:
                                - /url: https://www.msn.com/en-in/sports/american_football/when-a-game-becomes-an-identity-trevor-explores-the-true-impact-of-football/vi-AA2cVZmP?ocid=hpmsn
                                - heading "When a game becomes an identity - Trevor explores the true impact of football" [level=2] [ref=e1252]:
                                  - generic: When a game becomes an identity - Trevor explores the true impact of football
                            - button "See more" [ref=e1256]
                        - link "See more" [ref=e1258]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1259]
                          - text: See more
                    - button "next" [ref=e1263]:
                      - img [ref=e1266]
            - article "Bollywood actor Mushtaq Khan of Welcome, Mujhse Shaadi Karogi fame dies at 56; check his cause of death" [ref=e1268] [cursor=pointer]:
              - generic [ref=e1270]:
                - img [ref=e1271]
                - generic [ref=e1272]:
                  - generic [ref=e1273]:
                    - generic [ref=e1274]:
                      - generic [ref=e1275]:
                        - img [ref=e1276]
                        - generic [ref=e1277]: Live Mint
                      - generic [ref=e1278]: ·
                      - generic [ref=e1279]: 18h
                    - link "Bollywood actor Mushtaq Khan of Welcome, Mujhse Shaadi Karogi fame dies at 56; check his cause of death, Live Mint" [ref=e1280]:
                      - /url: https://www.msn.com/en-in/entertainment/celebrities/bollywood-actor-mushtaq-khan-of-welcome-mujhse-shaadi-karogi-fame-dies-at-56-check-his-cause-of-death/ar-AA2cU4bP
                      - text: Bollywood actor Mushtaq Khan of Welcome, Mujhse Shaadi Karogi fame dies at 56; check his cause of death
                  - generic "Bollywood actor Mushtaq Khan of Welcome, Mujhse Shaadi Karogi fame dies at 56; check his cause of death" [ref=e1283]:
                    - generic [ref=e1285]:
                      - generic [ref=e1286]:
                        - button "39 Likes" [ref=e1287]:
                          - generic [ref=e1288]:
                            - img [ref=e1289]
                            - generic [ref=e1291]: "39"
                        - button "Dislike" [ref=e1292]:
                          - img [ref=e1294]
                      - link "View comments 2 Comment" [ref=e1297]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/bollywood-actor-mushtaq-khan-of-welcome-mujhse-shaadi-karogi-fame-dies-at-56-check-his-cause-of-death/ar-AA2cU4bP#comments
                        - button "View comments 2 Comment" [ref=e1298]:
                          - img [ref=e1299]
                        - generic [ref=e1301]: "2"
                - generic [ref=e1302]:
                  - button "Hide this story" [ref=e1303]:
                    - img [ref=e1304]
                    - text: Hide this story
                  - button "See more" [ref=e1305]:
                    - img [ref=e1306]
            - article [ref=e1307] [cursor=pointer]:
              - generic [ref=e1313]:
                - generic [ref=e1315]:
                  - img "ICC" [ref=e1317]
                  - link "ICC" [ref=e1318]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6ab636d5b09948798e8ac813fc6d6eff
                    - heading "ICC" [level=2] [ref=e1319]
                  - button "More interests" [ref=e1320]
                  - generic [ref=e1321]:
                    - generic "Live now" [ref=e1322]:
                      - button "Live now" [ref=e1323]
                    - button "More options" [ref=e1324]
                - generic [ref=e1328]:
                  - link "AFG 102/7 (20.0) VS NEP 103/5 (17.2) NEP won by 5 wickets" [ref=e1329]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-274299?ocid=hpmsn&cvid=6ab636d5b09948798e8ac813fc6d6eff
                    - generic "AFG" [ref=e1330]:
                      - generic [ref=e1331]:
                        - generic [ref=e1332]:
                          - generic [ref=e1334]: AFG
                          - button "Click to follow AFG":
                            - generic:
                              - img
                        - generic [ref=e1336]:
                          - generic [ref=e1337]: 102/7
                          - generic [ref=e1338]: (20.0)
                    - generic [ref=e1342]: VS
                    - generic "NEP" [ref=e1343]:
                      - generic [ref=e1344]:
                        - img [ref=e1346]
                        - generic [ref=e1348]:
                          - generic [ref=e1350]: NEP
                          - button "Click to follow NEP":
                            - generic:
                              - img
                        - generic [ref=e1352]:
                          - generic [ref=e1353]: 103/5
                          - generic [ref=e1354]: (17.2)
                    - generic "NEP won by 5 wickets" [ref=e1357]
                  - link "ENG 305/9 (50.0) VS SL 321/6 (50.0) SL won by 16 runs" [ref=e1358]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-264921?ocid=hpmsn&cvid=6ab636d5b09948798e8ac813fc6d6eff
                    - generic "ENG" [ref=e1359]:
                      - generic [ref=e1360]:
                        - generic [ref=e1361]:
                          - generic [ref=e1363]: ENG
                          - button "Click to follow ENG":
                            - generic:
                              - img
                        - generic [ref=e1365]:
                          - generic [ref=e1366]: 305/9
                          - generic [ref=e1367]: (50.0)
                    - generic [ref=e1371]: VS
                    - generic "SL" [ref=e1372]:
                      - generic [ref=e1373]:
                        - img [ref=e1375]
                        - generic [ref=e1377]:
                          - generic [ref=e1379]: SL
                          - button "Click to follow SL":
                            - generic:
                              - img
                        - generic [ref=e1381]:
                          - generic [ref=e1382]: 321/6
                          - generic [ref=e1383]: (50.0)
                    - generic "SL won by 16 runs" [ref=e1386]
                  - link "SA 27 Sept 8:00 am AUS The Wanderers Stadium, Johannesburg" [ref=e1387]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-269788?ocid=hpmsn&cvid=6ab636d5b09948798e8ac813fc6d6eff
                    - generic "SA" [ref=e1388]:
                      - generic [ref=e1390]:
                        - generic [ref=e1392]: SA
                        - button "Click to follow SA":
                          - generic:
                            - img
                    - generic [ref=e1395]:
                      - generic [ref=e1396]: 27 Sept
                      - generic [ref=e1397]: 8:00 am
                    - generic "AUS" [ref=e1398]:
                      - generic [ref=e1400]:
                        - generic [ref=e1402]: AUS
                        - button "Click to follow AUS":
                          - generic:
                            - img
                    - generic "The Wanderers Stadium, Johannesburg" [ref=e1405]
                - generic [ref=e1407]:
                  - generic [ref=e1408]:
                    - generic "Previous" [ref=e1409]:
                      - button "Previous" [ref=e1410]
                    - tablist [ref=e1412]:
                      - tab "Page 1" [selected] [ref=e1413]
                      - tab "Page 2" [ref=e1415]
                      - tab "Page 3" [ref=e1417]
                      - tab "Page 4" [ref=e1419]
                      - tab "Page 5" [ref=e1421]
                    - generic "Next" [ref=e1423]:
                      - button "Next" [ref=e1424]
                  - link "See more ICC" [ref=e1426]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6ab636d5b09948798e8ac813fc6d6eff
            - article "Why people instinctively close their eyes during prayer" [ref=e1427] [cursor=pointer]:
              - generic [ref=e1429]:
                - img [ref=e1430]
                - generic [ref=e1431]:
                  - generic [ref=e1432]:
                    - generic [ref=e1434]:
                      - img [ref=e1435]
                      - generic [ref=e1436]: The Times of India
                    - link "Why people instinctively close their eyes during prayer, The Times of India" [ref=e1437]:
                      - /url: https://www.msn.com/en-in/lifestyle/other/why-people-instinctively-close-their-eyes-during-prayer/ss-AA20tf8n
                      - text: Why people instinctively close their eyes during prayer
                  - generic "Why people instinctively close their eyes during prayer" [ref=e1440]:
                    - generic [ref=e1442]:
                      - generic [ref=e1443]:
                        - button "1,107 Likes" [ref=e1444]:
                          - generic [ref=e1445]:
                            - img [ref=e1446]
                            - generic [ref=e1448]: 1k
                        - button "Dislike" [ref=e1449]:
                          - img [ref=e1451]
                      - link "View comments 4 Comment" [ref=e1454]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/why-people-instinctively-close-their-eyes-during-prayer/ss-AA20tf8n#comments
                        - button "View comments 4 Comment" [ref=e1455]:
                          - img [ref=e1456]
                        - generic [ref=e1458]: "4"
                - generic [ref=e1459]:
                  - button "Hide this story" [ref=e1460]:
                    - img [ref=e1461]
                    - text: Hide this story
                  - button "See more" [ref=e1462]:
                    - img [ref=e1463]
            - article "FIR against Cockroach Janta Party over 'AI-morphed photo' of woman alongside Modi's image" [ref=e1464] [cursor=pointer]:
              - generic [ref=e1466]:
                - img [ref=e1467]
                - generic [ref=e1468]:
                  - generic [ref=e1469]:
                    - generic [ref=e1470]:
                      - generic [ref=e1471]:
                        - img [ref=e1472]
                        - generic [ref=e1473]: Hindustan Times
                      - generic [ref=e1474]: ·
                      - generic [ref=e1475]: 3h
                    - link "FIR against Cockroach Janta Party over 'AI-morphed photo' of woman alongside Modi's image, Hindustan Times" [ref=e1476]:
                      - /url: https://www.msn.com/en-in/news/other/fir-against-cockroach-janta-party-over-ai-morphed-photo-of-woman-alongside-modi-s-image/ar-AA2cWrUU
                      - text: FIR against Cockroach Janta Party over 'AI-morphed photo' of woman alongside Modi's image
                  - generic "FIR against Cockroach Janta Party over 'AI-morphed photo' of woman alongside Modi's image" [ref=e1479]:
                    - generic [ref=e1481]:
                      - generic [ref=e1482]:
                        - button "27 Likes" [ref=e1483]:
                          - generic [ref=e1484]:
                            - img [ref=e1485]
                            - generic [ref=e1487]: "27"
                        - button "Dislike" [ref=e1488]:
                          - img [ref=e1490]
                      - link "Start the conversation" [ref=e1493]:
                        - /url: https://www.msn.com/en-in/news/other/fir-against-cockroach-janta-party-over-ai-morphed-photo-of-woman-alongside-modi-s-image/ar-AA2cWrUU#comments
                        - button "Start the conversation" [ref=e1494]:
                          - img [ref=e1495]
                - generic [ref=e1497]:
                  - button "Hide this story" [ref=e1498]:
                    - img [ref=e1499]
                    - text: Hide this story
                  - button "See more" [ref=e1500]:
                    - img [ref=e1501]
            - article [ref=e1502] [cursor=pointer]
            - article "iPhone 17 Pro Max price drops to Rs 71,990 with exchange bonus, in-store discount and bank offer at Reliance Digital" [ref=e1509] [cursor=pointer]:
              - generic [ref=e1511]:
                - img [ref=e1512]
                - generic [ref=e1513]:
                  - generic [ref=e1514]:
                    - generic [ref=e1515]:
                      - generic [ref=e1516]:
                        - img [ref=e1517]
                        - generic [ref=e1518]: Moneycontrol
                      - generic [ref=e1519]: ·
                      - generic [ref=e1520]: 22h
                    - link "iPhone 17 Pro Max price drops to Rs 71,990 with exchange bonus, in-store discount and bank offer at Reliance Digital, Moneycontrol" [ref=e1521]:
                      - /url: https://www.msn.com/en-in/money/general/iphone-17-pro-max-price-drops-to-rs-71-990-with-exchange-bonus-in-store-discount-and-bank-offer-at-reliance-digital/ar-AA2cSMAG
                      - text: iPhone 17 Pro Max price drops to Rs 71,990 with exchange bonus, in-store discount and bank offer at Reliance Digital
                  - generic "iPhone 17 Pro Max price drops to Rs 71,990 with exchange bonus, in-store discount and bank offer at Reliance Digital" [ref=e1524]:
                    - generic [ref=e1526]:
                      - generic [ref=e1527]:
                        - button "18 Likes" [ref=e1528]:
                          - generic [ref=e1529]:
                            - img [ref=e1530]
                            - generic [ref=e1532]: "18"
                        - button "Dislike" [ref=e1533]:
                          - img [ref=e1535]
                      - link "Start the conversation" [ref=e1538]:
                        - /url: https://www.msn.com/en-in/money/general/iphone-17-pro-max-price-drops-to-rs-71-990-with-exchange-bonus-in-store-discount-and-bank-offer-at-reliance-digital/ar-AA2cSMAG#comments
                        - button "Start the conversation" [ref=e1539]:
                          - img [ref=e1540]
                - generic [ref=e1542]:
                  - button "Hide this story" [ref=e1543]:
                    - img [ref=e1544]
                    - text: Hide this story
                  - button "See more" [ref=e1545]:
                    - img [ref=e1546]
          - generic [ref=e1547]:
            - article [ref=e1548] [cursor=pointer]
            - article "Tamil actor Ambika breaks down over sister Radha's Rs 46 crore cheque row" [ref=e1555] [cursor=pointer]:
              - generic [ref=e1557]:
                - img [ref=e1558]
                - generic [ref=e1559]:
                  - generic [ref=e1560]:
                    - generic [ref=e1561]:
                      - generic [ref=e1562]:
                        - img [ref=e1563]
                        - generic [ref=e1564]: India Today
                      - generic [ref=e1565]: ·
                      - generic [ref=e1566]: 1d
                    - link "Tamil actor Ambika breaks down over sister Radha's Rs 46 crore cheque row, India Today" [ref=e1567]:
                      - /url: https://www.msn.com/en-in/entertainment/celebrities/tamil-actor-ambika-breaks-down-over-sister-radha-s-rs-46-crore-cheque-row/ar-AA2cPseU
                      - text: Tamil actor Ambika breaks down over sister Radha's Rs 46 crore cheque row
                  - generic "Tamil actor Ambika breaks down over sister Radha's Rs 46 crore cheque row" [ref=e1570]:
                    - generic [ref=e1572]:
                      - generic [ref=e1573]:
                        - button "11 Likes" [ref=e1574]:
                          - generic [ref=e1575]:
                            - img [ref=e1576]
                            - generic [ref=e1578]: "11"
                        - button "Dislike" [ref=e1579]:
                          - img [ref=e1581]
                      - link "Start the conversation" [ref=e1584]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/tamil-actor-ambika-breaks-down-over-sister-radha-s-rs-46-crore-cheque-row/ar-AA2cPseU#comments
                        - button "Start the conversation" [ref=e1585]:
                          - img [ref=e1586]
                - generic [ref=e1588]:
                  - button "Hide this story" [ref=e1589]:
                    - img [ref=e1590]
                    - text: Hide this story
                  - button "See more" [ref=e1591]:
                    - img [ref=e1592]
    - contentinfo [ref=e1595]:
      - generic "Feedback" [ref=e1597] [cursor=pointer]:
        - button "Feedback" [ref=e1598]:
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