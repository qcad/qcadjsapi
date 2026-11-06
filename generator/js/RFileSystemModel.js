
      // auto generated
      //var self;

      // class constructor:
      function RFileSystemModel() {
        

        // should be RFileSystemModel_BaseJs.call(this, engine):
        //RFileSystemModel.prototype = new RFileSystemModel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFileSystemModel.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("RFileSystemModel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RFileSystemModel_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFileSystemModel);
  }

  
  else {
    
        print("RFileSystemModel(): wrong number / type of arguments");
      
    console.trace();
  }
  
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          

        }


      }

      //RFileSystemModel.prototype = new RFileSystemModel_BaseJs(engine);
      //RFileSystemModel.prototype = new RFileSystemModel_Wrapper(engine);
      RFileSystemModel.prototype = new Object();


      RFileSystemModel.prototype.toString = function() {
          //return "RFileSystemModel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFileSystemModel [JS]";
        };
      RFileSystemModel.getObjectType = function() {
        return RJSType_RFileSystemModel.getIdStatic();
      };

      RFileSystemModel.prototype.getObjectType = function() {
        return RJSType_RFileSystemModel.getIdStatic();
      };

      RFileSystemModel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFileSystemModel.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractItemModel.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFileSystemModel.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: LayoutChangeHint
RFileSystemModel.NoLayoutChangeHint = RFileSystemModel_Wrapper.NoLayoutChangeHint;
RFileSystemModel.VerticalSortHint = RFileSystemModel_Wrapper.VerticalSortHint;
RFileSystemModel.HorizontalSortHint = RFileSystemModel_Wrapper.HorizontalSortHint;

  // enum: Roles
RFileSystemModel.FileIconRole = RFileSystemModel_Wrapper.FileIconRole;
RFileSystemModel.FilePathRole = RFileSystemModel_Wrapper.FilePathRole;
RFileSystemModel.FileNameRole = RFileSystemModel_Wrapper.FileNameRole;
RFileSystemModel.FilePermissions = RFileSystemModel_Wrapper.FilePermissions;

  // enum: Option
RFileSystemModel.DontWatchForChanges = RFileSystemModel_Wrapper.DontWatchForChanges;
RFileSystemModel.DontResolveSymlinks = RFileSystemModel_Wrapper.DontResolveSymlinks;
RFileSystemModel.DontUseCustomDirectoryIcons = RFileSystemModel_Wrapper.DontUseCustomDirectoryIcons;


      // functions:
      
        // function 
        RFileSystemModel.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.findChild = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.children = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.setParent = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.property = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.hasIndex = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.hasIndex");
          
              return this.__PROXY__.hasIndex(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.clearItemData = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.clearItemData");
          
              return this.__PROXY__.clearItemData(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.supportedDragActions = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.supportedDragActions");
          
              return this.__PROXY__.supportedDragActions(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.insertRows = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.insertRows");
          
              return this.__PROXY__.insertRows(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.insertColumns = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.insertColumns");
          
              return this.__PROXY__.insertColumns(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.removeRows = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.removeRows");
          
              return this.__PROXY__.removeRows(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.removeColumns = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.removeColumns");
          
              return this.__PROXY__.removeColumns(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.moveRows = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.moveRows");
          
              return this.__PROXY__.moveRows(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.moveColumns = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.moveColumns");
          
              return this.__PROXY__.moveColumns(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.insertRow = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.insertRow");
          
              return this.__PROXY__.insertRow(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.insertColumn = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.insertColumn");
          
              return this.__PROXY__.insertColumn(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.removeColumn = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.removeColumn");
          
              return this.__PROXY__.removeColumn(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.moveRow = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.moveRow");
          
              return this.__PROXY__.moveRow(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.moveColumn = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.moveColumn");
          
              return this.__PROXY__.moveColumn(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.buddy = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.buddy");
          
              return this.__PROXY__.buddy(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.span = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.span");
          
              return this.__PROXY__.span(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.roleNames = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.roleNames");
          
              return this.__PROXY__.roleNames(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.submit = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.submit");
          
              return this.__PROXY__.submit(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.revert = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.revert");
          
              return this.__PROXY__.revert(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.resetInternalData = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.resetInternalData");
          
              return this.__PROXY__.resetInternalData(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.createIndex = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.createIndex");
          
              return this.__PROXY__.createIndex(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.encodeData = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.encodeData");
          
              return this.__PROXY__.encodeData(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.decodeData = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.decodeData");
          
              return this.__PROXY__.decodeData(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.beginInsertRows = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.beginInsertRows");
          
              return this.__PROXY__.beginInsertRows(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.endInsertRows = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.endInsertRows");
          
              return this.__PROXY__.endInsertRows(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.beginRemoveRows = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.beginRemoveRows");
          
              return this.__PROXY__.beginRemoveRows(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.endRemoveRows = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.endRemoveRows");
          
              return this.__PROXY__.endRemoveRows(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.beginMoveRows = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.beginMoveRows");
          
              return this.__PROXY__.beginMoveRows(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.endMoveRows = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.endMoveRows");
          
              return this.__PROXY__.endMoveRows(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.beginInsertColumns = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.beginInsertColumns");
          
              return this.__PROXY__.beginInsertColumns(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.endInsertColumns = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.endInsertColumns");
          
              return this.__PROXY__.endInsertColumns(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.beginRemoveColumns = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.beginRemoveColumns");
          
              return this.__PROXY__.beginRemoveColumns(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.endRemoveColumns = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.endRemoveColumns");
          
              return this.__PROXY__.endRemoveColumns(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.beginMoveColumns = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.beginMoveColumns");
          
              return this.__PROXY__.beginMoveColumns(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.endMoveColumns = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.endMoveColumns");
          
              return this.__PROXY__.endMoveColumns(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.beginResetModel = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.beginResetModel");
          
              return this.__PROXY__.beginResetModel(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.endResetModel = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.endResetModel");
          
              return this.__PROXY__.endResetModel(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.changePersistentIndex = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.changePersistentIndex");
          
              return this.__PROXY__.changePersistentIndex(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.changePersistentIndexList = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.changePersistentIndexList");
          
              return this.__PROXY__.changePersistentIndexList(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.persistentIndexList = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.persistentIndexList");
          
              return this.__PROXY__.persistentIndexList(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.rootPathChanged = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.rootPathChanged");
          
              return this.__PROXY__.rootPathChanged(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.fileRenamed = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.fileRenamed");
          
              return this.__PROXY__.fileRenamed(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.directoryLoaded = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.directoryLoaded");
          
              return this.__PROXY__.directoryLoaded(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.parent = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.sibling = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.sibling");
          
              return this.__PROXY__.sibling(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.hasChildren = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.hasChildren");
          
              return this.__PROXY__.hasChildren(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.columnCount = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.columnCount");
          
              return this.__PROXY__.columnCount(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.myComputer = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.myComputer");
          
              return this.__PROXY__.myComputer(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.setData = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.setData");
          
              return this.__PROXY__.setData(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.headerData = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.headerData");
          
              return this.__PROXY__.headerData(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.flags = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.flags");
          
              return this.__PROXY__.flags(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.sort = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.sort");
          
              return this.__PROXY__.sort(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.mimeTypes = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.mimeTypes");
          
              return this.__PROXY__.mimeTypes(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.dropMimeData = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.dropMimeData");
          
              return this.__PROXY__.dropMimeData(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.supportedDropActions = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.supportedDropActions");
          
              return this.__PROXY__.supportedDropActions(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.rootDirectory = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.rootDirectory");
          
              return this.__PROXY__.rootDirectory(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.iconProvider = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.iconProvider");
          
              return this.__PROXY__.iconProvider(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.filter = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.filter");
          
              return this.__PROXY__.filter(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.setResolveSymlinks = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.setResolveSymlinks");
          
              return this.__PROXY__.setResolveSymlinks(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.resolveSymlinks = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.resolveSymlinks");
          
              return this.__PROXY__.resolveSymlinks(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.setReadOnly = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.setReadOnly");
          
              return this.__PROXY__.setReadOnly(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.isReadOnly = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.isReadOnly");
          
              return this.__PROXY__.isReadOnly(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.nameFilters = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.nameFilters");
          
              return this.__PROXY__.nameFilters(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.setOption = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.setOption");
          
              return this.__PROXY__.setOption(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.testOption = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.testOption");
          
              return this.__PROXY__.testOption(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.setOptions = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.setOptions");
          
              return this.__PROXY__.setOptions(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.size = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.size");
          
              return this.__PROXY__.size(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.type = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.lastModified = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.lastModified");
          
              return this.__PROXY__.lastModified(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.mkdir = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.mkdir");
          
              return this.__PROXY__.mkdir(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.rmdir = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.rmdir");
          
              return this.__PROXY__.rmdir(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.fileName = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.fileName");
          
              return this.__PROXY__.fileName(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.fileIcon = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.fileIcon");
          
              return this.__PROXY__.fileIcon(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.permissions = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.permissions");
          
              return this.__PROXY__.permissions(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.fileInfo = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.fileInfo");
          
              return this.__PROXY__.fileInfo(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.remove = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.remove");
          
              return this.__PROXY__.remove(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.setRootPath = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.setRootPath");
          
              return this.__PROXY__.setRootPath(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.rootPath = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.rootPath");
          
              return this.__PROXY__.rootPath(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.pathIndex = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.pathIndex");
          
              return this.__PROXY__.pathIndex(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.index = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.index");
          
              return this.__PROXY__.index(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.filePath = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.filePath");
          
              return this.__PROXY__.filePath(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.setFilter = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.setFilter");
          
              return this.__PROXY__.setFilter(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.isDir = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.isDir");
          
              return this.__PROXY__.isDir(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.setHeaderData = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.setHeaderData");
          
              return this.__PROXY__.setHeaderData(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.rowCount = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.rowCount");
          
              return this.__PROXY__.rowCount(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.setIconProvider = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.setIconProvider");
          
              return this.__PROXY__.setIconProvider(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.setNameFilter = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.setNameFilter");
          
              return this.__PROXY__.setNameFilter(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.setNameFilters = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.setNameFilters");
          
              return this.__PROXY__.setNameFilters(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.setNameFilterDisables = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.setNameFilterDisables");
          
              return this.__PROXY__.setNameFilterDisables(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.canFetchMore = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.canFetchMore");
          
              return this.__PROXY__.canFetchMore(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.fetchMore = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.fetchMore");
          
              return this.__PROXY__.fetchMore(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.data = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.data");
          
              return this.__PROXY__.data(...args);
            
        };
    
        // function 
        RFileSystemModel.prototype.removeRow = function(...args) 
          
        {
          //print("JS: RFileSystemModel.prototype.removeRow");
          
              return this.__PROXY__.removeRow(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RFileSystemModel.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFileSystemModel.prototype, 'readOnly', {
              get: function() {
                  
                      return this.__PROXY__.isReadOnly();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setReadOnly(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFileSystemModel.prototype, 'nameFilterDisables', {
              get: function() {
                  
                      return this.__PROXY__.nameFilterDisables;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setNameFilterDisables(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFileSystemModel.prototype, 'options', {
              get: function() {
                  
                      return this.__PROXY__.options;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOptions(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RFileSystemModel.prototype, 'headerDataChanged', {
            get: function() { return this.__PROXY__.headerDataChanged; },
            configurable: true
        });
        
          Object.defineProperty(RFileSystemModel.prototype, 'headerDataChanged(Qt::Orientation,int,int)', {
              get: function() { return this.__PROXY__.headerDataChanged; },
              configurable: true
          });
        
        Object.defineProperty(RFileSystemModel.prototype, 'rowsInserted', {
            get: function() { return this.__PROXY__.rowsInserted; },
            configurable: true
        });
        
          Object.defineProperty(RFileSystemModel.prototype, 'rowsInserted(QModelIndex,int,int)', {
              get: function() { return this.__PROXY__.rowsInserted; },
              configurable: true
          });
        RFileSystemModel.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RFileSystemModel.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RFileSystemModel.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFileSystemModel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFileSystemModel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RFileSystemModel.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      