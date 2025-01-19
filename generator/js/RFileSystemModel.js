
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
              copyProperties(this, wrapper, RFileSystemModel);
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
          

        copyProperties(this, wrapper, RFileSystemModel);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
    this["headerDataChanged(Qt::Orientation,int,int)"] = Object.getPrototypeOf(this).headerDataChanged;
  
    this["rowsInserted(QModelIndex,int,int)"] = Object.getPrototypeOf(this).rowsInserted;
  
          }
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
      

      // static functions:
      

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
    