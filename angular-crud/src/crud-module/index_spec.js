"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular-devkit/schematics/testing");
const path = require("path");
const schematics_1 = require("@angular-devkit/schematics");
const model = {
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
};
// tslint:disable:max-line-length
describe('Angular CRUD Schematics', () => {
    const schematicRunner = new testing_1.SchematicTestRunner('schematics', path.join(__dirname, './../collection.json'));
    const defaultOptions = {
        name: 'hotel'
    };
    let appTree;
    // tslint:disable-next-line:no-any
    const workspaceOptions = {
        name: 'workspace',
        newProjectRoot: 'projects',
        version: '0.5.0',
    };
    // tslint:disable-next-line:no-any
    const appOptions = {
        name: 'crudtest',
        inlineStyle: false,
        inlineTemplate: false,
        routing: false,
        style: 'css',
        skipTests: false,
    };
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        const tree = new testing_1.UnitTestTree(new schematics_1.HostTree);
        // add model file
        tree.create('/projects/crudtest/src/app/hotel/model.json', JSON.stringify(model));
        appTree = yield schematicRunner.runExternalSchematicAsync('@schematics/angular', 'workspace', workspaceOptions, tree).toPromise();
        appTree = yield schematicRunner.runExternalSchematicAsync('@schematics/angular', 'application', appOptions, appTree).toPromise();
    }));
    it('should create hotel-list component files', (done) => {
        const files = ['hotel-list.component.html', 'hotel-list.component.spec.ts', 'hotel-list.component.ts'];
        const hotelListPath = '/projects/crudtest/src/app/hotel/hotel-list/';
        schematicRunner.runSchematicAsync('crud-module', defaultOptions, appTree).toPromise().then(tree => {
            files.forEach(f => {
                const path = `${hotelListPath}${f}`;
                expect(tree.exists(path)).toEqual(true);
            });
            done();
        }, done.fail);
    });
    it('should use Bootstrap by default', (done) => {
        const hotelListPath = '/projects/crudtest/src/app/hotel/hotel-list/hotel-list.component.html';
        schematicRunner.runSchematicAsync('crud-module', defaultOptions, appTree).toPromise().then(tree => {
            const listTemplate = tree.readContent(hotelListPath);
            expect(listTemplate).toContain(`class="table table-centered table-hover mb-0"`);
            expect(listTemplate).toContain(`class="btn btn-primary"`);
            done();
        }, done.fail);
    });
    it('should create hotel-edit component files', (done) => {
        const files = ['hotel-edit.component.html', 'hotel-edit.component.spec.ts', 'hotel-edit.component.ts'];
        const hotelListPath = '/projects/crudtest/src/app/hotel/hotel-edit/';
        schematicRunner.runSchematicAsync('crud-module', defaultOptions, appTree).toPromise().then(tree => {
            files.forEach(f => {
                const path = `${hotelListPath}${f}`;
                expect(tree.exists(path)).toEqual(true);
            });
            done();
        }, done.fail);
    });
    it('should add routes', (done) => {
        schematicRunner.runSchematicAsync('crud-module', defaultOptions, appTree).toPromise().then(tree => {
            const routingModule = tree.readContent('/projects/crudtest/src/app/hotel/hotel.routes.ts');
            expect(routingModule).toContain(`path: 'hotels'`);
            expect(routingModule).toContain(`path: 'hotels/:id'`);
            done();
        }, done.fail);
    });
    it('should import the module in the app module file', (done) => {
        schematicRunner.runSchematicAsync('crud-module', defaultOptions, appTree).toPromise().then(tree => {
            const appModule = tree.readContent('/projects/crudtest/src/app/app.module.ts');
            expect(appModule).toMatch(/.\/hotel\/hotel.module/);
            expect(appModule).toMatch(/HotelModule/);
            done();
        }, done.fail);
    });
    it('should generate Bootstrap templates', (done) => {
        const bootstrapOptions = Object.assign({}, defaultOptions);
        bootstrapOptions.style = 'bootstrap';
        schematicRunner.runSchematicAsync('crud-module', bootstrapOptions, appTree).toPromise().then(tree => {
            const hotelList = tree.readContent('/projects/crudtest/src/app/hotel/hotel-list/hotel-list.component.html');
            expect(hotelList).toMatch(/<table class="table/);
            const hotelEdit = tree.readContent('/projects/crudtest/src/app/hotel/hotel-edit/hotel-edit.component.html');
            expect(hotelEdit).toMatch(/class="form-control"/);
            done();
        }, done.fail);
    });
    it('should generate Angular Material templates', (done) => {
        const materialOptions = Object.assign({}, defaultOptions);
        materialOptions.style = 'material';
        schematicRunner.runSchematicAsync('crud-module', materialOptions, appTree).toPromise().then(tree => {
            const hotelList = tree.readContent('/projects/crudtest/src/app/hotel/hotel-list/hotel-list.component.html');
            expect(hotelList).toMatch(/<table mat-table/);
            const hotelEdit = tree.readContent('/projects/crudtest/src/app/hotel/hotel-edit/hotel-edit.component.html');
            expect(hotelEdit).toMatch(/matInput/);
            done();
        }, done.fail);
    });
});
//# sourceMappingURL=index_spec.js.map