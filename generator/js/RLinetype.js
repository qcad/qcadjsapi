
      // auto generated
      //var self;

      // class constructor:
      function RLinetype() {
        

        // should be RLinetype_BaseJs.call(this, engine):
        //RLinetype.prototype = new RLinetype_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLinetype.getIdStatic()))) {

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
            qWarning("RLinetype.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RLinetype_Wrapper(
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

      

        //copyProperties(this, wrapper, RLinetype);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RLinetype_Wrapper(
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

      

        //copyProperties(this, wrapper, RLinetype);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RLinetype_Wrapper(
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

      

        //copyProperties(this, wrapper, RLinetype);
  }

  
  else {
    
        print("RLinetype(): wrong number / type of arguments");
      
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

      //RLinetype.prototype = new RLinetype_BaseJs(engine);
      //RLinetype.prototype = new RLinetype_Wrapper(engine);
      RLinetype.prototype = new Object();

      RLinetype.prototype.toString = function() {
          //return "RLinetype [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLinetype [JS]";
        };
      RLinetype.getObjectType = function() {
        return RJSType_RLinetype.getIdStatic();
      };

      RLinetype.prototype.getObjectType = function() {
        return RJSType_RLinetype.getIdStatic();
      };

      RLinetype.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLinetype.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RLinetype.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RLinetype.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RLinetype.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RLinetype.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RLinetype.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RLinetype.prototype.getId = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RLinetype.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RLinetype.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RLinetype.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RLinetype.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RLinetype.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RLinetype.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RLinetype.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RLinetype.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RLinetype.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RLinetype.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RLinetype.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RLinetype.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RLinetype.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RLinetype.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RLinetype.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RLinetype.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RLinetype.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RLinetype.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RLinetype.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RLinetype.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RLinetype.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RLinetype.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RLinetype.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RLinetype.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RLinetype.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RLinetype.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RLinetype.prototype.dump = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RLinetype.prototype.validate = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RLinetype.prototype.print = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RLinetype.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RLinetype.prototype.setId = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RLinetype.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RLinetype.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RLinetype.prototype.init = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RLinetype.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RLinetype.prototype.getType = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RLinetype.prototype.clone = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RLinetype.prototype.getName = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getName");
          return this.__PROXY__.getName(...args);
        };
    
        // function 
        RLinetype.prototype.setName = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setName");
          return this.__PROXY__.setName(...args);
        };
    
        // function 
        RLinetype.prototype.isMetric = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.isMetric");
          return this.__PROXY__.isMetric(...args);
        };
    
        // function 
        RLinetype.prototype.setMetric = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setMetric");
          return this.__PROXY__.setMetric(...args);
        };
    
        // function 
        RLinetype.prototype.getDescription = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getDescription");
          return this.__PROXY__.getDescription(...args);
        };
    
        // function 
        RLinetype.prototype.setDescription = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setDescription");
          return this.__PROXY__.setDescription(...args);
        };
    
        // function 
        RLinetype.prototype.getLabel = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getLabel");
          return this.__PROXY__.getLabel(...args);
        };
    
        // function 
        RLinetype.prototype.getPatternString = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getPatternString");
          return this.__PROXY__.getPatternString(...args);
        };
    
        // function 
        RLinetype.prototype.setPatternString = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setPatternString");
          return this.__PROXY__.setPatternString(...args);
        };
    
        // function 
        RLinetype.prototype.isValid = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RLinetype.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RLinetype.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RLinetype.prototype.getPattern = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.getPattern");
          return this.__PROXY__.getPattern(...args);
        };
    
        // function 
        RLinetype.prototype.setPattern = function(...args) 
          
        {
          //print("JS: RLinetype.prototype.setPattern");
          return this.__PROXY__.setPattern(...args);
        };
    

      // static functions:
      

        // static function 
        RLinetype.init = function() 
          
        {
          //print("JS: RLinetype.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLinetype_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RLinetype);
  }

  
  else {
    
        print("RLinetype.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLinetype.getRtti = function() 
          
        {
          //print("JS: RLinetype.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLinetype_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RLinetype);
  }

  
  else {
    
        print("RLinetype.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RLinetype.INVALID_ID = 
  RLinetype_WrapperSingletonInstance.INVALID_ID;
RLinetype.INVALID_HANDLE = 
  RLinetype_WrapperSingletonInstance.INVALID_HANDLE;
RLinetype.PropertyCustom = 
  RLinetype_WrapperSingletonInstance.PropertyCustom;
RLinetype.PropertyType = 
  RLinetype_WrapperSingletonInstance.PropertyType;
RLinetype.PropertyHandle = 
  RLinetype_WrapperSingletonInstance.PropertyHandle;
RLinetype.PropertyProtected = 
  RLinetype_WrapperSingletonInstance.PropertyProtected;
RLinetype.PropertyWorkingSet = 
  RLinetype_WrapperSingletonInstance.PropertyWorkingSet;
RLinetype.PropertySelected = 
  RLinetype_WrapperSingletonInstance.PropertySelected;
RLinetype.PropertyInvisible = 
  RLinetype_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RLinetype.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLinetype.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RLinetype.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      