This is a slide show with a main image and interactive thumbnails.

All images on the page are responsive and will resize proportionately to the viewport.

The thumbnails are nested in a wrapper alongside its sibling, the main image. This is done to
keep the total width of all the thumbnails the same as the width of a horizontal main image,
and prevents the thumbnails and main-image from overlapping as the viewport is resized.

The javascript takes the event target's src attribute and assigns it to the main image's 
source attribute each time a thumbnail is clicked.  A fade-in effect is also triggered
when a new image is loaded.

