# Becode-Groovebox
you just wait and see
![image](https://user-images.githubusercontent.com/77209365/179683868-192c1c7d-b1bd-4bb9-9c65-76d7bcd0d0b6.png)

## Tone.js is a tricky beast as it turns out.

It can generate sound quite easily but then trying to pass a sample through there was just not working so I asked for some help which turned out to be great because it showed me all the things I didn't do for my version to work. The code is with clear comments and let's hope I keep it that way. I keep forgetting that in a week I will have completely forgotten how I got this part to work so making changes to that code is alot harder.
From this base version I will start this project.

## My Todo List for this project:

1. get all the 808 samples in here! this will turn this groovebox into a real boombox I promise!
1. a loop is going to be 16 notes long.
1. color code the buttons 
![image](https://user-images.githubusercontent.com/77209365/177043852-b45b909c-0362-48bf-89aa-e990af1bced5.png)
1. add a filter section. Nothing fancy just the basics
![image](https://user-images.githubusercontent.com/77209365/177045357-38f0fb15-952a-4ec4-b37e-ed87a14f1898.png)

Yes this will have to be done for each of the samples seperately so they all get these controls by default.

1. make the BPM adjustable by adding a nicely styled inputbox (I will keep these to the absolute minimum)
1. i will need to get my mouse scrollwheel in this entire interface as a way of controlling the effects knobs in a way that a text inputbox or a slider never could.. 
1. last but not the least I want to control the total volume with a nice and easy knob. an instrument selector is also more than a nice to have it's a requirement. the shuffle is nice to have. What this does on the old hardware is it plays with the end time of every other note making the sound more wobly.. it's a nice to have that's all
![image](https://user-images.githubusercontent.com/77209365/177045921-1568ee6d-80e6-4043-8830-37a28b792d0b.png)


after this section is completed ideally I make it look something like this
![image](https://user-images.githubusercontent.com/77209365/177048063-5dcca5da-9340-427d-8b8f-654284a9f9df.png)

## Then and only then am I allowed to start working on the synth section because this will actually be the easier part. I Also want to do this section correctly because the thing that I'm recreating disearves this kind of attention to detail. 

1. the keys are going to be the same but the layout will be a little different
![image](https://user-images.githubusercontent.com/77209365/177046610-1d6577f8-9e4e-47ea-8776-fa53f0dad63c.png)


more like this.. 
as you can see there's only 8 of them. showing me where in the 16 note pattern the player is is a nice to have. (for that I need to have 16 of these buttons)
the letters you see above the buttons (they start at C which is the 'do' note if you remember your do-re-mi's from long time ago..)

the synth (or Bassline) will become boring real quick if you can't modulate the sound so i will  need to add a few controlls for this
![image](https://user-images.githubusercontent.com/77209365/177047104-0ba9d94e-a8e0-4a59-8a50-b3ff2b518e00.png)

the end result should resemble something like this:
![image](https://user-images.githubusercontent.com/77209365/177048370-38d24f1c-d63c-4e5c-ba86-9197497e056e.png)


As you can see i replaced the creator's name of the device and changed it to becode, because the only other ronald I know is Ronald McDonald!

# Quickstart

```
npm install tone@next

npm install
npm start
```

Open browser at: http://127.0.0.1:8080/

