
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
              
                  copyProperties(this, wrapper, RFont);
                
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
          
            copyProperties(this, wrapper, RFont);
          

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
          
            copyProperties(this, wrapper, RFont);
          

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
      

      // static functions:
      

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

      