
      // auto generated
      //var self;

      // class constructor:
      function RBlockReferenceEntity() {
        

        // should be RBlockReferenceEntity_BaseJs.call(this, engine):
        //RBlockReferenceEntity.prototype = new RBlockReferenceEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RBlockReferenceEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RBlockReferenceEntity);
            //}
          }
          else {
            qWarning("RBlockReferenceEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RBlockReferenceEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RBlockReferenceEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RBlockReferenceEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RBlockReferenceEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RBlockReferenceEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RBlockReferenceEntity);
  }

  
  else {
    
        print("RBlockReferenceEntity(): wrong number / type of arguments");
      
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

      //RBlockReferenceEntity.prototype = new RBlockReferenceEntity_BaseJs(engine);
      //RBlockReferenceEntity.prototype = new RBlockReferenceEntity_Wrapper(engine);
      RBlockReferenceEntity.prototype = new Object();

      RBlockReferenceEntity.prototype.toString = function() {
          //return "RBlockReferenceEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RBlockReferenceEntity [JS]";
        };
      RBlockReferenceEntity.getObjectType = function() {
        return RJSType_RBlockReferenceEntity.getIdStatic();
      };

      RBlockReferenceEntity.prototype.getObjectType = function() {
        return RJSType_RBlockReferenceEntity.getIdStatic();
      };

      RBlockReferenceEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RBlockReferenceEntity.getIdStatic()) {
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
        RBlockReferenceEntity.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RBlockReferenceEntity.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RBlockReferenceEntity_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RBlockReferenceEntity);
  }

  
  else {
    
        print("RBlockReferenceEntity.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RBlockReferenceEntity.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RBlockReferenceEntity.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RBlockReferenceEntity_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RBlockReferenceEntity);
  }

  
  else {
    
        print("RBlockReferenceEntity.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RBlockReferenceEntity.setMember = function() 
          
        {
          //print("JS: RBlockReferenceEntity.setMember");
          
        };
      

        // static function 
        RBlockReferenceEntity.setMemberX = function() 
          
        {
          //print("JS: RBlockReferenceEntity.setMemberX");
          
        };
      

        // static function 
        RBlockReferenceEntity.setMemberY = function() 
          
        {
          //print("JS: RBlockReferenceEntity.setMemberY");
          
        };
      

        // static function 
        RBlockReferenceEntity.setMemberZ = function() 
          
        {
          //print("JS: RBlockReferenceEntity.setMemberZ");
          
        };
      

        // static function 
        RBlockReferenceEntity.setMemberVector = function() 
          
        {
          //print("JS: RBlockReferenceEntity.setMemberVector");
          
        };
      

        // static function 
        RBlockReferenceEntity.isComplex = function() 
          
        {
          //print("JS: RBlockReferenceEntity.isComplex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RBlockReferenceEntity_WrapperSingletonInstance.isComplex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RBlockReferenceEntity);
  }

  
  else {
    
        print("RBlockReferenceEntity.isComplex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RBlockReferenceEntity.isDimension = function() 
          
        {
          //print("JS: RBlockReferenceEntity.isDimension");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RBlockReferenceEntity_WrapperSingletonInstance.isDimension(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RBlockReferenceEntity);
  }

  
  else {
    
        print("RBlockReferenceEntity.isDimension(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RBlockReferenceEntity.isTextBased = function() 
          
        {
          //print("JS: RBlockReferenceEntity.isTextBased");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RBlockReferenceEntity_WrapperSingletonInstance.isTextBased(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RBlockReferenceEntity);
  }

  
  else {
    
        print("RBlockReferenceEntity.isTextBased(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RBlockReferenceEntity.init = function() 
          
        {
          //print("JS: RBlockReferenceEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RBlockReferenceEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RBlockReferenceEntity);
  }

  
  else {
    
        print("RBlockReferenceEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RBlockReferenceEntity.getRtti = function() 
          
        {
          //print("JS: RBlockReferenceEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RBlockReferenceEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RBlockReferenceEntity);
  }

  
  else {
    
        print("RBlockReferenceEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RBlockReferenceEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RBlockReferenceEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RBlockReferenceEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RBlockReferenceEntity);
  }

  
  else {
    
        print("RBlockReferenceEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RBlockReferenceEntity.INVALID_ID = 
  RBlockReferenceEntity_WrapperSingletonInstance.INVALID_ID;
RBlockReferenceEntity.INVALID_HANDLE = 
  RBlockReferenceEntity_WrapperSingletonInstance.INVALID_HANDLE;
RBlockReferenceEntity.PropertySelected = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertySelected;
RBlockReferenceEntity.PropertyInvisible = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyInvisible;
RBlockReferenceEntity.PropertyParentId = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyParentId;
RBlockReferenceEntity.PropertyMinX = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyMinX;
RBlockReferenceEntity.PropertyMinY = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyMinY;
RBlockReferenceEntity.PropertyMaxX = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyMaxX;
RBlockReferenceEntity.PropertyMaxY = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyMaxY;
RBlockReferenceEntity.PropertySizeX = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertySizeX;
RBlockReferenceEntity.PropertySizeY = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertySizeY;
RBlockReferenceEntity.PropertyCustom = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyCustom;
RBlockReferenceEntity.PropertyHandle = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyHandle;
RBlockReferenceEntity.PropertyProtected = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyProtected;
RBlockReferenceEntity.PropertyWorkingSet = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyWorkingSet;
RBlockReferenceEntity.PropertyType = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyType;
RBlockReferenceEntity.PropertyBlock = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyBlock;
RBlockReferenceEntity.PropertyLayer = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyLayer;
RBlockReferenceEntity.PropertyLinetype = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyLinetype;
RBlockReferenceEntity.PropertyLinetypeScale = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RBlockReferenceEntity.PropertyLineweight = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyLineweight;
RBlockReferenceEntity.PropertyColor = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyColor;
RBlockReferenceEntity.PropertyDisplayedColor = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RBlockReferenceEntity.PropertyDrawOrder = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyDrawOrder;
RBlockReferenceEntity.PropertyReferencedBlock = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyReferencedBlock;
RBlockReferenceEntity.PropertyPositionX = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyPositionX;
RBlockReferenceEntity.PropertyPositionY = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyPositionY;
RBlockReferenceEntity.PropertyPositionZ = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyPositionZ;
RBlockReferenceEntity.PropertyScaleX = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyScaleX;
RBlockReferenceEntity.PropertyScaleY = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyScaleY;
RBlockReferenceEntity.PropertyScaleZ = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyScaleZ;
RBlockReferenceEntity.PropertyRotation = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyRotation;
RBlockReferenceEntity.PropertyColumnCount = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyColumnCount;
RBlockReferenceEntity.PropertyRowCount = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyRowCount;
RBlockReferenceEntity.PropertyColumnSpacing = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyColumnSpacing;
RBlockReferenceEntity.PropertyRowSpacing = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyRowSpacing;


      // copy function:
      //RBlockReferenceEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RBlockReferenceEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    