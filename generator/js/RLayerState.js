
      // auto generated
      //var self;

      // class constructor:
      function RLayerState() {
        

        // should be RLayerState_BaseJs.call(this, engine):
        //RLayerState.prototype = new RLayerState_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLayerState.getIdStatic()))) {

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
            qWarning("RLayerState.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RLayerState_Wrapper(
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

      

        //copyProperties(this, wrapper, RLayerState);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RLayerState_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLayerState);
  }

  
  else {
    
        print("RLayerState(): wrong number / type of arguments");
      
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

      //RLayerState.prototype = new RLayerState_BaseJs(engine);
      //RLayerState.prototype = new RLayerState_Wrapper(engine);
      RLayerState.prototype = new Object();

      RLayerState.prototype.toString = function() {
          //return "RLayerState [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLayerState [JS]";
        };
      RLayerState.getObjectType = function() {
        return RJSType_RLayerState.getIdStatic();
      };

      RLayerState.prototype.getObjectType = function() {
        return RJSType_RLayerState.getIdStatic();
      };

      RLayerState.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLayerState.getIdStatic()) {
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
        RLayerState.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RLayerState.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RLayerState.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RLayerState.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RLayerState.prototype.getId = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RLayerState.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RLayerState.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RLayerState.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RLayerState.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RLayerState.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RLayerState.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RLayerState.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RLayerState.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RLayerState.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RLayerState.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RLayerState.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RLayerState.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RLayerState.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RLayerState.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RLayerState.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RLayerState.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RLayerState.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RLayerState.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RLayerState.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RLayerState.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RLayerState.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RLayerState.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RLayerState.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RLayerState.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RLayerState.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RLayerState.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RLayerState.prototype.dump = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RLayerState.prototype.validate = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RLayerState.prototype.print = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RLayerState.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RLayerState.prototype.setId = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RLayerState.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RLayerState.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RLayerState.prototype.init = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RLayerState.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RLayerState.prototype.getType = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RLayerState.prototype.clone = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RLayerState.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RLayerState.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RLayerState.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RLayerState.prototype.getName = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getName");
          return this.__PROXY__.getName(...args);
        };
    
        // function 
        RLayerState.prototype.setName = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.setName");
          return this.__PROXY__.setName(...args);
        };
    
        // function 
        RLayerState.prototype.getDescription = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getDescription");
          return this.__PROXY__.getDescription(...args);
        };
    
        // function 
        RLayerState.prototype.setDescription = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.setDescription");
          return this.__PROXY__.setDescription(...args);
        };
    
        // function 
        RLayerState.prototype.getCurrentLayerName = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getCurrentLayerName");
          return this.__PROXY__.getCurrentLayerName(...args);
        };
    
        // function 
        RLayerState.prototype.setCurrentLayerName = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.setCurrentLayerName");
          return this.__PROXY__.setCurrentLayerName(...args);
        };
    
        // function 
        RLayerState.prototype.addLayer = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.addLayer");
          return this.__PROXY__.addLayer(...args);
        };
    
        // function 
        RLayerState.prototype.getLayers = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getLayers");
          return this.__PROXY__.getLayers(...args);
        };
    
        // function 
        RLayerState.prototype.getLayerNames = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getLayerNames");
          return this.__PROXY__.getLayerNames(...args);
        };
    
        // function 
        RLayerState.prototype.getLayer = function(...args) 
          
        {
          //print("JS: RLayerState.prototype.getLayer");
          return this.__PROXY__.getLayer(...args);
        };
    

      // static functions:
      

        // static function 
        RLayerState.init = function() 
          
        {
          //print("JS: RLayerState.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLayerState_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RLayerState);
  }

  
  else {
    
        print("RLayerState.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayerState.getRtti = function() 
          
        {
          //print("JS: RLayerState.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLayerState_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RLayerState);
  }

  
  else {
    
        print("RLayerState.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RLayerState.INVALID_ID = 
  RLayerState_WrapperSingletonInstance.INVALID_ID;
RLayerState.INVALID_HANDLE = 
  RLayerState_WrapperSingletonInstance.INVALID_HANDLE;
RLayerState.PropertyCustom = 
  RLayerState_WrapperSingletonInstance.PropertyCustom;
RLayerState.PropertyType = 
  RLayerState_WrapperSingletonInstance.PropertyType;
RLayerState.PropertyHandle = 
  RLayerState_WrapperSingletonInstance.PropertyHandle;
RLayerState.PropertyProtected = 
  RLayerState_WrapperSingletonInstance.PropertyProtected;
RLayerState.PropertyWorkingSet = 
  RLayerState_WrapperSingletonInstance.PropertyWorkingSet;
RLayerState.PropertySelected = 
  RLayerState_WrapperSingletonInstance.PropertySelected;
RLayerState.PropertyInvisible = 
  RLayerState_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RLayerState.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLayerState.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RLayerState.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      