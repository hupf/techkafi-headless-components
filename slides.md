---
# You can also start simply with 'default'
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: images/library-at-trinity-college-1527437166Ojx.jpg
# some information about your slides (markdown enabled)
title: Headless Components
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
author: Mathis Hofer, Puzzle ITC
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
hideInToc: true
---

# Headless Components

Tech Kafi 15.01.2025

Mathis Hofer \
Puzzle ITC

---
layout: center
transition: slide-left
hideInToc: true
---

# Agenda

<Toc text-sm minDepth="1" maxDepth="1" />

---
layout: image-right
image: images/vintage_headless_man_by_hauntingvisionsstock_d2ti3fz-375w-2x.jpg
class: centered
transition: slide-up
---

# Introduction

---
layout: center
class: text-center
transition: slide-up
level: 2
---

# The Headless Component Pattern

Headless Component = Component Primitive

Separate presentation/rendering/UI from behavior & state management

---
layout: quote
transition: slide-up
level: 2
---

«In essence, a Headless Component is a function or object that encapsulates logic, but doesn’t render anything itself. It leaves the rendering part to the consumer, thus offering a high degree of flexibility in how the UI is rendered.»

– Juntao QIU, martinfowler.com

---
transition: slide-up
level: 2
---

# Implementations


React:
- hooks
- render props
- context
- HOCs

Angular:
- directives
- services
- (ng-templates)

---
transition: slide-up
level: 2
---

# React Dropdown

```ts
// The "headless component" or component primitive
function useDropdown() {
  // ...all the dropdown logic/state
  return {
    // ...exposed logic/state
  };
}

function Dropdown({ items }: DropdownProps) {
  const {
    isOpen,
    selectedItem,
    selectedIndex,
    toggleDropdown,
    handleKeyDown,
    setSelectedItem,
  } = useDropdown(items);

  return (
    // ...render & style the UI using the available logic/state
  );
}
```

---
transition: slide-left
level: 2
---

# Why Headless Components?

- Reusability/DRY
- Maintainability/Testing
- Versatility/Customizability

Inversion of control: \
Put (UI/styling) power in the developer's hands

---
layout: image-right
image: images/library-at-trinity-college-1527435025tIj.jpg
class: centered
transition: slide-up
---

# On Libraries and Craft


---
transition: slide-up
level: 2
---

# Approaches


---
transition: slide-up
level: 2
---

# Component Libraries


---
transition: slide-up
level: 2
---

# DIY Components


---
transition: slide-left
level: 2
---

# Component Primitive Libraries


---
layout: iframe-right
url: https://ui.shadcn.com/docs
class: centered
transition: slide-up
---

# shadcn/ui

---
transition: slide-left
level: 2
---

# ...

---
layout: image-right
image: images/The_Headless_Horseman.jpg
class: centered
transition: slide-up
---

# Conclusion

---
transition: slide-up
level: 2
---

# Recap

---
transition: slide-up
level: 2
---

# Further Resources

- [Headless Component: a pattern for composing React UIs](https://martinfowler.com/articles/headless-component.html) (martinfowler.com)
- [ARIA Authoring Practices Guide (APG) – Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) (WAI)
- [How headless components became the future for building UI libraries](https://www.subframe.com/blog/how-headless-components-became-the-future-for-building-ui-libraries) (subframe.com)
- [Headless Angular Components](https://angular.love/headless-angular-components) (angular.love)

---
transition: slide-up
level: 2
---

# Questions? Discussion?

Licensed under the terms of the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license.

Images:

- [Library at Trinity College](https://www.publicdomainpictures.net/en/view-image.php?image=255075&picture=library-at-trinity-college) CC0
- [Vintage Headless Man](https://www.deviantart.com/hauntingvisionsstock/art/Vintage-Headless-Man-170485487) CC BY 3.0
- [Bibliotecă la Colegiul Trinity](https://www.publicdomainpictures.net/ro/view-image.php?image=255067&picture=bibliotec-la-colegiul-trinity) CC0
- [Capt. Mayne Reid’s version of a Texas Legend](https://en.wikipedia.org/wiki/The_Headless_Horseman_(novel)#/media/File:The_Headless_Horseman.jpg)

<PoweredBySlidev mt-10 />
