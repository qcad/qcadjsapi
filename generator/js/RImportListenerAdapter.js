
      // auto generated
      //var self;

      // class constructor:
      function RImportListenerAdapter() {
        

        // should be RImportListenerAdapter_BaseJs.call(this, engine):
        //RImportListenerAdapter.prototype = new RImportListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RImportListenerAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RImportListenerAdapter);
                
            //}
          }
          else {
            qWarning("RImportListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RImportListenerAdapter.js: No constructor found for class RImportListenerAdapter");
            
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
              
    this["preImport(RDocumentInterface*)"] = Object.getPrototypeOf(this).preImport;
  
    this["postImport(RDocumentInterface*)"] = Object.getPrototypeOf(this).postImport;
  
            }
          
        }

        

      }

      //RImportListenerAdapter.prototype = new RImportListenerAdapter_BaseJs(engine);
      //RImportListenerAdapter.prototype = new RImportListenerAdapter_Wrapper(engine);
      RImportListenerAdapter.prototype = new Object();

      RImportListenerAdapter.prototype.toString = function() {
          //return "RImportListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RImportListenerAdapter [JS]";
        };
      RImportListenerAdapter.getObjectType = function() {
        return RJSType_RImportListenerAdapter.getIdStatic();
      };

      RImportListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RImportListenerAdapter.getIdStatic();
      };

      RImportListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RImportListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
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
      //RImportListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RImportListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      