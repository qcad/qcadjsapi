
      // auto generated
      //var self;

      // class constructor:
      function RDimAngularData() {
        

        // should be RDimAngularData_BaseJs.call(this, engine):
        //RDimAngularData.prototype = new RDimAngularData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimAngularData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimAngularData);
            //}
          }
          else {
            qWarning("RDimAngularData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RDimAngularData.js: No constructor found for class RDimAngularData");
            
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

      //RDimAngularData.prototype = new RDimAngularData_BaseJs(engine);
      //RDimAngularData.prototype = new RDimAngularData_Wrapper(engine);
      RDimAngularData.prototype = new Object();

      RDimAngularData.prototype.toString = function() {
          //return "RDimAngularData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimAngularData [JS]";
        };
      RDimAngularData.getObjectType = function() {
        return RJSType_RDimAngularData.getIdStatic();
      };

      RDimAngularData.prototype.getObjectType = function() {
        return RJSType_RDimAngularData.getIdStatic();
      };

      RDimAngularData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimAngularData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimensionData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RDimAngularData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RDimAngularData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngularData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngularData);
  }

  
  else {
    
        print("RDimAngularData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimAngularData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimAngularData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    