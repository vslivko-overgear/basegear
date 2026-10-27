# basegear

[dalwoo-ru/base-ui](https://github.com/dalwoo-ru/base-ui) rebuilt as part of shadcn/ui, in Overgear colors.
There is no separate baseui package and no theme bridge any more: baseui is a shadcn **style**, a **theme** and a set of
**components** in the shadcn registry, written in TypeScript/TSX + Tailwind like every other shadcn component.

## What baseui is here

| Part | Where | What it is |
|---|---|---|
| Style `baseui` | `apps/v4/registry/styles/style-baseui.css` | The baseui look for every `cn-*` class: filled controls without outlines, 32/40/48/56px heights, 12px radius, solid selected states, shadowed surfaces, dialogs as bottom sheets on small screens. Builds as `base-baseui`, `radix-baseui`, `aria-baseui`. |
| Theme `baseui` | `apps/v4/registry/themes.ts` | Overgear colors on the shadcn variables (`--primary` `#564fff`, navy neutrals, Overgear red/orange/green), light and dark. |
| Preset `baseui` | `packages/shadcn/src/preset/defaults.ts` | Style + theme + Lucide + Inter. Code: `b7qMHwHqa`. |
| Components | `apps/v4/registry/bases/{base,radix,aria}/ui/` | baseui components shadcn did not have: `segmented-control`, `rating`, `status`, `banner`, `chip`, `number-input`, `navbar`, `bottom-bar`, `layout`, `link`. Docs in `apps/v4/content/docs/components/<base>/`. |
| Blocks | `apps/v4/registry/bases/<base>/blocks/` | `messenger-01` and `product-01` (the Overgear product page), built from the registry components. |

## Run

```sh
pnpm install
pnpm --filter=v4 registry:build --style all   # once: generates styles/<base>-<style>/ui
pnpm --filter=v4 dev                          # http://localhost:4000
```

- Component docs: `/docs/components/base/<name>`.
- Any example or block in the baseui style and Overgear theme: `/preview/base/<name>?preset=b7qMHwHqa`.
- `/create?preset=b7qMHwHqa` opens the design system builder with the baseui preset.

## Font

shadcn's font registry only takes Google Fonts, so the preset uses Inter. Overgear's TT Interphases Pro is a commercial font;
in an app, load it with `next/font/local` and point `--font-sans` at it.

## Adding a component the shadcn way

1. `apps/v4/registry/bases/<base>/ui/<name>.tsx` for base, radix and aria: `data-slot` on every part, `cn-<name>-*` classes, `cva` variants.
2. An entry in `apps/v4/registry/bases/<base>/ui/_registry.ts`.
3. A `cn-<name>` section in every `apps/v4/registry/styles/style-*.css`.
4. Demos in `apps/v4/examples/<base>/`, a preview card in `registry/bases/<base>/examples/`, docs in `content/docs/components/<base>/` (+ `meta.json`).
5. `pnpm --filter=v4 registry:build`.

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
