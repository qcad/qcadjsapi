
      // auto generated
      //var self;

      // class constructor:
      function RDimAngular3PData() {
        

        // should be RDimAngular3PData_BaseJs.call(this, engine):
        //RDimAngular3PData.prototype = new RDimAngular3PData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimAngular3PData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimAngular3PData);
            //}
          }
          else {
            qWarning("RDimAngular3PData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RDimAngular3PData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimAngular3PData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimAngular3PData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimAngular3PData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimAngular3PData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimAngular3PData);
  }

  
  else {
    
        print("RDimAngular3PData(): wrong number / type of arguments");
      
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

      //RDimAngular3PData.prototype = new RDimAngular3PData_BaseJs(engine);
      //RDimAngular3PData.prototype = new RDimAngular3PData_Wrapper(engine);
      RDimAngular3PData.prototype = new Object();

      RDimAngular3PData.prototype.toString = function() {
          //return "RDimAngular3PData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimAngular3PData [JS]";
        };
      RDimAngular3PData.getObjectType = function() {
        return RJSType_RDimAngular3PData.getIdStatic();
      };

      RDimAngular3PData.prototype.getObjectType = function() {
        return RJSType_RDimAngular3PData.getIdStatic();
      };

      RDimAngular3PData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimAngular3PData.getIdStatic()) {
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
        RDimAngular3PData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RDimAngular3PData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngular3PData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngular3PData);
  }

  
  else {
    
        print("RDimAngular3PData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimAngular3PData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimAngular3PData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    