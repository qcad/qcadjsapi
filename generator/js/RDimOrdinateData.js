
      // auto generated
      //var self;

      // class constructor:
      function RDimOrdinateData() {
        

        // should be RDimOrdinateData_BaseJs.call(this, engine):
        //RDimOrdinateData.prototype = new RDimOrdinateData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimOrdinateData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimOrdinateData);
            //}
          }
          else {
            qWarning("RDimOrdinateData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RDimOrdinateData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimOrdinateData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimOrdinateData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimOrdinateData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimOrdinateData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimOrdinateData);
  }

  
  else {
    
        print("RDimOrdinateData(): wrong number / type of arguments");
      
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

      //RDimOrdinateData.prototype = new RDimOrdinateData_BaseJs(engine);
      //RDimOrdinateData.prototype = new RDimOrdinateData_Wrapper(engine);
      RDimOrdinateData.prototype = new Object();

      RDimOrdinateData.prototype.toString = function() {
          //return "RDimOrdinateData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimOrdinateData [JS]";
        };
      RDimOrdinateData.getObjectType = function() {
        return RJSType_RDimOrdinateData.getIdStatic();
      };

      RDimOrdinateData.prototype.getObjectType = function() {
        return RJSType_RDimOrdinateData.getIdStatic();
      };

      RDimOrdinateData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimOrdinateData.getIdStatic()) {
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
        RDimOrdinateData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RDimOrdinateData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimOrdinateData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RDimOrdinateData);
  }

  
  else {
    
        print("RDimOrdinateData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimOrdinateData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimOrdinateData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    