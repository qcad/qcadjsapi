
      // auto generated
      //var self;

      // class constructor:
      function REventHandler() {
        

        // should be REventHandler_BaseJs.call(this, engine):
        //REventHandler.prototype = new REventHandler_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_REventHandler.getIdStatic()))) {

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
            qWarning("REventHandler.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new REventHandler_Wrapper(
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

      

        //copyProperties(this, wrapper, REventHandler);
  }

  
  else {
    
        print("REventHandler(): wrong number / type of arguments");
      
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

      //REventHandler.prototype = new REventHandler_BaseJs(engine);
      //REventHandler.prototype = new REventHandler_Wrapper(engine);
      REventHandler.prototype = new Object();


      REventHandler.prototype.toString = function() {
          //return "REventHandler [JS] [0x" + this.getAddress().toString(16) + "]";
          return "REventHandler [JS]";
        };
      REventHandler.getObjectType = function() {
        return RJSType_REventHandler.getIdStatic();
      };

      REventHandler.prototype.getObjectType = function() {
        return RJSType_REventHandler.getIdStatic();
      };

      REventHandler.prototype.isOfObjectType = function(t) {
        if (t===RJSType_REventHandler.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        REventHandler.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        REventHandler.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        REventHandler.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        REventHandler.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        REventHandler.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        REventHandler.prototype.findChild = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        REventHandler.prototype.children = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        REventHandler.prototype.setParent = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        REventHandler.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        REventHandler.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        REventHandler.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        REventHandler.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        REventHandler.prototype.setProperty = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        REventHandler.prototype.property = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        REventHandler.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        REventHandler.prototype.parent = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        REventHandler.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        REventHandler.prototype.isUrl = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.isUrl");
          
              return this.__PROXY__.isUrl(...args);
            
        };
    
        // function 
        REventHandler.prototype.getUrlsFromMimeData = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.getUrlsFromMimeData");
          
              return this.__PROXY__.getUrlsFromMimeData(...args);
            
        };
    
        // function 
        REventHandler.prototype.dragEnter = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.dragEnter");
          
              return this.__PROXY__.dragEnter(...args);
            
        };
    
        // function 
        REventHandler.prototype.updateTextLabel = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.updateTextLabel");
          
              return this.__PROXY__.updateTextLabel(...args);
            
        };
    
        // function 
        REventHandler.prototype.updateSnapInfo = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.updateSnapInfo");
          
              return this.__PROXY__.updateSnapInfo(...args);
            
        };
    
        // function 
        REventHandler.prototype.viewportChanged = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.viewportChanged");
          
              return this.__PROXY__.viewportChanged(...args);
            
        };
    
        // function 
        REventHandler.prototype.horizontalScrolled = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.horizontalScrolled");
          
              return this.__PROXY__.horizontalScrolled(...args);
            
        };
    
        // function 
        REventHandler.prototype.verticalScrolled = function(...args) 
          
        {
          //print("JS: REventHandler.prototype.verticalScrolled");
          
              return this.__PROXY__.verticalScrolled(...args);
            
        };
    

      // static functions:
      

        // static function 
        REventHandler.isUrl = function() 
          
        {
          //print("JS: REventHandler.isUrl");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REventHandler_WrapperSingletonInstance.isUrl(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REventHandler);
  }

  
  else {
    
        print("REventHandler.isUrl(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REventHandler.getUrlsFromMimeData = function() 
          
        {
          //print("JS: REventHandler.getUrlsFromMimeData");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REventHandler_WrapperSingletonInstance.getUrlsFromMimeData(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REventHandler);
  }

  
  else {
    
        print("REventHandler.getUrlsFromMimeData(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(REventHandler.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        REventHandler.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      REventHandler.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      REventHandler.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //REventHandler.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //REventHandler.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      REventHandler.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      