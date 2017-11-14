Ops
===
A bit of a puzzle game.

Play Online
-----------
Play at https://nphyx.github.io/ops

Build & Play Locally
--------------------
Requires Python 3 and the http.server module to run in server mode. There's no particular
advantage to doing that at the moment.

```sh
# install dependencies
npm install

# update build
gulp

# run as a server
gulp local-server &
firefox http://localhost:8000 #or your browser of choice

# run as a webpage
firefox dist/index.html
```

Create Your Own Levels
----------------------
Modify out ops.levels.js. Figuring out how it works is half the fun! (but seriously, 
documentation is a thing that will happen someday).

License
=======
Dual licensed under Creative Commons BY-NC-SA 3.0 and GPL 3.0.
