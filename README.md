# Quiz-App - [Demo](https://nimaprmdi.github.io/quiz-app/)

Quiz-App is a quiz app using Hygraph headless CMS and GraphQL + TypeScript & React

![HomePage](/images/screen_1.png)
![StatisticsPage](/images/screen_2.png)

## Features

- Sass for stylesheets
- Connected to the Hygraph GraphQL API
- Responsive design
- Cross-browser compatibility
- Developer friendly extendable code
- SEO optimized
- GNU GPL version 3.0 licensed
- …and much more

See a working example at [nimaprmdi.github.io/Quiz-App/](https://nimaprmdi.github.io/quiz-app/).

## installation

1.  Clone the project into wanted destination location using `git clone https://github.com/nimaprmdi/Quiz-App.git`
2.  Run command `npm install`
3.  Run command `npm build`
4.  You Will find production build in <b>build</b> folder

## Theme structure

```shell
/Quiz-App/                       # → Root of your theme
│── .vscode/                     # → VSCode settings.json file
│── public/                      # → Theme public folder including structure files
│── src/                         # → Theme internal source files
│   ├── assets/                  # → Theme Assets files
│   ├── components/              # → The constructed TSX components required for the interface
│   ├── context/                 # → The interfaces of the models and global laws
│   ├── model/                   # → The navigation object which construct menu
│   ├── graphql/                 # → API handling services
│   └── hooks/                   # → The primary interface coponents
├── .gitignore/                  # → Ignoring unwanted files
├── tailwind.config.js/          # → Tailwindcss config file
├── tsconfig.json/               # → Configuration for the TypeScript
├── package.json                 # → Node.js dependencies and scripts
├── node_modules/                # → Node.js packages
```

## Theme development

- Run `npm install` from the theme directory to install dependencies
- Run `npm start` and have fun

## License

Quiz-App is licensed under [GNU GPL Version 3](https://www.gnu.org/licenses/gpl-3.0.en.html).

## Assets & Licensing

Icons by Iconify (React)
License: MIT, https://raw.githubusercontent.com/phosphor-icons/phosphor-home/master/LICENSE
Source: https://iconify.design/

classes and components by tailwindcss
License: MIT, https://raw.githubusercontent.com/phosphor-icons/phosphor-home/master/LICENSE
Source: https://github.com/tailwindlabs/tailwindcss

TypeScript by Microsoft
License: GNU GPLv2, https://opensource.org/licenses/GPL-2.0
Source: https://www.typescriptlang.org/

Toast Notification by react-toastify
License: MIT, https://raw.githubusercontent.com/phosphor-icons/phosphor-home/master/LICENSE
Source: https://fkhadra.github.io/react-toastify/introduction/

Swiper.js React by nolimits4web
License: GNU GPLv3, https://github.com/nolimits4web/swiper/blob/master/LICENSE
Source: https://github.com/nolimits4web/swiper

## Developer Notes

- I would like to thank everybody in the open-source community
- If There was any issues Please submit pull requests
