
      // auto generated
      //var self;

      // class constructor:
      function RImportListener() {
        

        // should be RImportListener_BaseJs.call(this, engine):
        //RImportListener.prototype = new RImportListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RImportListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RImportListener);
                
            //}
          }
          else {
            qWarning("RImportListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RImportListener.js: No constructor found for class RImportListener");
            
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

      //RImportListener.prototype = new RImportListener_BaseJs(engine);
      //RImportListener.prototype = new RImportListener_Wrapper(engine);
      RImportListener.prototype = new Object();

      RImportListener.prototype.toString = function() {
          //return "RImportListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RImportListener [JS]";
        };
      RImportListener.getObjectType = function() {
        return RJSType_RImportListener.getIdStatic();
      };

      RImportListener.prototype.getObjectType = function() {
        return RJSType_RImportListener.getIdStatic();
      };

      RImportListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RImportListener.getIdStatic()) {
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
      //RImportListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RImportListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      