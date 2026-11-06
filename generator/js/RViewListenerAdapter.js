
      // auto generated
      //var self;

      // class constructor:
      function RViewListenerAdapter() {
        

        // should be RViewListenerAdapter_BaseJs.call(this, engine):
        //RViewListenerAdapter.prototype = new RViewListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RViewListenerAdapter.getIdStatic()))) {

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
            qWarning("RViewListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RViewListenerAdapter_Wrapper(
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

      

        //copyProperties(this, wrapper, RViewListenerAdapter);
  }

  
  else {
    
        print("RViewListenerAdapter(): wrong number / type of arguments");
      
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

      //RViewListenerAdapter.prototype = new RViewListenerAdapter_BaseJs(engine);
      //RViewListenerAdapter.prototype = new RViewListenerAdapter_Wrapper(engine);
      RViewListenerAdapter.prototype = new Object();


      RViewListenerAdapter.prototype.toString = function() {
          //return "RViewListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RViewListenerAdapter [JS]";
        };
      RViewListenerAdapter.getObjectType = function() {
        return RJSType_RViewListenerAdapter.getIdStatic();
      };

      RViewListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RViewListenerAdapter.getIdStatic();
      };

      RViewListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RViewListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RViewListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RViewListenerAdapter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.findChild = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.children = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.setParent = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.property = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.parent = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.updateViews = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.updateViews");
          
              return this.__PROXY__.updateViews(...args);
            
        };
        
        // function 
        RViewListenerAdapter.prototype.clearViews = function(...args) 
          
        {
          //print("JS: RViewListenerAdapter.prototype.clearViews");
          
              return this.__PROXY__.clearViews(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(RViewListenerAdapter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RViewListenerAdapter.prototype, 'viewsUpdated', {
            get: function() { return this.__PROXY__.viewsUpdated; },
            configurable: true
        });
        
          Object.defineProperty(RViewListenerAdapter.prototype, 'viewsUpdated(RDocumentInterface*)', {
              get: function() { return this.__PROXY__.viewsUpdated; },
              configurable: true
          });
        
        Object.defineProperty(RViewListenerAdapter.prototype, 'viewsCleared', {
            get: function() { return this.__PROXY__.viewsCleared; },
            configurable: true
        });
        RViewListenerAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RViewListenerAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RViewListenerAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RViewListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RViewListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RViewListenerAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      