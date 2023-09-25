
      // auto generated
      //var self;

      // class constructor:
      function RDxfServices() {
        

        // should be RDxfServices_BaseJs.call(this, engine):
        //RDxfServices.prototype = new RDxfServices_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDxfServices.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDxfServices);
            //}
          }
          else {
            qWarning("RDxfServices.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDxfServices_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDxfServices);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDxfServices);
  }

  
  else {
    
        print("RDxfServices(): wrong number / type of arguments");
      
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

      //RDxfServices.prototype = new RDxfServices_BaseJs(engine);
      //RDxfServices.prototype = new RDxfServices_Wrapper(engine);
      RDxfServices.prototype = new Object();

      RDxfServices.prototype.toString = function() {
          //return "RDxfServices [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDxfServices [JS]";
        };
      RDxfServices.getObjectType = function() {
        return RJSType_RDxfServices.getIdStatic();
      };

      RDxfServices.prototype.getObjectType = function() {
        return RJSType_RDxfServices.getIdStatic();
      };

      RDxfServices.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDxfServices.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RDxfServices.Unknown = RDxfServices_Wrapper.Unknown;
RDxfServices.String = RDxfServices_Wrapper.String;
RDxfServices.Int = RDxfServices_Wrapper.Int;
RDxfServices.Float = RDxfServices_Wrapper.Float;
RDxfServices.Vector = RDxfServices_Wrapper.Vector;


      // functions:
      

      // static functions:
      

        // static function 
        RDxfServices.getSafeBlockName = function() 
          
        {
          //print("JS: RDxfServices.getSafeBlockName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDxfServices_WrapperSingletonInstance.getSafeBlockName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDxfServices);
  }

  
  else {
    
        print("RDxfServices.getSafeBlockName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDxfServices.numberToColor24 = function() 
          
        {
          //print("JS: RDxfServices.numberToColor24");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDxfServices_WrapperSingletonInstance.numberToColor24(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDxfServices);
  }

  
  else {
    
        print("RDxfServices.numberToColor24(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDxfServices.numberToWeight = function() 
          
        {
          //print("JS: RDxfServices.numberToWeight");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDxfServices_WrapperSingletonInstance.numberToWeight(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDxfServices);
  }

  
  else {
    
        print("RDxfServices.numberToWeight(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDxfServices.widthToNumber = function() 
          
        {
          //print("JS: RDxfServices.widthToNumber");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDxfServices_WrapperSingletonInstance.widthToNumber(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDxfServices);
  }

  
  else {
    
        print("RDxfServices.widthToNumber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDxfServices.colorToNumber24 = function() 
          
        {
          //print("JS: RDxfServices.colorToNumber24");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDxfServices_WrapperSingletonInstance.colorToNumber24(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDxfServices);
  }

  
  else {
    
        print("RDxfServices.colorToNumber24(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDxfServices.stringToVariable = function() 
          
        {
          //print("JS: RDxfServices.stringToVariable");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDxfServices_WrapperSingletonInstance.stringToVariable(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDxfServices);
  }

  
  else {
    
        print("RDxfServices.stringToVariable(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDxfServices.variableToString = function() 
          
        {
          //print("JS: RDxfServices.variableToString");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDxfServices_WrapperSingletonInstance.variableToString(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDxfServices);
  }

  
  else {
    
        print("RDxfServices.variableToString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDxfServices.getCodeForVariable = function() 
          
        {
          //print("JS: RDxfServices.getCodeForVariable");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDxfServices_WrapperSingletonInstance.getCodeForVariable(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDxfServices);
  }

  
  else {
    
        print("RDxfServices.getCodeForVariable(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDxfServices.getTypeForVariable = function() 
          
        {
          //print("JS: RDxfServices.getTypeForVariable");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDxfServices_WrapperSingletonInstance.getTypeForVariable(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDxfServices);
  }

  
  else {
    
        print("RDxfServices.getTypeForVariable(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDxfServices.isVariable2D = function() 
          
        {
          //print("JS: RDxfServices.isVariable2D");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDxfServices_WrapperSingletonInstance.isVariable2D(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDxfServices);
  }

  
  else {
    
        print("RDxfServices.isVariable2D(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDxfServices.escapeUnicode = function() 
          
        {
          //print("JS: RDxfServices.escapeUnicode");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDxfServices_WrapperSingletonInstance.escapeUnicode(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDxfServices);
  }

  
  else {
    
        print("RDxfServices.escapeUnicode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDxfServices.parseUnicode = function() 
          
        {
          //print("JS: RDxfServices.parseUnicode");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDxfServices_WrapperSingletonInstance.parseUnicode(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDxfServices);
  }

  
  else {
    
        print("RDxfServices.parseUnicode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDxfServices.autoFixLinetypePattern = function() 
          
        {
          //print("JS: RDxfServices.autoFixLinetypePattern");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDxfServices_WrapperSingletonInstance.autoFixLinetypePattern(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDxfServices);
  }

  
  else {
    
        print("RDxfServices.autoFixLinetypePattern(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDxfServices.getFileQCADVersion = function() 
          
        {
          //print("JS: RDxfServices.getFileQCADVersion");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDxfServices_WrapperSingletonInstance.getFileQCADVersion(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDxfServices);
  }

  
  else {
    
        print("RDxfServices.getFileQCADVersion(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDxfServices.initAci = function() 
          
        {
          //print("JS: RDxfServices.initAci");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDxfServices_WrapperSingletonInstance.initAci(
                  
                );
              

        //copyProperties(this, wrapper, RDxfServices);
  }

  
  else {
    
        print("RDxfServices.initAci(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDxfServices.getAci = function() 
          
        {
          //print("JS: RDxfServices.getAci");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDxfServices_WrapperSingletonInstance.getAci(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDxfServices);
  }

  
  else {
    
        print("RDxfServices.getAci(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDxfServices.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDxfServices.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    