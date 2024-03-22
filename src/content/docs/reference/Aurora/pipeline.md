---
title: "Pipeline"
sidebar:
  order: 32
---

**AuroraPipeline jest statycznym modułem Aurory odpowiedzialnym za tworzenie, przetwarzanie i przechowywane wszystkich niezbędnych do stworzenia GPUPipeline elementów**

<div style="text-align: right">
  <b>Git:</b>
  <a href="https://github.com/Tolethrien/GameEngine-core/blob/dev/src/core/aurora/auroraPipeline.ts" style="cursor:pointer">
    AuroraPipeline.ts
  </a>
</div>

## BindGroup

### AddBindGroup

- opis

```ts title="AuroraPipeline.ts"
export default class AuroraPipeline {
  //...
  static addBindGroup({
    name,
    layout,
    data,
  }: bindGroupTemplate): [GPUBindGroup, GPUBindGroupLayout];
  //...
}
```

#### Props:

- `name` - Nazwa bindGroup.
- `layout` - Layout dla bindGroupy. More->[GPUBindGroupLayoutDescriptor](https://gpuweb.github.io/types/interfaces/GPUBindGroupLayoutDescriptor.html).
- `data` - Dane pasujące do layoutu.
<hr />

### GetBindsFromLayout

- getBindsFromLayout zwraca daną bindGroupe na bazie podanej nazwy

```ts title="AuroraPipeline.ts"
export default class AuroraPipeline {
  //...
  static getBindsFromLayout(layoutName: string): GPUBindGroup;
  //...
}
```

#### Props:

- `layoutName` - Nazwa BindGroupy do zwrócenia.

<hr />

## BufferLayout

### CreateVertexBufferLayout

- createVertexBufferLayout tworzy layout z descriptora.

```ts title="AuroraPipeline.ts"
export default class AuroraPipeline {
  //...
  static createVertexBufferLayout(
    layoutName: string,
    layout: GPUVertexBufferLayout
  );
  //...
}
```

#### Props:

- `layoutName` - Nazwa Layout VertexBuffera.
- `layout` - Descriptor layoutu. More->[GPUVertexBufferLayout](https://gpuweb.github.io/types/interfaces/GPUVertexBufferLayout.html)

<hr />

### CreateVertexBufferLayoutGroup

- createVertexBufferLayoutGroup

```ts title="AuroraPipeline.ts"
export default class AuroraPipeline {
  //...
  static createVertexBufferLayoutGroup(groupName: string, vblList: string[]);
  //...
}
```

#### Props:

- `groupName` - Nazwa grupy laoutów Vertex Bufferów.
- `vblList` - Lista nazw użytych do tworzenia Vertex Buffer Layoutów, ktore mają być zawarte w tej grupie.

<hr />

### GetVertexBufferLayoutGroup

- getVertexBufferLayoutGroup zwraca liste wszystkich layoutów z danej grupy

```ts title="AuroraPipeline.ts"
export default class AuroraPipeline {
  //...
  static getVertexBufferLayoutGroup(groupName: string): GPUVertexBufferLayout[];
  //...
}
```

#### Props:

- `groupName` - Nazwa grupy do zwrócenia z niej.

<hr />

## Pipeline

### CreatePipelineLayout

- createPipelineLayout tworzy layout dla Pipelinu z podanych bingGroup

```ts title="AuroraPipeline.ts"
export default class AuroraPipeline {
  //...
  static createPipelineLayout(layoutName: string, bindGrous: string[]);
  //...
}
```

#### Props:

- `layoutName` - Nazwa dla pipeline layoutu.
- `bindGrous` - Lista bindGroup do użycia w Pipelinie.

<hr />

### CreateRenderPipeline

- createRenderPipeline tworzy nowy pipeline renderowania.

```ts title="AuroraPipeline.ts"
export default class AuroraPipeline {
  //...
  static createRenderPipeline(props: Props);
  //...
}
```

#### Props:

- `pipelineName` - Nazwa dla Pipelinu.
- `pipelineLayout` - Layout do użycia jako shcemat dla Pipelinu.
- `shader` - Shader do użycia w Pipelinie.
- `buffers` - Vertex Buffery do przypisania w Pipelinie.
- `colorTargets` - (optional) Color Attachments do użycia w Pipelinie.

<hr />

### CreateComputePipeline

- createComputePipeline tworzy nowy pipeline komputacji.

```ts title="AuroraPipeline.ts"
export default class AuroraPipeline {
  //...
  static createComputePipeline(props: Props);
  //...
}
```

#### Props:

- `pipelineName` - Nazwa dla Pipelinu.
- `pipelineLayout` - Layout do użycia jako shcemat dla Pipelinu.
- `shader` - Shader do użycia w Pipelinie.

<hr />

### GetPipelineLayout

- getRenderPipelineLayout zwraca dany Layout dla Pipelinu

```ts title="AuroraPipeline.ts"
export default class AuroraPipeline {
  //...
  static getPipelineLayout(): ;
  //...
}
```

#### Props:

- `layoutName` - Nazwa layoutu do zwrócenia

<hr />

### GetPipeline

- getPipeline zwraca dany pipeline.

```ts title="AuroraPipeline.ts"
export default class AuroraPipeline {
  //...
  static getPipeline(
    pipelineName: string
  ): GPURenderPipeline | GPUComputePipeline;
  //...
}
```

#### Props:

- `pipelineName` - nazwa pipelinu do zwrócenia.

<hr />

## ColorAttachments

IN PROGESS...
