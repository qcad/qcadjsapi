
      // auto generated
      //var self;

      // class constructor:
      function RAttributeData() {
        

        // should be RAttributeData_BaseJs.call(this, engine):
        //RAttributeData.prototype = new RAttributeData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RAttributeData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RAttributeData);
            //}
          }
          else {
            qWarning("RAttributeData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RAttributeData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RAttributeData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RAttributeData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RAttributeData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RAttributeData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RAttributeData);
  }

  
  else {
    
        print("RAttributeData(): wrong number / type of arguments");
      
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

      //RAttributeData.prototype = new RAttributeData_BaseJs(engine);
      //RAttributeData.prototype = new RAttributeData_Wrapper(engine);
      RAttributeData.prototype = new Object();

      RAttributeData.prototype.toString = function() {
          //return "RAttributeData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RAttributeData [JS]";
        };
      RAttributeData.getObjectType = function() {
        return RJSType_RAttributeData.getIdStatic();
      };

      RAttributeData.prototype.getObjectType = function() {
        return RJSType_RAttributeData.getIdStatic();
      };

      RAttributeData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RAttributeData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RTextBasedData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: TextFlag
RAttributeData.NoFlags = RAttributeData_Wrapper.NoFlags;
RAttributeData.Bold = RAttributeData_Wrapper.Bold;
RAttributeData.Italic = RAttributeData_Wrapper.Italic;
RAttributeData.Simple = RAttributeData_Wrapper.Simple;
RAttributeData.DimensionLabel = RAttributeData_Wrapper.DimensionLabel;
RAttributeData.Highlighted = RAttributeData_Wrapper.Highlighted;
RAttributeData.Backward = RAttributeData_Wrapper.Backward;
RAttributeData.UpsideDown = RAttributeData_Wrapper.UpsideDown;


      // functions:
      

      // static functions:
      

        // static function 
        RAttributeData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RAttributeData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RAttributeData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RAttributeData);
  }

  
  else {
    
        print("RAttributeData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RAttributeData.getRtti = function() 
          
        {
          //print("JS: RAttributeData.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RAttributeData_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RAttributeData);
  }

  
  else {
    
        print("RAttributeData.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RAttributeData.escapeUnicode = function() 
          
        {
          //print("JS: RAttributeData.escapeUnicode");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RAttributeData_WrapperSingletonInstance.escapeUnicode(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RAttributeData);
  }

  
  else {
    
        print("RAttributeData.escapeUnicode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RAttributeData.hasProxy = function() 
          
        {
          //print("JS: RAttributeData.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RAttributeData_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, RAttributeData);
  }

  
  else {
    
        print("RAttributeData.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RAttributeData.toEscapedText = function() 
          
        {
          //print("JS: RAttributeData.toEscapedText");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RAttributeData_WrapperSingletonInstance.toEscapedText(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RAttributeData);
  }

  
  else {
    
        print("RAttributeData.toEscapedText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RAttributeData.toRichText = function() 
          
        {
          //print("JS: RAttributeData.toRichText");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RAttributeData_WrapperSingletonInstance.toRichText(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RAttributeData);
  }

  
  else {
    
        print("RAttributeData.toRichText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RAttributeData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RAttributeData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    