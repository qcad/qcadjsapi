
      // auto generated
      //var self;

      // class constructor:
      function RTextLayout() {
        

        // should be RTextLayout_BaseJs.call(this, engine):
        //RTextLayout.prototype = new RTextLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTextLayout.getIdStatic()))) {

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
            qWarning("RTextLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RTextLayout_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextLayout);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RTextLayout_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextLayout);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTextLayout_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextLayout);
  }

  
  else {
    
        print("RTextLayout(): wrong number / type of arguments");
      
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

      //RTextLayout.prototype = new RTextLayout_BaseJs(engine);
      //RTextLayout.prototype = new RTextLayout_Wrapper(engine);
      RTextLayout.prototype = new Object();


      RTextLayout.prototype.toString = function() {
          //return "RTextLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTextLayout [JS]";
        };
      RTextLayout.getObjectType = function() {
        return RJSType_RTextLayout.getIdStatic();
      };

      RTextLayout.prototype.getObjectType = function() {
        return RJSType_RTextLayout.getIdStatic();
      };

      RTextLayout.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTextLayout.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RTextLayout.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: RTextLayout.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
        
        // function 
        RTextLayout.prototype.isTTF = function(...args) 
          
        {
          //print("JS: RTextLayout.prototype.isTTF");
          
              return this.__PROXY__.isTTF(...args);
            
        };
        
        // function 
        RTextLayout.prototype.hasPainterPath = function(...args) 
          
        {
          //print("JS: RTextLayout.prototype.hasPainterPath");
          
              return this.__PROXY__.hasPainterPath(...args);
            
        };
        
        // function 
        RTextLayout.prototype.getLayout = function(...args) 
          
        {
          //print("JS: RTextLayout.prototype.getLayout");
          
              return this.__PROXY__.getLayout(...args);
            
        };
        
        // function 
        RTextLayout.prototype.getTransform = function(...args) 
          
        {
          //print("JS: RTextLayout.prototype.getTransform");
          
              return this.__PROXY__.getTransform(...args);
            
        };
        
        // function 
        RTextLayout.prototype.getColor = function(...args) 
          
        {
          //print("JS: RTextLayout.prototype.getColor");
          
              return this.__PROXY__.getColor(...args);
            
        };
        
        // function 
        RTextLayout.prototype.getText = function(...args) 
          
        {
          //print("JS: RTextLayout.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
        
        // function 
        RTextLayout.prototype.getFont = function(...args) 
          
        {
          //print("JS: RTextLayout.prototype.getFont");
          
              return this.__PROXY__.getFont(...args);
            
        };
        
        // function 
        RTextLayout.prototype.isBold = function(...args) 
          
        {
          //print("JS: RTextLayout.prototype.isBold");
          
              return this.__PROXY__.isBold(...args);
            
        };
        
        // function 
        RTextLayout.prototype.isItalic = function(...args) 
          
        {
          //print("JS: RTextLayout.prototype.isItalic");
          
              return this.__PROXY__.isItalic(...args);
            
        };
        
        // function 
        RTextLayout.prototype.isUnderline = function(...args) 
          
        {
          //print("JS: RTextLayout.prototype.isUnderline");
          
              return this.__PROXY__.isUnderline(...args);
            
        };
        
        // function 
        RTextLayout.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RTextLayout.prototype.getHeight");
          
              return this.__PROXY__.getHeight(...args);
            
        };
        
        // function 
        RTextLayout.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RTextLayout.prototype.getBoundingBox");
          
              return this.__PROXY__.getBoundingBox(...args);
            
        };
        

      // static functions:
      RTextLayout.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RTextLayout.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RTextLayout.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTextLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTextLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RTextLayout.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      