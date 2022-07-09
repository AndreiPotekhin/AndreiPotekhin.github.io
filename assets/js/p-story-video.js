let vids = document.querySelectorAll('.post-content video'), i;

for (i = 0; i < vids.length; ++i) {
    vids[i].autoplay = true;
    vids[i].loop = true;
    vids[i].muted = true;
}