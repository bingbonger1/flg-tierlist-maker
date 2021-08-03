# /flg/ Tiermaker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Adding new names

If all you want to do is add or remove new characters from the list, please edit the `src/assets/characters.json` file. [Click here](https://github.com/FatCatClient/flg-tierlist-maker/edit/master/src/assets/characters.json) to easily access this file.

To prevent abuse, newly created accounts won't be able to contribute for a full day (because I'm aware what people from 4chan might attempt), if you simply cannot wait, or want your own character removed, feel free to [send me a note on F-List instead](https://www.f-list.net/read_notes.php?send=fatcat%20client).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. Use the `--prod` flag for a production build. For deployment to Github Pages, the `npm run deploy` command is used. Both of these commands will pre-fetch the user avatars before generating the build artifacts, both of which will be stored in the `dist/` directory. 

Pre-fetching is needed, as Javascript (whether compiled or raw) won't allow manipulation of external sources from webservers that block (or don't allow) our domain via CORS headers.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
