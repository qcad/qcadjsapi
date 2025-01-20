
      // auto generated
      //var self;

      // class constructor:
      function RDocumentVariables() {
        

        // should be RDocumentVariables_BaseJs.call(this, engine):
        //RDocumentVariables.prototype = new RDocumentVariables_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDocumentVariables.getIdStatic()))) {

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
            qWarning("RDocumentVariables.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RDocumentVariables_Wrapper(
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

      

        //copyProperties(this, wrapper, RDocumentVariables);
  }

  
  else {
    
        print("RDocumentVariables(): wrong number / type of arguments");
      
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

      //RDocumentVariables.prototype = new RDocumentVariables_BaseJs(engine);
      //RDocumentVariables.prototype = new RDocumentVariables_Wrapper(engine);
      RDocumentVariables.prototype = new Object();

      RDocumentVariables.prototype.toString = function() {
          //return "RDocumentVariables [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDocumentVariables [JS]";
        };
      RDocumentVariables.getObjectType = function() {
        return RJSType_RDocumentVariables.getIdStatic();
      };

      RDocumentVariables.prototype.getObjectType = function() {
        return RJSType_RDocumentVariables.getIdStatic();
      };

      RDocumentVariables.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDocumentVariables.getIdStatic()) {
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
        RDocumentVariables.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getId = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RDocumentVariables.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RDocumentVariables.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RDocumentVariables.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDocumentVariables.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RDocumentVariables.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RDocumentVariables.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RDocumentVariables.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RDocumentVariables.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RDocumentVariables.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RDocumentVariables.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDocumentVariables.prototype.dump = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RDocumentVariables.prototype.validate = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RDocumentVariables.prototype.print = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setId = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RDocumentVariables.prototype.init = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getType = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDocumentVariables.prototype.clone = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RDocumentVariables.prototype.clear = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setKnownVariable = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setKnownVariable");
          return this.__PROXY__.setKnownVariable(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getKnownVariable = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getKnownVariable");
          return this.__PROXY__.getKnownVariable(...args);
        };
    
        // function 
        RDocumentVariables.prototype.hasKnownVariable = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.hasKnownVariable");
          return this.__PROXY__.hasKnownVariable(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getCurrentLayerId = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getCurrentLayerId");
          return this.__PROXY__.getCurrentLayerId(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setCurrentLayerId = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setCurrentLayerId");
          return this.__PROXY__.setCurrentLayerId(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getUnit = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getUnit");
          return this.__PROXY__.getUnit(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setUnit = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setUnit");
          return this.__PROXY__.setUnit(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setMeasurement = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setMeasurement");
          return this.__PROXY__.setMeasurement(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getDimensionFont = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getDimensionFont");
          return this.__PROXY__.getDimensionFont(...args);
        };
    
        // function 
        RDocumentVariables.prototype.setDimensionFont = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.setDimensionFont");
          return this.__PROXY__.setDimensionFont(...args);
        };
    
        // function 
        RDocumentVariables.prototype.addAutoVariable = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.addAutoVariable");
          return this.__PROXY__.addAutoVariable(...args);
        };
    
        // function 
        RDocumentVariables.prototype.getAutoVariables = function(...args) 
          
        {
          //print("JS: RDocumentVariables.prototype.getAutoVariables");
          return this.__PROXY__.getAutoVariables(...args);
        };
    

      // static functions:
      

        // static function 
        RDocumentVariables.init = function() 
          
        {
          //print("JS: RDocumentVariables.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDocumentVariables_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDocumentVariables);
  }

  
  else {
    
        print("RDocumentVariables.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDocumentVariables.getRtti = function() 
          
        {
          //print("JS: RDocumentVariables.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDocumentVariables_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDocumentVariables);
  }

  
  else {
    
        print("RDocumentVariables.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDocumentVariables.INVALID_ID = 
  RDocumentVariables_WrapperSingletonInstance.INVALID_ID;
RDocumentVariables.INVALID_HANDLE = 
  RDocumentVariables_WrapperSingletonInstance.INVALID_HANDLE;
RDocumentVariables.PropertyCustom = 
  RDocumentVariables_WrapperSingletonInstance.PropertyCustom;
RDocumentVariables.PropertyType = 
  RDocumentVariables_WrapperSingletonInstance.PropertyType;
RDocumentVariables.PropertyHandle = 
  RDocumentVariables_WrapperSingletonInstance.PropertyHandle;
RDocumentVariables.PropertyProtected = 
  RDocumentVariables_WrapperSingletonInstance.PropertyProtected;
RDocumentVariables.PropertyWorkingSet = 
  RDocumentVariables_WrapperSingletonInstance.PropertyWorkingSet;
RDocumentVariables.PropertySelected = 
  RDocumentVariables_WrapperSingletonInstance.PropertySelected;
RDocumentVariables.PropertyInvisible = 
  RDocumentVariables_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RDocumentVariables.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDocumentVariables.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDocumentVariables.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      