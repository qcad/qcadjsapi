
      // auto generated
      //var self;

      // class constructor:
      function RExportListenerAdapter() {
        

        // should be RExportListenerAdapter_BaseJs.call(this, engine):
        //RExportListenerAdapter.prototype = new RExportListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RExportListenerAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RExportListenerAdapter);
                
            //}
          }
          else {
            qWarning("RExportListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RExportListenerAdapter.js: No constructor found for class RExportListenerAdapter");
            
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
              
    this["preExport(RDocumentInterface*)"] = Object.getPrototypeOf(this).preExport;
  
    this["postExport(RDocumentInterface*)"] = Object.getPrototypeOf(this).postExport;
  
    this["endOfExport(RExporter*)"] = Object.getPrototypeOf(this).endOfExport;
  
            }
          
        }

        

      }

      //RExportListenerAdapter.prototype = new RExportListenerAdapter_BaseJs(engine);
      //RExportListenerAdapter.prototype = new RExportListenerAdapter_Wrapper(engine);
      RExportListenerAdapter.prototype = new Object();

      RExportListenerAdapter.prototype.toString = function() {
          //return "RExportListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RExportListenerAdapter [JS]";
        };
      RExportListenerAdapter.getObjectType = function() {
        return RJSType_RExportListenerAdapter.getIdStatic();
      };

      RExportListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RExportListenerAdapter.getIdStatic();
      };

      RExportListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RExportListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RExportListener.getIdStatic()) {
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
      //RExportListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RExportListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      