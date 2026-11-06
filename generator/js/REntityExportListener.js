
      // auto generated
      //var self;

      // class constructor:
      function REntityExportListener() {
        

        // should be REntityExportListener_BaseJs.call(this, engine):
        //REntityExportListener.prototype = new REntityExportListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_REntityExportListener.getIdStatic()))) {

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
            qWarning("REntityExportListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("REntityExportListener.js: No constructor found for class REntityExportListener");
            
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

      //REntityExportListener.prototype = new REntityExportListener_BaseJs(engine);
      //REntityExportListener.prototype = new REntityExportListener_Wrapper(engine);
      REntityExportListener.prototype = new Object();


      REntityExportListener.prototype.toString = function() {
          //return "REntityExportListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "REntityExportListener [JS]";
        };
      REntityExportListener.getObjectType = function() {
        return RJSType_REntityExportListener.getIdStatic();
      };

      REntityExportListener.prototype.getObjectType = function() {
        return RJSType_REntityExportListener.getIdStatic();
      };

      REntityExportListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_REntityExportListener.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        REntityExportListener.prototype.registerCustomProperty = function(...args) 
          
        {
          //print("JS: REntityExportListener.prototype.registerCustomProperty");
          
              return this.__PROXY__.registerCustomProperty(...args);
            
        };
        
        // function 
        REntityExportListener.prototype.checkCustomProperty = function(...args) 
          
        {
          //print("JS: REntityExportListener.prototype.checkCustomProperty");
          
              return this.__PROXY__.checkCustomProperty(...args);
            
        };
        
        // function 
        REntityExportListener.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: REntityExportListener.prototype.exportEntity");
          
              return this.__PROXY__.exportEntity(...args);
            
        };
        

      // static functions:
      REntityExportListener.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      REntityExportListener.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      REntityExportListener.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //REntityExportListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //REntityExportListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      REntityExportListener.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      