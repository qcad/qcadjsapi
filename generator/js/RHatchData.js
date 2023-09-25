
      // auto generated
      //var self;

      // class constructor:
      function RHatchData() {
        

        // should be RHatchData_BaseJs.call(this, engine):
        //RHatchData.prototype = new RHatchData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RHatchData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RHatchData);
            //}
          }
          else {
            qWarning("RHatchData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RHatchData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RHatchData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RHatchData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RHatchData_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RHatchData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RHatchData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RHatchData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RHatchData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RHatchData);
  }

  
  else {
    
        print("RHatchData(): wrong number / type of arguments");
      
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

      //RHatchData.prototype = new RHatchData_BaseJs(engine);
      //RHatchData.prototype = new RHatchData_Wrapper(engine);
      RHatchData.prototype = new Object();

      RHatchData.prototype.toString = function() {
          //return "RHatchData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RHatchData [JS]";
        };
      RHatchData.getObjectType = function() {
        return RJSType_RHatchData.getIdStatic();
      };

      RHatchData.prototype.getObjectType = function() {
        return RJSType_RHatchData.getIdStatic();
      };

      RHatchData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RHatchData.getIdStatic()) {
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
        RHatchData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RHatchData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RHatchData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RHatchData);
  }

  
  else {
    
        print("RHatchData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RHatchData.hasProxy = function() 
          
        {
          //print("JS: RHatchData.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RHatchData_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, RHatchData);
  }

  
  else {
    
        print("RHatchData.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RHatchData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RHatchData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    