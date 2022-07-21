# Becode-Groovebox

##Some updates.. 
Got the knobs to work but not completely the way i would like. I created an eventlistener for some of the knobs like volume and distortion but distortion only accepts values between -1 and 1 and my knob is trying to send a value between 0 and 100. fix for this is easy, just divide the value by 100 and if it's lower than 0.5 make the value negative otherwise remain positive.. 
Another thing with this eventlistener is that it is looking for a 'change' event. it should also watch out for click and mouse-scrollwheel events because that would simply be awesome.. again not such a big deal to fix this. I would create a function that just reads the value of the knob and that will be triggered by three seperate eventlisteners (or something)
![image](https://user-images.githubusercontent.com/77209365/179683868-192c1c7d-b1bd-4bb9-9c65-76d7bcd0d0b6.png)
this is what it currently looks like.
I want to make the sections (drums and synth/sampler/arpegiator) smooth slide on my screen with a parrallax effect..

## My Todo List for this project:

[x]  get all the 808 samples in here! this will turn this groovebox into a real boombox I promise!
[x]   a loop is going to be 16 notes long.
[x]   color code the buttons 
![image](https://user-images.githubusercontent.com/77209365/177043852-b45b909c-0362-48bf-89aa-e990af1bced5.png)
[x]   add a filter section. Nothing fancy just the basics
![image](https://user-images.githubusercontent.com/77209365/177045357-38f0fb15-952a-4ec4-b37e-ed87a14f1898.png)

[x]  Yes this will have to be done for each of the samples seperately so they all get these controls by default.

1. make the BPM adjustable by adding a nicely styled inputbox (I will keep these to the absolute minimum)
[x]   i will need to get my mouse scrollwheel in this entire interface as a way of controlling the effects knobs in a way that a text inputbox or a slider never could.. 
[x]   last but not the least I want to control the total volume with a nice and easy knob. an instrument selector is also more than a nice to have it's a requirement. the shuffle is nice to have. What this does on the old hardware is it plays with the end time of every other note making the sound more wobly.. it's a nice to have that's all
![image](https://user-images.githubusercontent.com/77209365/177045921-1568ee6d-80e6-4043-8830-37a28b792d0b.png)

1.  the buttons are there but need to be sorted out. 
1.  i need to compartimentalise my code more.. i'm sick of the endless scrolling. it's very distracting from the work that needs to be done!


As you can see i replaced the creator's name of the device and changed it to becode, because the only other ronald I know is Ronald McDonald!

# Quickstart

```
npm install tone@next

npm install
npm start
```

Open browser at: http://127.0.0.1:8080/

