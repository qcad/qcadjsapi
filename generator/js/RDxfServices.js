
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        RDxfServices.prototype.reset = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.reset");
          return this.__PROXY__.reset(...args);
        };
    
        // function 
        RDxfServices.prototype.getSafeBlockName = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.getSafeBlockName");
          return this.__PROXY__.getSafeBlockName(...args);
        };
    
        // function 
        RDxfServices.prototype.fixBlockName = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.fixBlockName");
          return this.__PROXY__.fixBlockName(...args);
        };
    
        // function 
        RDxfServices.prototype.fixLayerName = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.fixLayerName");
          return this.__PROXY__.fixLayerName(...args);
        };
    
        // function 
        RDxfServices.prototype.fixFontName = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.fixFontName");
          return this.__PROXY__.fixFontName(...args);
        };
    
        // function 
        RDxfServices.prototype.fixVersion2String = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.fixVersion2String");
          return this.__PROXY__.fixVersion2String(...args);
        };
    
        // function 
        RDxfServices.prototype.fixDimensionLabel = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.fixDimensionLabel");
          return this.__PROXY__.fixDimensionLabel(...args);
        };
    
        // function 
        RDxfServices.prototype.detectVersion2Format = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.detectVersion2Format");
          return this.__PROXY__.detectVersion2Format(...args);
        };
    
        // function 
        RDxfServices.prototype.hasDIMZIN = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.hasDIMZIN");
          return this.__PROXY__.hasDIMZIN(...args);
        };
    
        // function 
        RDxfServices.prototype.hasDIMAZIN = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.hasDIMAZIN");
          return this.__PROXY__.hasDIMAZIN(...args);
        };
    
        // function 
        RDxfServices.prototype.hasInvalidEllipse = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.hasInvalidEllipse");
          return this.__PROXY__.hasInvalidEllipse(...args);
        };
    
        // function 
        RDxfServices.prototype.getVersion2Compatibility = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.getVersion2Compatibility");
          return this.__PROXY__.getVersion2Compatibility(...args);
        };
    
        // function 
        RDxfServices.prototype.getVersion3_1Compatibility = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.getVersion3_1Compatibility");
          return this.__PROXY__.getVersion3_1Compatibility(...args);
        };
    
        // function 
        RDxfServices.prototype.getMajorVersion = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.getMajorVersion");
          return this.__PROXY__.getMajorVersion(...args);
        };
    
        // function 
        RDxfServices.prototype.getMinorVersion = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.getMinorVersion");
          return this.__PROXY__.getMinorVersion(...args);
        };
    
        // function 
        RDxfServices.prototype.getPatchVersion = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.getPatchVersion");
          return this.__PROXY__.getPatchVersion(...args);
        };
    
        // function 
        RDxfServices.prototype.getVersion2LayerName = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.getVersion2LayerName");
          return this.__PROXY__.getVersion2LayerName(...args);
        };
    
        // function 
        RDxfServices.prototype.getVersionBlockName = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.getVersionBlockName");
          return this.__PROXY__.getVersionBlockName(...args);
        };
    
        // function 
        RDxfServices.prototype.getVersion2Font = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.getVersion2Font");
          return this.__PROXY__.getVersion2Font(...args);
        };
    
        // function 
        RDxfServices.prototype.getVersion2DimensionLabel = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.getVersion2DimensionLabel");
          return this.__PROXY__.getVersion2DimensionLabel(...args);
        };
    
        // function 
        RDxfServices.prototype.collectVersion2Info = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.collectVersion2Info");
          return this.__PROXY__.collectVersion2Info(...args);
        };
    
        // function 
        RDxfServices.prototype.getVersion2PatternAngle = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.getVersion2PatternAngle");
          return this.__PROXY__.getVersion2PatternAngle(...args);
        };
    
        // function 
        RDxfServices.prototype.getVersion2PatternScale = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.getVersion2PatternScale");
          return this.__PROXY__.getVersion2PatternScale(...args);
        };
    
        // function 
        RDxfServices.prototype.getVersion2PatternName = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.getVersion2PatternName");
          return this.__PROXY__.getVersion2PatternName(...args);
        };
    
        // function 
        RDxfServices.prototype.fixVersion2HatchData = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.fixVersion2HatchData");
          return this.__PROXY__.fixVersion2HatchData(...args);
        };
    
        // function 
        RDxfServices.prototype.numberToColor24 = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.numberToColor24");
          return this.__PROXY__.numberToColor24(...args);
        };
    
        // function 
        RDxfServices.prototype.numberToWeight = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.numberToWeight");
          return this.__PROXY__.numberToWeight(...args);
        };
    
        // function 
        RDxfServices.prototype.widthToNumber = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.widthToNumber");
          return this.__PROXY__.widthToNumber(...args);
        };
    
        // function 
        RDxfServices.prototype.colorToNumber24 = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.colorToNumber24");
          return this.__PROXY__.colorToNumber24(...args);
        };
    
        // function 
        RDxfServices.prototype.stringToVariable = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.stringToVariable");
          return this.__PROXY__.stringToVariable(...args);
        };
    
        // function 
        RDxfServices.prototype.variableToString = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.variableToString");
          return this.__PROXY__.variableToString(...args);
        };
    
        // function 
        RDxfServices.prototype.getCodeForVariable = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.getCodeForVariable");
          return this.__PROXY__.getCodeForVariable(...args);
        };
    
        // function 
        RDxfServices.prototype.getTypeForVariable = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.getTypeForVariable");
          return this.__PROXY__.getTypeForVariable(...args);
        };
    
        // function 
        RDxfServices.prototype.isVariable2D = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.isVariable2D");
          return this.__PROXY__.isVariable2D(...args);
        };
    
        // function 
        RDxfServices.prototype.escapeUnicode = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.escapeUnicode");
          return this.__PROXY__.escapeUnicode(...args);
        };
    
        // function 
        RDxfServices.prototype.parseUnicode = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.parseUnicode");
          return this.__PROXY__.parseUnicode(...args);
        };
    
        // function 
        RDxfServices.prototype.autoFixLinetypePattern = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.autoFixLinetypePattern");
          return this.__PROXY__.autoFixLinetypePattern(...args);
        };
    
        // function 
        RDxfServices.prototype.getFileQCADVersion = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.getFileQCADVersion");
          return this.__PROXY__.getFileQCADVersion(...args);
        };
    
        // function 
        RDxfServices.prototype.initAci = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.initAci");
          return this.__PROXY__.initAci(...args);
        };
    
        // function 
        RDxfServices.prototype.getAci = function(...args) 
          
        {
          //print("JS: RDxfServices.prototype.getAci");
          return this.__PROXY__.getAci(...args);
        };
    

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

      RDxfServices.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      