---
title: From local to live
description: A few questions to use while turning a project into a public experience.
---

# From local to live

You know the world you built. A visitor arriving from a link does not. Give them enough to begin, then let the work do its work.

## Before you build another screen

Write down:

1. **The invitation:** Where has the visitor arrived, and what can they do here? Try two sentences.
2. **One path:** Arrival → first action → response → next choice or exit. Draw it on paper.
3. **The states:** What does the interaction show before an action, while something is happening, when it works, and when it cannot work?

For the showcase, do the same exercise with a visitor trying to find one project. The structure of the information comes before the menu that displays it.

## From Figma/a paper/your brain to a working webpage

A frame shows one moment. Tell your coding tool what happens around it: what can be clicked or typed, what changes, what happens on a narrow screen, and what happens when a permission or input fails. Include the actual words you want on the page. Then open the result and correct what it misunderstood.

Try this prompt with your own details:

```text
Build the first interaction of my project. A visitor arrives knowing nothing about it. They should understand [context], try [action], and see [response]. On a phone, [describe layout behaviour]. If [likely failure] happens, they can [way forward]. Keep [important quality of the work]. Show me the first version so I can test it.
```

## Check it with a link

- Open the deployed URL on your phone, not just the local version on your laptop.
- Try the main path without a mouse.
- Check that links and controls look and sound like things you can use.
- If an image or sound carries meaning, give the visitor another way to get that meaning.
- Send the link to someone outside the studio, if possible. Stay quiet while they try it.

Some confusion may belong to the work. Ask whether it serves the idea, or whether it simply stops the visitor.

## If you want to read more

- [User flows and journeys](https://www.nngroup.com/articles/user-journeys-vs-user-flows/) — for deciding which steps to draw.
- [Information architecture and navigation](https://www.nngroup.com/articles/ia-vs-navigation/) — for organising the showcase.
- [Responsive design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) — when the page falls apart on a phone.
- [How people navigate the web](https://www.w3.org/WAI/people-use-web/tools-techniques/navigation/) — when checking whether people can find and use your controls.
