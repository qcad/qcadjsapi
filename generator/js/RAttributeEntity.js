
      // auto generated
      //var self;

      // class constructor:
      function RAttributeEntity() {
        

        // should be RAttributeEntity_BaseJs.call(this, engine):
        //RAttributeEntity.prototype = new RAttributeEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RAttributeEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RAttributeEntity);
            //}
          }
          else {
            qWarning("RAttributeEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RAttributeEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RAttributeEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RAttributeEntity);
  }

  
  else {
    
        print("RAttributeEntity(): wrong number / type of arguments");
      
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

      //RAttributeEntity.prototype = new RAttributeEntity_BaseJs(engine);
      //RAttributeEntity.prototype = new RAttributeEntity_Wrapper(engine);
      RAttributeEntity.prototype = new Object();

      RAttributeEntity.prototype.toString = function() {
          //return "RAttributeEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RAttributeEntity [JS]";
        };
      RAttributeEntity.getObjectType = function() {
        return RJSType_RAttributeEntity.getIdStatic();
      };

      RAttributeEntity.prototype.getObjectType = function() {
        return RJSType_RAttributeEntity.getIdStatic();
      };

      RAttributeEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RAttributeEntity.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_REntity.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RTextBasedEntity.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RAttributeEntity.init = function() 
          
        {
          //print("JS: RAttributeEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RAttributeEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RAttributeEntity);
  }

  
  else {
    
        print("RAttributeEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RAttributeEntity.getRtti = function() 
          
        {
          //print("JS: RAttributeEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RAttributeEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RAttributeEntity);
  }

  
  else {
    
        print("RAttributeEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RAttributeEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RAttributeEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RAttributeEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RAttributeEntity);
  }

  
  else {
    
        print("RAttributeEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RAttributeEntity.INVALID_ID = 
  RAttributeEntity_WrapperSingletonInstance.INVALID_ID;
RAttributeEntity.INVALID_HANDLE = 
  RAttributeEntity_WrapperSingletonInstance.INVALID_HANDLE;
RAttributeEntity.PropertySelected = 
  RAttributeEntity_WrapperSingletonInstance.PropertySelected;
RAttributeEntity.PropertyMinX = 
  RAttributeEntity_WrapperSingletonInstance.PropertyMinX;
RAttributeEntity.PropertyMinY = 
  RAttributeEntity_WrapperSingletonInstance.PropertyMinY;
RAttributeEntity.PropertyMaxX = 
  RAttributeEntity_WrapperSingletonInstance.PropertyMaxX;
RAttributeEntity.PropertyMaxY = 
  RAttributeEntity_WrapperSingletonInstance.PropertyMaxY;
RAttributeEntity.PropertySizeX = 
  RAttributeEntity_WrapperSingletonInstance.PropertySizeX;
RAttributeEntity.PropertySizeY = 
  RAttributeEntity_WrapperSingletonInstance.PropertySizeY;
RAttributeEntity.PropertySimple = 
  RAttributeEntity_WrapperSingletonInstance.PropertySimple;
RAttributeEntity.PropertyCustom = 
  RAttributeEntity_WrapperSingletonInstance.PropertyCustom;
RAttributeEntity.PropertyHandle = 
  RAttributeEntity_WrapperSingletonInstance.PropertyHandle;
RAttributeEntity.PropertyProtected = 
  RAttributeEntity_WrapperSingletonInstance.PropertyProtected;
RAttributeEntity.PropertyWorkingSet = 
  RAttributeEntity_WrapperSingletonInstance.PropertyWorkingSet;
RAttributeEntity.PropertyType = 
  RAttributeEntity_WrapperSingletonInstance.PropertyType;
RAttributeEntity.PropertyBlock = 
  RAttributeEntity_WrapperSingletonInstance.PropertyBlock;
RAttributeEntity.PropertyLayer = 
  RAttributeEntity_WrapperSingletonInstance.PropertyLayer;
RAttributeEntity.PropertyLinetype = 
  RAttributeEntity_WrapperSingletonInstance.PropertyLinetype;
RAttributeEntity.PropertyLinetypeScale = 
  RAttributeEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RAttributeEntity.PropertyLineweight = 
  RAttributeEntity_WrapperSingletonInstance.PropertyLineweight;
RAttributeEntity.PropertyColor = 
  RAttributeEntity_WrapperSingletonInstance.PropertyColor;
RAttributeEntity.PropertyDisplayedColor = 
  RAttributeEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RAttributeEntity.PropertyDrawOrder = 
  RAttributeEntity_WrapperSingletonInstance.PropertyDrawOrder;
RAttributeEntity.PropertyParentId = 
  RAttributeEntity_WrapperSingletonInstance.PropertyParentId;
RAttributeEntity.PropertyAngle = 
  RAttributeEntity_WrapperSingletonInstance.PropertyAngle;
RAttributeEntity.PropertyXScale = 
  RAttributeEntity_WrapperSingletonInstance.PropertyXScale;
RAttributeEntity.PropertyBold = 
  RAttributeEntity_WrapperSingletonInstance.PropertyBold;
RAttributeEntity.PropertyFontName = 
  RAttributeEntity_WrapperSingletonInstance.PropertyFontName;
RAttributeEntity.PropertyHAlign = 
  RAttributeEntity_WrapperSingletonInstance.PropertyHAlign;
RAttributeEntity.PropertyHeight = 
  RAttributeEntity_WrapperSingletonInstance.PropertyHeight;
RAttributeEntity.PropertyWidth = 
  RAttributeEntity_WrapperSingletonInstance.PropertyWidth;
RAttributeEntity.PropertyItalic = 
  RAttributeEntity_WrapperSingletonInstance.PropertyItalic;
RAttributeEntity.PropertyLineSpacingFactor = 
  RAttributeEntity_WrapperSingletonInstance.PropertyLineSpacingFactor;
RAttributeEntity.PropertyPositionX = 
  RAttributeEntity_WrapperSingletonInstance.PropertyPositionX;
RAttributeEntity.PropertyPositionY = 
  RAttributeEntity_WrapperSingletonInstance.PropertyPositionY;
RAttributeEntity.PropertyPositionZ = 
  RAttributeEntity_WrapperSingletonInstance.PropertyPositionZ;
RAttributeEntity.PropertyTag = 
  RAttributeEntity_WrapperSingletonInstance.PropertyTag;
RAttributeEntity.PropertyText = 
  RAttributeEntity_WrapperSingletonInstance.PropertyText;
RAttributeEntity.PropertyPlainText = 
  RAttributeEntity_WrapperSingletonInstance.PropertyPlainText;
RAttributeEntity.PropertyVAlign = 
  RAttributeEntity_WrapperSingletonInstance.PropertyVAlign;
RAttributeEntity.PropertyInvisible = 
  RAttributeEntity_WrapperSingletonInstance.PropertyInvisible;
RAttributeEntity.PropertyBackward = 
  RAttributeEntity_WrapperSingletonInstance.PropertyBackward;
RAttributeEntity.PropertyUpsideDown = 
  RAttributeEntity_WrapperSingletonInstance.PropertyUpsideDown;


      // copy function:
      //RAttributeEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RAttributeEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    