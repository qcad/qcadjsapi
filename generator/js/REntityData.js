
      // auto generated
      //var self;

      // class constructor:
      function REntityData() {
        

        // should be REntityData_BaseJs.call(this, engine):
        //REntityData.prototype = new REntityData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_REntityData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, REntityData);
            //}
          }
          else {
            qWarning("REntityData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("REntityData.js: No constructor found for class REntityData");
            
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

      //REntityData.prototype = new REntityData_BaseJs(engine);
      //REntityData.prototype = new REntityData_Wrapper(engine);
      REntityData.prototype = new Object();

      REntityData.prototype.toString = function() {
          //return "REntityData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "REntityData [JS]";
        };
      REntityData.getObjectType = function() {
        return RJSType_REntityData.getIdStatic();
      };

      REntityData.prototype.getObjectType = function() {
        return RJSType_REntityData.getIdStatic();
      };

      REntityData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_REntityData.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        REntityData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: REntityData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REntityData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, REntityData);
  }

  
  else {
    
        print("REntityData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //REntityData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //REntityData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    