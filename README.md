# Becode-Groovebox
## about my last code.. I'm sorry for what I wrote when I was hungry!
![image](https://user-images.githubusercontent.com/77209365/182308272-ac8c48cf-44c5-4706-b2dc-e97eda751f95.png)
So I figured out why it was so difficult to plug in something as simple as a volume control to one of the channels.. it's probably possible to do it inside the giant godObject keys (tone players) but I can't seem to find it in the documentation how to exactly do it. so I separated all the drum channels and added them back into this god object so I don't lose functionality. Soon this will be working, code is ready to start working on decent effects because the distortion that my computer made sounded a little like my old nintendo would sound like when emulating distortion.. 

## Some updates.. 
Got the knobs to work but not completely the way i would like. I created an eventlistener for some of the knobs like volume and distortion but distortion only accepts values between -1 and 1 and my knob is trying to send a value between 0 and 100. fix for this is easy, just divide the value by 100 and if it's lower than 50 make the value negative between -1 and 0 (50 increments) otherwise positive 50 increments.. should be easy fix.
Another thing with this eventlistener is that it is looking for a 'change' event. it should also watch out for click and mouse-scrollwheel events because that would simply be awesome.. again not such a big deal to fix this. I would create a function that just reads the value of the knob and that will be triggered by three seperate eventlisteners (or something)

![image](https://user-images.githubusercontent.com/77209365/179683868-192c1c7d-b1bd-4bb9-9c65-76d7bcd0d0b6.png)
this is what it currently looks like.

## My Todo List for this project:

1. I want to make the sections (drums and synth/sampler/arpegiator) smooth slide on my screen with a parrallax effect
2. the buttons are there but need to be sorted out. 
3. i need to compartimentalise my code more.. Thanks to Yasser I now see the light! it came to me in a dream that I can't continue to punish myself like this with the endless scrolling. if I'm working on effects i should only see code for the effects, same for drums, chords, mastering etc.. 
4. make the BPM adjustable by adding a nicely styled inputbox (I will keep these to the absolute minimum)

dank farrik you markdown!
[x] get some of the 808 samples in here
[x] a loop is 16 notes long
[x] color code the buttons
[x] add a filter section. (level tone and decay) not working though yet
[x] i will need to get my mouse scrollwheel in this entire interface as a way of controlling the effects knobs in a way that a text inputbox or a slider never could


the device shall from now until eternity be named the ***becode-groovebox***


# Quickstart

```
npm install tone@next

npm install
npm start
```

Open browser at: http://127.0.0.1:8080/

