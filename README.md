# Becode-Groovebox
> Synth keys are on the keyboard.. now I need to create a decent synth sound and map it to the respective keys
![image](https://user-images.githubusercontent.com/77209365/192688417-b958a245-fa21-4c0d-adbc-2c422a45c3c0.png)
> it already shows all the possible notes in minor chords.. just need to random pick 

![image](https://user-images.githubusercontent.com/77209365/192674976-e19b57fd-bb0c-4f15-8f55-e480f1b41f74.png)
> fixer compressor controls, chorus, phaser, reverb and player pitch

another update guys.. I color coded what is currently working, so i have a better picture of what needs to be done.. there's alot of knobs still not connected properly but that will start working soon i hope. So general volume is connected, distortion also but i have to configure it to be more saturated to give it alot more space inside the sound if that even makes sense. to me it certainly does. Tempo was working all along because there it's simply setting a property (the rest are not just simply numbers that you have to provide, most of the times it's signals like you can imagine an 'sine' oscillator to be a sinusoid type of signal if you remember these from math class). General pitch is working, each channels volume is also working individually now, plus the pitch shifter for each separate channel already allowing me to create some groovy sounds.. but it's a work in progress. Better 'git kraken then' is what my mentor would say to me now! Almost forgot! the individual mute channels are also working but I will have to refactor some of that code probably
![afbeelding](https://user-images.githubusercontent.com/77209365/191276319-343763a1-8791-45ac-99b3-d31232bac93d.png)

in case you haven't found my deployed version on github pages here's the link
https://dimibertolami.github.io/Becode-Groovebox/

##Old updates below this point.
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

