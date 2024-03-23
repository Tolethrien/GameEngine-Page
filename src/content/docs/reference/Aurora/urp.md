---
title: "Universal Render Pipeline"
sidebar:
  order: 37
---

**Batcher jest statycznym opcjonalnym modułem Aurory mającym na celu ułatwienie pracy z rendererem, jest on kompletnym zestawem ustawień i pipelinów do szybkiego i wygodnego "rysowania" na ekranie**

<div style="text-align: right">
  <b>Git:</b>
  <a href="https://github.com/Tolethrien/GameEngine-core/blob/dev/src/core/aurora/urp/batcher.ts" style="cursor:pointer">
    batcher.ts
  </a>
</div>

## Inicjalizacja

`async`

- createBatcher tworzy nową instancję batchera, użyty powinien być w `preloadzie` jako że tworzy zestaw tekstur oraz fontów.

```ts title="Batcher.ts"
export default class Batcher {
  //...
  static async createBatcher(props?: Partial<BatcherOptions>);
  //...
}
```

#### Props:

- `backgroundColor` - Ustala początkowy kolor sceny.
- `maxQuadPerSceen` - Określa maksymalną liczbe quadów obiektów gry dla sceny.
- `maxLightsPerSceen` - Określa maksymalną liczbe świateł dozwolonych w scenie.
- `maxGuiPerSceen` - określa maksymalną ilość elementów GUI dla sceny.
- `customCamera` - Boolean określający czy zostanie użyta customowa camera czy użyć wbudowanej w batcher.
- `bloom` - określa czy Batcher ma kalkulować i renderować bloom, oraz z jaką siłą.
- `lighting` - określa czy batcher ma renderować światło, zarówno punktowe jak i globalne.
- `loadTextures` - lista tekstur do wczytania w batcherze.
- `loadFonts` - lista fontów do wczytania w batcherze.

<hr />

## Controls

<br />

### StartBatch

- startBatch rozpoczyna nową scenę. Całe rysowanie musi odbywać się za tą funkcją i kończyć przed `endBatch`

```ts title="batcher.ts"
export default class Batcher {
  //...
  static startBatch(); //...
}
```

#### Props:

none

<hr />

### EndBatch

- endBatch finalizuje nową scenę. Całe rysowanie musi zakończyć się przed tą funkcją.

```ts title="batcher.ts"
export default class Batcher {
  //...
  static endBatch(); //...
}
```

#### Props:

none

<hr />

### SetScreenShader

- setScreenShader ustala efekt Post-processingu.

```ts title="batcher.ts"
export default class Batcher {
  //...
  static setScreenShader(effect: ScreenEffects, intesity?: number);
}
```

#### Props:

- `effect` - efekt to nadania na scene.
  - value: `"none" | "grayscale" | "sepia"| "invert" | "chromaticAbber" | "vignette"`
- `intesity` - instensywnośc efektu w skali 0-1.

  <hr />

### SetGlobalColorCorrection

- setGlobalColorCorrection ustala globalną korekcję koloru dla ekranu.

```ts title="batcher.ts"
export default class Batcher {
  //...
  static setGlobalColorCorrection(color: RGB);
  //
}
```

#### Props:

- `color` - kolor w formacie RGB.

<hr />

### SetBloom

- setBloom pozwala dynamicznie włączać i wyłączać bloom w trakcie trwania sceny w przeciwieństwie do opcji batchera które pozwalają to tylko ustalić na początku.

```ts title="batcher.ts"
export default class Batcher {
  //...
  static setBloom(active: boolean, strength?: number);
  //...
}
```

#### Props:

- `active` - czy bloom ma byc aktywny.
- `strength` - (optional) siła bloomu, gdy nie podana ostatnia znana wartość zostanie zastosowana.

<hr />

### SetLights

- setLights pozwala dynamicznie włączać i wyłączać oświetlenie w trakcie trwania sceny w przeciwieństwie do opcji batchera które pozwalają to tylko ustalić na początku.

```ts title="batcher.ts"
export default class Batcher {
  //...
  static setLights(active: boolean);
  //...
}
```

#### Props:

- `active` - czy oświetlenie ma byc aktywny.

<hr />

## Camera

<br />
  
### SetCameraBuffer

- setCameraBuffer oblicza pozycję customowej kamery. Podawane na początku kazdej klatki.

```ts title="batcher.ts"
export default class Batcher {
  //...
  static setCameraBuffer(matrix: Float32Array);
  //...
}
```

#### Props:

- `matrix` - macierz 4x4 customowej camery.

<hr />

## Draw

<br />

### Quad

- Quad rysuje na scenie prostokątny obiekt czy to tekstura czy sam kolor. Działa na niego transform kamery.

```ts title="Draw.ts"
export default class Draw {
  //...
  static Quad(props: SpriteProps);
  //...
}
```

#### Props:

- `position` - Position2D quadu na ekranie.
- `size` - Size2D quadu.
- `textureToUse` - index tekstury w liscie tekstur do użycia. Jeśli sam kolor lub tekstura: `0`,
- `crop` - crop tekstury.
  - `x,y` - górny lewy róg cropu
  - `w,h` - punkt na teksturze gdzie crop ma sie zakończyć. NIE długość ściany cropu!.
- `tint` - zabarwienie quadu/tekstury.
- `alpha` - alpha quadu/tekstury.
- `isTexture` - czy obiekt będzie teksturą czy kolorem.
  - `0` - kolor
  - `1` - tekstura
- `bloom` - jeśli ustawione na 1 na quad będzie działąć bloom.
<hr />

### Light

- Light dodaje do sceny `Point Light` w formie tekstury.

```ts title="Draw.ts"
export default class Draw {
  //...
  static Light(props: LightProps);
  //...
}
```

#### Props:

- `position` - Position2D światła na ekranie.
- `size` - Size2D światła.
- `type` - rodzaj tekstury do użycia dla światła.
  - value: `"radial" | "radialHalf" | "spotlight" | "wide" | "star"`
- `tint` - kolor światła.
- `intensity` - intensywność światła.

<hr />

### Text

- Text rysuje tekst w scenie. Działa na niego transform kamery.

```ts title="Draw.ts"
export default class Draw {
  //...
  static Text(props: TextProps);
  //...
}
```

#### Props:

- `position` - Position2D górnego lewego punktu tekstu.
- `color` - kolor fontu.
- `alpha` - alpha fontu.
- `bloom` - jeśli ustawione na 1 na font będzie działąć bloom.
- `text` - string tekstu do wyświetlenia.
- `fontSize` - wielkość fontu.
- `fintFace` - nazwa fontu do użycia.

<hr />

### GUI

- GUI rysuje na scenie prostokątny obiekt czy to tekstura czy sam kolor. Nie działa na niego transform kamery.

```ts title="Draw.ts"
export default class Draw {
  //...
  static GUI(props: GUIProps);
  //...
}
```

#### Props:

- `position` - Position2D quadu na ekranie.
- `size` - Size2D quadu.
- `textureToUse` - index tekstury w liscie tekstur do użycia. Jeśli sam kolor lub tekstura: `0`,
- `crop` - crop tekstury.
  - `x,y` - górny lewy róg cropu
  - `w,h` - punkt na teksturze gdzie crop ma sie zakończyć. NIE długość ściany cropu!.
- `tint` - zabarwienie quadu/tekstury.
- `alpha` - alpha quadu/tekstury.
- `isTexture` - czy obiekt będzie teksturą czy kolorem.
  - `0` - kolor
  - `1` - tekstura
  <hr />

### GUIText

- GUIText rysuje tekst w scenie. Nie działa na niego transform kamery.

```ts title="Draw.ts"
export default class Draw {
  //...
  static GUIText(props: GUITextProps);
  //...
}
```

#### Props:

- `position` - Position2D górnego lewego punktu tekstu.
- `color` - kolor fontu.
- `alpha` - alpha fontu.
- `text` - string tekstu do wyświetlenia.
- `fontSize` - wielkość fontu.
- `fintFace` - nazwa fontu do użycia.

<hr />

## Getters

<br />

### getRenderData

```ts title="batcher.ts"
export default class Batcher {
  //...
  static get getRenderData
  //...
}
```

#### Return:

- `renderData` - obiekt zawierający informacje renderera dla obecnej sceny jak np. ilośc wyrysowanych qudów czy świateł.

<hr />

### GetStride

```ts title="batcher.ts"
export default class Batcher {
  //...
  static get getStride
  //...
}
```

#### Return:

- `stride` - obiekt zawierający informacje o wszystkich Stridach dla Bufferów w batcherze.

<hr />

### GetPipelinesInFrame

```ts title="batcher.ts"
export default class Batcher {
  //...
  static get getPipelinesInFrame
  //...
}
```

#### Return:

- `pipelinesInFrame` - obiekt zawierający informacje jakie pipeliny zostały użyte w obecnej scenie.

<hr />

### GetIndexBuffer

```ts title="batcher.ts"
export default class Batcher {
  //...
  static get getIndexBuffer
  //...
}
```

#### Return:

- `indexBuffer` - Buffer indeksowania do vertexów quadów.

<hr />
