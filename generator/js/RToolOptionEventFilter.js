
      // auto generated
      //var self;

      // class constructor:
      function RToolOptionEventFilter() {
        

        // should be RToolOptionEventFilter_BaseJs.call(this, engine):
        //RToolOptionEventFilter.prototype = new RToolOptionEventFilter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RToolOptionEventFilter.getIdStatic()))) {

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
            qWarning("RToolOptionEventFilter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RToolOptionEventFilter_Wrapper(
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

      

        //copyProperties(this, wrapper, RToolOptionEventFilter);
  }

  
  else {
    
        print("RToolOptionEventFilter(): wrong number / type of arguments");
      
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

      //RToolOptionEventFilter.prototype = new RToolOptionEventFilter_BaseJs(engine);
      //RToolOptionEventFilter.prototype = new RToolOptionEventFilter_Wrapper(engine);
      RToolOptionEventFilter.prototype = new Object();


      RToolOptionEventFilter.prototype.toString = function() {
          //return "RToolOptionEventFilter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RToolOptionEventFilter [JS]";
        };
      RToolOptionEventFilter.getObjectType = function() {
        return RJSType_RToolOptionEventFilter.getIdStatic();
      };

      RToolOptionEventFilter.prototype.getObjectType = function() {
        return RJSType_RToolOptionEventFilter.getIdStatic();
      };

      RToolOptionEventFilter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RToolOptionEventFilter.getIdStatic()) {
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
        RToolOptionEventFilter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RToolOptionEventFilter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RToolOptionEventFilter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RToolOptionEventFilter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RToolOptionEventFilter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RToolOptionEventFilter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RToolOptionEventFilter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RToolOptionEventFilter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RToolOptionEventFilter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RToolOptionEventFilter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RToolOptionEventFilter.prototype.findChild = function(...args) 
          
        {
          //print("JS: RToolOptionEventFilter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RToolOptionEventFilter.prototype.children = function(...args) 
          
        {
          //print("JS: RToolOptionEventFilter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RToolOptionEventFilter.prototype.setParent = function(...args) 
          
        {
          //print("JS: RToolOptionEventFilter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RToolOptionEventFilter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RToolOptionEventFilter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RToolOptionEventFilter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RToolOptionEventFilter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RToolOptionEventFilter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RToolOptionEventFilter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RToolOptionEventFilter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RToolOptionEventFilter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RToolOptionEventFilter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RToolOptionEventFilter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RToolOptionEventFilter.prototype.property = function(...args) 
          
        {
          //print("JS: RToolOptionEventFilter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RToolOptionEventFilter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RToolOptionEventFilter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RToolOptionEventFilter.prototype.parent = function(...args) 
          
        {
          //print("JS: RToolOptionEventFilter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RToolOptionEventFilter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RToolOptionEventFilter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RToolOptionEventFilter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        RToolOptionEventFilter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RToolOptionEventFilter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RToolOptionEventFilter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RToolOptionEventFilter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RToolOptionEventFilter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RToolOptionEventFilter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      