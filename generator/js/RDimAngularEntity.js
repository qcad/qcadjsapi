
      // auto generated
      //var self;

      // class constructor:
      function RDimAngularEntity() {
        

        // should be RDimAngularEntity_BaseJs.call(this, engine):
        //RDimAngularEntity.prototype = new RDimAngularEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimAngularEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimAngularEntity);
            //}
          }
          else {
            qWarning("RDimAngularEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RDimAngularEntity.js: No constructor found for class RDimAngularEntity");
            
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

      //RDimAngularEntity.prototype = new RDimAngularEntity_BaseJs(engine);
      //RDimAngularEntity.prototype = new RDimAngularEntity_Wrapper(engine);
      RDimAngularEntity.prototype = new Object();

      RDimAngularEntity.prototype.toString = function() {
          //return "RDimAngularEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimAngularEntity [JS]";
        };
      RDimAngularEntity.getObjectType = function() {
        return RJSType_RDimAngularEntity.getIdStatic();
      };

      RDimAngularEntity.prototype.getObjectType = function() {
        return RJSType_RDimAngularEntity.getIdStatic();
      };

      RDimAngularEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimAngularEntity.getIdStatic()) {
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
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RDimAngularEntity.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RDimAngularEntity.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RDimAngularEntity_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RDimAngularEntity);
  }

  
  else {
    
        print("RDimAngularEntity.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngularEntity.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RDimAngularEntity.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RDimAngularEntity_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RDimAngularEntity);
  }

  
  else {
    
        print("RDimAngularEntity.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngularEntity.setMember = function() 
          
        {
          //print("JS: RDimAngularEntity.setMember");
          
        };
      

        // static function 
        RDimAngularEntity.setMemberX = function() 
          
        {
          //print("JS: RDimAngularEntity.setMemberX");
          
        };
      

        // static function 
        RDimAngularEntity.setMemberY = function() 
          
        {
          //print("JS: RDimAngularEntity.setMemberY");
          
        };
      

        // static function 
        RDimAngularEntity.setMemberZ = function() 
          
        {
          //print("JS: RDimAngularEntity.setMemberZ");
          
        };
      

        // static function 
        RDimAngularEntity.setMemberVector = function() 
          
        {
          //print("JS: RDimAngularEntity.setMemberVector");
          
        };
      

        // static function 
        RDimAngularEntity.isComplex = function() 
          
        {
          //print("JS: RDimAngularEntity.isComplex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimAngularEntity_WrapperSingletonInstance.isComplex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimAngularEntity);
  }

  
  else {
    
        print("RDimAngularEntity.isComplex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngularEntity.isDimension = function() 
          
        {
          //print("JS: RDimAngularEntity.isDimension");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimAngularEntity_WrapperSingletonInstance.isDimension(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimAngularEntity);
  }

  
  else {
    
        print("RDimAngularEntity.isDimension(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngularEntity.isTextBased = function() 
          
        {
          //print("JS: RDimAngularEntity.isTextBased");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimAngularEntity_WrapperSingletonInstance.isTextBased(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimAngularEntity);
  }

  
  else {
    
        print("RDimAngularEntity.isTextBased(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngularEntity.getRtti = function() 
          
        {
          //print("JS: RDimAngularEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngularEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngularEntity);
  }

  
  else {
    
        print("RDimAngularEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngularEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimAngularEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngularEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngularEntity);
  }

  
  else {
    
        print("RDimAngularEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngularEntity.renderDimensionText = function() 
          
        {
          //print("JS: RDimAngularEntity.renderDimensionText");
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RDimAngularEntity_WrapperSingletonInstance.renderDimensionText(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RDimAngularEntity);
  }

  
  else {
    
        print("RDimAngularEntity.renderDimensionText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngularEntity.getDimensionBlockNames = function() 
          
        {
          //print("JS: RDimAngularEntity.getDimensionBlockNames");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimAngularEntity_WrapperSingletonInstance.getDimensionBlockNames(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimAngularEntity);
  }

  
  else {
    
        print("RDimAngularEntity.getDimensionBlockNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngularEntity.init = function() 
          
        {
          //print("JS: RDimAngularEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngularEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngularEntity);
  }

  
  else {
    
        print("RDimAngularEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimAngularEntity.INVALID_ID = 
  RDimAngularEntity_WrapperSingletonInstance.INVALID_ID;
RDimAngularEntity.INVALID_HANDLE = 
  RDimAngularEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimAngularEntity.PropertySelected = 
  RDimAngularEntity_WrapperSingletonInstance.PropertySelected;
RDimAngularEntity.PropertyInvisible = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyInvisible;
RDimAngularEntity.PropertyParentId = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyParentId;
RDimAngularEntity.PropertyMinX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyMinX;
RDimAngularEntity.PropertyMinY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyMinY;
RDimAngularEntity.PropertyMaxX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyMaxX;
RDimAngularEntity.PropertyMaxY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyMaxY;
RDimAngularEntity.PropertySizeX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertySizeX;
RDimAngularEntity.PropertySizeY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertySizeY;
RDimAngularEntity.PropertyDefinitionPointX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimAngularEntity.PropertyDefinitionPointY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimAngularEntity.PropertyDefinitionPointZ = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimAngularEntity.PropertyAutoLabel = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimAngularEntity.PropertyDimlfac = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimAngularEntity.PropertyDimlunit = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimAngularEntity.PropertyDimdec = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimdec;
RDimAngularEntity.PropertyDimzin = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimzin;
RDimAngularEntity.PropertyCustom = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyCustom;
RDimAngularEntity.PropertyHandle = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyHandle;
RDimAngularEntity.PropertyProtected = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyProtected;
RDimAngularEntity.PropertyWorkingSet = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimAngularEntity.PropertyType = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyType;
RDimAngularEntity.PropertyBlock = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyBlock;
RDimAngularEntity.PropertyLayer = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyLayer;
RDimAngularEntity.PropertyLinetype = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyLinetype;
RDimAngularEntity.PropertyLinetypeScale = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimAngularEntity.PropertyLineweight = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyLineweight;
RDimAngularEntity.PropertyColor = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyColor;
RDimAngularEntity.PropertyDisplayedColor = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimAngularEntity.PropertyDrawOrder = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimAngularEntity.PropertyMiddleOfTextX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimAngularEntity.PropertyMiddleOfTextY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimAngularEntity.PropertyMiddleOfTextZ = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimAngularEntity.PropertyText = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyText;
RDimAngularEntity.PropertyUpperTolerance = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimAngularEntity.PropertyLowerTolerance = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimAngularEntity.PropertyMeasuredValue = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimAngularEntity.PropertyDimscale = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimscale;
RDimAngularEntity.PropertyDimtxt = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimAngularEntity.PropertyDimgap = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimgap;
RDimAngularEntity.PropertyDimasz = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimasz;
RDimAngularEntity.PropertyDimexe = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimexe;
RDimAngularEntity.PropertyDimexo = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimexo;
RDimAngularEntity.PropertyDimtad = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimtad;
RDimAngularEntity.PropertyDimtih = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimtih;
RDimAngularEntity.PropertyDimtsz = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimAngularEntity.PropertyDimdsep = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimAngularEntity.PropertyDimaunit = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimAngularEntity.PropertyDimadec = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimadec;
RDimAngularEntity.PropertyDimazin = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimazin;
RDimAngularEntity.PropertyArchTick = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyArchTick;
RDimAngularEntity.PropertyDimclrt = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimAngularEntity.PropertyDimBlockName = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimAngularEntity.PropertyAutoTextPos = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimAngularEntity.PropertyFontName = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyFontName;
RDimAngularEntity.PropertyArrow1Flipped = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimAngularEntity.PropertyArrow2Flipped = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimAngularEntity.PropertyExtLineFix = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimAngularEntity.PropertyExtLineFixLength = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimAngularEntity.PropertyCenterX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyCenterX;
RDimAngularEntity.PropertyCenterY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyCenterY;
RDimAngularEntity.PropertyCenterZ = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyCenterZ;
RDimAngularEntity.PropertyExtensionLine1EndX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyExtensionLine1EndX;
RDimAngularEntity.PropertyExtensionLine1EndY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyExtensionLine1EndY;
RDimAngularEntity.PropertyExtensionLine1EndZ = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyExtensionLine1EndZ;
RDimAngularEntity.PropertyExtensionLine2EndX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyExtensionLine2EndX;
RDimAngularEntity.PropertyExtensionLine2EndY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyExtensionLine2EndY;
RDimAngularEntity.PropertyExtensionLine2EndZ = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyExtensionLine2EndZ;
RDimAngularEntity.PropertyDimArcPositionX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimArcPositionX;
RDimAngularEntity.PropertyDimArcPositionY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimArcPositionY;
RDimAngularEntity.PropertyDimArcPositionZ = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimArcPositionZ;


      // copy function:
      //RDimAngularEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimAngularEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    