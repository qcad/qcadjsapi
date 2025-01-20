
      // auto generated
      //var self;

      // class constructor:
      function RDimStyleData() {
        

        // should be RDimStyleData_BaseJs.call(this, engine):
        //RDimStyleData.prototype = new RDimStyleData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimStyleData.getIdStatic()))) {

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
            qWarning("RDimStyleData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RDimStyleData_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimStyleData);
  }

  
  else {
    
        print("RDimStyleData(): wrong number / type of arguments");
      
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

      //RDimStyleData.prototype = new RDimStyleData_BaseJs(engine);
      //RDimStyleData.prototype = new RDimStyleData_Wrapper(engine);
      RDimStyleData.prototype = new Object();

      RDimStyleData.prototype.toString = function() {
          //return "RDimStyleData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimStyleData [JS]";
        };
      RDimStyleData.getObjectType = function() {
        return RJSType_RDimStyleData.getIdStatic();
      };

      RDimStyleData.prototype.getObjectType = function() {
        return RJSType_RDimStyleData.getIdStatic();
      };

      RDimStyleData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimStyleData.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RDimStyleData.prototype.init = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RDimStyleData.prototype.initDefaults = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.initDefaults");
          return this.__PROXY__.initDefaults(...args);
        };
    
        // function 
        RDimStyleData.prototype.getVariantDefault = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.getVariantDefault");
          return this.__PROXY__.getVariantDefault(...args);
        };
    
        // function 
        RDimStyleData.prototype.getDoubleDefault = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.getDoubleDefault");
          return this.__PROXY__.getDoubleDefault(...args);
        };
    
        // function 
        RDimStyleData.prototype.getIntDefault = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.getIntDefault");
          return this.__PROXY__.getIntDefault(...args);
        };
    
        // function 
        RDimStyleData.prototype.getBoolDefault = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.getBoolDefault");
          return this.__PROXY__.getBoolDefault(...args);
        };
    
        // function 
        RDimStyleData.prototype.getColorDefault = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.getColorDefault");
          return this.__PROXY__.getColorDefault(...args);
        };
    
        // function 
        RDimStyleData.prototype.initFromSettings = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.initFromSettings");
          return this.__PROXY__.initFromSettings(...args);
        };
    
        // function 
        RDimStyleData.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimStyleData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimStyleData.prototype.clear = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        RDimStyleData.prototype.getVariableType = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.getVariableType");
          return this.__PROXY__.getVariableType(...args);
        };
    
        // function 
        RDimStyleData.prototype.getVariant = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.getVariant");
          return this.__PROXY__.getVariant(...args);
        };
    
        // function 
        RDimStyleData.prototype.setVariant = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.setVariant");
          return this.__PROXY__.setVariant(...args);
        };
    
        // function 
        RDimStyleData.prototype.getDouble = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.getDouble");
          return this.__PROXY__.getDouble(...args);
        };
    
        // function 
        RDimStyleData.prototype.setDouble = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.setDouble");
          return this.__PROXY__.setDouble(...args);
        };
    
        // function 
        RDimStyleData.prototype.removeDouble = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.removeDouble");
          return this.__PROXY__.removeDouble(...args);
        };
    
        // function 
        RDimStyleData.prototype.getInt = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.getInt");
          return this.__PROXY__.getInt(...args);
        };
    
        // function 
        RDimStyleData.prototype.setInt = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.setInt");
          return this.__PROXY__.setInt(...args);
        };
    
        // function 
        RDimStyleData.prototype.removeInt = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.removeInt");
          return this.__PROXY__.removeInt(...args);
        };
    
        // function 
        RDimStyleData.prototype.getBool = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.getBool");
          return this.__PROXY__.getBool(...args);
        };
    
        // function 
        RDimStyleData.prototype.setBool = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.setBool");
          return this.__PROXY__.setBool(...args);
        };
    
        // function 
        RDimStyleData.prototype.removeBool = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.removeBool");
          return this.__PROXY__.removeBool(...args);
        };
    
        // function 
        RDimStyleData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimStyleData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimStyleData.prototype.removeColor = function(...args) 
          
        {
          //print("JS: RDimStyleData.prototype.removeColor");
          return this.__PROXY__.removeColor(...args);
        };
    

      // static functions:
      

        // static function 
        RDimStyleData.init = function() 
          
        {
          //print("JS: RDimStyleData.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimStyleData_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimStyleData);
  }

  
  else {
    
        print("RDimStyleData.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimStyleData.initDefaults = function() 
          
        {
          //print("JS: RDimStyleData.initDefaults");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimStyleData_WrapperSingletonInstance.initDefaults(
                  
                );
              

        //copyProperties(this, wrapper, RDimStyleData);
  }

  
  else {
    
        print("RDimStyleData.initDefaults(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimStyleData.getVariantDefault = function() 
          
        {
          //print("JS: RDimStyleData.getVariantDefault");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimStyleData_WrapperSingletonInstance.getVariantDefault(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimStyleData);
  }

  
  else {
    
        print("RDimStyleData.getVariantDefault(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimStyleData.getDoubleDefault = function() 
          
        {
          //print("JS: RDimStyleData.getDoubleDefault");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimStyleData_WrapperSingletonInstance.getDoubleDefault(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimStyleData);
  }

  
  else {
    
        print("RDimStyleData.getDoubleDefault(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimStyleData.getIntDefault = function() 
          
        {
          //print("JS: RDimStyleData.getIntDefault");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimStyleData_WrapperSingletonInstance.getIntDefault(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimStyleData);
  }

  
  else {
    
        print("RDimStyleData.getIntDefault(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimStyleData.getBoolDefault = function() 
          
        {
          //print("JS: RDimStyleData.getBoolDefault");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimStyleData_WrapperSingletonInstance.getBoolDefault(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimStyleData);
  }

  
  else {
    
        print("RDimStyleData.getBoolDefault(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimStyleData.getColorDefault = function() 
          
        {
          //print("JS: RDimStyleData.getColorDefault");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimStyleData_WrapperSingletonInstance.getColorDefault(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimStyleData);
  }

  
  else {
    
        print("RDimStyleData.getColorDefault(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimStyleData.getVariableType = function() 
          
        {
          //print("JS: RDimStyleData.getVariableType");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimStyleData_WrapperSingletonInstance.getVariableType(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimStyleData);
  }

  
  else {
    
        print("RDimStyleData.getVariableType(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimStyleData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimStyleData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimStyleData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      