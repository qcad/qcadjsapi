
      // auto generated
      //var self;

      // class constructor:
      function RDimensionEntity() {
        

        // should be RDimensionEntity_BaseJs.call(this, engine):
        //RDimensionEntity.prototype = new RDimensionEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimensionEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimensionEntity);
            //}
          }
          else {
            qWarning("RDimensionEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RDimensionEntity.js: No constructor found for class RDimensionEntity");
            
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

      //RDimensionEntity.prototype = new RDimensionEntity_BaseJs(engine);
      //RDimensionEntity.prototype = new RDimensionEntity_Wrapper(engine);
      RDimensionEntity.prototype = new Object();

      RDimensionEntity.prototype.toString = function() {
          //return "RDimensionEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimensionEntity [JS]";
        };
      RDimensionEntity.getObjectType = function() {
        return RJSType_RDimensionEntity.getIdStatic();
      };

      RDimensionEntity.prototype.getObjectType = function() {
        return RJSType_RDimensionEntity.getIdStatic();
      };

      RDimensionEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimensionEntity.getIdStatic()) {
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
        RDimensionEntity.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RDimensionEntity.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RDimensionEntity_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RDimensionEntity);
  }

  
  else {
    
        print("RDimensionEntity.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimensionEntity.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RDimensionEntity.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RDimensionEntity_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RDimensionEntity);
  }

  
  else {
    
        print("RDimensionEntity.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimensionEntity.setMember = function() 
          
        {
          //print("JS: RDimensionEntity.setMember");
          
        };
      

        // static function 
        RDimensionEntity.setMemberX = function() 
          
        {
          //print("JS: RDimensionEntity.setMemberX");
          
        };
      

        // static function 
        RDimensionEntity.setMemberY = function() 
          
        {
          //print("JS: RDimensionEntity.setMemberY");
          
        };
      

        // static function 
        RDimensionEntity.setMemberZ = function() 
          
        {
          //print("JS: RDimensionEntity.setMemberZ");
          
        };
      

        // static function 
        RDimensionEntity.setMemberVector = function() 
          
        {
          //print("JS: RDimensionEntity.setMemberVector");
          
        };
      

        // static function 
        RDimensionEntity.isComplex = function() 
          
        {
          //print("JS: RDimensionEntity.isComplex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimensionEntity_WrapperSingletonInstance.isComplex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimensionEntity);
  }

  
  else {
    
        print("RDimensionEntity.isComplex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimensionEntity.isDimension = function() 
          
        {
          //print("JS: RDimensionEntity.isDimension");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimensionEntity_WrapperSingletonInstance.isDimension(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimensionEntity);
  }

  
  else {
    
        print("RDimensionEntity.isDimension(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimensionEntity.isTextBased = function() 
          
        {
          //print("JS: RDimensionEntity.isTextBased");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimensionEntity_WrapperSingletonInstance.isTextBased(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimensionEntity);
  }

  
  else {
    
        print("RDimensionEntity.isTextBased(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimensionEntity.init = function() 
          
        {
          //print("JS: RDimensionEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimensionEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimensionEntity);
  }

  
  else {
    
        print("RDimensionEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimensionEntity.getRtti = function() 
          
        {
          //print("JS: RDimensionEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimensionEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimensionEntity);
  }

  
  else {
    
        print("RDimensionEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimensionEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimensionEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimensionEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimensionEntity);
  }

  
  else {
    
        print("RDimensionEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimensionEntity.renderDimensionText = function() 
          
        {
          //print("JS: RDimensionEntity.renderDimensionText");
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RDimensionEntity_WrapperSingletonInstance.renderDimensionText(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RDimensionEntity);
  }

  
  else {
    
        print("RDimensionEntity.renderDimensionText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimensionEntity.getDimensionBlockNames = function() 
          
        {
          //print("JS: RDimensionEntity.getDimensionBlockNames");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimensionEntity_WrapperSingletonInstance.getDimensionBlockNames(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimensionEntity);
  }

  
  else {
    
        print("RDimensionEntity.getDimensionBlockNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimensionEntity.INVALID_ID = 
  RDimensionEntity_WrapperSingletonInstance.INVALID_ID;
RDimensionEntity.INVALID_HANDLE = 
  RDimensionEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimensionEntity.PropertySelected = 
  RDimensionEntity_WrapperSingletonInstance.PropertySelected;
RDimensionEntity.PropertyInvisible = 
  RDimensionEntity_WrapperSingletonInstance.PropertyInvisible;
RDimensionEntity.PropertyParentId = 
  RDimensionEntity_WrapperSingletonInstance.PropertyParentId;
RDimensionEntity.PropertyMinX = 
  RDimensionEntity_WrapperSingletonInstance.PropertyMinX;
RDimensionEntity.PropertyMinY = 
  RDimensionEntity_WrapperSingletonInstance.PropertyMinY;
RDimensionEntity.PropertyMaxX = 
  RDimensionEntity_WrapperSingletonInstance.PropertyMaxX;
RDimensionEntity.PropertyMaxY = 
  RDimensionEntity_WrapperSingletonInstance.PropertyMaxY;
RDimensionEntity.PropertySizeX = 
  RDimensionEntity_WrapperSingletonInstance.PropertySizeX;
RDimensionEntity.PropertySizeY = 
  RDimensionEntity_WrapperSingletonInstance.PropertySizeY;
RDimensionEntity.PropertyCustom = 
  RDimensionEntity_WrapperSingletonInstance.PropertyCustom;
RDimensionEntity.PropertyHandle = 
  RDimensionEntity_WrapperSingletonInstance.PropertyHandle;
RDimensionEntity.PropertyProtected = 
  RDimensionEntity_WrapperSingletonInstance.PropertyProtected;
RDimensionEntity.PropertyWorkingSet = 
  RDimensionEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimensionEntity.PropertyType = 
  RDimensionEntity_WrapperSingletonInstance.PropertyType;
RDimensionEntity.PropertyBlock = 
  RDimensionEntity_WrapperSingletonInstance.PropertyBlock;
RDimensionEntity.PropertyLayer = 
  RDimensionEntity_WrapperSingletonInstance.PropertyLayer;
RDimensionEntity.PropertyLinetype = 
  RDimensionEntity_WrapperSingletonInstance.PropertyLinetype;
RDimensionEntity.PropertyLinetypeScale = 
  RDimensionEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimensionEntity.PropertyLineweight = 
  RDimensionEntity_WrapperSingletonInstance.PropertyLineweight;
RDimensionEntity.PropertyColor = 
  RDimensionEntity_WrapperSingletonInstance.PropertyColor;
RDimensionEntity.PropertyDisplayedColor = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimensionEntity.PropertyDrawOrder = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimensionEntity.PropertyDefinitionPointX = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimensionEntity.PropertyDefinitionPointY = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimensionEntity.PropertyDefinitionPointZ = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimensionEntity.PropertyMiddleOfTextX = 
  RDimensionEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimensionEntity.PropertyMiddleOfTextY = 
  RDimensionEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimensionEntity.PropertyMiddleOfTextZ = 
  RDimensionEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimensionEntity.PropertyText = 
  RDimensionEntity_WrapperSingletonInstance.PropertyText;
RDimensionEntity.PropertyUpperTolerance = 
  RDimensionEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimensionEntity.PropertyLowerTolerance = 
  RDimensionEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimensionEntity.PropertyDimBlockName = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimensionEntity.PropertyAutoTextPos = 
  RDimensionEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimensionEntity.PropertyFontName = 
  RDimensionEntity_WrapperSingletonInstance.PropertyFontName;
RDimensionEntity.PropertyArrow1Flipped = 
  RDimensionEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimensionEntity.PropertyArrow2Flipped = 
  RDimensionEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimensionEntity.PropertyExtLineFix = 
  RDimensionEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimensionEntity.PropertyExtLineFixLength = 
  RDimensionEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimensionEntity.PropertyAutoLabel = 
  RDimensionEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimensionEntity.PropertyMeasuredValue = 
  RDimensionEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimensionEntity.PropertyDimscale = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimscale;
RDimensionEntity.PropertyDimlfac = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimensionEntity.PropertyDimtxt = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimensionEntity.PropertyDimgap = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimgap;
RDimensionEntity.PropertyDimasz = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimasz;
RDimensionEntity.PropertyDimexe = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimexe;
RDimensionEntity.PropertyDimexo = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimexo;
RDimensionEntity.PropertyDimtad = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimtad;
RDimensionEntity.PropertyDimtih = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimtih;
RDimensionEntity.PropertyDimtsz = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimensionEntity.PropertyDimlunit = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimensionEntity.PropertyDimdec = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimdec;
RDimensionEntity.PropertyDimdsep = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimensionEntity.PropertyDimzin = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimzin;
RDimensionEntity.PropertyDimaunit = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimensionEntity.PropertyDimadec = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimadec;
RDimensionEntity.PropertyDimazin = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimazin;
RDimensionEntity.PropertyArchTick = 
  RDimensionEntity_WrapperSingletonInstance.PropertyArchTick;
RDimensionEntity.PropertyDimclrt = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimclrt;


      // copy function:
      //RDimensionEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimensionEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    