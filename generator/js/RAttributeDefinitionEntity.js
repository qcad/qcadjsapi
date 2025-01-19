
      // auto generated
      //var self;

      // class constructor:
      function RAttributeDefinitionEntity() {
        

        // should be RAttributeDefinitionEntity_BaseJs.call(this, engine):
        //RAttributeDefinitionEntity.prototype = new RAttributeDefinitionEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RAttributeDefinitionEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RAttributeDefinitionEntity);
            //}
          }
          else {
            qWarning("RAttributeDefinitionEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RAttributeDefinitionEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RAttributeDefinitionEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RAttributeDefinitionEntity);
  }

  
  else {
    
        print("RAttributeDefinitionEntity(): wrong number / type of arguments");
      
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

      //RAttributeDefinitionEntity.prototype = new RAttributeDefinitionEntity_BaseJs(engine);
      //RAttributeDefinitionEntity.prototype = new RAttributeDefinitionEntity_Wrapper(engine);
      RAttributeDefinitionEntity.prototype = new Object();

      RAttributeDefinitionEntity.prototype.toString = function() {
          //return "RAttributeDefinitionEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RAttributeDefinitionEntity [JS]";
        };
      RAttributeDefinitionEntity.getObjectType = function() {
        return RJSType_RAttributeDefinitionEntity.getIdStatic();
      };

      RAttributeDefinitionEntity.prototype.getObjectType = function() {
        return RJSType_RAttributeDefinitionEntity.getIdStatic();
      };

      RAttributeDefinitionEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RAttributeDefinitionEntity.getIdStatic()) {
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
        RAttributeDefinitionEntity.init = function() 
          
        {
          //print("JS: RAttributeDefinitionEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RAttributeDefinitionEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RAttributeDefinitionEntity);
  }

  
  else {
    
        print("RAttributeDefinitionEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RAttributeDefinitionEntity.getRtti = function() 
          
        {
          //print("JS: RAttributeDefinitionEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RAttributeDefinitionEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RAttributeDefinitionEntity);
  }

  
  else {
    
        print("RAttributeDefinitionEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RAttributeDefinitionEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RAttributeDefinitionEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RAttributeDefinitionEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RAttributeDefinitionEntity);
  }

  
  else {
    
        print("RAttributeDefinitionEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RAttributeDefinitionEntity.INVALID_ID = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.INVALID_ID;
RAttributeDefinitionEntity.INVALID_HANDLE = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.INVALID_HANDLE;
RAttributeDefinitionEntity.PropertySelected = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertySelected;
RAttributeDefinitionEntity.PropertyParentId = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyParentId;
RAttributeDefinitionEntity.PropertyMinX = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyMinX;
RAttributeDefinitionEntity.PropertyMinY = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyMinY;
RAttributeDefinitionEntity.PropertyMaxX = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyMaxX;
RAttributeDefinitionEntity.PropertyMaxY = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyMaxY;
RAttributeDefinitionEntity.PropertySizeX = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertySizeX;
RAttributeDefinitionEntity.PropertySizeY = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertySizeY;
RAttributeDefinitionEntity.PropertySimple = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertySimple;
RAttributeDefinitionEntity.PropertyBackward = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyBackward;
RAttributeDefinitionEntity.PropertyUpsideDown = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyUpsideDown;
RAttributeDefinitionEntity.PropertyCustom = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyCustom;
RAttributeDefinitionEntity.PropertyHandle = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyHandle;
RAttributeDefinitionEntity.PropertyProtected = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyProtected;
RAttributeDefinitionEntity.PropertyWorkingSet = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyWorkingSet;
RAttributeDefinitionEntity.PropertyType = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyType;
RAttributeDefinitionEntity.PropertyBlock = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyBlock;
RAttributeDefinitionEntity.PropertyLayer = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyLayer;
RAttributeDefinitionEntity.PropertyLinetype = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyLinetype;
RAttributeDefinitionEntity.PropertyLinetypeScale = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RAttributeDefinitionEntity.PropertyLineweight = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyLineweight;
RAttributeDefinitionEntity.PropertyColor = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyColor;
RAttributeDefinitionEntity.PropertyDisplayedColor = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RAttributeDefinitionEntity.PropertyDrawOrder = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyDrawOrder;
RAttributeDefinitionEntity.PropertyAngle = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyAngle;
RAttributeDefinitionEntity.PropertyXScale = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyXScale;
RAttributeDefinitionEntity.PropertyBold = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyBold;
RAttributeDefinitionEntity.PropertyFontName = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyFontName;
RAttributeDefinitionEntity.PropertyHAlign = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyHAlign;
RAttributeDefinitionEntity.PropertyHeight = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyHeight;
RAttributeDefinitionEntity.PropertyWidth = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyWidth;
RAttributeDefinitionEntity.PropertyItalic = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyItalic;
RAttributeDefinitionEntity.PropertyLineSpacingFactor = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyLineSpacingFactor;
RAttributeDefinitionEntity.PropertyPositionX = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyPositionX;
RAttributeDefinitionEntity.PropertyPositionY = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyPositionY;
RAttributeDefinitionEntity.PropertyPositionZ = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyPositionZ;
RAttributeDefinitionEntity.PropertyPrompt = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyPrompt;
RAttributeDefinitionEntity.PropertyTag = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyTag;
RAttributeDefinitionEntity.PropertyText = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyText;
RAttributeDefinitionEntity.PropertyPlainText = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyPlainText;
RAttributeDefinitionEntity.PropertyVAlign = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyVAlign;
RAttributeDefinitionEntity.PropertyInvisible = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RAttributeDefinitionEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RAttributeDefinitionEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    