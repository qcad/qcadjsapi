
      // auto generated
      //var self;

      // class constructor:
      function RDimDiametricData() {
        

        // should be RDimDiametricData_BaseJs.call(this, engine):
        //RDimDiametricData.prototype = new RDimDiametricData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimDiametricData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimDiametricData);
            //}
          }
          else {
            qWarning("RDimDiametricData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimDiametricData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimDiametricData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimDiametricData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimDiametricData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimDiametricData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimDiametricData);
  }

  
  else {
    
        print("RDimDiametricData(): wrong number / type of arguments");
      
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

      //RDimDiametricData.prototype = new RDimDiametricData_BaseJs(engine);
      //RDimDiametricData.prototype = new RDimDiametricData_Wrapper(engine);
      RDimDiametricData.prototype = new Object();

      RDimDiametricData.prototype.toString = function() {
          //return "RDimDiametricData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimDiametricData [JS]";
        };
      RDimDiametricData.getObjectType = function() {
        return RJSType_RDimDiametricData.getIdStatic();
      };

      RDimDiametricData.prototype.getObjectType = function() {
        return RJSType_RDimDiametricData.getIdStatic();
      };

      RDimDiametricData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimDiametricData.getIdStatic()) {
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
        RDimDiametricData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RDimDiametricData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimDiametricData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RDimDiametricData);
  }

  
  else {
    
        print("RDimDiametricData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimDiametricData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimDiametricData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    