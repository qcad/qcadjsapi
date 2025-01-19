
      // auto generated
      //var self;

      // class constructor:
      function RToleranceData() {
        

        // should be RToleranceData_BaseJs.call(this, engine):
        //RToleranceData.prototype = new RToleranceData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RToleranceData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RToleranceData);
            //}
          }
          else {
            qWarning("RToleranceData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RToleranceData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RToleranceData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RToleranceData);
  }

  
  else {
    
        print("RToleranceData(): wrong number / type of arguments");
      
    console.trace();
  }
  
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

      //RToleranceData.prototype = new RToleranceData_BaseJs(engine);
      //RToleranceData.prototype = new RToleranceData_Wrapper(engine);
      RToleranceData.prototype = new Object();

      RToleranceData.prototype.toString = function() {
          //return "RToleranceData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RToleranceData [JS]";
        };
      RToleranceData.getObjectType = function() {
        return RJSType_RToleranceData.getIdStatic();
      };

      RToleranceData.prototype.getObjectType = function() {
        return RJSType_RToleranceData.getIdStatic();
      };

      RToleranceData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RToleranceData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
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
      //RToleranceData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RToleranceData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    