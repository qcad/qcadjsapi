
      // auto generated
      //var self;

      // class constructor:
      function RFileImporterFactory() {
        

        // should be RFileImporterFactory_BaseJs.call(this, engine):
        //RFileImporterFactory.prototype = new RFileImporterFactory_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFileImporterFactory.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RFileImporterFactory);
                
            //}
          }
          else {
            qWarning("RFileImporterFactory.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RFileImporterFactory.js: No constructor found for class RFileImporterFactory");
            
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

      //RFileImporterFactory.prototype = new RFileImporterFactory_BaseJs(engine);
      //RFileImporterFactory.prototype = new RFileImporterFactory_Wrapper(engine);
      RFileImporterFactory.prototype = new Object();

      RFileImporterFactory.prototype.toString = function() {
          //return "RFileImporterFactory [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFileImporterFactory [JS]";
        };
      RFileImporterFactory.getObjectType = function() {
        return RJSType_RFileImporterFactory.getIdStatic();
      };

      RFileImporterFactory.prototype.getObjectType = function() {
        return RJSType_RFileImporterFactory.getIdStatic();
      };

      RFileImporterFactory.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFileImporterFactory.getIdStatic()) {
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
      //RFileImporterFactory.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFileImporterFactory.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      