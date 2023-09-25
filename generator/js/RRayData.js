
      // auto generated
      //var self;

      // class constructor:
      function RRayData() {
        

        // should be RRayData_BaseJs.call(this, engine):
        //RRayData.prototype = new RRayData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRayData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RRayData);
            //}
          }
          else {
            qWarning("RRayData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RRayData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRayData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRayData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RRayData_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRayData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRayData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RRayData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRayData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRayData);
  }

  
  else {
    
        print("RRayData(): wrong number / type of arguments");
      
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

      //RRayData.prototype = new RRayData_BaseJs(engine);
      //RRayData.prototype = new RRayData_Wrapper(engine);
      RRayData.prototype = new Object();

      RRayData.prototype.toString = function() {
          //return "RRayData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRayData [JS]";
        };
      RRayData.getObjectType = function() {
        return RJSType_RRayData.getIdStatic();
      };

      RRayData.prototype.getObjectType = function() {
        return RJSType_RRayData.getIdStatic();
      };

      RRayData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRayData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RRay.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RRayData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RRayData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RRayData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RRayData);
  }

  
  else {
    
        print("RRayData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RRayData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRayData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    