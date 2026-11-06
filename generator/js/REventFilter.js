
      // auto generated
      //var self;

      // class constructor:
      function REventFilter() {
        

        // should be REventFilter_BaseJs.call(this, engine):
        //REventFilter.prototype = new REventFilter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_REventFilter.getIdStatic()))) {

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
            qWarning("REventFilter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new REventFilter_Wrapper(
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

      

        //copyProperties(this, wrapper, REventFilter);
  }

  
  else {
    
        print("REventFilter(): wrong number / type of arguments");
      
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

      //REventFilter.prototype = new REventFilter_BaseJs(engine);
      //REventFilter.prototype = new REventFilter_Wrapper(engine);
      REventFilter.prototype = new Object();


      REventFilter.prototype.toString = function() {
          //return "REventFilter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "REventFilter [JS]";
        };
      REventFilter.getObjectType = function() {
        return RJSType_REventFilter.getIdStatic();
      };

      REventFilter.prototype.getObjectType = function() {
        return RJSType_REventFilter.getIdStatic();
      };

      REventFilter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_REventFilter.getIdStatic()) {
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
        REventFilter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        REventFilter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        REventFilter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        REventFilter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        REventFilter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        REventFilter.prototype.findChild = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        REventFilter.prototype.children = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        REventFilter.prototype.setParent = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        REventFilter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        REventFilter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        REventFilter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        REventFilter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        REventFilter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        REventFilter.prototype.property = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        REventFilter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        REventFilter.prototype.parent = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        REventFilter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        REventFilter.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: REventFilter.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(REventFilter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        REventFilter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      REventFilter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      REventFilter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //REventFilter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //REventFilter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      REventFilter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      