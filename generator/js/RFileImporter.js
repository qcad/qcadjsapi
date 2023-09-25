
      // auto generated
      //var self;

      // class constructor:
      function RFileImporter() {
        

        // should be RFileImporter_BaseJs.call(this, engine):
        //RFileImporter.prototype = new RFileImporter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFileImporter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RFileImporter);
            //}
          }
          else {
            qWarning("RFileImporter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RFileImporter.js: No constructor found for class RFileImporter");
            
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

      //RFileImporter.prototype = new RFileImporter_BaseJs(engine);
      //RFileImporter.prototype = new RFileImporter_Wrapper(engine);
      RFileImporter.prototype = new Object();

      RFileImporter.prototype.toString = function() {
          //return "RFileImporter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFileImporter [JS]";
        };
      RFileImporter.getObjectType = function() {
        return RJSType_RFileImporter.getIdStatic();
      };

      RFileImporter.prototype.getObjectType = function() {
        return RJSType_RFileImporter.getIdStatic();
      };

      RFileImporter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFileImporter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RImporter.getIdStatic()) {
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
      //RFileImporter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFileImporter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    