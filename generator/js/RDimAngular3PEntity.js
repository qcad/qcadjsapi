
      // auto generated
      //var self;

      // class constructor:
      function RDimAngular3PEntity() {
        

        // should be RDimAngular3PEntity_BaseJs.call(this, engine):
        //RDimAngular3PEntity.prototype = new RDimAngular3PEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimAngular3PEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimAngular3PEntity);
            //}
          }
          else {
            qWarning("RDimAngular3PEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimAngular3PEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimAngular3PEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimAngular3PEntity);
  }

  
  else {
    
        print("RDimAngular3PEntity(): wrong number / type of arguments");
      
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

      //RDimAngular3PEntity.prototype = new RDimAngular3PEntity_BaseJs(engine);
      //RDimAngular3PEntity.prototype = new RDimAngular3PEntity_Wrapper(engine);
      RDimAngular3PEntity.prototype = new Object();

      RDimAngular3PEntity.prototype.toString = function() {
          //return "RDimAngular3PEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimAngular3PEntity [JS]";
        };
      RDimAngular3PEntity.getObjectType = function() {
        return RJSType_RDimAngular3PEntity.getIdStatic();
      };

      RDimAngular3PEntity.prototype.getObjectType = function() {
        return RJSType_RDimAngular3PEntity.getIdStatic();
      };

      RDimAngular3PEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimAngular3PEntity.getIdStatic()) {
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
        
          if (t===RJSType_RDimAngularEntity.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RDimAngular3PEntity.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RDimAngular3PEntity.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RDimAngular3PEntity_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RDimAngular3PEntity);
  }

  
  else {
    
        print("RDimAngular3PEntity.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngular3PEntity.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RDimAngular3PEntity.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RDimAngular3PEntity_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RDimAngular3PEntity);
  }

  
  else {
    
        print("RDimAngular3PEntity.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngular3PEntity.setMember = function() 
          
        {
          //print("JS: RDimAngular3PEntity.setMember");
          
        };
      

        // static function 
        RDimAngular3PEntity.setMemberX = function() 
          
        {
          //print("JS: RDimAngular3PEntity.setMemberX");
          
        };
      

        // static function 
        RDimAngular3PEntity.setMemberY = function() 
          
        {
          //print("JS: RDimAngular3PEntity.setMemberY");
          
        };
      

        // static function 
        RDimAngular3PEntity.setMemberZ = function() 
          
        {
          //print("JS: RDimAngular3PEntity.setMemberZ");
          
        };
      

        // static function 
        RDimAngular3PEntity.setMemberVector = function() 
          
        {
          //print("JS: RDimAngular3PEntity.setMemberVector");
          
        };
      

        // static function 
        RDimAngular3PEntity.isComplex = function() 
          
        {
          //print("JS: RDimAngular3PEntity.isComplex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimAngular3PEntity_WrapperSingletonInstance.isComplex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimAngular3PEntity);
  }

  
  else {
    
        print("RDimAngular3PEntity.isComplex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngular3PEntity.isDimension = function() 
          
        {
          //print("JS: RDimAngular3PEntity.isDimension");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimAngular3PEntity_WrapperSingletonInstance.isDimension(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimAngular3PEntity);
  }

  
  else {
    
        print("RDimAngular3PEntity.isDimension(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngular3PEntity.isTextBased = function() 
          
        {
          //print("JS: RDimAngular3PEntity.isTextBased");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimAngular3PEntity_WrapperSingletonInstance.isTextBased(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimAngular3PEntity);
  }

  
  else {
    
        print("RDimAngular3PEntity.isTextBased(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngular3PEntity.renderDimensionText = function() 
          
        {
          //print("JS: RDimAngular3PEntity.renderDimensionText");
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RDimAngular3PEntity_WrapperSingletonInstance.renderDimensionText(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RDimAngular3PEntity);
  }

  
  else {
    
        print("RDimAngular3PEntity.renderDimensionText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngular3PEntity.getDimensionBlockNames = function() 
          
        {
          //print("JS: RDimAngular3PEntity.getDimensionBlockNames");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimAngular3PEntity_WrapperSingletonInstance.getDimensionBlockNames(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimAngular3PEntity);
  }

  
  else {
    
        print("RDimAngular3PEntity.getDimensionBlockNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngular3PEntity.init = function() 
          
        {
          //print("JS: RDimAngular3PEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngular3PEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngular3PEntity);
  }

  
  else {
    
        print("RDimAngular3PEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngular3PEntity.getRtti = function() 
          
        {
          //print("JS: RDimAngular3PEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngular3PEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngular3PEntity);
  }

  
  else {
    
        print("RDimAngular3PEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngular3PEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimAngular3PEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngular3PEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngular3PEntity);
  }

  
  else {
    
        print("RDimAngular3PEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimAngular3PEntity.INVALID_ID = 
  RDimAngular3PEntity_WrapperSingletonInstance.INVALID_ID;
RDimAngular3PEntity.INVALID_HANDLE = 
  RDimAngular3PEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimAngular3PEntity.PropertySelected = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertySelected;
RDimAngular3PEntity.PropertyInvisible = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyInvisible;
RDimAngular3PEntity.PropertyParentId = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyParentId;
RDimAngular3PEntity.PropertyMinX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyMinX;
RDimAngular3PEntity.PropertyMinY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyMinY;
RDimAngular3PEntity.PropertyMaxX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyMaxX;
RDimAngular3PEntity.PropertyMaxY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyMaxY;
RDimAngular3PEntity.PropertySizeX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertySizeX;
RDimAngular3PEntity.PropertySizeY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertySizeY;
RDimAngular3PEntity.PropertyDefinitionPointX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimAngular3PEntity.PropertyDefinitionPointY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimAngular3PEntity.PropertyDefinitionPointZ = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimAngular3PEntity.PropertyAutoLabel = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimAngular3PEntity.PropertyDimlfac = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimAngular3PEntity.PropertyDimlunit = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimAngular3PEntity.PropertyDimdec = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimdec;
RDimAngular3PEntity.PropertyDimzin = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimzin;
RDimAngular3PEntity.PropertyCustom = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyCustom;
RDimAngular3PEntity.PropertyHandle = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyHandle;
RDimAngular3PEntity.PropertyProtected = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyProtected;
RDimAngular3PEntity.PropertyWorkingSet = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimAngular3PEntity.PropertyType = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyType;
RDimAngular3PEntity.PropertyBlock = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyBlock;
RDimAngular3PEntity.PropertyLayer = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyLayer;
RDimAngular3PEntity.PropertyLinetype = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyLinetype;
RDimAngular3PEntity.PropertyLinetypeScale = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimAngular3PEntity.PropertyLineweight = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyLineweight;
RDimAngular3PEntity.PropertyColor = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyColor;
RDimAngular3PEntity.PropertyDisplayedColor = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimAngular3PEntity.PropertyDrawOrder = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimAngular3PEntity.PropertyMiddleOfTextX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimAngular3PEntity.PropertyMiddleOfTextY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimAngular3PEntity.PropertyMiddleOfTextZ = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimAngular3PEntity.PropertyText = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyText;
RDimAngular3PEntity.PropertyUpperTolerance = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimAngular3PEntity.PropertyLowerTolerance = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimAngular3PEntity.PropertyMeasuredValue = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimAngular3PEntity.PropertyDimscale = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimscale;
RDimAngular3PEntity.PropertyDimtxt = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimAngular3PEntity.PropertyDimgap = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimgap;
RDimAngular3PEntity.PropertyDimasz = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimasz;
RDimAngular3PEntity.PropertyDimexe = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimexe;
RDimAngular3PEntity.PropertyDimexo = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimexo;
RDimAngular3PEntity.PropertyDimtad = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimtad;
RDimAngular3PEntity.PropertyDimtih = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimtih;
RDimAngular3PEntity.PropertyDimtsz = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimAngular3PEntity.PropertyDimdsep = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimAngular3PEntity.PropertyDimaunit = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimAngular3PEntity.PropertyDimadec = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimadec;
RDimAngular3PEntity.PropertyDimazin = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimazin;
RDimAngular3PEntity.PropertyArchTick = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyArchTick;
RDimAngular3PEntity.PropertyDimclrt = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimAngular3PEntity.PropertyDimBlockName = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimAngular3PEntity.PropertyAutoTextPos = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimAngular3PEntity.PropertyFontName = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyFontName;
RDimAngular3PEntity.PropertyArrow1Flipped = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimAngular3PEntity.PropertyArrow2Flipped = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimAngular3PEntity.PropertyExtLineFix = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimAngular3PEntity.PropertyExtLineFixLength = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimAngular3PEntity.PropertyCenterX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyCenterX;
RDimAngular3PEntity.PropertyCenterY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyCenterY;
RDimAngular3PEntity.PropertyCenterZ = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyCenterZ;
RDimAngular3PEntity.PropertyExtensionLine1EndX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyExtensionLine1EndX;
RDimAngular3PEntity.PropertyExtensionLine1EndY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyExtensionLine1EndY;
RDimAngular3PEntity.PropertyExtensionLine1EndZ = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyExtensionLine1EndZ;
RDimAngular3PEntity.PropertyExtensionLine2EndX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyExtensionLine2EndX;
RDimAngular3PEntity.PropertyExtensionLine2EndY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyExtensionLine2EndY;
RDimAngular3PEntity.PropertyExtensionLine2EndZ = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyExtensionLine2EndZ;
RDimAngular3PEntity.PropertyDimArcPositionX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimArcPositionX;
RDimAngular3PEntity.PropertyDimArcPositionY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimArcPositionY;
RDimAngular3PEntity.PropertyDimArcPositionZ = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimArcPositionZ;


      // copy function:
      //RDimAngular3PEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimAngular3PEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    