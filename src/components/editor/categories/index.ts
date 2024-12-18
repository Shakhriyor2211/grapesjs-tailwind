import { labels } from "./labels";

export const editor_blocks = [
  {
    id: "container",
    class: "",
    label: labels.basic.container.label,
    media: labels.basic.container.media,
    content: `<section class="text-gray-600 body-font"><div class="container min-h-20 mx-auto"></div></section>`,
    category: "Basic",
    // order: 1
  },
  {
    id: "column-block-1",
    class: "",
    label: labels.basic.column_1.label,
    media: labels.basic.column_1.media,
    content: `<div class="min-h-20"></div>`,
    category: "Basic",
    // order: 1
  },
  {
    id: "column-block-2",
    class: "",
    label: labels.basic.column_2.label,
    media: labels.basic.column_2.media,
    content: `<div class="grid sm:grid-cols-2"><div class="min-h-20"></div><div class="min-h-20"></div></div>`,
    category: "Basic",
    // order: 1
  },
  {
    id: "column-block-3",
    class: "",
    label: labels.basic.column_3.label,
    media: labels.basic.column_3.media,
    content: `<div class="grid sm:grid-cols-2 md:grid-cols-3"><div class="min-h-20"></div><div class="min-h-20"></div><div class="min-h-20"></div></div>`,
    category: "Basic",
    // order: 1
  },
  {
    id: "column-block-3_7",
    class: "",
    label: labels.basic.column_3_7.label,
    media: labels.basic.column_3_7.media,
    content: `<div class="grid sm:grid-cols-10"><div class="min-h-20 sm:col-span-3"></div><div class="min-h-20 sm:col-span-7"></div></div>`,
    category: "Basic",
    // order: 1
  },
];
