
      // auto generated
      //var self;

      // class constructor:
      function RExportListener() {
        

        // should be RExportListener_BaseJs.call(this, engine):
        //RExportListener.prototype = new RExportListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RExportListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RExportListener);
            //}
          }
          else {
            qWarning("RExportListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RExportListener.js: No constructor found for class RExportListener");
            
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

      //RExportListener.prototype = new RExportListener_BaseJs(engine);
      //RExportListener.prototype = new RExportListener_Wrapper(engine);
      RExportListener.prototype = new Object();

      RExportListener.prototype.toString = function() {
          //return "RExportListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RExportListener [JS]";
        };
      RExportListener.getObjectType = function() {
        return RJSType_RExportListener.getIdStatic();
      };

      RExportListener.prototype.getObjectType = function() {
        return RJSType_RExportListener.getIdStatic();
      };

      RExportListener.prototype.isOfObjectType = function(t) {
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
      //RExportListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RExportListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    