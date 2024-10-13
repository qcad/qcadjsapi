
      // auto generated
      //var self;

      // class constructor:
      function RLeaderData() {
        

        // should be RLeaderData_BaseJs.call(this, engine):
        //RLeaderData.prototype = new RLeaderData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLeaderData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RLeaderData);
            //}
          }
          else {
            qWarning("RLeaderData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RLeaderData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLeaderData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLeaderData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RLeaderData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLeaderData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLeaderData);
  }

  
  else {
    
        print("RLeaderData(): wrong number / type of arguments");
      
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

      //RLeaderData.prototype = new RLeaderData_BaseJs(engine);
      //RLeaderData.prototype = new RLeaderData_Wrapper(engine);
      RLeaderData.prototype = new Object();

      RLeaderData.prototype.toString = function() {
          //return "RLeaderData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLeaderData [JS]";
        };
      RLeaderData.getObjectType = function() {
        return RJSType_RLeaderData.getIdStatic();
      };

      RLeaderData.prototype.getObjectType = function() {
        return RJSType_RLeaderData.getIdStatic();
      };

      RLeaderData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLeaderData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPolyline.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RLeaderData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RLeaderData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLeaderData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RLeaderData);
  }

  
  else {
    
        print("RLeaderData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLeaderData.isStraight = function() 
          
        {
          //print("JS: RLeaderData.isStraight");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLeaderData_WrapperSingletonInstance.isStraight(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLeaderData);
  }

  
  else {
    
        print("RLeaderData.isStraight(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLeaderData.hasProxy = function() 
          
        {
          //print("JS: RLeaderData.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLeaderData_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, RLeaderData);
  }

  
  else {
    
        print("RLeaderData.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RLeaderData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLeaderData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    