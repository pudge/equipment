# Pudge’s Gear 🤘

## Description

This is an app I have been writing for years, so I always know what music equipment I have. I know what strings I use with which guitars, what year my Martin was made, what size my kick drum is, and so on. Pictures of everything, and all the manuals I could need.

It’s pretty dope, tbh.

Also, on mobile, you can “Add to Home Screen” and it will not only save as an app on your home screen, but when you launch it, it will cache everything into the app, so when you are in that basement club with poor reception, you can still see everything.

## Usage

You only need to change `data.js`. The shape of the data is pretty self-explanatory, and also somewhat detailed in `conf.js`.

> The one gotcha is that the `model` of each item of gear is changed to all-lowercase, and then stripped of all non-letter/number characters, and that becomes the ID for the data. You use that key for the directories. So `HD-28E Retro` becomes `hd28eretro`. A way around this is to add an `id` to the entry, so instead of your ID being derived from the model name, it can be anything you want, like `hd28`. 

Then you put your images in `images/hd28/` (`main.webp` for the main big image, `sm.webp` for the small one, and any others will be shown when you click on the small image).

And any manuals go in `manuals/hd28/`.

That’s it! Have fun. Hit me up if you use it, I’d like to know.
