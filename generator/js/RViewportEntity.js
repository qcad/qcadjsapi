
      // auto generated
      //var self;

      // class constructor:
      function RViewportEntity() {
        

        // should be RViewportEntity_BaseJs.call(this, engine):
        //RViewportEntity.prototype = new RViewportEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RViewportEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RViewportEntity);
            //}
          }
          else {
            qWarning("RViewportEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RViewportEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RViewportEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RViewportEntity);
  }

  
  else {
    
        print("RViewportEntity(): wrong number / type of arguments");
      
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

      //RViewportEntity.prototype = new RViewportEntity_BaseJs(engine);
      //RViewportEntity.prototype = new RViewportEntity_Wrapper(engine);
      RViewportEntity.prototype = new Object();

      RViewportEntity.prototype.toString = function() {
          //return "RViewportEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RViewportEntity [JS]";
        };
      RViewportEntity.getObjectType = function() {
        return RJSType_RViewportEntity.getIdStatic();
      };

      RViewportEntity.prototype.getObjectType = function() {
        return RJSType_RViewportEntity.getIdStatic();
      };

      RViewportEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RViewportEntity.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_REntity.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RViewportEntity.getRtti = function() 
          
        {
          //print("JS: RViewportEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RViewportEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RViewportEntity);
  }

  
  else {
    
        print("RViewportEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RViewportEntity.init = function() 
          
        {
          //print("JS: RViewportEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RViewportEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RViewportEntity);
  }

  
  else {
    
        print("RViewportEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RViewportEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RViewportEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RViewportEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RViewportEntity);
  }

  
  else {
    
        print("RViewportEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RViewportEntity.INVALID_ID = 
  RViewportEntity_WrapperSingletonInstance.INVALID_ID;
RViewportEntity.INVALID_HANDLE = 
  RViewportEntity_WrapperSingletonInstance.INVALID_HANDLE;
RViewportEntity.PropertySelected = 
  RViewportEntity_WrapperSingletonInstance.PropertySelected;
RViewportEntity.PropertyInvisible = 
  RViewportEntity_WrapperSingletonInstance.PropertyInvisible;
RViewportEntity.PropertyProtected = 
  RViewportEntity_WrapperSingletonInstance.PropertyProtected;
RViewportEntity.PropertyWorkingSet = 
  RViewportEntity_WrapperSingletonInstance.PropertyWorkingSet;
RViewportEntity.PropertyParentId = 
  RViewportEntity_WrapperSingletonInstance.PropertyParentId;
RViewportEntity.PropertyMinX = 
  RViewportEntity_WrapperSingletonInstance.PropertyMinX;
RViewportEntity.PropertyMinY = 
  RViewportEntity_WrapperSingletonInstance.PropertyMinY;
RViewportEntity.PropertyMaxX = 
  RViewportEntity_WrapperSingletonInstance.PropertyMaxX;
RViewportEntity.PropertyMaxY = 
  RViewportEntity_WrapperSingletonInstance.PropertyMaxY;
RViewportEntity.PropertySizeX = 
  RViewportEntity_WrapperSingletonInstance.PropertySizeX;
RViewportEntity.PropertySizeY = 
  RViewportEntity_WrapperSingletonInstance.PropertySizeY;
RViewportEntity.PropertyCustom = 
  RViewportEntity_WrapperSingletonInstance.PropertyCustom;
RViewportEntity.PropertyHandle = 
  RViewportEntity_WrapperSingletonInstance.PropertyHandle;
RViewportEntity.PropertyType = 
  RViewportEntity_WrapperSingletonInstance.PropertyType;
RViewportEntity.PropertyBlock = 
  RViewportEntity_WrapperSingletonInstance.PropertyBlock;
RViewportEntity.PropertyLayer = 
  RViewportEntity_WrapperSingletonInstance.PropertyLayer;
RViewportEntity.PropertyLinetype = 
  RViewportEntity_WrapperSingletonInstance.PropertyLinetype;
RViewportEntity.PropertyLinetypeScale = 
  RViewportEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RViewportEntity.PropertyLineweight = 
  RViewportEntity_WrapperSingletonInstance.PropertyLineweight;
RViewportEntity.PropertyColor = 
  RViewportEntity_WrapperSingletonInstance.PropertyColor;
RViewportEntity.PropertyDisplayedColor = 
  RViewportEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RViewportEntity.PropertyDrawOrder = 
  RViewportEntity_WrapperSingletonInstance.PropertyDrawOrder;
RViewportEntity.PropertyCenterX = 
  RViewportEntity_WrapperSingletonInstance.PropertyCenterX;
RViewportEntity.PropertyCenterY = 
  RViewportEntity_WrapperSingletonInstance.PropertyCenterY;
RViewportEntity.PropertyCenterZ = 
  RViewportEntity_WrapperSingletonInstance.PropertyCenterZ;
RViewportEntity.PropertyWidth = 
  RViewportEntity_WrapperSingletonInstance.PropertyWidth;
RViewportEntity.PropertyHeight = 
  RViewportEntity_WrapperSingletonInstance.PropertyHeight;
RViewportEntity.PropertyScale = 
  RViewportEntity_WrapperSingletonInstance.PropertyScale;
RViewportEntity.PropertyRotation = 
  RViewportEntity_WrapperSingletonInstance.PropertyRotation;
RViewportEntity.PropertyOn = 
  RViewportEntity_WrapperSingletonInstance.PropertyOn;
RViewportEntity.PropertyViewCenterX = 
  RViewportEntity_WrapperSingletonInstance.PropertyViewCenterX;
RViewportEntity.PropertyViewCenterY = 
  RViewportEntity_WrapperSingletonInstance.PropertyViewCenterY;
RViewportEntity.PropertyViewTargetX = 
  RViewportEntity_WrapperSingletonInstance.PropertyViewTargetX;
RViewportEntity.PropertyViewTargetY = 
  RViewportEntity_WrapperSingletonInstance.PropertyViewTargetY;
RViewportEntity.PropertyViewTargetZ = 
  RViewportEntity_WrapperSingletonInstance.PropertyViewTargetZ;
RViewportEntity.PropertyOverall = 
  RViewportEntity_WrapperSingletonInstance.PropertyOverall;
RViewportEntity.PropertyFrozenLayerIds = 
  RViewportEntity_WrapperSingletonInstance.PropertyFrozenLayerIds;


      // copy function:
      //RViewportEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RViewportEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    