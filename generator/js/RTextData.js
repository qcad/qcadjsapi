
      // auto generated
      //var self;

      // class constructor:
      function RTextData() {
        

        // should be RTextData_BaseJs.call(this, engine):
        //RTextData.prototype = new RTextData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTextData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RTextData);
            //}
          }
          else {
            qWarning("RTextData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 15) {
    
            self = this;
            wrapper = new RTextData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTextData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RTextData_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTextData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTextData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTextData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextData);
  }

  
  else {
    
        print("RTextData(): wrong number / type of arguments");
      
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

      //RTextData.prototype = new RTextData_BaseJs(engine);
      //RTextData.prototype = new RTextData_Wrapper(engine);
      RTextData.prototype = new Object();

      RTextData.prototype.toString = function() {
          //return "RTextData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTextData [JS]";
        };
      RTextData.getObjectType = function() {
        return RJSType_RTextData.getIdStatic();
      };

      RTextData.prototype.getObjectType = function() {
        return RJSType_RTextData.getIdStatic();
      };

      RTextData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTextData.getIdStatic()) {
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
RTextData.NoFlags = RTextData_Wrapper.NoFlags;
RTextData.Bold = RTextData_Wrapper.Bold;
RTextData.Italic = RTextData_Wrapper.Italic;
RTextData.Simple = RTextData_Wrapper.Simple;
RTextData.DimensionLabel = RTextData_Wrapper.DimensionLabel;
RTextData.Highlighted = RTextData_Wrapper.Highlighted;
RTextData.Backward = RTextData_Wrapper.Backward;
RTextData.UpsideDown = RTextData_Wrapper.UpsideDown;


      // functions:
      

      // static functions:
      

        // static function 
        RTextData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RTextData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RTextData);
  }

  
  else {
    
        print("RTextData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextData.getRtti = function() 
          
        {
          //print("JS: RTextData.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextData_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RTextData);
  }

  
  else {
    
        print("RTextData.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextData.escapeUnicode = function() 
          
        {
          //print("JS: RTextData.escapeUnicode");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextData_WrapperSingletonInstance.escapeUnicode(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextData);
  }

  
  else {
    
        print("RTextData.escapeUnicode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextData.hasProxy = function() 
          
        {
          //print("JS: RTextData.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextData_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, RTextData);
  }

  
  else {
    
        print("RTextData.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextData.toEscapedText = function() 
          
        {
          //print("JS: RTextData.toEscapedText");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RTextData_WrapperSingletonInstance.toEscapedText(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RTextData);
  }

  
  else {
    
        print("RTextData.toEscapedText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextData.toRichText = function() 
          
        {
          //print("JS: RTextData.toRichText");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextData_WrapperSingletonInstance.toRichText(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextData);
  }

  
  else {
    
        print("RTextData.toRichText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTextData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTextData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    