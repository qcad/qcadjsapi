
      // auto generated
      //var self;

      // class constructor:
      function REllipseEntity() {
        

        // should be REllipseEntity_BaseJs.call(this, engine):
        //REllipseEntity.prototype = new REllipseEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_REllipseEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, REllipseEntity);
            //}
          }
          else {
            qWarning("REllipseEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new REllipseEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, REllipseEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, REllipseEntity);
  }

  
  else {
    
        print("REllipseEntity(): wrong number / type of arguments");
      
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

      //REllipseEntity.prototype = new REllipseEntity_BaseJs(engine);
      //REllipseEntity.prototype = new REllipseEntity_Wrapper(engine);
      REllipseEntity.prototype = new Object();

      REllipseEntity.prototype.toString = function() {
          //return "REllipseEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "REllipseEntity [JS]";
        };
      REllipseEntity.getObjectType = function() {
        return RJSType_REllipseEntity.getIdStatic();
      };

      REllipseEntity.prototype.getObjectType = function() {
        return RJSType_REllipseEntity.getIdStatic();
      };

      REllipseEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_REllipseEntity.getIdStatic()) {
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
        REllipseEntity.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: REllipseEntity.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return REllipseEntity_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REllipseEntity);
  }

  
  else {
    
        print("REllipseEntity.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipseEntity.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: REllipseEntity.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return REllipseEntity_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, REllipseEntity);
  }

  
  else {
    
        print("REllipseEntity.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipseEntity.setMember = function() 
          
        {
          //print("JS: REllipseEntity.setMember");
          
        };
      

        // static function 
        REllipseEntity.setMemberX = function() 
          
        {
          //print("JS: REllipseEntity.setMemberX");
          
        };
      

        // static function 
        REllipseEntity.setMemberY = function() 
          
        {
          //print("JS: REllipseEntity.setMemberY");
          
        };
      

        // static function 
        REllipseEntity.setMemberZ = function() 
          
        {
          //print("JS: REllipseEntity.setMemberZ");
          
        };
      

        // static function 
        REllipseEntity.setMemberVector = function() 
          
        {
          //print("JS: REllipseEntity.setMemberVector");
          
        };
      

        // static function 
        REllipseEntity.isComplex = function() 
          
        {
          //print("JS: REllipseEntity.isComplex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipseEntity_WrapperSingletonInstance.isComplex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipseEntity);
  }

  
  else {
    
        print("REllipseEntity.isComplex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipseEntity.isDimension = function() 
          
        {
          //print("JS: REllipseEntity.isDimension");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipseEntity_WrapperSingletonInstance.isDimension(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipseEntity);
  }

  
  else {
    
        print("REllipseEntity.isDimension(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipseEntity.isTextBased = function() 
          
        {
          //print("JS: REllipseEntity.isTextBased");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REllipseEntity_WrapperSingletonInstance.isTextBased(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REllipseEntity);
  }

  
  else {
    
        print("REllipseEntity.isTextBased(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipseEntity.init = function() 
          
        {
          //print("JS: REllipseEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REllipseEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, REllipseEntity);
  }

  
  else {
    
        print("REllipseEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipseEntity.getRtti = function() 
          
        {
          //print("JS: REllipseEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REllipseEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, REllipseEntity);
  }

  
  else {
    
        print("REllipseEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipseEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: REllipseEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REllipseEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, REllipseEntity);
  }

  
  else {
    
        print("REllipseEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      REllipseEntity.INVALID_ID = 
  REllipseEntity_WrapperSingletonInstance.INVALID_ID;
REllipseEntity.INVALID_HANDLE = 
  REllipseEntity_WrapperSingletonInstance.INVALID_HANDLE;
REllipseEntity.PropertySelected = 
  REllipseEntity_WrapperSingletonInstance.PropertySelected;
REllipseEntity.PropertyInvisible = 
  REllipseEntity_WrapperSingletonInstance.PropertyInvisible;
REllipseEntity.PropertyParentId = 
  REllipseEntity_WrapperSingletonInstance.PropertyParentId;
REllipseEntity.PropertyMinX = 
  REllipseEntity_WrapperSingletonInstance.PropertyMinX;
REllipseEntity.PropertyMinY = 
  REllipseEntity_WrapperSingletonInstance.PropertyMinY;
REllipseEntity.PropertyMaxX = 
  REllipseEntity_WrapperSingletonInstance.PropertyMaxX;
REllipseEntity.PropertyMaxY = 
  REllipseEntity_WrapperSingletonInstance.PropertyMaxY;
REllipseEntity.PropertySizeX = 
  REllipseEntity_WrapperSingletonInstance.PropertySizeX;
REllipseEntity.PropertySizeY = 
  REllipseEntity_WrapperSingletonInstance.PropertySizeY;
REllipseEntity.PropertyCustom = 
  REllipseEntity_WrapperSingletonInstance.PropertyCustom;
REllipseEntity.PropertyHandle = 
  REllipseEntity_WrapperSingletonInstance.PropertyHandle;
REllipseEntity.PropertyProtected = 
  REllipseEntity_WrapperSingletonInstance.PropertyProtected;
REllipseEntity.PropertyWorkingSet = 
  REllipseEntity_WrapperSingletonInstance.PropertyWorkingSet;
REllipseEntity.PropertyType = 
  REllipseEntity_WrapperSingletonInstance.PropertyType;
REllipseEntity.PropertyBlock = 
  REllipseEntity_WrapperSingletonInstance.PropertyBlock;
REllipseEntity.PropertyLayer = 
  REllipseEntity_WrapperSingletonInstance.PropertyLayer;
REllipseEntity.PropertyLinetype = 
  REllipseEntity_WrapperSingletonInstance.PropertyLinetype;
REllipseEntity.PropertyLinetypeScale = 
  REllipseEntity_WrapperSingletonInstance.PropertyLinetypeScale;
REllipseEntity.PropertyLineweight = 
  REllipseEntity_WrapperSingletonInstance.PropertyLineweight;
REllipseEntity.PropertyColor = 
  REllipseEntity_WrapperSingletonInstance.PropertyColor;
REllipseEntity.PropertyDisplayedColor = 
  REllipseEntity_WrapperSingletonInstance.PropertyDisplayedColor;
REllipseEntity.PropertyDrawOrder = 
  REllipseEntity_WrapperSingletonInstance.PropertyDrawOrder;
REllipseEntity.PropertyCenterX = 
  REllipseEntity_WrapperSingletonInstance.PropertyCenterX;
REllipseEntity.PropertyCenterY = 
  REllipseEntity_WrapperSingletonInstance.PropertyCenterY;
REllipseEntity.PropertyCenterZ = 
  REllipseEntity_WrapperSingletonInstance.PropertyCenterZ;
REllipseEntity.PropertyMajorPointX = 
  REllipseEntity_WrapperSingletonInstance.PropertyMajorPointX;
REllipseEntity.PropertyMajorPointY = 
  REllipseEntity_WrapperSingletonInstance.PropertyMajorPointY;
REllipseEntity.PropertyMajorPointZ = 
  REllipseEntity_WrapperSingletonInstance.PropertyMajorPointZ;
REllipseEntity.PropertyRatio = 
  REllipseEntity_WrapperSingletonInstance.PropertyRatio;
REllipseEntity.PropertyStartParam = 
  REllipseEntity_WrapperSingletonInstance.PropertyStartParam;
REllipseEntity.PropertyEndParam = 
  REllipseEntity_WrapperSingletonInstance.PropertyEndParam;
REllipseEntity.PropertyStartAngle = 
  REllipseEntity_WrapperSingletonInstance.PropertyStartAngle;
REllipseEntity.PropertyEndAngle = 
  REllipseEntity_WrapperSingletonInstance.PropertyEndAngle;
REllipseEntity.PropertyReversed = 
  REllipseEntity_WrapperSingletonInstance.PropertyReversed;
REllipseEntity.PropertyStartPointX = 
  REllipseEntity_WrapperSingletonInstance.PropertyStartPointX;
REllipseEntity.PropertyStartPointY = 
  REllipseEntity_WrapperSingletonInstance.PropertyStartPointY;
REllipseEntity.PropertyStartPointZ = 
  REllipseEntity_WrapperSingletonInstance.PropertyStartPointZ;
REllipseEntity.PropertyEndPointX = 
  REllipseEntity_WrapperSingletonInstance.PropertyEndPointX;
REllipseEntity.PropertyEndPointY = 
  REllipseEntity_WrapperSingletonInstance.PropertyEndPointY;
REllipseEntity.PropertyEndPointZ = 
  REllipseEntity_WrapperSingletonInstance.PropertyEndPointZ;
REllipseEntity.PropertyCircumference = 
  REllipseEntity_WrapperSingletonInstance.PropertyCircumference;


      // copy function:
      //REllipseEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //REllipseEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    