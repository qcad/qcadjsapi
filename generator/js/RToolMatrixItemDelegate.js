
      // auto generated
      //var self;

      // class constructor:
      function RToolMatrixItemDelegate() {
        

        // should be RToolMatrixItemDelegate_BaseJs.call(this, engine):
        //RToolMatrixItemDelegate.prototype = new RToolMatrixItemDelegate_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RToolMatrixItemDelegate.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RToolMatrixItemDelegate);
            //}
          }
          else {
            qWarning("RToolMatrixItemDelegate.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RToolMatrixItemDelegate_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RToolMatrixItemDelegate);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RToolMatrixItemDelegate);
  }

  
  else {
    
        print("RToolMatrixItemDelegate(): wrong number / type of arguments");
      
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
            
    this["commitData(QWidget*)"] = Object.getPrototypeOf(this).commitData;
  
    this["closeEditor(QWidget*,QAbstractItemDelegate::EndEditHint)"] = Object.getPrototypeOf(this).closeEditor;
  
    this["sizeHintChanged(QModelIndex)"] = Object.getPrototypeOf(this).sizeHintChanged;
  
          }
        }
      }

      //RToolMatrixItemDelegate.prototype = new RToolMatrixItemDelegate_BaseJs(engine);
      //RToolMatrixItemDelegate.prototype = new RToolMatrixItemDelegate_Wrapper(engine);
      RToolMatrixItemDelegate.prototype = new Object();

      RToolMatrixItemDelegate.prototype.toString = function() {
          //return "RToolMatrixItemDelegate [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RToolMatrixItemDelegate [JS]";
        };
      RToolMatrixItemDelegate.getObjectType = function() {
        return RJSType_RToolMatrixItemDelegate.getIdStatic();
      };

      RToolMatrixItemDelegate.prototype.getObjectType = function() {
        return RJSType_RToolMatrixItemDelegate.getIdStatic();
      };

      RToolMatrixItemDelegate.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RToolMatrixItemDelegate.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractItemDelegate.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QItemDelegate.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: EndEditHint
RToolMatrixItemDelegate.NoHint = RToolMatrixItemDelegate_Wrapper.NoHint;
RToolMatrixItemDelegate.EditNextItem = RToolMatrixItemDelegate_Wrapper.EditNextItem;
RToolMatrixItemDelegate.EditPreviousItem = RToolMatrixItemDelegate_Wrapper.EditPreviousItem;
RToolMatrixItemDelegate.SubmitModelCache = RToolMatrixItemDelegate_Wrapper.SubmitModelCache;
RToolMatrixItemDelegate.RevertModelCache = RToolMatrixItemDelegate_Wrapper.RevertModelCache;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RToolMatrixItemDelegate.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RToolMatrixItemDelegate.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    