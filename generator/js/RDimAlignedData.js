
      // auto generated
      //var self;

      // class constructor:
      function RDimAlignedData() {
        

        // should be RDimAlignedData_BaseJs.call(this, engine):
        //RDimAlignedData.prototype = new RDimAlignedData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimAlignedData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimAlignedData);
            //}
          }
          else {
            qWarning("RDimAlignedData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RDimAlignedData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimAlignedData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimAlignedData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimAlignedData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimAlignedData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimAlignedData);
  }

  
  else {
    
        print("RDimAlignedData(): wrong number / type of arguments");
      
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

      //RDimAlignedData.prototype = new RDimAlignedData_BaseJs(engine);
      //RDimAlignedData.prototype = new RDimAlignedData_Wrapper(engine);
      RDimAlignedData.prototype = new Object();

      RDimAlignedData.prototype.toString = function() {
          //return "RDimAlignedData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimAlignedData [JS]";
        };
      RDimAlignedData.getObjectType = function() {
        return RJSType_RDimAlignedData.getIdStatic();
      };

      RDimAlignedData.prototype.getObjectType = function() {
        return RJSType_RDimAlignedData.getIdStatic();
      };

      RDimAlignedData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimAlignedData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimensionData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimLinearData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RDimAlignedData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RDimAlignedData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAlignedData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RDimAlignedData);
  }

  
  else {
    
        print("RDimAlignedData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimAlignedData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimAlignedData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    