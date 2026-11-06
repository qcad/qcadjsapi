
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        RToolMatrixItemDelegate.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.findChild = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.children = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.setParent = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.property = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.parent = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.destroyEditor = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.destroyEditor");
          
              return this.__PROXY__.destroyEditor(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.paintingRoles = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.paintingRoles");
          
              return this.__PROXY__.paintingRoles(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.hasClipping = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.hasClipping");
          
              return this.__PROXY__.hasClipping(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.setClipping = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.setClipping");
          
              return this.__PROXY__.setClipping(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.createEditor = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.createEditor");
          
              return this.__PROXY__.createEditorSuper(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.setEditorData = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.setEditorData");
          
              return this.__PROXY__.setEditorData(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.setModelData = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.setModelData");
          
              return this.__PROXY__.setModelData(...args);
            
        };
    
        // function 
        RToolMatrixItemDelegate.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: RToolMatrixItemDelegate.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RToolMatrixItemDelegate.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RToolMatrixItemDelegate.prototype, 'commitData', {
            get: function() { return this.__PROXY__.commitData; },
            configurable: true
        });
        
          Object.defineProperty(RToolMatrixItemDelegate.prototype, 'commitData(QWidget*)', {
              get: function() { return this.__PROXY__.commitData; },
              configurable: true
          });
        
        Object.defineProperty(RToolMatrixItemDelegate.prototype, 'closeEditor', {
            get: function() { return this.__PROXY__.closeEditor; },
            configurable: true
        });
        
          Object.defineProperty(RToolMatrixItemDelegate.prototype, 'closeEditor(QWidget*,QAbstractItemDelegate::EndEditHint)', {
              get: function() { return this.__PROXY__.closeEditor; },
              configurable: true
          });
        
        Object.defineProperty(RToolMatrixItemDelegate.prototype, 'sizeHintChanged', {
            get: function() { return this.__PROXY__.sizeHintChanged; },
            configurable: true
        });
        
          Object.defineProperty(RToolMatrixItemDelegate.prototype, 'sizeHintChanged(QModelIndex)', {
              get: function() { return this.__PROXY__.sizeHintChanged; },
              configurable: true
          });
        RToolMatrixItemDelegate.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RToolMatrixItemDelegate.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RToolMatrixItemDelegate.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

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

      RToolMatrixItemDelegate.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      