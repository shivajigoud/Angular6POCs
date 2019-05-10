(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ngrxpoc-ngrxpoc-module"],{

/***/ "./node_modules/@ngrx/store/fesm5/store.js":
/*!*************************************************!*\
  !*** ./node_modules/@ngrx/store/fesm5/store.js ***!
  \*************************************************/
/*! exports provided: ɵngrx_modules_store_store_c, ɵngrx_modules_store_store_d, ɵngrx_modules_store_store_e, ɵngrx_modules_store_store_f, ɵngrx_modules_store_store_g, ɵngrx_modules_store_store_b, Store, select, combineReducers, compose, createReducerFactory, ActionsSubject, INIT, ReducerManager, ReducerObservable, ReducerManagerDispatcher, UPDATE, ScannedActionsSubject, createSelector, createSelectorFactory, createFeatureSelector, defaultMemoize, defaultStateFn, resultMemoize, State, StateObservable, reduceState, INITIAL_STATE, _REDUCER_FACTORY, REDUCER_FACTORY, _INITIAL_REDUCERS, INITIAL_REDUCERS, STORE_FEATURES, _INITIAL_STATE, META_REDUCERS, _STORE_REDUCERS, _FEATURE_REDUCERS, FEATURE_REDUCERS, _FEATURE_REDUCERS_TOKEN, StoreModule, StoreRootModule, StoreFeatureModule, _initialStateFactory, _createStoreReducers, _createFeatureReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_c", function() { return ACTIONS_SUBJECT_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_d", function() { return REDUCER_MANAGER_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_e", function() { return SCANNED_ACTIONS_SUBJECT_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_f", function() { return isEqualCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_g", function() { return STATE_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_store_b", function() { return STORE_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducerFactory", function() { return createReducerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsSubject", function() { return ActionsSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT", function() { return INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducerManager", function() { return ReducerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducerObservable", function() { return ReducerObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducerManagerDispatcher", function() { return ReducerManagerDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannedActionsSubject", function() { return ScannedActionsSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return createSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorFactory", function() { return createSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeatureSelector", function() { return createFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMemoize", function() { return defaultMemoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultStateFn", function() { return defaultStateFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultMemoize", function() { return resultMemoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateObservable", function() { return StateObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceState", function() { return reduceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_REDUCER_FACTORY", function() { return _REDUCER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDUCER_FACTORY", function() { return REDUCER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_INITIAL_REDUCERS", function() { return _INITIAL_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_REDUCERS", function() { return INITIAL_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_FEATURES", function() { return STORE_FEATURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_INITIAL_STATE", function() { return _INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META_REDUCERS", function() { return META_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_STORE_REDUCERS", function() { return _STORE_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_FEATURE_REDUCERS", function() { return _FEATURE_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURE_REDUCERS", function() { return FEATURE_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_FEATURE_REDUCERS_TOKEN", function() { return _FEATURE_REDUCERS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRootModule", function() { return StoreRootModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFeatureModule", function() { return StoreFeatureModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_initialStateFactory", function() { return _initialStateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_createStoreReducers", function() { return _createStoreReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_createFeatureReducers", function() { return _createFeatureReducers; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license NgRx 6.1.0
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */




var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var INIT = '@ngrx/store/init';
var ActionsSubject = /** @class */ (function (_super) {
    __extends(ActionsSubject, _super);
    function ActionsSubject() {
        return _super.call(this, { type: INIT }) || this;
    }
    ActionsSubject.prototype.next = function (action) {
        if (typeof action === 'undefined') {
            throw new TypeError("Actions must be objects");
        }
        else if (typeof action.type === 'undefined') {
            throw new TypeError("Actions must have a type property");
        }
        _super.prototype.next.call(this, action);
    };
    ActionsSubject.prototype.complete = function () {
        /* noop */
    };
    ActionsSubject.prototype.ngOnDestroy = function () {
        _super.prototype.complete.call(this);
    };
    ActionsSubject.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    ActionsSubject.ctorParameters = function () { return []; };
    return ActionsSubject;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]));
var ACTIONS_SUBJECT_PROVIDERS = [ActionsSubject];

var _INITIAL_STATE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Internal Initial State');
var INITIAL_STATE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Initial State');
var REDUCER_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Reducer Factory');
var _REDUCER_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Reducer Factory Provider');
var INITIAL_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Initial Reducers');
var _INITIAL_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Internal Initial Reducers');
var META_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Meta Reducers');
var STORE_FEATURES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Store Features');
var _STORE_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Internal Store Reducers');
var _FEATURE_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Internal Feature Reducers');
var _FEATURE_REDUCERS_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Internal Feature Reducers Token');
var FEATURE_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/store Feature Reducers');

var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
function combineReducers(reducers, initialState) {
    if (initialState === void 0) { initialState = {}; }
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }
    var finalReducerKeys = Object.keys(finalReducers);
    return function combination(state, action) {
        state = state === undefined ? initialState : state;
        var hasChanged = false;
        var nextState = {};
        for (var i = 0; i < finalReducerKeys.length; i++) {
            var key = finalReducerKeys[i];
            var reducer = finalReducers[key];
            var previousStateForKey = state[key];
            var nextStateForKey = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
    };
}
function omit(object, keyToRemove) {
    return Object.keys(object)
        .filter(function (key) { return key !== keyToRemove; })
        .reduce(function (result, key) {
        return Object.assign(result, (_a = {}, _a[key] = object[key], _a));
        var _a;
    }, {});
}
function compose() {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i] = arguments[_i];
    }
    return function (arg) {
        if (functions.length === 0) {
            return arg;
        }
        var last = functions[functions.length - 1];
        var rest = functions.slice(0, -1);
        return rest.reduceRight(function (composed, fn) { return fn(composed); }, last(arg));
    };
}
function createReducerFactory(reducerFactory, metaReducers) {
    if (Array.isArray(metaReducers) && metaReducers.length > 0) {
        return compose.apply(null, __spread(metaReducers, [reducerFactory]));
    }
    return reducerFactory;
}
function createFeatureReducerFactory(metaReducers) {
    var reducerFactory = Array.isArray(metaReducers) && metaReducers.length > 0
        ? compose.apply(void 0, __spread(metaReducers)) : function (r) { return r; };
    return function (reducer, initialState) {
        reducer = reducerFactory(reducer);
        return function (state, action) {
            state = state === undefined ? initialState : state;
            return reducer(state, action);
        };
    };
}

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var ReducerObservable = /** @class */ (function (_super) {
    __extends$1(ReducerObservable, _super);
    function ReducerObservable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReducerObservable;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]));
var ReducerManagerDispatcher = /** @class */ (function (_super) {
    __extends$1(ReducerManagerDispatcher, _super);
    function ReducerManagerDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReducerManagerDispatcher;
}(ActionsSubject));
var UPDATE = '@ngrx/store/update-reducers';
var ReducerManager = /** @class */ (function (_super) {
    __extends$1(ReducerManager, _super);
    function ReducerManager(dispatcher, initialState, reducers, reducerFactory) {
        var _this = _super.call(this, reducerFactory(reducers, initialState)) || this;
        _this.dispatcher = dispatcher;
        _this.initialState = initialState;
        _this.reducers = reducers;
        _this.reducerFactory = reducerFactory;
        return _this;
    }
    ReducerManager.prototype.addFeature = function (feature) {
        this.addFeatures([feature]);
    };
    ReducerManager.prototype.addFeatures = function (features) {
        var reducers = features.reduce(function (reducerDict, _a) {
            var reducers = _a.reducers, reducerFactory = _a.reducerFactory, metaReducers = _a.metaReducers, initialState = _a.initialState, key = _a.key;
            var reducer = typeof reducers === 'function'
                ? createFeatureReducerFactory(metaReducers)(reducers, initialState)
                : createReducerFactory(reducerFactory, metaReducers)(reducers, initialState);
            reducerDict[key] = reducer;
            return reducerDict;
        }, {});
        this.addReducers(reducers);
    };
    ReducerManager.prototype.removeFeature = function (feature) {
        this.removeFeatures([feature]);
    };
    ReducerManager.prototype.removeFeatures = function (features) {
        this.removeReducers(features.map(function (p) { return p.key; }));
    };
    ReducerManager.prototype.addReducer = function (key, reducer) {
        this.addReducers((_a = {}, _a[key] = reducer, _a));
        var _a;
    };
    ReducerManager.prototype.addReducers = function (reducers) {
        this.reducers = __assign({}, this.reducers, reducers);
        this.updateReducers(Object.keys(reducers));
    };
    ReducerManager.prototype.removeReducer = function (featureKey) {
        this.removeReducers([featureKey]);
    };
    ReducerManager.prototype.removeReducers = function (featureKeys) {
        var _this = this;
        featureKeys.forEach(function (key) {
            _this.reducers = omit(_this.reducers, key) /*TODO(#823)*/;
        });
        this.updateReducers(featureKeys);
    };
    ReducerManager.prototype.updateReducers = function (featureKeys) {
        var _this = this;
        this.next(this.reducerFactory(this.reducers, this.initialState));
        featureKeys.forEach(function (feature) {
            _this.dispatcher.next({
                type: UPDATE,
                feature: feature,
            });
        });
    };
    ReducerManager.prototype.ngOnDestroy = function () {
        this.complete();
    };
    ReducerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    ReducerManager.ctorParameters = function () { return [
        { type: ReducerManagerDispatcher, },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [INITIAL_STATE,] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [INITIAL_REDUCERS,] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [REDUCER_FACTORY,] },] },
    ]; };
    return ReducerManager;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]));
var REDUCER_MANAGER_PROVIDERS = [
    ReducerManager,
    { provide: ReducerObservable, useExisting: ReducerManager },
    { provide: ReducerManagerDispatcher, useExisting: ActionsSubject },
];

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ScannedActionsSubject = /** @class */ (function (_super) {
    __extends$2(ScannedActionsSubject, _super);
    function ScannedActionsSubject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScannedActionsSubject.prototype.ngOnDestroy = function () {
        this.complete();
    };
    ScannedActionsSubject.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return ScannedActionsSubject;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]));
var SCANNED_ACTIONS_SUBJECT_PROVIDERS = [
    ScannedActionsSubject,
];

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read$1 = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var StateObservable = /** @class */ (function (_super) {
    __extends$3(StateObservable, _super);
    function StateObservable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StateObservable;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]));
var State = /** @class */ (function (_super) {
    __extends$3(State, _super);
    function State(actions$, reducer$, scannedActions, initialState) {
        var _this = _super.call(this, initialState) || this;
        var actionsOnQueue$ = actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_1__["queueScheduler"]));
        var withLatestReducer$ = actionsOnQueue$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(reducer$));
        var seed = { state: initialState };
        var stateAndAction$ = withLatestReducer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(reduceState, seed));
        _this.stateSubscription = stateAndAction$.subscribe(function (_a) {
            var state = _a.state, action = _a.action;
            _this.next(state);
            scannedActions.next(action);
        });
        return _this;
    }
    State.prototype.ngOnDestroy = function () {
        this.stateSubscription.unsubscribe();
        this.complete();
    };
    State.INIT = INIT;
    State.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    State.ctorParameters = function () { return [
        { type: ActionsSubject, },
        { type: ReducerObservable, },
        { type: ScannedActionsSubject, },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [INITIAL_STATE,] },] },
    ]; };
    return State;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]));
function reduceState(stateActionPair, _a) {
    if (stateActionPair === void 0) { stateActionPair = { state: undefined }; }
    var _b = __read$1(_a, 2), action = _b[0], reducer = _b[1];
    var state = stateActionPair.state;
    return { state: reducer(state, action), action: action };
}
var STATE_PROVIDERS = [
    State,
    { provide: StateObservable, useExisting: State },
];

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read$2 = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread$1 = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$2(arguments[i]));
    return ar;
};
var Store = /** @class */ (function (_super) {
    __extends$4(Store, _super);
    function Store(state$, actionsObserver, reducerManager) {
        var _this = _super.call(this) || this;
        _this.actionsObserver = actionsObserver;
        _this.reducerManager = reducerManager;
        _this.source = state$;
        return _this;
    }
    Store.prototype.select = function (pathOrMapFn) {
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        return select.call.apply(select, __spread$1([null, pathOrMapFn], paths))(this);
    };
    Store.prototype.lift = function (operator) {
        var store = new Store(this, this.actionsObserver, this.reducerManager);
        store.operator = operator;
        return store;
    };
    Store.prototype.dispatch = function (action) {
        this.actionsObserver.next(action);
    };
    Store.prototype.next = function (action) {
        this.actionsObserver.next(action);
    };
    Store.prototype.error = function (err) {
        this.actionsObserver.error(err);
    };
    Store.prototype.complete = function () {
        this.actionsObserver.complete();
    };
    Store.prototype.addReducer = function (key, reducer) {
        this.reducerManager.addReducer(key, reducer);
    };
    // Once TS is >= 2.8 replace with <Key extends Extract<keyof T, string>>
    // Once TS is >= 2.8 replace with <Key extends Extract<keyof T, string>>
    Store.prototype.removeReducer = 
    // Once TS is >= 2.8 replace with <Key extends Extract<keyof T, string>>
    function (key) {
        // TS2.9: keyof T is string|number|symbol, explicitly cast to string to fix.
        this.reducerManager.removeReducer(key);
    };
    Store.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    Store.ctorParameters = function () { return [
        { type: StateObservable, },
        { type: ActionsSubject, },
        { type: ReducerManager, },
    ]; };
    return Store;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]));
var STORE_PROVIDERS = [Store];
function select(pathOrMapFn, propsOrPath) {
    var paths = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        paths[_i - 2] = arguments[_i];
    }
    return function selectOperator(source$) {
        var mapped$;
        if (typeof pathOrMapFn === 'string') {
            var pathSlices = __spread$1([propsOrPath], paths).filter(Boolean);
            mapped$ = source$.pipe(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"].apply(void 0, __spread$1([pathOrMapFn], pathSlices)));
        }
        else if (typeof pathOrMapFn === 'function') {
            mapped$ = source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (source) { return pathOrMapFn(source, propsOrPath); }));
        }
        else {
            throw new TypeError("Unexpected type '" + typeof pathOrMapFn + "' in select operator," +
                " expected 'string' or 'function'");
        }
        return mapped$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    };
}

var __read$3 = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread$2 = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$3(arguments[i]));
    return ar;
};
function isEqualCheck(a, b) {
    return a === b;
}
function isArgumentsChanged(args, lastArguments, comparator) {
    for (var i = 0; i < args.length; i++) {
        if (!comparator(args[i], lastArguments[i])) {
            return true;
        }
    }
    return false;
}
function resultMemoize(projectionFn, isResultEqual) {
    return defaultMemoize(projectionFn, isEqualCheck, isResultEqual);
}
function defaultMemoize(projectionFn, isArgumentsEqual, isResultEqual) {
    if (isArgumentsEqual === void 0) { isArgumentsEqual = isEqualCheck; }
    if (isResultEqual === void 0) { isResultEqual = isEqualCheck; }
    var lastArguments = null;
    // tslint:disable-next-line:no-any anything could be the result.
    var lastResult = null;
    function reset() {
        lastArguments = null;
        lastResult = null;
    }
    // tslint:disable-next-line:no-any anything could be the result.
    function memoized() {
        if (!lastArguments) {
            lastResult = projectionFn.apply(null, arguments);
            lastArguments = arguments;
            return lastResult;
        }
        if (!isArgumentsChanged(arguments, lastArguments, isArgumentsEqual)) {
            return lastResult;
        }
        var newResult = projectionFn.apply(null, arguments);
        if (isResultEqual(lastResult, newResult)) {
            return lastResult;
        }
        lastResult = newResult;
        lastArguments = arguments;
        return newResult;
    }
    return { memoized: memoized, reset: reset };
}
function createSelector() {
    var input = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        input[_i] = arguments[_i];
    }
    return createSelectorFactory(defaultMemoize).apply(void 0, __spread$2(input));
}
function defaultStateFn(state, selectors, props, memoizedProjector) {
    if (props === undefined) {
        var args_1 = selectors.map(function (fn) { return fn(state); });
        return memoizedProjector.memoized.apply(null, args_1);
    }
    var args = selectors.map(function (fn) {
        return fn(state, props);
    });
    return memoizedProjector.memoized.apply(null, __spread$2(args, [props]));
}
function createSelectorFactory(memoize, options) {
    if (options === void 0) { options = {
        stateFn: defaultStateFn,
    }; }
    return function () {
        var input = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            input[_i] = arguments[_i];
        }
        var args = input;
        if (Array.isArray(args[0])) {
            var _a = __read$3(args), head = _a[0], tail = _a.slice(1);
            args = __spread$2(head, tail);
        }
        var selectors = args.slice(0, args.length - 1);
        var projector = args[args.length - 1];
        var memoizedSelectors = selectors.filter(function (selector) {
            return selector.release && typeof selector.release === 'function';
        });
        var memoizedProjector = memoize(function () {
            var selectors = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                selectors[_i] = arguments[_i];
            }
            return projector.apply(null, selectors);
        });
        var memoizedState = defaultMemoize(function (state, props) {
            // createSelector works directly on state
            // e.g. createSelector((state, props) => ...)
            if (selectors.length === 0) {
                return projector.apply(null, [state, props]);
            }
            return options.stateFn.apply(null, [
                state,
                selectors,
                props,
                memoizedProjector,
            ]);
        });
        function release() {
            memoizedState.reset();
            memoizedProjector.reset();
            memoizedSelectors.forEach(function (selector) { return selector.release(); });
        }
        return Object.assign(memoizedState.memoized, {
            release: release,
            projector: memoizedProjector.memoized,
        });
    };
}
function createFeatureSelector(featureName) {
    return createSelector(function (state) { return state[featureName]; }, function (featureState) { return featureState; });
}

var __assign$1 = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var StoreRootModule = /** @class */ (function () {
    function StoreRootModule(actions$, reducer$, scannedActions$, store) {
    }
    StoreRootModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] }
    ];
    /** @nocollapse */
    StoreRootModule.ctorParameters = function () { return [
        { type: ActionsSubject, },
        { type: ReducerObservable, },
        { type: ScannedActionsSubject, },
        { type: Store, },
    ]; };
    return StoreRootModule;
}());
var StoreFeatureModule = /** @class */ (function () {
    function StoreFeatureModule(features, featureReducers, reducerManager, root) {
        this.features = features;
        this.featureReducers = featureReducers;
        this.reducerManager = reducerManager;
        var feats = features.map(function (feature, index) {
            var featureReducerCollection = featureReducers.shift();
            var reducers = featureReducerCollection[index];
            return __assign$1({}, feature, { reducers: reducers, initialState: _initialStateFactory(feature.initialState) });
        });
        reducerManager.addFeatures(feats);
    }
    StoreFeatureModule.prototype.ngOnDestroy = function () {
        this.reducerManager.removeFeatures(this.features);
    };
    StoreFeatureModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] }
    ];
    /** @nocollapse */
    StoreFeatureModule.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [STORE_FEATURES,] },] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [FEATURE_REDUCERS,] },] },
        { type: ReducerManager, },
        { type: StoreRootModule, },
    ]; };
    return StoreFeatureModule;
}());
var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule.forRoot = function (reducers, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: StoreRootModule,
            providers: [
                { provide: _INITIAL_STATE, useValue: config.initialState },
                {
                    provide: INITIAL_STATE,
                    useFactory: _initialStateFactory,
                    deps: [_INITIAL_STATE],
                },
                { provide: _INITIAL_REDUCERS, useValue: reducers },
                {
                    provide: _STORE_REDUCERS,
                    useExisting: reducers instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"] ? reducers : _INITIAL_REDUCERS,
                },
                {
                    provide: INITIAL_REDUCERS,
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _INITIAL_REDUCERS, [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"](_STORE_REDUCERS)]],
                    useFactory: _createStoreReducers,
                },
                {
                    provide: META_REDUCERS,
                    useValue: config.metaReducers ? config.metaReducers : [],
                },
                {
                    provide: _REDUCER_FACTORY,
                    useValue: config.reducerFactory
                        ? config.reducerFactory
                        : combineReducers,
                },
                {
                    provide: REDUCER_FACTORY,
                    deps: [_REDUCER_FACTORY, META_REDUCERS],
                    useFactory: createReducerFactory,
                },
                ACTIONS_SUBJECT_PROVIDERS,
                REDUCER_MANAGER_PROVIDERS,
                SCANNED_ACTIONS_SUBJECT_PROVIDERS,
                STATE_PROVIDERS,
                STORE_PROVIDERS,
            ],
        };
    };
    StoreModule.forFeature = function (featureName, reducers, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: StoreFeatureModule,
            providers: [
                {
                    provide: STORE_FEATURES,
                    multi: true,
                    useValue: {
                        key: featureName,
                        reducerFactory: config.reducerFactory
                            ? config.reducerFactory
                            : combineReducers,
                        metaReducers: config.metaReducers ? config.metaReducers : [],
                        initialState: config.initialState,
                    },
                },
                { provide: _FEATURE_REDUCERS, multi: true, useValue: reducers },
                {
                    provide: _FEATURE_REDUCERS_TOKEN,
                    multi: true,
                    useExisting: reducers instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"] ? reducers : _FEATURE_REDUCERS,
                },
                {
                    provide: FEATURE_REDUCERS,
                    multi: true,
                    deps: [
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
                        _FEATURE_REDUCERS,
                        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"](_FEATURE_REDUCERS_TOKEN)],
                    ],
                    useFactory: _createFeatureReducers,
                },
            ],
        };
    };
    StoreModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] }
    ];
    return StoreModule;
}());
function _createStoreReducers(injector, reducers, tokenReducers) {
    return reducers instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"] ? injector.get(reducers) : reducers;
}
function _createFeatureReducers(injector, reducerCollection, tokenReducerCollection) {
    var reducers = reducerCollection.map(function (reducer, index) {
        return reducer instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"] ? injector.get(reducer) : reducer;
    });
    return reducers;
}
function _initialStateFactory(initialState) {
    if (typeof initialState === 'function') {
        return initialState();
    }
    return initialState;
}

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=store.js.map


/***/ }),

/***/ "./src/app/ngrxpoc/actions/tutorial.action.ts":
/*!****************************************************!*\
  !*** ./src/app/ngrxpoc/actions/tutorial.action.ts ***!
  \****************************************************/
/*! exports provided: ADD_TUTORIAL, REMOVE_TUTORIAL, AddTutorial, removeTutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TUTORIAL", function() { return ADD_TUTORIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_TUTORIAL", function() { return REMOVE_TUTORIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTutorial", function() { return AddTutorial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTutorial", function() { return removeTutorial; });
var ADD_TUTORIAL = '[Tutorial] Add';
var REMOVE_TUTORIAL = '[Tutorial] Remove';
var AddTutorial = /** @class */ (function () {
    function AddTutorial(payload) {
        this.payload = payload;
        this.type = ADD_TUTORIAL;
    }
    return AddTutorial;
}());

var removeTutorial = /** @class */ (function () {
    function removeTutorial(payload) {
        this.payload = payload;
        this.type = REMOVE_TUTORIAL;
    }
    return removeTutorial;
}());



/***/ }),

/***/ "./src/app/ngrxpoc/create/create.component.css":
/*!*****************************************************!*\
  !*** ./src/app/ngrxpoc/create/create.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ngrxpoc/create/create.component.html":
/*!******************************************************!*\
  !*** ./src/app/ngrxpoc/create/create.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-4\">\n  <form #todoTutForm=\"ngForm\" (ngSubmit)='addTutorial(name,url)' class=\"form-row\">\n    <div class=\"cal-auto\">\n      <input type=\"text\" #name=\"ngModel\" [(ngModel)]=\"model.name\" placeholder=\"Name  of the  tutorial\" required name=\"name\"\n        pattern=\"^[a-zA-Z0-9 ]+$\" class=\"form-control\" />\n    </div>\n    <div class=\"cal-auto\"><input type=\"text\" #url=\"ngModel\" [(ngModel)]=\"model.url\" placeholder=\"URI  of the  tutorial\"\n        required pattern=\"^[a-z]{4,5}[:\\/\\/]{3}[www]{3}[\\.]{1}[a-z]+[\\.]{1}[a-z0-9.]{1,6}$\" name=\"url\" class=\"form-control\" />\n    </div><button type=\"submit\" [disabled]=\"!todoTutForm.valid\" class=\"btn btn-primary\">Add Tutorial</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/ngrxpoc/create/create.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ngrxpoc/create/create.component.ts ***!
  \****************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_tutorial_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/tutorial.action */ "./src/app/ngrxpoc/actions/tutorial.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = /** @class */ (function () {
    function CreateComponent(store) {
        this.store = store;
        this.model = {
            id: 1,
            name: "",
            url: ""
        };
        this.counter = 1;
    }
    CreateComponent.prototype.addTutorial = function (name, url) {
        this.store.dispatch(new _actions_tutorial_action__WEBPACK_IMPORTED_MODULE_2__["AddTutorial"]({ id: ++this.counter, name: name.value, url: url.value }));
        this.model = {
            id: 1,
            name: "",
            url: ""
        };
    };
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/ngrxpoc/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/ngrxpoc/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/ngrxpoc/ngrdpoc-home/ngrdpoc-home.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/ngrxpoc/ngrdpoc-home/ngrdpoc-home.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ngrxpoc/ngrdpoc-home/ngrdpoc-home.component.html":
/*!******************************************************************!*\
  !*** ./src/app/ngrxpoc/ngrdpoc-home/ngrdpoc-home.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Following examples shows the NGRX v4.x with Angular 6.x</h4>\n\n<div class=\"card\">\n        <div class=\"card-body\">\n          <h3 class=\"card-title\">Todos App</h3>\n          <h6 class=\"card-subtitle mb2 text-muted\">Using Angular V4 and Redux V4</h6>\n          <app-todo-overview></app-todo-overview>\n          <app-todo-list></app-todo-list>\n          \n        </div>\n      </div>\n \n<div class=\"card\">\n  <div class=\"card-body\">\n  <h3 class=\"card-title\">\n    Tutorial App \n  </h3>\n  <div class=\"row\">\n  <app-create></app-create>\n  <app-read></app-read>\n</div>\n  <div>\n   \n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ngrxpoc/ngrdpoc-home/ngrdpoc-home.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ngrxpoc/ngrdpoc-home/ngrdpoc-home.component.ts ***!
  \****************************************************************/
/*! exports provided: NgrdpocHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrdpocHomeComponent", function() { return NgrdpocHomeComponent; });
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

var NgrdpocHomeComponent = /** @class */ (function () {
    function NgrdpocHomeComponent() {
    }
    NgrdpocHomeComponent.prototype.ngOnInit = function () {
    };
    NgrdpocHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngrdpoc-home',
            template: __webpack_require__(/*! ./ngrdpoc-home.component.html */ "./src/app/ngrxpoc/ngrdpoc-home/ngrdpoc-home.component.html"),
            styles: [__webpack_require__(/*! ./ngrdpoc-home.component.css */ "./src/app/ngrxpoc/ngrdpoc-home/ngrdpoc-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NgrdpocHomeComponent);
    return NgrdpocHomeComponent;
}());



/***/ }),

/***/ "./src/app/ngrxpoc/ngrx-route/ngrx-route.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/ngrxpoc/ngrx-route/ngrx-route.module.ts ***!
  \*********************************************************/
/*! exports provided: NgrxRouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxRouteModule", function() { return NgrxRouteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrdpoc_home_ngrdpoc_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ngrdpoc-home/ngrdpoc-home.component */ "./src/app/ngrxpoc/ngrdpoc-home/ngrdpoc-home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _ngrdpoc_home_ngrdpoc_home_component__WEBPACK_IMPORTED_MODULE_3__["NgrdpocHomeComponent"]
    }
];
var NgrxRouteModule = /** @class */ (function () {
    function NgrxRouteModule() {
    }
    NgrxRouteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], NgrxRouteModule);
    return NgrxRouteModule;
}());



/***/ }),

/***/ "./src/app/ngrxpoc/ngrxpoc.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ngrxpoc/ngrxpoc.module.ts ***!
  \*******************************************/
/*! exports provided: NGRXPocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGRXPocModule", function() { return NGRXPocModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_route_ngrx_route_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngrx-route/ngrx-route.module */ "./src/app/ngrxpoc/ngrx-route/ngrx-route.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _reducers_tutorial_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/tutorial.reducer */ "./src/app/ngrxpoc/reducers/tutorial.reducer.ts");
/* harmony import */ var _todo_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo.store */ "./src/app/ngrxpoc/todo.store.ts");
/* harmony import */ var _read_read_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./read/read.component */ "./src/app/ngrxpoc/read/read.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create/create.component */ "./src/app/ngrxpoc/create/create.component.ts");
/* harmony import */ var _todo_overview_todo_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo-overview/todo-overview.component */ "./src/app/ngrxpoc/todo-overview/todo-overview.component.ts");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/ngrxpoc/todo-list/todo-list.component.ts");
/* harmony import */ var _ngrdpoc_home_ngrdpoc_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ngrdpoc-home/ngrdpoc-home.component */ "./src/app/ngrxpoc/ngrdpoc-home/ngrdpoc-home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var NGRXPocModule = /** @class */ (function () {
    function NGRXPocModule() {
    }
    NGRXPocModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({
                    tutorial: _reducers_tutorial_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"],
                    apptodos: _todo_store__WEBPACK_IMPORTED_MODULE_6__["todoReducer"]
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ngrx_route_ngrx_route_module__WEBPACK_IMPORTED_MODULE_2__["NgrxRouteModule"]
            ],
            declarations: [
                _read_read_component__WEBPACK_IMPORTED_MODULE_7__["ReadComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"],
                _todo_overview_todo_overview_component__WEBPACK_IMPORTED_MODULE_9__["TodoOverviewComponent"],
                _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_10__["TodoListComponent"],
                _ngrdpoc_home_ngrdpoc_home_component__WEBPACK_IMPORTED_MODULE_11__["NgrdpocHomeComponent"],
            ]
        })
    ], NGRXPocModule);
    return NGRXPocModule;
}());



/***/ }),

/***/ "./src/app/ngrxpoc/read/read.component.css":
/*!*************************************************!*\
  !*** ./src/app/ngrxpoc/read/read.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ngrxpoc/read/read.component.html":
/*!**************************************************!*\
  !*** ./src/app/ngrxpoc/read/read.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-8\">\n    <table class=\"table\">\n        <thead class=\"thead-inverse\">\n          <tr>\n            <th>Tutorail#</th>\n            <th>Tutorial Name</th>\n            <th>Tutorial Link</th>\n            \n          </tr>\n        </thead>\n        <tbody *ngIf=\"tutorials.length!=0\">\n          <tr *ngFor='let tutorial of tutorials | async' >\n            <td>{{ tutorial.id }}</td>\n            <td>{{ tutorial.name }}</td>\n            <td><a [href]='tutorial.url' target='_blank'>{{ tutorial.url }}</a></td>\n           \n          </tr>\n        </tbody>\n      </table>\n  <!-- <ul>\n    <li *ngFor='let tutorial of tutorials | async'>\n      <a [href]='tutorial.url' target='_blank'>{{ tutorial.name }}</a>\n    </li>\n  </ul> -->\n</div>\n"

/***/ }),

/***/ "./src/app/ngrxpoc/read/read.component.ts":
/*!************************************************!*\
  !*** ./src/app/ngrxpoc/read/read.component.ts ***!
  \************************************************/
/*! exports provided: ReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadComponent", function() { return ReadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReadComponent = /** @class */ (function () {
    function ReadComponent(store) {
        this.store = store;
        this.tutorials = store.select('tutorial');
    }
    ReadComponent.prototype.ngOnInit = function () {
    };
    ReadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-read',
            template: __webpack_require__(/*! ./read.component.html */ "./src/app/ngrxpoc/read/read.component.html"),
            styles: [__webpack_require__(/*! ./read.component.css */ "./src/app/ngrxpoc/read/read.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ReadComponent);
    return ReadComponent;
}());



/***/ }),

/***/ "./src/app/ngrxpoc/reducers/tutorial.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/ngrxpoc/reducers/tutorial.reducer.ts ***!
  \******************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_tutorial_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/tutorial.action */ "./src/app/ngrxpoc/actions/tutorial.action.ts");

var initialState = {
    id: 1,
    name: 'Angular Tutorial',
    url: 'https://angular.io/tutorial'
};
function reducer(state, action) {
    if (state === void 0) { state = [initialState]; }
    switch (action.type) {
        case _actions_tutorial_action__WEBPACK_IMPORTED_MODULE_0__["ADD_TUTORIAL"]:
            console.log("add tutorial" + JSON.stringify(state));
            return state.concat([action.payload]);
        //return [...state,action.payload];
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/ngrxpoc/todo-list/todo-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ngrxpoc/todo-list/todo-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".completed{\r\n    background:#d7f5d4;\r\n}\r\n.thead-inverse{\r\n    color:#fefefe;\r\n    background:#010101;\r\n}\r\n"

/***/ }),

/***/ "./src/app/ngrxpoc/todo-list/todo-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/ngrxpoc/todo-list/todo-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n\n  <div class=\"col-sm-3\">\n      <h5>Create Todo:</h5>\n      <form #todoForm=\"ngForm\" (ngSubmit)='onSubmit()'>\n          <div class=\"form-row\">\n            <div class=\"cal-auto\">\n              <input type=\"text\" \n                    class=\"form-control\" \n                    placeholder=\"Description\" \n                    id=\"description\"\n                    name=\"description\" \n                    #description=\"ngModel\" \n                    [(ngModel)]=\"model.description\" pattern=\"^[a-zA-Z0-9 ]+$\" required>\n            </div>\n            <div class=\"cal-auto\">\n              <input type=\"text\" \n                    class=\"form-control\" \n                    placeholder=\"Responsible\" \n                    id=\"responsible\"\n                    name=\"responsible\" \n                    #responsible=\"ngModel\" \n                    [(ngModel)]=\"model.responsible\" pattern=\"^[a-zA-Z0-9 ]+$\" required>\n            </div>\n            <div class=\"cal-auto\">\n              <select name=\"priority\" \n                      id=\"priority\" \n                      class=\"form-control\"\n                      #priority=\"ngModel\"\n                      [(ngModel)]=\"model.priority\">\n                      <option value=\"low\">Low</option>\n                      <option value=\"medium\">Medium</option>\n                      <option value=\"high\">High</option> \n              </select>\n            </div>\n            <div class=\"cal-auto\">\n              <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!todoForm.valid\">Create Todo</button>\n            </div>\n          </div>\n        </form>\n  </div>\n<div class=\"col-sm-9\">\n    <h5>Todos List:</h5>\n    <div >\n      <table class=\"table\">\n        <thead class=\"thead-inverse\">\n          <tr>\n            <th>Todo#</th>\n            <th>Description</th>\n            <th>Responsible</th>\n            <th>Priority</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"todosLength!=0\">\n          <tr *ngFor='let todo of todos' (click)='toggleTodo(todo)' [class.completed]='todo.isCompleted'>\n            <td>{{ todo.id }}</td>\n            <td>{{ todo.description }}</td>\n            <td>{{ todo.responsible }}</td>\n            <td>{{ todo.priority }}</td>\n            <td><button class=\"btn btn-primary\" (click)='removeTodo(todo)'>Delete</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n</div></div>\n\n\n"

/***/ }),

/***/ "./src/app/ngrxpoc/todo-list/todo-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ngrxpoc/todo-list/todo-list.component.ts ***!
  \**********************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo.actions */ "./src/app/ngrxpoc/todo.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(todoStore) {
        var _this = this;
        this.todoStore = todoStore;
        this.model = {
            id: 0,
            description: "",
            responsible: "",
            priority: "low",
            isCompleted: false
        };
        this.todoStore.select('apptodos').subscribe(function (state) {
            _this.todos = state.todos;
            _this.todosLength = state.todos.length;
        });
    }
    TodoListComponent.prototype.ngOnInit = function () {
    };
    TodoListComponent.prototype.onSubmit = function () {
        this.todoStore.dispatch({ type: _todo_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_TODO"], todo: this.model });
    };
    TodoListComponent.prototype.toggleTodo = function (todo) {
        this.todoStore.dispatch({ type: _todo_actions__WEBPACK_IMPORTED_MODULE_2__["TOGGLE_TODO"], id: todo.id });
    };
    TodoListComponent.prototype.removeTodo = function (todo) {
        this.todoStore.dispatch({ type: _todo_actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_TODO"], id: todo.id });
    };
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/ngrxpoc/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/ngrxpoc/todo-list/todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/ngrxpoc/todo-overview/todo-overview.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/ngrxpoc/todo-overview/todo-overview.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ngrxpoc/todo-overview/todo-overview.component.html":
/*!********************************************************************!*\
  !*** ./src/app/ngrxpoc/todo-overview/todo-overview.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-right\">  \n      <span class=\"badge badge-secondary\">\n         Last Update:{{ lastUpdated | date:'mediumTime' }} | TotalItems:{{ todos }} | CompletedItems:{{ completedTodos }}\n        </span>\n</p>\n<button class=\"btn btn-danger\" (click)='clearAllTodos()'>Remove All Todos</button>\n"

/***/ }),

/***/ "./src/app/ngrxpoc/todo-overview/todo-overview.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/ngrxpoc/todo-overview/todo-overview.component.ts ***!
  \******************************************************************/
/*! exports provided: TodoOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoOverviewComponent", function() { return TodoOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo.actions */ "./src/app/ngrxpoc/todo.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoOverviewComponent = /** @class */ (function () {
    function TodoOverviewComponent(todoStore, todoState) {
        var _this = this;
        this.todoStore = todoStore;
        this.todoState = todoState;
        this.todoStore.select('apptodos').subscribe(function (state) {
            _this.todos = state.todos.length;
            _this.lastUpdated = state.lastUpdate;
            _this.completedTodos = state.todos.filter(function (todo) { return todo.isCompleted; }).length;
        });
        //this.todoStore.select((state)=>{ this.lastUpdated = state.apptodos.lastUpdate});
    }
    TodoOverviewComponent.prototype.ngOnInit = function () {
    };
    TodoOverviewComponent.prototype.clearAllTodos = function () {
        this.todoStore.dispatch({ type: _todo_actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_ALL_TODOS"] });
    };
    TodoOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-overview',
            template: __webpack_require__(/*! ./todo-overview.component.html */ "./src/app/ngrxpoc/todo-overview/todo-overview.component.html"),
            styles: [__webpack_require__(/*! ./todo-overview.component.css */ "./src/app/ngrxpoc/todo-overview/todo-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["State"]])
    ], TodoOverviewComponent);
    return TodoOverviewComponent;
}());



/***/ }),

/***/ "./src/app/ngrxpoc/todo.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/ngrxpoc/todo.actions.ts ***!
  \*****************************************/
/*! exports provided: ADD_TODO, REMOVE_TODO, TOGGLE_TODO, REMOVE_ALL_TODOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_TODO", function() { return REMOVE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_TODO", function() { return TOGGLE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ALL_TODOS", function() { return REMOVE_ALL_TODOS; });
var ADD_TODO = 'ADD_TODO';
var REMOVE_TODO = 'REMOVE_TODO';
var TOGGLE_TODO = 'TOGGLE_TODO';
var REMOVE_ALL_TODOS = 'REMOVE_ALL_TODOS';


/***/ }),

/***/ "./src/app/ngrxpoc/todo.store.ts":
/*!***************************************!*\
  !*** ./src/app/ngrxpoc/todo.store.ts ***!
  \***************************************/
/*! exports provided: INITIAL_STATE, todoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return todoReducer; });
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.actions */ "./src/app/ngrxpoc/todo.actions.ts");

var INITIAL_STATE = {
    todos: [],
    lastUpdate: new Date()
};
var counter = 0;
function todoReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TODO"]:
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo, { id: ++counter })),
                lastUpdate: new Date()
            });
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_TODO"]:
            var todo = state.todos.find(function (t) { return t.id == action.id; });
            var index = state.todos.indexOf(todo);
            return Object.assign({}, state, {
                todos: state.todos.slice(0, index).concat([
                    Object.assign({}, todo, { isCompleted: !todo.isCompleted })
                ], state.todos.slice(index + 1)),
                lastUpdate: new Date()
            });
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_TODO"]:
            var removeTodo = state.todos.find(function (t) { return t.id == action.id; });
            var removeIndex = state.todos.indexOf(removeTodo);
            var newTodos = state.todos.slice(removeIndex + 1).map(function (todo) { todo.id = todo.id - 1; return todo; });
            counter--;
            return Object.assign({}, state, {
                todos: state.todos.slice(0, removeIndex).concat(newTodos),
                lastUpdate: new Date()
            });
        case _todo_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ALL_TODOS"]:
            counter = 0;
            return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
            });
        default:
            return state;
    }
}


/***/ })

}]);
//# sourceMappingURL=ngrxpoc-ngrxpoc-module.js.map