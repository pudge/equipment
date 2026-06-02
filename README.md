# 🎸 Pudge’s Music Gear 🤘

## Description

This is an app I have been writing for years, so I always know what music equipment I have. I know what strings I use with which guitars, what year my Martin was made, what size my kick drum is, and so on. Pictures of everything, and all the manuals I could need.

It’s pretty dope, tbh.

See it in action at [https://gear.pudge.net/](https://gear.pudge.net/).

## Features

- See all your gear wherever you are
    - Make, model, company
    - Web links to company and model
    - Year purchased
    - Rows expand to show any other random detail/specs you want
    - Link to Reverb to see how much your gear is worth
- Filter and sort items by category, type, make, and year
    - Also filter by keyword search
    - Clear all filters by clicking the little x
- Tap the small image to show the large image
    - Swipe through all your gear images when you are bored
    - Images are automatically resized to fit the space
- On mobile, if you “Add to Home Screen”, it will cache everything on launch, so when you are in that basement club with poor reception, you can still read your amplifier manual
- Show extra pictures at the top
    - I have pictures of my studio and pedalboards
- Image maps
    - Add custom `area`/`map` tags (with same name as your studio/pedalboard/extra pictures) to make clickable regions that go straight to that item in the equipment table
- Works on any web server, or locally

## Usage

1. Run `./vendor.plx`
1. Make changes
    1. Update `index.html` and `style.css`
    1. Update `data.js`
    1. Add files to `images/` and `manuals/`
1. Run `./md5s.plx`
1. View web page in your browser!

The first step — only needed once — is to run `./vendor.plx` to download the vendored files. This is necessary for the cached mobile app.

Then update `index.html`. Update the titles and links and main site images and (if you want to, but be careful) `style.css`.

Then you just need to put your own gear in the data. You only need to change `data.js`. The shape of the data is pretty self-explanatory, and also somewhat detailed in `conf.js`.

> The one gotcha is that the `model` of each item of gear is changed to all-lowercase, and then stripped of all non-letter/number characters, and that becomes the ID for the data. You use that key for the directories. So `HD-28E Retro` becomes `hd28eretro`. A way around this is to add an `id` to the entry, so instead of your ID being derived from the model name, it can be anything you want, like `hd28`. 

Then, put your images in `images/hd28/` (`main.webp` for the main big image, `sm.webp` for the small one (which I size to 200px in its largest dimension), and any others you create will be shown as options when you click on the small image). And any manuals go in `manuals/hd28/`.

Whenever you are done making changes, before viewing in the browser, always run `./md5s.plx`. This updates a file that is used to assist with caching, so whenever you reload the page, any changes will be picked up immediately (especially important on the mobile app!).

That’s it! Have fun. Hit me up if you use it, I’d like to know.

### Custom images, and popup

In the top left I have a list of series of images: pictures of studios, and of pedalboards. Pretty neat. This is all configured directly in `index.html`. And each image can have an image map associated with it, so you can click on a part of the image, and it will select the thing you clicked on in the table! Have fun with that.

## Author

[Pudge](https://pudge.net/)
