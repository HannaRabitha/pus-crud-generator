# Npm Pack - PUSINTEK CRUD GENERATOR

## How to use

- ### ⚓️ [With Starter Template](#with-starter-template)
- ### ⚓️ [General use](#general-use)

<br>
<br>

## With Starter Template

## ⚙️ Installation

```bash
npm i --no-save pusintek-crud-1.0.0.tgz
```

## 🛠 Usage
### Create folder & model file
Switch to the folder src/app and create a sub-folder ```products``` (you can customize the sub-folder name) with a file ```model.json```. Put the following content into this file:
```javascript
{
    "title": "Products",
    "entity": "products",
    "api": {
        "url": "https://fakestoreapi.com/products"
    },
    "filter": ["price"],
    "fields": [
        {
            "name": "id",
            "label": "Id",
            "isId": true,
            "readonly": true,
            "type": "number"
        },
        {
            "name": "title",
            "type": "string",
            "label": "Title"
        },
        {
            "name": "price",
            "type": "string",
            "label": "Price"
        },
        {
            "name": "description",
            "type": "string",
            "label": "Description"
        },
        {
            "name": "category",
            "type": "string",
            "label": "Category"
        }
    ]
}
```
### Generate component from npm pack
In your project's root directory, run the following Angular CLI based command:

```bash 
ng g pusintek-crud:crud-module products
```

### Install some dependencies
```bash
npm i ngx-pagination ng2-order-pipe
```

Have a look to the generated files

### Run Starter Template
```bash
npm run start
```

run on your ```http://localhost:4200/productses```

<br>

## Usage on Home Module
add to home.module.ts:

```bash
import { ProductsModule } from 'app/products/products.module';
```

```bash
@NgModule({
 imports: [ProductsModule]
 })
```

add to home.routes.ts:
```bash
{
        path     : '',
        component: HomePageComponent,
        children: [
                       {path: 'products/', loadChildren: () => import('app/products/products.module').then(m => m.ProductsModule)}
        ]
    }
```

uncomment in home.component.html
```html
 <div [routerLink]="['productses']" class="bg-white hover:bg-blue-base text-black font-extrabold hover:text-white border px-4 py-6 w-60 cursor-pointer rounded-lg">
        Tabel Products
    </div>
```




### Customize Paginate Number
Open the html file ```products-list.component.html``` you can custome number of ```itemsPerPage: <number>```

```paginate: { itemsPerPage: 3, currentPage: cp }```







<br>
<br>

## General Use
## Required dependencies

- angular cli under 14.0.0
- using node14
- using typescript that competible with angular version (option)

## ⚙️ Installation

```bash
npm i --no-save pusintek-crud-1.0.0.tgz
```

## 🛠 Usage
### Create folder & model file
Switch to the folder src/app and create a sub-folder ```hotel``` (you can customize the sub-folder name) with a file ```model.json```. Put the following content into this file:
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
### Generate component from npm pack
In your project's root directory, run the following Angular CLI based command:
```ng g pusintek-crud:crud-module hotel```

### Install some dependencies
```bash
npm i ngx-pagination ng2-order-pipe
```

Have a look to the generated files

### Customize Paginate Number
Open the html file ```hotel-list.component.html``` you can custome number of ```itemsPerPage: <number>```

```paginate: { itemsPerPage: 3, currentPage: cp }```

<br>
