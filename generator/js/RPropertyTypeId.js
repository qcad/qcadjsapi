
      // auto generated
      //var self;

      // class constructor:
      function RPropertyTypeId() {
        

        // should be RPropertyTypeId_BaseJs.call(this, engine):
        //RPropertyTypeId.prototype = new RPropertyTypeId_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPropertyTypeId.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPropertyTypeId);
            //}
          }
          else {
            qWarning("RPropertyTypeId.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RPropertyTypeId_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPropertyTypeId);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPropertyTypeId);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPropertyTypeId_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPropertyTypeId);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPropertyTypeId);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPropertyTypeId_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPropertyTypeId);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPropertyTypeId);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RPropertyTypeId_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPropertyTypeId);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPropertyTypeId);
  }

  
  else {
    
        print("RPropertyTypeId(): wrong number / type of arguments");
      
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

      //RPropertyTypeId.prototype = new RPropertyTypeId_BaseJs(engine);
      //RPropertyTypeId.prototype = new RPropertyTypeId_Wrapper(engine);
      RPropertyTypeId.prototype = new Object();

      RPropertyTypeId.prototype.toString = function() {
          //return "RPropertyTypeId [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPropertyTypeId [JS]";
        };
      RPropertyTypeId.getObjectType = function() {
        return RJSType_RPropertyTypeId.getIdStatic();
      };

      RPropertyTypeId.prototype.getObjectType = function() {
        return RJSType_RPropertyTypeId.getIdStatic();
      };

      RPropertyTypeId.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPropertyTypeId.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RPropertyTypeId.getPropertyTypeIds = function() 
          
        {
          //print("JS: RPropertyTypeId.getPropertyTypeIds");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RPropertyTypeId_WrapperSingletonInstance.getPropertyTypeIds(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPropertyTypeId);
  }

  
  else {
    
        print("RPropertyTypeId.getPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPropertyTypeId.hasPropertyType = function() 
          
        {
          //print("JS: RPropertyTypeId.hasPropertyType");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RPropertyTypeId_WrapperSingletonInstance.hasPropertyType(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPropertyTypeId);
  }

  
  else {
    
        print("RPropertyTypeId.hasPropertyType(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPropertyTypeId.getPropertyTypeId = function() 
          
        {
          //print("JS: RPropertyTypeId.getPropertyTypeId");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RPropertyTypeId_WrapperSingletonInstance.getPropertyTypeId(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPropertyTypeId);
  }

  
  else {
    
        print("RPropertyTypeId.getPropertyTypeId(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPropertyTypeId.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPropertyTypeId.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    