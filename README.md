
next.js based template for making a sigma plugin

using npm

## Dev Server
`npm run dev`

## Build
`npm run build`

## Make live

After build...

Checkout dotmatics/sigma-plugins

Create a branch that corresponds to the first part of the basepath in next.config.mjs

Take the contents of out and put it in dist/{second part of basepath in next.config.mjs}

