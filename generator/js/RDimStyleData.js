
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
              copyProperties(this, wrapper, RDimStyleData);
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
          

        copyProperties(this, wrapper, RDimStyleData);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
    