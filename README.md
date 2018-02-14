# js-tachyons

A hand-tweaked build of the popular Functional CSS library
[Tachyons](https://github.com/tachyons-css/tachyons). Built in order to
facilitate code reuse between front-end projects. Intended for personal use, but
feel free to
[fork](https://github.com/jessestuart/js-tachyons#fork-destination-box) and
adapt to your own needs.

### Usage

To customize, tweak the files in `src/config/` to your liking, then run:

```bash
# Install dependencies.
$ yarn -s
# Output generated CSS to `dist`.
$ yarn generate
```

You could then publish to NPM or a private registry (after editing
`package.json` to specify your own package name) with `yarn publish`.

Alternatively, if you want to avoid having to re-publish every time you make a
change while developing locally, you can make use of `yarn`'s `link`
functionality:

```bash
# In the root of your custom `tachyons` package:
cd ~/my-custom-tachyons
yarn link
# In the root of your project that depends on said package:
cd ~/my-web-app
yarn link my-custom-tachyons
```

This will create a symbolic link in your app's `node_modules` folder that
resolves to the local installation of your custom Tachyons package. Be sure to
run `yarn unlink my-custom-tachyons` when you're done testing.
