
      // auto generated
      //var self;

      // class constructor:
      function RDocument() {
        

        // should be RDocument_BaseJs.call(this, engine):
        //RDocument.prototype = new RDocument_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDocument.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDocument);
            //}
          }
          else {
            qWarning("RDocument.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RDocument_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDocument);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDocument);
  }

  
  else {
    
        print("RDocument(): wrong number / type of arguments");
      
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

      //RDocument.prototype = new RDocument_BaseJs(engine);
      //RDocument.prototype = new RDocument_Wrapper(engine);
      RDocument.prototype = new Object();

      RDocument.prototype.toString = function() {
          //return "RDocument [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDocument [JS]";
        };
      RDocument.getObjectType = function() {
        return RJSType_RDocument.getIdStatic();
      };

      RDocument.prototype.getObjectType = function() {
        return RJSType_RDocument.getIdStatic();
      };

      RDocument.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDocument.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RDocument.getClipboard = function() 
          
        {
          //print("JS: RDocument.getClipboard");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDocument_WrapperSingletonInstance.getClipboard(
                  
                );
              

        //copyProperties(this, wrapper, RDocument);
  }

  
  else {
    
        print("RDocument.getClipboard(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDocument.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDocument.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    