
      // auto generated
      //var self;

      // class constructor:
      function ROperationUtils() {
        

        // should be ROperationUtils_BaseJs.call(this, engine):
        //ROperationUtils.prototype = new ROperationUtils_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_ROperationUtils.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, ROperationUtils);
                
            //}
          }
          else {
            qWarning("ROperationUtils.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("ROperationUtils.js: No constructor found for class ROperationUtils");
            
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

      //ROperationUtils.prototype = new ROperationUtils_BaseJs(engine);
      //ROperationUtils.prototype = new ROperationUtils_Wrapper(engine);
      ROperationUtils.prototype = new Object();

      ROperationUtils.prototype.toString = function() {
          //return "ROperationUtils [JS] [0x" + this.getAddress().toString(16) + "]";
          return "ROperationUtils [JS]";
        };
      ROperationUtils.getObjectType = function() {
        return RJSType_ROperationUtils.getIdStatic();
      };

      ROperationUtils.prototype.getObjectType = function() {
        return RJSType_ROperationUtils.getIdStatic();
      };

      ROperationUtils.prototype.isOfObjectType = function(t) {
        if (t===RJSType_ROperationUtils.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        ROperationUtils.normalizeDrawOrder = function() 
          
        {
          //print("JS: ROperationUtils.normalizeDrawOrder");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return ROperationUtils_WrapperSingletonInstance.normalizeDrawOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, ROperationUtils);
  }

  
  else {
    
        print("ROperationUtils.normalizeDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //ROperationUtils.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //ROperationUtils.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      