
      // auto generated
      //var self;

      // class constructor:
      function RLayer() {
        

        // should be RLayer_BaseJs.call(this, engine):
        //RLayer.prototype = new RLayer_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLayer.getIdStatic()))) {

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
            qWarning("RLayer.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 8) {
    
            self = this;
            wrapper = new RLayer_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLayer);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RLayer_Wrapper(
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

      

        //copyProperties(this, wrapper, RLayer);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RLayer_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer(): wrong number / type of arguments");
      
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

      //RLayer.prototype = new RLayer_BaseJs(engine);
      //RLayer.prototype = new RLayer_Wrapper(engine);
      RLayer.prototype = new Object();

      RLayer.prototype.toString = function() {
          //return "RLayer [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLayer [JS]";
        };
      RLayer.getObjectType = function() {
        return RJSType_RLayer.getIdStatic();
      };

      RLayer.prototype.getObjectType = function() {
        return RJSType_RLayer.getIdStatic();
      };

      RLayer.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLayer.getIdStatic()) {
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
        RLayer.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RLayer.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RLayer.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RLayer.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RLayer.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RLayer.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RLayer.prototype.getId = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RLayer.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RLayer.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RLayer.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RLayer.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RLayer.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RLayer.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RLayer.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RLayer.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RLayer.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RLayer.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RLayer.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RLayer.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RLayer.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RLayer.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RLayer.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RLayer.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RLayer.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RLayer.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RLayer.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RLayer.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RLayer.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RLayer.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RLayer.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RLayer.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RLayer.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RLayer.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RLayer.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RLayer.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RLayer.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RLayer.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RLayer.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RLayer.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RLayer.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RLayer.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RLayer.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RLayer.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RLayer.prototype.dump = function(...args) 
          
        {
          //print("JS: RLayer.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RLayer.prototype.validate = function(...args) 
          
        {
          //print("JS: RLayer.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RLayer.prototype.print = function(...args) 
          
        {
          //print("JS: RLayer.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RLayer.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RLayer.prototype.setId = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RLayer.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RLayer.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RLayer.prototype.init = function(...args) 
          
        {
          //print("JS: RLayer.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RLayer.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RLayer.prototype.getType = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RLayer.prototype.clone = function(...args) 
          
        {
          //print("JS: RLayer.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RLayer.prototype.getParentLayerId = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getParentLayerId");
          return this.__PROXY__.getParentLayerId(...args);
        };
    
        // function 
        RLayer.prototype.getName = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getName");
          return this.__PROXY__.getName(...args);
        };
    
        // function 
        RLayer.prototype.setName = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setName");
          return this.__PROXY__.setName(...args);
        };
    
        // function 
        RLayer.prototype.isOffOrFrozen = function(...args) 
          
        {
          //print("JS: RLayer.prototype.isOffOrFrozen");
          return this.__PROXY__.isOffOrFrozen(...args);
        };
    
        // function 
        RLayer.prototype.isOff = function(...args) 
          
        {
          //print("JS: RLayer.prototype.isOff");
          return this.__PROXY__.isOff(...args);
        };
    
        // function 
        RLayer.prototype.setOff = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setOff");
          return this.__PROXY__.setOff(...args);
        };
    
        // function 
        RLayer.prototype.isFrozen = function(...args) 
          
        {
          //print("JS: RLayer.prototype.isFrozen");
          return this.__PROXY__.isFrozen(...args);
        };
    
        // function 
        RLayer.prototype.setFrozen = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setFrozen");
          return this.__PROXY__.setFrozen(...args);
        };
    
        // function 
        RLayer.prototype.isLocked = function(...args) 
          
        {
          //print("JS: RLayer.prototype.isLocked");
          return this.__PROXY__.isLocked(...args);
        };
    
        // function 
        RLayer.prototype.setLocked = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setLocked");
          return this.__PROXY__.setLocked(...args);
        };
    
        // function 
        RLayer.prototype.isCollapsed = function(...args) 
          
        {
          //print("JS: RLayer.prototype.isCollapsed");
          return this.__PROXY__.isCollapsed(...args);
        };
    
        // function 
        RLayer.prototype.setCollapsed = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setCollapsed");
          return this.__PROXY__.setCollapsed(...args);
        };
    
        // function 
        RLayer.prototype.isPlottable = function(...args) 
          
        {
          //print("JS: RLayer.prototype.isPlottable");
          return this.__PROXY__.isPlottable(...args);
        };
    
        // function 
        RLayer.prototype.setPlottable = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setPlottable");
          return this.__PROXY__.setPlottable(...args);
        };
    
        // function 
        RLayer.prototype.isSnappable = function(...args) 
          
        {
          //print("JS: RLayer.prototype.isSnappable");
          return this.__PROXY__.isSnappable(...args);
        };
    
        // function 
        RLayer.prototype.setSnappable = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setSnappable");
          return this.__PROXY__.setSnappable(...args);
        };
    
        // function 
        RLayer.prototype.isOffIsFreeze = function(...args) 
          
        {
          //print("JS: RLayer.prototype.isOffIsFreeze");
          return this.__PROXY__.isOffIsFreeze(...args);
        };
    
        // function 
        RLayer.prototype.setOffIsFreeze = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setOffIsFreeze");
          return this.__PROXY__.setOffIsFreeze(...args);
        };
    
        // function 
        RLayer.prototype.getColor = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RLayer.prototype.setColor = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RLayer.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RLayer.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RLayer.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RLayer.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RLayer.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RLayer.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RLayer.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RLayer.prototype.hasChildLayers = function(...args) 
          
        {
          //print("JS: RLayer.prototype.hasChildLayers");
          return this.__PROXY__.hasChildLayers(...args);
        };
    
        // function 
        RLayer.prototype.getChildLayerNames = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getChildLayerNames");
          return this.__PROXY__.getChildLayerNames(...args);
        };
    
        // function 
        RLayer.prototype.getParentLayerName = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getParentLayerName");
          return this.__PROXY__.getParentLayerName(...args);
        };
    
        // function 
        RLayer.prototype.getShortLayerName = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getShortLayerName");
          return this.__PROXY__.getShortLayerName(...args);
        };
    
        // function 
        RLayer.prototype.getLayerNameHierarchy = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getLayerNameHierarchy");
          return this.__PROXY__.getLayerNameHierarchy(...args);
        };
    
        // function 
        RLayer.prototype.isChildLayerOf = function(...args) 
          
        {
          //print("JS: RLayer.prototype.isChildLayerOf");
          return this.__PROXY__.isChildLayerOf(...args);
        };
    
        // function 
        RLayer.prototype.getHierarchySeparator = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getHierarchySeparator");
          return this.__PROXY__.getHierarchySeparator(...args);
        };
    
        // function 
        RLayer.prototype.hasChildLayersStatic = function(...args) 
          
        {
          //print("JS: RLayer.prototype.hasChildLayersStatic");
          return this.__PROXY__.hasChildLayersStatic(...args);
        };
    
        // function 
        RLayer.prototype.getChildLayerNamesStatic = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getChildLayerNamesStatic");
          return this.__PROXY__.getChildLayerNamesStatic(...args);
        };
    
        // function 
        RLayer.prototype.getParentLayerNameStatic = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getParentLayerNameStatic");
          return this.__PROXY__.getParentLayerNameStatic(...args);
        };
    
        // function 
        RLayer.prototype.getShortLayerNameStatic = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getShortLayerNameStatic");
          return this.__PROXY__.getShortLayerNameStatic(...args);
        };
    
        // function 
        RLayer.prototype.getLayerNameHierarchyStatic = function(...args) 
          
        {
          //print("JS: RLayer.prototype.getLayerNameHierarchyStatic");
          return this.__PROXY__.getLayerNameHierarchyStatic(...args);
        };
    
        // function 
        RLayer.prototype.isChildLayerOfStatic = function(...args) 
          
        {
          //print("JS: RLayer.prototype.isChildLayerOfStatic");
          return this.__PROXY__.isChildLayerOfStatic(...args);
        };
    

      // static functions:
      

        // static function 
        RLayer.init = function() 
          
        {
          //print("JS: RLayer.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.getRtti = function() 
          
        {
          //print("JS: RLayer.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.getHierarchySeparator = function() 
          
        {
          //print("JS: RLayer.getHierarchySeparator");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.getHierarchySeparator(
                  
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.getHierarchySeparator(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.hasChildLayersStatic = function() 
          
        {
          //print("JS: RLayer.hasChildLayersStatic");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.hasChildLayersStatic(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.hasChildLayersStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.getChildLayerNamesStatic = function() 
          
        {
          //print("JS: RLayer.getChildLayerNamesStatic");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.getChildLayerNamesStatic(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.getChildLayerNamesStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.getParentLayerNameStatic = function() 
          
        {
          //print("JS: RLayer.getParentLayerNameStatic");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.getParentLayerNameStatic(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.getParentLayerNameStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.getShortLayerNameStatic = function() 
          
        {
          //print("JS: RLayer.getShortLayerNameStatic");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.getShortLayerNameStatic(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.getShortLayerNameStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.getLayerNameHierarchyStatic = function() 
          
        {
          //print("JS: RLayer.getLayerNameHierarchyStatic");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.getLayerNameHierarchyStatic(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.getLayerNameHierarchyStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.isChildLayerOfStatic = function() 
          
        {
          //print("JS: RLayer.isChildLayerOfStatic");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.isChildLayerOfStatic(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.isChildLayerOfStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RLayer.INVALID_ID = 
  RLayer_WrapperSingletonInstance.INVALID_ID;
RLayer.INVALID_HANDLE = 
  RLayer_WrapperSingletonInstance.INVALID_HANDLE;
RLayer.PropertyCustom = 
  RLayer_WrapperSingletonInstance.PropertyCustom;
RLayer.PropertyType = 
  RLayer_WrapperSingletonInstance.PropertyType;
RLayer.PropertyHandle = 
  RLayer_WrapperSingletonInstance.PropertyHandle;
RLayer.PropertyProtected = 
  RLayer_WrapperSingletonInstance.PropertyProtected;
RLayer.PropertyWorkingSet = 
  RLayer_WrapperSingletonInstance.PropertyWorkingSet;
RLayer.PropertySelected = 
  RLayer_WrapperSingletonInstance.PropertySelected;
RLayer.PropertyInvisible = 
  RLayer_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RLayer.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLayer.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RLayer.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      