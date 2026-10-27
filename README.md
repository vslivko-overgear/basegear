# basegear

[dalwoo-ru/base-ui](https://github.com/dalwoo-ru/base-ui) in Overgear colors and font. Everything else is base-ui as is:
token names, components, their logic, the docs site and the shadcn/ui monorepo.

What changed:

- `packages/baseui/tokens.css`: the light and dark color tokens take the Overgear palette (`@og/config`): navy neutrals
  `#050622 / #1e2242 / #293054`, brand purple `#564fff` with its hover and focus shades, Overgear red, orange, yellow, green,
  pink and cyan. `Background-Brand`, `Extensions-Background-InversePrimary` and `Extensions-Border-Selected` are the brand purple
  in both themes, so the selected chip, switch and segment look like Overgear's.
- Font: TT Interphases Pro (`packages/baseui/fonts/`), Overgear's font. It has Latin only, so Geist stays next to it for Cyrillic.
- The docs site opens in the dark theme (Overgear is dark-first); the Theme Settings defaults are the Overgear font and purple.
- `packages/baseui/shadcn-theme.css` and the `baseui` theme in `apps/v4/registry/themes.ts` carry the same colors and font for shadcn.

Run the design system docs: `cd packages/baseui && python3 -m http.server 8000`.

---

# base-ui

A mix of [shadcn/ui](https://ui.shadcn.com) (v4.22.1 monorepo: registry, CLI, docs app, Base UI and Radix bases) and the **baseui** design system.

- `apps/`, `packages/shadcn`, `packages/registry`, ... : shadcn/ui, unchanged except for the theme below.
- `packages/baseui/`: the baseui design system (tokens, components on Base UI, docs site, examples). Run it with `python3 -m http.server` from that folder; see its README.
- `packages/baseui/shadcn-theme.css`: maps shadcn semantic variables (`--background`, `--primary`, `--radius`, ...) onto baseui tokens, so shadcn components render with baseui colors, radius and Geist font.
- `apps/v4/registry/themes.ts`: a `baseui` theme (light and dark) with the same values, available as a shadcn registry theme.

Use baseui tokens with shadcn components:

```css
@import "@workspace/baseui/tokens.css";
@import "@workspace/baseui/shadcn-theme.css";
```

---

# shadcn/ui

A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code. **Use this to build your own component library**.

![hero](apps/v4/public/opengraph-image.png)

## Documentation

Visit https://ui.shadcn.com/docs to view the documentation.

## Contributing

Please read the [contributing guide](/CONTRIBUTING.md).

## License

Licensed under the [MIT license](./LICENSE.md).
