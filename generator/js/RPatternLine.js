
      // auto generated
      //var self;

      // class constructor:
      function RPatternLine() {
        

        // should be RPatternLine_BaseJs.call(this, engine):
        //RPatternLine.prototype = new RPatternLine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPatternLine.getIdStatic()))) {

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
            qWarning("RPatternLine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPatternLine_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPatternLine);
  }

  
  else {
    
        print("RPatternLine(): wrong number / type of arguments");
      
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

      //RPatternLine.prototype = new RPatternLine_BaseJs(engine);
      //RPatternLine.prototype = new RPatternLine_Wrapper(engine);
      RPatternLine.prototype = new Object();


      RPatternLine.prototype.toString = function() {
          //return "RPatternLine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPatternLine [JS]";
        };
      RPatternLine.getObjectType = function() {
        return RJSType_RPatternLine.getIdStatic();
      };

      RPatternLine.prototype.getObjectType = function() {
        return RJSType_RPatternLine.getIdStatic();
      };

      RPatternLine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPatternLine.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RPatternLine.prototype.getPainterPath = function(...args) 
          
        {
          //print("JS: RPatternLine.prototype.getPainterPath");
          
              return this.__PROXY__.getPainterPath(...args);
            
        };
    
        // function 
        RPatternLine.prototype.hasDots = function(...args) 
          
        {
          //print("JS: RPatternLine.prototype.hasDots");
          
              return this.__PROXY__.hasDots(...args);
            
        };
    
        // function 
        RPatternLine.prototype.getLines = function(...args) 
          
        {
          //print("JS: RPatternLine.prototype.getLines");
          
              return this.__PROXY__.getLines(...args);
            
        };
    
        // function 
        RPatternLine.prototype.getLength = function(...args) 
          
        {
          //print("JS: RPatternLine.prototype.getLength");
          
              return this.__PROXY__.getLength(...args);
            
        };
    
        // function 
        RPatternLine.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RPatternLine.prototype.getAngle");
          
              return this.__PROXY__.getAngle(...args);
            
        };
    
        // function 
        RPatternLine.prototype.getOffset = function(...args) 
          
        {
          //print("JS: RPatternLine.prototype.getOffset");
          
              return this.__PROXY__.getOffset(...args);
            
        };
    
        // function 
        RPatternLine.prototype.getBasePoint = function(...args) 
          
        {
          //print("JS: RPatternLine.prototype.getBasePoint");
          
              return this.__PROXY__.getBasePoint(...args);
            
        };
    
        // function 
        RPatternLine.prototype.getDashes = function(...args) 
          
        {
          //print("JS: RPatternLine.prototype.getDashes");
          
              return this.__PROXY__.getDashes(...args);
            
        };
    
        // function 
        RPatternLine.prototype.scale = function(...args) 
          
        {
          //print("JS: RPatternLine.prototype.scale");
          
              return this.__PROXY__.scale(...args);
            
        };
    
        // function 
        RPatternLine.prototype.rotate = function(...args) 
          
        {
          //print("JS: RPatternLine.prototype.rotate");
          
              return this.__PROXY__.rotate(...args);
            
        };
    

      // static functions:
      RPatternLine.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RPatternLine.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RPatternLine.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPatternLine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPatternLine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPatternLine.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      