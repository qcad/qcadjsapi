
      // auto generated
      //var self;

      // class constructor:
      function RLayout() {
        

        // should be RLayout_BaseJs.call(this, engine):
        //RLayout.prototype = new RLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLayout.getIdStatic()))) {

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
            qWarning("RLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RLayout_Wrapper(
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

      

        //copyProperties(this, wrapper, RLayout);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RLayout_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLayout);
  }

  
  else {
    
        print("RLayout(): wrong number / type of arguments");
      
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

      //RLayout.prototype = new RLayout_BaseJs(engine);
      //RLayout.prototype = new RLayout_Wrapper(engine);
      RLayout.prototype = new Object();

      RLayout.prototype.toString = function() {
          //return "RLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLayout [JS]";
        };
      RLayout.getObjectType = function() {
        return RJSType_RLayout.getIdStatic();
      };

      RLayout.prototype.getObjectType = function() {
        return RJSType_RLayout.getIdStatic();
      };

      RLayout.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLayout.getIdStatic()) {
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
        RLayout.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RLayout.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RLayout.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RLayout.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RLayout.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RLayout.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RLayout.prototype.getId = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RLayout.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RLayout.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RLayout.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RLayout.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RLayout.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RLayout.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RLayout.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RLayout.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RLayout.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RLayout.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RLayout.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RLayout.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RLayout.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RLayout.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RLayout.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RLayout.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RLayout.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RLayout.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RLayout.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RLayout.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RLayout.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RLayout.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RLayout.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RLayout.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RLayout.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RLayout.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RLayout.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RLayout.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RLayout.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RLayout.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RLayout.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RLayout.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RLayout.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RLayout.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RLayout.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RLayout.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RLayout.prototype.dump = function(...args) 
          
        {
          //print("JS: RLayout.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RLayout.prototype.validate = function(...args) 
          
        {
          //print("JS: RLayout.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RLayout.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RLayout.prototype.setId = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RLayout.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RLayout.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RLayout.prototype.init = function(...args) 
          
        {
          //print("JS: RLayout.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RLayout.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RLayout.prototype.getType = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RLayout.prototype.clone = function(...args) 
          
        {
          //print("JS: RLayout.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RLayout.prototype.getName = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getName");
          return this.__PROXY__.getName(...args);
        };
    
        // function 
        RLayout.prototype.setName = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setName");
          return this.__PROXY__.setName(...args);
        };
    
        // function 
        RLayout.prototype.getTabOrder = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getTabOrder");
          return this.__PROXY__.getTabOrder(...args);
        };
    
        // function 
        RLayout.prototype.setTabOrder = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setTabOrder");
          return this.__PROXY__.setTabOrder(...args);
        };
    
        // function 
        RLayout.prototype.setMinLimits = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setMinLimits");
          return this.__PROXY__.setMinLimits(...args);
        };
    
        // function 
        RLayout.prototype.getMinLimits = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getMinLimits");
          return this.__PROXY__.getMinLimits(...args);
        };
    
        // function 
        RLayout.prototype.setMaxLimits = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setMaxLimits");
          return this.__PROXY__.setMaxLimits(...args);
        };
    
        // function 
        RLayout.prototype.getMaxLimits = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getMaxLimits");
          return this.__PROXY__.getMaxLimits(...args);
        };
    
        // function 
        RLayout.prototype.setInsertionBase = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setInsertionBase");
          return this.__PROXY__.setInsertionBase(...args);
        };
    
        // function 
        RLayout.prototype.getInsertionBase = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getInsertionBase");
          return this.__PROXY__.getInsertionBase(...args);
        };
    
        // function 
        RLayout.prototype.setMinExtents = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setMinExtents");
          return this.__PROXY__.setMinExtents(...args);
        };
    
        // function 
        RLayout.prototype.getMinExtents = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getMinExtents");
          return this.__PROXY__.getMinExtents(...args);
        };
    
        // function 
        RLayout.prototype.setMaxExtents = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setMaxExtents");
          return this.__PROXY__.setMaxExtents(...args);
        };
    
        // function 
        RLayout.prototype.getMaxExtents = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getMaxExtents");
          return this.__PROXY__.getMaxExtents(...args);
        };
    
        // function 
        RLayout.prototype.setPlotPaperMarginLeftMM = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setPlotPaperMarginLeftMM");
          return this.__PROXY__.setPlotPaperMarginLeftMM(...args);
        };
    
        // function 
        RLayout.prototype.setPlotPaperMarginBottomMM = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setPlotPaperMarginBottomMM");
          return this.__PROXY__.setPlotPaperMarginBottomMM(...args);
        };
    
        // function 
        RLayout.prototype.setPlotPaperMarginRightMM = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setPlotPaperMarginRightMM");
          return this.__PROXY__.setPlotPaperMarginRightMM(...args);
        };
    
        // function 
        RLayout.prototype.setPlotPaperMarginTopMM = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setPlotPaperMarginTopMM");
          return this.__PROXY__.setPlotPaperMarginTopMM(...args);
        };
    
        // function 
        RLayout.prototype.setPlotPaperSize = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setPlotPaperSize");
          return this.__PROXY__.setPlotPaperSize(...args);
        };
    
        // function 
        RLayout.prototype.setPlotOrigin = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setPlotOrigin");
          return this.__PROXY__.setPlotOrigin(...args);
        };
    
        // function 
        RLayout.prototype.setPlotWindowAreaMin = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setPlotWindowAreaMin");
          return this.__PROXY__.setPlotWindowAreaMin(...args);
        };
    
        // function 
        RLayout.prototype.setPlotWindowAreaMax = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setPlotWindowAreaMax");
          return this.__PROXY__.setPlotWindowAreaMax(...args);
        };
    
        // function 
        RLayout.prototype.setNumeratorCustomScale = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setNumeratorCustomScale");
          return this.__PROXY__.setNumeratorCustomScale(...args);
        };
    
        // function 
        RLayout.prototype.setDenominatorCustomScale = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setDenominatorCustomScale");
          return this.__PROXY__.setDenominatorCustomScale(...args);
        };
    
        // function 
        RLayout.prototype.setPlotPaperUnits = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setPlotPaperUnits");
          return this.__PROXY__.setPlotPaperUnits(...args);
        };
    
        // function 
        RLayout.prototype.setPlotRotation = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setPlotRotation");
          return this.__PROXY__.setPlotRotation(...args);
        };
    
        // function 
        RLayout.prototype.setPlotType = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setPlotType");
          return this.__PROXY__.setPlotType(...args);
        };
    
        // function 
        RLayout.prototype.setUseStandardScale = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setUseStandardScale");
          return this.__PROXY__.setUseStandardScale(...args);
        };
    
        // function 
        RLayout.prototype.setStandardScale = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setStandardScale");
          return this.__PROXY__.setStandardScale(...args);
        };
    
        // function 
        RLayout.prototype.setStandardScaleType = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setStandardScaleType");
          return this.__PROXY__.setStandardScaleType(...args);
        };
    
        // function 
        RLayout.prototype.setCanonicalMediaName = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setCanonicalMediaName");
          return this.__PROXY__.setCanonicalMediaName(...args);
        };
    
        // function 
        RLayout.prototype.getPlotPaperMarginLeftMM = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getPlotPaperMarginLeftMM");
          return this.__PROXY__.getPlotPaperMarginLeftMM(...args);
        };
    
        // function 
        RLayout.prototype.getPlotPaperMarginBottomMM = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getPlotPaperMarginBottomMM");
          return this.__PROXY__.getPlotPaperMarginBottomMM(...args);
        };
    
        // function 
        RLayout.prototype.getPlotPaperMarginRightMM = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getPlotPaperMarginRightMM");
          return this.__PROXY__.getPlotPaperMarginRightMM(...args);
        };
    
        // function 
        RLayout.prototype.getPlotPaperMarginTopMM = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getPlotPaperMarginTopMM");
          return this.__PROXY__.getPlotPaperMarginTopMM(...args);
        };
    
        // function 
        RLayout.prototype.getPlotPaperSize = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getPlotPaperSize");
          return this.__PROXY__.getPlotPaperSize(...args);
        };
    
        // function 
        RLayout.prototype.getPlotOrigin = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getPlotOrigin");
          return this.__PROXY__.getPlotOrigin(...args);
        };
    
        // function 
        RLayout.prototype.getPlotWindowAreaMin = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getPlotWindowAreaMin");
          return this.__PROXY__.getPlotWindowAreaMin(...args);
        };
    
        // function 
        RLayout.prototype.getPlotWindowAreaMax = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getPlotWindowAreaMax");
          return this.__PROXY__.getPlotWindowAreaMax(...args);
        };
    
        // function 
        RLayout.prototype.getNumeratorCustomScale = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getNumeratorCustomScale");
          return this.__PROXY__.getNumeratorCustomScale(...args);
        };
    
        // function 
        RLayout.prototype.getDenominatorCustomScale = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getDenominatorCustomScale");
          return this.__PROXY__.getDenominatorCustomScale(...args);
        };
    
        // function 
        RLayout.prototype.getPlotPaperUnits = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getPlotPaperUnits");
          return this.__PROXY__.getPlotPaperUnits(...args);
        };
    
        // function 
        RLayout.prototype.getPlotRotation = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getPlotRotation");
          return this.__PROXY__.getPlotRotation(...args);
        };
    
        // function 
        RLayout.prototype.getPlotType = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getPlotType");
          return this.__PROXY__.getPlotType(...args);
        };
    
        // function 
        RLayout.prototype.getUseStandardScale = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getUseStandardScale");
          return this.__PROXY__.getUseStandardScale(...args);
        };
    
        // function 
        RLayout.prototype.getStandardScale = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getStandardScale");
          return this.__PROXY__.getStandardScale(...args);
        };
    
        // function 
        RLayout.prototype.getStandardScaleType = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getStandardScaleType");
          return this.__PROXY__.getStandardScaleType(...args);
        };
    
        // function 
        RLayout.prototype.getCanonicalMediaName = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getCanonicalMediaName");
          return this.__PROXY__.getCanonicalMediaName(...args);
        };
    
        // function 
        RLayout.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RLayout.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RLayout.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RLayout.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RLayout.prototype.print = function(...args) 
          
        {
          //print("JS: RLayout.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RLayout.init = function() 
          
        {
          //print("JS: RLayout.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLayout_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RLayout);
  }

  
  else {
    
        print("RLayout.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayout.getRtti = function() 
          
        {
          //print("JS: RLayout.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLayout_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RLayout);
  }

  
  else {
    
        print("RLayout.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RLayout.INVALID_ID = 
  RLayout_WrapperSingletonInstance.INVALID_ID;
RLayout.INVALID_HANDLE = 
  RLayout_WrapperSingletonInstance.INVALID_HANDLE;
RLayout.PropertyCustom = 
  RLayout_WrapperSingletonInstance.PropertyCustom;
RLayout.PropertyType = 
  RLayout_WrapperSingletonInstance.PropertyType;
RLayout.PropertyHandle = 
  RLayout_WrapperSingletonInstance.PropertyHandle;
RLayout.PropertyProtected = 
  RLayout_WrapperSingletonInstance.PropertyProtected;
RLayout.PropertyWorkingSet = 
  RLayout_WrapperSingletonInstance.PropertyWorkingSet;
RLayout.PropertySelected = 
  RLayout_WrapperSingletonInstance.PropertySelected;
RLayout.PropertyInvisible = 
  RLayout_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RLayout.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      