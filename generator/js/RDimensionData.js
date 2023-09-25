
      // auto generated
      //var self;

      // class constructor:
      function RDimensionData() {
        

        // should be RDimensionData_BaseJs.call(this, engine):
        //RDimensionData.prototype = new RDimensionData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimensionData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimensionData);
            //}
          }
          else {
            qWarning("RDimensionData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 9) {
    
            self = this;
            wrapper = new RDimensionData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimensionData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimensionData);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RDimensionData_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimensionData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimensionData);
  }

  
  else {
    
        print("RDimensionData(): wrong number / type of arguments");
      
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

      //RDimensionData.prototype = new RDimensionData_BaseJs(engine);
      //RDimensionData.prototype = new RDimensionData_Wrapper(engine);
      RDimensionData.prototype = new Object();

      RDimensionData.prototype.toString = function() {
          //return "RDimensionData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimensionData [JS]";
        };
      RDimensionData.getObjectType = function() {
        return RJSType_RDimensionData.getIdStatic();
      };

      RDimensionData.prototype.getObjectType = function() {
        return RJSType_RDimensionData.getIdStatic();
      };

      RDimensionData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimensionData.getIdStatic()) {
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
      

        // static function 
        RDimensionData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RDimensionData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimensionData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RDimensionData);
  }

  
  else {
    
        print("RDimensionData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimensionData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimensionData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    