
      // auto generated
      //var self;

      // class constructor:
      function RDimArcLengthData() {
        

        // should be RDimArcLengthData_BaseJs.call(this, engine):
        //RDimArcLengthData.prototype = new RDimArcLengthData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimArcLengthData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimArcLengthData);
            //}
          }
          else {
            qWarning("RDimArcLengthData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RDimArcLengthData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimArcLengthData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimArcLengthData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimArcLengthData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimArcLengthData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimArcLengthData);
  }

  
  else {
    
        print("RDimArcLengthData(): wrong number / type of arguments");
      
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

      //RDimArcLengthData.prototype = new RDimArcLengthData_BaseJs(engine);
      //RDimArcLengthData.prototype = new RDimArcLengthData_Wrapper(engine);
      RDimArcLengthData.prototype = new Object();

      RDimArcLengthData.prototype.toString = function() {
          //return "RDimArcLengthData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimArcLengthData [JS]";
        };
      RDimArcLengthData.getObjectType = function() {
        return RJSType_RDimArcLengthData.getIdStatic();
      };

      RDimArcLengthData.prototype.getObjectType = function() {
        return RJSType_RDimArcLengthData.getIdStatic();
      };

      RDimArcLengthData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimArcLengthData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimensionData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimAngularData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RDimArcLengthData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RDimArcLengthData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimArcLengthData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RDimArcLengthData);
  }

  
  else {
    
        print("RDimArcLengthData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimArcLengthData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimArcLengthData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    