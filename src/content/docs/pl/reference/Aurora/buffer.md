---
title: "Buffer"
sidebar:
  order: 33
---

**AuroraBuffer jest statycznym modułem Aurory odpowiedzialnym za tworzenie, przetwarzanie i przechowywane bufferów**

<div style="text-align: right"> <b>Git:</b> <a
href="https://github.com/Tolethrien/GameEngine-core/blob/dev/src/core/aurora/auroraBuffer.ts" 
 style="cursor:pointer">AuroraBuffer.ts</a> </div>

### CreateDynamicBuffer

- createDynamicBuffer tworzy nowy dynamiczny buffer z podanych parametrów.

```ts title="AuroraBuffer.ts"
export default class AuroraBuffer {
  //...
  static createDynamicBuffer(props: DynamicBufferOptions): GPUBuffer;
  //...
}
```

#### Props:

- `bufferType` - rodzaj tworzonego buffera.

  - value: `"vertex" | "index" | "storage" | "uniform"`.

- `typedArr` - "lista typowana" z danymi do zapisu w bufforze.

  - value:
    `Float32Array | Float64Array | Uint16Array | Uint32Array | Uint8Array`

- `label` - nazwa Buffera.
- `storeInMap` - (optional) czy buffer ma zostać zapisany w liście Bufferów, by można było go wyciągać globalnie za pomocą funckji [getBuffer](#getbuffer)

<hr/>

### CreateMapedBuffer

- createMapedBuffer tworzy nowy zmapowany buffer z podanych parametrów.

```ts title="AuroraBuffer.ts"
export default class AuroraBuffer {
  //...
  static createMapedBuffer(props: MapedBufferOptions): GPUBuffer;
  //...
}
```

#### Props:

- `bufferType` - rodzaj tworzonego buffera.

  - value: `"vertex" | "index" | "storage" | "uniform"`.

- `dataType` - "lista typowana" z danymi do zapisu w bufforze.

  - value:
    `"Float32Array" | "Float64Array" | "Uint16Array" | "Uint32Array" | "Uint8Array"`

- `data` - lista z danymi do zapisu w bufferze
- `label` - nazwa Buffera.
- `storeInMap` - (optional) czy buffer ma zostać zapisany w liście Bufferów, by można było go wyciągać globalnie za pomocą funckji [getBuffer](#getbuffer)

<hr/>

### GetBuffer

- getBuffer zwraca buffer o podanej nazwie o ile zostal on wczesniej zapisany za pomocą `storeInMap`.

```ts title="AuroraBuffer.ts"
export default class AuroraBuffer {
  //...
  static getBuffer(bufferName: string): GPUBuffer;
  //...
}
```

#### Props:

- `bufferName` - nazwa Buffera do zwrócenia.

<hr/>
