---
# You can also start simply with 'default'
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /library-at-trinity-college-1527437166Ojx.jpg
# some information about your slides (markdown enabled)
title: Headless Components
info: |
  ## Tech Kafi Headless Components
  Mathis Hofer, Puzzle ITC
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
image: /vintage_headless_man_by_hauntingvisionsstock_d2ti3fz-375w-2x.jpg
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

# Headless Components

The design pattern™

Separation of rendering & UI \
from behavior & state

Headless Component = Component Primitive

---
layout: quote
transition: slide-up
level: 2
---

«In essence, a Headless Component is a function or object that encapsulates logic, but doesn’t render anything itself. It leaves the rendering part to the consumer, thus offering a high degree of flexibility in how the UI is rendered.»

– Juntao QIU, https://martinfowler.com/articles/headless-component.html

---
transition: slide-up
level: 2
---

# Headless Components

How to extract that logic & state?

React:
- hooks
- render props
- low-level components
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

// Our component implementation using the "headless component"
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

- Reusability & DRY
- Maintainability & testing
- Versatility & customizability

<div class="text-center mt-10">
→ Inversion of control:
Put (UI) power in the developer's hands
</div>

---
layout: image-right
image: /library-at-trinity-college-1527435025tIj.jpg
class: centered
transition: slide-up
---

# On Libraries and Craft

---
transition: undefined
level: 2
---

# Approaches

Should I use existing components or craft them by hand?

```mermaid
flowchart LR
    A[**Pre-Built Components**<br>Component Library]
    C[**DIY Components**<br>No Library]
    A ~~~ C
```

---
transition: slide-up
level: 2
---

# Approaches

Neither the one nor the other!

```mermaid
flowchart LR
    A[**Pre-Built Components**<br>Component Library]
    B[**Headless Components**<br>Primitive Library]
    C[**DIY Components**<br>No Library]
    A ~~~ B
    B ~~~ C
```

---
layout: image-right
image: /bootstrap-meme.jpg
transition: slide-up
level: 2
---

# Approaches: Pre-Built Components

Component Libraries

- Ready-made components – install and go 🚀
- "Customization" via configuration, theming & component attributes/props
  - Little control
  - Hard to implement customer's CI/CD
  - Every site/app looks the same... 🤷‍♂
- Huge/complex dependency
  - Hard to upgrade (markup/style changes)
  - May even block framework upgrade

---
transition: slide-up
level: 2
---

# Approaches: Pre-Built Components (cont.)

Component Libraries

Examples:
- [Bootstrap](https://getbootstrap.com/)
- [Angular Material](https://material.angular.io/), [Material UI](https://mui.com/)
- [Adobe Spectrum](https://spectrum.adobe.com/) (React, WC)
- [Radix Themes](https://www.radix-ui.com/) (React)
- ...

---
transition: slide-up
level: 2
---

# Approaches: DIY Components

No Library

- Craft your own components/design system from the ground up
  - Full control
  - Complex & laborious 😫
- A11y/ARIA, keyboard control, responsiveness, async data loading, feature set → 🤯
  - Even hard for simple dropdown, what about a datepicker?
- No dependency
- Examples: \
  [Tailwind](https://tailwindcss.com/), Vanilla CSS

---
layout: image
image: /headless-meme.jpg
backgroundSize: contain
---

---
transition: slide-up
level: 2
---

# Approaches: Headless Components

Primitive Library

- Build your own components using existing primitives
- Customization via custom rendering & styling
  - Full control over UI/look
  - Bring your own styles™
  - Easily implement customer's CI/CD & UX requirements
- Simple dependency (only install required primitives)

---
transition: slide-up
level: 2
---

# Approaches: Headless Components (cont.)

Primitive Library

Examples:

- [Headless UI](https://headlessui.com/) (React, Vue) → from the makers of Tailwind
- [React ARIA](https://react-spectrum.adobe.com/react-aria/) (React) → Adobe Spectrum builds on this
- [Radix Primitives](https://www.radix-ui.com/primitives) (React) → Radix Themes builds on this
- [Kobalte](https://kobalte.dev/) (SolidJS)
- [Melt UI](https://www.melt-ui.com/) (Svelte)
- [Angular CDK](https://material.angular.io/cdk/) → Angular Material builds on this
- [Angular Primitives](https://angularprimitives.com/)
- [Ark UI](https://ark-ui.com/) (React, Solid, Vue, Svelte)
- ...

---
transition: undefined
level: 2
---

# But wait...

```mermaid
flowchart LR
    A[**Pre-Built Components**<br>Component Library]
    B[**Headless Components**<br>Primitive Library]
    C[**DIY Components**<br>No Library]
    A ~~~ B
    B ~~~ C
```

---
transition: slide-left
level: 2
---

# ...there is one more approach!

```mermaid
flowchart LR
    A[**Pre-Built Components**<br>Component Library]
    B[**Template Components**<br>Component Collection]
    C[**Headless Components**<br>Primitive Library]
    D[**DIY Components**<br>No Library]
    A ~~~ B
    B ~~~ C
    C ~~~ D
```

---
layout: iframe-right
url: https://ui.shadcn.com/docs
class: centered
transition: slide-up
---

# shadcn/ui

---
transition: slide-up
level: 2
---

# shadcn/ui

What the heck is this thing?

- No library, no NPM package, no installation
- Copy "template" components into your project
  - Based on Radix Primitives<sup>*</sup> (headless components for React)
  - Styled with Tailwind
  - Don't start at 0
- Fully own, customize & (re-)style them
- The UI of the components is commited to your project

<sup>*</sup>well, this *is* a dependency...

---
transition: slide-up
level: 2
---

# shadcn/ui on ThoughtWorks Tech Radar

![shadcn ThoughtWorks](./public/shadcn-thoughtworks.png)

---
layout: center
text-align: text-center
transition: slide-left
level: 2
---

# shadcn/ui Demo

---
layout: image-right
image: /The_Headless_Horseman.jpg
class: centered
transition: slide-up
---

# Conclusion

---
layout: iframe-right
url: https://www.radix-ui.com/
transition: slide-up
level: 2
---

# Recap

The many flavors of Radix

- **Radix Themes** \
  = Library of pre-built components \
  (à la Bootstrap)
- **Radix Primitives** \
  = Library of headless components
- **shadcn/ui** \
  = Collection of "template" components built with Radix Primitives & Tailwind to copy into project 

---
transition: slide-up
level: 2
---

# Recap

The (component) world is full of possibilities

```mermaid
flowchart TD
    P((Radix<br>Primitives))
    T((Radix<br>Themes))
    S((shadcn/ui))
    A(Install & configure<br>pre-built components)
    B(Copy & customize<br>template components)
    C(Build components<br>using headless components)
    D(Build custom<br>components)
    
    T --> P
    S --> P
    A --> T
    B --> S
    C --> P
```

---
layout: quote
transition: slide-up
level: 2
---

Headless components might be what you want.

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

These slides are licensed under the terms of the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license.

Images:

- [Library at Trinity College](https://www.publicdomainpictures.net/en/view-image.php?image=255075&picture=library-at-trinity-college) CC0
- [Vintage Headless Man](https://www.deviantart.com/hauntingvisionsstock/art/Vintage-Headless-Man-170485487) CC BY 3.0
- [Bibliotecă la Colegiul Trinity](https://www.publicdomainpictures.net/ro/view-image.php?image=255067&picture=bibliotec-la-colegiul-trinity) CC0
- [Capt. Mayne Reid’s version of a Texas Legend](https://en.wikipedia.org/wiki/The_Headless_Horseman_(novel)#/media/File:The_Headless_Horseman.jpg) CC0

<PoweredBySlidev mt-10 />
