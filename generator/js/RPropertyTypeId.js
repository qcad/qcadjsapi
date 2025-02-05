
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        RPropertyTypeId.prototype.getId = function(...args) 
          
        {
          //print("JS: RPropertyTypeId.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RPropertyTypeId.prototype.setId = function(...args) 
          
        {
          //print("JS: RPropertyTypeId.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RPropertyTypeId.prototype.getCustomPropertyTitle = function(...args) 
          
        {
          //print("JS: RPropertyTypeId.prototype.getCustomPropertyTitle");
          return this.__PROXY__.getCustomPropertyTitle(...args);
        };
    
        // function 
        RPropertyTypeId.prototype.setCustomPropertyTitle = function(...args) 
          
        {
          //print("JS: RPropertyTypeId.prototype.setCustomPropertyTitle");
          return this.__PROXY__.setCustomPropertyTitle(...args);
        };
    
        // function 
        RPropertyTypeId.prototype.getCustomPropertyName = function(...args) 
          
        {
          //print("JS: RPropertyTypeId.prototype.getCustomPropertyName");
          return this.__PROXY__.getCustomPropertyName(...args);
        };
    
        // function 
        RPropertyTypeId.prototype.setCustomPropertyName = function(...args) 
          
        {
          //print("JS: RPropertyTypeId.prototype.setCustomPropertyName");
          return this.__PROXY__.setCustomPropertyName(...args);
        };
    
        // function 
        RPropertyTypeId.prototype.isValid = function(...args) 
          
        {
          //print("JS: RPropertyTypeId.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RPropertyTypeId.prototype.isCustom = function(...args) 
          
        {
          //print("JS: RPropertyTypeId.prototype.isCustom");
          return this.__PROXY__.isCustom(...args);
        };
    
        // function 
        RPropertyTypeId.prototype.generateId = function(...args) 
          
        {
          //print("JS: RPropertyTypeId.prototype.generateId");
          return this.__PROXY__.generateId(...args);
        };
    
        // function 
        RPropertyTypeId.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RPropertyTypeId.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RPropertyTypeId.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RPropertyTypeId.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RPropertyTypeId.prototype.getPropertyGroupTitle = function(...args) 
          
        {
          //print("JS: RPropertyTypeId.prototype.getPropertyGroupTitle");
          return this.__PROXY__.getPropertyGroupTitle(...args);
        };
    
        // function 
        RPropertyTypeId.prototype.getPropertyTitle = function(...args) 
          
        {
          //print("JS: RPropertyTypeId.prototype.getPropertyTitle");
          return this.__PROXY__.getPropertyTitle(...args);
        };
    
        // function 
        RPropertyTypeId.prototype.getPropertyTypeId = function(...args) 
          
        {
          //print("JS: RPropertyTypeId.prototype.getPropertyTypeId");
          return this.__PROXY__.getPropertyTypeId(...args);
        };
    

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

      RPropertyTypeId.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      