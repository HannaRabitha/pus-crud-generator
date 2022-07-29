# Npm Pack - PUSINTEK CRUD GENERATOR

## ⚙️ Installation

```bash
npm i --no-save pusintek-crud-1.0.0.tgz
```

## 🛠 Usage
Switch to the folder src/app and create a sub-folder ```hotel``` with a file ```model.json```. Put the following content into this file:
```javascript
{ 
    "title": "Hotel",
    "entity": "hotel",
    "api": {
      "url": "http://www.angular.at/api/hotel"
    },
    "filter": [
      "city"
    ],
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

In your project's root directory, run the following Angular CLI based command:
```ng g pusintek-crud:crud-module hotel```

```bash
npm i ngx-pagination ng2-order-pipe
```

Have a look to the generated files


## required dependencies

- angular cli under 14.0.0
- using node14
- using typescript  that competible with angular version (option)


<br>
