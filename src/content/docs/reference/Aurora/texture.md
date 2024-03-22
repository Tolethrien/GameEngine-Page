---
title: "Texture"
description: some
sidebar:
  order: 35
---

**AuroraTexure jest statycznym modułem Aurory odpowiedzialnym za tworzenie, przetwarzanie i przechowywane tekstur i ich metadanych**

<div style="text-align: right">
  <b>Git:</b> 
  <a
  href="https://github.com/Tolethrien/GameEngine-core/blob/dev/src/core/aurora/auroraTexture.ts" 
  style="cursor:pointer">AuroraTexure.ts</a>
</div>

## Textures&Samplers

tworzenie teksturami i samplerami za pomoca AuroraTexture.

<br />

### CreateSampler

- createSampler tworzy oraz dodaje do [SamplerStore](#store) nowy textureSampler z opcjonalnymi parametrami GPUSamperDescriptora.

```ts title="AuroraTexture.ts"
export default class AuroraTexture {
  //...
  static createSampler(label: string, desc?: GPUSamplerDescriptor): sampler;
  //...
}
```

#### Props:

- `label` - nazwa Samplera, używana do wyciągania Samplera ze Storu oraz jako nazwa w debuggerze WebGPU.
- `desc` - (optional) Określa parametry Samplowania tekstur. More ->[GPUSamperDescriptor](https://gpuweb.github.io/types/interfaces/GPUSamplerDescriptor.html).

<hr />

### CreateTexture

`async`

- createTexture tworzy asynchronicznie oraz dodaje do [TextureStore](#store) pojedynczą teksturę GPU z podanego obrazu.

```ts title="AuroraTexture.ts"
export default class AuroraTexture {
  //...
  static async createTexture(props: Props): GPUAuroraTexture;
  //...
}
```

#### Props:

- `format` - farmat tekstury jaki ma być użyty. (More->[GPUTextureFormat](https://gpuweb.github.io/types/types/GPUTextureFormat.html))
- `label` - nazwa Tekstury, używana do wyciągania Tekstury ze Storu oraz jako nazwa w debuggerze WebGPU.
- `url` - url do obrazu z ktorego ma powstać tekstura

<hr />

### CreateTextureEmpty

- createTextureEmpty tworzy oraz dodaje do [TextureStore](#store) pojedynczą pustą teksturę GPU.

```ts title="AuroraTexture.ts"
export default class AuroraTexture {
  //...
  static createTextureEmpty(props: Props): GPUAuroraTexture;
  //...
}
```

#### Props:

- `format` - farmat tekstury jaki ma być użyty. (More->[GPUTextureFormat](https://gpuweb.github.io/types/types/GPUTextureFormat.html))
- `label` - nazwa Tekstury, używana do wyciągania Tekstury ze Storu oraz jako nazwa w debuggerze WebGPU.
- `size` - wielkość pustej tekstury w pixelach.

<hr />

### CreateTextureFromBitmap

- createTextureFromBitmap tworzy oraz dodaje do [TextureStore](#store) pojedynczą teksturę GPU wygenerowaną z bitmapy.

```ts title="AuroraTexture.ts"
export default class AuroraTexture {
  //...
  static createTextureFromBitmap(props: Props): GPUAuroraTexture;
  //...
}
```

#### Props:

- `bitmap` - Bitmapa z ktorej pobrany ma zostać obraz do tekstury.
- `format` - farmat tekstury jaki ma być użyty. (More->[GPUTextureFormat](https://gpuweb.github.io/types/types/GPUTextureFormat.html))
- `label` - nazwa Tekstury, używana do wyciągania Tekstury ze Storu oraz jako nazwa w debuggerze WebGPU.

<hr />

### CreateTextureArray

`async`

- createTextureArray tworzy asynchronicznie oraz dodaje do [TextureStore](#store) listę tekstur GPU wygenerowaną z obrazów.

```ts title="AuroraTexture.ts"
export default class AuroraTexture {
  //...
  static async createTextureArray(props: Props): GPUAuroraTexture;
  //...
}
```

#### Props:

- `format` - farmat tekstury jaki ma być użyty. (More->[GPUTextureFormat](https://gpuweb.github.io/types/types/GPUTextureFormat.html))
- `label` - nazwa Tekstury, używana do wyciągania Tekstury ze Storu oraz jako nazwa w debuggerze WebGPU.
- `textures` - lista obiektów zawierająca nazwy oraz url tekstur. Nazwa używana jest do wyciągania mety konkretnego obrazu w liscie tekstur.

<hr />

### CreateTextureArrayFromBitmap

- createTextureArrayFromBitmap tworzy oraz dodaje do [TextureStore](#store) listę tekstur GPU wygenerowaną z bitmap.

```ts title="AuroraTexture.ts"
export default class AuroraTexture {
  //...
  public static createTextureArrayFromBitmap(props: Props): GPUAuroraTexture;
  //...
}
```

#### Props:

- `format` - farmat tekstury jaki ma być użyty. (More->[GPUTextureFormat](https://gpuweb.github.io/types/types/GPUTextureFormat.html))
- `label` - nazwa Tekstury, używana do wyciągania Tekstury ze Storu oraz jako nazwa w debuggerze WebGPU.
- `bitmaps` - lista obiektów zawierająca nazwy oraz bitmapy. Nazwa używana jest do wyciągania mety konkretnego obrazu w liscie tekstur.

<hr />

### CreateTextureArrayEmpty

- createTextureArrayEmpty tworzy oraz dodaje do [TextureStore](#store) listę pustych tekstur GPU.

```ts title="AuroraTexture.ts"
export default class AuroraTexture {
  //...
  public static createTextureArrayFromBitmap(props: Props): GPUAuroraTexture;
  //...
}
```

#### Props:

- `format` - farmat tekstury jaki ma być użyty. (More->[GPUTextureFormat](https://gpuweb.github.io/types/types/GPUTextureFormat.html))
- `label` - nazwa Tekstury, używana do wyciągania Tekstury ze Storu oraz jako nazwa w debuggerze WebGPU.
- `textureSize` - wielkość wszystkich pustych tekstur w pixelach.
- `length` - długość listy tekstur.

<hr />

### FLipY

`default: false`

AuroraTexture zawiera publicznie dostepną zmienną `flipY` ktora odraca oś Y tekstur(tworzy odbicie lustrzane) kiedy ustawiona na true.

```ts
AuroraTexture.flipY = false;
```

## Store

### useStore

`default: false`

AuroraTexture zawiera publicznie dostepną zmienną `useStore` - kiedy ustawiona na false, Tekstury i samplery przestaną być dodawnae do Storu.

```ts
AuroraTexture.useStore = false;
```

### GetTexture

GetTexure zwraca daną teksture z TextureStore o ile takowa istnieje.

```ts
export default class AuroraTexture {
  //...
  static getTexture(label: string);
  //...
}
```

#### Props:

- `label` - nazwa użyta podczas tworzenia tekstury

<hr />

### GetSampler

getSampler zwraca dany sampler z SamplerStore o ile takowy istnieje.

```ts
export default class AuroraTexture {
  //...
  static getSampler(label: string);
  //...
}
```

#### Props:

- `label` - nazwa użyta podczas tworzenia tekstury

<hr />

### RemoveTexture

removeTexture usuwa daną teksturę z TextureStore o ile takowa istnieje.

```ts
export default class AuroraTexture {
  //...
  static removeTexure(label: string);
  //...
}
```

#### Props:

- `label` - nazwa użyta podczas tworzenia tekstury

<hr />

### RemoveSampler

removeSampler usuwa dany sampler z SamplerStore o ile takowy istnieje.

```ts
export default class AuroraTexture {
  //...
  static removeSampler(label: string);
  //...
}
```

#### Props:

- `label` - nazwa użyta podczas tworzenia tekstury

<hr />
