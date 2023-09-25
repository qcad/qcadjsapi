
      // auto generated
      //var self;

      // class constructor:
      function RFileExporterFactory() {
        

        // should be RFileExporterFactory_BaseJs.call(this, engine):
        //RFileExporterFactory.prototype = new RFileExporterFactory_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFileExporterFactory.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RFileExporterFactory);
            //}
          }
          else {
            qWarning("RFileExporterFactory.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RFileExporterFactory.js: No constructor found for class RFileExporterFactory");
            
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
            
          }
        }
      }

      //RFileExporterFactory.prototype = new RFileExporterFactory_BaseJs(engine);
      //RFileExporterFactory.prototype = new RFileExporterFactory_Wrapper(engine);
      RFileExporterFactory.prototype = new Object();

      RFileExporterFactory.prototype.toString = function() {
          //return "RFileExporterFactory [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFileExporterFactory [JS]";
        };
      RFileExporterFactory.getObjectType = function() {
        return RJSType_RFileExporterFactory.getIdStatic();
      };

      RFileExporterFactory.prototype.getObjectType = function() {
        return RJSType_RFileExporterFactory.getIdStatic();
      };

      RFileExporterFactory.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFileExporterFactory.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFileExporterFactory.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFileExporterFactory.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    