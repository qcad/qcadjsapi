
      // auto generated
      //var self;

      // class constructor:
      function RLinetypePattern() {
        

        // should be RLinetypePattern_BaseJs.call(this, engine):
        //RLinetypePattern.prototype = new RLinetypePattern_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLinetypePattern.getIdStatic()))) {

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
            qWarning("RLinetypePattern.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RLinetypePattern_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLinetypePattern);
  }

  
  else 
  
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RLinetypePattern_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLinetypePattern);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RLinetypePattern_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLinetypePattern);
  }

  
  else {
    
        print("RLinetypePattern(): wrong number / type of arguments");
      
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

      //RLinetypePattern.prototype = new RLinetypePattern_BaseJs(engine);
      //RLinetypePattern.prototype = new RLinetypePattern_Wrapper(engine);
      RLinetypePattern.prototype = new Object();


      RLinetypePattern.prototype.toString = function() {
          //return "RLinetypePattern [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLinetypePattern [JS]";
        };
      RLinetypePattern.getObjectType = function() {
        return RJSType_RLinetypePattern.getIdStatic();
      };

      RLinetypePattern.prototype.getObjectType = function() {
        return RJSType_RLinetypePattern.getIdStatic();
      };

      RLinetypePattern.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLinetypePattern.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RLinetypePattern.prototype.set = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.set");
          
              return this.__PROXY__.set(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.isValid = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getNumDashes = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getNumDashes");
          
              return this.__PROXY__.getNumDashes(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getName = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getName");
          
              return this.__PROXY__.getName(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.setName = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.setName");
          
              return this.__PROXY__.setName(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getDescription = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getDescription");
          
              return this.__PROXY__.getDescription(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.setDescription = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.setDescription");
          
              return this.__PROXY__.setDescription(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getScreenScale = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getScreenScale");
          
              return this.__PROXY__.getScreenScale(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.setScreenScale = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.setScreenScale");
          
              return this.__PROXY__.setScreenScale(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getNoOffset = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getNoOffset");
          
              return this.__PROXY__.getNoOffset(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.setNoOffset = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.setNoOffset");
          
              return this.__PROXY__.setNoOffset(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getLabel = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getLabel");
          
              return this.__PROXY__.getLabel(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.isMetric = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.isMetric");
          
              return this.__PROXY__.isMetric(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.setMetric = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.setMetric");
          
              return this.__PROXY__.setMetric(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.setPatternString = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.setPatternString");
          
              return this.__PROXY__.setPatternString(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getPatternString = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getPatternString");
          
              return this.__PROXY__.getPatternString(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getPattern = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getPattern");
          
              return this.__PROXY__.getPattern(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getPatternLength = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getPatternLength");
          
              return this.__PROXY__.getPatternLength(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getDashLengthAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getDashLengthAt");
          
              return this.__PROXY__.getDashLengthAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getDashOffsetAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getDashOffsetAt");
          
              return this.__PROXY__.getDashOffsetAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.hasShapeNumberAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.hasShapeNumberAt");
          
              return this.__PROXY__.hasShapeNumberAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getShapeNumberAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getShapeNumberAt");
          
              return this.__PROXY__.getShapeNumberAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.setShapeNumberAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.setShapeNumberAt");
          
              return this.__PROXY__.setShapeNumberAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.hasShapeScaleAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.hasShapeScaleAt");
          
              return this.__PROXY__.hasShapeScaleAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getShapeScaleAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getShapeScaleAt");
          
              return this.__PROXY__.getShapeScaleAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.setShapeScaleAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.setShapeScaleAt");
          
              return this.__PROXY__.setShapeScaleAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.hasShapeRotationAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.hasShapeRotationAt");
          
              return this.__PROXY__.hasShapeRotationAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getShapeRotationAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getShapeRotationAt");
          
              return this.__PROXY__.getShapeRotationAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.setShapeRotationAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.setShapeRotationAt");
          
              return this.__PROXY__.setShapeRotationAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.hasShapeOffsetAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.hasShapeOffsetAt");
          
              return this.__PROXY__.hasShapeOffsetAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getShapeOffsetAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getShapeOffsetAt");
          
              return this.__PROXY__.getShapeOffsetAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.setShapeOffsetAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.setShapeOffsetAt");
          
              return this.__PROXY__.setShapeOffsetAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.hasShapeTextAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.hasShapeTextAt");
          
              return this.__PROXY__.hasShapeTextAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getShapeTextAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getShapeTextAt");
          
              return this.__PROXY__.getShapeTextAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.setShapeTextAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.setShapeTextAt");
          
              return this.__PROXY__.setShapeTextAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.hasShapeTextStyleAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.hasShapeTextStyleAt");
          
              return this.__PROXY__.hasShapeTextStyleAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getShapeTextStyleAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getShapeTextStyleAt");
          
              return this.__PROXY__.getShapeTextStyleAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.setShapeTextStyleAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.setShapeTextStyleAt");
          
              return this.__PROXY__.setShapeTextStyleAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getShapeIndices = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getShapeIndices");
          
              return this.__PROXY__.getShapeIndices(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.hasShapes = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.hasShapes");
          
              return this.__PROXY__.hasShapes(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.hasShapeAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.hasShapeAt");
          
              return this.__PROXY__.hasShapeAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getShapeAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getShapeAt");
          
              return this.__PROXY__.getShapeAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.updateShapes");
          
              return this.__PROXY__.updateShapes(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getLargestGap = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getLargestGap");
          
              return this.__PROXY__.getLargestGap(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.hasDashAt = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.hasDashAt");
          
              return this.__PROXY__.hasDashAt(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getDelta = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getDelta");
          
              return this.__PROXY__.getDelta(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getPatternOffset = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getPatternOffset");
          
              return this.__PROXY__.getPatternOffset(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.getSymmetries = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.getSymmetries");
          
              return this.__PROXY__.getSymmetries(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.scale = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.scale");
          
              return this.__PROXY__.scale(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.isLoaded = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.isLoaded");
          
              return this.__PROXY__.isLoaded(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.load = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.load");
          
              return this.__PROXY__.load(...args);
            
        };
        
        // function 
        RLinetypePattern.prototype.initNameMap = function(...args) 
          
        {
          //print("JS: RLinetypePattern.prototype.initNameMap");
          
              return this.__PROXY__.initNameMap(...args);
            
        };
        

      // static functions:
      

        // static function 
        RLinetypePattern.initNameMap = function() 
          
        {
          //print("JS: RLinetypePattern.initNameMap");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLinetypePattern_WrapperSingletonInstance.initNameMap(
                  
                );
              

        //copyProperties(this, wrapper, RLinetypePattern);
  }

  
  else {
    
        print("RLinetypePattern.initNameMap(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      RLinetypePattern.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RLinetypePattern.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RLinetypePattern.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RLinetypePattern.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLinetypePattern.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RLinetypePattern.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      