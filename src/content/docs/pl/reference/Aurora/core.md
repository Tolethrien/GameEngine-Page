---
title: "AuroraCore"
sidebar:
  order: 31
---

**AuroraCore jest statycznym głównym modułem Aurory odpowiedzialnym za inicjowanie całego silnika Aurory**

<div style="text-align: right"> <b>Git:</b> <a
href="https://github.com/Tolethrien/GameEngine-core/blob/dev/src/core/aurora/auroraCore.ts" 
 style="cursor:pointer">AuroraCore.ts</a> </div>

### Inicjalizacja

`async`

- Initialize tworzy instancję Aurory łącząc się z podanym jej Canvasem.

```ts title="AuroraCore.ts"
export default class AuroraCore {
  //...
  static async initialize(canvas: HTMLCanvasElement, options?: CoreOptions);
  //...
}
```

#### Props:

- `canvas` - Element Canvasu do któego ma podpiąć się Aurora w celu inicjacji.
- `options` - (optional) Dodatkowe ustawienia Aurory.
  - `alphaChannelOnCanvas` - (optional) Tryb kanału Alphy
    - value: `"opaque" | "premultiplied"`
  - `powerPreference` - (optional) Tryb wydajności Aurory. Tryb nie jest gwarantowany!
    - value: `"high-performance" | "low-power"`
  - `useTextureStore` - (optional) Czy AuroraTexture powinna zapisywac tekstury i Samplery w swoim Storze;

<hr/>

### ResizeCanvas

- resizeCanvas zmienia wielkość canvasu do któego została podpięta Aurora.

```ts title="AuroraCore.ts"
export default class AuroraCore {
  //...
  static resizeCanvas(size: Size2D);
  //...
}
```

#### Props:

- `size` - nowy width i height dla canvasu.

<hr/>
