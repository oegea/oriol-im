webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/list/list.js":
/*!*********************************************************!*\
  !*** ./packages/mars-theme/src/components/list/list.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ \"./packages/mars-theme/src/components/list/list-item.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination */ \"./packages/mars-theme/src/components/list/pagination.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var List=(_ref)=>{var{state}=_ref;// Get the data of the current list.\nvar data=state.source.get(state.router.link);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Container,null,data.isTaxonomy&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Header,null,data.taxonomy,\":\",\" \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"b\",null,Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"decode\"])(state.source[data.taxonomy][data.id].name))),data.isAuthor&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Header,null,\"Author: \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"b\",null,Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"decode\"])(state.source.author[data.id].name))),data.items.map((_ref2)=>{var{type,id}=_ref2;var item=state.source[type][id];// Render one Item component for each one.\nreturn Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_list_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{key:item.id,item:item});}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_pagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(List));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\",{target:\"exiu6z10\",label:\"Container\"})( false?undefined:{name:\"18rn9ld\",styles:\"max-width:100%;width:800px;margin:0;padding:24px;list-style:none;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxEZXZlbG9wbWVudFxcb3Jpb2wtaW1cXHBhY2thZ2VzXFxtYXJzLXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXGxpc3RcXGxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNnQyIsImZpbGUiOiJDOlxcRGV2ZWxvcG1lbnRcXG9yaW9sLWltXFxwYWNrYWdlc1xcbWFycy10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxsaXN0XFxsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBkZWNvZGUgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vcGFnaW5hdGlvblwiO1xuXG5jb25zdCBMaXN0ID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGN1cnJlbnQgbGlzdC5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIHRheG9ub215LCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgICB7ZGF0YS5pc1RheG9ub215ICYmIChcbiAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICB7ZGF0YS50YXhvbm9teX06e1wiIFwifVxuICAgICAgICAgIDxiPntkZWNvZGUoc3RhdGUuc291cmNlW2RhdGEudGF4b25vbXldW2RhdGEuaWRdLm5hbWUpfTwvYj5cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICApfVxuXG4gICAgICB7LyogSWYgdGhlIGxpc3QgaXMgZm9yIGEgc3BlY2lmaWMgYXV0aG9yLCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgICB7ZGF0YS5pc0F1dGhvciAmJiAoXG4gICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgQXV0aG9yOiA8Yj57ZGVjb2RlKHN0YXRlLnNvdXJjZS5hdXRob3JbZGF0YS5pZF0ubmFtZSl9PC9iPlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBJdGVyYXRlIG92ZXIgdGhlIGl0ZW1zIG9mIHRoZSBsaXN0LiAqL31cbiAgICAgIHtkYXRhLml0ZW1zLm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbdHlwZV1baWRdO1xuICAgICAgICAvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cbiAgICAgICAgcmV0dXJuIDxJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz47XG4gICAgICB9KX1cbiAgICAgIDxQYWdpbmF0aW9uIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjRweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbmA7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oM2BcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMsIDAuOSk7XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Header=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h3\",{target:\"exiu6z11\",label:\"Header\"})( false?undefined:{name:\"p2cv\",styles:\"font-weight:300;text-transform:capitalize;color:rgba(12,17,43,0.9);\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxEZXZlbG9wbWVudFxcb3Jpb2wtaW1cXHBhY2thZ2VzXFxtYXJzLXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXGxpc3RcXGxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0N3QiIsImZpbGUiOiJDOlxcRGV2ZWxvcG1lbnRcXG9yaW9sLWltXFxwYWNrYWdlc1xcbWFycy10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxsaXN0XFxsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBkZWNvZGUgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vcGFnaW5hdGlvblwiO1xuXG5jb25zdCBMaXN0ID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGN1cnJlbnQgbGlzdC5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIHRheG9ub215LCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgICB7ZGF0YS5pc1RheG9ub215ICYmIChcbiAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICB7ZGF0YS50YXhvbm9teX06e1wiIFwifVxuICAgICAgICAgIDxiPntkZWNvZGUoc3RhdGUuc291cmNlW2RhdGEudGF4b25vbXldW2RhdGEuaWRdLm5hbWUpfTwvYj5cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICApfVxuXG4gICAgICB7LyogSWYgdGhlIGxpc3QgaXMgZm9yIGEgc3BlY2lmaWMgYXV0aG9yLCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgICB7ZGF0YS5pc0F1dGhvciAmJiAoXG4gICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgQXV0aG9yOiA8Yj57ZGVjb2RlKHN0YXRlLnNvdXJjZS5hdXRob3JbZGF0YS5pZF0ubmFtZSl9PC9iPlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBJdGVyYXRlIG92ZXIgdGhlIGl0ZW1zIG9mIHRoZSBsaXN0LiAqL31cbiAgICAgIHtkYXRhLml0ZW1zLm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbdHlwZV1baWRdO1xuICAgICAgICAvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cbiAgICAgICAgcmV0dXJuIDxJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz47XG4gICAgICB9KX1cbiAgICAgIDxQYWdpbmF0aW9uIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjRweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbmA7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oM2BcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMsIDAuOSk7XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcz8zZGM3Il0sIm5hbWVzIjpbIkxpc3QiLCJzdGF0ZSIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwiaXNUYXhvbm9teSIsInRheG9ub215IiwiZGVjb2RlIiwiaWQiLCJuYW1lIiwiaXNBdXRob3IiLCJhdXRob3IiLCJpdGVtcyIsIm1hcCIsInR5cGUiLCJpdGVtIiwiY29ubmVjdCIsIkNvbnRhaW5lciIsIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3FSQUtBLEdBQU1BLEtBQUksQ0FBRyxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BQzFCO0FBQ0EsR0FBTUMsS0FBSSxDQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FFQSxNQUNFLDJEQUFDLFNBQUQsTUFFR0osSUFBSSxDQUFDSyxVQUFMLEVBQ0MsMERBQUMsTUFBRCxNQUNHTCxJQUFJLENBQUNNLFFBRFIsS0FDbUIsR0FEbkIsQ0FFRSxtRUFBSUMsdURBQU0sQ0FBQ1IsS0FBSyxDQUFDRSxNQUFOLENBQWFELElBQUksQ0FBQ00sUUFBbEIsRUFBNEJOLElBQUksQ0FBQ1EsRUFBakMsRUFBcUNDLElBQXRDLENBQVYsQ0FGRixDQUhKLENBVUdULElBQUksQ0FBQ1UsUUFBTCxFQUNDLDBEQUFDLE1BQUQsaUJBQ1UsbUVBQUlILHVEQUFNLENBQUNSLEtBQUssQ0FBQ0UsTUFBTixDQUFhVSxNQUFiLENBQW9CWCxJQUFJLENBQUNRLEVBQXpCLEVBQTZCQyxJQUE5QixDQUFWLENBRFYsQ0FYSixDQWlCR1QsSUFBSSxDQUFDWSxLQUFMLENBQVdDLEdBQVgsQ0FBZSxTQUFrQixJQUFqQixDQUFFQyxJQUFGLENBQVFOLEVBQVIsQ0FBaUIsT0FDaEMsR0FBTU8sS0FBSSxDQUFHaEIsS0FBSyxDQUFDRSxNQUFOLENBQWFhLElBQWIsRUFBbUJOLEVBQW5CLENBQWIsQ0FDQTtBQUNBLE1BQU8sMkRBQUMsa0RBQUQsRUFBTSxHQUFHLENBQUVPLElBQUksQ0FBQ1AsRUFBaEIsQ0FBb0IsSUFBSSxDQUFFTyxJQUExQixFQUFQLENBQ0QsQ0FKQSxDQWpCSCxDQXNCRSwwREFBQyxtREFBRCxNQXRCRixDQURGLENBMEJELENBOUJELENBZ0NlQyx1SEFBTyxDQUFDbEIsSUFBRCxDQUF0QixFQUVBLEdBQU1tQixVQUFTLG84RUFBZixDQVFBLEdBQU1DLE9BQU0sMjdFQUFaIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi9wYWdpbmF0aW9uXCI7XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgY3VycmVudCBsaXN0LlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgey8qIElmIHRoZSBsaXN0IGlzIGEgdGF4b25vbXksIHdlIHJlbmRlciBhIHRpdGxlLiAqL31cbiAgICAgIHtkYXRhLmlzVGF4b25vbXkgJiYgKFxuICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgIHtkYXRhLnRheG9ub215fTp7XCIgXCJ9XG4gICAgICAgICAgPGI+e2RlY29kZShzdGF0ZS5zb3VyY2VbZGF0YS50YXhvbm9teV1bZGF0YS5pZF0ubmFtZSl9PC9iPlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBmb3IgYSBzcGVjaWZpYyBhdXRob3IsIHdlIHJlbmRlciBhIHRpdGxlLiAqL31cbiAgICAgIHtkYXRhLmlzQXV0aG9yICYmIChcbiAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICBBdXRob3I6IDxiPntkZWNvZGUoc3RhdGUuc291cmNlLmF1dGhvcltkYXRhLmlkXS5uYW1lKX08L2I+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgKX1cblxuICAgICAgey8qIEl0ZXJhdGUgb3ZlciB0aGUgaXRlbXMgb2YgdGhlIGxpc3QuICovfVxuICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgIC8vIFJlbmRlciBvbmUgSXRlbSBjb21wb25lbnQgZm9yIGVhY2ggb25lLlxuICAgICAgICByZXR1cm4gPEl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgIH0pfVxuICAgICAgPFBhZ2luYXRpb24gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTGlzdCk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyNHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmgzYFxuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6IHJnYmEoMTIsIDE3LCA0MywgMC45KTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/list/list.js\n");

/***/ })

})