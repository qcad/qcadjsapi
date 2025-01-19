
      // auto generated
      //var self;

      // class constructor:
      function RCircleEntity() {
        

        // should be RCircleEntity_BaseJs.call(this, engine):
        //RCircleEntity.prototype = new RCircleEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCircleEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RCircleEntity);
            //}
          }
          else {
            qWarning("RCircleEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RCircleEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCircleEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCircleEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RCircleEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCircleEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCircleEntity);
  }

  
  else {
    
        print("RCircleEntity(): wrong number / type of arguments");
      
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

      //RCircleEntity.prototype = new RCircleEntity_BaseJs(engine);
      //RCircleEntity.prototype = new RCircleEntity_Wrapper(engine);
      RCircleEntity.prototype = new Object();

      RCircleEntity.prototype.toString = function() {
          //return "RCircleEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCircleEntity [JS]";
        };
      RCircleEntity.getObjectType = function() {
        return RJSType_RCircleEntity.getIdStatic();
      };

      RCircleEntity.prototype.getObjectType = function() {
        return RJSType_RCircleEntity.getIdStatic();
      };

      RCircleEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCircleEntity.getIdStatic()) {
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
        RCircleEntity.init = function() 
          
        {
          //print("JS: RCircleEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RCircleEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RCircleEntity);
  }

  
  else {
    
        print("RCircleEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircleEntity.getRtti = function() 
          
        {
          //print("JS: RCircleEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RCircleEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RCircleEntity);
  }

  
  else {
    
        print("RCircleEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircleEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RCircleEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RCircleEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RCircleEntity);
  }

  
  else {
    
        print("RCircleEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RCircleEntity.INVALID_ID = 
  RCircleEntity_WrapperSingletonInstance.INVALID_ID;
RCircleEntity.INVALID_HANDLE = 
  RCircleEntity_WrapperSingletonInstance.INVALID_HANDLE;
RCircleEntity.PropertySelected = 
  RCircleEntity_WrapperSingletonInstance.PropertySelected;
RCircleEntity.PropertyInvisible = 
  RCircleEntity_WrapperSingletonInstance.PropertyInvisible;
RCircleEntity.PropertyParentId = 
  RCircleEntity_WrapperSingletonInstance.PropertyParentId;
RCircleEntity.PropertyMinX = 
  RCircleEntity_WrapperSingletonInstance.PropertyMinX;
RCircleEntity.PropertyMinY = 
  RCircleEntity_WrapperSingletonInstance.PropertyMinY;
RCircleEntity.PropertyMaxX = 
  RCircleEntity_WrapperSingletonInstance.PropertyMaxX;
RCircleEntity.PropertyMaxY = 
  RCircleEntity_WrapperSingletonInstance.PropertyMaxY;
RCircleEntity.PropertySizeX = 
  RCircleEntity_WrapperSingletonInstance.PropertySizeX;
RCircleEntity.PropertySizeY = 
  RCircleEntity_WrapperSingletonInstance.PropertySizeY;
RCircleEntity.PropertyCustom = 
  RCircleEntity_WrapperSingletonInstance.PropertyCustom;
RCircleEntity.PropertyHandle = 
  RCircleEntity_WrapperSingletonInstance.PropertyHandle;
RCircleEntity.PropertyProtected = 
  RCircleEntity_WrapperSingletonInstance.PropertyProtected;
RCircleEntity.PropertyWorkingSet = 
  RCircleEntity_WrapperSingletonInstance.PropertyWorkingSet;
RCircleEntity.PropertyType = 
  RCircleEntity_WrapperSingletonInstance.PropertyType;
RCircleEntity.PropertyBlock = 
  RCircleEntity_WrapperSingletonInstance.PropertyBlock;
RCircleEntity.PropertyLayer = 
  RCircleEntity_WrapperSingletonInstance.PropertyLayer;
RCircleEntity.PropertyLinetype = 
  RCircleEntity_WrapperSingletonInstance.PropertyLinetype;
RCircleEntity.PropertyLinetypeScale = 
  RCircleEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RCircleEntity.PropertyLineweight = 
  RCircleEntity_WrapperSingletonInstance.PropertyLineweight;
RCircleEntity.PropertyColor = 
  RCircleEntity_WrapperSingletonInstance.PropertyColor;
RCircleEntity.PropertyDisplayedColor = 
  RCircleEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RCircleEntity.PropertyDrawOrder = 
  RCircleEntity_WrapperSingletonInstance.PropertyDrawOrder;
RCircleEntity.PropertyCenterX = 
  RCircleEntity_WrapperSingletonInstance.PropertyCenterX;
RCircleEntity.PropertyCenterY = 
  RCircleEntity_WrapperSingletonInstance.PropertyCenterY;
RCircleEntity.PropertyCenterZ = 
  RCircleEntity_WrapperSingletonInstance.PropertyCenterZ;
RCircleEntity.PropertyRadius = 
  RCircleEntity_WrapperSingletonInstance.PropertyRadius;
RCircleEntity.PropertyDiameter = 
  RCircleEntity_WrapperSingletonInstance.PropertyDiameter;
RCircleEntity.PropertyCircumference = 
  RCircleEntity_WrapperSingletonInstance.PropertyCircumference;
RCircleEntity.PropertyArea = 
  RCircleEntity_WrapperSingletonInstance.PropertyArea;
RCircleEntity.PropertyTotalArea = 
  RCircleEntity_WrapperSingletonInstance.PropertyTotalArea;


      // copy function:
      //RCircleEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCircleEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    