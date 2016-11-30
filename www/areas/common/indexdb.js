/******************************************************
 ******************************************************/
(function(angular){
  angular.module('indexdb', [])
    .factory('IndexdbJs', ['$ionicPopup',function ($ionicPopup) {

      window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
      window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
      window.IDBCursor=window.IDBCursor||window.webkitIDBCursor|| window.msIDBCursor;
      var db={
        dbName: 'jdStore',
        dbVersion: 2046, //用小数会四舍五入
        dbInstance: {},

        errorHandler: function (error) {
          console.log('error: ' + error.target.error.message);
        },
        //请求indexDB数据库
        open: function (func,fail) {
          var dbContent = window.indexedDB.open(db.dbName, db.dbVersion);
          dbContent.onupgradeneeded = db.upgrade;
          dbContent.onerror = db.errorHandler;
          dbContent.onsuccess = function (e) {
            db.dbInstance = dbContent.result;
            db.dbInstance.onerror = fail;
            func();
          };
        },
        //数据库版本号发生改变触发的事件
        upgrade: function (e) {
          var _db = e.target.result,names = _db.objectStoreNames;
          // 此处可以创建多个表
          var name = "cart";
          if (!names.contains(name)) {
            _db.createObjectStore(
              name,
              {
                keyPath: 'goodsId',
                autoIncrement:false
              });
          }
        },
        //开启事物管理
        getObjectStore: function (objectStoreName,mode) {
          var txn, store;mode = mode || 'readonly';
          txn = db.dbInstance.transaction([objectStoreName], mode);
          store = txn.objectStore(objectStoreName);
          return store;
        },
        //添加数据
        add: function (objectStoreName,data,success,fail) {
          db.open(function () {
            var store, req, mode = 'readwrite';
            store = db.getObjectStore(objectStoreName,mode),
              req = store.add(data);
            req.onsuccess = success;
            req.onerror=fail;
          },fail);
        },
        //修改数据
        update: function (objectStoreName,data,success,fail) {
          db.open(function () {
            var store, req, mode = 'readwrite';
            store = db.getObjectStore(objectStoreName,mode),
              req = store.put(data);
            req.onsuccess = success;
            req.onerror=fail;
          },fail);
        },
        //得到所有数据
        getAll: function (objectStoreName,success,fail) {

          db.open(function () {
            var
              store = db.getObjectStore(objectStoreName),
              cursor = store.openCursor(),
              data = [];

            cursor.onsuccess = function (e) {
              var result = e.target.result;
              if (result && result !== null) {
                data.push(result.value);
                result.continue();
              } else {
                success(data);
              }
            };
            cursor.onerror=fail;

          },fail);
        },
        //得到单个数据
        get: function (id,objectStoreName,success,fail) {
          db.open(function () {
            var
              store = db.getObjectStore(objectStoreName),
              req = store.get(id);
            req.onsuccess = function (e){
              success(e.target.result);
            };
            req.onerror=fail;
          });
        },
        // delete是保留字
        'delete': function (id,objectStoreName,success,fail) {
          db.open(function () {
            var
              mode = 'readwrite',
              store, req;
            store = db.getObjectStore(objectStoreName,mode);
            req = store.delete(id);
            req.onsuccess = success;
            req.onerror=fail;
          });
        },
        //删除所有数据
        deleteAll: function (objectStoreName,success,fail) {
          db.open(function () {
            var mode, store, req;
            mode = 'readwrite';
            store = db.getObjectStore(objectStoreName,mode);
            req = store.clear();
            req.onsuccess = success;
            req.onerror=fail;
          });
        }
      };

      return db;
    }]);

})(angular)
