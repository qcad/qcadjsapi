
      // auto generated
      //var self;

      // class constructor:
      function RFont() {
        

        // should be RFont_BaseJs.call(this, engine):
        //RFont.prototype = new RFont_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFont.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("RFont.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RFont_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFont);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RFont_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFont);
  }

  
  else {
    
        print("RFont(): wrong number / type of arguments");
      
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
          

        }


      }

      //RFont.prototype = new RFont_BaseJs(engine);
      //RFont.prototype = new RFont_Wrapper(engine);
      RFont.prototype = new Object();


      RFont.prototype.toString = function() {
          //return "RFont [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFont [JS]";
        };
      RFont.getObjectType = function() {
        return RJSType_RFont.getIdStatic();
      };

      RFont.prototype.getObjectType = function() {
        return RJSType_RFont.getIdStatic();
      };

      RFont.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFont.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RFont.prototype.isValid = function(...args) 
          
        {
          //print("JS: RFont.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
        
        // function 
        RFont.prototype.getFileName = function(...args) 
          
        {
          //print("JS: RFont.prototype.getFileName");
          
              return this.__PROXY__.getFileName(...args);
            
        };
        
        // function 
        RFont.prototype.getEncoding = function(...args) 
          
        {
          //print("JS: RFont.prototype.getEncoding");
          
              return this.__PROXY__.getEncoding(...args);
            
        };
        
        // function 
        RFont.prototype.getNames = function(...args) 
          
        {
          //print("JS: RFont.prototype.getNames");
          
              return this.__PROXY__.getNames(...args);
            
        };
        
        // function 
        RFont.prototype.getAuthors = function(...args) 
          
        {
          //print("JS: RFont.prototype.getAuthors");
          
              return this.__PROXY__.getAuthors(...args);
            
        };
        
        // function 
        RFont.prototype.getLetterSpacing = function(...args) 
          
        {
          //print("JS: RFont.prototype.getLetterSpacing");
          
              return this.__PROXY__.getLetterSpacing(...args);
            
        };
        
        // function 
        RFont.prototype.getWordSpacing = function(...args) 
          
        {
          //print("JS: RFont.prototype.getWordSpacing");
          
              return this.__PROXY__.getWordSpacing(...args);
            
        };
        
        // function 
        RFont.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RFont.prototype.getLineSpacingFactor");
          
              return this.__PROXY__.getLineSpacingFactor(...args);
            
        };
        
        // function 
        RFont.prototype.getAuxLinePositions = function(...args) 
          
        {
          //print("JS: RFont.prototype.getAuxLinePositions");
          
              return this.__PROXY__.getAuxLinePositions(...args);
            
        };
        
        // function 
        RFont.prototype.getAuxLinePositionsString = function(...args) 
          
        {
          //print("JS: RFont.prototype.getAuxLinePositionsString");
          
              return this.__PROXY__.getAuxLinePositionsString(...args);
            
        };
        
        // function 
        RFont.prototype.load = function(...args) 
          
        {
          //print("JS: RFont.prototype.load");
          
              return this.__PROXY__.load(...args);
            
        };
        
        // function 
        RFont.prototype.isLoaded = function(...args) 
          
        {
          //print("JS: RFont.prototype.isLoaded");
          
              return this.__PROXY__.isLoaded(...args);
            
        };
        
        // function 
        RFont.prototype.getGlyphNames = function(...args) 
          
        {
          //print("JS: RFont.prototype.getGlyphNames");
          
              return this.__PROXY__.getGlyphNames(...args);
            
        };
        
        // function 
        RFont.prototype.getGlyph = function(...args) 
          
        {
          //print("JS: RFont.prototype.getGlyph");
          
              return this.__PROXY__.getGlyph(...args);
            
        };
        
        // function 
        RFont.prototype.getShapeNames = function(...args) 
          
        {
          //print("JS: RFont.prototype.getShapeNames");
          
              return this.__PROXY__.getShapeNames(...args);
            
        };
        
        // function 
        RFont.prototype.getShape = function(...args) 
          
        {
          //print("JS: RFont.prototype.getShape");
          
              return this.__PROXY__.getShape(...args);
            
        };
        
        // function 
        RFont.prototype.getShapeName = function(...args) 
          
        {
          //print("JS: RFont.prototype.getShapeName");
          
              return this.__PROXY__.getShapeName(...args);
            
        };
        

      // static functions:
      RFont.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RFont.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RFont.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFont.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFont.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RFont.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      