
      // auto generated
      //var self;

      // class constructor:
      function REllipseData() {
        

        // should be REllipseData_BaseJs.call(this, engine):
        //REllipseData.prototype = new REllipseData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_REllipseData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, REllipseData);
            //}
          }
          else {
            qWarning("REllipseData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 5 &&
          arguments.length <= 6) {
    
            self = this;
            wrapper = new REllipseData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, REllipseData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, REllipseData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new REllipseData_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, REllipseData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, REllipseData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new REllipseData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, REllipseData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, REllipseData);
  }

  
  else {
    
        print("REllipseData(): wrong number / type of arguments");
      
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

      //REllipseData.prototype = new REllipseData_BaseJs(engine);
      //REllipseData.prototype = new REllipseData_Wrapper(engine);
      REllipseData.prototype = new Object();

      REllipseData.prototype.toString = function() {
          //return "REllipseData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "REllipseData [JS]";
        };
      REllipseData.getObjectType = function() {
        return RJSType_REllipseData.getIdStatic();
      };

      REllipseData.prototype.getObjectType = function() {
        return RJSType_REllipseData.getIdStatic();
      };

      REllipseData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_REllipseData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_REllipse.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        REllipseData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: REllipseData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REllipseData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, REllipseData);
  }

  
  else {
    
        print("REllipseData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipseData.createInscribed = function() 
          
        {
          //print("JS: REllipseData.createInscribed");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return REllipseData_WrapperSingletonInstance.createInscribed(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, REllipseData);
  }

  
  else {
    
        print("REllipseData.createInscribed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipseData.createFrom4Points = function() 
          
        {
          //print("JS: REllipseData.createFrom4Points");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return REllipseData_WrapperSingletonInstance.createFrom4Points(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, REllipseData);
  }

  
  else {
    
        print("REllipseData.createFrom4Points(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipseData.hasProxy = function() 
          
        {
          //print("JS: REllipseData.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REllipseData_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, REllipseData);
  }

  
  else {
    
        print("REllipseData.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //REllipseData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //REllipseData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    