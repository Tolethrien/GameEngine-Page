---
title: "Shader"
sidebar:
  order: 34
---

**AuroraShader jest statycznym modułem Aurory odpowiedzialnym za tworzenie, przetwarzanie i przechowywane shaderów**

<div style="text-align: right">
  <b>Git:</b>
  <a href="https://github.com/Tolethrien/GameEngine-core/blob/dev/src/core/aurora/auroraShader.ts" style="cursor:pointer">
    AuroraShader.ts
  </a>
</div>

### AddShader

- addShader tworzy nowy shader za pomocą jezyka wgsl.

```ts title="AuroraShader.ts"
export default class AuroraShader {
  //...
  static addShader(shaderName: string, shaderCode: string);
  //...
}
```

#### Props:

- `shaderName` - nazwa Shadera, używana jako `key` w funkcji `getShader`.
- `shaderCode` - kod WGSL jako `string literal` lub import z pliku WGSL z suffixem `?raw`

<hr />

### GetShader

- getShader zwraca gotowy shader jako [GPUShaderModule](https://gpuweb.github.io/types/interfaces/GPUShaderModule.html).

```ts title="AuroraShader.ts"
export default class AuroraShader {
  //...
  static getShader(shaderName: string): GPUShaderModule;
  //...
}
```

#### Props:

- `shaderName` - nazwa Shadera do wyciągnięcia.

<hr />
