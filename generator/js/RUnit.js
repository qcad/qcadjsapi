
      // auto generated
      //var self;

      // class constructor:
      function RUnit() {
        

        // should be RUnit_BaseJs.call(this, engine):
        //RUnit.prototype = new RUnit_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RUnit.getIdStatic()))) {

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
            qWarning("RUnit.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RUnit_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RUnit);
  }

  
  else {
    
        print("RUnit(): wrong number / type of arguments");
      
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

      //RUnit.prototype = new RUnit_BaseJs(engine);
      //RUnit.prototype = new RUnit_Wrapper(engine);
      RUnit.prototype = new Object();

      RUnit.prototype.toString = function() {
          //return "RUnit [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RUnit [JS]";
        };
      RUnit.getObjectType = function() {
        return RJSType_RUnit.getIdStatic();
      };

      RUnit.prototype.getObjectType = function() {
        return RJSType_RUnit.getIdStatic();
      };

      RUnit.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RUnit.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RUnit.prototype.formatLinear = function(...args) 
          
        {
          //print("JS: RUnit.prototype.formatLinear");
          return this.__PROXY__.formatLinear(...args);
        };
    
        // function 
        RUnit.prototype.formatScientific = function(...args) 
          
        {
          //print("JS: RUnit.prototype.formatScientific");
          return this.__PROXY__.formatScientific(...args);
        };
    
        // function 
        RUnit.prototype.formatDecimal = function(...args) 
          
        {
          //print("JS: RUnit.prototype.formatDecimal");
          return this.__PROXY__.formatDecimal(...args);
        };
    
        // function 
        RUnit.prototype.formatEngineering = function(...args) 
          
        {
          //print("JS: RUnit.prototype.formatEngineering");
          return this.__PROXY__.formatEngineering(...args);
        };
    
        // function 
        RUnit.prototype.formatArchitectural = function(...args) 
          
        {
          //print("JS: RUnit.prototype.formatArchitectural");
          return this.__PROXY__.formatArchitectural(...args);
        };
    
        // function 
        RUnit.prototype.formatFractional = function(...args) 
          
        {
          //print("JS: RUnit.prototype.formatFractional");
          return this.__PROXY__.formatFractional(...args);
        };
    
        // function 
        RUnit.prototype.formatAngle = function(...args) 
          
        {
          //print("JS: RUnit.prototype.formatAngle");
          return this.__PROXY__.formatAngle(...args);
        };
    
        // function 
        RUnit.prototype.isMetric = function(...args) 
          
        {
          //print("JS: RUnit.prototype.isMetric");
          return this.__PROXY__.isMetric(...args);
        };
    
        // function 
        RUnit.prototype.convert = function(...args) 
          
        {
          //print("JS: RUnit.prototype.convert");
          return this.__PROXY__.convert(...args);
        };
    
        // function 
        RUnit.prototype.getFactorToM = function(...args) 
          
        {
          //print("JS: RUnit.prototype.getFactorToM");
          return this.__PROXY__.getFactorToM(...args);
        };
    
        // function 
        RUnit.prototype.parseUnit = function(...args) 
          
        {
          //print("JS: RUnit.prototype.parseUnit");
          return this.__PROXY__.parseUnit(...args);
        };
    
        // function 
        RUnit.prototype.unitToSymbol = function(...args) 
          
        {
          //print("JS: RUnit.prototype.unitToSymbol");
          return this.__PROXY__.unitToSymbol(...args);
        };
    
        // function 
        RUnit.prototype.unitToName = function(...args) 
          
        {
          //print("JS: RUnit.prototype.unitToName");
          return this.__PROXY__.unitToName(...args);
        };
    
        // function 
        RUnit.prototype.getLabel = function(...args) 
          
        {
          //print("JS: RUnit.prototype.getLabel");
          return this.__PROXY__.getLabel(...args);
        };
    
        // function 
        RUnit.prototype.doubleToString = function(...args) 
          
        {
          //print("JS: RUnit.prototype.doubleToString");
          return this.__PROXY__.doubleToString(...args);
        };
    
        // function 
        RUnit.prototype.doubleToStringDec = function(...args) 
          
        {
          //print("JS: RUnit.prototype.doubleToStringDec");
          return this.__PROXY__.doubleToStringDec(...args);
        };
    

      // static functions:
      

        // static function 
        RUnit.formatLinear = function() 
          
        {
          //print("JS: RUnit.formatLinear");
          
      if (arguments.length >= 4 &&
          arguments.length <= 9) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.formatLinear(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else {
    
        print("RUnit.formatLinear(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUnit.formatScientific = function() 
          
        {
          //print("JS: RUnit.formatScientific");
          
      if (arguments.length >= 3 &&
          arguments.length <= 7) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.formatScientific(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else {
    
        print("RUnit.formatScientific(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUnit.formatDecimal = function() 
          
        {
          //print("JS: RUnit.formatDecimal");
          
      if (arguments.length >= 3 &&
          arguments.length <= 8) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.formatDecimal(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else {
    
        print("RUnit.formatDecimal(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUnit.formatEngineering = function() 
          
        {
          //print("JS: RUnit.formatEngineering");
          
      if (arguments.length >= 3 &&
          arguments.length <= 7) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.formatEngineering(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else {
    
        print("RUnit.formatEngineering(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUnit.formatArchitectural = function() 
          
        {
          //print("JS: RUnit.formatArchitectural");
          
      if (arguments.length >= 3 &&
          arguments.length <= 7) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.formatArchitectural(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else {
    
        print("RUnit.formatArchitectural(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUnit.formatFractional = function() 
          
        {
          //print("JS: RUnit.formatFractional");
          
      if (arguments.length >= 3 &&
          arguments.length <= 7) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.formatFractional(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else {
    
        print("RUnit.formatFractional(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUnit.formatAngle = function() 
          
        {
          //print("JS: RUnit.formatAngle");
          
      if (arguments.length >= 3 &&
          arguments.length <= 6) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.formatAngle(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else {
    
        print("RUnit.formatAngle(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUnit.isMetric = function() 
          
        {
          //print("JS: RUnit.isMetric");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.isMetric(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else {
    
        print("RUnit.isMetric(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUnit.convert = function() 
          
        {
          //print("JS: RUnit.convert");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.convert(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else 
  
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.convert(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else {
    
        print("RUnit.convert(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUnit.getFactorToM = function() 
          
        {
          //print("JS: RUnit.getFactorToM");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.getFactorToM(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else {
    
        print("RUnit.getFactorToM(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUnit.parseUnit = function() 
          
        {
          //print("JS: RUnit.parseUnit");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.parseUnit(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else {
    
        print("RUnit.parseUnit(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUnit.unitToSymbol = function() 
          
        {
          //print("JS: RUnit.unitToSymbol");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.unitToSymbol(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else {
    
        print("RUnit.unitToSymbol(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUnit.unitToName = function() 
          
        {
          //print("JS: RUnit.unitToName");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.unitToName(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else {
    
        print("RUnit.unitToName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUnit.getLabel = function() 
          
        {
          //print("JS: RUnit.getLabel");
          
      if (arguments.length >= 2 &&
          arguments.length <= 6) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.getLabel(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else {
    
        print("RUnit.getLabel(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUnit.doubleToString = function() 
          
        {
          //print("JS: RUnit.doubleToString");
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.doubleToString(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.doubleToString(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else {
    
        print("RUnit.doubleToString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUnit.doubleToStringDec = function() 
          
        {
          //print("JS: RUnit.doubleToStringDec");
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RUnit_WrapperSingletonInstance.doubleToStringDec(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RUnit);
  }

  
  else {
    
        print("RUnit.doubleToStringDec(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RUnit.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RUnit.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RUnit.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      