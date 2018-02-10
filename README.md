### js-tachyons

A hand-tweaked build of the popular Functional CSS library [Tachyons][tachyons].
Built in order to facilitate code reuse between front-end projects. Intended for
personal use, but feel free to [fork][fork-gh] and adapt to your own needs.

### Usage

To customize, edit `src/config/tachyons-definition.js` to your liking, then run:

```bash
$ yarn install -s
$ yarn run generate
```

You could then publish to NPM (or a private registry) after editing `package.json` (i.e., with `yarn publish`).

[fork-gh][https://github.com/jessestuart/js-tachyons#fork-destination-box]
[tachyons][https://github.com/tachyons-css/tachyons]
