
      // auto generated
      //var self;

      // class constructor:
      function RHatchEntity() {
        

        // should be RHatchEntity_BaseJs.call(this, engine):
        //RHatchEntity.prototype = new RHatchEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RHatchEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RHatchEntity);
            //}
          }
          else {
            qWarning("RHatchEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RHatchEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RHatchEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RHatchEntity);
  }

  
  else {
    
        print("RHatchEntity(): wrong number / type of arguments");
      
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

      //RHatchEntity.prototype = new RHatchEntity_BaseJs(engine);
      //RHatchEntity.prototype = new RHatchEntity_Wrapper(engine);
      RHatchEntity.prototype = new Object();

      RHatchEntity.prototype.toString = function() {
          //return "RHatchEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RHatchEntity [JS]";
        };
      RHatchEntity.getObjectType = function() {
        return RJSType_RHatchEntity.getIdStatic();
      };

      RHatchEntity.prototype.getObjectType = function() {
        return RJSType_RHatchEntity.getIdStatic();
      };

      RHatchEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RHatchEntity.getIdStatic()) {
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
        RHatchEntity.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RHatchEntity.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RHatchEntity_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RHatchEntity);
  }

  
  else {
    
        print("RHatchEntity.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RHatchEntity.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RHatchEntity.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RHatchEntity_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RHatchEntity);
  }

  
  else {
    
        print("RHatchEntity.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RHatchEntity.setMember = function() 
          
        {
          //print("JS: RHatchEntity.setMember");
          
        };
      

        // static function 
        RHatchEntity.setMemberX = function() 
          
        {
          //print("JS: RHatchEntity.setMemberX");
          
        };
      

        // static function 
        RHatchEntity.setMemberY = function() 
          
        {
          //print("JS: RHatchEntity.setMemberY");
          
        };
      

        // static function 
        RHatchEntity.setMemberZ = function() 
          
        {
          //print("JS: RHatchEntity.setMemberZ");
          
        };
      

        // static function 
        RHatchEntity.setMemberVector = function() 
          
        {
          //print("JS: RHatchEntity.setMemberVector");
          
        };
      

        // static function 
        RHatchEntity.isComplex = function() 
          
        {
          //print("JS: RHatchEntity.isComplex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RHatchEntity_WrapperSingletonInstance.isComplex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RHatchEntity);
  }

  
  else {
    
        print("RHatchEntity.isComplex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RHatchEntity.isDimension = function() 
          
        {
          //print("JS: RHatchEntity.isDimension");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RHatchEntity_WrapperSingletonInstance.isDimension(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RHatchEntity);
  }

  
  else {
    
        print("RHatchEntity.isDimension(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RHatchEntity.isTextBased = function() 
          
        {
          //print("JS: RHatchEntity.isTextBased");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RHatchEntity_WrapperSingletonInstance.isTextBased(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RHatchEntity);
  }

  
  else {
    
        print("RHatchEntity.isTextBased(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RHatchEntity.init = function() 
          
        {
          //print("JS: RHatchEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RHatchEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RHatchEntity);
  }

  
  else {
    
        print("RHatchEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RHatchEntity.getRtti = function() 
          
        {
          //print("JS: RHatchEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RHatchEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RHatchEntity);
  }

  
  else {
    
        print("RHatchEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RHatchEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RHatchEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RHatchEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RHatchEntity);
  }

  
  else {
    
        print("RHatchEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RHatchEntity.INVALID_ID = 
  RHatchEntity_WrapperSingletonInstance.INVALID_ID;
RHatchEntity.INVALID_HANDLE = 
  RHatchEntity_WrapperSingletonInstance.INVALID_HANDLE;
RHatchEntity.PropertySelected = 
  RHatchEntity_WrapperSingletonInstance.PropertySelected;
RHatchEntity.PropertyInvisible = 
  RHatchEntity_WrapperSingletonInstance.PropertyInvisible;
RHatchEntity.PropertyParentId = 
  RHatchEntity_WrapperSingletonInstance.PropertyParentId;
RHatchEntity.PropertyMinX = 
  RHatchEntity_WrapperSingletonInstance.PropertyMinX;
RHatchEntity.PropertyMinY = 
  RHatchEntity_WrapperSingletonInstance.PropertyMinY;
RHatchEntity.PropertyMaxX = 
  RHatchEntity_WrapperSingletonInstance.PropertyMaxX;
RHatchEntity.PropertyMaxY = 
  RHatchEntity_WrapperSingletonInstance.PropertyMaxY;
RHatchEntity.PropertySizeX = 
  RHatchEntity_WrapperSingletonInstance.PropertySizeX;
RHatchEntity.PropertySizeY = 
  RHatchEntity_WrapperSingletonInstance.PropertySizeY;
RHatchEntity.PropertyCustom = 
  RHatchEntity_WrapperSingletonInstance.PropertyCustom;
RHatchEntity.PropertyHandle = 
  RHatchEntity_WrapperSingletonInstance.PropertyHandle;
RHatchEntity.PropertyProtected = 
  RHatchEntity_WrapperSingletonInstance.PropertyProtected;
RHatchEntity.PropertyWorkingSet = 
  RHatchEntity_WrapperSingletonInstance.PropertyWorkingSet;
RHatchEntity.PropertyType = 
  RHatchEntity_WrapperSingletonInstance.PropertyType;
RHatchEntity.PropertyBlock = 
  RHatchEntity_WrapperSingletonInstance.PropertyBlock;
RHatchEntity.PropertyLayer = 
  RHatchEntity_WrapperSingletonInstance.PropertyLayer;
RHatchEntity.PropertyLinetype = 
  RHatchEntity_WrapperSingletonInstance.PropertyLinetype;
RHatchEntity.PropertyLinetypeScale = 
  RHatchEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RHatchEntity.PropertyLineweight = 
  RHatchEntity_WrapperSingletonInstance.PropertyLineweight;
RHatchEntity.PropertyColor = 
  RHatchEntity_WrapperSingletonInstance.PropertyColor;
RHatchEntity.PropertyDisplayedColor = 
  RHatchEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RHatchEntity.PropertyDrawOrder = 
  RHatchEntity_WrapperSingletonInstance.PropertyDrawOrder;
RHatchEntity.PropertySolid = 
  RHatchEntity_WrapperSingletonInstance.PropertySolid;
RHatchEntity.PropertyTransparency = 
  RHatchEntity_WrapperSingletonInstance.PropertyTransparency;
RHatchEntity.PropertyPatternName = 
  RHatchEntity_WrapperSingletonInstance.PropertyPatternName;
RHatchEntity.PropertyEntityPattern = 
  RHatchEntity_WrapperSingletonInstance.PropertyEntityPattern;
RHatchEntity.PropertyScaleFactor = 
  RHatchEntity_WrapperSingletonInstance.PropertyScaleFactor;
RHatchEntity.PropertyAngle = 
  RHatchEntity_WrapperSingletonInstance.PropertyAngle;
RHatchEntity.PropertyOriginX = 
  RHatchEntity_WrapperSingletonInstance.PropertyOriginX;
RHatchEntity.PropertyOriginY = 
  RHatchEntity_WrapperSingletonInstance.PropertyOriginY;
RHatchEntity.PropertyVertexNX = 
  RHatchEntity_WrapperSingletonInstance.PropertyVertexNX;
RHatchEntity.PropertyVertexNY = 
  RHatchEntity_WrapperSingletonInstance.PropertyVertexNY;
RHatchEntity.PropertyVertexNZ = 
  RHatchEntity_WrapperSingletonInstance.PropertyVertexNZ;
RHatchEntity.PropertyLength = 
  RHatchEntity_WrapperSingletonInstance.PropertyLength;
RHatchEntity.PropertyTotalLength = 
  RHatchEntity_WrapperSingletonInstance.PropertyTotalLength;
RHatchEntity.PropertyArea = 
  RHatchEntity_WrapperSingletonInstance.PropertyArea;
RHatchEntity.PropertyTotalArea = 
  RHatchEntity_WrapperSingletonInstance.PropertyTotalArea;


      // copy function:
      //RHatchEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RHatchEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    