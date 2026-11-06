
      // auto generated
      //var self;

      // class constructor:
      function RPropertyAttributes() {
        

        // should be RPropertyAttributes_BaseJs.call(this, engine):
        //RPropertyAttributes.prototype = new RPropertyAttributes_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPropertyAttributes.getIdStatic()))) {

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
            qWarning("RPropertyAttributes.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPropertyAttributes_Wrapper(
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

      

        //copyProperties(this, wrapper, RPropertyAttributes);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPropertyAttributes_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPropertyAttributes);
  }

  
  else {
    
        print("RPropertyAttributes(): wrong number / type of arguments");
      
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

      //RPropertyAttributes.prototype = new RPropertyAttributes_BaseJs(engine);
      //RPropertyAttributes.prototype = new RPropertyAttributes_Wrapper(engine);
      RPropertyAttributes.prototype = new Object();


      RPropertyAttributes.prototype.toString = function() {
          //return "RPropertyAttributes [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPropertyAttributes [JS]";
        };
      RPropertyAttributes.getObjectType = function() {
        return RJSType_RPropertyAttributes.getIdStatic();
      };

      RPropertyAttributes.prototype.getObjectType = function() {
        return RJSType_RPropertyAttributes.getIdStatic();
      };

      RPropertyAttributes.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPropertyAttributes.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RPropertyAttributes.prototype.setOption = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setOption");
          
              return this.__PROXY__.setOption(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isReadOnly = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isReadOnly");
          
              return this.__PROXY__.isReadOnly(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setReadOnly = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setReadOnly");
          
              return this.__PROXY__.setReadOnly(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isInvisible");
          
              return this.__PROXY__.isInvisible(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setInvisible");
          
              return this.__PROXY__.setInvisible(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isUndeletable = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isUndeletable");
          
              return this.__PROXY__.isUndeletable(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setUndeletable = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setUndeletable");
          
              return this.__PROXY__.setUndeletable(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isList = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isList");
          
              return this.__PROXY__.isList(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setList = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setList");
          
              return this.__PROXY__.setList(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isAngleType = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isAngleType");
          
              return this.__PROXY__.isAngleType(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setAngleType = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setAngleType");
          
              return this.__PROXY__.setAngleType(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.getIgnoreCase = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.getIgnoreCase");
          
              return this.__PROXY__.getIgnoreCase(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setIgnoreCase = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setIgnoreCase");
          
              return this.__PROXY__.setIgnoreCase(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.affectsOtherProperties = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.affectsOtherProperties");
          
              return this.__PROXY__.affectsOtherProperties(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setAffectsOtherProperties = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setAffectsOtherProperties");
          
              return this.__PROXY__.setAffectsOtherProperties(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setAllowMixedValue = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setAllowMixedValue");
          
              return this.__PROXY__.setAllowMixedValue(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.getAllowMixedValue = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.getAllowMixedValue");
          
              return this.__PROXY__.getAllowMixedValue(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.getChoices = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.getChoices");
          
              return this.__PROXY__.getChoices(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setChoices = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setChoices");
          
              return this.__PROXY__.setChoices(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.hasChoices = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.hasChoices");
          
              return this.__PROXY__.hasChoices(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.getStoreIndex = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.getStoreIndex");
          
              return this.__PROXY__.getStoreIndex(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isRichText = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isRichText");
          
              return this.__PROXY__.isRichText(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setRichText = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setRichText");
          
              return this.__PROXY__.setRichText(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isStyle = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isStyle");
          
              return this.__PROXY__.isStyle(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setStyle = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setStyle");
          
              return this.__PROXY__.setStyle(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isCustomApp001 = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isCustomApp001");
          
              return this.__PROXY__.isCustomApp001(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setCustomApp001 = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setCustomApp001");
          
              return this.__PROXY__.setCustomApp001(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.mixWith = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.mixWith");
          
              return this.__PROXY__.mixWith(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isMixed = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isMixed");
          
              return this.__PROXY__.isMixed(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setMixed = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setMixed");
          
              return this.__PROXY__.setMixed(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isSum = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isSum");
          
              return this.__PROXY__.isSum(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setSum = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setSum");
          
              return this.__PROXY__.setSum(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isOnRequest = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isOnRequest");
          
              return this.__PROXY__.isOnRequest(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setOnRequest = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setOnRequest");
          
              return this.__PROXY__.setOnRequest(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isLabel = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isLabel");
          
              return this.__PROXY__.isLabel(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isCustom = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isCustom");
          
              return this.__PROXY__.isCustom(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isDimensionLabel = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isDimensionLabel");
          
              return this.__PROXY__.isDimensionLabel(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setInteger = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setInteger");
          
              return this.__PROXY__.setInteger(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isInteger = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isInteger");
          
              return this.__PROXY__.isInteger(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isRedundant = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isRedundant");
          
              return this.__PROXY__.isRedundant(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setRedundant = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setRedundant");
          
              return this.__PROXY__.setRedundant(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isVisibleToParent = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isVisibleToParent");
          
              return this.__PROXY__.isVisibleToParent(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isNumericallySorted = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isNumericallySorted");
          
              return this.__PROXY__.isNumericallySorted(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setNumericallySorted = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setNumericallySorted");
          
              return this.__PROXY__.setNumericallySorted(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isScaleType = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isScaleType");
          
              return this.__PROXY__.isScaleType(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setScaleType = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setScaleType");
          
              return this.__PROXY__.setScaleType(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isAreaType = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isAreaType");
          
              return this.__PROXY__.isAreaType(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setAreaType = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setAreaType");
          
              return this.__PROXY__.setAreaType(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isUnitLess = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isUnitLess");
          
              return this.__PROXY__.isUnitLess(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setUnitLess = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setUnitLess");
          
              return this.__PROXY__.setUnitLess(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.isPercentage = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.isPercentage");
          
              return this.__PROXY__.isPercentage(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.getLabel = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.getLabel");
          
              return this.__PROXY__.getLabel(...args);
            
        };
        
        // function 
        RPropertyAttributes.prototype.setLabel = function(...args) 
          
        {
          //print("JS: RPropertyAttributes.prototype.setLabel");
          
              return this.__PROXY__.setLabel(...args);
            
        };
        

      // static functions:
      RPropertyAttributes.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RPropertyAttributes.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RPropertyAttributes.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPropertyAttributes.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPropertyAttributes.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPropertyAttributes.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      