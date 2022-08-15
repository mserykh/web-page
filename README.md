# Basic web-page

## Task

The task was to create a basic page that could contain:
- navigation menu, 
- hero section, 
- content,
- footer,
- motions / animations.
I could use any design or references.

Technical requirements were:
- React
- TailwindCSS or Sass.

## My approach

As there was no strict requirements to design and theme, after some consideration I came up with an idea creating a landing page about 12-factor app methodology. The design I decided to create myself though it was really difficult and challenging for me to decide on colours, layout, fonts in the short time.

I used React as it was required and I decided to use TailwindCSS for styling though I did not have a lot of experience with it. Also I used TypeScript as I like it and think it brings benefits of the strongly-typed code.

In order to show versatile skills I used Browser APIs as well as libraries:
- React Hook Form,
- React Scroll (used it for the first time).

## Actions

I needed some insights and guidelines so I:
- learned about colour contrast for better a11y,
- read about better UX in terms of spacing between elements,
- watched videos about animations,
- searched for a third-party API to use,
- looked for inspiration on Awwwards.

To satisfy requirements I:
- created a draft design,
- made a pure CSS hamburger icon,
- selected icons,
- added animated blobs,
- implemented revealing elements on scroll,
- added hover and click effects to buttons, links and inputs,
- implemented loading a quote from the third-party API,
- made a parallaxed image,
- made the page adaptive,
- revisited the page design.

## Outcome

As a result I created a landing page dedicated to the 12-factor apps methodology. The initial requirements were fully satisfied.

Though the task was quite open so there are limitless features that could be added.

## Reflection

I successfully completed the task though next time I would use a ready-made design or just copy a design of an existing webpage. Such an open task is definitely a challenge.

As continuation I would make the page more accessible and would write unit tests.

I enjoyed working on the page, I learned a new library and new techniques. 

### Some features of the page

- Animation of the elements on scrolling

- Parallax animation in the section `Bonus`

- Menu toggler icon (for smaller screens) is a pure CSS icon

- The user can get a random quote about programming (using this ([ProgrammingQuotesApi](https://programming-quotes-api.herokuapp.com/index.html))

- A simple subscription form with the input validation (it cannot subscribe you). 
It shows a modal window if inputs are correct. First validation goes after the first click, the revalidation happens after entering valid data.

### Start project locally

1. Clone this repository.
2. Install dependencies.

```
npm ci
```

3. Start project. It will be served on [http://localhost:3000](http://localhost:3000/)).

```
npm run start
```

### Build project

1. Clone this repository.
2. Install dependencies.
3. Build the project.

```
npm run build
```

### Screenshots

![](./hero.png)
![](./sections.png)

### Links

[Live site](https://12factors.netlify.app/)

### Built with

- React
- TypeScript
- TailwindCSS
- React Hook Form
- React Scroll

### Author

Maria Serykh
