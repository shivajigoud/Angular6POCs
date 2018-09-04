(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["University-university-module"],{

/***/ "./src/app/University/city/city.component.css":
/*!****************************************************!*\
  !*** ./src/app/University/city/city.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/University/city/city.component.html":
/*!*****************************************************!*\
  !*** ./src/app/University/city/city.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6 class=\"card-subtitle mb2 text-muted\">Add City</h6>\n<select [(ngModel)]=\"selectedCountry\" class=\"form-control\" #addCountrySelect=\"ngModel\" (change)=\"onCountryChange(selectedCountry._id)\" required>\n  <option value=\"Select Country\" selected disabled>Select Country...</option>  \n  <option *ngFor='let country of countries;let i = index' [ngValue]=\"country\" >\n        {{ country.name }}\n    </option>\n  </select>\n  <span>You slected {{ selectedCountry.name }} as your country</span>\n<select [(ngModel)]=\"selectedState\" class=\"form-control\" #addStateSelect=\"ngModel\" (change)=\"onStateChange(selectedState._id)\" required>\n    <option value=\"Select State\" selected disabled>Select State...</option>  \n  <option *ngFor='let state of states;let i = index' [ngValue]=\"state\" >\n        {{ state.name }}\n    </option>\n  </select>\n<span>You slected {{ selectedState.name }} as your state</span>\n<input type=\"text\" class=\"form-control\" [(ngModel)]=\"newCity\" #addCityInput=\"ngModel\" required>  \n<button type=\"button\" class=\"btn btn-primary\" (click)=\"addCity(selectedState._id)\" [disabled]=\"!addCountrySelect.dirty || !addStateSelect.dirty || !addCityInput.valid\">Add City</button>\n<div *ngIf=\"cities.length!=0\">\n    <table class=\"table\">\n      <thead class=\"thead-inverse\">\n        <tr>\n          <th>City</th>\n          <th>Is Active</th>\n          <th>Update</th>\n          <th>Disable</th>\n          \n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let city of cities;let i = index' >\n          <td>{{ city.name }}</td>\n          <td>{{ city.activeStatus }}</td>\n          <td><button class=\"btn btn-info\" (click)='updateCity(city)' [disabled]=\"!addCountrySelect.dirty || !addStateSelect.dirty || !addCityInput.valid\">Update</button></td>\n          <td>\n            <button class=\"btn btn-danger\" (click)='disableCity(city)' *ngIf=\"city.activeStatus\">Disable</button>\n            <button class=\"btn btn-primary\" (click)='enableCity(city)' *ngIf=\"!city.activeStatus\">Enable</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>"

/***/ }),

/***/ "./src/app/University/city/city.component.ts":
/*!***************************************************!*\
  !*** ./src/app/University/city/city.component.ts ***!
  \***************************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services.service */ "./src/app/University/services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CityComponent = /** @class */ (function () {
    function CityComponent(universityService) {
        this.universityService = universityService;
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.selectedCountry = 'Select Country';
        this.selectedState = 'Select State';
        this.selectedCity = '';
        this.newCountry = '';
        this.newState = '';
        this.newCity = '';
    }
    CityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.universityService.getCountries().subscribe(function (result) {
            console.log.apply(console, result.countries);
            _this.countries = result.countries.filter(function (country) {
                return country.activeStatus == true;
                // return country
            });
        });
    };
    CityComponent.prototype.onCountryChange = function (countryId) {
        var _this = this;
        this.universityService.getStates(countryId).subscribe(function (result) {
            _this.states = result.states.filter(function (state) {
                return state.activeStatus == true;
                // return country
            });
        });
    };
    CityComponent.prototype.onStateChange = function (stateId) {
        var _this = this;
        this.universityService.getCities(stateId).subscribe(function (result) {
            _this.cities = result.cities;
        });
    };
    CityComponent.prototype.addCity = function (stateId) {
        var _this = this;
        var stateObj = {
            name: this.newCity,
            state: stateId,
            activeStatus: true
        };
        this.universityService.addCity(stateObj).subscribe(function (data) {
            console.log("added the city " + JSON.stringify(data));
            _this.newCity = "";
            data.result && _this.cities.push(data.result);
        });
    };
    CityComponent.prototype.updateCity = function (city) {
        var _this = this;
        var CityObj = {
            "name": this.newCity,
            "state": city.state,
            "activeStatus": true
        };
        this.universityService.updateCity(city._id, CityObj).subscribe(function (result) {
            console.log("updated City " + JSON.stringify(result.data._id));
            _this.newCity = "";
            var matchCity = _this.cities.find(function (city) { return city._id == result.data._id; });
            var matchedIndex = _this.cities.indexOf(matchCity);
            _this.cities = _this.cities.slice(0, matchedIndex).concat([result.data], _this.cities.slice(matchedIndex + 1));
            //result.data && this.cities.push(result.data)
        });
    };
    CityComponent.prototype.disableCity = function (city) {
        var CityObj = {
            "name": city.name,
            "state": city.state,
            "activeStatus": false
        };
        this.universityService.updateCity(city._id, CityObj).subscribe(function (result) {
            console.log("disabled the City " + result);
            city.activeStatus = false;
        });
    };
    CityComponent.prototype.enableCity = function (city) {
        var CityObj = {
            "name": city.name,
            "state": city.state,
            "activeStatus": true
        };
        this.universityService.updateCity(city._id, CityObj).subscribe(function (result) {
            console.log("disabled the City " + result);
            city.activeStatus = true;
        });
    };
    CityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-city',
            template: __webpack_require__(/*! ./city.component.html */ "./src/app/University/city/city.component.html"),
            styles: [__webpack_require__(/*! ./city.component.css */ "./src/app/University/city/city.component.css")]
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]])
    ], CityComponent);
    return CityComponent;
}());



/***/ }),

/***/ "./src/app/University/college-landing/college-landing.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/University/college-landing/college-landing.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-link{\n    display: block\n}\n#hostels {\n    background-color: rgba(128, 245, 247, 0.88);\n    border: 12px solid rgb(199, 253, 255);\n    min-height: 140px;\n    background-size: 100px;\n    background-repeat: no-repeat;\n    background-position: center center;\n  background-image: url(data:image/png;base64,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)\n}\n#students {\n    background-color: rgb(255, 198, 249);\n    border: 12px solid rgba(255, 221, 248, 1);\n    min-height: 140px;\n    background-size: 100px; \n    background-repeat: no-repeat;\n    background-position: center center;\n    background-image: url(data:image/png;base64,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)\n}\n"

/***/ }),

/***/ "./src/app/University/college-landing/college-landing.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/University/college-landing/college-landing.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\n  Welcome to {{ collegeModel.name }}\n</h3>\n<div class=\"row\">\n  <div class=\"col-sm-6\" id=\"hostels\" (click)='goToHostels(collegeId)'></div>\n  <div class=\"col-sm-6\" id=\"students\" (click)='goToStudents(collegeId)'></div>\n</div>"

/***/ }),

/***/ "./src/app/University/college-landing/college-landing.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/University/college-landing/college-landing.component.ts ***!
  \*************************************************************************/
/*! exports provided: CollegeLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeLandingComponent", function() { return CollegeLandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services.service */ "./src/app/University/services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CollegeLandingComponent = /** @class */ (function () {
    function CollegeLandingComponent(activatedRoute, universityService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.universityService = universityService;
        this.router = router;
        this.collegeId = "";
        this.collegeModel = {};
        console.log.apply(console, [this.activatedRoute]);
        this.activatedRoute.params.subscribe(function (college) {
            _this.collegeId = college.id;
        });
    }
    CollegeLandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.universityService.getCollegeById(this.collegeId).subscribe(function (result) {
            _this.collegeModel = Object.assign({}, result.college);
        });
    };
    CollegeLandingComponent.prototype.goToHostels = function (id) {
        this.router.navigate(['../hostels'], { relativeTo: this.activatedRoute });
    };
    CollegeLandingComponent.prototype.goToStudents = function (id) {
        this.router.navigate(['../students'], { relativeTo: this.activatedRoute });
    };
    CollegeLandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-college-landing',
            template: __webpack_require__(/*! ./college-landing.component.html */ "./src/app/University/college-landing/college-landing.component.html"),
            styles: [__webpack_require__(/*! ./college-landing.component.css */ "./src/app/University/college-landing/college-landing.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CollegeLandingComponent);
    return CollegeLandingComponent;
}());



/***/ }),

/***/ "./src/app/University/college/college.component.css":
/*!**********************************************************!*\
  !*** ./src/app/University/college/college.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/University/college/college.component.html":
/*!***********************************************************!*\
  !*** ./src/app/University/college/college.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(modalId)\">Add College</button>\n  <input type=\"search\" [ngModel]=\"searchCollege\" #searchCollegeInput class=\"form-control\" placeholder=\"Search Colleges\" />\n</div>\n<div *ngIf=\"colleges.length!=0\">\n  <table class=\"table\">\n    <thead class=\"thead-inverse\">\n      <tr>\n        <th>College</th>\n        <th>Is Active</th>\n        <th>Update</th>\n        <th>Disable</th>\n\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor='let college of colleges;let i = index'>\n        <td>\n          <a (click)='goToCollege(college._id)'>{{ college.name }}</a>\n          <!-- <a routerLink='college/{{college._id}}'>{{ college.name }}</a> -->\n          <!-- <router-outlet></router-outlet> -->\n        </td>\n        <td>{{ college.activeStatus }}</td>\n        <td><button class=\"btn btn-info\" (click)='editCollege(college)' >Edit</button></td>\n        <td>\n          <button class=\"btn btn-danger\" (click)='disableCollege(college)' *ngIf=\"collegeModel.activeStatus\">Disable</button>\n          <button class=\"btn btn-primary\" (click)='enableCollege(college)' *ngIf=\"!collegeModel.activeStatus\">Enable</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<!-- adding a college code-->\n<app-modalpopup id=\"{{ modalId }}\" class=\"app-modalpopup\">\n  <h4>Add a College</h4>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <input type=\"text\" [(ngModel)]=\"collegeModel.name\" placeholder=\"Enter College Name\" #collegeName=\"ngModel\" class=\"form-control\" required/>\n      <input type=\"text\" [(ngModel)]=\"collegeModel.addressLine1\" placeholder=\"Enter Address Lane1\" #collegeAddressLine1=\"ngModel\"\n        class=\"form-control\" required/>\n      <input type=\"text\" [(ngModel)]=\"collegeModel.addressLine2\" placeholder=\"Enter Address Lane2\" #collegeAddressLine2=\"ngModel\"\n        class=\"form-control\" />\n    </div>\n    <div class=\"col-sm-6\">\n      <select [(ngModel)]=\"collegeModel.country\" class=\"form-control\" #addCountrySelect=\"ngModel\" (change)=\"onCountryChange(addCountrySelect.value)\"\n        required>\n        <option value=\"{{ collegeModel.country }}\" selected disabled>Select Country...</option>\n        <option *ngFor='let country of countries;let i = index' [ngValue]=\"country._id\">\n          {{ country.name }}\n        </option>\n      </select>\n      <span>You slected {{ selectedCountry.name }} as your country</span>\n      <select [(ngModel)]=\"collegeModel.state\" class=\"form-control\" #addStateSelect=\"ngModel\" (change)=\"onStateChange(addStateSelect.value)\"\n        required>\n        <option value=\"{{ collegeModel.state }}\" selected disabled>Select State...</option>\n        <option *ngFor='let state of states;let i = index' [ngValue]=\"state._id\">\n          {{ state.name }}\n        </option>\n      </select>\n      <span>You slected {{ selectedState.name }} as your state</span>\n      <select [(ngModel)]=\"collegeModel.city\" class=\"form-control\" #addCitySelect=\"ngModel\" required (click)=\"onCityChange(addCitySelect.value)\">\n        <option value=\"{{ collegeModel.city }}\" selected disabled>Select City...</option>\n        <option *ngFor='let city of cities;let i = index' [ngValue]=\"city._id\">\n          {{ city.name }}\n        </option>\n      </select>\n      <span>You slected {{ selectedCity.name }} as your city</span>\n    </div>\n  </div>\n  <div>\n    <button (click)=\"closeModal(modalId)\" class=\"btn btn-warning\" type=\"button\">Close</button>\n    <button class=\"btn btn-info\" (click)='updateCollege(collegeModel._id)' *ngIf=\"editMode\" \n    type=\"button\" [disabled]=\"!collegeName.valid || !collegeAddressLine1.valid || !addCountrySelect.valid || !addStateSelect.valid || !addCitySelect.valid\">Update</button>\n    <button (click)=\"addCollege()\" class=\"btn btn-primary\" *ngIf=\"!editMode\" \n    type=\"button\" [disabled]=\"!collegeName.valid || !collegeAddressLine1.valid || !addCountrySelect.valid || !addStateSelect.valid || !addCitySelect.valid\">Submit</button>\n  </div>\n\n</app-modalpopup>\n"

/***/ }),

/***/ "./src/app/University/college/college.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/University/college/college.component.ts ***!
  \*********************************************************/
/*! exports provided: CollegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeComponent", function() { return CollegeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services.service */ "./src/app/University/services.service.ts");
/* harmony import */ var _modal_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-service.service */ "./src/app/University/modal-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CollegeComponent = /** @class */ (function () {
    function CollegeComponent(universityService, modalService, router, activedRoute) {
        var _this = this;
        this.universityService = universityService;
        this.modalService = modalService;
        this.router = router;
        this.activedRoute = activedRoute;
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.colleges = [];
        this.modalId = 'modal-id-1';
        this.selectedCountry = '';
        this.selectedState = '';
        this.selectedCity = '';
        this.editMode = false;
        this.collegeModel = {
            name: "",
            addressLine1: "",
            addressLine2: "",
            city: "Select City",
            state: "Select State",
            country: "Select Country",
            activeStatus: true
        };
        this.universityService.getCountries().subscribe(function (result) {
            console.log.apply(console, result.countries);
            _this.countries = result.countries.filter(function (country) {
                return country.activeStatus == true;
                // return country
            });
        });
    }
    CollegeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.universityService.getColleges().subscribe(function (result) {
            console.log.apply(console, result.colleges);
            _this.colleges = result.colleges.filter(function (college) {
                return college;
            });
        });
    };
    CollegeComponent.prototype.onCountryChange = function (countryId) {
        var _this = this;
        this.states = [];
        this.cities = [];
        this.selectedState = '';
        this.selectedCountry = '';
        this.selectedCity = '';
        this.collegeModel.state = 'Select State';
        this.collegeModel.city = 'Select City';
        this.universityService.getStates(countryId).subscribe(function (result) {
            _this.selectedCountry = _this.countries.find(function (c) { return c._id == countryId; });
            _this.states = result.states.filter(function (state) {
                return state.activeStatus == true;
            });
        });
    };
    CollegeComponent.prototype.onStateChange = function (stateId) {
        var _this = this;
        this.cities = [];
        this.selectedState = '';
        this.selectedCity = '';
        this.collegeModel.city = 'Select City';
        this.universityService.getCities(stateId).subscribe(function (result) {
            _this.selectedState = _this.states.find(function (c) { return c._id == stateId; });
            _this.cities = result.cities;
        });
    };
    CollegeComponent.prototype.onCityChange = function (cityID) {
        this.selectedCity = this.cities.find(function (c) { return c._id == cityID; });
    };
    //college related methods
    CollegeComponent.prototype.addCollege = function () {
        var _this = this;
        console.log(JSON.stringify(this.collegeModel));
        this.universityService.addCollege(this.collegeModel).subscribe(function (data) {
            console.log("added the city " + JSON.stringify(data));
            data.result && _this.colleges.push(data.result);
            _this.closeModal(_this.modalId);
        });
    };
    CollegeComponent.prototype.editCollege = function (college) {
        var _this = this;
        this.editMode = true;
        this.universityService.getCollegeById(college._id).subscribe(function (result) {
            _this.collegeModel = Object.assign({}, result.college, {
                city: result.college.city.name,
                state: result.college.city.state.name,
                country: result.college.city.state.country.name,
            });
            _this.openModal(_this.modalId);
        });
        //this.collegeModel = Object.assign({},college,{_id:college._id});
    };
    CollegeComponent.prototype.updateCollege = function (collegeId) {
        var _this = this;
        this.universityService.updateCollege(collegeId, this.collegeModel).subscribe(function (result) {
            console.log("updated College " + JSON.stringify(result.data._id));
            var matchCollege = _this.colleges.find(function (college) { return college._id == result.data._id; });
            var matchedIndex = _this.colleges.indexOf(matchCollege);
            _this.colleges = _this.colleges.slice(0, matchedIndex).concat([result.data], _this.colleges.slice(matchedIndex + 1));
            _this.closeModal(_this.modalId);
            _this.editMode = false;
        });
    };
    CollegeComponent.prototype.disableCollege = function (college) {
        var _this = this;
        college.activeStatus = false;
        this.universityService.updateCollege(college._id, college).subscribe(function (result) {
            console.log("disabled the College " + result);
            _this.collegeModel.activeStatus = false;
        });
    };
    CollegeComponent.prototype.enableCollege = function (college) {
        var _this = this;
        college.activeStatus = true;
        this.universityService.updateCollege(college._id, college).subscribe(function (result) {
            console.log("enabled the College " + result);
            _this.collegeModel.activeStatus = true;
        });
    };
    //Model related methods
    CollegeComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    CollegeComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
        this.editMode = false;
    };
    //college landing methods
    CollegeComponent.prototype.goToCollege = function (collegeId) {
        this.router.navigate(['../college', collegeId, 'show'], { relativeTo: this.activedRoute });
    };
    CollegeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-college',
            template: __webpack_require__(/*! ./college.component.html */ "./src/app/University/college/college.component.html"),
            styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/University/college/college.component.css")]
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"], _modal_service_service__WEBPACK_IMPORTED_MODULE_2__["ModalServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CollegeComponent);
    return CollegeComponent;
}());



/***/ }),

/***/ "./src/app/University/country/country.component.css":
/*!**********************************************************!*\
  !*** ./src/app/University/country/country.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/University/country/country.component.html":
/*!***********************************************************!*\
  !*** ./src/app/University/country/country.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n  <h5 class=\"card-subtitle mb2 text-muted\">Add or Update Country</h5>\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"countryModel.name\" #addCountryInput=\"ngModel\" required placeholder=\"Name of the Country\">  \n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"addCountry()\" [disabled]=\"!addCountryInput.valid\">Add Country</button>\n</div>\n<h4>List of added Countries</h4>\n<div *ngIf=\"countries.length!=0\">\n    <table class=\"table\">\n      <thead class=\"thead-inverse\">\n        <tr>\n          <th>Country</th>\n          <th>Is Active</th>\n          <th>Update</th>\n          <th>Disable</th>\n          \n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let country of countries;let i = index' >\n          <td>{{ country.name }}</td>\n          <td>{{ country.activeStatus }}</td>\n          <td><button class=\"btn btn-info\" (click)='updateCountry(country)' [disabled]=\"!addCountryInput.valid\">Update</button></td>\n          <td>\n            <button class=\"btn btn-danger\" (click)='disableCountry(country)' *ngIf=\"country.activeStatus\">Disable</button>\n            <button class=\"btn btn-primary\" (click)='enableCountry(country)' *ngIf=\"!country.activeStatus\" >Enable</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n<!--Countries functionality completed-->"

/***/ }),

/***/ "./src/app/University/country/country.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/University/country/country.component.ts ***!
  \*********************************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services.service */ "./src/app/University/services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryComponent = /** @class */ (function () {
    function CountryComponent(universityService) {
        var _this = this;
        this.universityService = universityService;
        this.countries = [];
        this.newCountry = '';
        this.selectedCountry = '';
        this.countryModel = {
            "name": "",
            "activeStatus": true
        };
        this.universityService.getCountries().subscribe(function (result) {
            console.log.apply(console, result.countries);
            _this.countries = result.countries.filter(function (country) {
                // return country.activeStatus == true
                return country;
            });
            _this.selectedCountry = _this.countries[0];
        });
    }
    CountryComponent.prototype.ngOnInit = function () {
    };
    CountryComponent.prototype.addCountry = function () {
        var _this = this;
        this.universityService.addCountry(this.countryModel).subscribe(function (data) {
            console.log("add country " + JSON.stringify(data.result));
            _this.countryModel.name = "";
            data.result && _this.countries.push(data.result);
        });
    };
    CountryComponent.prototype.updateCountry = function (country) {
        var _this = this;
        this.universityService.updateCountry(country._id, this.countryModel).subscribe(function (result) {
            console.log("updated country " + result.data);
            _this.countryModel.name = "";
            var matchCountry = _this.countries.find(function (country) { return country._id == result.data._id; });
            var matchedIndex = _this.countries.indexOf(matchCountry);
            _this.countries = _this.countries.slice(0, matchedIndex).concat([result.data], _this.countries.slice(matchedIndex + 1));
        });
    };
    CountryComponent.prototype.disableCountry = function (country) {
        country.activeStatus = false;
        this.universityService.updateCountry(country._id, country).subscribe(function (result) {
            console.log("disabled the country " + result);
            country.activeStatus = false;
        });
    };
    CountryComponent.prototype.enableCountry = function (country) {
        country.activeStatus = true;
        this.universityService.updateCountry(country._id, country).subscribe(function (result) {
            console.log("enabled the country " + result);
            country.activeStatus = true;
        });
    };
    CountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country',
            template: __webpack_require__(/*! ./country.component.html */ "./src/app/University/country/country.component.html"),
            styles: [__webpack_require__(/*! ./country.component.css */ "./src/app/University/country/country.component.css")]
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]])
    ], CountryComponent);
    return CountryComponent;
}());



/***/ }),

/***/ "./src/app/University/hostels/hostels.component.css":
/*!**********************************************************!*\
  !*** ./src/app/University/hostels/hostels.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/University/hostels/hostels.component.html":
/*!***********************************************************!*\
  !*** ./src/app/University/hostels/hostels.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <a [routerLink]=\"['../show']\"><<- Back</a>\n</p>\n<div class=\"well\">\n    <h5 class=\"card-subtitle mb2 text-muted\">Add or Update Hostel</h5>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"hostelModel.name\" #addHostelInput=\"ngModel\" required placeholder=\"Name of the Hostel\">\n      </div>\n    <div class=\"col-sm-6\">\n        <input type=\"search\" [ngModel]=\"searchHostel\" #searchHostelInput class=\"form-control\" placeholder=\"Search Hostel\" />\n    </div>\n  </div>\n      \n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addHostel()\" [disabled]=\"!addHostelInput.valid\">Add Hostel</button>\n  </div>\n  <h4>List of added Hostels</h4>\n  <div *ngIf=\"hostels.length!=0\">\n      <table class=\"table\">\n        <thead class=\"thead-inverse\">\n          <tr>\n            <th>Hostel</th>\n            <th>Is Active</th>\n            <th>Update</th>\n            <th>Disable</th>\n            \n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor='let hostel of hostels;let i = index' >\n            <td>{{ hostel.name }}</td>\n            <td>{{ hostel.activeStatus }}</td>\n            <td><button class=\"btn btn-info\" (click)='updateHostel(hostel)' [disabled]=\"!addHostelInput.valid\">Update</button></td>\n            <td>\n              <button class=\"btn btn-danger\" (click)='disableHostel(hostel)' *ngIf=\"hostel.activeStatus\">Disable</button>\n              <button class=\"btn btn-primary\" (click)='enableHostel(hostel)' *ngIf=\"!hostel.activeStatus\" >Enable</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  <!--hostels functionality completed-->\n"

/***/ }),

/***/ "./src/app/University/hostels/hostels.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/University/hostels/hostels.component.ts ***!
  \*********************************************************/
/*! exports provided: HostelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostelsComponent", function() { return HostelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services.service */ "./src/app/University/services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HostelsComponent = /** @class */ (function () {
    function HostelsComponent(universityService, activeatedRoute) {
        var _this = this;
        this.universityService = universityService;
        this.activeatedRoute = activeatedRoute;
        this.hostels = [];
        this.newHostel = '';
        this.selectedHostel = '';
        this.collegeId = '';
        this.hostelModel = {
            "name": "",
            "college": "",
            "activeStatus": true
        };
        this.activeatedRoute.params.subscribe(function (college) {
            _this.collegeId = college.id;
        });
    }
    HostelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.universityService.getHostelsByCollege(this.collegeId).subscribe(function (result) {
            console.log.apply(console, result.hostels);
            _this.hostels = result.hostels.filter(function (hostel) {
                return hostel;
            });
            // this.selectedHostel = this.hostels[0];
        });
        this.hostelModel.college = this.collegeId;
    };
    HostelsComponent.prototype.addHostel = function () {
        var _this = this;
        this.universityService.addHostel(this.hostelModel).subscribe(function (data) {
            console.log("add hostel " + JSON.stringify(data.result));
            _this.hostelModel.name = "";
            data.result && _this.hostels.push(data.result);
        });
    };
    HostelsComponent.prototype.updateHostel = function (hostel) {
        var _this = this;
        this.universityService.updateHostel(hostel._id, this.hostelModel).subscribe(function (result) {
            console.log("updated hostel " + result.data);
            _this.hostelModel.name = "";
            var matchHostel = _this.hostels.find(function (hostel) { return hostel._id == result.data._id; });
            var matchedIndex = _this.hostels.indexOf(matchHostel);
            _this.hostels = _this.hostels.slice(0, matchedIndex).concat([result.data], _this.hostels.slice(matchedIndex + 1));
        });
    };
    HostelsComponent.prototype.disableHostel = function (hostel) {
        hostel.activeStatus = false;
        this.universityService.updateHostel(hostel._id, hostel).subscribe(function (result) {
            console.log("disabled the hostel " + result);
            hostel.activeStatus = false;
        });
    };
    HostelsComponent.prototype.enableHostel = function (hostel) {
        hostel.activeStatus = true;
        this.universityService.updateHostel(hostel._id, hostel).subscribe(function (result) {
            console.log("enabled the hostel " + result);
            hostel.activeStatus = true;
        });
    };
    HostelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hostels',
            template: __webpack_require__(/*! ./hostels.component.html */ "./src/app/University/hostels/hostels.component.html"),
            styles: [__webpack_require__(/*! ./hostels.component.css */ "./src/app/University/hostels/hostels.component.css")]
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HostelsComponent);
    return HostelsComponent;
}());



/***/ }),

/***/ "./src/app/University/modal-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/University/modal-service.service.ts ***!
  \*****************************************************/
/*! exports provided: ModalServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalServiceService", function() { return ModalServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalServiceService = /** @class */ (function () {
    function ModalServiceService() {
        this.modals = [];
    }
    ModalServiceService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalServiceService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalServiceService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalServiceService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    ModalServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ModalServiceService);
    return ModalServiceService;
}());



/***/ }),

/***/ "./src/app/University/modalpopup/modalpopup.component.css":
/*!****************************************************************!*\
  !*** ./src/app/University/modalpopup/modalpopup.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-modalpopup {\n    /* modals are hidden by default */\n    display: none;\n}\n.app-modal {\n        /* modal container fixed across whole screen */\n        position: fixed;\n        top: 0;\n        right: 15%;\n        bottom: 0;\n        left: 15%;\n \n        /* z-index must be higher than .app-modal-background */\n        z-index: 1000;\n         \n        /* enables scrolling for tall modals */\n        overflow: auto;\n}\n.app-modal-body {\n            padding: 20px;\n            background: #fff;\n \n            /* margin exposes part of the modal background */\n            margin: 40px;\n            border-radius: 10px;\n}\n.app-modal-background {\n        /* modal background fixed across whole screen */\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n \n        /* semi-transparent black  */\n        background-color: #000;\n        opacity: 0.75;\n         \n        /* z-index must be below .app-modal and above everything else  */\n        z-index: 900;\n}\nbody.app-modal-open {\n    /* body overflow is hidden to hide main scrollbar when modal window is open */\n    overflow: hidden;\n}"

/***/ }),

/***/ "./src/app/University/modalpopup/modalpopup.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/University/modalpopup/modalpopup.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "`<div class=\"app-modal\">\n              <div class=\"app-modal-body\">\n                  <ng-content></ng-content>\n              </div>\n          </div>\n          <div class=\"app-modal-background\"></div>`"

/***/ }),

/***/ "./src/app/University/modalpopup/modalpopup.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/University/modalpopup/modalpopup.component.ts ***!
  \***************************************************************/
/*! exports provided: ModalpopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalpopupComponent", function() { return ModalpopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-service.service */ "./src/app/University/modal-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalpopupComponent = /** @class */ (function () {
    function ModalpopupComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalpopupComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'app-modal') {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalpopupComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalpopupComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('app-modal-open');
    };
    // close modal//
    ModalpopupComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('app-modal-open');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalpopupComponent.prototype, "id", void 0);
    ModalpopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modalpopup',
            template: __webpack_require__(/*! ./modalpopup.component.html */ "./src/app/University/modalpopup/modalpopup.component.html"),
            styles: [__webpack_require__(/*! ./modalpopup.component.css */ "./src/app/University/modalpopup/modalpopup.component.css")]
        }),
        __metadata("design:paramtypes", [_modal_service_service__WEBPACK_IMPORTED_MODULE_1__["ModalServiceService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ModalpopupComponent);
    return ModalpopupComponent;
}());



/***/ }),

/***/ "./src/app/University/services.service.ts":
/*!************************************************!*\
  !*** ./src/app/University/services.service.ts ***!
  \************************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicesService = /** @class */ (function () {
    function ServicesService(http) {
        this.http = http;
    }
    ServicesService.prototype.getCountries = function () {
        return this.http.get('http://localhost:8080/country')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.json(); }));
    };
    ServicesService.prototype.getStates = function (byCountry) {
        return this.http.get('http://localhost:8080/state/' + byCountry)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.json(); }));
    };
    ServicesService.prototype.getCities = function (byState) {
        return this.http.get('http://localhost:8080/city/' + byState)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.json(); }));
    };
    ServicesService.prototype.getColleges = function () {
        return this.http.get('http://localhost:8080/colleges')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.json(); }));
    };
    ServicesService.prototype.getCollegesByCity = function (byCity) {
        return this.http.get('http://localhost:8080/college/' + byCity)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.json(); }));
    };
    ServicesService.prototype.getCollegeById = function (id) {
        return this.http.get('http://localhost:8080/college/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.json(); }));
    };
    ServicesService.prototype.getHostels = function () {
        return this.http.get('http://localhost:8080/hostels')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.json(); }));
    };
    ServicesService.prototype.getHostelsByCollege = function (collegeId) {
        return this.http.get('http://localhost:8080/hostels/' + collegeId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.json(); }));
    };
    ServicesService.prototype.getStudents = function () {
        return this.http.get('http://localhost:8080/hostels')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.json(); }));
    };
    ServicesService.prototype.getStudentsByCollege = function (collegeId) {
        return this.http.get('http://localhost:8080/student/' + collegeId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.json(); }));
    };
    ServicesService.prototype.getStudentsById = function (collegeId, id) {
        return this.http.get('http://localhost:8080/student/' + collegeId + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.json(); }));
    };
    //adding the country, state, city, college
    ServicesService.prototype.addCountry = function (countryObj) {
        return this.http.post('http://localhost:8080/country', countryObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.json(); }));
    };
    ServicesService.prototype.updateCountry = function (id, countryObj) {
        return this.http.post('http://localhost:8080/country/' + id, countryObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.json(); }));
    };
    ServicesService.prototype.addState = function (stateObj) {
        return this.http.post('http://localhost:8080/state', stateObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.json(); }));
    };
    ServicesService.prototype.updateState = function (id, stateObj) {
        return this.http.post('http://localhost:8080/state/' + id, stateObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.json(); }));
    };
    ServicesService.prototype.addCity = function (cityObj) {
        return this.http.post('http://localhost:8080/city', cityObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.json(); }));
    };
    ServicesService.prototype.updateCity = function (id, cityObj) {
        return this.http.post('http://localhost:8080/city/' + id, cityObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.json(); }));
    };
    ServicesService.prototype.addCollege = function (collegeObj) {
        return this.http.post('http://localhost:8080/college', collegeObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.json(); }));
    };
    ServicesService.prototype.updateCollege = function (id, collegeObj) {
        return this.http.post('http://localhost:8080/college/' + id, collegeObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.json(); }));
    };
    ServicesService.prototype.addHostel = function (hostelObj) {
        return this.http.post('http://localhost:8080/hostel', hostelObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.json(); }));
    };
    ServicesService.prototype.updateHostel = function (id, hostelObj) {
        return this.http.post('http://localhost:8080/hostel/' + id, hostelObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.json(); }));
    };
    ServicesService.prototype.addStudent = function (studentObj) {
        return this.http.post('http://localhost:8080/student', studentObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.json(); }));
    };
    ServicesService.prototype.updateStudent = function (id, studentObj) {
        return this.http.post('http://localhost:8080/student/' + id, studentObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.json(); }));
    };
    ServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ServicesService);
    return ServicesService;
}());



/***/ }),

/***/ "./src/app/University/state/state.component.css":
/*!******************************************************!*\
  !*** ./src/app/University/state/state.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/University/state/state.component.html":
/*!*******************************************************!*\
  !*** ./src/app/University/state/state.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n<h5>Select Country to Add or Update state </h5>\n<select [(ngModel)]=\"selectedCountry\" class=\"form-control\"  #addCountrySelect=\"ngModel\" (change)=\"onCountryChange(selectedCountry._id)\" required >\n    <!-- <option *ngFor='let country of countries;let i = index' [ngValue]=\"country\" [attr.selected]=\"i==0?selected:''\"> -->\n  <option value=\"Select Country\" selected disabled>Select Country...</option>\n  <option *ngFor='let country of countries;let i = index' [ngValue]=\"country\" >\n      {{ country.name }}\n  </option>\n</select>\n<h5>You slected <span *ngIf=\"!selectedCountry.name\">...</span><span *ngIf=\"selectedCountry.name\">{{ selectedCountry.name }} </span>as your country</h5>\n<input type=\"text\" class=\"form-control\" [(ngModel)]=\"newState\" #addStateInput=\"ngModel\" required>  \n<button type=\"button\" class=\"btn btn-primary\" (click)=\"addState(selectedCountry._id)\" [disabled]=\"!addCountrySelect.dirty || !addStateInput.valid\">Add State</button>\n</div>\n<div *ngIf=\"states.length!=0\">\n    <table class=\"table\">\n      <thead class=\"thead-inverse\">\n        <tr>\n          <th>State</th>\n          <th>Is Active</th>\n          <th>Update</th>\n          <th>Disable</th>\n          \n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let state of states;let i = index' >\n          <td>{{ state.name }}</td>\n          <td>{{ state.activeStatus }}</td>\n          <td><button class=\"btn btn-info\" (click)='updateState(state)' [disabled]=\"!addCountrySelect.dirty || !addStateInput.valid\">Update</button></td>\n          <td>\n            <button class=\"btn btn-danger\" (click)='disableState(state)' *ngIf=\"state.activeStatus\">Disable</button>\n            <button class=\"btn btn-primary\" (click)='enableState(state)' *ngIf=\"!state.activeStatus\">Enable</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n<!--State functionality completed-->"

/***/ }),

/***/ "./src/app/University/state/state.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/University/state/state.component.ts ***!
  \*****************************************************/
/*! exports provided: StateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateComponent", function() { return StateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services.service */ "./src/app/University/services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StateComponent = /** @class */ (function () {
    function StateComponent(universityService) {
        this.universityService = universityService;
        this.countries = [];
        this.states = [];
        this.selectedCountry = 'Select Country';
        this.newCountry = '';
        this.newState = '';
    }
    StateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.universityService.getCountries().subscribe(function (result) {
            console.log.apply(console, result.countries);
            _this.countries = result.countries.filter(function (country) {
                return country.activeStatus == true;
                //return country
            });
            //this.countries.unshift(this.selectedCountry);
        });
    };
    StateComponent.prototype.onCountryChange = function (countryId) {
        var _this = this;
        //if(countryId != -1){
        this.universityService.getStates(countryId).subscribe(function (result) {
            _this.states = result.states;
        });
        //}
        //else this.states=[];
    };
    StateComponent.prototype.addState = function (countryId) {
        var _this = this;
        var stateObj = {
            name: this.newState,
            country: countryId,
            activeStatus: true
        };
        this.universityService.addState(stateObj).subscribe(function (data) {
            console.log("added the state " + data.result);
            _this.newState = "";
            data.result && _this.states.push(data.result);
        });
    };
    StateComponent.prototype.updateState = function (state) {
        var _this = this;
        var StateObj = {
            "name": this.newState,
            "country": state.country,
            "activeStatus": true
        };
        this.universityService.updateState(state._id, StateObj).subscribe(function (result) {
            console.log("updated State " + result.data);
            _this.newState = "";
            var matchState = _this.states.find(function (state) { return state._id == result.data._id; });
            var matchedIndex = _this.states.indexOf(matchState);
            _this.states = _this.states.slice(0, matchedIndex).concat([result.data], _this.states.slice(matchedIndex + 1));
        });
    };
    StateComponent.prototype.disableState = function (state) {
        var StateObj = {
            "name": state.name,
            "country": state.country,
            "activeStatus": false
        };
        this.universityService.updateState(state._id, StateObj).subscribe(function (data) {
            console.log("disabled the State " + data);
            state.activeStatus = false;
        });
    };
    StateComponent.prototype.enableState = function (state) {
        var StateObj = {
            "name": state.name,
            "country": state.country,
            "activeStatus": true
        };
        this.universityService.updateState(state._id, StateObj).subscribe(function (data) {
            console.log("enabled the State " + data);
            state.activeStatus = true;
        });
    };
    StateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-state',
            template: __webpack_require__(/*! ./state.component.html */ "./src/app/University/state/state.component.html"),
            styles: [__webpack_require__(/*! ./state.component.css */ "./src/app/University/state/state.component.css")]
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]])
    ], StateComponent);
    return StateComponent;
}());



/***/ }),

/***/ "./src/app/University/students/students.component.css":
/*!************************************************************!*\
  !*** ./src/app/University/students/students.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pic input[type=file]{\n    max-width:150px\n}\n.student-pic{\n    width: 150px;\n    height: 150px; \n    background-size:contain;\n    background-position: center;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODQ0OEVEQzdCODA4MTFFNkFDRUY5RTQ5NzZFNzVBN0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODQ0OEVEQzhCODA4MTFFNkFDRUY5RTQ5NzZFNzVBN0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NDQ4RURDNUI4MDgxMUU2QUNFRjlFNDk3NkU3NUE3RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NDQ4RURDNkI4MDgxMUU2QUNFRjlFNDk3NkU3NUE3RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvua+GQAAGGqSURBVHja7L0HgCzZ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)\n}"

/***/ }),

/***/ "./src/app/University/students/students.component.html":
/*!*************************************************************!*\
  !*** ./src/app/University/students/students.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    <a [routerLink]=\"['../show']\"><<- Back</a>\n  </p>\n<div class=\"well\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(modalId)\">Add Student</button>\n    <input type=\"search\" [ngModel]=\"searchStudent\" #searchStudentInput class=\"form-control\" placeholder=\"Search Students\" />\n  </div>\n  <div *ngIf=\"students.length!=0\">\n    <table class=\"table\">\n      <thead class=\"thead-inverse\">\n        <tr>\n          <th>Student</th>\n          <th>Is Active</th>\n          <th>Update</th>\n          <th>Disable</th>\n  \n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let student of students;let i = index'>\n          <td>{{ student.name }}\n          </td>\n          <td>{{ student.activeStatus }}</td>\n          <td><button class=\"btn btn-info\" (click)='editStudent(student)' >Edit</button></td>\n          <td>\n            <button class=\"btn btn-danger\" (click)='disableStudent(student)' *ngIf=\"studentModel.activeStatus\">Disable</button>\n            <button class=\"btn btn-primary\" (click)='enableStudent(student)' *ngIf=\"!studentModel.activeStatus\">Enable</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <!-- adding a student code-->\n  <app-modalpopup id=\"{{ modalId }}\" class=\"app-modalpopup\">\n    <h4>Add a Student</h4>\n    <div class=\"row\">\n        <div class=\"col-sm-4 pic\">\n          <img [src] = \"studentModel.pic\" class=\"student-pic\" >\n            <input type=\"file\" \n                    [(ngModel)]=\"studentModel.photo\" \n                    placeholder=\"Take Pciture\" \n                    #studentPhoto=\"ngModel\" \n                    class=\"form-control\" \n                    required\n                    onclick=\"this.value = null\" (change)=\"onFileChange($event)\" \n                    />\n           \n          </div>\n      <div class=\"col-sm-4\">\n        <input type=\"text\" [(ngModel)]=\"studentModel.name\" placeholder=\"Enter Student Name\" #studentName=\"ngModel\" class=\"form-control\" required/>\n        <input type=\"number\" [(ngModel)]=\"studentModel.rollno\" placeholder=\"Enter Roll Number\" #studentRollNo=\"ngModel\"\n          class=\"form-control\" required/>\n        <input type=\"text\" [(ngModel)]=\"studentModel.dob\" placeholder=\"Enter Date of Birth\" #studentDob=\"ngModel\"\n          class=\"form-control\" required/>\n        <input type=\"number\" [(ngModel)]=\"studentModel.mobileNumber\" placeholder=\"Enter Mobile Number\" #studentMobileNumber=\"ngModel\"\n          class=\"form-control\" required/>\n      </div>\n      <div class=\"col-sm-4\">\n       <select [(ngModel)]=\"studentModel.year\" class=\"form-control\" #studentYearOfStudy=\"ngModel\" \n          required>\n          <option value=\"{{ studentModel.year }}\" selected disabled>Select Year...</option>\n          <option *ngFor='let year of yearsOfStudies;let i = index' [ngValue]=\"year\">\n            {{ year }}\n          </option>\n        </select>\n        <select [(ngModel)]=\"studentModel.hostel\" class=\"form-control\" #addHostelSelect=\"ngModel\" required (click)=\"onHostelChange(addHostelSelect.value)\">\n          <option value=\"{{ studentModel.hostel }}\" selected disabled>Select Hostel...</option>\n          <option *ngFor='let hostel of hostels;let i = index' [ngValue]=\"hostel._id\">\n            {{ hostel.name }}\n          </option>\n        </select>\n        <span>You slected {{ selectedHostel.name }} as your hostel</span>\n        <input type=\"text\" [(ngModel)]=\"studentModel.email\" placeholder=\"Enter email Id if any\" #studentEmail=\"ngModel\"\n          class=\"form-control\" required/>\n          <input type=\"text\" [(ngModel)]=\"studentModel.yearOfJoining\" placeholder=\"Enter year Of joining\" #studentYearOfJoining=\"ngModel\"\n          class=\"form-control\" required/>\n      </div>\n    </div>\n    <div>\n      <button (click)=\"closeModal(modalId)\" class=\"btn btn-warning\" type=\"button\">Close</button>\n      <button class=\"btn btn-info\" (click)='updateStudent(studentModel._id)' *ngIf=\"editMode\" \n      type=\"button\" [disabled]=\"!studentName.valid || !studentRollNo.valid || !studentDob.valid || !studentMobileNumber.valid || !studentYearOfStudy.valid || !addHostelSelect.valid\">Update</button>\n      <button (click)=\"addStudent()\" class=\"btn btn-primary\" *ngIf=\"!editMode\" \n      type=\"button\" [disabled]=\"!studentName.valid || !studentRollNo.valid || !studentDob.valid || !studentMobileNumber.valid || !studentYearOfStudy.valid || !addHostelSelect.valid\">Submit</button>\n    </div>\n  \n  </app-modalpopup>\n  "

/***/ }),

/***/ "./src/app/University/students/students.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/University/students/students.component.ts ***!
  \***********************************************************/
/*! exports provided: StudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services.service */ "./src/app/University/services.service.ts");
/* harmony import */ var _modal_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-service.service */ "./src/app/University/modal-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentsComponent = /** @class */ (function () {
    function StudentsComponent(universityService, activeatedRoute, modalService) {
        var _this = this;
        this.universityService = universityService;
        this.activeatedRoute = activeatedRoute;
        this.modalService = modalService;
        this.students = [];
        this.newStudent = '';
        this.selectedStudent = '';
        this.collegeId = '';
        this.modalId = 'student-Model';
        this.editMode = false;
        this.selectedHostel = '';
        this.yearsOfStudies = ['Year I', 'Year II', 'Year III', 'Year IV'];
        this.hostels = [];
        this.studentModel = {
            "pic": "",
            "name": "",
            "college": "",
            "activeStatus": true,
            "rollno": "",
            "dob": "",
            "email": "",
            "mobileNumber": "",
            "year": "",
            "yearOfJoining": "",
            "hostel": ""
        };
        this.activeatedRoute.params.subscribe(function (college) {
            _this.collegeId = college.id;
        });
    }
    StudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.universityService.getStudentsByCollege(this.collegeId).subscribe(function (result) {
            console.log.apply(console, result.students);
            _this.students = result.students.filter(function (student) {
                return student;
            });
            // this.selectedStudent = this.students[0];
        });
        this.studentModel.college = this.collegeId;
        this.universityService.getHostelsByCollege(this.collegeId).subscribe(function (result) {
            console.log.apply(console, result.hostels);
            _this.hostels = result.hostels.filter(function (hostel) {
                return hostel;
            });
            // this.selectedHostel = this.hostels[0];
        });
    };
    StudentsComponent.prototype.addStudent = function () {
        var _this = this;
        this.universityService.addStudent(this.studentModel).subscribe(function (data) {
            console.log("add student " + JSON.stringify(data.result));
            _this.studentModel.name = "";
            data.result && _this.students.push(data.result);
            _this.closeModal(_this.modalId);
        });
    };
    StudentsComponent.prototype.editStudent = function (student) {
        var _this = this;
        this.editMode = true;
        this.universityService.getStudentsById(this.collegeId, student._id).subscribe(function (result) {
            _this.studentModel = Object.assign({}, result.student, {
                hostel: result.student.hostel.name
            });
            _this.studentModel['_id'] = result.student._id;
            _this.openModal(_this.modalId);
        });
    };
    StudentsComponent.prototype.updateStudent = function (studentId) {
        var _this = this;
        this.universityService.updateStudent(studentId, this.studentModel).subscribe(function (result) {
            console.log("updated student " + result.data);
            _this.studentModel.name = "";
            var matchStudent = _this.students.find(function (student) { return student._id == result.data._id; });
            var matchedIndex = _this.students.indexOf(matchStudent);
            _this.students = _this.students.slice(0, matchedIndex).concat([result.data], _this.students.slice(matchedIndex + 1));
            _this.closeModal(_this.modalId);
        });
    };
    StudentsComponent.prototype.disableStudent = function (student) {
        student.activeStatus = false;
        this.universityService.updateStudent(student._id, student).subscribe(function (result) {
            console.log("disabled the student " + result);
            student.activeStatus = false;
        });
    };
    StudentsComponent.prototype.enableStudent = function (student) {
        student.activeStatus = true;
        this.universityService.updateStudent(student._id, student).subscribe(function (result) {
            console.log("enabled the student " + result);
            student.activeStatus = true;
        });
    };
    //Students functionality completed
    StudentsComponent.prototype.onHostelChange = function (hostelId) {
        this.studentModel.hostel = hostelId;
    };
    StudentsComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var image = event.srcElement.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = function () {
            var base64data = reader.result;
            _this.studentModel.pic = "" + base64data;
        };
    };
    //Model related methods
    StudentsComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    StudentsComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
        this.editMode = false;
    };
    StudentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-students',
            template: __webpack_require__(/*! ./students.component.html */ "./src/app/University/students/students.component.html"),
            styles: [__webpack_require__(/*! ./students.component.css */ "./src/app/University/students/students.component.css")]
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _modal_service_service__WEBPACK_IMPORTED_MODULE_2__["ModalServiceService"]])
    ], StudentsComponent);
    return StudentsComponent;
}());



/***/ }),

/***/ "./src/app/University/university-nav/university-nav.component.css":
/*!************************************************************************!*\
  !*** ./src/app/University/university-nav/university-nav.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/University/university-nav/university-nav.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/University/university-nav/university-nav.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-stacked\" role=\"tablist\">\n  <li><a routerLink='country'>Country</a></li>\n  <li><a routerLink='state'>state</a></li>\n  <li><a routerLink='city'>city</a></li>\n</ul>\n<ul class=\"nav nav-pills nav-stacked\" role=\"tablist\">\n  <li><a routerLink='colleges'>Colleges</a></li>\n  \n</ul>\n  "

/***/ }),

/***/ "./src/app/University/university-nav/university-nav.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/University/university-nav/university-nav.component.ts ***!
  \***********************************************************************/
/*! exports provided: UniversityNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityNavComponent", function() { return UniversityNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UniversityNavComponent = /** @class */ (function () {
    function UniversityNavComponent() {
    }
    UniversityNavComponent.prototype.ngOnInit = function () {
    };
    UniversityNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-university-nav',
            template: __webpack_require__(/*! ./university-nav.component.html */ "./src/app/University/university-nav/university-nav.component.html"),
            styles: [__webpack_require__(/*! ./university-nav.component.css */ "./src/app/University/university-nav/university-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UniversityNavComponent);
    return UniversityNavComponent;
}());



/***/ }),

/***/ "./src/app/University/university-route/university-route.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/University/university-route/university-route.module.ts ***!
  \************************************************************************/
/*! exports provided: UniversityRouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityRouteModule", function() { return UniversityRouteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../college/college.component */ "./src/app/University/college/college.component.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../country/country.component */ "./src/app/University/country/country.component.ts");
/* harmony import */ var _state_state_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/state.component */ "./src/app/University/state/state.component.ts");
/* harmony import */ var _city_city_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../city/city.component */ "./src/app/University/city/city.component.ts");
/* harmony import */ var _university_university_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../university/university.component */ "./src/app/University/university/university.component.ts");
/* harmony import */ var _college_landing_college_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../college-landing/college-landing.component */ "./src/app/University/college-landing/college-landing.component.ts");
/* harmony import */ var _hostels_hostels_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hostels/hostels.component */ "./src/app/University/hostels/hostels.component.ts");
/* harmony import */ var _students_students_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../students/students.component */ "./src/app/University/students/students.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _university_university_component__WEBPACK_IMPORTED_MODULE_6__["UniversityComponent"],
        children: [
            {
                path: 'country',
                component: _country_country_component__WEBPACK_IMPORTED_MODULE_3__["CountryComponent"]
            },
            {
                path: 'state',
                component: _state_state_component__WEBPACK_IMPORTED_MODULE_4__["StateComponent"]
            },
            {
                path: 'city',
                component: _city_city_component__WEBPACK_IMPORTED_MODULE_5__["CityComponent"]
            },
            {
                path: 'colleges',
                component: _college_college_component__WEBPACK_IMPORTED_MODULE_2__["CollegeComponent"],
                children: []
            },
            {
                path: 'college/:id/show',
                component: _college_landing_college_landing_component__WEBPACK_IMPORTED_MODULE_7__["CollegeLandingComponent"]
            },
            {
                path: 'college/:id/hostels',
                component: _hostels_hostels_component__WEBPACK_IMPORTED_MODULE_8__["HostelsComponent"]
            },
            {
                path: 'college/:id/students',
                component: _students_students_component__WEBPACK_IMPORTED_MODULE_9__["StudentsComponent"]
            }
        ]
    }
];
//export const UniversityRouteModule: ModuleWithProviders = RouterModule.forChild(routes);
var UniversityRouteModule = /** @class */ (function () {
    function UniversityRouteModule() {
    }
    UniversityRouteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UniversityRouteModule);
    return UniversityRouteModule;
}());



/***/ }),

/***/ "./src/app/University/university.module.ts":
/*!*************************************************!*\
  !*** ./src/app/University/university.module.ts ***!
  \*************************************************/
/*! exports provided: UniversityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityModule", function() { return UniversityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _university_route_university_route_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./university-route/university-route.module */ "./src/app/University/university-route/university-route.module.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./college/college.component */ "./src/app/University/college/college.component.ts");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services.service */ "./src/app/University/services.service.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./country/country.component */ "./src/app/University/country/country.component.ts");
/* harmony import */ var _state_state_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/state.component */ "./src/app/University/state/state.component.ts");
/* harmony import */ var _city_city_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./city/city.component */ "./src/app/University/city/city.component.ts");
/* harmony import */ var _university_nav_university_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./university-nav/university-nav.component */ "./src/app/University/university-nav/university-nav.component.ts");
/* harmony import */ var _university_university_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./university/university.component */ "./src/app/University/university/university.component.ts");
/* harmony import */ var _modalpopup_modalpopup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modalpopup/modalpopup.component */ "./src/app/University/modalpopup/modalpopup.component.ts");
/* harmony import */ var _modal_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal-service.service */ "./src/app/University/modal-service.service.ts");
/* harmony import */ var _college_landing_college_landing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./college-landing/college-landing.component */ "./src/app/University/college-landing/college-landing.component.ts");
/* harmony import */ var _hostels_hostels_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hostels/hostels.component */ "./src/app/University/hostels/hostels.component.ts");
/* harmony import */ var _students_students_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./students/students.component */ "./src/app/University/students/students.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var UniversityModule = /** @class */ (function () {
    function UniversityModule() {
    }
    UniversityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _university_route_university_route_module__WEBPACK_IMPORTED_MODULE_3__["UniversityRouteModule"]
            ],
            declarations: [
                _college_college_component__WEBPACK_IMPORTED_MODULE_4__["CollegeComponent"],
                _country_country_component__WEBPACK_IMPORTED_MODULE_6__["CountryComponent"],
                _state_state_component__WEBPACK_IMPORTED_MODULE_7__["StateComponent"],
                _city_city_component__WEBPACK_IMPORTED_MODULE_8__["CityComponent"],
                _university_nav_university_nav_component__WEBPACK_IMPORTED_MODULE_9__["UniversityNavComponent"],
                _university_university_component__WEBPACK_IMPORTED_MODULE_10__["UniversityComponent"],
                _modalpopup_modalpopup_component__WEBPACK_IMPORTED_MODULE_11__["ModalpopupComponent"],
                _college_landing_college_landing_component__WEBPACK_IMPORTED_MODULE_13__["CollegeLandingComponent"],
                _hostels_hostels_component__WEBPACK_IMPORTED_MODULE_14__["HostelsComponent"],
                _students_students_component__WEBPACK_IMPORTED_MODULE_15__["StudentsComponent"]
            ],
            providers: [_services_service__WEBPACK_IMPORTED_MODULE_5__["ServicesService"], _modal_service_service__WEBPACK_IMPORTED_MODULE_12__["ModalServiceService"]]
        })
    ], UniversityModule);
    return UniversityModule;
}());



/***/ }),

/***/ "./src/app/University/university/university.component.css":
/*!****************************************************************!*\
  !*** ./src/app/University/university/university.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/University/university/university.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/University/university/university.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Please select options from the side bar to start adding the details.</h4>\n<div class=\"row\">\n    <div class=\"col-sm-2\" ><app-university-nav></app-university-nav></div>\n    <div class=\"col-sm-10\" >\n      <router-outlet></router-outlet>\n    </div>\n</div>\n\n\n\n<!-- <select [(ngModel)]=\"selectedCity\" class=\"form-control\">\n    <option *ngFor='let city of cities;let i = index' [ngValue]=\"city\" [attr.selected]=\"i==0?selected:''\">\n        {{ city.name }}\n    </option>\n  </select>\n\n<span>You slected {{ selectedCity.name }} as your city</span> -->"

/***/ }),

/***/ "./src/app/University/university/university.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/University/university/university.component.ts ***!
  \***************************************************************/
/*! exports provided: UniversityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityComponent", function() { return UniversityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UniversityComponent = /** @class */ (function () {
    function UniversityComponent() {
    }
    UniversityComponent.prototype.ngOnInit = function () {
    };
    UniversityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-university',
            template: __webpack_require__(/*! ./university.component.html */ "./src/app/University/university/university.component.html"),
            styles: [__webpack_require__(/*! ./university.component.css */ "./src/app/University/university/university.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UniversityComponent);
    return UniversityComponent;
}());



/***/ })

}]);
//# sourceMappingURL=University-university-module.js.map