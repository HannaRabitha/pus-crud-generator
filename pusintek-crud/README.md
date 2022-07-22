# angular-crud

Generating CRUD applications with the Angular CLI and Schematics.

## Tutorial: Getting Started

1. Install the needed npm packages:

   ```
   cd demo
   npm install
   ```

   Note, that this also installs `angular-crud`.

2. Switch to the folder `src/app` and create a sub-folder `hotel` with a file `model.json`. Put the following content into this file:

   ```json
   {
     "title": "Hotel",
     "entity": "hotel",
     "api": {
       "url": "http://www.angular.at/api/hotel"
     },
     "filter": ["city"],
     "fields": [
       {
         "name": "id",
         "label": "Id",
         "isId": true,
         "readonly": true,
         "type": "number"
       },
       {
         "name": "name",
         "type": "string",
         "label": "Name"
       },
       {
         "name": "city",
         "type": "string",
         "label": "City"
       },
       {
         "name": "stars",
         "type": "string",
         "control": "number",
         "label": "Stars"
       }
     ]
   }
   ```

   The generator is using a json5 parser. This means that you can use comments, omit quotation marks and use trailing commas.

3. In your project's root directory, run the following Angular CLI based command:

   ```
   ng g angular-crud:crud-module hotel
   ```

4. Now, you get files generated for managing hotels.

## Extending angular-crud

You can fork this repo and extend the generated code using Schematics. Infos about how to use Schematics can be found here:

- [Generating Custom Code With The Angular CLI And Schematics](https://softwarearchitekt.at/post/2017/10/29/generating-custom-code-with-the-angular-cli-and-schematics.aspx)
- [Automatically Updating Angular Modules With Schematics And The CLI](https://softwarearchitekt.at/post/2017/12/01/generating-angular-code-with-schematics-part-ii-modifying-ngmodules.aspx)

## Call for Contributions

- Validation
- Navigating between Records
- Lookups with dropdown fields etc.
- Configure Base URL
- Supporting more field types (date, checkbox etc.)

If you want to contribute one of those features or other features feel free to reach out. Let's join forces to provide a great solution!
