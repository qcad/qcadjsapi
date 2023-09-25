
      // auto generated
      //var self;

      // class constructor:
      function RDimAngular2LData() {
        

        // should be RDimAngular2LData_BaseJs.call(this, engine):
        //RDimAngular2LData.prototype = new RDimAngular2LData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimAngular2LData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimAngular2LData);
            //}
          }
          else {
            qWarning("RDimAngular2LData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 5) {
    
            self = this;
            wrapper = new RDimAngular2LData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimAngular2LData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimAngular2LData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimAngular2LData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimAngular2LData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimAngular2LData);
  }

  
  else {
    
        print("RDimAngular2LData(): wrong number / type of arguments");
      
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

      //RDimAngular2LData.prototype = new RDimAngular2LData_BaseJs(engine);
      //RDimAngular2LData.prototype = new RDimAngular2LData_Wrapper(engine);
      RDimAngular2LData.prototype = new Object();

      RDimAngular2LData.prototype.toString = function() {
          //return "RDimAngular2LData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimAngular2LData [JS]";
        };
      RDimAngular2LData.getObjectType = function() {
        return RJSType_RDimAngular2LData.getIdStatic();
      };

      RDimAngular2LData.prototype.getObjectType = function() {
        return RJSType_RDimAngular2LData.getIdStatic();
      };

      RDimAngular2LData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimAngular2LData.getIdStatic()) {
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
        RDimAngular2LData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RDimAngular2LData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngular2LData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngular2LData);
  }

  
  else {
    
        print("RDimAngular2LData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimAngular2LData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimAngular2LData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    