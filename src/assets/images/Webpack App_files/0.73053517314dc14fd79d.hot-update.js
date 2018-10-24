webpackHotUpdate(0,{18:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('\n// EXTERNAL MODULE: ./src/todo/item.vue\nvar item = __webpack_require__(34);\n\n// EXTERNAL MODULE: ./src/todo/tabs.vue\nvar tabs = __webpack_require__(35);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/todo/todo.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nlet id=0;\n/* harmony default export */ var todovue_type_script_lang_js_ = ({\n    data(){\n      return{\n          todos:[],\n          filter:\'all\'\n      }\n    },\n    components: {\n        Tabs: tabs["a" /* default */],\n        Item: item["a" /* default */]\n    },\n    computed:{\n      filteredTodos(){\n          if(this.filter===\'all\'){\n              return this.todos\n          }\n          const completed =this.filter === \'completed\'\n          return this.todos.filter(todo=> completed === todo.completed)\n      }\n    },\n    methods:{\n        addToDo(e){\n            this.todos.unshift({\n                id:id++,\n                content:e.target.value.trim(),\n                completed: false\n            });\n            e.target.value=""\n        },\n        deleteTodo(id){\n            this.todos.splice(this.todos.findIndex(todo=>todo.id===id),1)\n        },\n        toggleFilter(state){\n            this.filter= state\n        },\n        clearAllCompleted(){\n            this.todos=this.todos.filter(todo=> !todo.completed)\n        }\n    }\n});\n\n// CONCATENATED MODULE: ./src/todo/todo.vue?vue&type=script&lang=js&\n /* harmony default export */ var todo_todovue_type_script_lang_js_ = __webpack_exports__["a"] = (todovue_type_script_lang_js_); \n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdG9kby52dWU/NzI1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdG9kby90b2RvLnZ1ZT9jOGRjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInJlYWwtYXBwXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzPVwiYWRkLWlucHV0XCJcbiAgICAgICAgYXV0b2ZvY3VzPVwiYXV0b2ZvY3VzXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJoaGhcIlxuICAgICAgICBAa2V5dXAuZW50ZXI9XCJhZGRUb0RvXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGl0ZW0gOnRvZG89XCJ0b2RvXCJcbiAgICAgICAgICAgICAgdi1mb3I9XCJ0b2RvIGluIGZpbHRlcmVkVG9kb3NcIlxuICAgICAgICAgICAgIDprZXk9XCJ0b2RvLmlkXCJcbiAgICAgICAgICAgICBAZGVsPVwiZGVsZXRlVG9kb1wiPjwvaXRlbT5cbiAgICAgICAgPHRhYnMgOmZpbHRlcj1cImZpbHRlclwiXG4gICAgICAgICAgICAgIDp0b2Rvcz1cInRvZG9zXCJcbiAgICAgICAgICAgICAgQHRvZ2dsZT1cInRvZ2dsZUZpbHRlclwiXG4gICAgICAgICAgICAgIEBjbGVhckFsbENvbXBsZXRlZD1cImNsZWFyQWxsY29tcGxldGVkXCJcbiAgICAgICAgID48L3RhYnM+XG4gICAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEl0ZW0gZnJvbSBcIi4vaXRlbS52dWVcIlxuICAgIGltcG9ydCBUYWJzIGZyb20gXCIuL3RhYnMudnVlXCJcbiAgICBsZXQgaWQ9MDtcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgIHRvZG9zOltdLFxuICAgICAgICAgICAgICBmaWx0ZXI6J2FsbCdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIFRhYnMsXG4gICAgICAgICAgICBJdGVtXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICBmaWx0ZXJlZFRvZG9zKCl7XG4gICAgICAgICAgICAgIGlmKHRoaXMuZmlsdGVyPT09J2FsbCcpe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9kb3NcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPXRoaXMuZmlsdGVyID09PSAnY29tcGxldGVkJ1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b2Rvcy5maWx0ZXIodG9kbz0+IGNvbXBsZXRlZCA9PT0gdG9kby5jb21wbGV0ZWQpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOntcbiAgICAgICAgICAgIGFkZFRvRG8oZSl7XG4gICAgICAgICAgICAgICAgdGhpcy50b2Rvcy51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6aWQrKyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDplLnRhcmdldC52YWx1ZS50cmltKCksXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZT1cIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlVG9kbyhpZCl7XG4gICAgICAgICAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UodGhpcy50b2Rvcy5maW5kSW5kZXgodG9kbz0+dG9kby5pZD09PWlkKSwxKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZUZpbHRlcihzdGF0ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXI9IHN0YXRlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXJBbGxDb21wbGV0ZWQoKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9zPXRoaXMudG9kb3MuZmlsdGVyKHRvZG89PiAhdG9kby5jb21wbGV0ZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic3R5bHVzXCIgc2NvcGVkPlxuICAgIC5yZWFsLWFwcHtcbiAgICAgICAgd2lkdGggOjYwMHB4XG4gICAgICAgIG1hcmdpbiA6MCBhdXRvXG4gICAgICAgIGJveC1zaGFkb3cgOjAgcHggMHB4IDBweCAjNjY2XG4gICAgfVxuICAgIC5hZGQtaW5wdXR7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAzNnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICB9XG5cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdG9kby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90b2RvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQy9EQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///18\n')}});