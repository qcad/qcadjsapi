
      // auto generated
      //var self;

      // class constructor:
      function RImageEntity() {
        

        // should be RImageEntity_BaseJs.call(this, engine):
        //RImageEntity.prototype = new RImageEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RImageEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RImageEntity);
            //}
          }
          else {
            qWarning("RImageEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RImageEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RImageEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RImageEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RImageEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RImageEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RImageEntity);
  }

  
  else {
    
        print("RImageEntity(): wrong number / type of arguments");
      
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

      //RImageEntity.prototype = new RImageEntity_BaseJs(engine);
      //RImageEntity.prototype = new RImageEntity_Wrapper(engine);
      RImageEntity.prototype = new Object();

      RImageEntity.prototype.toString = function() {
          //return "RImageEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RImageEntity [JS]";
        };
      RImageEntity.getObjectType = function() {
        return RJSType_RImageEntity.getIdStatic();
      };

      RImageEntity.prototype.getObjectType = function() {
        return RJSType_RImageEntity.getIdStatic();
      };

      RImageEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RImageEntity.getIdStatic()) {
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
        RImageEntity.init = function() 
          
        {
          //print("JS: RImageEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RImageEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RImageEntity);
  }

  
  else {
    
        print("RImageEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RImageEntity.getRtti = function() 
          
        {
          //print("JS: RImageEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RImageEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RImageEntity);
  }

  
  else {
    
        print("RImageEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RImageEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RImageEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RImageEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RImageEntity);
  }

  
  else {
    
        print("RImageEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RImageEntity.INVALID_ID = 
  RImageEntity_WrapperSingletonInstance.INVALID_ID;
RImageEntity.INVALID_HANDLE = 
  RImageEntity_WrapperSingletonInstance.INVALID_HANDLE;
RImageEntity.PropertySelected = 
  RImageEntity_WrapperSingletonInstance.PropertySelected;
RImageEntity.PropertyInvisible = 
  RImageEntity_WrapperSingletonInstance.PropertyInvisible;
RImageEntity.PropertyParentId = 
  RImageEntity_WrapperSingletonInstance.PropertyParentId;
RImageEntity.PropertyMinX = 
  RImageEntity_WrapperSingletonInstance.PropertyMinX;
RImageEntity.PropertyMinY = 
  RImageEntity_WrapperSingletonInstance.PropertyMinY;
RImageEntity.PropertyMaxX = 
  RImageEntity_WrapperSingletonInstance.PropertyMaxX;
RImageEntity.PropertyMaxY = 
  RImageEntity_WrapperSingletonInstance.PropertyMaxY;
RImageEntity.PropertySizeX = 
  RImageEntity_WrapperSingletonInstance.PropertySizeX;
RImageEntity.PropertySizeY = 
  RImageEntity_WrapperSingletonInstance.PropertySizeY;
RImageEntity.PropertyCustom = 
  RImageEntity_WrapperSingletonInstance.PropertyCustom;
RImageEntity.PropertyHandle = 
  RImageEntity_WrapperSingletonInstance.PropertyHandle;
RImageEntity.PropertyProtected = 
  RImageEntity_WrapperSingletonInstance.PropertyProtected;
RImageEntity.PropertyWorkingSet = 
  RImageEntity_WrapperSingletonInstance.PropertyWorkingSet;
RImageEntity.PropertyType = 
  RImageEntity_WrapperSingletonInstance.PropertyType;
RImageEntity.PropertyBlock = 
  RImageEntity_WrapperSingletonInstance.PropertyBlock;
RImageEntity.PropertyLayer = 
  RImageEntity_WrapperSingletonInstance.PropertyLayer;
RImageEntity.PropertyLinetype = 
  RImageEntity_WrapperSingletonInstance.PropertyLinetype;
RImageEntity.PropertyLinetypeScale = 
  RImageEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RImageEntity.PropertyLineweight = 
  RImageEntity_WrapperSingletonInstance.PropertyLineweight;
RImageEntity.PropertyColor = 
  RImageEntity_WrapperSingletonInstance.PropertyColor;
RImageEntity.PropertyDisplayedColor = 
  RImageEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RImageEntity.PropertyDrawOrder = 
  RImageEntity_WrapperSingletonInstance.PropertyDrawOrder;
RImageEntity.PropertyFileName = 
  RImageEntity_WrapperSingletonInstance.PropertyFileName;
RImageEntity.PropertyInsertionPointX = 
  RImageEntity_WrapperSingletonInstance.PropertyInsertionPointX;
RImageEntity.PropertyInsertionPointY = 
  RImageEntity_WrapperSingletonInstance.PropertyInsertionPointY;
RImageEntity.PropertyInsertionPointZ = 
  RImageEntity_WrapperSingletonInstance.PropertyInsertionPointZ;
RImageEntity.PropertyUX = 
  RImageEntity_WrapperSingletonInstance.PropertyUX;
RImageEntity.PropertyUY = 
  RImageEntity_WrapperSingletonInstance.PropertyUY;
RImageEntity.PropertyVX = 
  RImageEntity_WrapperSingletonInstance.PropertyVX;
RImageEntity.PropertyVY = 
  RImageEntity_WrapperSingletonInstance.PropertyVY;
RImageEntity.PropertyScaleFactorX = 
  RImageEntity_WrapperSingletonInstance.PropertyScaleFactorX;
RImageEntity.PropertyScaleFactorY = 
  RImageEntity_WrapperSingletonInstance.PropertyScaleFactorY;
RImageEntity.PropertyAngle = 
  RImageEntity_WrapperSingletonInstance.PropertyAngle;
RImageEntity.PropertyWidth = 
  RImageEntity_WrapperSingletonInstance.PropertyWidth;
RImageEntity.PropertyHeight = 
  RImageEntity_WrapperSingletonInstance.PropertyHeight;
RImageEntity.PropertyFade = 
  RImageEntity_WrapperSingletonInstance.PropertyFade;


      // copy function:
      //RImageEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RImageEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    