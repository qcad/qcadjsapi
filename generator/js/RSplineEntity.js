
      // auto generated
      //var self;

      // class constructor:
      function RSplineEntity() {
        

        // should be RSplineEntity_BaseJs.call(this, engine):
        //RSplineEntity.prototype = new RSplineEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSplineEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RSplineEntity);
            //}
          }
          else {
            qWarning("RSplineEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RSplineEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSplineEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSplineEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RSplineEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSplineEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSplineEntity);
  }

  
  else {
    
        print("RSplineEntity(): wrong number / type of arguments");
      
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

      //RSplineEntity.prototype = new RSplineEntity_BaseJs(engine);
      //RSplineEntity.prototype = new RSplineEntity_Wrapper(engine);
      RSplineEntity.prototype = new Object();

      RSplineEntity.prototype.toString = function() {
          //return "RSplineEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSplineEntity [JS]";
        };
      RSplineEntity.getObjectType = function() {
        return RJSType_RSplineEntity.getIdStatic();
      };

      RSplineEntity.prototype.getObjectType = function() {
        return RJSType_RSplineEntity.getIdStatic();
      };

      RSplineEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSplineEntity.getIdStatic()) {
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
        RSplineEntity.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RSplineEntity.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RSplineEntity_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSplineEntity);
  }

  
  else {
    
        print("RSplineEntity.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSplineEntity.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RSplineEntity.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSplineEntity_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSplineEntity);
  }

  
  else {
    
        print("RSplineEntity.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSplineEntity.setMember = function() 
          
        {
          //print("JS: RSplineEntity.setMember");
          
        };
      

        // static function 
        RSplineEntity.setMemberX = function() 
          
        {
          //print("JS: RSplineEntity.setMemberX");
          
        };
      

        // static function 
        RSplineEntity.setMemberY = function() 
          
        {
          //print("JS: RSplineEntity.setMemberY");
          
        };
      

        // static function 
        RSplineEntity.setMemberZ = function() 
          
        {
          //print("JS: RSplineEntity.setMemberZ");
          
        };
      

        // static function 
        RSplineEntity.setMemberVector = function() 
          
        {
          //print("JS: RSplineEntity.setMemberVector");
          
        };
      

        // static function 
        RSplineEntity.isComplex = function() 
          
        {
          //print("JS: RSplineEntity.isComplex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSplineEntity_WrapperSingletonInstance.isComplex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSplineEntity);
  }

  
  else {
    
        print("RSplineEntity.isComplex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSplineEntity.isDimension = function() 
          
        {
          //print("JS: RSplineEntity.isDimension");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSplineEntity_WrapperSingletonInstance.isDimension(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSplineEntity);
  }

  
  else {
    
        print("RSplineEntity.isDimension(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSplineEntity.isTextBased = function() 
          
        {
          //print("JS: RSplineEntity.isTextBased");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSplineEntity_WrapperSingletonInstance.isTextBased(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSplineEntity);
  }

  
  else {
    
        print("RSplineEntity.isTextBased(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSplineEntity.init = function() 
          
        {
          //print("JS: RSplineEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSplineEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RSplineEntity);
  }

  
  else {
    
        print("RSplineEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSplineEntity.getRtti = function() 
          
        {
          //print("JS: RSplineEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSplineEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RSplineEntity);
  }

  
  else {
    
        print("RSplineEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSplineEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RSplineEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSplineEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RSplineEntity);
  }

  
  else {
    
        print("RSplineEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RSplineEntity.INVALID_ID = 
  RSplineEntity_WrapperSingletonInstance.INVALID_ID;
RSplineEntity.INVALID_HANDLE = 
  RSplineEntity_WrapperSingletonInstance.INVALID_HANDLE;
RSplineEntity.PropertySelected = 
  RSplineEntity_WrapperSingletonInstance.PropertySelected;
RSplineEntity.PropertyInvisible = 
  RSplineEntity_WrapperSingletonInstance.PropertyInvisible;
RSplineEntity.PropertyParentId = 
  RSplineEntity_WrapperSingletonInstance.PropertyParentId;
RSplineEntity.PropertyMinX = 
  RSplineEntity_WrapperSingletonInstance.PropertyMinX;
RSplineEntity.PropertyMinY = 
  RSplineEntity_WrapperSingletonInstance.PropertyMinY;
RSplineEntity.PropertyMaxX = 
  RSplineEntity_WrapperSingletonInstance.PropertyMaxX;
RSplineEntity.PropertyMaxY = 
  RSplineEntity_WrapperSingletonInstance.PropertyMaxY;
RSplineEntity.PropertySizeX = 
  RSplineEntity_WrapperSingletonInstance.PropertySizeX;
RSplineEntity.PropertySizeY = 
  RSplineEntity_WrapperSingletonInstance.PropertySizeY;
RSplineEntity.PropertyCustom = 
  RSplineEntity_WrapperSingletonInstance.PropertyCustom;
RSplineEntity.PropertyHandle = 
  RSplineEntity_WrapperSingletonInstance.PropertyHandle;
RSplineEntity.PropertyProtected = 
  RSplineEntity_WrapperSingletonInstance.PropertyProtected;
RSplineEntity.PropertyWorkingSet = 
  RSplineEntity_WrapperSingletonInstance.PropertyWorkingSet;
RSplineEntity.PropertyType = 
  RSplineEntity_WrapperSingletonInstance.PropertyType;
RSplineEntity.PropertyBlock = 
  RSplineEntity_WrapperSingletonInstance.PropertyBlock;
RSplineEntity.PropertyLayer = 
  RSplineEntity_WrapperSingletonInstance.PropertyLayer;
RSplineEntity.PropertyLinetype = 
  RSplineEntity_WrapperSingletonInstance.PropertyLinetype;
RSplineEntity.PropertyLinetypeScale = 
  RSplineEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RSplineEntity.PropertyLineweight = 
  RSplineEntity_WrapperSingletonInstance.PropertyLineweight;
RSplineEntity.PropertyColor = 
  RSplineEntity_WrapperSingletonInstance.PropertyColor;
RSplineEntity.PropertyDisplayedColor = 
  RSplineEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RSplineEntity.PropertyDrawOrder = 
  RSplineEntity_WrapperSingletonInstance.PropertyDrawOrder;
RSplineEntity.PropertyControlPointNX = 
  RSplineEntity_WrapperSingletonInstance.PropertyControlPointNX;
RSplineEntity.PropertyControlPointNY = 
  RSplineEntity_WrapperSingletonInstance.PropertyControlPointNY;
RSplineEntity.PropertyControlPointNZ = 
  RSplineEntity_WrapperSingletonInstance.PropertyControlPointNZ;
RSplineEntity.PropertyFitPointNX = 
  RSplineEntity_WrapperSingletonInstance.PropertyFitPointNX;
RSplineEntity.PropertyFitPointNY = 
  RSplineEntity_WrapperSingletonInstance.PropertyFitPointNY;
RSplineEntity.PropertyFitPointNZ = 
  RSplineEntity_WrapperSingletonInstance.PropertyFitPointNZ;
RSplineEntity.PropertyKnotN = 
  RSplineEntity_WrapperSingletonInstance.PropertyKnotN;
RSplineEntity.PropertyPeriodic = 
  RSplineEntity_WrapperSingletonInstance.PropertyPeriodic;
RSplineEntity.PropertyDegree = 
  RSplineEntity_WrapperSingletonInstance.PropertyDegree;
RSplineEntity.PropertyUseStartTangent = 
  RSplineEntity_WrapperSingletonInstance.PropertyUseStartTangent;
RSplineEntity.PropertyStartTangentX = 
  RSplineEntity_WrapperSingletonInstance.PropertyStartTangentX;
RSplineEntity.PropertyStartTangentY = 
  RSplineEntity_WrapperSingletonInstance.PropertyStartTangentY;
RSplineEntity.PropertyStartTangentZ = 
  RSplineEntity_WrapperSingletonInstance.PropertyStartTangentZ;
RSplineEntity.PropertyUseEndTangent = 
  RSplineEntity_WrapperSingletonInstance.PropertyUseEndTangent;
RSplineEntity.PropertyEndTangentX = 
  RSplineEntity_WrapperSingletonInstance.PropertyEndTangentX;
RSplineEntity.PropertyEndTangentY = 
  RSplineEntity_WrapperSingletonInstance.PropertyEndTangentY;
RSplineEntity.PropertyEndTangentZ = 
  RSplineEntity_WrapperSingletonInstance.PropertyEndTangentZ;
RSplineEntity.PropertyLength = 
  RSplineEntity_WrapperSingletonInstance.PropertyLength;
RSplineEntity.PropertyTotalLength = 
  RSplineEntity_WrapperSingletonInstance.PropertyTotalLength;


      // copy function:
      //RSplineEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSplineEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    