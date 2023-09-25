
      // auto generated
      //var self;

      // class constructor:
      function RDimAlignedEntity() {
        

        // should be RDimAlignedEntity_BaseJs.call(this, engine):
        //RDimAlignedEntity.prototype = new RDimAlignedEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimAlignedEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimAlignedEntity);
            //}
          }
          else {
            qWarning("RDimAlignedEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimAlignedEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimAlignedEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimAlignedEntity);
  }

  
  else {
    
        print("RDimAlignedEntity(): wrong number / type of arguments");
      
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

      //RDimAlignedEntity.prototype = new RDimAlignedEntity_BaseJs(engine);
      //RDimAlignedEntity.prototype = new RDimAlignedEntity_Wrapper(engine);
      RDimAlignedEntity.prototype = new Object();

      RDimAlignedEntity.prototype.toString = function() {
          //return "RDimAlignedEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimAlignedEntity [JS]";
        };
      RDimAlignedEntity.getObjectType = function() {
        return RJSType_RDimAlignedEntity.getIdStatic();
      };

      RDimAlignedEntity.prototype.getObjectType = function() {
        return RJSType_RDimAlignedEntity.getIdStatic();
      };

      RDimAlignedEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimAlignedEntity.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_REntity.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimensionEntity.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimLinearEntity.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RDimAlignedEntity.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RDimAlignedEntity.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RDimAlignedEntity_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RDimAlignedEntity);
  }

  
  else {
    
        print("RDimAlignedEntity.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAlignedEntity.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RDimAlignedEntity.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RDimAlignedEntity_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RDimAlignedEntity);
  }

  
  else {
    
        print("RDimAlignedEntity.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAlignedEntity.setMember = function() 
          
        {
          //print("JS: RDimAlignedEntity.setMember");
          
        };
      

        // static function 
        RDimAlignedEntity.setMemberX = function() 
          
        {
          //print("JS: RDimAlignedEntity.setMemberX");
          
        };
      

        // static function 
        RDimAlignedEntity.setMemberY = function() 
          
        {
          //print("JS: RDimAlignedEntity.setMemberY");
          
        };
      

        // static function 
        RDimAlignedEntity.setMemberZ = function() 
          
        {
          //print("JS: RDimAlignedEntity.setMemberZ");
          
        };
      

        // static function 
        RDimAlignedEntity.setMemberVector = function() 
          
        {
          //print("JS: RDimAlignedEntity.setMemberVector");
          
        };
      

        // static function 
        RDimAlignedEntity.isComplex = function() 
          
        {
          //print("JS: RDimAlignedEntity.isComplex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimAlignedEntity_WrapperSingletonInstance.isComplex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimAlignedEntity);
  }

  
  else {
    
        print("RDimAlignedEntity.isComplex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAlignedEntity.isDimension = function() 
          
        {
          //print("JS: RDimAlignedEntity.isDimension");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimAlignedEntity_WrapperSingletonInstance.isDimension(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimAlignedEntity);
  }

  
  else {
    
        print("RDimAlignedEntity.isDimension(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAlignedEntity.isTextBased = function() 
          
        {
          //print("JS: RDimAlignedEntity.isTextBased");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimAlignedEntity_WrapperSingletonInstance.isTextBased(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimAlignedEntity);
  }

  
  else {
    
        print("RDimAlignedEntity.isTextBased(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAlignedEntity.renderDimensionText = function() 
          
        {
          //print("JS: RDimAlignedEntity.renderDimensionText");
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RDimAlignedEntity_WrapperSingletonInstance.renderDimensionText(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RDimAlignedEntity);
  }

  
  else {
    
        print("RDimAlignedEntity.renderDimensionText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAlignedEntity.getDimensionBlockNames = function() 
          
        {
          //print("JS: RDimAlignedEntity.getDimensionBlockNames");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimAlignedEntity_WrapperSingletonInstance.getDimensionBlockNames(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimAlignedEntity);
  }

  
  else {
    
        print("RDimAlignedEntity.getDimensionBlockNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAlignedEntity.init = function() 
          
        {
          //print("JS: RDimAlignedEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAlignedEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimAlignedEntity);
  }

  
  else {
    
        print("RDimAlignedEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAlignedEntity.getRtti = function() 
          
        {
          //print("JS: RDimAlignedEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAlignedEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimAlignedEntity);
  }

  
  else {
    
        print("RDimAlignedEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAlignedEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimAlignedEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAlignedEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimAlignedEntity);
  }

  
  else {
    
        print("RDimAlignedEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimAlignedEntity.INVALID_ID = 
  RDimAlignedEntity_WrapperSingletonInstance.INVALID_ID;
RDimAlignedEntity.INVALID_HANDLE = 
  RDimAlignedEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimAlignedEntity.PropertySelected = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertySelected;
RDimAlignedEntity.PropertyInvisible = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyInvisible;
RDimAlignedEntity.PropertyParentId = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyParentId;
RDimAlignedEntity.PropertyMinX = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyMinX;
RDimAlignedEntity.PropertyMinY = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyMinY;
RDimAlignedEntity.PropertyMaxX = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyMaxX;
RDimAlignedEntity.PropertyMaxY = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyMaxY;
RDimAlignedEntity.PropertySizeX = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertySizeX;
RDimAlignedEntity.PropertySizeY = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertySizeY;
RDimAlignedEntity.PropertyDefinitionPointX = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimAlignedEntity.PropertyDefinitionPointY = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimAlignedEntity.PropertyDefinitionPointZ = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimAlignedEntity.PropertyAutoLabel = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimAlignedEntity.PropertyDimaunit = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimAlignedEntity.PropertyDimadec = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimadec;
RDimAlignedEntity.PropertyDimazin = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimazin;
RDimAlignedEntity.PropertyCustom = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyCustom;
RDimAlignedEntity.PropertyHandle = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyHandle;
RDimAlignedEntity.PropertyProtected = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyProtected;
RDimAlignedEntity.PropertyWorkingSet = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimAlignedEntity.PropertyType = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyType;
RDimAlignedEntity.PropertyBlock = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyBlock;
RDimAlignedEntity.PropertyLayer = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyLayer;
RDimAlignedEntity.PropertyLinetype = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyLinetype;
RDimAlignedEntity.PropertyLinetypeScale = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimAlignedEntity.PropertyLineweight = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyLineweight;
RDimAlignedEntity.PropertyColor = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyColor;
RDimAlignedEntity.PropertyDisplayedColor = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimAlignedEntity.PropertyDrawOrder = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimAlignedEntity.PropertyMiddleOfTextX = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimAlignedEntity.PropertyMiddleOfTextY = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimAlignedEntity.PropertyMiddleOfTextZ = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimAlignedEntity.PropertyText = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyText;
RDimAlignedEntity.PropertyUpperTolerance = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimAlignedEntity.PropertyLowerTolerance = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimAlignedEntity.PropertyMeasuredValue = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimAlignedEntity.PropertyDimscale = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimscale;
RDimAlignedEntity.PropertyDimlfac = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimAlignedEntity.PropertyDimtxt = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimAlignedEntity.PropertyDimgap = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimgap;
RDimAlignedEntity.PropertyDimasz = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimasz;
RDimAlignedEntity.PropertyDimexe = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimexe;
RDimAlignedEntity.PropertyDimexo = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimexo;
RDimAlignedEntity.PropertyDimtad = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimtad;
RDimAlignedEntity.PropertyDimtih = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimtih;
RDimAlignedEntity.PropertyDimtsz = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimAlignedEntity.PropertyDimlunit = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimAlignedEntity.PropertyDimdec = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimdec;
RDimAlignedEntity.PropertyDimdsep = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimAlignedEntity.PropertyDimzin = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimzin;
RDimAlignedEntity.PropertyArchTick = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyArchTick;
RDimAlignedEntity.PropertyDimclrt = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimAlignedEntity.PropertyDimBlockName = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimAlignedEntity.PropertyAutoTextPos = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimAlignedEntity.PropertyFontName = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyFontName;
RDimAlignedEntity.PropertyArrow1Flipped = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimAlignedEntity.PropertyArrow2Flipped = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimAlignedEntity.PropertyExtLineFix = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimAlignedEntity.PropertyExtLineFixLength = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimAlignedEntity.PropertyDimensionLinePosX = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimensionLinePosX;
RDimAlignedEntity.PropertyDimensionLinePosY = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimensionLinePosY;
RDimAlignedEntity.PropertyDimensionLinePosZ = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimensionLinePosZ;
RDimAlignedEntity.PropertyExtensionPoint1X = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyExtensionPoint1X;
RDimAlignedEntity.PropertyExtensionPoint1Y = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyExtensionPoint1Y;
RDimAlignedEntity.PropertyExtensionPoint1Z = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyExtensionPoint1Z;
RDimAlignedEntity.PropertyExtensionPoint2X = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyExtensionPoint2X;
RDimAlignedEntity.PropertyExtensionPoint2Y = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyExtensionPoint2Y;
RDimAlignedEntity.PropertyExtensionPoint2Z = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyExtensionPoint2Z;


      // copy function:
      //RDimAlignedEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimAlignedEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    