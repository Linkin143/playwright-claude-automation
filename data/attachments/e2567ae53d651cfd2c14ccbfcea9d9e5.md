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
      - search [ref=e30]:
        - generic [ref=e31]:
          - generic "Web search" [ref=e32] [cursor=pointer]:
            - button "Web search" [ref=e33]:
              - generic:
                - generic:
                  - img
          - searchbox "Enter your search term" [ref=e34]
      - generic [ref=e35]:
        - 'link "Chicago: Clear, 15 °C" [ref=e38] [cursor=pointer]':
          - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois?loc=eyJsIjoiQ2hpY2FnbyIsInIiOiJJbGxpbm9pcyIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTg3LjYyOTQwMjE2MDY0NDUzLCJ5Ijo0MS44ODI5MTU0OTY4MjYxN30%3D&weadegreetype=C&ocid=msnheader&cvid=6ab78552439e4ff686e0983ffa807397
          - img "Clear" [ref=e40]
          - generic [ref=e41]:
            - generic [ref=e42]: ‎15‎
            - generic [ref=e44]: ‎°C‎
        - generic "Open settings" [ref=e48] [cursor=pointer]:
          - button "Open settings" [ref=e49]:
            - generic:
              - generic:
                - generic:
                  - generic: Page settings
                  - generic:
                    - img
        - generic "Sign in" [ref=e53]:
          - button "Sign in to your account" [ref=e55] [cursor=pointer]:
            - generic [ref=e56]: Sign in to your account
            - generic [ref=e58]: Sign in
  - generic [ref=e59]:
    - generic [ref=e60]:
      - generic [ref=e65]:
        - list [ref=e68]:
          - listitem [ref=e69]:
            - link "Outlook.com" [ref=e72] [cursor=pointer]:
              - /url: https://outlook.com
              - generic [ref=e76]: Outlook.com
          - listitem [ref=e77]:
            - link "Flipkart" [ref=e80] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=401531&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e83]:
                - generic [ref=e84]: Flipkart
                - generic [ref=e86]: Sponsored
          - listitem [ref=e87]:
            - link "Find a tutor" [ref=e90] [cursor=pointer]:
              - /url: https://www.bing.com/pros?FORM=BPIMNS
              - generic [ref=e94]: Find a tutor
          - listitem [ref=e95]:
            - link "Booking.com" [ref=e98] [cursor=pointer]:
              - /url: https://www.booking.com/index.html?aid=1624937&label=enin-msn-hp-mestripe
              - generic [ref=e101]:
                - generic [ref=e102]: Booking.com
                - generic [ref=e104]: Sponsored
          - listitem [ref=e105]:
            - link "Ajio" [ref=e108] [cursor=pointer]:
              - /url: https://clk.tradedoubler.com/click?p=393141&a=3419260&epi=enin-msn-hp-mestripe
              - generic [ref=e111]:
                - generic [ref=e112]: Ajio
                - generic [ref=e114]: Sponsored
          - listitem [ref=e115]:
            - link "Facebook" [ref=e118] [cursor=pointer]:
              - /url: https://www.facebook.com
              - generic [ref=e122]: Facebook
          - listitem [ref=e123]:
            - link "Microsoft 365" [ref=e126] [cursor=pointer]:
              - /url: https://www.office.com/?omkt=en-IN
              - generic [ref=e130]: Microsoft 365
          - listitem [ref=e131]:
            - link "X" [ref=e134] [cursor=pointer]:
              - /url: https://x.com
              - generic [ref=e138]: X
          - listitem [ref=e139]:
            - link "OneDrive" [ref=e142] [cursor=pointer]:
              - /url: https://onedrive.live.com/?wt.mc_id=oo_msn_msnhomepage_header
              - generic [ref=e146]: OneDrive
          - listitem [ref=e147]:
            - link "Skype" [ref=e150] [cursor=pointer]:
              - /url: https://www.skype.com/
              - generic [ref=e154]: Skype
          - listitem [ref=e155]:
            - link "OneNote" [ref=e158] [cursor=pointer]:
              - /url: https://www.onenote.com/notebooks?WT.mc_id=MSN_OneNote_TopMenu&auth=1&wdorigin=msn
              - generic [ref=e162]: OneNote
          - listitem [ref=e163]:
            - link "Maps" [ref=e166] [cursor=pointer]:
              - /url: https://bing.com/maps/?FORM=MSNMAP
              - generic [ref=e170]: Maps
          - listitem [ref=e171]:
            - link "Microsoft Store" [ref=e174] [cursor=pointer]:
              - /url: https://www.microsoft.com/en-in
              - generic [ref=e178]: Microsoft Store
        - button [ref=e179]:
          - img [ref=e182]
      - generic [ref=e184]:
        - banner [ref=e185]
        - generic [ref=e190]:
          - navigation [ref=e192]:
            - generic [ref=e193]:
              - list [ref=e194]:
                - listitem [ref=e195]:
                  - link "Discover" [ref=e196] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in
              - list [ref=e197]:
                - listitem [ref=e198]:
                  - link "News" [ref=e199] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f
                - listitem [ref=e200]:
                  - link "Sports" [ref=e201] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/sports
                - listitem [ref=e202]:
                  - link "Play" [ref=e203] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/play?cgfrom=cg_home_pivot
                - listitem [ref=e204]:
                  - link "Money" [ref=e205] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/money
                - listitem [ref=e206]:
                  - link "Weather" [ref=e207] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/weather
                - listitem [ref=e208]:
                  - link "Watch" [ref=e209] [cursor=pointer]:
                    - /url: https://www.msn.com/en-in/video
                - listitem [ref=e210]:
                  - link "Shopping" [ref=e211] [cursor=pointer]:
                    - /url: https://www.bing.com/shop?entrypoint=msn&adunitId=378983&propertyId=316966&FORM=NVBSHP
          - generic "Personalize your feed\"" [ref=e213] [cursor=pointer]:
            - button "Personalize your feed\"" [ref=e214]:
              - generic:
                - generic:
                  - img
              - generic:
                - generic: Personalize
      - main [ref=e217]:
        - generic [ref=e220]:
          - generic [ref=e221]:
            - generic [ref=e224]:
              - tablist [ref=e226]:
                - tab "News story" [ref=e227] [cursor=pointer]
                - tab "Sponsored" [ref=e229] [cursor=pointer]
                - tab "News story" [ref=e231] [cursor=pointer]
                - tab "News story" [ref=e233] [cursor=pointer]
                - tab "News story" [selected] [ref=e235] [cursor=pointer]
                - tab "Sponsored" [ref=e237] [cursor=pointer]
                - tab "News story" [ref=e239] [cursor=pointer]
                - tab "News story" [ref=e241] [cursor=pointer]
                - tab "Sponsored" [ref=e243] [cursor=pointer]
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
                - tab "News story" [ref=e271] [cursor=pointer]
                - tab "News story" [ref=e273] [cursor=pointer]
                - tab "Sponsored" [ref=e275] [cursor=pointer]
                - tab "News story" [ref=e277] [cursor=pointer]
                - tab "News story" [ref=e279] [cursor=pointer]
                - tab "News story" [ref=e281] [cursor=pointer]
                - tab "Sponsored" [ref=e283] [cursor=pointer]
                - tab "News story" [ref=e285] [cursor=pointer]
                - tab "News story" [ref=e287] [cursor=pointer]
              - button [ref=e291]
              - button [ref=e294]
              - 'article "Spectacular: PM Modi takes part in bhajan clubbing event in Delhi" [ref=e295] [cursor=pointer]':
                - generic [ref=e297]:
                  - img [ref=e298]
                  - generic [ref=e301]:
                    - generic [ref=e302]:
                      - generic [ref=e303]:
                        - generic [ref=e304]:
                          - img [ref=e305]
                          - generic [ref=e306]: NDTV
                        - generic [ref=e307]: ·
                        - generic [ref=e308]: 13h
                      - 'link "Spectacular: PM Modi takes part in bhajan clubbing event in Delhi, NDTV" [ref=e309]':
                        - /url: https://www.msn.com/en-in/news/other/spectacular-pm-modi-takes-part-in-bhajan-clubbing-event-in-delhi/vi-AA2cYHiF
                        - text: "Spectacular: PM Modi takes part in bhajan clubbing event in Delhi"
                    - 'generic "Spectacular: PM Modi takes part in bhajan clubbing event in Delhi" [ref=e312]':
                      - generic [ref=e314]:
                        - generic [ref=e315]:
                          - button "24 Likes" [ref=e316]:
                            - generic [ref=e317]:
                              - img [ref=e318]
                              - generic [ref=e320]: "24"
                          - button "Dislike" [ref=e321]:
                            - img [ref=e323]
                        - link "Start the conversation" [ref=e326]:
                          - /url: https://www.msn.com/en-in/news/other/spectacular-pm-modi-takes-part-in-bhajan-clubbing-event-in-delhi/vi-AA2cYHiF#comments
                          - button "Start the conversation" [ref=e327]:
                            - img [ref=e328]
                  - generic [ref=e330]:
                    - button "Hide this story" [ref=e331]:
                      - img [ref=e332]
                      - text: Hide this story
                    - button "See more" [ref=e333]:
                      - img [ref=e334]
            - article "Nitin Gadkari says switching to a 100% ethanol car can cut fuel bills to just Rs 25 per litre" [ref=e335] [cursor=pointer]:
              - generic [ref=e337]:
                - img [ref=e338]
                - generic [ref=e339]:
                  - generic [ref=e340]:
                    - generic [ref=e341]:
                      - generic [ref=e342]:
                        - img [ref=e343]
                        - generic [ref=e344]: The Economic Times
                      - generic [ref=e345]: ·
                      - generic [ref=e346]: 17m
                    - link "Nitin Gadkari says switching to a 100% ethanol car can cut fuel bills to just Rs 25 per litre, The Economic Times" [ref=e347]:
                      - /url: https://www.msn.com/en-in/autos/general/nitin-gadkari-says-switching-to-a-100-ethanol-car-can-cut-fuel-bills-to-just-rs-25-per-litre/ar-AA2d0omE
                      - text: Nitin Gadkari says switching to a 100% ethanol car can cut fuel bills to just Rs 25 per litre
                  - generic "Nitin Gadkari says switching to a 100% ethanol car can cut fuel bills to just Rs 25 per litre" [ref=e350]:
                    - generic [ref=e352]:
                      - generic [ref=e353]:
                        - button "9 Likes" [ref=e354]:
                          - generic [ref=e355]:
                            - img [ref=e356]
                            - generic [ref=e358]: "9"
                        - button "Dislike" [ref=e359]:
                          - img [ref=e361]
                      - link "View comments 3 Comment" [ref=e364]:
                        - /url: https://www.msn.com/en-in/autos/general/nitin-gadkari-says-switching-to-a-100-ethanol-car-can-cut-fuel-bills-to-just-rs-25-per-litre/ar-AA2d0omE#comments
                        - button "View comments 3 Comment" [ref=e365]:
                          - img [ref=e366]
                        - generic [ref=e368]: "3"
                - generic [ref=e369]:
                  - button "Hide this story" [ref=e370]:
                    - img [ref=e371]
                    - text: Hide this story
                  - button "See more" [ref=e372]:
                    - img [ref=e373]
            - article [ref=e374] [cursor=pointer]:
              - generic [ref=e378]:
                - generic: Sponsored
            - article [ref=e379] [cursor=pointer]:
              - generic [ref=e384]:
                - generic [ref=e386]:
                  - link "Top stories" [ref=e388]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6ab78552439e4ff686e0983ffa807397&ocid=hpmsn
                    - heading "Top stories" [level=2] [ref=e389]
                  - button "More options" [ref=e391]
                - list [ref=e394]:
                  - listitem [ref=e395]:
                    - 'link "Hindustan Times 24m ''Trump Strait'': US president shares Hormuz map, relabels key waterway amid Iran tensions" [ref=e396]':
                      - /url: https://www.msn.com/en-in/news/other/trump-strait-us-president-shares-hormuz-map-relabels-key-waterway-amid-iran-tensions/ar-AA2d0rFB
                      - generic [ref=e397]:
                        - generic [ref=e398]:
                          - img [ref=e399]
                          - generic [ref=e400]:
                            - generic: Hindustan Times ·24m
                        - generic [ref=e401]: "'Trump Strait': US president shares Hormuz map, relabels key waterway amid Iran tensions"
                  - listitem [ref=e402]:
                    - 'link "Press Trust of India now Actual aid decision for drought-hit farmers after ground-level assessment: Sunetra Pawar" [ref=e403]':
                      - /url: https://www.msn.com/en-in/news/other/actual-aid-decision-for-drought-hit-farmers-after-ground-level-assessment-sunetra-pawar/ar-AA2d0rnx
                      - generic [ref=e404]:
                        - generic [ref=e405]:
                          - img [ref=e406]
                          - generic [ref=e407]:
                            - generic: Press Trust of India ·now
                        - generic [ref=e408]: "Actual aid decision for drought-hit farmers after ground-level assessment: Sunetra Pawar"
                  - listitem [ref=e409]:
                    - 'link "The Times of India 2h ‘Make him PM’: Khera hits back at BJP chief’s praise for CEC Kumar" [ref=e410]':
                      - /url: https://www.msn.com/en-in/news/other/make-him-pm-khera-hits-back-at-bjp-chief-s-praise-for-cec-kumar/ar-AA2d0vYu
                      - generic [ref=e411]:
                        - generic [ref=e412]:
                          - img [ref=e413]
                          - generic [ref=e414]:
                            - generic: The Times of India ·2h
                        - generic [ref=e415]: "‘Make him PM’: Khera hits back at BJP chief’s praise for CEC Kumar"
                - generic [ref=e417]:
                  - generic [ref=e418]:
                    - generic "Previous" [ref=e419]:
                      - button "Previous" [ref=e420]
                    - tablist [ref=e422]:
                      - tab "Page 1" [selected] [ref=e423]
                      - tab "Page 2" [ref=e425]
                      - tab "Page 3" [ref=e427]
                    - generic "Next" [ref=e429]:
                      - button "Next" [ref=e430]
                  - link "See more" [ref=e432]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top%20stories/tp-Y_0b495ad3-9beb-45f8-9214-c8e95aa2468f?cvid=6ab78552439e4ff686e0983ffa807397&ocid=hpmsn
            - article "Post Purchase Software - Schedule a Live Demo - Get a Personalized Demo" [ref=e433] [cursor=pointer]:
              - generic [ref=e435]:
                - img [ref=e436]
                - generic [ref=e437]:
                  - generic [ref=e438]:
                    - generic [ref=e441]: AfterShip
                    - link "Post Purchase Software - Schedule a Live Demo - Get a Personalized Demo, AfterShip" [ref=e442]:
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=eca72c37-5d79-4614-b777-e1acbdb63126&bdc=oa&bidId=1&bidderId=4&cmExpId=LV5&impId=8&impTy=1&ldc=rhf2pczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=7d0a27d6-020e-4aa8-ba07-01a522625aa0&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8PFKWf6R8t30urp5L8KMCFjVUCUzpQN1wD3Rvj6IjGs_Z2aQnHDj5AKU8chYMSLrtKbtyZ83u3iZ6c_qI8uvXSV4D8kPXIGta_7AiTMdLgby7jR4NTqdCn5m2UHKNbbadLA0MZIhpbxP-7WPtku-QCvUByyi6mGIrA96dAPTNDzGwUR5asxvFPTh-qbUep0h8Eyr5xhDHOLBuQINRCX-2UJt8CoA%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuYWZ0ZXJzaGlwLmNvbSUyZmNvbnRhY3Qtc2FsZXMlM2Z1dG1fdGVybSUzZHBvc3QlMjUyMHB1cmNoYXNlJTI1MjBtYW5hZ2VtZW50JTI1MjBzb2Z0d2FyZSUyNnV0bV9jYW1wYWlnbiUzZHBvc3RwdXJjaGFzZW9zX25hX3NlYXJjaF9jYXRlZ29yeV9wb3N0cHVyY2hhc2Vvc19iJTI2dXRtX2FkZ3JvdXAlM2Rwb3N0cHVyY2hhc2Vzb2Z0d2FyZV9waHJhc2VfYW5kX2V4YWN0JTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkcHBjJTI2dXRtX2lkJTNkNDg4MzM4MTI1JTI2aHNhX2FjYyUzZDM3OTc5NjcxNzclMjZoc2FfY2FtJTNkNDg4MzM4MTI1JTI2aHNhX2dycCUzZDEyMjkyNTU2NDc3NDY1ODAlMjZoc2FfYWQlM2QlMjZoc2Ffc3JjJTNkYSUyNmhzYV90Z3QlM2Rrd2QtNzY4MjkyOTkwOTM1NjAlM2Fsb2MtMTkwJTI2aHNhX2t3JTNkcG9zdCUyNTIwcHVyY2hhc2UlMjUyMG1hbmFnZW1lbnQlMjUyMHNvZnR3YXJlJTI2aHNhX210JTNkZSUyNmhzYV9uZXQlM2RiaW5nJTI2aHNhX3ZlciUzZDMlMjZtc2Nsa2lkJTNkOTZmZGEyNGU3MjI2MTkwODM4MTNjOGY5Zjc3MjM0Zjc%26rlid%3D96fda24e722619083813c8f9f77234f7&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: Post Purchase Software - Schedule a Live Demo - Get a Personalized Demo
                  - link "Sponsored" [ref=e444]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=eca72c37-5d79-4614-b777-e1acbdb63126&bdc=oa&bidId=1&bidderId=4&cmExpId=LV5&impId=8&impTy=1&ldc=rhf2pczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=7d0a27d6-020e-4aa8-ba07-01a522625aa0&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8PFKWf6R8t30urp5L8KMCFjVUCUzpQN1wD3Rvj6IjGs_Z2aQnHDj5AKU8chYMSLrtKbtyZ83u3iZ6c_qI8uvXSV4D8kPXIGta_7AiTMdLgby7jR4NTqdCn5m2UHKNbbadLA0MZIhpbxP-7WPtku-QCvUByyi6mGIrA96dAPTNDzGwUR5asxvFPTh-qbUep0h8Eyr5xhDHOLBuQINRCX-2UJt8CoA%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuYWZ0ZXJzaGlwLmNvbSUyZmNvbnRhY3Qtc2FsZXMlM2Z1dG1fdGVybSUzZHBvc3QlMjUyMHB1cmNoYXNlJTI1MjBtYW5hZ2VtZW50JTI1MjBzb2Z0d2FyZSUyNnV0bV9jYW1wYWlnbiUzZHBvc3RwdXJjaGFzZW9zX25hX3NlYXJjaF9jYXRlZ29yeV9wb3N0cHVyY2hhc2Vvc19iJTI2dXRtX2FkZ3JvdXAlM2Rwb3N0cHVyY2hhc2Vzb2Z0d2FyZV9waHJhc2VfYW5kX2V4YWN0JTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkcHBjJTI2dXRtX2lkJTNkNDg4MzM4MTI1JTI2aHNhX2FjYyUzZDM3OTc5NjcxNzclMjZoc2FfY2FtJTNkNDg4MzM4MTI1JTI2aHNhX2dycCUzZDEyMjkyNTU2NDc3NDY1ODAlMjZoc2FfYWQlM2QlMjZoc2Ffc3JjJTNkYSUyNmhzYV90Z3QlM2Rrd2QtNzY4MjkyOTkwOTM1NjAlM2Fsb2MtMTkwJTI2aHNhX2t3JTNkcG9zdCUyNTIwcHVyY2hhc2UlMjUyMG1hbmFnZW1lbnQlMjUyMHNvZnR3YXJlJTI2aHNhX210JTNkZSUyNmhzYV9uZXQlM2RiaW5nJTI2aHNhX3ZlciUzZDMlMjZtc2Nsa2lkJTNkOTZmZGEyNGU3MjI2MTkwODM4MTNjOGY5Zjc3MjM0Zjc%26rlid%3D96fda24e722619083813c8f9f77234f7&rtype=targetURL&tagId=hp2-river-1&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e446]:
                  - img [ref=e447]
            - 'article "‘A terrorist country asking me that question’: Jaishankar’s sharp reply to Pak journalist at UN" [ref=e448] [cursor=pointer]':
              - generic [ref=e450]:
                - generic [ref=e456]:
                  - generic [ref=e457]:
                    - generic [ref=e458]:
                      - generic [ref=e459]:
                        - img [ref=e460]
                        - generic [ref=e461]: The Times of India
                      - generic [ref=e462]: ·
                      - generic [ref=e463]: 9h
                    - 'link "‘A terrorist country asking me that question’: Jaishankar’s sharp reply to Pak journalist at UN, The Times of India" [ref=e464]':
                      - /url: https://www.msn.com/en-in/news/other/a-terrorist-country-asking-me-that-question-jaishankar-s-sharp-reply-to-pak-journalist-at-un/vi-AA2cY720
                      - text: "‘A terrorist country asking me that question’: Jaishankar’s sharp reply to Pak journalist at UN"
                  - 'generic "‘A terrorist country asking me that question’: Jaishankar’s sharp reply to Pak journalist at UN" [ref=e467]':
                    - generic [ref=e469]:
                      - generic [ref=e470]:
                        - button "58 Likes" [ref=e471]:
                          - generic [ref=e472]:
                            - img [ref=e473]
                            - generic [ref=e475]: "58"
                        - button "Dislike" [ref=e476]:
                          - img [ref=e478]
                      - link "View comments 5 Comment" [ref=e481]:
                        - /url: https://www.msn.com/en-in/news/other/a-terrorist-country-asking-me-that-question-jaishankar-s-sharp-reply-to-pak-journalist-at-un/vi-AA2cY720#comments
                        - button "View comments 5 Comment" [ref=e482]:
                          - img [ref=e483]
                        - generic [ref=e485]: "5"
                - generic [ref=e486]:
                  - button "Hide this story" [ref=e487]:
                    - img [ref=e488]
                    - text: Hide this story
                  - button "See more" [ref=e489]:
                    - img [ref=e490]
            - article [ref=e491] [cursor=pointer]:
              - generic [ref=e497]:
                - generic [ref=e499]:
                  - link "Chicago" [ref=e501]:
                    - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois?loc=eyJsIjoiQ2hpY2FnbyIsInIiOiJJbGxpbm9pcyIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTg3LjYyOTQwMjE2MDY0NDUzLCJ5Ijo0MS44ODI5MTU0OTY4MjYxN30%3D&weadegreetype=C&ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397&content=AQICard_wxaqi
                    - heading "Chicago" [level=2] [ref=e502]
                  - button "My location" [ref=e503]
                  - button "More options" [ref=e505]
                - generic [ref=e509]:
                  - generic [ref=e510]:
                    - generic [ref=e512]:
                      - link "Clear" [ref=e513]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois?loc=eyJsIjoiQ2hpY2FnbyIsInIiOiJJbGxpbm9pcyIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTg3LjYyOTQwMjE2MDY0NDUzLCJ5Ijo0MS44ODI5MTU0OTY4MjYxN30%3D&weadegreetype=C&ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397&content=AQICard_wxaqi
                        - img "Clear" [ref=e514]
                      - link "15°C" [ref=e515]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois?loc=eyJsIjoiQ2hpY2FnbyIsInIiOiJJbGxpbm9pcyIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTg3LjYyOTQwMjE2MDY0NDUzLCJ5Ijo0MS44ODI5MTU0OTY4MjYxN30%3D&weadegreetype=C&ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397&content=AQICard_wxaqi
                        - generic [ref=e516]: ‎15‎
                        - generic [ref=e518]: ‎°C‎
                    - generic [ref=e520]:
                      - link "Satisfactory" [ref=e522]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois?loc=eyJsIjoiQ2hpY2FnbyIsInIiOiJJbGxpbm9pcyIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTg3LjYyOTQwMjE2MDY0NDUzLCJ5Ijo0MS44ODI5MTU0OTY4MjYxN30%3D&weadegreetype=C&ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397&fcsttab=airquality
                        - text: Satisfactory
                      - link "See full forecast" [ref=e524]:
                        - /url: https://www.msn.com/en-in/weather/forecast/in-Chicago,Illinois?loc=eyJsIjoiQ2hpY2FnbyIsInIiOiJJbGxpbm9pcyIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTg3LjYyOTQwMjE2MDY0NDUzLCJ5Ijo0MS44ODI5MTU0OTY4MjYxN30%3D&weadegreetype=C&ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397&fcsttab=airquality
                        - img "arrow" [ref=e525]
                  - generic [ref=e530]:
                    - link "Larger map" [ref=e531]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Chicago,Illinois?loc=eyJsIjoiQ2hpY2FnbyIsInIiOiJJbGxpbm9pcyIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTg3LjYyOTQwMjE2MDY0NDUzLCJ5Ijo0MS44ODI5MTU0OTY4MjYxN30%3D&weadegreetype=C&ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397&content=AQICard_wxaqi&zoom=8
                      - generic [ref=e532]:
                        - generic:
                          - generic:
                            - img
                            - img
                            - img
                            - img
                            - img
                            - img
                      - img
                    - link "Check global air quality" [ref=e533]:
                      - /url: https://www.msn.com/en-in/weather/maps/airquality/in-Chicago,Illinois?loc=eyJsIjoiQ2hpY2FnbyIsInIiOiJJbGxpbm9pcyIsImMiOiJVbml0ZWQgU3RhdGVzIiwiaSI6IlVTIiwiZyI6ImVuLWluIiwieCI6LTg3LjYyOTQwMjE2MDY0NDUzLCJ5Ijo0MS44ODI5MTU0OTY4MjYxN30%3D&weadegreetype=C&ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397&content=AQICard_wxaqi&zoom=8
                      - img [ref=e535]
                      - generic "Check global air quality" [ref=e536]
                      - img [ref=e538]
                - button "See full forecast" [ref=e541]
            - 'article "iPhone 17 Pro price drops to Rs 56,990 at Reliance Digital: Check details" [ref=e542] [cursor=pointer]':
              - generic [ref=e544]:
                - img [ref=e545]
                - generic [ref=e546]:
                  - generic [ref=e547]:
                    - generic [ref=e548]:
                      - generic [ref=e549]:
                        - img [ref=e550]
                        - generic [ref=e551]: NDTV Profit
                      - generic [ref=e552]: ·
                      - generic [ref=e553]: 18h
                    - 'link "iPhone 17 Pro price drops to Rs 56,990 at Reliance Digital: Check details, NDTV Profit" [ref=e554]':
                      - /url: https://www.msn.com/en-in/lifestyle/other/iphone-17-pro-price-drops-to-rs-56-990-at-reliance-digital-check-details/ar-AA2cYfSJ
                      - text: "iPhone 17 Pro price drops to Rs 56,990 at Reliance Digital: Check details"
                  - 'generic "iPhone 17 Pro price drops to Rs 56,990 at Reliance Digital: Check details" [ref=e557]':
                    - generic [ref=e559]:
                      - generic [ref=e560]:
                        - button "44 Likes" [ref=e561]:
                          - generic [ref=e562]:
                            - img [ref=e563]
                            - generic [ref=e565]: "44"
                        - button "Dislike" [ref=e566]:
                          - img [ref=e568]
                      - link "Start the conversation" [ref=e571]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/iphone-17-pro-price-drops-to-rs-56-990-at-reliance-digital-check-details/ar-AA2cYfSJ#comments
                        - button "Start the conversation" [ref=e572]:
                          - img [ref=e573]
                - generic [ref=e575]:
                  - button "Hide this story" [ref=e576]:
                    - img [ref=e577]
                    - text: Hide this story
                  - button "See more" [ref=e578]:
                    - img [ref=e579]
            - 'article "When to Retire: A Quick Guide" [ref=e580] [cursor=pointer]':
              - generic [ref=e582]:
                - img [ref=e583]
                - generic [ref=e584]:
                  - generic [ref=e585]:
                    - generic [ref=e588]: Fisher Investments
                    - 'link "When to Retire: A Quick Guide, Fisher Investments" [ref=e589]':
                      - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=cdbc9f5b-8d27-4c81-8235-a6e9162512ee&bdc=oa&bidId=8&bidderId=4&cmExpId=LV5&impId=9&impTy=1&ldc=rhf2pczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=7d0a27d6-020e-4aa8-ba07-01a522625aa0&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8aJgtQR561A2O8bTQbbihjDVUCUy8fLqhWEuaT-f_BP2QLrtd0OoTOdTT7lZprNAbLJUwQoZmk6rq1wnzaV73jWkq5B4XJAa1jmYXmekJdexmCkQxAA0lHHYOu1ioMAhx1yGQiFT21fTlydn7yyKWDlaVYuTvNx_-X4pnPi5uD7nBTVh1T0wGktDxTFFUkIrzenDjtfvzFF92EQFkTkdmdx4dCXM%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZmlzaGVyaW52ZXN0bWVudHMuY29tJTJmZW4tdXMlMmZjYW1wYWlnbnMlMmZ3dHIlMmZsbiUzZnBwY3BfcGxhdGZvcm0lM2RiaW5nJTI2Y2MlM2QwRzNEJTI2cGMlM2RNU05CWjg0QUk1JTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkTVNBTi1MaXZlUmFtcC0xUC1BdWRpZW5jZXMlMjZ1dG1fdGVybSUzZGtleXdvcmQlMjZzZWFyY2hxdWVyeSUzZGtleXdvcmQlMjZtc2Nsa2lkJTNkZDNhZTJlNDA5YWMzMTIzOTc4M2M0NGY3MWY5N2IzNTYlMjZ1dG1fY29udGVudCUzZExSX0FJUV8lMjUyNDIwMGslMjUyQiUyNTIwSEhJJTI1MjAtJTI1MjAlMjUyNDFNJTI1MkIlMjUyNCUyNTIwLSUyNTIwNDUtNzUlMjUyMC0lMjUyMEFfMTAwLTY1MQ%26rlid%3Dd3ae2e409ac31239783c44f71f97b356&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                      - text: "When to Retire: A Quick Guide"
                  - link "Sponsored" [ref=e591]:
                    - /url: https://www.bing.com/api/v1/mediation/tracking?adUnit=1732768568&auId=cdbc9f5b-8d27-4c81-8235-a6e9162512ee&bdc=oa&bidId=8&bidderId=4&cmExpId=LV5&impId=9&impTy=1&ldc=rhf2pczr&mkt=en-us&oAdUnit=1732768568&pId=1&publisherId=17160724&rId=7d0a27d6-020e-4aa8-ba07-01a522625aa0&region=na&rlink=https%3A%2F%2Fwww.bing.com%2Faclick%3Fld%3De8aJgtQR561A2O8bTQbbihjDVUCUy8fLqhWEuaT-f_BP2QLrtd0OoTOdTT7lZprNAbLJUwQoZmk6rq1wnzaV73jWkq5B4XJAa1jmYXmekJdexmCkQxAA0lHHYOu1ioMAhx1yGQiFT21fTlydn7yyKWDlaVYuTvNx_-X4pnPi5uD7nBTVh1T0wGktDxTFFUkIrzenDjtfvzFF92EQFkTkdmdx4dCXM%26u%3DaHR0cHMlM2ElMmYlMmZ3d3cuZmlzaGVyaW52ZXN0bWVudHMuY29tJTJmZW4tdXMlMmZjYW1wYWlnbnMlMmZ3dHIlMmZsbiUzZnBwY3BfcGxhdGZvcm0lM2RiaW5nJTI2Y2MlM2QwRzNEJTI2cGMlM2RNU05CWjg0QUk1JTI2dXRtX3NvdXJjZSUzZGJpbmclMjZ1dG1fbWVkaXVtJTNkY3BjJTI2dXRtX2NhbXBhaWduJTNkTVNBTi1MaXZlUmFtcC0xUC1BdWRpZW5jZXMlMjZ1dG1fdGVybSUzZGtleXdvcmQlMjZzZWFyY2hxdWVyeSUzZGtleXdvcmQlMjZtc2Nsa2lkJTNkZDNhZTJlNDA5YWMzMTIzOTc4M2M0NGY3MWY5N2IzNTYlMjZ1dG1fY29udGVudCUzZExSX0FJUV8lMjUyNDIwMGslMjUyQiUyNTIwSEhJJTI1MjAtJTI1MjAlMjUyNDFNJTI1MkIlMjUyNCUyNTIwLSUyNTIwNDUtNzUlMjUyMC0lMjUyMEFfMTAwLTY1MQ%26rlid%3Dd3ae2e409ac31239783c44f71f97b356&rtype=targetURL&tagId=hp2-river-2&trafficGroup=zfa_angvir&trafficSubGroup=erfreir&uberGroup=hore_1c&uberSubGroup=erfreir
                - button "See more" [ref=e593]:
                  - img [ref=e594]
            - article [ref=e595] [cursor=pointer]:
              - generic [ref=e600]:
                - generic [ref=e602]:
                  - link "Games" [ref=e604]:
                    - /url: https://www.msn.com/en-in/play?ocid=msedgntp&cgfrom=cg_ntp_sd_cardtitle
                    - heading "Games" [level=2] [ref=e605]
                  - button "More options" [ref=e607]
                - list [ref=e611]:
                  - generic:
                    - listitem [ref=e612]:
                      - link "+1 Speed Escape Obby" [ref=e613]:
                        - /url: https://www.msn.com/en-in/play/games/1-speed-escape-obby/cg-9npnzjd1df3l?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397&ei=2
                        - generic [ref=e614]:
                          - img "+1 Speed Escape Obby"
                    - listitem [ref=e615]:
                      - link "Kick the Buddy" [ref=e616]:
                        - /url: https://www.msn.com/en-in/play/games/kick-the-buddy/cg-9ncz9n76wh8w?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397&ei=2
                        - generic [ref=e617]:
                          - img "Kick the Buddy"
                    - listitem [ref=e618]:
                      - link "Pirate Treasures" [ref=e619]:
                        - /url: https://www.msn.com/en-in/play/games/pirate-treasures/cg-9n8gsp6g4hd2?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397&ei=2
                        - generic [ref=e620]:
                          - img "Pirate Treasures"
                    - listitem [ref=e621]:
                      - link "Rally Champion" [ref=e622]:
                        - /url: https://www.msn.com/en-in/play/games/rally-champion/cg-9pmdcq52j3hj?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397&ei=2
                        - generic [ref=e623]:
                          - img "Rally Champion"
                    - listitem [ref=e624]:
                      - link "Mergest Kingdom" [ref=e625]:
                        - /url: https://www.msn.com/en-in/play/games/mergest-kingdom/cg-9pc19rxfzl82?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397&ei=2
                        - generic [ref=e626]:
                          - img "Mergest Kingdom"
                    - listitem [ref=e627]:
                      - link "Hidden Objects" [ref=e628]:
                        - /url: https://www.msn.com/en-in/play/games/hidden-objects/cg-9nrl7s8gcnmh?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397&ei=2
                        - generic [ref=e629]:
                          - img "Hidden Objects"
                    - listitem [ref=e630]:
                      - link "Farm Merge Valley" [ref=e631]:
                        - /url: https://www.msn.com/en-in/play/games/farm-merge-valley/cg-9nf2hg8fnlts?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397&ei=2
                        - generic [ref=e632]:
                          - img "Farm Merge Valley"
                    - listitem [ref=e633]:
                      - link "Mad Racer" [ref=e634]:
                        - /url: https://www.msn.com/en-in/play/games/mad-racer/cg-9n6fqg02tzms?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397&ei=2
                        - generic [ref=e635]:
                          - img "Mad Racer"
                    - listitem [ref=e636]:
                      - link "TapTap Arrow" [ref=e637]:
                        - /url: https://www.msn.com/en-in/play/games/taptap-arrow/cg-9ng0c12cnfsk?cgfrom=cg_ntp_sd_cardgameitem&ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397&ei=2
                        - generic [ref=e638]:
                          - img "TapTap Arrow"
                - generic [ref=e640]:
                  - generic [ref=e641]:
                    - generic "Previous" [ref=e642]:
                      - button "Previous" [ref=e643]
                    - tablist [ref=e645]:
                      - tab "Page 1" [selected] [ref=e646]
                      - tab "Page 2" [ref=e648]
                    - generic "Next" [ref=e650]:
                      - button "Next" [ref=e651]
                  - link "Explore more games" [ref=e653]:
                    - /url: https://www.msn.com/en-in/play?ocid=msedgntp&cgfrom=cg_ntp_sd_cardseemore
          - generic [ref=e654]:
            - article [ref=e655] [cursor=pointer]:
              - generic [ref=e660]:
                - generic [ref=e662]:
                  - link "Top Engaging News" [ref=e664]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397
                    - heading "Top Engaging News" [level=2] [ref=e665]
                  - button "More options" [ref=e667]
                - generic [ref=e669]:
                  - link "The Economic Times 3 Comments Nitin Gadkari says switching to a 100% ethanol car can cut fuel bills to just Rs 25 per litre" [ref=e671]:
                    - /url: https://www.msn.com/en-in/autos/general/nitin-gadkari-says-switching-to-a-100-ethanol-car-can-cut-fuel-bills-to-just-rs-25-per-litre/ar-AA2d0omE
                    - generic [ref=e672]:
                      - img [ref=e673]
                      - generic [ref=e674]: The Economic Times
                      - link "3 Comments" [ref=e676]:
                        - /url: https://www.msn.com/en-in/autos/general/nitin-gadkari-says-switching-to-a-100-ethanol-car-can-cut-fuel-bills-to-just-rs-25-per-litre/ar-AA2d0omE#comments
                        - img [ref=e677]
                        - paragraph [ref=e678]: "3"
                    - paragraph [ref=e679]: Nitin Gadkari says switching to a 100% ethanol car can cut fuel bills to just Rs 25 per litre
                  - 'link "NDTV 3 Comments Ask India, ask Pakistan: Balen Shah''s attack on broken global order at UN" [ref=e681]':
                    - /url: https://www.msn.com/en-in/news/other/ask-india-ask-pakistan-balen-shah-s-attack-on-broken-global-order-at-un/ar-AA2cYoBw
                    - generic [ref=e682]:
                      - img [ref=e683]
                      - generic [ref=e684]: NDTV
                      - link "3 Comments" [ref=e686]:
                        - /url: https://www.msn.com/en-in/news/other/ask-india-ask-pakistan-balen-shah-s-attack-on-broken-global-order-at-un/ar-AA2cYoBw#comments
                        - img [ref=e687]
                        - paragraph [ref=e688]: "3"
                    - paragraph [ref=e689]: "Ask India, ask Pakistan: Balen Shah's attack on broken global order at UN"
                  - link "The Financial Express 4 Comments Paying Rs 6,000 by UPI? Here’s what happens if you split it into three Rs 2,000 payments" [ref=e691]:
                    - /url: https://www.msn.com/en-in/money/financial-regulation/paying-rs-6-000-by-upi-here-s-what-happens-if-you-split-it-into-three-rs-2-000-payments/ar-AA2cWoDf
                    - generic [ref=e692]:
                      - img [ref=e693]
                      - generic [ref=e694]: The Financial Express
                      - link "4 Comments" [ref=e696]:
                        - /url: https://www.msn.com/en-in/money/financial-regulation/paying-rs-6-000-by-upi-here-s-what-happens-if-you-split-it-into-three-rs-2-000-payments/ar-AA2cWoDf#comments
                        - img [ref=e697]
                        - paragraph [ref=e698]: "4"
                    - paragraph [ref=e699]: Paying Rs 6,000 by UPI? Here’s what happens if you split it into three Rs 2,000 payments
                - generic [ref=e701]:
                  - generic [ref=e702]:
                    - generic "Previous" [ref=e703]:
                      - button "Previous" [ref=e704]
                    - tablist [ref=e706]:
                      - tab "Page 1" [selected] [ref=e707]
                      - tab "Page 2" [ref=e709]
                      - tab "Page 3" [ref=e711]
                    - generic "Next" [ref=e713]:
                      - button "Next" [ref=e714]
                  - link "See more" [ref=e716]:
                    - /url: https://www.msn.com/en-in/channel/topic/Top Engaging News/tp-Y_42e62c1c-32a7-462e-a6b0-8a718bfe473d?ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397
            - article [ref=e717] [cursor=pointer]
            - article "Anjali Anand flaunts luxury bags, Farah Khan says, 'I'll have to sell 2 cars to buy this'" [ref=e724] [cursor=pointer]:
              - generic [ref=e726]:
                - img [ref=e727]
                - generic [ref=e728]:
                  - generic [ref=e729]:
                    - generic [ref=e730]:
                      - generic [ref=e731]:
                        - img [ref=e732]
                        - generic [ref=e733]: The Indian Express
                      - generic [ref=e734]: ·
                      - generic [ref=e735]: 20h
                    - link "Anjali Anand flaunts luxury bags, Farah Khan says, 'I'll have to sell 2 cars to buy this', The Indian Express" [ref=e736]:
                      - /url: https://www.msn.com/en-in/entertainment/celebrities/anjali-anand-flaunts-luxury-bags-farah-khan-says-i-ll-have-to-sell-2-cars-to-buy-this/ar-AA2cY0Gs
                      - text: Anjali Anand flaunts luxury bags, Farah Khan says, 'I'll have to sell 2 cars to buy this'
                  - generic "Anjali Anand flaunts luxury bags, Farah Khan says, 'I'll have to sell 2 cars to buy this'" [ref=e739]:
                    - generic [ref=e741]:
                      - generic [ref=e742]:
                        - button "24 Likes" [ref=e743]:
                          - generic [ref=e744]:
                            - img [ref=e745]
                            - generic [ref=e747]: "24"
                        - button "Dislike" [ref=e748]:
                          - img [ref=e750]
                      - link "Start the conversation" [ref=e753]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/anjali-anand-flaunts-luxury-bags-farah-khan-says-i-ll-have-to-sell-2-cars-to-buy-this/ar-AA2cY0Gs#comments
                        - button "Start the conversation" [ref=e754]:
                          - img [ref=e755]
                - generic [ref=e757]:
                  - button "Hide this story" [ref=e758]:
                    - img [ref=e759]
                    - text: Hide this story
                  - button "See more" [ref=e760]:
                    - img [ref=e761]
            - article [ref=e762] [cursor=pointer]:
              - generic [ref=e768]:
                - generic [ref=e770]:
                  - img "Watchlist suggestions" [ref=e772]
                  - link "Watchlist suggestions" [ref=e773]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
                    - heading "Watchlist suggestions" [level=2] [ref=e774]
                  - button "More options" [ref=e776]
                - generic [ref=e781]:
                  - link "24K Gold (10 Grams) - Indian Rupee XAUINR ‎+0.69%‎ 144496" [ref=e783]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=cejq77&ocid=hpmsn
                    - generic [ref=e784]:
                      - generic [ref=e786]: 24K Gold (10 Grams) - Indian Rupee
                      - generic [ref=e788]: XAUINR
                    - generic [ref=e793]:
                      - generic [ref=e794]: ‎+0.69%‎
                      - generic [ref=e795]: "144496"
                    - button "Add to watchlist" [ref=e798]:
                      - img [ref=e799]
                  - link "Silver Silver ‎+1.25%‎ 64.80" [ref=e803]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=auvwr7&ocid=hpmsn
                    - generic [ref=e804]:
                      - generic [ref=e806]: Silver
                      - generic [ref=e808]: Silver
                    - generic [ref=e813]:
                      - generic [ref=e814]: ‎+1.25%‎
                      - generic [ref=e815]: "64.80"
                    - button "Add to watchlist" [ref=e818]:
                      - img [ref=e819]
                  - link "Citigroup Inc. C ‎+1.65%‎ 134.28" [ref=e823]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=a1p3ww&ocid=hpmsn
                    - generic [ref=e824]:
                      - generic [ref=e826]: Citigroup Inc.
                      - generic [ref=e828]: C
                    - generic [ref=e833]:
                      - generic [ref=e834]: ‎+1.65%‎
                      - generic [ref=e835]: "134.28"
                    - button "Add to watchlist" [ref=e838]:
                      - img [ref=e839]
                  - link "Adani Power Ltd ADANIPOWER ‎+1.64%‎ 202.75" [ref=e843]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahgr9c&ocid=hpmsn
                    - generic [ref=e844]:
                      - generic [ref=e846]: Adani Power Ltd
                      - generic [ref=e848]: ADANIPOWER
                    - generic [ref=e853]:
                      - generic [ref=e854]: ‎+1.64%‎
                      - generic [ref=e855]: "202.75"
                    - button "Add to watchlist" [ref=e858]:
                      - img [ref=e859]
                  - link "Tata Motors Passenger Vehicles Ltd TMPV ‎-1.54%‎ 290.45" [ref=e863]:
                    - /url: https://www.msn.com/en-in/money/watchlist?id=ahk9xm&ocid=hpmsn
                    - generic [ref=e864]:
                      - generic [ref=e866]: Tata Motors Passenger Vehicles Ltd
                      - generic [ref=e868]: TMPV
                    - generic [ref=e873]:
                      - generic [ref=e874]: ‎-1.54%‎
                      - generic [ref=e875]: "290.45"
                    - button "Add to watchlist" [ref=e878]:
                      - img [ref=e879]
                - generic [ref=e883]:
                  - generic [ref=e884]:
                    - generic "Previous" [ref=e885]:
                      - button "Previous" [ref=e886]
                    - tablist [ref=e888]:
                      - tab "Page 1" [selected] [ref=e889]
                      - tab "Page 2" [ref=e891]
                      - tab "Page 3" [ref=e893]
                      - tab "Page 4" [ref=e895]
                      - tab "Page 5" [ref=e897]
                      - tab "Page 6"
                      - tab "Page 7"
                    - generic "Next" [ref=e899]:
                      - button "Next" [ref=e900]
                  - link "See watchlist suggestions" [ref=e902]:
                    - /url: https://www.msn.com/en-in/money/watchlist?ocid=hpmsn
            - 'article "ECI-SIR row: Is CEC Gyanesh Kumar immune from arrest? How an SC petition is countering it | Explained" [ref=e903] [cursor=pointer]':
              - generic [ref=e905]:
                - img [ref=e906]
                - generic [ref=e907]:
                  - generic [ref=e908]:
                    - generic [ref=e909]:
                      - generic [ref=e910]:
                        - img [ref=e911]
                        - generic [ref=e912]: The Daily Jagran
                      - generic [ref=e913]: ·
                      - generic [ref=e914]: 5h
                    - 'link "ECI-SIR row: Is CEC Gyanesh Kumar immune from arrest? How an SC petition is countering it | Explained, The Daily Jagran" [ref=e915]':
                      - /url: https://www.msn.com/en-in/news/other/eci-sir-row-is-cec-gyanesh-kumar-immune-from-arrest-how-an-sc-petition-is-countering-it-explained/ar-AA2cZQZ9
                      - text: "ECI-SIR row: Is CEC Gyanesh Kumar immune from arrest? How an SC petition is countering it | Explained"
                  - 'generic "ECI-SIR row: Is CEC Gyanesh Kumar immune from arrest? How an SC petition is countering it | Explained" [ref=e918]':
                    - generic [ref=e920]:
                      - generic [ref=e921]:
                        - button "13 Likes" [ref=e922]:
                          - generic [ref=e923]:
                            - img [ref=e924]
                            - generic [ref=e926]: "13"
                        - button "Dislike" [ref=e927]:
                          - img [ref=e929]
                      - link "View comments 5 Comment" [ref=e932]:
                        - /url: https://www.msn.com/en-in/news/other/eci-sir-row-is-cec-gyanesh-kumar-immune-from-arrest-how-an-sc-petition-is-countering-it-explained/ar-AA2cZQZ9#comments
                        - button "View comments 5 Comment" [ref=e933]:
                          - img [ref=e934]
                        - generic [ref=e936]: "5"
                - generic [ref=e937]:
                  - button "Hide this story" [ref=e938]:
                    - img [ref=e939]
                    - text: Hide this story
                  - button "See more" [ref=e940]:
                    - img [ref=e941]
            - article "Jos Buttler creates England history with a record no one has reached" [ref=e942] [cursor=pointer]:
              - generic [ref=e944]:
                - img [ref=e945]
                - generic [ref=e946]:
                  - generic [ref=e947]:
                    - generic [ref=e948]:
                      - generic [ref=e949]:
                        - img [ref=e950]
                        - generic [ref=e951]: Times Now
                      - generic [ref=e952]: ·
                      - generic [ref=e953]: 22h
                    - link "Jos Buttler creates England history with a record no one has reached, Times Now" [ref=e954]:
                      - /url: https://www.msn.com/en-in/sports/cricket/jos-buttler-creates-england-history-with-a-record-no-one-has-reached/ar-AA2cWBA2
                      - text: Jos Buttler creates England history with a record no one has reached
                  - generic "Jos Buttler creates England history with a record no one has reached" [ref=e957]:
                    - generic [ref=e959]:
                      - generic [ref=e960]:
                        - button "37 Likes" [ref=e961]:
                          - generic [ref=e962]:
                            - img [ref=e963]
                            - generic [ref=e965]: "37"
                        - button "Dislike" [ref=e966]:
                          - img [ref=e968]
                      - link "Start the conversation" [ref=e971]:
                        - /url: https://www.msn.com/en-in/sports/cricket/jos-buttler-creates-england-history-with-a-record-no-one-has-reached/ar-AA2cWBA2#comments
                        - button "Start the conversation" [ref=e972]:
                          - img [ref=e973]
                - generic [ref=e975]:
                  - button "Hide this story" [ref=e976]:
                    - img [ref=e977]
                    - text: Hide this story
                  - button "See more" [ref=e978]:
                    - img [ref=e979]
            - article [ref=e980] [cursor=pointer]:
              - generic [ref=e986]:
                - generic [ref=e988]:
                  - img "ICC" [ref=e990]
                  - link "ICC" [ref=e991]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397
                    - heading "ICC" [level=2] [ref=e992]
                  - button "More interests" [ref=e993]
                  - generic [ref=e994]:
                    - generic "Popular in your area" [ref=e995]:
                      - button "Popular in your area" [ref=e996]
                    - button "More options" [ref=e997]
                - generic [ref=e1001]:
                  - link "SA 27 Sept 8:00 am AUS The Wanderers Stadium, Johannesburg" [ref=e1002]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-269788?ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397
                    - generic "SA" [ref=e1003]:
                      - generic [ref=e1005]:
                        - generic [ref=e1007]: SA
                        - button "Click to follow SA":
                          - generic:
                            - img
                    - generic [ref=e1010]:
                      - generic [ref=e1011]: 27 Sept
                      - generic [ref=e1012]: 8:00 am
                    - generic "AUS" [ref=e1013]:
                      - generic [ref=e1015]:
                        - generic [ref=e1017]: AUS
                        - button "Click to follow AUS":
                          - generic:
                            - img
                    - generic "The Wanderers Stadium, Johannesburg" [ref=e1020]
                  - link "IND 27 Sept 8:30 am WI Greenfield International Stadium, Thiruvananthapuram" [ref=e1021]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-270270?ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397
                    - generic "IND" [ref=e1022]:
                      - generic [ref=e1024]:
                        - generic [ref=e1026]: IND
                        - button "Click to follow IND":
                          - generic:
                            - img
                    - generic [ref=e1029]:
                      - generic [ref=e1030]: 27 Sept
                      - generic [ref=e1031]: 8:30 am
                    - generic "WI" [ref=e1032]:
                      - generic [ref=e1034]:
                        - generic [ref=e1036]: WI
                        - button "Click to follow WI":
                          - generic:
                            - img
                    - generic "Greenfield International Stadium, Thiruvananthapuram" [ref=e1039]
                  - link "ENG 27 Sept 9:30 am SL The Kia Oval, London" [ref=e1040]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals/game-center/sp-id-264922?ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397
                    - generic "ENG" [ref=e1041]:
                      - generic [ref=e1043]:
                        - generic [ref=e1045]: ENG
                        - button "Click to follow ENG":
                          - generic:
                            - img
                    - generic [ref=e1048]:
                      - generic [ref=e1049]: 27 Sept
                      - generic [ref=e1050]: 9:30 am
                    - generic "SL" [ref=e1051]:
                      - generic [ref=e1053]:
                        - generic [ref=e1055]: SL
                        - button "Click to follow SL":
                          - generic:
                            - img
                    - generic "The Kia Oval, London" [ref=e1058]
                - generic [ref=e1060]:
                  - generic [ref=e1061]:
                    - generic "Previous" [ref=e1062]:
                      - button "Previous" [ref=e1063]
                    - tablist [ref=e1065]:
                      - tab "Page 1" [selected] [ref=e1066]
                      - tab "Page 2" [ref=e1068]
                      - tab "Page 3" [ref=e1070]
                      - tab "Page 4" [ref=e1072]
                      - tab "Page 5" [ref=e1074]
                      - tab "Page 6"
                    - generic "Next" [ref=e1076]:
                      - button "Next" [ref=e1077]
                  - link "See more ICC" [ref=e1079]:
                    - /url: https://www.msn.com/en-in/sports/cricket/cricket-internationals?ocid=hpmsn&cvid=6ab78552439e4ff686e0983ffa807397
            - 'article "Ex-Army doctor issues warning: Avoid peanuts if they show these signs" [ref=e1080] [cursor=pointer]':
              - generic [ref=e1082]:
                - img [ref=e1083]
                - generic [ref=e1084]:
                  - generic [ref=e1085]:
                    - generic [ref=e1087]:
                      - img [ref=e1088]
                      - generic [ref=e1089]: The Economic Times
                    - 'link "Ex-Army doctor issues warning: Avoid peanuts if they show these signs, The Economic Times" [ref=e1090]':
                      - /url: https://www.msn.com/en-in/food-and-drink/general/ex-army-doctor-issues-warning-avoid-peanuts-if-they-show-these-signs/ar-AA1SJlJ2
                      - text: "Ex-Army doctor issues warning: Avoid peanuts if they show these signs"
                  - 'generic "Ex-Army doctor issues warning: Avoid peanuts if they show these signs" [ref=e1093]':
                    - generic [ref=e1095]:
                      - generic [ref=e1096]:
                        - button "126 Likes" [ref=e1097]:
                          - generic [ref=e1098]:
                            - img [ref=e1099]
                            - generic [ref=e1101]: "126"
                        - button "Dislike" [ref=e1102]:
                          - img [ref=e1104]
                      - link "Start the conversation" [ref=e1107]:
                        - /url: https://www.msn.com/en-in/food-and-drink/general/ex-army-doctor-issues-warning-avoid-peanuts-if-they-show-these-signs/ar-AA1SJlJ2#comments
                        - button "Start the conversation" [ref=e1108]:
                          - img [ref=e1109]
                - generic [ref=e1111]:
                  - button "Hide this story" [ref=e1112]:
                    - img [ref=e1113]
                    - text: Hide this story
                  - button "See more" [ref=e1114]:
                    - img [ref=e1115]
            - article [ref=e1116] [cursor=pointer]
            - article "He paid for American Airlines first class - then he saw the reality" [ref=e1123] [cursor=pointer]:
              - generic [ref=e1125]:
                - generic [ref=e1129]:
                  - generic [ref=e1130]:
                    - generic [ref=e1132]:
                      - img [ref=e1133]
                      - generic [ref=e1134]: Trek Trendy
                    - link "He paid for American Airlines first class - then he saw the reality, Trek Trendy" [ref=e1135]:
                      - /url: https://www.msn.com/en-in/travel/air-travel/he-paid-for-american-airlines-first-class-then-he-saw-the-reality/vi-AA1YU6uK
                      - text: He paid for American Airlines first class - then he saw the reality
                  - generic "He paid for American Airlines first class - then he saw the reality" [ref=e1138]:
                    - generic [ref=e1140]:
                      - generic [ref=e1141]:
                        - button "29 Likes" [ref=e1142]:
                          - generic [ref=e1143]:
                            - img [ref=e1144]
                            - generic [ref=e1146]: "29"
                        - button "Dislike" [ref=e1147]:
                          - img [ref=e1149]
                      - link "Start the conversation" [ref=e1152]:
                        - /url: https://www.msn.com/en-in/travel/air-travel/he-paid-for-american-airlines-first-class-then-he-saw-the-reality/vi-AA1YU6uK#comments
                        - button "Start the conversation" [ref=e1153]:
                          - img [ref=e1154]
                - generic [ref=e1156]:
                  - button "Hide this story" [ref=e1157]:
                    - img [ref=e1158]
                    - text: Hide this story
                  - button "See more" [ref=e1159]:
                    - img [ref=e1160]
          - article [ref=e1162]
          - generic [ref=e1164]:
            - article [ref=e1165] [cursor=pointer]:
              - generic [ref=e1170]:
                - generic [ref=e1171]:
                  - generic [ref=e1172]:
                    - link "Recommended videos" [ref=e1173]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - img [ref=e1174]
                    - link "Recommended videos" [ref=e1177]:
                      - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                  - generic [ref=e1178]:
                    - generic:
                      - link "See more" [ref=e1179]:
                        - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                      - generic "More options" [ref=e1180]:
                        - button "More options" [ref=e1181]:
                          - generic:
                            - generic:
                              - img
                - tabpanel [ref=e1183]:
                  - generic [ref=e1185]:
                    - generic [ref=e1187]:
                      - generic:
                        - article "The House needs 1 vote to impeach a president - then the Senate can remove him" [ref=e1190]:
                          - generic [ref=e1191]:
                            - img "The House Needs 1 Vote to Impeach a President - Then the Senate Can Remove Him" [ref=e1193]
                            - generic [ref=e1195]: 05:12
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1196]:
                              - generic [ref=e1197]:
                                - img "TED" [ref=e1198]
                                - generic [ref=e1199]:
                                  - generic:
                                    - generic "TED" [ref=e1200]
                                    - generic [ref=e1201]: ·
                                    - generic [ref=e1202]: 1d
                              - link "The House needs 1 vote to impeach a president - then the Senate can remove him" [ref=e1203]:
                                - /url: https://www.msn.com/en-in/news/other/the-house-needs-1-vote-to-impeach-a-president-then-the-senate-can-remove-him/vi-AA21ZPAb?ocid=hpmsn
                                - heading "The House needs 1 vote to impeach a president - then the Senate can remove him" [level=2] [ref=e1204]:
                                  - generic: The House needs 1 vote to impeach a president - then the Senate can remove him
                            - button "See more" [ref=e1208]
                        - article "He was fooling around on a cliff - then realized he couldn't climb back up" [ref=e1211]:
                          - generic [ref=e1212]:
                            - img "He Was Fooling Around on a Cliff - Then Realized He Couldn't Climb Back Up" [ref=e1214]
                            - generic [ref=e1216]: 27:39
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1217]:
                              - generic [ref=e1218]:
                                - img "Magnus Midtbø" [ref=e1219]
                                - generic [ref=e1220]:
                                  - generic:
                                    - generic "Magnus Midtbø" [ref=e1221]
                                    - generic [ref=e1222]: ·
                                    - generic [ref=e1223]: 17h
                              - link "He was fooling around on a cliff - then realized he couldn't climb back up" [ref=e1224]:
                                - /url: https://www.msn.com/en-in/lifestyle/other/he-was-fooling-around-on-a-cliff-then-realized-he-couldn-t-climb-back-up/vi-AA2aPqYH?ocid=hpmsn
                                - heading "He was fooling around on a cliff - then realized he couldn't climb back up" [level=2] [ref=e1225]:
                                  - generic: He was fooling around on a cliff - then realized he couldn't climb back up
                            - button "See more" [ref=e1229]
                        - article [ref=e1232]:
                          - generic [ref=e1233]:
                            - img "They Thought He Was Just a Waiter… Then They Froze" [ref=e1235]
                            - generic [ref=e1237]: 09:41
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1238]:
                              - generic [ref=e1239]:
                                - img "Xiaomanyc." [ref=e1240]
                                - generic [ref=e1241]:
                                  - generic:
                                    - generic "Xiaomanyc." [ref=e1242]
                                    - generic [ref=e1243]: ·
                                    - generic [ref=e1244]: 19h
                              - link "They thought he was just a waiter... then they froze" [ref=e1245]:
                                - /url: https://www.msn.com/en-in/food-and-drink/world-cuisines/they-thought-he-was-just-a-waiter-then-they-froze/vi-AA28AVPn?ocid=hpmsn
                                - heading "They thought he was just a waiter... then they froze" [level=2] [ref=e1246]:
                                  - generic: They thought he was just a waiter... then they froze
                            - button "See more" [ref=e1250]
                        - article "Trevor Noah exposes the wild difference between US and African kids" [ref=e1253]:
                          - generic [ref=e1254]:
                            - img "Trevor Noah Exposes the Wild Difference Between US and African Kids Thumbnail" [ref=e1256]
                            - generic [ref=e1258]: 08:58
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1259]:
                              - generic [ref=e1260]:
                                - img "Trevor Noah" [ref=e1261]
                                - generic [ref=e1262]:
                                  - generic:
                                    - generic "Trevor Noah" [ref=e1263]
                                    - generic [ref=e1264]: ·
                                    - generic [ref=e1265]: 1w
                              - link "Trevor Noah exposes the wild difference between US and African kids" [ref=e1266]:
                                - /url: https://www.msn.com/en-in/entertainment/celebrities/trevor-noah-exposes-the-wild-difference-between-us-and-african-kids/vi-AA2ctiFc?ocid=hpmsn
                                - heading "Trevor Noah exposes the wild difference between US and African kids" [level=2] [ref=e1267]:
                                  - generic: Trevor Noah exposes the wild difference between US and African kids
                            - button "See more" [ref=e1271]
                        - article "A 700 HP RAM TRX turns the work commute into a challenge" [ref=e1274]:
                          - generic [ref=e1275]:
                            - img "A 700 HP RAM TRX Turns the Work Commute Into a Challenge" [ref=e1277]
                            - generic [ref=e1279]: 12:03
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1280]:
                              - generic [ref=e1281]:
                                - img "DRIVETRIBE" [ref=e1282]
                                - generic [ref=e1283]:
                                  - generic:
                                    - generic "DRIVETRIBE" [ref=e1284]
                                    - generic [ref=e1285]: ·
                                    - generic [ref=e1286]: 3h
                              - link "A 700 HP RAM TRX turns the work commute into a challenge" [ref=e1287]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/a-700-hp-ram-trx-turns-the-work-commute-into-a-challenge/vi-AA2cZCLF?ocid=hpmsn
                                - heading "A 700 HP RAM TRX turns the work commute into a challenge" [level=2] [ref=e1288]:
                                  - generic: A 700 HP RAM TRX turns the work commute into a challenge
                            - button "See more" [ref=e1292]
                        - article "He sat down for a simple head massage... minutes later he could barely process what was happening" [ref=e1295]:
                          - generic [ref=e1296]:
                            - img "He Sat Down for a Simple Head Massage... Minutes Later He Could Barely Process What Was Happening" [ref=e1298]
                            - generic [ref=e1300]: 13:35
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1301]:
                              - generic [ref=e1302]:
                                - img "Xiaomanyc." [ref=e1303]
                                - generic [ref=e1304]:
                                  - generic:
                                    - generic "Xiaomanyc." [ref=e1305]
                                    - generic [ref=e1306]: ·
                                    - generic [ref=e1307]: 19h
                              - link "He sat down for a simple head massage... minutes later he could barely process what was happening" [ref=e1308]:
                                - /url: https://www.msn.com/en-in/health/mindandbody/he-sat-down-for-a-simple-head-massage-minutes-later-he-could-barely-process-what-was-happening/vi-AA2b2DpE?ocid=hpmsn
                                - heading "He sat down for a simple head massage... minutes later he could barely process what was happening" [level=2] [ref=e1309]:
                                  - generic: He sat down for a simple head massage... minutes later he could barely process what was happening
                            - button "See more" [ref=e1313]
                        - article [ref=e1316]:
                          - generic [ref=e1317]:
                            - img "A Rusty Jaguar XJR Gets Its Biggest Restoration Push Yet" [ref=e1319]
                            - generic [ref=e1321]: 10:51
                            - generic:
                              - generic:
                                - generic:
                                  - img
                            - generic [ref=e1322]:
                              - generic [ref=e1323]:
                                - img "DRIVETRIBE" [ref=e1324]
                                - generic [ref=e1325]:
                                  - generic:
                                    - generic "DRIVETRIBE" [ref=e1326]
                                    - generic [ref=e1327]: ·
                                    - generic [ref=e1328]: 1h
                              - link "A rusty Jaguar XJR gets its biggest restoration push yet" [ref=e1329]:
                                - /url: https://www.msn.com/en-in/autos/performance-cars/a-rusty-jaguar-xjr-gets-its-biggest-restoration-push-yet/vi-AA2cZFhM?ocid=hpmsn
                                - heading "A rusty Jaguar XJR gets its biggest restoration push yet" [level=2] [ref=e1330]:
                                  - generic: A rusty Jaguar XJR gets its biggest restoration push yet
                            - button "See more" [ref=e1334]
                        - link "See more" [ref=e1336]:
                          - /url: https://www.msn.com/en-in/video?ocid=hpmsn
                          - img [ref=e1337]
                          - text: See more
                    - button "next" [ref=e1341]:
                      - img [ref=e1344]
            - article "Swades actor Gayatri Oberoi left Bollywood at 28, married 59th richest Indian worth Rs 48,100 crore" [ref=e1346] [cursor=pointer]:
              - generic [ref=e1348]:
                - img [ref=e1349]
                - generic [ref=e1350]:
                  - generic [ref=e1351]:
                    - generic [ref=e1352]:
                      - generic [ref=e1353]:
                        - img [ref=e1354]
                        - generic [ref=e1355]: NDTV
                      - generic [ref=e1356]: ·
                      - generic [ref=e1357]: 1h
                    - link "Swades actor Gayatri Oberoi left Bollywood at 28, married 59th richest Indian worth Rs 48,100 crore, NDTV" [ref=e1358]:
                      - /url: https://www.msn.com/en-in/entertainment/celebrities/swades-actor-gayatri-oberoi-left-bollywood-at-28-married-59th-richest-indian-worth-rs-48-100-crore/ar-AA2d0tBk
                      - text: Swades actor Gayatri Oberoi left Bollywood at 28, married 59th richest Indian worth Rs 48,100 crore
                  - generic "Swades actor Gayatri Oberoi left Bollywood at 28, married 59th richest Indian worth Rs 48,100 crore" [ref=e1361]:
                    - generic [ref=e1363]:
                      - generic [ref=e1364]:
                        - button "6 Likes" [ref=e1365]:
                          - generic [ref=e1366]:
                            - img [ref=e1367]
                            - generic [ref=e1369]: "6"
                        - button "Dislike" [ref=e1370]:
                          - img [ref=e1372]
                      - link "Start the conversation" [ref=e1375]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/swades-actor-gayatri-oberoi-left-bollywood-at-28-married-59th-richest-indian-worth-rs-48-100-crore/ar-AA2d0tBk#comments
                        - button "Start the conversation" [ref=e1376]:
                          - img [ref=e1377]
                - generic [ref=e1379]:
                  - button "Hide this story" [ref=e1380]:
                    - img [ref=e1381]
                    - text: Hide this story
                  - button "See more" [ref=e1382]:
                    - img [ref=e1383]
            - article "10 life lessons from Neem Karoli Baba to teach your children" [ref=e1384] [cursor=pointer]:
              - generic [ref=e1386]:
                - img [ref=e1387]
                - generic [ref=e1388]:
                  - generic [ref=e1389]:
                    - generic [ref=e1391]:
                      - img [ref=e1392]
                      - generic [ref=e1393]: Moneycontrol
                    - link "10 life lessons from Neem Karoli Baba to teach your children, Moneycontrol" [ref=e1394]:
                      - /url: https://www.msn.com/en-in/lifestyle/other/10-life-lessons-from-neem-karoli-baba-to-teach-your-children/ar-AA226b4L
                      - text: 10 life lessons from Neem Karoli Baba to teach your children
                  - generic "10 life lessons from Neem Karoli Baba to teach your children" [ref=e1397]:
                    - generic [ref=e1399]:
                      - generic [ref=e1400]:
                        - button "1,063 Likes" [ref=e1401]:
                          - generic [ref=e1402]:
                            - img [ref=e1403]
                            - generic [ref=e1405]: 1k
                        - button "Dislike" [ref=e1406]:
                          - img [ref=e1408]
                      - link "View comments 2 Comment" [ref=e1411]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/10-life-lessons-from-neem-karoli-baba-to-teach-your-children/ar-AA226b4L#comments
                        - button "View comments 2 Comment" [ref=e1412]:
                          - img [ref=e1413]
                        - generic [ref=e1415]: "2"
                - generic [ref=e1416]:
                  - button "Hide this story" [ref=e1417]:
                    - img [ref=e1418]
                    - text: Hide this story
                  - button "See more" [ref=e1419]:
                    - img [ref=e1420]
            - article "Paying Rs 6,000 by UPI? Here’s what happens if you split it into three Rs 2,000 payments" [ref=e1421] [cursor=pointer]:
              - generic [ref=e1423]:
                - img [ref=e1424]
                - generic [ref=e1425]:
                  - generic [ref=e1426]:
                    - generic [ref=e1427]:
                      - generic [ref=e1428]:
                        - img [ref=e1429]
                        - generic [ref=e1430]: The Financial Express
                      - generic [ref=e1431]: ·
                      - generic [ref=e1432]: 23h
                    - link "Paying Rs 6,000 by UPI? Here’s what happens if you split it into three Rs 2,000 payments, The Financial Express" [ref=e1433]:
                      - /url: https://www.msn.com/en-in/money/financial-regulation/paying-rs-6-000-by-upi-here-s-what-happens-if-you-split-it-into-three-rs-2-000-payments/ar-AA2cWoDf
                      - text: Paying Rs 6,000 by UPI? Here’s what happens if you split it into three Rs 2,000 payments
                  - generic "Paying Rs 6,000 by UPI? Here’s what happens if you split it into three Rs 2,000 payments" [ref=e1436]:
                    - generic [ref=e1438]:
                      - generic [ref=e1439]:
                        - button "23 Likes" [ref=e1440]:
                          - generic [ref=e1441]:
                            - img [ref=e1442]
                            - generic [ref=e1444]: "23"
                        - button "Dislike" [ref=e1445]:
                          - img [ref=e1447]
                      - link "View comments 4 Comment" [ref=e1450]:
                        - /url: https://www.msn.com/en-in/money/financial-regulation/paying-rs-6-000-by-upi-here-s-what-happens-if-you-split-it-into-three-rs-2-000-payments/ar-AA2cWoDf#comments
                        - button "View comments 4 Comment" [ref=e1451]:
                          - img [ref=e1452]
                        - generic [ref=e1454]: "4"
                - generic [ref=e1455]:
                  - button "Hide this story" [ref=e1456]:
                    - img [ref=e1457]
                    - text: Hide this story
                  - button "See more" [ref=e1458]:
                    - img [ref=e1459]
            - article "What is the full form of BMW?" [ref=e1460] [cursor=pointer]:
              - generic [ref=e1462]:
                - img [ref=e1463]
                - generic [ref=e1464]:
                  - generic [ref=e1465]:
                    - generic [ref=e1467]:
                      - img [ref=e1468]
                      - generic [ref=e1469]: Jagran Josh
                    - link "What is the full form of BMW?, Jagran Josh" [ref=e1470]:
                      - /url: https://www.msn.com/en-in/autos/general/what-is-the-full-form-of-bmw/ar-AA1TZLgQ
                      - text: What is the full form of BMW?
                  - generic "What is the full form of BMW?" [ref=e1473]:
                    - generic [ref=e1475]:
                      - generic [ref=e1476]:
                        - button "5,826 Likes" [ref=e1477]:
                          - generic [ref=e1478]:
                            - img [ref=e1479]
                            - generic [ref=e1481]: 6k
                        - button "Dislike" [ref=e1482]:
                          - img [ref=e1484]
                      - link "View comments 27 Comment" [ref=e1487]:
                        - /url: https://www.msn.com/en-in/autos/general/what-is-the-full-form-of-bmw/ar-AA1TZLgQ#comments
                        - button "View comments 27 Comment" [ref=e1488]:
                          - img [ref=e1489]
                        - generic [ref=e1491]: "27"
                - generic [ref=e1492]:
                  - button "Hide this story" [ref=e1493]:
                    - img [ref=e1494]
                    - text: Hide this story
                  - button "See more" [ref=e1495]:
                    - img [ref=e1496]
            - article "The richest man in history had more wealth than entire countries" [ref=e1497] [cursor=pointer]:
              - generic [ref=e1499]:
                - img [ref=e1500]
                - generic [ref=e1501]:
                  - generic [ref=e1502]:
                    - generic [ref=e1504]:
                      - img [ref=e1505]
                      - generic [ref=e1506]: News18
                    - link "The richest man in history had more wealth than entire countries, News18" [ref=e1507]:
                      - /url: https://www.msn.com/en-in/news/other/the-richest-man-in-history-had-more-wealth-than-entire-countries/ar-AA21OxI2
                      - text: The richest man in history had more wealth than entire countries
                  - generic "The richest man in history had more wealth than entire countries" [ref=e1510]:
                    - generic [ref=e1512]:
                      - generic [ref=e1513]:
                        - button "597 Likes" [ref=e1514]:
                          - generic [ref=e1515]:
                            - img [ref=e1516]
                            - generic [ref=e1518]: "597"
                        - button "Dislike" [ref=e1519]:
                          - img [ref=e1521]
                      - link "View comments 9 Comment" [ref=e1524]:
                        - /url: https://www.msn.com/en-in/news/other/the-richest-man-in-history-had-more-wealth-than-entire-countries/ar-AA21OxI2#comments
                        - button "View comments 9 Comment" [ref=e1525]:
                          - img [ref=e1526]
                        - generic [ref=e1528]: "9"
                - generic [ref=e1529]:
                  - button "Hide this story" [ref=e1530]:
                    - img [ref=e1531]
                    - text: Hide this story
                  - button "See more" [ref=e1532]:
                    - img [ref=e1533]
            - 'article "How to open a coconut without a hammer: 5 easy methods to crack the shell at home" [ref=e1534] [cursor=pointer]':
              - generic [ref=e1536]:
                - img [ref=e1537]
                - generic [ref=e1538]:
                  - generic [ref=e1539]:
                    - generic [ref=e1541]:
                      - img [ref=e1542]
                      - generic [ref=e1543]: The Times of India
                    - 'link "How to open a coconut without a hammer: 5 easy methods to crack the shell at home, The Times of India" [ref=e1544]':
                      - /url: https://www.msn.com/en-in/food-and-drink/general/how-to-open-a-coconut-without-a-hammer-5-easy-methods-to-crack-the-shell-at-home/ar-AA2ahxNG
                      - text: "How to open a coconut without a hammer: 5 easy methods to crack the shell at home"
                  - 'generic "How to open a coconut without a hammer: 5 easy methods to crack the shell at home" [ref=e1547]':
                    - generic [ref=e1549]:
                      - generic [ref=e1550]:
                        - button "28 Likes" [ref=e1551]:
                          - generic [ref=e1552]:
                            - img [ref=e1553]
                            - generic [ref=e1555]: "28"
                        - button "Dislike" [ref=e1556]:
                          - img [ref=e1558]
                      - link "Start the conversation" [ref=e1561]:
                        - /url: https://www.msn.com/en-in/food-and-drink/general/how-to-open-a-coconut-without-a-hammer-5-easy-methods-to-crack-the-shell-at-home/ar-AA2ahxNG#comments
                        - button "Start the conversation" [ref=e1562]:
                          - img [ref=e1563]
                - generic [ref=e1565]:
                  - button "Hide this story" [ref=e1566]:
                    - img [ref=e1567]
                    - text: Hide this story
                  - button "See more" [ref=e1568]:
                    - img [ref=e1569]
            - article "Madhoo Shah offers Rs 500 at Lalbaugcha Raja, viral video shows man hiding note" [ref=e1570] [cursor=pointer]:
              - generic [ref=e1572]:
                - img [ref=e1573]
                - generic [ref=e1574]:
                  - generic [ref=e1575]:
                    - generic [ref=e1576]:
                      - generic [ref=e1577]:
                        - img [ref=e1578]
                        - generic [ref=e1579]: India Today
                      - generic [ref=e1580]: ·
                      - generic [ref=e1581]: 2d
                    - link "Madhoo Shah offers Rs 500 at Lalbaugcha Raja, viral video shows man hiding note, India Today" [ref=e1582]:
                      - /url: https://www.msn.com/en-in/entertainment/celebrities/madhoo-shah-offers-rs-500-at-lalbaugcha-raja-viral-video-shows-man-hiding-note/ar-AA2cOTZD
                      - text: Madhoo Shah offers Rs 500 at Lalbaugcha Raja, viral video shows man hiding note
                  - generic "Madhoo Shah offers Rs 500 at Lalbaugcha Raja, viral video shows man hiding note" [ref=e1585]:
                    - generic [ref=e1587]:
                      - generic [ref=e1588]:
                        - button "136 Likes" [ref=e1589]:
                          - generic [ref=e1590]:
                            - img [ref=e1591]
                            - generic [ref=e1593]: "136"
                        - button "Dislike" [ref=e1594]:
                          - img [ref=e1596]
                      - link "View comments 3 Comment" [ref=e1599]:
                        - /url: https://www.msn.com/en-in/entertainment/celebrities/madhoo-shah-offers-rs-500-at-lalbaugcha-raja-viral-video-shows-man-hiding-note/ar-AA2cOTZD#comments
                        - button "View comments 3 Comment" [ref=e1600]:
                          - img [ref=e1601]
                        - generic [ref=e1603]: "3"
                - generic [ref=e1604]:
                  - button "Hide this story" [ref=e1605]:
                    - img [ref=e1606]
                    - text: Hide this story
                  - button "See more" [ref=e1607]:
                    - img [ref=e1608]
            - article "Want Korean glass skin? These 5 daily habits make all the difference" [ref=e1609] [cursor=pointer]:
              - generic [ref=e1611]:
                - img [ref=e1612]
                - generic [ref=e1613]:
                  - generic [ref=e1614]:
                    - generic [ref=e1616]:
                      - img [ref=e1617]
                      - generic [ref=e1618]: The Times of India
                    - link "Want Korean glass skin? These 5 daily habits make all the difference, The Times of India" [ref=e1619]:
                      - /url: https://www.msn.com/en-in/lifestyle/other/want-korean-glass-skin-these-5-daily-habits-make-all-the-difference/ss-AA29rVdI
                      - text: Want Korean glass skin? These 5 daily habits make all the difference
                  - generic "Want Korean glass skin? These 5 daily habits make all the difference" [ref=e1622]:
                    - generic [ref=e1624]:
                      - generic [ref=e1625]:
                        - button "2,443 Likes" [ref=e1626]:
                          - generic [ref=e1627]:
                            - img [ref=e1628]
                            - generic [ref=e1630]: 2k
                        - button "Dislike" [ref=e1631]:
                          - img [ref=e1633]
                      - link "View comments 3 Comment" [ref=e1636]:
                        - /url: https://www.msn.com/en-in/lifestyle/other/want-korean-glass-skin-these-5-daily-habits-make-all-the-difference/ss-AA29rVdI#comments
                        - button "View comments 3 Comment" [ref=e1637]:
                          - img [ref=e1638]
                        - generic [ref=e1640]: "3"
                - generic [ref=e1641]:
                  - button "Hide this story" [ref=e1642]:
                    - img [ref=e1643]
                    - text: Hide this story
                  - button "See more" [ref=e1644]:
                    - img [ref=e1645]
    - contentinfo [ref=e1648]:
      - generic "Feedback" [ref=e1650] [cursor=pointer]:
        - button "Feedback" [ref=e1651]:
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