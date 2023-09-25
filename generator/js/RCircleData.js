
      // auto generated
      //var self;

      // class constructor:
      function RCircleData() {
        

        // should be RCircleData_BaseJs.call(this, engine):
        //RCircleData.prototype = new RCircleData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCircleData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RCircleData);
            //}
          }
          else {
            qWarning("RCircleData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RCircleData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCircleData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCircleData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RCircleData_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCircleData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCircleData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RCircleData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCircleData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCircleData);
  }

  
  else {
    
        print("RCircleData(): wrong number / type of arguments");
      
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

      //RCircleData.prototype = new RCircleData_BaseJs(engine);
      //RCircleData.prototype = new RCircleData_Wrapper(engine);
      RCircleData.prototype = new Object();

      RCircleData.prototype.toString = function() {
          //return "RCircleData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCircleData [JS]";
        };
      RCircleData.getObjectType = function() {
        return RJSType_RCircleData.getIdStatic();
      };

      RCircleData.prototype.getObjectType = function() {
        return RJSType_RCircleData.getIdStatic();
      };

      RCircleData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCircleData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RCircle.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RCircleData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RCircleData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RCircleData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RCircleData);
  }

  
  else {
    
        print("RCircleData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircleData.createFrom2Points = function() 
          
        {
          //print("JS: RCircleData.createFrom2Points");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RCircleData_WrapperSingletonInstance.createFrom2Points(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RCircleData);
  }

  
  else {
    
        print("RCircleData.createFrom2Points(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircleData.createFrom3Points = function() 
          
        {
          //print("JS: RCircleData.createFrom3Points");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RCircleData_WrapperSingletonInstance.createFrom3Points(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircleData);
  }

  
  else {
    
        print("RCircleData.createFrom3Points(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RCircleData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCircleData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    